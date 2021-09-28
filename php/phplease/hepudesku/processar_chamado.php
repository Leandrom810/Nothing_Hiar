<?php
    $file = fopen("db/data.hd", "a");

    $content = $_POST["title"] . "#" . $_POST["select"] . "#" . $_POST["desc"] . PHP_EOL;
    echo $content;
    echo "<br>";
    fwrite($file, $content);
    /*$abc = explode("#", $content);
    foreach ($abc as $a){
        echo $a . "<br>";
    }*/
    fclose($file);
    header("Location: abrir_chamado.php");
?>