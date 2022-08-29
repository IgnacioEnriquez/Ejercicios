//Ejercicio 01

var nombre = prompt("Ingre su nombre");
var apellido = prompt("Ingre su apellido");
var edad = parseInt(prompt("Ingre su edad"));
var nombreCompleto = nombre + " " + apellido;

alert("Bienvenido! " + nombreCompleto)
alert("Tiene una edad de " + edad);

//Ejercicio 02

document.write("<h1> El nombre de usuario es " + nombreCompleto + "</h1>");
document.write("<h2> La edad del usuario es " + edad + " años de edad</h2>");

//Ejercicio 03

var sueldo = prompt("Ingrese su sueldo actual");
var bonus = prompt("Ingrese el bonus que recibio este mes")
var resultado = parseFloat(sueldo) + parseFloat(bonus);

document.write("<h3>El resultado final de tu sueldo es " + resultado + "<h3/>");





