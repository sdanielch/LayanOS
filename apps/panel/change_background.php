<?php
session_start();
// $_SESSION['usuario']
if (isset($_FILES["file"]))
{
    $file = $_FILES["file"];
    $nombre = $file["name"];
    $tipo = $file["type"];
    $ruta_provisional = $file["tmp_name"];
    $size = $file["size"];
    $dimensiones = getimagesize($ruta_provisional);
    $width = $dimensiones[0];
    $height = $dimensiones[1];
    $carpeta = "./../../users/".$_SESSION['usuario']."/";

    if ($tipo != 'image/jpg' && $tipo != 'image/jpeg' && $tipo != 'image/png' && $tipo != 'image/gif' && $tipo != 'image/pjpeg')
    {
      echo "Error, puede que el fichero este dañado o no se haya superado el tamaño máximo permitido.";
    }
    else if ($size > 2048*2048)
    {
      echo "Error, el tamaño máximo permitido es un 4MB.";
    }
    else if ($width > 2800 || $height > 1800)
    {
        echo "Error la anchura y la altura maxima permitida es 2048px.";
    }
    else if($width < 60 || $height < 60)
    {
        echo "Error la anchura y la altura mínima permitida es 60px.";
    }
    else
    {
        $src = $carpeta.$nombre;
        move_uploaded_file($ruta_provisional, $src);
        echo "<img src='./../users/".$_SESSION['usuario']."/".$nombre."' style='width: 180px; margin: 10px;'>";
        // Por JavaScript mandamos el fondo:
        echo "<script>$.get( 'save_pref.php', { pref1: '".$nombre."', pref2: '".$nombre."' } ); change_wall('users/".$_SESSION['usuario']."/".$nombre."');</script>";
    }
}
?>
