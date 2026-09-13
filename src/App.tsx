/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MaterialPage } from './pages/MaterialPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProcessPage } from './pages/ProcessPage';
import { RDPage } from './pages/RDPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { InvestorPitchPage } from './pages/InvestorPitchPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CustomQuoteModal } from './components/CustomQuoteModal';
import { InvestorPitchDeckModal } from './components/InvestorPitchDeckModal';
import type { Language, PageId, ProductItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isPitchDeckOpen, setIsPitchDeckOpen] = useState(false);
  const [customProductNotes, setCustomProductNotes] = useState<string>('');
  const [lang, setLang] = useState<Language>('id');

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'material',
        'products',
        'process',
        'rd',
        'about',
        'contact',
        'investor',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const handleProductSelect = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  const handleInquireFromProduct = (product: ProductItem) => {
    setCustomProductNotes(
      `${product.name} (${product.size} - Target Price: ${product.price})`
    );
    handleNavigate('contact');
  };

  const handleCustomProceed = (details: string) => {
    setCustomProductNotes(details);
    handleNavigate('contact');
  };

  const handleNavigateContactWithNote = (note: string) => {
    setCustomProductNotes(note);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9F6] text-[#10251B] selection:bg-[#2F7D4A]/20 selection:text-[#10251B]">
      {/* Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenPitchDeck={() => setIsPitchDeckOpen(true)}
      />

      {/* Main Content Area with Page Views */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={handleProductSelect}
            onRequestCustom={() => setIsCustomModalOpen(true)}
            lang={lang}
            onOpenPitchDeck={() => setIsPitchDeckOpen(true)}
            onNavigateContactWithNote={handleNavigateContactWithNote}
          />
        )}

        {currentPage === 'material' && <MaterialPage onNavigate={handleNavigate} />}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onSelectProduct={handleProductSelect}
            onRequestCustom={() => setIsCustomModalOpen(true)}
          />
        )}

        {currentPage === 'process' && <ProcessPage onNavigate={handleNavigate} />}

        {currentPage === 'rd' && <RDPage onNavigate={handleNavigate} />}

        {currentPage === 'investor' && (
          <InvestorPitchPage
            onNavigate={handleNavigate}
            lang={lang}
            onOpenPitchDeck={() => setIsPitchDeckOpen(true)}
            onNavigateContactWithNote={handleNavigateContactWithNote}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            customProductNotes={customProductNotes}
          />
        )}
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquire={handleInquireFromProduct}
      />

      {/* Custom Mold & Gifting Configurator Modal */}
      <CustomQuoteModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onProceedToInquiry={handleCustomProceed}
      />

      {/* Full-screen Pitch Deck Presentation Modal */}
      <InvestorPitchDeckModal
        isOpen={isPitchDeckOpen}
        onClose={() => setIsPitchDeckOpen(false)}
        lang={lang}
        onContactInvestors={() => handleNavigateContactWithNote('Diskusi Proposal Investasi / Kompetisi Bisnis')}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
