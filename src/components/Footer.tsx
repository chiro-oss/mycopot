import React from 'react';
import { ArrowUp, Building2, Dna, ExternalLink, Leaf } from 'lucide-react';
import { MycopotLogo } from './MycopotLogo';
import type { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#10251B] text-[#F7F9F6] pt-16 pb-12 border-t border-[#2F7D4A]/20 relative overflow-hidden">
      {/* Background subtle bio grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Manifesto Column */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="text-left focus:outline-hidden"
            >
              <MycopotLogo variant="horizontal" theme="dark" markSize={42} showSub={true} />
            </button>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm pt-2">
              MYCOPOT develops biodegradable plant pots from oyster mushroom mycelium and wood
              sawdust — transforming biological growth and timber residues into functional, circular
              materials.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#8DBF73]">
              <span className="w-2 h-2 rounded-full bg-[#8DBF73]" />
              <span>Biomaterials Research Laboratory • Universitas Jambi</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#8DBF73] uppercase block">
              SYSTEM ARCHITECTURE
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('material');
                    scrollToTop();
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Material (Pleurotus ostreatus × Sawdust)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('products');
                    scrollToTop();
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Products (Mini, Medium, Large, Custom)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('process');
                    scrollToTop();
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Laboratory Process (6 Biological Stages)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('rd');
                    scrollToTop();
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Research & Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    scrollToTop();
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About & Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    scrollToTop();
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Research & Institutional Specifications */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#8DBF73] uppercase block">
              SPECIFICATION COMPLIANCE
            </span>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs font-mono text-white/70">
              <div className="flex justify-between">
                <span>Material:</span>
                <span className="text-white">Lignocellulose Fungal Matrix</span>
              </div>
              <div className="flex justify-between">
                <span>Organism:</span>
                <span className="text-white">P. ostreatus</span>
              </div>
              <div className="flex justify-between">
                <span>Biodegradation:</span>
                <span className="text-white">Direct-to-Soil Burial</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-[#8DBF73]">Early-Stage Biomaterials</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors pt-2"
            >
              <span>Back to top of document</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#8DBF73]" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
          <div>
            © 2026 MYCOPOT • Universitas Jambi. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            <span>Biomaterials for a Sustainable Future</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
