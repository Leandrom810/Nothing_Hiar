<?php
    require("script/db.php");
    session_start();
    for($y = 0; $y < count($database); $y++){
        for($x = 0; $x < count($database[0]); $x++){
            echo $_SESSION[$y][$x];
        }
        echo "<br>";
    }
    echo $_SESSION[1][1];

?>