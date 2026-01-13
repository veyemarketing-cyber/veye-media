
import React from 'react';
import { Cpu, Search, MessageSquare, Repeat, Target, BrainCircuit, Zap } from 'lucide-react';

const AgentCard = ({ title, icon, desc }: { title: string, icon: React.ReactNode, desc: string }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-2xl relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
    <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 120 })}
    </div>
    <div className="w-14 h-14 bg-veye-blue/10 text-veye-blue rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-veye-navy">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export const AgenticAI: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl font-extrabold mb-8 text-veye-navy">Agentic AI <span className="text-veye-blue">Systems</span></h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Traditional marketing services are simply outputs. At Veye Media, we build the autonomous intelligence layers that generate those outputs at scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <AgentCard 
          title="Search Intelligence Agents" 
          icon={<Search size={32} />} 
          desc="Autonomous agents that scan, index, and analyze market trends and SEO opportunities in real-time, providing actionable insights for competitive positioning."
        />
        <AgentCard 
          title="Content Intelligence Agents" 
          icon={<MessageSquare size={32} />} 
          desc="Systems designed to generate, repurpose, and distribute multi-modal content across platforms while maintaining brand integrity and strategic alignment."
        />
        <AgentCard 
          title="Lifecycle Communication Agents" 
          icon={<Repeat size={32} />} 
          desc="Intelligent workflows that manage customer touchpoints automatically, from first contact to conversion and long-term retention."
        />
        <AgentCard 
          title="Demand Optimization Agents" 
          icon={<Target size={32} />} 
          desc="Agents that monitor campaign performance and autonomously adjust spend and targeting to maximize ROI and lead quality."
        />
        <AgentCard 
          title="Analytics & Decision Agents" 
          icon={<BrainCircuit size={32} />} 
          desc="High-level processing systems that synthesize data from all sources to recommend strategic pivots and identify hidden growth levers."
        />
        <div className="p-8 bg-veye-blue rounded-2xl flex flex-col justify-center items-center text-center text-white shadow-xl shadow-veye-blue/20">
          <Zap size={48} className="text-white mb-6 animate-pulse" />
          <h3 className="text-2xl font-bold mb-4">Orchestrated by Velocity</h3>
          <p className="text-indigo-50 text-sm">Every agent is connected through our proprietary Velocity Sync Engine for total synchronization.</p>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-12 lg:p-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-veye-navy">The Output-Driven Approach</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            When you look at our "services," you are seeing the byproduct of these systems. We don't manually write copy; our content agents generate and optimize it. We don't manually track leads; our lifecycle agents nurture them.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-veye-blue/20 text-veye-blue flex items-center justify-center mt-1 shrink-0 font-bold text-xs">1</div>
              <p className="text-slate-700">Continuous operation (24/7 intelligence)</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-veye-blue/20 text-veye-blue flex items-center justify-center mt-1 shrink-0 font-bold text-xs">2</div>
              <p className="text-slate-700">Bias for data-driven precision over creative guessing</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-veye-blue/20 text-veye-blue flex items-center justify-center mt-1 shrink-0 font-bold text-xs">3</div>
              <p className="text-slate-700">Scalability without linear headcount increases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
