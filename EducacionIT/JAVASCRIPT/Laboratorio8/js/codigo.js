function AlertarColor(color) {
    
    alert("El color es " + color);
    div =  document.getElementById("cajita");
    div.innerHTML = `<h1>El color es ${color} </h1>`
    div.style.background = color;
}

var botones = document.getElementsByTagName("button");

for (let i = 0; i < botones.length; i++) {

    botones[i].onclick = function () {
        AlertarColor(this.innerHTML);
    };
}

