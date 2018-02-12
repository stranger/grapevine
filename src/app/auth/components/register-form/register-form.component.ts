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

import { equalValidator, MyErrorStateMatcher } from "./validators";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        emailGroup: this.fb.group(
          {
            email: ["", Validators.email],
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
}
