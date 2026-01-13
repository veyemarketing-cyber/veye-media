
import React from 'react';
import { Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in fade-in duration-700 text-left">
      <div className="mb-16">
        <div className="w-12 h-12 bg-veye-blue/10 text-veye-blue rounded-xl flex items-center justify-center mb-6">
          <Shield size={24} />
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-veye-navy mb-8 tracking-tight">Privacy Policy</h1>
        <p className="text-xl text-slate-600 font-medium">Commitment to Organizational and Individual Data Integrity.</p>
      </div>

      <div className="prose prose-slate max-w-none space-y-12 text-slate-700 font-medium leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">Introduction</h2>
          <p>At Veye Media, we treat privacy as a fundamental component of system health. This policy outlines how we handle information gathered during our strategic dialogues and through our digital interfaces.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">Information Collection</h2>
          <p>We only collect information that is necessary to establish high-fidelity conversations or to optimize the performance of our growth systems. This includes professional contact details, organizational profiles, and strategic intent provided during discovery.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">Data Usage</h2>
          <p>Information is used exclusively to facilitate partnership dialogue and to calibrate our orchestration layers for those we serve. We do not engage in the sale of personal or organizational data to third parties.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">System Security</h2>
          <p>We maintain rigorous standards for data protection to ensure the continuity and security of the intelligence systems we architect. Access to data is restricted to authorized architects and systems required for operational outcomes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">Contact</h2>
          <p>For inquiries regarding our privacy practices, please contact us at hello@veyemedia.co.</p>
        </section>
      </div>
    </div>
  );
};
