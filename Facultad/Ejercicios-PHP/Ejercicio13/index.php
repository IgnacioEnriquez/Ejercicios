<?php

$animales = Array();
$numeros = Array();
$entornos = Array();
$resultado = Array();

array_push($animales,"Perro","Gato","Raton","Araña","Mosca");
array_push($numeros,"1986","1996","2015","78","86");
array_push($entornos,"php","mysql","html5","typescript","ajax");

$resultado = array_merge($animales,$numeros,$entornos);

var_dump($resultado);

?>
