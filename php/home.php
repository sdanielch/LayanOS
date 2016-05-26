<?php
$directorio_usuario = '../home/'.$_SESSION['usuario_nombre'];

function chmod_r($path) {
  $dir = new DirectoryIterator($path);
  foreach ($dir as $item) {
    chmod($item->getPathname(), 0777);
    if ($item->isDir() && !$item->isDot()) {
      chmod_r($item->getPathname());
    }
  }
}

if(!file_exists($directorio_usuario))
{
  mkdir($directorio_usuario);
  $diruser = "false";


  function xcopy($source, $dest, $permissions = 0777)
  {
    // Check for symlinks
    if (is_link($source)) {
      return symlink(readlink($source), $dest);
    }

    // Simple copy for a file
    if (is_file($source)) {
      return copy($source, $dest);
    }

    // Make destination directory
    if (!is_dir($dest)) {
      mkdir($dest, $permissions);
    }

    // Loop through the folder
    $dir = dir($source);
    while (false !== $entry = $dir->read()) {
      // Skip pointers
      if ($entry == '.' || $entry == '..') {
        continue;
      }

      // Deep copy directories
      xcopy("$source/$entry", "$dest/$entry", $permissions);
    }

    // Clean up
    $dir->close();
    return true;
  }



  xcopy("../home/default", $directorio_usuario);
  chmod_r($directorio_usuario);

}
else
{
  $diruser = "true";
}
?>
