<?php
session_start();
header('Content-type: image/jpeg');
$directorio_usuario2 = '../home/'.$_SESSION['usuario_nombre'].'/config/wallpaper.jpg';
//$image = new Imagick('../img/wallpaper-city-america-background-158751.jpg');

//$image->blurImage(0,4);
//echo $image

include($directorio_usuario2);


?>
