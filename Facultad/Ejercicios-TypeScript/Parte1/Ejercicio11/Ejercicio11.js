"use strict";
function DetectarPalindromo(cadena) {
    let cadenaSinEspaciosInvertida = ((Reversa(cadena)).replace(/ /g, "")).toLocaleLowerCase();
    //console.log(cadenaSinEspaciosInvertida); 
    let cadenaSinEspacios = (cadena.toLocaleLowerCase()).replace(/ /g, "");
    //console.log(cadenaSinEspacios); 
    if (cadenaSinEspacios == cadenaSinEspaciosInvertida) {
        console.log("Es un palindromo");
    }
    else {
        console.log("No es un palindromo");
    }
}
function Reversa(cadena) {
    return cadena.split("").reverse().join("");
}
DetectarPalindromo("Eva usaba rimel y le miraba suave");
//# sourceMappingURL=Ejercicio11.js.map