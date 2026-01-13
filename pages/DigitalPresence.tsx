import React from 'react';
// Added ArrowRight to imports to fix "Cannot find name 'ArrowRight'" error on line 150
import { Globe, ShoppingCart, Shield, Activity, Search, Zap, Layout, Layers, Cpu, MousePointer2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const PlatformBlock = ({ title, subtitle, desc, icon }: { title: string, subtitle?: string, desc: string, icon: React.ReactNode }) => (
  <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group text-left">
    <div className="w-14 h-14 bg-veye-blue/10 text-veye-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-veye-blue group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-2 text-veye-navy">{title}</h3>
    {subtitle && <p className="text-veye-amber text-[10px] font-extrabold uppercase tracking-widest mb-4">{subtitle}</p>}
    <p className="text-slate-600 leading-relaxed font-medium text-sm">{desc}</p>
  </div>
);

export const DigitalPresence: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 animate-in fade-in duration-1000 bg-white">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-veye-blue/5 border border-veye-blue/10 text-veye-blue text-xs font-bold mb-10 uppercase tracking-[0.2em]">
            Digital Terminals
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-10 tracking-tighter text-veye-navy leading-tight">
            Digital Platforms: <br /> <span className="text-veye-blue">The Interface of Intelligence</span>
          </h1>
          <p className="text-3xl font-bold italic text-veye-navy/80 mb-12">
            Beyond the Brochure: The Dynamic Digital Terminal
          </p>
          <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
            <p>
              In the architecture of modern business, the website has evolved beyond a static digital brochure or a simple storefront. It is no longer merely a destination for traffic; it is the primary interface between your market and your organization’s central intelligence.
            </p>
            <p>
              We view digital platforms—whether informational sites or complex commerce environments—as dynamic terminals. They are the sensory organs of the enterprise, designed not just to display content, but to facilitate a seamless, bidirectional exchange of value and data.
            </p>
            <p>
              When architected correctly, these platforms cease to be standalone assets and become the responsive skin of an Intelligent Growth System.
            </p>
          </div>
        </div>

        {/* Page Visual Element */}
        <div className="relative pt-12">
          <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 flex items-center justify-center p-10 overflow-hidden shadow-inner">
            <div className="w-full h-full bg-veye-navy rounded-[3rem] shadow-2xl relative flex items-center justify-center group overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
               <div className="grid grid-cols-2 gap-6 relative z-10">
                 <div className="w-24 h-24 bg-veye-blue/20 rounded-2xl border border-white/10 flex items-center justify-center animate-pulse">
                   <Layout className="text-white" size={40} />
                 </div>
                 <div className="w-24 h-24 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center mt-12 animate-bounce">
                   <Shield className="text-veye-amber" size={40} />
                 </div>
                 <div className="w-24 h-24 bg-veye-blue/10 rounded-2xl border border-white/10 flex items-center justify-center -mt-12 group-hover:scale-110 transition-transform">
                   <MousePointer2 className="text-veye-blue" size={40} />
                 </div>
                 <div className="w-24 h-24 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center animate-pulse delay-75">
                   <Globe className="text-white" size={40} />
                 </div>
               </div>
               <div className="absolute inset-0 border-8 border-white/5 rounded-[3rem] scale-90"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Adaptive Interface Section */}
      <section className="py-24 bg-slate-50 rounded-[4rem] border border-slate-100 mb-32 p-12 lg:p-20 shadow-inner text-left">
        <h2 className="text-4xl font-bold text-veye-navy mb-8 tracking-tight italic">The Adaptive Interface</h2>
        <p className="text-xl text-slate-600 leading-relaxed font-medium mb-16 max-w-4xl">
          Traditional web development focuses on aesthetics and static functionality. Our approach focuses on behavior and adaptation. An intelligent platform does not simply present information; it curates experience based on the intent and context of the user.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PlatformBlock 
            title="Contextual Fluidity"
            desc="The interface adapts in real-time, aligning the user journey with the insights generated by the broader system. It is a living environment that shifts to meet the visitor, reducing friction and accelerating the path from discovery to decision."
            icon={<Zap size={28} />}
          />
          <PlatformBlock 
            title="The Convergence of Brand and Intelligence"
            desc="Your digital platform is where brand narrative meets data precision. It is the stage where your market authority is not just claimed but demonstrated through an experience that feels intuitive, personalized, and deeply responsive to user needs."
            icon={<Shield size={28} />}
          />
        </div>
      </section>

      {/* Commerce Section */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
          <div>
            <h2 className="text-4xl font-bold text-veye-navy mb-8 tracking-tight italic">Commerce as Value Exchange</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-12">
              In the realm of ecommerce, the platform is often reduced to a transactional utility. We reframe commerce platforms as sophisticated nodes of value exchange. They are not simply about processing payments; they are about orchestrating a relationship.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-5 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                 <div className="w-12 h-12 bg-veye-blue/10 text-veye-blue rounded-xl flex items-center justify-center shrink-0">
                    <ShoppingCart size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-veye-navy mb-2">Frictionless Transaction Architectures</h4>
                    <p className="text-slate-500 text-sm">An intelligent commerce interface removes the cognitive load of purchasing. It anticipates needs, streamlines decision-making, and creates a fluidity that transforms a transaction into a natural progression of the relationship.</p>
                 </div>
              </div>
              <div className="flex items-start gap-5 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                 <div className="w-12 h-12 bg-veye-blue/10 text-veye-blue rounded-xl flex items-center justify-center shrink-0">
                    <Cpu size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-veye-navy mb-2">Integrated Systems Logic</h4>
                    <p className="text-slate-500 text-sm">The platform is the visible tip of the iceberg. Beneath the surface, it is inextricably linked to inventory logic, customer intelligence, and demand prediction. The interface reflects the real-time state of the business.</p>
                 </div>
              </div>
            </div>
          </div>
          <div className="relative bg-veye-navy rounded-[3rem] p-12 overflow-hidden shadow-2xl h-full flex flex-col justify-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-veye-blue/20 blur-[100px] -z-0"></div>
             <Activity className="text-veye-blue mb-8 animate-pulse" size={64} />
             <h3 className="text-3xl font-bold text-white mb-6 italic">Scalability Through Architecture</h3>
             <p className="text-indigo-100 text-lg leading-relaxed font-medium">
               Static websites require constant manual reconstruction to grow. Intelligent platforms are built on architectures designed for elasticity. As your market reach expands and your data ecosystem grows, the interface scales without structural fracture.
             </p>
          </div>
        </div>
      </section>

      {/* Strategic Advantage */}
      <section className="mb-32 text-left max-w-4xl mx-auto py-16 border-y border-slate-100">
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          This is the strategic advantage of a platform-first mindset: you are not building for the campaign of the month, but for the decade of growth ahead. You are establishing a digital environment capable of evolving as rapidly as the market itself.
        </p>
      </section>

      {/* Call to Action */}
      <div className="p-16 lg:p-32 bg-veye-navy text-white rounded-[4rem] text-center relative overflow-hidden mb-32 shadow-2xl">
        <div className="absolute top-0 left-0 w-96 h-96 bg-veye-blue/20 blur-[120px] rounded-full -z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-10 tracking-tight italic">Architect the Interface</h2>
          <p className="text-xl text-indigo-100 leading-relaxed font-medium mb-12">
            Do not build a website. Construct an intelligent interface that connects your market to your mission. Elevate your digital presence from a passive display to a dynamic, value-generating terminal.
          </p>
          <Link 
            to={Page.StartConversation} 
            className="inline-flex items-center gap-3 px-12 py-6 bg-veye-blue hover:bg-veye-blue/90 text-white rounded-full font-bold transition-all text-xl shadow-2xl shadow-veye-blue/20"
          >
            Initialize Your Platform Architecture <ArrowRight size={24} />
          </Link>
        </div>
      </div>

      {/* Final Dialogue Invite */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6 text-veye-navy italic">Start a Conversation</h3>
        <p className="text-lg text-slate-500 font-medium">
          We invite you to engage in a dialog on building strategic systems. Discover what is possible when foresight and architecture shape your next era of growth.
        </p>
      </div>
    </div>
  );
};