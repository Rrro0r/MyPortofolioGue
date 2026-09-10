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
      detail: "Membuat susunan acara dan memastikan acara berjalan dengan lancar dan sesuai pada urutannya,	Mempersiapkan dan menyusun seluruh kebutuhan yang diperlukan untuk acara yang akan diselenggarakan."
    },
    {
      tahun : "2025",
      judul : "PKL",
      peran : "Anak PKL",
      detail: "Mengembangkan dan mengeksekusi iklan digital menggunakan tools AI (Artificial Intelegence atau kecerdasan buatan). Seperti menggunakan Chat GPT untuk membuat naskah lalu menggunakan Whisk AI dan Google Veo 2 untuk menghasilkan video serta sound effect. Merancang dan menghasilkan model 3D aset visual dari sebuah produk menggunakan software Blender untuk kebutuhan materi iklan digital."
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
      items: ["Branding Diri.", "lingkungan pertemanan.", "Teknologi digital."]
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
      nama    : "Nadira tifannya chalista",
      asal    : "Bekasi",
      prodi   : "Sistem Informasi",
      fakultas: "Rekayasa industri",
      hobi    : "Olahraga",
      funFact : "Mudah Mengantuk.",
      foto    : "NTC"                 // opsional: "assets/img/anggota1.jpg"
    },
    {
      nama    : "Ksatria Ghassan",
      asal    : "Jakarta",
      prodi   : "Teknologi Informasi",
      fakultas: "Informatika",
      hobi    : "berenang",
      funFact : "jahil.",
      foto    : "KG"
    },
    {
      nama    : "Najwaa vici maharani",
      asal    : "Jakarta",
      prodi   : "Teknik Telekomunikasi",
      fakultas: "Teknik Elektro",
      hobi    : "Baca Novel",
      funFact : "Tidak menyukai hal manis.",
      foto    : "NVM"
    },
    {
      nama    : "Rafee Adji Nugroho ",
      asal    : "Depok",
      prodi   : "Teknologi Informasi",
      fakultas: "Informatika",
      hobi    : "Bermain game",
      funFact : "Mudah bosan.",
      foto    : "RAN"
    },
    {
      nama    : "Rifqi Fadhilah",
      asal    : "Jakarta Barat",
      prodi   : "Sistem Informasi",
      fakultas: "Rekayasa Industri",
      hobi    : "Olahraga",
      funFact : "Mudah Berteman.",
      foto    : "RF"
    }
  ],
  /* ── 6. RESUME — satu objek per materi PKKMB ─────────────────
     Tambah / kurangi blok sesuai jumlah materi yang kamu ikuti.  */
  resume: [
    {
      materi     : "Layanan SSO & Pusat Teknologi Informasi (PUTI)",
      tanggal    : "PRA PKKMB",
      poinUtama  : [
        "SSO (Single Sign-On) mengintegrasikan seluruh akses layanan digital kampus, termasuk Microsoft 365, IgraSias, MyTelU, dan jaringan Wi-Fi."
      ],
      dipelajari : [
        "Cara melakukan aktivasi akun terpusat melalui domain satu.telkomuniversity.ac.id menggunakan.",
      ],
      kesimpulan : "Penguasaan layanan SSO dan fasilitas PUTI sangat vital sebagai fondasi untuk mengakses dan mengelola seluruh administrasi akademik secara digital."
    },
    {
      materi     : "Pencegahan dan Penanganan Kekerasan di Perguruan Tinggi (PPKPT)",
      tanggal    : "PRA PKKMB",
      poinUtama  : ["Kampus memiliki kebijakan dan tidak menoleransi segala bentuk perundungan, dengan sanksi yang bertahap."],
      dipelajari : ["Sanksi yang diberikan bertahap tergantung dari tindakapan apa yang dilakukan, data diri pelapor juga dijaga kerahasiaannya dengan akses melalui ruang konseling yang disediakan"],
      kesimpulan : "Fasilitas yang disediakan oleh kampus dapat menciptakan ruang aman sesama mahasiswa."
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
