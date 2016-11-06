<?php
require_once 'medoo.php'; // Llamamos a la libreria para manejar la base de datos
// Hacemos la conexión
$database = new medoo([
    'database_type' => 'mysql', // Tipo de base de datos
    'database_name' => 'layanos_n', // Nombre de la tabla
    'server' => 'localhost', // Servidor
    'username' => 'root', // Usuario
    'password' => 'h5gg6s23', // Contraseña
    'charset' => 'utf8' // Codificación 
]);
?>
