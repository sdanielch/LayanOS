function windows_content(id, contenido, url22) {


 // SI NO EXISTE LA VENTANA LA CREAMOS
  if ($("#"+id).length === 0){
    // Creamos el div con las propiedades
  var ventana = $('<div/>', {
    'class' : 'windows',
    'id'    : id ,
    'tabindex' : "-1"
  });
  var c_ventana_t = id+"T";
  var ventana_t = $('<div/>', {
    'id' : c_ventana_t,
    'tabindex' : "-1",
    'class' : 'btitulos'
  });
  var c_ventana_c = id+"C";
  var ventana_c = $('<div/>', {
    'id' : c_ventana_c,
    'tabindex' : "-1",
    'class' : 'contenidoss'
  });
  // Lo acoplamos en la principal
  var windows = "#"+id+".windows";
  $(windows).addClass( "seleccionado" );
  $(ventana).appendTo("#principal");
  $(ventana_t).appendTo(windows);

  var extension = contenido.substr( (contenido.lastIndexOf('.') +1) );
  var abc = contenido.split("."+extension);
  var vtitulo = abc[0];



  var cont = decodeURI(contenido);
  $("#"+c_ventana_t).html("<strong> "+vtitulo+"</strong> <div style='position: absolute; top: 5px; right: 45px; width: 19px; height: 19px;' id='"+id+id+id+id+id+"' class='vminimize' /> <div style='position: absolute; top: 5px; right: 25px; width: 19px; height: 19px;' id='"+id+id+id+id+id+"i"+"' class='vmaximize' />  <div style='position: absolute; top: 5px; right: 5px; width: 19px; height: 19px;' id='"+id+id+id+id+"' class='vclose' />");
  // CERRAR VENTANA
  $("#"+id+id+id+id).click(function() {
$('#'+id).addClass("trans300");
$('#'+id).addClass("ccwindows");
setTimeout(function(){
$("#_"+id).remove();
$("#"+id).remove();
}, 300);

   
  

/*
  $("#"+id).fadeOut(150);
  $("#_"+id).remove();
  setTimeout(function(){ $("#"+id).remove(); }, 150);
*/
  
  
  });

  $("#"+c_ventana_t).mousedown(function(e){
    switch(e.which) {
      case 1:
        //left Click
        break;
        case 2:
          //middle Click
         $('#'+id).addClass("trans300");
$('#'+id).addClass("ccwindows");
setTimeout(function(){
$("#_"+id).remove();
$("#"+id).remove();
}, 300);
          break;
          case 3:
            //right Click
            break;
          }
          return true;// to allow the browser to know that we handled it.
        });


  // MAXIMIZAR VENTANA
  $("#"+id+id+id+id+id+"i").click(function() {
       $("#"+id).toggleClass("max-restore")
  });

  $("#"+c_ventana_t).dblclick(function() {
    $("#"+id).toggleClass("max-restore")
  });

  // MINIMIZAR VENTANA
  $("#"+id+id+id+id+id).click(function() {
    $("#"+id).removeClass( "seleccionado" );
        $("#"+id).addClass( "minimizado" );
        $("#"+id).addClass( "trans300" );
        setTimeout(function(){ $("#"+id).hide(); }, 300);
  });



  $("#"+id).click(function() {
    $(".windows").zIndex( 200 );
    $(".windows").removeClass( "seleccionado" );
    $("#"+id+".windows").addClass( "seleccionado" );
    $("#"+id+".windows").zIndex( 205 );
  });

  $(ventana_c).appendTo(windows);
  console.log("Ejecutando: "+contenido);
  // Codificamos el nombre de fichero para que sea leible por Ajax
  
  
  var extension = contenido.substr( (contenido.lastIndexOf('.') +1) );

    var contenido = decodeURI(contenido);
    $("#"+id).css({'width': 600, 'height': 420});
    url = "../home/"+usuario+"/documents/"+contenido;

  // SI NO ES UNA APP
  // RECONOCIMIENTO POR EXTENSION

  switch(extension) {
  case 'jpg':
  case 'gif':
  case 'png':
  case 'jpeg':
  case 'bmp':
  $("#"+c_ventana_c).addClass("centrado");
  $(windows).css("background", "#000");
  $('<img src="'+url+'" class="img_doc" id="'+id+'IMG'+'"/>').appendTo("#"+c_ventana_c)
  break;
  case 'app':
  var contenido2 = encodeURI(contenido);
  var url = url22+ "/" + contenido2;
  $("#"+c_ventana_c).load(url,function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success")
        console.info("Carga completada.");
        if(statusTxt=="error")
          console.error("Error al abrir: "+contenido+" "+xhr.status+": "+xhr.statusText);
        });
  break;
  case 'txt':
  $(windows).css("background", "#000");
  $('<textarea id="'+c_ventana_c+'2" style="width: 100%; height: calc(100% - 30px);"></textarea>').appendTo("#"+c_ventana_c);
 
$("#"+c_ventana_c+"2").load(url,function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success")
       $(this).val(responseTxt);


$("#"+c_ventana_c+"2").kendoEditor({
            tools: [
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "justifyLeft",
                "justifyCenter",
                "justifyRight",
                "justifyFull",
                "insertUnorderedList",
                "insertOrderedList",
                "indent",
                "outdent",
                "createLink",
                "unlink",
                "insertImage",
                "insertFile",
                "subscript",
                "superscript",
                "createTable",
                "addRowAbove",
                "addRowBelow",
                "addColumnLeft",
                "addColumnRight",
                "deleteRow",
                "deleteColumn",
                "viewHtml",
                "formatting",
                "cleanFormatting",
                "fontName",
                "fontSize",
                "foreColor",
                "backColor"
            ]
        });


        if(statusTxt=="error")
          console.error("Error al abrir: "+contenido+" "+xhr.status+": "+xhr.statusText);
        });

/*
       
       */
  break;
  default:
  $('<iframe src="'+url+'" class="iframe_doc" id="'+id+'iframe'+'"frameBorder=0></iframe>').appendTo("#"+c_ventana_c)

  }

                        
  




var vc = "#"+c_ventana_t;
      $( windows ).draggable({
        zIndex: 200,
        appendTo: windows,
        stack: ".windows",
        cursor: "crosshair",
        opacity: 0.8,
        handle: vc,
        containment: "document",
        drag: function( event, ui ) { $("#"+id).removeClass("max-restore")
      }

      });
      $( windows ).resizable({
        ghost: false,
        minWidth: 200,
        minHeight: 150

      });
      //$("#"+id).hide(0);
      var w_app = $( "#"+id ).width();
      var h_app = $( "#"+id ).height();
      var w_screen = $( window ).width();
      var h_screen = $( window ).height();
      var aleatorio_ancho = Math.round(Math.random()* w_screen/2);
      var aleatorio_alto = Math.round(Math.random()* h_screen/2);
      var pos1 = aleatorio_ancho
      var pos2 = aleatorio_alto
      $("#"+id).css({'left': pos1, 'top': pos2});
      //$("#"+id).fadeIn(300);
      $("#"+id).focus();


    } else {
      // SI EXISTE LA VENTANA LE DAMOS EL FOCO
      $(".windows").zIndex( 200 );
      $("#"+id+".windows").zIndex( 205 );
      $("#"+id).fadeIn(300);
      $("#"+id).focus();

    }

  
}
