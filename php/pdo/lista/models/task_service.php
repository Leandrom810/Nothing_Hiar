<?php
    class TaskService{
        private $connection;
        private $task;
        public function __construct(Connection $connection, Task $task)
        {
            $this->$connection = $connection->Connect();
            $this->$task = $task;
        }
        public function insert(){
            $query = 'INSERT INTO tasktable(task) values(:task)';
            
        }

        public function request(){


        }

        public function update(){


        }

        public function delete(){


        }
    }

?>