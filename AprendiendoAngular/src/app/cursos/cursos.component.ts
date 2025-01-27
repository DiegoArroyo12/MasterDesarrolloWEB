import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: false,
  
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  componente: string = 'ng g component <nombreComponente>';
  public nombre: string = '';
  public apellido: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){  }

  ngOnInit(){
    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
      this.apellido = params['apellido'];
      //this.followers = params['followers']; El '+' es para convertirlo a number
      console.log(this.nombre);
    });
  }
}
