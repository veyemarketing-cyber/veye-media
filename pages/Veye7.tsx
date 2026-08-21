import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';
import { EditableText } from '../components/EditableText';

interface Veye7Props {
  onNavigate: (view: View, systemId?: string) => void;
}

export const Veye7: React.FC<Veye7Props> = ({ onNavigate }) => {
  const steps = [
    {
      num: '01',
      title: 'Establish the Business Objective',
      desc: 'Every architecture begins with a defined organizational outcome (revenue growth, operational velocity, retention, risk control). Technology selection strictly follows the objective.'
    },
    {
      num: '02',
      title: 'Connect Enterprise Signals & Data',
      desc: 'Connect operational software, CRMs, market telemetry, databases, APIs, and real-time interaction channels into a unified ingest plane.'
    },
    {
      num: '03',
      title: 'Establish Business Context',
      desc: 'Embed semantic understanding, operational relationships, policies, history, authority, and constraints around the data to eliminate hallucinations.'
    },
    {
      num: '04',
      title: 'Coordinate Reasoning & Analysis',
      desc: 'Deploy probabilistic AI models for contextual reasoning and analysis while reserving deterministic logic and software rules for predictable tasks.'
    },
    {
      num: '05',
      title: 'Determine the Appropriate Action',
      desc: 'Evaluate execution paths against organizational guardrails, determining whether the step requires an automated task, escalation, or human approval.'
    },
    {
      num: '06',
      title: 'Execute Within Governance',
      desc: 'Execute authorized actions across platforms with Governance-as-Code enforcement, eliminating manual bottlenecks while guaranteeing compliance.'
    },
    {
      num: '07',
      title: 'Measure, Learn, and Adapt',
      desc: 'Track outcomes against the original objective, feeding telemetry back into the system to perpetually refine future decisions and workflows.'
    }
  ];

  const functionalApplications = [
    {
      icon: 'Zap' as const,
      name: 'Business Development',
      desc: 'Identify market signals, prioritize high-value targets, coordinate account intelligence, support outreach decisions, and improve opportunity progression.'
    },
    {
      icon: 'Workflow' as const,
      name: 'Sales & Marketing',
      desc: 'Connect buyer intent signals, customer behavior, live campaigns, CRM activity, competitive intelligence, and revenue objectives.'
    },
    {
      icon: 'Cpu' as const,
      name: 'Customer Experience',
      desc: 'Recognize changes in account behavior, coordinate service data, identify churn risks in advance, and orchestrate precision responses.'
    },
    {
      icon: 'Workflow' as const,
      name: 'Operations',
      desc: 'Connect operational telemetry, multi-agent workflows, resource allocations, performance data, exceptions, and decision pipelines.'
    },
    {
      icon: 'ShieldCheck' as const,
      name: 'Finance',
      desc: 'Coordinate financial signals, business context, real-time performance thresholds, forecasting inputs, and governed decision support.'
    },
    {
      icon: 'BrainCircuit' as const,
      name: 'Workforce & Org Intelligence',
      desc: 'Synthesize operating requirements, institutional knowledge, team workflows, resource capabilities, and executive decision-making.'
    }
  ];

  const ecosystemTechnologies = [
    {
      name: 'Veye Scout™',
      tag: 'Market & Business Intelligence',
      desc: 'Identifies, organizes, and interprets external market signals that matter to executive strategy and decision-making, extending peripheral enterprise vision.',
      icon: 'Zap' as const
    },
    {
      name: 'Veye Pursuit™',
      tag: 'BD Intelligence & Governed Execution',
      desc: 'Coordinates prospect research, account intelligence, assignment, qualification, relationship mapping, and pipeline progression into a synchronized engine.',
      icon: 'Workflow' as const
    }
  ];

  return (
    <div className="animate-fade-in bg-white text-secondary selection:bg-primary-100 selection:text-primary-900">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-white border-b border-slate-100">
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
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Enterprise Intelligence System</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-secondary tracking-tight mb-8 leading-[1.08] max-w-5xl mx-auto">
            Veye7™ — Enterprise Intelligence Built Around Your Business
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              A Purpose-Built Enterprise Intelligence System for Coordinating People, Processes, Data, Technology, AI, and Decisions
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Veye7™ is Veye Media's purpose-built Enterprise Intelligence System architecture designed to connect business strategy, processes, enterprise data, software, automation, AI agents, governance, and human decision-making around defined organizational objectives.
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Instead of adding another disconnected AI tool to the technology stack, Veye7 creates an intelligence architecture across the organization—helping existing systems and emerging AI capabilities work together as part of a coordinated operating environment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="#architecture"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Explore the Architecture</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Talk With Veye Media
            </button>
          </div>
        </div>
      </section>

      {/* 2. Enterprise AI Is More Than an AI Model */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
                Architectural Shift
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-secondary leading-tight tracking-tight">
                Enterprise AI Is More Than an AI Model.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                Organizations are rapidly adopting artificial intelligence, AI agents, automation platforms, analytics tools, and new enterprise applications. But adding intelligence to individual applications does not automatically create an intelligent enterprise.
              </p>
              <p className="text-slate-600 text-base">
                Business data may remain separated across systems. Automations may execute isolated workflows. AI agents may operate without sufficient organizational context. Decisions may still depend on manually assembling information from multiple departments and platforms.
              </p>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-500" />
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">The Essential Question</p>
                <p className="text-2xl font-black text-secondary">
                  How should the enterprise itself be architected to use intelligence?
                </p>
              </div>
              <p className="text-base text-slate-600 font-medium">
                Rather than beginning with a particular AI model or technology platform, Veye7 begins with the business objective and determines how people, processes, data, software, automation, artificial intelligence, and governance should work together to achieve it.
              </p>
              <p className="text-lg font-bold text-secondary">
                The objective determines the architecture. Not the technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Is Veye7™? */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              System Definition
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              What Is Veye7™?
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
              Veye7 is an Enterprise Intelligence System architecture developed by Veye Media to coordinate organizational intelligence across people, processes, data, enterprise applications, automation, AI systems, AI agents, governance, and human oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Not a Generic Product', desc: 'Not a one-size-fits-all software product.' },
              { label: 'Not a Single Agent', desc: 'Not an isolated agent operating without organizational context.' },
              { label: 'Not Another Dashboard', desc: 'Not passive visualization that leaves execution to manual labor.' },
              { label: 'Not a Model Wrapper', desc: 'Not an AI model wrapped cosmetically around legacy tools.' }
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm mb-4">✕</div>
                <h3 className="text-base font-bold text-secondary mb-2">{card.label}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">An Architectural Framework for Coordinated Intelligence</h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
              Veye7 provides an architectural framework through which the organization's existing and future technologies can participate in a coordinated intelligence system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-primary-400 font-bold block mb-1">Deterministic Software</span>
                <p className="text-slate-400 text-xs">Where predictable, rule-bound execution is required.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-primary-400 font-bold block mb-1">Probabilistic AI</span>
                <p className="text-slate-400 text-xs">Where reasoning, interpretation, and adaptation create value.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-primary-400 font-bold block mb-1">Automation</span>
                <p className="text-slate-400 text-xs">Where repeatable workflows can be executed at machine speed.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-primary-400 font-bold block mb-1">People</span>
                <p className="text-slate-400 text-xs">Where judgment, authority, expertise, and accountability must remain human.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. From Disconnected Technology to Coordinated Intelligence */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Signal Coordination
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              From Disconnected Technology to Coordinated Intelligence
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              Most enterprises already have technology. The challenge is getting intelligence to move effectively between it.
            </p>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              CRMs, ERPs, marketing platforms, financial ledgers, operational databases, APIs, analytics tools, and AI models often hold pieces of the information required to understand what is happening across the enterprise. Veye7 connects those signals so decision-makers do not have to manually assemble fragmented puzzle pieces.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block mb-2">
                The Continuous Intelligence Cycle
              </span>
              <p className="text-2xl sm:text-3xl font-black text-secondary">
                Signal → Analyze → Conclude → Act → Learn → Repeat
              </p>
            </div>
            <p className="text-center text-slate-600 text-base max-w-3xl mx-auto">
              The objective is to reduce the distance between what happens in the business and the organization's ability to respond intelligently to it.
            </p>
          </div>
        </div>
      </section>

      {/* 5. How Veye7™ Works (7-Step Workflow) */}
      <section id="architecture" className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Execution Blueprint
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              How Veye7™ Works
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Veye7 coordinates multiple capabilities rather than depending on one technology to perform every function.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary text-white font-mono font-bold text-xl flex items-center justify-center shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Velocity Sync Engine Core & Model-Agnostic Architecture */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
                The Engine
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
                The Velocity Sync Engine™ at the Core
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
                At the center of Veye7 is Veye Media's Velocity Sync Engine™ (VSE)—the model-agnostic enterprise AI orchestration architecture responsible for coordinating signals, business context, data, reasoning, workflows, governance, decisions, human oversight, and actions across the environment.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                The VSE enables Veye7 to connect deterministic enterprise technologies with probabilistic artificial intelligence without requiring the architecture to depend on a single AI model or technology vendor.
              </p>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 mb-8">
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">Why Architecture Precedes Technology</p>
                <p className="text-secondary font-bold text-base">AI models will change. Enterprise applications will change. New agents will emerge. Business requirements will evolve.</p>
                <p className="text-primary-600 font-extrabold text-base">The intelligence architecture remains. The technologies within it evolve.</p>
              </div>
              <button
                onClick={() => onNavigate(View.GROWTH_SYSTEMS)}
                className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 text-lg group"
              >
                <span>Explore the Velocity Sync Engine™</span>
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-secondary text-white shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Icon name="Cpu" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Model-Agnostic by Design</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Veye7 is not architected around the assumption that one AI model will remain the best model for every enterprise task.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                A Veye7 environment incorporates frontier models, enterprise applications, APIs, vector databases, automation layers, and legacy deterministic software tailored precisely to client workloads—preventing vendor lock-in and safeguarding enterprise longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Governance-as-Code & Human-on-the-Loop */}
      <section className="py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/70 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono tracking-wider uppercase mb-6 border border-white/10">
                <Icon name="ShieldCheck" size={14} />
                <span>Operating Governance</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                Human-on-the-Loop Governance
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-light mb-6">
                Greater autonomy requires stronger governance—not less. Veye7 is designed around a <strong className="text-white">Human-on-the-Loop</strong> operating model in which people retain strategic oversight and defined authority while allowing approved processes to operate without unnecessary bottlenecks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-white block mb-1">Autonomous Execution</span>
                  <p className="text-slate-400 text-xs">Permitted within pre-approved boundary conditions.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-white block mb-1">Human Confirmation</span>
                  <p className="text-slate-400 text-xs">Triggered when thresholds or risk tolerances are exceeded.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-white block mb-1">Decision Support</span>
                  <p className="text-slate-400 text-xs">Reasoned recommendations presented for final review.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-white block mb-1">Prohibited Actions</span>
                  <p className="text-slate-400 text-xs">Strictly blocked by programmatic guardrails.</p>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">Governance-as-Code</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                Policies should not exist only in static PDFs when intelligent systems take action. Veye7 translates organizational rules, permissions, thresholds, and escalation requirements into executable code.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  <span><strong>What can happen:</strong> Pre-authorized workflows executed instantly.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  <span><strong>What cannot happen:</strong> Programmatic boundaries blocking non-compliant behavior.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  <span><strong>Who has authority:</strong> Granular role-based agentic controls.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  <span><strong>What must be recorded:</strong> Complete, immutable operational action logs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Enterprise Intelligence Across the Organization */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Cross-Functional Mesh
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              Enterprise Intelligence Across the Organization
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A Veye7 architecture supports intelligence across multiple business functions while maintaining shared context and governance rather than operating as isolated silos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {functionalApplications.map((app, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary border border-slate-100 mb-6">
                    <Icon name={app.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{app.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Specialized Technologies in the Ecosystem (Scout & Pursuit) */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Ecosystem Technologies
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              Specialized Technologies Within the Veye Media Ecosystem
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Veye Media develops specialized modules applying components of this architecture to specific operating environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ecosystemTechnologies.map((tech, idx) => (
              <div key={idx} className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                  <Icon name={tech.icon} size={28} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-2">
                  {tech.tag}
                </span>
                <h3 className="text-2xl font-black text-secondary mb-4">{tech.name}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. The Destination: Active Autonomy™ */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-2">
              The Destination
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight">
              Active Autonomy™
            </h2>
            <p className="text-xl text-slate-700 font-semibold leading-relaxed">
              Veye Media calls the emerging operating state enabled by this architecture Active Autonomy™.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Active Autonomy is an operating model in which enterprise systems can recognize relevant signals, understand business context, determine appropriate responses, execute authorized actions, measure results, and adapt while remaining within defined governance and human authority.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-left">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold block mb-2">Traditional Automation</span>
                <p className="text-secondary font-bold text-lg mb-2">Executes Predefined Work</p>
                <p className="text-slate-600 text-sm">Static trigger-and-response scripts that break when edge cases or market conditions shift.</p>
              </div>
              <div className="p-6 rounded-2xl bg-primary-50/60 border border-primary-200">
                <span className="font-mono text-xs uppercase tracking-widest text-primary-700 font-bold block mb-2">Active Autonomy™</span>
                <p className="text-secondary font-bold text-lg mb-2">Senses, Decides, Acts & Adapts</p>
                <p className="text-slate-700 text-sm">Governed capacity to reason through ambiguity, execute approved responses, and continuously learn.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final Engagement Call to Action */}
      <section className="py-24 lg:py-32 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
            Architectural Engagement
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-8">
            Build Intelligence Around the Business.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            The future of enterprise AI will not be determined by which organization adopts the most point tools. The advantage belongs to organizations that connect intelligence directly to strategy, governance, and autonomous execution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary-500 text-white font-extrabold text-xl hover:bg-primary-400 transition-all shadow-2xl shadow-primary-500/25 flex items-center justify-center gap-3 group"
            >
              <span>Start an Enterprise Intelligence Conversation</span>
              <Icon name="ArrowRight" size={24} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};