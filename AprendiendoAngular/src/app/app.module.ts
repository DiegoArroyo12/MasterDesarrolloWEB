import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { ZapatosComponent } from "./zapatos/zapatos.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoJuegoComponent,
    ZapatosComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
