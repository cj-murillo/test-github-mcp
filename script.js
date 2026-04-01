const mensajes = [
    "Hola Mundo interactivo!",
    "Que bueno tenerte aqui!",
    "Sigue explorando JavaScript!",
    "Tu primera pagina va excelente!"
];

const mensajeEl = document.getElementById("mensaje");
const botonEl = document.getElementById("boton");
const clicksEl = document.getElementById("clicks");

let indice = 0;
let clicks = 0;

botonEl.addEventListener("click", () => {
    indice = (indice + 1) % mensajes.length;
    clicks += 1;

    mensajeEl.textContent = mensajes[indice];
    clicksEl.textContent = String(clicks);
});
