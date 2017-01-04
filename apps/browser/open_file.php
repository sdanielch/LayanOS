<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
	<style>
		html,body {
			background: transparent;
			color: #EFEFEF;
			margin: 0; padding: 0;
		}
	</body>
	</style>
</head>
<body>

<?php
session_start();
if (isset($_SESSION['usuario'])) {
$file_to_open = $_GET['file_o'];
$file_to_open = str_replace("-SLASH-", "/", $file_to_open);
$file_to_open = str_replace("../apps/../users/sdanielch/", "", $file_to_open);
$extension = substr($file_to_open, -4);
// Mediante un array indicamos los tipos de formatos aceptados como imagen
$tipos_de_imagen = array(".jpg", ".png", ".gif", "jpeg", ".bmp");

if (in_array($extension, $tipos_de_imagen)) {

?>
<!-- SI ES UNA IMAGEN -->
<style>
#img_container {
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0; left: 0; right: 0; bottom: 0;
}
img {
    max-width: 100%;
    height: auto;
    width: auto\9; /* ie8 */
}
</style>
<div id="img_container">
<img src="../../users/<?php echo $_SESSION['usuario'] . "/" . $file_to_open; ?>" />
</div>



<?
} else {
echo "Encontramos un error al procesar su documento. Pruebe a descargarlo.";
}












} else {
	echo "Error, you need be logged";
}
?>

	
</body>
</html>