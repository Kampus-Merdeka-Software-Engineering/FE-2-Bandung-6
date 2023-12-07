document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah pengiriman formulir default

    // Panggil fungsi submitForm
    submitForm();
});

const API_BASE_URL = 'http://localhost:3001';

function submitForm() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const tiket = document.getElementById('tiket').value;
    const date = document.getElementById('date').value;
    const keterangan = document.getElementById('ket').value;

    const formData = {
        nama_lengkap: nama,
        alamat_email: email,
        no_telepon: phone,
        alamat: address,
        jumlah_tiket: tiket,
        tanggal_pemesanan: date,
        keterangan: keterangan
    };

    fetch(`${API_BASE_URL}/datapenumpang/api/postdatapenumpang`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data berhasil disimpan:', data);
        alert('Berhasill');
        window.location.href = 'pembayaran.html';
    })
    .catch(error => {
        console.error('Gagal menyimpan data:', error);
    });
}
