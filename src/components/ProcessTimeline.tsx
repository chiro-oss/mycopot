import React, { useState } from 'react';
import { Clock, Thermometer, Droplets, ArrowRight, Activity, Beaker } from 'lucide-react';
import { PROCESS_STAGES } from '../data/content';
import type { ProcessStage } from '../types';

interface ProcessTimelineProps {
  expandedView?: boolean;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ expandedView = false }) => {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(3);
  const activeStage = PROCESS_STAGES[activeStageIdx];

  return (
    <div className="w-full space-y-8">
      {/* Production Cycle Overview Banner */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[#10251B] text-white border border-[#2F7D4A]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#2F7D4A] flex items-center justify-center text-white shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-[#8DBF73] uppercase tracking-wider block">
              PRODUCTION PARAMETER OVERVIEW
            </span>
            <h4 className="text-base sm:text-lg font-extrabold uppercase tracking-tight">
              Estimated Total Cycle: 10–14 Days
            </h4>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/80">
          <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 flex items-center gap-2">
            <Droplets className="w-3.5 h-3.5 text-[#8DBF73]" />
            <span>Incubation: ~7–10 Days @ Controlled RH</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 flex items-center gap-2">
            <Thermometer className="w-3.5 h-3.5 text-[#8DBF73]" />
            <span>Heat Stabilization: 65°C–75°C</span>
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Timeline Track */}
      <div className="hidden lg:block relative pt-6 pb-4">
        {/* Continuous baseline track */}
        <div className="absolute top-[38px] left-0 right-0 h-[2px] bg-[#10251B]/15" />
        <div
          className="absolute top-[38px] left-0 h-[2px] bg-[#2F7D4A] transition-all duration-500"
          style={{ width: `${(activeStageIdx / (PROCESS_STAGES.length - 1)) * 100}%` }}
        />

        <div className="grid grid-cols-6 gap-3 relative z-10">
          {PROCESS_STAGES.map((stage, idx) => {
            const isSelected = activeStageIdx === idx;
            const isPast = idx < activeStageIdx;

            return (
              <div
                key={stage.step}
                onClick={() => setActiveStageIdx(idx)}
                className="cursor-pointer group flex flex-col items-center text-center"
              >
                {/* Step indicator node */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 mb-3 border-2 ${
                    isSelected
                      ? 'bg-[#2F7D4A] text-white border-white ring-4 ring-[#2F7D4A]/20 scale-110 shadow-sm'
                      : isPast
                      ? 'bg-[#10251B] text-white border-[#10251B]'
                      : 'bg-white text-[#10251B]/70 border-[#10251B]/20 group-hover:border-[#2F7D4A]'
                  }`}
                >
                  {stage.step}
                </div>

                <span className="text-[10px] font-mono text-[#2F7D4A] font-semibold tracking-wider uppercase mb-1">
                  {stage.duration}
                </span>

                <h4
                  className={`text-xs font-extrabold uppercase tracking-tight transition-colors line-clamp-2 ${
                    isSelected ? 'text-[#10251B]' : 'text-[#10251B]/70 group-hover:text-[#2F7D4A]'
                  }`}
                >
                  {stage.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="lg:hidden space-y-3">
        {PROCESS_STAGES.map((stage, idx) => {
          const isSelected = activeStageIdx === idx;
          return (
            <div
              key={stage.step}
              onClick={() => setActiveStageIdx(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white border-[#2F7D4A] shadow-sm ring-1 ring-[#2F7D4A]/20'
                  : 'bg-white/70 border-[#10251B]/10 hover:border-[#2F7D4A]/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                      isSelected ? 'bg-[#2F7D4A] text-white' : 'bg-[#10251B]/10 text-[#10251B]'
                    }`}
                  >
                    {stage.step}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs uppercase text-[#10251B]">
                      {stage.title}
                    </h4>
                    <span className="text-[10px] font-mono text-[#2F7D4A]">
                      {stage.duration}
                    </span>
                  </div>
                </div>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-[#2F7D4A] rotate-90' : 'text-[#10251B]/25'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Stage Detail Card */}
      <div className="bg-white rounded-2xl border border-[#10251B]/15 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
                STAGE {activeStage.step} OF 06
              </span>
              <span className="text-[#10251B]/30">•</span>
              <span className="text-xs font-mono text-[#10251B]/60 uppercase">
                TIMEFRAME: {activeStage.duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#10251B] uppercase tracking-tight">
              {activeStage.title}
            </h3>

            <p className="text-sm sm:text-base text-[#10251B]/80 leading-relaxed">
              {activeStage.description}
            </p>
          </div>

          {/* Technical Laboratory Parameters Block */}
          <div className="shrink-0 w-full md:w-80 p-4 rounded-xl bg-[#F7F9F6] border border-[#10251B]/10 space-y-2.5 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#2F7D4A] font-bold uppercase pb-1 border-b border-[#10251B]/10">
              <Activity className="w-3.5 h-3.5" />
              <span>LAB PROTOCOL PARAMETERS</span>
            </div>

            {activeStage.parameters.temp && (
              <div className="flex justify-between">
                <span className="text-[#10251B]/60">Temp Target:</span>
                <span className="text-[#10251B] font-semibold">{activeStage.parameters.temp}</span>
              </div>
            )}

            {activeStage.parameters.humidity && (
              <div className="flex justify-between">
                <span className="text-[#10251B]/60">Relative Humidity:</span>
                <span className="text-[#10251B] font-semibold">{activeStage.parameters.humidity}</span>
              </div>
            )}

            <div className="flex flex-col gap-1 pt-1 border-t border-[#10251B]/10">
              <span className="text-[#10251B]/60">Operational Action:</span>
              <span className="text-[#10251B] font-semibold leading-tight">
                {activeStage.parameters.action}
              </span>
            </div>

            {activeStage.parameters.equipment && (
              <div className="flex flex-col gap-1 pt-1 border-t border-[#10251B]/10">
                <span className="text-[#10251B]/60">Key Tooling:</span>
                <span className="text-[#10251B] font-semibold leading-tight">
                  {activeStage.parameters.equipment}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
