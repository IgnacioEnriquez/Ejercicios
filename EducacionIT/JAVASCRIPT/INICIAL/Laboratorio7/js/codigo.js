
var empleados = [
    { nombre: "Ignacio", apellido: "Enriquez", edad: 20 },
    { nombre: "Ernesto", apellido: "Perez", edad: 55 },
    { nombre: "Juan", apellido: "Cruz", edad: 12 },
]; 

var rol = prompt("Cual es su rol?");

if (rol == "recursos" || rol == "admin") {

    var clave = prompt("Cual es su contraseña?");

    if (clave == "1234") {
        
        var nombre_usuario = prompt("Cual es su nombre de usuario?");

        document.getElementById("saludo").innerHTML =
            "<h1>Hola, " + nombre_usuario + ", bienvenida a nuestra aplicacion.<h1/>";

        Listar();
        

    } else {
        document.getElementById("saludo").innerHTML =
            "<h1>Ha habido un error, pregunte a su supervisor rol y contraseña correctas.<h1/>";
    }
} else {
    document.getElementById("saludo").innerHTML =
        "<h1>Ha habido un error, pregunte a su supervisor rol y contraseña correctas.<h1/>";
}

function Agregar()
{
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    edad = parseFloat(document.getElementById("edad").value);

    persona_obj = {nombre : nombre, apellido:apellido, edad:edad}

    empleados.push(persona_obj);

    Listar();
    Limpiar();
}

function Limpiar()
{
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    parseFloat(document.getElementById("edad").value = "");

}



function Listar()
{    

    tabla =
        "<table><thead <tr><th>Nombre</th><th>Apellido</th><th>Edad</th></tr></thead><tbody>";

    for (let i = 0; i < empleados.length; i++) {
        tabla += `<tr><td>${empleados[i].nombre}</td><td>${empleados[i].apellido}</td><td>${empleados[i].edad}</td></tr>`;
    }

    tabla += "</tbody></table>";

    document.getElementById("tabla").innerHTML = tabla;

}