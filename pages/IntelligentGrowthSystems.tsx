
import React from 'react';
import { Cpu, Zap, RefreshCw, ShieldCheck, ArrowRight, BrainCircuit, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const OutcomeBlock = ({ title, outcome, desc }: { title: string, outcome: string, desc: string }) => (
  <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
    <h3 className="text-2xl font-bold mb-4 text-veye-navy group-hover:text-veye-blue transition-colors">{title}</h3>
    <div className="mb-6">
      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-veye-amber block mb-2">The Outcome</span>
      <p className="text-lg font-bold text-veye-navy italic">{outcome}</p>
    </div>
    <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
  </div>
);

export const IntelligentGrowthSystems: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 animate-in slide-in-from-bottom-4 duration-1000 bg-white">
      {/* Hero Section with Side Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-veye-blue/5 border border-veye-blue/10 text-veye-blue text-xs font-bold mb-10 uppercase tracking-[0.2em]">
            Internalized Capability
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-10 tracking-tighter text-veye-navy leading-tight">
            Intelligent <br /> <span className="text-veye-blue">Growth Systems</span>
          </h1>
          <p className="text-3xl font-bold italic text-veye-navy/80 mb-12">
            Architecting Capability, Not Delivering Services
          </p>
          <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
            <p>
              Growth is not an outsourced service; it is an internalized capability. The conventional model of procuring fragmented deliverables—campaigns and reports—produces diminishing returns.
            </p>
            <p>
              We architect Intelligent Growth Systems. This is not a service we provide but a fundamental capability your organization acquires for permanent organizational intelligence.
            </p>
          </div>
        </div>

        {/* Page Visual Element */}
        <div className="relative pt-12">
          <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 flex items-center justify-center p-10 overflow-hidden shadow-inner">
            <div className="w-full h-full bg-veye-navy rounded-[3rem] shadow-2xl relative flex items-center justify-center group overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
               <div className="relative z-10 text-center">
                 <BrainCircuit className="text-veye-blue mb-6 mx-auto" size={100} />
                 <div className="flex justify-center gap-4">
                    <div className="w-3 h-3 bg-veye-amber rounded-full animate-ping"></div>
                    <div className="w-3 h-3 bg-veye-blue rounded-full animate-ping delay-75"></div>
                    <div className="w-3 h-3 bg-white rounded-full animate-ping delay-150"></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Grouped Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <OutcomeBlock 
          title="Innovation as an Inherent State"
          outcome="A Learning Organism"
          desc="Innovation ceases to be a discrete project or a scheduled initiative. An intelligent system integrates it into the operational fabric of the business."
        />
        <OutcomeBlock 
          title="Elasticity and Scale"
          outcome="Frictionless Scalability"
          desc="An Intelligent Growth System establishes operational frameworks and workflows that gain efficiency as they expand, gained strength from stressors."
        />
        <OutcomeBlock 
          title="Velocity as the New Efficiency"
          outcome="Competitive Preemption"
          desc="Efficiency is reimagined as strategic velocity. By eliminating the latency between insight and action, systems empower decisive pivots."
        />
        <OutcomeBlock 
          title="Antifragility by Design"
          outcome="Unassailable Resilience"
          desc="An organization built upon an Intelligent Growth System gains strength from market stressors and transforms turbulence into strategic advantage."
        />
      </div>

      <div className="p-16 lg:p-32 bg-veye-navy text-white rounded-[4rem] text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-veye-blue/20 blur-[120px] rounded-full -z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-10 tracking-tight italic">Build Your Capability.</h2>
          <p className="text-xl text-indigo-100 leading-relaxed font-medium mb-12">
            Market leaders of the next era will be defined by the sophistication of their internal growth engines. We construct those engines: intelligent, adaptive systems oriented toward future value.
          </p>
          <Link 
            to={Page.StartConversation} 
            className="inline-flex items-center gap-3 px-12 py-6 bg-veye-blue hover:bg-veye-blue/90 text-white rounded-full font-bold transition-all text-xl shadow-2xl shadow-veye-blue/20"
          >
            Start a Conversation <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};
