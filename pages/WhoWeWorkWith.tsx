import React from 'react';
import { Users, Target, ShieldCheck, XCircle, ArrowRight, UserCheck, BarChart, Zap, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

export const WhoWeWorkWith: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 animate-in fade-in duration-700 bg-white">
      {/* Header with Side Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-veye-blue/5 border border-veye-blue/10 text-veye-blue text-xs font-bold mb-10 uppercase tracking-[0.2em]">
            Strategic Alignment
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter text-veye-navy leading-tight italic">
            Defining <br /> <span className="text-veye-blue">Strategic Fit</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Veye Media does not engage in transactional vendor-client relationships. We partner with organizations that prioritize systemic maturity, operational durability, and long-term intelligence over temporary tactical churn.
          </p>
        </div>

        {/* Page Visual Element */}
        <div className="relative">
          <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 flex items-center justify-center p-10 overflow-hidden shadow-inner">
            <div className="w-full h-full bg-veye-navy rounded-[3rem] shadow-2xl relative flex items-center justify-center group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-veye-blue/20 to-transparent"></div>
               <div className="relative z-10 flex flex-col items-center">
                 <UserCheck className="text-white mb-6" size={100} />
                 <div className="flex gap-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-veye-blue"></div>)}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ideal Partner Mindset Section */}
      <section className="mb-32">
        <h2 className="text-3xl lg:text-4xl font-bold text-veye-navy mb-16 italic tracking-tight">The Systems-Oriented Mindset</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
            <Scale className="text-veye-blue mb-6" size={32} />
            <h3 className="text-xl font-bold text-veye-navy mb-4">Strategic Maturity</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              We work with leaders who have moved beyond the "next campaign" mindset. They seek to build permanent assets that grow in value and intelligence over years, not weeks.
            </p>
          </div>
          <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
            <BarChart className="text-veye-blue mb-6" size={32} />
            <h3 className="text-xl font-bold text-veye-navy mb-4">Intent-Based Growth</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Ideal partners possess a clear organizational mandate. Whether a B2B firm or a ministry, they are driven by specific, mission-critical outcomes that require a unified system.
            </p>
          </div>
          <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
            <Zap className="text-veye-blue mb-6" size={32} />
            <h3 className="text-xl font-bold text-veye-navy mb-4">Internalization Drive</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              We partner with those who wish to internalize capability. Our systems are designed to empower your organization to own its data, its intelligence, and its future.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Profile vs Non-Fit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-start">
        <div className="p-12 bg-slate-50 border border-slate-100 rounded-[3rem]">
          <div className="flex items-center gap-4 mb-8 text-veye-navy">
             <Target size={32} className="text-veye-blue" />
             <h2 className="text-3xl font-bold italic underline decoration-veye-blue underline-offset-4 tracking-tight">Ideal Partnership Profile</h2>
          </div>
          <ul className="space-y-6">
            {[
              "B2B Enterprises requiring a unified, autonomous growth system.",
              "Organizations and Ministries seeking to scale message impact with precision.",
              "Executives who view marketing as infrastructure rather than expense.",
              "Systems-first leaders who value orchestration over manual churn.",
              "Entities with established mandates seeking permanent market leadership."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-700 font-bold">
                <ShieldCheck className="text-veye-blue mt-1 shrink-0" size={24} />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-12 bg-white border border-slate-100 rounded-[3rem] shadow-xl">
          <div className="flex items-center gap-4 mb-8 text-veye-navy">
             <XCircle size={32} className="text-veye-amber" />
             <h2 className="text-3xl font-bold italic tracking-tight">Non-Fit Indicators</h2>
          </div>
          <p className="text-slate-500 mb-8 font-medium text-sm">
            To ensure the integrity of our systems and the success of our partners, we explicitly filter for organizations that are not yet ready for a systems-first approach.
          </p>
          <ul className="space-y-6 text-slate-400 font-medium">
            {[
              "Transactional mindsets seeking short-term campaign deliverables.",
              "Preference for disconnected tactical execution over system synchronization.",
              "Organizations searching for 'tools' or 'marketing vendors' rather than architects.",
              "Fragmented leadership where digital efforts are siloed from core strategy.",
              "Inability to commit to the duration required for systemic durability."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-slate-200 rounded-full mt-2.5 shrink-0"></div>
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Strategic Call to Action */}
      <div className="p-16 lg:p-32 bg-veye-navy text-white rounded-[4rem] text-center relative overflow-hidden mb-32 shadow-2xl">
        <div className="absolute inset-0 bg-veye-blue/5 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-veye-blue/20 blur-[120px] rounded-full"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-10 italic tracking-tight">Ready for a Systems-First Partnership?</h2>
          <p className="text-xl text-indigo-100 leading-relaxed font-medium mb-12">
            If your organization is ready to move beyond fragmented services and into integrated systems, we invite you to begin a strategic dialogue.
          </p>
          <Link to={Page.StartConversation} className="inline-flex items-center gap-3 px-12 py-6 bg-veye-blue hover:bg-veye-blue/90 text-white rounded-full font-bold transition-all text-xl shadow-2xl shadow-veye-blue/20">
            Start a Conversation <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};
