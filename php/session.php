<?php
require_once 'database.php';
session_start();
if (isset($_SESSION['usuario'])) {
  // SESION INICIADA
$n_nombre = $database->get("usuarios", "nombre",[ "usuario" => $_SESSION['usuario']]);
$n_apellidos = $database->get("usuarios", "apellidos",[ "usuario" => $_SESSION['usuario']]);
    echo "La sesión está iniciada con el usuario: " . $n_nombre . " " . $n_apellidos . " - NICKNAME: " . $_SESSION['usuario'];
    ?>
<br />Puede <a href="logout.php">cerrar sesión</a> pulsando "Cerrar sesión"
    <?php
} else {
  // SESION NO INICIADA
    echo "No hay ninguna sesión iniciada en el servidor";
}
?>
