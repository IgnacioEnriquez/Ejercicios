<?php 

function potenciasConNumeros(int $numero)
{
    for ($i=1; $i < 5; $i++) 
    { 
        echo pow($numero,$i) . "<br>";        
    }
}


for ($i=1; $i < 5 ; $i++) 
{ 
    potenciasConNumeros($i);    
}

?>