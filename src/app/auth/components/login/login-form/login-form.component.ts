import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  Output,
  Input,
  EventEmitter
} from "@angular/core";

import {
  FormBuilder,
  FormGroup,
  FormControlName,
  Validators,
  FormControl
} from "@angular/forms";

import { Store } from "@ngrx/store";
import * as fromAuth from "@auth/store/reducers";
import * as fromAuthActions from "@auth/store/actions";

import { AuthenticateModel, ErrorModel } from "@auth/models/user.model";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit, OnChanges {
  @Output() loginSubmit: EventEmitter<AuthenticateModel> = new EventEmitter();
  @Input() authError: ErrorModel;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.email]],
      password: ["", [Validators.required]]
    });
  }

  ngOnChanges(change: SimpleChanges) {
    if (this.loginForm && change.authError) {
      this.setLoginError(this.authError.code);
    }
  }

  setLoginError(code: string) {
    switch (code) {
      case "auth/wrong-password": {
        this.loginForm.get("password").setErrors({ passwordWrong: true });
        break;
      }
      case "auth/invalid-email": {
        this.loginForm.get("email").setErrors({ emailInvalid: true });
        break;
      }
      case "auth/user-not-found": {
        this.loginForm.get("email").setErrors({ emailNotFound: true });
        break;
      }
      case "auth/user-disabled": {
        this.loginForm.get("email").setErrors({ emailDisabled: true });
        break;
      }
    }
  }

  get fireAuthError() {
    return this.authError.message;
  }

  onSubmit() {
    this.loginSubmit.emit({
      email: this.loginForm.get("email").value,
      password: this.loginForm.get("password").value
    });
  }
}
