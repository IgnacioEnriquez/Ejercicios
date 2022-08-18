
let xhttp2 : XMLHttpRequest = new XMLHttpRequest();

namespace Aplicacion3
{
    export class Manejadora
    {
        public static BuscarPalabraArchivo()
        {     
            let pathArchivo : string = (<HTMLInputElement>document.getElementById("pathArchivo")).value;
            let palabraBuscada : string = (<HTMLInputElement>document.getElementById("palabraBuscada")).value;
            let divInfo = <HTMLDivElement>document.getElementById("divInfo");             

            xhttp1.open("POST", "./BACKEND/backend.php", true);
      
            let form: FormData = new FormData();

            form.append("pathArchivo", pathArchivo);
            form.append("palabraBuscada", palabraBuscada);

            xhttp1.send(form);

            xhttp1.onreadystatechange = () => 
            {
              if (xhttp1.readyState == 4 && xhttp1.status == 200) 
              {                    
                let retorno = JSON.parse(xhttp1.responseText);      

                if(retorno.exito == true)
                {
                  divInfo.innerHTML = "<h1>"+ retorno.mensaje + "</h1>";
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

