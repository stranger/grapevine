import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { fromPromise } from "rxjs/observable/fromPromise";
import { of } from "rxjs/observable/of";
import { tap, map, switchMap, mergeMap, catchError } from "rxjs/operators";

import * as fromAuth from "../actions";
import { AuthService } from "../../services/auth.service";

import {
  RegisterModel,
  AuthenticateModel,
  UserModel,
  ErrorModel
} from "../../models/user.model";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router, private authService: AuthService) {}

  @Effect()
  logIn$ = this.actions$.pipe(
    ofType(fromAuth.AuthActionTypes.LogIn),
    map((action: fromAuth.LogIn) => action.payload),
    switchMap((auth: AuthenticateModel) =>
      fromPromise(this.authService.logIn(auth)).pipe(
        map((user: UserModel) => new fromAuth.LogInSuccess(user)),
        catchError(err => {
          const { code, message } = err;
          return of(new fromAuth.LogInFail({ code, message }));
        })
      )
    )
  );

  @Effect()
  logInSuccess$ = this.actions$.pipe(
    ofType(fromAuth.AuthActionTypes.LogInSuccess),
    tap(() => this.router.navigate([''])),

  )

  @Effect()
  register$ = this.actions$.pipe(
    ofType(fromAuth.AuthActionTypes.SignUp),
    map((action: fromAuth.SignUp) => action.payload),
    switchMap((auth: RegisterModel) =>
      fromPromise(this.authService.signUp(auth)).pipe(
        mergeMap((user: UserModel) => [
          new fromAuth.SignUpSuccess(),
          new fromAuth.LogInSuccess(user)
        ]),
        catchError(err => of(new fromAuth.SignUpFail(err)))
      )
    )
  );
}
