import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Dna, FileText, Layers, Microscope, ShieldCheck, Sparkles, TestTube } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { imgMaterialLab } from '../data/content';
import type { PageId } from '../types';

interface MaterialPageProps {
  onNavigate: (page: PageId) => void;
}

export const MaterialPage: React.FC<MaterialPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'network' | 'particles' | 'composite'>('composite');

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-10 md:py-16 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 mb-4">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
                MATERIAL ARCHITECTURE // SPEC-001
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#10251B] leading-[1.08] mb-3">
              MEET THE MATERIAL.
            </h1>
            <p className="text-xl sm:text-2xl text-[#2F7D4A] font-semibold mb-4">
              A composite grown through biology.
            </p>
            <p className="text-base sm:text-lg text-[#10251B]/80 leading-relaxed">
              MYCOPOT uses <span className="font-semibold text-[#10251B]">Pleurotus ostreatus</span> (oyster mushroom) mycelium and hardwood sawdust as its primary material system. By leveraging biological growth, we consolidate loose agricultural residues into rigid, functional structures without synthetic glues.
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Visual: Mycelium Network → Wood Particles → Composite Structure */}
      <section className="py-16 md:py-20 bg-[#F7F9F6] border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="MICROSCOPIC CONSOLIDATION"
            title="THE TRI-PHASE MATERIAL MATRIX"
            description="How fungal hyphae branch across cellular cavities in lignocellulosic particles, transforming separate phases into a cohesive structural composite."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visual Representation & Microscope Macro */}
            <div className="lg:col-span-7 bg-[#10251B] rounded-2xl border border-[#2F7D4A]/30 overflow-hidden relative shadow-md flex flex-col justify-between">
              <div className="relative aspect-16/10 w-full overflow-hidden">
                <img
                  src={imgMaterialLab}
                  alt="Microscopic view of Pleurotus ostreatus mycelium and sawdust composite"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10251B] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[#10251B]/80 backdrop-blur-xs border border-white/20 text-white font-mono text-xs px-3 py-1 rounded-md">
                  MICROGRAPH SPECIMEN // P. ostreatus × Sawdust
                </div>
              </div>

              <div className="p-6 text-white relative z-10 space-y-2">
                <div className="flex items-center gap-2 text-[#8DBF73] text-xs font-mono">
                  <Microscope className="w-4 h-4" />
                  <span>Scanning Visualization: Dense vegetative hyphae colonization</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-mono">
                  The white fungal hyphae thread through wood pores, producing natural chitin-rich cell walls that act as a mechanical adhesive across wood fibers.
                </p>
              </div>
            </div>

            {/* Interactive Phase Architecture */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div
                onClick={() => setActiveTab('network')}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeTab === 'network'
                    ? 'bg-white border-[#2F7D4A] shadow-md ring-2 ring-[#2F7D4A]/10'
                    : 'bg-white/70 border-[#10251B]/10 hover:border-[#2F7D4A]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#2F7D4A] uppercase">
                    PHASE 01 // BINDER
                  </span>
                  <Dna className="w-4 h-4 text-[#2F7D4A]" />
                </div>
                <h4 className="font-extrabold uppercase text-base text-[#10251B] mb-1">
                  Mycelium Network
                </h4>
                <p className="text-xs text-[#10251B]/75 leading-relaxed">
                  Millions of micro-tubular fungal cells (hyphae) self-assemble into a high-tensile three-dimensional web.
                </p>
              </div>

              <div
                onClick={() => setActiveTab('particles')}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeTab === 'particles'
                    ? 'bg-white border-[#2F7D4A] shadow-md ring-2 ring-[#2F7D4A]/10'
                    : 'bg-white/70 border-[#10251B]/10 hover:border-[#2F7D4A]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#2F7D4A] uppercase">
                    PHASE 02 // SUBSTRATE
                  </span>
                  <Layers className="w-4 h-4 text-[#2F7D4A]" />
                </div>
                <h4 className="font-extrabold uppercase text-base text-[#10251B] mb-1">
                  Wood Sawdust Particles
                </h4>
                <p className="text-xs text-[#10251B]/75 leading-relaxed">
                  Lignocellulose matrix providing bulk volume, compressive rigidity, and nutrient feedstock for colonization.
                </p>
              </div>

              <div
                onClick={() => setActiveTab('composite')}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeTab === 'composite'
                    ? 'bg-white border-[#2F7D4A] shadow-md ring-2 ring-[#2F7D4A]/10'
                    : 'bg-white/70 border-[#10251B]/10 hover:border-[#2F7D4A]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#2F7D4A] uppercase">
                    PHASE 03 // RESULT
                  </span>
                  <Sparkles className="w-4 h-4 text-[#2F7D4A]" />
                </div>
                <h4 className="font-extrabold uppercase text-base text-[#10251B] mb-1">
                  Consolidated Composite
                </h4>
                <p className="text-xs text-[#10251B]/75 leading-relaxed">
                  A hardened, lightweight, shock-absorbing biological solid that can be molded into pots and decomposes in soil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 In-Depth Material Science Sections: A, B, C, D */}
      <section className="py-20 md:py-28 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* A. MYCELIUM */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-[#10251B]/10">
            <div className="md:col-span-4">
              <span className="text-xs font-mono font-bold text-[#2F7D4A] uppercase tracking-wider block mb-1">
                SECTION A
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#10251B]">
                MYCELIUM
              </h3>
              <p className="text-xs font-mono text-[#10251B]/60 mt-1">
                Role: Biological Binding Component
              </p>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-[#10251B]/80 leading-relaxed">
              <p>
                Mycelium is the vegetative body of fungi, consisting of a mass of branching, thread-like hyphae. In the MYCOPOT material system, we isolate and propagate clean strains of <span className="font-semibold text-[#10251B]">Pleurotus ostreatus</span> (oyster mushroom), chosen for its rapid growth kinetics, robust colonization across wood substrates, and safe non-pathogenic nature.
              </p>
              <p>
                As the hyphae grow, they digest external lignocellulosic nutrients by secreting extracellular enzymes, while mechanically intertwining through microscopic void spaces. The cell walls of mycelium contain chitin and beta-glucans — natural biopolymers that provide elasticity, structural cohesion, and natural fungal water-repellency.
              </p>
            </div>
          </div>

          {/* B. SAWDUST */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-[#10251B]/10">
            <div className="md:col-span-4">
              <span className="text-xs font-mono font-bold text-[#2F7D4A] uppercase tracking-wider block mb-1">
                SECTION B
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#10251B]">
                SAWDUST
              </h3>
              <p className="text-xs font-mono text-[#10251B]/60 mt-1">
                Role: Main Lignocellulosic Substrate
              </p>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-[#10251B]/80 leading-relaxed">
              <p>
                Sawdust is an abundant secondary byproduct generated by wood processing industries, timber mills, and carpentry shops in Indonesia. Left unmanaged, timber residues are often disposed of via open-air incineration or landfilling, generating particulate pollution and greenhouse gas emissions.
              </p>
              <p>
                In MYCOPOT, sawdust serves as the structural scaffolding and primary carbon source. The complex molecular architecture of wood — consisting of cellulose, hemicellulose, and lignin — imparts compressive strength and structural density to the composite once bonded by mycelium.
              </p>
            </div>
          </div>

          {/* C. MYCELIUM COMPOSITE */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-[#10251B]/10">
            <div className="md:col-span-4">
              <span className="text-xs font-mono font-bold text-[#2F7D4A] uppercase tracking-wider block mb-1">
                SECTION C
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#10251B]">
                MYCELIUM COMPOSITE
              </h3>
              <p className="text-xs font-mono text-[#10251B]/60 mt-1">
                Consolidated Material Structure
              </p>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-[#10251B]/80 leading-relaxed">
              <p>
                The resulting material is not an adhesive mixture; it is a bio-fabricated cellular composite. The biological self-assembly process occurs inside custom-shaped negative molds over 7 to 10 days, allowing the pot geometry to form with minimal external energy input.
              </p>
              <p>
                Once colonization is complete, gentle thermal treatment (heat drying at 65°C–75°C) stops fungal activity permanently. The resulting composite possesses a warm, tactile stone-and-fiber surface with microscopic air permeability that benefits plant root oxygenation.
              </p>
            </div>
          </div>

          {/* D. MATERIAL DEVELOPMENT */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-mono font-bold text-[#2F7D4A] uppercase tracking-wider block mb-1">
                SECTION D
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#10251B]">
                MATERIAL DEVELOPMENT
              </h3>
              <p className="text-xs font-mono text-[#10251B]/60 mt-1">
                Current Areas of Active R&D
              </p>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-[#10251B]/80 leading-relaxed">
              <p>
                As an early-stage biomaterials startup originating from Universitas Jambi, MYCOPOT continues to conduct iterative laboratory investigations to optimize key performance parameters:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Formulation & sawdust fiber grading',
                  'Composite bulk density & structural strength',
                  'Precision mold draft angles & aeration ports',
                  'Moisture resistance & natural bio-sealants',
                  'Soil biodegradation rates under tropical climate',
                  'Batch-to-batch dimensional consistency',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F7F9F6] border border-[#10251B]/10 text-xs font-mono text-[#10251B] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D4A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D CTA Banner */}
      <section className="py-16 bg-[#10251B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#8DBF73] uppercase font-bold">
              EXPLORE OUR LABORATORY PROTOCOLS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-1">
              Dive deeper into our Research & Development program.
            </h3>
          </div>
          <button
            onClick={() => onNavigate('rd')}
            className="px-6 py-3 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span>View R&D Matrix</span>
            <ArrowRight className="w-4 h-4 text-[#8DBF73]" />
          </button>
        </div>
      </section>
    </div>
  );
};
