import React, { useState } from 'react';
import { Clock, Dna, Info, Layers, Leaf, ShieldAlert, Sparkles, Sprout } from 'lucide-react';
import type { Language } from '../types';

interface DecompositionSimulatorProps {
  lang?: Language;
}

export const DecompositionSimulator: React.FC<DecompositionSimulatorProps> = ({
  lang = 'id',
}) => {
  const [dayIndex, setDayIndex] = useState<number>(2); // 0, 15, 30, 60, 90 days

  const stages = [
    {
      day: 0,
      titleId: 'Hari ke-0: Penanaman Langsung (Direct Planting)',
      titleEn: 'Day 0: Direct Soil Planting',
      potStateId: 'Struktur pot utuh, kokoh, dan siap dimasukkan ke tanah bersama tanaman.',
      potStateEn: 'Vessel fully consolidated and planted directly with seedling intact.',
      microBiologyId: 'Jejaring hifa Pleurotus ostreatus tidak aktif secara vegetatif karena stabilisasi termal.',
      microBiologyEn: 'Inactivated hyphal matrix provides thermal and moisture buffer to root tips.',
      plasticContrastId: 'Polybag plastik harus disobek paksa, berisiko merusak 15-25% serabut akar muda.',
      plasticContrastEn: 'Polybag must be manually torn, causing high root circling & transplant mortality.',
      mycopotStatus: '100% Utuh & Berpori',
      degradationPct: 0,
      soilHumusGain: '+0%',
    },
    {
      day: 15,
      titleId: 'Hari ke-15: Penetrasi Akar & Rehidrasi Lembab',
      titleEn: 'Day 15: Root Penetration & Microbial Initiation',
      potStateId: 'Dinding pot mulai melunak secara mikroskopis terkena kelembaban tanah. Akar muda menembus dinding pot tanpa hambatan.',
      potStateEn: 'Vessel softens subtly from ambient soil moisture; primary roots penetrate porous wall easily.',
      microBiologyId: 'Bakteri tanah dan fungi asli mulai mengolonisasi permukaan lignoselulosa serbuk kayu.',
      microBiologyEn: 'Native rhizosphere bacteria initiate enzymatic breakdown of lignocellulosic fibers.',
      plasticContrastId: 'Polybag plastik (jika tertinggal) menghalangi akar, menyebabkan busuk akar akibat genangan air.',
      plasticContrastEn: 'Synthetic plastic blocks lateral root growth and traps stagnant anaerobic moisture.',
      mycopotStatus: 'Pelunakan Alami (Akar Menembus)',
      degradationPct: 20,
      soilHumusGain: '+4%',
    },
    {
      day: 30,
      titleId: 'Hari ke-30: Dekomposisi Aktif & Peningkatan Porositas',
      titleEn: 'Day 30: Active Biological Breakdown',
      potStateId: 'Dinding pot terfragmentasi menjadi partikel organik lunak yang terintegrasi dengan partikel tanah sekitar.',
      potStateEn: 'Structural walls fragment into soft biological particulates, merging with topsoil horizon.',
      microBiologyId: 'Enzim selulase dan laccase tanah menguraikan lignin & kitin menjadi unsur hara tersedia (N, P, K organik).',
      microBiologyEn: 'Soil cellulases metabolize fungal chitin and sawdust cellulose into bioavailable nitrogen & potassium.',
      plasticContrastId: 'Polybag plastik tetap 100% utuh tanpa perubahan fisik sedikitpun.',
      plasticContrastEn: 'Petroleum polymer remains 100% inert and intact, resisting soil digestion.',
      mycopotStatus: '45% Terurai',
      degradationPct: 45,
      soilHumusGain: '+11%',
    },
    {
      day: 60,
      titleId: 'Hari ke-60: Asimilasi Cacing Tanah & Bahan Organik',
      titleEn: 'Day 60: Soil Biota Assimilation',
      potStateId: 'Bentuk wadah pot telah melebur hampir sempurna ke dalam media perakaran tanah kebun.',
      potStateEn: 'Pot form factor seamlessly dissolves into rich humus layer supporting accelerated plant foliage.',
      microBiologyId: 'Aktivitas cacing tanah dan fauna makro tanah meningkat di sekitar zona pot karena kaya serat organik.',
      microBiologyEn: 'Earthworms and mycorrhizae multiply around the decomposition zone, aerating soil.',
      plasticContrastId: 'Polybag plastik mulai rapuh terpapar matahari tetapi tidak terurai, melepaskan serpihan mikroplastik.',
      plasticContrastEn: 'Polybag fragments slowly under UV but sheds non-degradable microplastics into soil.',
      mycopotStatus: '80% Menjadi Kompos',
      degradationPct: 80,
      soilHumusGain: '+16%',
    },
    {
      day: 90,
      titleId: 'Hari ke-90+: Kembali Menjadi Tanah & Humus Subur',
      titleEn: 'Day 90+: Complete Return to Biological Cycle',
      potStateId: '100% terurai tanpa sisa fisik wadah. Menjadi nutrisi humus organik yang memperkaya kesuburan tanah jangka panjang.',
      potStateEn: '100% mineralized into organic soil carbon. Leaves zero petroleum residues or chemical byproducts.',
      microBiologyId: 'Siklus sirkular tuntas: limbah kayu dan miselium kembali menyatu dengan siklus biosfer bumi.',
      microBiologyEn: 'Closed loop complete: captured wood carbon is sequestered organically in living plant root zone.',
      plasticContrastId: 'Polybag plastik membutuhkan 400–450 tahun lagi untuk hancur di TPA atau mencemari air tanah.',
      plasticContrastEn: 'Plastic polybag will persist for 400+ more years in landfills or ocean waterways.',
      mycopotStatus: '100% Terurai Sempurna',
      degradationPct: 100,
      soilHumusGain: '+19% Humus Tanah',
    },
  ];

  const current = stages[dayIndex];
  const isId = lang === 'id';

  return (
    <div className="w-full rounded-3xl bg-white border border-[#10251B]/15 p-6 sm:p-10 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#10251B]/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 mb-2">
            <Leaf className="w-3.5 h-3.5 text-[#2F7D4A]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
              {isId ? 'SIMULASI BIODEGRADASI TANAH' : 'SOIL DECOMPOSITION SIMULATOR'}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#10251B]">
            {isId ? 'Siklus Urai MYCOPOT vs. Polybag Plastik' : 'MYCOPOT vs. Plastic Polybag Lifecycle'}
          </h3>
          <p className="text-sm text-[#10251B]/75 mt-1">
            {isId
              ? 'Geser linimasa hari untuk melihat bagaimana matriks miselium dan serbuk kayu melebur menjadi hara organik tanah.'
              : 'Drag the timeline to simulate the biological breakdown of the mycelium matrix over 90 days in natural soil.'}
          </p>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2 bg-[#F7F9F6] p-3 rounded-2xl border border-[#10251B]/10 self-start md:self-auto">
          <Clock className="w-4 h-4 text-[#2F7D4A]" />
          <div className="text-xs font-mono">
            <span className="text-[#10251B]/60">{isId ? 'Fase Urai: ' : 'Timeline: '}</span>
            <span className="font-bold text-[#10251B]">Hari ke-{current.day}</span>
          </div>
        </div>
      </div>

      {/* Interactive Step Timeline Buttons */}
      <div className="pt-6 pb-4">
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {stages.map((st, idx) => (
            <button
              key={st.day}
              onClick={() => setDayIndex(idx)}
              className={`p-3 sm:p-4 rounded-2xl border transition-all text-center flex flex-col items-center justify-center ${
                dayIndex === idx
                  ? 'bg-[#10251B] text-white border-[#10251B] shadow-sm'
                  : 'bg-[#F7F9F6] text-[#10251B]/80 border-[#10251B]/10 hover:bg-white hover:border-[#2F7D4A]/40'
              }`}
            >
              <span className={`text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider block ${dayIndex === idx ? 'text-[#8DBF73]' : 'text-[#2F7D4A]'}`}>
                {st.day === 0 ? (isId ? 'Awal' : 'Start') : `+${st.day} ${isId ? 'Hari' : 'Days'}`}
              </span>
              <span className="text-xs sm:text-sm font-extrabold mt-0.5">
                {st.degradationPct}% {isId ? 'Urai' : 'Degraded'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Visual Simulation Display Box */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Visual: MYCOPOT In Soil */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-b from-[#F7F9F6] to-[#eef3ec] border border-[#2F7D4A]/25 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2F7D4A] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider text-[#2F7D4A] uppercase">
                  MYCOPOT (BIO-KOMPOSIT)
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#2F7D4A]/10 text-[#2F7D4A] font-mono text-xs font-bold">
                {current.mycopotStatus}
              </span>
            </div>

            {/* Visual Bar of Degradation Progress */}
            <div className="space-y-1.5 mb-5">
              <div className="flex justify-between text-xs font-mono font-semibold text-[#10251B]/80">
                <span>{isId ? 'Tingkat Dekomposisi Tanah:' : 'Soil Breakdown Rate:'}</span>
                <span>{current.degradationPct}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-[#10251B]/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#2F7D4A] to-[#8DBF73] transition-all duration-500 rounded-full"
                  style={{ width: `${current.degradationPct}%` }}
                />
              </div>
            </div>

            <h4 className="text-lg font-bold text-[#10251B] mb-2">
              {isId ? current.titleId : current.titleEn}
            </h4>

            <p className="text-xs sm:text-sm text-[#10251B]/85 leading-relaxed mb-4">
              {isId ? current.potStateId : current.potStateEn}
            </p>

            <div className="p-3.5 rounded-xl bg-white border border-[#2F7D4A]/20 text-xs text-[#10251B]/80 space-y-1">
              <div className="font-mono font-bold text-[#2F7D4A] uppercase text-[10px] flex items-center gap-1.5">
                <Dna className="w-3.5 h-3.5 text-[#2F7D4A]" />
                {isId ? 'Aktivitas Enzimatik & Biologis' : 'Microbiological Action'}
              </div>
              <p className="leading-relaxed">
                {isId ? current.microBiologyId : current.microBiologyEn}
              </p>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#10251B]/10 flex items-center justify-between text-xs font-mono">
            <span className="text-[#10251B]/60">{isId ? 'Kontribusi Bahan Organik:' : 'Organic Humus Yield:'}</span>
            <span className="font-bold text-[#2F7D4A]">{current.soilHumusGain}</span>
          </div>
        </div>

        {/* Right Visual: Plastic Polybag Benchmark (The Problem) */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-rose-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-xs font-mono font-bold tracking-wider text-rose-700 uppercase">
                  POLYBAG PLASTIK KONVENSIONAL
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-mono text-xs font-bold">
                0% Terurai (Persisten)
              </span>
            </div>

            {/* Zero Degradation Bar */}
            <div className="space-y-1.5 mb-5">
              <div className="flex justify-between text-xs font-mono font-semibold text-rose-900/80">
                <span>{isId ? 'Tingkat Dekomposisi Tanah:' : 'Soil Breakdown Rate:'}</span>
                <span>0% (450 Tahun Masa Urai)</span>
              </div>
              <div className="w-full h-3 rounded-full bg-rose-100 overflow-hidden">
                <div className="h-full bg-rose-500 w-[1%]" />
              </div>
            </div>

            <h4 className="text-lg font-bold text-[#10251B] mb-2">
              {isId ? 'Tetap Menjadi Limbah Polimer Sintetis' : 'Persistent Petroleum Polymer Waste'}
            </h4>

            <p className="text-xs sm:text-sm text-[#10251B]/85 leading-relaxed mb-4">
              {isId ? current.plasticContrastId : current.plasticContrastEn}
            </p>

            <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/80 text-xs text-rose-950 space-y-1">
              <div className="font-mono font-bold text-rose-700 uppercase text-[10px] flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                {isId ? 'Dampak Ekologis & Kerugian Bibit' : 'Ecological & Agronomic Damage'}
              </div>
              <p className="leading-relaxed">
                {isId
                  ? 'Plastik sekali pakai di pembibitan berakhir menumpuk di tanah, melepaskan mikroplastik, serta menyebabkan kematian akar saat bibit dipindahkan.'
                  : 'Single-use plastic polybags shed microscopic persistent polymers into arable soil and induce root shock when stripped.'}
              </p>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-rose-100 flex items-center justify-between text-xs font-mono text-rose-700">
            <span>{isId ? 'Status Polusi Mikroplastik:' : 'Microplastic Leaching Risk:'}</span>
            <span className="font-bold">{isId ? 'Tinggi & Berbahaya' : 'High & Long-term'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
