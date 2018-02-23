import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  SimpleChanges,
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

import { equalValidator, MyErrorStateMatcher } from "./validators";

import { RegisterModel } from "../../models/user.model";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit, OnChanges {
  @Output() user: EventEmitter<RegisterModel> = new EventEmitter();
  @Input() errorMsg: { err: string };

  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
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
      },
      { updateOn: "blur" }
    );
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.errorMsg) {
      this.registerForm.get("emailGroup.email").setErrors({ authError: true });
    }
  }

  onSubmit() {
    this.user.emit({
      email: this.registerForm.get("emailGroup.email").value,
      password: this.registerForm.get("passwordGroup.password").value
    });
  }
}
