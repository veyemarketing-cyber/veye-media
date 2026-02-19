import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Page } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white pt-16 pb-8 relative z-10" style={{ backgroundColor: '#002d62' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Contact Column */}
          <div className="col-span-1 md:col-span-1">
            <Logo variant="light" className="h-10 w-auto mb-6" />
            <p className="text-blue-100/90 text-[15px] leading-relaxed mb-8">
              Agentic AI-powered systems architect focused on outcomes, orchestration, and continuous growth.
            </p>
            <div className="space-y-3 text-sm text-blue-100/80">
              <p className="flex items-center">
                <span className="mr-3">📍</span> 403 5th Street, Lynchburg, VA 24504
              </p>
              <p className="flex items-center">
                <span className="mr-3">📞</span> 866.790.3014
              </p>
              <p className="flex items-center">
                <span className="mr-3">✉️</span> systems@veyemedia.co
              </p>
            </div>
          </div>

          {/* Orchestration Column */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-blue-400 mb-6">Orchestration</h4>
            <ul className="space-y-4 text-[15px] text-blue-100/80">
              <li><Link to={Page.VelocitySync} className="hover:text-white transition-colors">Velocity Sync Engine™</Link></li>
              <li><Link to={Page.SystemsWeBuild} className="hover:text-white transition-colors">Systems Overview</Link></li>
              <li><Link to={Page.IntelligentGrowthSystems} className="hover:text-white transition-colors">Intelligent Growth</Link></li>
            </ul>
          </div>

          {/* Dialogue Column */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-blue-400 mb-6">Dialogue</h4>
            <ul className="space-y-4 text-[15px] text-blue-100/80">
              <li><Link to={Page.WhoWeWorkWith} className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link to={Page.Insights} className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to={Page.StartConversation} className="hover:text-white transition-colors">Start Conversation</Link></li>
            </ul>
          </div>

          {/* Governance Column */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-blue-400 mb-6">Governance</h4>
            <ul className="space-y-4 text-[15px] text-blue-100/80">
              <li><Link to={Page.PrivacyPolicy} className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to={Page.TermsOfUse} className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link to={Page.DataGovernance} className="hover:text-white transition-colors">Data Use & Governance</Link></li>
              <li><Link to={Page.Sitemap} className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-[0.2em] text-blue-100/40">
          <p>© 2026 VEYE MEDIA. ORCHESTRATION OVER EFFORT.</p>
          <p>SYSTEMS INTELLIGENCE FOR FUTURE GROWTH</p>
        </div>
      </div>
    </footer>
  );
};