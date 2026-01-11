
import React, { useState, useEffect } from 'react';
import { View, ServiceItem } from '../types';
import { SERVICES_DATA } from '../constants';
import { Icon } from '../components/Icon';
import { generateBrandImage } from '../services/geminiService';
import { EditableText } from '../components/EditableText';

interface SystemDetailProps {
  systemId: string;
  onNavigate: (view: View) => void;
}

export const SystemDetail: React.FC<SystemDetailProps> = ({ systemId, onNavigate }) => {
  const system = SERVICES_DATA.find(s => s.id === systemId);
  const [mediaImages, setMediaImages] = useState<{ studio: string | null; distribution: string | null }>({
    studio: null,
    distribution: null
  });
  const [loadingMedia, setLoadingMedia] = useState(false);

  useEffect(() => {
    if (systemId === 'media-audio-systems') {
      const fetchMediaImages = async () => {
        setLoadingMedia(true);
        const [studioImg, distImg] = await Promise.all([
          generateBrandImage("Create a realistic, professional image of an audio production environment. Show microphones, mixing consoles, headphones, and acoustic panels in use. The scene should feel authentic and production-focused, not staged. Warm lighting, high-quality equipment, modern studio aesthetic."),
          generateBrandImage("Create an abstract visualization showing audio and media content flowing into multiple digital platforms with analytics overlays. Represent distribution, performance tracking, and optimization. Clean, modern, technology-driven style, no logos, no text, professional color palette.")
        ]);
        setMediaImages({ studio: studioImg, distribution: distImg });
        setLoadingMedia(false);
      };
      fetchMediaImages();
    } else {
      setMediaImages({ studio: null, distribution: null });
    }
  }, [systemId]);

  if (!system) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold">System Not Found</h1>
        <button onClick={() => onNavigate(View.HOME)} className="text-primary-500 underline mt-4">
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-white">
      {/* Hero Banner */}
      <section 
        className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden"
        style={{
            background: "linear-gradient(135deg, #002d62 0%, #c47500 100%)"
        }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-[120px] -ml-48 -mb-48"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => onNavigate(View.SERVICES)}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 font-bold text-sm uppercase tracking-widest transition-colors"
          >
            <Icon name="ArrowRight" size={16} className="rotate-180" /> Back to Systems
          </button>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
              <Icon name={system.iconName} size={40} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
                <EditableText section="systems" subKey={systemId} field="title" />
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-medium leading-relaxed">
                <EditableText section="systems" subKey={systemId} field="description" multiline />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Narrative */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Conditional Studio Image for Media System */}
              {systemId === 'media-audio-systems' && (
                <div className="mb-12">
                  {loadingMedia ? (
                    <div className="w-full aspect-video bg-slate-100 rounded-3xl animate-pulse flex flex-col items-center justify-center border border-slate-200">
                      <Icon name="Loader2" className="animate-spin text-slate-300 mb-2" size={32} />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Visualizing Studio Environment...</span>
                    </div>
                  ) : mediaImages.studio ? (
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                      <img src={mediaImages.studio} alt="Production Studio" className="w-full h-auto object-cover" />
                    </div>
                  ) : null}
                </div>
              )}

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">
                   <EditableText section="systems" subKey={systemId} field="capabilityHeadline" />
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  <EditableText section="systems" subKey={systemId} field="capabilityDescription" multiline />
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                        <Icon name="Cpu" size={18} className="text-primary-500" /> 
                        <EditableText section="systems" subKey={systemId} field="feature1Title" />
                    </h4>
                    <p className="text-sm text-slate-500">
                      <EditableText section="systems" subKey={systemId} field="feature1Desc" multiline />
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                        <Icon name="Zap" size={18} className="text-accent" /> 
                        <EditableText section="systems" subKey={systemId} field="feature2Title" />
                    </h4>
                    <p className="text-sm text-slate-500">
                      <EditableText section="systems" subKey={systemId} field="feature2Desc" multiline />
                    </p>
                  </div>
                </div>
              </div>

              {/* Conditional Distribution Image for Media System */}
              {systemId === 'media-audio-systems' && (
                <div className="mt-12">
                  {loadingMedia ? (
                    <div className="w-full aspect-video bg-slate-100 rounded-3xl animate-pulse flex flex-col items-center justify-center border border-slate-200">
                      <Icon name="Loader2" className="animate-spin text-slate-300 mb-2" size={32} />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Modeling Distribution Flow...</span>
                    </div>
                  ) : mediaImages.distribution ? (
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                      <img src={mediaImages.distribution} alt="Distribution Analytics" className="w-full h-auto object-cover" />
                    </div>
                  ) : null}
                </div>
              )}

              <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6">
                      <EditableText section="systems" subKey={systemId} field="integrationHeadline" />
                    </h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                      <EditableText section="systems" subKey={systemId} field="integrationDesc" multiline />
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-slate-300">
                            <Icon name="CheckCircle" className="text-primary-500" size={20} />
                            <span>Full-funnel attribution and visibility</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                            <Icon name="CheckCircle" className="text-primary-500" size={20} />
                            <span>Proactive signal detection and scaling</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                            <Icon name="CheckCircle" className="text-primary-500" size={20} />
                            <span>24/7 autonomous monitoring and maintenance</span>
                        </li>
                    </ul>
                </div>
              </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl border-2 border-slate-100 bg-white shadow-xl shadow-slate-200/50">
                <h3 className="text-xl font-bold text-secondary mb-4">Run Audit</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  Analyze how the {system.title} would integrate with your current tech stack and what ROI gaps it could fill.
                </p>
                <button 
                  onClick={() => onNavigate(View.AUDIT)}
                  className="w-full py-4 bg-secondary hover:bg-secondary-hover text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group"
                >
                  Start System Audit <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="p-8 rounded-3xl bg-primary-50 border border-primary-100">
                <h3 className="text-lg font-bold text-primary-900 mb-2">Technical Specs</h3>
                <div className="space-y-4 mt-4">
                   <div className="flex justify-between text-sm border-b border-primary-100 pb-2">
                      <span className="text-primary-700 font-medium">Model</span>
                      <span className="text-primary-900 font-bold uppercase">Gemini-Agentic-3.0</span>
                   </div>
                   <div className="flex justify-between text-sm border-b border-primary-100 pb-2">
                      <span className="text-primary-700 font-medium">Optimization Cycle</span>
                      <span className="text-primary-900 font-bold">Real-time (Live)</span>
                   </div>
                   <div className="flex justify-between text-sm border-b border-primary-100 pb-2">
                      <span className="text-primary-700 font-medium">System Uptime</span>
                      <span className="text-primary-900 font-bold">99.9% Autonomous</span>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
