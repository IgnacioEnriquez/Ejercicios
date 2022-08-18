<?php

try {
    $retorno = new stdClass();
    $retorno->exito = true;
    $retorno->mensaje = "";
    $retorno->resultado = 0;

    $numero_uno = is_numeric($_POST["numero_uno"]) ? (int)$_POST["numero_uno"] : throw new Exception('El parametro pasado "Numero_Uno" no es un numero');
    $numero_dos = is_numeric($_POST["numero_dos"]) ? (int)$_POST["numero_dos"] : throw new Exception('El parametro pasado "Numero_Dos" no es un numero');
    $operando = (string)$_POST["operador"];

    switch ($operando) 
    {
        case '+':
            $retorno->resultado = $numero_uno + $numero_dos;
            break;

        case '-':

            $retorno->resultado = $numero_uno - $numero_dos;
            break;

        case '/':
            if ($numero_dos != 0) 
            {
                $retorno->resultado = $numero_uno / $numero_dos;
            }
            break;

        case '*':
            $retorno->resultado = $numero_uno * $numero_dos;
            break;

        default:
            $retorno->resultado = $numero_uno + $numero_dos;
            break;
    }
} catch (Exception $ex) {
    $retorno->exito = false;
    $retorno->mensaje = "ERROR : " . $ex->getMessage();
} finally {
    echo json_encode($retorno);
}
