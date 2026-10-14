import React, { useState } from 'react';
import { View } from '../types';
import { Icon } from '../components/Icon';
import { EditableText } from '../components/EditableText';

interface ContactProps {
  onNavigate: (view: View, systemId?: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    phone: '',
    jobTitle: '',
    organizationName: '',
    organizationType: '',
    organizationWebsite: '',
    organizationSize: '',
    businessObjective: '',
    primaryChallengeText: '',
    selectedChallenges: [] as string[],
    involvedAreas: [] as string[],
    currentSystems: '',
    aiUsageToday: '',
    initiativePriority: '',
    decisionRole: '',
    additionalInformation: ''
  });

  const organizationTypes = [
    'Business / Corporation',
    'Small or Mid-Sized Business',
    'Government Agency',
    'Government Contractor',
    'Nonprofit Organization',
    'Higher Education',
    'Healthcare Organization',
    'Professional Services Firm',
    'Startup / Emerging Company',
    'Other'
  ];

  const organizationSizes = [
    '1–10 employees',
    '11–50 employees',
    '51–200 employees',
    '201–500 employees',
    '501–1,000 employees',
    'More than 1,000 employees'
  ];

  const challengeOptions = [
    'Disconnected systems or data silos',
    'Manual or labor-intensive processes',
    'Slow decision-making and latency',
    'Limited visibility across business functions',
    'Inconsistent workflows or execution',
    'Difficulty acting quickly on market or customer signals',
    'Lack of integration between enterprise tools',
    'Uncertainty about where AI should create value',
    'AI tools operating without sufficient governance',
    'Operational scaling bottlenecks',
    'Other operational or strategic constraint'
  ];

  const areaOptions = [
    'Executive Leadership / Strategy',
    'Business Development',
    'Sales',
    'Marketing',
    'Customer Experience / Customer Success',
    'Operations',
    'Finance',
    'Human Resources / Workforce',
    'Information Technology',
    'Data / Analytics',
    'Compliance / Governance',
    'Other'
  ];

  const aiUsageOptions = [
    'We are exploring AI but have not implemented it.',
    'Individual employees are using AI tools.',
    'Several departments are experimenting with AI.',
    'We have AI-enabled workflows or automations.',
    'We are deploying AI agents.',
    'AI is already integrated into important business processes.',
    'We are unsure how extensively AI is currently being used.',
    'AI is not currently part of this initiative.'
  ];

  const priorityOptions = [
    'Immediate — this requires attention now',
    'High — we expect to act within 30–90 days',
    'Planned — we are preparing for implementation',
    'Exploratory — we are evaluating possibilities',
    'Strategic — we are determining our longer-term direction'
  ];

  const decisionRoles = [
    'I am the primary decision-maker.',
    'I am part of the decision-making team.',
    'I am evaluating options for leadership.',
    'I am responsible for implementation.',
    'I am researching the issue before involving leadership.',
    'Other'
  ];

  const handleChallengeToggle = (challenge: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedChallenges: prev.selectedChallenges.includes(challenge)
        ? prev.selectedChallenges.filter((item) => item !== challenge)
        : [...prev.selectedChallenges, challenge]
    }));
  };

  const handleAreaToggle = (area: string) => {
    setFormData((prev) => ({
      ...prev,
      involvedAreas: prev.involvedAreas.includes(area)
        ? prev.involvedAreas.filter((item) => item !== area)
        : [...prev.involvedAreas, area]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          fullName: `${formData.firstName} ${formData.lastName}`.trim(),
          organization: formData.organizationName,
          email: formData.businessEmail,
          operationalScale: formData.organizationSize,
          growthBarrier: formData.primaryChallengeText || formData.selectedChallenges.join(', '),
          mandate: formData.businessObjective,
          source: 'website-intake',
          page: window.location.pathname,
        })
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error('Intake delivery failed');

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an issue submitting your intake. Please contact info@veyemedia.co directly.');
    } finally {
      setSubmitting(false);
    }
  };

  // Dedicated Clean Confirmation View
  if (submitted) {
    return (
      <div className="min-h-[85vh] flex flex-col justify-start items-center bg-white text-secondary selection:bg-primary-100 selection:text-primary-900 font-sans pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
          
          <div className="w-20 h-20 bg-primary-50 text-primary-600 rounded-3xl flex items-center justify-center mx-auto shadow-sm border border-primary-100/80">
            <Icon name="ShieldCheck" size={44} />
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary-600">
              Engagement Confirmed
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-secondary tracking-tight">
              Business Intake Received
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto leading-relaxed pt-2">
              Thank you for providing your organization's context. A confirmation receipt has been delivered to your business email.
            </p>
          </div>

          {/* Standalone Reassurance Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 shadow-sm">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-primary-600">
              Next Step: The Understanding Session
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Our architectural team is reviewing your objectives. If there is an operational fit, we will contact you directly to coordinate a structured conversation focused purely on your systems, data, and business constraints.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate(View.HOME)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-sm hover:bg-secondary-hover transition-all shadow-md"
            >
              Return to Home
            </button>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  firstName: '',
                  lastName: '',
                  businessEmail: '',
                  phone: '',
                  jobTitle: '',
                  organizationName: '',
                  organizationType: '',
                  organizationWebsite: '',
                  organizationSize: '',
                  businessObjective: '',
                  primaryChallengeText: '',
                  selectedChallenges: [],
                  involvedAreas: [],
                  currentSystems: '',
                  aiUsageToday: '',
                  initiativePriority: '',
                  decisionRole: '',
                  additionalInformation: ''
                });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all"
            >
              Submit Another Objective
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Active Intake View
  return (
    <div className="animate-fade-in bg-white text-secondary selection:bg-primary-100 selection:text-primary-900 font-sans min-h-screen">
      
      {/* 1. Header & Context */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-slate-700 mb-6 border border-slate-200 shadow-sm">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary-600">
              Start With the Business Objective
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-secondary tracking-tight mb-6 leading-tight">
            Tell Us What Your Organization Is Trying to Accomplish
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Veye Media begins every potential engagement by understanding the business—not by recommending technology.
          </p>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 text-left text-sm text-slate-600 space-y-3 shadow-sm">
            <p>
              This intake form helps us understand your organization, the objective you are pursuing, the challenges affecting that objective, and the systems, processes, data, or decisions involved.
            </p>
            <p className="font-semibold text-secondary">
              You do not need to know what AI solution you need. You do not need to determine whether the answer is AI, automation, integration, process redesign, or a new enterprise architecture.
            </p>
            <p className="text-primary-600 font-medium pt-1 border-t border-slate-100">
              That is part of what we help determine. Tell us what the business needs to accomplish. We will start there.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Process & Understanding Session Explainer */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-secondary mb-3">
                What Happens After You Submit the Form?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Your information will be reviewed by Veye Media to determine whether your objective and operating environment align with the work we perform. If there appears to be a potential fit, we will contact you to schedule an <strong>Understanding Session</strong>.
              </p>
            </div>

            {/* HIGH-IMPACT EXECUTIVE CALLOUT CARD */}
            <div className="relative overflow-hidden rounded-2xl bg-secondary text-white p-6 sm:p-7 shadow-lg border border-secondary">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary-500"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center text-primary-400 shrink-0 mt-0.5">
                  <Icon name="ShieldCheck" size={22} />
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary-400 block">
                    Our Engagement Standard
                  </span>
                  <p className="text-base sm:text-lg font-bold text-white leading-snug">
                    The Understanding Session is not a product demonstration or high-pressure sales call.
                  </p>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    It is a structured conversation designed to better understand:
                  </p>
                </div>
              </div>
            </div>

            {/* Evaluation Criteria Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                <span>The business objective</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                <span>The current operating environment</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                <span>The problem or opportunity</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                <span>The people and processes involved</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                <span>The systems and data involved</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                <span>Current constraints</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                <span>Desired outcomes</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                <span>Whether Veye Media should participate in solving the problem</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 italic pt-1">
              Submitting this form does not obligate you to purchase services or technology.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Form Body */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Step 1: Your Information */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="w-7 h-7 rounded-lg bg-secondary text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="text-lg font-bold text-secondary">Your Information</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Job Title / Role *</label>
                  <input
                    type="text"
                    required
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Organization Information */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="w-7 h-7 rounded-lg bg-secondary text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="text-lg font-bold text-secondary">Organization Information</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Organization Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Organization Website</label>
                  <input
                    type="url"
                    placeholder="https://"
                    value={formData.organizationWebsite}
                    onChange={(e) => setFormData({ ...formData, organizationWebsite: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Organization Type *</label>
                  <select
                    required
                    value={formData.organizationType}
                    onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  >
                    <option value="">Select one...</option>
                    {organizationTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Approximate Organization Size</label>
                  <select
                    value={formData.organizationSize}
                    onChange={(e) => setFormData({ ...formData, organizationSize: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  >
                    <option value="">Select size...</option>
                    {organizationSizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: What Are You Trying to Accomplish? */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="w-7 h-7 rounded-lg bg-secondary text-white text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="text-lg font-bold text-secondary">What Are You Trying to Accomplish?</h3>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">What business objective are you working toward? *</label>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                  Describe the outcome you want the organization to achieve (e.g., revenue growth, reducing operational delays, connecting fragmented data, strengthening market intelligence).
                </p>
                <textarea
                  rows={4}
                  required
                  value={formData.businessObjective}
                  onChange={(e) => setFormData({ ...formData, businessObjective: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="Provide details on the target objective..."
                />
              </div>
            </div>

            {/* Step 4: What Is Preventing That Outcome Today? */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="w-7 h-7 rounded-lg bg-secondary text-white text-xs font-bold flex items-center justify-center">4</span>
                <h3 className="text-lg font-bold text-secondary">What Is Preventing That Outcome Today?</h3>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Primary Operational Constraints (Select all that apply)</label>
                <p className="text-xs text-slate-500 mb-3">Identify the bottlenecks currently affecting execution:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {challengeOptions.map((opt) => (
                    <label
                      key={opt}
                      onClick={() => handleChallengeToggle(opt)}
                      className={`p-3 rounded-xl border text-xs font-medium flex items-center gap-3 cursor-pointer transition-colors select-none ${
                        formData.selectedChallenges.includes(opt)
                          ? 'bg-primary-50 border-primary-500 text-primary-900 font-bold'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.selectedChallenges.includes(opt)}
                        onChange={() => {}}
                        className="rounded text-primary-600 focus:ring-primary-500"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">Detailed Constraint Context *</label>
                <p className="text-xs text-slate-500 mb-2 leading-relaxed">
                  Describe what happens today that makes achieving this objective difficult.
                </p>
                <textarea
                  rows={4}
                  required
                  value={formData.primaryChallengeText}
                  onChange={(e) => setFormData({ ...formData, primaryChallengeText: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="Provide additional details on internal friction, manual handoffs, or policy boundaries..."
                />
              </div>
            </div>

            {/* Step 5: Involved Areas */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="w-7 h-7 rounded-lg bg-secondary text-white text-xs font-bold flex items-center justify-center">5</span>
                <h3 className="text-lg font-bold text-secondary">Which Areas of the Organization Are Involved?</h3>
              </div>
              <p className="text-xs text-slate-500">Select all that apply.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {areaOptions.map((area) => (
                  <label
                    key={area}
                    onClick={() => handleAreaToggle(area)}
                    className={`p-3 rounded-xl border text-xs font-medium flex items-center gap-3 cursor-pointer transition-colors select-none ${
                      formData.involvedAreas.includes(area)
                        ? 'bg-primary-50 border-primary-500 text-primary-900 font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.involvedAreas.includes(area)}
                      onChange={() => {}}
                      className="rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span>{area}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 6: Systems & Technologies */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="w-7 h-7 rounded-lg bg-secondary text-white text-xs font-bold flex items-center justify-center">6</span>
                <h3 className="text-lg font-bold text-secondary">What Systems or Technologies Are Currently Involved?</h3>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                  You do not need to provide a complete technology inventory. List any major platforms, databases, CRM systems, ERP systems, automation tools, AI platforms, or applications relevant to the objective.
                </p>
                <textarea
                  rows={3}
                  placeholder="e.g., Salesforce, HubSpot, Snowflake, BigQuery, AWS, Zapier, Cloudflare, custom databases..."
                  value={formData.currentSystems}
                  onChange={(e) => setFormData({ ...formData, currentSystems: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Step 7: Current AI Usage */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="w-7 h-7 rounded-lg bg-secondary text-white text-xs font-bold flex items-center justify-center">7</span>
                <h3 className="text-lg font-bold text-secondary">How Is AI Being Used Today?</h3>
              </div>
              <p className="text-xs text-slate-500">Select the option that best describes your organization.</p>
              <div className="space-y-2 pt-1">
                {aiUsageOptions.map((opt) => (
                  <label
                    key={opt}
                    onClick={() => setFormData({ ...formData, aiUsageToday: opt })}
                    className={`p-3 rounded-xl border text-xs font-medium flex items-center gap-3 cursor-pointer transition-colors select-none ${
                      formData.aiUsageToday === opt
                        ? 'bg-primary-50 border-primary-500 text-primary-900 font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <input
                      type="radio"
                      name="aiUsage"
                      checked={formData.aiUsageToday === opt}
                      onChange={() => {}}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 8: Initiative Priority */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="w-7 h-7 rounded-lg bg-secondary text-white text-xs font-bold flex items-center justify-center">8</span>
                <h3 className="text-lg font-bold text-secondary">What Level of Priority Does This Initiative Have?</h3>
              </div>
              <div className="space-y-2 pt-1">
                {priorityOptions.map((opt) => (
                  <label
                    key={opt}
                    onClick={() => setFormData({ ...formData, initiativePriority: opt })}
                    className={`p-3 rounded-xl border text-xs font-medium flex items-center gap-3 cursor-pointer transition-colors select-none ${
                      formData.initiativePriority === opt
                        ? 'bg-primary-50 border-primary-500 text-primary-900 font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <input
                      type="radio"
                      name="priority"
                      checked={formData.initiativePriority === opt}
                      onChange={() => {}}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 9: Decision Role */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="w-7 h-7 rounded-lg bg-secondary text-white text-xs font-bold flex items-center justify-center">9</span>
                <h3 className="text-lg font-bold text-secondary">Who Is Involved in the Decision?</h3>
              </div>
              <div className="space-y-2 pt-1">
                {decisionRoles.map((opt) => (
                  <label
                    key={opt}
                    onClick={() => setFormData({ ...formData, decisionRole: opt })}
                    className={`p-3 rounded-xl border text-xs font-medium flex items-center gap-3 cursor-pointer transition-colors select-none ${
                      formData.decisionRole === opt
                        ? 'bg-primary-50 border-primary-500 text-primary-900 font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <input
                      type="radio"
                      name="decisionRole"
                      checked={formData.decisionRole === opt}
                      onChange={() => {}}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 10: Additional Information */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="w-7 h-7 rounded-lg bg-secondary text-white text-xs font-bold flex items-center justify-center">10</span>
                <h3 className="text-lg font-bold text-secondary">Is There Anything Else We Should Understand?</h3>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                  Use this space to provide additional context, concerns, requirements, or information that may help us understand the situation.
                </p>
                <textarea
                  rows={4}
                  value={formData.additionalInformation}
                  onChange={(e) => setFormData({ ...formData, additionalInformation: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="Additional context or specific constraints..."
                />
              </div>
            </div>

            {/* What We Are Evaluating */}
            <div className="p-8 rounded-3xl bg-secondary text-white space-y-4">
              <h4 className="text-lg font-bold">What We Are Evaluating</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Veye Media reviews each inquiry based on the business problem and potential fit, not simply the size of the organization or whether the organization already has an AI initiative. We are typically most helpful when an organization is dealing with a challenge involving several interconnected elements:
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-primary-300 text-center">
                People + Processes + Data + Technology + Decisions + Governance
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                If the challenge can be solved with a simple standalone tool, we may tell you that. If AI is unnecessary, we may tell you that too. Our responsibility is to help determine the appropriate architecture for the objective.
              </p>
            </div>

            {/* Submission Action */}
            <div className="space-y-4 text-center pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-primary-500 hover:bg-primary-400 text-white font-extrabold text-lg shadow-xl shadow-primary-500/25 transition-all flex items-center justify-center gap-3 mx-auto disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Icon name="RefreshCw" size={20} className="animate-spin" />
                    <span>Submitting Intake...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Business Intake</span>
                    <Icon name="ArrowRight" size={20} />
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 max-w-lg mx-auto leading-relaxed">
                Please do not submit passwords, API keys, confidential credentials, protected health information, or other highly sensitive information through this form.
              </p>
            </div>

          </form>
        </div>
      </section>

      {/* 4. Corporate Headquarters & Contact Info */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-white rounded-3xl border border-slate-200 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary-600 block mb-2">
                Corporate Office
              </span>
              <h3 className="text-xl font-black text-secondary mb-2">
                Headquarters
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="shrink-0 mt-1 text-primary-500" size={18} />
                <address className="not-italic leading-relaxed">
                  <EditableText section="global" field="addressLine1" />
                  <br />
                  <EditableText section="global" field="addressLine2" />
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Icon name="Phone" className="shrink-0 text-primary-500" size={18} />
                <EditableText section="global" field="phone" />
              </div>

              <div className="flex items-center gap-3">
                <Icon name="Mail" className="shrink-0 text-primary-500" size={18} />
                <EditableText section="global" field="email" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;