/*
var x = 10;
var y = 20;

/* Test A 
x = x + x + 1;
y = y - y - x;
*/

/* Test B */
/*
x = (x - y) + 4;
y = 4 + (y + 5);
*/

/* Test C 
x = x * 2 - 4;
y = 4 - y * 2;
*/

/* Test D 
x = (20 - x) / y;
y = x + 2 / y;
*/

/* Test E 
x = ((1 - x) * (y / 8)) * 4 * 0;
y = (x + 3) / x;
*/

/*
console.log("TEST B");
console.log("Valor de X: " + x);
console.log("Valor de Y: " + y);
*/

var palabra1 = "hola";
var palabra2 = "chau";
var frase = "";

/* Test A 
frase = palabra1 + " mundo";
*/
/* Test B 
palabra1 = palabra2;
palabra2 = palabra1;
frase = "frase nueva";
*/

/* Test C 
palabra1 = palabra1 + " " + palabra2;
palabra2 = palabra2 + " " + palabra2;
frase = palabra2 + " y " + palabra2;
*/
/* Test D */
palabra1 = "1+1";
palabra2 = "2/0";
frase = palabra1 + "=2";


alert(palabra1);
alert(palabra2);
alert(frase);