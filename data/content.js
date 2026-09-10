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
               "Ingin berada dibalik layar sebuah karya yang indah.",

    // Tepat tiga kata.
    tigaKata : [
      { kata: "Kata Satu", arti: "Penjelasan singkat kenapa kata ini menggambarkan kamu." },
      { kata: "Kata Dua",  arti: "Penjelasan singkat kenapa kata ini menggambarkan kamu." },
      { kata: "Kata Tiga", arti: "Penjelasan singkat kenapa kata ini menggambarkan kamu." }
    ],

    hobi     : ["Karaoke", "Mendengarkan Musik", "Menggambar", "Bermain Game"],

    funFact  : "Gampang lose streak kalo main bareng.",

    harapan  : "Berkembang dan meraih prestasi secara akademik dan membangun relasi dengan berbagai macam manusia.",

    penutup  : "Berharap dapat bertahan dengan memegang prinsip.",

    // Format wajib: TelUtizen StarterBook_Nama_Gugus
    fileName : "TelUtizen StarterBook_Veronica Standy_Gugus7"
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
      detail: "•	Membuat susunan acara dan memastikan acara berjalan dengan lancar dan sesuai pada urutannya.	Mempersiapkan dan menyusun seluruh kebutuhan yang diperlukan untuk acara yang akan diselenggarakan
."
    },
    {
      tahun : "2024",
      judul : "Praktik Kerja Lapangan PKL",
      peran : "Anak PKL",
      detail: "•	Mengembangkan dan mengeksekusi iklan digital menggunakan tools AI (Artificial Intelegence atau kecerdasan buatan). Seperti menggunakan Chat GPT untuk membuat naskah lalu menggunakan Whisk AI dan Google Veo 2 untuk menghasilkan video serta sound effect. Namun, AI bukanlah hal yangdapat digunakan dengan mudah begitu saja untuk membuat video, karena sulitnya konsistensi pada video yang dihasilkan serta menyesuaikannya dengan naskah dan moodboard yang telah dibuat. Sehingga dari situ saya belajar dan memahami bagaimana cara memanfaatkan AI dan menjadikan AI sebagai perkembangan teknologi yang dapat dimanfaatkan untuk efektifitas pekerjaan manusia.	Merancang dan menghasilkan model 3D aset visual dari sebuah produk menggunakan software Blender untuk kebutuhan materi iklan digital
."
    },
  /* ── 4. ANALISIS DIRI (SWOT) ──────────────────────────────── */
  swot: [
    {
      key  : "S",
      nama : "Strength",
      arti : "Potensi atau keunggulan",
      items: ["Mudah Bergaul.", "Konsisten.", "Cepat belajar."]
    },
    {
      key  : "W",
      nama : "Weakness",
      arti : "kelemahan",
      items: ["Cepat Bosan.", "Overthinking.", "Sulit mengingat tugas"]
    },
    {
      key  : "O",
      nama : "Opportunity",
      arti : "Peluang",
      items: ["Mencoba beberapa beasiswa.", "Teknologi yang membantu pembelajaran dengan akses digital.", "Skill yang terus diasah."]
    },
    {
      key  : "T",
      nama : "Threat",
      arti : "Tantangan",
      items: ["Persaingan.", "Pengaruh lingkungan.", "Distraksi."]
    }
  ],
  /* ── 5. MIND OF US — maksimal 5 anggota kelompok ───────────── */
  kelompok: [
    {
      nama    : "Sabarino Ignas Arahon Purba",
      asal    : "Tangerang Selatan",
      prodi   : "Teknik Telekomunikasi",
      fakultas: "Teknik Elektro",
      hobi    : "Gastomini",
      funFact : "Komitmen.",
    },
    {
      nama    : "Rifqi Fadhilah2",
      asal    : "Jakarta Barat",
      prodi   : "Sistem Informasi",
      fakultas: "Rekayasa Industri",
      hobi    : "Olahraga",
      funFact : "Mudah Berteman.",
    },
    {
      nama    : "Rafee Adji Nugroho ",
      asal    : "Depok",
      prodi   : "Teknologi Informasi",
      fakultas: "Informatika",
      hobi    : "Bermain Game",
      funFact : "Mudah Bosan.",
    },
    {
      nama    : "Ksatria Ghassan ",
      asal    : "DKI Jakarta ",
      prodi   : "Teknologi Informas",
      fakultas: "Informatika",
      hobi    : "Berenang",
      funFact : "Jahil.",
    },
    {
      nama    : "Nadira tifannya chalista",
      asal    : "Bekasi",
      prodi   : "Sistem Informasi",
      fakultas: "Rekayasa Industri",
      hobi    : "Olahraga",
      funFact : "Mudah Mengantuk.",
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
