import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';
import { EditableText } from '../components/EditableText';

interface HomeProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // Using verified icon names that match your Icon registry
  const capabilities = [
    {
      icon: 'Zap' as const,
      title: 'Signal Detection',
      desc: 'Detect important business, telemetry, and market signals in real time across systems.'
    },
    {
      icon: 'Cpu' as const,
      title: 'Silo Synthesis',
      desc: 'Connect information across previously separated systems, databases, and functional silos.'
    },
    {
      icon: 'BrainCircuit' as const,
      title: 'Contextual Analysis',
      desc: 'Analyze business context using unified data structures and semantic understanding.'
    },
    {
      icon: 'ShieldCheck' as const,
      title: 'Decision Support',
      desc: 'Support or make strategic decisions within precisely defined enterprise authority.'
    },
    {
      icon: 'Workflow' as const,
      title: 'Workflow Coordination',
      desc: 'Coordinate end-to-end workflows and data handshakes across enterprise software stacks.'
    },
    {
      icon: 'Zap' as const,
      title: 'Governed Execution',
      desc: 'Execute approved actions across operational platforms without manual bottlenecks.'
    },
    {
      icon: 'ShieldCheck' as const,
      title: 'Governance & Oversight',
      desc: 'Maintain strict Human-on-the-loop oversight, audit trails, and policy-as-code enforcement.'
    },
    {
      icon: 'Workflow' as const,
      title: 'Outcome Measurement',
      desc: 'Continuously measure business outcomes directly against concrete operational logs.'
    },
    {
      icon: 'Cpu' as const,
      title: 'Adaptive Learning',
      desc: 'Learn from results to systematically improve future system decisions and actions.'
    }
  ];

  const operatingCycle = [
    { step: '01', name: 'Signal', desc: 'Detect stack & market telemetry' },
    { step: '02', name: 'Analyze', desc: 'Synthesize data & business context' },
    { step: '03', name: 'Conclude', desc: 'Evaluate options & formulate decisions' },
    { step: '04', name: 'Act', desc: 'Execute authorized system actions' },
    { step: '05', name: 'Learn', desc: 'Measure outcomes & refine logic' },
    { step: '06', name: 'Repeat', desc: 'Perpetual operational optimization' }
  ];

  return (
    <div className="animate-fade-in bg-white text-secondary selection:bg-primary-100 selection:text-primary-900 font-sans">
      {/* 1. Hero Section with Architectural Intelligence Silhouette */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-white border-b border-slate-100">
        {/* Soft Background Blurs */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/30 rounded-full blur-[120px] -mr-24 -mt-24 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>

        {/* Enterprise Architecture Blueprint / Neural Mesh Silhouette */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035] select-none z-0">
          <svg
            className="w-[950px] h-[950px] text-secondary transform -translate-y-6 scale-110"
            viewBox="0 0 800 800"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Concentric Node Rings */}
            <circle cx="400" cy="400" r="340" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="400" cy="400" r="260" strokeWidth="2" />
            <circle cx="400" cy="400" r="170" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="400" cy="400" r="80" strokeWidth="2.5" />

            {/* Neural System Axis Lines */}
            <line x1="60" y1="400" x2="740" y2="400" strokeWidth="1.5" />
            <line x1="400" y1="60" x2="400" y2="740" strokeWidth="1.5" />
            <line x1="160" y1="160" x2="640" y2="640" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="160" y1="640" x2="640" y2="160" strokeWidth="1" strokeDasharray="3 3" />

            {/* Mesh Nodes */}
            <circle cx="400" cy="400" r="14" fill="currentColor" />
            <circle cx="400" cy="140" r="8" fill="currentColor" />
            <circle cx="400" cy="660" r="8" fill="currentColor" />
            <circle cx="140" cy="400" r="8" fill="currentColor" />
            <circle cx="660" cy="400" r="8" fill="currentColor" />
            <circle cx="230" cy="230" r="6" fill="currentColor" />
            <circle cx="570" cy="230" r="6" fill="currentColor" />
            <circle cx="230" cy="570" r="6" fill="currentColor" />
            <circle cx="570" cy="570" r="6" fill="currentColor" />

            {/* Cross-Network Interconnects */}
            <path d="M230 230 L400 140 L570 230 L660 400 L570 570 L400 660 L230 570 L140 400 Z" strokeWidth="1" />
            <path d="M400 320 L480 400 L400 480 L320 400 Z" strokeWidth="2" fill="currentColor" fillOpacity="0.05" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 mb-8 border border-slate-200 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Enterprise AI Systems Architecture</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-secondary tracking-tight mb-8 leading-[1.08] max-w-5xl mx-auto">
            <EditableText 
              section="home" 
              field="heroTitle" 
              className="block" 
            />
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <EditableText 
              section="home" 
              field="heroSubtitle" 
              multiline 
              as="p"
              className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold"
            />
            <EditableText 
              section="home" 
              field="heroSupportingLine" 
              multiline 
              as="p"
              className="text-base sm:text-lg text-slate-600 leading-relaxed"
            />
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
              We help organizations move beyond disconnected AI tools and isolated automation toward coordinated enterprise systems capable of understanding business signals, supporting decisions, executing governed actions, and continuously improving performance.
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
              onClick={() => onNavigate(View.CONTACT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Talk With Veye Media
            </button>
          </div>
        </div>
      </section>

      {/* 2. Philosophy Section */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
                Core Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-secondary leading-tight tracking-tight">
                Enterprise AI Should Begin With the Business Objective.
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-6 text-slate-700 text-lg leading-relaxed">
              <p className="text-xl font-bold text-secondary">
                AI technology alone does not transform an organization.
              </p>
              <p>
                Enterprise AI creates greater business value when strategy, processes, data, software, automation, AI agents, governance, and people operate as parts of a coordinated system.
              </p>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-500"></div>
                <p className="text-xl font-extrabold text-secondary">
                  The objective determines the architecture. Not the technology.
                </p>
              </div>
              <p className="text-base text-slate-600">
                Our approach begins with the organization's business objective. We then determine the processes, data, integrations, intelligence, automation, governance, and human oversight required to achieve it.
              </p>
              <p className="text-base text-slate-600">
                This allows organizations to use artificial intelligence where reasoning and adaptability create value while continuing to use deterministic software, automation, APIs, existing enterprise systems, and human expertise where they are better suited to the task.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Capabilities & Purpose Grid */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              What Does Veye Media Do?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Veye Media designs and architects enterprise AI systems that connect an organization's business objectives, people, processes, data, software, automation, AI agents, governance, and human decision-making.
            </p>
            <p className="text-base text-slate-500 mt-4 leading-relaxed">
              Rather than deploying disconnected AI tools, we engineer coordinated systems in which intelligence can move across business functions and technology environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary border border-slate-100 mb-6">
                    <Icon name={item.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-secondary text-white text-center shadow-xl">
            <p className="text-xl sm:text-2xl font-light text-slate-300 mb-3">
              The goal is not simply greater automation.
            </p>
            <p className="text-2xl sm:text-3xl font-black text-white max-w-4xl mx-auto leading-snug">
              The goal is to increase the organization's capacity to sense, understand, decide, act, learn, and adapt.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Veye7™ & Velocity Sync Engine™ Architecture */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
                Proprietary Architecture
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
                Veye7™ — The Enterprise Intelligence System
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-4">
                Veye7™ is Veye Media's purpose-built Enterprise Intelligence System architecture for coordinating business processes, enterprise data, software, automation, artificial intelligence, AI agents, governance, and human oversight around defined organizational objectives.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Veye7 is not a single AI model or another standalone software application. It is an enterprise architecture designed around the operating environment of each organization. Technologies within a Veye7 implementation can evolve freely as models, platforms, and business requirements change without lock-in to a single vendor.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                <Icon name="Cpu" size={28} />
              </div>
              <h3 className="text-2xl font-extrabold text-secondary mb-4">
                Velocity Sync Engine™ — The Intelligence & Orchestration Core
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                At the center of Veye7 is the Velocity Sync Engine™ (VSE)—our model-agnostic enterprise AI orchestration architecture for coordinating signals, data, business context, AI reasoning, workflows, governance, human oversight, decisions, and actions across enterprise systems.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                The VSE connects deterministic technologies (APIs, business rules, databases, and automation) with probabilistic AI capabilities when reasoning, interpretation, or adaptation is required. Instead of forcing AI to perform every task, the architecture determines where AI reasons, where software executes, where automation coordinates, and where humans retain authority.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-200">
            <div className="text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
                Continuous Operational Cadence
              </span>
              <p className="text-xl sm:text-2xl font-extrabold text-secondary">
                Signal → Analyze → Conclude → Act → Learn → Repeat
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {operatingCycle.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
                  <span className="text-xs font-mono font-bold text-primary-600 block mb-1">{item.step}</span>
                  <h4 className="text-base font-bold text-secondary mb-1">{item.name}</h4>
                  <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Active Autonomy™ & Governance */}
      <section className="py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/60 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono tracking-wider uppercase mb-6 border border-white/10">
                <Icon name="ShieldCheck" size={14} />
                <span>Governance & Authority</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-8">
                From Enterprise AI to Active Autonomy™
              </h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p className="text-white font-medium">
                  As enterprise AI becomes capable of taking action across business systems, governance becomes as important as intelligence. Veye Media calls the resulting operating model <strong>Active Autonomy™</strong>.
                </p>
                <p className="text-base sm:text-lg">
                  Active Autonomy is the ability of an enterprise system to recognize relevant signals, understand context, determine appropriate responses, execute authorized actions, measure outcomes, and adapt—while operating within defined governance and human authority.
                </p>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-lg font-bold text-white mb-2">
                    The objective is not uncontrolled autonomy.
                  </p>
                  <p className="text-sm sm:text-base text-slate-300">
                    It is governed organizational intelligence capable of acting at the speed of the business under Human-on-the-loop strategic oversight.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full aspect-square max-w-md bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center p-8 text-center backdrop-blur-md">
                <Icon name="ShieldCheck" size={120} className="text-white/20 mb-6" />
                <h4 className="text-xl font-bold text-white mb-2">Policy-as-Code & Safeguards</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time decision validation, deterministic API boundaries, and complete audit accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final Strategic Engagement CTA */}
      <section className="py-24 lg:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
            Engagement & Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-8">
            <EditableText 
              section="home" 
              field="finalCtaHeadline" 
            />
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Move beyond fragmented point tools. Schedule an architectural consultation to align your systems, data, and business objectives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate(View.CONTACT)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary-500 text-white font-extrabold text-xl hover:bg-primary-400 transition-all shadow-2xl shadow-primary-500/25 flex items-center justify-center gap-3 group"
            >
              <span>Talk With Veye Media</span>
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