<?php
// Nos conectamos a la base de datos
require_once 'database.php';
// Leemos los datos del position
$log_usuario = $_POST['log_usuario'];
$log_password = $_POST['log_password'];
// Comprobamos si el usuario y la contraseña enviadas por el formulario existen y concuerdan en la base de datos
if($database->has("usuarios", [
    "AND" => [
        "OR" => [
     "usuario" => $log_usuario
     //"email" => "correo"
    ],
    "password" => $log_password
    ]
]))
{
echo "true";
// Iniciamos una nueva sesión en PHP
session_start();
// Introducimos una variable de sesión
$_SESSION['usuario'] = $log_usuario;
}
else
{
echo "false";
}

?>
