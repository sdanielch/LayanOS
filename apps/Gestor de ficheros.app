<div id="cempezar2" style="display: none;"></div>
<script>
function parents(div) {
  var a = $(div).parents("div").attr("id");
  var b = $("#"+a).parents("div").attr("id");
  return b;
}
var xxx = parents(".windows #cempezar2");
var ccc = $( ".calculator" ).width();
var ddd = $( ".calculator" ).height();
$("#"+xxx).animate({
  "width":420,
  "height":ddd + 50
}, 300, function() {
  // Animation complete.
});
</script>

<script type="text/javascript" src="../apps/Calculadora/calculator.js"></script>
  <link rel="stylesheet" type="text/css" href="../apps/Calculadora/main.css?main">


<div class="calculator">
  <input type="text" readonly>
  <div class="row">
    <div class="key">1</div>
    <div class="key">2</div>
    <div class="key">3</div>
    <div class="key last">0</div>
  </div>
  <div class="row">
    <div class="key">4</div>
    <div class="key">5</div>
    <div class="key">6</div>
    <div class="key last action instant">cl</div>
  </div>
  <div class="row">
    <div class="key">7</div>
    <div class="key">8</div>
    <div class="key">9</div>
    <div class="key last action instant">=</div>
  </div>
  <div class="row">
    <div class="key action">+</div>
    <div class="key action">-</div>
    <div class="key action">x</div>
    <div class="key last action">/</div>
  </div>
</div>
