"use strict";
let xhttp2 = new XMLHttpRequest();
var Aplicacion3;
(function (Aplicacion3) {
    class Manejadora {
        static BuscarPalabraArchivo() {
            let pathArchivo = document.getElementById("pathArchivo").value;
            let palabraBuscada = document.getElementById("palabraBuscada").value;
            let divInfo = document.getElementById("divInfo");
            xhttp1.open("POST", "./BACKEND/backend.php", true);
            let form = new FormData();
            form.append("pathArchivo", pathArchivo);
            form.append("palabraBuscada", palabraBuscada);
            xhttp1.send(form);
            xhttp1.onreadystatechange = () => {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    let retorno = JSON.parse(xhttp1.responseText);
                    if (retorno.exito == true) {
                        divInfo.innerHTML = "<h1>" + retorno.mensaje + "</h1>";
                    }
                    else {
                        alert(retorno.mensaje);
                    }
                }
            };
        }
    }
    Aplicacion3.Manejadora = Manejadora;
})(Aplicacion3 || (Aplicacion3 = {}));
//# sourceMappingURL=Aplicacion3.js.map