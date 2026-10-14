import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface SolutionsProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onNavigate }) => {
  const solutionCards = [
    {
      title: 'Business Intelligence & Decision Support',
      desc: 'Synthesize telemetry across enterprise silos, extract actionable context, and deliver governed decision-support across operational functions.',
      view: View.SOL_BI_DECISION_SUPPORT,
      icon: 'BrainCircuit' as const
    },
    {
      title: 'Business Development & Revenue Intelligence',
      desc: 'Coordinate account intelligence, prospect qualification, assignment, and synchronized opportunity progression to accelerate pipeline growth.',
      view: View.SOL_BD_REVENUE,
      icon: 'Zap' as const
    },
    {
      title: 'Sales & Marketing Intelligence',
      desc: 'Connect buyer intent signals, campaign telemetry, and CRM data into closed-loop revenue execution engines.',
      view: View.SOL_SALES_MARKETING,
      icon: 'Workflow' as const
    },
    {
      title: 'Market & Competitive Intelligence',
      desc: 'Detect, organize, and interpret external market signals and competitor movements in real time with peripheral telemetry radar.',
      view: View.SOL_MARKET_COMPETITIVE,
      icon: 'Zap' as const
    },
    {
      title: 'Intelligent Process Orchestration',
      desc: 'Bridge deterministic software workflows, APIs, and business rules with probabilistic AI reasoning across cross-functional pipelines.',
      view: View.SOL_PROCESS_ORCHESTRATION,
      icon: 'Workflow' as const
    },
    {
      title: 'Governed AI & Agentic Systems',
      desc: 'Active Autonomy™ operating models enforced by Governance-as-Code, Human-on-the-loop oversight, and immutable action logs.',
      view: View.SOL_GOVERNED_AI_AGENTS,
      icon: 'ShieldCheck' as const
    },
    {
      title: 'Enterprise AI Architecture & Integration',
      desc: 'Purpose-built system integrations designed around your organizational objectives, connecting legacy systems with modern AI capabilities.',
      view: View.SOL_ENTERPRISE_ARCHITECTURE,
      icon: 'Cpu' as const
    }
  ];

  return (
    <div className="animate-fade-in bg-white text-secondary selection:bg-primary-100 selection:text-primary-900">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-white border-b border-slate-100">
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
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Enterprise AI Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-secondary tracking-tight mb-8 leading-[1.08] max-w-5xl mx-auto">
            Enterprise AI Solutions Built Around Business Outcomes
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              Connect Strategy, Processes, Data, Technology, AI, and Human Decision-Making
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Veye Media designs enterprise AI solutions and intelligent business systems around the objectives organizations need to achieve—not around a predetermined AI model, platform, or tool.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We help organizations identify where artificial intelligence can create measurable value, connect intelligence across existing systems, improve decision-making, coordinate business processes, and introduce governed autonomy where it makes operational sense.
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Our solutions are architected through <strong>Veye7™</strong>, Veye Media’s purpose-built Enterprise Intelligence System architecture, with the <strong>Velocity Sync Engine™ (VSE)</strong> providing the intelligence and orchestration core.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="#solutions-grid"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Explore Our Solutions</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Discuss Your Business Objective
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-mono text-slate-400 uppercase tracking-widest">
              The objective is not to deploy more AI. It is to build a more intelligent organization.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Philosophy: Start With the Business Problem, Not the AI Tool */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
                Strategic Foundation
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-secondary leading-tight tracking-tight">
                Start With the Business Problem, Not the AI Tool.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                Organizations are under increasing pressure to adopt artificial intelligence. That pressure can lead to the wrong starting question: <em>“Where can we use AI?”</em>
              </p>
              
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-500" />
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">Our Starting Question</p>
                <p className="text-2xl font-black text-secondary">
                  “What does the organization need to accomplish?”
                </p>
              </div>

              <p className="text-base text-slate-600">
                The answer may involve increasing revenue, improving business development, reducing operational friction, strengthening customer retention, connecting fragmented data, improving decision speed, monitoring market changes, or coordinating work across multiple systems.
              </p>
              <p className="text-base text-slate-600">
                Only then do we determine what combination of business process design, enterprise data, software, APIs, automation, artificial intelligence, AI agents, governance, and human expertise is required.
              </p>
              <p className="text-xl font-extrabold text-secondary">
                The objective determines the architecture. Not the technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Enterprise AI Problems Does Veye Media Solve? */}
      <section id="solutions-grid" className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              What Enterprise AI Problems Does Veye Media Solve?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
              Veye Media helps organizations address business problems that cannot be solved effectively by adding another disconnected AI application.
            </p>
            <p className="text-base text-slate-500 mt-4 leading-relaxed">
              These problems often occur when important signals exist across multiple systems, decisions require information from several business functions, workflows depend on manual coordination, or AI lacks the organizational context and governance required to act effectively.
            </p>
          </div>

          {/* Solutions Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCards.map((sol, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(sol.view)}
                className="group cursor-pointer p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-primary-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary border border-slate-100 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <Icon name={sol.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary-600 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {sol.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-primary-600 group-hover:translate-x-1 transition-transform">
                  <span>Explore Solution</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
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
            Discuss Your Business Objective
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Align your enterprise strategy with purpose-built intelligence systems designed for continuous, governed execution.
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
              onClick={() => onNavigate(View.VEYE7)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-secondary font-bold text-xl hover:bg-slate-100 transition-all border border-slate-200"
            >
              Explore Veye7™
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};