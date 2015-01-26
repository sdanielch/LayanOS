var notificaciones = $('<div/>', {
  'class' : 'notificaciones1'
});
var pace_ajax = $('<div/>', {
  'class' : 'pace_ajax'
});
$(notificaciones).appendTo("body");
$(pace_ajax).appendTo(".notificaciones1");
$("<p style='background: #FFF;'>Cargando aplicacion...</p>").appendTo(".pace")

function notify(icono,texto,duracion) {
  var id_aleatoria = Math.floor(Math.random()*2000000000);
  var notificacion = $('<div/>', {
    'class' : 'notificacion',
    'id'    : 'N'+id_aleatoria
  });
  var NTEXTO = $('<div/>', {
    'class' : 'Ntexto',
    'id'    : 'NT'+id_aleatoria
  });
  var NICONO = $('<div/>', {
    'class' : 'Nicono',
    'id'    : 'NI'+id_aleatoria
  });
  var NT = "#NT"+id_aleatoria;
  var NI = "#NI"+id_aleatoria;
  var N = "#N"+id_aleatoria;
  $(notificacion).appendTo(".notificaciones1");
  $(NICONO).appendTo(N);
  $(NTEXTO).appendTo(N);

  switch(icono) {
  case 'alerta':
  case 'info':
  case 'aviso':
    var ico = "<span class='fa fa-bullhorn' style='width: 72px; height: 72px; float:left; margin-right: 5px; margin-bottom: 5px; font-size: 64px; text-align: center;' />"
  break;
  case 'error':
  case 'fail':
    var ico = "<span class='fa fa-exclamation-triangle' style='width: 72px; height: 72px; float:left; margin-right: 5px; margin-bottom: 5px; font-size: 64px; text-align: center;' />"
  break;
  default:
    var ico = "<span class='fa fa-exclamation-triangle' style='width: 72px; height: 72px; float:left; margin-right: 5px; margin-bottom: 5px; font-size: 64px; text-align: center;' />"
  }


  $(NI).html(ico);
  $(NT).html(texto);

  setTimeout(function(){
    $( N ).animate({
      opacity: 0,
      right: -350,
      height: 50
    }, 300, function() {
      $( N ).hide();
      $( N ).remove();
    });

  }, duracion);
}
