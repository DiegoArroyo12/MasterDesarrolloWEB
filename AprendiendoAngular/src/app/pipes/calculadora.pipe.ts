import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {
    // dato | calculadora: otroDato
    transform(value: any, valueTwo: any) {
        let operaciones = `
            Suma: ${value + valueTwo} - 
            Resta: ${value - valueTwo} - 
            Multiplicación: ${value * valueTwo} - 
            División: ${value / valueTwo}
        `
        return operaciones
    }
}