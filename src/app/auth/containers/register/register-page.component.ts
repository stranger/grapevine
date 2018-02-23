import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  AfterViewInit
} from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs/Observable";

import * as fromAuth from "../../store/reducers";
import * as fromAuthActions from "../../store/actions";

import { RegisterModel } from "../../models/user.model";

@Component({
  selector: "app-register",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent implements AfterViewInit, OnInit {
  registerErrorMsg$: { err: string };
  workplaceAdjective = "fun";

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    this.store
      .select(fromAuth.getRegisterPageError)
      .subscribe(err => (this.registerErrorMsg$ = { err }));
  }

  ngAfterViewInit() {
    const workplaceAdjectiveArray = ["fun", "safe", "healthy", "clean"];
    let i = 1;
    const adjectiveLoop = () => {
      setTimeout(() => {
        if (i === workplaceAdjectiveArray.length) {
          i = 0;
        }
        this.workplaceAdjective = workplaceAdjectiveArray[i];
        i++;
        adjectiveLoop();
      }, 5000);
    };
    adjectiveLoop();
  }

  formSubmit(user: RegisterModel) {
    this.store.dispatch(new fromAuthActions.SignUp(user));
  }
}
