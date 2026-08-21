import React from 'react';
import { View } from '../types';
import { Icon } from './Icon';
import { EditableText } from './EditableText';

interface FooterProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (view: View, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Linkedin', url: 'https://linkedin.com/company/veyemedia', label: 'LinkedIn' },
    { name: 'Twitter', url: 'https://twitter.com/veyemedia', label: 'X (Twitter)' },
    { name: 'Facebook', url: 'https://facebook.com/veyemedia', label: 'Facebook' }
  ];

  return (
    <footer className="relative bg-secondary text-white pt-20 pb-8 mt-auto overflow-hidden font-sans">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent to-primary-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info, Description & Social */}
          <div className="space-y-6">
            <div
              className="inline-block cursor-pointer focus:outline-none"
              onClick={(e) => handleLinkClick(View.HOME, e)}
            >
              <img
                src="/01_primary_horizontal_with_divider.png"
                alt="Veye Media"
                className="h-9 sm:h-10 w-auto object-contain mix-blend-screen"
              />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Veye Media architects enterprise intelligence systems that connect business strategy, processes, data, technology, AI, governance, and human decision-making. Our Veye7™ architecture, powered by the Velocity Sync Engine™, helps organizations turn intelligence into governed action and measurable business outcomes.
            </p>

            <div>
              <button
                onClick={(e) => handleLinkClick(View.ABOUT, e)}
                className="text-white font-bold hover:text-primary-400 transition-colors text-xs flex items-center gap-2 group"
              >
                <span>Why Veye Media</span>
                <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-accent font-bold uppercase tracking-widest text-[10px] block mb-3">
                Connect with Intelligence
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-500 hover:border-primary-400 transition-all duration-300"
                  >
                    <Icon name={social.name} size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Family */}
          <div>
            <h3 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">
              Technology Family
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Veye7™ Enterprise Intelligence', view: View.VEYE7 },
                { label: 'Velocity Sync Engine™ (VSE)', view: View.TECH_VSE },
                { label: 'Veye Scout™ (Market Intel)', view: View.TECH_SCOUT },
                { label: 'Veye Pursuit™ (Business Dev)', view: View.TECH_PURSUIT },
                { label: 'Technology Hub', view: View.TECHNOLOGY }
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLinkClick(item.view, e)}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all text-xs sm:text-sm flex items-center gap-2 text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Executive Intelligence */}
          <div>
            <h3 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">
              Solutions & Insights
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Business Intelligence & Decisions', view: View.SOL_BI_DECISION_SUPPORT },
                { label: 'Revenue & Business Development', view: View.SOL_BD_REVENUE },
                { label: 'Sales & Marketing Intelligence', view: View.SOL_SALES_MARKETING },
                { label: 'Governed AI & Agentic Systems', view: View.SOL_GOVERNED_AI_AGENTS },
                { label: 'Executive Insights Briefing', view: View.INSIGHTS },
                { label: 'Talk With Veye Media', view: View.AUDIT, highlight: true }
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLinkClick(item.view, e)}
                    className={`transition-colors text-xs sm:text-sm text-left ${
                      item.highlight
                        ? 'text-primary-400 font-bold hover:text-primary-300'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters & Contact */}
          <div>
            <h3 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">
              Headquarters
            </h3>
            <div className="space-y-4 text-slate-300 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="shrink-0 mt-1 text-primary-500" size={16} />
                <address className="not-italic leading-relaxed">
                  <EditableText section="global" field="addressLine1" />
                  <br />
                  <EditableText section="global" field="addressLine2" />
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Icon name="Phone" className="shrink-0 text-primary-500" size={16} />
                <EditableText section="global" field="phone" />
              </div>

              <div className="flex items-center gap-3">
                <Icon name="Mail" className="shrink-0 text-primary-500" size={16} />
                <EditableText section="global" field="email" />
              </div>

              <div className="pt-2">
                <button
                  onClick={(e) => handleLinkClick(View.CONTACT, e)}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-primary-500 hover:border-primary-500 transition-all"
                >
                  Contact Form
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Veye Media. Enterprise Systems Architecture & Active Autonomy™.</p>
          <div className="flex gap-6">
            <button onClick={(e) => handleLinkClick(View.ABOUT, e)} className="hover:text-white transition-colors">
              Philosophy
            </button>
            <button onClick={(e) => handleLinkClick(View.CONTACT, e)} className="hover:text-white transition-colors">
              Inquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};