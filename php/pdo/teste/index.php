<?php
    require("obj/query.php");
    $dsn = "mysql:host=localhost;dbname=pdo";
    //FUI HOCKIADO
    
    try{
        $connection = new PDO($dsn, "root", "...");
        $myQuery = $connection->query(selectById(7));

        echo "<pre>";
            print_r($myQuery->fetch(PDO::FETCH_OBJ)->email);
        echo "</pre>";

        /*foreach ($myQuery->fetch(PDO::FETCH_OBJ) as $result){
            echo "<pre>";
            print_r($result->email);
            echo "</pre>";
        }*/

      
    } catch(PDOException $e){
        echo "Erro: " . $e->getCode() . "<br>" . "Mensagem: " . $e->getMessage();
    }

?>