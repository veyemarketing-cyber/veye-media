
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, MessageSquare, CheckCircle, AlertCircle, ChevronDown, Home as HomeIcon, Layers } from 'lucide-react';
import { Page } from '../types';

interface FormState {
  fullName: string;
  organization: string;
  email: string;
  operationalScale: string;
  growthBarrier: string;
  mandate: string;
}

interface FormErrors {
  fullName?: string;
  organization?: string;
  email?: string;
  operationalScale?: string;
  growthBarrier?: string;
  mandate?: string;
}

export const StartConversation: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    organization: '',
    email: '',
    operationalScale: '',
    growthBarrier: '',
    mandate: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Executive name is required.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters.';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization identity is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Strategic email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid strategic email address.';
    }

    if (!formData.operationalScale) {
      newErrors.operationalScale = 'Operational scale selection is required.';
    }

    if (!formData.growthBarrier) {
      newErrors.growthBarrier = 'Selection of primary systemic barrier is required.';
    }

    if (formData.mandate.trim().length < 30) {
      const remaining = 30 - formData.mandate.trim().length;
      newErrors.mandate = `Provide more strategic context (add at least ${remaining} more characters).`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate system orchestration and data processing
    await new Promise((resolve) => setTimeout(resolve, 1800));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in fade-in zoom-in duration-700 bg-white min-h-[70vh] flex items-center justify-center">
        <div className="max-w-3xl bg-slate-50 p-10 lg:p-20 rounded-[4rem] border border-slate-100 shadow-inner text-left">
          <div className="w-16 h-16 bg-veye-blue/10 text-veye-blue rounded-2xl flex items-center justify-center mb-10">
            <CheckCircle size={32} />
          </div>
          
          <h1 className="text-4xl font-extrabold text-veye-navy mb-8 tracking-tight">
            Thanks — your conversation request is confirmed.
          </h1>
          
          <p className="text-xl text-slate-700 mb-10 font-medium leading-relaxed">
            We’ve received your information and will review it through a systems-first lens. Our next step is to confirm fit and identify the highest-leverage path forward — not to push a pre-packaged service.
          </p>

          <div className="space-y-8 mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-veye-amber">What happens next</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-veye-blue rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-600 font-medium">We review your responses to understand your current growth environment and desired outcomes.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-veye-blue rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-600 font-medium">We follow up within 1 business day to schedule a short strategic conversation (typically 15–30 minutes).</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-veye-blue rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-600 font-medium">If it’s a fit, we’ll outline the right system approach, the surfaces it will coordinate, and what a phased engagement could look like.</p>
              </li>
            </ul>
          </div>

          <p className="text-sm text-slate-400 font-bold italic mb-12 py-6 border-y border-slate-200/60">
            “We don’t ask for tools, workflows, or internal implementation details in this step. This is about outcomes, alignment, and building the right system.”
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link to={Page.Home} className="px-8 py-4 bg-veye-navy text-white rounded-full font-bold flex items-center justify-center gap-3 transition-all hover:bg-slate-800 shadow-lg shadow-veye-navy/20">
              <HomeIcon size={18} /> Return to Home
            </Link>
            <Link to={Page.SystemsWeBuild} className="px-8 py-4 bg-white border border-slate-200 text-veye-navy rounded-full font-bold flex items-center justify-center gap-3 transition-all hover:border-veye-blue group">
              <Layers size={18} className="text-veye-blue" /> Explore Systems We Build
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 animate-in slide-in-from-bottom-4 duration-700 bg-white">
      {/* Header with Side Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter text-veye-navy leading-tight italic">
            Start a <br /> <span className="text-veye-blue">Conversation</span>
          </h1>
          <p className="text-2xl font-bold italic text-veye-navy/80 mb-10">
            Qualifying for Systems-First Growth
          </p>
          <p className="text-xl text-slate-600 leading-relaxed mb-16 font-medium">
            Acquiring an intelligent growth system begins with a rigorous discovery process. We seek to understand the systemic barriers to your organization's continuity and the strategic mandate you aim to fulfill.
          </p>
          
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="w-14 h-14 bg-veye-blue/10 text-veye-blue rounded-2xl flex items-center justify-center shrink-0">
                <Activity size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-veye-navy italic">Systems Discovery</h3>
                <p className="text-slate-600 font-medium">Our dialogue is focused on identifying high-fidelity automation opportunities rather than transient campaign tactics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Visual Element */}
        <div className="relative">
          <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 flex items-center justify-center p-10 overflow-hidden shadow-inner">
            <div className="w-full h-full bg-veye-navy rounded-[3rem] shadow-2xl relative flex items-center justify-center group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-bl from-veye-blue/20 to-transparent"></div>
               <div className="relative z-10 flex flex-col items-center">
                 <MessageSquare className="text-white mb-6 animate-bounce" size={100} />
                 <span className="text-xs font-extrabold uppercase tracking-widest text-veye-blue">Strategic Discovery</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-[4rem] p-10 lg:p-20 shadow-inner max-w-5xl mx-auto">
        <form className="space-y-10" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Full Name */}
            <div className="space-y-3">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
                Full Name {errors.fullName && <span className="text-veye-amber flex items-center gap-1"><AlertCircle size={10} /> {errors.fullName}</span>}
              </label>
              <input 
                type="text" 
                className={`w-full bg-white border ${errors.fullName ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors font-bold`} 
                placeholder="Executive Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
            {/* Organization */}
            <div className="space-y-3">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
                Organization {errors.organization && <span className="text-veye-amber flex items-center gap-1"><AlertCircle size={10} /> {errors.organization}</span>}
              </label>
              <input 
                type="text" 
                className={`w-full bg-white border ${errors.organization ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors font-bold`} 
                placeholder="Organization Name"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Strategic Email */}
            <div className="space-y-3">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
                Strategic Email {errors.email && <span className="text-veye-amber flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</span>}
              </label>
              <input 
                type="email" 
                className={`w-full bg-white border ${errors.email ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors font-bold`} 
                placeholder="exec@organization.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            {/* Operational Scale */}
            <div className="space-y-3">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
                Operational Scale {errors.operationalScale && <span className="text-veye-amber flex items-center gap-1"><AlertCircle size={10} /> {errors.operationalScale}</span>}
              </label>
              <div className="relative">
                <select 
                  className={`w-full bg-white border ${errors.operationalScale ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors font-bold appearance-none pr-12`}
                  value={formData.operationalScale}
                  onChange={(e) => setFormData({ ...formData, operationalScale: e.target.value })}
                >
                  <option value="">Select Scale...</option>
                  <option value="emerging">Emerging Enterprise</option>
                  <option value="growth">Growth-Phase Organization</option>
                  <option value="enterprise">Established Enterprise</option>
                  <option value="ministry">Ministry / Non-Profit</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
              </div>
            </div>
          </div>

          {/* Primary Growth Barrier */}
          <div className="space-y-3 text-left">
            <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
              Primary Systemic Barrier {errors.growthBarrier && <span className="text-veye-amber flex items-center gap-1"><AlertCircle size={10} /> {errors.growthBarrier}</span>}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Fragmented Execution', 'Operational Drag', 'Lack of Continuity'].map((barrier) => (
                <button
                  key={barrier}
                  type="button"
                  onClick={() => setFormData({ ...formData, growthBarrier: barrier })}
                  className={`px-6 py-4 rounded-2xl border text-sm font-bold transition-all ${
                    formData.growthBarrier === barrier 
                      ? 'bg-veye-navy text-white border-veye-navy shadow-lg scale-[1.02]' 
                      : 'bg-white text-slate-500 border-slate-100 hover:border-veye-blue'
                  }`}
                >
                  {barrier}
                </button>
              ))}
            </div>
          </div>

          {/* Strategic Mandate */}
          <div className="space-y-3 text-left">
            <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
              Strategic Mandate (Required Outcome) {errors.mandate && <span className="text-veye-amber flex items-center gap-1"><AlertCircle size={10} /> {errors.mandate}</span>}
            </label>
            <div className="relative">
              <textarea 
                className={`w-full bg-white border ${errors.mandate ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors h-48 font-bold resize-none`} 
                placeholder="Define the growth outcomes your organization demands. We move beyond tactics toward durable systemic health..."
                value={formData.mandate}
                onChange={(e) => setFormData({ ...formData, mandate: e.target.value })}
              ></textarea>
              <div className={`absolute bottom-4 right-4 text-[10px] font-bold uppercase tracking-widest ${formData.mandate.length < 30 ? 'text-slate-400' : 'text-veye-blue'}`}>
                {formData.mandate.length} / 30+ chars
              </div>
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-6 bg-veye-navy hover:bg-slate-800 text-white rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-2xl shadow-veye-navy/30 text-xl italic uppercase tracking-tighter disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Activity className="animate-pulse" size={28} />
                Processing Growth Signals...
              </>
            ) : (
              <>
                Initiate Discovery Dialogue <ArrowRight size={28} />
              </>
            )}
          </button>
          <p className="text-center text-slate-400 text-[11px] font-extrabold uppercase tracking-widest italic">Durability | Orchestration | Veye Media</p>
        </form>
      </div>
    </div>
  );
};
