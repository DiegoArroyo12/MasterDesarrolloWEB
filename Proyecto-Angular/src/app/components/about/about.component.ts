import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() { 
    this.title = "Diego Arroyo";
    this.subtitle = "Desarrollador Web";
    this.email = "diego@gmail.com";
  }
}
