import { Component, OnInit } from "@angular/core";
import { Zapato } from "../models/zapato";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ZapatosService } from "../services/zapatos.service";

@Component({
    selector: 'zapatos',
    templateUrl: './zapatos.component.html',
    imports: [CommonModule, FormsModule],
    providers: [ZapatosService]
})
export class ZapatosComponent implements OnInit {
    public titulo: string = 'Componente de zapatos';
    public zapatos: Array<Zapato>;
    public marcas: String[];
    public color: string;
    public miMarca: string;

    constructor(
        private _zapatosService: ZapatosService
    ){
        this.miMarca = 'Fila';
        this.color = 'yellow';
        this.marcas = new Array;
        this.zapatos = this._zapatosService.getZapatos();
    }

    ngOnInit(): void {
        alert(this._zapatosService.getTexto());

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

    getMarca() {
        alert(this.miMarca)
    }

    addMarca() {
        this.marcas.push(this.miMarca);
    }

    borrarMarca(index: number) {
        //delete this.marcas[index];
        this.marcas.splice(index, 1);
    }

    onBlur(){
        console.log('Ha salido del input.');
    }

    mostrarPalabra(){
        alert(this.miMarca);
    }
}