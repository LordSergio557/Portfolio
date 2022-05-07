// Dia actual.
var data_actual = new Date();
var dia_actual = data_actual.getDate();

//Mes del calendari.
var calendario_mes = new Array(6);
for (let i = 0; i < calendario_mes.length; i++) {
    calendario_mes[i] = new Array(7);
}

var nom_dies_setmana = Array("Dilluns", "Dimarts", "Dimecres",
    "Dijous", "Divendres", "Dissabte", "Diumenge");

var nom_mesos = Array("Gener", "Febrer", "Març", "Abril", "Maig",
    "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre",
    "Desembre");

// Aquesta variable detecta el mes i any del dia d'avui
let mes_davui = data_actual.getUTCMonth();
let any_davui = data_actual.getUTCFullYear();


// Aquestes variable son el mes i l'any del calendari. Per predeterminat, tenen el mes i l'any d'avui
let mes_actual = mes_davui;
let any_actual = any_davui;


// Funcio per llenar l'array amb espais blancs.
function rellenarArray(calendari) {
    for (let i = 0; i < calendari.length; i++) {
        for (let j = 0; j < calendari[i].length; j++) {
            calendari[i][j] = " ";
        }
    }
}

function mostrarCalendari(calendario_mes, mes_actual, any_actual) {

    let taula = document.getElementById("laMevaTaula");
    if (taula.rows.length != 0) {
        EliminarTaula();
    }

    // Boolean per detectar la primera setmana del mes
    let primera_setmana = true;

    // Variables per saber el ultim dia del mes
    let ultim_dia_date = new Date(any_actual, mes_actual + 1, 0);
    let ultim_dia = ultim_dia_date.getDate();


    // Agafa el primer dia del mes actual.
    let dia_primer = new Date((mes_actual + 1) + "/01" + "/" + any_actual);

    rellenarArray(calendario_mes);
    // Agafa el nombre del primer dia del mes (si l'1 del primer mes es Dilluns, agafara 1. Si es Dimarts, agafara 2).
    let primer_dia_nombre = dia_primer.getDay();

    // Quan agafi el nombre 0 (que representa el diumengue en calendari America), el posara a 7 (que representa diumenge en calendari Europeu)
    if (primer_dia_nombre == 0) {
        primer_dia_nombre = 7;
    }

    let dia_del_mes = 1;

    for (let i = 0; i < 6; i++) {
        if (primera_setmana == true) {//Determina si es la primera setmana del mes o no
            // Omple l'array de 'calendario_mes' amb els dies del mes. Através de la variable primer_dia_nombre, determinara on posar el primer dia del mes en l'array.
            for (let j = primer_dia_nombre - 1; j < 7; j++) {
                calendario_mes[i][j] = dia_del_mes;
                dia_del_mes++;
            }
            primera_setmana = false;
        } else {
            for (let j = 0; j < 7; j++) {
                // Aquest if determina si el dia del mes que es posara a l'array no es igual al ultim dia del mes més un dia. Si no, tancara el for.
                if (dia_del_mes != ultim_dia + 1) {
                    calendario_mes[i][j] = dia_del_mes;
                    dia_del_mes++;
                } else {
                    break;
                }
            }
        }
    }
    createTable(calendario_mes, nom_dies_setmana, nom_mesos, mes_actual, any_actual, ultim_dia, primer_dia_nombre);
}

mostrarCalendari(calendario_mes, mes_actual, any_actual)

//Crea les taules al table del HTML.
function createTable(tableData, nom_dies_setmana, nom_mesos, mes_actual, any_actual, ultim_dia, primer_dia_nombre) {
    let taula = document.getElementById("laMevaTaula");

    let files2 = 1;
    let columnes2 = 7;

    let fila2;
    let cella2;


    // Mostra per pantalla els dies de la setmana
    for (let i = 0; i < files2; i++) {
        fila2 = taula.insertRow(i);
        for (let j = 0; j < columnes2; j++) {
            cella2 = fila2.insertCell(j);
            cella2.style.border = "solid 1px";

            cella2.innerHTML = nom_dies_setmana[j];
        }
    }

    // Mostra per pantalla el mes actual del calendari
    let caption = taula.createCaption();
    caption.innerHTML = "<div style='display:flex; justify-content:center; align-items:center;'><p class='cambiarMes' style='margin-right:5em;' onclick='MesCapEnrrera()'>Mes anterior</p>" + nom_mesos[mes_actual] + " / " + any_actual + "<p class='cambiarMes' style='margin-left:5em;' onclick='MesCapEndavant()'>Seguent mes</p></div>";
    taula.style.borderCollapse = "collapse";

    let files = 5;

    if (primer_dia_nombre == 6 && ultim_dia == 31) {
        files = 6;
    }

    let columnes = 7;

    let fila;
    let cella;

    // Agafem l'informació guardada del localstorage per saber si hi ha comentaris.
    calendario_comentaris = JSON.parse(localStorage.getItem('comentaris'));

    // Mostra per pantalla els dies del mes
    for (let i = 0; i < files; i++) {
        fila = taula.insertRow(i + 1);
        for (let j = 0; j < columnes; j++) {
            cella = fila.insertCell(j);
            cella.style.border = "solid 1px";
            // Si es el dia, mes i any actual, el color del dia sera groc.
            if (tableData[i][j] == dia_actual && mes_actual == mes_davui && any_actual == any_davui) {
                cella.classList.toggle("dia");
            }
            if (tableData[i][j] == " ") {
                cella.innerHTML = "<br>";
            } else {
                cella.innerHTML = "<p onclick='AfegirComentari.obrir(" + tableData[i][j] + ", " + '" "' + ")'>" + tableData[i][j] + "</p>";
            }
            if (calendario_comentaris != undefined) {
                // For per recorre l'array de comentaris en el calendari
                for (let k = 0; k < calendario_comentaris.length; k++) {
                    let comentarideldia = calendario_comentaris[k].split("*");
                    // If per detectar si el dia, mes i any coincideixen.
                    if (comentarideldia[0] == tableData[i][j] && comentarideldia[1] == mes_actual && comentarideldia[2] == any_actual) {
                        // Si es el cas, crear span en la cella del dia del calendari i posar el comentari.
                        cella.innerHTML = "<p onclick='AfegirComentari.obrir(" + tableData[i][j] + ", " + '"' + comentarideldia[3] + '"' + ")'>" + tableData[i][j] + "</p>";
                        cella.innerHTML += "<span class='comentari'>" + comentarideldia[3] + "</span>";
                    }

                }
            }
        }
    }
}

function EliminarTaula() {
    let table = document.getElementById("laMevaTaula");
    table.innerHTML = "";
}

function MesCapEndavant() {
    //Comprovem si el mes es al Decembre. Si es que si, restarem 11 messos i sumarem un any.

    if (mes_actual == 11) {
        mes_actual = mes_actual - 11;
        any_actual = any_actual + 1;

    } else {//Si es que no sumarem un mes.
        mes_actual = mes_actual + 1;
    }
    mostrarCalendari(calendario_mes, mes_actual, any_actual);

}

function MesCapEnrrera() {
    //Comprovem si el mes es al Gener. Si es que si, sumarem 11 messos i restarem un any.

    if (mes_actual == 0) {
        mes_actual = mes_actual + 11;
        any_actual = any_actual - 1;

    } else {//Si es que no restarem un mes.
        mes_actual = mes_actual - 1;
    }
    mostrarCalendari(calendario_mes, mes_actual, any_actual);

}

let AfegirComentari = {
    obrir: function (dia_actual, comentari_del_dia) {
        // Numero que guarda l'input hidden
        document.getElementById("dia_actual_hidden").value = dia_actual;
        // Titol del modal "Afegir un comentari"
        document.getElementById("quadreDialeg-titol").innerHTML = "Afegir un comentari";

        // Subtitol del modal (mostra el dia seleccionat)
        document.getElementById("quadreDialeg-subtitol").innerHTML = "Dia " + dia_actual + " de " + nom_mesos[mes_actual] + " del " + any_actual;

        // Posa si hi ha un comentari al input text
        document.getElementById("comentari_input").value = comentari_del_dia;

        document.getElementById("quadreDialeg-contorn").style.display = "block";
    },
    tancar: function () {
        document.getElementById("quadreDialeg-contorn").style.display = "none";
    },
    guardar: function () {

        let dia_actual = document.getElementById("dia_actual_hidden").value;

        // Agafem l'informació guardada del localstorage si hi ha.
        calendario_comentaris = JSON.parse(localStorage.getItem('comentaris'));

        //Variable que controli si l'array es vüida o no
        var comprova_array_vuida = false;

        if (calendario_comentaris == null || calendario_comentaris == "") {
            // Array de comentaris.
            var calendario_comentaris = new Array();
            comprova_array_vuida = true;

        }

        let comentari = document.getElementById("comentari_input").value;

        // Si el comentari es vüit, que mostri un alert indicant que no has posat res
        if (comentari == "" || comentari == undefined || comentari == null) {
            alert("El comentari esta vüit, si vols escriura qualsevol cosa, no ho deixis vüit!");
        } else {
            // Si no, que guardi el contingut del comentari, dia, mes i any per ser pujat a l'array.
            let datacomentari = dia_actual + "*" + mes_actual + "*" + any_actual + "*" + comentari;
            // Si la variable es false, significa que l'array no es vuida, per tant té que comprovar si el dia clickat ja té comentari
            if (comprova_array_vuida == false) {
                for (let i = 0; i < calendario_comentaris.length; i++) {
                    let comentarideldia = calendario_comentaris[i].split("*");
                    // Comprova si hi ha algun comentari posat en el dia actual dintre de l'array. Si es així el substituira
                    if (comentarideldia[0] == dia_actual && comentarideldia[1] == mes_actual && comentarideldia[2] == any_actual) {
                        calendario_comentaris[i] = datacomentari;
                        break;
                        // Si no, creara una nova posicio amb el comentari.
                    } else if (i == calendario_comentaris.length - 1) {
                        calendario_comentaris.push(datacomentari)
                    }
                }
                // Si la variable es true, creara una nova posicio amb el comentari.
            } else {
                calendario_comentaris.push(datacomentari)
            }

            // Guarda l'informació a una posició vüida de una array en el localstorage.
            localStorage.setItem('comentaris', JSON.stringify(calendario_comentaris));

            document.getElementById("quadreDialeg-contorn").style.display = "none";

            mostrarCalendari(calendario_mes, mes_actual, any_actual);
        }
    },
    borrar: function () {

        let dia_actual = document.getElementById("dia_actual_hidden").value;

        // Agafem l'informació guardada del localstorage si hi ha.
        calendario_comentaris = JSON.parse(localStorage.getItem('comentaris'));

        //Variable que controli si l'array es vüida o no
        var comprova_array_vuida = false;

        if (calendario_comentaris == null || calendario_comentaris == "") {
            // Array de comentaris.
            var calendario_comentaris = new Array();
            comprova_array_vuida = true;

        }
        // Si la variable es false, significa que l'array no es vuida, per tant té que comprovar si el dia clickat ja té comentari
        if (comprova_array_vuida == false) {
            for (let i = 0; i < calendario_comentaris.length; i++) {
                let comentarideldia = calendario_comentaris[i].split("*");
                // Comprova si hi ha algun comentari posat en el dia actual dintre de l'array. Si es així el substituira
                if (comentarideldia[0] == dia_actual && comentarideldia[1] == mes_actual && comentarideldia[2] == any_actual) {
                    calendario_comentaris.splice(i, 1);
                    break;
                }
            }
            // Si la variable es true, creara una nova posicio amb el comentari.
        }
        document.getElementById("quadreDialeg-contorn").style.display = "none";

        // Guarda l'informació a una posició vüida de una array en el localstorage.
        localStorage.setItem('comentaris', JSON.stringify(calendario_comentaris));

        mostrarCalendari(calendario_mes, mes_actual, any_actual);
    }

};

          // Clareja els missatges dintre del localstorage.
        //   localStorage.clear();
