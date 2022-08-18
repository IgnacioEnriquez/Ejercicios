"use strict";
var Formas;
(function (Formas) {
    class punto {
        constructor(x, y) {
            this._x = x;
            this._y = y;
        }
        GetX() {
            return this._x;
        }
        GetY() {
            return this._y;
        }
    }
    Formas.punto = punto;
    class Rectangulo {
        constructor(vertice1, vertice3) {
            this._vertice1 = vertice1;
            this._vertice3 = vertice3;
            this._vertice2 = new punto(vertice1.GetX(), vertice3.GetY());
            this._vertice4 = new punto(vertice3.GetX(), vertice1.GetY());
            this._ladoUno = this._vertice1.GetY() - this._vertice2.GetY();
            this._ladoDos = this._vertice3.GetX() - this._vertice2.GetX();
            this._perimetro = this._ladoUno * 2 + this._ladoDos * 2;
            this._area = this._ladoDos * this._ladoUno;
        }
        getArea() {
            return this._area;
        }
        getPerimetro() {
            return this._perimetro;
        }
        toString() {
            let cadena = "Area del Rectangulo = " + this.getArea() + "\n"
                + "Perimetro del Rectangulo = " + this.getPerimetro() + "\n"
                + "Lado Uno del Rectangulo = " + this._ladoUno + " CM. \n"
                + "Lado Dos del Rectangulo = " + this._ladoDos + " CM \n"
                + "Vertice 1 del Rectangulo = PUNTO X : " + this._vertice1.GetX() + " PUNTO Y = " + this._vertice1.GetY() + "\n"
                + "Vertice 2 del Rectangulo = PUNTO X : " + this._vertice2.GetX() + " PUNTO Y = " + this._vertice2.GetY() + "\n"
                + "Vertice 3 del Rectangulo = PUNTO X : " + this._vertice3.GetX() + " PUNTO Y = " + this._vertice3.GetY() + "\n"
                + "Vertice 4 del Rectangulo = PUNTO X : " + this._vertice4.GetX() + " PUNTO Y = " + this._vertice4.GetY() + "\n";
            return cadena;
        }
    }
    Formas.Rectangulo = Rectangulo;
})(Formas || (Formas = {}));
var punto1 = new Formas.punto(1, 5);
var punto3 = new Formas.punto(7, 2);
var rectangulo = new Formas.Rectangulo(punto1, punto3);
console.log(rectangulo.toString());
//# sourceMappingURL=Ejercicio1.js.map