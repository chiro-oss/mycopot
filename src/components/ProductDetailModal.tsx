import React from 'react';
import { X, CheckCircle2, ShieldCheck, Ruler, Layers, Sparkles, Sprout } from 'lucide-react';
import type { ProductItem } from '../types';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onInquire: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquire,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10251B]/70 backdrop-blur-xs">
      <div
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-[#10251B]/15 overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#10251B]/10 bg-[#F7F9F6]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
              SPECIFICATION SHEET
            </span>
            <span className="text-[#10251B]/30">•</span>
            <span className="text-xs font-mono text-[#10251B]/60 uppercase">
              {product.id}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#10251B]/60 hover:text-[#10251B] hover:bg-[#10251B]/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Image Preview */}
            <div className="rounded-xl overflow-hidden bg-[#F7F9F6] border border-[#10251B]/10 aspect-square">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Specs */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-[#2F7D4A] font-bold uppercase tracking-wider">
                  {product.size}
                </span>
                <h3 className="text-2xl font-extrabold text-[#10251B] uppercase tracking-tight mt-0.5">
                  {product.name}
                </h3>
                <div className="text-lg font-bold font-mono text-[#2F7D4A] mt-1">
                  {product.price}
                </div>
                {product.isCustom && (
                  <p className="text-xs text-[#10251B]/60 italic">
                    Price depends on design complexity
                  </p>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#10251B]/80 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="p-3.5 rounded-xl bg-[#F7F9F6] border border-[#10251B]/10 space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-[#10251B]/10 pb-1.5">
                  <span className="text-[#10251B]/60">Application:</span>
                  <span className="text-[#10251B] font-semibold text-right max-w-[200px] truncate">
                    {product.application}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#10251B]/10 pb-1.5">
                  <span className="text-[#10251B]/60">Dimensions:</span>
                  <span className="text-[#10251B] font-semibold">{product.dimensions}</span>
                </div>
                <div className="flex justify-between border-b border-[#10251B]/10 pb-1.5">
                  <span className="text-[#10251B]/60">Wall Thickness:</span>
                  <span className="text-[#10251B] font-semibold">{product.wallThickness}</span>
                </div>
                <div className="flex justify-between border-b border-[#10251B]/10 pb-1.5">
                  <span className="text-[#10251B]/60">Substrate:</span>
                  <span className="text-[#10251B] font-semibold">{product.substrate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#10251B]/60">Biological Binder:</span>
                  <span className="text-[#10251B] font-semibold">{product.binder}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Biological Features */}
          <div>
            <h4 className="text-xs font-bold font-mono tracking-widest uppercase text-[#10251B] mb-3">
              BIOMATERIAL PERFORMANCE CHARACTERISTICS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F7F9F6] border border-[#10251B]/10 text-xs font-medium text-[#10251B]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2F7D4A] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#10251B]/10 bg-[#F7F9F6]">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-[#10251B]/20 text-xs font-bold uppercase tracking-wider text-[#10251B] hover:bg-white transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onInquire(product);
            }}
            className="px-5 py-2 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inquire for Orders</span>
          </button>
        </div>
      </div>
    </div>
  );
};
