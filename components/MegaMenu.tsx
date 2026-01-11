
import React from 'react';
import { View } from '../types';
import { SERVICES_DATA } from '../constants';
import { Icon } from './Icon';

interface MegaMenuProps {
  onNavigate: (view: View, systemId?: string) => void;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onNavigate, onClose }) => {
  const categories = Array.from(new Set(SERVICES_DATA.map(s => s.category)));

  const handleServiceClick = (id: string) => {
    onNavigate(View.SYSTEM_DETAIL, id);
    onClose();
  };

  const handleAuditClick = () => {
    onNavigate(View.AUDIT);
    onClose();
  };

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-7xl px-4 sm:px-0 z-50 animate-fade-in-up">
      <div className="overflow-hidden rounded-3xl shadow-3xl ring-1 ring-black ring-opacity-5 bg-white border border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          
          {/* Main Service Area (Left 3 Columns) */}
          <div className="lg:col-span-3 p-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 h-[70vh] overflow-y-auto custom-scrollbar">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-[10px] font-bold text-primary-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                  {category}
                </h3>
                <ul className="space-y-3">
                  {SERVICES_DATA.filter(s => s.category === category).map((service) => (
                    <li key={service.id}>
                      <button 
                        onClick={() => handleServiceClick(service.id)}
                        className="group flex items-start gap-4 w-full text-left p-2 rounded-xl hover:bg-slate-50 transition-all"
                      >
                        <div className="mt-1 text-slate-400 group-hover:text-primary-600 transition-colors">
                          <Icon name={service.iconName} size={18} />
                        </div>
                        <div>
                          <span className="block font-bold text-slate-800 group-hover:text-primary-700 transition-colors text-sm">
                            {service.title}
                          </span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Side Panel (Right Column) */}
          <div className="p-10 bg-secondary text-white relative overflow-hidden flex flex-col justify-between">
             <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-accent/10 pointer-events-none"></div>
             
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-2 py-1 bg-white/10 rounded-lg text-[9px] font-bold uppercase tracking-widest text-primary-300 mb-6 border border-white/10">
                  <Icon name="Zap" size={10} /> Flagship Engine
                </div>
                <h4 className="text-3xl font-extrabold mb-4 leading-tight">
                  Intelligent <br/>Growth Stack.
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Deploy autonomous agents that proactively manage your visibility, engagement, and conversion without human oversight.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Icon name="Check" size={16} className="text-primary-500" />
                    <span>24/7 Signal Monitoring</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Icon name="Check" size={16} className="text-primary-500" />
                    <span>Predictive Budget Logic</span>
                  </div>
                </div>
             </div>

             <div className="relative z-10 mt-12">
                <button 
                  onClick={handleAuditClick}
                  className="w-full py-4 px-6 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-black/30 flex items-center justify-center gap-2 group"
                >
                  Start System Audit
                  <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>

        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};
