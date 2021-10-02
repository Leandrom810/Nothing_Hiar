<?php 
    $file = fopen("data/lista.db", "a");
    $compose = $_POST["texto"] . PHP_EOL;
    fwrite($file, $compose);
    fclose($file);
    header("Location: index.php");
?>