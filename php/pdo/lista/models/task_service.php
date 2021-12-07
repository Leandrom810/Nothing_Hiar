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
            $preparation = $this->connection->prepare($query);
            $preparation->bindValue(':task', $this->task->__get('task'));
            $preparation->execute();
        }

        public function request(){
            $query = 'SELECT id, id_status, task FROM TB_TASK';
            $preparation = $this->connection->prepare($query);
            $preparation->execute();
            $preparation->fetchAll(PDO::FETCH_OBJ);

        }

        public function update(){


        }

        public function delete(){


        }
    }

?>