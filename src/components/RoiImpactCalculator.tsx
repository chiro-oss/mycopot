import React, { useState } from 'react';
import { Calculator, Check, DollarSign, Download, Leaf, ShieldAlert, Sparkles, TrendingUp, Trees, Zap } from 'lucide-react';
import type { Language } from '../types';

interface RoiImpactCalculatorProps {
  lang?: Language;
  onNavigateContact?: (customNote?: string) => void;
}

export const RoiImpactCalculator: React.FC<RoiImpactCalculatorProps> = ({
  lang = 'id',
  onNavigateContact,
}) => {
  // Slider states
  const [annualSeedlings, setAnnualSeedlings] = useState<number>(25000);
  const [nurseryType, setNurseryType] = useState<'ornamental' | 'forestry' | 'vegetables'>('ornamental');
  const [selectedPotSize, setSelectedPotSize] = useState<'mini' | 'medium' | 'large'>('medium');

  // Baseline values based on nursery type
  const typeMultipliers = {
    ornamental: { avgPlantValue: 35000, transplantLossPct: 0.18, label: 'Tanaman Hias & Florikultura' },
    forestry: { avgPlantValue: 20000, transplantLossPct: 0.22, label: 'Bibit Kehutanan & Reboisasi' },
    vegetables: { avgPlantValue: 12000, transplantLossPct: 0.15, label: 'Bibit Sayur & Hortikultura' },
  };

  const potPricing = {
    mini: { unitCost: 15000, bulkDiscountCost: 12500, sawdustWeightKg: 0.12, plasticSavedGrams: 14 },
    medium: { unitCost: 25000, bulkDiscountCost: 21000, sawdustWeightKg: 0.24, plasticSavedGrams: 28 },
    large: { unitCost: 40000, bulkDiscountCost: 34000, sawdustWeightKg: 0.45, plasticSavedGrams: 48 },
  };

  const currentType = typeMultipliers[nurseryType];
  const currentPot = potPricing[selectedPotSize];

  // Calculations
  const plasticUnitsEliminated = annualSeedlings;
  const plasticKgEliminated = Math.round((annualSeedlings * currentPot.plasticSavedGrams) / 1000);
  const sawdustUpcycledKg = Math.round(annualSeedlings * currentPot.sawdustWeightKg);
  // 1 kg of sawdust diverted from open burning saves ~1.4 kg CO2e; avoiding plastic saves ~2.5 kg CO2e/kg
  const co2AvoidedKg = Math.round(sawdustUpcycledKg * 1.35 + (plasticKgEliminated * 2.5));
  
  // Seedling survival savings
  // Standard transplant shock causes ~15-22% death rate. Direct planting with MYCOPOT reduces this to near 0%.
  const plantsSavedFromShock = Math.round(annualSeedlings * currentType.transplantLossPct);
  const transplantShockSavingsIdr = plantsSavedFromShock * currentType.avgPlantValue;

  // Labor time savings: standard nursery peeler takes ~15 seconds per seedling to peel polybag, discard, and handle damaged roots
  const laborHoursSaved = Math.round((annualSeedlings * 12) / 3600); // 12 seconds per plant saved
  const laborCostSavedIdr = laborHoursSaved * 25000; // estimated Rp 25.000 / hour farm labor

  const totalNurseryFinancialBenefitIdr = transplantShockSavingsIdr + laborCostSavedIdr;
  const totalMycopotInvestmentIdr = annualSeedlings * currentPot.bulkDiscountCost;

  const isId = lang === 'id';

  const handleInquireFromCalculator = () => {
    if (onNavigateContact) {
      const summary = `Simulasi ROI Nursery: ${annualSeedlings.toLocaleString('id-ID')} bibit/tahun (${currentType.label}), tipe pot ${selectedPotSize.toUpperCase()}. Potensi penghematan Rp ${totalNurseryFinancialBenefitIdr.toLocaleString('id-ID')} & eliminasi ${plasticKgEliminated} kg plastik.`;
      onNavigateContact(summary);
    }
  };

  return (
    <div className="w-full rounded-3xl bg-white border border-[#10251B]/15 p-6 sm:p-10 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[#10251B]/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 mb-2">
            <Calculator className="w-3.5 h-3.5 text-[#2F7D4A]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
              {isId ? 'SIMULATOR ROI & DAMPAK ESG' : 'ROI & ESG IMPACT SIMULATOR'}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#10251B]">
            {isId ? 'Kalkulator Nilai Ekonomis & Lingkungan' : 'Economic & Environmental Value Calculator'}
          </h3>
          <p className="text-sm text-[#10251B]/75 mt-1">
            {isId
              ? 'Uji potensi penghematan biaya kematian bibit (transplant shock) dan pengurangan sampah plastik untuk pembibitan Anda.'
              : 'Calculate seedling survival savings, labor optimization, and zero-plastic ESG impact for your nursery.'}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto bg-[#F7F9F6] p-1.5 rounded-xl border border-[#10251B]/10">
          <span className="text-xs font-mono font-semibold px-2 text-[#10251B]/70">
            {isId ? 'Jenis Usaha:' : 'Sector:'}
          </span>
          {(['ornamental', 'forestry', 'vegetables'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setNurseryType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                nurseryType === type
                  ? 'bg-[#10251B] text-white shadow-xs'
                  : 'text-[#10251B]/70 hover:text-[#10251B] hover:bg-white'
              }`}
            >
              {type === 'ornamental' ? (isId ? 'Tanaman Hias' : 'Ornamental') : type === 'forestry' ? (isId ? 'Reboisasi' : 'Forestry') : (isId ? 'Hortikultura' : 'Vegetables')}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Column: Sliders and Configurations */}
        <div className="lg:col-span-6 space-y-6">
          {/* Slider: Annual Seedling Production */}
          <div className="p-5 rounded-2xl bg-[#F7F9F6] border border-[#10251B]/10 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#10251B]/80">
                {isId ? 'Volume Pembibitan / Tahun:' : 'Annual Seedling Capacity:'}
              </label>
              <span className="px-3 py-1 rounded-lg bg-white border border-[#10251B]/15 text-[#10251B] font-mono font-extrabold text-base">
                {annualSeedlings.toLocaleString('id-ID')} {isId ? 'Bibit' : 'Pots'}
              </span>
            </div>

            <input
              type="range"
              min={2500}
              max={150000}
              step={2500}
              value={annualSeedlings}
              onChange={(e) => setAnnualSeedlings(Number(e.target.value))}
              className="w-full h-2.5 bg-[#10251B]/15 rounded-lg appearance-none cursor-pointer accent-[#2F7D4A]"
            />

            <div className="flex justify-between text-[11px] font-mono text-[#10251B]/60">
              <span>2.500 (Nursery Kecil)</span>
              <span>50.000 (Menengah)</span>
              <span>150.000+ (Komersial)</span>
            </div>
          </div>

          {/* Pot Format Selector */}
          <div className="p-5 rounded-2xl bg-[#F7F9F6] border border-[#10251B]/10 space-y-3">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#10251B]/80 block">
              {isId ? 'Format Ukuran MYCOPOT:' : 'Select MYCOPOT SKU:'}
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { id: 'mini', label: 'Mini (8-10 cm)', desc: 'Bibit Kecil & Sukulen', price: 'Rp 12.500*' },
                { id: 'medium', label: 'Medium (12-15 cm)', desc: 'Standar Pembibitan', price: 'Rp 21.000*' },
                { id: 'large', label: 'Large (18-20 cm)', desc: 'Tanaman Produktif', price: 'Rp 34.000*' },
              ].map((pot) => (
                <button
                  key={pot.id}
                  onClick={() => setSelectedPotSize(pot.id as any)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    selectedPotSize === pot.id
                      ? 'bg-white border-[#2F7D4A] ring-2 ring-[#2F7D4A]/20 shadow-xs'
                      : 'bg-white/60 border-[#10251B]/10 hover:border-[#10251B]/30'
                  }`}
                >
                  <div className="text-xs font-extrabold text-[#10251B] uppercase">{pot.label}</div>
                  <div className="text-[10px] text-[#10251B]/70 mt-0.5">{pot.desc}</div>
                  <div className="text-xs font-mono font-bold text-[#2F7D4A] mt-2">{pot.price}</div>
                </button>
              ))}
            </div>
            <div className="text-[10px] text-[#10251B]/50 font-mono">
              *Harga estimasi grosir kemitraan B2B (diskon volume skala usaha)
            </div>
          </div>

          {/* Key Factor Explanation Note */}
          <div className="p-4 rounded-xl bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#2F7D4A] shrink-0 mt-0.5" />
            <div className="text-xs text-[#10251B]/90 leading-relaxed">
              <span className="font-bold text-[#10251B]">
                {isId ? 'Fakta Kritis Pembibitan:' : 'Critical Nursery Industry Insight:'}
              </span>{' '}
              {isId
                ? `Rata-rata 18% bibit mati atau stagnan pertumbuhannya karena kerusakan akar akibat penyobekan polybag. Dengan MYCOPOT yang ditanam langsung, mortalitas ditekan hingga mendekati 0%.`
                : `Nurseries lose 15-22% of plants to root damage when peeling synthetic polybags. MYCOPOT eliminates this mortality via direct soil planting.`}
            </div>
          </div>
        </div>

        {/* Right Column: Live Projected Return & Impact Dashboard */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          {/* Top Big Stat Box: Financial Value Created */}
          <div className="p-6 rounded-2xl bg-[#10251B] text-white border border-[#2F7D4A]/30 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8DBF73]">
                {isId ? 'TOTAL NILAI PENGHEMATAN NURSERY' : 'TOTAL NURSERY ECONOMIC SAVINGS'}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                <TrendingUp className="w-3 h-3" />
                {isId ? '+18% Laju Hidup Bibit' : '+18% Plant Survival'}
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Rp {totalNurseryFinancialBenefitIdr.toLocaleString('id-ID')}
              </span>
              <span className="text-xs font-mono text-white/60">/ {isId ? 'tahun' : 'year'}</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white/60 text-[10px] font-mono uppercase">{isId ? 'Bibit Terselamatkan' : 'Plants Saved'}</div>
                <div className="text-base font-bold text-white mt-0.5">
                  {plantsSavedFromShock.toLocaleString('id-ID')} {isId ? 'tanaman' : 'plants'}
                </div>
                <div className="text-[10px] text-emerald-300 font-mono mt-0.5">
                  ≈ Rp {transplantShockSavingsIdr.toLocaleString('id-ID')}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white/60 text-[10px] font-mono uppercase">{isId ? 'Efisiensi Waktu Kerja' : 'Labor Time Saved'}</div>
                <div className="text-base font-bold text-white mt-0.5">
                  {laborHoursSaved.toLocaleString('id-ID')} {isId ? 'jam kerja' : 'hours'}
                </div>
                <div className="text-[10px] text-emerald-300 font-mono mt-0.5">
                  ≈ Rp {laborCostSavedIdr.toLocaleString('id-ID')}
                </div>
              </div>
            </div>
          </div>

          {/* ESG Environmental Impact Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-white border border-[#10251B]/10 text-center shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-[#2F7D4A]/10 text-[#2F7D4A] mx-auto flex items-center justify-center mb-2">
                <Leaf className="w-4 h-4" />
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-[#10251B]">
                {plasticKgEliminated.toLocaleString('id-ID')} kg
              </div>
              <div className="text-[10px] font-mono text-[#10251B]/70 uppercase mt-0.5">
                {isId ? 'Plastik Dieliminasi' : 'Plastic Avoided'}
              </div>
              <div className="text-[9px] text-[#2F7D4A] font-semibold mt-1">
                ({plasticUnitsEliminated.toLocaleString('id-ID')} polybag)
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#10251B]/10 text-center shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-[#2F7D4A]/10 text-[#2F7D4A] mx-auto flex items-center justify-center mb-2">
                <Trees className="w-4 h-4" />
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-[#10251B]">
                {sawdustUpcycledKg.toLocaleString('id-ID')} kg
              </div>
              <div className="text-[10px] font-mono text-[#10251B]/70 uppercase mt-0.5">
                {isId ? 'Serbuk Gergaji Diolah' : 'Sawdust Upcycled'}
              </div>
              <div className="text-[9px] text-[#2F7D4A] font-semibold mt-1">
                {isId ? 'Cegah Pembakaran' : 'Zero burning'}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#10251B]/10 text-center shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-[#2F7D4A]/10 text-[#2F7D4A] mx-auto flex items-center justify-center mb-2">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-[#10251B]">
                {co2AvoidedKg.toLocaleString('id-ID')} kg
              </div>
              <div className="text-[10px] font-mono text-[#10251B]/70 uppercase mt-0.5">
                {isId ? 'Emisi Karbon Dicegah' : 'CO2e Reductions'}
              </div>
              <div className="text-[9px] text-[#2F7D4A] font-semibold mt-1">
                {isId ? 'Kredit Hijau ESG' : 'ESG verifiable'}
              </div>
            </div>
          </div>

          {/* Action Button: Inquire for B2B Partnership or Investor Report */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleInquireFromCalculator}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <span>{isId ? 'Ajukan Trial Pembibitan / Proposal B2B' : 'Request Nursery Pilot / B2B Trial'}</span>
              <Check className="w-4 h-4 text-[#8DBF73]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
