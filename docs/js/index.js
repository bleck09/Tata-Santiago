// index.js

// Capturar parámetro de la URL
const params = new URLSearchParams(window.location.search);
const codigo = params.get('codigo');

// Crear un pequeño "diccionario" de códigos válidos
const invitados = {
  maria: "María",
  pedro: "Pedro",
  juan: "Juan",
  ana: "Ana",
  carlos: "Carlos"
  // Puedes agregar más invitados aquí
};

// Buscar el nombre correspondiente
const nombre = invitados[codigo] || "Querido invitado";

// Modificar el contenido de la invitación
window.addEventListener('DOMContentLoaded', () => {
  const saludoElement = document.getElementById('nombre-invitado');
  if (saludoElement) {
    saludoElement.innerText = `¡Hola ${nombre}! Te esperamos con alegría ✨`;
  }
});
