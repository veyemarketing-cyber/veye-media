
import React from 'react';
import { Activity, Zap, ShieldCheck, ArrowRight, RefreshCw, Cpu, GitMerge } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

export const VelocitySync: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 animate-in zoom-in-95 duration-700 bg-white">
      {/* Header Section with Side Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-veye-blue/5 border border-veye-blue/10 text-veye-blue text-xs font-bold mb-10 uppercase tracking-[0.2em]">
            Proprietary Orchestration Layer
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter text-veye-navy leading-tight">
            The Velocity <span className="text-veye-blue">Sync Engine™</span>
          </h1>
          <p className="text-2xl font-bold italic text-veye-navy/80 mb-10">
            Orchestrating the Architecture of Growth
          </p>
          <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
            <p>
              The Velocity Sync Engine™ functions as the central proprietary orchestration layer for modern enterprise ecosystems. It is the intelligence that governs the space between strategy and market reality, ensuring that intent translates instantly into impact.
            </p>
            <p>
              This system supersedes the fragility of fragmented execution. It replaces the reliance on disjointed oversight and reactive management with a unified, autonomous current of productivity.
            </p>
          </div>
        </div>
        
        {/* Page Visual Element */}
        <div className="relative pt-12">
          <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 flex items-center justify-center p-10 overflow-hidden shadow-inner">
            <div className="w-full h-full bg-veye-navy rounded-[3rem] shadow-2xl relative flex items-center justify-center group overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-veye-blue via-transparent to-transparent"></div>
               <div className="flex flex-col items-center gap-6 relative z-10">
                 <div className="p-6 bg-veye-blue/20 rounded-2xl border border-white/10 animate-pulse">
                   <Activity size={80} className="text-white" />
                 </div>
                 <GitMerge size={48} className="text-veye-amber" />
               </div>
               <div className="absolute top-0 left-0 w-full h-full border-4 border-dashed border-white/5 rounded-[3rem] animate-[spin_20s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Outcomes Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
        <div className="bg-veye-navy rounded-[3rem] p-12 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-veye-blue/20 blur-[100px] -z-10"></div>
          <h3 className="text-3xl font-bold mb-10 tracking-tight italic">The outcomes are absolute:</h3>
          <ul className="space-y-10">
            <li className="flex items-start gap-5">
              <div className="w-12 h-12 bg-veye-blue/20 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                <Activity className="text-veye-blue" size={24} />
              </div>
              <div>
                <span className="block font-bold text-xl mb-2">Unified Velocity</span>
                <p className="text-indigo-100 text-sm leading-relaxed">Strategic directives propagate instantly across the environment, ensuring total alignment without degradation.</p>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <div className="w-12 h-12 bg-veye-blue/20 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                <RefreshCw className="text-veye-blue" size={24} />
              </div>
              <div>
                <span className="block font-bold text-xl mb-2">Durable Infrastructure</span>
                <p className="text-indigo-100 text-sm leading-relaxed">Growth becomes a function of engineered systems rather than sporadic effort.</p>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <div className="w-12 h-12 bg-veye-blue/20 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                <ShieldCheck className="text-veye-blue" size={24} />
              </div>
              <div>
                <span className="block font-bold text-xl mb-2">Sovereign Control</span>
                <p className="text-indigo-100 text-sm leading-relaxed">Intelligence replaces intuition, granting leadership total visibility and governance.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="text-left space-y-10 p-10 lg:p-16 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-inner">
          <h2 className="text-3xl lg:text-4xl font-bold text-veye-navy leading-tight italic">
            Governing <span className="text-veye-blue">Momentum</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            By integrating this orchestration layer, organizations transition from managing chaos to governing momentum. It provides the structural integrity required to move from tactical execution to systemic durability.
          </p>
          <Link to={Page.StartConversation} className="inline-flex items-center gap-3 px-10 py-5 bg-veye-navy hover:bg-slate-800 text-white rounded-full font-bold transition-all shadow-lg shadow-veye-navy/20">
            Start a Conversation <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};
