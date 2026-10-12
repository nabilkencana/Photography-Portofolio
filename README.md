# Porto Haikal — Hasil Konversi Framer Export ke Next.js

Folder ini adalah **konversi murni dari ekspor Framer** ([captured.framer.website](https://captured.framer.website/)) menggunakan library **`framer-export`** ke dalam arsitektur **Next.js**.

---

## 🛠️ Alur Konversi & Spesifikasi

1. **Ekspor Murni dari Framer:**
   * Diekspor langsung menggunakan perintah:
     ```bash
     framer-export --subpages https://captured.framer.website/
     ```
   * Menghasilkan struktur asli Framer lengkap dengan seluruh file JavaScript vendor, runtime Framer Motion, CSSOM, aset gambar, dan 14 subhalaman.

2. **Penggantian Foto (100% Foto Photoshoot Haikal):**
   * Sebanyak **193 file aset gambar** di folder `public/assets/images/` telah digantikan langsung dengan foto-foto asli dari 14 album photoshoot Haikal (`assets/pool/`) dan foto profil/hero Haikal.
   * Tidak ada foto stok tersisa.

3. **Sinkronisasi Biodata Asli (Bukan Kloning namakuhaikal.dev):**
   * Data teks di dalam file JavaScript vendor (`public/scripts/vendor/*.mjs`) dan seluruh halaman HTML ditimpa langsung dengan biodata Haikal:
     * **Nama:** M. Haikal Arrasyid (menggantikan Samuel Spenser di script dan HTML).
     * **Institusi:** SMK Telkom Malang • Malang, Indonesia.
     * **Email:** `arasyidhaikal00@gmail.com`
     * **Instagram:** [instagram.com/namakuhaikall](https://www.instagram.com/namakuhaikall/)
     * **Kutipan Filosofi:** *“Leveraging code to solve problems, and visuals to tell stories.”*

4. **Navigasi Internal 100% Utuh (Tanpa Redirect Luar):**
   * Kartu proyek dan link tidak me-redirect ke luar (tidak ke Google Photos langsung).
   * Klik pada kartu proyek akan membuka halaman proyek internal yang bersangkutan:
     * `/portfolio/field-trip` &rarr; Proyek *Delvisa*
     * `/portfolio/posing-on-a-chair` &rarr; Proyek *Moklet Serve - MAN 2*
     * `/portfolio/annie-and-her-dog` &rarr; Proyek *Dempo Fair - 47*
     * `/portfolio/bride-and-groom` &rarr; Proyek *Google DevFest 2025*
     * `/portfolio` &rarr; Arsip portofolio
     * `/about` &rarr; Halaman tentang
     * `/contact` &rarr; Halaman kontak
     * `/blog` &rarr; Halaman blog

5. **Animasi & Interaktivitas Native Framer:**
   * Seluruh mesin animasi Framer Motion berjalan 100% native dan bebas bug.
   * Watermark *"Made in Framer"* telah disembunyikan secara bersih.

---

## 🚀 Cara Menjalankan

Masuk ke folder `framer-to-nextjs`:

```bash
cd framer-to-nextjs

# 1. Install dependencies (jika baru di-clone)
npm install

# 2. Mode Pengembangan
npm run dev

# 3. Atau Mode Produksi
npm run build
npm start
```

Aplikasi aktif di: **`http://localhost:3002`**
