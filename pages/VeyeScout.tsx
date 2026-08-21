import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface VeyeScoutProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const VeyeScout: React.FC<VeyeScoutProps> = ({ onNavigate }) => {
  const monitoredSignals = [
    {
      title: 'Competitor Activity',
      desc: 'Track positioning shifts, product releases, messaging pivots, and commercial maneuvers in real time.',
      icon: 'Zap' as const
    },
    {
      title: 'Market Developments',
      desc: 'Detect category evolutions, sector expansions, and shifting commercial dynamics.',
      icon: 'TrendingUp' as const
    },
    {
      title: 'Industry Trends',
      desc: 'Synthesize macro trends and analyst perspectives to anticipate market inflection points.',
      icon: 'Activity' as const
    },
    {
      title: 'Emerging Technologies',
      desc: 'Monitor frontier AI models, software tools, and platform shifts before broad adoption.',
      icon: 'Cpu' as const
    },
    {
      title: 'Customer Behavior',
      desc: 'Identify evolving buyer expectations, friction points, and digital engagement patterns.',
      icon: 'BrainCircuit' as const
    },
    {
      title: 'Strategic Partnerships',
      desc: 'Track ecosystem alliances, integration announcements, and industry M&A activities.',
      icon: 'Layers' as const
    },
    {
      title: 'Procurement Opportunities',
      desc: 'Monitor public and private RFPs, enterprise bidding notices, and commercial tenders.',
      icon: 'Workflow' as const
    },
    {
      title: 'Regulatory Developments',
      desc: 'Identify compliance updates, legal standard shifts, and regional policy changes early.',
      icon: 'ShieldCheck' as const
    },
    {
      title: 'Geographic Expansion',
      desc: 'Uncover regional territory opportunities, localization patterns, and market gaps.',
      icon: 'Globe' as const
    },
    {
      title: 'Strategic Indicators',
      desc: 'Deploy custom peripheral telemetry monitors tailored to unique corporate objectives.',
      icon: 'Sliders' as const
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
      name: 'Veye Scout™ (Active)',
      role: 'Market & Competitive Intelligence',
      desc: 'Extends intelligence outward to detect, monitor, and interpret relevant external signals.',
      icon: 'Zap' as const,
      view: View.TECH_SCOUT,
      highlight: true
    },
    {
      level: 'Business Development Level',
      name: 'Veye Pursuit™',
      role: 'BD Intelligence & Execution',
      desc: 'Applies structured intelligence to prospecting, relationships, opportunities, and execution.',
      icon: 'Workflow' as const,
      view: View.TECH_PURSUIT
    }
  ];

  const authorityRules = [
    { action: 'Observe', desc: 'Continuous external signal & telemetry monitoring' },
    { action: 'Analyze', desc: 'Reasoning through external shifts in business context' },
    { action: 'Recommend', desc: 'Strategic counter-positioning options for leaders' },
    { action: 'Request Approval', desc: 'Pre-flight confirmation before proactive action' },
    { action: 'Execute', desc: 'Autonomous bid & campaign adjustments within limits' },
    { action: 'Escalate', desc: 'Real-time alerts when high-impact market changes occur' },
    { action: 'Stop', desc: 'Deterministic compliance boundaries & fail-safes' }
  ];

  const autonomyLoop = [
    { step: '01', name: 'Signal', desc: 'Detect external market movements' },
    { step: '02', name: 'Analyze', desc: 'Interpret impact on strategic positioning' },
    { step: '03', name: 'Conclude', desc: 'Determine optimal response pathway' },
    { step: '04', name: 'Act', desc: 'Coordinate multi-channel counter-actions' },
    { step: '05', name: 'Learn', desc: 'Evaluate market & revenue response' },
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
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Market Intelligence Technology</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-secondary tracking-tight mb-8 leading-[1.08] max-w-5xl mx-auto">
            Veye Scout™
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              Market & Competitive Intelligence Technology
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Organizations cannot respond to changes they do not recognize. Veye Scout™ is Veye Media’s specialized market and competitive intelligence technology designed to identify, organize, monitor, and interpret external signals relevant to business strategy and decision-making.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Scout extends enterprise intelligence beyond internal systems by helping organizations maintain continuous awareness of changes occurring across their markets, competitors, and operating environments.
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold mb-2">Core Objective</p>
              <p className="text-xl font-extrabold text-secondary">
                “The objective is not simply to collect more information. It is to identify what changed, why it matters, and whether the organization should respond.”
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Discuss Your Market Radar</span>
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

      {/* 2. Monitored Signals Grid */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Peripheral Vision
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              Relevant External Signals Monitored by Scout
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Scout continuously structures unstructured external data streams into governed, strategic radar for executive leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitoredSignals.map((signal, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-primary-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                    <Icon name={signal.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{signal.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{signal.desc}</p>
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
              The technologies within the Veye Media ecosystem operate at distinct architectural levels, ensuring external market intelligence directly coordinates with internal business systems and execution engines.
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
                Our architecture separates the intelligence system from the underlying models and tools. Scout integrates across large language models, custom web crawlers, APIs, databases, deterministic rules, and emerging data platforms without vendor lock-in.
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
                Technology capable of interpreting market signals and suggesting actions must operate within defined authority under Human-on-the-Loop principles.
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
              Active Autonomy is an operating model in which enterprise systems recognize relevant market signals, understand business context, determine appropriate responses, execute authorized actions, measure outcomes, and adapt.
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

      {/* 6. Call to Action */}
      <section className="py-24 lg:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
            Architectural Engagement
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-8">
            Deploy Peripheral Intelligence with Veye Scout™
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Equip your organization with a market and competitive radar designed to recognize changes early and execute governed strategic responses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary-500 text-white font-extrabold text-xl hover:bg-primary-400 transition-all shadow-2xl shadow-primary-500/25 flex items-center justify-center gap-3 group"
            >
              <span>Discuss Your Intelligence Architecture</span>
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