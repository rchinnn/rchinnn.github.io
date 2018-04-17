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

  // jQuery Function #4
  $("#hello").mouseenter(function() {
    $("#hello").hide("fold", 2000);
    $("#intro").show("fold", 2000);
      $("#intro").typeIt({
        startDelay: 1100,
        speed: 150,
        lifeLike: false
      });
  });

  // jQuery Function #5 (MagnificPopup)
  $(".popup-button").magnificPopup({
    type:"inline",
    midClick: true
  });

  // jQuery Function #6 (source: Dainius from https://blog.trackduck.com/2015/06/10/15-impressive-pop-animation-effects-codepen/)
  $(".rad").on("mouseenter mouseleave", function () {
    $(".box, .line").toggleClass("open");
  });

  // jQuery Function #7 (TypeIt)
  $("#hello").typeIt({
    speed: 75,
    lifeLike: false
  });
});
