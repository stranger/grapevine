import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/Observable/errorobservable";
import { of } from "rxjs/observable/of";
import { _throw } from "rxjs/observable/throw";

import {
  RegisterModel,
  AuthenticateModel,
  UserModel
} from "../models/user.model";

@Injectable()
export class AuthService {
  constructor(private fireAuth: AngularFireAuth) {}

  logIn(user: AuthenticateModel) {
    return this.fireAuth.auth.setPersistence("session").then(() => {
      return this.fireAuth.auth
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => user.email)
        .catch(err => err.message);
    });
  }

  signUp(user: RegisterModel): Promise<UserModel> {
    return new Promise((resolve, reject) =>
      this.fireAuth.auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
          resolve({ email: user.email });
        })
        .catch(err => reject(err.message))
    );
  }
}
