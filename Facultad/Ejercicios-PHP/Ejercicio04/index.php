<?php

$acumuladorEnteros = 1;

for ( $i = 2; $acumuladorEnteros + $i <= 1000 ; $i++) 
{ 
    echo " Se le sumo el numero = " . $i . "<br/>"; 

    $acumuladorEnteros += $i;
}

echo " El resultado es " . $acumuladorEnteros;

?>