 <?php
    session_start();
    include('acceso_db.php'); // incluímos los datos de acceso a la BD
    // comprobamos que se haya iniciado la sesión
    if(isset($_SESSION['usuario_nombre'])) {
    include('home.php');
?>
<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>LayanOS | Aplicación</title>
  <link rel="stylesheet" type="text/css" href="/css/default.css?<?php echo time(); ?>" media="screen" />
  <link rel="stylesheet" type="text/css" href="../css/jquery-ui.min.css">
  <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
<link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
<link rel="icon" href="../img/favicon.ico" type="image/x-icon">

  <script type="text/javascript" src="../js/jquery-2.1.1.min.js"></script>
  <script type="text/javascript" src="../js/jquery-ui.min.js"></script>
  <script type="text/javascript">
  var usuario = "<?php echo $_SESSION['usuario_nombre']; ?>";
  var diruser = "<?php echo $diruser; ?>";
  </script>
  <!-- librerías opcionales que activan el soporte de HTML5 para IE8 -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <link rel="stylesheet" type="text/css" href="../css/app.css?<?php echo time(); ?>">
</head>
<body>
<?php include('../html/topbar.html'); ?>
<?php include('../html/sidebar.html'); ?>
<?php include('../html/dash.html'); ?>
<div id="cderecho">
  <ul>
    <li id="copiar">Archivo</li>
    <li id="mover">Ayuda</li>
    <hr style="margin: 0px; margin-top: 2px;">
    <li id="eliminar">Panel de control</li>
  </ul>
</div>
<script language="JavaScript" type="text/JavaScript">
var jqxhr = $.get( "getapps.php", function(data) {
  var data = JSON.parse(data);
  var groupname = 'Leyendo aplicaciones:';
  console.group( groupname );
  for (var i = 0;i< data.length;i++){
    data.sort();
    crea_iconos(i,data[i],"fichero","#e_dash");
  }
  console.groupEnd();

})



$.get( "getdocs.php", function(data2) {
  var data2 = JSON.parse(data2);
  var groupname = 'Leyendo documentos:';
  console.group( groupname );
  for (var e = 0;e< data2.length;e++){
    data2.sort();
    crea_iconos(e+'fichero',data2[e],"fichero2","#principal");
  }
  console.groupEnd();

})



.done(function() {
  console.log("Documentos Leídos")
})
.fail(function() {
  console.error( "Error al cargar los documentos." );
})
.always(function() {
  console.log( "Orden correcta." );
});
</script>


<div style="margin-top: 30px;margin-left: 100px; padding: 20px; color: #DCDCDC;" id="principal">
<!-- LOS SIGUIENTES SCRIPTS SE DEBEN PONER EN ORDEN PARA FUNCIONAR CORRECTAMENTE, YA POR COMO ESTÁN ESCRITOS SE COMUNICAN ENTRE ELLOS -->
<!-- Sistema de notificaciones -->
<script type="text/javascript" src="../js/notify.js"></script>


<script>
paceOptions = {
  elements: false,
  target: ".pace_ajax",
  ajax: true,
  restartOnRequestAfter: true
}
</script>
<script src='../js/pace.min.js'>

</script>



<!-- Generador de color para los iconos de la taskbar -->
<script type="text/javascript" src="../js/gcolors.js"></script>
<!-- Barra lateral izquierda - TASKBAR -->
<script type="text/javascript" src="../js/taskbar.js"></script>
<!-- Gestor de ventanas -->
<script type="text/javascript" src="../js/g_windows.js"></script>
<!-- Gestor de aplicaciones y ficheros -->
<script type="text/javascript" src="../js/g_icons.js"></script>
<!-- Menú principal -->
<script type="text/javascript" src="../js/dash.js"></script>
<!-- Scripts por defecto -->
<script type="text/javascript" src="../js/default.js"></script>

<script type="text/javascript" src="http://tinymce.cachefly.net/4.0/tinymce.min.js"></script>



<p>	Su lista de ficheros:</p>
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
