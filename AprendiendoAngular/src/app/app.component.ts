import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Diego Arroyo';
  public mostrarVideojuegos: boolean = true;

  ocultarVideoJuegos(value: boolean){
    this.mostrarVideojuegos = value;
  }
}
