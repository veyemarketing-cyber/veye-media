
import React, { useState } from 'react';
import { BarChart3, Target, Compass, Users, Search, Activity, Loader2, Calendar, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { findVirginiaEvents } from '../services/geminiService';
import { REGIONS } from '../constants';
import { EventFinding } from '../types';

export const StrategyConsulting: React.FC = () => {
  const [events, setEvents] = useState<EventFinding[]>([]);
  const [sources, setSources] = useState<{ uri: string; title: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleScan = async () => {
    setIsLoading(true);
    const { events: results, sources: groundingSources } = await findVirginiaEvents(REGIONS);
    setEvents(results);
    setSources(groundingSources);
    setIsLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in slide-in-from-top-4 duration-500">
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl font-extrabold mb-8 text-veye-navy">Strategy & <span className="text-veye-blue">Consulting</span></h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          High-level architectural oversight for long-term relevance. We don't just plan campaigns; we architect growth trajectories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {[
          { title: "Digital Marketing Strategy", icon: <Target size={24} /> },
          { title: "Brand Strategy & Positioning", icon: <Compass size={24} /> },
          { title: "Audience Segmentation", icon: <Users size={24} /> },
          { title: "Marketing Audits", icon: <ShieldCheck size={24} /> }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 bg-veye-blue/10 text-veye-blue rounded-full flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="font-bold text-veye-navy">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Event Intelligence Agent Showcase */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
        <div className="absolute right-0 top-0 w-32 h-32 bg-veye-blue/5 blur-3xl rounded-full"></div>
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-veye-blue text-sm font-bold uppercase mb-4 tracking-widest">
            <Activity size={16} /> Live Agent Demo
          </div>
          <h2 className="text-4xl font-bold mb-6 text-veye-navy">Event Intelligence Agent</h2>
          <p className="text-slate-600 leading-relaxed">
            Our autonomous <strong>Search Intelligence Agents</strong> can identify high-value growth opportunities in real-time. Below is a live scan of the 12 Virginia regions we focus on for networking and procurement opportunities.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {REGIONS.slice(0, 6).map(r => (
            <span key={r} className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500">{r}</span>
          ))}
          <span className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500">+6 more...</span>
        </div>

        <button 
          onClick={handleScan}
          disabled={isLoading}
          className="px-8 py-4 bg-veye-navy hover:bg-slate-800 disabled:bg-slate-300 text-white rounded-lg font-bold flex items-center gap-3 transition-all mb-12 shadow-lg shadow-veye-navy/20"
        >
          {isLoading ? <Loader2 className="animate-spin" /> : <Search size={20} />}
          {isLoading ? "Scanning 2026 Virginia Events..." : "Run Autonomous Event Scan"}
        </button>

        {events.length > 0 && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {events.map((e, i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-xl relative shadow-sm">
                  <div className={`absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    e.priority_level === 'High' ? 'bg-red-50 text-white' : 
                    e.priority_level === 'Medium' ? 'bg-veye-amber text-white' : 
                    'bg-veye-blue text-white'
                  }`}>
                    {e.priority_level} Priority
                  </div>
                  <h4 className="font-bold text-lg mb-4 pr-16 line-clamp-2 text-veye-navy">{e.event_name}</h4>
                  <div className="space-y-2 mb-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-veye-blue" /> {e.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-veye-blue" /> {e.location_city}
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded mb-6 border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Strategic Fit</span>
                    <p className="text-xs text-slate-600 leading-relaxed italic">{e.strategic_reason}</p>
                  </div>
                  <a href={e.source_url} target="_blank" rel="noopener noreferrer" className="text-veye-blue text-xs font-bold flex items-center gap-1 hover:underline">
                    View Source <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>

            {sources.length > 0 && (
              <div className="pt-8 border-t border-slate-200 text-left">
                <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Verification Sources (Google Search Grounding)</h5>
                <div className="flex flex-wrap gap-4">
                  {sources.map((s, i) => (
                    <a key={i} href={s.uri} target="_blank" rel="noopener noreferrer" className="text-xs text-veye-blue hover:text-veye-navy flex items-center gap-1 bg-white px-3 py-2 rounded-lg border border-slate-100 shadow-sm transition-colors">
                      {s.title || 'Source Reference'} <ExternalLink size={10} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
        <div>
           <h3 className="text-2xl font-bold mb-6 text-veye-navy">Comprehensive Consultation</h3>
           <p className="text-slate-600 leading-relaxed mb-6">
             Our strategy isn't a static document; it's a living system. We provide continuous training, campaign optimization, and competitor analysis that feeds directly into the Velocity Sync Engine.
           </p>
           <ul className="space-y-4">
             {["Digital Marketing Strategy", "Brand Strategy & Positioning", "Content Strategy & Planning", "Customer Journey Analysis", "Audience Segmentation & Profiling", "Competitor Analysis", "Marketing Audits", "Campaign Performance Optimization", "Training & Consulting"].map((s, i) => (
                <li key={i} className="text-slate-600 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-veye-amber rounded-full"></div>
                  {s}
                </li>
             ))}
           </ul>
        </div>
        <div className="p-10 bg-veye-navy rounded-3xl text-white shadow-xl shadow-veye-navy/20">
           <h3 className="text-2xl font-bold mb-4 italic underline uppercase tracking-tighter">THE VEYE AUDIT</h3>
           <p className="text-indigo-100 mb-8 leading-relaxed">
             Organizations don't need another agency; they need a systems audit. We analyze your existing data, media, and creative flows to identify where automation can replace manual churn.
           </p>
           <div className="p-6 bg-white/5 rounded-xl border border-white/10">
             <span className="block text-sm font-bold uppercase tracking-widest mb-2 text-veye-blue">Systems over Services</span>
             <p className="text-xs text-indigo-100">Our audits are designed to architect your 2026 infrastructure, not your next 30 days of ads.</p>
           </div>
        </div>
      </div>
    </div>
  );
};
