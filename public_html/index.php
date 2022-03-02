<?php
require_once("./inc/functions.inc");
  $mysqli = connectaBBDD("localhost", "id17678852_sergio", "Daw22022SGR.", "id17678852_portafoliodb");



  if (!$mysqli) {
    echo "Error: Conexió amb BBDD";
    exit();
  }

  $user = isset($_POST["user"])?$_POST["user"]:"";
  $pass = isset($_POST["pass"])?$_POST["pass"]:"";


    $sql = "SELECT nom, contrasenya FROM users";
    $result = $mysqli->query($sql);

    while ($row = $result->fetch_array()) {
      if ($row["nom"] == $user && $row["contrasenya"] == $pass) {
         header("location: ./content.html");
      }
    }


 ?>
<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./inc/estilo.css">
    <title>Login to LordSergio</title>
  </head>
  <body id="index">
    <form action="index.php" method="post">
      <h3>User Name: <input type="text" name="user"></h3>
      <h3>Password: <input type="password" name="pass"></h3>
      <input type="submit" value="Ok, let's goooo!!!">
    </form>
  </body>
</html>
