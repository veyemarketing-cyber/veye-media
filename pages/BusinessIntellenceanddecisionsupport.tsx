import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface PageProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const BusinessIntellenceanddecisionsupport: React.FC<PageProps> = ({ onNavigate }) => {
  const capabilities = [
    {
      title: 'Identify Changes & Emerging Patterns',
      desc: 'Detect subtle operational shifts, anomalies, and market trends across real-time telemetry streams before they impact performance.',
      icon: 'Activity' as const
    },
    {
      title: 'Connect Signals Across Data Sources',
      desc: 'Break down cross-departmental silos by synthesizing customer, financial, marketing, and operational data into unified intelligence.',
      icon: 'Layers' as const
    },
    {
      title: 'Analyze Information in Business Context',
      desc: 'Evaluate data alongside strategic priorities, organizational policies, and historical context to eliminate irrelevant noise.',
      icon: 'BrainCircuit' as const
    },
    {
      title: 'Surface Exceptions & Opportunities',
      desc: 'Highlight critical operational outliers and revenue opportunities that require strategic attention or intervention.',
      icon: 'Zap' as const
    },
    {
      title: 'Provide Decision Support to Leaders & Teams',
      desc: 'Deliver clear, reasoned intelligence and predictive models directly to executive decision-makers with zero manual report collation.',
      icon: 'Cpu' as const
    },
    {
      title: 'Recommend Governed Next Actions',
      desc: 'Formulate precise, context-aware operational recommendations designed to execute within pre-approved enterprise boundaries.',
      icon: 'ShieldCheck' as const
    },
    {
      title: 'Measure Outcomes of Decisions',
      desc: 'Continuously track results against strategic objectives, feeding outcomes back into the architecture to refine future logic.',
      icon: 'TrendingUp' as const
    }
  ];

  return (
    <div className="animate-fade-in bg-white text-secondary selection:bg-primary-100 selection:text-primary-900">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/30 rounded-full blur-[120px] -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

        {/* Intelligence Mesh Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none z-0">
          <svg className="w-[1000px] h-[1000px] text-secondary" viewBox="0 0 800 800" fill="none" stroke="currentColor">
            <circle cx="400" cy="400" r="350" strokeWidth="1" strokeDasharray="8 8" />
            <circle cx="400" cy="400" r="240" strokeWidth="1.5" />
            <circle cx="400" cy="400" r="130" strokeWidth="2" />
            <line x1="50" y1="400" x2="750" y2="400" strokeWidth="1.5" />
            <line x1="400" y1="50" x2="400" y2="750" strokeWidth="1.5" />
            <circle cx="400" cy="400" r="16" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 mb-8 border border-slate-200 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Enterprise AI Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-secondary tracking-tight mb-8 leading-[1.08] max-w-5xl mx-auto">
            Business Intelligence & Decision Support
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              Turn Business Signals Into Actionable Intelligence
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Organizations generate enormous amounts of information, but having more data does not automatically create better decisions.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Customer activity, sales performance, market behavior, operational data, financial information, digital engagement, competitive activity, and internal systems may all contain signals that matter. The challenge is recognizing those signals and understanding them in context.
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Veye Media architects AI-powered business intelligence and decision-support systems that connect relevant data, organizational context, analytical capabilities, and human expertise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate(View.VEYE7)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Explore Enterprise Intelligence</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Discuss Your Intelligence Architecture
            </button>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg font-bold text-secondary">
              "The goal is to shorten the distance between signal, understanding, decision, and action."
            </p>
          </div>
        </div>
      </section>

      {/* 2. System Capabilities Grid */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              How Veye Media Transforms Intelligence
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Moving beyond static reporting toward dynamic, context-aware decision systems that reason across operational data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-primary-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                    <Icon name={cap.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{cap.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Closed-Loop Cadence */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
            Execution Cadence
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-12">
            The Decision Intelligence Loop
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-primary-600 block mb-2">01</span>
              <h3 className="text-xl font-bold text-secondary mb-2">Signal</h3>
              <p className="text-xs text-slate-500">Capture cross-system data in real time.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-primary-600 block mb-2">02</span>
              <h3 className="text-xl font-bold text-secondary mb-2">Understand</h3>
              <p className="text-xs text-slate-500">Synthesize data within organizational context.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-primary-600 block mb-2">03</span>
              <h3 className="text-xl font-bold text-secondary mb-2">Decide</h3>
              <p className="text-xs text-slate-500">Reason through options with governed authority.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-primary-600 block mb-2">04</span>
              <h3 className="text-xl font-bold text-secondary mb-2">Act</h3>
              <p className="text-xs text-slate-500">Execute approved recommendations and measure impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Engagement CTA */}
      <section className="py-24 lg:py-32 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
            Engagement & Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-8">
            Shorten the Distance Between Signal & Action.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Deploy business intelligence systems designed to provide absolute context and executive clarity across your entire operational stack.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary-500 text-white font-extrabold text-xl hover:bg-primary-400 transition-all shadow-2xl shadow-primary-500/25 flex items-center justify-center gap-3 group"
            >
              <span>Talk With Veye Media</span>
              <Icon name="ArrowRight" size={24} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.SOLUTIONS)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-secondary font-bold text-xl hover:bg-slate-100 transition-all border border-slate-200"
            >
              Back to Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};