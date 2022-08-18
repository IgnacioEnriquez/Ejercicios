"use strict";
let xhttp = new XMLHttpRequest();
var Aplicacion1;
(function (Aplicacion1) {
    class Manejadora {
        static MostrarImpares() {
            let numeroPositivo = document.getElementById("numeroPositivo").value;
            xhttp.open("POST", "./BACKEND/backend.php", true);
            let form = new FormData();
            form.append("numeroPositivo", numeroPositivo);
            xhttp.send(form);
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    let resultadoInput = document.getElementById("resultado");
                    resultadoInput.value = xhttp.responseText;
                }
            };
        }
    }
    Aplicacion1.Manejadora = Manejadora;
})(Aplicacion1 || (Aplicacion1 = {}));
//# sourceMappingURL=Aplicacion1.js.map