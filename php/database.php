<?php
require_once 'medoo.php'; // Llamamos a la libreria para manejar la base de datos
// Hacemos la conexión
$database = new medoo([
    'database_type' => 'mysql', // Tipo de base de datos
    'database_name' => 'layanos', // Nombre de la tabla
    'server' => 'localhost', // Servidor
    'username' => 'root', // Usuario
    'password' => '', // Contraseña
    'charset' => 'utf8' // Codificación
]);
?>
