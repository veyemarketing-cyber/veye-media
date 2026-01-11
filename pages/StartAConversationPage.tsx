import React, { useState } from 'react';
import { Icon } from '../components/Icon';

/**
 * REMOTE PLACEHOLDER IMAGES
 * Using safe remote URLs to avoid project build failures.
 */
const heroImage = "https://placehold.co/1200x800/00205b/ffffff?text=Start+Hero";
const secondaryImage = "https://placehold.co/1200x800/008dd3/ffffff?text=Start+Secondary";

interface StartAConversationPageProps {}

export const StartAConversationPage: React.FC<StartAConversationPageProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    website: '',
    primaryGoal: '',
    breakdown: [] as string[],
    operatingModel: '',
    timeline: '',
    budget: '',
    crm: '',
    crmIntegrated: '',
    consent: false,
  });

  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [tier, setTier] = useState<'PRIORITY' | 'STANDARD'>('STANDARD');

  const breakdownOptions = [
    'Coordination & alignment',
    'Discoverability (SEO/AEO)',
    'GEO/local visibility',
    'Paid campaigns',
    'Social engagement',
    'CRM intelligence',
    'Platform friction',
    'Measurement & decision clarity',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;

      if (name === 'consent') {
        setFormData((prev) => ({ ...prev, consent: target.checked }));
        return;
      }

      if (name === 'breakdown') {
        setFormData((prev) => {
          const current = prev.breakdown;
          if (target.checked) return { ...prev, breakdown: [...current, value] };
          return { ...prev, breakdown: current.filter((v) => v !== value) };
        });
        return;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const { fullName, company, email, primaryGoal, breakdown, operatingModel, timeline, consent } = formData;

    if (
      !fullName ||
      !company ||
      !email ||
      !primaryGoal ||
      breakdown.length === 0 ||
      !operatingModel ||
      !timeline ||
      !consent
    ) return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  async function submitLead(payload: any) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.error || 'Submission failed');
    return data;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validate()) {
      setErrorMessage('Please complete all required fields and accept the contact consent.');
      setStatus('ERROR');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setStatus('SUBMITTING');

    // Automation / routing logic
    const isPriority =
      formData.timeline === '0–30 days' &&
      (formData.budget === '$5,000–$10,000/mo' ||
        formData.budget === '$10,000+/mo' ||
        formData.budget === 'Undisclosed') &&
      formData.primaryGoal.length > 60;

    const nextTier: 'PRIORITY' | 'STANDARD' = isPriority ? 'PRIORITY' : 'STANDARD';
    setTier(nextTier);

    try {
      // Send full payload + tier so the email contains the routing context
      await submitLead({ ...formData, tier: nextTier });

      setStatus('SUCCESS');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setErrorMessage(err?.message || 'Something went wrong. Please try again.');
      setStatus('ERROR');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (status === 'SUCCESS') {
    return (
      <div className="min-h-screen bg-white pt-40 pb-20 px-4 animate-fade-in">
        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-[3rem] p-12 text-center shadow-2xl">
          <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-8 text-white">
            <Icon name="Check" size={40} />
          </div>
          <h2 className="text-4xl font-black text-secondary tracking-tighter mb-4">Transmission Received.</h2>
          <p className="text-xl text-slate-600 mb-8 font-medium">
            Thank you. We’ve received your request. If there’s a fit, you’ll receive a next-step response.
          </p>
          <div className="inline-block px-8 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm mb-10">
            <p className="text-secondary font-bold flex items-center gap-3">
              <Icon name="Cpu" size={20} className="text-primary-500" />
              {tier === 'PRIORITY'
                ? 'High Priority Context Detected: We’ll respond within 1 business day.'
                : 'Strategic Review Initiated: We’ll respond within 2–3 business days.'}
            </p>
          </div>

          <div className="text-left border-t border-slate-200 pt-10 mt-10">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Submission Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-sm">
              <p><span className="text-slate-400 font-bold uppercase mr-2">Lead:</span> <span className="text-secondary font-medium">{formData.fullName}</span></p>
              <p><span className="text-slate-400 font-bold uppercase mr-2">Company:</span> <span className="text-secondary font-medium">{formData.company}</span></p>
              <p><span className="text-slate-400 font-bold uppercase mr-2">Timeline:</span> <span className="text-secondary font-medium">{formData.timeline}</span></p>
              <p><span className="text-slate-400 font-bold uppercase mr-2">Operating:</span> <span className="text-secondary font-medium">{formData.operatingModel}</span></p>
              <p className="md:col-span-2"><span className="text-slate-400 font-bold uppercase mr-2">Systems Goal:</span> <span className="text-slate-600 italic font-medium">{formData.primaryGoal}</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 lg:pt-48 pb-24 lg:pb-32 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT COLUMN: Narrative & Credibility */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl lg:text-7xl font-black text-secondary tracking-tighter leading-[0.95] mb-6">
                Start a <br /><span className="text-primary-500">Conversation</span>
              </h1>
              <h2 className="text-xl lg:text-2xl font-bold text-slate-700 leading-snug max-w-lg mb-8">
                A strategic intake for leaders building durable growth systems.
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                We don’t sell services. We build and maintain intelligent systems that govern growth across digital surfaces—so intent translates into coordinated impact.
              </p>
            </div>

            {/* ✅ Error banner */}
            {status === 'ERROR' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                <p className="text-sm font-bold text-red-700">Submission failed</p>
                <p className="text-sm text-red-600 mt-1">{errorMessage}</p>
              </div>
            )}

            <div className="space-y-6">
              {[
                'Systems-first engagement',
                'Outcome-driven architecture',
                'Built for durable capability',
                'CRM-aligned intelligence',
              ].map((point) => (
                <div key={point} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary-500 border border-slate-100 shadow-sm transition-colors group-hover:bg-primary-500 group-hover:text-white">
                    <Icon name="Check" size={18} />
                  </div>
                  <span className="text-secondary font-bold text-lg">{point}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-50 border-l-4 border-primary-500 rounded-r-2xl">
              <p className="text-sm text-slate-600 italic font-medium">
                “We review every submission carefully then we'll receive a next-step response.”
              </p>
            </div>

            <div className="rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl group">
              <img
                src={heroImage}
                alt="Strategic Leadership Visualization"
                className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Qualification Form */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-white border border-slate-100 shadow-3xl rounded-[3rem] p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-10">

                {/* Section 01: Identity */}
                <div className="space-y-6">
                  <h3 className="text-xs font-bold text-primary-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-primary-500"></span> 01. Identity
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name *</label>
                      <input required name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="E.g. Marcus Aurelius" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company *</label>
                      <input required name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Company Name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Role/Title</label>
                      <input name="role" value={formData.role} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="E.g. CEO, Director" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="name@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="(555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Website</label>
                      <input type="url" name="website" value={formData.website} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="https://" />
                    </div>
                  </div>
                </div>

                {/* Section 02: Goals & Context */}
                <div className="space-y-6">
                  <h3 className="text-xs font-bold text-primary-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-primary-500"></span> 02. Goals & Context
                  </h3>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Primary goal in the next 90 days? *</label>
                    <textarea required name="primaryGoal" value={formData.primaryGoal} onChange={handleInputChange} rows={3} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none" placeholder="Describe the outcome you are orchestrating..." />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Where execution breaks down today? *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {breakdownOptions.map((opt) => (
                        <label key={opt} className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${formData.breakdown.includes(opt) ? 'bg-primary-50 border-primary-200' : 'bg-slate-50 border-slate-100 hover:bg-slate-100'}`}>
                          <input type="checkbox" name="breakdown" value={opt} onChange={handleInputChange} checked={formData.breakdown.includes(opt)} className="w-4 h-4 rounded text-primary-500 focus:ring-primary-500" />
                          <span className="text-xs font-bold text-secondary">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Current operating model? *</label>
                    <select required name="operatingModel" value={formData.operatingModel} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-bold outline-none cursor-pointer">
                      <option value="">Select Option</option>
                      <option value="Internal team">Internal team</option>
                      <option value="Agency">Agency</option>
                      <option value="Mixed">Mixed</option>
                      <option value="Building from scratch">Building from scratch</option>
                    </select>
                  </div>
                </div>

                {/* Section 03: Constraints */}
                <div className="space-y-6">
                  <h3 className="text-xs font-bold text-primary-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-primary-500"></span> 03. Constraints
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Timeline *</label>
                      <select required name="timeline" value={formData.timeline} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-bold cursor-pointer">
                        <option value="">Select Timeline</option>
                        <option value="0–30 days">0–30 days</option>
                        <option value="31–60 days">31–60 days</option>
                        <option value="61–90 days">61–90 days</option>
                        <option value="90+ days">90+ days</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monthly Budget range</label>
                      <select name="budget" value={formData.budget} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-bold cursor-pointer">
                        <option value="">Select Range</option>
                        <option value="Undisclosed">Undisclosed</option>
                        <option value="< $2,500/mo">&lt; $2,500/mo</option>
                        <option value="$2,500–$5,000/mo">$2,500–$5,000/mo</option>
                        <option value="$5,000–$10,000/mo">$5,000–$10,000/mo</option>
                        <option value="$10,000+/mo">$10,000+/mo</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 04: Systems & Data */}
                <div className="space-y-6">
                  <h3 className="text-xs font-bold text-primary-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-primary-500"></span> 04. Systems & Data
                  </h3>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CRM in use</label>
                    <input name="crm" value={formData.crm} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-secondary font-medium" placeholder="E.g. HubSpot, Salesforce, etc." />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Do you want CRM integrated? *</label>
                    <div className="flex gap-6">
                      {['Yes', 'No', 'Not sure'].map((v) => (
                        <label key={v} className="flex items-center gap-2 cursor-pointer group">
                          <input required type="radio" name="crmIntegrated" value={v} checked={formData.crmIntegrated === v} onChange={handleInputChange} className="w-4 h-4 text-primary-500 focus:ring-primary-500 cursor-pointer" />
                          <span className={`text-xs font-bold transition-colors ${formData.crmIntegrated === v ? 'text-primary-600' : 'text-slate-500 group-hover:text-secondary'}`}>{v}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section E: Consent & Submit */}
                <div className="pt-6 border-t border-slate-100">
                  <label className="flex items-start gap-3 cursor-pointer mb-8 group">
                    <input required type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} className="mt-1 w-5 h-5 rounded border-slate-300 text-primary-500 focus:ring-primary-500 cursor-pointer" />
                    <span className="text-xs text-slate-500 font-medium leading-relaxed group-hover:text-secondary transition-colors">
                      I agree Veye Media may contact me about this request and store my information for system alignment analysis. *
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={status === 'SUBMITTING'}
                    className="w-full py-6 rounded-2xl bg-secondary text-white font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl shadow-secondary/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {status === 'SUBMITTING' ? (
                      <>
                        <Icon name="Loader2" className="animate-spin" />
                        Initialising Sync...
                      </>
                    ) : (
                      <>Submit & Request a Strategic Response <Icon name="ArrowRight" size={24} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-12 rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl group">
              <img
                src={secondaryImage}
                alt="Intelligent Infrastructure Visualization"
                className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
