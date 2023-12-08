document.getElementById('tanggalBerangkat').addEventListener('input', function () {
  let selectedDate = new Date(this.value);
  let currentDate = new Date();

  if (selectedDate < currentDate) {
    // alert("Tidak dapat berjalan di masa lalu.");
    this.value = ''; // Clear the input field if an invalid date is selected
    // add message to div with id "tanggalError"
    document.getElementById('tanggalError').innerHTML = 'Tidak dapat berjalan di masa lalu.';
  }

  // remove the message
  if (selectedDate >= currentDate) {
    document.getElementById('tanggalError').innerHTML = '';
  }
});
document.addEventListener('DOMContentLoaded', function () {
  initializeFlatpickr();
});
function initializeFlatpickr() {
  flatpickr('#date', {
    altFormat: 'F j, Y',
    dateFormat: 'Y-m-d',
    onClose: function (selectedDates, dateStr, instance) {
      // Update hanya jika kalender ditutup dengan pemilihan tanggal
      if (selectedDates.length > 0) {
        updateDropdownText(dateStr);
        // Sembunyikan kalender setelah memilih tanggal
        instance.close();
      }
    },
  });
}