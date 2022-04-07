<?php
require_once("./inc/functions.inc");
  $mysqli = connectaBBDD("localhost", "id17678852_sergio", "Daw22022SGR.", "id17678852_portafoliodb");

  $error = isset($_GET["error"])?$_GET["error"]:"";

  if (!$mysqli) {
    echo "Error: Conexió amb BBDD";
    exit();
  }

  $user = isset($_POST["user"])?$_POST["user"]:"";
  $pass = isset($_POST["pass"])?$_POST["pass"]:"";


    $sql = "SELECT nom, contrasenya, confirmed, human FROM users";
    $result = $mysqli->query($sql);

    while ($row = $result->fetch_array()) {
      if ($row["nom"] == $user && $row["contrasenya"] == $pass && $row["confirmed"] == 1 && $row["human"] == 1 && $row["admin"] == 5) {
        header("location: ./adminer.php");
      }elseif ($row["nom"] == $user && $row["contrasenya"] == $pass && $row["confirmed"] == 1 && $row["human"] == 1) {
         header("location: ./content.html");
      }elseif ($row["nom"] == $user && $row["contrasenya"] == $pass && $row["confirmed"] == 1 && $row["human"] == 0) {
        header("location: ./human.php");
      }
    }

if ($error == "") {

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
      <input type="submit" value="Ok, let's goooo!!!"><br />
      <a href="./register.php">¿Quieres formar parte de la familia?😎😎😎</a>
    </form>
  </body>
</html>
<?php
}elseif ($error == 0) {
  echo "<h1>Registro completado!!!<br /> Cuando un administrador valide su usuario recivira un correo confirmando su acceso.</h1>
        <br /><h2><a href='./index.php'>Volver al Login</a></h2>";
}elseif ($error == 1){
  echo "<h1>Registro Fallido!!!</h1><br />
        <h2><a href='./register.php'>Volver a intentar registro</a></h2><br />
        <h2><a href='./index.php'>Volcer al Login</a></h2>";
}
 ?>
