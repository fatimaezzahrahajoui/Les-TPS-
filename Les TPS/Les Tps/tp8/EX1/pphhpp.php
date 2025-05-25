<?php

    if(isset($_POST["button"])){
        $num1 = strip_tags(($_POST["num1"]));
        $num2 = strip_tags(($_POST["num2"]));
        $op = strip_tags($_POST["operation"]);
    }
    switch ($op){
        case 'add' : 
            echo "<h1> le résultat est : " . $num1 + $num2 . "</h1>";
            break;
        case 'sub' : 
            echo "<h1> le résultat est : " . $num1 - $num2 . "</h1>";
            break;
        case 'div' : 
            if($num2 != 0){
                echo "<h1> le résultat est : " . $num1 / $num2 . "</h1>";
            }else{
                echo"<h1> ERROR </h1>";
            }
            break;
            
        case 'mul' : 
            echo "<h1> le résultat est : " . $num1 * $num2 . "</h1>";
            break;    
        
        default:
            echo "<h1> pas d'operation </h1>";
            break;
    }
        
        
    
?>