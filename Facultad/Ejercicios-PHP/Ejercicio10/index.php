<?php

$numerosImpares = Array();
$contadorIndice = 0;

$flag = false;
for ($i=0; $flag === false  ; $i++) 
{ 
    if(count($numerosImpares) == 10)
    {
        $flag = true;
    }    

    if($i % 2 != 0)
    {
        $numerosImpares[$contadorIndice] = $i;
        $contadorIndice++;
        echo "El numero impar agregado es " . $i . "<br/>";
    }   
}

/*$numMostrados = 0;
while ($numMostrados < 10 ) 
{
        //echo "El numero impar agregado es " . $i . "<br/>";
     echo "El numero impar agregado es " . $numerosImpares[$numMostrados] . "<br/>";   
     $numMostrados++;
}*/

/*foreach ($numerosImpares as $valor) 
{
     echo "El numero impar agregado es " . $valor . "<br/>";
}*/
 

?>
