
namespace Formas {
    export class punto {
        private _x: number;
        private _y: number;

        GetX(): number {
            return this._x;
        }

        GetY(): number {
            return this._y;
        }

        constructor(x: number, y: number) {
            this._x = x;
            this._y = y;
        }

    }



    export class Rectangulo {
        private _area: number;
        private _ladoDos: number;
        private _ladoUno: number;
        private _perimetro: number;
        private _vertice1: punto;
        private _vertice2: punto;
        private _vertice3: punto;
        private _vertice4: punto;

        public getArea(): number {
            return this._area;
        }


        public getPerimetro(): number {
            return this._perimetro;
        }

        public toString(): string 
        {
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

        constructor(vertice1: punto, vertice3: punto) {
            this._vertice1 = vertice1;
            this._vertice3 = vertice3;
            this._vertice2 = new punto(vertice1.GetX(), vertice3.GetY());
            this._vertice4 = new punto(vertice3.GetX(), vertice1.GetY());

            this._ladoUno = this._vertice1.GetY() - this._vertice2.GetY();
            this._ladoDos = this._vertice3.GetX() - this._vertice2.GetX();

            this._perimetro = this._ladoUno * 2 + this._ladoDos * 2;
            this._area = this._ladoDos * this._ladoUno;
        }

    }

}

var punto1 = new Formas.punto(1, 5);
var punto3 = new Formas.punto(7, 2);
var rectangulo = new Formas.Rectangulo(punto1, punto3);

console.log(rectangulo.toString());

