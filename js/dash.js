$(document).on("click","#dash", function() {
  if($("#mdash").is(":visible"))
  {
    $("#mdash").hide("drop",200);
    $("#orb").removeClass("gi");
  } else {
    $("#mdash").show("drop",200);
    $("#orb").addClass("gi");
  }
});

$("#principal").on("click", function() {
  if($("#mdash").is(":visible"))
  {
    $("#mdash").hide("drop",200);
    $("#orb").removeClass("gi");
  } else {
    // NOTHING
  }
});
