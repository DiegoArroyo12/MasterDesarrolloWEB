import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss'
})
export class HijoComponent {

  @Input() anchura!: number;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() {
    this.autor = {
      nombre: "Diego Arroyo",
      website: "https://diegoarroyo.netlify.app"
    };
  }

  lanzar(event: any) {
    console.log(event);
    this.conseguirAutor.emit(this.autor);
  }
}
