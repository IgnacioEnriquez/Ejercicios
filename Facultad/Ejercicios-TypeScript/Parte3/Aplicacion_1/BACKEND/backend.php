<?php

try 
{
    $numero = (int)$_POST["numeroPositivo"];   
    if(isset($numero))
    {
        if($numero > 0)
        {
            $acumulador = 0;

            for ($i=0; $i < $numero; $i++) 
            { 
                if($i % 2 != 0)
                {
                    $acumulador++;
                }
                
            }

            echo "La cantidad de numeros impares es " . $acumulador;

        }
        else
        {        
            throw new Exception("El numero pasado tiene que ser mayor que 0");
        }
        

    }
    else
    {
        throw new Exception("El numero pasado esta vacio");
    }
    
} catch (Exception $ex) 
{   
    echo "ERROR : " . $ex -> getMessage();    
}
