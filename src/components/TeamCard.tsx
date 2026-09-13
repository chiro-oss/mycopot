import React from 'react';
import { User, GraduationCap, Building2 } from 'lucide-react';
import type { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  // Initials for avatar placeholder
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('');

  return (
    <div className="group bg-white rounded-2xl border border-[#10251B]/10 p-5 sm:p-6 transition-all duration-300 hover:border-[#2F7D4A]/50 hover:shadow-md flex flex-col justify-between">
      <div>
        {/* Avatar Placeholder Area */}
        <div className="relative w-16 h-16 rounded-2xl bg-[#F7F9F6] border border-[#10251B]/10 flex items-center justify-center text-[#10251B] mb-5 overflow-hidden group-hover:border-[#2F7D4A]/40 transition-colors">
          <div className="text-base font-extrabold font-mono tracking-wider text-[#2F7D4A]">
            {initials}
          </div>
          {/* Subtle bio-badge */}
          <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#2F7D4A]" />
        </div>

        {/* Member Info */}
        <h3 className="text-lg font-extrabold uppercase tracking-tight text-[#10251B] group-hover:text-[#2F7D4A] transition-colors">
          {member.name}
        </h3>

        <div className="text-xs font-bold font-mono text-[#2F7D4A] uppercase tracking-wide mt-0.5 mb-2">
          {member.role}
        </div>

        <p className="text-xs text-[#10251B]/70 leading-relaxed">
          {member.department}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-[#10251B]/10 flex items-center justify-between text-[11px] font-mono text-[#10251B]/60">
        <span className="flex items-center gap-1.5">
          <Building2 className="w-3 h-3 text-[#2F7D4A]" />
          <span>{member.affiliation}</span>
        </span>
      </div>
    </div>
  );
};
