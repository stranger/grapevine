import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs/Observable";

import { tap } from "rxjs/operators";

import * as fromAuth from "@auth/store";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store
      .select(fromAuth.getLoggedIn)
      .pipe(tap(loggedIn => (loggedIn ? true : false)));
  }
}
