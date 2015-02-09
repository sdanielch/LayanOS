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

setTimeout(function(){

  notify("alerta","La carga del servidor está en <br /> <div><div class='systemload' style='width:"+systemload+"em;'></div><div style='position:relative'><div class='systemload' style='width:"+systemload1+"em;'></div> <div style='position:relative'><div class='systemload' style='width:"+systemload2+"em;'></div><div class='systemload2'>"+systemload1+"</div><div class='systemload3'>1Min:"+systemload+" - 5Min:"+systemload1+" - 15Min:"+systemload2+"</div></div>",12000);

}, 500);


setTimeout(function(){

  notify("alerta",l10n.notify.notify1,8000);

}, 2000);

setTimeout(function(){

  notify("error",l10n.notify.notify2,8000);

}, 4000);



