
  function crea_iconos (id,elemento,icono,sitio){
    function a(id,elemento,icono) {


      var extension2 = elemento.substr( (elemento.lastIndexOf('.') +1) );
      if (extension2 == "app") {


        // Primero crea el icono
        id2 = "id_" + id;
        var icono = $('<div/>', {
          'class' : 'appicon',
          'id'    : id2,
          'tabindex' : "-1"
        });
        // Si el texto sobrepasa los 16 caracteres se acorta hasta seleccionar el elemento
        var ext = elemento.substr( (elemento.lastIndexOf('.') +1) ); // EXTENSION DEL FICHERO
        var i_texto_A = elemento;
        var l_texto_A = i_texto_A.length
        var limite_texto_A = 16
        if (l_texto_A >= limite_texto_A ) {
          var e_texto_B = i_texto_A.substring(0, 16)+"...";
        } else {
          var e_texto_B = i_texto_A
        }
        $(icono).appendTo(sitio);
        var i = "#"+id2
        $("<div class='icon'></div>").appendTo( i );
        $("<div class='icontext'>"+e_texto_B+"</div>").appendTo( i +" .icon");

        $( i ).focus(function() {

          $( i + " .icontext").text(i_texto_A);

        });
        $( i ).focusout(function() {
          if ($( i ).hasClass( "app" )) {
          } else {
            $( i + " .icontext").text(e_texto_B);
          }
        });
        $( i ).click(function() {
          // window.location = "../apps/" + elemento;
          var e22 = elemento.substr( (elemento.lastIndexOf('.') +1) );
          var abc = elemento.split("."+e22);
          var vtitulo = abc[0];
          var id_aleatoria = id + "app"

          if ($("#"+id_aleatoria+"T").text() == " "+vtitulo+"    ") {

          } else {
            taskbar("_"+id_aleatoria, elemento);
          }

          windows_content(id_aleatoria, elemento,"../apps");


          $("#mdash").hide("drop",150);
          $("#orb").removeClass("gi");

        });



      // Luego reconoce la extensión y modifica el estilo CSS
      var str2 = "#id_" + id + " .icon"
      var extension = elemento.substr( (elemento.lastIndexOf('.') +1) );


      switch(extension) {
                      case 'app':
                        $( i ).addClass("app");
                        var abc = i_texto_A.split(".app");
                        i_texto_A = abc[0];
                        var ico = "../apps/"+i_texto_A+"/icon.png"
                        $( i + " .icontext").text(i_texto_A);
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

                        return true;


      } else {


    // Primero crea el icono
    id2 = "id_" + id;
    var icono = $('<div/>', {
      'class' : 'appicon',
      'id'    : id2,
      'tabindex' : "-1"
    });
    // Si el texto sobrepasa los 16 caracteres se acorta hasta seleccionar el elemento
    var ext = elemento.substr( (elemento.lastIndexOf('.') +1) ); // EXTENSION DEL FICHERO
    var i_texto_A = elemento;
    var l_texto_A = i_texto_A.length
    var limite_texto_A = 16
    if (l_texto_A >= limite_texto_A ) {
      var e_texto_B = i_texto_A.substring(0, 16)+"...";
    } else {
      var e_texto_B = i_texto_A
    }
    $(icono).appendTo(sitio);
    var i = "#"+id2
    $("<div class='icon'></div>").appendTo( i );
    $("<div class='icontext'>"+e_texto_B+"</div>").appendTo( i +" .icon");

    $( i ).focus(function() {

      $( i + " .icontext").text(i_texto_A);

    });
    $( i ).focusout(function() {
      if ($( i ).hasClass( "app" )) {
      } else {
      $( i + " .icontext").text(e_texto_B);
    }
    });
    $( i ).click(function() {
      // window.location = "../apps/" + elemento;
      var id_aleatoria = Math.floor(Math.random()*2000000000);
      windows_content(id_aleatoria, elemento,"../apps");
      taskbar("_"+id_aleatoria, elemento);
      $("#mdash").hide("drop",150);
      $("#orb").removeClass("gi");


    });


    // Luego reconoce la extensión y modifica el estilo CSS
    var str2 = "#id_" + id + " .icon"
    var extension = elemento.substr( (elemento.lastIndexOf('.') +1) );


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





                    default:
                      $( str2 ).css({
                        "background-image" : "url('../img/unknown.png')",
                        "background-repeat" : "no-repeat",
                        "background-position" : "center top"
                      });
    }

return true;


}









}

if( a(id,elemento,icono) ) {
  console.log("Documento con ID: "+ id + " CARGADO.");
} else {
  console.error("Documento con ID: "+ id + " ERROR.");

}
}
