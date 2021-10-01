<?php
    $file = fopen("data/data.db", "a");
    $composition = $_POST["title"] . "/" . $_POST["content"] . PHP_EOL;
    fwrite($file, $composition);
    fclose($file);
    header("Location: index.php");
?>