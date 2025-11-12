<?php
    include "service/database.php";
    session_start();


    $login_message= "";
    if(isset($_SESSION["is_login"])){
        header("location: dashboard.php");
    }
    if(isset($_POST['login'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $sql="SELECT * FROM users where username='$username' and password='$password'";

        $result=$db ->query($sql);

        if ($result->num_rows>0) {
            $data = $result->fetch_assoc();
            $_SESSION ["username"]= $data["username"];
            $_SESSION["is_login"] = true;
            header("location: dashboard.php");
        } else{
            $login_message="data anda belum register bosss";
        }

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

        <i><?= $login_message?></i>
        <form action="login.php" method="POST"> 
            <h2>Masuk Akun</h2>
            <input type="text" placeholder="username" name="username">
            <input type="password" placeholder="password" name="password">
            <button type="submit" name="login"> masuklah sekarang</button>
        </form>

        <?php include"layout/footer.html"?>

    </body>
</html>