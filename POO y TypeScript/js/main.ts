/* import { Camiseta } from "./camiseta"; */

class Main{
    constructor(){
        console.log('Aplicación JS cargada!!!');
    }

    getCamiseta(){
        return new Camiseta('Verde', 'Manga Corta', 'Adidas', 'G', 1000);
    }
}

var main = new Main();
console.log(main);