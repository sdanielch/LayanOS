function taskbar(id, nombre, icon) {
if (/app/i.test(id) && $("#"+id).length) {
  console.log(nombre + " ya estaba abierta.")
} else {
 
var windowId = id.substr(1);
var tarea = $('<div/>', {
    'id' : id,
    'tabindex' : "-1",
    'class' : 'tarea'
  });
  $(tarea).appendTo("#tareas")
  var rcolor = randomColor();
  $("#"+id).html("<div style='width: 100%; height: 10px; background:"+ rcolor +"; position: absolute; bottom: 0px; left: 0px; opacity: 0.8; border-radius: 10px 10px 0px 0px;'></div>");
  $("#"+id).click(function() {
    var windowId = id.substr(1);
    if ($("#"+windowId).hasClass( "seleccionado" )) {
      $(".windows").removeClass( "seleccionado" );
      $("#"+windowId).addClass( "minimizado" );
      $("#"+windowId).addClass( "trans300" );
      $("#"+id).removeClass("tareaonline");
      $(".tarea").removeClass("tareaonline");
      setTimeout(function(){ $("#"+windowId).hide(); }, 300);
    }
    else {
    $("#"+windowId).show();
    setTimeout(function(){ 
    $("#"+windowId).removeClass( "minimizado" );
    }, 10);
    setTimeout(function(){ $("#"+windowId).removeClass( "trans300" ); }, 310);
    $("#"+windowId).focus();
    $(".windows").zIndex( 200 );
    $("#"+windowId).zIndex( 205 );
    $(".windows").removeClass( "seleccionado" );
    $("#"+windowId).addClass( "seleccionado" );
    $(".tarea").removeClass("tareaonline");
     $("#"+id).addClass("tareaonline");
   }
  });
  var str2 = "#"+id
  var extension = nombre.substr( (nombre.lastIndexOf('.') +1) );
switch(extension) {
  // En el caso de que sea un icono devolvemos el icono del icono.
    case 'app':
    var abc = nombre.split(".app");
    nombre = abc[0];
    var ico = "../apps/"+nombre+"/icon.png"
    $("#"+id).html("<div style='width: 100%; height: 10px; background:"+ rcolor +"; position: absolute; bottom: 0px; left: 0px; opacity: 0.8; border-radius: 10px 10px 0px 0px;'></div>");
    change_icon(str2,ico);
    break;
    // Cualquier otra extensión indica que es un fichero.
    default:
    change_icon(str2,icon);
    }
  $(str2).mousedown(function(e){
  switch(e.which) {
  case 1:
  //Al pulsar en el boton primario del ratón
  break;
  case 2:
  // Al pulsar en el boton central del ratón
$("#"+windowId).addClass("trans300");
$("#"+windowId).addClass("ccwindows");
$(str2).remove();
setTimeout(function(){
$("#"+windowId).remove();

}, 300);
  break;
  case 3:
  //Al pulsar en el boton secundario del ratón
  break;
  }
  return true;// para permitir al navegador saber que boton se ha pulsado.
  });
}
}