<?php
session_start();
if (isset($_SESSION['usuario'])) {
$PREF1 = $_GET['pref1'];
$PREF2 = $_GET['pref2'];
$PREF3 = $_POST['pref3'];
$PREF4 = $_POST['pref4'];
$url_externa = $_GET['url_externa'];
if ( $url_externa == "true" ) {
	// Si es true descargamos el fondo y lo situamos en la carpeta de fondos, como el nombre es variable lo guardamos con el nombre de su MD5.
$url_local = "../users/" .$_SESSION['usuario']. "/Fondos/temp_image.jpg";
$content = file_get_contents($PREF1);
file_put_contents($url_local, $content);
rename($url_local, "../users/" .$_SESSION['usuario']. "/Fondos/" . md5($url_local) . ".jpg");
unlink($url_local);
} else {
	// Pero si es otra cosa lo ponemos como false
	$url_externa = false;
}
$hoy = getdate();
$preferencias_de_usuario = json_encode( array(
  "dia_ultimo_acceso"=>$hoy[mday]."/".$hoy[mon]."/".$hoy[year],
  "hora_ultimo_acceso"=>$hoy[hours].":".$hoy[minutes].":".$hoy[seconds],
  "url_fondo_de_pantalla"=>$PREF1,
  "color"=>$PREF2,
  "css_alternativo"=>$PREF3,
  "url_externa"=>$url_externa,
 ) );
$guardar_pref = fopen("../users/".$_SESSION['usuario']."/user_pref.json","w");
$testwriting = fwrite($guardar_pref,utf8_encode($preferencias_de_usuario));
if ($testwriting == 0) {
  echo "Ocurrió un error al intentar guardar las preferencias.";
} else {
  echo "Teoricamente se han guardado las preferencias";
}
fclose($file);

} else {
  echo "No hay ninguna sesión activa, no puedo guardar preferencias.";
}
?>
