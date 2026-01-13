
import React from 'react';
import { Search, MapPin, TrendingUp, Share2, Database, Zap, Radio, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const SurfaceLayer = ({ title, icon, desc }: { title: string, icon: React.ReactNode, desc: string }) => (
  <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group text-left">
    <div className="w-14 h-14 bg-veye-blue/10 text-veye-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-veye-blue group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-veye-navy">{title}</h3>
    <p className="text-slate-600 leading-relaxed font-medium text-sm">{desc}</p>
  </div>
);

export const GrowthSurfaces: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 animate-in slide-in-from-right-4 duration-1000 bg-white">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-veye-blue/5 border border-veye-blue/10 text-veye-blue text-xs font-bold mb-10 uppercase tracking-[0.2em]">
            Unified Architecture
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-10 tracking-tighter text-veye-navy leading-tight">
            Digital Growth Surfaces: <br /> <span className="text-veye-blue">A Unified Growth Architecture</span>
          </h1>
          <p className="text-3xl font-bold italic text-veye-navy/80 mb-12">
            Beyond Channels, Toward Intelligent Systems
          </p>
          <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
            <p>
              The conventional approach to digital growth—managing discrete channels like SEO, advertising, and social media—is fundamentally flawed. It creates fragmentation, impedes insight, and limits potential.
            </p>
            <p>
              True market leadership is achieved not by optimizing isolated tactics, but by architecting a single, intelligent system where all digital interactions function as integrated growth surfaces.
            </p>
            <p>
              This is the architecture of unified growth. It moves beyond channel-based thinking to orchestrate a seamless interplay of discovery, influence, and relationships. When these surfaces are governed by a single system, the result is a self-reinforcing ecosystem that drives perpetual momentum.
            </p>
          </div>
        </div>

        {/* Page Visual Element */}
        <div className="relative pt-12">
          <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 flex items-center justify-center p-10 overflow-hidden shadow-inner">
            <div className="w-full h-full bg-veye-navy rounded-[3rem] shadow-2xl relative flex items-center justify-center group">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
               <div className="relative z-10">
                 <div className="relative w-56 h-56">
                   <div className="absolute inset-0 border-2 border-dashed border-veye-blue/40 rounded-full animate-[spin_15s_linear_infinite]"></div>
                   <div className="absolute inset-8 border-2 border-veye-amber/30 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
                   <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                     <Radio className="text-white animate-pulse" size={64} />
                     <span className="text-[10px] font-extrabold text-veye-blue uppercase tracking-widest">Active Surfaces</span>
                   </div>
                 </div>
               </div>
               {/* Orbital Icons */}
               <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 p-3 bg-white/5 border border-white/10 rounded-xl text-veye-blue animate-bounce">
                  <Activity size={24} />
               </div>
               <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 p-3 bg-white/5 border border-white/10 rounded-xl text-veye-amber animate-bounce delay-75">
                  <Zap size={24} />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Surface Philosophy Section */}
      <section className="py-24 bg-slate-50 rounded-[4rem] border border-slate-100 mb-32 p-12 lg:p-20 shadow-inner text-left">
        <h2 className="text-4xl font-bold text-veye-navy mb-8 tracking-tight italic">The Surfaces of an Integrated System</h2>
        <p className="text-xl text-slate-600 leading-relaxed font-medium mb-16 max-w-4xl">
          Within this unified architecture, individual functions are no longer separate channels but interconnected layers, each amplifying the intelligence and impact of the whole.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SurfaceLayer 
            title="Search & Algorithmic Discovery (SEO & AEO)"
            icon={<Search size={28} />}
            desc="This surface ensures persistent visibility across search and algorithmic environments. It is not about rankings but about engineering discoverability at the precise moments of intent, making the entire system accessible to high-value audiences."
          />
          <SurfaceLayer 
            title="Geographic Intelligence (GEO)"
            icon={<MapPin size={28} />}
            desc="A dynamic layer that provides locational context, allowing the system to adapt strategies with market-specific precision. It localizes the entire growth effort, ensuring relevance and resonance across diverse territories."
          />
          <SurfaceLayer 
            title="Paid Amplification (Ads)"
            icon={<TrendingUp size={28} />}
            desc="A strategic surface for accelerating the system’s reach and influence. It doesn't just broadcast messages; it injects velocity and captures critical data, feeding insights back into the core architecture for continuous refinement."
          />
          <SurfaceLayer 
            title="Social & Network Engagement"
            icon={<Share2 size={28} />}
            desc="The connective fabric that transforms passive interactions into durable relationships and advocacy. This surface cultivates and distributes social capital, turning audience engagement into a strategic asset."
          />
          <SurfaceLayer 
            title="Customer Intelligence (CRM)"
            icon={<Database size={28} />}
            desc="The central intelligence layer that informs every touchpoint across all surfaces. It ensures every interaction is personalized, coherent, and aligned with overarching growth objectives, transforming data into institutional knowledge."
          />
          <div className="p-10 bg-veye-navy text-white rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-veye-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <ShieldCheck className="text-veye-blue mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4 italic">Sovereign Orchestration</h3>
            <p className="text-indigo-100 text-sm leading-relaxed font-medium">Every surface is governed by the Velocity Sync Engine™ for absolute synchronization.</p>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="mb-32 text-left max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-veye-navy mb-10 tracking-tight italic">The Outcome: A Self-Sustaining Ecosystem</h2>
        <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
          <p>
            When these surfaces are orchestrated by a singular intelligence, they create an exponential effect. Data flows frictionlessly, insights are shared in real time, and every action is informed by the collective wisdom of the system.
          </p>
          <p>
            Growth ceases to be a series of campaigns and becomes a continuous, adaptive, and self-sustaining capability.
          </p>
          <p className="text-veye-navy font-bold text-2xl italic">
            This is growth, reimagined as intelligent infrastructure.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="p-16 lg:p-32 bg-veye-navy text-white rounded-[4rem] text-center relative overflow-hidden mb-32 shadow-2xl">
        <div className="absolute top-0 left-0 w-96 h-96 bg-veye-blue/20 blur-[120px] rounded-full -z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-10 tracking-tight italic">Start a Conversation</h2>
          <p className="text-xl text-indigo-100 leading-relaxed font-medium mb-12">
            We invite you to engage in a strategic dialogue about system intelligence and growth architecture. Connect with us to explore the possibilities a unified, intelligent system can unlock for your organization.
          </p>
          <Link 
            to={Page.StartConversation} 
            className="inline-flex items-center gap-3 px-12 py-6 bg-veye-blue hover:bg-veye-blue/90 text-white rounded-full font-bold transition-all text-xl shadow-2xl shadow-veye-blue/20"
          >
            Initiate Discovery Dialogue <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};
