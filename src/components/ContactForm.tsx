import React, { useEffect, useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Sparkles, Handshake, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  initialType?: 'general' | 'custom' | 'partnership';
  initialProductNotes?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialType = 'general',
  initialProductNotes = '',
  onSuccess,
}) => {
  const [inquiryType, setInquiryType] = useState<'general' | 'custom' | 'partnership'>(initialType);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: initialProductNotes ? `Inquiry regarding: ${initialProductNotes}\n\n` : '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setInquiryType(initialType);
    setFormData((prev) => ({
      ...prev,
      message: initialProductNotes ? `Inquiry regarding: ${initialProductNotes}\n\n` : '',
    }));
  }, [initialType, initialProductNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and inquiry message.');
      return;
    }
    setError(null);
    setIsSubmitted(true);
    if (onSuccess) {
      setTimeout(() => onSuccess(), 2000);
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-[#10251B]/15 p-6 sm:p-10 shadow-sm">
      {/* 3 Pathway Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <button
          type="button"
          onClick={() => setInquiryType('general')}
          className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
            inquiryType === 'general'
              ? 'bg-[#10251B] text-white border-[#10251B] shadow-sm'
              : 'bg-[#F7F9F6] border-[#10251B]/10 hover:border-[#2F7D4A]/50 text-[#10251B]'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider opacity-70">
              01 // INQUIRY
            </span>
            <MessageSquare className="w-4 h-4 text-[#8DBF73]" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-tight mb-1">
              General Inquiry
            </h4>
            <p className="text-[11px] opacity-80 leading-snug">
              For general questions about MYCOPOT biomaterials.
            </p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setInquiryType('custom')}
          className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
            inquiryType === 'custom'
              ? 'bg-[#10251B] text-white border-[#10251B] shadow-sm'
              : 'bg-[#F7F9F6] border-[#10251B]/10 hover:border-[#2F7D4A]/50 text-[#10251B]'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider opacity-70">
              02 // BESPOKE
            </span>
            <Sparkles className="w-4 h-4 text-[#8DBF73]" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-tight mb-1">
              Custom Product
            </h4>
            <p className="text-[11px] opacity-80 leading-snug">
              For custom pots, event souvenirs and corporate gifting.
            </p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setInquiryType('partnership')}
          className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
            inquiryType === 'partnership'
              ? 'bg-[#10251B] text-white border-[#10251B] shadow-sm'
              : 'bg-[#F7F9F6] border-[#10251B]/10 hover:border-[#2F7D4A]/50 text-[#10251B]'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider opacity-70">
              03 // B2B ECOSYSTEM
            </span>
            <Handshake className="w-4 h-4 text-[#8DBF73]" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-tight mb-1">
              Partnership
            </h4>
            <p className="text-[11px] opacity-80 leading-snug">
              For nurseries, florists, distributors and research partners.
            </p>
          </div>
        </button>
      </div>

      {isSubmitted ? (
        <div className="py-12 px-6 text-center rounded-xl bg-[#F7F9F6] border border-[#2F7D4A]/30 animate-in fade-in">
          <div className="w-12 h-12 rounded-full bg-[#2F7D4A] text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold uppercase text-[#10251B] tracking-tight mb-2">
            Inquiry Transmitted Successfully
          </h3>
          <p className="text-sm text-[#10251B]/75 max-w-md mx-auto mb-6">
            Thank you for reaching out to MYCOPOT. Our material development and business relations
            team will review your transmission and get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', organization: '', message: '' });
            }}
            className="px-5 py-2.5 rounded-xl bg-[#10251B] hover:bg-[#1b3d2c] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10251B] mb-1.5">
                Full Name <span className="text-[#2F7D4A]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Dr. Aulia Rahman / Plant Nursery Lead"
                className="w-full px-4 py-2.5 rounded-xl border border-[#10251B]/20 bg-[#F7F9F6] text-sm text-[#10251B] focus:outline-hidden focus:border-[#2F7D4A] focus:ring-2 focus:ring-[#2F7D4A]/20 transition-all placeholder:text-[#10251B]/40"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10251B] mb-1.5">
                Email Address <span className="text-[#2F7D4A]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. contact@organization.org"
                className="w-full px-4 py-2.5 rounded-xl border border-[#10251B]/20 bg-[#F7F9F6] text-sm text-[#10251B] focus:outline-hidden focus:border-[#2F7D4A] focus:ring-2 focus:ring-[#2F7D4A]/20 transition-all placeholder:text-[#10251B]/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10251B] mb-1.5">
                Organization / Affiliation
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="Company, botanical garden, or university"
                className="w-full px-4 py-2.5 rounded-xl border border-[#10251B]/20 bg-[#F7F9F6] text-sm text-[#10251B] focus:outline-hidden focus:border-[#2F7D4A] focus:ring-2 focus:ring-[#2F7D4A]/20 transition-all placeholder:text-[#10251B]/40"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10251B] mb-1.5">
                Inquiry Classification
              </label>
              <div className="px-4 py-2.5 rounded-xl border border-[#10251B]/20 bg-[#F7F9F6] text-sm text-[#10251B] font-mono capitalize">
                {inquiryType === 'general' && 'General Inquiry'}
                {inquiryType === 'custom' && 'Custom Mold / Gifting Order'}
                {inquiryType === 'partnership' && 'Commercial Nursery / Distribution Partnership'}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10251B] mb-1.5">
              Inquiry Details & Specifications <span className="text-[#2F7D4A]">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={
                inquiryType === 'custom'
                  ? 'Describe estimated quantity, desired dimensions/geometries, event dates, and logo embossing needs...'
                  : inquiryType === 'partnership'
                  ? 'Describe your nursery or botanical operation, projected monthly pot volume, and direct-planting requirements...'
                  : 'How can our biological materials team assist your research, nursery, or sustainable lifestyle goals?'
              }
              className="w-full px-4 py-2.5 rounded-xl border border-[#10251B]/20 bg-[#F7F9F6] text-sm text-[#10251B] focus:outline-hidden focus:border-[#2F7D4A] focus:ring-2 focus:ring-[#2F7D4A]/20 transition-all placeholder:text-[#10251B]/40 resize-y"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-[11px] font-mono text-[#10251B]/60">
              Direct connection to MYCOPOT Operations • Universitas Jambi
            </span>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2F7D4A] hover:bg-[#25633a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Send Inquiry</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
