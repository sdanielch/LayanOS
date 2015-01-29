function crea_iconos (id,elemento,icono,sitio){
  // La funcion "a" sirve únicamente para realizar una comprobación que devolverá true o false
  // en caso de algun error en la carga.
    function a(id,elemento,icono) {
      var extension2 = elemento.substr( (elemento.lastIndexOf('.') +1) );
      // Creamos el elemento icono, indipendientemente de si es una aplicación o es un fichero
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
// Y AHORA, DEPENDIENDO DE CADA CASO:
     // SI SE TRATA DE UNA APP
      if (extension2 == "app") {
        $( i ).click(function() {
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
      var str2 = "#id_" + id + " .icon"
      $( i ).addClass("app");
      var abc = i_texto_A.split(".app");
      i_texto_A = abc[0];
      var ico = "../apps/"+i_texto_A+"/icon.png"
      $( i + " .icontext").text(i_texto_A);
      change_icon(str2,ico);
      } else {
     // SI SE TRATA DE UN FICHERO
// En función de la extensión del nombre de fichero le ponemos por defecto un icono.
var str2 = "#id_" + id + " .icon"
var extension = elemento.substr( (elemento.lastIndexOf('.') +1) );
function ibo(extension){
  var ibo
  switch(extension) {
  case 'jpg':
  case 'png':
  case 'gif':
  var ibo = "../img/img.png";
  break;
  case 'zip':
  case 'rar':
  var ibo = "../img/img.png";
  break;
  case 'pdf':
  var ibo = "../img/pdf.png";
  break;
  case 'txt':
  var ibo = "../img/txt.png";
  break;
  case 'avi':
  case 'mp4':
  case 'wmv':
  var ibo = "../img/video.png";
  break;
  case 'mp3':
  case 'wma':
  var ibo = "../img/audio.png";
  break;
  default:
  var ibo = "../img/unknown.png";
    }
  return ibo  
  }
// En la variable iconoz ALMACENAMOS LA RUTA AL ICONO que enviaremos a la TASKBAR
 var iconoz = ibo(extension);
 change_icon(str2,iconoz);

      $( i ).click(function() {
      var id_aleatoria = Math.floor(Math.random()*2000000000);
      windows_content(id_aleatoria, elemento,"../apps");
      taskbar("_"+id_aleatoria, elemento, iconoz);
      $("#mdash").hide("drop",150);
      $("#orb").removeClass("gi");
    }); 
}
// DEVOLVEMOS TRUE SI TODO FUE CORRECTO
return true;
}
if( a(id,elemento,icono) ) {
  console.log("Doc: "+ elemento + " OK.");
} else {
  console.error("Doc: "+ elemento + " ERROR.");
}
}
