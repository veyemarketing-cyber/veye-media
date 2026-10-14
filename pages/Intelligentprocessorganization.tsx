import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface PageProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const Intelligentprocessorganization: React.FC<PageProps> = ({ onNavigate }) => {
  const capabilities = [
    {
      title: 'Connect Workflows Across Applications',
      desc: 'Orchestrate continuous multi-step pipelines across CRMs, ERPs, databases, and custom microservices.',
      icon: 'Workflow' as const
    },
    {
      title: 'Eliminate Unnecessary Manual Handoffs',
      desc: 'Remove operational friction, data reentry, and communication bottlenecks between functional business units.',
      icon: 'Zap' as const
    },
    {
      title: 'Coordinate Data Between Systems',
      desc: 'Ensure real-time data integrity and synchronization across previously disconnected platforms and environments.',
      icon: 'Layers' as const
    },
    {
      title: 'Introduce AI Reasoning Where Needed',
      desc: 'Deploy probabilistic AI models when contextual interpretation, unstructured data processing, or adaptation is required.',
      icon: 'BrainCircuit' as const
    },
    {
      title: 'Maintain Deterministic Execution',
      desc: 'Preserve strict rule-based software, standard APIs, and immutable database operations where predictable execution is paramount.',
      icon: 'Cpu' as const
    },
    {
      title: 'Manage Operational Exceptions',
      desc: 'Dynamically flag, isolate, and adapt to edge cases and operational anomalies without crashing upstream processes.',
      icon: 'Activity' as const
    },
    {
      title: 'Route Decisions to Appropriate People',
      desc: 'Escalate context-rich approval requests directly to authorized leaders when automated thresholds are exceeded.',
      icon: 'ShieldCheck' as const
    },
    {
      title: 'Enforce Authority Boundaries',
      desc: 'Embed Governance-as-Code to programmatically enforce operational permissions, policies, and regulatory guardrails.',
      icon: 'Sliders' as const
    },
    {
      title: 'Measure Process Outcomes',
      desc: 'Continuously track execution velocity, exception rates, and business results against core organizational objectives.',
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
            Intelligent Process Orchestration
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              Connect Work Across Systems, Teams, Automation, and AI
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Many business processes span multiple applications, departments, databases, workflows, and decision points.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Traditional automation can execute predictable steps efficiently, but complex enterprise processes often require context, interpretation, exceptions, judgment, and coordination across systems.
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Veye Media architects intelligent process orchestration systems that determine how deterministic software, business rules, APIs, workflow automation, AI agents, enterprise applications, and people should work together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate(View.VEYE7)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Explore Architecture Core</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Discuss Process Orchestration
            </button>
          </div>
        </div>
      </section>

      {/* 2. Tri-Partite Operating Model Banner */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-primary-400 font-bold uppercase tracking-widest block mb-2">Probabilistic AI</span>
              <p className="text-lg font-bold text-white mb-2">Reasoning & Interpretation</p>
              <p className="text-slate-400 text-sm">AI is used where reasoning, adaptability, and contextual interpretation create measurable value.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-primary-400 font-bold uppercase tracking-widest block mb-2">Deterministic Automation</span>
              <p className="text-lg font-bold text-white mb-2">Execution & Speed</p>
              <p className="text-slate-400 text-sm">Automation is used where repeatable, programmatic workflows execute at machine velocity.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-primary-400 font-bold uppercase tracking-widest block mb-2">Human-on-the-Loop</span>
              <p className="text-lg font-bold text-white mb-2">Judgment & Accountability</p>
              <p className="text-slate-400 text-sm">People retain authority where human judgment, ethics, leadership, and accountability matter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Capabilities Grid */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              System Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              Coordinating Cross-Enterprise Workflows
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Bridging the gap between rigid legacy rules and intelligent agentic reasoning.
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

      {/* 4. Strategic Engagement CTA */}
      <section className="py-24 lg:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
            Engagement & Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-8">
            Orchestrate Your Enterprise Workflows.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Deploy an orchestration architecture that combines deterministic software, AI reasoning, and human oversight into a coordinated system.
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
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-slate-100 text-secondary font-bold text-xl hover:bg-slate-200 transition-all border border-slate-200"
            >
              Back to Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};