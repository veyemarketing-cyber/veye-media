import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { View } from '../types';
import { NAV_ITEMS } from '../constants';
import { Icon } from './Icon';
import { MegaMenu } from './MegaMenu';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View, systemId?: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ NEW: close timer so dropdown doesn't snap shut while moving mouse to panel
  const closeTimerRef = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // tweak: 150–300ms
  };

  // View -> URL mapping (no hooks, no memo)
  const resolvePath = (viewStr: string, systemId?: string) => {
    const v = viewStr as View;

    switch (v) {
      case View.HOME:
        return '/';

      case View.VELOCITY_SYNC:
      case View.GROWTH_SYSTEMS:
        return '/agentic-growth-systems';

      case View.GROWTH_SURFACES:
        return '/growth-surfaces';

      case View.MEDIA_INTELLIGENCE:
        return '/media-intelligence';

      case View.DIGITAL_PLATFORMS:
        return '/digital-platforms';

      case View.EXECUTIVE_INSIGHTS:
        return '/executive-insights';

      case View.WHY_VEYE:
      case View.ABOUT:
        return '/why-veye';

      case View.WHAT_WE_BUILD:
        return '/what-we-build';

      case View.SERVICES:
      case View.WHAT_WE_BUILD: // safe redundancy
        return '/services';

      case View.SYSTEM_DETAIL:
        return systemId ? `/systems/${encodeURIComponent(systemId)}` : '/services';

      case View.BLOG:
      case View.INSIGHTS:
        return '/blog';

      case View.START_CONVERSATION:
        return '/start-a-conversation';

      case View.AUDIT:
        return '/audit';

      case View.CONTACT:
        return '/contact';

      default:
        // Handle string literals used in your code (like 'HOME')
        if (viewStr === 'HOME') return '/';
        if (viewStr === 'START_CONVERSATION') return '/start-a-conversation';
        return '/';
    }
  };

  const handleNavClick = (viewStr: string, systemId?: string) => {
    const path = resolvePath(viewStr, systemId);
    navigate(path);

    onNavigate(viewStr as View, systemId);

    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    clearCloseTimer();

    window.scrollTo(0, 0);
  };

  // ✅ UPDATED: Hover open/close with delay (desktop only)
  const handleMouseEnter = (label: string) => {
    if (window.innerWidth >= 1024) {
      clearCloseTimer();
      setActiveDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      scheduleClose();
    }
  };

  const toggleDropdown = (label: string) => {
    clearCloseTimer();
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        clearCloseTimer();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearCloseTimer();
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200"
      ref={dropdownRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer flex items-center gap-2"
            onClick={() => handleNavClick('HOME')}
          >
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-xl">V</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-secondary">
              Veye<span className="text-primary-500">Media</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => (item.children ? toggleDropdown(item.label) : handleNavClick(item.view as string))}
                    className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                      item.isCta
                        ? 'bg-secondary text-white hover:bg-secondary-hover shadow-lg shadow-secondary/20'
                        : currentView === item.view || (item.children && activeDropdown === item.label)
                        ? 'text-primary-600 bg-slate-50'
                        : 'text-slate-600 hover:text-secondary hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                    {item.children && <Icon name="ChevronDown" size={14} />}
                  </button>

                  {/* Desktop Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <>
                      {item.label === 'Systems' ? (
                        <div onMouseEnter={clearCloseTimer} onMouseLeave={handleMouseLeave}>
                          <MegaMenu
                            onNavigate={(view: View, systemId?: string) =>
                              handleNavClick(view as unknown as string, systemId)
                            }
                            onClose={() => {
                              setActiveDropdown(null);
                              clearCloseTimer();
                            }}
                          />
                        </div>
                      ) : (
                        <div
                          className="absolute left-0 mt-2 w-72 rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden border border-slate-100"
                          onMouseEnter={clearCloseTimer}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="max-h-[60vh] overflow-y-auto py-2">
                            {item.children.map((child: any) => (
                              <button
                                key={child.id}
                                onClick={() => {
                                  // ✅ Route to standalone pages for "What we build" when view is provided
                                  if (child.view) {
                                    handleNavClick(child.view);
                                  } else {
                                    handleNavClick(View.SYSTEM_DETAIL as unknown as string, child.id);
                                  }
                                  setActiveDropdown(null);
                                  clearCloseTimer();
                                }}
                                className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600 border-b border-slate-50 last:border-none font-medium"
                              >
                                {child.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-primary-600 hover:bg-slate-50 focus:outline-none"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => {
                    if (item.children) {
                      toggleDropdown(item.label);
                    } else {
                      handleNavClick(item.view as string);
                    }
                  }}
                  className={`flex w-full items-center justify-between text-left px-3 py-3 rounded-md text-base font-bold ${
                    item.isCta
                      ? 'bg-secondary text-white mt-4'
                      : currentView === item.view
                      ? 'text-primary-600 bg-slate-50'
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <Icon
                      name="ChevronDown"
                      size={16}
                      className={`transform transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {item.children && activeDropdown === item.label && (
                  <div className="pl-4 space-y-1 bg-slate-50/50 py-2 border-l-2 border-primary-100 ml-3 my-1">
                    {item.children.map((child: any) => (
                      <button
                        key={child.id}
                        onClick={() => {
                          if (child.view) {
                            handleNavClick(child.view);
                          } else {
                            handleNavClick(View.SYSTEM_DETAIL as unknown as string, child.id);
                          }
                        }}
                        className="block w-full text-left px-3 py-2 rounded-md text-sm text-slate-500 hover:text-primary-600 font-medium"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
