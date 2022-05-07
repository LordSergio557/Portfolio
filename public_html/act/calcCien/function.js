'use strict';
let modoCientifica = document.getElementById("tabCien");
modoCientifica.style.display = "none";
let numeros = [];
let pantalla = document.getElementById('pantalla');
pantalla.value = 0;
pantalla.innerHTML = pantalla.value;
let resultado;
let operador = "";
let resetPnatalla = false;
let cienPulsada = false;
// let n0 = document.getElementById("0");
// let n1 = document.getElementById('1');
// let n2 = document.getElementById('2');
// let n3 = document.getElementById('3');
// let n4 = document.getElementById('4');
// let n5 = document.getElementById('5');
// let n6 = document.getElementById('6');
// let n7 = document.getElementById('7');
// let n8 = document.getElementById('8');
// let n9 = document.getElementById('9');
// let suma = document.getElementById('+');
// let resta = document.getElementById('-');
// let divisio = document.getElementById('/');
// let multiplicacio = document.getElementById('*');
// let igual = document.getElementById('=');





//comprobación de las operaciónes.
// console.log(sumar(numeros));
// console.log(restar(numeros));
// console.log(multiplicar(numeros));
// console.log(dividir(numeros));


function pulsacion(boton){
if (boton.id == "cien"){
  if (cienPulsada == false) {
    modoCientifica.style.display = "inline";
    cienPulsada = true;
  }else if (cienPulsada == true) {
    modoCientifica.style.display = "none";
    cienPulsada = false;
  }
}
  if (resetPnatalla == true) {
    borrarFull();
    resetPnatalla = false;
  }

 

  // //Punto decimal
  // if(boton.id == "."){
  //   if(pantalla.value == "0"){
  //     pantalla.value = "0.";
  //     pantalla.innerHTML = pantalla.value;
  //   }else{
  //     pantalla.value = pantalla.value + ".";
  //     pantalla.innerHTML = pantalla.value;
  //   }
  // }
  // //Punto decimal
  for (let i = 0; i < 10; i++) {
    if(pantalla.value == 0 && boton.id != 0 && boton.id == i){
      pantalla.value = boton.id;
      pantalla.innerHTML = pantalla.value;
    }else if (boton.id == i && pantalla.value != 0) {
      pantalla.value = pantalla.value + boton.id;
      pantalla.innerHTML = pantalla.value;
    }
  }
  if(boton.id == "c"){
    borrarFull();
  }
if (boton.id == "=") {
  if (operador == "") {
    pantalla.innerHTML = numeros[0];
    pantalla.value = 0;
    resetPnatalla = true;
  }else if(operador == "+"){
    let resultado;
    numeros.push(pantalla.value);
    resultado = sumar(numeros);
    numeros.splice(0, numeros.length);
    numeros.push(resultado);
    operador = "";
    pantalla.innerHTML = numeros[0];
    resetPnatalla = true;
  }else if(operador == "-"){
    let resultado;
    numeros.push(pantalla.value);
    resultado = restar(numeros);
    numeros.splice(0, numeros.length);
    numeros.push(resultado);
    operador = "";
    pantalla.innerHTML = numeros[0];
    resetPnatalla = true;
  }else if(operador == "*"){
    let resultado;
    numeros.push(pantalla.value);
    resultado = multiplicar(numeros);
    numeros.splice(0, numeros.length);
    numeros.push(resultado);
    operador = "";
    pantalla.innerHTML = numeros[0];
    resetPnatalla = true;

}
else if(operador == "/"){
  let resultado;
  numeros.push(pantalla.value);
  resultado = dividir(numeros);
  numeros.splice(0, numeros.length);
  numeros.push(resultado);
  operador = "";
  pantalla.innerHTML = numeros[0];
  resetPnatalla = true;

}
}

//pulsacion suma
  if (boton.id == "+") {
    if (operador != "+" && operador != "") {
      if (operador == "-") {
          numeros.push(pantalla.value);
          borrar();
          operador = "-";
          if (numeros.length == 2) {
            let resultado;
            resultado = restar(numeros);
            pantalla.innerHTML = resultado;
            numeros.splice(0, numeros.length);
            numeros.push(resultado);
          }
          operador = "+";
      }else if (operador == "*") {
        numeros.push(pantalla.value);
        borrar();
        operador = "*";
        if (numeros.length == 2) {
          let resultado;
          resultado = multiplicar(numeros);
          pantalla.innerHTML = resultado;
          numeros.splice(0, numeros.length);
          numeros.push(resultado);
        }
        operador = "+";
      }else if (operador == "/") {
        numeros.push(pantalla.value);
        borrar();
        operador = "/";
        if (numeros.length == 2) {
          let resultado;
          resultado = dividir(numeros);
          pantalla.innerHTML = resultado;
          numeros.splice(0, numeros.length);
          numeros.push(resultado);
        }
        operador = "+";
      }
    }else{
      numeros.push(pantalla.value);
      borrar();
      operador = "+";
      if (numeros.length == 2) {
        let resultado;
        resultado = sumar(numeros);
        pantalla.innerHTML = resultado;
        numeros.splice(0, numeros.length);
        numeros.push(resultado);
      }
    }
  }
//pulsacion suma

//pulsacion resta
  if (boton.id == "-") {
    if (operador != "-" && operador != "") {
      if (operador == "+") {
          numeros.push(pantalla.value);
          borrar();
          operador = "+";
          if (numeros.length == 2) {
            let resultado;
            resultado = sumar(numeros);
            pantalla.innerHTML = resultado;
            numeros.splice(0, numeros.length);
            numeros.push(resultado);
          }
          operador = "-";
      }else if (operador == "*") {
        numeros.push(pantalla.value);
        borrar();
        operador = "*";
        if (numeros.length == 2) {
          let resultado;
          resultado = multiplicar(numeros);
          pantalla.innerHTML = resultado;
          numeros.splice(0, numeros.length);
          numeros.push(resultado);
        }
        operador = "-";
      }else if (operador == "/") {
        numeros.push(pantalla.value);
        borrar();
        operador = "/";
        if (numeros.length == 2) {
          let resultado;
          resultado = dividir(numeros);
          pantalla.innerHTML = resultado;
          numeros.splice(0, numeros.length);
          numeros.push(resultado);
        }
        operador = "-";
      }
    }else{
    numeros.push(pantalla.value);
    borrar();
    operador = "-";
    if (numeros.length == 2) {
      let resultado;
      resultado = restar(numeros);
      pantalla.innerHTML = resultado;
      numeros.splice(0, numeros.length);
      numeros.push(resultado);
    }
  }
  }

//pulsacion multiplicacion
if (boton.id == "*") {
  if (operador != "*" && operador != "") {
    if (operador == "+") {
        numeros.push(pantalla.value);
        borrar();
        operador = "+";
        if (numeros.length == 2) {
          let resultado;
          resultado = sumar(numeros);
          pantalla.innerHTML = resultado;
          numeros.splice(0, numeros.length);
          numeros.push(resultado);
        }
        operador = "*";
    }else if (operador == "-") {
      numeros.push(pantalla.value);
      borrar();
      operador = "-";
      if (numeros.length == 2) {
        let resultado;
        resultado = restar(numeros);
        pantalla.innerHTML = resultado;
        numeros.splice(0, numeros.length);
        numeros.push(resultado);
      }
      operador = "*";
    }else if (operador == "/") {
      numeros.push(pantalla.value);
      borrar();
      operador = "/";
      if (numeros.length == 2) {
        let resultado;
        resultado = dividir(numeros);
        pantalla.innerHTML = resultado;
        numeros.splice(0, numeros.length);
        numeros.push(resultado);
      }
      operador = "*";
    }
  }else{
  numeros.push(pantalla.value);
  borrar();
  operador = "*";
  if (numeros.length == 2) {
    let resultado;
    resultado = multiplicar(numeros);
    pantalla.innerHTML = resultado;
    numeros.splice(0, numeros.length);
    numeros.push(resultado);
  }
}
}
//pulsacion multiplicacion

//pulsacion division
if (boton.id == "/") {
  if (operador != "*" && operador != "") {
    if (operador == "+") {
        numeros.push(pantalla.value);
        borrar();
        operador = "+";
        if (numeros.length == 2) {
          let resultado;
          resultado = sumar(numeros);
          pantalla.innerHTML = resultado;
          numeros.splice(0, numeros.length);
          numeros.push(resultado);
        }
        operador = "/";
    }else if (operador == "-") {
      numeros.push(pantalla.value);
      borrar();
      operador = "-";
      if (numeros.length == 2) {
        let resultado;
        resultado = restar(numeros);
        pantalla.innerHTML = resultado;
        numeros.splice(0, numeros.length);
        numeros.push(resultado);
      }
      operador = "/";
    }else if (operador == "*") {
      numeros.push(pantalla.value);
      borrar();
      operador = "*";
      if (numeros.length == 2) {
        let resultado;
        resultado = multiplicar(numeros);
        pantalla.innerHTML = resultado;
        numeros.splice(0, numeros.length);
        numeros.push(resultado);
      }
      operador = "/";
    }
  }else{
  numeros.push(pantalla.value);
  borrar();
  operador = "/";
  if (numeros.length == 2) {
    let resultado;
    resultado = dividir(numeros);
    pantalla.innerHTML = resultado;
    numeros.splice(0, numeros.length);
    numeros.push(resultado);
  }
}
}
//pulsacion division

}



function borrar(){
  pantalla.innerHTML = 0;
  pantalla.value = 0;
}

function borrarFull(){
  borrar();
  numeros.splice(0, numeros.length);
}
//funciones para operar con los numeros

function sumar(num){
  let resultat = num[0];
  for (let i = 1; i < num.length; i++) {
    resultat = Math.floor(resultat) + Math.floor(num[i]);
  }
  return resultat;
};

function restar(num){
  let resultat = num[0];
  for (let i = 1; i < num.length; i++) {
    resultat = resultat - num[i];
  }
  return resultat;
};

function multiplicar(num){
  let resultat = num[0];
  for (let i = 1; i < num.length; i++) {
    resultat = resultat * num[i];
  }
  return resultat;
};

function dividir(num){
  let contador = 0;
  for (let i = 0; i < num.length; i++) {
    if(num[i] == 0){
      contador++;
      break;
    }
  }
  if(contador == 1){
    alert("No es pot divdir entre 0");
  }else{
    let resultat = num[0];
    for (let i = 1; i < num.length; i++) {
      resultat = resultat / num[i];
    }
    return resultat;
  }
}
