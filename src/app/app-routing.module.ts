import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "@core/containers";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "create",
    loadChildren: "./auth/containers/register/register.module#RegisterModule"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
