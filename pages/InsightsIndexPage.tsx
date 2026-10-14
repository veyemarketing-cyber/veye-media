
import React from 'react';
import { Link } from 'react-router-dom';
import { INSIGHTS } from '../constants';
import { Icon } from '../components/Icon';

export const InsightsIndexPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 lg:pt-48 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <h1 className="text-5xl lg:text-7xl font-black text-secondary tracking-tighter leading-[0.95] mb-8">
            Executive <span className="text-primary-500">Insights</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Insights are executive essays explaining how systems create durable growth—without exposing proprietary process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main List */}
          <div className="lg:col-span-8 space-y-16">
            {INSIGHTS.map((post) => (
              <article key={post.slug} className="group">
                <Link to={`/insights/${post.slug}`} className="block">
                  <div className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl mb-8">
                    <img 
                      src={post.heroImageUrl} 
                      alt={post.title} 
                      className="w-full h-auto object-cover aspect-[16/9] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary-500 text-xs font-bold uppercase tracking-[0.2em]">
                      <Icon name="FileText" size={14} />
                      {post.dateLabel || 'Strategic Essay'}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed font-medium line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-secondary font-black text-sm uppercase tracking-widest pt-2 border-b-2 border-transparent group-hover:border-primary-500 transition-all">
                      Read more <Icon name="ArrowRight" size={16} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 lg:p-10">
              <h3 className="text-xs font-black text-primary-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary-500"></span>
                Insights Menu
              </h3>
              <nav className="space-y-6">
                {INSIGHTS.map((post) => (
                  <Link 
                    key={post.slug} 
                    to={`/insights/${post.slug}`}
                    className="block group"
                  >
                    <h4 className="text-sm font-bold text-secondary group-hover:text-primary-600 transition-colors leading-snug">
                      {post.title}
                    </h4>
                  </Link>
                ))}
              </nav>

              <div className="mt-12 pt-10 border-t border-slate-200">
                <p className="text-xs text-slate-400 font-medium mb-6 leading-relaxed italic">
                  Systems thinking applied to the challenges of coordinated organizational growth.
                </p>
                <Link 
                  to="/start-a-conversation"
                  className="inline-flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-widest hover:text-primary-500 transition-colors"
                >
                  Contact Architect <Icon name="ArrowRight" size={14} />
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
