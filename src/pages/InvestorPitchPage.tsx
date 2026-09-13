import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronRight,
  Coins,
  Compass,
  DollarSign,
  Download,
  ExternalLink,
  Eye,
  FileSpreadsheet,
  Globe2,
  Layers,
  Leaf,
  Maximize2,
  PieChart,
  Presentation,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  XCircle,
  Zap,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { RoiImpactCalculator } from '../components/RoiImpactCalculator';
import { TeamCard } from '../components/TeamCard';
import {
  COMPETITOR_BENCHMARK,
  FINANCIAL_FORECASTS,
  MARKET_SIZE,
  TRACTION_STATS,
  UNIT_ECONOMICS,
  USE_OF_FUNDS,
} from '../data/investorData';
import { TEAM_MEMBERS } from '../data/content';
import type { Language, PageId } from '../types';

interface InvestorPitchPageProps {
  onNavigate: (page: PageId) => void;
  lang?: Language;
  onOpenPitchDeck: () => void;
  onNavigateContactWithNote?: (note: string) => void;
}

export const InvestorPitchPage: React.FC<InvestorPitchPageProps> = ({
  onNavigate,
  lang = 'id',
  onOpenPitchDeck,
  onNavigateContactWithNote,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'market' | 'financials' | 'benchmark' | 'traction'>('overview');
  const [selectedSku, setSelectedSku] = useState<string>('MEDIUM');

  const isId = lang === 'id';
  const currentUnitEcon = UNIT_ECONOMICS.find((u) => u.sku === selectedSku) || UNIT_ECONOMICS[1];

  const handleInquireFunding = () => {
    if (onNavigateContactWithNote) {
      onNavigateContactWithNote('Inquiry Investor / Juri Lomba: Diskusi proposal kemitraan bisnis dan seed funding MYCOPOT (Rp 150M).');
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* ==================================================
          1. HERO HEADER: INVESTOR & COMPETITION HUB
      ================================================== */}
      <section className="relative py-16 md:py-24 bg-[#10251B] text-white border-b border-[#2F7D4A]/30 overflow-hidden">
        {/* Subtle grid and circular bio rings */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2F7D4A]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#2F7D4A]/20 border border-[#8DBF73]/30">
              <span className="w-2 h-2 rounded-full bg-[#8DBF73] animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#8DBF73] uppercase">
                {isId ? 'BUSINESS COMPETITION & INVESTOR SUITE' : 'BUSINESS COMPETITION & INVESTOR SUITE'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
              {isId ? (
                <>
                  MEMBANGUN INDUSTRI POT
                  <br />
                  <span className="text-[#8DBF73]">BIOMATERIAL SIRKULAR.</span>
                </>
              ) : (
                <>
                  SCALING CIRCULAR
                  <br />
                  <span className="text-[#8DBF73]">BIOMATERIAL POTS.</span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-xl text-white/80 leading-relaxed font-normal max-w-3xl">
              {isId
                ? 'Proposal bisnis komersialisasi MYCOPOT: solusi pengganti 350 juta polybag plastik sekali pakai di Indonesia melalui teknologi bio-komposit limbah serbuk kayu dan miselium Pleurotus ostreatus.'
                : 'Commercial scale-up proposal for MYCOPOT: replacing 350 million single-use plastic polybags in Indonesia with circular bio-composite mycelium containers.'}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenPitchDeck}
                className="px-6 py-3.5 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2.5 shadow-md hover:shadow-lg"
              >
                <Presentation className="w-4 h-4 text-[#8DBF73]" />
                <span>{isId ? 'Buka Pitch Deck Interaktif (8 Slide)' : 'Open Interactive Pitch Deck (8 Slides)'}</span>
                <Maximize2 className="w-3.5 h-3.5 text-white/70" />
              </button>

              <button
                onClick={handleInquireFunding}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
              >
                <Coins className="w-4 h-4 text-[#8DBF73]" />
                <span>{isId ? 'Ajukan Diskusi Seed Funding' : 'Inquire for Seed Investment'}</span>
                <ArrowRight className="w-4 h-4 text-white/70" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 text-xs font-mono">
              <div>
                <div className="text-white/50 text-[10px] uppercase">{isId ? 'Target Pendanaan' : 'Seed Ask'}</div>
                <div className="text-lg font-bold text-white mt-0.5">Rp 150 Juta</div>
              </div>
              <div>
                <div className="text-white/50 text-[10px] uppercase">{isId ? 'Rata-rata Gross Margin' : 'Gross Margin'}</div>
                <div className="text-lg font-bold text-[#8DBF73] mt-0.5">64.2%</div>
              </div>
              <div>
                <div className="text-white/50 text-[10px] uppercase">{isId ? 'Target Break-Even' : 'Break-Even Target'}</div>
                <div className="text-lg font-bold text-white mt-0.5">{isId ? 'Bulan ke-6' : 'Month 6'}</div>
              </div>
              <div>
                <div className="text-white/50 text-[10px] uppercase">{isId ? 'Status Validasi' : 'Traction'}</div>
                <div className="text-lg font-bold text-emerald-400 mt-0.5">500+ Pot Diuji</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. NAV TABS FOR INVESTOR CONTENT
      ================================================== */}
      <section className="sticky top-[60px] z-30 bg-white/95 backdrop-blur-sm border-b border-[#10251B]/10 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {[
              { id: 'overview', label: isId ? 'Ringkasan Eksekutif' : 'Executive Overview', icon: Sparkles },
              { id: 'market', label: isId ? 'Ukuran Pasar (TAM/SAM)' : 'Market Size (TAM/SAM)', icon: Globe2 },
              { id: 'financials', label: isId ? 'Unit Economics & Finansial' : 'Financials & Unit Econ', icon: BarChart3 },
              { id: 'benchmark', label: isId ? 'Matriks Kompetitor' : 'Competitive Matrix', icon: Award },
              { id: 'traction', label: isId ? 'Traksi & Alokasi Dana' : 'Traction & Ask', icon: Target },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wide transition-all flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-[#10251B] text-white shadow-xs'
                      : 'text-[#10251B]/70 hover:text-[#10251B] hover:bg-[#10251B]/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#8DBF73]' : 'text-[#2F7D4A]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={onOpenPitchDeck}
            className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#2F7D4A]/10 hover:bg-[#2F7D4A]/20 text-[#2F7D4A] text-xs font-mono font-bold tracking-wide transition-colors shrink-0"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>{isId ? 'Slide Presentasi' : 'Pitch Slides'}</span>
          </button>
        </div>
      </section>

      {/* ==================================================
          3. TAB 1: EXECUTIVE OVERVIEW (PROBLEM & SOLUTION)
      ================================================== */}
      {(activeTab === 'overview' || activeTab === 'traction') && (
        <section className="py-16 md:py-24 bg-[#F7F9F6] border-b border-[#10251B]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* The Problem vs The Solution Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Problem Column */}
              <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-rose-200 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-[11px] font-mono font-bold tracking-widest uppercase">
                    <XCircle className="w-3.5 h-3.5 text-rose-600" />
                    <span>{isId ? 'MASALAH KRITIS (THE PROBLEM)' : 'THE CRITICAL PROBLEM'}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#10251B]">
                    {isId ? '350 Juta Polybag Plastik & Kerusakan Akar Bibit' : '350M Plastic Polybags & Root Transplant Trauma'}
                  </h3>

                  <div className="space-y-3 text-sm text-[#10251B]/85 leading-relaxed pt-2">
                    <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100 flex items-start gap-3">
                      <span className="font-bold text-rose-700 font-mono text-sm">01</span>
                      <p>
                        <strong>Mortalitas Bibit 15–25%:</strong> Pembibit harus menyobek polybag plastik, mematahkan serabut akar halus (transplant shock) dan menyebabkan kematian bibit pasca-tanam.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100 flex items-start gap-3">
                      <span className="font-bold text-rose-700 font-mono text-sm">02</span>
                      <p>
                        <strong>Polusi Mikroplastik 450 Tahun:</strong> Polybag berbahan minyak bumi menumpuk di tanah perkebunan, mencemari air tanah dan sulit didaur ulang karena kotor bercampur tanah.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100 flex items-start gap-3">
                      <span className="font-bold text-rose-700 font-mono text-sm">03</span>
                      <p>
                        <strong>Pemborosan Biaya Tenaga Kerja:</strong> Waktu kerja buruh tani terbuang untuk proses melepas, mengumpulkan, dan membakar sisa limbah polybag.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-100 text-xs font-mono text-rose-800">
                  Kerugian Nasional: Puluhan miliar Rupiah akibat kematian bibit perkebunan & florikultura.
                </div>
              </div>

              {/* Solution Column */}
              <div className="lg:col-span-6 p-8 rounded-3xl bg-[#10251B] text-white border border-[#2F7D4A]/40 shadow-md flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/20 text-[#8DBF73] border border-[#2F7D4A]/40 text-[11px] font-mono font-bold tracking-widest uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8DBF73]" />
                    <span>{isId ? 'SOLUSI INOVATIF (THE SOLUTION)' : 'THE BIOTECH SOLUTION'}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                    {isId ? 'MYCOPOT: Pot Bio-Komposit Tanam Langsung' : 'MYCOPOT: Direct-Planting Bio-Composite Vessel'}
                  </h3>

                  <div className="space-y-3 text-sm text-white/90 leading-relaxed pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                      <span className="font-bold text-[#8DBF73] font-mono text-sm">01</span>
                      <p>
                        <strong>Zero Transplant Shock (Tanam Langsung):</strong> Masukkan bibit bersama potnya langsung ke lubang tanam. Akar menembus pori-pori dinding tanpa hambatan sedikitpun.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                      <span className="font-bold text-[#8DBF73] font-mono text-sm">02</span>
                      <p>
                        <strong>100% Terurai Jadi Kompos (30–90 Hari):</strong> Matriks hifa Pleurotus ostreatus & serbuk kayu melebur menjadi hara organik tanah tanpa meninggalkan mikroplastik.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                      <span className="font-bold text-[#8DBF73] font-mono text-sm">03</span>
                      <p>
                        <strong>Sirkularitas Limbah Kayu:</strong> Mengintersepsi limbah industri serbuk kayu Jambi yang biasanya dibakar menjadi komoditas bernilai tambah tinggi.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#8DBF73]">
                  Validasi Agronomis: 0% trauma akar pada uji semai nursery cabai, tomat & sukulen.
                </div>
              </div>
            </div>

            {/* Embedded Live Simulator */}
            <div>
              <RoiImpactCalculator lang={lang} onNavigateContact={onNavigateContactWithNote} />
            </div>
          </div>
        </section>
      )}

      {/* ==================================================
          4. TAB 2: MARKET SIZE (TAM, SAM, SOM)
      ================================================== */}
      {(activeTab === 'overview' || activeTab === 'market') && (
        <section className="py-16 md:py-24 bg-white border-b border-[#10251B]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="MARKET OPPORTUNITY & SIZING"
              title={isId ? 'POTENSI PASAR AGRIKULTUR & NURSERY' : 'MARKET SIZING & EXPANSION POTENTIAL'}
              description={
                isId
                  ? 'Kebutuhan wadah semai di Indonesia sangat masif didorong regulasi pembatasan plastik di 100+ kota/kabupaten dan tren urban gardening.'
                  : 'Massive addressable demand driven by national anti-plastic bans in 100+ Indonesian cities and the booming horticultural sector.'
              }
            />

            {/* TAM / SAM / SOM 3-Card Visual Hierarchy */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* TAM */}
              <div className="p-8 rounded-3xl bg-[#F7F9F6] border border-[#10251B]/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2F7D4A] block mb-2">
                    {MARKET_SIZE.tam.label}
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#10251B] tracking-tight mb-2">
                    {MARKET_SIZE.tam.value}
                  </div>
                  <div className="text-xs font-mono text-[#2F7D4A] font-bold mb-4">
                    {MARKET_SIZE.tam.volume}
                  </div>
                  <p className="text-xs sm:text-sm text-[#10251B]/80 leading-relaxed">
                    {isId ? MARKET_SIZE.tam.description : MARKET_SIZE.tam.descriptionEn}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#10251B]/10 text-[11px] font-mono text-[#10251B]/60">
                  Data: Sensus Pertanian BPS & Asosiasi Florikultura Indonesia
                </div>
              </div>

              {/* SAM */}
              <div className="p-8 rounded-3xl bg-[#F7F9F6] border border-[#2F7D4A]/30 flex flex-col justify-between shadow-2xs">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2F7D4A] block mb-2">
                    {MARKET_SIZE.sam.label}
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#2F7D4A] tracking-tight mb-2">
                    {MARKET_SIZE.sam.value}
                  </div>
                  <div className="text-xs font-mono text-[#2F7D4A] font-bold mb-4">
                    {MARKET_SIZE.sam.volume}
                  </div>
                  <p className="text-xs sm:text-sm text-[#10251B]/80 leading-relaxed">
                    {isId ? MARKET_SIZE.sam.description : MARKET_SIZE.sam.descriptionEn}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#10251B]/10 text-[11px] font-mono text-[#10251B]/60">
                  Fokus: Konsumen premium, floris boutique & reboisasi bersertifikat
                </div>
              </div>

              {/* SOM */}
              <div className="p-8 rounded-3xl bg-[#10251B] text-white border border-[#2F7D4A]/50 flex flex-col justify-between shadow-md">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8DBF73] block mb-2">
                    {MARKET_SIZE.som.label}
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                    {MARKET_SIZE.som.value}
                  </div>
                  <div className="text-xs font-mono text-[#8DBF73] font-bold mb-4">
                    {MARKET_SIZE.som.volume}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {isId ? MARKET_SIZE.som.description : MARKET_SIZE.som.descriptionEn}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 text-[11px] font-mono text-[#8DBF73]">
                  Sasaran: 5.7% SAM dalam 36 bulan awal operasional
                </div>
              </div>
            </div>

            {/* Business Model & Revenue Streams */}
            <div className="mt-12 p-8 rounded-3xl bg-[#F7F9F6] border border-[#10251B]/10">
              <h4 className="text-xl font-extrabold uppercase tracking-tight text-[#10251B] mb-6">
                {isId ? '4 Aliran Pendapatan Utama (Revenue Streams)' : '4 Core Revenue Streams'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-5 rounded-2xl bg-white border border-[#10251B]/10">
                  <span className="text-xs font-mono font-bold text-[#2F7D4A]">STREAM 01 (60%)</span>
                  <h5 className="font-extrabold text-[#10251B] text-base mt-1 mb-2">B2B Nursery Supply</h5>
                  <p className="text-xs text-[#10251B]/75 leading-relaxed">
                    Kontrak pasokan volume grosir bulanan untuk pembibitan tanaman hias, buah, dan komoditas perkebunan.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#10251B]/10">
                  <span className="text-xs font-mono font-bold text-[#2F7D4A]">STREAM 02 (25%)</span>
                  <h5 className="font-extrabold text-[#10251B] text-base mt-1 mb-2">Corporate Eco-Gifting</h5>
                  <p className="text-xs text-[#10251B]/75 leading-relaxed">
                    Pot kustom geometris deboss logo untuk cinderamata pernikahan mewah dan merchandise ESG perusahaan.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#10251B]/10">
                  <span className="text-xs font-mono font-bold text-[#2F7D4A]">STREAM 03 (10%)</span>
                  <h5 className="font-extrabold text-[#10251B] text-base mt-1 mb-2">B2C Retail & Gardening</h5>
                  <p className="text-xs text-[#10251B]/75 leading-relaxed">
                    Penjualan kit semai mandiri (pot + benih herba + panduan tanam) via e-commerce dan toko tanaman hias.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#10251B]/10">
                  <span className="text-xs font-mono font-bold text-[#2F7D4A]">STREAM 04 (5%)</span>
                  <h5 className="font-extrabold text-[#10251B] text-base mt-1 mb-2">Packaging Licensing</h5>
                  <p className="text-xs text-[#10251B]/75 leading-relaxed">
                    Desain cetakan kustom untuk bantalan sudut pelindung bio-packaging ramah lingkungan pengganti styrofoam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================================================
          5. TAB 3: UNIT ECONOMICS & FINANCIAL PROJECTIONS
      ================================================== */}
      {(activeTab === 'overview' || activeTab === 'financials') && (
        <section className="py-16 md:py-24 bg-[#F7F9F6] border-b border-[#10251B]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FINANCIAL RIGOR & UNIT MARGINS"
              title={isId ? 'STRUKTUR HPP & PROYEKSI FINANSIAL' : 'UNIT ECONOMICS & 3-YEAR PROJECTIONS'}
              description={
                isId
                  ? 'Memanfaatkan serbuk gergaji berbiaya sangat rendah sebagai bahan baku utama, MYCOPOT menghasilkan margin kotor di atas 62% di setiap format ukuran.'
                  : 'Low-cost intercepted timber waste enables superior gross margins of 62-66% across standard and custom SKUs.'
              }
            />

            {/* Interactive Unit Economics SKU Selector */}
            <div className="p-8 rounded-3xl bg-white border border-[#10251B]/15 shadow-sm mb-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#10251B]/10">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#2F7D4A] uppercase block mb-1">
                    BREAKDOWN HARGA POKOK PRODUKSI (HPP)
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold uppercase text-[#10251B]">
                    {currentUnitEcon.name}
                  </h4>
                </div>

                {/* SKU Buttons */}
                <div className="flex items-center gap-2 bg-[#F7F9F6] p-1.5 rounded-2xl border border-[#10251B]/10">
                  {UNIT_ECONOMICS.map((u) => (
                    <button
                      key={u.sku}
                      onClick={() => setSelectedSku(u.sku)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                        selectedSku === u.sku
                          ? 'bg-[#10251B] text-white shadow-xs'
                          : 'text-[#10251B]/70 hover:text-[#10251B] hover:bg-white'
                      }`}
                    >
                      {u.sku}
                    </button>
                  ))}
                </div>
              </div>

              {/* COGS Breakdown Visual */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs font-mono font-bold text-[#10251B]/80 uppercase">
                    Komponen Biaya Produksi per Unit:
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F9F6]">
                      <span className="text-[#10251B]/70">Limbah Serbuk Kayu (Substrat)</span>
                      <span className="font-bold text-[#10251B]">Rp {currentUnitEcon.cogs.sawdustSubstrate.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F9F6]">
                      <span className="text-[#10251B]/70">Bibit Miselium (Pleurotus ostreatus)</span>
                      <span className="font-bold text-[#10251B]">Rp {currentUnitEcon.cogs.myceliumSpawn.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F9F6]">
                      <span className="text-[#10251B]/70">Nutrisi Organik & Energi Sterilisasi / Baking</span>
                      <span className="font-bold text-[#10251B]">Rp {currentUnitEcon.cogs.nutrientsAndEnergy.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F9F6]">
                      <span className="text-[#10251B]/70">Tenaga Kerja Manufaktur & Cetakan</span>
                      <span className="font-bold text-[#10251B]">Rp {currentUnitEcon.cogs.laborAndTooling.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F9F6]">
                      <span className="text-[#10251B]/70">Kemasan Ramah Lingkungan & Label Bio</span>
                      <span className="font-bold text-[#10251B]">Rp {currentUnitEcon.cogs.packagingLabel.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                </div>

                {/* Margins Summary Card */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#10251B] text-white border border-[#2F7D4A]/30 space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-white/60">HARGA JUAL SATUAN:</span>
                    <span className="text-xl font-bold text-white">Rp {currentUnitEcon.sellingPrice.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-white/60">TOTAL HPP (COGS):</span>
                    <span className="text-base font-bold text-rose-300">Rp {currentUnitEcon.cogs.total.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                    <div>
                      <div className="text-[10px] font-mono text-[#8DBF73] uppercase">LABA KOTOR (GROSS PROFIT):</div>
                      <div className="text-2xl font-extrabold text-emerald-400 mt-0.5">
                        Rp {currentUnitEcon.grossProfit.toLocaleString('id-ID')}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-white/60 uppercase">GROSS MARGIN:</div>
                      <div className="text-2xl font-extrabold text-white mt-0.5">
                        {currentUnitEcon.marginPercent}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3-Year Financial Forecasts */}
            <div>
              <h4 className="text-xl font-extrabold uppercase tracking-tight text-[#10251B] mb-6">
                {isId ? 'Proyeksi Finansial 3 Tahun (Tahun 1 – Tahun 3)' : '3-Year Growth Projections (Y1 – Y3)'}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {FINANCIAL_FORECASTS.map((f, idx) => (
                  <div
                    key={f.year}
                    className={`p-7 rounded-3xl border flex flex-col justify-between ${
                      idx === 0
                        ? 'bg-white border-[#10251B]/15 shadow-xs'
                        : idx === 1
                        ? 'bg-white border-[#2F7D4A]/40 shadow-sm'
                        : 'bg-[#10251B] text-white border-[#2F7D4A]/50 shadow-md'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-mono font-bold uppercase tracking-wider ${idx === 2 ? 'text-[#8DBF73]' : 'text-[#2F7D4A]'}`}>
                          {f.year}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${idx === 2 ? 'bg-white/10 text-white' : 'bg-[#10251B]/5 text-[#10251B]'}`}>
                          {f.unitsSold.toLocaleString('id-ID')} unit
                        </span>
                      </div>

                      <div className="space-y-1 mb-6">
                        <div className={`text-xs font-mono uppercase ${idx === 2 ? 'text-white/60' : 'text-[#10251B]/60'}`}>
                          Total Pendapatan (Revenue):
                        </div>
                        <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${idx === 2 ? 'text-white' : 'text-[#10251B]'}`}>
                          Rp {(f.revenue / 1000000).toLocaleString('id-ID')} Juta
                        </div>
                      </div>

                      <div className={`space-y-2 text-xs font-mono border-t pt-4 ${idx === 2 ? 'border-white/10' : 'border-[#10251B]/10'}`}>
                        <div className="flex justify-between">
                          <span className={idx === 2 ? 'text-white/60' : 'text-[#10251B]/70'}>HPP (COGS):</span>
                          <span>Rp {(f.cogs / 1000000).toLocaleString('id-ID')} Jt</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={idx === 2 ? 'text-white/60' : 'text-[#10251B]/70'}>Laba Kotor:</span>
                          <span className="font-bold text-emerald-500">Rp {(f.grossProfit / 1000000).toLocaleString('id-ID')} Jt</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={idx === 2 ? 'text-white/60' : 'text-[#10251B]/70'}>OPEX:</span>
                          <span>Rp {(f.opex / 1000000).toLocaleString('id-ID')} Jt</span>
                        </div>
                      </div>
                    </div>

                    <div className={`pt-4 mt-6 border-t ${idx === 2 ? 'border-white/10' : 'border-[#10251B]/10'} flex items-center justify-between`}>
                      <div>
                        <div className={`text-[10px] font-mono uppercase ${idx === 2 ? 'text-[#8DBF73]' : 'text-[#2F7D4A]'}`}>
                          Laba Bersih (Net):
                        </div>
                        <div className={`text-lg font-extrabold ${idx === 2 ? 'text-white' : 'text-[#10251B]'}`}>
                          Rp {(f.netProfit / 1000000).toLocaleString('id-ID')} Jt
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold ${idx === 2 ? 'bg-[#2F7D4A] text-white' : 'bg-[#2F7D4A]/10 text-[#2F7D4A]'}`}>
                        {f.netMargin}% Net
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Break-even point statement */}
              <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-950">
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold">Analisis Titik Impas (Break-Even Point):</span>{' '}
                    BEP diproyeksikan tercapai pada <strong>Bulan ke-6</strong> dengan rata-rata penjualan 2.500 unit pot per bulan.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================================================
          6. TAB 4: COMPETITOR BENCHMARK MATRIX
      ================================================== */}
      {(activeTab === 'overview' || activeTab === 'benchmark') && (
        <section className="py-16 md:py-24 bg-white border-b border-[#10251B]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="COMPETITIVE ADVANTAGE MATRIX"
              title={isId ? 'MATRIKS PERBANDINGAN KOMPETITIF' : 'COMPETITOR BENCHMARK MATRIX'}
              description={
                isId
                  ? 'Bagaimana performa MYCOPOT jika dibandingkan dengan polybag plastik konvensional, pot gambut, sabut kelapa, dan bioplastik PLA.'
                  : 'Rigorous benchmark of MYCOPOT versus petroleum polybags, peat pots, coir fiber, and PLA industrial plastics.'
              }
            />

            {/* Responsive Table */}
            <div className="overflow-x-auto rounded-3xl border border-[#10251B]/15 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#10251B] text-white text-xs font-mono uppercase tracking-wider">
                    <th className="p-4 sm:p-5 border-b border-white/10 w-1/4">Parameter Evaluasi</th>
                    <th className="p-4 sm:p-5 border-b border-white/10 bg-[#2F7D4A] text-white font-extrabold w-1/4">
                      MYCOPOT (Bio-Komposit)
                    </th>
                    <th className="p-4 sm:p-5 border-b border-white/10">Polybag Plastik</th>
                    <th className="p-4 sm:p-5 border-b border-white/10">Pot Gambut (Peat)</th>
                    <th className="p-4 sm:p-5 border-b border-white/10">Sabut Kelapa (Coir)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#10251B]/10 text-xs sm:text-sm">
                  {COMPETITOR_BENCHMARK.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F7F9F6]'}>
                      <td className="p-4 sm:p-5 font-bold text-[#10251B]">{row.feature}</td>
                      <td className="p-4 sm:p-5 font-bold bg-[#2F7D4A]/10 text-[#10251B] border-x border-[#2F7D4A]/20">
                        <div className="flex items-center gap-1.5 text-[#2F7D4A]">
                          <Check className="w-4 h-4 shrink-0" />
                          <span>{row.mycopot.text}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-[#10251B]/80">{row.plasticPolybag.text}</td>
                      <td className="p-4 sm:p-5 text-[#10251B]/80">{row.peatPot.text}</td>
                      <td className="p-4 sm:p-5 text-[#10251B]/80">{row.cocoCoir.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between text-xs font-mono text-[#10251B]/60">
              <span>*Evaluasi divalidasi berdasarkan uji empiris dan literatur biomaterial komparatif.</span>
              <span className="font-bold text-[#2F7D4A]">Keunggulan Mutlak: Tanam Langsung + Bahan Baku Limbah Lokal</span>
            </div>
          </div>
        </section>
      )}

      {/* ==================================================
          7. TAB 5: TRACTION & CAPITAL ASK
      ================================================== */}
      {(activeTab === 'overview' || activeTab === 'traction') && (
        <section className="py-16 md:py-24 bg-[#F7F9F6] border-b border-[#10251B]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Traction Cards Grid */}
            <div>
              <SectionHeading
                eyebrow="VALIDATION & PILOT EVIDENCE"
                title={isId ? 'TRAKSI & BUKTI VALIDASI PILOT' : 'TRACTION & PILOT VALIDATION'}
                description={
                  isId
                    ? 'Hasil pengujian lapangan bersama pembibitan hortikultura lokal membuktikan efektivitas material komposit hifa.'
                    : 'Field testing results and initial nursery partner trials demonstrating zero transplant mortality.'
                }
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {TRACTION_STATS.map((tr, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-[#10251B]/10 hover:border-[#2F7D4A]/40 transition-all shadow-2xs"
                  >
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#2F7D4A] tracking-tight block">
                      {tr.metric}
                    </span>
                    <h5 className="text-sm font-bold uppercase tracking-tight text-[#10251B] mt-1 mb-2">
                      {isId ? tr.label : tr.labelEn}
                    </h5>
                    <p className="text-xs text-[#10251B]/70 leading-relaxed">{tr.subtext}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use of Funds / Seed Allocation */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#10251B]/15 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[#10251B]/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/10 text-[#2F7D4A] text-[11px] font-mono font-bold tracking-widest uppercase mb-2">
                    <Coins className="w-3.5 h-3.5" />
                    <span>{isId ? 'KEBUTUHAN PENDANAAN / GRANT' : 'USE OF FUNDS ALLOCATION'}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#10251B]">
                    {isId ? 'Alokasi Pendanaan Rp 150.000.000' : 'Rp 150,000,000 Seed / Grant Deployment'}
                  </h3>
                </div>

                <div className="px-4 py-2 rounded-xl bg-[#10251B] text-white text-xs font-mono font-bold uppercase">
                  Target Utilisasi: 12 Bulan
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                {USE_OF_FUNDS.map((fund, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F7F9F6] border border-[#10251B]/10 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#2F7D4A]">
                        {fund.percentage}% ALOKASI DANA
                      </span>
                      <span className="text-sm font-extrabold text-[#10251B] font-mono">
                        {fund.amount}
                      </span>
                    </div>

                    <h5 className="font-extrabold text-base text-[#10251B] uppercase tracking-tight">
                      {isId ? fund.allocation : fund.allocationEn}
                    </h5>

                    <p className="text-xs text-[#10251B]/75 leading-relaxed">{fund.details}</p>

                    {/* Mini Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-[#10251B]/10 overflow-hidden">
                      <div
                        className="h-full bg-[#2F7D4A] rounded-full"
                        style={{ width: `${fund.percentage * 2.5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Section */}
            <div>
              <SectionHeading
                eyebrow="MULTIDISCIPLINARY FOUNDING TEAM"
                title={isId ? 'TIM PENDIRI & DUKUNGAN UNIVERSITAS' : 'FOUNDERS & INSTITUTIONAL BACKING'}
                description={
                  isId
                    ? 'Dipimpin oleh mahasiswa peneliti dan inovator multidisiplin Universitas Jambi dengan kompetensi biologi, operasional manufaktur, strategi bisnis, dan finance.'
                    : 'A dedicated founding team from Universitas Jambi integrating biotechnology, production engineering, and finance.'
                }
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {TEAM_MEMBERS.map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================================================
          8. BOTTOM CTA: ENGAGE FOR INVESTMENT / COMPETITION
      ================================================== */}
      <section className="py-16 md:py-20 bg-[#10251B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-[#8DBF73] uppercase font-bold">
              INVESTOR RELATIONS & PARTNERSHIP
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              Tertarik Berinvestasi atau Mengundang MYCOPOT Berkompetisi?
            </h3>
            <p className="text-sm text-white/70 max-w-xl">
              Hubungi langsung Chief Executive Officer dan tim periset Universitas Jambi untuk sesi pitching, demo sampel fisik, dan penelaahan proposal lengkap.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={onOpenPitchDeck}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Presentation className="w-4 h-4 text-[#8DBF73]" />
              <span>Lihat Slide Deck</span>
            </button>

            <button
              onClick={handleInquireFunding}
              className="px-6 py-3.5 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
            >
              <span>Jadwalkan Diskusi Pitching</span>
              <ArrowRight className="w-4 h-4 text-[#8DBF73]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
