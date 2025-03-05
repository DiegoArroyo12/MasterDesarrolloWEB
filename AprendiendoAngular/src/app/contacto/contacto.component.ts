import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  standalone: false,
  
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;

  constructor() {
    this.usuario = new ContactoUsuario('', '', '', '')
  }

  ngOnInit(): void {
      
  }

  onSubmit(form: any) {
    console.log("Evento submit lanzado!!");
    console.log(this.usuario);
    /* Resetea a null los elementos del formulario */
    form.reset();
  }
}
