import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface VSEProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const VelocitySyncEngine: React.FC<VSEProps> = ({ onNavigate }) => {
  const vseLayers = [
    {
      layer: 'Layer 01',
      name: 'Velocity Sync Engine (VSE)',
      role: 'The Foundation',
      desc: 'Secure infrastructure bridging disparate platforms (Shopify, HubSpot, Google, Cloudflare, etc.) into a unified telemetry mesh.',
      icon: 'Cpu' as const
    },
    {
      layer: 'Layer 02',
      name: 'The Orchestrator',
      role: 'The Strategy',
      desc: 'The governance layer containing core business logic, programmatic thresholds, and state-blocking compliance policies.',
      icon: 'Sliders' as const
    },
    {
      layer: 'Layer 03',
      name: 'The Conductor',
      role: 'The Execution',
      desc: 'Real-time synchronization layer ensuring precision timing and deterministic handshakes across external APIs.',
      icon: 'Workflow' as const
    },
    {
      layer: 'Layer 04',
      name: 'The Data Loom',
      role: 'The Synthesis',
      desc: 'The intelligence engine that weaves siloed threads (advertising platforms, CRM, web analytics) into a unified operational tapestry.',
      icon: 'Layers' as const
    },
    {
      layer: 'Layer 05',
      name: 'The Clarity Core',
      role: 'The Interface',
      desc: 'The Agentic AI reasoning brain. A unified portal that interprets multi-modal data to provide absolute executive business clarity.',
      icon: 'BrainCircuit' as const
    },
    {
      layer: 'Layer 06',
      name: 'The Actuator',
      role: 'The Autonomous Action',
      desc: 'Autonomous execution engine capable of dynamically shifting budgets, balancing bids, and drafting counter-campaigns under human-on-the-loop oversight.',
      icon: 'Zap' as const
    }
  ];

  const participationMatrix = [
    {
      entity: 'AI Reasoning',
      role: 'Probabilistic Interpretation',
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
      desc: 'Coordinates repeatable, high-volume workflows without human friction.',
      icon: 'Workflow' as const
    },
    {
      entity: 'APIs & Connectors',
      role: 'Stack Integration',
      desc: 'Connects disparate enterprise applications and legacy systems into a synchronized fabric.',
      icon: 'Layers' as const
    },
    {
      entity: 'Human-on-the-Loop',
      role: 'Strategic Authority',
      desc: 'Retains authority where human judgment, ethics, accountability, or strategic sign-off is required.',
      icon: 'ShieldCheck' as const
    }
  ];

  const authorityRules = [
    { action: 'Observe', desc: 'Passive signal ingestion & stack telemetry monitoring' },
    { action: 'Analyze', desc: 'Contextual reasoning against core business models' },
    { action: 'Recommend', desc: 'Deliberate next-action proposals for human review' },
    { action: 'Request Approval', desc: 'Pre-flight confirmation before proactive action' },
    { action: 'Execute', desc: 'Autonomous tasks executed within verified boundary thresholds' },
    { action: 'Escalate', desc: 'Instant leader routing when operational anomalies occur' },
    { action: 'Stop', desc: 'Deterministic fail-safe kill switches and state-blocking compliance' }
  ];

  const autonomyLoop = [
    { step: '01', name: 'Signal', desc: 'Ingest cross-channel telemetry' },
    { step: '02', name: 'Analyze', desc: 'Weave siloed data into context' },
    { step: '03', name: 'Conclude', desc: 'Determine optimal response pathway' },
    { step: '04', name: 'Act', desc: 'Execute authorized enterprise tasks' },
    { step: '05', name: 'Learn', desc: 'Measure outcomes & refine logic' },
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
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Enterprise AI Orchestration</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-secondary tracking-tight mb-8 leading-[1.08] max-w-5xl mx-auto">
            Velocity Sync Engine™
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              The Intelligence and Orchestration Core
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At the core of Veye7 is the Velocity Sync Engine™ (VSE). The Velocity Sync Engine is Veye Media's model-agnostic enterprise AI orchestration architecture for coordinating signals, data, business context, reasoning, workflows, governance, decisions, human oversight, and actions across enterprise systems.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              The VSE determines how different forms of intelligence and execution participate in the system—enabling the architecture to operate as a coordinated intelligence system rather than a collection of disconnected AI tools.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Discuss VSE Architecture</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.VEYE7)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Explore Veye7™ System
            </button>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-3xl mx-auto">
            <p className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-1">The Veye Advantage</p>
            <p className="text-base sm:text-lg font-bold text-secondary">
              "We do not deliver static PDF reports. We deliver an Action Log—a continuous optimization loop where insights from the Clarity Core perpetually refine business logic for predictive analytics and perpetual growth."
            </p>
          </div>
        </div>
      </section>

      {/* 2. System Participation Matrix */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Operating Discipline
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              How Intelligence Participates in the System
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The VSE separates and aligns each operational component based on where it creates maximum deterministic reliability or probabilistic reasoning value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participationMatrix.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-primary-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
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

      {/* 3. The 6-Layer VSE Architecture Hierarchy */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Architectural Hierarchy
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              The Six-Layer VSE Architecture
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A structured, multi-agent stack designed to eliminate data silos, enforce policy-as-code governance, and execute authorized tasks with sub-second synchronization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vseLayers.map((layer, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-primary-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold px-3 py-1 bg-white text-secondary rounded-full border border-slate-200">
                      {layer.layer}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                      <Icon name={layer.icon} size={20} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-1">{layer.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-3">{layer.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Model-Agnostic Design & Governance-as-Code */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Model-Agnostic */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
                Architectural Longevity
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-secondary tracking-tight mb-6">
                Model-Agnostic by Design
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Veye Media does not believe an enterprise intelligence architecture should depend on one AI model remaining dominant.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                The VSE separates the orchestration architecture from underlying AI models and enterprise tools. The engine seamlessly coordinates large language models, AI agents, enterprise apps, APIs, databases, deterministic software, and business rules without vendor lock-in.
              </p>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <p className="text-sm font-bold text-secondary">
                  The objective is technology flexibility without sacrificing architectural discipline. The architecture remains. The technologies can evolve.
                </p>
              </div>
            </div>

            {/* Governance */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
                Active Authority
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-secondary tracking-tight mb-6">
                Intelligence Requires Governance
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Technology capable of taking action across an enterprise stack must operate within defined authority under Human-on-the-Loop governance.
              </p>
              <div className="space-y-2 mb-6">
                {authorityRules.map((rule, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between text-xs">
                    <span className="font-bold text-secondary">{rule.action}</span>
                    <span className="text-slate-500">{rule.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Governance is not added after deployment. Governance is part of the architecture.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Destination: Active Autonomy™ */}
      <section className="py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/70 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-300 font-bold block mb-2">Operating Target</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Technology Designed for Active Autonomy™
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              Active Autonomy is an operating model in which enterprise systems can recognize relevant signals, understand business context, determine appropriate responses, execute authorized actions, measure outcomes, and adapt.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
            {autonomyLoop.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-mono font-bold text-primary-400 block mb-1">{item.step}</span>
                <h4 className="text-base font-bold text-white mb-1">{item.name}</h4>
                <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto">
            <p className="text-sm font-medium text-slate-300">
              The strategic advantage is not automation alone. It is reducing the time between what happens, what the organization understands, what it decides, and what it does next.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Strategic Engagement CTA */}
      <section className="py-24 lg:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
            Architectural Engagement
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-8">
            Deploy the Intelligence Core for Your Enterprise
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Synchronize your existing applications, models, and business logic with the Velocity Sync Engine™.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary-500 text-white font-extrabold text-xl hover:bg-primary-400 transition-all shadow-2xl shadow-primary-500/25 flex items-center justify-center gap-3 group"
            >
              <span>Discuss Your VSE Integration</span>
              <Icon name="ArrowRight" size={24} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.VEYE7)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-slate-100 text-secondary font-bold text-xl hover:bg-slate-200 transition-all border border-slate-200"
            >
              Explore Veye7™ System
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};