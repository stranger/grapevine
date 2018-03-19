export interface UserModel {
  email: string;
  uid: string;
}

export interface RegisterModel {
  email: string;
  password: string;
}

export interface AuthenticateModel {
  email: string;
  password: string;
}

export interface ErrorModel {
  code: string;
  message: string;
}
