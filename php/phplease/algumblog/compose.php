<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- cringe below -->
    <link rel="stylesheet" href="style/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous">
    </script>
    <!-- End of cringe -->
    <!-- AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA -->
    <!-- THE SAME 3 EXTERNAL IMPORTS forsenInsane forsenInsane forsenInsane forsenInsane forsenInsane  -->
    <title>Algum Blog</title>
</head>

<body>
    <h1>Imagine a blog here lmao... Ill do just what I most hate in web development... INTERFACE BUILDING HAHAHAHAHAH
        LET THE TORTURE BEGIN</h1>

    <!-- cara desculpa mas eu me recuso a torrar meus neurônios com coisas inuteis -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="nav-link" href="index.php">home</a>
        <a class="nav-link" href="compose.php">compose</a>
        <a class="nav-link" href="about.php">about</a>

    </nav>
    <br>
    <br>
    <br>
    <form method="POST" action="process.php">
        <div id="title-comp">
        <input name="title" type="text" placeholder="Title">
        </div>
        <div id="text-comp">
        <textarea name="content" cols="23" rows="5"></textarea>
        </div>
        <button class="btn btn-outline-primary" type="submit">Post On Blog</button>
    </form>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="scripts/script.js"></script>
</body>

</html>