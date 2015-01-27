function taskbar(id, nombre) {

  var windowId = id.substr(1);

// Recuerda que ID se pasa con _Y LA ID
  var tarea = $('<div/>', {
    'id' : id,
    'tabindex' : "-1",
    'class' : 'tarea'
  });
  $(tarea).appendTo("#sidebar")
  var rcolor = randomColor();

  $("#"+id).html("<div style='width: 100%; height: 10px; background:"+ rcolor +"; position: absolute; bottom: 0px; left: 0px; opacity: 0.8; border-radius: 10px 10px 0px 0px;'></div>");

  $("#"+id).click(function() {
    var windowId = id.substr(1);
    if ($("#"+windowId).hasClass( "seleccionado" )) {
      $(".windows").removeClass( "seleccionado" );
      $("#"+windowId).addClass( "minimizado" );
      $("#"+windowId).addClass( "trans300" );
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
   }
  });

  var str2 = "#"+id

  var extension = nombre.substr( (nombre.lastIndexOf('.') +1) );
  switch(extension) {
  case 'jpg':
  case 'png':
  case 'gif':
          $( str2 ).css({
            "background-image" : "url('../img/img.png')",
            "background-repeat" : "no-repeat",
            "background-position" : "center top"
          });
  break;
  case 'zip':
  case 'rar':
  console.log("COMPRIMIDO")
  break;
  case 'pdf':
                $( str2 ).css({
                  "background-image" : "url('../img/pdf.png')",
                  "background-repeat" : "no-repeat",
                  "background-position" : "center top"
                });
  break;
  case 'txt':
                  $( str2 ).css({
                    "background-image" : "url('../img/txt.png')",
                    "background-repeat" : "no-repeat",
                    "background-position" : "center top"
                  });
  break;
  case 'avi':
  case 'mp4':
  case 'wmv':
    $( str2 ).css({
      "background-image" : "url('../img/video.png')",
      "background-repeat" : "no-repeat",
      "background-position" : "center top"
    });
  break;

  case 'mp3':
    case 'wma':
      $( str2 ).css({
        "background-image" : "url('../img/audio.png')",
        "background-repeat" : "no-repeat",
        "background-position" : "center top"
      });
      break;

  case 'app':
    var abc = nombre.split(".app");
    nombre = abc[0];
    var ico = "../apps/"+nombre+"/icon.png"
    $("#"+id).html("<div style='width: 100%; height: 10px; background:"+ rcolor +"; position: absolute; bottom: 0px; left: 0px; opacity: 0.8; border-radius: 10px 10px 0px 0px;'></div>");
    $( str2 ).css({
      "background-image" : "url('"+ico+"')",
      "background-repeat" : "no-repeat",
      "background-position" : "center top"
    });

    break;

  default:
                    $( str2 ).css({
                      "background-image" : "url('../img/unknown.png')",
                      "background-repeat" : "no-repeat",
                      "background-position" : "center top"
                    });
                  }





  $(str2).mousedown(function(e){
  switch(e.which) {
  case 1:
  //left Click
  break;
  case 2:
  //middle Click
  $("#"+windowId).fadeOut(150);
  $("#"+windowId).remove();
  $(str2).remove();
  break;
  case 3:
  //right Click
  break;
  }
  return true;// to allow the browser to know that we handled it.
  });






}
