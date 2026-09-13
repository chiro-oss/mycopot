import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight, Dna } from 'lucide-react';
import { MycopotLogo } from './MycopotLogo';
import type { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

interface NavItem {
  id: PageId;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'material', label: 'Our Material' },
  { id: 'products', label: 'Products' },
  { id: 'process', label: 'Process' },
  { id: 'rd', label: 'R&D' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#10251B]/10 shadow-xs py-3'
          : 'bg-[#F7F9F6] border-b border-[#10251B]/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left focus:outline-hidden"
          aria-label="MYCOPOT Home"
        >
          <MycopotLogo variant="horizontal" markSize={36} showSub={true} />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#10251B] text-white shadow-xs'
                    : 'text-[#10251B]/80 hover:text-[#10251B] hover:bg-[#10251B]/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Explore Products */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('products')}
            className="px-4 py-2 rounded-full bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <span>Explore Products</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8DBF73]" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
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
        <div className="md:hidden bg-white border-b border-[#10251B]/10 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-4 py-2.5 rounded-xl text-left text-sm font-bold uppercase tracking-wide flex items-center justify-between ${
                currentPage === 'home'
                  ? 'bg-[#10251B] text-white'
                  : 'text-[#10251B] hover:bg-[#F7F9F6]'
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </button>

            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2.5 rounded-xl text-left text-sm font-bold uppercase tracking-wide flex items-center justify-between ${
                    isActive
                      ? 'bg-[#10251B] text-white'
                      : 'text-[#10251B] hover:bg-[#F7F9F6]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-[#10251B]/10">
            <button
              onClick={() => handleNavClick('products')}
              className="w-full py-3 rounded-xl bg-[#2F7D4A] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Explore Products</span>
              <ArrowUpRight className="w-4 h-4 text-[#8DBF73]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
