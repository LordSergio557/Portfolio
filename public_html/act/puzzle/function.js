'use strict';

let matriu = [
    ['c00','c01','c02'],
    ['c10','c11','c12'],
    ['c20','c22','c21']
    ];

    let mida = 3;

    let cro = 0;
    let visor=document.getElementById("tempolizador");
    let emp = new Date();
    let elcrono = setInterval(tiempo, 10);
    visor.addEventListener("DOMContentLoaded", function () {tiempo(); });

    window.onload=OmplirMatriu();

    function mostrarMatriu (){
        for(let i=0;i<mida;i++){
            console.log("|"+matriu[1][0]+"|"+matriu[1][1]+"|"+matriu[1][2]+"|");
        }
    }
    function OmplirMatriu (){
        let cellaAOmplir;
        for (let i=0;i<mida;i++){
            for(let j=0;j<mida;j++){
                cellaAOmplir = document.getElementById("c"+i+j);
                cellaAOmplir.classList.add(matriu[i][j]);
                cellaAOmplir.addEventListener("click", function () { canvia(this);  });
            }
        }
    }

    function tiempo(){
    let actual=new Date();
     let cro=actual-emp;
     let cr=new Date();
     cr.setTime(cro);
     let sg=cr.getSeconds();
     let mn=cr.getMinutes();
     visor.innerHTML=sg;
     if(mn > 0) {
      if (sg<10) {sg="0"+sg;}
      visor.innerHTML=mn + " : " + sg;
     }
     if (puzzleAcabat(matriu, mida)==true) {
      clearInterval(elcrono);
      let segundos = getSegundos(sg, mn);
      alert("puzzle acabat has trigat " + mn + " : " + sg + "\nQue han sigut " + segundos + " segons en acabar el puzzle");
    }
    }

    function getSegundos (sg, mn) {
      let segundosActual = parseInt(sg);
      let minutosEnSegudos = parseInt(mn * 60);

      let segundosTotal = minutosEnSegudos + segundosActual;

      return segundosTotal;
    }

    function canvia(objecte){
        let fila = objecte.id.substr(1,1);
        let columna = objecte.id.substr(2,1);
        let CelBuida = obteCooCelBuida();
        let filaBuida =CelBuida.substr(1,1);
        let colBuida= CelBuida.substr(3,1);
        if (buscarCelaBuida(fila, columna, filaBuida, colBuida) == true) {
          let valor1 = matriu[fila][columna];
          let valor2 = matriu[filaBuida][colBuida];
          matriu[fila][columna] = valor2;
          matriu[filaBuida][colBuida] = valor1;
          document.getElementById("c"+fila+""+columna).className = valor2;
          document.getElementById("c"+filaBuida+""+colBuida).className = valor1;
        }

    }
    function obteCooCelBuida(){
        for(let i=0;i<mida;i++){
            for(let j=0;j<mida;j++){
                if(matriu[i][j]=="c22"){
                    return("c"+i+"f"+j);
                }
            }
        }
    }
    function buscarCelaBuida(fila1, col1, fila2, col2){
        let hoSon=false;
        let operacioSon = Math.abs((fila1 - fila2)) + Math.abs((col1 - col2));
        if(operacioSon == 1){
            hoSon = true;
        }
        return hoSon;
    }
    function puzzleAcabat(matriu, mida){
      let contador = 0;
      for (let i = 0; i < mida; i++) {
        for (let j = 0; j < mida; j++) {
          if(matriu[i][j] == "c"+i+""+j){

            contador++;
          }

      }
    }
    if (contador == 9) {
      return true;
    }else{
      return false;
    }
  }
