$(document).on("click","#dash", function() {
  if($("#mdash").is(":visible"))
  {
    $("#mdash").hide(0);
    $("#orb").removeClass("gi");
  } else {
    $("#mdash").show(0);
    $("#orb").addClass("gi");
  }
});

$("#principal").on("click", function() {
  if($("#mdash").is(":visible"))
  {
    $("#mdash").hide(0);
    $("#orb").removeClass("gi");
  } else {
    // NOTHING
  }
});
