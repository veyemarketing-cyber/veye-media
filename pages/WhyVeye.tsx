import React from 'react';
import { Target, Cpu, Activity, ShieldCheck, Zap, HelpCircle, ArrowRight, Network, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

export const WhyVeye: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter text-veye-navy leading-tight italic">
              Why <span className="text-veye-blue">Veye Media</span>
            </h1>
            <p className="text-2xl font-bold italic text-veye-navy/80 mb-10">
              The market has shifted toward systems-based growth.
            </p>
            <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
              <p>
                Organizations now operate in environments defined by constant signals, accelerating complexity, and AI-driven change. In this reality, growth is no longer constrained by effort—it is constrained by coordination. 
              </p>
              <p>
                Traditional marketing services, built for reactive execution and isolated outputs, struggle to keep pace with the demands of sustained leadership.
              </p>
            </div>
          </div>

          {/* Side Visual */}
          <div className="relative">
            <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 flex items-center justify-center p-10 overflow-hidden shadow-inner">
              <div className="w-full h-full bg-veye-navy rounded-[3rem] shadow-2xl relative flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-veye-blue/20 to-transparent"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <Network className="text-white/20 absolute" size={300} />
                  <ShieldCheck className="text-veye-blue mb-4 relative z-20" size={100} />
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/40 relative z-20">Durability | Intelligence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coherence Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-10 text-veye-navy tracking-tight italic">
            What breaks first is not activity, but <span className="text-veye-blue">coherence</span>.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium mb-12">
            Disconnected tools, vendors, and tactics create motion without direction. Insights fail to compound. Decisions lag behind reality. Over time, organizations become dependent on constant intervention rather than durable momentum.
          </p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4].map(i => <div key={i} className="w-2 h-2 rounded-full bg-veye-amber/40"></div>)}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-left">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-veye-navy tracking-tight italic">
              Addressing the structural problem.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Veye Media exists to address this structural problem. We believe growth is not something to be “run.” It must be orchestrated. Sustainable growth requires an intelligence layer capable of aligning signals, surfaces, and decisions into a unified system—one that adapts continuously rather than reacting episodically.
              </p>
              <p className="text-veye-navy font-bold text-2xl">
                This is the role of architecture.
              </p>
              <p>
                Rather than delivering services in isolation, Veye Media designs and maintains intelligent growth systems coordinated through our proprietary <span className="text-veye-blue font-bold">Velocity Sync Engine™</span>.
              </p>
            </div>
          </div>

          <div className="p-10 bg-veye-navy rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-veye-blue/20 blur-[100px] -z-0"></div>
            <Activity className="text-veye-blue mb-8 animate-pulse" size={48} />
            <h3 className="text-2xl font-bold mb-6 italic underline decoration-veye-blue underline-offset-8">The Engine of Alignment</h3>
            <p className="text-indigo-100 text-lg leading-relaxed font-medium mb-8">
              The Engine functions as an orchestration layer—ensuring that media, data, and decision-making operate as a coherent whole, not a collection of parts.
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-sm font-bold italic">"In an AI-powered world, advantage belongs to organizations with systems that endure change."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alignment Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all text-left">
            <Zap className="text-veye-blue mb-6" size={32} />
            <h3 className="text-xl font-bold text-veye-navy mb-4">Alignment</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">Durability comes from the synchronization of every digital touchpoint and organizational signal.</p>
          </div>
          <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all text-left">
            <Cpu className="text-veye-blue mb-6" size={32} />
            <h3 className="text-xl font-bold text-veye-navy mb-4">Orchestration</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">Clarity is achieved through an orchestration layer that manages complexity autonomously.</p>
          </div>
          <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all text-left">
            <Layers className="text-veye-blue mb-6" size={32} />
            <h3 className="text-xl font-bold text-veye-navy mb-4">Evolution</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">Growth comes from systems designed to evolve without the friction of constant reinvention.</p>
          </div>
        </div>
      </section>

      {/* Conversation CTA */}
      <section className="bg-veye-navy text-white py-24 lg:py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-veye-blue/10 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-10 tracking-tight italic">A Different Kind of Conversation</h2>
          <p className="text-xl lg:text-2xl text-indigo-100 leading-relaxed font-medium mb-12">
            If you’re exploring what it would look like to replace fragmented efforts with a coherent growth system, the next step is not a pitch—it’s a conversation. 
          </p>
          <p className="text-lg text-slate-300 mb-16 max-w-3xl mx-auto">
            The goal is clarity: understanding your environment, your constraints, and whether a systems-based approach is the right fit. If it is, we can outline what an intelligent, durable growth architecture could look like for your organization.
          </p>
          <Link 
            to={Page.StartConversation} 
            className="inline-flex items-center gap-3 px-12 py-6 bg-veye-blue hover:bg-veye-blue/90 text-white rounded-full font-bold transition-all text-xl shadow-2xl shadow-veye-blue/30"
          >
            Start a conversation when you’re ready <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};
