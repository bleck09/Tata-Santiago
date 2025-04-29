// index.js

// Capturar parámetro de la URL
const params = new URLSearchParams(window.location.search);
const codigo = params.get('codigo');

// Diccionario de invitados y frases personalizadas
const invitados = {
  maria: {
    nombre: "María",
    mensaje: "¡María, será un honor verte compartir esta alegría con nosotros!"
  },
  pedro: {
    nombre: "Pedro",
    mensaje: "¡Pedro, tu presencia hará este día aún más especial!"
  },
  juan: {
    nombre: "Juan",
    mensaje: "¡Juan, Tata Santiago te espera con los brazos abiertos!"
  },
  ana: {
    nombre: "Ana",
    mensaje: "¡Ana, acompáñanos en este día lleno de fe y celebración!"
  },
  carlos: {
    nombre: "Carlos",
    mensaje: "¡Carlos, tu presencia iluminará esta gran fiesta!"
  }
  // Puedes seguir agregando más invitados aquí
};

// Buscar información del invitado
const invitado = invitados[codigo];

// Cuando cargue la página:
window.addEventListener('DOMContentLoaded', () => {
  const saludoElement = document.getElementById('nombre-invitado');
  const mensajeElement = document.getElementById('mensaje-invitado');

  if (invitado) {
    // Si hay invitado específico
    if (saludoElement) {
      saludoElement.innerText = `¡Hola ${invitado.nombre}! Te esperamos con alegría ✨`;
    }
    if (mensajeElement) {
      mensajeElement.innerText = invitado.mensaje;
    }
  } else {
    // Si es general (sin código o código incorrecto)
    if (saludoElement) {
      saludoElement.innerText = "¡Bienvenido a la invitación!";
    }
    if (mensajeElement) {
      mensajeElement.innerText = "Queridos amigos y familiares, reciban un cordial saludo. Es un honor invitarles a la fiesta en honor a nuestro Tata Santiago, un día especial de fe y felicidad.";
    }
  }
});
