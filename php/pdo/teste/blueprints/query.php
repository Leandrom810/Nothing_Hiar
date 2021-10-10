<?php
    $maketable = "create table table_users(
    id int not null primary key auto_increment,
    name varchar(50) not null,
    email varchar(255) not null,
    pass varchar(32) not null
    )";
    $insert_test = 'INSERT INTO table_users(
        name, email, pass) values(
            "Leandro", "funkypudimcat@gmail.com", "macaco"
        )';
    $insert_test1 = 'INSERT INTO table_users(
        name, email, pass) values(
            "Eu", "eu@gmail.com", "?"
        )';
    $insert_test2 = 'INSERT INTO table_users(
        name, email, pass) values(
        "ta", "ta@gmail.com", "óelasecomporta"
        )';
    $selectAll = 'SELECT * FROM table_users';

    function selectById($id){
        return 'SELECT * FROM table_users where id = ' . $id;
    }
    

?>
