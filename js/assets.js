function devolver_icono(extension, str2, nombre, id, rcolor, app) {
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
}


