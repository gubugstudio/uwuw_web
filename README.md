# Uwuw Pets — GitHub Pages

Template website statis yang dibuat berdasarkan referensi tampilan yang diberikan.

## Struktur

```text
uwuw-pets-github/
├── index.html
├── style.css
├── script.js
├── favicon.svg
└── assets/
    ├── hero.jpg
    ├── gallery-01.svg
    ├── ...
    └── gallery-12.svg
```

## Sebelum dipublikasikan

1. Buka `script.js`, lalu ubah:
   `WEBMASTER_EMAIL = "webmaster@example.com"`
   menjadi email webmaster sebenarnya.
2. Ganti link Instagram/Facebook/YouTube/TikTok di bagian footer `index.html`.
3. Ganti `gallery-01.svg` sampai `gallery-12.svg` dengan foto asli jika sudah tersedia. Nama file boleh diubah, tetapi sesuaikan `src` di `index.html`.
4. Jika ingin memakai logo/ikon sendiri, ubah bagian `.brand-icon`.

## GitHub Pages

1. Buat repository baru di GitHub, misalnya `uwuw-pets`.
2. Upload seluruh isi folder ini (bukan folder luarnya saja).
3. Masuk ke **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`.
6. Simpan. Setelah proses deploy selesai, GitHub akan memberikan alamat website.

## Catatan form webmaster

GitHub Pages adalah hosting statis, sehingga `index.html` tidak memiliki server untuk menerima dan menyimpan pesan. Template ini menggunakan `mailto:` sehingga pesan dikirim melalui aplikasi email pengunjung.

Jika ingin pesan masuk ke database/email tanpa membuka aplikasi email, form perlu dihubungkan ke layanan form pihak ketiga atau backend sendiri.
