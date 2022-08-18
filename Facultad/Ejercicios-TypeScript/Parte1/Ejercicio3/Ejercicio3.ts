
function Ejer3(numero : number,cadena? : string) : any
{
    if(cadena == null)
    {
        let resultado = numero - numero * 2
        console.log("El resultado invero del num es :" + resultado);
    }
    else
    {
        for (let i = 0; i < numero; i++) 
        {
            console.log(cadena);            
        }
    }
}

Ejer3(5,"La computadora se la come");