
let xhttp4 : XMLHttpRequest = new XMLHttpRequest();

namespace Aplicacion4
{
    export class Manejadora
    {
        public static CalcularOperacion()
        {     
            let numero_uno : string = (<HTMLInputElement>document.getElementById("operando_uno")).value;
            let numero_dos : string = (<HTMLInputElement>document.getElementById("operando_dos")).value;
            let operador : string = (<HTMLSelectElement>document.getElementById("operador_select")).value;
            let divInfo = <HTMLDivElement>document.getElementById("divInfo");             

            xhttp4.open("POST", "./BACKEND/backend.php", true);
      
            let form: FormData = new FormData();

            form.append("numero_uno", numero_uno);
            form.append("numero_dos", numero_dos);
            form.append("operador", operador);

            xhttp4.send(form);

            xhttp4.onreadystatechange = () => 
            {
              if (xhttp4.readyState == 4 && xhttp4.status == 200) 
              {                             
                let retorno = JSON.parse(xhttp4.responseText);      

                if(retorno.exito === true)
                {
                  divInfo.innerHTML = "<span>"+ "El resultado de la operacion es : " + retorno.resultado + "</span>";
                }
                else
                {
                  alert(retorno.mensaje)
                }                                                                                                                                                      
              }
            };
        }      
    }
}

