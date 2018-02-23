import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromLayout from "./layout.reducer";

export { reducer, State } from "./layout.reducer";

export const getLayoutState = createFeatureSelector<fromLayout.State>("layout");

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
