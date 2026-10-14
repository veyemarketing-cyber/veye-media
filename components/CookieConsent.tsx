import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';

interface CookieConsentProps {
  onOpenPolicy?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenPolicy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('veye_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('veye_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('veye_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-6 inset-x-0 z-50 flex justify-center items-center px-4 sm:px-6 lg:px-8 pointer-events-none animate-in fade-in slide-in-from-bottom-8 duration-500"
    >
      <div className="pointer-events-auto w-full max-w-5xl bg-secondary/95 backdrop-blur-xl text-white p-5 sm:p-7 rounded-3xl shadow-2xl border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Icon & Narrative */}
        <div className="flex items-start sm:items-center gap-4 w-full md:w-auto">
          <div className="w-12 h-12 rounded-2xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center text-primary-400 shrink-0">
            <Icon name="ShieldCheck" size={24} />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary-400">
                Governance & Compliance
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-500"></span>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Enterprise Privacy & Telemetry Standards
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              We utilize essential cookies and encrypted telemetry to guarantee platform security, measure latency, and optimize architectural performance.
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0 justify-end pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
          <button
            type="button"
            onClick={onOpenPolicy}
            className="text-slate-400 hover:text-white underline underline-offset-4 transition-colors text-xs font-semibold px-2 py-1 order-3 sm:order-1"
          >
            Review Policy
          </button>

          <button
            type="button"
            onClick={handleDecline}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs transition-colors order-2"
          >
            Essential Only
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-400 text-white font-bold text-xs shadow-lg shadow-primary-500/25 transition-all order-1 sm:order-3"
          >
            Accept All
          </button>
        </div>

      </div>
    </aside>
  );
};

export default CookieConsent;