

<?php 
    //sintaxes para mysql, sim, péssima prática (Y)
    /*create table posts(
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        content TEXT NOT NULL,
        data DATE,
        PRIMARY KEY(id)
    );*/
    
    include("db.php");
    $selectquery = "SELECT * FROM posts";
    
?>