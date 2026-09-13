import React from 'react';

interface MycopotLogoProps {
  variant?: 'full' | 'horizontal' | 'mark' | 'stacked';
  theme?: 'light' | 'dark';
  className?: string;
  markSize?: number;
  showSub?: boolean;
}

export const MycopotLogo: React.FC<MycopotLogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  markSize = 40,
  showSub = true,
}) => {
  const isDark = theme === 'dark';
  const primaryDark = isDark ? '#F7F9F6' : '#141815';
  const primaryGreen = isDark ? '#96C575' : '#3F5323';
  const subColor = isDark ? '#A7D487' : '#3F5323';

  // Mark SVG: Exactly replicated from the official MYCOPOT identity graphic:
  // - Dual sprout leaves at top with central vertical stem
  // - Single continuous stroke for left rim, corner, belly, and bottom base of pot
  // - Top-right pot rim and downward shoulder hook
  // - Lower-right oyster mushroom with outer cap arch, inner gill dome, S-curved stem, and bottom curl
  const Mark = (
    <svg
      width={markSize}
      height={markSize}
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="MYCOPOT Official Emblem"
    >
      {/* 1. Left Leaf (Tilted ~45° up-left) */}
      <path
        d="M 412 385 C 370 340 290 270 222 242 C 275 325 360 380 412 385 Z"
        fill={primaryGreen}
      />

      {/* 2. Right Leaf (Dominant, tilted up-right) */}
      <path
        d="M 438 360 C 470 260 570 110 775 48 C 765 210 635 345 438 360 Z"
        fill={primaryGreen}
      />

      {/* 3. Central Stem (Hanging down between pot rims) */}
      <path
        d="M 430 365 C 434 430 435 500 430 600"
        stroke={primaryGreen}
        strokeWidth="34"
        strokeLinecap="round"
      />

      {/* 4. Left Pot Contour (Continuous rim, rounded shoulder, bowl, and base) */}
      <path
        d="M 375 540 C 280 540 150 535 95 565 C 55 585 60 640 72 710 C 92 810 175 895 350 918"
        stroke={primaryGreen}
        strokeWidth="34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 5. Right Pot Rim & Shoulder Hook */}
      <path
        d="M 490 525 C 570 465 695 448 760 475 C 800 495 810 540 795 595 C 780 635 735 655 705 655"
        stroke={primaryGreen}
        strokeWidth="34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 6. Oyster Mushroom - Outer Cap Dome Arch */}
      <path
        d="M 412 940 C 405 780 475 645 640 632 C 770 625 870 685 920 758 C 940 788 940 825 905 848 C 865 870 820 858 775 840"
        stroke={primaryGreen}
        strokeWidth="34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 7. Oyster Mushroom - Inner Gill Contour & Underside */}
      <path
        d="M 545 795 C 585 740 675 725 740 738 C 800 750 832 780 832 815 C 832 838 800 848 760 844 C 710 840 635 836 565 812"
        stroke={primaryGreen}
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 8. Oyster Mushroom - S-Curved Stem */}
      <path
        d="M 572 812 C 625 840 650 885 630 928 C 610 960 540 968 500 955"
        stroke={primaryGreen}
        strokeWidth="28"
        strokeLinecap="round"
      />

      {/* 9. Oyster Mushroom - Bottom Root / Gill Curl */}
      <path
        d="M 715 845 C 750 875 765 915 738 948 C 710 975 660 978 640 968"
        stroke={primaryGreen}
        strokeWidth="28"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{Mark}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center select-none text-center ${className}`}>
        <div className="mb-2">{Mark}</div>
        <div className="flex items-baseline font-extrabold tracking-tight text-3xl md:text-4xl leading-none">
          <span style={{ color: primaryDark }} className="transition-colors duration-200">
            myco
          </span>
          <span style={{ color: primaryGreen }} className="transition-colors duration-200">
            pot
          </span>
        </div>
        {showSub && (
          <div
            className="flex items-center justify-center gap-2 text-[8px] md:text-[9.5px] uppercase tracking-[0.24em] font-semibold mt-2.5 opacity-90 transition-colors duration-200"
            style={{ color: subColor }}
          >
            <span className="w-4 h-[1px] bg-current opacity-70 inline-block" />
            <span>Biomaterials for a Sustainable Future</span>
            <span className="w-4 h-[1px] bg-current opacity-70 inline-block" />
          </div>
        )}
      </div>
    );
  }

  // Horizontal or Full variant
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {Mark}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline tracking-tight font-extrabold text-2xl md:text-3xl leading-none">
          <span style={{ color: primaryDark }} className="transition-colors duration-200">
            myco
          </span>
          <span style={{ color: primaryGreen }} className="transition-colors duration-200">
            pot
          </span>
        </div>
        {showSub && (
          <div
            className="flex items-center gap-1.5 text-[7px] md:text-[8.5px] uppercase tracking-[0.24em] font-semibold mt-1 opacity-90 transition-colors duration-200 whitespace-nowrap"
            style={{ color: subColor }}
          >
            <span className="w-2.5 h-[1px] bg-current opacity-70 inline-block" />
            <span>Biomaterials for a Sustainable Future</span>
            <span className="w-2.5 h-[1px] bg-current opacity-70 inline-block" />
          </div>
        )}
      </div>
    </div>
  );
};

