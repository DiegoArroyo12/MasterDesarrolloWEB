import { Injectable } from "@angular/core";
import { Zapato } from "../models/zapato";

@Injectable()
export class ZapatosService {
    public zapatos: Array<Zapato>;

    constructor(){
        this.zapatos = [
            new Zapato('Air Force', 2000, 'Nike', 'Blanco', true),
            new Zapato('Clasicos', 2500, 'Puma', 'Blanco', true),
            new Zapato('Mercurial', 2000, 'Nike', 'Rojo', false),
        ];
    }

    getTexto() {
        return "Hola Mundo desde un servicio"
    }

    getZapatos(): Array<Zapato> {
        return this.zapatos;
    }
}