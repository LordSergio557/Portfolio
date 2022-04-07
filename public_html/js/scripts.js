$(document).ready(function(){
  $("#act").css("display", "none");
  $("#hm").addClass("active");
  $("#yo").css("display", "none");


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
  });

  $("#me").click(function(){
    $("#hm").removeClass("active");
    $("#act").css("display", "none");
    $("#actBtn").removeClass("active");
    $("#home").css("display", "none");
    $("#me").addClass("active");
    $("#yo").css("display", "inline");
  });




});

let data = new Date;


    let storage = window.localStorage;
    let diaAnterior = JSON.parse(localStorage.getItem('dia'));

    if( data.getDate() - diaAnterior >3 || diaAnterior == null){
        //apareixer menu
        document.getElementById("cookies").style.display = "block";
    }else {
      document.getElementById("cookies").style.display = "none";
    }

function guardarDatos(){
    //cuan fa click es guarden les dades i es tanca el avis
    document.getElementById("cookies").style.display = "none";
    localStorage.setItem('dia',data.getDate());
}
