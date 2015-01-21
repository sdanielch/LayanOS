console.info("Fichero de Scripts cargado.")
$.ajaxSetup({ cache:false });
console.log("Bienvenido: "+usuario)
if (diruser === "true") {
console.log("Su directorio de usuario está siendo usado con una configuración personalizada.")
} else {
console.log("Su directorio de usuario acaba de ser creado con una configuración predeterminada.")
}

setTimeout(function(){

  notify("alerta","Bienvenido <strong>"+usuario+"</strong><br /><br />Como ves, el proyecto avanza a pasos agigantados ^^ ",8000);

}, 2000);

setTimeout(function(){

  notify("error","Te recordamos que la aplicación aun no está lista y que puede que encuentres fallos usandola.",8000);

}, 4000);
