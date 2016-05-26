<script>
   $(function() {
    function hidesec() {
    $("#pc-seccion0").hide();
    $("#pc-seccion1").hide();
    $("#pc-seccion2").hide();
    $("#pc-seccion3").hide();
    $("#pc-seccion4").hide();
    $("#pc-seccion5").hide();
    $("#pc-seccion6").hide();
    $("#pc-seccion7").hide();
    }
    hidesec();
    $("#pc-seccion0").fadeIn(800);
    $("#menu-pref span").click(function(){
     var jack = $(this).text();
     if (jack == "Inicio") {
    hidesec();
        $("#pc-seccion0").fadeIn(400);

     }

     if (jack == "Cambiar diseño") {
hidesec();
    $("#pc-seccion1").fadeIn(400);

     }

     if (jack == "Cambiar fondo") {
hidesec();
    $("#pc-seccion2").fadeIn(400);

     }


    });

   });
</script>
<style>
  #menu-pref {
      position: absolute; top: 0; left: 0; bottom: 30px;
      box-sizing: border-box; width: 180px;
      background: #0D47A1; color: #FFF; z-index: 1800;
      margin: auto; padding: 10px;
    }
  #menu-pref span {
    position: relative;
    display: inline-block;
    margin: 2px;
    width: 150px;
    padding: 10px;
    background: #39f;
    cursor: pointer;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.75);
  }
</style>
<div id="menu-pref">
<span>Inicio</span>
<span>Cambiar diseño</span>
<span>Cambiar fondo</span>
</div>
<div style="position: absolute; top: 0; left: 180px; right: 0; bottom: 30px; background: #FFF; color: #181818; overflow: auto; box-sizing: border-box; padding: 10px;">
<div id="pc-seccion0">
  Bienvenido al panel de control <span></span> <script>$("#pc-seccion0 span").append(usuario);</script>, puede escoger configurar su cuenta desde las diferentes opciones del panel lateral izquierdo.

</div>
<div id="pc-seccion1">
<script type="text/javascript" src="../js/enviroment/functions.js"></script>
<script>
   $(function() {
    $('input#colorpicker').colorPicker({
      format: 'rgba',
      size: 100,
       colorChange: function(e, ui) {
       var rgba = ui.color.substr(5, (ui.color.length - 6)).replace(/\s/g, '');
       $("#sidebar").css("background", "rgba("+rgba+")");
      }
});

if( "a" == pos_panel ) {
    $('input:radio[name=pos_panel]:nth(0)').attr('checked',true);
} else if( "b" == pos_panel ) {
    $('input:radio[name=pos_panel]:nth(1)').attr('checked',true);
} else if( "c" == pos_panel ) {
    $('input:radio[name=pos_panel]:nth(2)').attr('checked',true);
}
 
});
</script>
<form id="pref_usuario">
<b>Idioma del sitio</b><br />
<label><input type="radio" class="ps_lang" name="lang" value="a" checked>Español</label><br />
<label><input type="radio" class="ps_lang" name="lang" value="b">Inglés</label>
<hr style="width: 100%; height: 1px; margin: 0px; background: #484848;">
<b>Posición de la barra de tareas</b><br/>
<label><input type="radio" class="ps_izquierda" name="pos_panel" value="a" checked>Situar en la parte izquierda</label>
<br>
<label><input type="radio" class="ps_derecha" name="pos_panel" value="b">Situar en la parte derecha</label>
<br>
<label><input type="radio" class="ps_abajo" name="pos_panel" value="c">Situar en la parte de abajo</label>
<hr style="width: 100%; height: 1px; margin: 0px; background: #484848;">
<b>Color de fondo y transparencia de la barra de tareas</b><br />
<center>
<input type="text" name="colorpicker" id="colorpicker" value="RGBA" style="display: none;" />
</center>
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
var colorpiker = $( "input[name='colorpicker']" ).val();
var rgbacolorpiker = colorpiker.substr(5, (colorpiker.length - 6)).replace(/\s/g, '');
$.ajax({
    type: "GET",
    url: "pref_usuarios.php",
    data: { 
      "pos_panel" : pos_panel2, 
      "lang": lang2,
      "backpanel" : rgbacolorpiker }
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
</div>


<div id="pc-seccion2">


<form enctype="multipart/form-data" class="formulario">
<script>document.getElementById("uploadBtn").onchange = function () {
  document.getElementById("imagen").value = this.value;
  console.log(this.value);
$("#showImage2").append("<img src='"+this.value+"' width='300px' />")
};</script>
     <center>

        <div class="showImage2"></div>

      <input id="imagen" placeholder="" disabled="disabled" style="display: none;" />
      <div class="fileUpload btn btn-primary">
        <input name="archivo" id="uploadBtn" type="file" accept="image/jpeg" class="upload" />
      </div>

<br />
        <input type="button" id="wall" value="SUBIR IMAGEN" /><br /></center>
      </form>
      <!--div para visualizar mensajes-->
      <div class="messages"></div><br /><br />
      <!--div para visualizar en el caso de imagen-->
      <div class="showImage"></div>







<script>
$(function() {
 
});
</script> 

</div>



















  </div>
