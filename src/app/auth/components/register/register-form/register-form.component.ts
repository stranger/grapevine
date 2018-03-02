import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Output,
  SimpleChanges,
  Input,
  EventEmitter,
  ChangeDetectorRef
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

import { equalValidator, MyErrorStateMatcher } from "./validators";

import { RegisterModel, ErrorModel } from "@auth/models/user.model";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent implements OnInit {
  @Output() registerSubmit: EventEmitter<RegisterModel> = new EventEmitter();
  @Input() authError: ErrorModel;

  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private changeRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      emailGroup: this.fb.group(
        {
          email: ["", [Validators.email]],
          emailConfirm: ["", Validators.required]
        },
        { validator: equalValidator("email", "emailConfirm") }
      ),
      passwordGroup: this.fb.group(
        {
          password: ["", [Validators.required, Validators.minLength(6)]],
          passwordConfirm: ["", Validators.required]
        },
        { validator: equalValidator("password", "passwordConfirm") }
      )
    });
  }

  ngOnChanges(change: SimpleChanges) {
    if (this.registerForm && change.authError) {
      this.setRegisterError(this.authError.code);
    }
  }

  setRegisterError(code: string) {
    switch (code) {
      case "auth/email-already-in-use": {
        this.registerForm
          .get("emailGroup.email")
          .setErrors({ emailInUse: true });
        this.authError.message = "The email address is already in use";
        break;
      }
      case "auth/invalid-email": {
        this.registerForm
          .get("emailGroup.email")
          .setErrors({ emailInvalid: true });
        break;
      }
      case "auth/weak-password": {
        this.registerForm
          .get("passwordGroup.password")
          .setErrors({ passwordWeak: true });
        break;
      }
    }
  }

  get fireAuthError() {
    return this.authError.message;
  }

  onSubmit() {
    this.registerSubmit.emit({
      email: this.registerForm.get("emailGroup.email").value,
      password: this.registerForm.get("passwordGroup.password").value
    });
  }
}
