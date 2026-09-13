import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  Coins,
  Dna,
  Layers,
  Leaf,
  Maximize2,
  Presentation,
  ShieldCheck,
  Sparkles,
  Sprout,
  TrendingUp,
} from 'lucide-react';
import { MycopotLogo } from '../components/MycopotLogo';
import { MyceliumCanvas } from '../components/MyceliumCanvas';
import { SectionHeading } from '../components/SectionHeading';
import { MaterialProcessFlow } from '../components/MaterialProcessFlow';
import { CircularSystemDiagram } from '../components/CircularSystemDiagram';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ProductCard } from '../components/ProductCard';
import { DecompositionSimulator } from '../components/DecompositionSimulator';
import { RoiImpactCalculator } from '../components/RoiImpactCalculator';
import { PotConfigurator } from '../components/PotConfigurator';
import { PRODUCTS, WHY_MYCOPOT } from '../data/content';
import type { Language, PageId, ProductItem } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: ProductItem) => void;
  onRequestCustom: () => void;
  lang?: Language;
  onOpenPitchDeck?: () => void;
  onNavigateContactWithNote?: (note: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onRequestCustom,
  lang = 'id',
  onOpenPitchDeck,
  onNavigateContactWithNote,
}) => {
  const isId = lang === 'id';

  return (
    <div className="w-full flex flex-col">
      {/* ==================================================
          1. HERO SECTION: BIOLOGICAL MATERIALS & BUSINESS PITCH
      ================================================== */}
      <section className="relative w-full pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-[#F7F9F6] border-b border-[#10251B]/10">
        <MyceliumCanvas density={45} className="opacity-70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Competition & Investor Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/10 border border-[#2F7D4A]/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D4A] animate-pulse" />
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#2F7D4A] uppercase">
                    {isId ? 'INOVASI BIOMATERIAL • PKM / P2MW 2026' : 'BIOMATERIAL INNOVATION • COMPETITION SUITE'}
                  </span>
                </div>

                <button
                  onClick={() => onNavigate('investor')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10251B] text-[#8DBF73] text-[11px] font-mono font-bold tracking-wider hover:bg-[#1b3d2c] transition-colors shadow-2xs"
                >
                  <Coins className="w-3 h-3" />
                  <span>{isId ? 'PROPOSAL INVESTOR' : 'INVESTOR SUITE'}</span>
                  <ArrowUpRight className="w-3 h-3 text-white" />
                </button>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] uppercase text-[#10251B]">
                {isId ? (
                  <>
                    TUMBUH BERSAMA
                    <br />
                    <span className="text-[#2F7D4A]">BIOMATERIAL</span> SIRKULAR.
                  </>
                ) : (
                  <>
                    GROW WITH
                    <br />
                    <span className="text-[#2F7D4A]">BIOLOGICAL</span> MATERIALS.
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-[#10251B]/80 leading-relaxed max-w-xl font-normal">
                {isId
                  ? 'MYCOPOT merevolusi wadah semai tanaman: menggabungkan miselium jamur tiram dan limbah serbuk gergaji kayu menjadi pot bio-degradable tanam langsung tanpa risiko kematian akar bibit.'
                  : 'MYCOPOT transforms wood-processing sawdust and fungal mycelium into biodegradable direct-planting containers, eliminating nursery plastic mortality.'}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('investor')}
                  className="px-6 py-3.5 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
                >
                  <BarChart3 className="w-4 h-4 text-[#8DBF73]" />
                  <span>{isId ? 'Investor & Business Plan' : 'Investor Hub & Pitch'}</span>
                  <ArrowRight className="w-4 h-4 text-white/80" />
                </button>

                {onOpenPitchDeck && (
                  <button
                    onClick={onOpenPitchDeck}
                    className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#F7F9F6] text-[#10251B] border border-[#10251B]/20 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
                  >
                    <Presentation className="w-4 h-4 text-[#2F7D4A]" />
                    <span>{isId ? 'Slide Pitch Deck' : 'Pitch Deck Slides'}</span>
                  </button>
                )}

                <button
                  onClick={() => onNavigate('products')}
                  className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-[#10251B]/5 text-[#10251B] border border-[#10251B]/20 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <span>{isId ? 'Katalog Produk' : 'Products'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2F7D4A]" />
                </button>
              </div>

              {/* Key Validation Metrics Bar */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#10251B]/10 max-w-lg text-xs font-mono">
                <div>
                  <div className="text-[#10251B]/60 text-[10px] uppercase">{isId ? 'Waktu Urai Tanah' : 'Degradation'}</div>
                  <div className="text-base font-extrabold text-[#2F7D4A] mt-0.5">30–90 Hari</div>
                </div>
                <div>
                  <div className="text-[#10251B]/60 text-[10px] uppercase">{isId ? 'Mortalitas Akar' : 'Transplant Shock'}</div>
                  <div className="text-base font-extrabold text-[#2F7D4A] mt-0.5">0% (Langsung)</div>
                </div>
                <div>
                  <div className="text-[#10251B]/60 text-[10px] uppercase">{isId ? 'Margin Kotor B2B' : 'Gross Margin'}</div>
                  <div className="text-base font-extrabold text-[#2F7D4A] mt-0.5">64.2%</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Visual Identity */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white/80 backdrop-blur-xs border border-[#10251B]/15 p-8 sm:p-12 flex items-center justify-center shadow-sm">
                <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none rounded-3xl" />
                <div className="absolute inset-8 rounded-full border border-[#2F7D4A]/10 pointer-events-none" />
                <div className="absolute inset-16 rounded-full border border-dashed border-[#10251B]/10 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <MycopotLogo variant="stacked" markSize={110} showSub={true} />
                </div>

                {/* Tech Labels */}
                <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/95 border border-[#10251B]/10 shadow-xs text-left max-w-[170px] z-20">
                  <div className="text-[9px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D4A]" />
                    MYCELIUM
                  </div>
                  <div className="text-[10px] font-mono text-[#10251B] font-semibold leading-tight mt-0.5">
                    BIOLOGICAL BINDER
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-white/95 border border-[#10251B]/10 shadow-xs text-left max-w-[170px] z-20">
                  <div className="text-[9px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D4A]" />
                    SAWDUST
                  </div>
                  <div className="text-[10px] font-mono text-[#10251B] font-semibold leading-tight mt-0.5">
                    WASTE SUBSTRATE
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-[#10251B] text-white border border-[#2F7D4A]/30 shadow-xs text-left max-w-[170px] z-20">
                  <div className="text-[9px] font-mono font-bold tracking-widest text-[#8DBF73] uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8DBF73]" />
                    ZERO PLASTIC
                  </div>
                  <div className="text-[10px] font-mono text-white font-semibold leading-tight mt-0.5">
                    100% COMPOSTABLE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. INVESTOR PROPOSITION BANNER
      ================================================== */}
      <section className="bg-[#10251B] text-white py-6 border-b border-[#2F7D4A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2F7D4A]/20 text-[#8DBF73] border border-[#2F7D4A]/40 flex items-center justify-center shrink-0">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold tracking-wider text-[#8DBF73] uppercase">
                {isId ? 'DECK INVESTOR & BUSINESS COMPETITION' : 'PITCH DECK & COMPETITION SUITE'}
              </div>
              <div className="text-sm font-semibold text-white/90">
                {isId
                  ? 'Sedang membuka Seed Round Rp 150 Juta untuk otomatisasi mold chamber & perluasan kemitraan nursery.'
                  : 'Raising Rp 150M Seed Round to automate incubation chamber & expand commercial nursery pilots.'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onOpenPitchDeck && (
              <button
                onClick={onOpenPitchDeck}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase transition-colors"
              >
                {isId ? 'Buka Slide 8 Halaman' : 'View 8 Slides'}
              </button>
            )}
            <button
              onClick={() => onNavigate('investor')}
              className="px-4 py-2 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-mono font-bold uppercase transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>{isId ? 'Pelajari Prospektus' : 'View Full Pitch'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8DBF73]" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. INTERACTIVE TOOL 1: SOIL DECOMPOSITION SIMULATOR
      ================================================== */}
      <section className="py-16 md:py-24 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="BIOLOGICAL PERFORMANCE & CYCLE"
            title={isId ? 'SIMULASI KETAHANAN & PENGURAIAN TANAH' : 'SOIL ASSIMILATION & PERFORMANCE TEST'}
            description={
              isId
                ? 'Bandingkan bagaimana MYCOPOT terdegradasi secara biologi menjadi pupuk organik dalam 30–90 hari dibandingkan polybag plastik yang persisten 450 tahun.'
                : 'Interactive timeline simulation showing cellular assimilation of mycelium into soil humus versus petroleum polybag persistence.'
            }
          />

          <DecompositionSimulator lang={lang} />
        </div>
      </section>

      {/* ==================================================
          4. INTERACTIVE TOOL 2: NURSERY ROI & ESG CALCULATOR
      ================================================== */}
      <section className="py-16 md:py-24 bg-[#F7F9F6] border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="ECONOMIC SAVINGS & ESG IMPACT"
            title={isId ? 'KALKULATOR KEUNTUNGAN PEMBIBITAN' : 'NURSERY ROI & CARBON CALCULATOR'}
            description={
              isId
                ? 'Hitung potensi efisiensi biaya kematian bibit dan reduksi sampah plastik untuk skala usaha pembibitan Anda.'
                : 'Calculate direct financial savings from reduced transplant mortality and verifiable ESG carbon metric generation.'
            }
          />

          <RoiImpactCalculator lang={lang} onNavigateContact={onNavigateContactWithNote} />
        </div>
      </section>

      {/* ==================================================
          5. CORE DIFFERENTIATION: WHY MYCOPOT
      ================================================== */}
      <section className="py-16 md:py-24 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CORE DIFFERENTIATION"
            title={isId ? 'MENGAPA MEMILIH MYCOPOT?' : 'WHY MYCOPOT?'}
            description={
              isId
                ? 'Material bio-komposit kami menggantikan polimer sintetis berbahan fosil melalui self-assembly alami, dirancang khusus untuk efisiensi agrikultur modern.'
                : 'Our bio-composite replaces fossil polymers through natural fungal self-assembly, designed for modern high-yield horticulture.'
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_MYCOPOT.map((item) => (
              <div
                key={item.num}
                className="group p-6 sm:p-8 rounded-2xl bg-[#F7F9F6] border border-[#10251B]/10 hover:border-[#2F7D4A]/50 hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#2F7D4A] tracking-wider block mb-4">
                    {item.num}
                  </span>
                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-[#10251B] group-hover:text-[#2F7D4A] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#10251B]/90 leading-snug mb-3">
                    {item.summary}
                  </p>
                </div>
                <p className="text-xs text-[#10251B]/70 leading-relaxed pt-3 border-t border-[#10251B]/10">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          6. INTERACTIVE TOOL 3: POT CONFIGURATOR & B2B QUOTE
      ================================================== */}
      <section className="py-16 md:py-24 bg-[#F7F9F6] border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="BESPOKE BIOMATERIAL FORMING"
            title={isId ? 'KONFIGURASI POT & ESTIMASI BATCH' : 'INTERACTIVE POT CONFIGURATOR'}
            description={
              isId
                ? 'Simulasikan berbagai ukuran geometri, ketebalan dinding hifa berpori, deboss logo brand, dan hitung potongan harga grosir langsung.'
                : 'Test various pot dimensions, wall thicknesses, branded laser debossing, and live volume-tiered wholesale quotation.'
            }
          />

          <PotConfigurator lang={lang} onProceedToQuote={onNavigateContactWithNote} />
        </div>
      </section>

      {/* ==================================================
          7. PRODUCTS SHOWCASE
      ================================================== */}
      <section className="py-16 md:py-24 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="PRODUCT LINEUP"
              title={isId ? 'KATALOG PRODUK POT BIODEGRADABLE' : 'ENGINEERED PRODUCT LINEUP'}
              description={
                isId
                  ? 'Portofolio lengkap pot ramah lingkungan untuk pembibitan komersial, tanaman hias meja, hingga souvenir ramah lingkungan kustom.'
                  : 'Calibrated biodegradable pots engineered for seedling nurseries, urban horticulture, and custom sustainable merchandise.'
              }
              className="mb-0"
            />
            <button
              onClick={() => onNavigate('products')}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F7F9F6] text-[#10251B] border border-[#10251B]/20 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 self-start md:self-auto"
            >
              <span>{isId ? 'Lihat Semua Varian' : 'View Full Catalogue'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2F7D4A]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelect={onSelectProduct}
                onRequestCustom={onRequestCustom}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          8. CLOSED-LOOP BIO-ECONOMY
      ================================================== */}
      <section className="py-16 md:py-24 bg-[#F7F9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CLOSED-LOOP BIO-ECONOMY"
            title={isId ? 'MENGUBAH LIMBAH KAYU MENJADI SOLUSI' : 'TURNING WASTE INTO MATERIAL'}
            description={
              isId
                ? 'MYCOPOT mengalihkan berton-ton serbuk gergaji kayu dari pembakaran terbuka, mengikatnya dengan miselium, dan mengembalikannya ke tanah sebagai hara organik.'
                : 'MYCOPOT intercepts industrial timber sawdust from open burning, binds it with living fungi, and returns it to the earth as natural fertilizer.'
            }
          />

          <CircularSystemDiagram />
        </div>
      </section>
    </div>
  );
};
