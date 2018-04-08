$(document).ready(function() {
  //jQuery Function #1
  $(".button").css("opacity", 1.0);
  $(".button").hover(
    function() {$(this).animate({opacity: 0.6}, 200);},
    function() {$(this).animate({opacity: 1.0}, 200);
  });

  //jQuery Function #2
  $(".button").mouseover(function() {
    $(this).animate({"marginTop": "-=25px"}, "slow");
  });
  $(".button").mouseout(function(){
    $(this).animate({"marginTop": "+=25px"}, "slow");
  });

  //jQuery Function #3
  $(".button").hover(function() {
    $(this).removeClass("square-button");
    $(this).addClass("circle-button");
  }, function() {
    $(this).removeClass("circle-button");
    $(this).addClass("square-button");
  });

  //jQuery Function #4
  $("#hello").mouseover(function() {
    $("#hello").hide("scale",{percent: 20}, 1000);
    $("#intro").show("fold", 2200);
  });

  //jQuery Function #5
  $(".button").magnificPopup({
    type:"inline",
    midClick: true
  });
});
