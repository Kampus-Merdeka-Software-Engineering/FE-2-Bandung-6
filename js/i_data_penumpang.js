const API_BASE_URL = 'https://be-2-bandung-6-production.up.railway.app';
let formSubmitted = false;

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

    // Lakukan permintaan HTTP ke server untuk mendapatkan data layanan berdasarkan kota asal
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

function submitForm() {
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const tiket = document.getElementById('tiket').value;
  const date = document.getElementById('date').value;
  const keterangan = document.getElementById('ket').value;

  // Pengecekan validasi
  if (!nama || !email || !phone || !address || !tiket || !date) {
    alert('Mohon isi semua kolom yang diperlukan.');
    return;
  }
  let formSubmitted = false;

  document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    // Check if the form has already been submitted
    if (formSubmitted) {
      alert('Formulir sudah dikirimkan. Harap tunggu.');
      return;
    }

    // Panggil fungsi submitForm
    submitForm();
  });

  // Set variabel formSubmitted menjadi true agar formulir tidak dapat dikirimkan lagi
  formSubmitted = true;

  // Dapatkan ID kota dan ID layanan dari elemen HTML

  const formData = {
    nama_lengkap: nama,
    alamat_email: email,
    no_telepon: phone,
    alamat: address,
    jumlah_tiket: tiket,
    tanggal_pemesanan: date,
    keterangan: keterangan,
  };

  // Kirim data penumpang ke server
  fetch(`${API_BASE_URL}/datapenumpang/api/postdatapenumpang`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Data berhasil disimpan:', data);

      if (data.id != null) {
        // Simpan ID yang diterima ke sessionStorage
        sessionStorage.setItem('idPenumpang', data.id);

        alert('Data berhasil disimpan.');

        const pesanSekarangBtn = document.getElementById('pesanSekarangBtn');
        pesanSekarangBtn.removeAttribute('disabled');

        // Menonaktifkan inputan yang sudah tersimpan di formulir
        document.getElementById('nama').disabled = true;
        document.getElementById('email').disabled = true;
        document.getElementById('phone').disabled = true;
        document.getElementById('address').disabled = true;
        document.getElementById('tiket').disabled = true;
        document.getElementById('date').disabled = true;
        document.getElementById('ket').disabled = true;
      } else {
        console.error('ID tidak ada dalam respons dari server.');
        alert('Terjadi kesalahan. ID tidak ditemukan.');
      }

      // Aktifkan tombol pesan sekarang setelah data penumpang tersimpan
    })
    .catch((error) => {
      console.error('Gagal menyimpan data:', error);
    });
}

function pesanSekarang() {
  const idDataPenumpang = sessionStorage.getItem('idPenumpang');
   // Ambil nilai alamat email
   const email = document.getElementById('email').value;

   // Ambil nilai kota asal dari sessionStorage
   const kotaAsal = sessionStorage.getItem('selectedKotaAsal');

  // Periksa apakah ID, email, dan kotaAsal tersedia dan tidak undefined
  if (idDataPenumpang && email && kotaAsal) {
    // Simpan email dan kotaAsal ke sessionStorage (jika belum disimpan sebelumnya)
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('kotaAsal', kotaAsal);

    // Redirect ke halaman 'li.html' dengan menyertakan ID data penumpang, email, dan kotaAsal
    window.location.href = `pembayaran.html?id=${idDataPenumpang}&email=${email}&kotaAsal=${kotaAsal}`;
  } else {
    // Tampilkan pesan kesalahan jika ID, email, atau kotaAsal tidak tersedia
    alert('Data tidak lengkap. Harap coba lagi.');
  }
}


