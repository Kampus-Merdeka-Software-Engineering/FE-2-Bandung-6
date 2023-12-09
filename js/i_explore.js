const API_BASE_URL = 'https://be-2-bandung-6-production.up.railway.app';

document.addEventListener('DOMContentLoaded', async () => {
  if (window.location.pathname.includes('explore.html')) {
    await fetchAllLayanan();
  }
});

async function fetchAllLayanan() {
  try {
    const response = await fetch(`${API_BASE_URL}/layanan/getlayanan`);
    const data = await response.json();

    const flexJadwalContainer = document.getElementById('flex-container');

    // Hapus semua elemen anak di dalam container sebelum menambahkan yang baru
    while (flexJadwalContainer.firstChild) {
      flexJadwalContainer.removeChild(flexJadwalContainer.firstChild);
    }

    // Membuat elemen HTML untuk setiap data
    data.forEach((layananData) => {
      const flexJadwalElement = document.createElement('div');
      flexJadwalElement.classList.add('flex-jadwal-2', 'hidden');

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
            <a href="" class="buy-button">Beli Sekarang</a>
          </div>
        `;

      // Menambahkan elemen baru ke dalam container
      flexJadwalContainer.appendChild(flexJadwalElement);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
