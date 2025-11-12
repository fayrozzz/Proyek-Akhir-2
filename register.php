<?php
include "service/database.php";
session_start();

$register_message = "";

if(isset($_SESSION["is_login"])){
    header("location: dashboard.php");
}

if (isset($_POST["register"])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

        if($db->query($sql)) {
            $register_message="ok kerenn data anda masuk";
        }else {
            $register_message="mohon maaf, tetap semangat dan jangan putus asa";
        }
        $db = mysqli_connect("localhost", "root", " ", "buku_tamu");
    }

?>
<!DOCTYPE html>

<html>
    <head lang="en">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale-1">
        <title>lokalsumenep.id</title>

    </head>

    <body>

        <?php include"layout/header.html"?>
        <form action="register.php" method="POST">
            <h2>pendaftaran akun</h2>
            <i><?= $register_message?></i>
            <input type="text" placeholder="username" name="username">
            <input type="password" placeholder="password" name="password">
            <button type="submit" name="register"> daftarlah sekarang</button>
        </form>

        <?php include"layout/footer.html"?>

    </body>
</html>