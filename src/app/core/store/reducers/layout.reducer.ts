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
    case LayoutActionTypes.windowSize: {
      const windowSize = action.payload;
      return {
        ...state,
        windowSize
      };
    }

    case LayoutActionTypes.openSidenav: {
      return {
        ...state,
        showSidenav: true
      };
    }

    case LayoutActionTypes.closeSidenav: {
      return {
        ...state,
        showSidenav: false
      };
    }
  }

  return state;
}

export const getWindowSize = (state: State) => state.windowSize;
export const getShowSidenav = (state: State) => state.showSidenav;
