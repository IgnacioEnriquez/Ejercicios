const lista1 = document.querySelector(".lista-1");
const lista2 = document.querySelector("#lista-2");
const button_add = document.getElementById("button_add");
const button_remove = document.getElementById("button_remove");

const items = document.querySelectorAll("#lista-2 li");


let addImportantL1 = () => {
    lista1.classList.add("importante")
};


let addImportantL2 = () => {
    lista2.classList.add("importante")
};

let removerClases = function()
{
    lista2.classList.remove("importante");
    lista1.classList.remove("importante");
}

let aniadirClases = function()
{
    addImportantL1()
    addImportantL2()
}

button_add.addEventListener("click",aniadirClases);
button_remove.addEventListener("click",removerClases);
lista1.addEventListener("click",addImportantL1);
lista2.addEventListener("click",addImportantL2);

items.forEach(elemento => 
    {          
        elemento.addEventListener("click",()=>
        {
          elemento.insertAdjacentText('beforeend',"Clickeado")        
        })           
    });