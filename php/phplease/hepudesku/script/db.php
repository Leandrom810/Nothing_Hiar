<?php
    session_start();
    $database = array();
    for($y = 0; $y < count($database); $y++){
        for($x = 0; $x < count($database[0]); $x++){
            $database[$x][$y] =  $_SESSION[$y][$x];
        }
    }
    


?>