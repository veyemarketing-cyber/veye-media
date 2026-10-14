import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface PageProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const Businessdevelopmentandrevenueintelligence: React.FC<PageProps> = ({ onNavigate }) => {
  const capabilities = [
    {
      title: 'Target-Account Identification',
      desc: 'Pinpoint high-value accounts utilizing real-time market signals and corporate telemetry.',
      icon: 'Zap' as const
    },
    {
      title: 'Prospect & Company Research',
      desc: 'Synthesize organizational context, stakeholder hierarchies, and firmographic data instantly.',
      icon: 'BrainCircuit' as const
    },
    {
      title: 'Market & Competitive Intelligence',
      desc: 'Detect competitor positioning and peripheral market changes to time outreach with precision.',
      icon: 'Activity' as const
    },
    {
      title: 'Account Prioritization',
      desc: 'Rank opportunities algorithmically based on conversion probability and revenue impact.',
      icon: 'TrendingUp' as const
    },
    {
      title: 'Relationship Intelligence',
      desc: 'Map multi-threaded executive connections and historical relationship touchpoints.',
      icon: 'Layers' as const
    },
    {
      title: 'Opportunity Qualification',
      desc: 'Evaluate buyer intent signals and fit criteria against structured governance rules.',
      icon: 'ShieldCheck' as const
    },
    {
      title: 'Outreach Preparation',
      desc: 'Generate context-aware strategic briefings and messaging angles for business development teams.',
      icon: 'Workflow' as const
    },
    {
      title: 'Pipeline Visibility',
      desc: 'Maintain real-time cross-channel pipeline transparency with unified telemetry ingestion.',
      icon: 'Cpu' as const
    },
    {
      title: 'Next-Action Recommendations',
      desc: 'Provide clear, governed next steps to progress deals through complex sales cycles.',
      icon: 'Zap' as const
    },
    {
      title: 'Performance Measurement',
      desc: 'Measure pipeline velocity, conversion milestones, and revenue outcomes continuously.',
      icon: 'TrendingUp' as const
    }
  ];

  return (
    <div className="animate-fade-in bg-white text-secondary selection:bg-primary-100 selection:text-primary-900">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/30 rounded-full blur-[120px] -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

        {/* Neural Network Silhouette */}
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
            Business Development & Revenue Intelligence
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              Build a More Intelligent Business Development System
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Business development often depends on disconnected research, spreadsheets, CRM records, individual knowledge, manual follow-up, and inconsistent account prioritization. That creates friction between identifying an opportunity and acting on it.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Veye Media designs AI-enabled business development and revenue intelligence systems that connect market signals, account research, prospect intelligence, relationship activity, qualification, opportunity progression, and business development execution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate(View.VEYE7)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Explore Business Development Intelligence</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Discuss Your Revenue Architecture
            </button>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg font-bold text-secondary">
              "The objective is not simply to generate more leads. It is to build a system that identifies, understands, develops, and advances the right opportunities."
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
              Coordinating the Full BD Lifecycle
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Replacing manual spreadsheets and fragmented tools with a synchronized intelligence architecture.
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

      {/* 3. Veye Pursuit™ Spotlight */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 lg:p-16 rounded-3xl bg-secondary text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg text-xs font-mono tracking-wider uppercase text-primary-300 mb-6 border border-white/10">
                <Icon name="Zap" size={14} /> Ecosystem Technology
              </div>
              <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
                Veye Pursuit™
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 font-light">
                Veye Media’s specialized <strong>Veye Pursuit™</strong> technology applies this intelligence approach specifically to business development intelligence and execution—coordinating research, qualification, and multi-channel pipeline advancement.
              </p>
              <button
                onClick={() => onNavigate(View.TECHNOLOGY)}
                className="px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-400 text-white font-bold text-base transition-all shadow-lg flex items-center gap-2 group"
              >
                <span>Learn More About Veye Pursuit™</span>
                <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
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
            Advance the Right Opportunities.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Architect a business development system that combines real-time market signals, deep account context, and governed execution.
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