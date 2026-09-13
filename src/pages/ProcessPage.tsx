import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Droplets, Thermometer, Beaker, ShieldCheck, Microscope } from 'lucide-react';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { SectionHeading } from '../components/SectionHeading';
import type { PageId } from '../types';

interface ProcessPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 mb-4">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
                BIOTECHNOLOGY PROTOCOL // LAB WORKFLOW
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#10251B] leading-[1.08] mb-4">
              THE 6-STAGE
              <br />
              <span className="text-[#2F7D4A]">BIOLOGICAL PROCESS.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#10251B]/80 leading-relaxed">
              Unlike conventional plastics stamped out of petrochemical furnaces, every MYCOPOT grows
              through a clean, ambient-temperature biotechnology cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Main Process Timeline & Stage Telemetry */}
      <section className="py-16 md:py-24 bg-[#F7F9F6] border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="BATCH PRODUCTION SEQUENCE"
            title="CONTROLLED CULTIVATION SCHEDULE"
            description="Our biological cycle spans approximately 10 to 14 days from initial substrate conditioning to finished pot packaging."
          />

          <ProcessTimeline expandedView={true} />
        </div>
      </section>

      {/* Quality Control & Incubation Protocols */}
      <section className="py-16 md:py-24 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ENVIRONMENTAL CONTROL CRITERIA"
            title="CRITICAL INCUBATION CONDITIONS"
            description="The most vital phase of MYCOPOT production is the 7–10 day vegetative incubation, where Pleurotus ostreatus hyphae colonize the sawdust matrix."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F7F9F6] border border-[#10251B]/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 flex items-center justify-center text-[#2F7D4A] mb-4">
                  <Thermometer className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#10251B]/60 uppercase block mb-1">
                  CRITERION 01
                </span>
                <h4 className="text-lg font-extrabold uppercase tracking-tight text-[#10251B] mb-2">
                  Thermal Window (24°C–28°C)
                </h4>
                <p className="text-xs text-[#10251B]/75 leading-relaxed">
                  Maintained within the optimal vegetative metabolic range for Pleurotus ostreatus to ensure rapid hyphal extension without heat stress.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#10251B]/10 text-xs font-mono text-[#2F7D4A] font-bold">
                Controlled Darkroom Environment
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F9F6] border border-[#10251B]/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 flex items-center justify-center text-[#2F7D4A] mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#10251B]/60 uppercase block mb-1">
                  CRITERION 02
                </span>
                <h4 className="text-lg font-extrabold uppercase tracking-tight text-[#10251B] mb-2">
                  Relative Humidity (75%–85%)
                </h4>
                <p className="text-xs text-[#10251B]/75 leading-relaxed">
                  Prevents premature surface desiccation while allowing micro-porous mold ventilation ports to exchange oxygen and carbon dioxide.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#10251B]/10 text-xs font-mono text-[#2F7D4A] font-bold">
                Aerosol Humidity System
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F9F6] border border-[#10251B]/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 flex items-center justify-center text-[#2F7D4A] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#10251B]/60 uppercase block mb-1">
                  CRITERION 03
                </span>
                <h4 className="text-lg font-extrabold uppercase tracking-tight text-[#10251B] mb-2">
                  Thermal Deactivation (65°C–75°C)
                </h4>
                <p className="text-xs text-[#10251B]/75 leading-relaxed">
                  Convective drying permanently terminates fungal growth, removes excess moisture, and stabilizes the pot so it does not sprout mushrooms during plant use.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#10251B]/10 text-xs font-mono text-[#2F7D4A] font-bold">
                Convective Drying Oven
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#10251B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#8DBF73] uppercase font-bold">
              SCIENTIFIC MATERIAL FORMULATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-1">
              Interested in how we formulate substrate ratios and testing?
            </h3>
          </div>
          <button
            onClick={() => onNavigate('rd')}
            className="px-6 py-3 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span>Explore R&D Programs</span>
            <ArrowRight className="w-4 h-4 text-[#8DBF73]" />
          </button>
        </div>
      </section>
    </div>
  );
};
