$( document ).ready(function() {
  $.ajaxSetup ({
        // Disable caching of AJAX responses
        cache: false
    });
console.log("jQuery iniciado");

// Movimientos suaves de scroll
   $('a[href^="#"]').on('click',function (e) {
   	    e.preventDefault();

   	    var target = this.hash;
   	    var $target = $(target);

   	    $('html, body').stop().animate({
   	        'scrollTop': $target.offset().top
   	    }, 900, 'swing', function () {
   	        window.location.hash = target;
   	    });
   	});
// Scrollbar personalizada
   $("html").niceScroll({
      zIndex: 80,
      cursorcolor: "rgba(220,220,220,0.75)",
      cursorborder: "1px rgba(0,0,0,0.4) solid",
      cursorborderradius: "0px 0 0 0px",
      cursorwidth: "8px",
      autohidemode: true
   });

// Cerramos el mensaje de precarga
$(".se-pre-con").delay(0).fadeOut(0);

//HACIENDO PRUEBAS CON SHA512



function clean_flash() {
  $("#login-b, #register-b").remove();
  $("#login-a, #register-a").hide();
}




$("#reg1").on("click", function(){
clean_flash()
  $( "#register-a" ).load( "html/reg.html", function( response, status, xhr ) {
  if ( status == "error" ) {
    //var msg = "Sorry but there was an error: ";
    //$( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
    console.error("Ha ocurrido un error al cargar el formulario de registro: "+ xhr.statusText);
  }
  if ( status != "error" ) {
    $("#register-a").show();
  }
});
  $("#register-a").show();
});


$("#log1").on("click", function(){
clean_flash()
  $( "#login-a" ).load( "html/log.html", function( response, status, xhr ) {
  if ( status == "error" ) {
    //var msg = "Sorry but there was an error: ";
    //$( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
    console.error("Ha ocurrido un error al cargar el formulario de inicio de sesión: "+ xhr.statusText);
  }
  if ( status != "error" ) {
    $("#login-a").show();
  }
});
  $("#login-a").show();
});



var l10n = $.getJSON( "./l10n/es_ES.json", function( l10n ) {
return_var(l10n);
});
function return_var(l10n) {
  console.log("Idioma: "+ l10n.idioma);
  console.log("Versión del idioma: "+ l10n.version);
  console.log("Traductor: "+ l10n.traductor);
}

// Comprobamos si hay algun usuario ya en sesión
$.get( "./php/c_session.php", function( data ) {
  if ( data.session == "true" ) {
    console.log("Hay un usuario activo en la sesión: " + data.usuario);
    console.log("Registrado el: " + data.registrado)
    $(".info").html("Bienvenido de nuevo " + data.nombre);
    $("#log1").text("Cambiar de usuario");
  } else {
    console.log("Sesión limpia");
    $(".info").html("Bienvenido a LayanOS, inicie o registe su cuenta")
  }
}, "json" );



});
