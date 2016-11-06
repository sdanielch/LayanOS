<?php
session_start();
if (isset($_SESSION['usuario'])) {
// SI EXISTE...
// Iniciamos la base de datos
require_once 'database.php';
// Extraemos algunos datos de usuario de la base de datos
$n_nombre = $database->get("usuarios", "nombre",[ "usuario" => $_SESSION['usuario']]);
$n_apellidos = $database->get("usuarios", "apellidos",[ "usuario" => $_SESSION['usuario']]);
$n_registrado = $database->get("usuarios", "registrado",[ "usuario" => $_SESSION['usuario']]);
// Devolvemos "true" si existe una sesión abierta
echo json_encode( array(
  "session"=>"true", // Estado de la sesión
  "usuario"=>$_SESSION['usuario'], // Nickname de usuario
  "nombre"=>$n_nombre, // Nombre real del usuario
  "apellidos"=>$n_apellidos, // Apellidos del usuario
  "registrado"=>$n_registrado // Fecha y hora del registro del usuario
 ) );
} else {
// Devolvemos "false" si NO existe una sesión abierta
echo json_encode( array(
  "session"=>"false", // Estado de la sesión
  "usuario"=>"default" // Usuario default
 ) );
}
?>
