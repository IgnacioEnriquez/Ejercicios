var rol = prompt("Cual es su rol?");

if(rol == "admin" || rol == "recursos")
{
    let clave = prompt("Cual es su clave?");

    if(clave == "1234")
    {
        let nombre_usuario = prompt("Cual es su nombre de usuario?");
    document.write("<h1>Hola " + nombre_usuario + ", Bienvenido a nuestra aplicacion<h1/>");

    }
    else
    {    
        document.write("<h1>Ha habido un error,p regunte a su supervisor rol o contraseñas incorrectos<h1/>");
    }

}
else
{
    document.write("<h1>Ha habido un error,pregunte a su supervisor rol o contraseñas incorrectos<h1/>");

}