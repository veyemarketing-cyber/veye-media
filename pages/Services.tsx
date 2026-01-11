
import React from 'react';
import { View } from '../types';
import { SERVICES_DATA } from '../constants';
import { Icon } from '../components/Icon';
import { EditableText } from '../components/EditableText';

interface ServicesProps {
  onNavigate: (view: View, systemId?: string) => void;
  currentView?: View;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate, currentView }) => {
  // Determine if we should filter the systems based on the current view
  const categoryMap: Record<string, string> = {
    [View.GROWTH_SURFACES]: 'Digital Growth Surfaces',
    [View.MEDIA_INTELLIGENCE]: 'Media & Audio Intelligence',
    [View.DIGITAL_PLATFORMS]: 'Digital Platforms'
  };

  const activeCategory = currentView ? categoryMap[currentView] : null;
  const filteredData = activeCategory 
    ? SERVICES_DATA.filter(s => s.category === activeCategory)
    : SERVICES_DATA;

  const displayTitle = activeCategory || "What We Build.";

  return (
    <div className="animate-fade-in bg-white">
      {/* Brand Hero Banner */}
      <section 
        className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden"
        style={{
            background: "linear-gradient(135deg, #002d62 0%, #c47500 100%)"
        }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-primary-300 font-bold tracking-[0.2em] uppercase text-xs mb-4">
            {activeCategory ? "Category Architecture" : <EditableText section="services" field="heroSubtitle" />}
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            {displayTitle}
          </h1>
          <p className="max-w-2xl text-xl text-white/80 font-medium leading-relaxed">
            <EditableText section="services" field="heroDescription" multiline />
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((service, idx) => (
            <div 
              key={service.id} 
              onClick={() => onNavigate(View.SYSTEM_DETAIL, service.id)}
              className={`p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 group cursor-pointer flex flex-col ${!activeCategory && idx === 0 ? 'md:col-span-2 lg:col-span-3 bg-slate-50' : ''}`}
            >
              <div className="flex items-start gap-6">
                <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                  !activeCategory && idx === 0 ? 'bg-secondary text-white' : 'bg-slate-100 text-secondary group-hover:bg-secondary group-hover:text-white'
                }`}>
                  <Icon name={service.iconName} size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-secondary mb-3 flex items-center gap-3 group-hover:text-primary-600 transition-colors">
                    <EditableText section="systems" subKey={service.id} field="title" />
                    {!activeCategory && idx === 0 && (
                      <span className="px-2 py-1 bg-primary-500 text-white text-[10px] uppercase font-bold tracking-widest rounded-full">
                        Flagship
                      </span>
                    )}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-6">
                    <EditableText section="systems" subKey={service.id} field="description" multiline />
                  </p>
                  <button
                    className="inline-flex items-center text-primary-600 font-bold text-sm uppercase tracking-widest hover:text-secondary transition-colors group-hover:translate-x-1 duration-200"
                  >
                    System Specs <Icon name="ArrowRight" size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-secondary rounded-3xl p-12 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent"></div>
           <div className="relative z-10">
             <h3 className="text-3xl font-bold mb-4">
                <EditableText section="services" field="ctaHeadline" />
             </h3>
             <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                <EditableText section="services" field="ctaDesc" multiline />
             </p>
             <button
                onClick={() => onNavigate(View.AUDIT)}
                className="px-10 py-4 rounded-xl bg-primary-500 text-white font-bold hover:bg-primary-400 transition-all shadow-xl shadow-black/20"
              >
                Run Autonomous Audit
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
