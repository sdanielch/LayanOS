<?php
session_start();
header('Content-type: image/jpeg');
$blurred = '../home/'.$_SESSION['usuario_nombre'].'/config/wallpaper.jpg';
if (file_exists('../home/'.$_SESSION['usuario_nombre'].'/config/wallpaper_blur.jpg')) {
  include('../home/'.$_SESSION['usuario_nombre'].'/config/wallpaper_blur.jpg');
} else {
  $image = new Imagick($blurred);
  $image->blurImage(0,8);
  $image->modulateImage(50, 50, 100);
  $image->setImageFormat ("jpeg");
  file_put_contents ('../home/'.$_SESSION['usuario_nombre'].'/config/wallpaper_blur.jpg', $image);
  echo $image;
  $image->clear();
  $image->destroy();
}

?>
