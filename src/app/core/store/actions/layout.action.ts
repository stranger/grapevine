import { Action } from "@ngrx/store";

export enum LayoutActionTypes {
  windowSize = "[Layout] Window resize",
  openSidenav = "[Layout] Open sidenav",
  closeSidenav = "[Layout] Close sidenav"
}

export class WindowSize implements Action {
  constructor(public payload: number) {}
  readonly type = LayoutActionTypes.windowSize;
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.openSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.closeSidenav;
}

export type LayoutActions = WindowSize | OpenSidenav | CloseSidenav;
