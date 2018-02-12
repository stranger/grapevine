import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { environment } from "@env/environment";
import {
  reducers,
  metaReducers,
  CustomRouterStateSerializer
} from "./store/reducers";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./core/containers/app-root/app.component";

import { CoreModule } from "./core";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: "router"
    }),
    StoreDevtoolsModule.instrument({
      name: "Ngrx store",
      logOnly: environment.production
    }),
    CoreModule,
    AppRoutingModule
  ],
  declarations: [],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
