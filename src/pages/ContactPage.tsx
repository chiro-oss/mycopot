import React from 'react';
import { Building2, Mail, MapPin, MessageSquare } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { SectionHeading } from '../components/SectionHeading';
import type { PageId } from '../types';

interface ContactPageProps {
  onNavigate?: (page: PageId) => void;
  customProductNotes?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ customProductNotes }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#10251B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F7D4A]/10 border border-[#2F7D4A]/20 mb-4">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#2F7D4A] uppercase">
                INQUIRY & COLLABORATION
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#10251B] leading-[1.08] mb-4">
              LET'S GROW
              <br />
              <span className="text-[#2F7D4A]">THE NEXT MATERIAL.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#10251B]/80 leading-relaxed">
              Whether you are an eco-conscious plant nursery seeking direct-planting solutions, an
              organization commissioning custom biomaterial souvenirs, or a research partner, our team
              is eager to collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information */}
      <section className="py-16 md:py-24 bg-[#F7F9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <ContactForm
                initialType={customProductNotes ? 'custom' : 'general'}
                initialProductNotes={customProductNotes}
              />
            </div>

            {/* Information & Channels Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Institution Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#10251B]/10 shadow-sm space-y-4">
                <span className="text-xs font-mono font-bold text-[#2F7D4A] uppercase tracking-wider block">
                  INSTITUTIONAL HEADQUARTERS
                </span>
                <div>
                  <h4 className="font-extrabold uppercase text-base text-[#10251B] mb-1">
                    MYCOPOT Bioresearch Initiative
                  </h4>
                  <div className="flex items-start gap-2.5 text-xs text-[#10251B]/70 mt-2">
                    <MapPin className="w-4 h-4 text-[#2F7D4A] shrink-0 mt-0.5" />
                    <span>Universitas Jambi, Jambi, Sumatra, Indonesia</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#10251B]/10 text-xs font-mono text-[#10251B]/60 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#2F7D4A]" />
                    <span>[contact@mycopot.id placeholder]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-[#2F7D4A]" />
                    <span>Faculty Incubation Program</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Pathways Summary */}
              <div className="p-6 rounded-2xl bg-[#10251B] text-white border border-[#2F7D4A]/30 shadow-md space-y-4">
                <span className="text-xs font-mono font-bold text-[#8DBF73] uppercase tracking-wider block">
                  TRANSMISSION GUIDE
                </span>

                <div className="space-y-3 text-xs">
                  <div>
                    <h5 className="font-bold text-white uppercase mb-0.5">01 // Nursery Trials</h5>
                    <p className="text-white/70">
                      Request trial specimens for direct soil transplantation checks in your greenhouse.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <h5 className="font-bold text-white uppercase mb-0.5">02 // Custom Molds</h5>
                    <p className="text-white/70">
                      Inquire regarding lead times, 3D tooling fees, and MOQ for customized corporate gifts.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <h5 className="font-bold text-white uppercase mb-0.5">03 // Academic Research</h5>
                    <p className="text-white/70">
                      Explore joint testing on tropical lignocellulose residues and fungal binders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
