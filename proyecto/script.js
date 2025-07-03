document.addEventListener('DOMContentLoaded', () => {
  // Carrusel
  const images = [
    "assets/img/img1.jpg",
    "assets/img/img2.jpg",
    "assets/img/img3.jpg",
    "assets/img/img4.jpg"
  ];
  let current = 0;
  const imgEl = document.getElementById("carousel-img");
  let carouselInterval = setInterval(nextImage, 2000);

  function nextImage() {
    current = (current + 1) % images.length;
    imgEl.classList.replace("opacity-100", "opacity-0");
    setTimeout(() => {
      imgEl.src = images[current];
      imgEl.classList.replace("opacity-0", "opacity-100");
    }, 200);
  }

  // Pausar al hover y reanudar al salir
  imgEl.parentElement.addEventListener('mouseenter', () => clearInterval(carouselInterval));
  imgEl.parentElement.addEventListener('mouseleave', () => carouselInterval = setInterval(nextImage, 2000));

  // Menú móvil
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    document.addEventListener('click', onClickOutside);
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    document.removeEventListener('click', onClickOutside);
  }

  function onClickOutside(e) {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
});
