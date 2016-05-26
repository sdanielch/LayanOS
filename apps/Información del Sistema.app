<div id="cempezar44" style="display: none;"></div>
<script>
function parents(div) {
  var a = $(div).parents("div").attr("id");
  var b = $("#"+a).parents("div").attr("id");
  return b;
}
var xx = parents(".windows #cempezar44");
var cc = $( window ).width();
var dd = $( window ).height();
function cambiar_id(id) {
var now = Date.now();
$("#"+xx).attr("id",now);
}
$("#"+xx).animate({
  "width":200,
  "height":500
}, 300, function() {
  // Animation complete.
});
$("#uuser").text(usuario);
</script>

<script>
$(function(){
  function vercpu(){
   $( "#ccppuu" ).load( "cpu.php" );
}
vercpu();

});
</script>
<style>
#a1515 {
  background:transparent url('#') no-repeat center top fixed;
  text-align: center;

}
#a1616 {
position: absolute;
  background:rgba(0,0,0,0.8) url('#') no-repeat center top fixed;
top: 70px;
left: 0px;
right: 0px;
bottom: 0px;
overflow: auto;
text-align: justify;
padding: 10px;
font-size: 0.85em;
}

#a1616 strong {
color: #F00;
}

</style>
<div id="a1515" style="  box-sizing: border-box;
position: relative; width: 100%; height: calc(100% - 30px); padding: 10px; overflow: auto;">
<table style="width: 100%;">
<td width="55px">
<div class="fa fa-desktop" style="font-size: 50px;"></div>
</td>
<td>
  Centro de información del sistema.<br/>Detalles técnicos sobre el host.
</td>
</table> <br />
<div id="a1616">
<div id="ccppuu" style="background: transparent; width: 100%;"></div>
</div>
