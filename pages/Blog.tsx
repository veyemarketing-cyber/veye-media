
import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';
import { EditableText } from '../components/EditableText';
import { useContent } from '../context/ContentContext';

interface BlogProps {
  onNavigate: (view: View) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const { content } = useContent();
  const postIds = Object.keys(content.blog.posts);

  const mockImages: Record<string, string> = {
    'post-1': "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    'post-2': "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=800",
    'post-3': "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  };

  return (
    <div className="animate-fade-in bg-white">
      {/* Brand Hero Banner */}
      <section 
        className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden"
        style={{
            background: "linear-gradient(135deg, #002d62 0%, #c47500 100%)"
        }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <h2 className="text-primary-300 font-bold tracking-[0.2em] uppercase text-xs mb-4">
             <EditableText section="blog" field="heroSubtitle" />
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
             <EditableText section="blog" field="heroTitle" />
          </h1>
          <p className="max-w-2xl text-xl text-white/80 font-medium leading-relaxed">
             <EditableText section="blog" field="heroDescription" multiline />
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {postIds.map(id => (
            <article key={id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all group cursor-pointer flex flex-col h-full border-b-4 hover:border-b-primary-500">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={mockImages[id] || "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"} 
                  alt="Post banner" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white text-secondary px-3 py-1.5 rounded-lg shadow-sm">
                       <EditableText section="blog" field="posts" subKey={id} nestedKey="category" />
                    </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  <span><EditableText section="blog" field="posts" subKey={id} nestedKey="date" /></span>
                  <span><EditableText section="blog" field="posts" subKey={id} nestedKey="readTime" /></span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary-500 transition-colors leading-snug">
                   <EditableText section="blog" field="posts" subKey={id} nestedKey="title" multiline />
                </h3>
                <p className="text-slate-500 text-sm mb-8 line-clamp-3 flex-grow leading-relaxed">
                   <EditableText section="blog" field="posts" subKey={id} nestedKey="excerpt" multiline />
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <button className="text-secondary font-bold text-xs uppercase tracking-[0.15em] flex items-center gap-2 group/btn">
                    Read Intelligence <Icon name="ArrowRight" size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
