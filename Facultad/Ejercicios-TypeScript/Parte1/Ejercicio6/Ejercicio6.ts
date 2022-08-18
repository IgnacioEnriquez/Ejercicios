
function GetCubo(numero : number) : number
{
    return Math.pow(numero,3);
}

function MostrarResultado(objeto : any)
{
    console.log(objeto);
}

MostrarResultado(GetCubo(3));
