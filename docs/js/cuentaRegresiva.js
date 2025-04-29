
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




function setupBook(bookSelector, coverSelector) {
  const book = document.querySelector(bookSelector);
  const cover = document.querySelector(coverSelector);
  if (!book || !cover) return;

  let openTimeout;
  let closeTimeout;
  let isUserInteracting = false;

  function setAutoOpenTimeout() {
    clearTimeout(openTimeout);
    openTimeout = setTimeout(() => {
      if (!isUserInteracting) {
        openBook(false);
        setAutoCloseTimeout();
      }
    }, 10000);
  }

  function setAutoCloseTimeout() {
    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      if (!isUserInteracting) {
        closeBook();
        setAutoOpenTimeout();
      }
    }, 10000);
  }

  function openBook(manual = false) {
    book.classList.add("open");
    if (manual) {
      isUserInteracting = true;
      setAutoCloseTimeout();
    }
  }

  function closeBook() {
    book.classList.remove("open");
    isUserInteracting = false;
    setAutoOpenTimeout();
  }

  function toggleBook() {
    if (book.classList.contains("open")) {
      closeBook();
    } else {
      openBook(true);
    }
  }

  book.addEventListener("click", toggleBook);
  setAutoOpenTimeout();
}

// 📘 Propietario
setupBook(".book_propietario", ".cover_propietario");

// 📕 Pasante
setupBook(".book_pasante", ".cover_pasante");



let misaIndex = 0;
  const misaSlides = document.querySelectorAll('.misa-slides img');

  function showMisaSlide(n) {
    misaSlides.forEach((img, i) => {
      img.style.display = (i === n) ? 'block' : 'none';
    });
  }

  function misaSlide(n) {
    misaIndex += n;
    if (misaIndex < 0) misaIndex = misaSlides.length - 1;
    if (misaIndex >= misaSlides.length) misaIndex = 0;
    showMisaSlide(misaIndex);
  }

  document.addEventListener("DOMContentLoaded", () => {
    showMisaSlide(misaIndex);
  });



  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const mainImage = document.getElementById('mainImage');
      const mainText = document.getElementById('mainText');
      
      mainImage.src = thumb.src;
      mainText.textContent = thumb.dataset.text;
  
      // Reiniciar animación
      mainText.classList.remove('main-text');
      void mainText.offsetWidth; // Fuerza el reflow
      mainText.classList.add('main-text');
    });
  });