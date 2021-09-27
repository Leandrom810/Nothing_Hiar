<?php
    session_start();
    require("script/db.php");

    
    $ins = count($database) + 1;
    $pq = array_push($database, $_POST["title"], $_POST["select"], $_POST["desc"]);

    for($y = 0; $y < count($database); $y++){
        for($x = 0; $x < count($database[0]); $x++){
            print_r($database[$y][$x]);
        }
    }

    echo $_SESSION[""];

?>