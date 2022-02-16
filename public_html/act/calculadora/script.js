let primerNombre = document.getElementById("primerNombre").value;
let segonNombre = document.getElementById("segonNombre").value;
let res = 0;


function suma(){
  primerNombre = document.getElementById("primerNombre").value;
  segonNombre = document.getElementById("segonNombre").value;
  res = Number(primerNombre) + Number( segonNombre);
  document.getElementById("resultat").innerHTML = res;
};

function resta(){
  primerNombre = document.getElementById("primerNombre").value;
  segonNombre = document.getElementById("segonNombre").value;
  res = Number(primerNombre) - Number( segonNombre);
  document.getElementById("resultat").innerHTML = res;
};

function producte(){
  primerNombre = document.getElementById("primerNombre").value;
  segonNombre = document.getElementById("segonNombre").value;
  res = Number(primerNombre) * Number( segonNombre);
  document.getElementById("resultat").innerHTML = res;
};

function divisio(){
  primerNombre = document.getElementById("primerNombre").value;
  segonNombre = document.getElementById("segonNombre").value;
  if(segonNombre== 0){
    alert("No es pot dividir entre 0");
  }else {
    res = Number(primerNombre) / Number( segonNombre);
    document.getElementById("resultat").innerHTML = res;
  }
};
