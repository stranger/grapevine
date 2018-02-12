import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatIconModule
} from "@angular/material";

const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatIconModule
];

@NgModule({
  imports: [CommonModule, ...MODULES],
  exports: MODULES
})
export class MaterialModule {}
