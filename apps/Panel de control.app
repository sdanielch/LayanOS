<link rel="stylesheet" type="text/css" href="../apps/Panel de control/css/css.css" media="screen" />

<div style="width: 100%; height: calc(100% - 30px); background: #EFEFEF; color: #181818;">
  <script type="text/javascript" src="../js/enviroment/functions.js"></script>
  <script>
  notify("error",l10n.controlpanel.alert,8000);
  </script>
 

  <script>
  $(function() {
 $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
 $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
 $("#tabs ul li a:nth(0)").text(l10n.controlpanel.secciones.wallpaper);
 $("#tabs ul li a:nth(1)").text(l10n.controlpanel.secciones.premium);
 $("#tabs ul li a:nth(2)").text(l10n.controlpanel.secciones.bugs);
 $("#tabs ul li a:nth(3)").text(l10n.controlpanel.secciones.account);
 $("#tabs-1 b:nth(0)").text(l10n.controlpanel.wallpaper.texto1);
 $("#tabs-1 p:nth(0)").text(l10n.controlpanel.wallpaper.texto2);
 $("#imagen").attr("placeholder", l10n.controlpanel.wallpaper.campo1);
 $("#tabs-1 span:nth(0)").text(l10n.controlpanel.wallpaper.campo2);
 $("#wall").attr("value", l10n.controlpanel.wallpaper.campo3);
  });
  </script>
  

<body>
<div style="width: 100%; height: 40px; background: #181818 url('../img/bnoise.png'); border-top: 1px rgba(0,0,0,0.2) solid;">
  <div type="button" class="btopbar fa fa-chevron-left" style="font-size: 20px;"></div>
  <div type="button" class="btopbar fa fa-chevron-right" style="font-size: 20px;"></div>
  <div type="button" class="btopbar fa fa-refresh" style="font-size: 20px;"></div>
  <div type="button" class="btopbar fa fa-cog" style="font-size: 20px; float:right"></div>

</div>

  <div id="tabs">
    <ul>
      <li><a href="#tabs-1"></a></li>
      <li><a href="#tabs-2"></a></li>
      <li><a href="#tabs-2"></a></li>
      <li><a href="#tabs-3"></a></li>
    </ul>
    <div id="tabs-1" style="overflow: auto;">

      <form enctype="multipart/form-data" class="formulario">
      <b></b>
      <br /><br />
        <p></p>
        <br />
<script>document.getElementById("uploadBtn").onchange = function () {
  document.getElementById("imagen").value = this.value;

};</script>
     <center>
      <input id="imagen" placeholder="" disabled="disabled" />
      <div class="fileUpload btn btn-primary">
        <span></span>
        <input name="archivo" id="uploadBtn" type="file" accept="image/jpeg" class="upload" />
      </div>


        <br /><br />
        <input type="button" id="wall" value="" /><br /></center>
      </form>
      <!--div para visualizar mensajes-->
      <div class="messages"></div><br /><br />
      <!--div para visualizar en el caso de imagen-->
      <div class="showImage"></div>
    </div>
    <div id="tabs-2" style="overflow: auto;">
     <!-- Some text -->
    </div>
    <div id="tabs-3" style="overflow: auto;">
<script>
if( "a" == pos_panel ) {
    $('input:radio[name=pos_panel]:nth(0)').attr('checked',true);
} else if( "b" == pos_panel ) {
    $('input:radio[name=pos_panel]:nth(1)').attr('checked',true);
} else if( "c" == pos_panel ) {
    $('input:radio[name=pos_panel]:nth(2)').attr('checked',true);
}

</script>
<form id="pref_usuario">
<b>Idioma del sitio</b><br />
<label><input type="radio" class="ps_lang" name="lang" value="a" checked>Español</label><br />
<label><input type="radio" class="ps_lang" name="lang" value="b">Inglés</label>
<hr style="width: 100%; height: 2px; margin: 0px; background: #39f;">
<b>Posición de la barra de tareas</b><br/>
<label><input type="radio" class="ps_izquierda" name="pos_panel" value="a" checked>Situar en la parte izquierda</label>
<br>
<label><input type="radio" class="ps_derecha" name="pos_panel" value="b">Situar en la parte derecha</label>
<br>
<label><input type="radio" class="ps_abajo" name="pos_panel" value="c">Situar en la parte de abajo</label>




  <input type="submit" value="Guardar">
  <div id="pref_usuario_resultado"></div>
</form>




      <script>
$("input[name='pos_panel']").change(function(a){
var $form = $( "#pref_usuario" ),
pos_panel2 = $form.find( "input[name='pos_panel']:checked" ).val();
ppos_panel(pos_panel2);
pos_panel = pos_panel2
});

$( "#pref_usuario" ).on("submit", function( event ) {
event.preventDefault();
event.stopPropagation();
function salida_pref(msg){
$("#pref_usuario_resultado").hide();
$("#pref_usuario_resultado").html(msg);
$("#pref_usuario_resultado").fadeIn(200);
setTimeout(function(){ 
$("#pref_usuario_resultado").fadeOut(200);
 }, 2500);
}
var $form = $( this ),
pos_panel2 = $form.find( "input[name='pos_panel']:checked" ).val();
var lang2 = $( "input[name='lang']:checked" ).val();
$.ajax({
    type: "GET",
    url: "pref_usuarios.php",
    data: { 
      "pos_panel" : pos_panel2, 
      "lang": lang2 }
})
.done(function() {
  // actualizamos la variable de pos_panel
  pos_panel = pos_panel2
  salida_pref("<b style='color: #228811;'>Preferencias guardadas con éxito.</b>");
  notify("info","Cambios guardados con éxito.",4000);
})
.fail(function() {
    salida_pref("<b style='color: #cc1100;'>Hubo un error al guardar sus preferenias, por favor contacte con el administrador.</b>");
      notify("error","Ocurrió un problema al guardar su configuración.",4000);
})
.always(function() {
  console.log( "La orden fue ejecutada." );
});
  
});
</script>
      </p>
    </div>
  </div>



</div>
