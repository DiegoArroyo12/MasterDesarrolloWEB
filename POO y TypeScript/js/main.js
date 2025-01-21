"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camiseta_1 = require("./camiseta");
var Main = /** @class */ (function () {
    function Main() {
        console.log('Aplicación JS cargada!!!');
    }
    Main.prototype.getCamiseta = function () {
        return new camiseta_1.Camiseta('Verde', 'Manga Corta', 'Adidas', 'G', 1000);
    };
    return Main;
}());
var main = new Main();
console.log(main);
