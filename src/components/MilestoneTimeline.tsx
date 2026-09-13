import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronRight, Flag } from 'lucide-react';
import { MILESTONES } from '../data/content';
import type { MilestoneItem } from '../types';

export const MilestoneTimeline: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activeMilestone = MILESTONES[selectedIdx];

  return (
    <div className="w-full space-y-6">
      {/* Desktop Horizontal Milestone Scroll */}
      <div className="hidden lg:block overflow-x-auto pb-4">
        <div className="min-w-[900px] relative pt-6">
          {/* Timeline Bar */}
          <div className="absolute top-[38px] left-0 right-0 h-[2px] bg-[#10251B]/15" />

          <div className="grid grid-cols-7 gap-3 relative z-10">
            {MILESTONES.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <div
                  key={item.period}
                  onClick={() => setSelectedIdx(idx)}
                  className="cursor-pointer group flex flex-col items-center text-center"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 mb-3 border-2 ${
                      isSelected
                        ? 'bg-[#2F7D4A] text-white border-white ring-4 ring-[#2F7D4A]/20 scale-110 shadow-sm'
                        : 'bg-white text-[#10251B]/70 border-[#10251B]/20 group-hover:border-[#2F7D4A]'
                    }`}
                  >
                    0{idx + 1}
                  </div>

                  <span
                    className={`text-[11px] font-mono font-bold tracking-tight uppercase mb-0.5 ${
                      isSelected ? 'text-[#2F7D4A]' : 'text-[#10251B]'
                    }`}
                  >
                    {item.period}
                  </span>

                  <span className="text-[10px] text-[#10251B]/60 line-clamp-1">
                    {item.phase}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Milestone Selector */}
      <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {MILESTONES.map((item, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={item.period}
              onClick={() => setSelectedIdx(idx)}
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-colors border ${
                isSelected
                  ? 'bg-[#10251B] text-white border-[#10251B]'
                  : 'bg-white text-[#10251B] border-[#10251B]/15'
              }`}
            >
              {item.period}
            </button>
          );
        })}
      </div>

      {/* Selected Milestone Detail Display */}
      <div className="bg-white rounded-2xl border border-[#10251B]/15 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
                ROADMAP TARGET // {activeMilestone.period}
              </span>
              <span className="text-[#10251B]/30">•</span>
              <span
                className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                  activeMilestone.status === 'Current Focus'
                    ? 'bg-[#2F7D4A]/10 border-[#2F7D4A]/20 text-[#2F7D4A] font-bold'
                    : 'bg-[#10251B]/5 border-[#10251B]/10 text-[#10251B]/70'
                }`}
              >
                {activeMilestone.status}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold uppercase tracking-tight text-[#10251B]">
              {activeMilestone.phase}
            </h3>

            <p className="text-sm sm:text-base text-[#10251B]/80 leading-relaxed">
              {activeMilestone.description}
            </p>
          </div>

          <div className="shrink-0 w-full md:w-80 p-4 rounded-xl bg-[#F7F9F6] border border-[#10251B]/10 space-y-2.5">
            <span className="text-xs font-mono font-bold text-[#10251B] uppercase tracking-wider block border-b border-[#10251B]/10 pb-1.5">
              TARGET DELIVERABLES
            </span>
            {activeMilestone.keyOutputs.map((out, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#10251B]/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2F7D4A] shrink-0 mt-0.5" />
                <span className="leading-snug">{out}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
