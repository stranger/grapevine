import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { SharedModule } from "@shared/shared.module";
import { MaterialModule } from "../material";

import { reducers } from "./store/reducers";
import { AuthEffects } from "./store/effects";

import { AuthService } from "./services/auth.service";
import { containers } from "./containers";

const COMPONENTS: any = [...containers];

@NgModule({
  imports: [CommonModule, SharedModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthRootModule,
      providers: [AuthService]
    };
  }
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("auth", reducers),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthRootModule {}
