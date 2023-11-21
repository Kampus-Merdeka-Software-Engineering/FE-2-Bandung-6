let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('carousel');
  const dots = document.getElementsByClassName('dot-2');
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active-2', '');
  }

  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active-2';
  
  setTimeout(showSlides, 2000); // Ganti angka 2000 dengan interval yang diinginkan (dalam milidetik)
}

// Fungsi untuk menavigasi langsung ke slide tertentu saat dot diklik
function currentSlide(index) {
  slideIndex = index;
  showSlides();
}