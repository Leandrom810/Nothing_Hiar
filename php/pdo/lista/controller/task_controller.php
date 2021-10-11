<?php
    require "../connection.php";
    require "../models/task.php";
    require "../models/task_service.php";
    $task = new Task();
    $task->__set("task", $_POST["task"]);
    $connection = new Connection();
    $taskService = new TaskService($connection, $task);
    

?>