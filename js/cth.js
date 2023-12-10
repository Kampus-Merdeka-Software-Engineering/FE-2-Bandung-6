const API_BASE_URL = 'http://localhost:3001';

document.addEventListener('DOMContentLoaded', () => {
  // Ambil nilai kotaAsal dari sessionStorage
  const selectedKotaAsal = sessionStorage.getItem('selectedKotaAsal');

  // Cek apakah nilai kotaAsal ada
  if (selectedKotaAsal) {
    // Lakukan permintaan HTTP ke server untuk mendapatkan data kota berdasarkan kota asal
    fetch(`${API_BASE_URL}/kota/${selectedKotaAsal}`)
      .then((response) => response.json())
      .then((data) => {
        // Tampilkan data sesuai kebutuhan
        console.log('Data Kota:', data);
        // Misalnya, menampilkan data pada elemen HTML
        const container = document.getElementById('detail-kota');

        data.forEach((kota) => {
          const kotaElement = document.createElement('div');
          kotaElement.innerHTML = `
          <img src="${kota.gambar_travel}" alt="Gambar Kota" />
          <h4>${kota.kota_asal_travel}</h4>
          <div class="location">
            <span class="material-icons-outlined"> location_on</span>
            <span> ${kota.alamat_travel}</span>
          </div>
          <div class="phone">
            <span class="material-icons-outlined"> call</span>
            <span> ${kota.no_telepon_travel}</span>
          </div>
          `;
          container.appendChild(kotaElement);
        });
      })
      .catch((error) => {
        console.error('Terjadi kesalahan saat mengambil data kota:', error);
      });
    fetch(`${API_BASE_URL}/layanan/${selectedKotaAsal}`)
      .then((response) => response.json())
      .then((kota) => {
        // Tampilkan data layanan pada elemen HTML
        const container = document.getElementById('detail-layanan');
        kota.forEach((kotaData) => {
          const layananElement = document.createElement('div');
          layananElement.innerHTML = `
          <div class="lokasi-awal">
            <img src="../image/destination/location_home.svg" alt="" />
            <span>${kotaData.kota_asal}</span>
          </div>
          <div class="lokasi-akhir">
            <img src="../image/destination/location_away.svg" alt="" />
            <span> ${kotaData.kota_tujuan}</span>
          </div>
          <div class="waktu">
            <img src="../image/destination/schedule.svg" alt="" />
            <span>${kotaData.jam_keberangkatan} WIB</span>
          </div>
          <div class="jumlah-kursi">
            <img src="../image/destination/accessible.svg" alt="" />
            <span>${kotaData.batas_tiket} Kursi</span>
          </div>
        `;
          container.appendChild(layananElement);
        });
      })
      .catch((error) => {
        console.error('Terjadi kesalahan saat mengambil data layanan:', error);
      });
  } else {
    // Handle jika nilai kotaAsal tidak ada
    alert('Tidak ada kota asal yang dipilih.');
    // Atau, bisa juga mengarahkan kembali ke halaman sebelumnya atau halaman lain jika diperlukan
    // window.location.href = 'halaman-lain.html';
  }
});
