import React, { useState } from 'react';
import { RefreshCw, TreePine, Sparkles, Sprout, Recycle, Earth } from 'lucide-react';
import { CIRCULAR_STEPS } from '../data/content';

export const CircularSystemDiagram: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(3);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return TreePine;
      case 1:
        return Sparkles;
      case 2:
        return RefreshCw;
      case 3:
        return Sprout;
      case 4:
        return Recycle;
      case 5:
        return Earth;
      default:
        return RefreshCw;
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-[#10251B]/10 p-6 sm:p-10 shadow-sm relative overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive Diagram Flow */}
        <div className="lg:col-span-7">
          <div className="relative flex flex-col space-y-3">
            {CIRCULAR_STEPS.map((step, idx) => {
              const isCurrent = selectedStep === step.step;
              const IconComp = getStepIcon(idx);

              return (
                <div
                  key={step.step}
                  onClick={() => setSelectedStep(step.step)}
                  className={`group flex items-start gap-4 p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-[#10251B] text-white border-[#10251B] shadow-md -translate-y-0.5'
                      : 'bg-[#F7F9F6] border-[#10251B]/10 hover:border-[#2F7D4A]/50 hover:bg-white text-[#10251B]'
                  }`}
                >
                  <div
                    className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-xs transition-colors ${
                      isCurrent
                        ? 'bg-[#2F7D4A] text-white'
                        : 'bg-white border border-[#10251B]/15 text-[#10251B] group-hover:border-[#2F7D4A]'
                    }`}
                  >
                    0{step.step}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4
                        className={`text-sm font-extrabold uppercase tracking-tight ${
                          isCurrent ? 'text-white' : 'text-[#10251B] group-hover:text-[#2F7D4A]'
                        }`}
                      >
                        {step.label}
                      </h4>
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                          isCurrent
                            ? 'bg-white/10 border-white/20 text-[#8DBF73]'
                            : 'bg-white border-[#10251B]/10 text-[#10251B]/60'
                        }`}
                      >
                        {step.category}
                      </span>
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        isCurrent ? 'text-white/80' : 'text-[#10251B]/70'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  <div className="shrink-0 self-center hidden sm:block">
                    <IconComp
                      className={`w-4 h-4 transition-colors ${
                        isCurrent ? 'text-[#8DBF73]' : 'text-[#10251B]/30 group-hover:text-[#2F7D4A]'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Circular Graphic & Scientific Statement */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl bg-[#F7F9F6] border border-[#10251B]/10">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6 flex items-center justify-center">
            {/* Outer Circular SVG Track */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 animate-[spin_60s_linear_infinite]"
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="82"
                fill="none"
                stroke="#10251B"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                opacity="0.25"
              />
              <circle
                cx="100"
                cy="100"
                r="82"
                fill="none"
                stroke="#2F7D4A"
                strokeWidth="2.5"
                strokeDasharray="30 180"
                strokeLinecap="round"
              />
            </svg>

            {/* Inner Focal Hub */}
            <div className="w-36 h-36 rounded-full bg-white border border-[#2F7D4A]/20 shadow-sm flex flex-col items-center justify-center p-4 text-center">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#2F7D4A] font-bold">
                CLOSED-LOOP
              </span>
              <span className="font-extrabold text-sm uppercase text-[#10251B] mt-0.5">
                BIO-CYCLE
              </span>
              <div className="w-6 h-[1px] bg-[#2F7D4A]/30 my-2" />
              <span className="text-[10px] text-[#10251B]/70 font-mono">
                100% Lignocellulose + Fungal Mycelium
              </span>
            </div>
          </div>

          <div className="max-w-sm">
            <h4 className="font-extrabold text-sm uppercase text-[#10251B] tracking-tight mb-2">
              BIOMATERIAL RESIDUE INTEGRATION
            </h4>
            <p className="text-xs text-[#10251B]/75 leading-relaxed">
              By using living mycelium to bind timber sawdust, the material eliminates synthetic
              petroleum resins. After its functional life in gardening or nursery containers, it
              safely decomposes back into soil matter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
