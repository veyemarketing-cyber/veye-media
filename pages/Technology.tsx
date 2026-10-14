import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface TechnologyProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const Technology: React.FC<TechnologyProps> = ({ onNavigate }) => {
  const familyLayers = [
    {
      level: 'Enterprise Level',
      name: 'Veye7™',
      role: 'Enterprise Intelligence System',
      desc: 'Creates the broader Enterprise Intelligence System around the organization’s objectives and operating environment.',
      icon: 'Layers' as const,
      view: View.VEYE7
    },
    {
      level: 'Orchestration Level',
      name: 'Velocity Sync Engine™ (VSE)',
      role: 'Intelligence & Orchestration Core',
      desc: 'Coordinates intelligence, context, governance, decisions, workflows, and actions across the system.',
      icon: 'Cpu' as const,
      view: View.TECH_VSE
    },
    {
      level: 'Market Intelligence Level',
      name: 'Veye Scout™',
      role: 'External Signal & Competitive Radar',
      desc: 'Extends intelligence outward to detect, monitor, and interpret relevant external signals and shifts.',
      icon: 'Zap' as const,
      view: View.TECH_SCOUT
    },
    {
      level: 'Business Development Level',
      name: 'Veye Pursuit™',
      role: 'BD Intelligence & Execution',
      desc: 'Applies structured intelligence to prospecting, relationships, opportunities, and pipeline execution.',
      icon: 'Workflow' as const,
      view: View.TECH_PURSUIT
    }
  ];

  const scoutSignals = [
    'Competitor activity',
    'Market developments',
    'Industry trends',
    'Emerging technologies',
    'Customer behavior',
    'Strategic partnerships',
    'Procurement opportunities',
    'Regulatory developments',
    'Geographic expansion signals',
    'Defined strategic indicators'
  ];

  const pursuitPipeline = [
    'Prospect',
    'Research',
    'Qualification',
    'Relationship',
    'Engagement',
    'Opportunity',
    'Client'
  ];

  const authorityRules = [
    { action: 'Observe', desc: 'Continuous telemetry ingestion without mutation' },
    { action: 'Analyze', desc: 'Contextual reasoning against business objectives' },
    { action: 'Recommend', desc: 'Staged options delivered for strategic review' },
    { action: 'Request Approval', desc: 'Human authorization required for execution' },
    { action: 'Execute', desc: 'Autonomous execution within approved boundaries' },
    { action: 'Escalate', desc: 'Instant leader alert upon threshold deviation' },
    { action: 'Stop', desc: 'Deterministic fail-safe kill-switch triggers' }
  ];

  const continuousLoop = [
    { step: '01', name: 'Signal', desc: 'Detect stack & market telemetry' },
    { step: '02', name: 'Analyze', desc: 'Contextual reasoning & synthesis' },
    { step: '03', name: 'Conclude', desc: 'Formulate governed decisions' },
    { step: '04', name: 'Act', desc: 'Execute authorized enterprise tasks' },
    { step: '05', name: 'Learn', desc: 'Measure outcomes & refine logic' },
    { step: '06', name: 'Repeat', desc: 'Perpetual operational optimization' }
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
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Enterprise Intelligence Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-secondary tracking-tight mb-8 leading-[1.08] max-w-5xl mx-auto">
            Enterprise Intelligence Technology Built for the Business
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              An Integrated Technology Family for Connecting Data, AI, Automation, Governance, Decisions, and Action
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Veye Media develops enterprise intelligence technology designed to help organizations connect business objectives, processes, data, software, automation, artificial intelligence, AI agents, governance, and human decision-making.
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left">
              <p className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold mb-2">Architectural Principle</p>
              <p className="text-xl font-extrabold text-secondary">
                The objective determines the architecture. Not the technology.
              </p>
            </div>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Instead of requiring organizations to conform to a single AI model, platform, or software ecosystem, Veye Media technologies work within the enterprise environment—connecting the capabilities required to sense what is happening, understand business context, make better decisions, coordinate action, and learn from outcomes.
            </p>
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
              Discuss Your Enterprise Architecture
            </button>
          </div>
        </div>
      </section>

      {/* 2. One Technology Family. Different Levels of Intelligence. */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Technology Hierarchy
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              One Technology Family. Different Levels of Intelligence.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The technologies within the Veye Media ecosystem do not perform the same function. They operate at distinct levels of the architecture, expanding as enterprise intelligence requirements grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyLayers.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(item.view)}
                className="group cursor-pointer p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-primary-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary-600 block mb-4">
                    {item.level}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <Icon name={item.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                    {item.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-primary-600 group-hover:translate-x-1 transition-transform">
                  <span>Explore Architecture</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Technology Deep Dives: Veye7 & VSE */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Veye7 Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-slate-100 pb-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">Enterprise Level</span>
              <h2 className="text-3xl sm:text-4xl font-black text-secondary tracking-tight mb-4">
                Veye7™
              </h2>
              <p className="text-lg font-bold text-slate-700 mb-4">The Enterprise Intelligence System</p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Veye7™ provides the broader operating architecture through which enterprise intelligence functions. Rather than creating another isolated AI environment, Veye7 connects intelligence across existing technologies while allowing new capabilities to integrate seamlessly.
              </p>
              <button
                onClick={() => onNavigate(View.VEYE7)}
                className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 text-sm group"
              >
                <span>Explore Veye7™ Architecture</span>
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 font-bold mb-6">Designed System Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                <div className="p-3 bg-white rounded-xl border border-slate-200">Connect intelligence across enterprise systems</div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">Establish shared business context</div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">Coordinate deterministic software & probabilistic AI</div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">Incorporate AI agents where appropriate</div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">Maintain human authority & governance</div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">Execute actions across connected systems</div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">Measure concrete business outcomes</div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">Continuously learn and adapt</div>
              </div>
            </div>
          </div>

          {/* Velocity Sync Engine Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">Orchestration Level</span>
              <h2 className="text-3xl sm:text-4xl font-black text-secondary tracking-tight mb-4">
                Velocity Sync Engine™
              </h2>
              <p className="text-lg font-bold text-slate-700 mb-4">The Intelligence & Orchestration Core</p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                At the core of Veye7 is the Velocity Sync Engine™ (VSE). The VSE is Veye Media’s model-agnostic enterprise AI orchestration architecture for coordinating signals, data, business context, reasoning, workflows, governance, decisions, human oversight, and actions across systems.
              </p>
              <button
                onClick={() => onNavigate(View.TECH_VSE)}
                className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 text-sm group"
              >
                <span>Explore the Velocity Sync Engine™</span>
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="lg:col-span-7 bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl">
              <h4 className="text-sm font-mono uppercase tracking-wider text-primary-400 font-bold mb-6">VSE Participation Architecture</h4>
              <div className="space-y-3 text-sm">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
                  <span className="font-mono text-primary-400 font-bold">AI:</span>
                  <span className="text-slate-300">Reasons where contextual interpretation and adaptability are required.</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
                  <span className="font-mono text-primary-400 font-bold">Software:</span>
                  <span className="text-slate-300">Executes deterministically where predictable behavior is required.</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
                  <span className="font-mono text-primary-400 font-bold">Automation:</span>
                  <span className="text-slate-300">Coordinates repeatable, machine-speed cross-system workflows.</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
                  <span className="font-mono text-primary-400 font-bold">APIs:</span>
                  <span className="text-slate-300">Establish secure real-time data handshakes across enterprise applications.</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
                  <span className="font-mono text-primary-400 font-bold">People:</span>
                  <span className="text-slate-300">Retain authority where judgment, ethics, accountability, or strategic sign-off are required.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Specialized Ecosystem Technologies: Scout & Pursuit */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Veye Scout */}
          <div className="p-10 lg:p-14 bg-white rounded-3xl border border-slate-200 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-2">Market Intelligence Level</span>
                <h3 className="text-3xl font-black text-secondary mb-2">Veye Scout™</h3>
                <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4">Market & Competitive Intelligence Technology</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Organizations cannot respond to changes they do not recognize. Veye Scout™ identifies, organizes, monitors, and interprets external signals relevant to business strategy and decision-making—extending enterprise awareness beyond internal systems.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                  <p className="text-xs font-bold text-secondary">
                    "The objective is not simply to collect more information. It is to identify what changed, why it matters, and whether the organization should respond."
                  </p>
                </div>
                <button
                  onClick={() => onNavigate(View.TECH_SCOUT)}
                  className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 text-sm group"
                >
                  <span>Explore Veye Scout™</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="lg:col-span-7">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">Monitored External Signals</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {scoutSignals.map((sig, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                      <span>{sig}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Veye Pursuit */}
          <div className="p-10 lg:p-14 bg-white rounded-3xl border border-slate-200 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-2">Business Development Level</span>
                <h3 className="text-3xl font-black text-secondary mb-2">Veye Pursuit™</h3>
                <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4">Business Development Intelligence & Execution Technology</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Business development requires more than a CRM. Veye Pursuit™ coordinates prospect research, account intelligence, assignment, qualification, relationship development, outreach preparation, and opportunity progression.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                  <p className="text-xs font-bold text-secondary">
                    "The objective is not simply to manage contacts. It is to make business development more intelligent, coordinated, measurable, and actionable."
                  </p>
                </div>
                <button
                  onClick={() => onNavigate(View.TECH_PURSUIT)}
                  className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 text-sm group"
                >
                  <span>Explore Veye Pursuit™</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="lg:col-span-7">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">Structured Pursuit Journey</h5>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pursuitPipeline.map((stage, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-secondary">
                        {stage}
                      </span>
                      {idx < pursuitPipeline.length - 1 && (
                        <span className="text-slate-400 text-xs">→</span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Maintains unified intelligence and historical telemetry throughout the full lifecycle, ensuring deals progress with context rather than manual guessing.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Model-Agnostic & Governance-as-Code Sections */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Model Agnostic */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">Longevity by Design</span>
              <h3 className="text-3xl sm:text-4xl font-black text-secondary tracking-tight mb-6">
                Model-Agnostic by Design
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Veye Media does not believe an enterprise intelligence architecture should depend on one AI model remaining dominant. AI technology evolves too quickly for vendor lock-in.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Our architecture separates the enterprise intelligence system from individual underlying technologies. The architecture incorporates LLMs, AI agents, enterprise apps, APIs, vector databases, deterministic software, workflow automation, and legacy business logic.
              </p>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-bold text-secondary">
                  The objective is technology flexibility without sacrificing architectural discipline. The architecture remains. The technologies can evolve.
                </p>
              </div>
            </div>

            {/* Governance */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">Active Authority</span>
              <h3 className="text-3xl sm:text-4xl font-black text-secondary tracking-tight mb-6">
                Intelligence Requires Governance
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Technology capable of taking action across an organization must operate within defined authority. Veye Media technologies are built around Human-on-the-Loop governance and Governance-as-Code principles.
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
                Governance is not added after deployment. Governance is part of the architecture.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Destination: Active Autonomy™ */}
      <section className="py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/70 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-300 font-bold block mb-2">Operating Target</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Technology Designed for Active Autonomy™
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              Active Autonomy is an operating model in which enterprise systems recognize relevant signals, understand business context, determine appropriate responses, execute authorized actions, measure outcomes, and adapt—within defined governance and human authority.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
            {continuousLoop.map((item, idx) => (
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

      {/* 7. Strategic Engagement CTA */}
      <section className="py-24 lg:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
            Architectural Engagement
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-8">
            Build the Architecture Before Adding the Technology.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            The lasting question is not which AI model arrives next. It is whether your enterprise possesses the architecture required to use those models effectively.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary-500 text-white font-extrabold text-xl hover:bg-primary-400 transition-all shadow-2xl shadow-primary-500/25 flex items-center justify-center gap-3 group"
            >
              <span>Discuss Your Enterprise Intelligence Architecture</span>
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