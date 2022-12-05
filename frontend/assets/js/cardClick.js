$(document).ready(function () {
  $(".hide").hide();

   //Fade In Functions
  $("#brazilSVG").click(function () {
    $(".hide").hide();
    $(".brazil-txt").fadeIn(300);
  });
  $("#usaSVG").click(function () {
    $(".hide").hide();
    $(".usa-txt").fadeIn(300);
  });
  $("#indiaSVG").click(function () {
    $(".hide").hide();
    $(".india-txt").fadeIn(300);
  });
  $("#RussiaSVG").click(function () {
    $(".hide").hide();
    $(".russia-txt").fadeIn(300);
  });

  //Blur Functions
  $("#usaSVG").blur(function () {
    setTimeout(() =>{
      $(".usa-txt").hide();
    }, 3000)
  });
  $("#indiaSVG").blur(function () {
    setTimeout(() =>{
      $(".india-txt").hide();
    }, 3000)
  });

  $("#RussiaSVG").blur(function () {
    setTimeout(() =>{
      $(".russia-txt").hide();
    }, 3000)
  });
  $("#brazilSVG").blur(function () {
    setTimeout(() =>{
      $(".brazil-txt").hide();
    }, 3000)
  });

  $(window).resize(() => {
    $(".brazil-txt").css({
      top: $("#usaSVG").position().top + 32,
      left: $("#usaSVG").position().left,
    });
    $(".brazil-txt").css({
      top: $("#brazilSVG").position().top + 32,
      left: $("#brazilSVG").position().left,
    });
    $(".brazil-txt").css({
      top: $("#RussiaSVG").position().top + 32,
      left: $("#RussiaSVG").position().left,
    });
    $(".brazil-txt").css({
      top: $("#indiaSVG").position().top + 32,
      left: $("#indiaSVG").position().left,
    });
  });
});
