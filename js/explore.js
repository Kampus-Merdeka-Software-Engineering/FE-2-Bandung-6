// script.js

// Variabel untuk melacak status tampilan elemen flex-jadwal-2
let isFlexJadwal2Visible = false;

// Fungsi untuk menampilkan/menyembunyikan elemen dengan kelas tertentu
function toggleElementVisibility(id) {
  let element = document.getElementById(id);
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
    isFlexJadwal2Visible = true;
  } else {
    element.classList.add('hidden');
    isFlexJadwal2Visible = false;
  }
}

// Fungsi yang akan dipanggil saat tombol "Jelajah" diklik
function exploreButtonClick() {
  if (!isFlexJadwal2Visible) {
    toggleElementVisibility('flex-container');
  }
}

// Menambahkan event listener untuk tombol "Jelajah"
let exploreButton = document.querySelector('.explore');
exploreButton.addEventListener('click', function (event) {
  event.preventDefault(); // Mencegah perilaku default dari anchor
  exploreButtonClick();
});
