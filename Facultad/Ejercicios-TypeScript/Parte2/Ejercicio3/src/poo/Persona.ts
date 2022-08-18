
namespace Clases
{
    export abstract class Persona
    {
        private _apellido : string;
        private _dni : number;
        private _nombre : string;
        private _sexo : string;

        constructor(nombre : string,apellido : string, dni : number, sexo : string)
        {
            this._nombre = nombre;
            this._apellido = apellido;
            this._dni = dni;
            this._sexo = sexo;
        }

        public GetNombre() : string
        {
            return this._nombre;
        }
        
        public GetApellido() : string
        {
            return this._apellido;
        }

        public GetDni() : number
        {
            return this._dni;
        }

        public GetSexo() : string
        {
            return this._sexo;
        }

        public abstract Hablar(idioma : string) : string;

        public ToString() : string
        {
            let cadena = this.GetNombre()+ " - " + this.GetApellido() + " - " + this.GetDni() + " - " + this.GetSexo();

            return cadena;

        }





    }
}
