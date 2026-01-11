
import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';
import { EditableText } from '../components/EditableText';

interface HomeProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-white">
      {/* Main Hero Section (The Architect Narrative) */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/30 rounded-full blur-[120px] -mr-24 -mt-24 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px] -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 mb-10 border border-slate-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Growth Orchestration Layer Active</span>
          </div>
          
          <h1 className="text-4xl md:text-8xl font-black text-secondary tracking-tighter mb-8 leading-[0.95] max-w-5xl mx-auto">
            <EditableText section="home" field="heroTitle" className="block" />
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <EditableText 
              section="home" 
              field="heroSubtitle" 
              multiline 
              as="p"
              className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-bold"
            />
            <EditableText 
              section="home" 
              field="heroSupportingLine" 
              multiline 
              as="p"
              className="text-lg text-primary-600 font-bold uppercase tracking-widest mb-12"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => onNavigate(View.AUDIT)}
              className="px-10 py-5 rounded-2xl bg-secondary text-white font-extrabold text-xl hover:bg-secondary-hover transition-all shadow-2xl shadow-secondary/20 flex items-center justify-center gap-2 group"
            >
              <EditableText section="home" field="heroCtaPrimary" />
              <Icon name="ArrowRight" size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(View.GROWTH_SYSTEMS)}
              className="px-10 py-5 rounded-2xl bg-white text-secondary font-bold text-lg hover:bg-slate-50 transition-all border-2 border-secondary/10 shadow-sm"
            >
              <EditableText section="home" field="heroCtaSecondary" />
            </button>
          </div>
        </div>
      </section>

      {/* Beyond Execution Narrative Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h3 className="text-4xl md:text-6xl font-extrabold text-secondary mb-8 leading-tight">
                  <EditableText section="home" field="visionHeadline" />
                </h3>
                <div className="space-y-6">
                   <EditableText 
                    section="home" 
                    field="visionDescription" 
                    multiline 
                    as="p"
                    className="text-xl text-slate-600 leading-relaxed font-medium"
                   />
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-white rounded-[4rem] shadow-2xl flex items-center justify-center text-slate-100 overflow-hidden border border-slate-100">
                    <Icon name="BrainCircuit" size={240} className="text-slate-100/50 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 to-transparent"></div>
                 </div>
                 <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Strategic Innovation & Pillars Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-24 max-w-4xl mx-auto">
             <h3 className="text-4xl md:text-6xl font-extrabold text-secondary mb-8">
               <EditableText section="home" field="systemsHeadline" />
             </h3>
             <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
               <EditableText section="home" field="systemsSubheadline" multiline />
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
                  <Icon name="Cpu" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-secondary mb-6"><EditableText section="home" field="outcome1Title" /></h4>
                <p className="text-slate-500 leading-relaxed text-lg">
                  <EditableText section="home" field="outcome1Desc" multiline />
                </p>
              </div>

              <div className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
                  <Icon name="Workflow" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-secondary mb-6"><EditableText section="home" field="outcome2Title" /></h4>
                <p className="text-slate-500 leading-relaxed text-lg">
                  <EditableText section="home" field="outcome2Desc" multiline />
                </p>
              </div>

              <div className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
                  <Icon name="Zap" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-secondary mb-6"><EditableText section="home" field="outcome3Title" /></h4>
                <p className="text-slate-500 leading-relaxed text-lg">
                  <EditableText section="home" field="outcome3Desc" multiline />
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-32 bg-secondary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                 <div className="aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 flex items-center justify-center">
                    <Icon name="ShieldCheck" size={180} className="text-white/10" />
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                 <h3 className="text-4xl md:text-6xl font-extrabold mb-8">
                   <EditableText section="home" field="governanceHeadline" />
                 </h3>
                 <div className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-12">
                   <EditableText section="home" field="governanceDescription" multiline />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h3 className="text-3xl md:text-6xl font-extrabold text-secondary mb-12">
             <EditableText section="home" field="finalCtaHeadline" />
           </h3>
           <button
            onClick={() => onNavigate(View.AUDIT)}
            className="px-12 py-6 rounded-[2rem] bg-primary-500 text-white font-extrabold text-2xl hover:bg-primary-400 transition-all shadow-3xl shadow-primary-500/30 flex items-center gap-4 mx-auto group"
           >
             Initialize Strategic Dialogue
             <Icon name="ArrowRight" size={28} className="group-hover:translate-x-2 transition-transform" />
           </button>
        </div>
      </section>
    </div>
  );
};
