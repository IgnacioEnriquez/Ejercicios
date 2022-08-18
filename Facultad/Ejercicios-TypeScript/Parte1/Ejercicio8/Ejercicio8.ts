function Factorial(numero : number)
{
    let acumulador = 1;

    for (let i = 1; i <= numero; i++) 
    {
        acumulador = acumulador * i;                   
    }    

    return acumulador;
}

console.log(Factorial(5));