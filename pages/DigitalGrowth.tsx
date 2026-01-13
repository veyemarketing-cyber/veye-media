
import React from 'react';
import { Database, LineChart, PieChart, ShieldAlert, BarChart3, Binary, Zap, Settings } from 'lucide-react';

const ServiceSection = ({ title, icon, items }: { title: string, icon: React.ReactNode, items: string[] }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-2xl h-full shadow-sm">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 bg-veye-blue/10 text-veye-blue rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-veye-navy">{title}</h3>
    </div>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-slate-600 text-sm hover:text-veye-blue transition-colors cursor-default text-left">
          <Zap size={14} className="text-veye-amber" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const DigitalGrowth: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in slide-in-from-right-4 duration-500">
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl font-extrabold mb-8 text-veye-navy">Digital Growth & <span className="text-veye-blue">Analytics</span></h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Intelligence-driven growth. We leverage predictive modeling and high-fidelity data strategy to optimize every dollar of your media investment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <ServiceSection 
          title="Data Strategy & Analytics" 
          icon={<LineChart />}
          items={[
            "AI-Powered Marketing Solutions",
            "Predictive Analytics",
            "Attribution Modeling",
            "Customer Lifetime Value (CLV) Modeling & Optimization",
            "Custom Data Analysis Projects"
          ]}
        />
        <ServiceSection 
          title="Data Management" 
          icon={<Database />}
          items={[
            "Marketing Data Collection",
            "Data Integration and Management",
            "Data Cleaning and Transformation",
            "Data Ethics & Governance Consulting"
          ]}
        />
        <ServiceSection 
          title="Reporting & BI" 
          icon={<BarChart3 />}
          items={[
            "Performance Dashboards & Reporting",
            "Real-time ROI Tracking",
            "Predictive Performance Forecasting",
            "Cross-channel Synthesis"
          ]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-50 p-12 rounded-3xl border border-slate-100 text-left">
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-veye-blue/10 border border-veye-blue/20 text-veye-blue text-xs font-semibold uppercase tracking-wider mb-6">
             Advanced Modeling
           </div>
           <h2 className="text-3xl font-bold mb-6 text-veye-navy">Predictive CLV Optimization</h2>
           <p className="text-slate-600 leading-relaxed mb-8">
             Most firms look at CPA (Cost Per Acquisition). Our systems optimize for CLV (Customer Lifetime Value). By identifying the high-value segments before they fully mature, our Analytics & Decision agents can front-load growth opportunities that competitors miss.
           </p>
           <div className="flex gap-4">
              <div className="p-4 bg-white border border-slate-100 rounded-lg text-center flex-1 shadow-sm">
                <span className="block text-2xl font-bold text-veye-blue">42%</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">Efficiency Gain</span>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-lg text-center flex-1 shadow-sm">
                <span className="block text-2xl font-bold text-veye-blue">8X</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">Data Resolution</span>
              </div>
           </div>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-veye-navy border border-slate-200 p-8 flex items-center justify-center">
            <div className="flex flex-col gap-4 w-full">
              {[80, 45, 90, 60].map((h, i) => (
                <div key={i} className="w-full bg-slate-800 h-8 rounded-full relative overflow-hidden">
                  <div className={`absolute left-0 top-0 h-full bg-veye-blue rounded-full transition-all duration-1000`} style={{ width: `${h}%` }}></div>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-veye-navy/80 to-transparent flex items-end p-6">
               <div className="flex items-center gap-2 text-veye-blue font-mono text-xs">
                 <Binary size={14} />
                 LIVE SYSTEM FEED: ANALYTICS_V4.0
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};
