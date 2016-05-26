<?php
$load_cpu = sys_getloadavg();
?>
<style>
#button255 {
padding: 2px;
padding-left: 4px;
padding-right: 4px;
font-size: 14px;
font-family: Arial;
float: right;
}
.button25{
position: absolute;
top: 35px;
left: 200px;
font-size: 18px;
border: 1px #484848 outset;
border-radius: 4px;
padding: 2px;
padding-left: 4px;
padding-right: 4px;
cursor: pointer;
background: #222;
}
.button25:active{
	border: 1px #484848 inset;
	background: #111;
}
</style>
<script>
$(function(){

$("#rdata").click(function() {
 $( "#ccppuu" ).load( "cpu.php" );
});

});
</script>
<strong>Carga media del sistema:</strong> <br />
En un minuto: <?php echo $load_cpu[0]; ?><br />
En 5 minutos: <?php echo $load_cpu[1]; ?><br />
En 15 minutos: <?php echo $load_cpu[2]; ?>
<div class="fa fa-refresh button25" id="rdata"><div id="button255">Recargar datos</div></div>