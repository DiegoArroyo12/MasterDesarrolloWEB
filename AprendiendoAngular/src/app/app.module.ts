import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoJuegoComponent } from './videojuego/videojuego.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoJuegoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
