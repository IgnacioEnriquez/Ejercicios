var numsecreto = 20;
var ingreso = 0;
do
{
    alert("Tiene que adivinar el numero secreto! Ingrese el numero correcto para poder continuar");
    ingreso = parseInt(prompt("Ingrese un N° :"));

}while(ingreso != 20)

alert("Excelente! El numero secreto era 20! Nos vemooos!");