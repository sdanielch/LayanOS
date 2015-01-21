<?php
//comprobamos que sea una petición ajax
session_start();
$where_is_it = '../home/'.$_SESSION['usuario_nombre'].'/config/';
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest')
{

  //obtenemos el archivo a subir
  $file = $_FILES['archivo']['name'];
 if ($file) {
  //comprobamos si existe un directorio para subir el archivo
  //si no es así, lo creamos
  if(!is_dir("$where_is_it"))
  mkdir("$where_is_it", 0777);
  unlink($where_is_it.'wallpaper.jpg');
  unlink($where_is_it.'wallpaper_blur.jpg');

  //comprobamos si el archivo ha subido
  if ($file && move_uploaded_file($_FILES['archivo']['tmp_name'],"$where_is_it".'wallpaper.jpg'))
  {
    sleep(1);//retrasamos la petición 3 segundos
    echo $file;//devolvemos el nombre del archivo para pintar la imagen
  }
  
}
}else{
  throw new Exception("Error Processing Request", 1);
}
