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
            <div>
                <h3 id="content-title">Hoje a noite eu sonhei com esse cara e pqp eu to com medo ele é bonito ta</h3>
                <div>
                    <img src="img/AmongE2.png" alt="">
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi laborum expedita ipsam esse
                    pariatur voluptates necessitatibus, veritatis vel eius nulla rerum dolore. Expedita illum autem
                    alias unde quae delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet
                    nihil, at error libero qui ab possimus quod tempora inventore sequi nemo quis iure, dolores eligendi
                    corporis molestias. Cumque, dicta!</p>
            </div>

        </div>
        <span class="clearfix"></span>
    </div>

    <footer>
        <span>
            Bisky&copy;
            <?php
                include("php/db.php");
                include("php/query.php");
                $result = mysqli_query($conn, $selectquery);
                if(mysqli_num_rows($result) > 0){
                while($row = mysqli_fetch_assoc($result)){
                echo $row["id"]. " ". $row["title"] . " " . $row["content"] . "<br>" . $row["data"] . "<br>";

                }
            } else {
            echo "Não há dados ainda meu caro.";
            }
            mysqli_close($conn);
            ?>
        </span>
    </footer>
    <script src="script/index.js"></script>

</body>

</html>