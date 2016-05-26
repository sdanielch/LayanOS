<script src="../apps/WebCam/webcam.js"></script>
<script>
var sayCheese = new SayCheese('#container-element', { snapshots: true, width: 200 });

sayCheese.on('start', function() {


setTimeout(function(){

    sayCheese.takeSnapshot();

}, 1000);

});

sayCheese.on('error', function(error) {
 // handle errors, such as when a user denies the request to use the webcam,
 // or when the getUserMedia API isn't supported
});


sayCheese.on('snapshot', function(snapshot) {
          var grue = document.createElement('img');

          $(grue).on('load', function() {
            $('#ffoto').prepend(grue);
          });
          
           grue.src = snapshot.toDataURL('image/png');

        });
  $("#takephoto").click(function() {
var a1 = null;    var a2 = null;    var a3 = null;    var a4 = null;    var a5 = null;

$("#numcount").fadeIn(300);  
$("#numcount").text("3");
a1 = setTimeout(function(){ $("#numcount").text("2"); }, 1000);
a2 = setTimeout(function(){ $("#numcount").text("1"); }, 2000); 
a3 = setTimeout(function(){ 
$("#countdown").fadeIn(300);
$("#numcount").fadeOut(300);
$("#numcount").text("!");
 }, 2800); //momentos antes se enciende el "flash"
a4 = setTimeout(function(){ sayCheese.takeSnapshot(); }, 3000); //Se saca la foto con la luz del "flash" 
a5 = setTimeout(function(){ $("#countdown").hide(); }, 3100); // Se apaga el "flash"
  
  $("#takephoto").click(function() {
    // REINICIAMOS LOS CONTADORES EN CASO DE VOLVER A DAR CLICK EN LA PANTALLA
if (a1) {
    clearTimeout(a1); //cancel the previous timer.
    a1 = null;
}

if (a2) {
    clearTimeout(a2); //cancel the previous timer.
    a2 = null;
}

if (a3) {
    clearTimeout(a3); //cancel the previous timer.
    a3 = null;
}

if (a4) {
    clearTimeout(a4); //cancel the previous timer.
    a4 = null;
}

if (a5) {
    clearTimeout(a5); //cancel the previous timer.
    a5 = null;
}
});
});





$("#takephotoi").click(function() {
var b1 = null;    var b2 = null;    var b3 = null;    var b4 = null;    var b5 = null;
$("#numcount").text("");
$("#numcount").fadeIn(300);  
b3 = setTimeout(function(){ 
$("#countdown").fadeIn(300);
$("#numcount").fadeOut(300);
$("#numcount").text("!");
 }, 400); //momentos antes se enciende el "flash"
b4 = setTimeout(function(){ sayCheese.takeSnapshot(); }, 600); //Se saca la foto con la luz del "flash" 
b5 = setTimeout(function(){ $("#countdown").hide(); }, 800); // Se apaga el "flash"
  
  $("#takephotoi").click(function() {
    // REINICIAMOS LOS CONTADORES EN CASO DE VOLVER A DAR CLICK EN LA PANTALLA
if (b1) {
    clearTimeout(b1); //cancel the previous timer.
    b1 = null;
}

if (b2) {
    clearTimeout(b2); //cancel the previous timer.
    b2 = null;
}

if (b3) {
    clearTimeout(b3); //cancel the previous timer.
    b3 = null;
}

if (b4) {
    clearTimeout(b4); //cancel the previous timer.
    b4 = null;
}

if (b5) {
    clearTimeout(b5); //cancel the previous timer.
    b5 = null;
}
});
});







sayCheese.start();
/*
$( "#advanced-left" ).mouseover(function() {
    $( "#say-cheese-snapshots" ).css("width", 180);
});
$( "#say-cheese-snapshots" ).mouseout(function() {
        $( "#say-cheese-snapshots" ).css("width", 30);
});
*/
 notify("alerta","Para acceder a su camara pulse en el botón 'Permitir'.",8000);
</script>
<style>
#continer {
    width: 100%;
    height: calc(100% - 30px);
    background: #000;
}
#container-element {
    width: 100%;
    height: 100%;
}
#container-element video {
position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: calc(100% - 180px);
}
#say-cheese-snapshots {
    position: absolute;
    bottom: 30px;
    left: 0px;
    width: 100%;
    height: 150px;
    float: right;
    background: #323232;
    border-top: 1px #484848 solid;
    border-left: 1px #484848 solid;
    border-right: 1px #484848 solid;
    border-radius: 5px 5px 0px 0px;
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  -ms-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;

}

#say-cheese-snapshots:hover{
   /* width: 180px; */
}
#say-cheese-snapshots img {
    position: relative;
    text-align: center;
    height: calc(100% - 15px);
    margin: 5px;
    border-radius: 5px;
    border: 1px #484848 outset;
       -webkit-transition: all 100ms ease-in-out;
  -moz-transition: all 100ms ease-in-out;
  -ms-transition: all 100ms ease-in-out;
  -o-transition: all 100ms ease-in-out;
  transition: all 100ms ease-in-out;
  display: inline-block;
  opacity: 0.8;
}
#say-cheese-snapshots img:hover {
border: 1px #CC4400 outset;
cursor: pointer;
opacity: 1;
    }
    #say-cheese-snapshots img:active {
    border: 1px #CCBB00 outset;
    cursor: pointer;
    opacity: 1;
    }

.ffbutton {
font-size: 14px;
border: 1px #484848 outset;
border-radius: 4px;
padding: 2px;
padding-left: 4px;
padding-right: 4px;
cursor: pointer;
background: rgba(32,32,32,0.8);
text-align: center;
width: auto;
height: 26px;
display: inline-block;
}
.ffbutton:hover{
    border: 1px #CC4400 outset;
background: rgba(160, 45, 45, 1);
}
.ffbutton:active{
    border: 1px #CCBB00 inset;
    background: #111;
}

#countdown {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 30px;
    background: #FFF;
   -webkit-transition: all 100ms ease-in-out;
  -moz-transition: all 100ms ease-in-out;
  -ms-transition: all 100ms ease-in-out;
  -o-transition: all 100ms ease-in-out;
  transition: all 100ms ease-in-out;
  display: none;
}
#numcount {
    position: absolute;
    top: calc(50% - 150px);
    left: 50%;
    margin-left:-100px;
    margin-top:-100px;
    width: 200px;
    height: 200px;
    background: transparent;
    display: none;
    text-align: center;
    font-size: 180px;
    text-shadow: 1px 1px 1px #000, -1px -1px 1px #000, 4px 4px 8px #000;
}
#cambuttons {
    position: relative;
    width: 100%;
    height: 30px;
    text-align: left;
    padding: 2px;
    background: rgb(39,39,39);
background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI3MjcyNyIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzM2MzYzNiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjUxJSIgc3RvcC1jb2xvcj0iIzMxMzEzMSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0YjRiNGIiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
background: -moz-linear-gradient(top, rgba(39,39,39,1) 0%, rgba(54,54,54,1) 50%, rgba(49,49,49,1) 51%, rgba(75,75,75,1) 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(39,39,39,1)), color-stop(50%,rgba(54,54,54,1)), color-stop(51%,rgba(49,49,49,1)), color-stop(100%,rgba(75,75,75,1)));
background: -webkit-linear-gradient(top, rgba(39,39,39,1) 0%,rgba(54,54,54,1) 50%,rgba(49,49,49,1) 51%,rgba(75,75,75,1) 100%);
background: -o-linear-gradient(top, rgba(39,39,39,1) 0%,rgba(54,54,54,1) 50%,rgba(49,49,49,1) 51%,rgba(75,75,75,1) 100%);
background: -ms-linear-gradient(top, rgba(39,39,39,1) 0%,rgba(54,54,54,1) 50%,rgba(49,49,49,1) 51%,rgba(75,75,75,1) 100%);
background: linear-gradient(to bottom, rgba(39,39,39,1) 0%,rgba(54,54,54,1) 50%,rgba(49,49,49,1) 51%,rgba(75,75,75,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#272727', endColorstr='#4b4b4b',GradientType=0 );
}
#ffoto {

    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
 width: 100%;
height: calc(100% - 30px);
position: absolute;
top: 30px;
left: 0px;
}

#ffotoblur {
    overflow-x: hidden;
    overflow-y: hidden;
    white-space: nowrap;
 width: 100%;
height: calc(100% - 30px);
position: absolute;
top: 30px;
left: 0px;
background: transparent;
}

@supports (background-size: cover) {
  #ffotoblur {
  background: url('../php/blur_image.php') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    filter: blur(8px) grayscale(1);
    -webkit-filter: blur(8px) grayscale(1);
  }
  
}

#ffotoblur2 {
    overflow-x: hidden;
    overflow-y: hidden;
    white-space: nowrap;
 width: 100%;
height: calc(100% - 30px);
position: absolute;
top: 30px;
left: 0px;
background: rgba(0,0,0,0.75);
}

</style>
<div id="continer">
<div id="container-element"></div>
<div id="countdown"></div>
<div id="numcount"></div>
<center>
<div id="say-cheese-snapshots">
<div id="cambuttons">

<div id="takephoto" class="ffbutton">Capturar foto</div> 

<div id="takephotoi" class="ffbutton">Instantanea</div>

</div>
<div id="ffotoblur"></div>
<div id="ffotoblur2"></div>
<div id="ffoto"></div>
</div>
</center>
</div>