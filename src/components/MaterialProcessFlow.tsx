import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Dna, Layers, Leaf, Sparkles } from 'lucide-react';

interface StepDetail {
  id: string;
  name: string;
  sub: string;
  desc: string;
  spec: string;
  role: string;
}

const FLOW_STEPS: StepDetail[] = [
  {
    id: 'sawdust',
    name: 'SAWDUST',
    sub: 'Wood-processing residue',
    desc: 'Lignocellulosic fibers reclaimed from local timber operations, sieved to uniform particle diameter.',
    spec: 'Particle size: 0.5–2.0 mm',
    role: 'Physical structural matrix',
  },
  {
    id: 'substrate',
    name: 'SUBSTRATE',
    sub: 'Conditioned mixture',
    desc: 'Sawdust adjusted with sterile moisture and organic mineral supplementation to support vigorous hyphal colonization.',
    spec: 'Moisture: ~62% | pH: 5.8–6.4',
    role: 'Biological growth medium',
  },
  {
    id: 'mycelium',
    name: 'MYCELIUM',
    sub: 'Pleurotus ostreatus',
    desc: 'Vegetative fungal network composed of microscopic hyphae threads that secrete enzymes to bind lignocellulose.',
    spec: 'Strain: Oyster Mushroom',
    role: 'Living biological binder',
  },
  {
    id: 'growth',
    name: 'BIOLOGICAL GROWTH',
    sub: 'Hyphal elongation',
    desc: 'Controlled incubation where hyphae self-assemble through wood pores, weaving the particles into a solid network.',
    spec: 'Incubation: 7–10 days @ 26°C',
    role: 'Intercellular consolidation',
  },
  {
    id: 'composite',
    name: 'MYCELIUM COMPOSITE',
    sub: 'Consolidated biomaterial',
    desc: 'A dense, fully bound biological matrix with exceptional compressive strength and micro-porous root aeration.',
    spec: 'Bulk density: ~0.24–0.32 g/cm³',
    role: 'Raw biological material',
  },
  {
    id: 'mycopot',
    name: 'MYCOPOT',
    sub: 'Final plant vessel',
    desc: 'Heat-stabilized biodegradable pot ready for horticultural planting, nursery applications, and direct transplanting.',
    spec: 'Life: 3–6 mo / Rapid soil burial decomposition',
    role: 'Finished functional product',
  },
];

export const MaterialProcessFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <div className="w-full">
      {/* Desktop Horizontal Process Flow */}
      <div className="hidden lg:grid grid-cols-6 gap-3 relative mb-8">
        {FLOW_STEPS.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer group relative p-4 rounded-xl border transition-all duration-300 ${
                isActive
                  ? 'bg-white border-[#2F7D4A] shadow-md ring-2 ring-[#2F7D4A]/10 -translate-y-1'
                  : 'bg-white/80 border-[#10251B]/10 hover:border-[#2F7D4A]/40 hover:bg-white'
              }`}
            >
              {/* Connector line between steps */}
              {idx < FLOW_STEPS.length - 1 && (
                <div
                  className="absolute top-1/2 -right-3 w-3 h-[2px] z-10 -translate-y-1/2"
                  style={{
                    backgroundColor: idx < activeStep ? '#2F7D4A' : 'rgba(16, 37, 27, 0.15)',
                  }}
                />
              )}

              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                    isActive
                      ? 'bg-[#2F7D4A] text-white'
                      : 'bg-[#10251B]/5 text-[#10251B]/70 group-hover:text-[#2F7D4A]'
                  }`}
                >
                  0{idx + 1}
                </span>
                {idx < activeStep ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2F7D4A]" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-[#10251B]/15" />
                )}
              </div>

              <h4 className="font-extrabold text-sm tracking-tight text-[#10251B] group-hover:text-[#2F7D4A] transition-colors mb-1 uppercase">
                {step.name}
              </h4>
              <p className="text-[11px] font-medium text-[#10251B]/60 leading-tight">
                {step.sub}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet Vertical Flow */}
      <div className="lg:hidden space-y-3 mb-8">
        {FLOW_STEPS.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                isActive
                  ? 'bg-white border-[#2F7D4A] shadow-sm ring-1 ring-[#2F7D4A]/20'
                  : 'bg-white/70 border-[#10251B]/10 hover:border-[#2F7D4A]/30'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-[#2F7D4A] text-white' : 'bg-[#10251B]/5 text-[#10251B]/70'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#10251B] uppercase">{step.name}</h4>
                    <p className="text-xs text-[#10251B]/60">{step.sub}</p>
                  </div>
                </div>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-[#2F7D4A] rotate-90' : 'text-[#10251B]/30'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Step Deep-Dive Scientific Card */}
      <div className="bg-[#10251B] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-[#2F7D4A]/30 shadow-xl">
        {/* Subtle grid accent */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-[#8DBF73] uppercase tracking-widest">
                STAGE DETAIL // 0{activeStep + 1} OF 06
              </span>
              <span className="h-1 w-1 rounded-full bg-[#8DBF73]" />
              <span className="text-xs font-mono text-white/60 uppercase">
                {FLOW_STEPS[activeStep].role}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-white mb-3">
              {FLOW_STEPS[activeStep].name}
            </h3>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
              {FLOW_STEPS[activeStep].desc}
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-mono text-[#8DBF73]">
              <span className="text-white/60">Specification:</span>
              <span>{FLOW_STEPS[activeStep].spec}</span>
            </div>
          </div>

          {/* Micro-interface indicator */}
          <div className="shrink-0 flex flex-col items-start md:items-end justify-center p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono space-y-2">
            <div className="flex items-center gap-2 text-white/80">
              <Dna className="w-3.5 h-3.5 text-[#8DBF73]" />
              <span>Bio-Matrix: Pleurotus ostreatus</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Layers className="w-3.5 h-3.5 text-[#8DBF73]" />
              <span>Substrate: Lignocellulose Wood</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Leaf className="w-3.5 h-3.5 text-[#8DBF73]" />
              <span>Binder: Natural Fungal Hyphae</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
