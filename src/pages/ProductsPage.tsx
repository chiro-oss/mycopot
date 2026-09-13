import React, { useState } from 'react';
import { ArrowRight, Check, Filter, Layers, Ruler, Sparkles, Sprout } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import { PRODUCTS } from '../data/content';
import type { PageId, ProductItem } from '../types';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: ProductItem) => void;
  onRequestCustom: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onSelectProduct,
  onRequestCustom,
}) => {
  const [filter, setFilter] = useState<'all' | 'standard' | 'custom'>('all');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === 'standard') return !p.isCustom;
    if (filter === 'custom') return p.isCustom;
    return true;
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 mb-4">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
                PRODUCT CATALOGUE // PLANNED PRICING
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#10251B] leading-[1.08] mb-4">
              PLANT POTS,
              <br />
              <span className="text-[#2F7D4A]">ENGINEERED AS BIOMATERIAL.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#10251B]/80 leading-relaxed">
              Every MYCOPOT is molded from a composite of oyster mushroom mycelium and wood sawdust.
              Designed for direct planting, gentle root aeration, and natural soil decomposition.
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue & Filters */}
      <section className="py-16 md:py-24 bg-[#F7F9F6] border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#10251B]/10">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                  filter === 'all'
                    ? 'bg-[#10251B] text-white shadow-xs'
                    : 'bg-white text-[#10251B] border border-[#10251B]/10 hover:border-[#2F7D4A]/40'
                }`}
              >
                All Products ({PRODUCTS.length})
              </button>
              <button
                onClick={() => setFilter('standard')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                  filter === 'standard'
                    ? 'bg-[#10251B] text-white shadow-xs'
                    : 'bg-white text-[#10251B] border border-[#10251B]/10 hover:border-[#2F7D4A]/40'
                }`}
              >
                Standard Sizes (3)
              </button>
              <button
                onClick={() => setFilter('custom')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                  filter === 'custom'
                    ? 'bg-[#10251B] text-white shadow-xs'
                    : 'bg-white text-[#10251B] border border-[#10251B]/10 hover:border-[#2F7D4A]/40'
                }`}
              >
                Custom & Events (1)
              </button>
            </div>

            <div className="text-xs font-mono text-[#10251B]/60">
              Pricing Structure: Planned Pilot Production (IDR)
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelect={onSelectProduct}
                onRequestCustom={onRequestCustom}
              />
            ))}
          </div>

          {/* Technical Comparison Table */}
          <div className="bg-white rounded-2xl border border-[#10251B]/10 p-6 sm:p-8 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
                SPECIFICATION COMPARISON MATRIX
              </span>
              <h3 className="text-xl font-extrabold uppercase tracking-tight text-[#10251B] mt-1">
                Dimensional & Application Parameters
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="border-b border-[#10251B]/15 text-[#10251B]/60 uppercase">
                    <th className="py-3 px-4">Model</th>
                    <th className="py-3 px-4">Size Class</th>
                    <th className="py-3 px-4">Planned Price</th>
                    <th className="py-3 px-4">Wall Thickness</th>
                    <th className="py-3 px-4">Recommended Plants</th>
                    <th className="py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#10251B]/10 text-[#10251B]">
                  {PRODUCTS.map((prod) => (
                    <tr key={prod.id} className="hover:bg-[#F7F9F6] transition-colors">
                      <td className="py-3.5 px-4 font-bold text-sm uppercase">{prod.name}</td>
                      <td className="py-3.5 px-4">{prod.size}</td>
                      <td className="py-3.5 px-4 font-bold text-[#2F7D4A]">{prod.price}</td>
                      <td className="py-3.5 px-4">{prod.wallThickness}</td>
                      <td className="py-3.5 px-4 max-w-xs">{prod.application}</td>
                      <td className="py-3.5 px-4">
                        <button
                          onClick={() =>
                            prod.isCustom && onRequestCustom
                              ? onRequestCustom()
                              : onSelectProduct(prod)
                          }
                          className="px-3 py-1 rounded-md bg-[#10251B] hover:bg-[#2F7D4A] text-white text-[11px] font-bold uppercase transition-colors"
                        >
                          {prod.isCustom ? 'Inquire Custom' : 'View'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Orders & Souvenirs Banner */}
      <section className="py-16 bg-[#10251B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-[#8DBF73] uppercase font-bold">
              BESPOKE BIOMATERIAL ORDERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-1 mb-2">
              Looking for custom pots, event souvenirs, or corporate gifting?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              We fabricate custom negative molds with embossed logos, tailored geometries, and
              accompanying biological material documentation cards.
            </p>
          </div>
          <button
            onClick={onRequestCustom}
            className="px-6 py-3.5 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#8DBF73]" />
            <span>Request Custom Order</span>
          </button>
        </div>
      </section>
    </div>
  );
};
