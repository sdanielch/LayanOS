function testtasks() {
  tt = $(".item-taskbar").is(':visible');
  if (tt == true) {
    $( "#taskbar" ).animate({ "left": "0px" }, "slow" );
    $( "#taskbar" ).sortable({ items: ".item-taskbar"});
  } else {
    $( "#taskbar" ).animate({ "left": "-72px" }, "fast" );
  }
}
function new_task(id,nombre,icono) {
$("#taskbar").append("<div class='item-taskbar app_"+ id+"'><span>"+nombre+"</span></div>");
var esta_tarea = ".app_"+id+".item-taskbar"
$(esta_tarea).css({
  "background": "rgba(20,20,20,0.9) url('../apps/"+icono+"') no-repeat center center",
	"-webkit-background-size": "100% 100%",
	"-moz-background-size": "100% 100%",
	"-o-background-size": "100% 100%",
	"background-size": "100% 100%"
});
var id_app = "idapp_" + id;
var id_this_task = "app_" + id;

function ventana_al_frente() {
var sszwi = parseInt(sessionStorage.getItem('zwi'));
var gzwi = sszwi + 1;
sessionStorage.setItem('zwi', gzwi);
$("#"+id_app).css("z-index" , gzwi)
// Indicamos con una clase que la ventana actual esta activa
$(".window").removeClass("win_is_focus");
$("#"+id_app).addClass("win_is_focus");
$("#"+id_app).removeClass("win_on_minimize");
}

var win1 = $("#"+id_app).hasClass("win_on_minimize");
var win2 = $("#"+id_app).hasClass("win_is_focus");
$(esta_tarea).on("click", function(){ 
  $("#" + id_app).addClass("ease-out-300").wait(300).removeClass("ease-out-300");

  ventana_al_frente()});
$(esta_tarea).on("dblclick", function(){
  $("#"+id_app).addClass("win_on_minimize");
  $("#" + id_app).addClass("ease-out-300");
});


$(esta_tarea + " span").addClass("tshadow");
testtasks();
}
