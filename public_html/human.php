<?php

  require_once("./inc/functions.inc");

 ?>
 <!DOCTYPE html>
 <html lang="es" dir="ltr">
   <head>
     <script src="https://www.google.com/recaptcha/api.js" async defer></script>
     <meta charset="utf-8">
     <title>Humano?</title>
   </head>
   <body>
     <form action="" method="POST">
      <div class="g-recaptcha" data-sitekey="http://lordsergio.online"></div>
      <br/>
      <input type="submit" value="Submit">
    </form>
   </body>
 </html>
