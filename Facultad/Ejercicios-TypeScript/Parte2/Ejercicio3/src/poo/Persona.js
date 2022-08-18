"use strict";
var Clases;
(function (Clases) {
    class Persona {
        constructor(nombre, apellido, dni, sexo) {
            this._nombre = nombre;
            this._apellido = apellido;
            this._dni = dni;
            this._sexo = sexo;
        }
        GetNombre() {
            return this._nombre;
        }
        GetApellido() {
            return this._apellido;
        }
        GetDni() {
            return this._dni;
        }
        GetSexo() {
            return this._sexo;
        }
        ToString() {
            let cadena = this.GetNombre + " - " + this.GetApellido + " - " + this.GetDni() + " - " + this.GetSexo();
            return cadena;
        }
    }
    Clases.Persona = Persona;
})(Clases || (Clases = {}));
//# sourceMappingURL=Persona.js.map