import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { ZapatosComponent } from "./zapatos/zapatos.component";
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    ContactoComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoJuegoComponent,
    ZapatosComponent,
    FormsModule,
    HttpClientModule,
    CalculadoraPipe
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
