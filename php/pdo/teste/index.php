<?php
    $dsn = "mysql:host=localhost;dbname=pdo";
    //FUI HOCKIADO
    
    try{
        $connection = new PDO($dsn, "root", "...");
    } catch(PDOException $e){
        echo "Erro: " . $e->getCode() . "<br>" . "Mensagem: " . $e->getMessage();
    }

?>