
const graduationDate = new Date("July 26, 2025 18:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = graduationDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".section3-content").innerHTML = "<h1>¡Es el día del acto!</h1>";
  }
}, 1000);




const book = document.querySelector(".book");

let openTimeout;
let closeTimeout;
let isUserInteracting = false;

function openBook(manual = false) {
  book.classList.add("open");

  if (manual) {
    isUserInteracting = true;
    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      book.classList.remove("open");
      isUserInteracting = false;
    }, 10000);
  }
}

function closeBook() {
  book.classList.remove("open");
  isUserInteracting = false;
}

function toggleBook() {
  if (book.classList.contains("open")) {
    closeBook();
  } else {
    openBook(true); // Marca como interacción manual
  }
}

book.addEventListener("click", toggleBook);

// ⏱️ Si nadie toca nada, se abre a los 10 segundos
openTimeout = setTimeout(() => {
  if (!isUserInteracting) {
    openBook(); // apertura automática sin marcar como manual
    // ⏱️ Luego de abrirse automáticamente, cerrar en 10s si sigue sin interacción
    closeTimeout = setTimeout(() => {
      if (!isUserInteracting) {
        closeBook();
      }
    }, 10000);
  }
}, 10000);
