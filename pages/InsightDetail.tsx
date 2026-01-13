
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import { Page } from '../types';

export const InsightDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to={Page.Insights} replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-veye-navy via-veye-navy/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 lg:pb-24 text-left">
            <Link 
              to={Page.Insights} 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 text-sm font-bold uppercase tracking-widest transition-colors"
            >
              <ArrowLeft size={16} /> Back to Insights
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1.5 bg-veye-blue rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] text-white mb-6">
                {post.category}
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 tracking-tighter leading-tight italic">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-slate-300 font-bold text-sm uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-veye-blue" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <Share2 size={16} className="text-veye-blue" />
                  Strategic Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto">
          {post.content.map((section, idx) => (
            <section key={idx} className="mb-20 last:mb-0 text-left">
              <h2 className="text-3xl font-bold text-veye-navy mb-8 tracking-tight italic border-b border-slate-100 pb-4">
                {section.heading}
              </h2>
              <div className="space-y-6">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-xl text-slate-600 leading-relaxed font-medium">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {/* Engagement Section */}
          <div className="mt-32 p-12 lg:p-16 bg-slate-50 border border-slate-100 rounded-[3rem] text-left">
            <h3 className="text-2xl font-bold text-veye-navy mb-6 italic">Strategic Dialogue</h3>
            <p className="text-slate-600 font-medium text-lg leading-relaxed mb-10">
              Insights are only valuable when internalized into action. If these strategic observations resonate with your organization’s growth mandate, we invite you to begin a dialogue on systems-first architecture.
            </p>
            <Link 
              to={Page.StartConversation} 
              className="inline-flex items-center gap-3 px-10 py-5 bg-veye-navy hover:bg-slate-800 text-white rounded-full font-bold transition-all shadow-lg shadow-veye-navy/20"
            >
              Start a Strategic Conversation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </article>

      {/* Read More Section */}
      <div className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-slate-400 mb-12 text-center">Continue Reading</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 2).map((other) => (
              <Link 
                key={other.slug} 
                to={`/insights/${other.slug}`} 
                className="p-8 bg-white border border-slate-100 rounded-[2.5rem] group hover:shadow-lg transition-all text-left"
              >
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-veye-blue mb-4 block">
                  {other.category}
                </span>
                <h5 className="text-lg font-bold text-veye-navy mb-4 group-hover:text-veye-blue transition-colors leading-tight">
                  {other.title}
                </h5>
                <div className="flex items-center gap-2 text-veye-blue text-xs font-bold">
                  View Analysis <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
