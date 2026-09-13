import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
  darkTheme?: boolean;
  className?: string;
  badge?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  alignment = 'left',
  darkTheme = false,
  className = '',
  badge,
}) => {
  const isCenter = alignment === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      <div
        className={`flex items-center gap-2.5 mb-3.5 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        {eyebrow && (
          <span
            className={`text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase ${
              darkTheme ? 'text-[#8DBF73]' : 'text-[#2F7D4A]'
            }`}
          >
            {eyebrow}
          </span>
        )}
        {badge && (
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded border tracking-wider uppercase ${
              darkTheme
                ? 'bg-[#1D452B]/40 border-[#8DBF73]/30 text-[#8DBF73]'
                : 'bg-[#2F7D4A]/10 border-[#2F7D4A]/20 text-[#2F7D4A]'
            }`}
          >
            {badge}
          </span>
        )}
      </div>

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] uppercase mb-4 ${
          darkTheme ? 'text-white' : 'text-[#10251B]'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed font-normal ${
            darkTheme ? 'text-[#F7F9F6]/80' : 'text-[#10251B]/80'
          } ${isCenter ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
