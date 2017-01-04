<?php
header('Content-Type: charset=utf-8');
//Primero recogemos los datos de la ciudad del visitante:
$CITY = $_GET['city'];
$COUNTRY = $_GET['country'];
$CITY = preg_replace("/&#?[a-z0-9]+;/i","",$CITY);
$COUNTRY = preg_replace("/&#?[a-z0-9]+;/i","",$COUNTRY); 
$CITYANDCOUNTRY = $CITY . $COUNTRY;
$SERVIDOR = 'http://api.apixu.com/v1/current.json?key=61c52dff58054815899120043162008';

// Si existe el fichero se inicia el condicional, si no no devuelve el else,
// pero para que se devuelva el else es necesario que el fichero no tenga mas
// de 6 horas desde su ultima edicion

// De esta forma limitamos el número de peticiones al servidor APIXU

$file_name22 = $CITYANDCOUNTRY . '_weather.json';
if (time()-filemtime($file_name22) > 6 * 3600) {
// Cuando el fichero es demasiado antiguo o no existe...
	$PETICION = htmlspecialchars_decode($SERVIDOR."&q=".$CITY.",".$COUNTRY);
file_put_contents($file_name22, fopen($PETICION, 'r'));
$datos_recibidos = file_get_contents($file_name22);
// Y una vez descargado se envia como JSON
echo json_encode($datos_recibidos);
} else {
// Si el archivo existe y tiene una antiguedad inferior a 6 horas en el servidor
// Leemos el documento y lo enviamos como JSON
  $datos_recibidos = file_get_contents($file_name22);
  echo json_encode($datos_recibidos);
}
?>
