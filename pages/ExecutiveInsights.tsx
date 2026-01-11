
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';
import { generateBrandImage } from '../services/geminiService';
import { EditableText } from '../components/EditableText';

interface ExecutiveInsightsProps {
  onNavigate: (view: View) => void;
}

export const ExecutiveInsights: React.FC<ExecutiveInsightsProps> = ({ onNavigate }) => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [images, setImages] = useState<Record<string, string | null>>({
    sec1: null,
    sec3: null,
    sec5: null
  });
  const [loadingStates, setLoadingStates] = useState({ hero: true, images: true });

  useEffect(() => {
    const fetchImages = async () => {
      // Hero Image
      generateBrandImage("Abstract architectural visualization of complex systems with glowing strategic nodes. Deep blue and gold, premium enterprise style, minimalist.")
        .then(img => {
          if (img) setHeroImage(img);
          setLoadingStates(prev => ({ ...prev, hero: false }));
        });

      // Pillar Images
      const [img1, img3, img5] = await Promise.all([
        generateBrandImage("Abstract visualization of a permanent architectural foundation glowing with intelligence. Represents systems over services."),
        generateBrandImage("Visualization of elastic, expansive light structures representing nonlinear scaling and growth capacity."),
        generateBrandImage("Minimalist visualization of an intelligent enterprise core processing signals into strategic moats.")
      ]);

      setImages({ sec1: img1, sec3: img3, sec5: img5 });
      setLoadingStates(prev => ({ ...prev, images: false }));
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
                <EditableText section="executiveInsights" field="heroEyebrow" />
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-secondary tracking-tighter mb-6 leading-[0.95]">
                <EditableText section="executiveInsights" field="heroHeadline" />
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-8 leading-snug">
                <EditableText section="executiveInsights" field="heroSubheadline" multiline />
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-12 max-w-xl font-medium">
                <EditableText section="executiveInsights" field="heroSupportingParagraph" multiline />
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => onNavigate(View.AUDIT)}
                  className="px-10 py-5 bg-secondary text-white font-extrabold rounded-2xl hover:bg-secondary-hover transition-all shadow-2xl shadow-secondary/20 flex items-center justify-center gap-2 group"
                >
                  <EditableText section="executiveInsights" field="heroCtaPrimaryText" />
                  <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate(View.VELOCITY_SYNC)}
                  className="px-10 py-5 bg-white border-2 border-slate-200 text-secondary font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  <EditableText section="executiveInsights" field="heroCtaSecondaryText" />
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
                  <img src={heroImage} alt="Systems architecture visualization" className="w-full h-auto object-cover" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 1: Services vs Systems */}
      <section id="services-vs-systems" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                {loadingStates.images ? (
                  <div className="w-full aspect-video bg-slate-100 rounded-[3rem] animate-pulse flex items-center justify-center">
                    <Icon name="Loader2" className="animate-spin text-slate-300" size={32} />
                  </div>
                ) : images.sec1 ? (
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                    <img src={images.sec1} alt="Permanent foundation visualization" className="w-full h-auto object-cover" />
                  </div>
                ) : null}
              </div>

              <div>
                <h3 className="text-3xl md:text-5xl font-black text-secondary mb-12">
                   <EditableText section="executiveInsights" field="section1Heading" />
                </h3>
                <p className="text-xl text-slate-500 leading-relaxed font-medium">
                  <EditableText section="executiveInsights" field="section1Paragraph" multiline />
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* PILLAR 2: Projects vs States */}
      <section id="projects-vs-states" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
           <h3 className="text-3xl md:text-5xl font-black text-secondary mb-8">
              <EditableText section="executiveInsights" field="section2Heading" />
           </h3>
           <p className="text-xl text-slate-500 leading-relaxed font-medium">
              <EditableText section="executiveInsights" field="section2Paragraph" multiline />
           </p>
        </div>
      </section>

      {/* PILLAR 3: Linear vs Elastic */}
      <section id="linear-vs-elastic" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl md:text-5xl font-black text-secondary mb-12">
                   <EditableText section="executiveInsights" field="section3Heading" />
                </h3>
                <p className="text-xl text-slate-500 leading-relaxed font-medium">
                  <EditableText section="executiveInsights" field="section3Paragraph" multiline />
                </p>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                {loadingStates.images ? (
                  <div className="w-full aspect-video bg-slate-100 rounded-[3rem] animate-pulse flex items-center justify-center">
                    <Icon name="Loader2" className="animate-spin text-slate-300" size={32} />
                  </div>
                ) : images.sec3 ? (
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                    <img src={images.sec3} alt="Elastic growth visualization" className="w-full h-auto object-cover" />
                  </div>
                ) : null}
              </div>
           </div>
        </div>
      </section>

      {/* PILLAR 4: Rigidity vs Antifragility */}
      <section id="rigidity-vs-antifragility" className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
           <h3 className="text-3xl md:text-5xl font-black mb-8">
              <EditableText section="executiveInsights" field="section4Heading" />
           </h3>
           <p className="text-xl text-slate-300 leading-relaxed font-medium">
              <EditableText section="executiveInsights" field="section4Paragraph" multiline />
           </p>
        </div>
      </section>

      {/* PILLAR 5: Infrastructure of Autonomy */}
      <section id="autonomy-infrastructure" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                {loadingStates.images ? (
                  <div className="w-full aspect-video bg-slate-100 rounded-[3rem] animate-pulse flex items-center justify-center">
                    <Icon name="Loader2" className="animate-spin text-slate-300" size={32} />
                  </div>
                ) : images.sec5 ? (
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                    <img src={images.sec5} alt="Intelligent core moats" className="w-full h-auto object-cover" />
                  </div>
                ) : null}
              </div>

              <div>
                <h3 className="text-3xl md:text-5xl font-black text-secondary mb-12">
                   <EditableText section="executiveInsights" field="section5Heading" />
                </h3>
                <p className="text-xl text-slate-500 leading-relaxed font-medium">
                  <EditableText section="executiveInsights" field="section5Paragraph" multiline />
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* INVITATION */}
      <section id="invitation" className="py-32 bg-slate-50 border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
           <div className="p-10 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 max-w-2xl mx-auto">
             <p className="text-lg font-bold text-primary-600 uppercase tracking-widest mb-10">
                <EditableText section="executiveInsights" field="section5CtaLine" />
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
