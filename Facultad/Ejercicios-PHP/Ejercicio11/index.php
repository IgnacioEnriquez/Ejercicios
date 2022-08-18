<?php
 $v[1]=90; $v[30]=7; $v['e']=99; $v['hola']= 'mundo';

/*foreach ($v as $valor) 
{
    echo $valor . "<br/>";    
}*/

foreach ($v as $llave => $valor) 
{
    echo "Su llave es " . $llave . " y su valor " . $valor . "<br/>";   
}

?>
