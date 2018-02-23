import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Store, select } from "@ngrx/store";

import { Observable, Subscription, Subject } from "rxjs";
import { debounceTime, tap } from "rxjs/operators";

import * as fromLayout from "@core/store";
import * as fromRoot from "@app/store/reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  private subscription: Subscription;

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.select(fromLayout.getShowSidenav);
  }

  openSidenav() {
    this.store.dispatch(new fromLayout.OpenSidenav());
  }

  closeSidenav() {
    this.store.dispatch(new fromLayout.CloseSidenav());
  }
}
