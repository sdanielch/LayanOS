<div style="width: 100%; height: calc(100% - 30px); background: #EFEFEF; color: #181818;">
  <script type="text/javascript" src="../js/functions.js"></script>
  <script>
  notify("error","El panel de control aún no ha sido terminado.",8000);

  </script>
  <style type="text/css">
  .messages{
    float: left;
    font-family: sans-serif;
    display: none;
  }
  .info{
    padding: 0px;
    border-radius: 0px;
    color: #181818;
    font-size: 14px;
    text-align: center;
  }
  .before{

    color: #24D;
    font-size: 14px;
    text-align: center;
  }
  .success{


    color: #2C2;
    font-size: 14px;
    text-align: center;
  }
  .error{

    color: #f00;
    font-size: 18px;
    text-align: center;
  }


  </style>



  <script>
  $(function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  });
  </script>
  <style>
  .ui-widget-content { background: transparent; color: #181818;}
  .ui-tabs-vertical { width: 100%;   height: calc(100% - 28px); }
  .ui-tabs-vertical .ui-tabs-nav { padding: 0px ; float: left; width: 150px; }
  .ui-tabs-vertical .ui-tabs-nav li { clear: left; width: 100%; border-bottom-width: 1px !important; border-right-width: 0 !important; margin: 0 -1px .2em 0; }
  .ui-tabs-vertical .ui-tabs-nav li a { display:block; }
  .ui-tabs-vertical .ui-tabs-nav li.ui-tabs-active { padding-bottom: 0; padding-right: .1em; border-right-width: 1px; border-right-width: 1px; }
  .ui-tabs-vertical .ui-tabs-panel { padding: 1px; float: right; width: calc(100% - 200px); height: calc(100% - 32px);}
  .ui-widget-header { height: calc(100% - 12px);}
  .ui-tabs-vertical .ui-tabs-nav li.ui-tabs-active { padding-bottom: 0px;}
  .ui-tabs .ui-tabs-nav li.ui-tabs-active { margin-bottom: 0px;}
  .ui-tabs-vertical .ui-tabs-nav li { margin: 0px;}
  .ui-widget-content {border: 0px;}
  .ui-tabs {padding: 0px;}
  .ui-corner-all, .ui-corner-top, .ui-corner-left, .ui-corner-tl {
     border-top-left-radius: 0px;
  }
  .ui-corner-all, .ui-corner-top, .ui-corner-right, .ui-corner-tr {
    border-top-right-radius: 0px;
  }
  .ui-corner-all, .ui-corner-bottom, .ui-corner-left, .ui-corner-bl {
    border-bottom-left-radius: 0px;
  }
  .ui-corner-all, .ui-corner-bottom, .ui-corner-right, .ui-corner-br {
    border-bottom-right-radius: 0px;
  }
  .ui-tabs .ui-tabs-nav .ui-tabs-anchor {
    float: none;
    padding: 2px;
    text-decoration: none;
  </style>
</head>

<body>
<div style="width: 100%; height: 40px; background: #181818 url('../img/bnoise.png');">
  <div type="button" class="btopbar fa fa-chevron-left" style="font-size: 20px;"></div>
  <div type="button" class="btopbar fa fa-chevron-right" style="font-size: 20px;"></div>
  <div type="button" class="btopbar fa fa-refresh" style="font-size: 20px;"></div>
  <div type="button" class="btopbar fa fa-cog" style="font-size: 20px; float:right"></div>

</div>

  <div id="tabs">
    <ul>
      <li><a href="#tabs-1">Fondo de pantalla</a></li>
      <li><a href="#tabs-2">Premium</a></li>
      <li><a href="#tabs-2">Bugs</a></li>
      <li><a href="#tabs-3">Tu cuenta</a></li>
    </ul>
    <div id="tabs-1" style="overflow: auto;">
      <!--el enctype debe soportar subida de archivos con multipart/form-data-->
      <form enctype="multipart/form-data" class="formulario">
        <b>Haga click en "<i>Elegir fichero</i>" para subir una imagen con formato JPG y luego pulse en "Subir y cambiar fondo" para realizar los cambios.</b><br />
        <!--<input name="archivo" type="file" id="imagen" accept="image/jpeg" required />-->


<script>document.getElementById("uploadBtn").onchange = function () {
  document.getElementById("imagen").value = this.value;
};</script>
      <style>
      .fileUpload {
        position: relative;
        overflow: hidden;
        margin: 10px;
      }
      .fileUpload input.upload {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        padding: 0;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        filter: alpha(opacity=0);
      }
      </style>
      <input id="imagen" placeholder="Elige fichero..." disabled="disabled" />
      <div class="fileUpload btn btn-primary">
        <span>Elegir fichero</span>
        <input name="archivo" id="uploadBtn" type="file" accept="image/jpeg" class="upload" />
      </div>





        <br /><br />
        <input type="button" id="wall" value="Subir y cambiar fondo" /><br />
      </form>
      <!--div para visualizar mensajes-->
      <div class="messages"></div><br /><br />
      <!--div para visualizar en el caso de imagen-->
      <div class="showImage"></div>
    </div>
    <div id="tabs-2" style="overflow: auto;">
      <h2>Content heading 2</h2>
      <p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>
    </div>
    <div id="tabs-3" style="overflow: auto;">
      <h2>Content heading 3</h2>
      <p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>
      <p>Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>
    </div>
  </div>



</div>
