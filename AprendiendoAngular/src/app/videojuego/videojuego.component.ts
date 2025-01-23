import { Component, DoCheck, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = 'Componente de Videojuegos';
        this.listado = 'Listado de los juegos más populares';
        console.log('Se ha cargado el componente.')
    }

    ngOnInit(): void {
        console.log('On Init Ejecutado!!');
    }

    ngDoCheck(): void { /* Para que revise constantemente el código */
        console.log('DoCheck ejecutado!!');
    }

    ngOnDestroy(): void {
        console.log('On Destroy ejecutado!!!');
    }

    cambiarTitulo(){
        this.titulo = 'Nuevo título del componente';
    }
}