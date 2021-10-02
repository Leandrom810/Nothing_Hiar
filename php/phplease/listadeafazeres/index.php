<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
    <div id="mainframe">
        <div id="frame">
            <?php
                $file = fopen("data/lista.db", "r");
                $content = explode(PHP_EOL, fread($file, 100000));
                foreach ($content as $line){?>
                    <div class="content">
                        <?php echo $line; ?>
                    </div>
               <?php }
                fclose($file);
               ?>
               <form  method="POST" action="process.php">
                   <div id="but" class="form-group">
                   <input class="form-control" name="texto" type="text" placeholder="escreva algo :)">
                   </div>
                   <button class="btn btn-success" type="submit">+</button>
               </form>
        </div>

    </div>




<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="script/index.js">

</script>
</body>
</html>