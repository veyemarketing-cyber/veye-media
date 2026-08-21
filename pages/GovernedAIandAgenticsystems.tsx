import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface PageProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const GovernedAIandAgenticsystems: React.FC<PageProps> = ({ onNavigate }) => {
  const authorityTiers = [
    {
      action: 'Observe',
      desc: 'Passively ingest signals, logs, and market telemetry across platforms without mutating state.',
      badge: 'Level 1',
      icon: 'Activity' as const
    },
    {
      action: 'Analyze',
      desc: 'Evaluate data against business context, historical benchmarks, and organizational models.',
      badge: 'Level 2',
      icon: 'BrainCircuit' as const
    },
    {
      action: 'Recommend',
      desc: 'Formulate reasoned strategies and options presented directly to human decision-makers.',
      badge: 'Level 3',
      icon: 'Cpu' as const
    },
    {
      action: 'Request Approval',
      desc: 'Stage multi-agent actions requiring explicit Human-on-the-loop authorization before deployment.',
      badge: 'Level 4',
      icon: 'ShieldCheck' as const
    },
    {
      action: 'Execute',
      desc: 'Autonomously execute tasks that fall strictly within pre-approved thresholds and operational boundaries.',
      badge: 'Level 5',
      icon: 'Zap' as const
    },
    {
      action: 'Escalate',
      desc: 'Instantly redirect execution and notify leadership when anomalies or policy boundaries are reached.',
      badge: 'Level 6',
      icon: 'Workflow' as const
    },
    {
      action: 'Stop',
      desc: 'Programmatic kill-switches that halt downstream processes immediately upon policy violation.',
      badge: 'Fail-Safe',
      icon: 'Sliders' as const
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
            Governed AI & Agentic Systems
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              Increase AI Capability Without Losing Organizational Control
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              As AI systems become capable of reasoning, recommending decisions, initiating workflows, and taking actions across enterprise applications, governance becomes part of the system architecture.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Veye Media designs governed enterprise AI and agentic systems with defined authority, human oversight, operating rules, escalation paths, and accountability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate(View.VEYE7)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Explore Governed Enterprise AI</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Discuss AI Governance
            </button>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg font-bold text-secondary">
              "The goal is governed autonomy—not uncontrolled automation."
            </p>
          </div>
        </div>
      </section>

      {/* 2. Defined Authority Spectrum */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Authority Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              Defined Levels of System Authority
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              Not every decision should be autonomous. Not every workflow requires human approval. The architecture determines the appropriate level of authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authorityTiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-primary-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                      <Icon name={tier.icon} size={24} />
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                      {tier.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">{tier.action}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Governance-as-Code & Human-on-the-Loop */}
      <section className="py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/70 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono tracking-wider uppercase border border-white/10">
                <Icon name="ShieldCheck" size={14} />
                <span>Operating Framework</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Human-on-the-Loop Governance & Governance-as-Code
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                Veye7™ incorporates Human-on-the-Loop governance and Governance-as-Code principles so policies, permissions, thresholds, approval requirements, and operational boundaries become active components of system behavior.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                Rather than relying on static manuals or post-hoc auditing, operating constraints are compiled directly into the runtime environment—guaranteeing deterministic boundaries while unlocking autonomous velocity.
              </p>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4">Programmatic Guardrails</h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <Icon name="ShieldCheck" size={18} className="text-primary-400 mt-0.5 shrink-0" />
                  <span><strong>Threshold Enforcement:</strong> Automated execution halts instantly if budget, bid, or operational limits are exceeded.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="ShieldCheck" size={18} className="text-primary-400 mt-0.5 shrink-0" />
                  <span><strong>Policy-as-Code:</strong> Strict state-blocking compliance checks executed before every external API handshake.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="ShieldCheck" size={18} className="text-primary-400 mt-0.5 shrink-0" />
                  <span><strong>Immutable Action Logs:</strong> Transparent, non-repudiable audit trails of every observation, conclusion, and execution.</span>
                </li>
              </ul>
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
            Deploy Governed Enterprise AI.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Architect an agentic intelligence system that operates at machine velocity while remaining firmly under your strategic authority.
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