
//Ejercicio 01 Genera un arreglo con 4 datos

var arreglo = ["String1","String2",99,true]

//Ejercicio 02 Sumar un dato al arreglo y mostrarlo en una ventana alert
arreglo.push("String 3");
alert(arreglo[arreglo.length-1]);

//Ejercicio 03 Sumar un dato al arreglo a traves de un prompt

var dato = prompt("Ingrese una frase para agregar al arreglo");
arreglo.unshift(dato);

alert(arreglo[0]);

