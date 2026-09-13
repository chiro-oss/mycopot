import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, Download, ExternalLink, Maximize2, Sparkles, X } from 'lucide-react';
import { PITCH_SLIDES } from '../data/investorData';
import { MycopotLogo } from './MycopotLogo';
import type { Language } from '../types';

interface InvestorPitchDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
  onContactInvestors?: () => void;
}

export const InvestorPitchDeckModal: React.FC<InvestorPitchDeckModalProps> = ({
  isOpen,
  onClose,
  lang = 'id',
  onContactInvestors,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlideIndex((prev) => Math.min(prev + 1, PITCH_SLIDES.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentSlide = PITCH_SLIDES[currentSlideIndex];
  const isLastSlide = currentSlideIndex === PITCH_SLIDES.length - 1;
  const isId = lang === 'id';

  const handleNext = () => {
    if (!isLastSlide) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[92vh] max-h-[820px] bg-[#10251B] text-white rounded-3xl border border-[#2F7D4A]/40 shadow-2xl flex flex-col overflow-hidden">
        {/* Pitch Deck Top Navigation Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/30 shrink-0">
          <div className="flex items-center gap-4">
            <MycopotLogo variant="horizontal" theme="dark" markSize={28} showSub={false} />
            <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-white/15">
              <span className="text-[10px] font-mono tracking-widest text-[#8DBF73] uppercase font-bold">
                INVESTOR PITCH DECK // 2026
              </span>
              <span className="text-white/40 text-xs">•</span>
              <span className="text-[11px] font-mono text-white/70">
                Slide {currentSlideIndex + 1} / {PITCH_SLIDES.length}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline-block text-[11px] font-mono text-white/50 mr-2">
              (Gunakan tombol panah ⬅️ ➡️ untuk slide)
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Tutup Pitch Deck"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Content Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-12 py-8 sm:py-10 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Category / Sub-badge */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/20 border border-[#2F7D4A]/40 text-[#8DBF73] text-[11px] font-mono font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8DBF73] animate-pulse" />
                {currentSlide.category}
              </div>
              <div className="text-xs font-mono text-white/50">
                UNIVERSITAS JAMBI • BIOMATERIAL STARTUP
              </div>
            </div>

            {/* Slide Title & Tagline */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight text-white">
                {currentSlide.title}
              </h2>
              <p className="text-sm sm:text-lg text-[#8DBF73] font-medium mt-2">
                {currentSlide.tagline}
              </p>
            </div>

            {/* Key Bullet Points */}
            <div className="space-y-3.5 pt-2">
              {currentSlide.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#2F7D4A] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 shadow-xs">
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* Slide Metrics Row */}
            {currentSlide.metrics && (
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
                {currentSlide.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border ${
                      m.highlight
                        ? 'bg-[#2F7D4A]/25 border-[#8DBF73]/40'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="text-[10px] sm:text-xs font-mono text-white/60 uppercase">
                      {m.label}
                    </div>
                    <div className="text-lg sm:text-2xl font-extrabold text-white mt-1">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Strategic Takeaway Banner */}
          <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-white/80 font-medium">
              <span className="text-[#8DBF73] font-bold font-mono uppercase mr-2">
                KUNCI EVALUASI:
              </span>
              {currentSlide.takeaway}
            </div>
            {isLastSlide && onContactInvestors && (
              <button
                onClick={() => {
                  onClose();
                  onContactInvestors();
                }}
                className="shrink-0 px-4 py-2 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Ajukan Diskusi Investasi</span>
                <Check className="w-3.5 h-3.5 text-[#8DBF73]" />
              </button>
            )}
          </div>
        </div>

        {/* Pitch Deck Bottom Controls */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex items-center justify-between shrink-0">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {PITCH_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentSlideIndex === idx
                    ? 'w-7 sm:w-8 bg-[#8DBF73]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Pindah ke Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next / Previous Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className="px-3.5 py-2 rounded-xl border border-white/15 text-xs font-mono font-bold uppercase transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Sebelumnya</span>
            </button>

            {isLastSlide ? (
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Selesai</span>
                <Check className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-xl bg-white hover:bg-white/90 text-[#10251B] text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
