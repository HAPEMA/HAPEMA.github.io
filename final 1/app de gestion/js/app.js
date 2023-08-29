let tiempo;
let iniciartiempo = false;
let reiniciarSegundos = 0;

function iniciotiempo() {
    if (!iniciartiempo) {
        const inputhoras = parseInt(document.getElementById("inputhoras").value);
        const inputminutos = parseInt(document.getElementById("inputminutos").value);
        const inputsegundos = parseInt(document.getElementById("inputsegundos").value);
        if (!isNaN(inputhoras) && !isNaN(inputminutos) && !isNaN(inputsegundos)) {
            reiniciarSegundos = inputhoras * 3600 + inputminutos * 60 + inputsegundos;
            displayTime(reiniciarSegundos);
            tiempo = setInterval(ActualizaTiempo, 1000);
            iniciartiempo = true;
        }
    }
}

function ActualizaTiempo() {
    if (reiniciarSegundos > 0) {
        reiniciarSegundos--;
        displayTime(reiniciarSegundos);
    } else {
        Altotiempo();
    }
}

function Altotiempo() {
    clearInterval(tiempo);
    iniciartiempo = false;
}

function Paratiempo() {
    Altotiempo();
    reiniciarSegundos = 0;
    displayTime(reiniciarSegundos);
}

function displayTime(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const secs = segundos % 60;
    document.getElementById("horas").textContent = formatTime(horas);
    document.getElementById("minutos").textContent = formatTime(minutos);
    document.getElementById("segundos").textContent = formatTime(secs);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function ParaIniciar() {
    let inputhoras = 0;

}