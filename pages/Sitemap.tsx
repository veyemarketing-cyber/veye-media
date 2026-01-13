import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';
import { NAVIGATION } from '../constants';

export const Sitemap: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in fade-in duration-700 text-left bg-white">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-veye-navy mb-12 tracking-tight italic">Sitemap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <h2 className="text-xl font-bold text-veye-blue uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Main Navigation</h2>
          <ul className="space-y-4">
            {NAVIGATION.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-lg text-slate-700 hover:text-veye-blue font-medium transition-colors">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-6 mt-4 space-y-2 border-l-2 border-slate-50">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link to={child.path} className="text-slate-500 hover:text-veye-blue pl-4 text-sm font-medium transition-colors">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-veye-blue uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Policies & Governance</h2>
          <ul className="space-y-4">
            <li><Link to={Page.PrivacyPolicy} className="text-lg text-slate-700 hover:text-veye-blue font-medium transition-colors">Privacy Policy</Link></li>
            <li><Link to={Page.TermsOfUse} className="text-lg text-slate-700 hover:text-veye-blue font-medium transition-colors">Terms of Use</Link></li>
            <li><Link to={Page.DataGovernance} className="text-lg text-slate-700 hover:text-veye-blue font-medium transition-colors">Data Use & Governance</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
