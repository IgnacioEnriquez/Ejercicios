"use strict";
function Factorial(numero) {
    let acumulador = 1;
    for (let i = 1; i <= numero; i++) {
        acumulador = acumulador * i;
    }
    return acumulador;
}
console.log(Factorial(5));
//# sourceMappingURL=Ejercicio8.js.map