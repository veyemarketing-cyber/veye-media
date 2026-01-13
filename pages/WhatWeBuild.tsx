
import React from 'react';
import { Cpu, Zap, RefreshCw, BarChart3, ShieldCheck, ArrowRight, Layers, Target } from 'lucide-react';
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

export const WhatWeBuild: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in slide-in-from-bottom-4 duration-1000 bg-white">
      {/* Hero Section */}
      <div className="max-w-4xl mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-veye-blue/5 border border-veye-blue/10 text-veye-blue text-xs font-bold mb-10 uppercase tracking-[0.2em]">
          Internalized Capability
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-10 tracking-tighter text-veye-navy leading-tight">
          What We Build: <br /> <span className="text-veye-blue">Intelligent Growth Systems</span>
        </h1>
        <p className="text-3xl font-bold italic text-veye-navy/80 mb-12">
          Architecting Capability, Not Delivering Services
        </p>
        <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
          <p>
            Growth is not an outsourced service; it is an internalized capability. The conventional model of procuring fragmented deliverables—campaigns, reports, and isolated strategies—produces diminishing returns in a dynamic market. It creates dependencies, not assets.
          </p>
          <p>
            We architect Intelligent Growth Systems. This is not a service we provide but a fundamental capability your organization acquires. We build the enduring infrastructure for learning, adaptation, and market leadership, moving beyond the transactional nature of vendor relationships to establish permanent organizational intelligence.
          </p>
          <p>
            The focus shifts from tactical execution to strategic architecture. The outcome is not a temporary uplift but a self-sustaining system engineered for perpetual evolution and advantage.
          </p>
        </div>
      </div>

      {/* Static vs Dynamic Section */}
      <section className="py-24 bg-slate-50 rounded-[4rem] border border-slate-100 mb-32 p-12 lg:p-20 shadow-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-veye-navy mb-8 tracking-tight italic">From Static Deliverables to <br /> Dynamic Capabilities</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
              An Intelligent Growth System replaces disconnected efforts with a unified, intelligent architecture. It embeds a nervous system into the enterprise, one that senses and responds to market stimuli with precision and speed. The objective transcends finite project goals to cultivate lasting organizational strengths.
            </p>
            <div className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-veye-blue/10 text-veye-blue rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-veye-amber block mb-1">Outcome Enabled</span>
                <p className="text-veye-navy font-bold">Systemic Agility</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-veye-navy rounded-[3rem] shadow-2xl flex items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                   <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-veye-blue via-transparent to-transparent"></div>
                </div>
                <Layers size={120} className="text-white animate-pulse" />
             </div>
          </div>
        </div>
      </section>

      {/* Outcomes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <OutcomeBlock 
          title="Innovation as an Inherent State"
          outcome="A Learning Organism"
          desc="Innovation ceases to be a discrete project or a scheduled initiative. An intelligent system integrates it into the operational fabric of the business. Real-time data streams create closed-loop systems where market intelligence directly informs strategic and product evolution."
        />
        <OutcomeBlock 
          title="Elasticity and Scale"
          outcome="Frictionless Scalability"
          desc="Conventional growth models are brittle; they fracture under the pressure of scale. An Intelligent Growth System is designed for elasticity. It establishes operational frameworks and workflows that gain efficiency as they expand."
        />
        <OutcomeBlock 
          title="Velocity as the New Efficiency"
          outcome="Competitive Preemption"
          desc="Efficiency is reimagined not as cost reduction, but as strategic velocity. By eliminating the latency between insight and action, intelligent systems empower decisive, data-driven pivots."
        />
        <OutcomeBlock 
          title="Antifragility by Design"
          outcome="Unassailable Resilience"
          desc="Market volatility shatters rigid, service-based structures. An organization built upon an Intelligent Growth System is antifragile—it gains strength from stressors and transforms market turbulence into strategic advantage."
        />
      </div>

      {/* Build Capability Section */}
      <div className="p-16 lg:p-32 bg-veye-navy text-white rounded-[4rem] text-center relative overflow-hidden mb-32 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-veye-blue/20 blur-[120px] rounded-full -z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-10 tracking-tight">Build Your Capability. <br /> Define Your Future.</h2>
          <p className="text-xl text-indigo-100 leading-relaxed font-medium mb-12">
            Market leaders of the next era will not be distinguished by their roster of vendors. They will be defined by the sophistication of their internal growth engines. We construct those engines: intelligent, adaptive systems relentlessly oriented toward future value.
          </p>
          <Link 
            to={Page.StartConversation} 
            className="inline-flex items-center gap-3 px-12 py-6 bg-veye-blue hover:bg-veye-blue/90 text-white rounded-full font-bold transition-all text-xl shadow-2xl shadow-veye-blue/20"
          >
            Start a Conversation <ArrowRight size={24} />
          </Link>
        </div>
      </div>

      {/* Final Dialogue Invite */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6 text-veye-navy italic">Engaging in Strategic Dialogue</h3>
        <p className="text-lg text-slate-500 font-medium">
          We welcome strategic discussions about the future of your organization’s growth systems. Engage with us to explore the possibilities that intelligent architectures can unlock.
        </p>
      </div>
    </div>
  );
};
