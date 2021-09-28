<?php
    session_start();
    require("script/db.php");

    
    $ins = count($database) + 1;
    array_push($database, array($_POST["title"], $_POST["select"], $_POST["desc"]));

    for($y = 0; $y < count($database); $y++){
        for($x = 0; $x < count($database[0]); $x++){
            $_SESSION[$x][$y] =  $database[$y][$x];
        }
    }
    for($y = 0; $y < count($database); $y++){
        for($x = 0; $x < count($database[0]); $x++){
            echo $_SESSION[$y][$x];
        }
        echo "<br>";
    }
    header("Location: testzone.php");

?>