namespace Clases {
    export class Matematicas {
        public static Factorial(numero: number) {
            let acumulador = 1;

            for (let i = 1; i <= numero; i++) {
                acumulador = acumulador * i;
            }

            return acumulador;

        }

        public static GetCubo(numero: number): number 
        {
            return Math.pow(numero, 3);
        }

        public static MostrarResultado(objeto: any) 
        {
            console.log(objeto);
        }
    }
}

function PedirNumero(numero : number)
{
    if(numero > 0)
    {      
       Clases.Matematicas.MostrarResultado("El Factorial es " + Clases.Matematicas.Factorial(numero))
    }
    else
    {
        let numeroPositivo = numero - numero* 2;
        Clases.Matematicas.MostrarResultado("El Cubo es " + Clases.Matematicas.GetCubo(numeroPositivo))
    }
}

PedirNumero(-5);