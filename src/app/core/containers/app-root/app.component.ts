import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  HostBinding,
  HostListener
} from "@angular/core";

import { Store, select } from "@ngrx/store";

import { Observable, Subscription, Subject } from "rxjs";
import { debounceTime, tap } from "rxjs/operators";

import * as fromLayout from "@core/store";
import * as fromRoot from "@app/store/reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit, OnInit {
  windowSize$: Observable<number>;
  showSidenav$: Observable<boolean>;
  private resizeWindow = new Subject();
  private subscription: Subscription;

  // Show a dark background when sidenav is visible
  @HostBinding("class.menu--visible") private isVisible;

  constructor(private store: Store<fromRoot.State>) {
    this.windowSize$ = this.store.select(fromLayout.getWindowSize);
    this.showSidenav$ = this.store.select(fromLayout.getShowSidenav);
  }

  ngOnInit() {
    // Convert showSidenav observable boolean to boolean
    this.showSidenav$.subscribe((bool: boolean) => (this.isVisible = bool));

    this.subscription = this.resizeWindow
      .pipe(debounceTime(100))
      .subscribe((e: Window) =>
        this.store.dispatch(new fromLayout.WindowSize(e.innerWidth))
      );
  }

  ngAfterViewInit() {
    this.store.dispatch(new fromLayout.WindowSize(window.innerWidth));
  }

  @HostListener("window:resize", ["$event.target"])
  onResize(event: Window) {
    this.resizeWindow.next(event);
  }

  openSidenav() {
    this.store.dispatch(new fromLayout.OpenSidenav());
  }

  closeSidenav() {
    this.store.dispatch(new fromLayout.CloseSidenav());
  }
}
