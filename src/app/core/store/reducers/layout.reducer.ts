import { LayoutActions, LayoutActionTypes } from "../actions";

export interface State {
  windowSize: number;
  showSidenav: boolean;
}

const initialState: State = {
  windowSize: null,
  showSidenav: false
};

export function reducer(
  state: State = initialState,
  action: LayoutActions
): State {
  switch (action.type) {
    case LayoutActionTypes.WindowSize: {
      const windowSize = action.payload;
      return {
        ...state,
        windowSize
      };
    }

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

export const getWindowSize = (state: State) => state.windowSize;
export const getShowSidenav = (state: State) => state.showSidenav;
