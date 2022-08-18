"use strict";
/// <reference path = "Persona.ts" />
var Clases;
(function (Clases) {
    class Empleado extends Clases.Persona {
        constructor(nombre, apellido, dni, sexo, legajo, sueldo) {
            super(nombre, apellido, dni, sexo);
            this._legajo = legajo;
            this._sueldo = sueldo;
        }
        GetLegajo() {
            return this._legajo;
        }
        GetSueldo() {
            return this._sueldo;
        }
        Hablar(idioma) {
            return "El empleado habla " + idioma;
        }
        ToString() {
            let cadena = super.ToString() + " - " + this.GetLegajo() + " - " + this.GetSueldo();
            return cadena;
        }
    }
    Clases.Empleado = Empleado;
})(Clases || (Clases = {}));
//# sourceMappingURL=Empleado.js.map