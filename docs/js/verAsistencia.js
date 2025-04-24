function verificarInvitada(event) {
    event.preventDefault();
  
    const frase = document.querySelectorAll('.input-field')[0];
    const codigo = document.querySelectorAll('.input-field')[1];
  
    const fraseValida = frase.value.trim().toLowerCase() === "vane";
    const codigoValido = codigo.value.trim() === "vane";
  
    if (fraseValida && codigoValido) {
      window.open("https://maps.app.goo.gl/ZKmrpK1D7zo7XAKw9", "_blank");
    } else {
      if (!fraseValida) {
        frase.value = "";
        frase.placeholder = "Frase incorrecta";
        frase.style.border = "1px solid red";
      }
  
      if (!codigoValido) {
        codigo.value = "";
        codigo.placeholder = "Código incorrecto";
        codigo.style.border = "1px solid red";
      }
    }
  }
  
  // Limpia el borde rojo cuando se empieza a escribir de nuevo
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.input-field').forEach(input => {
      input.addEventListener('input', () => {
        input.style.border = "";
      });
    });
  });