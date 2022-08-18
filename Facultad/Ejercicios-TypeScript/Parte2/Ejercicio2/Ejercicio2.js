"use strict";
class FiguraGeometrica {
    constructor(color) {
        this._color = color;
        this._perimetro = 0;
        this._superficie = 0;
    }
    GetColor() {
        return this._color;
    }
    toString() {
        let cadena = "Color = " + this.GetColor() + "\n"
            + "Perimetro = " + this._perimetro + "\n"
            + "Superficie = " + this._superficie + " \n";
        return cadena;
    }
}
class Rectangulo extends FiguraGeometrica {
    constructor(color, lado1, lado2) {
        super(color);
        this._ladoUno = lado1;
        this._ladoDos = lado2;
        this.CalcularDatos();
    }
    CalcularDatos() {
        this._perimetro = this._ladoUno * 2 + this._ladoDos * 2;
        this._superficie = this._ladoDos * this._ladoUno;
    }
    Dibujar() {
        let cantAsteriscosLargo = this._ladoDos;
        let cantAsteriscoAlto = this._ladoUno;
        let cadenaRetorno = "";
        for (let i1 = 0; i1 < cantAsteriscoAlto; i1++) {
            for (let i2 = 0; i2 < cantAsteriscosLargo; i2++) {
                cadenaRetorno += "*";
            }
            cadenaRetorno += "\n";
        }
        return cadenaRetorno;
    }
}
var rectanguloEj = new Rectangulo("Blanco", 3, 7);
console.log(rectanguloEj.Dibujar());
//# sourceMappingURL=Ejercicio2.js.map