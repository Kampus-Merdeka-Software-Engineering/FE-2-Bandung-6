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
    xhr.open('GET', '/html/footer.html', true);
    xhr.send();
  }
  function loadHeader() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('nav-placeholder').innerHTML = xhr.responseText;
      }
    };
    xhr.open('GET', '/html/header.html', true);
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

  // about us slideshow
  let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "flex";
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000);
    }