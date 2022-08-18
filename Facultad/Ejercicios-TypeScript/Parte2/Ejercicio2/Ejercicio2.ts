
abstract class FiguraGeometrica {
    protected _color: string;
    protected _perimetro: number;
    protected _superficie: number;

    constructor(color: string) {
        this._color = color;
        this._perimetro = 0;
        this._superficie = 0;
    }

    public GetColor(): string {
        return this._color;
    }

    public toString(): string {
        let cadena = "Color = " + this.GetColor() + "\n"
            + "Perimetro = " + this._perimetro + "\n"
            + "Superficie = " + this._superficie + " \n";

        return cadena;
    }

    public abstract Dibujar(): string;

    protected abstract CalcularDatos(): void;
}

class Rectangulo extends FiguraGeometrica 
{
    private _ladoUno: number;
    private _ladoDos: number;

    constructor(color: string, lado1: number, lado2: number) {
        super(color);

        this._ladoUno = lado1;
        this._ladoDos = lado2;

        this.CalcularDatos();
    }

    protected CalcularDatos(): void {
        this._perimetro = this._ladoUno * 2 + this._ladoDos * 2;
        this._superficie = this._ladoDos * this._ladoUno;
    }

    public Dibujar(): string 
    {
        let cantAsteriscosLargo = this._ladoDos;
        let cantAsteriscoAlto = this._ladoUno;
        let cadenaRetorno = "";

        for (let i1 = 0; i1 < cantAsteriscoAlto; i1++) 
        {
            for (let i2 = 0; i2 < cantAsteriscosLargo; i2++) 
            {
                cadenaRetorno += "*"                
            }

            cadenaRetorno += "\n";
        }

        return cadenaRetorno;
    }

}


var rectanguloEj = new Rectangulo("Blanco",3,7);

console.log(rectanguloEj.Dibujar());