<?php
function connectaBBDD($server, $user, $passwd, $namebbdd){
  $mysqli = new mysqli($server, $user, $passwd, $namebbdd);
  if (!$mysqli->connect_errno) {
    $mysqli->set_charset("utf8");
  }else {
    $mysqli = false;
  }
  return $mysqli;
}
 ?>
