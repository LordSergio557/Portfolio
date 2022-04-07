<?php
  require_once("./inc/functions.inc");

  $mysqli = connectaBBDD("localhost", "id17678852_sergio", "Daw22022SGR.", "id17678852_portafoliodb");

  if (!$mysqli) {
    echo "Error: Conexió amb BBDD";
    exit();
  }

  $id = isset($_POST["id"])?$_POST["id"]:"";
  $btnPulsado = isset($_POST["btn"])?$_POST["btn"]:"";
  $mail = isset($_POST["mail"])?$_POST["mail"]:"";

  if ($btnPulsado == "Declinar") {
    echo $id;
    $sqlDelete = "DELETE FROM users WHERE id_user =".$id;
    $result = $mysqli->query($sqlDelete);
    if ($result) {
      mail($mail, "Validacion LordSergio", "Lo sentimos, un administrador ha denegado su solucitud de alta :(");
    }

  }elseif ($btnPulsado == "Aceptar") {
    $sqlUpdate = "UPDATE users SET pending = 0, confirmed = 1 WHERE id_user = ".$id;
    $result = $mysqli->query($sqlUpdate);

    if ($result) {
      mail($mail, "Validacion LordSergio", "Enorabuena, un administrador ha validado su ingreso en LordSergio, disfrute de su estancia :) http://lordsergio.online/login.php");
    }
  }

 ?>
 <!DOCTYPE html>
 <html lang="es" dir="ltr">
   <head>
     <meta charset="utf-8">
     <title>Admin | LordSergio</title>
   </head>
   <body>
     <form action="adminer.php" method="post">

     <?php

        $sql ="SELECT * FROM users WHERE pending = 1";
        $result = $mysqli->query($sql);

        echo "<table border='1'>";
        echo "<tr><th>Id</th><th>Nombre</th><th>Contraseña</th><th>mail</th></tr>";
        while ($row = $result->fetch_array()) {
          echo "<tr><td>".$row["id_user"]."<input type='hidden' name='id' value='".$row["id_user"]."'></td><td>".$row["nom"]."</td><td>".$row["contrasenya"]."</td><td>".$row["mail"]."<input type='hidden' name='mail' value='".$row["mail"]."'></td><td><input type='submit' name='btn' value='Declinar'></td><td><input type='submit' name='btn' value='Aceptar'></td></tr>";

        }
        echo "</table>";
      ?>
    </form>
   </body>
 </html>
