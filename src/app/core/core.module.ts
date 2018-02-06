import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { MaterialModule } from "../material";
import { components } from "./components";
import { containers } from "./containers";

const CORE_COMPONENTS: any = [...components, ...containers];

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, MaterialModule],
  declarations: CORE_COMPONENTS,
  exports: CORE_COMPONENTS
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only"
      );
    }
  }
}
