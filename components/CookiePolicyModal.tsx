import React from 'react';
import { Icon } from './Icon';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary-600 block">Governance & Compliance</span>
            <h3 className="text-xl font-black text-secondary">Cookie & Telemetry Policy</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-secondary flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
          <section className="space-y-2">
            <h4 className="font-bold text-secondary text-base">1. Policy Overview</h4>
            <p>
              Veye Media uses cookies and telemetry identifiers to ensure site reliability, manage secure sessions, and evaluate architectural traffic. We do not sell or monetize personal browsing history.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-secondary text-base">2. Categories of Cookies Used</h4>
            <div className="space-y-3 pt-1">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-bold text-secondary text-xs mb-1">Strictly Necessary Cookies</p>
                <p className="text-xs text-slate-500">Required for platform navigation, security tokens, and state preservation during intake submissions.</p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-bold text-secondary text-xs mb-1">Performance & Analytics Telemetry</p>
                <p className="text-xs text-slate-500">Collects anonymous operational diagnostics to assess load speeds, page interaction latency, and interface usability.</p>
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-secondary text-base">3. Managing Preferences</h4>
            <p>
              You can adjust or revoke your cookie preferences at any time by clearing your browser cache or selecting "Essential Only" on the consent prompt.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-secondary text-white font-bold text-xs hover:bg-secondary-hover transition-all"
          >
            Close Policy
          </button>
        </div>

      </div>
    </div>
  );
};