<div id="cempezar" style="display: none;"></div>
<script>
function parents(div) {
  var a = $(div).parents("div").attr("id");
  var b = $("#"+a).parents("div").attr("id");
  return b;
}
var xx = parents(".windows #cempezar");
var cc = $( window ).width();
var dd = $( window ).height();
function cambiar_id(id) {
var now = Date.now();
$("#"+xx).attr("id",now);   
}
$("#"+xx).animate({
  "top":35,
  "left":80,
  "width":cc - 300,
  "height":dd - 300
}, 300, function() {
  // Animation complete.
});
</script>
<style>
#Ayuda_info {
  background:#181818 url('../apps/Bienvenida/fondo.jpg') no-repeat center top fixed;

}

@supports (background-size: cover) {
  #Ayuda_info {
    background: #181818 url('../apps/Bienvenida/fondo.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
</style>
<div id="Ayuda_info" style="  box-sizing: border-box;
position: relative; width: 100%; height: calc(100% - 30px); padding: 10px; overflow: auto;">
  Este <strong>programa</strong> está aun en fase de pruebas: asa2
  <br />

</div>
