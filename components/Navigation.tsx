import React, { useState, useRef, useEffect } from 'react';
import { View } from '../types';
import { Icon } from './Icon';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View, systemId?: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);

  const solutionsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
      if (techRef.current && !techRef.current.contains(event.target as Node)) {
        setTechnologyDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (view: View) => {
    onNavigate(view);
    setSolutionsDropdownOpen(false);
    setTechnologyDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick(View.HOME)}
            className="flex items-center group text-left focus:outline-none"
          >
            <img
              src="/01_primary_horizontal_with_divider.png"
              alt="Veye Media"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Veye7 Link */}
            <button
              onClick={() => handleLinkClick(View.VEYE7)}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
                currentView === View.VEYE7
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-slate-700 hover:text-secondary hover:bg-slate-50'
              }`}
            >
              Veye7™
            </button>

            {/* Solutions Dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => {
                  setSolutionsDropdownOpen(!solutionsDropdownOpen);
                  setTechnologyDropdownOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-1.5 transition-colors ${
                  currentView === View.SOLUTIONS || currentView.toString().startsWith('SOL_')
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-700 hover:text-secondary hover:bg-slate-50'
                }`}
              >
                <span>Solutions</span>
                <Icon
                  name="ChevronDown"
                  size={14}
                  className={`transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="p-2 border-b border-slate-100 mb-2">
                    <button
                      onClick={() => handleLinkClick(View.SOLUTIONS)}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-primary-600 hover:text-primary-700 flex items-center justify-between w-full"
                    >
                      <span>Solutions Overview</span>
                      <Icon name="ArrowRight" size={12} />
                    </button>
                  </div>
                  
                  <div className="space-y-1">
                    <button
                      onClick={() => handleLinkClick(View.SOL_BI_DECISION_SUPPORT)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-secondary flex items-center gap-2.5 transition-colors"
                    >
                      <Icon name="BrainCircuit" size={16} className="text-primary-500 shrink-0" />
                      <span>Business Intelligence & Decision Support</span>
                    </button>
                    <button
                      onClick={() => handleLinkClick(View.SOL_BD_REVENUE)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-secondary flex items-center gap-2.5 transition-colors"
                    >
                      <Icon name="Zap" size={16} className="text-primary-500 shrink-0" />
                      <span>Business Development & Revenue Intelligence</span>
                    </button>
                    <button
                      onClick={() => handleLinkClick(View.SOL_SALES_MARKETING)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-secondary flex items-center gap-2.5 transition-colors"
                    >
                      <Icon name="Workflow" size={16} className="text-primary-500 shrink-0" />
                      <span>Sales & Marketing Intelligence</span>
                    </button>
                    <button
                      onClick={() => handleLinkClick(View.SOL_MARKET_COMPETITIVE)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-secondary flex items-center gap-2.5 transition-colors"
                    >
                      <Icon name="Activity" size={16} className="text-primary-500 shrink-0" />
                      <span>Market & Competitive Intelligence</span>
                    </button>
                    <button
                      onClick={() => handleLinkClick(View.SOL_PROCESS_ORCHESTRATION)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-secondary flex items-center gap-2.5 transition-colors"
                    >
                      <Icon name="Cpu" size={16} className="text-primary-500 shrink-0" />
                      <span>Intelligent Process Orchestration</span>
                    </button>
                    <button
                      onClick={() => handleLinkClick(View.SOL_GOVERNED_AI_AGENTS)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-secondary flex items-center gap-2.5 transition-colors"
                    >
                      <Icon name="ShieldCheck" size={16} className="text-primary-500 shrink-0" />
                      <span>Governed AI & Agentic Systems</span>
                    </button>
                    <button
                      onClick={() => handleLinkClick(View.SOL_ENTERPRISE_ARCHITECTURE)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-secondary flex items-center gap-2.5 transition-colors"
                    >
                      <Icon name="Layers" size={16} className="text-primary-500 shrink-0" />
                      <span>Enterprise AI Architecture & Integration</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Technology Dropdown with Sub-Page Links */}
            <div className="relative" ref={techRef}>
              <button
                onClick={() => {
                  setTechnologyDropdownOpen(!technologyDropdownOpen);
                  setSolutionsDropdownOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-1.5 transition-colors ${
                  currentView === View.TECHNOLOGY || currentView.toString().startsWith('TECH_')
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-700 hover:text-secondary hover:bg-slate-50'
                }`}
              >
                <span>Technology</span>
                <Icon
                  name="ChevronDown"
                  size={14}
                  className={`transition-transform duration-200 ${technologyDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {technologyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="p-2 border-b border-slate-100 mb-2">
                    <button
                      onClick={() => handleLinkClick(View.TECHNOLOGY)}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-primary-600 hover:text-primary-700 flex items-center justify-between w-full"
                    >
                      <span>Technology Family Hub</span>
                      <Icon name="ArrowRight" size={12} />
                    </button>
                  </div>

                  <div className="space-y-1">
                    {/* Velocity Sync Engine Link */}
                    <button
                      onClick={() => handleLinkClick(View.TECH_VSE)}
                      className={`w-full text-left p-2.5 rounded-xl transition-colors flex items-start gap-3 ${
                        currentView === View.TECH_VSE ? 'bg-primary-50 text-primary-900' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="Cpu" size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-secondary block">Velocity Sync Engine™</span>
                        <span className="text-[11px] text-slate-500 block leading-tight">Orchestration & Intelligence Core</span>
                      </div>
                    </button>

                    {/* Veye Scout Link */}
                    <button
                      onClick={() => handleLinkClick(View.TECH_SCOUT)}
                      className={`w-full text-left p-2.5 rounded-xl transition-colors flex items-start gap-3 ${
                        currentView === View.TECH_SCOUT ? 'bg-primary-50 text-primary-900' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="Zap" size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-secondary block">Veye Scout™</span>
                        <span className="text-[11px] text-slate-500 block leading-tight">Market & Competitive Intelligence</span>
                      </div>
                    </button>

                    {/* Veye Pursuit Link */}
                    <button
                      onClick={() => handleLinkClick(View.TECH_PURSUIT)}
                      className={`w-full text-left p-2.5 rounded-xl transition-colors flex items-start gap-3 ${
                        currentView === View.TECH_PURSUIT ? 'bg-primary-50 text-primary-900' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="Workflow" size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-secondary block">Veye Pursuit™</span>
                        <span className="text-[11px] text-slate-500 block leading-tight">Business Development & Execution</span>
                      </div>
                    </button>

                    {/* Veye7 Enterprise Link */}
                    <button
                      onClick={() => handleLinkClick(View.VEYE7)}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 border-t border-slate-100 mt-1 pt-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="Layers" size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-secondary block">Veye7™</span>
                        <span className="text-[11px] text-slate-500 block leading-tight">Enterprise Intelligence System</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Insights Link */}
            <button
              onClick={() => handleLinkClick(View.INSIGHTS)}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
                currentView === View.INSIGHTS
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-slate-700 hover:text-secondary hover:bg-slate-50'
              }`}
            >
              Executive Insights
            </button>

            {/* About Link */}
            <button
              onClick={() => handleLinkClick(View.ABOUT)}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
                currentView === View.ABOUT
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-slate-700 hover:text-secondary hover:bg-slate-50'
              }`}
            >
              Why Veye
            </button>

            {/* Contact Link */}
            <button
              onClick={() => handleLinkClick(View.CONTACT)}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
                currentView === View.CONTACT
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-slate-700 hover:text-secondary hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Primary Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick(View.AUDIT)}
              className="px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-400 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Talk With Veye Media</span>
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-secondary hover:bg-slate-100 focus:outline-none"
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => handleLinkClick(View.HOME)}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick(View.VEYE7)}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Veye7™
          </button>

          {/* Mobile Technology Section */}
          <div className="p-3 bg-slate-50 rounded-2xl space-y-1">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-primary-600 px-2 py-1">
              Technology Family
            </div>
            <button
              onClick={() => handleLinkClick(View.TECHNOLOGY)}
              className="w-full text-left px-2 py-1.5 text-xs font-bold text-secondary"
            >
              Technology Family Hub
            </button>
            <button
              onClick={() => handleLinkClick(View.TECH_VSE)}
              className="w-full text-left px-2 py-1.5 text-xs text-slate-600 flex items-center gap-2"
            >
              <Icon name="Cpu" size={14} className="text-primary-500" />
              <span>Velocity Sync Engine™</span>
            </button>
            <button
              onClick={() => handleLinkClick(View.TECH_SCOUT)}
              className="w-full text-left px-2 py-1.5 text-xs text-slate-600 flex items-center gap-2"
            >
              <Icon name="Zap" size={14} className="text-primary-500" />
              <span>Veye Scout™</span>
            </button>
            <button
              onClick={() => handleLinkClick(View.TECH_PURSUIT)}
              className="w-full text-left px-2 py-1.5 text-xs text-slate-600 flex items-center gap-2"
            >
              <Icon name="Workflow" size={14} className="text-primary-500" />
              <span>Veye Pursuit™</span>
            </button>
          </div>

          {/* Mobile Solutions Section */}
          <div className="p-3 bg-slate-50 rounded-2xl space-y-1">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-primary-600 px-2 py-1">
              Solutions
            </div>
            <button
              onClick={() => handleLinkClick(View.SOLUTIONS)}
              className="w-full text-left px-2 py-1.5 text-xs font-bold text-secondary"
            >
              Solutions Overview
            </button>
            <button
              onClick={() => handleLinkClick(View.SOL_BI_DECISION_SUPPORT)}
              className="w-full text-left px-2 py-1.5 text-xs text-slate-600"
            >
              Business Intelligence & Decision Support
            </button>
            <button
              onClick={() => handleLinkClick(View.SOL_BD_REVENUE)}
              className="w-full text-left px-2 py-1.5 text-xs text-slate-600"
            >
              Business Development & Revenue Intelligence
            </button>
            <button
              onClick={() => handleLinkClick(View.SOL_SALES_MARKETING)}
              className="w-full text-left px-2 py-1.5 text-xs text-slate-600"
            >
              Sales & Marketing Intelligence
            </button>
            <button
              onClick={() => handleLinkClick(View.SOL_MARKET_COMPETITIVE)}
              className="w-full text-left px-2 py-1.5 text-xs text-slate-600"
            >
              Market & Competitive Intelligence
            </button>
            <button
              onClick={() => handleLinkClick(View.SOL_PROCESS_ORCHESTRATION)}
              className="w-full text-left px-2 py-1.5 text-xs text-slate-600"
            >
              Intelligent Process Orchestration
            </button>
            <button
              onClick={() => handleLinkClick(View.SOL_GOVERNED_AI_AGENTS)}
              className="w-full text-left px-2 py-1.5 text-xs text-slate-600"
            >
              Governed AI & Agentic Systems
            </button>
            <button
              onClick={() => handleLinkClick(View.SOL_ENTERPRISE_ARCHITECTURE)}
              className="w-full text-left px-2 py-1.5 text-xs text-slate-600"
            >
              Enterprise AI Architecture & Integration
            </button>
          </div>

          <button
            onClick={() => handleLinkClick(View.INSIGHTS)}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Executive Insights
          </button>
          <button
            onClick={() => handleLinkClick(View.ABOUT)}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Why Veye
          </button>
          <button
            onClick={() => handleLinkClick(View.CONTACT)}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Contact
          </button>

          <div className="pt-2">
            <button
              onClick={() => handleLinkClick(View.AUDIT)}
              className="w-full py-3 rounded-xl bg-primary-500 text-white font-bold text-center text-sm shadow-md"
            >
              Talk With Veye Media
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};