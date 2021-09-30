<?php
    //importing packages
    require("./libs/PHPMailer/src/PHPMailer.php");
    require("./libs/PHPMailer/src/Exception.php");
    require("./libs/PHPMailer/src/SMTP.php");
    include_once("php/mail.php");
    //importing classes
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    use mail\Message;
    print_r($_POST);
    echo "<br>";
    echo "<br>";
    $mail = new PHPMailer(true);

    $message = new Message();

    $message->__set("email", $_POST["email"]);
    $message->__set("title", $_POST["title"]);
    $message->__set("message", $_POST["message"]);
    if($message->validateMessage()){
        print_r($message);
    } else{
        echo "Não é válido haha n tem argumentos XD";
    }
    try{
        //imagine having to copy and paste a code hahhaahahah what a shame...
            
        //Server settings
        $mail->SMTPDebug = 2;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp-relay.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'monky';                     //SMTP username
        $mail->Password   = 'monkey';                               //SMTP password
        $mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('donipifa@altmails.com', 'Mailer');
        //$mail->addAddress('donipifa@altmails.com', 'Lmao');     //Add a recipient
        $mail->addAddress('ellen@example.com');               //Name is optional
        //$mail->addReplyTo('donipifa@altmails.com', 'Response');
        //$mail->addCC('cc@example.com');
        //$mail->addBCC('bcc@example.com');

        //Attachments
        //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'sadge você copiou e colou códigos...';
        $mail->Body    = 'sadge <b>monkaE!</b>';
        $mail->AltBody = 'COPY AND PASTE THIS 5 TIME OR HE WILL COME AFTER YOU MonkaOMEGA';

        $mail->send();
        echo 'Message has been sent';
        //THIS IS CRINGE
    } catch(Exception $e){
        echo "Mensagem não pôde ser enviada! erro:{$mail->ErrorInfo}";
    }

?>