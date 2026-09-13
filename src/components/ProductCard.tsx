import React from 'react';
import { ArrowUpRight, Check, Compass, Ruler, Sparkles } from 'lucide-react';
import type { ProductItem } from '../types';

interface ProductCardProps {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
  onRequestCustom?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onRequestCustom,
}) => {
  return (
    <div
      className="group bg-white rounded-2xl border border-[#10251B]/10 overflow-hidden flex flex-col transition-all duration-300 hover:border-[#2F7D4A]/50 hover:shadow-lg"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-[#F7F9F6] overflow-hidden border-b border-[#10251B]/10">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#10251B]/90 backdrop-blur-xs text-white text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md uppercase font-semibold">
            {product.badge}
          </span>
        )}

        {/* Dimension pill */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#10251B] border border-[#10251B]/10 text-[11px] font-mono px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-xs">
          <Ruler className="w-3 h-3 text-[#2F7D4A]" />
          <span>{product.size}</span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="text-xl font-extrabold text-[#10251B] uppercase tracking-tight group-hover:text-[#2F7D4A] transition-colors">
              {product.name}
            </h3>
          </div>

          <div className="mb-3">
            <span className="inline-block text-sm font-extrabold text-[#2F7D4A] font-mono">
              {product.price}
            </span>
            {product.isCustom && (
              <span className="block text-[11px] text-[#10251B]/60 italic mt-0.5">
                Price depends on design complexity
              </span>
            )}
          </div>

          <p className="text-xs text-[#10251B]/75 leading-relaxed mb-4">
            {product.application}
          </p>

          {/* Key biological specs bullet points */}
          <div className="space-y-1.5 pt-3 border-t border-[#10251B]/10 mb-5">
            {product.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[11px] text-[#10251B]/80 font-medium">
                <Check className="w-3 h-3 text-[#2F7D4A] shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2">
          {product.isCustom ? (
            <button
              onClick={onRequestCustom || (() => onSelect(product))}
              className="w-full py-2.5 px-4 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Request Custom</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => onSelect(product)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#10251B] hover:bg-[#1b3d2c] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>View Product</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8DBF73]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
