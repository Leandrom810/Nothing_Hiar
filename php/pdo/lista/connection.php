<?php
    class Connection{
        private $host = 'localhost';
        private $dbname = 'taskDB';
        private $user = 'root';
        private $pass = '...';
        public function Connect(){
            try{
                $connection = new PDO(
                    "mysql:host=$this->host;dbname=$this->dbname",
                    "$this->user",
                    "$this->pass"
                );
                return $connection;

            }catch(PDOException $e){
                echo "<p>" . $e->getMessage() .  "</p>";
            }
        }
    }

?>