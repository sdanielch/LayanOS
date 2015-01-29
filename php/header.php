<meta charset="UTF-8">
<title>LayanOS | Aplicación</title>
<link rel="stylesheet" type="text/css" href="/css/default.css?<?php echo time(); ?>" media="screen" />
<link rel="stylesheet" type="text/css" href="../css/jquery-ui.min.css">
<link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
<link rel="stylesheet" type="text/css" href="../css/app.css?<?php echo time(); ?>">
<link rel="stylesheet" href="http://cdn.kendostatic.com/2014.1.318/styles/kendo.common.min.css" />
<link rel="stylesheet" href="http://cdn.kendostatic.com/2014.1.318/styles/kendo.blueopal.min.css" />
<link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
<link rel="icon" href="../img/favicon.ico" type="image/x-icon">
<!-- LOS SIGUIENTES SCRIPTS SE DEBEN PONER EN ORDEN PARA FUNCIONAR CORRECTAMENTE, YA POR COMO ESTÁN ESCRITOS SE COMUNICAN ENTRE ELLOS -->

<script>
paceOptions = {
  elements: false,
  target: "#PACE",
  ajax: true,
  restartOnRequestAfter: true
}
</script>

 <script type="text/javascript">
  var usuario = "<?php echo $_SESSION['usuario_nombre']; ?>";
  var diruser = "<?php echo $diruser; ?>";
  </script>
<div id="NNX"><div id="PACE"></div></div>
<script src='../js/pace.min.js'></script>
<script src='../js/jquery-2.1.1.min.js'></script>
<script src='../js/assets.js'></script>
<script src='../js/notify.js'></script>
<script src='../js/jquery-ui.min.js'></script>
<script src='../js/g_icons.js'></script>
<script src='../js/taskbar.js'></script>
<script src='../js/gcolors.js'></script>
<script src='../js/g_windows.js'></script>
<script src='../js/dash.js'></script>
<script src='http://cdn.kendostatic.com/2014.1.318/js/kendo.all.min.js'></script>
<script src='../js/default.js'></script>







 
  <!-- librerías opcionales que activan el soporte de HTML5 para IE8 -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
