
import React from 'react';
import { Cpu, Target, ArrowRight, Layers, Activity, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

export const SystemsWeBuild: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 animate-in fade-in duration-700 bg-white">
      {/* Overview with Side Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter text-veye-navy leading-tight">
            Systems We <span className="text-veye-blue">Build</span>
          </h1>
          <p className="text-2xl font-bold italic text-veye-navy/80 mb-10">
            Orchestration over Execution
          </p>
          <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
            <p>
              Growth is not a series of isolated events; it is the result of intelligent, coordinated systems. We architect the subsystems that power your organization, ensuring they function as a single, cohesive force orchestrated by the Velocity Sync Engine™.
            </p>
            <p>
              The focus shifts from tactical execution to strategic architecture. We build systems that operate without exposing mechanics, providing absolute clarity and sustained momentum.
            </p>
          </div>
        </div>

        {/* Page Visual Element */}
        <div className="relative pt-12">
          <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 flex items-center justify-center p-10 overflow-hidden shadow-inner">
            <div className="w-full h-full bg-veye-navy rounded-[3rem] shadow-2xl relative flex items-center justify-center group">
               <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="w-24 h-24 bg-veye-blue/20 rounded-2xl border border-white/10 flex items-center justify-center">
                    <Server className="text-veye-blue" size={40} />
                  </div>
                  <div className="w-24 h-24 bg-veye-amber/20 rounded-2xl border border-white/10 flex items-center justify-center mt-12">
                    <Target className="text-veye-amber" size={40} />
                  </div>
                  <div className="w-24 h-24 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center -mt-12">
                    <Activity className="text-white" size={40} />
                  </div>
                  <div className="w-24 h-24 bg-veye-blue/10 rounded-2xl border border-white/10 flex items-center justify-center">
                    <Cpu className="text-veye-blue" size={40} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <Link to={Page.GrowthSurfaces} className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:shadow-xl transition-all group">
          <div className="w-14 h-14 bg-veye-blue/10 text-veye-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-veye-blue group-hover:text-white transition-colors">
            <Target size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-veye-navy">Growth Surfaces</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">Orchestrated activation across search, media, social, and lifecycle integrations.</p>
          <div className="flex items-center gap-2 text-veye-blue font-bold">
            Explore System <ArrowRight size={20} />
          </div>
        </Link>
        <Link to={Page.MediaIntelligence} className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:shadow-xl transition-all group">
          <div className="w-14 h-14 bg-veye-blue/10 text-veye-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-veye-blue group-hover:text-white transition-colors">
            <Activity size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-veye-navy">Media Intelligence</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">Framing content as a coordinated system output integrated with growth intelligence.</p>
          <div className="flex items-center gap-2 text-veye-blue font-bold">
            Explore System <ArrowRight size={20} />
          </div>
        </Link>
        <Link to={Page.DigitalPresence} className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:shadow-xl transition-all group">
          <div className="w-14 h-14 bg-veye-blue/10 text-veye-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-veye-blue group-hover:text-white transition-colors">
            <Layers size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-veye-navy">Digital Presence</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">Building performance interfaces and intelligent infrastructure for stability and scale.</p>
          <div className="flex items-center gap-2 text-veye-blue font-bold">
            Explore System <ArrowRight size={20} />
          </div>
        </Link>
        <Link to={Page.IntelligentGrowthSystems} className="p-10 bg-veye-navy border border-veye-navy rounded-[3rem] hover:shadow-xl transition-all group text-white">
          <div className="w-14 h-14 bg-veye-blue/20 text-veye-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-veye-blue group-hover:text-white transition-colors">
            <Cpu size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-4 italic">Intelligent Growth Systems</h3>
          <p className="text-indigo-100 mb-8 leading-relaxed">Acquiring internalized capabilities for permanent organizational intelligence.</p>
          <div className="flex items-center gap-2 text-veye-blue font-bold">
            Explore System <ArrowRight size={20} />
          </div>
        </Link>
      </div>

      <div className="p-12 lg:p-20 bg-slate-50 border border-slate-100 rounded-[4rem] text-center italic font-medium text-slate-500 text-xl leading-relaxed">
        "Our subsystems work in total synchronization, removing the Operational Drag inherent in fragmented traditional models."
      </div>
    </div>
  );
};
