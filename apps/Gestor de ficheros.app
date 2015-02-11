<div id="cempezar3" style="display: none;"></div>
<script>
function parents(div) {
  var a = $(div).parents("div").attr("id");
  var b = $("#"+a).parents("div").attr("id");
  return b;
}
var xxx = parents(".windows #cempezar3");
$("#"+xxx).animate({
  "width":600,
  "height": 400
}, 300, function() {
  // Animation complete.
});
$( "#gf-atras" ).click(function() {
$("#gestor_ficheros").html("");
//------------------------------------------------------
//var ndrc = elemento.split("/");
//ndrc = ndrc[ndrc.length -1]
var gfpos_actual = $("#gf-historial").attr("data-history-current");
gfpos_actual = gfpos_actual.split("/");
gfpos_actual = gfpos_actual[gfpos_actual.length - 1]
gfpos_anterior = $("#gf-historial").attr("data-history");
gfpos_anterior = gfpos_anterior.substr(0,gfpos_anterior.lastIndexOf("/"));
gfpos_anterior = gfpos_anterior + "/"
//gfpos_actual = gfpos_actual - 1.join("/");
$.get( "getdocs.php", {folder:gfpos_anterior}, function(data3) {
  var data3 = JSON.parse(data3);
  var groupname = 'Leyendo documentos:';
  console.group( groupname );
  var i = 0;
  for (k in data3) {
    console.log(k)
    crea_iconos(i+'fichero',k,"fichero2","#gestor_ficheros",data3[k],k);
   i++;
  }
   console.groupEnd();

$("#gf-historial").attr("data-history", gfpos_anterior);
var yeah88 = $("#gf-historial").attr("data-history-current");
yeah88 = yeah88.split("/");
yeah88 = yeah88[yeah88.length - 1];
console.log("wee -> "+yeah88);

$("#gf-historial").attr("data-history-current", yeah88);
})
.done(function() {
  console.log("Documentos Leídos")
})
.fail(function() {
  console.error( "Error al cargar los documentos." );
})
.always(function() {
  console.log( "Orden correcta." );
});
});
</script>
<div style="width: 100%; height: 40px; background: #181818 url('../img/bnoise.png');">
  <div type="button" id="gf-atras" class="btopbar fa fa-chevron-left" style="font-size: 20px;"></div>
  <div type="button" id="gf-adelante" class="btopbar fa fa-chevron-right" style="font-size: 20px;"></div>
  <div type="button" id="gf-actualizar" class="btopbar fa fa-refresh" style="font-size: 20px;"></div>
  <div type="button" id="gf-menu" class="btopbar fa fa-cog" style="font-size: 20px; float:right"></div>

</div>
<div id="gestor_ficheros" class="gestor_ficheros"></div>


<script language="JavaScript" type="text/JavaScript">
var folder = "/";
$.get( "getdocs.php", {folder:folder}, function(data2) {
  var data2 = JSON.parse(data2);
  var groupname = 'Leyendo documentos:';
  console.group( groupname );
  var i = 0;
  for (k in data2) {
    console.log(k)
    crea_iconos(i+'fichero',k,"fichero2","#gestor_ficheros",data2[k]);
   i++;
  }
   console.groupEnd();
  

})
.done(function() {
  console.log("Documentos Leídos")
})
.fail(function() {
  console.error( "Error al cargar los documentos." );
})
.always(function() {
  console.log( "Orden correcta." );
});
</script>
<div id="gf-historial" style="width: 100px; height: 20px; background: #F00;"></div>