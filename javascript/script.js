// Header
function toggleMenu() {
  var menuList = document.getElementById('menu-list');
  var menuExtra = document.getElementById('menu-extra');

  menuList.classList.toggle('show');
  menuExtra.classList.toggle('show');
}
/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);

  // Ambil daftar semua dropdown yang ada
  var allDropdowns = ['myDropdown', 'myDropdown2', 'myDropdown3', 'myDropdown4'];

  // Sembunyikan dropdown lainnya jika terbuka
  allDropdowns.forEach(function (otherId) {
    if (otherId !== dropdownId) {
      var otherDropdown = document.getElementById(otherId);
      if (otherDropdown.classList.contains('show')) {
        otherDropdown.classList.remove('show');
      }
    }
  });

  // Kemudian tampilkan dropdown yang sesuai
  dropdown.classList.toggle('show');
}
function selectdropdown(answer, elementId) {
  var selectedElement = document.getElementById(elementId);
  selectedElement.textContent = answer;
}
function loadFooter() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('foot-placeholder').innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', '../html/footer.html', true);
  xhr.send();
}
function loadHeader() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('nav-placeholder').innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', '../html/header.html', true);
  xhr.send();
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
document.addEventListener('DOMContentLoaded', function () {
  loadFooter();
});
document.addEventListener('DOMContentLoaded', function () {
  loadHeader();
});
document.addEventListener('DOMContentLoaded', function () {
  var phoneInput = document.getElementById('phone');
  var awalanDitambahkan = false;

  // Tambahkan event listener untuk mendeteksi perubahan nilai pada input nomor telepon
  phoneInput.addEventListener('input', function () {
    if (!awalanDitambahkan) {
      // Dapatkan nilai nomor telepon
      var phoneNumber = phoneInput.value;

      // Format nomor telepon dengan awalan +62
      var formattedPhoneNumber = '+62' + phoneNumber;

      // Atur nilai input nomor telepon
      phoneInput.value = formattedPhoneNumber;

      // Setel flag agar awalan hanya ditambahkan satu kali
      awalanDitambahkan = true;
    }
  });
});
//Dropdown detail_penumpang
let dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  let input = dropdown.querySelector('.input-box');
  input.onclick = function () {
    this.classList.toggle('open');
    let list = this.nextElementSibling;
    if (list.style.maxHeight) {
      list.style.maxHeight = null;
      list.style.boxShadow = null;
    } else {
      list.style.maxHeight = list.scrollHeight + 'px';
      list.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)';
    }
  };

  let rad = dropdown.querySelectorAll('.radio');
  rad.forEach((item) => {
    item.addEventListener('change', () => {
      input.innerHTML = item.nextElementSibling.innerHTML;
      input.click();
    });
  });

  let label = dropdown.querySelectorAll('label');
  function labels() {
    label.forEach((item) => {
      let checkVal = item.querySelector('.name').innerHTML;
      checkVal = checkVal.toUpperCase();
      item.style.display = 'flex';
      let list = input.nextElementSibling;
      list.style.maxHeight = list.scrollHeight + 'px';
    });
  }
});

// slide about us
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000);
}
