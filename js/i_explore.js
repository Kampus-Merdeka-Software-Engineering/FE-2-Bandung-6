const API_BASE_URL = 'https://be-2-bandung-6-production.up.railway.app';
let alertShown = false;

// document.addEventListener('DOMContentLoaded', async () => {
//   if (window.location.pathname.includes('explore.html')) {
//     await fetchAllLayanan();
//   }
// });

// async function fetchAllLayanan() {
//   try {
//     const response = await fetch(`${API_BASE_URL}/layanan/getlayanan`);
//     const data = await response.json();

//     const flexJadwalContainer = document.getElementById('flex-container');

//     // Hapus semua elemen anak di dalam container sebelum menambahkan yang baru
//     while (flexJadwalContainer.firstChild) {
//       flexJadwalContainer.removeChild(flexJadwalContainer.firstChild);
//     }

//     // Membuat elemen HTML untuk setiap data
//     data.forEach((layananData) => {
//       const flexJadwalElement = document.createElement('div');
//       flexJadwalElement.classList.add('flex-jadwal-2', 'hidden');

//       flexJadwalElement.innerHTML = `
//           <div class="image">
//             <img src="../image/icons/rute.png" alt="" />
//           </div>
//           <div class="nama-tempat">
//             <label for="" class="l1">Titik Awal</label>
//             <p class="p1">${layananData.kota_asal}</p>
//             <label for="" class="l2">Titik Akhir</label>
//             <p class="p2">${layananData.kota_tujuan}</p>
//           </div>
//           <div class="barr">
//             <p class="p3">${layananData.jam_keberangkatan} WIB</p>
//             <p class="p4">${layananData.tanggal_keberangkatan}</p>
//           </div>
//           <div class="barr">
//             <p class="p5">${layananData.batas_tiket} Kursi</p>
//             <p class="p6">Rp.${layananData.harga_tiket}</p>
//             <a href="" class="buy-button">Beli Sekarang</a>
//           </div>
//         `;

//       // Menambahkan elemen baru ke dalam container
//       flexJadwalContainer.appendChild(flexJadwalElement);
//     });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// // Fungsi yang akan dipanggil saat tombol "Jelajah" diklik
function exploreButtonClick() {
  // Ambil nilai dari elemen "Lokasi Awal" (kota_asal)
  const kotaAsal = document.getElementById('selecteDropdown').innerText;

  // Ambil nilai dari elemen "Lokasi Akhir" (kota_tujuan)
  const kotaTujuan = document.getElementById('selecteDropdown2').innerText;

  // Ambil nilai dari elemen "Tanggal" (tanggal_keberangkatan)
  const tanggalKeberangkatan = document.getElementById('tanggalBerangkat').value;

  // Lakukan permintaan pencarian berdasarkan nilai dari elemen "flex-jadwal-1"
  getByFilterFromFlexJadwal1(kotaAsal, kotaTujuan, tanggalKeberangkatan);
}

// Fungsi untuk melakukan permintaan pencarian menggunakan getByFilter
async function getByFilterFromFlexJadwal1(kotaAsal, kotaTujuan, tanggalKeberangkatan) {
  try {
    //  fetch atau metode lainnya untuk melakukan permintaan ke server dengan parameter yang sesuai
    const response = await fetch(`${API_BASE_URL}/layanan/cari?kota_asal=${kotaAsal}&kota_tujuan=${kotaTujuan}&tanggal_keberangkatan=${tanggalKeberangkatan}`);
    const hasilPencarian = await response.json();

    //  hasil pencarian di "flex-jadwal-2"
    displaySearchResults(hasilPencarian);
  } catch (error) {
    console.error('Terjadi kesalahan saat mencari data:', error);
    // Handle error, misalnya tampilkan pesan kesalahan kepada pengguna
    if (!alertShown) {
      alert('Tidak ada hasil ditemukan.');
      alertShown = true;
    }
  }
}

// Fungsi untuk menampilkan hasil pencarian di "flex-jadwal-2"
function displaySearchResults(data) {
  // Ambil elemen "flex-jadwal-2"
  const flexJadwalContainer = document.getElementById('flex-container');

  // Hapus semua elemen anak di dalam container sebelum menambahkan yang baru
  while (flexJadwalContainer.firstChild) {
    flexJadwalContainer.removeChild(flexJadwalContainer.firstChild);
  }

  // Membuat elemen HTML untuk setiap data hasil pencarian
  data.forEach((layananData) => {
    const flexJadwalElement = document.createElement('div');
    flexJadwalElement.classList.add('flex-jadwal-2');

    flexJadwalElement.innerHTML = `
          <div class="image">
            <img src="../image/icons/rute.png" alt="" />
          </div>
          <div class="nama-tempat">
            <label for="" class="l1">Titik Awal</label>
            <p class="p1">${layananData.kota_asal}</p>
            <label for="" class="l2">Titik Akhir</label>
            <p class="p2">${layananData.kota_tujuan}</p>
          </div>
          <div class="barr">
            <p class="p3">${layananData.jam_keberangkatan} WIB</p>
            <p class="p4">${layananData.tanggal_keberangkatan}</p>
          </div>
          <div class="barr">
            <p class="p5">${layananData.batas_tiket} Kursi</p>
            <p class="p6">Rp.${layananData.harga_tiket}</p>
            <a href="#" class="buy-button" onclick="handleBeliButtonClick('${layananData.kota_asal}')">Beli Sekarang</a>
          </div>    
        `;

    // Menambahkan elemen baru ke dalam container "flex-jadwal-2"
    flexJadwalContainer.appendChild(flexJadwalElement);
  });
  flexJadwalContainer.classList.remove('hidden');
}
function handleBeliButtonClick(kotaAsal) {
  // Simpan nilai kotaAsal ke dalam sessionStorage atau localStorage
  sessionStorage.setItem('selectedKotaAsal', kotaAsal);

  // Navigasi ke halaman data.html
  window.location.href = 'detail_penumpang.html';
}
