<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal społecznościowy</title>
    <link rel="stylesheet" href="styl5.css">
</head>
<body>
    <header id="banerL">
        <h2>Nasze osiedle</h2>
    </header>
    <header id="banerP">
        <?php
        echo "skrypt1";
        $conn = new mysqli('localhost','root','','4eG_1_portal');
        $sql = "select count(*) from dane;";
        $result = $conn -> query($sql);
        $row = $result -> fetch_array();
        echo "Liczba użytkowników portalu: $row[0]";
        

        $conn->close();

        ?>
    </header>

    <section id="sectionL">
        <h3>Logowanie</h3>
        <br>
        <form method="post">
            <p>Login</p><br>
            <input type="text" id="login">
            <br>
            <p>Hasło</p>
            <br>
            <input type="password" id="haslo">
            <input type="submit" id="wyslij" value="Wyślij">
            

        </form>

    </section>
    <section id="sectionP">
        <h3>Wizytówka</h3>
        <div id="wiz">
            <?php
            echo "skrypt2";
            ?>
        </div>
    </section>
    <footer>
        <p>Stronę wykonał : 0000000000</p>
    </footer>
</body>
</html>