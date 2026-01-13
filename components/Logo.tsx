import React from 'react';
import { Activity } from 'lucide-react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * Logo Placeholder - Global Brand Asset
 * This component acts as the single source of truth for the Veye Media brand identity.
 * Replace the SVG/Content here to update the brand logo globally across the application.
 */
export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex items-center gap-2 group transition-opacity hover:opacity-90 ${className}`}>
      {/* Visual Mark / Icon */}
      <div className={`w-10 h-10 rounded flex items-center justify-center transition-transform group-hover:scale-105 ${isDark ? 'bg-veye-navy' : 'bg-white'}`}>
        <Activity className={isDark ? 'text-white' : 'text-veye-navy'} size={24} />
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-bold tracking-tight uppercase italic ${isDark ? 'text-veye-navy' : 'text-white'}`}>
          Veye
        </span>
        <span className={`text-[10px] font-extrabold uppercase tracking-[0.2em] -mt-1 ${isDark ? 'text-veye-blue' : 'text-veye-blue'}`}>
          Media
        </span>
      </div>
    </div>
  );
};
