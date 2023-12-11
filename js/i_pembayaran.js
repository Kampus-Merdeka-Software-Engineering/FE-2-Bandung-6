const API_BASE_URL = 'https://be-2-bandung-6-production.up.railway.app';
document.addEventListener('DOMContentLoaded', () => {
  // Ambil nilai ID data penumpang dari URL
  const queryParams = new URLSearchParams(window.location.search);
  const idDataPenumpang = queryParams.get('id');

  // Ambil nilai selectedKotaAsal dari sessionStorage
  const selectedKotaAsal = sessionStorage.getItem('selectedKotaAsal');

  // Tampilkan data penumpang berdasarkan ID
  fetch(`${API_BASE_URL}/datapenumpang/id/${idDataPenumpang}`)
    .then((response) => response.json())
    .then((data) => {
      // Tampilkan data sesuai kebutuhan
      console.log('Detail Data Penumpang:', data);
      // Misalnya, menampilkan data pada elemen HTML
      const container = document.getElementById('cont-atas');

      const detailElement = document.createElement('div');
      detailElement.innerHTML = `
        <div class="input-group">
            <label for="nama">Nama Lengkap</label>
            <input type="textarea" id="address" name="address" placeholder="${data.nama_lengkap}" readonly />
          </div>
          <div class="input-group">
            <label for="tickets">Jumlah Tiket</label>
            <input type="number" id="tickets" name="tickets" placeholder="${data.jumlah_tiket} tiket" readonly />
          </div>
          
    `;
      container.appendChild(detailElement);
    })
    .catch((error) => {
      console.error('Terjadi kesalahan saat mengambil detail data penumpang:', error);
    });

  // Tampilkan nilai kotaAsal pada elemen <h4>
  if (selectedKotaAsal) {
    // Lakukan permintaan HTTP ke server untuk mendapatkan data kota berdasarkan kota asal
    fetch(`${API_BASE_URL}/kota/${selectedKotaAsal}`)
      .then((response) => response.json())
      .then((data) => {
        // Tampilkan data kota sesuai kebutuhan
        console.log('Data Kota:', data);
        // Misalnya, menampilkan data pada elemen HTML
        const container = document.getElementById('cont-atas');

        data.forEach((kota) => {
          const kotaElement = document.createElement('div');
          kotaElement.innerHTML = `
          <div class="input-group">
            <label for="address">Dari</label>
            <input type="textarea" id="address" name="address" placeholder="${kota.kota_asal_travel}" readonly />
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
        const container = document.getElementById('cont-atas');
        kota.forEach((kotaData) => {
          const layananElement = document.createElement('div');
          layananElement.innerHTML = `
          <div class="input-group">
          <label for="address">Ke</label>
          <input type="textarea" id="address" name="address" placeholder="${kotaData.kota_tujuan}" readonly />
        </div>
          <div class="input-group">
            <label for="price">Harga Per Tiket</label>
            <input type="text" id="price" name="price" placeholder="Rp ${kotaData.harga_tiket}" readonly />
          </div>
          <div class="input-group">
          <label for="keterangan">tanggal</label>
          <input type="text" id="tanggal" name="tanggal" placeholder="${kotaData.tanggal_keberangkatan}" readonly />
        </div>
  `;
          container.appendChild(layananElement);
        });
      })
      .catch((error) => {
        console.error('Terjadi kesalahan saat mengambil data layanan:', error);
      });
  } else {
    alert('Tidak ada kota asal yang dipilih.');
  }

  // Tampilkan nilai alamatEmail pada elemen <p>
});

