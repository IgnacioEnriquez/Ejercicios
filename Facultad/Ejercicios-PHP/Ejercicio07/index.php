<?php

$fechaCompleta;
$fechaDia;
$fechaMes;

$fechaCompleta = date("c") . "<br/>";
echo $fechaCompleta;
echo date("r") . "<br/>";
echo date("u") . "<br/>";

$fechaMes = 12; //intval(substr($fechaCompleta,5,2));
$fechaDia = 21; //intval(substr($fechaCompleta,8,2));
echo $fechaDia . "<br/>";
echo $fechaMes . "<br/>";

switch ($fechaMes) {
    
    case 1: //enero
    
        case 2:    //febrero    
        
            case 3:     //marzo 
                            
                if($fechaMes == 3)                    
                {                        
                    if($fechaDia <= 20) 
                    {
                        echo "Estamos en la estacion de Verano";  
                    }
                    else
                    {
                        echo "Estamos en la estacion de Otoño";
                    }                       
                                                     
                }
                else
                {
                    echo "Estamos en la estacion de Verano";                                
                }                                                  

                break;
                
                case 4: //abril        
                
                    case 5: //mayo
                        
                        case 6: //junio

                            if($fechaMes == 6)
                            {
                                if($fechaDia <= 20)                     
                                {                        
                                    echo "Estamos en la estacion de Otoño";                      
                                }                    
                                else                    
                                {                    
                                    echo "Estamos en la estacion de Invierno";                    
                                } 

                            }

                            break;                 

                    case 7: //Julio
                        case 8: //Agosto
                            case 9: //Septiembre

                                
                                if($fechaMes == 9)                            
                                {                                
                                    if($fechaDia <= 20)                                                                         
                                    {                                                        
                                        echo "Estamos en la estacion de Invierno";                                                    
                                    }                                                    
                                    else                                                    
                                    {                                                    
                                        echo "Estamos en la estacion de Primavera";                                              
                                    }                             
                                }          

                                break;       
                                
                                case 10:                                
                                    case 11:
                                        case 12:

                                            
                                            if($fechaMes == 12)                            
                                            {                                 
                                                if($fechaDia <= 20)                                                 
                                                {                                                            
                                                    echo "Estamos en la estacion de Primavera";                                                  
                                                }                                                    
                                                else                                                    
                                                {                                                    
                                                    echo "Estamos en la estacion de Verano";                                                
                                                }                             
                                            }
                            
                                            break;             
    
    default:
        # code...
        break;
}


?>