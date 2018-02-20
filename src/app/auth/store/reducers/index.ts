import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from "@ngrx/store";

import * as fromAuth from "./auth.reducer";
import * as fromRegister from "./register-page.reducer";

interface AuthState {
  status: fromAuth.State;
  RegisterPage: fromRegister.State;
}

export interface State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  status: fromAuth.reducer,
  RegisterPage: fromRegister.reducer
};

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const selectAuthStatus = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getUser = createSelector(selectAuthStatus, fromAuth.getUser);
export const getLoggedIn = createSelector(
  selectAuthStatus,
  fromAuth.getLoggedIn
);
export const getError = createSelector(selectAuthStatus, fromAuth.getError);

export const selectRegisterPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.RegisterPage
);

export const getRegisterPageError = createSelector(
  selectRegisterPageState,
  fromRegister.getError
);
export const getRegisterPagePending = createSelector(
  selectRegisterPageState,
  fromRegister.getPending
);
