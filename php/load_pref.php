<?php
//session_start();
$usuario_nombre = $_SESSION['usuario_nombre'];
include('acceso_db.php'); // incluímos los datos de acceso a la BD
$PREF_pos_panel = $database->get("pref_usuarios", "pos_panel", [
    "usuario" => $usuario_nombre
]);
$PREF_BACKGROUNDPANEL = $database->get("pref_usuarios", "colorpicker", [
    "usuario" => $usuario_nombre
]);