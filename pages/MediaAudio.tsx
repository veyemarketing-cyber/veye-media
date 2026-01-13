
import React from 'react';
import { Mic2, Radio, Music, Video, Share, Activity, Waves } from 'lucide-react';

export const MediaAudio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in slide-in-from-left-4 duration-500">
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl font-extrabold mb-8 text-veye-navy">Media & <span className="text-veye-blue">Audio</span> Intelligence</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Media is not a standalone service; it is an intelligence layer. Our systems process, package, and distribute audio-visual content with architectural precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 text-left">
        <div className="p-10 bg-white border border-slate-100 rounded-3xl group shadow-sm hover:shadow-md transition-shadow">
          <Mic2 size={40} className="text-veye-blue mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-4 text-veye-navy">Podcast Production</h3>
          <p className="text-slate-600 mb-6">End-to-end intelligent production workflows that handle recording, editing, and distribution while capturing performance data.</p>
          <div className="h-1 w-20 bg-veye-blue rounded"></div>
        </div>
        <div className="p-10 bg-white border border-slate-100 rounded-3xl group shadow-sm hover:shadow-md transition-shadow">
          <Radio size={40} className="text-veye-blue mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-4 text-veye-navy">Radio & Sermon Production</h3>
          <p className="text-slate-600 mb-6">Specialized systems for ministries and organizations to scale message reach through terrestrial and digital radio infrastructure.</p>
          <div className="h-1 w-20 bg-veye-blue rounded"></div>
        </div>
        <div className="p-10 bg-white border border-slate-100 rounded-3xl group shadow-sm hover:shadow-md transition-shadow">
          <Music size={40} className="text-veye-blue mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-4 text-veye-navy">Music Production</h3>
          <p className="text-slate-600 mb-6">High-fidelity audio systems for creative projects, integrated with distribution and rights management intelligence.</p>
          <div className="h-1 w-20 bg-veye-blue rounded"></div>
        </div>
        <div className="p-10 bg-white border border-slate-100 rounded-3xl group shadow-sm hover:shadow-md transition-shadow">
          <Video size={40} className="text-veye-blue mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-4 text-veye-navy">Live Event Recording</h3>
          <p className="text-slate-600 mb-6">Captured presence systems that turn live moments into a library of digital assets for long-term distribution.</p>
          <div className="h-1 w-20 bg-veye-blue rounded"></div>
        </div>
      </div>

      <div className="bg-veye-navy rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-left text-white">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-10 flex items-center gap-1">
          {[...Array(20)].map((_, i) => (
             <div key={i} className="bg-veye-blue w-2 rounded-full" style={{ height: `${Math.random() * 100}%` }}></div>
          ))}
        </div>
        <div className="max-w-2xl relative z-10">
          <h2 className="text-3xl font-bold mb-8">Media Repurposing & Distribution</h2>
          <p className="text-indigo-100 text-lg leading-relaxed mb-8">
            Our systems don't just record media; they atomize it. A single podcast episode is automatically decomposed into snippets, shorts, transcripts, and social insights, then distributed via the Velocity Sync Engine.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">100%</span>
              <span className="text-xs text-veye-blue uppercase font-semibold">Repurposing Efficiency</span>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">Real-time</span>
              <span className="text-xs text-veye-blue uppercase font-semibold">Performance Measurement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
