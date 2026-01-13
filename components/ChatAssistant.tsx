import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Activity, User, Bot, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import { Page } from '../types';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  isHandoff?: boolean;
}

const SYSTEM_INSTRUCTION = `You are the "Veye Media site assistant". 
Your role is to help visitors understand:
- What Veye Media architects
- What outcomes our systems enable
- Whether Veye Media may be a strategic fit for their organization

IDENTITY & TRANSPARENCY:
- You are a site assistant, not a human. If asked, identify yourself as the "Veye Media site assistant".
- Never pretend to be a real person.

STRATEGIC SCOPE:
- Answer questions ONLY at a strategic/outcomes level.
- NEVER reveal internal processes, tools, workflows, APIs, or the internal architecture of Velocity Sync Engine™.
- Reframe traditional tactical questions into systems language.

HANDOFF PROTOCOL:
If the visitor expresses a desire to speak to a human or uses high-intent language (pricing, proposal, retainer, etc.), you must briefly address their inquiry at a strategic level and then IMMEDIATELY offer a handoff to a human.

When in HANDOFF mode, you must:
1. Confirm: "Absolutely — we can connect you with a real person."
2. Path: Direct them to "Start a Conversation" (/start-a-conversation).
3. Contact: Office phone: 866-790-3014 | Email: hello@veyemedia.co
4. Expectation: We typically respond within 1 business day.

Tone: Calm, confident, strategic, professional, non-salesy. Avoid buzzwords and technical jargon.`;

const HUMAN_KEYWORDS = [
  'live agent', 'talk to someone', 'human', 'call you', 'sales', 
  'meeting', 'schedule a call', 'speak to victor', 'real person',
  'person', 'phone call'
];

const INTENT_KEYWORDS = [
  'pricing', 'proposal', 'retainer', 'we need help', 'urgent', 'can you do this for us',
  'cost', 'how much', 'hire you'
];

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Welcome to Veye Media. I am the Veye Media site assistant. I can discuss our systems-first approach to growth. How can I assist your strategic inquiry today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim().toLowerCase();
    const originalMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: originalMessage }]);
    setIsLoading(true);

    // Immediate Handoff Check
    const isHumanRequest = HUMAN_KEYWORDS.some(kw => userMessage.includes(kw));
    const isHighIntent = INTENT_KEYWORDS.some(kw => userMessage.includes(kw));

    if (isHumanRequest) {
      // Immediate switch to handoff mode without AI delay for human requests
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "Absolutely — we can connect you with a real person. Our team can dive deeper into your specific strategic requirements.",
          isHandoff: true
        }]);
        setIsLoading(false);
      }, 500);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chatHistory = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...chatHistory,
          { role: 'user', parts: [{ text: originalMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const assistantContent = response.text || "I apologize, but I am unable to process that inquiry at this moment. Would you like to start a direct strategic conversation with our team?";
      
      // If AI detects intent but hasn't explicitly triggered handoff UI, we can supplement it if keywords matched
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: assistantContent,
        isHandoff: isHighIntent
      }]);
    } catch (error) {
      console.error("Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I encountered a synchronization error. For high-fidelity strategic discussions, please visit our 'Start a Conversation' page.", isHandoff: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen ? (
        <div className="w-[90vw] sm:w-[420px] h-[640px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-veye-navy p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-veye-blue rounded-lg flex items-center justify-center">
                <Activity size={18} />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-tight uppercase">System Assistant</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Orchestrating...</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto space-y-6 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${m.role === 'assistant' ? 'bg-veye-blue text-white' : 'bg-slate-200 text-slate-600'}`}>
                  {m.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
                </div>
                <div className={`max-w-[85%] flex flex-col gap-3`}>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed font-medium shadow-sm ${
                    m.role === 'assistant' 
                      ? 'bg-white text-slate-700 border border-slate-100 rounded-tl-none' 
                      : 'bg-veye-navy text-white rounded-tr-none'
                  }`}>
                    {m.content}
                  </div>
                  
                  {m.isHandoff && (
                    <div className="p-5 bg-white border border-veye-blue/20 rounded-2xl shadow-lg animate-in fade-in slide-in-from-top-2 duration-500">
                      <p className="text-xs font-bold text-veye-navy mb-4 uppercase tracking-widest">Connect with our team</p>
                      <Link 
                        to="/start-a-conversation" 
                        className="w-full py-3 bg-veye-blue hover:bg-veye-blue/90 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md mb-4"
                      >
                        Start a Conversation <ArrowRight size={16} />
                      </Link>
                      
                      <div className="space-y-2 border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-3 text-slate-500 hover:text-veye-navy transition-colors">
                          <Phone size={14} className="text-veye-blue" />
                          <span className="text-xs font-bold">866-790-3014</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-500 hover:text-veye-navy transition-colors">
                          <Mail size={14} className="text-veye-blue" />
                          <span className="text-xs font-bold">hello@veyemedia.co</span>
                        </div>
                      </div>
                      <p className="mt-4 text-[10px] text-slate-400 italic font-medium">We typically respond within 1 business day.</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-veye-blue text-white flex items-center justify-center shrink-0">
                  <Bot size={16} />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-veye-blue" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Processing Signals...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our growth systems..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-5 pr-12 py-4 text-sm focus:outline-none focus:border-veye-blue focus:ring-1 focus:ring-veye-blue transition-all font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-2 bg-veye-navy text-white rounded-xl hover:bg-slate-800 disabled:bg-slate-300 transition-all shadow-md"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[9px] text-center mt-3 text-slate-400 font-bold uppercase tracking-[0.15em] italic">
              Veye Intelligence Interface v1.2
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-veye-navy text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
        >
          <div className="absolute inset-0 bg-veye-blue rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
          <MessageSquare className="relative z-10" size={28} />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-veye-amber rounded-full border-2 border-white"></div>
        </button>
      )}
    </div>
  );
};