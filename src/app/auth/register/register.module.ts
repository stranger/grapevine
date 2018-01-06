import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { MatInputModule, MatButtonModule } from '@angular/material';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegisterModule { }
