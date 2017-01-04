<?php
session_start();
if (isset($_SESSION['usuario'])) {
// Función para devolver el tamaño del directorio de usuario...
function dirSize($directory) {
    $size = 0;
    foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory)) as $file){
        $size+=$file->getSize();
    }
    return $size;
} 
// Funcion para devolver el valor de forma legible
function formatBytes($size, $precision = 2)
{
    $base = log($size, 1024);
    $suffixes = array('', 'K', 'M', 'G', 'T');   

    return round(pow(1024, $base - floor($base)), $precision) .' '. $suffixes[floor($base)];
}

$b_user_folder = dirSize("../users/sdanielch");
// Devolvemos el valor por ECHO
echo formatBytes($b_user_folder);


} else {
	echo "Error, you need be logged";
}
?>