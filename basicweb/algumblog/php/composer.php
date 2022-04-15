<?php
include("db.php");
include("query.php");

$title = $_POST["title"]."\n";

$content = $_POST["content"]."\n";

    // INSERT INTO posts (ID, title, content)
    // VALUES (
    //     ID:int,
    //     'title:varchar',
    //     'content:varchar'
    //   );

$sql = "INSERT INTO posts (title, content)
    VALUES(
        '$title',
        '$content'
        );
";
if($conn->query($sql) === TRUE){
    echo"Conexão bem sucedida.";
} else {
    "Falha na conexão! motivo: ". $sql . "<br>" . $conn->error;
}

header("Location: ../index.php");

?>