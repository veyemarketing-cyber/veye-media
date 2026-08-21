import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface VeyePursuitProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const VeyePursuit: React.FC<VeyePursuitProps> = ({ onNavigate }) => {
  const pursuitStages = [
    {
      stage: '01',
      name: 'Prospect',
      desc: 'Identify target accounts and evaluate technographic fit signals across markets.',
      icon: 'Zap' as const
    },
    {
      stage: '02',
      name: 'Research',
      desc: 'Synthesize organizational context, stakeholder hierarchies, and strategic pain points.',
      icon: 'BrainCircuit' as const
    },
    {
      stage: '03',
      name: 'Qualification',
      desc: 'Evaluate buyer intent, budget authority, and fit against structured governance criteria.',
      icon: 'ShieldCheck' as const
    },
    {
      stage: '04',
      name: 'Relationship',
      desc: 'Map multi-threaded executive connections and maintain historical relationship touchpoints.',
      icon: 'Layers' as const
    },
    {
      stage: '05',
      name: 'Engagement',
      desc: 'Deliver tailored strategic briefings, value propositions, and context-aware messaging.',
      icon: 'Workflow' as const
    },
    {
      stage: '06',
      name: 'Opportunity',
      desc: 'Advance active deals with algorithmic stage progression and next-action recommendations.',
      icon: 'TrendingUp' as const
    },
    {
      stage: '07',
      name: 'Client',
      desc: 'Seamlessly onboard and transition accumulated pursuit history into continuous delivery.',
      icon: 'ShieldCheck' as const
    }
  ];

  const technologyLevels = [
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
      name: 'Velocity Sync Engine™',
      role: 'Intelligence & Orchestration Core',
      desc: 'Coordinates intelligence, context, governance, decisions, workflows, and actions across the system.',
      icon: 'Cpu' as const,
      view: View.TECH_VSE
    },
    {
      level: 'Market Intelligence Level',
      name: 'Veye Scout™',
      role: 'Market & Competitive Intelligence',
      desc: 'Extends intelligence outward to detect, monitor, and interpret relevant external signals.',
      icon: 'Zap' as const,
      view: View.TECH_SCOUT
    },
    {
      level: 'Business Development Level',
      name: 'Veye Pursuit™ (Active)',
      role: 'BD Intelligence & Execution Technology',
      desc: 'Applies structured intelligence to prospecting, relationships, opportunities, and pipeline execution.',
      icon: 'Workflow' as const,
      view: View.TECH_PURSUIT,
      highlight: true
    }
  ];

  const authorityRules = [
    { action: 'Observe', desc: 'Continuous prospect activity & engagement signal tracking' },
    { action: 'Analyze', desc: 'Account scoring & multi-threaded stakeholder evaluation' },
    { action: 'Recommend', desc: 'Context-rich outreach angles & next-action suggestions' },
    { action: 'Request Approval', desc: 'Human authorization required for strategic proposals' },
    { action: 'Execute', desc: 'Autonomous sequence progression within approved boundaries' },
    { action: 'Escalate', desc: 'Instant executive alert upon deal velocity stalling or objection' },
    { action: 'Stop', desc: 'Deterministic compliance checks & communication boundaries' }
  ];

  const activeAutonomyCycle = [
    { step: '01', name: 'Signal', desc: 'Capture buyer intent & stakeholder changes' },
    { step: '02', name: 'Analyze', desc: 'Synthesize account context & opportunity fit' },
    { step: '03', name: 'Conclude', desc: 'Determine optimal engagement pathways' },
    { step: '04', name: 'Act', desc: 'Execute governed outreach & pipeline tasks' },
    { step: '05', name: 'Learn', desc: 'Measure conversion milestone outcomes' },
    { step: '06', name: 'Repeat', desc: 'Continuous closed-loop pipeline optimization' }
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
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Business Development Technology</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-secondary tracking-tight mb-8 leading-[1.08] max-w-5xl mx-auto">
            Veye Pursuit™
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              Business Development Intelligence & Execution Technology
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Business development requires more than a CRM. Organizations must identify the right accounts, understand them, coordinate research, develop relationships, qualify opportunities, determine next actions, and maintain execution discipline across the pursuit process.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Veye Pursuit™ is Veye Media’s specialized business development intelligence and execution technology designed to coordinate prospect research, account intelligence, assignment, qualification, relationship development, outreach preparation, and opportunity progression.
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold mb-2">Core Objective</p>
              <p className="text-xl font-extrabold text-secondary">
                “The objective is not simply to manage contacts. It is to make business development more intelligent, coordinated, measurable, and actionable.”
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Discuss Your Pursuit Architecture</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.TECHNOLOGY)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Technology Family Overview
            </button>
          </div>
        </div>
      </section>

      {/* 2. The Structured Pursuit Journey */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Structured Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              From Prospect to Client: Maintaining Continuous Intelligence
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Pursuit creates a structured intelligence environment around the entire business development lifecycle—preserving context, stakeholder insights, and telemetry at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {pursuitStages.map((stg, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-primary-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-primary-600 px-2.5 py-1 bg-primary-50 rounded-lg">
                      {stg.stage}
                    </span>
                    <Icon name={stg.icon} size={18} className="text-slate-400" />
                  </div>
                  <h3 className="text-base font-bold text-secondary mb-2">{stg.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{stg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Technology Family Placement */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Architecture Placement
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              One Technology Family. Different Levels of Intelligence.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The technologies within the Veye Media ecosystem operate at distinct architectural levels, ensuring business development execution connects directly with orchestration layers and enterprise systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyLevels.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(item.view)}
                className={`group cursor-pointer p-8 rounded-3xl border transition-all flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-secondary text-white border-secondary shadow-xl ring-2 ring-primary-500'
                    : 'bg-slate-50 text-secondary border-slate-200/80 hover:border-primary-300 hover:bg-white'
                }`}
              >
                <div>
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-4 ${
                    item.highlight ? 'text-primary-300' : 'text-primary-600'
                  }`}>
                    {item.level}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    item.highlight ? 'bg-white/10 text-white' : 'bg-primary-50 text-primary-600'
                  }`}>
                    <Icon name={item.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                    item.highlight ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {item.role}
                  </p>
                  <p className={`text-sm leading-relaxed mb-6 ${
                    item.highlight ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.desc}
                  </p>
                </div>
                <div className={`flex items-center gap-2 text-xs font-bold ${
                  item.highlight ? 'text-primary-300' : 'text-primary-600'
                }`}>
                  <span>View Details</span>
                  <Icon name="ArrowRight" size={14} />
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
                Architectural Principle
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-secondary tracking-tight mb-6">
                Model-Agnostic by Design
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Veye Media does not believe an enterprise intelligence architecture should depend on one AI model remaining dominant.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Pursuit integrates across CRM platforms, email infrastructures, business data APIs, large language models, and deterministic validation rules without locking your pipeline into a proprietary vendor sandbox.
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
                Automated business development must operate within verified boundaries. Pursuit enforces Human-on-the-Loop governance across the entire outreach and qualification lifecycle.
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
              Active Autonomy is an operating model in which enterprise systems can recognize relevant buyer signals, understand account context, determine appropriate next actions, execute outreach workflows, measure outcomes, and adapt.
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
              The strategic advantage is not automation alone. It is reducing the time between what happens, what the organization understands, what it decides, and what it does next.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="py-24 lg:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
            Architectural Engagement
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-8">
            Make Business Development Intelligent & Coordinated
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Equip your revenue teams with an intelligence architecture designed to advance the right opportunities through structured, governed execution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary-500 text-white font-extrabold text-xl hover:bg-primary-400 transition-all shadow-2xl shadow-primary-500/25 flex items-center justify-center gap-3 group"
            >
              <span>Discuss Your Pursuit Architecture</span>
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