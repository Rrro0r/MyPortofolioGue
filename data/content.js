/* ══════════════════════════════════════════════════════════════
   ISI SEMUA DATA DI FILE INI SAJA.
   Jangan mengubah index.html — cukup ganti teks di dalam tanda petik.
   ══════════════════════════════════════════════════════════════ */

const CONTENT = {

  /* ── 1. PROFIL DIRI ───────────────────────────────────────── */
  profile: {
    initials : "VSC",                       // 2 huruf inisial (muncul di navbar)
    name     : "Veronica Standy Christiani",
    nim      : "NIM 110042600051",
    gugus    : "Gugus 7",
    prodi    : "Desain Komunikasi Visual",
    fakultas : "Fakultas Industri Kreatif",
    asal     : "Bekasi, Jawa Barat",

    // Taruh fotonya di assets/img/ lalu tulis nama filenya di bawah.
    photo    : "Pas Photo.Jpg",

    // Maksimal 5 kalimat.
    deskripsi: "Gadis yang baru saja lulus dari pendidikan menengah. " +
               "Sangat menyukai ide kreatif dan menuangkannya dalam sebuah karya. " +
               "Menikmati menuntaskan tugas dengan musik yang mengalun. " +
               "Memegang prinsip bahwa Show Must Go On. " +
               "Ingin Berasa dibalik layat sebuah karya keren.",

    // Tepat tiga kata.
    tigaKata : [
      { kata: "Show", },
      { kata: "Must", },
      { kata: "Go On", }
    ],

    hobi     : ["Karaoke", "Game", "Gambar", "Musik"],

    funFact  : "Mudah Lose Streak.",

    harapan  : "Berkembang secara akademis dan membangun relasi pertemanan.",

    penutup  : "Show Must Go On.",

    // Format wajib: TelUtizen StarterBook_Nama_Gugus
    fileName : "TelUtizen StarterBook_Nama_Gugus"
  },

  /* ── 2. TEKS BERJALAN DI BAWAH HERO ───────────────────────── */
  marquee: [
    "PKKMB 2026", "Pravara Arka", "Telkom University Jakarta",
    "Portofolio", "Mind of Us", "Resume", "Let's Grow"
  ],
  /* ── 3. PENGALAMAN (OPSIONAL) ─────────────────────────────────
     Kosongkan array-nya  ->  pengalaman: []  jika tidak dipakai;
     seluruh section otomatis disembunyikan.                      */
  pengalaman: [
    {
      tahun : "2024",
      judul : "OSIS",
      peran : "Anggota",
      detail: "Membuat susunan acara dan memastikan acara berjalan dengan lancar dan sesuai pada urutannya,•	Mempersiapkan dan menyusun seluruh kebutuhan yang diperlukan untuk acara yang akan diselenggarakan."
    },
    {
      tahun : "2025",
      judul : "PKL",
      peran : "Anak PKL",
      detail: "Mengembangkan dan mengeksekusi iklan digital menggunakan tools AI (Artificial Intelegence atau kecerdasan buatan). Seperti menggunakan Chat GPT untuk membuat naskah lalu menggunakan Whisk AI dan Google Veo 2 untuk menghasilkan video serta sound effect.•	Merancang dan menghasilkan model 3D aset visual dari sebuah produk menggunakan software Blender untuk kebutuhan materi iklan digital."
    },
  ],

  /* ── 4. ANALISIS DIRI (SWOT) ──────────────────────────────── */
  swot: [
    {
      key  : "S",
      nama : "Strength",
      arti : "Potensi",
      items: ["Cepat bergaul.", "Mudah beradaptasi.", "Konsisten."]
    },
    {
      key  : "W",
      nama : "Weakness",
      arti : "Kelemahan",
      items: ["Pelupa.", "Kurang teliti.", "Cepat Bosan."]
    },
    {
      key  : "O",
      nama : "Opportunity",
      arti : "Peluang",
      items: ["Mencari beasiswa.", "lingkungan pertemanan.", "Teknologi digital."]
    },
    {
      key  : "T",
      nama : "Threat",
      arti : "Tantangan",
      items: ["Distraksi.", "Persaingan akademik.", "Manajemen waktu."]
    }
  ],
  /* ── 5. MIND OF US — maksimal 5 anggota kelompok ───────────── */
  kelompok: [
    {
      nama    : "Nama Anggota 1",
      asal    : "Kota Asal",
      prodi   : "Program Studi",
      fakultas: "Fakultas",
      hobi    : "Hobi",
      funFact : "Fun fact anggota ini.",
      foto    : ""                 // opsional: "assets/img/anggota1.jpg"
    },
    {
      nama    : "Nama Anggota 2",
      asal    : "Kota Asal",
      prodi   : "Program Studi",
      fakultas: "Fakultas",
      hobi    : "Hobi",
      funFact : "Fun fact anggota ini.",
      foto    : ""
    },
    {
      nama    : "Nama Anggota 3",
      asal    : "Kota Asal",
      prodi   : "Program Studi",
      fakultas: "Fakultas",
      hobi    : "Hobi",
      funFact : "Fun fact anggota ini.",
      foto    : ""
    },
    {
      nama    : "Nama Anggota 4",
      asal    : "Kota Asal",
      prodi   : "Program Studi",
      fakultas: "Fakultas",
      hobi    : "Hobi",
      funFact : "Fun fact anggota ini.",
      foto    : ""
    },
    {
      nama    : "Nama Anggota 5",
      asal    : "Kota Asal",
      prodi   : "Program Studi",
      fakultas: "Fakultas",
      hobi    : "Hobi",
      funFact : "Fun fact anggota ini.",
      foto    : ""
    }
  ],
  /* ── 6. RESUME — satu objek per materi PKKMB ─────────────────
     Tambah / kurangi blok sesuai jumlah materi yang kamu ikuti.  */
  resume: [
    {
      materi     : "Judul Materi 1",
      pemateri   : "Nama Pemateri",
      tanggal    : "Hari, Tanggal",
      poinUtama  : [
        "Poin utama pertama dari materi ini.",
        "Poin utama kedua dari materi ini.",
        "Poin utama ketiga dari materi ini."
      ],
      dipelajari : [
        "Hal baru pertama yang kamu pelajari.",
        "Hal baru kedua yang kamu pelajari."
      ],
      kesimpulan : "Tulis kesimpulan singkatmu dari materi ini."
    },
    {
      materi     : "Judul Materi 2",
      pemateri   : "Nama Pemateri",
      tanggal    : "Hari, Tanggal",
      poinUtama  : ["Poin utama pertama.", "Poin utama kedua."],
      dipelajari : ["Hal baru pertama.", "Hal baru kedua."],
      kesimpulan : "Tulis kesimpulan singkatmu dari materi ini."
    },
    {
      materi     : "Judul Materi 3",
      pemateri   : "Nama Pemateri",
      tanggal    : "Hari, Tanggal",
      poinUtama  : ["Poin utama pertama.", "Poin utama kedua."],
      dipelajari : ["Hal baru pertama.", "Hal baru kedua."],
      kesimpulan : "Tulis kesimpulan singkatmu dari materi ini."
    },
    {
      materi     : "Judul Materi 4",
      pemateri   : "Nama Pemateri",
      tanggal    : "Hari, Tanggal",
      poinUtama  : ["Poin utama pertama.", "Poin utama kedua."],
      dipelajari : ["Hal baru pertama.", "Hal baru kedua."],
      kesimpulan : "Tulis kesimpulan singkatmu dari materi ini."
    },
    {
      materi     : "UKM Fair",
      pemateri   : "—",
      tanggal    : "Hari, Tanggal",
      poinUtama  : ["Poin utama pertama.", "Poin utama kedua."],
      dipelajari : ["Hal baru pertama.", "Hal baru kedua."],
      kesimpulan : "Tulis kesimpulan singkatmu dari kegiatan ini."
    }
  ]
};
