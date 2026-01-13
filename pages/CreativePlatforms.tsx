
import React from 'react';
import { Layout, Palette, ShoppingCart, Globe, Shield, Search, Zap } from 'lucide-react';

const Card = ({ title, icon, list }: { title: string, icon: React.ReactNode, list: string[] }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
    <div className="w-12 h-12 bg-veye-blue/10 text-veye-blue rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-6 text-veye-navy">{title}</h3>
    <ul className="space-y-4 text-left">
      {list.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
          <div className="w-1 h-1 bg-veye-amber rounded-full"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const CreativePlatforms: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in fade-in duration-500">
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl font-extrabold mb-8 text-veye-navy">Creative & <span className="text-veye-blue">Platforms</span></h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Building the digital architecture where intelligence lives. Our design and development systems are built for SEO, accessibility, and high conversion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <Card 
          title="Digital Presence & Web" 
          icon={<Globe size={24} />}
          list={[
            "Website Design & Optimization (SEO-driven)",
            "E-Commerce Websites",
            "Website Hosting",
            "Website Management",
            "ADA Compliance Services"
          ]}
        />
        <Card 
          title="Creative & Branding" 
          icon={<Palette size={24} />}
          list={[
            "Graphic Design",
            "Brand Identity Systems",
            "Visual Guidelines",
            "Asset Libraries"
          ]}
        />
        <div className="bg-veye-navy rounded-2xl p-8 flex flex-col justify-between text-white shadow-xl shadow-veye-navy/20">
          <div>
            <Shield size={40} className="mb-4 text-veye-blue" />
            <h3 className="text-xl font-bold mb-2">Platform Integrity</h3>
            <p className="text-indigo-100 text-sm">We ensure your platform isn't just a brochure, but a functional node in your agentic AI system.</p>
          </div>
          <div className="mt-8">
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-xs uppercase font-bold tracking-widest text-veye-blue">ADA Compliant Standard</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
        <div className="relative aspect-video bg-slate-50 border border-slate-100 rounded-3xl p-4 overflow-hidden group shadow-inner">
           <img src="https://picsum.photos/800/450" alt="Platform Demo" className="w-full h-full object-cover rounded-xl opacity-80" />
           <div className="absolute inset-0 bg-veye-navy/20 flex items-center justify-center">
              <div className="p-4 bg-veye-blue rounded-full shadow-2xl animate-pulse">
                 <Layout className="text-white" size={32} />
              </div>
           </div>
        </div>
        <div>
           <h2 className="text-3xl font-bold mb-6 text-veye-navy">SEO-Driven Design</h2>
           <p className="text-slate-600 leading-relaxed mb-8">
             Every website we build is a target for our Search Intelligence Agents. We don't just design for humans; we design for indexing systems, ensuring your message is visible at the moment of intent.
           </p>
           <div className="space-y-4">
             <div className="flex items-center gap-3">
               <Search size={18} className="text-veye-blue" />
               <span className="text-slate-700 font-medium">Built-in Technical SEO Architecture</span>
             </div>
             <div className="flex items-center gap-3">
               <Zap size={18} className="text-veye-amber" />
               <span className="text-slate-700 font-medium">Performance-First Frontends</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};
