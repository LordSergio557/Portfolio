window.onload = actualitzaHora;
var msg;

function actualitzaHora(){
var hoy = new Date();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
document.getElementById("rellotge").innerHTML = hora;

if (hoy.getHours() > 7 && hoy.getHours() < 14){
   msg = "Bon Dia!";
}else if (hoy.getHours() >=14 && hoy.getHours() < 18) {
  msg = "Bona Tarda!";
}else if (hoy.getHours() >=18 && hoy.getHours() < 20) {
  msg = "Bon Vespre!";
}else if (hoy.getHours() >20 && hoy.getHours() < 7) {
  msg = "Bona Nit!";
}
};
function amagaMostraInfo() {
if (document.getElementById("amaga_mostra").innerText == "Mostrar"){
  document.getElementById("missatge").style.display = "block";
  document.getElementById("missatge").innerText = msg;
  document.getElementById("amaga_mostra").innerText = "Amagar";


}else{
  document.getElementById("missatge").style.display = "none";
  document.getElementById("amaga_mostra").innerText = "Mostrar";

}

};
