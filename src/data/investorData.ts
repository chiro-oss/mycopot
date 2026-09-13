export interface FinancialYear {
  year: string;
  unitsSold: number;
  revenue: number; // in IDR
  cogs: number;
  grossProfit: number;
  opex: number;
  netProfit: number;
  grossMargin: number; // percentage
  netMargin: number;
}

export interface UnitEconomicItem {
  sku: string;
  name: string;
  sellingPrice: number;
  cogs: {
    sawdustSubstrate: number;
    myceliumSpawn: number;
    nutrientsAndEnergy: number;
    laborAndTooling: number;
    packagingLabel: number;
    total: number;
  };
  grossProfit: number;
  marginPercent: number;
}

export interface CompetitorComparison {
  feature: string;
  mycopot: { status: 'positive' | 'neutral' | 'negative'; text: string };
  plasticPolybag: { status: 'positive' | 'neutral' | 'negative'; text: string };
  peatPot: { status: 'positive' | 'neutral' | 'negative'; text: string };
  cocoCoir: { status: 'positive' | 'neutral' | 'negative'; text: string };
  plaBioplastic: { status: 'positive' | 'neutral' | 'negative'; text: string };
}

export interface PitchSlide {
  id: number;
  title: string;
  tagline: string;
  category: string;
  bullets: string[];
  metrics?: { label: string; value: string; highlight?: boolean }[];
  takeaway: string;
}

export const MARKET_SIZE = {
  tam: {
    value: 'Rp 1.8 Triliun',
    valueEn: 'Rp 1.8 Trillion (~$115M)',
    label: 'TAM (Total Addressable Market)',
    description: 'Total pasar wadah semai & polybag hortikultura komersial di Indonesia (perkebunan, florikultura, pembibitan kehutanan).',
    descriptionEn: 'Total commercial nursery, horticulture & forestry seedling container market in Indonesia.',
    volume: '350M+ polybag/tahun',
  },
  sam: {
    value: 'Rp 420 Miliar',
    valueEn: 'Rp 420 Billion (~$27M)',
    label: 'SAM (Serviceable Addressable Market)',
    description: 'Pembibitan tanaman hias premium, kebun hidroponik urban, dan program reboisasi bernilai tinggi di Sumatera & Jawa.',
    descriptionEn: 'Premium ornamental nurseries, urban agriculture & ESG reforestation initiatives in Sumatra & Java.',
    volume: '85M+ wadah ramah lingkungan',
  },
  som: {
    value: 'Rp 24 Miliar',
    valueEn: 'Rp 24 Billion (~$1.5M)',
    label: 'SOM (Serviceable Obtainable Market - 3 Tahun)',
    description: 'Target penetrasi 5.7% dari SAM: kluster pembibitan floris Jambi, Riau, Sumbar, serta pasar eco-souvenir Jabodetabek.',
    descriptionEn: 'Initial 3-year capture (5.7% SAM): regional nursery hubs in Jambi/Sumatra & corporate eco-gifting.',
    volume: '1.2M pot terdistribusi',
  },
};

export const UNIT_ECONOMICS: UnitEconomicItem[] = [
  {
    sku: 'MINI',
    name: 'MYCOPOT Mini (8–10 cm)',
    sellingPrice: 15000,
    cogs: {
      sawdustSubstrate: 800,
      myceliumSpawn: 1500,
      nutrientsAndEnergy: 900,
      laborAndTooling: 1200,
      packagingLabel: 600,
      total: 5000,
    },
    grossProfit: 10000,
    marginPercent: 66.7,
  },
  {
    sku: 'MEDIUM',
    name: 'MYCOPOT Medium (12–15 cm)',
    sellingPrice: 25000,
    cogs: {
      sawdustSubstrate: 1800,
      myceliumSpawn: 2800,
      nutrientsAndEnergy: 1700,
      laborAndTooling: 2000,
      packagingLabel: 900,
      total: 9200,
    },
    grossProfit: 15800,
    marginPercent: 63.2,
  },
  {
    sku: 'LARGE',
    name: 'MYCOPOT Large (18–20 cm)',
    sellingPrice: 40000,
    cogs: {
      sawdustSubstrate: 3200,
      myceliumSpawn: 4500,
      nutrientsAndEnergy: 2800,
      laborAndTooling: 3500,
      packagingLabel: 1200,
      total: 15200,
    },
    grossProfit: 24800,
    marginPercent: 62.0,
  },
  {
    sku: 'CUSTOM',
    name: 'MYCOPOT Custom / Hexagon Souvenir',
    sellingPrice: 35000,
    cogs: {
      sawdustSubstrate: 2200,
      myceliumSpawn: 3200,
      nutrientsAndEnergy: 2100,
      laborAndTooling: 3800,
      packagingLabel: 1500,
      total: 12800,
    },
    grossProfit: 22200,
    marginPercent: 63.4,
  },
];

export const FINANCIAL_FORECASTS: FinancialYear[] = [
  {
    year: 'Tahun 1 (Pilot & Validasi)',
    unitsSold: 28000,
    revenue: 560000000,
    cogs: 210000000,
    grossProfit: 350000000,
    opex: 240000000,
    netProfit: 110000000,
    grossMargin: 62.5,
    netMargin: 19.6,
  },
  {
    year: 'Tahun 2 (Skala Regional)',
    unitsSold: 115000,
    revenue: 2350000000,
    cogs: 840000000,
    grossProfit: 1510000000,
    opex: 620000000,
    netProfit: 890000000,
    grossMargin: 64.3,
    netMargin: 37.9,
  },
  {
    year: 'Tahun 3 (Ekspansi Nasional & B2B)',
    unitsSold: 380000,
    revenue: 7800000000,
    cogs: 2650000000,
    grossProfit: 5150000000,
    opex: 1750000000,
    netProfit: 3400000000,
    grossMargin: 66.0,
    netMargin: 43.6,
  },
];

export const COMPETITOR_BENCHMARK: CompetitorComparison[] = [
  {
    feature: 'Biodegradasi Alami di Tanah',
    mycopot: { status: 'positive', text: '30–90 Hari (Menjadi Kompos Humus)' },
    plasticPolybag: { status: 'negative', text: '400+ Tahun (Menjadi Mikroplastik)' },
    peatPot: { status: 'positive', text: '60–120 Hari (Bergantung Gambut)' },
    cocoCoir: { status: 'neutral', text: '6–12 Bulan (Serat Kasar Lambat Terurai)' },
    plaBioplastic: { status: 'negative', text: 'Perlu Fasilitas Kompos Industri (>60°C)' },
  },
  {
    feature: 'Tanam Langsung (Tanpa Lepas Pot)',
    mycopot: { status: 'positive', text: '100% Langsung (0% Transplant Shock)' },
    plasticPolybag: { status: 'negative', text: 'Harus Dikelupas (Resiko Akar Rusak 15-25%)' },
    peatPot: { status: 'positive', text: 'Bisa Ditanam Langsung' },
    cocoCoir: { status: 'neutral', text: 'Bisa, tapi akar lambat menembus sabut tebal' },
    plaBioplastic: { status: 'negative', text: 'Tidak Bisa Ditanam Langsung' },
  },
  {
    feature: 'Bahan Baku Sirkular / Daur Ulang',
    mycopot: { status: 'positive', text: 'Limbah Serbuk Gergaji Lokal + Miselium Alami' },
    plasticPolybag: { status: 'negative', text: 'Minyak Bumi / Petrokimia Sintetis' },
    peatPot: { status: 'negative', text: 'Lahan Gambut Alami (Merusak Ekosistem Rawa)' },
    cocoCoir: { status: 'neutral', text: 'Sabut Kelapa (Kandungan Garam Tinggi & Perlu Cuci)' },
    plaBioplastic: { status: 'neutral', text: 'Tepung Jagung (Berkompetisi dgn Pangan)' },
  },
  {
    feature: 'Embun / Aerasi Mikro Akar',
    mycopot: { status: 'positive', text: 'Sangat Baik (Matriks Hifa Berpori O2 Optimal)' },
    plasticPolybag: { status: 'negative', text: 'Sangat Buruk (Akar Melingkar / Root Circling)' },
    peatPot: { status: 'neutral', text: 'Cukup Baik' },
    cocoCoir: { status: 'positive', text: 'Baik' },
    plaBioplastic: { status: 'negative', text: 'Kedap Udara' },
  },
  {
    feature: 'Kekuatan Struktural Basah',
    mycopot: { status: 'positive', text: 'Tahan Siram 3–6 Bulan Tanpa Hancur' },
    plasticPolybag: { status: 'positive', text: 'Sangat Kuat' },
    peatPot: { status: 'negative', text: 'Cepat Lembek dan Berjamur Liar' },
    cocoCoir: { status: 'positive', text: 'Kuat' },
    plaBioplastic: { status: 'positive', text: 'Kuat' },
  },
  {
    feature: 'Jejak Karbon (Embodied Carbon)',
    mycopot: { status: 'positive', text: 'Karbon Negatif / Netral (Menyimpan Biomassa)' },
    plasticPolybag: { status: 'negative', text: 'Tinggi (Emisi Kilang Minyak)' },
    peatPot: { status: 'negative', text: 'Tinggi (Emisi Pelepasan Karbon Gambut)' },
    cocoCoir: { status: 'neutral', text: 'Sedang (Biaya Transportasi Logistik)' },
    plaBioplastic: { status: 'neutral', text: 'Sedang' },
  },
];

export const USE_OF_FUNDS = [
  {
    percentage: 40,
    allocation: 'Fasilitas Inkubasi & Cetakan Skala Produksi',
    allocationEn: 'Modular Incubation Chamber & Production Tooling',
    amount: 'Rp 60.000.000',
    details: 'Pembangunan ruang inkubasi semi-otomatis berkapasitas 8.000 pot/bulan, mesin sterilisasi uap dan cetakan presisi aluminium 3D.',
  },
  {
    percentage: 25,
    allocation: 'R&D, Standardisasi & Uji Sertifikasi Lab',
    allocationEn: 'R&D, Material Standardization & Certification',
    amount: 'Rp 37.500.000',
    details: 'Pengujian biodegradabilitas standar SNI/ISO, ketahanan kompresi, dan optimalisasi strain hifa Pleurotus ostreatus.',
  },
  {
    percentage: 20,
    allocation: 'Kemitraan B2B Nursery & Branding Komersial',
    allocationEn: 'B2B Nursery Partnerships & Commercial Branding',
    amount: 'Rp 30.000.000',
    details: 'Program pilot trial 10 pembibitan rekanan, pameran inovasi agrikultur, materi edukasi direct planting, dan kemasan ritel.',
  },
  {
    percentage: 15,
    allocation: 'Modal Kerja Operasional & Legalitas Usaha',
    allocationEn: 'Working Capital & Regulatory Formalities',
    amount: 'Rp 22.500.000',
    details: 'Pendaftaran HKI/Paten formulasi komposit biomaterial, legalitas PT Perorangan/CV, dan pengadaan stok awal bahan baku.',
  },
];

export const TRACTION_STATS = [
  {
    metric: '500+ Unit',
    label: 'Prototipe Telah Diuji',
    labelEn: 'Prototypes Fabricated & Tested',
    subtext: 'Uji ketahanan siram dan kekuatan kompresi struktural di lab.',
  },
  {
    metric: '3 Pembibitan',
    label: 'Mitra Pilot Trial di Jambi',
    labelEn: 'Nursery Pilot Partners in Jambi',
    subtext: 'Kolaborasi uji semai cabai, tomat, dan tanaman hias sukulen.',
  },
  {
    metric: '0% Trauma Akar',
    label: 'Transplant Shock Tereliminasi',
    labelEn: 'Zero Transplant Shock',
    subtext: 'Bibit ditanam langsung bersama pot tanpa mengganggu perakaran.',
  },
  {
    metric: '64.2%',
    label: 'Rata-rata Margin Kotor',
    labelEn: 'Average Gross Margin',
    subtext: 'Bahan baku limbah serbuk kayu lokal berbiaya sangat rendah.',
  },
  {
    metric: '30–60 Hari',
    label: 'Dekomposisi Tanah Alami',
    labelEn: 'Soil Biodegradation Window',
    subtext: 'Terurai menjadi unsur hara organik tanpa residu sintetis.',
  },
  {
    metric: 'SDG 12, 13 & 15',
    label: 'Kesesuaian Target ESG',
    labelEn: 'ESG Alignment',
    subtext: 'Konsumsi bertanggung jawab, aksi iklim, dan ekosistem darat.',
  },
];

export const PITCH_SLIDES: PitchSlide[] = [
  {
    id: 1,
    category: 'EXECUTIVE SUMMARY',
    title: 'MYCOPOT: Revolusi Wadah Tanaman Berbasis Biomaterial Miselium',
    tagline: 'Mengubah Limbah Serbuk Kayu & Jamur Menjadi Pot Ramah Lingkungan Siap Tanam',
    bullets: [
      'Startup biomaterial binaan Universitas Jambi yang memecahkan krisis 350 juta polybag plastik sekali pakai di Indonesia.',
      'Memadukan biologi (hifa Pleurotus ostreatus) dengan residu industri kayu lokal.',
      'Solusi Direct-Planting: ditanam langsung ke tanah tanpa membuka wadah, menyuburkan tanah saat terurai.',
    ],
    metrics: [
      { label: 'Bahan Baku', value: '100% Organik' },
      { label: 'Dekomposisi', value: '30–90 Hari' },
      { label: 'Gross Margin', value: '62–66%' },
    ],
    takeaway: 'Teknologi material hayati sirkular dengan keunggulan agronomis dan margin bisnis tinggi.',
  },
  {
    id: 2,
    category: 'THE PROBLEM',
    title: 'Ancaman Plastik di Sektor Hortikultura & Pembibitan',
    tagline: 'Polybag Plastik Murah di Awal, Mematikan Ekosistem dan Merugikan Pembibit',
    bullets: [
      '350+ Juta Polybag Plastik digunakan setiap tahun di perkebunan & pembibitan Indonesia dan berakhir di TPA atau dibakar.',
      'Transplant Shock & Kematian Bibit: 15–25% bibit mengalami kerusakan perakaran (root circling & trauma) saat polybag disobek.',
      'Biaya Tenaga Kerja Tinggi: Pembibit menghabiskan waktu signifikan untuk menyobek dan membuang plastik wadah satu per satu.',
      'Pencemaran Mikroplastik: Plastik polybag rapuh mencemari lahan pertanian produktif selama berabad-abad.',
    ],
    metrics: [
      { label: 'Polybag Terbuang/Tahun', value: '350M+', highlight: true },
      { label: 'Masa Urai Polybag', value: '450 Tahun' },
      { label: 'Mortalitas Transplantasi', value: '15–25%' },
    ],
    takeaway: 'Industri membutuhkan wadah tanaman organik yang bisa ditanam langsung tanpa menimbulkan sampah.',
  },
  {
    id: 3,
    category: 'THE SOLUTION',
    title: 'MYCOPOT: Pot Bio-Komposit Tanam Langsung (Direct Planting)',
    tagline: 'Miselium Jamur Tiram sebagai Perekat Biologis Alami Tanpa Bahan Kimia',
    bullets: [
      'Perekat Biologis Alami: Hifa jamur bertumbuh menembus serbuk kayu, merekatkan partikel secara kokoh tanpa resin plastik sintetis.',
      'Eliminasi Transplant Shock: Pot langsung dimasukkan ke lubang tanam; akar menembus dinding pot dengan mudah tanpa trauma.',
      'Nutrisi Alami Tanah: Saat terkubur, pot terurai menjadi bahan organik kaya nitrogen, kalium, dan humus mikoriza.',
      'Sirkularitas Total: Mengintersepsi limbah industri pengolahan kayu yang sebelumnya dibakar menimbulkan polusi udara.',
    ],
    metrics: [
      { label: 'Transplant Shock', value: '0%' },
      { label: 'Waktu Dekomposisi', value: '30–90 Hari' },
      { label: 'Ketahanan Siram', value: '3–6 Bulan' },
    ],
    takeaway: 'Pot ramah lingkungan yang tidak sekadar ramah bumi, tetapi meningkatkan laju pertumbuhan bibit tanaman.',
  },
  {
    id: 4,
    category: 'MARKET OPPORTUNITY',
    title: 'Potensi Pasar Agrikultur & Florikultura Berkelanjutan',
    tagline: 'Permintaan Tinggi dari Pembibitan Komersial, Tren Urban Gardening & ESG Korporasi',
    bullets: [
      'TAM Rp 1.8 Triliun: Total kebutuhan wadah semai di Indonesia mencakup perkebunan sawit, kehutanan, florikultura, dan hortikultura sayur.',
      'SAM Rp 420 Miliar: Segmen nursery premium, urban gardening Jabodetabek, dan proyek reboisasi ESG yang mensyaratkan zero-plastic.',
      'SOM Rp 24 Miliar: Sasaran 3 tahun pertama difokuskan pada jejaring pembibitan Sumatera (Jambi, Riau, Sumbar) dan pasar souvenir ramah lingkungan.',
      'Tren Regulasi: Larangan plastik sekali pakai di 100+ kota/kabupaten di Indonesia mendorong adopsi wadah organik.',
    ],
    metrics: [
      { label: 'TAM', value: 'Rp 1.8 T' },
      { label: 'SAM', value: 'Rp 420 M' },
      { label: 'SOM 3-Yr', value: 'Rp 24 M' },
    ],
    takeaway: 'Pasar masif dengan regulasi pro-lingkungan dan peralihan konsumen ke gaya hidup hijau.',
  },
  {
    id: 5,
    category: 'BUSINESS MODEL',
    title: 'Model Bisnis B2B, B2C & Lisensi Solusi Kustom',
    tagline: 'Aliran Pendapatan Beragam dengan Struktur Biaya Bahan Baku Sangat Murah',
    bullets: [
      'B2B Nursery Bulk Supply (60% Revenue): Kontrak pasokan rutin untuk pembibitan tanaman hias, buah, dan bibit sayuran komersial.',
      'Corporate Eco-Gifting & Event Souvenir (25% Revenue): Pot kustom geometris berlogo untuk cinderamata pernikahan mewah & merchandise korporasi hijau.',
      'B2C Urban Gardening Retail (10% Revenue): Penjualan paket komplit (pot + benih + media tanam) di marketplace dan toko floris.',
      'Licensing & Custom 3D Tooling (5% Revenue): Desain cetakan bio-komposit khusus untuk wadah pengemasan pelindung barang elektronik.',
    ],
    metrics: [
      { label: 'Harga Mini', value: 'Rp 15.000' },
      { label: 'Harga Medium', value: 'Rp 25.000' },
      { label: 'Rata-rata Margin', value: '64%' },
    ],
    takeaway: 'Pendapatan berulang dari B2B dikombinasikan dengan margin tinggi dari pesanan kustom korporat.',
  },
  {
    id: 6,
    category: 'COMPETITIVE ADVANTAGE',
    title: 'Mengapa MYCOPOT Unggul Dibanding Alternatif Lain',
    tagline: 'Performa Struktural Kuat, Tanam Langsung & Biaya Lokal yang Sangat Kompetitif',
    bullets: [
      'VS Polybag Plastik: MYCOPOT 100% terurai, zero mikroplastik, dan menghemat biaya tenaga kerja pencabutan bibit.',
      'VS Pot Gambut (Peat Pot): Gambut merusak lahan basah rawa dan rapuh berjamur; MYCOPOT memanfaatkan limbah gergaji tanpa merusak ekosistem.',
      'VS Sabut Kelapa (Coco Coir): Serat sabut butuh pencucian garam rumit dan susah ditembus akar; matriks hifa MYCOPOT berpori mikro oksigen ideal.',
      'VS Bioplastik PLA: PLA membutuhkan komposter industri suhu >60°C; MYCOPOT terurai di tanah kebun rumah biasa.',
    ],
    metrics: [
      { label: 'Bahan Baku Lokal', value: 'Tersedia Melimpah' },
      { label: 'Tanam Langsung', value: 'Didukung Penuh' },
      { label: 'Kompos Rumah', value: '100% Alami' },
    ],
    takeaway: 'Kombinasi terbaik antara integritas fisik saat disiram dan dekomposisi sempurna saat dikubur.',
  },
  {
    id: 7,
    category: 'FINANCIAL PROJECTIONS',
    title: 'Proyeksi Finansial & Target Titik Impas (Break-Even)',
    tagline: 'Skalabilitas Produksi Cepat dengan ROI Positif di Tahun Pertama',
    bullets: [
      'Tahun 1: Target penjualan 28.000 unit, Pendapatan Rp 560 Juta, Laba Bersih Rp 110 Juta (Net Margin 19.6%).',
      'Tahun 2: Target penjualan 115.000 unit, Pendapatan Rp 2.35 Miliar, Laba Bersih Rp 890 Juta (Net Margin 37.9%).',
      'Tahun 3: Target penjualan 380.000 unit, Pendapatan Rp 7.8 Miliar, Laba Bersih Rp 3.4 Miliar (Net Margin 43.6%).',
      'Titik Impas (BEP): Tercapai pada Bulan ke-6 dengan kapasitas produksi 2.500 unit/bulan.',
    ],
    metrics: [
      { label: 'Revenue Y1', value: 'Rp 560 Jt' },
      { label: 'Revenue Y2', value: 'Rp 2.35 M' },
      { label: 'Revenue Y3', value: 'Rp 7.8 M' },
    ],
    takeaway: 'Model bisnis sehat dengan perputaran modal cepat dan efisiensi biaya overhead tinggi.',
  },
  {
    id: 8,
    category: 'ASK & TEAM',
    title: 'Kebutuhan Pendanaan & Tim Pendiri Multidisiplin',
    tagline: 'Didukung Peneliti Universitas Jambi, Siap Mengakselerasi Produksi Komersial',
    bullets: [
      'Pendanaan yang Dibutuhkan: Rp 150.000.000 (Hibah / Seed Investment).',
      'Alokasi Dana: 40% Fasilitas Inkubasi & Cetakan Presisi, 25% Riset & Sertifikasi SNI/ISO, 20% Kemitraan Nursery B2B, 15% Modal Kerja.',
      'Tim Pendiri: Arief Surya Darma (CEO - Strategi & Bisnis), M. Ghaisan Alfirizki (COO - Manufaktur & Operasional), Anjeli Bismi Arsy (Finance), Fadila Rezki Desriani (R&D Biomaterial), Sovia Zulfiqa Melati (Marketing & PR), Airin Natasya Putri (Secretary).',
      'Dukungan Institusi: Didukung laboratorium bioteknologi dan inkubator inovasi Universitas Jambi.',
    ],
    metrics: [
      { label: 'Funding Ask', value: 'Rp 150 Jt' },
      { label: 'Target Produksi Y1', value: '8.000 pot/bln' },
      { label: 'Break-even', value: 'Bulan ke-6' },
    ],
    takeaway: 'Bergabunglah bersama MYCOPOT mendemokratisasi biomaterial sirkular masa depan Indonesia.',
  },
];
