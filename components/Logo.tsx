import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * Global Logo Component
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
}) => {
  // Since the background is white, we want the "dark" variant (original colors)
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center ${className}`}>
      <img
        // Vite serves public folder assets at the root '/'
        src="/veye-media-logo.png"
        alt="Veye Media"
        className={`block h-10 w-auto object-contain ${
          // On a white Navbar, we do NOT want to invert the logo
          isLight ? 'brightness-0 invert' : ''
        }`}
        draggable={false}
        // If the image fails to load, this will log the error to your console
        onError={() => console.error("Logo failed to load at /veye-media-logo.png")}
      />
    </div>
  );
};