export interface BlogPost {
  slug: string;
  legacySlug?: string;
  title: string;
  date: string;
  isoDate: string;
  category: string;
  readTime: string;
  coverImage: string;
  secondaryImage: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      tip?: string;
    }[];
    quote: string;
    conclusion: string;
  };
  albumId: number;
  albumTitle: string;
  albumSlug: string;
  gphotosUrl: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "specta-show-2026-live-stage-rhythm-of-lights",
    legacySlug: "why-every-business-needs-professional-photography",
    title: "The Rhythm of Lights: Photographing Live Stage Performances at Specta Show 2026",
    date: "Jan 8, 2026",
    isoDate: "2026-01-08T00:00:00.000Z",
    category: "Stage & Performing Arts",
    readTime: "5 min read",
    coverImage: "/assets/pool/album_13_p1.jpg",
    secondaryImage: "/assets/pool/album_13_p2.jpg",
    albumId: 13,
    albumTitle: "Specta Show 2026",
    albumSlug: "specta-show-2026",
    gphotosUrl: "https://photos.app.goo.gl/4cKHXyYJSyLyERGj7",
    excerpt: "Mengabadikan kemegahan panggung Specta Show 2026: sinkronisasi tata lampu dinamis, asap panggung teatrikal, dan menangkap klimaks koreografi penari dalam kecepatan tinggi.",
    content: {
      intro: "Specta Show 2026 menjadi panggung pembuktian kolaborasi seni pertunjukan megah di awal tahun. Menghadapi pergantian tata lampu LED dan moving head yang bergerak cepat, tantangan utama seorang fotografer panggung adalah menjaga keseimbangan antara exposure wajah penari dan saturasi warna panggung.",
      sections: [
        {
          heading: "1. Mengantisipasi Dinamika Tata Lampu Panggung (Moving Heads)",
          body: "Lampu panggung pada Specta Show 2026 berganti dari rona ungu temaram ke semburat emas yang sangat terang dalam hitungan detik. Menggunakan metering manual dengan Auto-ISO berbatas atas (max ISO 6400) pada Canon EOS R5 memungkinkan saya mengunci shutter speed di 1/500s tanpa khawatir foto kehilangan detail shadow.",
          tip: "Arahkan titik fokus tepat ke mata penari utama saat sorot spotlight menyinari wajah mereka."
        },
        {
          heading: "2. Menangkap Puncak Koreografi dan Formasi Panggung",
          body: "Dalam seni tari kontemporer dan teater musikal, formasi grup adalah karya visual tersendiri. Menggunakan lensa zoom serbaguna 24-70mm f/2.8 memungkinkan transisi mulus dari foto close-up emosi solois ke foto wide-angle seluruh formasi panggung.",
          tip: "Manfaatkan mode continuous high-speed shooting saat adegan tarian mencapai klimaks formasi."
        },
        {
          heading: "3. Komposisi Siluet dan Efek Asap Haze",
          body: "Asap haze panggung yang disinari backlight dari belakang menciptakan dimensi kedalaman tiga dimensi yang sangat dramatis. Siluet penari dengan kontur cahaya tipis (rim light) menghasilkan karya seni panggung yang bernilai artistik tinggi."
        }
      ],
      quote: "Panggung adalah kanvas hidup. Cahaya dan gerakan adalah cat warna yang hanya bisa dibekukan oleh kepekaan mata dan lensa.",
      conclusion: "Specta Show 2026 membuktikan bahwa fotografi panggung adalah perpaduan harmonis antara respons teknis secepat kilat dan apresiasi mendalam terhadap seni pertunjukan."
    },
    tags: ["Specta Show 2026", "Stage Photography", "Low Light", "Performance Art", "Lighting Design"]
  },
  {
    slug: "awarding-meo-2026-moments-of-excellence",
    legacySlug: "feeling-awkward-or-nervous-during-a-photoshoot-you-re-not-alone",
    title: "Moments of Excellence: Documenting Achievements at Awarding MEO 2026",
    date: "Jan 6, 2026",
    isoDate: "2026-01-06T00:00:00.000Z",
    category: "Ceremonies & Awards",
    readTime: "4 min read",
    coverImage: "/assets/pool/album_8_p1.jpg",
    secondaryImage: "/assets/pool/album_8_p2.jpg",
    albumId: 8,
    albumTitle: "Awarding MEO 2026",
    albumSlug: "awarding-meo-2026",
    gphotosUrl: "https://photos.app.goo.gl/74Sxxw7zohtmefU28",
    excerpt: "Protokol dokumentasi formal pada malam penganugerahan MEO 2026: presisi pencahayaan karpet merah, ekspresi haru penerima piala, dan visual korporat berstandar tinggi.",
    content: {
      intro: "Malam penganugerahan Awarding MEO 2026 adalah momen puncak apresiasi bagi individu dan tim berprestasi. Dokumentasi acara penghargaan menuntut standar profesionalitas ekstra: tidak boleh ada momen serah-terima piala yang terlewat, dan pencahayaan harus menonjolkan prestise acara.",
      sections: [
        {
          heading: "1. Ketepatan Waktu Penyerahan Trofi (The Handshake Moment)",
          body: "Momen penyerahan piala dan jabat tangan di panggung hanya berlangsung sekitar 3 detik. Posisi fotografer harus sudah terkunci di sudut 45 derajat agar ekspresi kedua belah pihak terlihat jelas tanpa tertutup oleh mikrofon atau plakat penghargaan.",
          tip: "Gunakan aperture f/4.0 saat memotret dua atau tiga orang di panggung agar semua wajah berada dalam bidang fokus yang tajam."
        },
        {
          heading: "2. Menangkap Ekspresi Haru dan Kebanggaan Murni",
          body: "Di luar panggung utama, reaksi keluarga dan rekan tim saat nama pemenang diumumkan adalah momen emas. Menggunakan lensa prima 85mm f/1.4 memungkinkan isolasi emosi haru di tengah kegelapan ballroom hotel.",
          tip: "Selalu siagakan satu mata untuk mengamati audiens, bukan hanya panggung depan."
        },
        {
          heading: "3. Standar Warna Korporat yang Akurat",
          body: "Untuk laporan publikasi resmi dan media partner, akurasi warna kulit dan logo sponsor adalah harga mati. Menggunakan custom white balance berdasarkan grey card sebelum acara dimulai menjamin konsistensi seluruh seri foto."
        }
      ],
      quote: "Penghargaan adalah simbol kerja keras berbulan-bulan. Tugas fotografer adalah memastikan kehormatan itu abadi dalam satu jepretan sempurna.",
      conclusion: "Dokumentasi Awarding MEO 2026 menghasilkan arsip visual bernilai tinggi yang siap dipublikasikan ke media sosial dan laporan tahunan organisasi."
    },
    tags: ["Awarding MEO 2026", "Ceremony Photography", "Corporate Events", "Red Carpet", "Official Gala"]
  },
  {
    slug: "fun-run-2026-morning-golden-hour-movement",
    legacySlug: "starting-a-career-in-web-design",
    title: "Morning Golden Hour: Dynamic Movement & Energy at Fun Run 2026",
    date: "Jan 5, 2026",
    isoDate: "2026-01-05T00:00:00.000Z",
    category: "Sports & Community",
    readTime: "5 min read",
    coverImage: "/assets/pool/album_14_p1.jpg",
    secondaryImage: "/assets/pool/album_14_p2.jpg",
    albumId: 14,
    albumTitle: "Fun Run 2026",
    albumSlug: "fun-run-2026",
    gphotosUrl: "https://photos.app.goo.gl/qcwnHzaNRY5n2pgz5",
    excerpt: "Menangkap antusiasme ribuan pelari di udara pagi Malang pada Fun Run 2026: teknik panning berkecepatan tinggi, pencahayaan golden hour, dan semangat kebersamaan.",
    content: {
      intro: "Ketika matahari pagi baru merekah di langit Malang, ribuan pelari tumpah ruah di garis start Fun Run 2026. Udara sejuk, kabut tipis, dan semburat cahaya fajar menciptakan atmosfer magis yang menantang seorang fotografer olahraga untuk bergerak lincah.",
      sections: [
        {
          heading: "1. Memanfaatkan Cahaya Rendah Fajar (Backlit Golden Hour)",
          body: "Di kilometer awal saat matahari masih berada di ufuk timur, memotret pelari dengan posisi membelakangi matahari (backlighting) menghasilkan siluet bercahaya emas yang menonjolkan debu langkah kaki dan tetes embun di udara.",
          tip: "Gunakan lensa hood untuk meminimalkan flare yang tidak diinginkan dan pertahankan kontras alami."
        },
        {
          heading: "2. Teknik Panning untuk Menghadirkan Efek Kecepatan",
          body: "Foto olahraga tidak selalu harus membekukan gerakan secara statis. Dengan menurunkan kecepatan rana ke 1/30 - 1/50 detik dan menggerakkan kamera sejajar dengan lari atlet, latar belakang menjadi buram dinamis (motion blur) sementara tubuh pelari tetap fokus tajam.",
          tip: "Kunci kestabilan tubuh dengan menempelkan siku ke dada dan memutar pinggang secara halus saat mengikuti laju pelari."
        },
        {
          heading: "3. Sorot Senyum di Garis Finish",
          body: "Titik finis adalah panggung emosi. Medali yang dikalungkan, tos tangan antar-sahabat, dan senyum lega setelah menempuh jarak jauh adalah cerita kemanusiaan yang paling bernilai dari sebuah perhelatan lari santai."
        }
      ],
      quote: "Lari bukan hanya tentang kecepatan kaki, melainkan tentang perayaan kehidupan dan energi positif di pagi hari.",
      conclusion: "Dokumentasi Fun Run 2026 merekam kebersamaan, kesehatan, dan kegembiraan ribuan peserta dalam untaian foto yang penuh warna dan gairah hidup."
    },
    tags: ["Fun Run 2026", "Sports Photography", "Panning Technique", "Golden Hour", "Community Fitness"]
  },
  {
    slug: "kickoff-mic-2026-igniting-tech-innovation",
    legacySlug: "how-to-look-natural-in-photos-even-if-you-feel-nervous",
    title: "Igniting Innovation: Capturing Keynotes & Energy at Kickoff MIC 2026",
    date: "Jan 4, 2026",
    isoDate: "2026-01-04T00:00:00.000Z",
    category: "Tech & Innovation",
    readTime: "5 min read",
    coverImage: "/assets/pool/album_7_p1.jpg",
    secondaryImage: "/assets/pool/album_7_p2.jpg",
    albumId: 7,
    albumTitle: "Kickoff MIC 2026",
    albumSlug: "kickoff-mic-2026",
    gphotosUrl: "https://photos.app.goo.gl/xFqPjQbmd7SNy3EA8",
    excerpt: "Dokumentasi peluncuran inovasi teknologi pada Kickoff MIC 2026: memotret presentasi ide digital, interaksi booth pameran, dan antusiasme talenta muda IT.",
    content: {
      intro: "Kickoff MIC 2026 (Moklet Innovation Center) mempertemukan talenta muda bidang software engineering, kecerdasan buatan, dan produk digital. Sebagai siswa Rekayasa Perangkat Lunak di SMK Telkom Malang, memotret acara ini terasa sangat personal dan sarat makna.",
      sections: [
        {
          heading: "1. Menyeimbangkan Cahaya Presenter dan Layar Digital",
          body: "Di panggung auditorium, pembicara sering kali berdiri di samping layar presentasi beresolusi tinggi. Menggunakan teknik exposure bracketing atau mengekspos berdasarkan highlight layar videotron menjaga teks materi tetap terbaca jelas sementara wajah pembicara tetap tampak natural.",
          tip: "Gunakan electronic shutter untuk menghindari distorsi moiré dan menjaga keheningan ruang seminar."
        },
        {
          heading: "2. Candid Diskusi di Booth Teknologi",
          body: "Di sesi pameran karya, siswa dan mentor berdiskusi hangat di depan layar laptop yang menampilkan baris kode dan prototipe aplikasi. Momen fokus intelektual ini membutuhkan pendekatan dokumentasi observasional yang sopan.",
          tip: "Gunakan sudut pandang over-the-shoulder (OTS) untuk memperlihatkan apa yang sedang didiskusikan di layar komputer."
        },
        {
          heading: "3. Mengabadikan Semangat Kolaborasi Generasi Muda",
          body: "Kekuatan terbesar dari acara teknologi SMK Telkom Malang adalah semangat kolaborasinya. Tangkapan visual tentang tawa saat sesi pitching dan jabat tangan kemitraan menjadi aset promosi masa depan sekolah."
        }
      ],
      quote: "Teknologi dimulai dari baris kode, tetapi masa depan digerakkan oleh percikan inovasi di mata mereka yang menciptakannya.",
      conclusion: "Dokumentasi Kickoff MIC 2026 memadukan perspektif teknis rekayasa perangkat lunak dengan ketajaman lensa kamera untuk merekam cikal bakal inovator masa depan."
    },
    tags: ["Kickoff MIC 2026", "SMK Telkom Malang", "Tech Innovation", "Software Engineering", "Student Startups"]
  },
  {
    slug: "photoshoot-dc-specta-creative-studio-vision",
    legacySlug: "why-professional-photography-is-key-to-telling-your-story",
    title: "Creative Studio Vision: Directing and Framing the DC Specta Photoshoot",
    date: "Nov 28, 2025",
    isoDate: "2025-11-28T00:00:00.000Z",
    category: "Studio & Editorial",
    readTime: "4 min read",
    coverImage: "/assets/pool/album_6_p1.jpg",
    secondaryImage: "/assets/pool/album_6_p2.jpg",
    albumId: 6,
    albumTitle: "Photoshoot DC Specta",
    albumSlug: "photoshoot-dc-specta",
    gphotosUrl: "https://photos.app.goo.gl/dmcv3DTeSTWFVhmZ7",
    excerpt: "Eksplorasi sesi foto studio editorial DC Specta: mengarahkan pose kreatif penari, pencahayaan split lighting dua lampu Godox, dan membangun mood visual yang kuat.",
    content: {
      intro: "Photoshoot DC Specta dirancang untuk menghasilkan materi promosi resmi, poster pementasan, dan visual media sosial untuk Specta Show. Berbeda dengan fotografi panggung yang spontan, sesi foto studio memberi kontrol penuh atas setiap berkas cahaya dan detail pose model.",
      sections: [
        {
          heading: "1. Pengaturan Pencahayaan Kontras Tinggi (Rim & Key Light)",
          body: "Untuk menonjolkan karakter kostum teater yang bertekstur, saya menggunakan setup dua lampu Godox AD200 Pro: satu softbox strip di belakang sebagai rim light untuk memisahkan subjek dari background hitam, dan satu octabox 80cm di depan dengan grid untuk mengontrol tumpahan cahaya.",
          tip: "Gunakan grid pada softbox agar cahaya terfokus hanya pada subjek dan latar belakang tetap pekat."
        },
        {
          heading: "2. Mengarahkan Pose Alami pada Model",
          body: "Penari memiliki kesadaran tubuh yang sangat baik. Alih-alih memberikan instruksi kaku, saya memutar musik pementasan mereka dan meminta model melakukan gerakan tarian lambat (slow-motion motion), lalu menangkap momen di antara gerakan tersebut.",
          tip: "Komunikasikan feedback positif setelah setiap bidikan untuk membangun rasa percaya diri model di depan lensa."
        },
        {
          heading: "3. Retouching Warna Editorial yang Bernapas",
          body: "Dalam proses editing di Lightroom dan Photoshop, warna kulit dijaga tetap natural dan bertekstur tanpa smoothing berlebihan, sementara saturasi kostum dipertegas agar tampil memukau di layar smartphone dan cetakan poster."
        }
      ],
      quote: "Studio fotografi adalah laboratorium imajinasi. Di ruang gelap inilah kita melukis karakter dengan berkas cahaya yang presisi.",
      conclusion: "Sesi foto studio DC Specta membuktikan pentingnya perencanaan konsep matang, komunikasi hangat dengan subjek, dan penguasaan teknik lighting profesional."
    },
    tags: ["Photoshoot DC Specta", "Studio Photography", "Editorial Portrait", "Godox AD200", "Creative Lighting"]
  },
  {
    slug: "diesnat-2025-smk-telkom-malang-visual-chronicle",
    legacySlug: "5-tips-to-feel-comfortable-during-your-photoshoot",
    title: "Celebrating Moklet Pride: The Visual Chronicle of DiesNat 2025",
    date: "Nov 15, 2025",
    isoDate: "2025-11-15T00:00:00.000Z",
    category: "Campus & Heritage",
    readTime: "5 min read",
    coverImage: "/assets/pool/album_5_p1.jpg",
    secondaryImage: "/assets/pool/album_5_p3.jpg",
    albumId: 5,
    albumTitle: "DiesNat 2025",
    albumSlug: "diesnat-2025",
    gphotosUrl: "https://photos.app.goo.gl/BqP4yXZiaRYW7YUG6",
    excerpt: "Peringatan hari jadi SMK Telkom Malang pada DiesNat 2025: perpaduan sudut pandang udara drone, euforia jalan sehat, dan ikatan persaudaraan alumni Moklet.",
    content: {
      intro: "Dies Natalis SMK Telkom Malang 2025 adalah pesta perayaan warisan keunggulan dan persaudaraan lintas angkatan Moklet. Dari apel khidmat, jalan sehat ribuan siswa, hingga konser musik puncak di lapangan utama, seluruh sudut kampus bergetar dalam energi kebanggaan.",
      sections: [
        {
          heading: "1. Perspektif Udara dengan DJI Mavic Air 2",
          body: "Untuk menangkap skala acara ribuan orang yang memenuhi lapangan utama sekolah, saya menerbangkan drone DJI Mavic Air 2 pada ketinggian 60 meter. Pola formasi kaos seragam dan bendera raksasa Moklet menghasilkan komposisi grafis geometris yang spektakuler dari atas.",
          tip: "Periksa arah angin dan pastikan zona terbang bebas dari kabel listrik atau pohon tinggi sebelum take-off."
        },
        {
          heading: "2. Menangkap Euforia Spontan Antar-Angkatan",
          body: "Kekuatan SMK Telkom Malang terletak pada rasa kekeluargaan yang erat. Ketika alumni puluhan tahun lalu bertemu kembali dengan guru dan adik kelas, momen pelukan hangat dan tawa nostalgia adalah intisari dari apa yang harus direkam sejarah visual sekolah.",
          tip: "Bergeraklah di pinggir kerumunan dengan lensa telephoto 70-200mm untuk menangkap momen haru tanpa menginterupsi percakapan mereka."
        },
        {
          heading: "3. Panggung Hiburan Musik dan Penutupan Spektakuler",
          body: "Acara ditutup dengan pementasan band siswa dan bintang tamu di bawah hujan confetti warna-warni. Kecepatan rana 1/800s berhasil membekukan jutaan lembar kertas warna-warni yang melayang di udara di atas ribuan tangan yang terangkat ke atas."
        }
      ],
      quote: "Moklet bukan sekadar almamater, ia adalah identitas kebanggaan yang mengakar seumur hidup dalam sanubari setiap alumninya.",
      conclusion: "Dokumentasi DiesNat 2025 adalah persembahan visual cinta dan hormat saya kepada SMK Telkom Malang — tempat di mana logika kode dan gairah seni fotografi saya bertumbuh."
    },
    tags: ["DiesNat 2025", "SMK Telkom Malang", "Drone Photography", "Campus Pride", "Anniversary Celebration"]
  }
];
