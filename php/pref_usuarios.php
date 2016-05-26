<?php
session_start();
include("acceso_db.php");
$pos_panel = $_GET["pos_panel"];
$idioma = $_GET["lang"];
$nombre_de_usuario = $_SESSION['usuario_nombre'];
$fondo_del_panel = $_GET["backpanel"];

// Ejecutamos la consulta 
 if($pos_panel) {

// Creamos los datos si no existen
$last_user_id = $database->insert("pref_usuarios", [
	"usuario" => $nombre_de_usuario,
	"pos_panel" => $pos_panel,
	"lang" => $idioma,
	"colorpicker" => $fondo_del_panel
]);

// Si existen los datos serán actualizados 
$database->update("pref_usuarios", [
"usuario" => $nombre_de_usuario,
	"pos_panel" => $pos_panel,
	"lang" => $idioma,
	"colorpicker" => $fondo_del_panel
], [
	"usuario" => $nombre_de_usuario
]);

 } else { echo "Algo ha fallado, lamentamos las molestias"; }



