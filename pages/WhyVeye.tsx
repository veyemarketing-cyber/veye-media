import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface WhyVeyeProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const WhyVeye: React.FC<WhyVeyeProps> = ({ onNavigate }) => {
  const architecturalSequence = [
    { step: '01', name: 'Objective', desc: 'Define target business outcome' },
    { step: '02', name: 'Process', desc: 'Map operational workflows' },
    { step: '03', name: 'Intelligence Requirement', desc: 'Identify critical data & reasoning gaps' },
    { step: '04', name: 'Architecture', desc: 'Design the orchestration framework' },
    { step: '05', name: 'Technology', desc: 'Select model-agnostic components' },
    { step: '06', name: 'Governance', desc: 'Embed Human-on-the-Loop policies' },
    { step: '07', name: 'Action', desc: 'Execute synchronized operations' },
    { step: '08', name: 'Measurement', desc: 'Track outcomes via Done List' }
  ];

  const capabilityMatrix = [
    {
      entity: 'Artificial Intelligence',
      role: 'Probabilistic Reasoning',
      desc: 'Reasons where interpretation, unstructured data extraction, and adaptability are required.',
      icon: 'BrainCircuit' as const
    },
    {
      entity: 'Deterministic Software',
      role: 'Predictable Execution',
      desc: 'Executes where rigorous mathematical accuracy, compliance, and predictable behavior are mandatory.',
      icon: 'Cpu' as const
    },
    {
      entity: 'Automation',
      role: 'Machine Velocity',
      desc: 'Coordinates repeatable, high-volume workflows without operational friction.',
      icon: 'Workflow' as const
    },
    {
      entity: 'APIs & Connectors',
      role: 'Unified Fabric',
      desc: 'Connects disparate enterprise applications and repositories into a synchronized mesh.',
      icon: 'Layers' as const
    },
    {
      entity: 'Human-on-the-Loop',
      role: 'Strategic Authority',
      desc: 'Retains authority where judgment, ethics, accountability, or strategic approval is required.',
      icon: 'ShieldCheck' as const
    }
  ];

  const connectedSystemElements = [
    'Strategy',
    'People',
    'Processes',
    'Data',
    'Software',
    'Automation',
    'Artificial Intelligence',
    'Governance',
    'Human Decision-Making'
  ];

  const authorityRules = [
    { action: 'Observe', desc: 'Continuous cross-department signal ingestion' },
    { action: 'Analyze', desc: 'Contextual reasoning against business data models' },
    { action: 'Recommend', desc: 'Deliberate next-action proposals for human review' },
    { action: 'Request Approval', desc: 'Pre-flight confirmation for strategic workflows' },
    { action: 'Execute', desc: 'Autonomous execution within verified boundary thresholds' },
    { action: 'Escalate', desc: 'Instant leader routing when operational anomalies occur' },
    { action: 'Stop', desc: 'Deterministic fail-safe kill switches and policy enforcement' }
  ];

  const activeAutonomyCycle = [
    { step: '01', name: 'Signal', desc: 'Sense cross-channel business telemetry' },
    { step: '02', name: 'Analyze', desc: 'Weave data into organizational context' },
    { step: '03', name: 'Conclude', desc: 'Determine optimal response pathway' },
    { step: '04', name: 'Act', desc: 'Execute authorized enterprise tasks' },
    { step: '05', name: 'Learn', desc: 'Measure concrete business outcomes' },
    { step: '06', name: 'Repeat', desc: 'Continuous closed-loop calibration' }
  ];

  return (
    <div className="animate-fade-in bg-white text-secondary selection:bg-primary-100 selection:text-primary-900 font-sans">
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
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Enterprise Systems Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-secondary tracking-tight mb-8 leading-[1.08] max-w-5xl mx-auto">
            Why Veye Media?
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              Because Enterprise AI Should Be Architected Around the Business—Not the Technology
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Artificial intelligence is advancing rapidly. New models, agents, automation platforms, and enterprise AI tools appear constantly. But access to AI technology is no longer the primary challenge.
            </p>
            <p className="text-base sm:text-lg text-secondary font-bold leading-relaxed">
              The challenge is determining how intelligence should operate within the business.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Veye Media approaches enterprise AI as a systems architecture problem. We begin with the business objective, understand the processes, data, systems, decisions, people, and governance surrounding it, and then architect the combination of technology and intelligence required to achieve the desired outcome.
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold mb-2">Our Fundamental Axiom</p>
              <p className="text-2xl font-black text-secondary">
                “The objective determines the architecture. Not the technology.”
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate(View.VEYE7)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Explore Veye7™</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Discuss Your Business Objective
            </button>
          </div>
        </div>
      </section>

      {/* 2. We Don't Start With AI & We Architect Systems */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Discipline */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">Architectural Discipline</span>
              <h3 className="text-2xl sm:text-3xl font-black text-secondary tracking-tight mb-6">
                We Don’t Start With AI
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                One of the most important decisions in enterprise AI is determining where AI should—and should not—be used.
              </p>
              <ul className="space-y-2 mb-6 text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  <span>Not every process needs an AI agent.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  <span>Not every decision should be autonomous.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  <span>Not every workflow requires probabilistic reasoning.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  <span>And not every existing system needs to be replaced.</span>
                </li>
              </ul>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Veye Media determines where artificial intelligence creates meaningful value and where APIs, deterministic software, automation, business rules, existing enterprise applications, or human expertise are better suited to the task.
              </p>
              <p className="text-sm font-bold text-secondary">
                Sometimes the right architectural decision is not to use AI at all. That discipline is fundamental to how we work.
              </p>
            </div>

            {/* Systems Architecture */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">Ecosystem Synthesis</span>
              <h3 className="text-2xl sm:text-3xl font-black text-secondary tracking-tight mb-6">
                We Architect Systems, Not Isolated AI Tools
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Organizations rarely operate through one application. Business outcomes depend on interactions among people, processes, CRM platforms, databases, financial systems, operational software, websites, automation, analytics, communications, external information, and artificial intelligence.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Adding another disconnected AI tool creates another technology silo rather than solving the underlying problem. Veye Media connects the entire organizational tapestry:
              </p>
              <div className="flex flex-wrap gap-2">
                {connectedSystemElements.map((el, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-secondary">
                    {el}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Objective Sequence */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">The Engagement Sequence</span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              Business Objectives Come Before Technology Decisions
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Technology should support strategy—not determine it. We examine the operating environment, identify friction and intelligence gaps, and determine required capabilities before selecting tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {architecturalSequence.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary-300 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-primary-600 block mb-2">{item.step}</span>
                  <h4 className="text-base font-bold text-secondary mb-2">{item.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI Is Part of the Architecture */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">Architectural Balance</span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              AI Is Part of the Architecture. It Is Not the Architecture.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Enterprise systems require more than probabilistic intelligence. Each operational component must perform the work it is best suited to execute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilityMatrix.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                    <Icon name={item.icon} size={24} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary-600 block mb-1">
                    {item.role}
                  </span>
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.entity}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Model-Agnostic Design & Governance-as-Code */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Model Agnostic */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">Architectural Longevity</span>
              <h3 className="text-3xl sm:text-4xl font-black text-secondary tracking-tight mb-6">
                Model-Agnostic by Design
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                No organization should assume today’s leading AI model will remain the best model for every business requirement tomorrow.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Our Velocity Sync Engine™ is model-agnostic by design, allowing different models, applications, APIs, data systems, and automation technologies to participate according to the needs of the enterprise. Models, platforms, and applications can change. The architecture remains.
              </p>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-bold text-secondary">
                  This gives organizations the flexibility to evolve without rebuilding their entire intelligence strategy around each new generation of AI.
                </p>
              </div>
            </div>

            {/* Governance as Code */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">Active Authority</span>
              <h3 className="text-3xl sm:text-4xl font-black text-secondary tracking-tight mb-6">
                Governance Is Part of the System
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                As AI moves from generating information to initiating actions, enterprise governance becomes an architectural requirement. We incorporate Human-on-the-Loop oversight and Governance-as-Code principles directly into the design.
              </p>
              <div className="space-y-2 mb-6">
                {authorityRules.map((rule, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-secondary">{rule.action}</span>
                    <span className="text-slate-500">{rule.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                The objective is not maximum autonomy. It is the appropriate autonomy for the business.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Continuous Operating Cycle & Active Autonomy */}
      <section className="py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/70 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-300 font-bold block mb-2">The Destination</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              The Destination Is Active Autonomy™
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              Active Autonomy is an operating model in which enterprise systems can recognize relevant signals, understand business context, determine appropriate responses, execute authorized actions, measure outcomes, and adapt—while remaining within defined governance and human authority.
            </p>
            <p className="text-primary-300 text-xl font-bold tracking-wide">
              Sense. Understand. Decide. Act. Learn. Adapt.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
            {activeAutonomyCycle.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-mono font-bold text-primary-400 block mb-1">{item.step}</span>
                <h4 className="text-base font-bold text-white mb-1">{item.name}</h4>
                <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto">
            <p className="text-sm font-medium text-slate-300">
              Built for action, not just analysis. The strategic advantage is reducing the time between what happens, what the organization understands, what it decides, and what it does next.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Strategic Engagement CTA */}
      <section className="py-24 lg:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
            Start Here
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-8">
            Start With Your Business Objective
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-4 leading-relaxed font-light">
            We don’t begin by asking: “What can AI do?” We begin by asking: “What does the business need to accomplish?” Then we architect from there.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary-500 text-white font-extrabold text-xl hover:bg-primary-400 transition-all shadow-2xl shadow-primary-500/25 flex items-center justify-center gap-3 group"
            >
              <span>Discuss Your Business Objective</span>
              <Icon name="ArrowRight" size={24} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.VEYE7)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-slate-100 text-secondary font-bold text-xl hover:bg-slate-200 transition-all border border-slate-200"
            >
              Explore Veye7™
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};