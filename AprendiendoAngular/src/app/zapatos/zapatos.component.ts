import { Component, OnInit } from "@angular/core";
import { Zapato } from "../models/zapato";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'zapatos',
    templateUrl: './zapatos.component.html',
    imports: [CommonModule]
})
export class ZapatosComponent implements OnInit {
    public titulo: string = 'Componente de zapatos';
    public zapatos: Array<Zapato>;
    public marcas: String[];
    public color: string;

    constructor(){
        this.color = 'yellow';
        this.marcas = new Array;
        this.zapatos = [
            new Zapato('Air Force', 2000, 'Nike', 'Blanco', true),
            new Zapato('Clasicos', 2500, 'Puma', 'Blanco', true),
            new Zapato('Mercurial', 2000, 'Nike', 'Rojo', false),
        ];
    }

    ngOnInit(): void {
        console.log(this.zapatos);

        this.getMarcas();
    }

    getMarcas() {
        this.zapatos.forEach((zapato, index) => {
            if (this.marcas.indexOf(zapato.marca) < 0) {
                this.marcas.push(zapato.marca);                
            }
        });
        console.log(this.marcas);
    }
}