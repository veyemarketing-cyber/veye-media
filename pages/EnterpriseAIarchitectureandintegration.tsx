import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface PageProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const EnterpriseAIarchitectureandintegration: React.FC<PageProps> = ({ onNavigate }) => {
  const architecturalDecisions = [
    {
      title: 'What Existing Systems Should Remain',
      desc: 'Preserve and leverage core enterprise software investments, databases, and operational infrastructure without rip-and-replace disruption.',
      icon: 'Cpu' as const
    },
    {
      title: 'Where Integrations Are Required',
      desc: 'Build secure, high-velocity data pipelines and API handshakes between fragmented platforms and legacy environments.',
      icon: 'Layers' as const
    },
    {
      title: 'Which Processes Should Be Redesigned',
      desc: 'Identify operational bottlenecks and modernize workflows to support real-time data flows and agentic coordination.',
      icon: 'Workflow' as const
    },
    {
      title: 'Where Automation Is Sufficient',
      desc: 'Deploy deterministic, rule-based execution for high-volume, predictable tasks where AI reasoning is unnecessary.',
      icon: 'Zap' as const
    },
    {
      title: 'Where AI Reasoning Creates Value',
      desc: 'Integrate probabilistic AI models specifically where interpretation, unstructured analysis, and adaptability unlock business impact.',
      icon: 'BrainCircuit' as const
    },
    {
      title: 'Which Actions Require Human Authority',
      desc: 'Establish clear Human-on-the-loop checkpoints and role-based authority boundaries for critical or high-risk decisions.',
      icon: 'ShieldCheck' as const
    },
    {
      title: 'How Governance Should Operate',
      desc: 'Implement Governance-as-Code to programmatically enforce policies, compliance standards, and immutable audit logging.',
      icon: 'Sliders' as const
    },
    {
      title: 'How Architecture Evolves As Tech Changes',
      desc: 'Maintain a model-agnostic infrastructure layer so models, tools, and applications can upgrade freely without vendor lock-in.',
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
            Enterprise AI Architecture & Integration
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              Make AI Part of the Enterprise Architecture
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Organizations often already have CRM systems, ERP platforms, databases, analytics tools, cloud applications, automation platforms, APIs, and specialized software.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Enterprise AI should not require abandoning those investments simply to introduce intelligence.
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Veye Media designs model-agnostic enterprise AI architectures that integrate existing technologies with artificial intelligence, automation, agents, business rules, APIs, and human decision-making.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate(View.VEYE7)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Explore Veye7™ Architecture</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Discuss System Integration
            </button>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg font-bold text-secondary">
              "The result is an intelligence architecture designed around the enterprise rather than around a technology vendor."
            </p>
          </div>
        </div>
      </section>

      {/* 2. Architectural Framework Grid */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Architectural Determination
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              Coordinating Enterprise Systems & Intelligence
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our approach structures how existing investments, automation layers, AI models, and human leadership operate as a cohesive system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturalDecisions.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-primary-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                    <Icon name={item.icon} size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Model-Agnostic Advantage */}
      <section className="py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/70 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono tracking-wider uppercase border border-white/10">
                <Icon name="Cpu" size={14} />
                <span>Architecture Longevity</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Designed Around Your Business, Not a Single Vendor
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                AI technology cycles change rapidly, but your core business architecture should remain stable. Veye Media builds model-agnostic orchestration layers that adapt seamlessly as frontier models, APIs, and data sources evolve.
              </p>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-base sm:text-lg font-bold text-white mb-1">Preserve What Works, Accelerate What's Next</p>
                <p className="text-xs sm:text-sm text-slate-300">Integrate existing CRMs, ERPs, and databases directly into a unified intelligence mesh without vendor lock-in.</p>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6">Unified Tech Stack Handshake</h3>
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span>Deterministic Core (APIs, ERP, CRM)</span>
                  <span className="text-emerald-400 font-bold">Stable</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span>Velocity Sync Engine™ (VSE)</span>
                  <span className="text-cyan-400 font-bold">Orchestration</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span>Probabilistic AI Models & Agents</span>
                  <span className="text-primary-400 font-bold">Adaptive</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span>Governance & Human Oversight</span>
                  <span className="text-amber-400 font-bold">Enforced</span>
                </div>
              </div>
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
            Architect Your Enterprise Intelligence System.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Connect your existing technology stack with modern AI capabilities and governed business logic.
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