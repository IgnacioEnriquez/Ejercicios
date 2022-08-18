
let xhttp : XMLHttpRequest = new XMLHttpRequest();

namespace Aplicacion1
{
    export class Manejadora
    {
        public static MostrarImpares()
        {     
            let numeroPositivo : string = (<HTMLInputElement>document.getElementById("numeroPositivo")).value;             

            xhttp.open("POST", "./BACKEND/backend.php", true);
      
            let form: FormData = new FormData();

            form.append("numeroPositivo", numeroPositivo);

            xhttp.send(form);

            xhttp.onreadystatechange = () => 
            {
              if (xhttp.readyState == 4 && xhttp.status == 200) 
              {            
                let resultadoInput : HTMLInputElement = <HTMLInputElement> document.getElementById("resultado");       

                resultadoInput.value = xhttp.responseText;                                                                                                                       
              }
            };
        }      
    }
}

