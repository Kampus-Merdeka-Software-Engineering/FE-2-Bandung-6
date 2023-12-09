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

const API_BASE_URL = 'https://be-2-bandung-6-production.up.railway.app';

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

  // Set variabel formSubmitted menjadi true agar formulir tidak dapat dikirimkan lagi
  formSubmitted = true;

  const formData = {
    nama_lengkap: nama,
    alamat_email: email,
    no_telepon: phone,
    alamat: address,
    jumlah_tiket: tiket,
    tanggal_pemesanan: date,
    keterangan: keterangan,
  };

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
      alert('Berhasil');
      window.location.href = 'pembayaran.html';
    })
    .catch((error) => {
      console.error('Gagal menyimpan data:', error);
      alert('Terjadi kesalahan saat menyimpan data ke database. Mohon coba lagi.');
      window.location.reload();
    });
}
