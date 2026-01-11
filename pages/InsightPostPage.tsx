
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INSIGHTS } from '../constants';
import { Icon } from '../components/Icon';

export const InsightPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = INSIGHTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.metaTitle} | Veye Media Insights`;
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-secondary mb-6">Post Not Found</h1>
          <Link to="/insights" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary-hover transition-all">
            <Icon name="ArrowRight" size={20} className="rotate-180" /> Return to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 lg:pt-48 pb-24 animate-fade-in">
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb / Back link */}
        <Link 
          to="/insights" 
          className="inline-flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest mb-12 hover:text-primary-500 transition-colors"
        >
          <Icon name="ArrowRight" size={14} className="rotate-180" /> Back to Insights
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-3 text-primary-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Icon name="FileText" size={14} />
            {post.dateLabel || 'Strategic Essay'}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-secondary tracking-tighter leading-[0.95] mb-12">
            {post.title}
          </h1>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
            <img 
              src={post.heroImageUrl} 
              alt={post.title} 
              className="w-full h-auto object-cover aspect-[21/9]"
            />
          </div>
        </header>

        {/* Post Content */}
        <div className="space-y-16">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tight">
                {section.heading}
              </h2>
              <div className="space-y-6">
                {section.body.map((para, pIdx) => {
                  if (para.startsWith('- ')) {
                    return (
                      <div key={pIdx} className="flex gap-4 pl-4 items-start">
                        <span className="text-primary-500 font-black text-2xl leading-none mt-1">•</span>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                          {para.replace('- ', '')}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <p key={pIdx} className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                      {para}
                    </p>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-24 pt-24 border-t border-slate-100">
          <div className="bg-slate-50 rounded-[3rem] border border-slate-100 p-12 lg:p-20 shadow-xl text-center">
            <h3 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              {post.cta.heading}
            </h3>
            <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto mb-12">
              {post.cta.body}
            </p>
            <Link 
              to={post.cta.buttonHref}
              className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white font-black text-xl rounded-2xl hover:bg-secondary-hover transition-all shadow-2xl shadow-secondary/20 group"
            >
              {post.cta.buttonText}
              <Icon name="ArrowRight" size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
};
