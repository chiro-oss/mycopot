import React from 'react';

export interface MycopotLogoProps {
  variant?: 'full' | 'horizontal' | 'mark' | 'stacked';
  theme?: 'light' | 'dark';
  className?: string;
  markSize?: number;
  showSub?: boolean;
}

// Pixel-perfect vector paths reconstructed from the original MYCOPOT identity mark
const ICON_PATH =
  "M167 259 c-19 -3 -30 -15 -30 -30 0 -8 1 -9 3 -5 3 5 15 16 19 18 3 2 3 2 -3 -4 -3 -4 -7 -9 -10 -13 -2 -3 -4 -5 -4 -5 -1 2 -4 -1 -7 -8 l-3 -6 -2 4 c-1 2 -3 6 -4 7 l-2 4 3 -3 3 -3 0 4 c0 6 -2 10 -7 14 -4 4 -11 6 -17 6 l-5 0 0 -5 c1 -6 5 -14 9 -17 3 -3 10 -6 13 -6 2 0 2 -1 4 -7 0 -3 0 -3 -2 -3 -20 5 -36 5 -46 0 -6 -3 -7 -7 -7 -15 2 -18 18 -40 35 -48 9 -5 13 -5 13 -2 0 1 -2 3 -6 5 -14 8 -27 28 -29 44 0 6 0 7 2 8 4 2 21 2 30 1 11 -2 11 -2 11 -6 0 -6 1 -8 3 -8 2 0 3 2 4 12 0 6 2 14 5 21 2 4 2 4 8 4 17 2 31 17 33 36 l0 8 -4 0 c-2 0 -6 -1 -10 -2z M155 209 c-7 -1 -12 -4 -14 -7 -3 -4 -2 -6 5 -4 7 2 18 2 23 1 3 0 4 -1 4 -4 0 -1 -1 -5 -2 -8 l-2 -4 -6 -1 c-17 -2 -30 -11 -35 -27 -4 -10 -3 -24 1 -24 1 0 1 0 4 13 3 12 8 21 17 26 5 3 6 4 15 4 10 0 11 -1 16 -4 10 -5 15 -15 10 -18 -1 -1 -3 -1 -3 -1 -2 0 -2 1 -1 3 1 3 1 3 -1 6 -7 10 -28 11 -39 2 -4 -4 -4 -8 0 -10 2 -1 4 -2 4 -2 2 0 5 -3 5 -5 0 -1 -1 -2 -3 -2 -5 0 -15 -6 -15 -10 0 -5 8 -7 15 -3 5 3 9 8 10 14 0 4 0 5 -2 8 -2 2 -4 3 -4 3 -1 0 -2 1 -3 1 -2 2 -2 2 1 3 6 4 20 3 24 -1 2 -1 2 -2 -1 -4 -2 -2 -3 -4 -4 -8 -2 -7 -4 -10 -10 -14 -5 -2 -5 -4 -1 -4 7 0 15 7 17 13 0 3 1 3 6 3 10 1 14 4 14 11 0 7 -7 16 -16 22 -2 1 -3 2 -2 3 2 6 4 13 4 17 0 8 -5 12 -19 12 -4 1 -9 0 -12 0z m-5 -74 c-2 0 -3 -1 -4 -1 0 1 1 1 2 2 4 1 5 1 2 -1z";

const MYCO_PATH =
  "M256 215 c-2 -1 -6 -4 -8 -6 l-5 -4 -3 3 c-4 4 -10 7 -16 7 -6 0 -11 -3 -14 -9 -2 -4 -2 -6 -2 -20 0 -9 0 -17 1 -18 0 -1 2 -1 6 -1 l6 1 0 17 c0 16 0 17 2 18 3 2 7 0 11 -3 2 -3 3 -3 3 -18 l0 -15 6 0 6 1 0 14 1 15 3 3 c4 4 7 5 11 3 2 -1 2 -1 2 -17 0 -9 0 -17 1 -18 0 -1 2 -1 6 -1 l6 1 0 18 0 19 -4 4 c-5 6 -11 8 -19 6z M285 214 c-1 0 -1 -3 -1 -9 0 -13 3 -19 12 -21 l4 -1 0 -7 c0 -5 0 -8 1 -9 1 0 4 -1 6 -1 6 0 7 2 7 9 -1 6 0 7 5 9 10 3 13 7 13 21 0 10 0 10 -6 10 -6 0 -6 -1 -6 -8 0 -11 -1 -12 -12 -12 -11 0 -12 1 -12 12 0 5 0 7 -2 7 -1 1 -7 1 -9 0z M352 214 c-7 -2 -14 -9 -17 -16 -3 -12 2 -24 14 -30 12 -6 28 -2 36 8 2 2 3 4 3 5 0 2 -2 3 -6 4 -5 1 -5 1 -8 -1 -4 -5 -8 -6 -14 -6 -6 1 -10 3 -12 8 -5 15 15 25 26 13 4 -4 4 -4 8 -3 6 2 7 3 5 8 -6 10 -21 15 -35 10z M408 215 c-6 -2 -13 -9 -16 -16 -10 -25 23 -45 43 -27 15 13 10 36 -8 43 -5 1 -14 1 -19 0z m18 -15 c4 -3 5 -9 3 -14 -3 -10 -20 -11 -25 -1 -1 5 -1 8 1 12 4 7 15 9 21 3z";

const POT_PATH =
  "M451 215 c-2 -1 -2 -3 -2 -24 0 -16 0 -23 1 -24 1 0 3 -1 6 -1 2 0 4 1 5 1 0 1 1 4 1 8 l0 6 11 0 c17 1 22 5 23 16 0 6 0 7 -2 10 -3 4 -7 7 -12 8 -5 1 -29 1 -31 0z m29 -12 c1 -1 2 -2 2 -4 0 -5 -2 -6 -12 -6 l-8 0 0 6 0 5 8 0 c5 0 9 0 10 -1z M515 215 c-4 -2 -12 -8 -14 -13 -9 -17 5 -37 24 -37 15 0 28 14 27 28 -2 13 -13 23 -27 23 -4 0 -8 -1 -10 -1z m17 -13 c4 -3 6 -7 6 -13 -1 -9 -12 -14 -21 -9 -4 3 -5 7 -5 13 1 9 11 14 20 9z M552 215 c-1 0 -1 -2 -1 -6 l1 -4 7 -1 8 0 0 -19 1 -18 6 0 6 0 0 18 c0 21 -1 19 11 19 l6 1 0 4 c0 7 0 7 -23 7 -11 0 -21 0 -22 -1z";

const SUBTITLE_PATH =
  "M234 149 c0 -4 0 -4 3 -4 2 0 2 0 2 4 0 3 -1 4 -3 4 -2 0 -2 0 -2 -4z m3 2 c0 -1 0 -2 -1 -2 -1 0 -1 1 -1 2 0 0 0 1 1 1 1 0 1 -1 1 -1z m1 -4 c0 -1 -1 -1 -1 -1 -1 0 -2 0 -2 1 0 1 1 1 2 1 0 0 1 0 1 -1z M250 152 c-1 0 -1 -2 -1 -4 0 -2 1 -2 4 -2 2 0 3 0 3 2 0 3 -1 5 -3 5 -1 0 -2 0 -3 -1z m5 -3 c0 -2 -1 -2 -2 -2 -3 0 -4 3 -2 4 2 1 4 0 4 -2z M261 152 c-1 0 -1 -2 -1 -4 0 -2 0 -3 1 -2 0 2 2 3 2 1 1 -1 1 -1 2 0 1 1 1 1 1 -1 1 -1 1 1 1 3 0 4 0 4 -1 2 -2 -3 -2 -3 -4 0 0 1 -1 2 -1 1z M274 153 c0 -1 -1 -2 -2 -4 -1 -4 -1 -4 1 -3 1 1 2 1 3 0 2 -2 2 -1 0 3 -1 3 -2 5 -2 4z m1 -3 c1 -1 1 -2 0 -2 -1 0 -1 1 -1 2 0 0 0 1 0 1 1 0 1 -1 1 -1z M282 152 c0 0 1 -2 1 -4 l1 -3 0 3 c0 2 1 4 1 4 1 1 0 1 -1 1 -2 0 -3 0 -2 -1z M290 149 c0 -4 0 -4 3 -4 2 0 2 0 0 1 -2 0 -3 2 0 2 1 1 1 1 0 1 -3 0 -2 3 0 3 2 1 2 1 0 1 -3 0 -3 0 -3 -4z M299 149 c0 -3 0 -4 1 -3 0 2 1 2 2 0 2 -1 2 -1 2 3 0 3 -1 4 -3 4 -2 0 -2 0 -2 -4z m4 1 c0 0 -1 -1 -1 -1 -1 0 -2 1 -2 2 0 1 2 1 3 -1z M315 149 c-1 -2 -1 -4 -1 -4 1 0 1 0 1 1 0 1 4 1 4 0 1 -1 1 -1 1 0 0 1 -3 7 -3 7 -1 0 -1 -2 -2 -4z m3 0 c0 -1 0 -1 -1 -1 -1 0 -1 0 -1 1 0 1 0 1 0 1 1 0 1 0 2 -1z M324 149 c0 -4 0 -4 3 -4 2 0 2 0 0 1 -1 0 -2 1 -2 4 l-1 4 0 -5z M332 152 c0 -1 1 -2 2 -3 3 -2 3 -3 0 -3 -2 -1 -2 -1 0 -1 2 0 3 0 3 2 0 1 -1 2 -2 2 -1 1 -2 1 -1 2 0 1 1 1 2 1 0 -1 1 -1 0 0 0 1 -3 1 -4 0z M347 149 c0 -3 0 -4 1 -3 0 1 1 2 2 2 1 1 1 1 0 1 -3 0 -2 3 0 3 2 1 2 1 0 1 -3 0 -3 0 -3 -4z M357 151 c-3 -3 -1 -6 3 -6 3 1 4 4 2 7 -2 2 -3 1 -5 -1z m4 0 c2 -1 1 -4 -1 -5 -2 0 -4 2 -3 5 1 1 2 1 4 0z M368 152 c-1 -1 -1 -7 0 -7 1 0 1 1 1 2 0 1 0 1 1 0 1 -1 2 -2 2 -2 0 0 0 4 0 7 0 1 -3 1 -4 0z m3 -1 c0 -1 0 -2 -1 -2 -1 0 -1 1 -1 2 0 0 0 1 1 1 1 0 1 -1 1 -1z M384 150 c-1 -3 -2 -5 -2 -5 1 0 1 0 1 1 0 1 3 1 5 0 2 -2 1 0 -1 4 l-2 3 -1 -3z M399 151 c0 -1 1 -2 2 -3 2 0 1 -2 -1 -2 -1 -1 -1 -1 1 -1 3 0 3 3 1 4 -2 1 -3 3 0 3 0 -1 1 -1 1 0 0 1 -1 1 -2 1 -1 0 -2 -1 -2 -2z M408 149 c0 -3 1 -4 2 -4 3 0 4 2 4 6 0 2 0 2 -1 -1 -1 -5 -4 -5 -4 -1 l-1 4 0 -4z M419 152 c-2 -1 -1 -3 1 -3 3 -1 3 -3 0 -3 -2 -1 -2 -1 0 -1 2 0 3 0 3 2 0 1 -1 2 -2 3 -1 0 -2 1 -1 1 0 1 1 1 2 1 0 -1 1 -1 0 0 0 1 -2 1 -3 0z M428 152 c0 0 1 -2 1 -4 0 -1 0 -3 1 -3 1 0 1 2 1 3 0 2 1 4 1 4 1 1 0 1 -2 1 -2 0 -3 0 -2 -1z M438 150 c-2 -5 -2 -5 0 -4 2 1 2 1 3 0 2 -3 2 0 0 4 l-2 4 -1 -4z m2 -1 c0 -1 0 -1 -1 -1 -1 0 -1 0 0 1 0 1 0 1 1 1 0 0 0 0 0 -1z M453 149 c0 -3 0 -4 1 -2 0 1 1 2 2 2 1 -1 1 0 0 2 -2 3 -3 2 -3 -2z M466 150 c-2 -5 -2 -5 0 -4 2 1 2 1 3 0 2 -3 2 0 0 4 l-2 4 -1 -4z m2 -1 c0 -1 0 -1 -1 -1 -1 0 -1 0 0 1 0 1 0 1 1 1 0 0 0 0 0 -1z M475 149 c0 -4 0 -4 3 -4 2 0 2 0 2 4 0 3 -1 4 -3 4 -2 0 -2 0 -2 -4z m3 2 c0 0 0 -1 -1 -1 -1 -1 -1 0 -1 0 0 1 0 2 1 2 1 0 1 0 1 -1z m1 -4 c0 -1 -1 -1 -1 -1 -1 0 -2 0 -2 1 0 1 1 1 2 1 0 0 1 0 1 -1z M493 149 c0 -4 0 -4 3 -4 2 0 2 0 0 1 -2 0 -3 2 0 2 1 1 1 1 0 1 -1 0 -2 1 -2 1 0 1 1 2 2 2 1 1 1 1 -1 1 -2 0 -2 0 -2 -4z M507 149 c0 -2 0 -4 1 -4 1 0 1 1 1 1 0 1 1 2 2 2 1 1 1 1 0 1 -1 0 -2 1 -2 1 0 1 1 2 2 2 1 1 0 1 -1 1 -3 0 -3 0 -3 -4z M516 150 c0 -4 1 -5 3 -5 3 0 3 0 3 4 0 3 0 3 -1 0 0 -4 -3 -4 -4 1 l-1 4 0 -4z M527 152 c1 0 2 -1 2 -4 l0 -3 1 3 c0 2 1 4 1 4 1 1 0 1 -2 1 -2 0 -3 0 -2 -1z M542 152 c-1 0 -1 -2 -1 -3 0 -2 -1 -3 -1 -3 -1 0 -2 1 -2 3 0 2 0 3 -1 3 -1 0 -1 -1 0 -5 0 -3 5 -3 6 0 0 3 0 6 -1 5z M547 149 c0 -4 2 -6 2 -2 0 1 0 1 1 0 2 -3 3 -2 2 1 0 5 0 5 -2 5 -3 0 -3 0 -3 -4z m4 2 c0 -1 0 -2 -1 -2 -1 0 -1 1 -1 2 0 0 0 1 1 1 1 0 1 -1 1 -1z M557 149 c0 -4 0 -4 3 -4 2 0 2 0 0 1 -2 0 -3 2 0 2 1 1 1 1 0 1 -3 0 -2 3 0 3 2 1 2 1 0 1 -3 0 -3 0 -3 -4z M243 149 c0 -2 0 -4 1 -4 1 0 1 2 1 4 0 1 0 3 -1 3 -1 0 -1 -2 -1 -3z M308 149 c0 -2 0 -4 1 -4 1 0 1 2 1 4 0 1 0 3 -1 3 -1 0 -1 -2 -1 -3z M447 149 c0 -3 0 -3 1 -2 0 1 0 3 0 4 -1 1 -1 0 -1 -2z M458 150 c0 -1 0 -3 0 -3 0 -1 0 -2 1 -2 1 0 1 1 1 3 0 4 -2 6 -2 2z M484 149 c0 -4 0 -4 3 -4 1 0 2 0 1 1 -1 0 -2 1 -2 3 0 2 0 3 -1 3 -1 0 -1 -2 -1 -3z M209 149 c0 -1 3 -1 8 -1 4 0 7 0 7 1 0 1 -3 1 -7 1 -5 0 -8 0 -8 -1z M574 149 c0 -1 3 -1 8 -1 5 0 8 0 8 1 0 1 -3 1 -8 1 -5 0 -8 0 -8 -1z";

export const MycopotLogo: React.FC<MycopotLogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  markSize = 36,
  showSub = false,
}) => {
  const isDark = theme === 'dark';

  // Palette matching brand identity:
  // Light: icon & POT in dark forest green (#203D1D), MYCO in deep charcoal (#16181A)
  // Dark: icon & POT in bright vibrant green (#8DBF73), MYCO in pure white (#F7F9F6)
  const iconColor = isDark ? '#8DBF73' : '#203D1D';
  const mycoColor = isDark ? '#F7F9F6' : '#16181A';
  const potColor = isDark ? '#8DBF73' : '#203D1D';
  const subColor = isDark ? '#8DBF73' : '#203D1D';

  // 1. Mark only (just the circular botanical pot & sprout emblem)
  if (variant === 'mark') {
    return (
      <div
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: markSize, height: markSize }}
      >
        <svg
          viewBox="70 114 132 136"
          className="w-full h-full object-contain block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="MYCOPOT Emblem"
        >
          <g transform="translate(0, 375) scale(1, -1)" fill={iconColor}>
            <path d={ICON_PATH} />
          </g>
        </svg>
      </div>
    );
  }

  // 2. Stacked variant (Emblem centered on top, wordmark centered below)
  if (variant === 'stacked') {
    const iconH = Math.round(markSize * 0.75);
    const wordmarkH = Math.round(markSize * 0.45);

    return (
      <div className={`inline-flex flex-col items-center justify-center text-center gap-2 ${className}`}>
        {/* Top Emblem */}
        <div style={{ width: iconH, height: iconH }}>
          <svg
            viewBox="70 114 132 136"
            className="w-full h-full object-contain block"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="MYCOPOT Emblem"
          >
            <g transform="translate(0, 375) scale(1, -1)" fill={iconColor}>
              <path d={ICON_PATH} />
            </g>
          </svg>
        </div>

        {/* Wordmark (MYCO + POT + Subtitle) */}
        <div style={{ height: showSub ? wordmarkH * 1.3 : wordmarkH, width: 'auto' }}>
          <svg
            viewBox={showSub ? "206 150 394 88" : "206 154 394 62"}
            style={{ height: '100%', width: 'auto' }}
            className="block object-contain"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="MYCOPOT Wordmark"
          >
            <g transform="translate(0, 375) scale(1, -1)">
              <path d={MYCO_PATH} fill={mycoColor} />
              <path d={POT_PATH} fill={potColor} />
              {showSub && <path d={SUBTITLE_PATH} fill={subColor} opacity={0.9} />}
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // 3. Horizontal & Full variant (Default for Navbar, Footer, Modals)
  // Bounding box without subtitle: [70, 114, 528, 136]
  // Bounding box with subtitle: [70, 114, 528, 136]
  const viewBox = showSub ? '70 114 528 136' : '70 114 528 136';

  return (
    <div
      className={`inline-flex items-center shrink-0 ${className}`}
      style={{ height: markSize, width: 'auto' }}
    >
      <svg
        viewBox={viewBox}
        style={{ height: '100%', width: 'auto' }}
        className="block max-h-full w-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="MYCOPOT"
      >
        <g transform="translate(0, 375) scale(1, -1)">
          {/* Emblem on the left */}
          <path d={ICON_PATH} fill={iconColor} />

          {/* MYCO in dark charcoal (or white on dark) */}
          <path d={MYCO_PATH} fill={mycoColor} />

          {/* POT in brand green */}
          <path d={POT_PATH} fill={potColor} />

          {/* Subtitle if requested: — BIOMATERIALS FOR A SUSTAINABLE FUTURE — */}
          {showSub && <path d={SUBTITLE_PATH} fill={subColor} opacity={0.88} />}
        </g>
      </svg>
    </div>
  );
};
