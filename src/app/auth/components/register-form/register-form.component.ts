import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControlName,
  Validators,
  FormControl
} from "@angular/forms";

import { Store, select } from "@ngrx/store";
import * as fromAuth from "@auth/store/reducers";

import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { equalValidator, MyErrorStateMatcher } from "./validators";

import { RegisterModel } from "../../models/user.model";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent implements OnInit {
  @Output() submitUser: EventEmitter<RegisterModel> = new EventEmitter();

  registerForm: FormGroup;
  registerErrorMsg: string;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private store: Store<fromAuth.State>) {
    this.store.select(fromAuth.getRegisterPageError).subscribe(msg => {
      if (this.registerForm) {
        this.registerForm
          .get("emailGroup.email")
          .setErrors({ authError: true });
      }
      this.registerErrorMsg = msg;
    });
  }

  ngOnInit() {
    // If you type after form has been submitted, reset error message and allow user to submit form again
    const fireAuthValidator = (c: FormControl) => {
      if (this.registerErrorMsg) {
        this.registerErrorMsg = null;
      }
      return null;
    };

    this.registerForm = this.fb.group(
      {
        emailGroup: this.fb.group(
          {
            email: ["", [Validators.email, fireAuthValidator]],
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
      },
      { updateOn: "blur" }
    );
  }

  onSubmit() {
    this.submitUser.emit({
      grapevine: "wine",
      email: this.registerForm.get("emailGroup.email").value,
      password: this.registerForm.get("passwordGroup.password").value
    });
  }
}
