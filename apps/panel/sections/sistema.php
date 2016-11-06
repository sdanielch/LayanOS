<?php
session_start();
$load = sys_getloadavg();
if ($load[1] > 0.8) {
  echo "<span style='color: red;'>Atención: La carga media del sistema esta sobre los valores recomendados. Póngase en contacto con el administrador del sistema, una carga elevada puede llevar a mal funcionamiento de LayanOS o incluso a que este deje de funcionar.</span>";
} else {
  echo "<span style='color: green;'>La carga media está funcionando en los porcentajes adecuados. </span> ";
}
?>

<br />
<span id="cuan"></span>
<script>
$.get( "../users/<?php echo $_SESSION['usuario']; ?>/user_pref.json", function( data ) {
  $("#cuan").append("Tus preferencias fueron guardadas el: " + data.dia_ultimo_acceso);
  $("#cuan").append(", a las: " + data.hora_ultimo_acceso + "<br />");
  //$("#cuan").append("Otro dato: " + data.dia_ultimo_acceso + "<br />");
  //$("#cuan").append("Otro dato 2: " + data.dia_ultimo_acceso + "<br />");
  //$("#cuan").append("Otro dato 3: " + data.dia_ultimo_acceso);
}, "json" );
</script>
<br />
<?php echo "Ultima actualización de LayanOS: ".date( "d/m/Y H:i:s.", getlastmod() ); ?>
