import { Component, OnInit, AfterViewInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControlName,
  Validators,
  FormControl
} from "@angular/forms";

import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  emailValue: string;

  equalValidator = (value: string) => {
    return (c: FormControl) => {
      console.log(value);
      return null;
    };
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        emailGroup: this.fb.group({
          email: ["", [Validators.required, Validators.email]],
          emailConfirm: ["", this.equalValidator(this.emailValue)]
        }),
        passwordGroup: this.fb.group({
          password: ["", [Validators.required, Validators.minLength(6)]],
          passwordConfirm: [""]
        })
      },
      { updateOn: "blur" }
    );

    // Workaround due to not being able to pass in the registerForm control value as parameter (tried everything)
    this.registerForm
      .get("emailGroup.email")
      .valueChanges.subscribe(value => (this.emailValue = value));
  }

  getEmailError() {
    const control = this.registerForm.get("emailGroup.email");

    if (control.hasError("required")) {
      return "An email address is required";
    } else if (control.hasError("email")) {
      return "Please enter a valid email";
    }
  }

  getPasswordError() {
    const control = this.registerForm.get("passwordGroup.password");

    if (control.hasError("required")) {
      return "A password is required";
    } else if (control.hasError("minlength")) {
      return "Your password has to be at least 6 characters long";
    }
  }
}
