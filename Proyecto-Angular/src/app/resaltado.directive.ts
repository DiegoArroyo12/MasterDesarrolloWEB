import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnInit{

  constructor(public el: ElementRef) { 
    
  }

  ngOnInit(): void {
    var element = this.el.nativeElement;
    element.style.background = "blue";
    element.style.padding = "2rem";
    element.style.marginTop = "1.5rem";
    element.style.color = "white";

    element.innerText = element.innerText.toUpperCase().replace("CONTACTO", "contacto");
  }
}
