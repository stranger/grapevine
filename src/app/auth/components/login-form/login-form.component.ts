import {
  Component,
  ChangeDetectionStrategy,
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

import { AuthenticateModel } from "../../models/user.model";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  @Output() user: EventEmitter<AuthenticateModel> = new EventEmitter();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  onSubmit() {
    this.user.emit({
      email: this.loginForm.get("email").value,
      password: this.loginForm.get("password").value
    });
  }
}
