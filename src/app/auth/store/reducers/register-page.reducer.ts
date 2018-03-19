import { AuthActions, AuthActionTypes } from "../actions";
import { UserModel, ErrorModel } from "../../models/user.model";

export interface State {
  error: ErrorModel;
  pending: boolean;
}

export const initialState: State = {
  error: {
    code: null,
    message: null
  },
  pending: false
};

export function reducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionTypes.SignUp: {
      return {
        ...state,
        error: {
          code: null,
          message: null
        },
        pending: true
      };
    }

    case AuthActionTypes.SignUpSuccess: {
      return {
        ...state,
        error: {
          code: null,
          message: null
        },
        pending: false
      };
    }

    case AuthActionTypes.SignUpFail: {
      return {
        ...state,
        error: action.payload,
        pending: false
      };
    }

    default: {
      return state;
    }
  }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
