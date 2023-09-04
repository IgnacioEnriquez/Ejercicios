var edad = parseInt(prompt("Ingrese su edad para acceder al sitio web"));

if(edad >18)
{
    alert("Bienvenido al sitio web! Estamos contentos de tenerlo aqui!");
    var nombreUsuario = prompt("Ingrese su nombre de usuario para poder ingresar al foro");
    var clave = prompt("Ingrese su clave para poder ingresar al foro");

    if(nombreUsuario == "admin" && clave == "1234")
    {
        document.write("<h1>Bienvenido al foro usuario : " + nombreUsuario + " sea usted bienvenido<h1/>");      
    }
    else
    {
        alert("Error : Nombre de usuario y/o contraseña incorrectos");
    }
}
else
{
    alert("Usted debe ser mayor de 18 años para ingresar al sitio web");
}