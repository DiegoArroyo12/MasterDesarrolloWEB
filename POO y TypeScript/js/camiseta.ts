// Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

// Decorador
function estampar(logo:string) {
    return function(target: Function) {
        target.prototype.estampacion = function(): void {
            console.log('Camiseta Estampada con el logo de: '+logo);
        }
    }
}

// Clase (Molde del Objeto)
@estampar('Gucci Gang')
/* export - Para que lo pueda usar main */ class Camiseta implements CamisetaBase{
    // Propiedades (Características del Objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Métodos (Funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color) {
        this.color = color
    }

    public getColor() {
        return this.color;
    }
}

// Clase Hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha(): boolean {
        return this.capucha;
    }
}

var camiseta = new Camiseta('Azul', 'Manga Larga', 'Nike', 'M', 500);
camiseta.setColor('Rojo');
camiseta.getColor();

/* camiseta.estampacion(); */

console.log(camiseta);

var sudadera = new Sudadera('Amarillo', 'Manga Larga', 'YoungLA', 'S', 2000);
sudadera.setColor('Morado');
console.log(sudadera);