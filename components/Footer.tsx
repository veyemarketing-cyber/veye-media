
import React from 'react';
import { View } from '../types';
import { Icon } from './Icon';
import { EditableText } from './EditableText';

interface FooterProps {
  onNavigate: (view: View) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (view: View, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
  };

  const socialLinks = [
    { name: 'Linkedin', url: 'https://linkedin.com/company/veyemedia', label: 'LinkedIn' },
    { name: 'Twitter', url: 'https://twitter.com/veyemedia', label: 'X (Twitter)' },
    { name: 'Facebook', url: 'https://facebook.com/veyemedia', label: 'Facebook' }
  ];

  return (
    <footer className="relative bg-secondary text-white pt-20 pb-8 mt-auto overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent to-primary-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info & Social */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={(e) => handleLinkClick(View.HOME, e)}
              >
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                   <span className="font-bold text-secondary text-2xl">V</span>
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">Veye<span className="text-primary-500">Media</span></span>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                Veye Media is an Agentic AI-powered media intelligence firm. We build autonomous systems that drive measurable growth for businesses and ministries.
              </p>

              <div>
                <button 
                  onClick={(e) => handleLinkClick(View.WHY_VEYE, e)}
                  className="text-white font-bold hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  Our Strategic Vision <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <h3 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-4">Connect with Intelligence</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-500 hover:border-primary-400 transition-all duration-300"
                  >
                    <Icon name={social.name} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* System Pillars */}
          <div>
            <h3 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">System Pillars</h3>
            <ul className="space-y-3">
              {[
                { label: 'Agentic AI Strategy', view: View.GROWTH_SURFACES },
                { label: 'Media & Audio Production', view: View.MEDIA_INTELLIGENCE },
                { label: 'Growth Intelligence', view: View.VELOCITY_SYNC },
                { label: 'Creative Platforms', view: View.DIGITAL_PLATFORMS },
                { label: 'Demand Agents', view: View.WHAT_WE_BUILD }
              ].map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={(e) => handleLinkClick(item.view, e)}
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={(e) => handleLinkClick(View.EXECUTIVE_INSIGHTS, e)} className="text-slate-400 hover:text-white transition-colors text-sm">
                  Executive Insights
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(View.INSIGHTS, e)} className="text-slate-400 hover:text-white transition-colors text-sm">
                  Strategic Essays
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(View.CONTACT, e)} className="text-slate-400 hover:text-white transition-colors text-sm">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(View.AUDIT, e)} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-primary-400">
                  System Audit
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Region */}
          <div>
            <h3 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Headquarters</h3>
            <div className="space-y-4 text-slate-400 text-sm">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="shrink-0 mt-1 text-primary-500" size={18} />
                <address className="not-italic leading-relaxed">
                  <EditableText section="global" field="addressLine1" />
                  <br />
                  <EditableText section="global" field="addressLine2" />
                </address>
              </div>
              
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="shrink-0 text-primary-500" size={18} />
                <EditableText section="global" field="phone" />
              </div>
              
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="shrink-0 text-primary-500" size={18} />
                <EditableText section="global" field="email" />
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Veye Media. Intelligence First. Systems Focused.</p>
        </div>
      </div>
    </footer>
  );
};
