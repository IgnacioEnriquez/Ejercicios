<?php

$operador = "/";
$op1 = 10;
$op2 = 5;

switch ($operador) 
{      
    case '+':
        echo $op1 + $op2;      
        break;    
        
        case '/':
            if($op2 == 0)
            {
                $op2 / 1 ;
            }
            else
            {            
                echo $op1 / $op2;    
            }        
            break; 
            
            case '-':  
                echo $op1 - $op2;      
                break;

                case '*':        
                    echo $op1 * $op2;
                    break;
        
    default:
        echo "El signo es incorrecto";
        break;
}

?>