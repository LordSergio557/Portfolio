$(document).ready(function(){
  $("#act").css("display", "none");
  $("#hm").addClass("active");
  $("#yo").css("display", "none");
  $("#cookies").css("display", "none");


  $("#hm").click(function(){
    location.reload();
  });

  $("#actBtn").click(function(){
    $("#hm").removeClass("active");
    $("#act").css("display", "inline");
    $("#actBtn").addClass("active");
    $("#home").css("display", "none");
    $("#yo").css("display", "none");
    $("#me").removeClass("active");
    $("#galletas").removeClass("active");
    $("#cookies").css("display", "none");
  });

  $("#me").click(function(){
    $("#hm").removeClass("active");
    $("#act").css("display", "none");
    $("#actBtn").removeClass("active");
    $("#home").css("display", "none");
    $("#me").addClass("active");
    $("#yo").css("display", "inline");
    $("#galletas").removeClass("active");
    $("#cookies").css("display", "none");
  });

  $("#galletas").click(function(){
    $("#hm").removeClass("active");
    $("#act").css("display", "none");
    $("#actBtn").removeClass("active");
    $("#home").css("display", "none");
    $("#me").removeClass("active");
    $("#yo").css("display", "none");
    $("#galletas").addClass("active");
    $("#cookies").css("display", "inline");
  });


});
