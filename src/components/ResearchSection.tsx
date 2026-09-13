import React, { useState } from 'react';
import { ArrowRight, Check, FlaskConical, Microscope, Layers, Gauge, ShieldAlert, Sparkles } from 'lucide-react';
import { RESEARCH_PILLARS, RESEARCH_MINDSET_STEPS } from '../data/content';
import type { ResearchPillar } from '../types';

export const ResearchSection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('formulation');
  const activePillar = RESEARCH_PILLARS.find((p) => p.id === selectedPillarId) || RESEARCH_PILLARS[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'formulation':
        return FlaskConical;
      case 'structural':
        return Gauge;
      case 'moisture':
        return Layers;
      case 'biodegradation':
        return Microscope;
      case 'mold':
        return Layers;
      case 'future':
        return Sparkles;
      default:
        return FlaskConical;
    }
  };

  return (
    <div className="w-full space-y-16">
      {/* Research Mindset Flow */}
      <div className="bg-[#10251B] text-white rounded-2xl p-6 sm:p-10 border border-[#2F7D4A]/30 relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono tracking-widest text-[#8DBF73] uppercase font-bold">
              METHODOLOGICAL FRAMEWORK
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-white mb-2">
            RESEARCH MINDSET
          </h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl mb-8 leading-relaxed">
            Our biomaterials development adheres to an empirical, iterative testing cycle rather than
            unsubstantiated claims. We evaluate biological variables step-by-step.
          </p>

          {/* 6-step loop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {RESEARCH_MINDSET_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#8DBF73]">
                      {step.step}
                    </span>
                    {idx < RESEARCH_MINDSET_STEPS.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-white/30 hidden lg:block" />
                    )}
                  </div>
                  <h4 className="text-xs font-extrabold uppercase tracking-tight text-white mb-1">
                    {step.title}
                  </h4>
                </div>
                <p className="text-[11px] text-white/60 leading-tight">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6 Research & Development Pillars Grid */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono text-[#2F7D4A] tracking-wider uppercase font-bold">
              ACTIVE EXPLORATION MATRIX
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#10251B] mt-0.5">
              SIX CORE R&D PROGRAM AREAS
            </h3>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-[#10251B]/60">
            Iterative Laboratory Protocols
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESEARCH_PILLARS.map((pillar) => {
            const isSelected = selectedPillarId === pillar.id;
            const IconComp = getPillarIcon(pillar.id);

            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#2F7D4A] shadow-md ring-2 ring-[#2F7D4A]/15 -translate-y-0.5'
                    : 'bg-white/80 border-[#10251B]/10 hover:border-[#2F7D4A]/40 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 flex items-center justify-center text-[#2F7D4A]">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase ${
                        pillar.status === 'In Active Testing'
                          ? 'bg-[#2F7D4A]/10 border-[#2F7D4A]/20 text-[#2F7D4A] font-semibold'
                          : 'bg-[#10251B]/5 border-[#10251B]/10 text-[#10251B]/70'
                      }`}
                    >
                      {pillar.status}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-[#10251B]/50 block mb-1">
                    {pillar.code}
                  </span>
                  <h4 className="text-base font-extrabold uppercase text-[#10251B] tracking-tight mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#10251B]/75 leading-relaxed mb-4">
                    {pillar.focus}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-[#10251B]/10">
                  {pillar.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-[#10251B]/80">
                      <span className="text-[#2F7D4A] font-mono font-bold shrink-0">•</span>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
