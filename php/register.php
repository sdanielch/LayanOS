<?php
require_once 'database.php';
$reg_nombre = $_POST['reg_nombre1'];
$reg_apellidos = $_POST['reg_apellidos1'];
$reg_usuario = $_POST['reg_usuario1'];
$reg_password = $_POST['reg_password'];
$reg_email = $_POST['reg_email1'];
$fecha = $_POST['fecha'];

if ($database->has("usuarios", ["usuario" => $reg_usuario]))
{
// SI Existe no podemos introducir los datos
echo "El usuario ya existe en nuestra base de datos";
}
else
{
// PROCEDEMOS A CREAR EL USUARIOS
  $database->insert('usuarios', [
      'usuario' => $reg_usuario,
      'password' => $reg_password,
      'nombre' => $reg_nombre,
      'apellidos' => $reg_apellidos,
      'email' => $reg_email,
      'idioma' => 'spanish',
      'registrado' => $fecha
  ]);
echo "Usuario creado en nuestra base de datos";
}


?>
