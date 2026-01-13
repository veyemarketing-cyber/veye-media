
import React, { useState } from 'react';
import { Search, Activity, Loader2, Calendar, MapPin, ExternalLink, ArrowRight, TrendingUp, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { findVirginiaEvents } from '../services/geminiService';
import { REGIONS } from '../constants';
import { BLOG_POSTS } from '../data/blogPosts';
import { EventFinding } from '../types';

export const Insights: React.FC = () => {
  const [events, setEvents] = useState<EventFinding[]>([]);
  const [sources, setSources] = useState<{ uri: string; title: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Strategy' | 'Systems' | 'Media'>('All');

  const handleScan = async () => {
    setIsLoading(true);
    const { events: results, sources: groundingSources } = await findVirginiaEvents(REGIONS);
    setEvents(results);
    setSources(groundingSources);
    setIsLoading(false);
  };

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 animate-in fade-in duration-700 bg-white">
      {/* Header with Side Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter text-veye-navy leading-tight italic">
            Strategic <span className="text-veye-blue">Insights</span>
          </h1>
          <p className="text-2xl font-bold italic text-veye-navy/80 mb-10">
            Systems Thinking for Growth
          </p>
          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
            Strategic observations and market trends from the executive perspective. We share how systems thinking drives durable growth in the modern economy, replacing speculation with high-fidelity intelligence.
          </p>
        </div>

        {/* Page Visual Element */}
        <div className="relative">
          <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 flex items-center justify-center p-10 overflow-hidden shadow-inner">
            <div className="w-full h-full bg-veye-navy rounded-[3rem] shadow-2xl relative flex items-center justify-center group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-veye-amber/20 to-transparent"></div>
               <div className="relative z-10 flex flex-col items-center">
                 <TrendingUp className="text-white mb-6" size={100} />
                 <div className="flex gap-1 h-8 items-end">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-2 bg-veye-blue/50 rounded-full" style={{ height: `${20 + i * 15}%` }}></div>)}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog System Section */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-veye-navy mb-2 tracking-tight">The Dispatch</h2>
            <p className="text-slate-500 font-medium">Internalizing the architecture of the next era.</p>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
            {(['All', 'Strategy', 'Systems', 'Media'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-white text-veye-blue shadow-sm ring-1 ring-slate-200' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link 
              key={post.slug} 
              to={`/insights/${post.slug}`} 
              className="flex flex-col bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-extrabold uppercase tracking-widest text-veye-navy shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 text-left flex flex-col flex-grow">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
                <h3 className="text-xl font-bold text-veye-navy mb-4 line-clamp-2 group-hover:text-veye-blue transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium mb-8 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-veye-blue text-xs font-bold">
                  Read Analysis <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Event Intelligence Agent Showcase */}
      <section className="bg-veye-navy text-white rounded-[4rem] p-10 lg:p-24 overflow-hidden relative shadow-2xl text-left">
        <div className="absolute right-0 top-0 w-96 h-96 bg-veye-blue/10 blur-[120px] rounded-full"></div>
        <div className="max-w-3xl mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 text-veye-blue text-xs font-extrabold uppercase mb-6 tracking-[0.2em]">
            <Activity size={18} /> Live Growth Signal Feed
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 italic">Virginia Growth Signals</h2>
          <p className="text-indigo-100 text-lg leading-relaxed font-medium mb-12">
            Experience our <strong>Search Intelligence</strong> systems in action. This autonomous tool scans 12 Virginia regions for high-value growth signals and networking opportunities in real-time.
          </p>
          <button 
            onClick={handleScan}
            disabled={isLoading}
            className="px-12 py-6 bg-veye-blue hover:bg-veye-blue/90 disabled:bg-slate-700 text-white rounded-full font-bold flex items-center gap-3 transition-all shadow-xl shadow-veye-blue/30 text-xl"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <Search size={24} />}
            {isLoading ? "Synchronizing Signals..." : "Run Growth Discovery Agent"}
          </button>
        </div>

        {events.length > 0 && (
          <div className="mt-16 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 relative z-10 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((e, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md shadow-lg">
                  <div className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase inline-block mb-4 ${
                    e.priority_level === 'High' ? 'bg-red-500/80 text-white' : 
                    e.priority_level === 'Medium' ? 'bg-veye-amber/80 text-white' : 
                    'bg-veye-blue/80 text-white'
                  }`}>
                    {e.priority_level} Priority
                  </div>
                  <h4 className="font-bold text-xl mb-6 text-white">{e.event_name}</h4>
                  <div className="space-y-3 mb-8 text-sm font-bold text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-veye-blue" /> {e.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-veye-blue" /> {e.location_city}
                    </div>
                  </div>
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/5 mb-6">
                    <span className="text-[10px] uppercase font-extrabold text-veye-blue block mb-2">Strategic Resonance</span>
                    <p className="text-xs text-indigo-100 leading-relaxed font-medium">{e.strategic_reason}</p>
                  </div>
                  <a href={e.source_url} target="_blank" rel="noopener noreferrer" className="text-veye-blue text-sm font-bold flex items-center gap-1 hover:underline">
                    Verified Source <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
            
            {sources.length > 0 && (
              <div className="pt-8 border-t border-white/10">
                <h5 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Verification Sources (Google Search Grounding)</h5>
                <div className="flex flex-wrap gap-4">
                  {sources.map((s, i) => (
                    <a key={i} href={s.uri} target="_blank" rel="noopener noreferrer" className="text-xs text-veye-blue hover:text-white flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-xl border border-white/5 shadow-sm transition-colors">
                      {s.title || 'Source Reference'} <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};
