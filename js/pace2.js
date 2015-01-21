$(function() {
  var r_text = new Array ();
  r_text[0] = "La verdadera ciencia enseña, sobre todo, a dudar y a ser ignorante. Ernest Rutherford (1871-1937)";
  r_text[1] = "No ha habido hombre de genio extraordinario sin mezcla de locura. Seneca (4 a. C.-65 d. C.).";
  r_text[2] = "No duermas para descansar, duerme para soñar, porque los sueños estan para cumplirse. Walt Disney (1901-1966)";
  r_text[3] = "Todo lo que somos es el resultado de lo que hemos pensado; está fundado en nuestros pensamientos y está hecho de nuestros pensamientos. Buda (563 AC-486 AC)";
  r_text[4] = "Amor y deseo son dos cosas diferentes; que no todo lo que se ama se desea, ni todo lo que se desea se ama. Miguel de Cervantes (1547-1616)";
  r_text[5] = "Importa mucho más lo que tú piensas de ti mismo que lo que los otros opinen de ti. Séneca (2 AC-65).";
  r_text[6] = "Una colección de pensamientos debe ser una farmacia donde se encuentra remedio a todos los males. Voltaire (1694-1778)";
  var i = Math.floor(7*Math.random())
  $("#c1").text(r_text[i]);
  $("#c1").hide();
  $("#c1").fadeIn(1000);
  $(window).load(function(){
    $("#c1").hide();
    $("#c1").fadeIn(1000);
    $("#c1").text(" Carga completada.");
    /* Ahora hay que darle un ancho 0 a la imagen y cargar la nueva imagen volviendo a darle su ancho, todo esto en un tiempo de 150 ms por movimiento 300ms en total  */
    $("#imgloader").attr("width", "0px"); // Primero asignamos un ancho 0, como en css3 #imgloader tiene un transition de 300ms esto hace que desde que es ejecutada la función hasta que se cumple pasa 300ms, luego tenemos que cambiar la imágen justo cuando pasen 300ms que dura la animación para quedarse en 0px de ancho y entonces volver a darle el ancho normal.
    setTimeout(function(){
      $("#imgloader").attr("src","img/Icon-Check-White.png");
      $("#imgloader").width("128px");}, 300);
      setTimeout(function(){$(".loadpage2").fadeOut(500);}, 2000); /* Cerramos el panel de carga */
    });
    setTimeout(function() {
      if( $('.loadpage2').is(':visible') ) {
        $("#c1, #c2, #c3").hide();
        $("#c1").html("La aplicación está tardando más de lo esperado en responder, puede cerrar esta pantalla de carga (en el nuevo icono que apareció en la esquina superior derecha de esta ventana) y continuar con los contenidos ya cargados, pero no lo recomendamos.");
        $('<b class="close">X</B>').appendTo('.tloadpage');
        $('.close').hide();
        $('.close').show(1000)
        $("#c1").fadeIn(1000);
        $( ".close" ).click(function() {
          $(".loadpage2").fadeOut(500);
        });
      }
      else {
      }
    }, 8000);
  


  });
