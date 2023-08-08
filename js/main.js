const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
button.addEventListener('click', function () {
    nav.classList.toggle('activo');
});

var slider = document.querySelector(".slider");

function nextSlide() {
  var currentSlide = slider.querySelector(".slide.active");
  var nextSlide = currentSlide.nextElementSibling;

  if (nextSlide) {
    currentSlide.classList.remove("active");
    nextSlide.classList.add("active");
  } else {
    currentSlide.classList.remove("active");
    slider.querySelector(".slide:first-child").classList.add("active");
  }
}

setInterval(nextSlide, 5000);
