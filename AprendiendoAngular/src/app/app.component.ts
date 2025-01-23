import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'Diego Arroyo';
  public descripcion: string;
  public mostrarVideojuegos: boolean = true;
  public config;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarVideoJuegos(value: boolean){
    this.mostrarVideojuegos = value;
  }
}
