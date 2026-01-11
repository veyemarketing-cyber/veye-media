
import React, { useState } from 'react';
import { Icon } from '../components/Icon';

interface FormData {
  fullName: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  website: string;
  primaryGoal: string;
  breakdownPoints: string[];
  operatingModel: string;
  timeline: string;
  budgetRange: string;
  crmInUse: string;
  crmIntegration: string;
  dataReadiness: string;
  consent: boolean;
}

export const Audit: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    website: '',
    primaryGoal: '',
    breakdownPoints: [],
    operatingModel: '',
    timeline: '',
    budgetRange: '',
    crmInUse: '',
    crmIntegration: '',
    dataReadiness: '',
    consent: false,
  });

  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS'>('IDLE');
  const [tier, setTier] = useState<'PRIORITY' | 'STANDARD'>('STANDARD');

  const breakdownOptions = [
    "Coordination & alignment",
    "Discoverability (SEO/AEO)",
    "GEO/local visibility",
    "Paid campaigns",
    "Social engagement",
    "CRM intelligence",
    "Platform friction (website/ecommerce)",
    "Measurement & decision clarity"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name === 'consent') {
        setFormData(prev => ({ ...prev, consent: checkbox.checked }));
      } else {
        setFormData(prev => {
          const current = prev.breakdownPoints;
          if (checkbox.checked) {
            return { ...prev, breakdownPoints: [...current, value] };
          } else {
            return { ...prev, breakdownPoints: current.filter(item => item !== value) };
          }
        });
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  async function submitLead(payload: FormData) {
    console.log("Submitting lead payload to Veye Media Systems:", payload);
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent || !validateEmail(formData.email)) return;

    setStatus('SUBMITTING');

    const isPriority = 
      formData.timeline === '0–30 days' && 
      (formData.budgetRange === '$10,000+/mo' || formData.budgetRange === '$5,000–$10,000/mo' || formData.budgetRange === 'Undisclosed') && 
      formData.primaryGoal.length > 60;

    setTier(isPriority ? 'PRIORITY' : 'STANDARD');

    await submitLead(formData);
    setStatus('SUCCESS');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (status === 'SUCCESS') {
    return (
      <div className="animate-fade-in bg-white min-h-screen pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-[3rem] p-12 text-center shadow-2xl">
          <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-xl shadow-primary-500/20">
            <Icon name="Check" size={40} />
          </div>
          <h2 className="text-4xl font-black text-secondary tracking-tighter mb-4">Transmission Received.</h2>
          <p className="text-xl text-slate-600 mb-8 font-medium">
            Thank you. We’ve received your request. If there’s a fit, you’ll receive a next-step response.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl text-secondary font-bold mb-12">
            <Icon name="Cpu" size={20} className="text-primary-500" />
            <span>
              {tier === 'PRIORITY' 
                ? "We’ll respond within 1 business day." 
                : "We’ll respond within 2–3 business days."}
            </span>
          </div>

          <div className="text-left border-t border-slate-200 pt-10 mt-10">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Submission Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-500">
              <p><strong>Identity:</strong> {formData.fullName} ({formData.company})</p>
              <p><strong>Timeline:</strong> {formData.timeline}</p>
              <p><strong>Focus:</strong> {formData.breakdownPoints.join(', ')}</p>
              <p><strong>Operating Model:</strong> {formData.operatingModel}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h1 className="text-5xl md:text-7xl font-black text-secondary tracking-tighter mb-6 leading-[0.95]">
                  Start a <br/><span className="text-primary-500">System Audit</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-8 leading-snug">
                  A strategic intake for leaders building durable growth systems.
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  We don’t sell services. We build and maintain intelligent systems that govern growth across digital surfaces. Our intake process is designed to evaluate architectural readiness and strategic alignment.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Systems-first engagement",
                  "Outcome-driven architecture",
                  "Built for durable capability",
                  "CRM-aligned intelligence"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-secondary font-bold">
                    <div className="w-8 h-8 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center text-primary-500">
                      <Icon name="CheckCircle" size={18} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Veye Media Growth Hero" 
                  className="w-full h-auto rounded-2xl mb-6 object-cover aspect-[4/3]"
                />
                <p className="text-sm text-slate-400 italic font-medium leading-relaxed">
                  “We review every submission. If there’s a fit, you’ll receive a next-step response.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-3xl shadow-slate-200/50 relative">
                <form onSubmit={handleSubmit} className="space-y-12">
                  
                  <div className="space-y-8">
                    <h3 className="text-xs font-bold text-primary-500 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-6 h-[2px] bg-primary-500"></span> 01. Identity
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name *</label>
                        <input required name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company *</label>
                        <input required name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Role/Title</label>
                        <input name="role" value={formData.role} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h3 className="text-xs font-bold text-primary-500 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-6 h-[2px] bg-primary-500"></span> 02. Goals & Context
                    </h3>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Primary goal in the next 90 days? *</label>
                      <textarea required name="primaryGoal" value={formData.primaryGoal} onChange={handleInputChange} rows={3} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Where execution breaks down today? (Select all) *</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {breakdownOptions.map((option) => (
                          <label key={option} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl cursor-pointer hover:border-primary-200 transition-colors">
                            <input type="checkbox" name="breakdownPoints" value={option} onChange={handleInputChange} className="w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                            <span className="text-sm font-bold text-secondary">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-10 border-t border-slate-100">
                    <label className="flex items-start gap-4 cursor-pointer">
                      <input required type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} className="mt-1 w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                      <span className="text-sm text-slate-500 leading-relaxed font-medium">
                        I agree Veye Media may contact me about this request. *
                      </span>
                    </label>

                    <button 
                      type="submit" 
                      disabled={status === 'SUBMITTING'}
                      className="w-full mt-10 bg-secondary text-white font-extrabold text-xl py-6 rounded-2xl hover:bg-secondary-hover transition-all shadow-2xl shadow-secondary/20 flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {status === 'SUBMITTING' ? (
                        <Icon name="Loader2" className="animate-spin" />
                      ) : (
                        <>Submit & Request a Strategic Response <Icon name="ArrowRight" size={24} /></>
                      )}
                    </button>
                  </div>

                </form>
              </div>

              <div className="mt-16 text-center">
                 <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="Systems Intelligence Visualization" 
                  className="w-full h-auto rounded-[3rem] shadow-2xl border border-slate-100 object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
