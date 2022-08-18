<?php

$a = 5;
$b = 5;
$c = 5;
$valorMedio = 0;

if($a > $b && $a < $c || $a < $b && $a > $c  )
{
    echo "El numero del medio es el " . $a;
}
else if($b > $a && $b < $c || $b < $a && $b > $c)
{
    echo "El numero del medio es el " . $b;
}
else if($c > $a && $c < $b || $c < $a && $c > $b)
{
    echo "El numero del medio es el " . $c;
}
else
{
    echo "No existe un numero de medio";
}


?>