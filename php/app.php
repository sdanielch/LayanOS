 <?php
    session_start();
    include('acceso_db.php'); // incluímos los datos de acceso a la BD
    // comprobamos que se haya iniciado la sesión
    if(isset($_SESSION['usuario_nombre'])) {
    include('home.php'); 
    include('load_pref.php');
    $carga = sys_getloadavg();
?>
<!doctype html>
<html lang="es">
<head>
<?php require('header.php');?>	
<script>
function ppos_panel(valor){
if (valor == "a") { 
$("#sidebar").removeClass("sidebar-right sidebarbottom").addClass("sidebar-left");
$("#mdash").removeClass("mdashright mdashbottom").addClass("mdashleft");
 }
else if (valor == "b") {
$("#sidebar").removeClass("sidebar-left sidebarbottom").addClass("sidebar-right");
$("#mdash").removeClass("mdashleft mdashbottom").addClass("mdashright");
}
else if (valor == "c") {
$("#sidebar").removeClass("sidebar-left sidebar-right").addClass("sidebarbottom");
$("#mdash").removeClass("mdashleft mdashright").addClass("mdashbottom");
}
else { 
$("#sidebar").addClass("sidebar-left"); // Configuración por defecto
$("#mdash").removeClass("mdashright mdashbottom").addClass("mdashleft");
}
}

$(function(){
ppos_panel(pos_panel);
  $("#sidebar").css("background", "rgba("+bg_panel+")");
});
</script>
</head>
<body>
<?php include('../html/topbar.html'); ?>
<?php include('../html/sidebar.html'); ?>
<?php include('../html/dash.html'); ?>
<div style="margin-top: 30px;margin-left: 100px; padding: 20px; color: #DCDCDC;" id="principal">


</div>
</body>
</html>

<?php } else { ?>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>LayanOS | Zona reservada a usuarios</title>
  <link rel="stylesheet" type="text/css" href="/css/default.css" media="screen" />
</head>
<body>
      <div id='login'>Está usted accediendo a una zona reservada para usuarios registrados, para iniciar sesión o registrar una cuenta nueva, <a href='../index.php'>pinche aquí</a>.
      </body>
      </html>
<?php } ?>