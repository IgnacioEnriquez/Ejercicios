<?php
require_once("./src/poo/Persona.ts");

try 
{
    $nombre = isset($_POST["nombre"]) ? (string)$_POST["nombre"] : throw new Exception("LOS DATOS SE ENCUENTRAN  VACIOS");
    $apellido = isset($_POST["apellido"]) ? (string)$_POST["apellido"] : throw new Exception("LOS DATOS SE ENCUENTRAN VACIOS");
    $dni = isset($_POST["dni"]) ? (string)$_POST["dni"] : throw new Exception("LOS DATOS SE ENCUENTRAN VACIOS");
    $sexo = isset($_POST["sexo"]) ? (string)$_POST["sexo"] : throw new Exception("LOS DATOS SE ENCUENTRAN VACIOS");
    $legajo = isset($_POST["legajo"]) ? (string)$_POST["legajo"] : throw new Exception("LOS DATOS SE ENCUENTRAN VACIOS");
    $sueldo = isset($_POST["sueldo"]) ? (string)$_POST["sueldo"] : throw new Exception("LOS DATOS SE ENCUENTRAN VACIOS");
    $accionDeseada = isset($_POST["accionDeseada"]) ? (string)$_POST["accionDeseada"] : throw new Exception("LOS DATOS SE ENCUENTRAN VACIOS");

    if($accionDeseada === "AgregarEmpleado")
    {
        //Sin Terminar
    }





} catch (Exception $ex) 
{
    echo "ERROR : " + $ex -> getMessage();
}






