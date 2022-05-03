<?php
  require_once("./inc/functions.inc");


  $mysqli = connectaBBDD("localhost", "id17678852_sergio", "Daw22022SGR.", "id17678852_portafoliodb");

  if (!$mysqli) {
    echo "Error: Conexió amb BBDD";
    exit();
  }

  $user = isset($_POST["user"])?$_POST["user"]:"";
  $pass = isset($_POST["pass"])?$_POST["pass"]:"";
  $mail = isset($_POST["mail"])?$_POST["mail"]:"";

  if ($user != "" && $pass != "" && $mail != "") {
    $sql = "INSERT INTO users  (nom, contrasenya, mail, confirmed, pending) VALUES ('$user', $pass, '$mail', 0, 1)";
    $result = $mysqli->query($sql);

    if ($result) {
      header('location:./index.php?error=0');
      mail("sergiogarcia2002@ginebro.cat", "Nuevo registro", "Nuevo registro realizado esperando su confirmación Lord sergio http://lordsergio.online/adminer.php");
      exit();
    }else{
      header('location:./index.php?error=1');
      exit();
    }
  }
 ?>
 <!DOCTYPE html>
 <html lang="es" dir="ltr">
   <head>
     <meta charset="utf-8">
     <title>Register | LordSergio</title>
   </head>
   <body>
     <body id="index">
       <form action="register.php" method="post">
         <h3>User Name: <input type="text" name="user"></h3>
         <h3>Email: <input type="email" name="mail"></h3>
         <h3>Password: <input type="password" name="pass"></h3>
         <input type="submit" value="Ok, let's goooo!!!">

       </form>
     </body>
   </body>
 </html>
