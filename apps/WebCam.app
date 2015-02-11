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
            $('#say-cheese-snapshots').prepend(grue);
          });
          
           grue.src = snapshot.toDataURL('image/png');

        });
  $("#takephoto").click(function() {
    sayCheese.takeSnapshot();
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
    height: calc(100% - 30px);
}
#say-cheese-snapshots {
    position: absolute;
    top: 35px;
    right: 0px;
    width: 30px;
    height: calc(100% - 100px);
    float: right;
    background: rgba(20,20,20,0.8);
    border-left: 1px #484848 solid;
    border-top: 1px #484848 solid;
    border-bottom: 1px #484848 solid;
    border-radius: 5px 0px 0px 5px;
    overflow-y: auto;
    overflow-x: hidden; 
      -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  -ms-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
}

#say-cheese-snapshots:hover{
    width: 180px;
}
#say-cheese-snapshots img {
    position: relative;
    text-align: center;
    width: 150px;
    margin: 5px;
    border-radius: 5px;
    border: 1px #484848 outset;
       -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 100ms ease-in-out;
  -ms-transition: all 100ms ease-in-out;
  -o-transition: all 100ms ease-in-out;
  transition: all 100ms ease-in-out;
}
#say-cheese-snapshots img:hover {
width: 152px;
margin: 3px;
    border: 1px #CC4400 outset;
       cursor: pointer;
    }
    #say-cheese-snapshots img:active {
width: 152px;
margin: 3px;
    border: 1px #CCBB00 outset;
    cursor: pointer;
    }
#takephoto{
position: absolute;
bottom: 35px;
left: 30px;
font-size: 14px;
border: 1px #484848 outset;
border-radius: 50px;
padding: 2px;
padding-left: 4px;
padding-right: 4px;
cursor: pointer;
background: rgba(32,32,32,0.8);
min-width: calc(100% - 60px);
text-align: center;
}
#takephoto:active{
    border: 1px #484848 inset;
    background: #111;
}
#advanced-left {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 180px;
    height: calc(100% - 30px);
    background: transparent; 
}
</style>
<div id="continer">
<div id="container-element"></div>
<div id="takephoto">Hacer una foto</div>
<center>
<div id="advanced-left"></div>
<div id="say-cheese-snapshots"></div>
</center>
</div>