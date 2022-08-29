
var cadena_acumulada = " - ";
var cadena_pedida = "";
do
{   
    cadena_pedida = prompt("Ingrese el texto que desea concatenar");
    cadena_acumulada += cadena_pedida + " - "
}
while(confirm("Desea continuar agregando texto?"))

document.write("<h1>" + cadena_acumulada + "</h1>")