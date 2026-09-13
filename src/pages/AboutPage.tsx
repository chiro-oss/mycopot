import React from 'react';
import { ArrowRight, Building2, CheckCircle2, Compass, Target, Users } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { TeamCard } from '../components/TeamCard';
import { MilestoneTimeline } from '../components/MilestoneTimeline';
import { TEAM_MEMBERS } from '../data/content';
import type { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const missions = [
    'Develop functional, aesthetic and naturally biodegradable plant pots.',
    'Convert sawdust waste into value-added material.',
    'Educate consumers about alternatives to conventional plastic products.',
    'Develop an economically, socially and environmentally sustainable business model.',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 mb-4">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
                ABOUT MYCOPOT // UNIVERSITAS JAMBI
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#10251B] leading-[1.08] mb-6">
              BUILDING MATERIALS
              <br />
              <span className="text-[#2F7D4A]">THROUGH BIOLOGY.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#10251B]/90 font-medium leading-relaxed mb-4">
              MYCOPOT is an early-stage biomaterials startup focused on biodegradable plant pots made
              from oyster mushroom mycelium and sawdust.
            </p>
            <p className="text-base text-[#10251B]/75 leading-relaxed">
              Founded by student innovators and researchers at Universitas Jambi, MYCOPOT was born
              from a fundamental observation: Indonesia produces abundant timber byproducts, while
              horticulture remains burdened with non-biodegradable single-use plastic nursery polybags.
              We bridge this gap through biotechnology.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-[#F7F9F6] border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Vision Card */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#10251B] text-white border border-[#2F7D4A]/30 flex flex-col justify-between shadow-md">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2F7D4A] flex items-center justify-center text-white mb-6">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#8DBF73] uppercase block mb-2">
                  OUR VISION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight leading-snug text-white mb-4">
                  To become a leading producer of biological material-based products in Indonesia that
                  support sustainable agriculture and lifestyles.
                </h3>
              </div>

              <div className="pt-6 border-t border-white/10 text-xs font-mono text-white/60">
                Strategic Foundation // Early-Stage Roadmap
              </div>
            </div>

            {/* Mission Card */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-white border border-[#10251B]/10 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 flex items-center justify-center text-[#2F7D4A] mb-6">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#2F7D4A] uppercase block mb-2">
                  OUR MISSION
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#10251B] mb-6">
                  Four Strategic Imperatives
                </h3>

                <div className="space-y-4">
                  {missions.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#F7F9F6] border border-[#10251B]/15 text-[#10251B] font-mono text-xs font-bold flex items-center justify-center mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-sm sm:text-base text-[#10251B]/85 font-medium leading-relaxed">
                        {m}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#10251B]/10 text-xs font-mono text-[#10251B]/60">
                Institutional Origin: Universitas Jambi Innovation Initiative
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16. THE TEAM */}
      <section className="py-20 md:py-28 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="LEADERSHIP & RESEARCH"
            title="THE TEAM"
            description="The dedicated multidisciplinary founders driving material science, operational manufacturing, and institutional expansion at Universitas Jambi."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 17. MILESTONE */}
      <section className="py-20 md:py-28 bg-[#F7F9F6] border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="EXECUTION ROADMAP"
            title="STRATEGIC MILESTONES"
            description="From initial substrate formulation to prospective biological certification, our structured timeline guides operational scale and research rigor."
          />

          <MilestoneTimeline />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#10251B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#8DBF73] uppercase font-bold">
              ENGAGE WITH THE FOUNDING TEAM
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-1">
              Have questions for our founders or material researchers?
            </h3>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span>Contact MYCOPOT</span>
            <ArrowRight className="w-4 h-4 text-[#8DBF73]" />
          </button>
        </div>
      </section>
    </div>
  );
};
