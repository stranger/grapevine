import { Action } from "@ngrx/store";

export enum LayoutActionTypes {
  WindowSize = "[Layout] Window resize",
  OpenSidenav = "[Layout] Open sidenav",
  CloseSidenav = "[Layout] Close sidenav"
}

export class WindowSize implements Action {
  constructor(public payload: number) {}
  readonly type = LayoutActionTypes.WindowSize;
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}

export type LayoutActions = WindowSize | OpenSidenav | CloseSidenav;
