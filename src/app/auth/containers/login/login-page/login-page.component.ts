import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit
} from "@angular/core";

import { Store } from "@ngrx/store";
import * as fromAuth from "@auth/store/reducers";
import * as fromAuthActions from "@auth/store/actions";

import { AuthenticateModel, ErrorModel } from "@auth/models/user.model";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  public authError: ErrorModel;

  constructor(
    private store: Store<fromAuth.State>,
    private changeRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.store.select(fromAuth.getError).subscribe(error => {
      this.authError = { ...error };
      this.changeRef.detectChanges();
    });
  }

  loginSubmit(data: AuthenticateModel) {
    this.store.dispatch(new fromAuthActions.LogIn(data));
  }
}
