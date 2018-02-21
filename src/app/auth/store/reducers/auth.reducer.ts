import { AuthActions, AuthActionTypes } from "../actions";
import { UserModel } from "../../models/user.model";

export interface State {
  user: UserModel | null;
  loggedIn: boolean;
  error: string;
}

export const initialState: State = {
  user: null,
  loggedIn: false,
  error: null
};

export function reducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionTypes.LogInSuccess: {
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        error: null
      };
    }

    case AuthActionTypes.LogInFail: {
      return {
        ...state,
        user: null,
        loggedIn: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getUser = (state: State) => state.user;
export const getLoggedIn = (state: State) => state.loggedIn;
export const getError = (state: State) => state.error;
