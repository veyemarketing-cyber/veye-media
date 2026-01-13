
import React from 'react';
import { Database } from 'lucide-react';

export const DataGovernance: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in fade-in duration-700 text-left">
      <div className="mb-16">
        <div className="w-12 h-12 bg-veye-blue/10 text-veye-blue rounded-xl flex items-center justify-center mb-6">
          <Database size={24} />
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-veye-navy mb-8 tracking-tight">Data Use & Governance</h1>
        <p className="text-xl text-slate-600 font-medium">High-Level Ethics for System Intelligence.</p>
      </div>

      <div className="prose prose-slate max-w-none space-y-12 text-slate-700 font-medium leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">Governance Philosophy</h2>
          <p>Veye Media treats data as the essential fuel for growth orchestration. We govern data use through a systems-first lens, prioritizing accuracy, durability, and ethical alignment over short-term exploit.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">Orchestration Ethics</h2>
          <p>The Velocity Sync Engine™ is designed to process signals into outcomes without exposing sensitive organizational mechanics. We maintain a strict boundary between public-facing discovery and private system intelligence.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">Client Sovereignty</h2>
          <p>Organizations retain sovereignty over their core data. Our systems act as an orchestration layer, empowering partners to maintain control while benefiting from autonomous optimization.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-veye-navy mb-4 italic">Compliance and Standards</h2>
          <p>We adhere to high-standard data governance protocols. We continuously review our architectures to ensure they meet modern requirements for accessibility, security, and systemic transparency.</p>
        </section>
      </div>
    </div>
  );
};
