import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';

import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegisterModule { }
