import React from 'react';
import { Volume2, Mic2, Waves, Activity, PlayCircle, Music, ArrowRight, Zap, Target, Share2, Database, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const ResonanceFeature = ({ title, icon, desc }: { title: string, icon: React.ReactNode, desc: string }) => (
  <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group text-left">
    <div className="w-14 h-14 bg-veye-blue/10 text-veye-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-veye-blue group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-veye-navy">{title}</h3>
    <p className="text-slate-600 leading-relaxed font-medium text-sm">{desc}</p>
  </div>
);

export const MediaIntelligence: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 animate-in fade-in duration-1000 bg-white">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-veye-blue/5 border border-veye-blue/10 text-veye-blue text-xs font-bold mb-10 uppercase tracking-[0.2em]">
            Resonant Frequencies
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-10 tracking-tighter text-veye-navy leading-tight">
            Media & Audio <br /> <span className="text-veye-blue">Intelligence</span>
          </h1>
          <p className="text-3xl font-bold italic text-veye-navy/80 mb-12">
            Resonant Outputs of an Intelligent System
          </p>
          <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
            <p>
              In a fragmented digital ecosystem, media is often reduced to static assets—files to be uploaded, clips to be posted, and audio to be streamed. This transactional view fails to capture the latent potential of media as a strategic growth surface.
            </p>
            <p>
              We redefine media and audio not as isolated creative artifacts, but as dynamic outputs of an intelligent growth infrastructure. They are the resonant frequencies of your system, engineered to transmit value, amplify influence, and create durable connections at scale.
            </p>
            <p>
              When integrated into a growth architecture, media ceases to be mere content. It becomes a sophisticated data instrument—a mechanism for sensing market sentiment and broadcasting authority with algorithmic precision.
            </p>
          </div>
        </div>

        {/* Page Visual Element */}
        <div className="relative pt-12">
          <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 flex items-center justify-center p-10 overflow-hidden shadow-inner">
            <div className="w-full h-full bg-veye-navy rounded-[3rem] shadow-2xl relative flex items-center justify-center group overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-veye-blue/20 via-transparent to-transparent opacity-50"></div>
               <div className="flex gap-3 items-end h-48 relative z-10 p-12">
                 {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                   <div 
                     key={i} 
                     className="w-4 bg-veye-blue rounded-full animate-pulse transition-all duration-500" 
                     style={{ 
                       height: `${30 + Math.random() * 70}%`, 
                       animationDelay: `${i * 0.15}s`,
                       opacity: 0.6 + (i * 0.05)
                     }}
                   ></div>
                 ))}
               </div>
               <Waves className="absolute bottom-10 left-10 text-veye-blue/10 animate-pulse" size={160} />
               <div className="absolute top-10 right-10 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                  <Activity size={32} className="text-veye-blue" />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-50 rounded-[4rem] border border-slate-100 mb-32 p-12 lg:p-20 shadow-inner text-left">
        <h2 className="text-4xl font-bold text-veye-navy mb-8 tracking-tight italic">The Architecture of Resonance</h2>
        <p className="text-xl text-slate-600 leading-relaxed font-medium mb-16 max-w-4xl">
          An intelligent system does not simply "produce" media; it generates resonance. By treating audio and visual outputs as integrated components of your growth engine, we transform them into adaptive signals that align perfectly with market intent and organizational objectives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ResonanceFeature 
            title="Dynamic Signal Adaptation"
            icon={<Zap size={28} />}
            desc="Your growth system continuously analyzes the digital environment, ensuring that every piece of media—from long-form audio to visual narratives—is calibrated for maximum impact. The output is not static; it is responsive, adjusting to the nuance of audience behavior and platform dynamics."
          />
          <ResonanceFeature 
            title="Amplified Authority"
            icon={<ShieldCheck size={28} />}
            desc="Media becomes the vehicle through which your system asserts leadership. By integrating audio intelligence into the core infrastructure, voice and narrative are no longer ephemeral. They become persistent assets that build cumulative trust and establish unassailable market positioning."
          />
          <ResonanceFeature 
            title="Scalable Engagement Vectors"
            icon={<Target size={28} />}
            desc="Traditional media strategies bottleneck at production. An intelligent system eliminates these constraints by treating media as a scalable vector for engagement. Audio and visual outputs are deployed as strategic touchpoints, creating an immersive ecosystem that surrounds and nurtures your audience."
          />
          <ResonanceFeature 
            title="Data-Driven Feedback Loops"
            icon={<Database size={28} />}
            desc="Every interaction with your media—every listen, view, and share—feeds intelligence back into the central system. This creates a continuous loop of refinement, where the performance of past outputs informs the strategy of future signals, ensuring perpetual optimization."
          />
        </div>
      </section>

      {/* Concluding Section */}
      <section className="mb-32 text-left max-w-4xl mx-auto py-16 border-y border-slate-100">
        <h2 className="text-4xl font-bold text-veye-navy mb-8 tracking-tight italic">Beyond Content: Strategic Immersion</h2>
        <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
          <p>
            The goal is not to fill a feed but to dominate a frequency. By integrating media and audio intelligence into your growth infrastructure, you move beyond the noise of competitors.
          </p>
          <p>
            You establish a clear, unwavering signal that penetrates the market, commands attention, and drives the strategic outcomes that define leadership.
          </p>
          <p className="text-veye-navy font-bold text-2xl italic">
            This is media reimagined as high-fidelity growth architecture. This is the sound of a system working in perfect unison.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="p-16 lg:p-32 bg-veye-navy text-white rounded-[4rem] text-center relative overflow-hidden mb-32 shadow-2xl">
        <div className="absolute top-0 left-0 w-96 h-96 bg-veye-blue/20 blur-[120px] rounded-full -z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-10 tracking-tight italic">Start a Conversation</h2>
          <p className="text-xl text-indigo-100 leading-relaxed font-medium mb-12">
            We invite you to engage in a strategic dialogue about system intelligence and growth architecture. Let’s explore the possibilities together.
          </p>
          <Link 
            to={Page.StartConversation} 
            className="inline-flex items-center gap-3 px-12 py-6 bg-veye-blue hover:bg-veye-blue/90 text-white rounded-full font-bold transition-all text-xl shadow-2xl shadow-veye-blue/20"
          >
            Initiate Media Architecture Dialogue <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};
