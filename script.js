// Objeto con las asignaciones del intercambio
const asignaciones = {
    "kelly": "Stella",
    "stella": "Kelly",
    "julian": "Gerardo",
    "julián": "Gerardo", // Añadido para soportar tildes
    "gerardo": "María",
    "maria": "Silvia",
    "maría": "Silvia",   // Añadido para soportar tildes
    "silvia": "Edinson",
    "edinson": "Julián"
};

// Función ejecutada por el evento onclick del botón HTML
function buscarAmigoSecreto() {
    let input = document.getElementById("nombre_participante").value.trim().toLowerCase();
    let divResultado = document.getElementById("resultado");

    if (!input) {
        divResultado.innerText = "⚠️ Por favor, ingresa un nombre.";
        return;
    }

    // Consulta directa en el mapa de asignaciones
    if (asignaciones[input]) {
        divResultado.innerText = `🎁 Tu amigo secreto es: ${asignaciones[input]}`;
    } else {
        divResultado.innerText = "❌ No se encontró el participante ingresado.";
    }
}

