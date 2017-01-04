function getRandomArbitrary2(min, max) {
  return Math.random() * (max - min) + min;
}
function change_wall(fondo,isurl) {
  var NUMal = getRandomArbitrary2(500,80000)
  if (fondo == undefined ) {
    fondo = "img/wall1.jpg";
  }
   if (isurl == undefined ) {
    isurl = "../";
  }
  $(".appbackground").css({
    //"background": "#181818 url('../"+fondo+"?"+NUMal+"') no-repeat center center fixed",
    "background-repeat": "no-repeat",
    "background-attachment": "fixed",
    "background-position": "center center",
    "background-image": "url('"+isurl+fondo+"?"+NUMal+"')",
    "-webkit-background-size": "cover",
  	"-moz-background-size": "cover",
  	"-o-background-size": "cover",
  	"background-size": "cover"
  });

// DETECTANDO COLOR PREDOMINANTE
/*var fondogr = "../" + fondo
var tracking = new Image();
tracking.onload = function() {
  console.log("Fondo cargado...");
}
tracking.src = fondogr;
if (tracking.complete) img.onload();
}*/
}
$( document ).ready(function() {



$.ajaxSetup ({
        // Disable caching of AJAX responses
        cache: false,
        statusCode: {
        404: function() { console.error("Hay un documento que NO se ha podido cargar, error 404");  },
        },
        async: true
});
// FONDO DE ESCRITORIO

change_wall();
function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}
$.get( "../users/"+usuario+"/user_pref.json", function( data ) {
  // Comprobamos si tiene guardado un fondo de escritorio en sus preferencias
  if (data.url_externa == false) {
  if (data.url_fondo_de_pantalla != "null") {
    // Comprobamos el fichero obtenido, y si existe cambiamos el fondo de escritorio
    if(UrlExists("../users/"+usuario+"/"+data.url_fondo_de_pantalla) == true ) {
  change_wall("./users/"+usuario+"/"+data.url_fondo_de_pantalla);
}
}

} else {
  change_wall(data.url_fondo_de_pantalla,"");
}
}, "json" );

console.log("jQuery iniciado");

$("html, #taskbar, #panel-taskbar").niceScroll({
   zIndex: 80,
   cursorcolor: "rgba(220,220,220,0.75)",
   cursorborder: "1px rgba(0,0,0,0.4) solid",
   cursorborderradius: "0px 0 0 0px",
   cursorwidth: "8px",
   autohidemode: true
});

// EFECTOS taskbar







//////////////////



$("#menu-taskbar").on("click", function() {
  $("#panel-taskbar").toggle();
});
/*$("div").not( $("#panel-taskbar, #menu-taskbar, #taskbar") ).on("click", function(){
  $("#panel-taskbar").hide();
});
*/
console.info("Leyendo ficheros JSON...");

// Creamos una función que creará iconos para las ventanas
function crear_icono(lugar,nombre,url,icono,width,height,limit,load_method) {
  //Cada uno de los iconos tendrá un ID distinto (Para modificarlo luego)
  var nal = Math.floor(Math.random() * 250000);
// Incluimos en el panel los
  $(lugar).append("<div id='"+nal+"' class='icono'><div class='div_icono'></div><span>"+nombre+"</span></div>");
  //Damos forma
  $("#"+nal+" .div_icono").css({
    "background": " url(../apps/"+icono+") no-repeat top center",
    "-webkit-background-size": "100%",
    "-moz-background-size": "100%",
    "-o-background-size": "100%",
    "background-size": "100%"
  });
  $("#"+nal).on("click", function(){
var clase = "app_" + nal;
// Para que no se puedan abrir dos o mas veces la misma aplicación al mismo tiempo las limitiamos todas a una sola instancia
if (limit == "true") {
    if( $('.'+clase).length )  {    } else {  new_window(nal,nombre,url,icono,width,height,load_method);  }
    }
else {
  var nal2 = Math.floor(Math.random() * 250000);
    new_window(nal2,nombre,url,icono,width,height,load_method);
}
  });
}

// LISTAMOS LOS PROGRAMAS QUE HAY DENTRO DEL DIRECTORIO DE PROGRAMAS
$.getJSON( "./slist.php", { usdir: "../apps/", recdir: false } )
  .done(function( json ) {
// Por cada entrada encontrada en el array...
    $.each( json, function( i, item ) {
          if(item.type == "dir") {
            // Cuando se trata de un directorio...
          //  console.log("Directorio:  " + item.name)
          } else {
            // Cuando se trata de un fichero...
          //  console.log("Fichero: " + item.name);
// Damos por hecho que todo lo que nos vamos a encontrar en ese directorio son JSON así que los cargamos y los ejecutamos
$.getJSON( item.name )
.done(function( json ) {
  crear_icono("#apps1",json.app,json.url,json.icon,json.width,json.height,json.limit,json.load_method);
 });
          }
         });

         $( json ).promise().done(function() {
console.info("Recorrido el directorio de aplicaciones.");
        // Luego ordenamos alfabéticamente
        var mylist = $('#apps1');
        var listitems = mylist.children('span').get();
        listitems.sort(function(a, b) {
        return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
        })
        $.each(listitems, function(idx, itm) { mylist.append(itm); });


        });


  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Error al cargar: " + err );
});

// Fixing bugs in #apps1 (listado de aplicaciones)
$("#menubar_d").on("click", function() {
  $("#menu-taskbar").click();
});
$("#desktop, .window").on("click", function() {
  $("#panel-taskbar").hide();

});

//$("#panel-taskbar").





$(document).bind("contextmenu", function (event) {
    
    // Avoid the real one
    event.preventDefault();
    
    // Show contextmenu
    $(".custom-menu").finish().toggle(100).
    
    // In the right position (the mouse)
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});


// If the document is clicked somewhere
$(document).bind("mousedown", function (e) {
    
    // If the clicked element is not the menu
    if (!$(e.target).parents(".custom-menu").length > 0) {
        
        // Hide it
        $(".custom-menu").hide(100);
    }
});


// If the menu element is clicked
$(".custom-menu li").click(function(){
    
    // This is the triggered action name
    switch($(this).attr("data-action")) {
        
        // A case for each action. Your actions here
        case "first": alert("first"); break;
        case "second": alert("second"); break;
        case "third": alert("third"); break;
    }
  
    // Hide it AFTER the action was triggered
    $(".custom-menu").hide(100);
  });


});
