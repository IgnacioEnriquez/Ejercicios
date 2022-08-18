"use strict";
var Clases;
(function (Clases) {
    class Matematicas {
        static Factorial(numero) {
            let acumulador = 1;
            for (let i = 1; i <= numero; i++) {
                acumulador = acumulador * i;
            }
            return acumulador;
        }
        static GetCubo(numero) {
            return Math.pow(numero, 3);
        }
        static MostrarResultado(objeto) {
            console.log(objeto);
        }
    }
    Clases.Matematicas = Matematicas;
})(Clases || (Clases = {}));
function PedirNumero(numero) {
    if (numero > 0) {
        Clases.Matematicas.MostrarResultado("El Factorial es " + Clases.Matematicas.Factorial(numero));
    }
    else {
        let numeroPositivo = numero - numero * 2;
        Clases.Matematicas.MostrarResultado("El Cubo es " + Clases.Matematicas.GetCubo(numeroPositivo));
    }
}
PedirNumero(-5);
//# sourceMappingURL=Ejercicio9.js.map