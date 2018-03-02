import { Action } from "@ngrx/store";
import {
  RegisterModel,
  AuthenticateModel,
  UserModel,
  ErrorModel
} from "../../models/user.model";

export enum AuthActionTypes {
  LogIn = "[Auth] Log in",
  LogInSuccess = "[Auth] Log in success",
  LogInFail = "[Auth] Log in fail",
  SignUp = "[Auth] Sign up",
  SignUpSuccess = "[Auth] Sign up success",
  SignUpFail = "[Auth] Sign up fail"
}
export class LogIn implements Action {
  readonly type = AuthActionTypes.LogIn;

  constructor(public payload: AuthenticateModel) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LogInSuccess;

  constructor(public payload: UserModel) {}
}

export class LogInFail implements Action {
  readonly type = AuthActionTypes.LogInFail;

  constructor(public payload: ErrorModel) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SignUp;

  constructor(public payload: RegisterModel) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SignUpSuccess;
}

export class SignUpFail implements Action {
  readonly type = AuthActionTypes.SignUpFail;

  constructor(public payload: ErrorModel) {}
}

export type AuthActions =
  | LogIn
  | LogInSuccess
  | LogInFail
  | SignUp
  | SignUpSuccess
  | SignUpFail;
