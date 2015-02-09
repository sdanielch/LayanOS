$(function(){
 var notify = $('<div/>', {
    'id'    : 'NNX'
  });
 var notify_2 = $('<div/>', {
    'id'    : 'PACE'
  });
$("body").append(notify);
$("#NNX").append(notify_2);
});
function notify(icono,texto,duracion) {
  console.log("Notificación lanzada")
  var id_aleatoria = Math.floor(Math.random()*2000000000);
  var notificacion = $('<div/>', {
    'class' : 'notificacion',
    'id'    : 'N'+id_aleatoria
  });
  var blur = $('<div/>', {
    'class' : 'notificacionblur',
    'id'    : 'NB'+id_aleatoria
  });
   var blur2 = $('<div/>', {
    'class' : 'notificacionblur2',
    'id'    : 'NB2'+id_aleatoria
  });
  var NTEXTO = $('<div/>', {
    'class' : 'Ntexto',
    'id'    : 'NT'+id_aleatoria
  });
  var NICONO = $('<div/>', {
    'class' : 'Nicono',
    'id'    : 'NI'+id_aleatoria
  });
    var time = $('<div/>', {
    'class' : 'notifytime',
    'id'    : 'NYT'+id_aleatoria
  }); 
    var time2 = $('<div/>', {
    'class' : 'notifytime2',
    'id'    : 'NYT2'+id_aleatoria
  });
  var cargando = "#NYT"+id_aleatoria;
  var NT = "#NT"+id_aleatoria;
  var NI = "#NI"+id_aleatoria;
  var N = "#N"+id_aleatoria;
  var NB =  '#NB'+id_aleatoria;
  var NB2 =  '#NB2'+id_aleatoria;
  $(notificacion).appendTo("#NNX");
  $(blur).appendTo(N);
  $(blur2).appendTo(N);
  $(NICONO).appendTo(NB2);
  $(NTEXTO).appendTo(NB2);
  $(time2).appendTo(NB2);
  $(time).appendTo(NB2);

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

gringo = setTimeout(function(){
    $( N ).animate({
      opacity: 0,
      right: -350,
      height: 50
    }, 300, function() {
      $( N ).hide();
      $( N ).remove();
    });

  }, duracion);

  $( cargando ).animate({
      opacity: 0.5,
      width: 0,
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 0, 
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 10 
    }, duracion, function() {
      $( cargando ).hide();
    });


  $( NB2 ).mouseover(function() {
clearTimeout(gringo);
$( cargando ).stop( true, false ).show();
$( cargando ).animate({
      opacity: 1,
      width: 295,
      borderTopLeftRadius: 0, 
    borderTopRightRadius: 0, 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10 
    }, 300, function() { });
  });


  $( NB2 ).mouseout(function() {
gringo = setTimeout(function(){
    $( N ).animate({
      opacity: 0,
      right: -350,
      height: 50
    }, 300, function() {
      $( N ).hide();
      $( N ).remove();
    });

  }, 2000);


       $( cargando ).animate({
      opacity: 0.5,
      width: 0,
      borderTopLeftRadius: 0, 
    borderTopRightRadius: 0, 
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 10 
    }, 2000, function() {
      $( cargando ).hide();
    });


});
 
$( NB2 ).click(function() {
     $( N ).animate({
      opacity: 0,
      right: -350,
      height: 50
    }, 300, function() {
      $( N ).hide();
      $( N ).remove();
    });
   });

  return true
}