<?php 
     session_start();


    $users = array(
                                                        #gurasen é legitimo. Gura é filha do Forsen.
        array('email' => "forsen@baj.com", "password" => "gurasen"),
        array("email" => "funkypudimcat@gmail.com", "password" => "amonge")
    );
    /*echo "<pre>";
    print_r($users);
    echo "</pre>";
    */
    $CHECK = true;
    foreach($users as $user_app){
        if($_POST["email"] == $user_app["email"] && $_POST["password"] == $user_app["password"]){
            
            break;
        } else{
            $CHECK = false;
        }
    }
    if($CHECK == false){
        header("Location: index.php?login=USER NOT FOUND FORSENCD");
        $_SESSION["signed"] = false;
    } else{
        $_SESSION["signed"] = true;
        header("Location: home.php");
    }

?>