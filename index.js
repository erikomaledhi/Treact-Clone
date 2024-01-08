let slideIndex = 0;

function nextSlide() {
  const slides = document.querySelector('.reviews');
  const slideWidth = document.querySelector('.review').offsetWidth;
  const totalSlides = slides.children.length;

  slideIndex = (slideIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function prevSlide() {
  const slides = document.querySelector('.reviews');
  const slideWidth = document.querySelector('.review').offsetWidth;
  const totalSlides = slides.children.length;

  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}


function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}
