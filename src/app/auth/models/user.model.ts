export interface UserModel {
  email: string;
}

export interface RegisterModel {
  email: string;
  password: string;
  grapevine: string;
}

export interface AuthenticateModel {
  email: string;
  password: string;
}
