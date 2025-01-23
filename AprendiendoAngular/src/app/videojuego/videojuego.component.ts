import { Component } from "@angular/core";

@Component({
    selector: 'videojuego',
    template: `
        <h2>Componente de VideoJuego</h2>
        <ul>
            <li>GTA</li>
            <li>RAINBOW</li>
            <li>WARZONE</li>
            <li>WATCH DOGS</li>
        </ul>
    `
})
export class VideoJuegoComponent {
    constructor(){
        console.log('Se ha cargado el componente.')
    }
}