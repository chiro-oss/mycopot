import React from 'react';
import { ArrowRight, Beaker, CheckCircle2, Dna, FlaskConical, Layers, Microscope, ShieldAlert, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ResearchSection } from '../components/ResearchSection';
import type { PageId } from '../types';

interface RDPageProps {
  onNavigate: (page: PageId) => void;
}

export const RDPage: React.FC<RDPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 mb-4">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
                SCIENTIFIC R&D DIRECTORY // UNIVERSITAS JAMBI
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#10251B] leading-[1.08] mb-4">
              WE DON'T JUST MAKE POTS.
              <br />
              <span className="text-[#2F7D4A]">WE DEVELOP MATERIALS.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#2F7D4A] font-semibold mb-6">
              MYCOPOT approaches product development through biological materials research,
              formulation and iterative testing.
            </p>
            <p className="text-base sm:text-lg text-[#10251B]/80 leading-relaxed">
              Our research team investigates the bio-fabrication parameters of fungal hyphae growth,
              sawdust particle interaction, and structural optimization. We focus on empirical
              iteration to ensure commercial viability and true environmental compatibility.
            </p>
          </div>
        </div>
      </section>

      {/* Main R&D Programs & Research Mindset */}
      <section className="py-16 md:py-24 bg-[#F7F9F6] border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResearchSection />
        </div>
      </section>

      {/* Research Philosophy / Scientific Integrity Note */}
      <section className="py-16 md:py-20 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-[#F7F9F6] border border-[#10251B]/10 flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 flex items-center justify-center text-[#2F7D4A] shrink-0">
              <Microscope className="w-6 h-6" />
            </div>
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono font-bold text-[#2F7D4A] tracking-wider uppercase">
                RESEARCH ETHOS & SCIENTIFIC INTEGRITY
              </span>
              <h3 className="text-xl font-extrabold uppercase tracking-tight text-[#10251B]">
                Empirical Evidence Over Greenwashing
              </h3>
              <p className="text-xs sm:text-sm text-[#10251B]/80 leading-relaxed">
                As an early-stage biotechnology venture at Universitas Jambi, we do not claim synthetic
                certifications or exaggerated metrics before rigorous testing. Every material
                formulation is documented through trial batches, density checks, and field
                evaluations with local nurseries and agricultural specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Callout */}
      <section className="py-16 bg-[#10251B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#8DBF73] uppercase font-bold">
              ACADEMIC & INDUSTRIAL PARTNERSHIPS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-1">
              Interested in collaborating on mycelium materials research?
            </h3>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span>Initiate Research Inquiry</span>
            <ArrowRight className="w-4 h-4 text-[#8DBF73]" />
          </button>
        </div>
      </section>
    </div>
  );
};
