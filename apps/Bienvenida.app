<div id="cempezar" style="display: none;"></div>
<script>
function parents(div) {
  var a = $(div).parents("div").attr("id");
  var b = $("#"+a).parents("div").attr("id");
  return b;
}
var xx = parents(".windows #cempezar");
var cc = $( window ).width();
var dd = $( window ).height();
function cambiar_id(id) {
var now = Date.now();
$("#"+xx).attr("id",now);
}
$("#"+xx).animate({
  "width":200,
  "height":500
}, 300, function() {
  // Animation complete.
});
$("#uuser").text(usuario);
</script>
<style>
#Ayuda_info {
  background:transparent url('#') no-repeat center top fixed;
  text-align: center;

}
#Ayuda_info2 {
position: absolute;
  background:rgba(0,0,0,0.8) url('#') no-repeat center top fixed;
top: 70px;
left: 0px;
right: 0px;
bottom: 0px;
overflow: auto;
text-align: justify;
padding: 10px;
font-size: 0.85em;
}

#Ayuda_info2 strong {
color: #F00;
}

</style>
<div id="Ayuda_info" style="  box-sizing: border-box;
position: relative; width: 100%; height: calc(100% - 30px); padding: 10px; overflow: auto;">
  Bienvenido <strong id="uuser"></strong>, este es el centro de información, desde aquí podrás aprender a usar el sistema.
  <br />
<div id="Ayuda_info2">
<strong>¿Qué es LayanOS?</strong><br />
LayanOS es un sistema operativo que es ejecutado directamente desde un navegador, sin máquinas virtuales ni accesos remotos extraños.
<br /><br />
<strong>Ya cuento con un sistema operativo, así que, ¿Por qué usar este?</strong><br />
Este sistema, no es local, y con esto nos referimos a nuestro hándicap, imaginese que abre su programa de ofimática preferido, lleva rato sin guardar
cambios, y en un momento dado se le va la luz y por consiguiente se pierde todo ese tiempo que ha estado escribiendo, esto mismo, en LayanOS no podría
haber sucedido, y es que, al ser una plataforma on-line vestida de sistema operativo, va guardando cambios por usted de forma inmediata, letra a letra
y por supuesto, si se le va la luz, al volver a entrar (entre desde el ordenador que entre) habrá recuperado todo su trabajo. <br /><br />
Ahora imaginese eso mismo pero con otros trabajos de imagen, sonido, o incluso video.

<br /><br />
Saber que puede llevar un "equipo a cuestas" con todos sus datos sin tener si quiera que llevarlo en peso, es una razón de uso, puede acceder
desde cualquier parte del planeta a su cuenta y observar como al hacer un cambio este se ve reflejado en los distintos dispositivos en los que
esté abierto.

<br /><br />
<strong>¿Qué es la barra de tareas y cómo se usa?</strong><br />
Si aún no la cambió de lugar, la barra de tareas es la barra que se encuentra a la izquierda y muestra el botón para acceder a los programas y
los procesos abiertos. Esta barra es personalizable, puede cambiar el lugar e incluso la forma.
</div>
</div>
