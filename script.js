/* ==========================================================================
   SCRIPT.JS - LOGIKA JAVASCRIPT & MANIPULASI DOM
   Folder: JS/script.js
   ========================================================================== */

// Menangkap event submit dari formulir
document.addEventListener("DOMContentLoaded", function () {
    const formPemesanan = document.getElementById("formPemesanan");

    if (formPemesanan) {
        formPemesanan.addEventListener("submit", function (event) {
            event.preventDefault(); // Mencegah reload halaman

            // 1. Ambil nilai dari input teks (Type="text", Type="email", Textarea)
            let nama = document.getElementById("fnama").value;
            let email = document.getElementById("femail").value;
            let varian = document.getElementById("fvarian").value;
            let alamat = document.getElementById("falamat").value;

            // 2. Ambil nilai Radio Button Suhu
            let suhuRadio = document.querySelector('input[name="fsuhu"]:checked');
            let suhu = suhuRadio ? suhuRadio.value : "Dingin (Es)";

            // 3. Ambil nilai Checkbox Topping
            let toppingList = [];
            let checkboxes = document.querySelectorAll('input[name="ftopping"]:checked');
            checkboxes.forEach(function (cb) {
                toppingList.push(cb.value);
            });
            let toppingStr = toppingList.length > 0 ? toppingList.join(", ") : "Tidak ada tambahan";

            // 4. Validasi Sederhana
            if (nama.trim() === "") {
                alert("Silakan masukkan Nama Lengkap Anda!");
                return;
            }

            // 5. Tampilkan Hasil Konfirmasi via Manipulasi DOM
            let boxHasil = document.getElementById("hasilPesanan");
            let isiKonfirmasi = document.getElementById("isiKonfirmasi");

            isiKonfirmasi.innerHTML = `
                <p class="mb-1">Halo <b>${nama}</b>, terima kasih telah memesan di Kopi Senja!</p>
                <p class="mb-1">☕ <b>Varian Kopi:</b> ${varian}</p>
                <p class="mb-1">🌡️ <b>Pilihan Suhu:</b> ${suhu}</p>
                <p class="mb-1">✨ <b>Topping:</b> ${toppingStr}</p>
                <p class="mb-1">📍 <b>Alamat Antar:</b> ${alamat}</p>
                <hr class="my-2">
                <p class="mb-0 text-success fw-bold">
                    Pesanan Anda segera kami racik dan kirimkan. Konfirmasi pesanan telah kami teruskan ke email: <u>${email}</u>.
                </p>
            `;

            // Munculkan kotak hijau konfirmasi
            boxHasil.style.display = "block";
            boxHasil.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    }
});