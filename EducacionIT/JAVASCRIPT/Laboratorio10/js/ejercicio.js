$("#btnAgregar").click(agregarPersona)

function agregarPersona()
{
    let template = Handlebars.compile("<h3>{{nombre}} {{apellido}} </h3>");
    let nombre_txt = $("#txtNombre").text();
    let apellido_txt = $("#txtApellido").text();          

    //$("#items").html = template({nombre : "Ignacio", apellido : "Enriquez"})   
    document.getElementById("items").innerHTML += template({nombre : nombre_txt, apellido : apellido_txt});
}