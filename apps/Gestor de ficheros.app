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
</script>

<script type="text/javascript" src="../apps/Calculadora/calculator.js"></script>
  <link rel="stylesheet" type="text/css" href="../apps/Calculadora/main.css?main">
<div id="gestor_ficheros" class="gestor_ficheros"></div>
<script language="JavaScript" type="text/JavaScript">
var folder = "/";
$.get( "getdocs.php", {folder:folder}, function(data2) {
  var data2 = JSON.parse(data2);
  var groupname = 'Leyendo documentos:';
  console.group( groupname );
  for (var e = 0;e< data2.length;e++){
    data2.sort();
    crea_iconos(e+'fichero',data2[e],"fichero2","#gestor_ficheros");
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
