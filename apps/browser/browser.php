<?PHP
// Recogemos por GET los datos enviados por Ajax
$useDIR = $_GET['usdir'];
$recDIR = $_GET['recdir'];
//  Cambiamos el string a bool
if($recDIR == "true") {$recDIR = true;} else {$recDIR = false;}
// Aqui una funcion para pasar los bytes de PHP a un formato más legible
    function formatSizeUnits($bytes)   {
        if ($bytes >= 1073741824)
        {  $bytes = number_format($bytes / 1073741824, 2) . ' GB';  }
        elseif ($bytes >= 1048576) { $bytes = number_format($bytes / 1048576, 2) . ' MB';  }
        elseif ($bytes >= 1024)  { $bytes = number_format($bytes / 1024, 2) . ' kB'; }
        elseif ($bytes > 1) { $bytes = $bytes . ' bytes';  }
        elseif ($bytes == 1)  { $bytes = $bytes . ' byte';  }
        else  {  $bytes = '0 bytes';  }
        return $bytes;
}
// Aqui la funcion para leer los directorios
function getFileList($dir, $recurse=false)
 {
 $retval = array();
   if(substr($dir, -1) != "/") $dir .= "/";
   $d = @dir($dir) or die("getFileList: Fallo al abrir $dir para leer el directorio");
   while(false !== ($entry = $d->read())) {
     if($entry[0] == ".") continue;
     if(is_dir("$dir$entry")) {
       $retval[] = array(
         "name" => "$dir$entry/",
         "r_name" => "$entry",
         "type" => filetype("$dir$entry"),
         "size" => 0,
         "lastmod" => filemtime("$dir$entry")
       );
       if($recurse && is_readable("$dir$entry/")) {
         $retval = array_merge($retval, getFileList("$dir$entry/", true));
       }
     } elseif(is_readable("$dir$entry")) {
       $numsize = formatSizeUnits(filesize("$dir$entry"));
       $retval[] = array(
         "name" => "$dir$entry",
         "r_name" => "$entry",
         "type" => mime_content_type("$dir$entry"),
         "size" =>  $numsize,
         "lastmod" => filemtime("$dir$entry")
       );
     }
   }
   $d->close();
   sort($retval);
   return $retval;
 }
 // Ejecutamos la orden con los parámetros que recibimos de GET
  $dirlist = getFileList($useDIR, $recDIR);
echo json_encode($dirlist)
?>
