import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';
import { EditableText } from '../components/EditableText';

interface AboutProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const architecturalPillars = [
    {
      title: 'Objective Determines Architecture',
      desc: 'We do not begin with tools or models. We architect around the strategic outcome, integrating deterministic software with probabilistic AI where it creates measurable value.',
      icon: 'BrainCircuit' as const
    },
    {
      title: 'Active Autonomy™ & Governance',
      desc: 'Moving organizations from passive reporting to governed action. Multi-agent systems execute authorized workflows under strict Human-on-the-loop oversight.',
      icon: 'ShieldCheck' as const
    },
    {
      title: 'Silo Synthesis & Context',
      desc: 'Connecting fragmented telemetry across CRM, ERP, web visibility, and operations into an unified data tapestry to drive real-time decision clarity.',
      icon: 'Layers' as const
    },
    {
      title: 'Model-Agnostic Longevity',
      desc: 'The architecture remains stable while underlying frontier models and enterprise applications evolve freely, eliminating vendor lock-in.',
      icon: 'Cpu' as const
    }
  ];

  return (
    <div className="animate-fade-in bg-white text-secondary selection:bg-primary-100 selection:text-primary-900 font-sans">
      {/* 1. Brand Hero Banner */}
      <section 
        className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #002d62 0%, #001838 60%, #c47500 130%)'
        }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse-slow"></div>
        </div>

        {/* Intelligence Grid Background Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none">
          <svg className="w-[900px] h-[900px] text-white" viewBox="0 0 800 800" fill="none" stroke="currentColor">
            <circle cx="400" cy="400" r="350" strokeWidth="1" strokeDasharray="8 8" />
            <circle cx="400" cy="400" r="240" strokeWidth="1.5" />
            <circle cx="400" cy="400" r="130" strokeWidth="2" />
            <line x1="50" y1="400" x2="750" y2="400" strokeWidth="1.5" />
            <line x1="400" y1="50" x2="400" y2="750" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-primary-300 mb-6 border border-white/15 backdrop-blur-sm">
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              <EditableText section="about" field="heroSubtitle" />
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight max-w-4xl">
            <EditableText section="about" field="heroTitle" />
          </h1>

          <div className="max-w-3xl text-lg md:text-xl text-slate-200 font-light leading-relaxed">
            <EditableText section="about" field="heroDescription" multiline as="p" />
          </div>
        </div>
      </section>

      {/* 2. Mission & Strategic Positioning */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center mb-32">
          <div className="md:col-span-5 relative">
            <div className="w-full h-[450px] bg-slate-50 border border-slate-200/80 rounded-3xl flex items-center justify-center text-slate-300 relative overflow-hidden shadow-xl">
              <Icon name="BrainCircuit" size={180} className="text-primary-500/20 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-transparent to-accent/5"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/15 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block">
              Architectural Position
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight">
              <EditableText section="about" field="missionHeadline" />
            </h2>
            <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-4">
              <EditableText section="about" field="missionDescription1" multiline as="p" />
              <EditableText section="about" field="missionDescription2" multiline as="p" />
            </div>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate(View.VEYE7)}
                className="px-8 py-4 rounded-xl bg-secondary text-white font-bold text-sm hover:bg-secondary-hover transition-all shadow-lg flex items-center gap-2 group"
              >
                <span>Explore Veye7™ System</span>
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate(View.AUDIT)}
                className="px-8 py-4 rounded-xl bg-white text-secondary font-bold text-sm hover:bg-slate-50 transition-all border border-slate-200"
              >
                Talk With Veye Media
              </button>
            </div>
          </div>
        </div>

        {/* 3. Strategic Architectural Pillars */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-[3rem] p-10 md:p-16 mb-24 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-2">
              Strategic Foundation
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-secondary tracking-tight">
              A Stronger, More Durable Architecture
            </h3>
            <p className="text-slate-600 text-base mt-4">
              Designed around organizational objectives, policy-as-code safeguards, and continuous operational intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architecturalPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 group hover:shadow-xl hover:border-primary-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <Icon name={pillar.icon} size={24} />
                  </div>
                  <h4 className="font-bold text-lg text-secondary mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Action Log & Continuous Closed-Loop Callout */}
        <div className="p-10 md:p-12 rounded-3xl bg-secondary text-white relative overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-400 font-bold block mb-2">
              The Veye Advantage
            </span>
            <h3 className="text-2xl md:text-3xl font-black mb-3">
              We Deliver an Action Log. Not Static Reports.
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              Our continuous optimization loop feeds insights from the Clarity Core back into the Velocity Sync Engine™ to perpetually refine business logic, bid strategies, and pipeline execution.
            </p>
          </div>
          <button
            onClick={() => onNavigate(View.AUDIT)}
            className="shrink-0 px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-400 text-white font-bold text-base transition-all shadow-lg flex items-center gap-2 group"
          >
            <span>Initiate Dialogue</span>
            <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};