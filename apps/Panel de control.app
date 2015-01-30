<link rel="stylesheet" type="text/css" href="../apps/Panel de control/css/css.css" media="screen" />

<div style="width: 100%; height: calc(100% - 30px); background: #EFEFEF; color: #181818;">
  <script type="text/javascript" src="../js/enviroment/functions.js"></script>
  <script>
  notify("error","El panel de control aún no ha sido terminado.",8000);
  </script>
 

  <script>
  $(function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  });
  </script>
  

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

      <form enctype="multipart/form-data" class="formulario">
      <b>Tenga presente, que cualquier cambio hará que se refresque el navegador con la nueva configuración, por esto, guarde los documentos que tenga abiertos.</b><br /><br />
        <p>Haga click en "<i>Elegir fichero</i>" para subir una imagen con formato JPG y luego pulse en "Subir y cambiar fondo" para realizar los cambios.</p><br />
        <!--<input name="archivo" type="file" id="imagen" accept="image/jpeg" required />-->


<script>document.getElementById("uploadBtn").onchange = function () {
  document.getElementById("imagen").value = this.value;
};</script>
     <center>
      <input id="imagen" placeholder="Elige fichero..." disabled="disabled" />
      <div class="fileUpload btn btn-primary">
        <span>Elegir fichero</span>
        <input name="archivo" id="uploadBtn" type="file" accept="image/jpeg" class="upload" />
      </div>





        <br /><br />
        <input type="button" id="wall" value="Subir y cambiar fondo" /><br /></center>
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
