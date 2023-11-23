// Header
function toggleMenu() {
  const menuList = document.getElementById('menu-list');
  const menuExtra = document.getElementById('menu-extra');

  menuList.classList.toggle('show');
  menuExtra.classList.toggle('show');
}
/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);

  // Ambil daftar semua dropdown yang ada
  const allDropdowns = ['myDropdown', 'myDropdown2', 'myDropdown3', 'myDropdown4'];

  // Sembunyikan dropdown lainnya jika terbuka
  allDropdowns.forEach(function (otherId) {
    if (otherId !== dropdownId) {
      const otherDropdown = document.getElementById(otherId);
      if (otherDropdown.classList.contains('show')) {
        otherDropdown.classList.remove('show');
      }
    }
  });

  // Kemudian tampilkan dropdown yang sesuai
  dropdown.classList.toggle('show');
}
function selectdropdown(answer, elementId) {
  const selectedElement = document.getElementById(elementId);
  selectedElement.textContent = answer;
}
function loadFooter() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('foot-placeholder').innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', '../html/footer.html', true);
  xhr.send();
}
function loadHeader() {
  const xhr = new XMLHttpRequest();
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
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
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
  const phoneInput = document.getElementById('phone');
  let awalanDitambahkan = false;

  // Tambahkan event listener untuk mendeteksi perubahan nilai pada input nomor telepon
  phoneInput.addEventListener('input', function () {
    if (!awalanDitambahkan) {
      // Dapatkan nilai nomor telepon
      const phoneNumber = phoneInput.value;

      // Format nomor telepon dengan awalan +62
      const formattedPhoneNumber = '+62' + phoneNumber;

      // Atur nilai input nomor telepon
      phoneInput.value = formattedPhoneNumber;

      // Setel flag agar awalan hanya ditambahkan satu kali
      awalanDitambahkan = true;
    }
  });
});
//Dropdown detail_penumpang
function setupDropdowns() {
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
        list.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.15), 0 1px 3px 1px rgba(0, 0, 0, 0.1)';
      }
    };

    let rad = dropdown.querySelectorAll('.radio');
    rad.forEach((item) => {
      item.addEventListener('change', () => {
        input.innerHTML = item.nextElementSibling.innerHTML;
        input.click();
      });
    });
  });
}

// Panggil fungsi setupDropdowns pada saat dokumen telah dimuat
document.addEventListener('DOMContentLoaded', function () {
  setupDropdowns();
});

// Fungsi untuk menampilkan popup
function tampilkanPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
}

// Fungsi untuk menutup popup
function tutupPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Fungsi untuk mengarahkan ke halaman lain
function arahkanKeHalaman() {
  // Ganti URL dengan URL halaman yang diinginkan
  window.location.href = '../html/payments.html';
}
//slide about us
function setupSlides() {
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
}

// Panggil fungsi setupSlides pada saat dokumen telah dimuat
document.addEventListener('DOMContentLoaded', function () {
  setupSlides();
});

function startSlideshow() {
  let slideIndexs = 0;
  showSlidess();

  function showSlidess() {
    let i;
    const slides = document.getElementsByClassName('carousel');
    const dots = document.getElementsByClassName('dot-2');

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slideIndexs++;

    if (slideIndexs > slides.length) {
      slideIndexs = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active-2', '');
    }

    slides[slideIndexs - 1].style.display = 'flex';
    dots[slideIndexs - 1].className += ' active-2';

    setTimeout(showSlidess, 2000); // Ganti angka 2000 dengan interval yang diinginkan (dalam milidetik)
  }

  // Fungsi untuk menavigasi langsung ke slide tertentu saat dot diklik
  function navigateToSlide(index) {
    slideIndexs = index;
    showSlidess();
  }

  return {
    start: showSlidess,
    navigateTo: navigateToSlide,
  };
}
//modal
function openModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'block';
}

// Fungsi untuk menutup modal
function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

window.onload = function () {
  var registerButtons = document.querySelectorAll('.button-link-schedule');
  registerButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      openModal();
    });
  });

  var closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', function () {
    closeModal();
  });
};

// Modal index
function openModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'block';
}

// Fungsi untuk menutup modal
function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

window.onload = function () {
  var registerButtons = document.querySelectorAll('.button-link-schedule');
  registerButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      openModal();
    });
  });

  var closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', function () {
    closeModal();
  });
};

// Panggil fungsi ini untuk memulai slideshow
document.addEventListener('DOMContentLoaded', function () {
  startSlideshow();
});
const pswrdField = document.querySelector(".form input[type='password']"),
  toggleIcon = document.querySelector('.form .field i');

toggleIcon.onclick = () => {
  if (pswrdField.type === 'password') {
    pswrdField.type = 'text';
    toggleIcon.classList.remove('active');
  } else {
    pswrdField.type = 'password';
    toggleIcon.classList.add('active');
  }
};
