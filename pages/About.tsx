
import React from 'react';
import { History, Target, TrendingUp, Users2, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in fade-in duration-500">
      <div className="max-w-3xl mb-24">
        <h1 className="text-5xl font-extrabold mb-8 text-veye-navy">About <span className="text-veye-blue">Veye Media</span></h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          From marketing agency to media intelligence firm. The evolution of Veye reflects the fundamental shift in how digital growth is achieved.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32 text-left">
        <div>
          <h2 className="text-3xl font-bold mb-8 text-veye-navy">The Repositioning Story</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              Veye Marketing became Veye Media because the word "marketing" failed to describe the scale and complexity of the modern digital landscape.
            </p>
            <p>
              Today, "media intelligence" better reflects the work we do—building systems that don't just broadcast messages, but intelligently process, distribute, and optimize them autonomously.
            </p>
            <p>
              While our tools changed—integrating agentic AI, advanced analytics, and the Velocity Sync Engine—our core values remained unchanged. We are still the same team, committed to the same growth-focused outcomes for our partners.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
             <History className="text-veye-blue mb-4" />
             <h4 className="font-bold text-veye-navy mb-2">The Change</h4>
             <p className="text-xs text-slate-400 uppercase tracking-widest">Systems, AI, Analytics, Scale</p>
          </div>
          <div className="p-8 bg-white border border-slate-100 rounded-2xl mt-8 shadow-sm">
             <ShieldCheck className="text-veye-amber mb-4" />
             <h4 className="font-bold text-veye-navy mb-2">The Constant</h4>
             <p className="text-xs text-slate-400 uppercase tracking-widest">Team, Values, Commitment</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-12 lg:p-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-veye-navy">The Long-Term Vision</h2>
          <p className="text-xl text-slate-700 leading-relaxed italic">
            "To build the world's most intelligent media infrastructure, empowering organizations to speak to their audiences with unprecedented precision, speed, and strategic relevance."
          </p>
        </div>
      </div>
    </div>
  );
};
