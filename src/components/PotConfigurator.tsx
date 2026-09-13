import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Layers, Ruler, Sparkles, Sprout, Tag, Zap } from 'lucide-react';
import type { Language } from '../types';

interface PotConfiguratorProps {
  lang?: Language;
  onProceedToQuote?: (quoteDetails: string) => void;
}

export const PotConfigurator: React.FC<PotConfiguratorProps> = ({
  lang = 'id',
  onProceedToQuote,
}) => {
  const [size, setSize] = useState<'mini' | 'medium' | 'large' | 'hexagon'>('medium');
  const [thickness, setThickness] = useState<'standard' | 'nursery' | 'reinforced'>('nursery');
  const [finish, setFinish] = useState<'natural' | 'wax' | 'embossed'>('natural');
  const [quantity, setQuantity] = useState<number>(250);

  const isId = lang === 'id';

  // Base configurations
  const sizeOptions = {
    mini: {
      name: 'MYCOPOT Mini',
      dimensions: '8.5 cm Tinggi × 9 cm Diameter',
      dimensionsEn: '8.5 cm Height × 9 cm Diameter',
      basePrice: 15000,
      weightSawdust: 0.12,
      idealFor: 'Bibit semai, kaktus, sukulen & microgreens',
      idealForEn: 'Seedlings, succulents, microgreens & desktop flora',
    },
    medium: {
      name: 'MYCOPOT Medium',
      dimensions: '13.5 cm Tinggi × 14 cm Diameter',
      dimensionsEn: '13.5 cm Height × 14 cm Diameter',
      basePrice: 25000,
      weightSawdust: 0.24,
      idealFor: 'Tanaman hias meja, herba dapur, nursery komersial',
      idealForEn: 'Kitchen herbs, table ornamentals, commercial nurseries',
    },
    large: {
      name: 'MYCOPOT Large',
      dimensions: '18 cm Tinggi × 20 cm Diameter',
      dimensionsEn: '18 cm Height × 20 cm Diameter',
      basePrice: 40000,
      weightSawdust: 0.45,
      idealFor: 'Tanaman buah mini, sayuran tahunan, landscape display',
      idealForEn: 'Dwarf fruit shrubs, perennial crops, landscape displays',
    },
    hexagon: {
      name: 'MYCOPOT Hexagon Souvenir',
      dimensions: '10 cm Tinggi × 11 cm Hexagonal',
      dimensionsEn: '10 cm Height × 11 cm Hexagonal',
      basePrice: 35000,
      weightSawdust: 0.2,
      idealFor: 'Souvenir pernikahan ramah lingkungan, cinderamata B2B ESG',
      idealForEn: 'Eco-wedding souvenirs, corporate ESG promotional gifting',
    },
  };

  const thicknessOptions = {
    standard: { label: '4.5 mm (Aerasi Ringan)', labelEn: '4.5 mm (Micro-aerated)', priceAdd: 0 },
    nursery: { label: '6.0 mm (Standar Pembibitan)', labelEn: '6.0 mm (Nursery Standard)', priceAdd: 2000 },
    reinforced: { label: '8.0 mm (Daya Tahan Ekstra)', labelEn: '8.0 mm (Reinforced Heavy-Duty)', priceAdd: 4500 },
  };

  const finishOptions = {
    natural: {
      label: 'Natural Mycelium Velvet',
      desc: 'Tekstur organik lembut khas miselium putih alami',
      descEn: 'Natural soft tactile white mycelial vegetative hyphae',
      priceAdd: 0,
    },
    wax: {
      label: 'Natural Plant-Wax Moisture Shield',
      desc: 'Lapisan lilin nabati alami untuk perlindungan siram basah harian',
      descEn: 'Bio-wax coating for prolonged heavy daily overhead irrigation',
      priceAdd: 2500,
    },
    embossed: {
      label: 'Custom Deboss Logo / Typography',
      desc: 'Pencetakan logo merk atau inisial acara timbul pada dinding pot',
      descEn: 'Negative mold debossing of corporate brand mark or wedding initials',
      priceAdd: 4000,
    },
  };

  // Quantity Tier Discount Calculation
  let discountPct = 0;
  if (quantity >= 5000) discountPct = 0.28;
  else if (quantity >= 2000) discountPct = 0.22;
  else if (quantity >= 1000) discountPct = 0.16;
  else if (quantity >= 500) discountPct = 0.10;
  else if (quantity >= 200) discountPct = 0.05;

  const currentSizeObj = sizeOptions[size];
  const unitPriceRaw =
    (currentSizeObj.basePrice +
      thicknessOptions[thickness].priceAdd +
      finishOptions[finish].priceAdd) *
    (1 - discountPct);
  const unitPriceFinal = Math.round(unitPriceRaw / 500) * 500; // Round to clean 500 IDR
  const totalCost = unitPriceFinal * quantity;
  const totalSawdustKg = Math.round(currentSizeObj.weightSawdust * quantity);

  // Production lead time: incubation takes ~10-12 days + mold prep
  const leadTimeDays = quantity > 2000 ? '18–24 Hari' : quantity > 500 ? '14–18 Hari' : '10–14 Hari';

  const handleProceed = () => {
    const details = `Konfigurasi Pesanan Kustom: ${currentSizeObj.name} | Ukuran: ${currentSizeObj.dimensions} | Ketebalan: ${thicknessOptions[thickness].label} | Finishing: ${finishOptions[finish].label} | Jumlah: ${quantity.toLocaleString('id-ID')} unit | Estimasi Biaya Satuan: Rp ${unitPriceFinal.toLocaleString('id-ID')} (Diskon Volume: ${Math.round(discountPct * 100)}%) | Total Estimasi: Rp ${totalCost.toLocaleString('id-ID')}.`;
    if (onProceedToQuote) {
      onProceedToQuote(details);
    }
  };

  return (
    <div className="w-full rounded-3xl bg-white border border-[#10251B]/15 p-6 sm:p-10 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#10251B]/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#2F7D4A]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
              {isId ? 'KONFIGURATOR BIOMATERIAL INTERAKTIF' : 'INTERACTIVE POT CONFIGURATOR'}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#10251B]">
            {isId ? 'Kustomisasi Pot & Estimasi Harga B2B' : 'Custom Mold & Volume Quotation Engine'}
          </h3>
          <p className="text-sm text-[#10251B]/75 mt-1">
            {isId
              ? 'Pilih geometri, ketebalan dinding hifa, branding timbul, dan volume untuk kalkulasi instan.'
              : 'Select geometric profile, wall thickness, custom branding deboss, and batch volume for live pricing.'}
          </p>
        </div>

        {discountPct > 0 && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold">
            <Tag className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isId ? `Diskon Volume: ${Math.round(discountPct * 100)}%` : `Volume Tier: -${Math.round(discountPct * 100)}%`}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Form Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Geometry & Size */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#10251B]/80 flex items-center justify-between">
              <span>{isId ? '1. Pilih Geometri & Ukuran' : '1. Select Geometry & Size'}</span>
              <span className="text-[#2F7D4A]">{currentSizeObj.dimensions}</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(['mini', 'medium', 'large', 'hexagon'] as const).map((s) => {
                const opt = sizeOptions[s];
                const isSel = size === s;
                return (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isSel
                        ? 'bg-[#10251B] text-white border-[#10251B] shadow-sm'
                        : 'bg-[#F7F9F6] text-[#10251B] border-[#10251B]/10 hover:border-[#2F7D4A]/40'
                    }`}
                  >
                    <div>
                      <div className={`text-xs font-extrabold uppercase ${isSel ? 'text-white' : 'text-[#10251B]'}`}>
                        {s.toUpperCase()}
                      </div>
                      <div className={`text-[10px] mt-0.5 leading-tight ${isSel ? 'text-white/70' : 'text-[#10251B]/60'}`}>
                        {s === 'hexagon' ? 'Bespoke Event' : s}
                      </div>
                    </div>
                    <div className={`text-xs font-mono font-bold mt-3 ${isSel ? 'text-[#8DBF73]' : 'text-[#2F7D4A]'}`}>
                      Rp {opt.basePrice.toLocaleString('id-ID')}
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-[#10251B]/70 italic">
              {isId ? `Aplikasi ideal: ${currentSizeObj.idealFor}` : `Recommended use: ${currentSizeObj.idealForEn}`}
            </p>
          </div>

          {/* Step 2: Wall Thickness */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#10251B]/80 block">
              {isId ? '2. Kalibrasi Ketebalan Dinding Pot' : '2. Calibrate Wall Thickness'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {(['standard', 'nursery', 'reinforced'] as const).map((th) => {
                const opt = thicknessOptions[th];
                const isSel = thickness === th;
                return (
                  <button
                    key={th}
                    onClick={() => setThickness(th)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSel
                        ? 'bg-white border-[#2F7D4A] ring-2 ring-[#2F7D4A]/20 shadow-xs'
                        : 'bg-[#F7F9F6] border-[#10251B]/10 hover:border-[#10251B]/25'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#10251B]">{isId ? opt.label : opt.labelEn}</div>
                    <div className="text-[10px] font-mono text-[#2F7D4A] mt-1 font-semibold">
                      {opt.priceAdd === 0 ? (isId ? 'Tanpa Tambahan' : 'Included') : `+Rp ${opt.priceAdd.toLocaleString('id-ID')}`}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Finishing & Branding */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#10251B]/80 block">
              {isId ? '3. Finishing Permukaan & Branding' : '3. Surface Finish & Branding Options'}
            </label>
            <div className="space-y-2">
              {(['natural', 'wax', 'embossed'] as const).map((fn) => {
                const opt = finishOptions[fn];
                const isSel = finish === fn;
                return (
                  <button
                    key={fn}
                    onClick={() => setFinish(fn)}
                    className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                      isSel
                        ? 'bg-white border-[#2F7D4A] ring-2 ring-[#2F7D4A]/20 shadow-xs'
                        : 'bg-[#F7F9F6] border-[#10251B]/10 hover:border-[#10251B]/25'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-[#10251B]">{opt.label}</div>
                      <div className="text-[11px] text-[#10251B]/70 mt-0.5">{isId ? opt.desc : opt.descEn}</div>
                    </div>
                    <div className="text-xs font-mono font-bold text-[#2F7D4A] shrink-0 ml-3">
                      {opt.priceAdd === 0 ? (isId ? 'Standar' : 'Base') : `+Rp ${opt.priceAdd.toLocaleString('id-ID')}`}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Quantity Slider */}
          <div className="p-4 rounded-2xl bg-[#F7F9F6] border border-[#10251B]/10 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#10251B]/80">
                {isId ? '4. Jumlah Unit Pesanan (Batch):' : '4. Batch Order Quantity:'}
              </label>
              <span className="px-3 py-1 rounded-lg bg-white border border-[#10251B]/15 text-[#10251B] font-mono font-extrabold text-base">
                {quantity.toLocaleString('id-ID')} {isId ? 'Unit' : 'Pieces'}
              </span>
            </div>
            <input
              type="range"
              min={50}
              max={5000}
              step={50}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full h-2.5 bg-[#10251B]/15 rounded-lg appearance-none cursor-pointer accent-[#2F7D4A]"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#10251B]/60">
              <span>50 (Trial Sampel)</span>
              <span>500 (-10%)</span>
              <span>2.000 (-22%)</span>
              <span>5.000+ (-28%)</span>
            </div>
          </div>
        </div>

        {/* Right Live Quotation Summary Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#10251B] text-white border border-[#2F7D4A]/30 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono font-bold tracking-widest text-[#8DBF73] uppercase">
                {isId ? 'ESTIMASI PENAWARAN (B2B)' : 'LIVE B2B QUOTATION'}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#2F7D4A] text-white text-[10px] font-mono font-bold uppercase">
                {leadTimeDays} Lead Time
              </span>
            </div>

            {/* Price Per Unit Display */}
            <div className="py-5 border-b border-white/10">
              <div className="text-white/60 text-xs font-mono uppercase">{isId ? 'Harga Satuan Efektif' : 'Effective Unit Price'}</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Rp {unitPriceFinal.toLocaleString('id-ID')}
                </span>
                <span className="text-xs text-white/60 font-mono">/ {isId ? 'unit' : 'piece'}</span>
              </div>
              {discountPct > 0 && (
                <div className="text-[11px] text-emerald-300 font-mono mt-1">
                  {isId
                    ? `Hemat ${Math.round(discountPct * 100)}% dibanding tarif ritel standar.`
                    : `Volume tier applied: ${Math.round(discountPct * 100)}% savings.`}
                </div>
              )}
            </div>

            {/* Total Batch Cost */}
            <div className="py-4 border-b border-white/10">
              <div className="text-white/60 text-xs font-mono uppercase">{isId ? 'Total Investasi Pesanan' : 'Total Batch Value'}</div>
              <div className="text-2xl font-extrabold text-emerald-400 mt-1">
                Rp {totalCost.toLocaleString('id-ID')}
              </div>
            </div>

            {/* Spec Breakdown Checklist */}
            <div className="py-4 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-white/80">
                <span className="text-white/60">{isId ? 'Geometri:' : 'Geometry:'}</span>
                <span className="font-semibold text-white">{currentSizeObj.name}</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span className="text-white/60">{isId ? 'Dinding:' : 'Wall:'}</span>
                <span className="font-semibold text-white">{thicknessOptions[thickness].label}</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span className="text-white/60">{isId ? 'Finishing:' : 'Finish:'}</span>
                <span className="font-semibold text-white truncate max-w-[180px] text-right">
                  {finishOptions[finish].label}
                </span>
              </div>
              <div className="flex justify-between text-white/80">
                <span className="text-white/60">{isId ? 'Serbuk Kayu Terolah:' : 'Sawdust Upcycled:'}</span>
                <span className="font-semibold text-emerald-300">≈ {totalSawdustKg} kg limbah</span>
              </div>
            </div>

            <button
              onClick={handleProceed}
              className="mt-6 w-full py-3.5 px-4 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <span>{isId ? 'Gunakan Spesifikasi Ini ke Form Kontak' : 'Transfer Spec to Inquiry Form'}</span>
              <Check className="w-4 h-4 text-[#8DBF73]" />
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7F9F6] border border-[#10251B]/10 text-xs text-[#10251B]/75 leading-relaxed">
            <span className="font-bold text-[#10251B] block mb-1">
              {isId ? '📋 Garansi Kualitas Bio-Komposit:' : '📋 Biomaterial Quality Standard:'}
            </span>
            {isId
              ? 'Seluruh pot diproduksi melalui inkubasi terstandarisasi suhu 25°C dan pemanggangan termal inaktivasi fungi. Bebas patogen dan aman langsung kontak dengan tanah.'
              : 'All units undergo strict climate chamber incubation and thermal fungal inactivation. 100% pathogen-free and soil safe.'}
          </div>
        </div>
      </div>
    </div>
  );
};
