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

  onSubmit() {
    console.log("Evento submit lanzado!!");
    console.log(this.usuario);
    
  }
}
