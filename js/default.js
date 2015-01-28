console.info("Fichero de Scripts cargado.")
$.ajaxSetup({ cache:false });
console.log("Bienvenido: "+usuario)
if (diruser === "true") {
console.log("Su directorio de usuario está siendo usado con una configuración personalizada.")
} else {
console.log("Su directorio de usuario acaba de ser creado con una configuración predeterminada.")
}






// PRIMER SCRIPT
var jqxhr = $.get( "getapps.php", function(data) {
  var data = JSON.parse(data);
  var groupname = 'Leyendo aplicaciones:';
  console.group( groupname );
  for (var i = 0;i< data.length;i++){
    data.sort();
    crea_iconos(i,data[i],"fichero","#e_dash");
  }
  console.groupEnd();

})




.done(function() {
  console.log("Documentos Leídos")
})
.fail(function() {
  console.error( "Error al cargar los documentos." );
})
.always(function() {
  console.log( "Orden correcta." );
});







//Ocultamos el menú al cargar la página
$("#cderecho").hide();

//mostramos el menú si hacemos click derecho con el ratón 
/*$(document).bind("contextmenu", function(e){
  $("#cderecho").css({'display':'block', 'left':e.pageX, 'top':e.pageY});
  return false;
});


//cuando hagamos click, el menú desaparecerá
$(document).click(function(e){
  if(e.button == 0){
    $("#cderecho").css("display", "none");
  }
});
*/
//si pulsamos escape, el menú desaparecerá
$(document).keydown(function(e){
  if(e.keyCode == 27){
    $("#cderecho").css("display", "none");
  }
});

//controlamos los botones del menú
$("#cderecho").click(function(e){

  // El switch utiliza los IDs de los <li> del menú
switch(e.target.id){
case "copiar":
console.log("copiado!");
break;
case "mover":
console.log("movido!");
break;
case "eliminar":

          var vtitulo2 = "Panel de control.app";
          var id_aleatoria2 = "CD" + "app"

          if ($("#"+id_aleatoria2+"T").text() == " "+vtitulo2+"    ") {

          } else {
            taskbar("_"+id_aleatoria2, vtitulo2);
          }

          windows_content(id_aleatoria2, vtitulo2,"../apps");



break;
}
});



setTimeout(function(){

  notify("alerta","Bienvenido <strong>"+usuario+"</strong><br /><br />Como ves, el proyecto avanza a pasos agigantados ^^ ",8000);

}, 2000);

setTimeout(function(){

  notify("error","Te recordamos que la aplicación aun no está lista y que puede que encuentres fallos usandola.",8000);

}, 4000);
