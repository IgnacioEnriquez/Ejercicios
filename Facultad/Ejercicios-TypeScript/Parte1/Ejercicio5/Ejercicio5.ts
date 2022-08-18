
function MostrarNombreYApellido(nombre : string, apellido : string)
{
    let apellidoMayusq = apellido.toUpperCase();

    let nombreMayusq = nombre[0].toUpperCase() + nombre.slice(1);
 ;

    console.log(apellidoMayusq + " " + nombreMayusq);
}

var nombre : string = "Ignacio";
var apellido : string = "Enriquez";

MostrarNombreYApellido(nombre,apellido);

