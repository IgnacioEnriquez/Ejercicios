"use strict";
function NumerosPrimos20() {
    for (let i = 1; i <= 20; i++) {
        var esPrimo = true;
        for (let j = 0; j <= i; j++) {
            if (i % j == 0 && j != 1 && j != i) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo == true) {
            console.log("El numero " + i + " es un numero Primo");
        }
    }
}
NumerosPrimos20();
//# sourceMappingURL=Ejercicio7.js.map