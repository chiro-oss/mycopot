import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight, Presentation, Globe } from 'lucide-react';
import { MycopotLogo } from './MycopotLogo';
import type { Language, PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  lang?: Language;
  onToggleLang?: () => void;
  onOpenPitchDeck?: () => void;
}

interface NavItem {
  id: PageId;
  labelId: string;
  labelEn: string;
  isSpecial?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'material', labelId: 'Material', labelEn: 'Our Material' },
  { id: 'products', labelId: 'Produk', labelEn: 'Products' },
  { id: 'process', labelId: 'Proses Lab', labelEn: 'Process' },
  { id: 'rd', labelId: 'R&D', labelEn: 'R&D' },
  { id: 'investor', labelId: 'Investor & Lomba', labelEn: 'Pitch & Investor', isSpecial: true },
  { id: 'about', labelId: 'Tentang Kami', labelEn: 'About' },
  { id: 'contact', labelId: 'Kontak', labelEn: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  lang = 'id',
  onToggleLang,
  onOpenPitchDeck,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isId = lang === 'id';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#10251B]/10 shadow-xs py-2.5'
          : 'bg-[#F7F9F6]/90 backdrop-blur-xs border-b border-[#10251B]/5 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left focus:outline-hidden shrink-0 flex items-center gap-2"
          aria-label="MYCOPOT Home"
        >
          <MycopotLogo variant="horizontal" markSize={36} showSub={false} />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            const label = isId ? item.labelId : item.labelEn;

            if (item.isSpecial) {
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#10251B] text-white shadow-xs'
                      : 'bg-[#2F7D4A]/10 text-[#2F7D4A] hover:bg-[#2F7D4A]/20 border border-[#2F7D4A]/30'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D4A] animate-pulse" />
                  <span>{label}</span>
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#10251B] text-white shadow-xs'
                    : 'text-[#10251B]/80 hover:text-[#10251B] hover:bg-[#10251B]/5'
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Pitch Deck Trigger + Language Switcher + Products */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Toggle */}
          {onToggleLang && (
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1 rounded-xl bg-white border border-[#10251B]/15 text-[#10251B] hover:bg-[#F7F9F6] text-xs font-mono font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
              title={isId ? 'Ganti ke Bahasa Inggris' : 'Switch to Indonesian'}
            >
              <Globe className="w-3.5 h-3.5 text-[#2F7D4A]" />
              <span>{isId ? 'ID' : 'EN'}</span>
            </button>
          )}

          {/* Quick Pitch Deck Action */}
          {onOpenPitchDeck && (
            <button
              onClick={onOpenPitchDeck}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#F7F9F6] border border-[#2F7D4A]/40 text-[#2F7D4A] text-xs font-bold tracking-wide transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Pitch Deck</span>
            </button>
          )}

          {/* Explore Catalog CTA */}
          <button
            onClick={() => handleNavClick('products')}
            className="px-4 py-1.5 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 shadow-xs"
          >
            <span>{isId ? 'Katalog Pot' : 'Catalog'}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8DBF73]" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          {onToggleLang && (
            <button
              onClick={onToggleLang}
              className="px-2 py-1 rounded-lg bg-white border border-[#10251B]/15 text-[#10251B] text-xs font-mono font-bold"
            >
              {isId ? '🇮🇩 ID' : '🇬🇧 EN'}
            </button>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-[#10251B] hover:bg-[#10251B]/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#10251B]/10 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1.5">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-4 py-2.5 rounded-xl text-left text-sm font-bold uppercase tracking-wide flex items-center justify-between ${
                currentPage === 'home' ? 'bg-[#10251B] text-white' : 'text-[#10251B] hover:bg-[#F7F9F6]'
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </button>

            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              const label = isId ? item.labelId : item.labelEn;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2.5 rounded-xl text-left text-sm font-bold uppercase tracking-wide flex items-center justify-between ${
                    isActive
                      ? 'bg-[#10251B] text-white'
                      : item.isSpecial
                      ? 'bg-[#2F7D4A]/10 text-[#2F7D4A]'
                      : 'text-[#10251B] hover:bg-[#F7F9F6]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.isSpecial && <span className="w-2 h-2 rounded-full bg-[#2F7D4A] animate-pulse" />}
                    <span>{label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-[#10251B]/10 space-y-2">
            {onOpenPitchDeck && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPitchDeck();
                }}
                className="w-full py-2.5 rounded-xl bg-white border border-[#2F7D4A]/30 text-[#2F7D4A] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xs"
              >
                <Presentation className="w-4 h-4" />
                <span>Buka Slide Pitch Deck (8 Slide)</span>
              </button>
            )}

            <button
              onClick={() => handleNavClick('products')}
              className="w-full py-3 rounded-xl bg-[#2F7D4A] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>{isId ? 'Jelajahi Produk Pot' : 'Explore Products'}</span>
              <ArrowUpRight className="w-4 h-4 text-[#8DBF73]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
