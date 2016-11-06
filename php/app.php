<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<?php
require_once 'database.php';
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
$comprobando_directorio = makeDir("../users/".$_SESSION['usuario']);
if ($comprobando_directorio == true) {
  echo "<script>console.log('Se ha creado un nuevo directorio para el usuario ".$_SESSION['usuario']."')</script>";
} else {
  echo "<script>console.log('Ya existe un directorio para el usuario ".$_SESSION['usuario']."')</script>";
}
// Damos los permisos de escritura y lectura al servidor
function chmod_r($path) {
    $dir = new DirectoryIterator($path);
    foreach ($dir as $item) {
        chmod($item->getPathname(), 0777);
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
<script type="text/javascript" src="../js/new_task.js"></script>
<script type="text/javascript" src="../js/new_window.js"></script>
<script type="text/javascript" src="../js/app-scripts.js"></script>
</head>
<body>
<div id="menubar">
<a href="logout.php">Cerrar sesión</a>
</div>
<div id="taskbar">
  <div class="item-taskbar" name="menu" id="menu-taskbar"></div>

</div>
<div id="panel-taskbar">
<div id="apps1"></div>
</div>
<div id="desktop"></div>


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
