import React, { useState } from 'react';
import { X, Sparkles, Check, Calculator, ArrowRight, Layers } from 'lucide-react';

interface CustomQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToInquiry: (customDetails: string) => void;
}

export const CustomQuoteModal: React.FC<CustomQuoteModalProps> = ({
  isOpen,
  onClose,
  onProceedToInquiry,
}) => {
  const [purpose, setPurpose] = useState<string>('Corporate Gifting');
  const [quantity, setQuantity] = useState<number>(100);
  const [shape, setShape] = useState<string>('Hexagonal Modern');
  const [embossed, setEmbossed] = useState<boolean>(true);

  if (!isOpen) return null;

  // Base calculation starting from Rp30.000 / unit
  const basePerUnit = 30000;
  const toolingSurcharge = embossed ? 2500 : 0;
  const volumeDiscountRate = quantity >= 500 ? 0.15 : quantity >= 200 ? 0.1 : 0;
  const unitPrice = Math.round((basePerUnit + toolingSurcharge) * (1 - volumeDiscountRate));
  const estimatedTotal = unitPrice * quantity;

  const handleProceed = () => {
    const details = `Custom Order Proposal:
- Purpose: ${purpose}
- Quantity: ${quantity} units
- Geometry: ${shape}
- Custom Logo Embossing: ${embossed ? 'Yes (Included)' : 'No'}
- Indicative Estimate: Rp${unitPrice.toLocaleString('id-ID')} / unit (~Rp${estimatedTotal.toLocaleString('id-ID')} total)
*Note: Subject to final negative-mold 3D tooling review.`;

    onProceedToInquiry(details);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10251B]/70 backdrop-blur-xs">
      <div
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#10251B]/15 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#10251B]/10 bg-[#F7F9F6]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#2F7D4A]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
              CUSTOM MOLD & ORDER CONFIGURATOR
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#10251B]/60 hover:text-[#10251B] hover:bg-[#10251B]/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10251B] mb-1.5">
              Project Purpose
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Wedding Souvenirs', 'Corporate Gifting', 'Special Events'].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPurpose(p)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                    purpose === p
                      ? 'bg-[#10251B] text-white border-[#10251B]'
                      : 'bg-[#F7F9F6] border-[#10251B]/10 text-[#10251B] hover:border-[#2F7D4A]/40'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#10251B]">
                Estimated Production Volume
              </label>
              <span className="text-xs font-mono font-extrabold text-[#2F7D4A]">
                {quantity} Units
              </span>
            </div>
            <input
              type="range"
              min={50}
              max={1000}
              step={25}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full accent-[#2F7D4A] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#10251B]/50 mt-1">
              <span>50 (MOQ)</span>
              <span>250</span>
              <span>500</span>
              <span>1,000+</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10251B] mb-1.5">
              Geometric Form Factor
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Hexagonal Modern',
                'Minimalist Cylinder',
                'Tapered Faceted',
                'Organic Sculptural',
              ].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setShape(s)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-left flex items-center justify-between ${
                    shape === s
                      ? 'bg-[#10251B] text-white border-[#10251B]'
                      : 'bg-[#F7F9F6] border-[#10251B]/10 text-[#10251B] hover:border-[#2F7D4A]/40'
                  }`}
                >
                  <span>{s}</span>
                  {shape === s && <Check className="w-3.5 h-3.5 text-[#8DBF73]" />}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F7F9F6] border border-[#10251B]/10 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#10251B]">Custom Logo Embossing</div>
              <div className="text-[11px] text-[#10251B]/60">
                Negative tooling debossed brand mark on pot exterior
              </div>
            </div>
            <input
              type="checkbox"
              checked={embossed}
              onChange={(e) => setEmbossed(e.target.checked)}
              className="w-4 h-4 accent-[#2F7D4A] cursor-pointer"
            />
          </div>

          {/* Indicative Estimate Block */}
          <div className="p-4 rounded-xl bg-[#10251B] text-white border border-[#2F7D4A]/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8DBF73] uppercase tracking-wider block">
                INDICATIVE ESTIMATE (PILOT)
              </span>
              <div className="text-xl font-extrabold font-mono text-white mt-0.5">
                Rp{estimatedTotal.toLocaleString('id-ID')}
              </div>
              <span className="text-[11px] font-mono text-white/60">
                ~Rp{unitPrice.toLocaleString('id-ID')} / unit
              </span>
            </div>
            <span className="text-[10px] font-mono text-white/50 text-right max-w-[140px] leading-tight">
              Subject to tooling complexity confirmation
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#10251B]/10 bg-[#F7F9F6]">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-[#10251B]/20 text-xs font-bold uppercase tracking-wider text-[#10251B] hover:bg-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleProceed}
            className="px-5 py-2 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
          >
            <span>Transfer to Inquiry Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
