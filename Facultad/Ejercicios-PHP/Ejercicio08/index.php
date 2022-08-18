<?php

$numero = 45;
$numeroConvertido = '';

for ($i = 0; $i < strlen($numero); $i++) {
    $numeroAConvertir = substr($numero, $i, 1);

    if ($i == 1) {
        switch ($numeroAConvertir) {

            case '1':
                $numeroConvertido .= 'uno';
                break;

            case '2':
                $numeroConvertido .= 'dos';
                break;

            case '3':
                $numeroConvertido .= 'tres';
                break;

            case '4':
                $numeroConvertido .= 'cuatro';
                break;

            case '5':
                $numeroConvertido .= 'cinco';
                break;

            case '6':
                $numeroConvertido .= 'seis';
                break;

            case '7':
                $numeroConvertido .= 'siete';
                break;

            case '8':
                $numeroConvertido .= 'ocho';
                break;

            case '9':
                $numeroConvertido .= 'nueve';
                break;

            default:
                # code...
                break;
        }
    } else {

        switch ($numeroAConvertir) {
            case '2':
                $numeroConvertido .= 'veint';
                break;

            case '3':
                $numeroConvertido .= 'treinta';
                break;

            case '4':
                $numeroConvertido .= 'cuarenta';
                break;

            case '5':
                $numeroConvertido .= 'cincuenta';
                break;

            case '6':
                $numeroConvertido .= 'sesenta';
                break;

            default:
                # code...
                break;
        }

        if (substr($numero, 1, 1) == '0') 
        {
            if (strpos($numeroConvertido, 'veint') !== false) 
            {
                $numeroConvertido .= 'e';
            }
        } else 
        {
            if (strpos($numeroConvertido, 'veint') !== false) 
            {
                $numeroConvertido .= 'i';
            } else 
            {
                $numeroConvertido .= ' y ';
            }
        }
    }
}

echo $numeroConvertido;

?>
