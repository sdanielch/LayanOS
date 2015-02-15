<?php
session_start();
  include('acceso_db.php'); // incluímos los datos de acceso a la BD
// Leemos las preferencias de usuario
$pref_usuario = mysql_query("SELECT * FROM pref_usuarios WHERE usuario ='".$_SESSION['usuario_nombre']."'") or die(mysql_error());
if(mysql_num_rows($pref_usuario)) { 
$row = mysql_fetch_array($pref_usuario);
$PREF_pos_panel = $row["pos_panel"];
$PREF_BACKGROUNDPANEL = $row["colorpicker"];

}
