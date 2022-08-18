
function MostrarCadena(cadena: string) 
{
    let cantMayusculas = 0;
    let cantMinusculas = 0;

    for (let i = 0; i < cadena.length; i++) {

        if(cadena[i] != " ")
        {
            if (cadena[i] == cadena[i].toUpperCase()) {
                cantMayusculas++;
            }
            else {
                cantMinusculas++;
            }
        }       
    }

    if (cantMayusculas > 0 && cantMinusculas == 0)
    {
        console.log("La palabra colocada solo esta formada por mayusculas");
    }
    else if(cantMayusculas == 0 && cantMinusculas > 0)
    {
        console.log("La palabra colocada solo esta formada por minusculas");
    }
    else
    {
        console.log("La palabra colocada solo esta formada de una manera mixta por mayusculas y minusculas");
    }
}

MostrarCadena("Ejemplo Mixto")