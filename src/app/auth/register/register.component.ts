import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  registerForm: FormGroup;
  workplaceAdjective = 'fun';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ]
    }, { updateOn: 'blur' });
  }

  ngAfterViewInit() {
    const workplaceAdjectiveArray = ['fun', 'safe', 'healthy', 'clean'];
    let i = 1;
    const adjectiveLoop = () => {
      setTimeout(() => {
        if (i > workplaceAdjectiveArray.length - 1) {
          i = 0;
        }
        this.workplaceAdjective = workplaceAdjectiveArray[i];
        i++;
        adjectiveLoop();
      }, 5000);
    };
    adjectiveLoop();
  }

  getEmailError() {
    if (this.registerForm.controls['email'].hasError('required')) {
      return 'An email address is required';
    } else if (this.registerForm.controls['email'].hasError('email')) {
      return 'Please enter a valid email';
    }
  }

  getPasswordError() {
    if (this.registerForm.controls['password'].hasError('required')) {
      return 'A password is required';
    } else if (this.registerForm.controls['password'].hasError('minlength')) {
      return 'Your password has to be at least 6 characters';
    }
  }

}
