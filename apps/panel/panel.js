
// Funcion simple para actuar sobre una ventana
// Buscamos los padres de cualquier div dibujado
//var parentEls = $( "#panel-menu" ).parents();
// Filtramos por el segundo resultado y los escogemos en una variable
//var this2384 = parentEls[1];

// Mostramos (opcionalmente) por consola la salida
//console.log(parentEls[1]);
//$(this2384).width(700);
//$(this2384).height(450);

// Precargamos la sección inicio
$("#panel-menu-inicio").addClass("menu-panel-activo");
function carga_ajax(url,sitio){
$(sitio).html("Cargando...");
$( sitio ).load( url, function( response, status, xhr ) {
if ( status == "error" ) { $(sitio).html( "<div style='font-size: 72px;'>"+xhr.status+"<span style='font-size: 24px;'> "+xhr.statusText+"</span></div><br />Ha ocurrido un error al intentar abrir la sección, este error puede estar devido a una sobrecarga el sistema, por favor espere unos minutos y vuelva a intentar acceder." ); }
});
}
carga_ajax("../apps/panel/sections/inicio.html","#panel-area");
$("#panel-menu-inicio").on("click", function(){
  carga_ajax("../apps/panel/sections/inicio.html","#panel-area");
});
$("#panel-menu-prefuser").on("click", function(){
  carga_ajax("../apps/panel/sections/prefuser.html","#panel-area");
});
$("#panel-menu-prefcount").on("click", function(){
  carga_ajax("../apps/panel/sections/prefcount.html","#panel-area");
});
$("#panel-menu-sistema").on("click", function(){
  carga_ajax("../apps/panel/sections/sistema.php","#panel-area");
});

$(".menu-panel-menu").on("click", function(){
  $(".menu-panel-menu").removeClass("menu-panel-activo");
  $(this).addClass("menu-panel-activo");
});
$(".menu-panel-menu").on("mouseover", function(){
  $(".menu-panel-menu").removeClass("menu-panel-mouseover");
  $(this).addClass("menu-panel-mouseover");
});
$(".menu-panel-menu").on("mouseout", function(){
  $(".menu-panel-menu").removeClass("menu-panel-mouseover");
});
