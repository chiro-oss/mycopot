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
  markSize = 48,
  showSub = false,
}) => {
  const isDark = theme === 'dark';
  const sizeStyle = variant === 'mark' ? { width: markSize, height: markSize } : { width: 'auto', height: 'auto' };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src="/logo-mycopot.png"
        alt="MYCOPOT - Biomaterials for a Sustainable Future"
        style={sizeStyle}
        className={
          variant === 'mark'
            ? 'h-auto w-auto object-contain block flex-shrink-0'
            : 'h-auto w-auto max-w-full object-contain block flex-shrink-0'
        }
      />
      {showSub && variant !== 'mark' && null}
    </div>
  );
};