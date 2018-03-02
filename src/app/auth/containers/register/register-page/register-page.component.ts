import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  AfterViewInit
} from "@angular/core";

import { Store } from "@ngrx/store";
import * as fromAuth from "@auth/store/reducers";
import * as fromAuthActions from "@auth/store/actions";

import { RegisterModel, ErrorModel } from "@auth/models/user.model";

@Component({
  selector: "app-register",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent implements AfterViewInit {
  public authError: ErrorModel;

  workplaceAdjective = "fun";

  constructor(
    private store: Store<fromAuth.State>,
    private changeRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.store.select(fromAuth.getRegisterFormError).subscribe(error => {
      this.authError = { ...error };
      this.changeRef.detectChanges();
    });
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

  registerSubmit(data: RegisterModel) {
    this.store.dispatch(new fromAuthActions.SignUp(data));
  }
}
