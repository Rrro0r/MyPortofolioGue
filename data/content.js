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
    photo    : "foto.jpeg",

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
    },
    {
      nama    : "Ksatria Ghassan",
      asal    : "Jakarta",
      prodi   : "Teknologi Informasi",
      fakultas: "Informatika",
      hobi    : "berenang",
      funFact : "jahil.",
    },
    {
      nama    : "Najwaa vici maharani",
      asal    : "Jakarta",
      prodi   : "Teknik Telekomunikasi",
      fakultas: "Teknik Elektro",
      hobi    : "Baca Novel",
      funFact : "Tidak menyukai hal manis.",
    },
    {
      nama    : "Rafee Adji Nugroho ",
      asal    : "Depok",
      prodi   : "Teknologi Informasi",
      fakultas: "Informatika",
      hobi    : "Bermain game",
      funFact : "Mudah bosan.",
    },
    {
      nama    : "Rifqi Fadhilah",
      asal    : "Jakarta Barat",
      prodi   : "Sistem Informasi",
      fakultas: "Rekayasa Industri",
      hobi    : "Olahraga",
      funFact : "Mudah Berteman.",
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
      materi     : "Prestasi Kemahasiswaan dan TAK",
      tanggal    : "PRA PKKMB",
      poinUtama  : ["Pengenalan poin aktivitas kemahasiswaan yang menjadi syarat untuk mengikuti sidang akhir dan kelulusan"],
      dipelajari : ["Poin TAK dapat diperoleh melalui kegiatan diluar kamous seperti lomba atau softskill"],
      kesimpulan : "Setiap kegiatan yang dilakukan oleh Mahasiswa diluar kampus akan diberi penghargaan berupa poin TAK."
    },
    {
      materi     : "Nilai Tata Krama dan Budaya Kampus. Materi HEI",
      tanggal    : "PKKMB Day 1",
      poinUtama  : ["HEI Bukan sekedar nilai, tetapi cara kita hidup, berpikir, dan bertindak untuk masa depan yang lebih baik,Jangan pernah berhenti bermimpi, karena mimpi adalah bahan bakar untuk bengubah dunia - B.J Habibie."],
      dipelajari : ["Kampus adalah tempat terbaik untuk melahih HEI dalam kehidupan nyata"],
      kesimpulan : "Pilihan kecil hari ini membentuk masa depan yang luar biasa. Unggul dalam softskill dan terarag dalam prestasi akademik."
    },
    {
      materi     : "Growth Mindset and Future Skill for Mahasiswa",
      tanggal    : "PKKMB Day 1",
      poinUtama  : ["Pemanfaatkan AI harus berlandaskan etika dan jelas, yang digunakan sebagai alat berpikir, bukan pengganti sebuah karya seseorang."],
      dipelajari : ["Pentingnya melakukan perubahan dan menolah data pada setiap sumber referensi."],
      kesimpulan : "Menggunakan teknoloki dengan etika agar membentuk lulusan yang berkarakter, jujur dan profesional."
    },
    {
      materi     : "Mental Health",
      tanggal    : "PKKMB Day 1",
      poinUtama  : ["Kesehatan mental bukan berarti selalu merasa baik. Yang penting adalah kita mampu mengenali, merespon, dan mencari dukungan saat dibutuhkan. Seseorang dapat merasa sedih, cemas, dan bingung bukan artinya lemah, kurang beriman, apalagi pasrah."],
      dipelajari : ["Kondisi kita bergerak mengikuti situasi, pengalaman, sumber daya, dan dukungan lingkungan."],
      kesimpulan : "Mengecek apa yang sedang terjadi di dalam diri. apa yang tubuh buthkan, apa yang sedang berulang  di kepala, emosi apa yang peling kuat, dan apa yang ku butuhkan."
    },
    {
      materi     : "Anti Plagiarisme",
      tanggal    : "PKKMB Day 1",
      poinUtama  : ["Plagiarisme memiliki beberapa tipe. seperti Word of Plagiarism, Penulis menggunakan kata-kata penulis lain yang sama persis tanpa menyebutkan sumbernya. Plagiarism of Source, Penulis menggunakan gagasan orang lain tanpa memberikan pengakuan yang cukup. Plaguarism of Authorship, Penulis mengakui karya tulis orang lain sebagai kaeyanya sendiri. Self Plagiarism, Penulis mempublikasikan satu artikel pada lebih dari redaksi penerbit dan mendaur ulang karya tulisnya sendiri untuk dipublikasikan kembali tanpa perubahan yang berarti."],
      dipelajari : ["Plagiarisme dapat dicegah dengan beberapa langkah seperti dengan menggunakan pengutipan, parafrase, membuat daftar pustaka dengan baik dan benar."],
      kesimpulan : "Kampus menyediakan fasilitas untuk mendeteksi plagiarism dan menyediakan sumber untuk membuat jurnal atau artikel."
    },
    {
      materi     : "Sistem Perkuliahan dan Aturan Akademik",
      tanggal    : "PKKMB Day 2",
      poinUtama  : ["Perkuliahan dalam satu semester berjalan dengan 16 kali pertemun, Kampus memiliki aturan dimana mewajibkan ketidakhadiran maksimal hanya sebanyak 3 kali per mata kuliah."],
      dipelajari : ["Penilaian menggunakan sistem hufur A-E dengan standar kelulusan minimum bernilai C. Mahasiswa dapat berkonseling pada guru pembimbing masing-masing tentang akademik."],
      kesimpulan : "Mahasiswa diwajibkan mengikuti perkuliahan secara disiplin karena ini sangat dibutuhkan untuk perencanaan studi seseorang kedepannya."
    },
    {
      materi     : "Etika ahasiswa DKV",
      tanggal    : "PKKMB Day 2",
      poinUtama  : ["Menjadi mahasiswa bukan hanya tentang nilai. Ada cara kita berkomunikasi dan menghargai orang lain. Menyikapi perbedaan dengan bertanggung jawab. Etika adalah tentang bagaimana kita menciptakan lingkungan yang saling menghargai"],
      dipelajari : ["Attitude yang baik juga bagiand ari skill yang akan kita bawa ketika kita lulus. Banyak hal penting yang harus di perhatikan antara dosen dan mahasiswa  seperti waktu dan kesepakatan dengan bertanggung jawab."],
      kesimpulan : "Membangun citra dan relasi dimulai dari sikap saling menghargai, berkomunikasi dengan sopan, serta menghargai waktu dan kesepakatan yang telah dibuat."
    },  
    {
      materi     : "Modal Prestasi, Gratis Registrasi",
      tanggal    : "PKKMB Day 2",
      poinUtama  : ["program ini membentuk dukungan prodi terhadap mahasiswa aktif berkompetisi secara mandiri. Dukungan ini diharapkan dapat mendorong mahasiswa untuk mengembangkan potensi, meningkatkan pengalaman serta meraih perstasi di berbagai bidang."],
      dipelajari : ["Memotivasi mahasiswa untuk ikut serta dalam kompetisi agar dapat mengembangkan diri."],
      kesimpulan : "semakin banyak poin yang dikumpulkan dapat membuat nilai akhir yang didapatkan lebih tinggi."
    },
    
    {
      materi     : "Sharing Mahasiswa",
      tanggal    : "PKKMB Day 3",
      poinUtama  : ["Jangan takut untuk mencari info dan mencoba lomba dari komunikasi dan platform kampus dengan kolaborasi tim untuk saling melengkapi, perbanyak riset dan membaca  untuk memperkuat ide dan referensi, dan melakukan evaluasi dan masukan untuk lomba berikutnya."],
      dipelajari : ["Tidak perlu berkembang sendirian, kamu dapat mencari seseorang untuk menjadi partner dan membentuk sebuah tim.."],
      kesimpulan : "Berpegang pada prinsip, Kalau suatu hari saya tiada, saya ingin ada sesuatu yang pernah saya bangun dan terus bermanfaat bagi orang lain."
    }
  ]
};
