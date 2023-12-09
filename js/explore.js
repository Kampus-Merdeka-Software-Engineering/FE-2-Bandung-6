// script.js

// Variabel untuk melacak status tampilan elemen flex-jadwal-2
var isFlexJadwal2Visible = false;

// Fungsi untuk menampilkan/menyembunyikan elemen dengan kelas tertentu
function toggleElementVisibility(className) {
    var element = document.querySelector("." + className);
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
        isFlexJadwal2Visible = true;
    } else {
        element.classList.add("hidden");
        isFlexJadwal2Visible = false;
    }
}

// Fungsi yang akan dipanggil saat tombol "Jelajah" diklik
function exploreButtonClick() {
    if (!isFlexJadwal2Visible) {
        toggleElementVisibility("flex-jadwal-2");
    }
}

// Fungsi untuk membuka kalender (yang mungkin ingin Anda tambahkan)
function openCalendar() {
    // Logika untuk membuka kalender
}

// Menambahkan event listener untuk tombol "Jelajah"
var exploreButton = document.querySelector(".explore");
exploreButton.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah perilaku default dari anchor
    exploreButtonClick();
});
