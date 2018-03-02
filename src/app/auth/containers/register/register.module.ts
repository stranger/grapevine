import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "@shared/shared.module";
import { MaterialModule } from "@material/material.module";

import { RegisterPageComponent } from "./register-page/register-page.component";
import { RegisterFormComponent } from "../../components/register/register-form/register-form.component";

const routes: Routes = [
  {
    path: "",
    component: RegisterPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ],
  declarations: [RegisterPageComponent, RegisterFormComponent]
})
export class RegisterModule {}
