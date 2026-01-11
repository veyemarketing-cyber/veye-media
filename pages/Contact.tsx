
import React from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';
import { EditableText } from '../components/EditableText';

interface ContactProps {
  onNavigate: (view: View) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
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
            <EditableText section="contact" field="heroSubtitle" />
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            <EditableText section="contact" field="heroTitle" />
          </h1>
          <p className="max-w-2xl text-xl text-white/80 font-medium leading-relaxed">
            <EditableText section="contact" field="heroDescription" multiline />
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-accent font-bold tracking-widest uppercase text-xs mb-3">Reach Out</h2>
              <h3 className="text-3xl font-bold text-secondary mb-8">Headquarters & Intelligence</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-secondary shadow-sm border border-slate-100 group-hover:bg-secondary group-hover:text-white transition-all">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Systems</p>
                    <div className="text-xl font-bold text-secondary">
                        <EditableText section="global" field="email" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-secondary shadow-sm border border-slate-100 group-hover:bg-secondary group-hover:text-white transition-all">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Direct Line</p>
                    <div className="text-xl font-bold text-secondary">
                        <EditableText section="global" field="phone" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-secondary shadow-sm border border-slate-100 group-hover:bg-secondary group-hover:text-white transition-all">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Vision Hub</p>
                    <p className="text-lg font-bold text-secondary leading-tight">
                        <EditableText section="global" field="addressLine1" />
                        <br/>
                        <EditableText section="global" field="addressLine2" />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
               <h3 className="text-2xl font-bold mb-4 relative z-10"><EditableText section="contact" field="sidebarHeadline" /></h3>
               <p className="mb-8 text-slate-300 leading-relaxed relative z-10">
                 <EditableText section="contact" field="sidebarDesc" multiline />
               </p>
               <button
                  onClick={() => onNavigate(View.AUDIT)}
                  className="w-full bg-primary-500 text-white font-bold py-4 rounded-xl hover:bg-primary-400 transition-all shadow-xl shadow-black/20"
                >
                  Start Autonomous Audit
                </button>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
            <h2 className="text-2xl font-bold text-secondary mb-8">
               <EditableText section="contact" field="formHeadline" />
            </h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="john@company.com" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Intelligence Message</label>
                <textarea rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none" placeholder="What system needs optimization?"></textarea>
              </div>

              <button className="w-full bg-secondary text-white font-bold py-5 rounded-2xl hover:bg-secondary-hover transition-all flex items-center justify-center gap-3 shadow-xl shadow-secondary/20 group">
                Initialize Connect <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
