
import React from 'react';
import { FileText } from 'lucide-react';

export const TermsOfUse: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in fade-in duration-700 text-left">
      <div className="mb-16">
        <div className="w-12 h-12 bg-veye-blue/10 text-veye-blue rounded-xl flex items-center justify-center mb-6">
          <FileText size={24} />
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-veye-navy mb-8 tracking-tight">Terms of Use</h1>
        <p className="text-xl text-slate-600 font-medium">Governing High-Fidelity Strategic Engagement.</p>
      </div>

      <div className="prose prose-slate max-w-none space-y-12 text-slate-700 font-medium leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">Agreement to Terms</h2>
          <p>By accessing the Veye Media digital environment, you agree to engage with our systems and team in a professional and strategic manner. These terms govern your use of our website and participation in our discovery processes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">Intellectual Property</h2>
          <p>All conceptual architectures, systems descriptions, and the proprietary Velocity Sync Engine™ are the intellectual property of Veye Media. Unauthorized reproduction or use of these systems-first frameworks is prohibited.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">Use of Discovery Interfaces</h2>
          <p>Our "Start a Conversation" and other discovery interfaces are intended for legitimate organizational inquiries. Misuse of these systems for solicitation or non-strategic purposes is strictly prohibited.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">Disclaimer of Liability</h2>
          <p>Veye Media provides architectural insights and systems-first guidance. Outcomes are dependent on organizational alignment and the successful ingestion of system capabilities.</p>
        </section>
      </div>
    </div>
  );
};
