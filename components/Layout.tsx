import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { NAVIGATION } from '../constants';
import { Page } from '../types';
import { ChatAssistant } from './ChatAssistant';
import { Logo } from './Logo';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <nav className="fixed w-full z-50 bg-white border-b border-slate-100 shadow-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/">
                <Logo />
              </Link>
            </div>

            <div className="hidden xl:flex items-center space-x-8">
              {NAVIGATION.map((item) => (
                <div key={item.path} className="relative" ref={item.children ? dropdownRef : null}>
                  {item.children ? (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={`text-[18px] font-semibold flex items-center gap-1 transition-colors hover:text-veye-blue ${
                        location.pathname.startsWith('/systems-we-build') ? 'text-veye-blue' : 'text-slate-700'
                      }`}
                    >
                      {item.label} <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-[18px] font-semibold transition-colors hover:text-veye-blue ${
                        location.pathname === item.path ? 'text-veye-blue' : 'text-slate-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-100 shadow-xl rounded-xl py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-6 py-3 text-[16px] font-medium text-slate-700 hover:bg-slate-50 hover:text-veye-blue transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="xl:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 h-screen overflow-y-auto">
            <div className="px-4 py-6 space-y-2">
              {NAVIGATION.map((item) => (
                <div key={item.path}>
                  {item.children ? (
                    <div className="py-4">
                      <span className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">
                        {item.label}
                      </span>
                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-3 text-lg font-medium text-slate-600 border-l-2 border-transparent hover:border-veye-blue hover:bg-slate-50 transition-all"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-4 text-xl font-bold text-slate-800 border-b border-slate-50"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20 relative">
        {children}
        <ChatAssistant />
      </main>

      <footer className="bg-veye-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 border-b border-white/10 pb-16 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="inline-block mb-8">
                <Logo variant="light" />
              </Link>
              <p className="text-slate-300 max-w-sm mb-8 font-medium">
                Agentic AI-powered systems architect focused on outcomes, orchestration, and continuous growth.
              </p>
              <div className="space-y-3 text-slate-400 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-veye-blue" />
                  <span>403 5th Street, Lynchburg, VA 24504</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-veye-blue" />
                  <span>866.790.3014</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-veye-blue" />
                  <a href="mailto:hello@veyemedia.co" className="hover:text-white transition-colors">hello@veyemedia.co</a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-veye-blue">Orchestration</h4>
              <ul className="space-y-4 text-slate-400 font-medium text-sm">
                <li><Link to={Page.VelocitySync} className="hover:text-white transition-colors">Velocity Sync Engine™</Link></li>
                <li><Link to={Page.SystemsWeBuild} className="hover:text-white transition-colors">Systems Overview</Link></li>
                <li><Link to={Page.IntelligentGrowthSystems} className="hover:text-white transition-colors">Intelligent Growth</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-veye-blue">Dialogue</h4>
              <ul className="space-y-4 text-slate-400 font-medium text-sm">
                <li><Link to={Page.WhoWeWorkWith} className="hover:text-white transition-colors">Partners</Link></li>
                <li><Link to={Page.Insights} className="hover:text-white transition-colors">Insights</Link></li>
                <li><Link to={Page.StartConversation} className="hover:text-white transition-colors">Start Conversation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-veye-blue">Governance</h4>
              <ul className="space-y-4 text-slate-400 font-medium text-sm">
                <li><Link to={Page.PrivacyPolicy} className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to={Page.TermsOfUse} className="hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link to={Page.DataGovernance} className="hover:text-white transition-colors">Data Use & Governance</Link></li>
                <li><Link to={Page.Sitemap} className="hover:text-white transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Veye Media. Orchestration over effort.</span>
            <span className="italic">Systems Intelligence for Future Growth</span>
          </div>
        </div>
      </footer>
    </div>
  );
};