import { LayoutActions, LayoutActionTypes } from "../actions";

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false
};

export function reducer(
  state: State = initialState,
  action: LayoutActions
): State {
  switch (action.type) {
    case LayoutActionTypes.OpenSidenav: {
      return {
        ...state,
        showSidenav: true
      };
    }

    case LayoutActionTypes.CloseSidenav: {
      return {
        ...state,
        showSidenav: false
      };
    }

    default: {
      return state;
    }
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
