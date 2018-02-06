import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "@shared/shared.module";
import { MaterialModule } from "../material";

import { containers } from "./containers";

const COMPONENTS: any = [...containers];

@NgModule({
  imports: [CommonModule, SharedModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class AuthModule {}
