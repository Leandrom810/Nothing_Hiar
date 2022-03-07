<?php
    $server = "localhost";
    $username = "root";
    $pass = "root";
    $database = "blogdb";
    
    //mysql
    $conn = mysqli_connect($server, $username, $pass, $database);

    //checar conexão
    if(!$conn){
        die("Erro: " . mysqli_connect_error() );

    }
?>