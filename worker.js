addEventListener("message", function (message) {
    const total = message.data;
    let hasilAkhir = 0;

    // Lakukan perhitungan berat di dalam loop
    for (let i = 0; i < total; i++) {
        hasilAkhir += i; // Menghitung total (0 + 1 + 2 + 3 + ...)
    }

    // KIRIM HASILNYA DI LUAR LOOP (Cukup 1 kali kirim saja)
    postMessage(hasilAkhir); 
});

/*
Worker
- Untuk menggunakan Web Worker API, kita bisa membuat object Worker
- https://developer.mozilla.org/en-US/docs/Web/API/Worker
- Saat membuat object Worker, Worker tidak otomatis berjalan,
  melainkan perlu diberi perintah dengan cara mengirim pesan
- Untuk mengirim pesan, gunakan method postMessage()
- Untuk menerima balasan dari worker, gunakan event listener onmessage
- Data yang diterima adalah object MessageEvent
- https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent
*/
