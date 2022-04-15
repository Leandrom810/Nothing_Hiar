<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlgumBlog</title>
    <!--CDN do motivo pelo qual eu tenho problemas de auto estima-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
    <!--CSS-->
    <link rel="stylesheet" href="style/normalize.css">
    <link rel="stylesheet" href="style/style.css">
</head>

<body>
    <header>
        <nav>
            <div class="mynav">
                <a href="index.php">Home</a>
                <a href="posts.php">Posts</a>
                <a href="about.php">About</a>
                <a href="contact.php">Contact</a>
            </div>
        </nav>
    </header>
    <div id="content">
        <div>
            <form action="php/composer.php" method="post">
                <input type="text" name="title" id="title" placeholder="Titulo">
                <br>
                <textarea name="content" id="content" cols="30" rows="10" placeholder="Conteúdo"></textarea>
                <hr>
                <button type="submit">Criar</button>
            </form>
        </div>
        <span class="clearfix"></span>
    </div>

    <footer>
        <span>
            Bisky&copy;
    </footer>
    <script src="script/index.js"></script>

</body>

</html>