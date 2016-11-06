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
$(esta_tarea + " span").addClass("tshadow");
}
