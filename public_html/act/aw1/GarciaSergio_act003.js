let array_act003 = [];

let btAfegeix = document.getElementById('btAfegeix');
let btMostra = document.getElementById('btMostra');
let btNeteja = document.getElementById('btNeteja');

btAfegeix.classList.add("btn");
btAfegeix.classList.add("second");
btMostra.classList.add("btn");
btMostra.classList.add("third");
btNeteja.classList.add("btn");
btNeteja.classList.add("fourth");



function afegeixElementAMatriu() {
  if (document.getElementById('elementAAfegir').value.length == 0) {
    alert("No hi ha cap valor a afegir.");
  }else {
    array_act003.push(document.getElementById('elementAAfegir').value);
    alert("S'ha afegit el valor: "+array_act003[array_act003.length - 1] + " a la posició: "+ (array_act003.length - 1));
    document.getElementById('elementAAfegir').value = "";
  }

};

function mostraElementsMatriu() {
  let resultat = "";
  if (array_act003.length == 0) {
    alert("La array esta buida, no hi ha res a mostrar");
  }else{
    for (var i = 0; i < array_act003.length; i++) {
      resultat = resultat + "Posició "+ i + ": " + array_act003[i] + "<br />";
    }
    document.getElementById('resultat').innerHTML = resultat;
  }
};


function netejaMatriu(){
  array_act003.splice(0,array_act003.length);
  document.getElementById('resultat').innerHTML = "";
  document.getElementById('elementAAfegir').value = "";
};

if(document.getElementById("btNeteja")){
    let modal = document.getElementById("tvesModal");
    let btn = document.getElementById("btNeteja");
    let span = document.getElementsByClassName("cerrar")[0];
    let span2 = document.getElementsByClassName("aceptar")[0];
    let body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
      modal.style.display = "block";

      body.style.position = "static";
      body.style.height = "100%";
      body.style.overflow = "hidden";
    }

    span.onclick = function() {
      modal.style.display = "none";

      body.style.position = "inherit";
      body.style.height = "auto";
      body.style.overflow = "visible";
    }

    span2.onclick = function() {
      netejaMatriu();
      modal.style.display = "none";

      body.style.position = "inherit";
      body.style.height = "auto";
      body.style.overflow = "visible";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
      }
    }
  }
