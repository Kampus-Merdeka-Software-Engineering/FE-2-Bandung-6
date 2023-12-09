function redirectToExplore() {
    const kotaAsal = document.getElementById('asal').value;
    const kotaTujuan = document.getElementById('tujuan').value;
    const tanggalKeberangkatan = document.getElementById('tanggalBerangkat').value;
  
    // Gunakan URLSearchParams untuk membangun parameter URL
    const searchParams = new URLSearchParams({
      asal: kotaAsal,
      tujuan: kotaTujuan,
      tanggal: tanggalKeberangkatan
    });
  
    // Bangun URL lengkap dengan parameter dan alihkan ke explore.html
    const exploreUrl = `explore.html?${searchParams.toString()}`;
    window.location.replace(exploreUrl);
  }
  