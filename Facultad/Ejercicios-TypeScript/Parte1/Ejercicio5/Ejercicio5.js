"use strict";
function MostrarNombreYApellido(nombre, apellido) {
    let apellidoMayusq = apellido.toUpperCase();
    let nombreMayusq = nombre[0].toUpperCase() + nombre.slice(1);
    ;
    console.log(apellidoMayusq + " " + nombreMayusq);
}
var nombre = "Ignacio";
var apellido = "Enriquez";
MostrarNombreYApellido(nombre, apellido);
//# sourceMappingURL=Ejercicio5.js.map