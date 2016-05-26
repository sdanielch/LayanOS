 <?php
    session_start();
    include('acceso_db.php');
        $usuario_nombre = $_POST['usuario_nombre'];
        $usuario_clave = $_POST['usuario_clave'];
        $usuario_clave = md5($usuario_clave);

if ($database->has("usuarios", [
    "AND" => [
        "OR" => [
            "usuario_nombre" => $usuario_nombre
        ],
        "usuario_clave" => $usuario_clave
    ]
]))
{
    echo "Datos de acceso correctos...";
    
    $userID = $database->get("usuarios", "usuario_id", [
    "usuario_nombre" => $usuario_nombre
]);
     $_SESSION['usuario_id'] = $userID;
     $_SESSION['usuario_nombre'] = $usuario_nombre; 
     // echo "Datos en sesión";
     // header("Location: ../index.php");
     header("Location: ../index.php");
        exit();

} else {
    echo "Error, <a href='acceso.php'>Reintentar</a>";
} 