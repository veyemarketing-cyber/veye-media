import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * Global Logo Component
 * - dark  → normal logo (for light backgrounds)
 * - light → inverted logo (for dark backgrounds)
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/veye-media-logo.png"
        alt="Veye Media"
        className={`block max-h-14 w-auto ${
          isLight ? 'invert brightness-0 contrast-100' : ''
        }`}
        draggable={false}
      />
    </div>
  );
};
