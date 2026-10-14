import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';

interface ExecutiveInsightsProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const ExecutiveInsights: React.FC<ExecutiveInsightsProps> = ({ onNavigate }) => {
  const coreQuestions = [
    'Revenue growth?',
    'Decision speed?',
    'Customer retention?',
    'Operational efficiency?',
    'Market awareness?',
    'Business development?',
    'Risk management?',
    'Service delivery?'
  ];

  const capabilityAssignments = [
    {
      entity: 'Artificial Intelligence',
      role: 'Reasoning & Adaptation',
      desc: 'Where interpretation, reasoning, language, contextual understanding, or adaptation creates value.',
      icon: 'BrainCircuit' as const
    },
    {
      entity: 'Deterministic Software',
      role: 'Predictable Execution',
      desc: 'Where predictable behavior, business rules, and rigorous system accuracy are required.',
      icon: 'Cpu' as const
    },
    {
      entity: 'Automation & APIs',
      role: 'Repeatable Velocity',
      desc: 'Where repetition exists and enterprise applications must connect without friction.',
      icon: 'Workflow' as const
    },
    {
      entity: 'People',
      role: 'Strategic Authority',
      desc: 'Where human judgment, expertise, accountability, ethics, and authority belong.',
      icon: 'ShieldCheck' as const
    }
  ];

  const authorityRules = [
    { action: 'Observe', desc: 'Passive signal ingestion & telemetry tracking across systems' },
    { action: 'Analyze', desc: 'Contextual reasoning against organizational data models' },
    { action: 'Recommend', desc: 'Deliberate next-action proposals for human evaluation' },
    { action: 'Request Approval', desc: 'Pre-flight confirmation for strategic workflows' },
    { action: 'Execute', desc: 'Autonomous action within verified boundary thresholds' },
    { action: 'Escalate', desc: 'Instant leader routing when anomalies or exceptions occur' },
    { action: 'Stop', desc: 'Deterministic fail-safe kill switches and policy guardrails' }
  ];

  const activeAutonomyCycle = [
    { step: '01', name: 'Signal', desc: 'Sense internal & external events' },
    { step: '02', name: 'Analyze', desc: 'Weave data into organizational context' },
    { step: '03', name: 'Conclude', desc: 'Determine optimal response pathways' },
    { step: '04', name: 'Act', desc: 'Execute authorized enterprise actions' },
    { step: '05', name: 'Learn', desc: 'Measure concrete business outcomes' },
    { step: '06', name: 'Repeat', desc: 'Continuous closed-loop adaptation' }
  ];

  const strategicInquiries = [
    'What business outcome are we actually pursuing?',
    'What process should exist before we automate it?',
    'Where does AI reasoning create meaningful value?',
    'What should remain deterministic?',
    'What authority are we prepared to delegate?',
    'What must remain human?',
    'How will governance operate?',
    'How will intelligence move across the organization?',
    'How will we measure whether organizational capability actually improved?'
  ];

  return (
    <div className="animate-fade-in bg-white text-secondary selection:bg-primary-100 selection:text-primary-900 font-sans">
      {/* 1. Hero Section & Leadership Attribution */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/30 rounded-full blur-[120px] -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Eyebrow Byline */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-700">
                EXECUTIVE PERSPECTIVE | VICTOR J. MCCOY
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-secondary tracking-tight mb-8 leading-[1.08] max-w-5xl mx-auto text-center">
            Enterprise AI Is a Business Decision Before It Is a Technology Decision
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-10 text-center">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold">
              What Executives Should Consider Before Scaling AI Across the Organization
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Artificial intelligence is moving from experimentation into the operating environment of the enterprise. The executive question is no longer simply whether AI can improve productivity.
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold mb-2">The Core Question</p>
              <p className="text-xl sm:text-2xl font-black text-secondary leading-snug">
                “How should AI change the way the organization operates, makes decisions, coordinates work, governs authority, and creates value?”
              </p>
            </div>
            <p className="text-base text-slate-600 leading-relaxed">
              That requires more than selecting an AI platform. It requires decisions about strategy, processes, data, technology, people, governance, risk, and organizational design. Veye Media helps leaders approach those decisions as an enterprise architecture challenge—not an AI procurement exercise.
            </p>
          </div>

          {/* Restrained Attribution Card */}
          <div className="max-w-md mx-auto mb-12 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex items-center gap-4">
            <img
              src="/professional-profile-headshot-600x600.webp"
              alt="Victor J. McCoy"
              className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0 shadow-sm"
              onError={(e) => {
                // Graceful fallback if image path changes
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div>
              <h4 className="text-sm font-bold text-secondary tracking-tight">Victor J. McCoy</h4>
              <p className="text-xs text-slate-500 font-medium">President & Systems Architect, Veye Media</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/15 flex items-center justify-center gap-2 group"
            >
              <span>Discuss Your Enterprise AI Strategy</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.VEYE7)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/15 shadow-sm"
            >
              Explore Veye7™
            </button>
          </div>

        </div>
      </section>

      {/* 2. Principles 1, 2, 3: Objectives, Adoption vs Transformation, Process First */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Principle 1 */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold text-primary-600 uppercase tracking-widest block mb-2">01. Principle</span>
              <h2 className="text-2xl sm:text-3xl font-black text-secondary tracking-tight mb-4">
                Don’t Start With “Where Can We Use AI?”
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Organizations can find hundreds of possible applications for artificial intelligence. That does not mean they should implement them. The more important executive question is: <strong>What business capability needs to improve?</strong>
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-mono uppercase font-bold text-slate-500 block mb-1">Architectural Sequence</span>
                <p className="text-xs font-bold text-secondary">
                  Business Objective → Required Capability → Architecture → Technology
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-4">Define The Target Capability</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {coreQuestions.map((q, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs font-bold text-secondary text-center">
                    {q}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                Sometimes AI will be central to the solution. Sometimes it will play a supporting role. Sometimes it will not be necessary. That distinction prevents significant amounts of unnecessary technology investment.
              </p>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold text-primary-600 uppercase tracking-widest block mb-2">02. Principle</span>
              <h2 className="text-2xl sm:text-3xl font-black text-secondary tracking-tight mb-4">
                AI Adoption and Enterprise Transformation Are Not the Same Thing
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                An organization can deploy AI successfully without becoming significantly more intelligent as an enterprise. Employees can use copilots, departments can deploy agents, and teams can automate workflows—yet information can remain fragmented, decisions slow, and business functions isolated.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3 font-semibold text-secondary">
                AI adoption changes tools. Enterprise transformation changes organizational capability.
              </p>
            </div>
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
              <span className="text-xs font-mono uppercase tracking-wider text-primary-600 font-bold block mb-4">Executive Evaluation Checklist</span>
              <div className="space-y-2 text-xs font-medium text-slate-700">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">✓ Does this improve how information moves through the organization?</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">✓ Does it reduce the time required to make an important decision?</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">✓ Does it improve coordination across business functions?</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">✓ Does it create measurable operating capacity?</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">✓ Does it improve the organization’s ability to respond to change?</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">✓ Does it produce an outcome the business actually values?</div>
              </div>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-xs font-mono font-bold text-primary-600 uppercase tracking-widest block mb-2">03. Principle</span>
            <h2 className="text-2xl sm:text-3xl font-black text-secondary tracking-tight mb-4">
              Fix the Process Before You Automate It
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-4xl">
              AI can accelerate a business process. That does not mean the process deserves to be accelerated. Understand how work currently happens: which steps create value, where decisions occur, where handoffs create friction, and which exceptions require judgment.
            </p>
            <div className="p-5 rounded-2xl bg-secondary text-white max-w-2xl">
              <p className="text-sm font-bold">
                "Otherwise, AI can make inefficient work happen faster. Process architecture should precede intelligent automation."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Principles 4 & 5: Capability Allocation & Context */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Principle 4 */}
            <div>
              <span className="text-xs font-mono font-bold text-primary-600 uppercase tracking-widest block mb-2">04. Principle</span>
              <h2 className="text-3xl font-black text-secondary tracking-tight mb-6">
                AI Should Not Perform Every Task It Can Perform
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                The strongest enterprise architecture does not attempt to maximize AI usage. It assigns work to the capability best suited to perform it.
              </p>
              <div className="space-y-3">
                {capabilityAssignments.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-primary-600 flex items-center justify-center shrink-0">
                      <Icon name={item.icon} size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-primary-600 block mb-0.5">{item.role}</span>
                      <h4 className="text-sm font-bold text-secondary mb-0.5">{item.entity}</h4>
                      <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Principle 5 */}
            <div>
              <span className="text-xs font-mono font-bold text-primary-600 uppercase tracking-widest block mb-2">05. Principle</span>
              <h2 className="text-3xl font-black text-secondary tracking-tight mb-6">
                Data Without Context Is Not Enterprise Intelligence
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Organizations often assume their AI challenge is primarily a data problem. Data matters. But enterprise intelligence requires context.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                A transaction has meaning because of customer history; a sales opportunity has meaning because of relationship depth; a competitor announcement has meaning because of strategic position.
              </p>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-3">Required Organizational Context</span>
                <div className="flex flex-wrap gap-2">
                  {['Objectives', 'Relationships', 'History', 'Processes', 'Policies', 'Authority', 'Constraints'].map((ctx, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-secondary">
                      {ctx}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                The executive challenge extends beyond connecting AI to databases. It requires determining how the organization makes its context available to intelligent systems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Principles 6, 7, 8: Governance, Human-on-the-Loop, Model-Agnosticism */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Principle 6 */}
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-primary-600 uppercase tracking-widest block mb-2">06. Principle</span>
                <h3 className="text-xl font-black text-secondary mb-4">
                  Agentic AI Changes the Governance Question
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  When systems move from generating information to initiating actions (updating records, dispatching communications, executing workflows), leadership must define explicit authority.
                </p>
                <div className="space-y-1.5 mb-6">
                  {authorityRules.slice(0, 5).map((rule, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-slate-50 text-[11px] flex justify-between">
                      <span className="font-bold text-secondary">{rule.action}</span>
                      <span className="text-slate-500">{rule.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs font-bold text-secondary">
                Governance cannot be a policy document sitting outside the architecture.
              </p>
            </div>

            {/* Principle 7 */}
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-primary-600 uppercase tracking-widest block mb-2">07. Principle</span>
                <h3 className="text-xl font-black text-secondary mb-4">
                  Human Oversight ≠ Human Approval of Everything
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Allowing unconstrained autonomy introduces unacceptable risk. Requiring human sign-off on every task destroys operating speed.
                </p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 mb-6 text-xs text-slate-600 space-y-2">
                  <div><strong>Low-Risk:</strong> Auto-execute within strict bounds.</div>
                  <div><strong>Moderate-Risk:</strong> Execute within threshold budgets.</div>
                  <div><strong>High-Risk:</strong> Explicit human authorization required.</div>
                </div>
              </div>
              <p className="text-xs font-bold text-secondary">
                Human-on-the-Loop governance ensures people govern the system without becoming bottlenecks.
              </p>
            </div>

            {/* Principle 8 */}
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-primary-600 uppercase tracking-widest block mb-2">08. Principle</span>
                <h3 className="text-xl font-black text-secondary mb-4">
                  Avoid Building Strategy Around One Model
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Distinguish between the <strong>enterprise intelligence architecture</strong> and the individual AI models operating inside it.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  A model-agnostic approach allows leadership to evaluate new models and tools without redesigning their entire operating environment when vendor capabilities shift.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-secondary">
                  Models are replaceable components. The architecture remains.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Principle 9: Decision Latency & Active Autonomy */}
      <section className="py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/70 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-300 font-bold block mb-2">09. Principle</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Measure the Distance Between Signal and Action
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              One of the most important enterprise intelligence opportunities is reducing decision latency. Compress the operating cycle from raw observation to governed execution.
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
              For executives, time-to-understanding and time-to-action should become core measurable operating metrics.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Principle 10 & Purpose-Built Ecosystem */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
              10. Principle
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-6">
              The Goal Is Organizational Capability
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The enterprise AI conversation must return to one question: <strong>What can the organization do better after this investment than it could before?</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-secondary mb-1">Early Signal Recognition</h4>
              <p className="text-xs text-slate-500">Recognize external market shifts and internal operational signals earlier.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-secondary mb-1">Rapid Decision Velocity</h4>
              <p className="text-xs text-slate-500">Make higher-quality strategic decisions with synthesized business context.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-secondary mb-1">Cross-System Coordination</h4>
              <p className="text-xs text-slate-500">Coordinate workflows across platforms without manual human handoffs.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-secondary mb-1">Frictionless Execution</h4>
              <p className="text-xs text-slate-500">Act across enterprise systems within verified policy and budget thresholds.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-secondary mb-1">Governed Speed</h4>
              <p className="text-xs text-slate-500">Maintain strict compliance and human authority while operating at machine velocity.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-secondary mb-1">Closed-Loop Learning</h4>
              <p className="text-xs text-slate-500">Continuously learn from outcomes and adapt business logic over time.</p>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary-400 font-bold block mb-2">
                The Veye Architecture Family
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mb-3">Purpose-Built Through Veye7™</h3>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                Veye7 coordinates objectives, processes, data, software, automation, and AI. At its core, the Velocity Sync Engine™ handles orchestration, extended by Veye Scout™ (Market Intelligence) and Veye Pursuit™ (Business Development).
              </p>
            </div>
            <button
              onClick={() => onNavigate(View.VEYE7)}
              className="px-8 py-4 rounded-xl bg-primary-500 text-white font-bold text-sm shrink-0 hover:bg-primary-400 transition-all"
            >
              Explore Veye7™ Architecture
            </button>
          </div>
        </div>
      </section>

      {/* 7. Strategic Inquiries & Engagement CTA */}
      <section className="py-24 lg:py-32 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-600 font-bold block mb-3">
            Leadership Inquiry
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight mb-8">
            Before You Invest More in Enterprise AI, Ask Better Questions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left mb-12">
            {strategicInquiries.map((inq, idx) => (
              <div key={idx} className="p-4 bg-white rounded-2xl border border-slate-200/80 text-xs font-bold text-secondary flex items-start gap-2.5">
                <span className="text-primary-600 font-mono">0{idx + 1}.</span>
                <span>{inq}</span>
              </div>
            ))}
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            The answers to those questions should shape the architecture. Then the architecture should determine the technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary-500 text-white font-extrabold text-xl hover:bg-primary-400 transition-all shadow-2xl shadow-primary-500/25 flex items-center justify-center gap-3 group"
            >
              <span>Discuss Your Enterprise AI Strategy</span>
              <Icon name="ArrowRight" size={24} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.TECH_VSE)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-secondary font-bold text-xl hover:bg-slate-100 transition-all border border-slate-200"
            >
              Explore Velocity Sync Engine™
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};