  function new_window(id,nombre,url,icono,width,height,tipodecarga){
//    $( document ).ready(function() {
$("#panel-taskbar").hide();
    var clase_app = "app_" + id;
    var id_app = "idapp_" + id;
// Creamos la ventana en si
    $( "body" ).append("<div id='"+id_app+"' class='"+clase_app+" window window_a'></div>");
// Como ya no vamos a utilizar más la animacion de inicio para la ventana actual desactivamos la animacion
$("#"+id_app).wait(300).removeClass("window_a");
// Situamos la ventana en un lugar cualquiera de la ventana
// Le damos el ancho y el alto que recibimos de su json (de no recibir este valor se pondría el que hay por defecto en su clase)
$("#"+id_app).width(width);
$("#"+id_app).height(height);
// como tenemos las ventanas protegidas en el espacio del ESCRITORIO calculamos el ancho y el alto del mismo en el movimiento
var ancho_desktop = $("#desktop").width();
var alto_desktop = $("#desktop").height();
var ancho_app = $("#"+id_app).width();
var alto_app = $("#"+id_app).height();
var ancho_aleatorio = parseInt(ancho_desktop) - parseInt(ancho_app) - 72;
var alto_aleatorio = parseInt(alto_desktop) - parseInt(alto_app) - 30;
function getRandomArbitrary(min, max) { return Math.random() * (max - min) + min; }
var aa1 = getRandomArbitrary(0,ancho_aleatorio);
var aa2 = getRandomArbitrary(0,alto_aleatorio);
$("#"+id_app).css({ "top" : aa2, "left" : aa1 });
// Le damos el ancho y el alto que recibimos de su json
$("#"+id_app).width(width);
$("#"+id_app).height(height);

// Creamos los elementos base
          // BARRA DE TITULOS
$( "#" + id_app ).append("<div class='bartip'></div>");
// Creamos los botones de la barra de título (dentro de la barra de titulos)
          // CREAMOS EL BOTON PARA CERRAR LA VENTANA
$( "#" + id_app + " .bartip" ).append("<div id='"+id_app+"buttonCLOSE' class='bclose bwindow'></div>    ");
// Le damos un uso al boton de CERRAR

$("#" + id_app + "buttonCLOSE").on("click", function(){
  $("." + clase_app).addClass("animateclosewindow"); // Animamsos el cierre de la aplicacion
    $("."+clase_app).wait(300).remove(); // Esperamos el tiempo de la animacion para destruir por completo la ventana
});


          // CREAMOS EL BOTON PARA MINIMIZARLA
$( "#" + id_app + " .bartip" ).append("<div id='"+id_app+"buttonMINIMIZE' class='bminimize bwindow'></div>    ");
        // CREAMOS EL BOTON PARA MAXIMIZARLA/RESTAURARLA
$( "#" + id_app + " .bartip" ).append("<div id='"+id_app+"buttonMAXIMIZE' class='bmaximize bwindow'></div>    ");
// Ponemos el título de la ventana en la barra de títulos
$( "#" + id_app + " .bartip" ).append("<span class='titlebar'>"+nombre+"</span>")
// Creamos el DIV donde se cargará la aplicación
    $( "#" + id_app ).append("<div class='ajaxload'><span class='loadload'>Cargando...</span></div>");
// Si no existe un tipo de carga predeterminado seleccionamos "1" para cargar por object
if (tipodecarga == undefined) { tipodecarga = "1"}
// La URL absoluta de la aplicación la metemos en una variable para acceder a ella mas tarde
var urlreal = "../apps/" + url

 // SEGUN LA CONFIGURACION DEL PROGRAMA LO CARGAMOS DE UNA FORMA U OTRA
if (tipodecarga == "1") {
  // COMO CARGARIAMOS LA APLICACION EN CASO DE ESCOGER EL METODO 1
  console.log("La aplicación "+nombre+" se cargará por OBJECT");

  $( "#"+ id_app + " .ajaxload" ).append("<object type=\"text/html\" width=\"100%\" height=\"100%\" id=\"carga_object_"+id_app+"\" data=\""+urlreal+"\" standby=\"Espere por favor...\"><p>Ha ocurrido un error al intentar abrir la aplicacion</p></object>");
  window.addEventListener('error', function(e) {
      console.log("OCURRIÓ UN ERROR -> " + e);
  }, true);

  $("#carga_object_"+id_app).on('load', function(){
          $(".loadload").hide();
  });

} else if (tipodecarga == "2") {
  // COMO CARGARIAMOS LA APLICACION EN CASO DE ESCOGER EL METODO 2

} else if (tipodecarga == "3") {
  // COMO CARGARIAMOS LA APLICACION EN CASO DE ESCOGER EL METODO 3
console.log("La aplicación "+nombre+" se cargara por Ajax");
  $( "#"+ id_app + " .ajaxload" ).load( urlreal, function( response, status, xhr ) {
    if ( status == "error" ) {
      $( "#"+ id_app + " .ajaxload" ).html("Ocurrió un error al querer abrir la aplicacion" );
    }
  });
} else {
  // Si no hay métodos no hay nada que cargar
  $( "#"+ id_app + " .ajaxload" ).html("No hay un método válido para abrir la aplicación, consulte al desarrollador de la app." );
}



$( "#"+ id_app + " .ajaxload" ).css({
  position: "absolute",
  top: 30,
  left: 0,
  right: 0,
  bottom: 0
});
// Hacemos que la ventana se pueda mover desde la barra de títulos
    $( "."+clase_app ).draggable({
      //appendTo: "body",
      //grid: [ 2, 2 ],
      iframeFix: true, //Algunas aplicaciones hacen uso de IFRAMES, fixeamos
      opacity: 0.80, // Volvemos semitransparente la ventana mientras es arrastrada
      // snap: true, //GRID por si queremos que las ventanas se automuevan cuando esten cerca
      //zIndex: 1000, // aplicamos un z-index alto a la par que se quede siempre en primer plano
      containment: "#desktop", //Restringimos el área de movimiento al escritorio
      handle: ".bartip", //Restringimos el movimiento de la ventana desde la barra de titulos
      cancel: ".bclose, .bminimize, .bmaximize, .uclose, .uminimize, .umaximize", //Hacemos que no se pueda mover desde los botones de titulo
      stack: ".window", //Subimos el Z-INDEX por encima de las demas ventanas
      cursor: "move"
    });
// Hacemos que la ventana pueda redimensionarse

$( "."+clase_app ).resizable({
      containment: "#desktop",
     //resize: function( event, ui ) { $( "#"+ id_app + " .ajaxload" ).css({});},
      ghost: false, // Desactivamos el modo ghost ya que las animaciones no permiten su uso
      autoHide: true,
      animate: false, // Animamos la redimension de la ventana
      //animateDuration: "fast", // Hacemos rápido la redimension
      //animateEasing: "easeOutQuad" //  Elegimos el tipo de animacion
    });


// Sumamos un valor al Z-INDEX de la ventana actual para darle ventaja sobre el resto en el primer iniciado
var valoralto = $(".window").css( "z-index" );
var va1 = parseInt(valoralto) + 1; //Convertimos a entero el string obtenido de "valoralto"
$("#"+id_app).css("z-index", va1);
// Traemos al frente la ventana cuando se pincha en ella
$("#"+id_app).on("click", function(){
$(".window").css( "z-index" , "auto" );
var valoralto = $(".window").css( "z-index" );
var va1 = parseInt(valoralto) + 1;
$("#"+id_app).css("z-index", va1);
});



// FINALMENTE INVOCAMOS LA FUNCIÓN QUE HARÁ POSIBLE CREAR UNA "TAREA"
new_task(id,nombre,icono);
//    });
  }
