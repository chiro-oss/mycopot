import React from 'react';
import { ArrowRight, ArrowUpRight, Check, Dna, Layers, Leaf, Sparkles, Sprout } from 'lucide-react';
import { MycopotLogo } from '../components/MycopotLogo';
import { MyceliumCanvas } from '../components/MyceliumCanvas';
import { SectionHeading } from '../components/SectionHeading';
import { MaterialProcessFlow } from '../components/MaterialProcessFlow';
import { CircularSystemDiagram } from '../components/CircularSystemDiagram';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, WHY_MYCOPOT } from '../data/content';
import type { PageId, ProductItem } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: ProductItem) => void;
  onRequestCustom: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onRequestCustom,
}) => {
  return (
    <div className="w-full flex flex-col">
      {/* ==================================================
          5. HERO SECTION
          Two-column desktop layout.
          LEFT:
          Eyebrow: BIOLOGICAL MATERIALS
          Headline: “GROW WITH BIOLOGICAL MATERIALS.”
          Supporting: “MYCOPOT develops biodegradable plant pots from mycelium and sawdust — transforming biological growth and wood waste into functional materials.”
          Buttons: “Explore MYCOPOT” / “Discover Our Material”
          RIGHT:
          Display the attached MYCOPOT logo prominently with subtle abstract mycelium network
          and technical labels:
          - MYCELIUM // BIOLOGICAL BINDER
          - SAWDUST // WASTE-DERIVED SUBSTRATE
          - BIOMATERIAL // FUNCTIONAL COMPOSITE
      ================================================== */}
      <section className="relative w-full pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#F7F9F6] border-b border-[#10251B]/10">
        {/* Abstract subtle mycelium network canvas background */}
        <MyceliumCanvas density={45} className="opacity-70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typography & Intent */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/10 border border-[#2F7D4A]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D4A] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#2F7D4A] uppercase">
                  BIOLOGICAL MATERIALS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] uppercase text-[#10251B]">
                GROW WITH
                <br />
                <span className="text-[#2F7D4A]">BIOLOGICAL</span> MATERIALS.
              </h1>

              <p className="text-base sm:text-lg text-[#10251B]/80 leading-relaxed max-w-xl font-normal">
                MYCOPOT develops biodegradable plant pots from mycelium and sawdust — transforming
                biological growth and wood waste into functional materials.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 rounded-xl bg-[#10251B] hover:bg-[#1b3d2c] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
                >
                  <span>Explore MYCOPOT</span>
                  <ArrowRight className="w-4 h-4 text-[#8DBF73]" />
                </button>

                <button
                  onClick={() => onNavigate('material')}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#F7F9F6] text-[#10251B] border border-[#10251B]/20 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
                >
                  <span>Discover Our Material</span>
                  <ArrowUpRight className="w-4 h-4 text-[#2F7D4A]" />
                </button>
              </div>

              {/* Research Footnote / Status */}
              <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[#10251B]/60 border-t border-[#10251B]/10">
                <span>Organism: Pleurotus ostreatus</span>
                <span>•</span>
                <span>Substrate: Wood Sawdust Residue</span>
              </div>
            </div>

            {/* Right Column: Hero Visual with MYCOPOT Logo & Scientific Tech Labels */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-white/70 backdrop-blur-xs border border-[#10251B]/15 p-8 sm:p-12 flex items-center justify-center shadow-sm">
                {/* Tech grid overlay */}
                <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none rounded-3xl" />

                {/* Concentric subtle circular alignment rings */}
                <div className="absolute inset-8 rounded-full border border-[#2F7D4A]/10 pointer-events-none" />
                <div className="absolute inset-16 rounded-full border border-dashed border-[#10251B]/10 pointer-events-none" />

                {/* Central Brand Identity Presentation */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <MycopotLogo variant="stacked" markSize={104} showSub={true} />
                </div>

                {/* Technical-Style Biomaterial Interface Labels */}
                {/* 1. Top Right: MYCELIUM */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-lg bg-white/90 border border-[#10251B]/10 shadow-xs text-left max-w-[170px] z-20">
                  <div className="text-[9px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D4A]" />
                    MYCELIUM
                  </div>
                  <div className="text-[10px] font-mono text-[#10251B] font-semibold leading-tight mt-0.5">
                    BIOLOGICAL BINDER
                  </div>
                </div>

                {/* 2. Bottom Left: SAWDUST */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 p-2.5 rounded-lg bg-white/90 border border-[#10251B]/10 shadow-xs text-left max-w-[170px] z-20">
                  <div className="text-[9px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D4A]" />
                    SAWDUST
                  </div>
                  <div className="text-[10px] font-mono text-[#10251B] font-semibold leading-tight mt-0.5">
                    WASTE-DERIVED SUBSTRATE
                  </div>
                </div>

                {/* 3. Bottom Right: BIOMATERIAL */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 p-2.5 rounded-lg bg-[#10251B] text-white border border-[#2F7D4A]/30 shadow-xs text-left max-w-[170px] z-20">
                  <div className="text-[9px] font-mono font-bold tracking-widest text-[#8DBF73] uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8DBF73]" />
                    BIOMATERIAL
                  </div>
                  <div className="text-[10px] font-mono text-white font-semibold leading-tight mt-0.5">
                    FUNCTIONAL COMPOSITE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          6. HOME — MATERIAL INTRODUCTION
          “FROM BIOLOGICAL GROWTH TO FUNCTIONAL MATERIAL.”
          “MYCOPOT combines Pleurotus ostreatus mycelium with sawdust to form a biological composite material that can be shaped into plant pots.”
          Process: SAWDUST → SUBSTRATE → MYCELIUM → BIOLOGICAL GROWTH → MYCELIUM COMPOSITE → MYCOPOT
      ================================================== */}
      <section className="py-20 md:py-28 bg-[#F7F9F6] border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="BIO-COMPOSITE SYNTHESIS"
            title="FROM BIOLOGICAL GROWTH TO FUNCTIONAL MATERIAL."
            description="MYCOPOT combines Pleurotus ostreatus mycelium with sawdust to form a biological composite material that can be shaped into plant pots."
            badge="BIO-SPEC: 01"
          />

          <MaterialProcessFlow />
        </div>
      </section>

      {/* ==================================================
          7. HOME — WHY MYCOPOT
          Title: “WHY MYCOPOT?”
          4 minimal feature blocks:
          01 BIOLOGICAL
          02 WASTE-DERIVED
          03 BIODEGRADABLE
          04 DIRECT PLANTING
      ================================================== */}
      <section className="py-20 md:py-28 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CORE DIFFERENTIATION"
            title="WHY MYCOPOT?"
            description="Our material system replaces fossil-fuel synthetic polymers with biological self-assembly, engineered for functional horticulture and organic circularity."
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
          8. HOME — PRODUCTS
          Title: “DESIGNED FOR PLANTS. ENGINEERED AS MATERIAL.”
          Display four products: Mini, Medium, Large, Custom
      ================================================== */}
      <section className="py-20 md:py-28 bg-[#F7F9F6] border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="PRODUCT PORTFOLIO"
              title="DESIGNED FOR PLANTS. ENGINEERED AS MATERIAL."
              description="A calibrated lineup of biodegradable pots engineered for seedling propagation, indoor botanicals, and bespoke event geometries."
              className="mb-0"
            />
            <button
              onClick={() => onNavigate('products')}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F7F9F6] text-[#10251B] border border-[#10251B]/20 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 self-start md:self-auto"
            >
              <span>View Full Catalogue</span>
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
          9. HOME — BIOLOGICAL PROCESS
          Title: “GROWN THROUGH A BIOLOGICAL PROCESS.”
          6 stages timeline
      ================================================== */}
      <section className="py-20 md:py-28 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="CONTROLLED CULTIVATION"
              title="GROWN THROUGH A BIOLOGICAL PROCESS."
              description="From sterile inoculation to convective thermal stabilization, every pot develops through a 10–14 day controlled biological schedule."
              className="mb-0"
            />
            <button
              onClick={() => onNavigate('process')}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-[#F7F9F6] hover:bg-white text-[#10251B] border border-[#10251B]/20 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 self-start md:self-auto"
            >
              <span>Detailed Lab Protocol</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2F7D4A]" />
            </button>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* ==================================================
          10. HOME — CIRCULAR MATERIAL SYSTEM
          Title: “TURNING WASTE INTO MATERIAL.”
          Supporting: “MYCOPOT explores how biological growth can transform a low-value wood-processing residue into a functional material.”
      ================================================== */}
      <section className="py-20 md:py-28 bg-[#F7F9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CLOSED-LOOP BIO-ECONOMY"
            title="TURNING WASTE INTO MATERIAL."
            description="MYCOPOT explores how biological growth can transform a low-value wood-processing residue into a functional material."
          />

          <CircularSystemDiagram />
        </div>
      </section>
    </div>
  );
};
