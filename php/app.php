<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<?php
require_once 'database.php';
header("Expires: Tue, 03 Jul 2001 06:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
session_start();
if (isset($_SESSION['usuario'])) {
// SESION INICIADA
// Preparamos el perfil si no tuviera ya uno creado...
function makeDir($path)
{
     $ret = mkdir($path, 0777, true); // use @mkdir if you want to suppress warnings/errors
     return $ret === true || is_dir($path);
}
// Creamos (si es que no lo hay, un directorio personal para el usuario)
makeDir("../users/".$_SESSION['usuario']);
makeDir("../users/".$_SESSION['usuario']."/Fondos");

// Damos los permisos de escritura y lectura al servidor
function chmod_r($path) {
    $dir = new DirectoryIterator($path);
    foreach ($dir as $item) {
        chmod($item->getPathname(), 0775);
        if ($item->isDir() && !$item->isDot()) {
            chmod_r($item->getPathname());
        }
    }
}
chmod_r("../users/".$_SESSION['usuario']);



?>
<title>LayanOS - Wherever you are</title>
<link rel="stylesheet" href="../css/resetcss.css" />
<link rel="stylesheet" href="../css/font-awesome.min.css" />
<link rel="stylesheet" href="../css/jquery-ui.min.css" />
<link rel="stylesheet" href="../css/jquery-ui.theme.min.css" />
<link rel="stylesheet" href="../css/app-style.css" />
<?php echo "<script>var usuario = '".$_SESSION['usuario']."';</script>"; ?>
<script type="text/javascript" src="../js/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="../js/sha512.js"></script>
<script type="text/javascript" src="../js/jquery.nicescroll.min.js"></script>
<script type="text/javascript" src="../js/jquery.wait.js"></script>
<script type="text/javascript" src="../js/jquery-ui.min.js"></script>
<script type="text/javascript" src="../js/jQRSS.min.js"></script>
<script type="text/javascript" src="../js/new_task.js"></script>
<script type="text/javascript" src="../js/new_window.js"></script>
<script type="text/javascript" src="../js/app-scripts.js"></script>
<script>
$(function(){
$.jQRSS('http://www.bing.com/HPImageArchive.aspx?format=rss&idx=0&n=1&mkt=en-US', { count: 1, output: 'json' }, 
    function(data, textStatus, jqXHR) {
      bing_image = "http://www.bing.com" + data.entries[0].link;
      sessionStorage.setItem('bing_image', bing_image);
      }
);

});
</script>
</head>
<body>
<div class="appbackground" data-adaptive-background data-ab-css-background></div>
<div id="menubar">
  <span id="menubar_d" class="zz"><i class="fa fa-bars" aria-hidden="true"></i>&nbsp;&nbsp;Apps</span>

   

<a href="logout.php">
  <i class="fa fa-sign-out" aria-hidden="true"></i>
</a>
</div>


<div id="taskbar">
  <div class="item-taskbar" name="menu" id="menu-taskbar"></div>
</div>
<div id="panel-taskbar">
<div id="apps1"></div>
</div>
<div id="desktop">
  

<ul class='custom-menu'>
  <li data-action="first">Detalles de cuenta</li>
  <li data-action="second">Fondo de pantalla</li>
  <li data-action="third">Propiedades</li>
</ul>

</div>


<div id="cc">LayanOS</div>
</body>
</html>
<?php
} else {
  // SESION NO INICIADA
?>
<meta http-equiv="refresh" content="3;url=./../">
No has iniciado sesión, redirigiendo a la página principal... pincha <a href="./../">aquí</a> si tu navegador no lo hace automáticamente.
</head>
</html>
<?php
}
?>
