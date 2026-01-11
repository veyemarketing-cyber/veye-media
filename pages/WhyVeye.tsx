
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';
import { generateBrandImage } from '../services/geminiService';
import { EditableText } from '../components/EditableText';

interface WhyVeyeProps {
  onNavigate: (view: View) => void;
}

export const WhyVeye: React.FC<WhyVeyeProps> = ({ onNavigate }) => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [midImage, setMidImage] = useState<string | null>(null);
  const [loadingStates, setLoadingStates] = useState({ hero: true, mid: true });

  useEffect(() => {
    const fetchImages = async () => {
      // IMAGE_A: Hero Image
      generateBrandImage("Abstract architectural visualization of enduring enterprise value and complex digital structures. Deep blue and gold, premium enterprise style, high resolution, minimalist.")
        .then(img => {
          if (img) setHeroImage(img);
          setLoadingStates(prev => ({ ...prev, hero: false }));
        });

      // IMAGE_B: Mid-page Image
      generateBrandImage("Abstract visualization of an elastic, adaptive framework that glows and recalibrates. Represents strategic autonomy and resilience. Professional, sophisticated, deep tones.")
        .then(img => {
          if (img) setMidImage(img);
          setLoadingStates(prev => ({ ...prev, mid: false }));
        });
    };

    fetchImages();
  }, []);

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                <EditableText section="whyVeye" field="heroEyebrow" />
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-secondary tracking-tighter mb-6 leading-[0.95]">
                <EditableText section="whyVeye" field="heroHeadline" />
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-8 leading-snug">
                <EditableText section="whyVeye" field="heroSubheadline" multiline />
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-12 max-w-xl font-medium">
                <EditableText section="whyVeye" field="heroSupportingParagraph" multiline />
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => onNavigate(View.AUDIT)}
                  className="px-10 py-5 bg-secondary text-white font-extrabold rounded-2xl hover:bg-secondary-hover transition-all shadow-2xl shadow-secondary/20 flex items-center justify-center gap-2 group"
                >
                  <EditableText section="whyVeye" field="heroCtaPrimaryText" />
                  <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate(View.VELOCITY_SYNC)}
                  className="px-10 py-5 bg-white border-2 border-slate-200 text-secondary font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  <EditableText section="whyVeye" field="heroCtaSecondaryText" />
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              {loadingStates.hero ? (
                <div className="w-full aspect-video bg-slate-200 rounded-[3rem] animate-pulse flex items-center justify-center">
                  <Icon name="Loader2" className="animate-spin text-slate-400" size={32} />
                </div>
              ) : heroImage ? (
                <div className="rounded-[3rem] overflow-hidden shadow-3xl border border-slate-100">
                  <img src={heroImage} alt="Enduring enterprise value architecture" className="w-full h-auto object-cover" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION_1: systems-advantage */}
      <section id="systems-advantage" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
           <h3 className="text-3xl md:text-5xl font-black text-secondary mb-8">
              <EditableText section="whyVeye" field="section1Heading" />
           </h3>
           <p className="text-xl text-slate-500 leading-relaxed font-medium">
              <EditableText section="whyVeye" field="section1Paragraph" multiline />
           </p>
        </div>
      </section>

      {/* SECTION_2: services-vs-systems */}
      <section id="services-vs-systems" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
           <h3 className="text-3xl md:text-5xl font-black text-secondary mb-8">
              <EditableText section="whyVeye" field="section2Heading" />
           </h3>
           <p className="text-xl text-slate-500 leading-relaxed font-medium">
              <EditableText section="whyVeye" field="section2Paragraph" multiline />
           </p>
        </div>
      </section>

      {/* SECTION_3: outcomes */}
      <section id="outcomes" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-secondary mb-8">
              <EditableText section="whyVeye" field="section3Heading" />
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 group hover:shadow-2xl transition-all">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-sm">
                  <Icon name={num === 1 ? 'Repeat' : num === 2 ? 'ShieldCheck' : 'Zap'} size={24} />
                </div>
                <h4 className="text-2xl font-bold text-secondary mb-4">
                  <EditableText section="whyVeye" field={`outcome${num}Title`} />
                </h4>
                <p className="text-slate-500 leading-relaxed">
                  <EditableText section="whyVeye" field={`outcome${num}Desc`} multiline />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION_4: elasticity */}
      <section id="elasticity" className="py-32 bg-secondary text-white overflow-hidden relative border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                {loadingStates.mid ? (
                  <div className="w-full aspect-video bg-white/5 rounded-[3rem] animate-pulse flex items-center justify-center border border-white/10">
                    <Icon name="Loader2" className="animate-spin text-white/20" size={32} />
                  </div>
                ) : midImage ? (
                  <div className="rounded-[3rem] overflow-hidden shadow-3xl border border-white/10">
                    <img src={midImage} alt="Elastic growth framework" className="w-full h-auto object-cover" />
                  </div>
                ) : null}
              </div>

              <div>
                <h3 className="text-3xl md:text-5xl font-black mb-8">
                   <EditableText section="whyVeye" field="section4Heading" />
                </h3>
                <p className="text-xl text-slate-300 leading-relaxed font-medium">
                  <EditableText section="whyVeye" field="section4Paragraph" multiline />
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION_5: conclusion */}
      <section id="conclusion" className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h3 className="text-3xl md:text-6xl font-black text-secondary mb-8 tracking-tighter">
             <EditableText section="whyVeye" field="section5Heading" />
           </h3>
           <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-12">
             <EditableText section="whyVeye" field="section5Paragraph" multiline />
           </p>
           
           <div className="p-10 bg-slate-50 rounded-[2.5rem] shadow-xl border border-slate-100 max-w-2xl mx-auto">
             <p className="text-lg font-bold text-primary-600 uppercase tracking-widest mb-10">
                <EditableText section="whyVeye" field="section5CtaLine" />
             </p>
             <button
              onClick={() => onNavigate(View.AUDIT)}
              className="px-12 py-6 rounded-2xl bg-secondary text-white font-extrabold text-2xl hover:bg-secondary-hover transition-all shadow-3xl shadow-secondary/20 flex items-center gap-4 mx-auto group"
             >
               Initialize Dialogue
               <Icon name="ArrowRight" size={28} className="group-hover:translate-x-2 transition-transform" />
             </button>
           </div>
        </div>
      </section>
    </div>
  );
};
