const API_BASE_URL = 'http://localhost:3001';


document.addEventListener('DOMContentLoaded', () => {
  // Ambil nilai kotaAsal dari sessionStorage
  const selectedKotaAsal = sessionStorage.getItem('selectedKotaAsal');

  // Cek apakah nilai kotaAsal ada
  if (selectedKotaAsal) {
    // Lakukan permintaan HTTP ke server untuk mendapatkan data kota berdasarkan kota asal
    fetch(`${API_BASE_URL}/kota/${selectedKotaAsal}`)
      .then(response => response.json())
      .then(data => {
        // Tampilkan data sesuai kebutuhan
        console.log('Data Kota:', data);

        // Misalnya, menampilkan data pada elemen HTML
        const container = document.getElementById('dataContainer');
        data.forEach(kota => {
          const kotaElement = document.createElement('div');
          kotaElement.innerHTML = `
            <p>Kota Asal: ${kota.kota_asal_travel}</p>
            <p>Alamat: ${kota.alamat_travel}</p>
            <p>No Telepon: ${kota.no_telepon_travel}</p>
            <img src="${kota.gambar_travel}" alt="Gambar Kota">
            <hr>
          `;
          container.appendChild(kotaElement);
        });
      })
      .catch(error => {
        console.error('Terjadi kesalahan saat mengambil data kota:', error);
      });
  } else {
    // Handle jika nilai kotaAsal tidak ada
    alert('Tidak ada kota asal yang dipilih.');
    // Atau, bisa juga mengarahkan kembali ke halaman sebelumnya atau halaman lain jika diperlukan
    // window.location.href = 'halaman-lain.html';
  }
});
