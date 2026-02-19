import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Cpu, Network } from 'lucide-react';
import { Page } from '../types';

export const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* Custom Animation for the Glow Effect */}
      <style>{`
        @keyframes slow-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(196, 117, 0, 0.2); transform: scale(1); }
          50% { box-shadow: 0 0 25px rgba(196, 117, 0, 0.6); transform: scale(1.02); }
        }
        .animate-slow-glow {
          animation: slow-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-28 overflow-hidden border-b border-slate-50 flex items-center justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.03]">
          <Network 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-veye-navy w-[800px] h-[800px] lg:w-[1200px] lg:h-[1200px]" 
            strokeWidth={0.5} 
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            
            {/* AMBER PULSATING BUTTON */}
            <a 
              href="https://calendly.com/victor-veyemedia/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-black uppercase tracking-widest mb-10 transition-all cursor-pointer animate-slow-glow"
              style={{ backgroundColor: '#c47500' }}
            >
              <Activity size={16} className="animate-pulse" />
              Schedule a Demo
            </a>

            <h1 className="text-5xl lg:text-8xl font-extrabold leading-tight mb-8 tracking-tighter text-veye-navy">
              We Architect <span className="text-transparent bg-clip-text bg-gradient-to-r from-veye-blue to-veye-navy">Intelligent Growth Systems</span>.
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed font-medium">
              Veye Media is an Agentic AI-powered Systems Architect designing proprietary orchestration layers that align search, media, platforms, and customer intelligence into a single continuous growth system.
            </p>

            <div className="mb-12">
              <span className="font-extrabold text-sm uppercase tracking-[0.2em] block mb-2" style={{ color: '#c47500' }}>
                Systems over services.
              </span>
              <p className="text-lg lg:text-xl text-slate-500 font-bold italic">
                Intelligent infrastructure that operates, adapts, and improves over time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                to={Page.StartConversation}
                className="px-12 py-6 bg-veye-navy hover:bg-slate-800 text-white rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-2xl shadow-veye-navy/20 text-lg"
              >
                Start a Strategic Conversation <ArrowRight size={22} />
              </Link>
              <Link
                to={Page.VelocitySync}
                className="px-12 py-6 bg-white border border-slate-200 hover:border-veye-blue text-veye-navy rounded-full font-bold flex items-center justify-center gap-3 transition-all text-lg group"
              >
                <Cpu size={22} className="text-veye-blue group-hover:rotate-12 transition-transform" />
                Velocity Sync Engine™
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rest of the component remains the same */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-8 font-bold uppercase tracking-widest text-sm" style={{ color: '#c47500' }}>
            Orchestration over Effort
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-veye-navy tracking-tight italic">
            Beyond Execution. Into Autonomy.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium mb-12">
            Traditional service models rely on fragmented execution—disconnected efforts that yield diminishing returns. This approach is obsolete. We replace transient activity with durable, intelligence-driven infrastructure.
          </p>
        </div>
      </section>

      <section className="py-32 bg-veye-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Activity size={400} className="absolute -bottom-20 -left-20 text-veye-blue" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 italic">
            Governing the Future
          </h2>
          <p className="text-xl text-indigo-100 leading-relaxed font-medium mb-16 max-w-3xl mx-auto">
            Veye Media partners with executive decision-makers to redefine the boundaries of what is possible, moving from manual dependencies to systemic mastery.
          </p>
          <Link
            to={Page.StartConversation}
            className="inline-flex items-center gap-3 px-14 py-7 bg-veye-blue hover:bg-veye-blue/90 text-white rounded-full font-bold transition-all text-2xl shadow-2xl shadow-veye-blue/30"
          >
            Start a Strategic Conversation <ArrowRight size={32} />
          </Link>
        </div>
      </section>
    </div>
  );
};