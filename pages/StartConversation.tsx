import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Activity,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Home as HomeIcon,
  Layers,
} from 'lucide-react';
import { Page } from '../types';

interface FormState {
  fullName: string;
  organization: string;
  email: string;

  // NEW (all required)
  position: string;            // role/position in company
  yearsInBusiness: string;     // years in business
  companySize: string;         // headcount bucket
  industry: string;            // industry bucket
  industryCode: string;        // NAICS/SIC/other text
  locationCity: string;
  locationRegion: string;      // state/region
  locationCountry: string;
  marketServed: string;        // local/regional/national/international

  operationalScale: string;
  growthBarrier: string;
  mandate: string;
}

interface FormErrors {
  fullName?: string;
  organization?: string;
  email?: string;

  // NEW
  position?: string;
  yearsInBusiness?: string;
  companySize?: string;
  industry?: string;
  industryCode?: string;
  locationCity?: string;
  locationRegion?: string;
  locationCountry?: string;
  marketServed?: string;

  operationalScale?: string;
  growthBarrier?: string;
  mandate?: string;
}

const POSITION_OPTIONS = [
  'Owner / Founder',
  'Executive (C-suite)',
  'Director / Manager',
  'Marketing Lead',
  'Operations Lead',
  'IT / Data',
  'Other',
];

const YEARS_OPTIONS = ['Pre-launch', '0–2 years', '3–5 years', '6–10 years', '10+ years'];

const COMPANY_SIZE_OPTIONS = ['Solo / Founder only', '2–10', '11–50', '51–200', '200+'];

const MARKET_SERVED_OPTIONS = ['Local', 'Regional', 'National', 'International'];

const INDUSTRY_OPTIONS = [
  'Professional Services',
  'Healthcare',
  'Construction',
  'Manufacturing',
  'E-commerce / Retail',
  'Technology / SaaS',
  'Media / Publishing',
  'Nonprofit',
  'Government / Public Sector',
  'Other',
];

export const StartConversation: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    organization: '',
    email: '',

    // NEW
    position: '',
    yearsInBusiness: '',
    companySize: '',
    industry: '',
    industryCode: '',
    locationCity: '',
    locationRegion: '',
    locationCountry: '',
    marketServed: '',

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

    // Existing
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    else if (formData.fullName.trim().length < 3) newErrors.fullName = 'Name must be at least 3 characters.';

    if (!formData.organization.trim()) newErrors.organization = 'Organization is required.';

    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Please provide a valid email address.';

    // NEW (all required)
    if (!formData.position) newErrors.position = 'Position is required.';
    if (!formData.yearsInBusiness) newErrors.yearsInBusiness = 'Years in business is required.';
    if (!formData.companySize) newErrors.companySize = 'Company size is required.';
    if (!formData.industry) newErrors.industry = 'Industry is required.';
    if (!formData.industryCode.trim()) newErrors.industryCode = 'Industry classification is required.';
    if (!formData.locationCity.trim()) newErrors.locationCity = 'City is required.';
    if (!formData.locationRegion.trim()) newErrors.locationRegion = 'State/Region is required.';
    if (!formData.locationCountry.trim()) newErrors.locationCountry = 'Country is required.';
    if (!formData.marketServed) newErrors.marketServed = 'Market served selection is required.';

    if (!formData.operationalScale) newErrors.operationalScale = 'Operational scale selection is required.';
    if (!formData.growthBarrier) newErrors.growthBarrier = 'Primary systemic barrier is required.';

    if (formData.mandate.trim().length < 30) {
      const remaining = 30 - formData.mandate.trim().length;
      newErrors.mandate = `Provide more context (add at least ${remaining} more characters).`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Existing
          fullName: formData.fullName,
          organization: formData.organization,
          email: formData.email,
          operationalScale: formData.operationalScale,
          growthBarrier: formData.growthBarrier,
          mandate: formData.mandate,

          // NEW
          position: formData.position,
          yearsInBusiness: formData.yearsInBusiness,
          companySize: formData.companySize,
          industry: formData.industry,
          industryCode: formData.industryCode,
          location: {
            city: formData.locationCity,
            region: formData.locationRegion,
            country: formData.locationCountry,
          },
          marketServed: formData.marketServed,

          source: 'StartConversation',
          page: window.location.pathname,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const message =
          data?.error || data?.message || `Submission failed (HTTP ${res.status}). Please try again.`;
        setErrors((prev) => ({ ...prev, mandate: message }));
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error('StartConversation submit error:', error);
      setIsSubmitting(false);
      setErrors((prev) => ({ ...prev, mandate: 'Network error. Please try again in a moment.' }));
    }
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
            We’ve received your information and will review it through a systems-first lens.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to={Page.Home}
              className="px-8 py-4 bg-veye-navy text-white rounded-full font-bold flex items-center justify-center gap-3 transition-all hover:bg-slate-800 shadow-lg shadow-veye-navy/20"
            >
              <HomeIcon size={18} /> Return to Home
            </Link>
            <Link
              to={Page.SystemsWeBuild}
              className="px-8 py-4 bg-white border border-slate-200 text-veye-navy rounded-full font-bold flex items-center justify-center gap-3 transition-all hover:border-veye-blue group"
            >
              <Layers size={18} className="text-veye-blue" /> Explore Systems We Build
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Helper for consistent select UI
  const Select = ({
    label,
    value,
    onChange,
    error,
    options,
    placeholder,
  }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    error?: string;
    options: string[];
    placeholder: string;
  }) => (
    <div className="space-y-3">
      <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
        {label}{' '}
        {error && (
          <span className="text-veye-amber flex items-center gap-1">
            <AlertCircle size={10} /> {error}
          </span>
        )}
      </label>
      <div className="relative">
        <select
          className={`w-full bg-white border ${error ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors font-bold appearance-none pr-12`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          size={20}
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 animate-in slide-in-from-bottom-4 duration-700 bg-white">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter text-veye-navy leading-tight italic">
            Start a <br /> <span className="text-veye-blue">Conversation</span>
          </h1>
          <p className="text-2xl font-bold italic text-veye-navy/80 mb-10">Qualifying for Systems-First Growth</p>
          <p className="text-xl text-slate-600 leading-relaxed mb-16 font-medium">
            This intake gives us a clear operational picture so we can respond with precision.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 flex items-center justify-center p-10 overflow-hidden shadow-inner">
            <div className="w-full h-full bg-veye-navy rounded-[3rem] shadow-2xl relative flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-veye-blue/20 to-transparent"></div>
              <div className="relative z-10 flex flex-col items-center">
                <MessageSquare className="text-white mb-6 animate-bounce" size={100} />
                <span className="text-xs font-extrabold uppercase tracking-widest text-veye-blue">Strategic Intake</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-[4rem] p-10 lg:p-20 shadow-inner max-w-5xl mx-auto">
        <form className="space-y-10" onSubmit={handleSubmit} noValidate>
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-3">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
                Full Name{' '}
                {errors.fullName && (
                  <span className="text-veye-amber flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.fullName}
                  </span>
                )}
              </label>
              <input
                type="text"
                className={`w-full bg-white border ${errors.fullName ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors font-bold`}
                placeholder="Full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
                Organization{' '}
                {errors.organization && (
                  <span className="text-veye-amber flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.organization}
                  </span>
                )}
              </label>
              <input
                type="text"
                className={`w-full bg-white border ${errors.organization ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors font-bold`}
                placeholder="Organization name"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-3">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
                Email{' '}
                {errors.email && (
                  <span className="text-veye-amber flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.email}
                  </span>
                )}
              </label>
              <input
                type="email"
                className={`w-full bg-white border ${errors.email ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors font-bold`}
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <Select
              label="Position in Company"
              value={formData.position}
              onChange={(v) => setFormData({ ...formData, position: v })}
              error={errors.position}
              options={POSITION_OPTIONS}
              placeholder="Select position..."
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Select
              label="Years in Business"
              value={formData.yearsInBusiness}
              onChange={(v) => setFormData({ ...formData, yearsInBusiness: v })}
              error={errors.yearsInBusiness}
              options={YEARS_OPTIONS}
              placeholder="Select years..."
            />

            <Select
              label="Company Size"
              value={formData.companySize}
              onChange={(v) => setFormData({ ...formData, companySize: v })}
              error={errors.companySize}
              options={COMPANY_SIZE_OPTIONS}
              placeholder="Select size..."
            />
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Select
              label="Industry"
              value={formData.industry}
              onChange={(v) => setFormData({ ...formData, industry: v })}
              error={errors.industry}
              options={INDUSTRY_OPTIONS}
              placeholder="Select industry..."
            />

            <div className="space-y-3">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
                Industry Classification (NAICS/SIC/Description){' '}
                {errors.industryCode && (
                  <span className="text-veye-amber flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.industryCode}
                  </span>
                )}
              </label>
              <input
                type="text"
                className={`w-full bg-white border ${errors.industryCode ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors font-bold`}
                placeholder="Example: 541613 or 'Construction services'"
                value={formData.industryCode}
                onChange={(e) => setFormData({ ...formData, industryCode: e.target.value })}
              />
            </div>
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-3">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
                City{' '}
                {errors.locationCity && (
                  <span className="text-veye-amber flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.locationCity}
                  </span>
                )}
              </label>
              <input
                type="text"
                className={`w-full bg-white border ${errors.locationCity ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors font-bold`}
                placeholder="City"
                value={formData.locationCity}
                onChange={(e) => setFormData({ ...formData, locationCity: e.target.value })}
              />
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
                State / Region{' '}
                {errors.locationRegion && (
                  <span className="text-veye-amber flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.locationRegion}
                  </span>
                )}
              </label>
              <input
                type="text"
                className={`w-full bg-white border ${errors.locationRegion ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors font-bold`}
                placeholder="State / Region"
                value={formData.locationRegion}
                onChange={(e) => setFormData({ ...formData, locationRegion: e.target.value })}
              />
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
                Country{' '}
                {errors.locationCountry && (
                  <span className="text-veye-amber flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.locationCountry}
                  </span>
                )}
              </label>
              <input
                type="text"
                className={`w-full bg-white border ${errors.locationCountry ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors font-bold`}
                placeholder="Country"
                value={formData.locationCountry}
                onChange={(e) => setFormData({ ...formData, locationCountry: e.target.value })}
              />
            </div>
          </div>

          {/* Market Served */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Select
              label="Market Served"
              value={formData.marketServed}
              onChange={(v) => setFormData({ ...formData, marketServed: v })}
              error={errors.marketServed}
              options={MARKET_SERVED_OPTIONS}
              placeholder="Select market served..."
            />

            <Select
              label="Operational Scale"
              value={formData.operationalScale}
              onChange={(v) => setFormData({ ...formData, operationalScale: v })}
              error={errors.operationalScale}
              options={['Emerging Enterprise', 'Growth-Phase Organization', 'Established Enterprise', 'Ministry / Non-Profit']}
              placeholder="Select scale..."
            />
          </div>

          {/* Primary Growth Barrier */}
          <div className="space-y-3 text-left">
            <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex justify-between">
              Primary Systemic Barrier{' '}
              {errors.growthBarrier && (
                <span className="text-veye-amber flex items-center gap-1">
                  <AlertCircle size={10} /> {errors.growthBarrier}
                </span>
              )}
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
              What prompted you to reach out now?{' '}
              {errors.mandate && (
                <span className="text-veye-amber flex items-center gap-1">
                  <AlertCircle size={10} /> {errors.mandate}
                </span>
              )}
            </label>
            <div className="relative">
              <textarea
                className={`w-full bg-white border ${errors.mandate ? 'border-veye-amber' : 'border-slate-100'} rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-veye-blue transition-colors h-48 font-bold resize-none`}
                placeholder="Briefly describe the challenge or opportunity you're addressing..."
                value={formData.mandate}
                onChange={(e) => setFormData({ ...formData, mandate: e.target.value })}
              ></textarea>
              <div
                className={`absolute bottom-4 right-4 text-[10px] font-bold uppercase tracking-widest ${
                  formData.mandate.length < 30 ? 'text-slate-400' : 'text-veye-blue'
                }`}
              >
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
                Processing...
              </>
            ) : (
              <>
                Submit Intake <ArrowRight size={28} />
              </>
            )}
          </button>

          <p className="text-center text-slate-400 text-[11px] font-extrabold uppercase tracking-widest italic">
            Durability | Orchestration | Veye Media
          </p>
        </form>
      </div>
    </div>
  );
};
