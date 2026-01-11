
import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';
import { EditableText } from '../components/EditableText';

interface AboutProps {
  onNavigate: (view: View) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <h2 className="text-primary-300 font-bold tracking-[0.2em] uppercase text-xs mb-4">
            <EditableText section="about" field="heroSubtitle" />
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            <EditableText section="about" field="heroTitle" />
          </h1>
          <p className="max-w-2xl text-xl text-white/80 font-medium leading-relaxed">
            <EditableText section="about" field="heroDescription" multiline />
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="w-full h-[450px] bg-slate-100 rounded-3xl flex items-center justify-center text-slate-200 relative overflow-hidden">
                <Icon name="BrainCircuit" size={160} className="relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
          <div>
            <h2 className="text-accent font-bold tracking-widest uppercase text-xs mb-3">Strategic Repositioning</h2>
            <h3 className="text-3xl font-bold text-secondary mb-6 leading-tight">
              <EditableText section="about" field="missionHeadline" />
            </h3>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              <EditableText section="about" field="missionDescription1" multiline />
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              <EditableText section="about" field="missionDescription2" multiline />
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase text-xs mb-3">Strategic Pillars</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary">A Stronger, More Durable Vision</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all">
              <h3 className="font-bold text-lg text-secondary mb-3"><EditableText section="about" field="pillar1Title" /></h3>
              <p className="text-slate-500 text-sm leading-relaxed"><EditableText section="about" field="pillar1Desc" multiline /></p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all">
              <h3 className="font-bold text-lg text-secondary mb-3"><EditableText section="about" field="pillar2Title" /></h3>
              <p className="text-slate-500 text-sm leading-relaxed"><EditableText section="about" field="pillar2Desc" multiline /></p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all">
              <h3 className="font-bold text-lg text-secondary mb-3"><EditableText section="about" field="pillar3Title" /></h3>
              <p className="text-slate-500 text-sm leading-relaxed"><EditableText section="about" field="pillar3Desc" multiline /></p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all">
              <h3 className="font-bold text-lg text-secondary mb-3"><EditableText section="about" field="pillar4Title" /></h3>
              <p className="text-slate-500 text-sm leading-relaxed"><EditableText section="about" field="pillar4Desc" multiline /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
