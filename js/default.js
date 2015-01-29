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

});

console.log("COJONES PACO");
setTimeout(function(){

  notify("alerta","Bienvenido <strong>"+usuario+"</strong><br /><br />Como ves, el proyecto avanza a pasos agigantados ^^ ",8000);

}, 2000);

setTimeout(function(){

  notify("error","Te recordamos que la aplicación aun no está lista y que puede que encuentres fallos usandola.",8000);

}, 4000);



