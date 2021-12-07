<?php
    require "../../connection.php";
    require "../../models/task.php";
    require "../../models/task_service.php";

    $action = isset($_GET['action']) ? $_GET['action'] : $action;

    if($action == 'insert'){
        $task = new Task();
        $task->__set("task", $_POST["task"]);
        $connection = new Connection();
        $taskService = new TaskService($connection, $task);
        $taskService->insert();
    
        header('location: nova_tarefa.php?inclusion=1');
    } else if($action == 'recover'){
        $task = new Task();
        $connection = new Connection();
        $taskService = new TaskService($connection, $task);
        $tasks = $taskService->request();
    }
?>