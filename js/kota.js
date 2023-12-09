const API_BASE_URL = "https://be-2-bandung-6-production.up.railway.app";

document.addEventListener('DOMContentLoaded', async () => {
  if (window.location.pathname.includes('city.html')) {
    await fetchAllKota();
  }
});
async function fetchAllKota() {
  try {
    const response = await fetch(`${API_BASE_URL}/kota/api/getkota`);
    const data = await response.json();

    const kotaContainer = document.getElementById('kota-container');

    data.forEach((kota) => {
      const kotaElement = document.createElement('div');
      kotaElement.classList.add('location');
      kotaElement.dataset.name = kota.kota_asal_travel;

      kotaElement.innerHTML = `
        <h2>${kota.kota_asal_travel}</h2>
        <img src="${kota.gambar_travel}" alt="profile" />
        <div class="address">
          <i class="material-icons"><img src="../image/icons/location_on.svg" alt="location" /></i>
          ${kota.alamat_travel}
        </div>
        <div class="telepon">
          <i class="material-icons"><img src="../image/icons/telepon.png" alt="telepon" /></i>
          <span>${kota.no_telepon_travel}</span>
        </div>
      `;

      kotaContainer.appendChild(kotaElement);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}