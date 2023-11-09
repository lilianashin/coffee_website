const slider = document.querySelector('.slider');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');
let slideIndex = 0;

prevSlide.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 2;
  }
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
});

nextSlide.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
});