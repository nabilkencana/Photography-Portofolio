export interface Album {
  id: number;
  slug: string;
  title: string;
  category: string;
  filter: "event" | "tech" | "grad" | "sports" | "portrait";
  group?: "moklet" | "festivals" | "tech" | "graduation" | "sports";
  cover: string;
  photos: string[];
  description: string;
  photoCount: number;
  gphotosUrl: string;
  year: string;
  client?: string;
  location?: string;
}

export const ALBUMS: Album[] = [
  {
    id: 1,
    slug: "delvisa",
    title: "Delvisa",
    category: "Event & Performance",
    filter: "event",
    cover: "/assets/albums/album_1.jpg",
    photos: [
    "/assets/pool/album_1_p1.jpg",
    "/assets/pool/album_1_p2.jpg",
    "/assets/pool/album_1_p3.jpg",
    "/assets/pool/album_1_p4.jpg",
    "/assets/pool/album_1_p5.jpg",
    "/assets/pool/album_1_p6.jpg",
    "/assets/pool/album_1_p7.jpg",
    "/assets/pool/album_1_p8.jpg",
    "/assets/pool/album_1_p9.jpg",
    "/assets/pool/album_1_p10.jpg"
  ],
    description: "Dokumentasi visual pementasan seni dan panggung pementasan karya teater dan musik Delvisa dengan pencahayaan dramatis.",
    photoCount: 35,
    gphotosUrl: "https://photos.app.goo.gl/gDqdTfczTicagCDX7",
    year: "2025",
    location: "Malang, Jawa Timur"
  },
  {
    id: 2,
    slug: "moklet-serve-man-2",
    title: "Moklet Serve - MAN 2",
    category: "Community & School",
    filter: "sports",
    cover: "/assets/albums/album_2.jpg",
    photos: [
    "/assets/pool/album_2_p1.jpg",
    "/assets/pool/album_2_p2.jpg",
    "/assets/pool/album_2_p3.jpg",
    "/assets/pool/album_2_p4.jpg",
    "/assets/pool/album_2_p5.jpg",
    "/assets/pool/album_2_p6.jpg",
    "/assets/pool/album_2_p7.jpg",
    "/assets/pool/album_2_p8.jpg",
    "/assets/pool/album_2_p9.jpg",
    "/assets/pool/album_2_p10.jpg"
  ],
    description: "Dokumentasi kegiatan bakti sosial, pengabdian masyarakat, dan kolaborasi edukatif Moklet Serve di MAN 2 Kota Malang.",
    photoCount: 159,
    gphotosUrl: "https://photos.app.goo.gl/2sn1YbiT2PuUrJ13A",
    year: "2025",
    location: "MAN 2 Kota Malang"
  },
  {
    id: 3,
    slug: "dempo-fair-47",
    title: "Dempo Fair - 47",
    category: "Festival & Fair",
    filter: "event",
    cover: "/assets/albums/album_3.jpg",
    photos: [
    "/assets/pool/album_3_p1.jpg",
    "/assets/pool/album_3_p2.jpg",
    "/assets/pool/album_3_p3.jpg",
    "/assets/pool/album_3_p4.jpg",
    "/assets/pool/album_3_p5.jpg",
    "/assets/pool/album_3_p6.jpg",
    "/assets/pool/album_3_p7.jpg",
    "/assets/pool/album_3_p8.jpg",
    "/assets/pool/album_3_p9.jpg",
    "/assets/pool/album_3_p10.jpg"
  ],
    description: "Sorotan kemeriahan panggung akbar, bintang tamu, dan euforia festival tahunan Dempo Fair ke-47.",
    photoCount: 132,
    gphotosUrl: "https://photos.app.goo.gl/RWiYbsSnmUJDqJ2c6",
    year: "2025",
    location: "SMAK St. Albertus Malang"
  },
  {
    id: 4,
    slug: "google-devfest-2025",
    title: "Google DevFest 2025",
    category: "Tech & Conference",
    filter: "tech",
    cover: "/assets/albums/album_4.jpg",
    photos: [
    "/assets/pool/album_4_p1.jpg",
    "/assets/pool/album_4_p2.jpg",
    "/assets/pool/album_4_p3.jpg",
    "/assets/pool/album_4_p4.jpg",
    "/assets/pool/album_4_p5.jpg",
    "/assets/pool/album_4_p6.jpg",
    "/assets/pool/album_4_p7.jpg",
    "/assets/pool/album_4_p8.jpg",
    "/assets/pool/album_4_p9.jpg",
    "/assets/pool/album_4_p10.jpg"
  ],
    description: "Dokumentasi konferensi teknologi developer Google Developer Groups (GDG) terbesar: seminar, workshop, dan networking.",
    photoCount: 70,
    gphotosUrl: "https://photos.app.goo.gl/BBXoMtVCQBdaKA6LA",
    year: "2025",
    location: "Malang Tech Hub"
  },
  {
    id: 5,
    slug: "diesnat-2025",
    title: "DiesNat 2025",
    category: "School Celebration",
    filter: "event",
    cover: "/assets/albums/album_5.jpg",
    photos: [
    "/assets/pool/album_5_p1.jpg",
    "/assets/pool/album_5_p2.jpg",
    "/assets/pool/album_5_p3.jpg",
    "/assets/pool/album_5_p4.jpg",
    "/assets/pool/album_5_p5.jpg",
    "/assets/pool/album_5_p6.jpg",
    "/assets/pool/album_5_p7.jpg",
    "/assets/pool/album_5_p8.jpg",
    "/assets/pool/album_5_p9.jpg",
    "/assets/pool/album_5_p10.jpg"
  ],
    description: "Kemeriahan perayaan Dies Natalis sekolah dengan sorotan pertunjukan seni, karnaval, dan ekspresi kebersamaan.",
    photoCount: 130,
    gphotosUrl: "https://photos.app.goo.gl/BqP4yXZiaRYW7YUG6",
    year: "2025",
    location: "SMK Telkom Malang"
  },
  {
    id: 6,
    slug: "photoshoot-dc-specta",
    title: "Photoshoot DC Specta",
    category: "Portrait & Fashion",
    filter: "portrait",
    cover: "/assets/albums/album_6.jpg",
    photos: [
    "/assets/pool/album_6_p1.jpg",
    "/assets/pool/album_6_p2.jpg",
    "/assets/pool/album_6_p3.jpg",
    "/assets/pool/album_6_p4.jpg",
    "/assets/pool/album_6_p5.jpg",
    "/assets/pool/album_6_p6.jpg",
    "/assets/pool/album_6_p7.jpg",
    "/assets/pool/album_6_p8.jpg",
    "/assets/pool/album_6_p9.jpg",
    "/assets/pool/album_6_p10.jpg"
  ],
    description: "Sesi foto konsep busana tari dan portrait formal tim DC Specta dengan komposisi studio dan pencahayaan presisi.",
    photoCount: 87,
    gphotosUrl: "https://photos.app.goo.gl/dmcv3DTeSTWFVhmZ7",
    year: "2025",
    location: "Studio Malang"
  },
  {
    id: 7,
    slug: "kickoff-mic-2026",
    title: "Kickoff MIC 2026",
    category: "Corporate & Tech",
    filter: "tech",
    cover: "/assets/albums/album_7.jpg",
    photos: [
    "/assets/pool/album_7_p1.jpg",
    "/assets/pool/album_7_p2.jpg",
    "/assets/pool/album_7_p3.jpg",
    "/assets/pool/album_7_p4.jpg",
    "/assets/pool/album_7_p5.jpg",
    "/assets/pool/album_7_p6.jpg",
    "/assets/pool/album_7_p7.jpg",
    "/assets/pool/album_7_p8.jpg",
    "/assets/pool/album_7_p9.jpg",
    "/assets/pool/album_7_p10.jpg"
  ],
    description: "Opening ceremony dan sesi peresmian seremonial Kickoff MIC 2026 dengan tamu undangan korporat dan inovator.",
    photoCount: 156,
    gphotosUrl: "https://photos.app.goo.gl/xFqPjQbmd7SNy3EA8",
    year: "2026",
    location: "Convention Hall Malang"
  },
  {
    id: 8,
    slug: "awarding-meo-2026",
    title: "Awarding MEO 2026",
    category: "Ceremony & Award",
    filter: "grad",
    cover: "/assets/albums/album_8.jpg",
    photos: [
    "/assets/pool/album_8_p1.jpg",
    "/assets/pool/album_8_p2.jpg",
    "/assets/pool/album_8_p3.jpg",
    "/assets/pool/album_8_p4.jpg",
    "/assets/pool/album_8_p5.jpg",
    "/assets/pool/album_8_p6.jpg",
    "/assets/pool/album_8_p7.jpg",
    "/assets/pool/album_8_p8.jpg",
    "/assets/pool/album_8_p9.jpg",
    "/assets/pool/album_8_p10.jpg"
  ],
    description: "Malam penganugerahan dan apresiasi prestasi gemilang Awarding MEO 2026 bagi para talenta berprestasi.",
    photoCount: 177,
    gphotosUrl: "https://photos.app.goo.gl/74Sxxw7zohtmefU28",
    year: "2026",
    location: "Grand Ballroom Malang"
  },
  {
    id: 9,
    slug: "wisuda-tk-permata-bunda",
    title: "Wisuda TK Permata Bunda",
    category: "Graduation",
    filter: "grad",
    cover: "/assets/albums/album_9.jpg",
    photos: [
    "/assets/pool/album_9_p1.jpg",
    "/assets/pool/album_9_p2.jpg",
    "/assets/pool/album_9_p3.jpg",
    "/assets/pool/album_9_p4.jpg",
    "/assets/pool/album_9_p5.jpg",
    "/assets/pool/album_9_p6.jpg",
    "/assets/pool/album_9_p7.jpg",
    "/assets/pool/album_9_p8.jpg",
    "/assets/pool/album_9_p9.jpg",
    "/assets/pool/album_9_p10.jpg"
  ],
    description: "Momen penuh senyum, tawa riang, dan kebanggaan orang tua pada prosesi kelulusan wisuda TK Permata Bunda.",
    photoCount: 275,
    gphotosUrl: "https://photos.app.goo.gl/FKD2Nqjh395BbdhQA",
    year: "2026",
    location: "Malang"
  },
  {
    id: 10,
    slug: "wisuda-tahfidz-rutaba",
    title: "Wisuda Tahfidz RUTABA",
    category: "Graduation & Religious",
    filter: "grad",
    cover: "/assets/albums/album_10.jpg",
    photos: [
    "/assets/pool/album_10_p1.jpg",
    "/assets/pool/album_10_p2.jpg",
    "/assets/pool/album_10_p3.jpg",
    "/assets/pool/album_10_p4.jpg",
    "/assets/pool/album_10_p5.jpg",
    "/assets/pool/album_10_p6.jpg",
    "/assets/pool/album_10_p7.jpg",
    "/assets/pool/album_10_p8.jpg",
    "/assets/pool/album_10_p9.jpg",
    "/assets/pool/album_10_p10.jpg"
  ],
    description: "Prosesi sakral wisuda kelulusan tahfidz hafalan Al-Qur'an santri Rumah Tahfidz Balita (RUTABA).",
    photoCount: 180,
    gphotosUrl: "https://photos.app.goo.gl/JX12VVLvCYNCxc4KA",
    year: "2026",
    location: "Malang"
  },
  {
    id: 11,
    slug: "olimawisa-2026-day-1",
    title: "Olimawisa 2026 Day - 1",
    category: "Sports & Competition",
    filter: "sports",
    cover: "/assets/albums/album_11.jpg",
    photos: [
    "/assets/pool/album_11_p1.jpg",
    "/assets/pool/album_11_p2.jpg",
    "/assets/pool/album_11_p3.jpg",
    "/assets/pool/album_11_p4.jpg",
    "/assets/pool/album_11_p5.jpg",
    "/assets/pool/album_11_p6.jpg",
    "/assets/pool/album_11_p7.jpg",
    "/assets/pool/album_11_p8.jpg",
    "/assets/pool/album_11_p9.jpg",
    "/assets/pool/album_11_p10.jpg"
  ],
    description: "Aksi penuh kecepatan, persaingan sengit, dan sportivitas tinggi pada hari pertama kompetisi olahraga Olimawisa.",
    photoCount: 177,
    gphotosUrl: "https://photos.app.goo.gl/ddbwThFUSyZ4keYF6",
    year: "2026",
    location: "Gor Pertandingan Malang"
  },
  {
    id: 12,
    slug: "olimawisa-2026-day-2",
    title: "Olimawisa 2026 Day - 2",
    category: "Sports & Competition",
    filter: "sports",
    cover: "/assets/albums/album_12.jpg",
    photos: [
    "/assets/pool/album_12_p1.jpg",
    "/assets/pool/album_12_p2.jpg",
    "/assets/pool/album_12_p3.jpg",
    "/assets/pool/album_12_p4.jpg",
    "/assets/pool/album_12_p5.jpg",
    "/assets/pool/album_12_p6.jpg",
    "/assets/pool/album_12_p7.jpg",
    "/assets/pool/album_12_p8.jpg",
    "/assets/pool/album_12_p9.jpg",
    "/assets/pool/album_12_p10.jpg"
  ],
    description: "Pertarungan babak final dan selebrasi juara para atlet muda berbakat pada hari kedua Olimawisa.",
    photoCount: 225,
    gphotosUrl: "https://photos.app.goo.gl/VXfE6uKrZEdDXP3U6",
    year: "2026",
    location: "Gor Pertandingan Malang"
  },
  {
    id: 13,
    slug: "specta-show-2026",
    title: "Specta Show 2026",
    category: "Stage & Concert",
    filter: "event",
    cover: "/assets/albums/album_13.jpg",
    photos: [
    "/assets/pool/album_13_p1.jpg",
    "/assets/pool/album_13_p2.jpg",
    "/assets/pool/album_13_p3.jpg",
    "/assets/pool/album_13_p4.jpg",
    "/assets/pool/album_13_p5.jpg",
    "/assets/pool/album_13_p6.jpg",
    "/assets/pool/album_13_p7.jpg",
    "/assets/pool/album_13_p8.jpg",
    "/assets/pool/album_13_p9.jpg",
    "/assets/pool/album_13_p10.jpg"
  ],
    description: "Atraksi panggung megah, tata lampu spektakuler, dan konser musikal Specta Show 2026.",
    photoCount: 274,
    gphotosUrl: "https://photos.app.goo.gl/4cKHXyYJSyLyERGj7",
    year: "2026",
    location: "Amfiteater Malang"
  },
  {
    id: 14,
    slug: "fun-run-2026",
    title: "Fun Run 2026",
    category: "Community & Sports",
    filter: "sports",
    cover: "/assets/albums/album_14.jpg",
    photos: [
    "/assets/pool/album_14_p1.jpg",
    "/assets/pool/album_14_p2.jpg",
    "/assets/pool/album_14_p3.jpg",
    "/assets/pool/album_14_p4.jpg",
    "/assets/pool/album_14_p5.jpg",
    "/assets/pool/album_14_p6.jpg",
    "/assets/pool/album_14_p7.jpg",
    "/assets/pool/album_14_p8.jpg",
    "/assets/pool/album_14_p9.jpg",
    "/assets/pool/album_14_p10.jpg"
  ],
    description: "Lautan ribuan pelari menyusuri rute pagi kota dalam gelaran Fun Run 2026 yang penuh keceriaan dan energi positif.",
    photoCount: 264,
    gphotosUrl: "https://photos.app.goo.gl/qcwnHzaNRY5n2pgz5",
    year: "2026",
    location: "Jalan Utama Kota Malang"
  }
];
