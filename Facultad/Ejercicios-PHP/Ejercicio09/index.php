<?php

$enteros = Array();
$totalNumeros = 0;

for ($i=0; $i < 6 ; $i++) 
{ 
    $enteros[$i] = rand(0,10);

    $totalNumeros += $enteros[$i];
}

if($totalNumeros / 5 > 6)
{
    echo "El promedio de numeros es mayor que 6 <br/>";
}
else if($totalNumeros / 5 == 6)
{
    echo "El promedio de numeros es igual que 6 <br/>";
}
else
{
    echo "El promedio de numeros es menor que 6 <br/>";    
}


var_dump($enteros);




?>
