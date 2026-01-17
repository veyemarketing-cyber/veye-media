import React, { useState } from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';

export const Insights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Strategy' | 'Systems' | 'Media'>('All');

  const filteredPosts =
    activeCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 animate-in fade-in duration-700 bg-white">
      {/* Header with Side Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter text-veye-navy leading-tight italic">
            Strategic <span className="text-veye-blue">Insights</span>
          </h1>
          <p className="text-2xl font-bold italic text-veye-navy/80 mb-10">Systems Thinking for Growth</p>
          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
            Strategic observations and market trends from the executive perspective. We share how systems thinking drives
            durable growth in the modern economy, replacing speculation with high-fidelity intelligence.
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
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-2 bg-veye-blue/50 rounded-full"
                      style={{ height: `${20 + i * 15}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog System Section */}
      <section className="mb-10">
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

        {filteredPosts.length === 0 ? (
          <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 text-left">
            <h3 className="text-xl font-bold text-veye-navy mb-2">Veye Media Insights</h3>
            <p className="text-slate-600 font-medium">
              We’re publishing systems-first thinking on marketing intelligence, growth operations, and agentic workflows.
            </p>
            <p className="text-slate-400 text-sm font-bold mt-4 uppercase tracking-widest">Coming soon</p>
          </div>
        ) : (
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
                  <p className="text-slate-500 text-sm font-medium mb-8 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-auto flex items-center gap-2 text-veye-blue text-xs font-bold">
                    Read Analysis <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
