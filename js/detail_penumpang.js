document
  .getElementById("tanggalBerangkat")
  .addEventListener("input", function () {
    var selectedDate = new Date(this.value);
    var currentDate = new Date();

    if (selectedDate < currentDate) {
      // alert("Tidak dapat berjalan di masa lalu.");
      this.value = ""; // Clear the input field if an invalid date is selected
      // add message to div with id "tanggalError"
      document.getElementById("tanggalError").innerHTML =
        "Tidak dapat berjalan di masa lalu.";
    }

    // remove the message
    if (selectedDate >= currentDate) {
      document.getElementById("tanggalError").innerHTML = "";
    }
  });
