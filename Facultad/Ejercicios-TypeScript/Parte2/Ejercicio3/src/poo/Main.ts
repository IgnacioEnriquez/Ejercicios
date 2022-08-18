/// <reference path = "Persona.ts" />
/// <reference path = "Empleado.ts" />

var Empleado1 = new Clases.Empleado("Ignacio","Enriquez",43777893,"Hombre",1111,23000);

console.log(Empleado1.Hablar("Ingles"));
console.log(Empleado1.Hablar("Español"));
let resultado = Empleado1.ToString()
console.log(resultado);



