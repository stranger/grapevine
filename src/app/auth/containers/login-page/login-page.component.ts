import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import * as fromAuth from "../../store/reducers";
import * as fromAuthActions from "../../store/actions";

import { AuthenticateModel } from "../../models/user.model";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  loginSubmit(user: AuthenticateModel) {
    this.store.dispatch(new fromAuthActions.LogIn(user));
  }
}
