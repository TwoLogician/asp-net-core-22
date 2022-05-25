import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AppService } from "./app.service"
import { httpInterceptorProviders } from "./http-interceptors"
import { services } from "./services"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [AppService, httpInterceptorProviders, ...services],
  bootstrap: [AppComponent]
})
export class AppModule { }
