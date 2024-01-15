document.getElementById('prev').addEventListener('click',prev);
document.getElementById('next').addEventListener('click',next);
var slides = document.getElementsByClassName('slide');

var index = 0;

function prev() {
    showSlide(index -= 1);
}

function next() {
    showSlide(index += 1);
}

function showSlide(n) {
    if (n >= slides.length) {
        index = 0;
      }

    if (n < 0) {
        index = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
       slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}