<?php

try 
{
    $retorno = new stdClass();
    $retorno -> exito = true;
    $retorno -> mensaje = "";

    $pathArchivo = (string)$_POST["pathArchivo"];
    $palabraBuscada = (string)$_POST["palabraBuscada"];  
     
    if(strlen($pathArchivo) > 0 && strlen($palabraBuscada) > 0)
    {        
        $pathCompleto = __DIR__ . $pathArchivo;

        if(file_exists($pathCompleto))
        {
            $cadenaResultado = "";

            $ar = fopen($pathCompleto, "r");

            while( ! feof($ar))                
            {
               $cadenaResultado .= fgets($ar);                
            }
            
            fclose($ar);

            if(str_contains($cadenaResultado,$palabraBuscada))
            {            
                $retorno -> mensaje = "La palabra se encuentra en el texto seleccionado";        
            }
            else
            {
                $retorno -> mensaje = "La palabra no se encuentra en el texto seleccionado";       
            }

        }
        else
        {        
            throw new Exception("El pathArchivo {$pathCompleto} pasado no existe en la pc"); 
        }           
    }
    else
    {
        throw new Exception("El pathArchivo pasado esta vacio o la palabra no fue ingresada");
    }
    
} catch (Exception $ex) 
{   
    $retorno -> exito = false;
    $retorno -> mensaje = "ERROR : " . $ex -> getMessage();        
} 
finally 
{
    echo json_encode($retorno); 
}
