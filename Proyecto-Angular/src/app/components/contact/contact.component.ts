import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { HijoComponent } from "../hijo/hijo.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [HijoComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  public widthSlider!: number;
  public anchuraSlider!: any;

  constructor() {}

  ngOnInit(): void {

  }

  cargarSlider() {
    this.anchuraSlider = this.widthSlider;
  }

  resetearSlider() {
    this.anchuraSlider = false;
  }
}
