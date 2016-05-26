<?php
    session_start();
    include('acceso_db.php'); // incluímos los datos de acceso a la BD
    // comprobamos que se haya iniciado la sesión
    if(isset($_SESSION['usuario_nombre'])) {
        session_destroy();
         echo '<meta http-equiv="Refresh" content="1;url=http://www.mysteryshopperesp.es/AREACLIENTE">';
    }else {
        echo "Operación incorrecta.";
    }
?>