<?PHP
// Recogemos por GET los datos enviados por Ajax
$directorio_actual = $_GET['dira'];
$nuevo_directorio = $_GET['dirn'];
$res_mkdir[] = array(
  "dir1" => "$directorio_actual/",
  "dir2" => "$directorio_nuevo"
);
// Devolvemos la respuesta
echo json_encode($res_mkdir);
