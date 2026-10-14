import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface PageProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const Salesandmarketingintelligence: React.FC<PageProps> = ({ onNavigate }) => {
  const capabilities = [
    {
      title: 'Identify Meaningful Buyer Signals',
      desc: 'Detect high-intent actions across digital footprints, search behavior, website interactions, and campaign touchpoints in real time.',
      icon: 'Zap' as const
    },
    {
      title: 'Analyze Customer & Prospect Behavior',
      desc: 'Evaluate cross-channel engagement patterns using unified data models and contextual semantic reasoning.',
      icon: 'BrainCircuit' as const
    },
    {
      title: 'Improve Audience & Account Prioritization',
      desc: 'Rank accounts and prospect segments dynamically based on intent velocity, fit criteria, and pipeline potential.',
      icon: 'TrendingUp' as const
    },
    {
      title: 'Coordinate Marketing & Sales Activity',
      desc: 'Bridge disconnected silos between demand generation and sales outreach to ensure aligned timing on every account interaction.',
      icon: 'Workflow' as const
    },
    {
      title: 'Personalize Engagement Based on Context',
      desc: 'Deliver tailored messaging, dynamic collateral, and relevant value propositions grounded in account-specific context.',
      icon: 'Cpu' as const
    },
    {
      title: 'Identify Changes in Buying Behavior',
      desc: 'Monitor real-time shifts in prospect sentiment, hesitation signals, or engagement spikes to adjust outreach instantly.',
      icon: 'Activity' as const
    },
    {
      title: 'Recommend Governed Next Actions',
      desc: 'Provide sales and marketing teams with clear, reasoned next steps designed to progress deals through active stages.',
      icon: 'ShieldCheck' as const
    },
    {
      title: 'Measure Journey Movement',
      desc: 'Track account progression across touchpoints, evaluating milestone velocities against defined revenue targets.',
      icon: 'Layers' as const
    },
    {
      title: 'Learn From Outcomes',
      desc: 'Feed engagement outcomes back into the intelligence core to perpetually calibrate messaging, bidding, and account scoring logic.',
      icon: 'RefreshCw' as const
    }
  ];

  const intelligenceCadence = [
    { step: '01', name: 'Signal', desc: 'Capture cross-channel buyer telemetry' },
    { step: '02', name: 'Understand', desc: 'Weave intent into account context' },
    { step: '03', name: 'Decide', desc: 'Determine optimal engagement angle' },
    { step: '04', name: 'Act', desc: 'Coordinate multi-channel execution' },
    { step: '05', name: 'Learn', desc: 'Evaluate conversion feedback' },
    { step: '06', name: 'Repeat', desc: 'Continuous closed-loop calibration' }
  ];

  return (
    <div className="animate-fade-in bg-white text-secondary selection:bg-primary-100 selection:text-primary-900">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/30 rounded-full blur-[120px] -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

        {/* Intelligence Mesh Graphic Overlay */}
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
            Sales & Marketing Intelligence
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              Connect Buyer Signals to Coordinated Action
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Modern customers generate signals across websites, search engines, CRM platforms, email, advertising, social media, sales conversations, customer systems, and other digital environments.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              When those signals remain isolated, sales and marketing teams react independently and often too slowly. Veye Media architects AI-enabled sales and marketing intelligence systems that connect customer behavior, buyer intent, campaign activity, CRM data, market intelligence, and revenue objectives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate(View.VEYE7)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Explore Sales & Marketing Intelligence</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Discuss Your Revenue Architecture
            </button>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto">
            <p className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-1">The Strategic Advantage</p>
            <p className="text-base sm:text-lg font-bold text-secondary">
              "The strategic advantage is not automation alone. It is reducing the time between signal, understanding, decision, and action and repeating that process as a continuous intelligence loop."
            </p>
          </div>
        </div>
      </section>

      {/* 2. Capabilities Grid */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              How Veye Media Coordinates Revenue Intelligence
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Moving beyond fragmented dashboards to orchestrate intent signals, account context, and synchronized sales and marketing execution.
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

      {/* 3. The Continuous Intelligence Cadence */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-2">
              Closed-Loop Orchestration
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-4">
              Signal → Understand → Decide → Act → Learn → Repeat
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Synchronizing multi-channel intent data into continuous, governed revenue acceleration.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {intelligenceCadence.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xs font-mono font-bold text-primary-600 block mb-1">{item.step}</span>
                <h4 className="text-base font-bold text-secondary mb-1">{item.name}</h4>
                <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
              </div>
            ))}
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
            Connect Buyer Signals to Coordinated Execution.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Architect an integrated sales and marketing intelligence system that aligns marketing touchpoints with sales outreach under governed business logic.
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