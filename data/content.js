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
    photo    : "Pas Photo.Jpeg",

    // Maksimal 5 kalimat.
    deskripsi: "Gadis perempuan yang baru saja menyelesaikan pendidikan sekolah menengahnya" +
               "Sangat menyukai ide kreatif dan menuangkannya dalam sebuah karya. " +
               "Menikmati menuntaskan tugas dengan musik yang mengalun. " +
               "Memegang prinsip bahwa Show Must Go On. " +
               "Ingin berada dibalik layar sebuah karya mempesona. " +

    // Tepat tiga kata.
    tigaKata : [
      { kata: "Kata Satu", arti: "Penjelasan singkat kenapa kata ini menggambarkan kamu." },
      { kata: "Kata Dua",  arti: "Penjelasan singkat kenapa kata ini menggambarkan kamu." },
      { kata: "Kata Tiga", arti: "Penjelasan singkat kenapa kata ini menggambarkan kamu." }
    ],

    hobi     : ["Hobi Pertama", "Hobi Kedua", "Hobi Ketiga", "Hobi Keempat"],

    funFact  : "Tulis satu fakta unik tentang dirimu yang jarang orang tahu.",

    harapan  : "Tulis harapanmu selama menjadi mahasiswa Telkom University di sini.",

    penutup  : "Satu kalimat penutup untuk menutup portofolio ini.",

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
      tahun : "2025",
      judul : "Nama Organisasi / Kepanitiaan",
      peran : "Jabatan atau Peran",
      detail: "Ceritakan singkat apa yang kamu kerjakan dan hasilnya."
    },
    {
      tahun : "2024",
      judul : "Nama Kegiatan Lain",
      peran : "Jabatan atau Peran",
      detail: "Ceritakan singkat apa yang kamu kerjakan dan hasilnya."
    },
    {
      tahun : "2023",
      judul : "Pengalaman Relevan Lainnya",
      peran : "Jabatan atau Peran",
      detail: "Ceritakan singkat apa yang kamu kerjakan dan hasilnya."
    }
  ],

  /* ── 4. ANALISIS DIRI (SWOT) ──────────────────────────────── */
  swot: [
    {
      key  : "S",
      nama : "Strength",
      arti : "Potensi atau keunggulan yang dimiliki",
      items: ["Kekuatan pertama.", "Kekuatan kedua.", "Kekuatan ketiga."]
    },
    {
      key  : "W",
      nama : "Weakness",
      arti : "Hal yang masih perlu dikembangkan",
      items: ["Kelemahan pertama.", "Kelemahan kedua.", "Kelemahan ketiga."]
    },
    {
      key  : "O",
      nama : "Opportunity",
      arti : "Peluang untuk mengembangkan potensi diri",
      items: ["Peluang pertama.", "Peluang kedua.", "Peluang ketiga."]
    },
    {
      key  : "T",
      nama : "Threat",
      arti : "Tantangan yang berpotensi menghambat",
      items: ["Tantangan pertama.", "Tantangan kedua.", "Tantangan ketiga."]
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
