"use strict";
let xhttp4 = new XMLHttpRequest();
var Aplicacion4;
(function (Aplicacion4) {
    class Manejadora {
        static CalcularOperacion() {
            let numero_uno = document.getElementById("operando_uno").value;
            let numero_dos = document.getElementById("operando_dos").value;
            let operador = document.getElementById("operador_select").value;
            let divInfo = document.getElementById("divInfo");
            xhttp4.open("POST", "./BACKEND/backend.php", true);
            let form = new FormData();
            form.append("numero_uno", numero_uno);
            form.append("numero_dos", numero_dos);
            form.append("operador", operador);
            xhttp4.send(form);
            xhttp4.onreadystatechange = () => {
                if (xhttp4.readyState == 4 && xhttp4.status == 200) {
                    let retorno = JSON.parse(xhttp4.responseText);
                    if (retorno.exito === true) {
                        divInfo.innerHTML = "<span>" + "El resultado de la operacion es : " + retorno.resultado + "</span>";
                    }
                    else {
                        alert(retorno.mensaje);
                    }
                }
            };
        }
    }
    Aplicacion4.Manejadora = Manejadora;
})(Aplicacion4 || (Aplicacion4 = {}));
//# sourceMappingURL=Aplicacion4.js.map