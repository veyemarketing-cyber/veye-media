import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icon';
import { sendMessageToSynapse, createSynapseChat } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasInitialized, setHasInitialized] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const initChat = () => {
    if (!hasInitialized) {
      createSynapseChat();
      // Add initial welcome message
      const welcomeMsg: ChatMessage = {
        id: 'init-1',
        role: 'model',
        text: "👋 Welcome to Veye Marketing! I'm Synapse, your AI Marketing Assistant.\n\nMy goal is to quickly qualify your needs and provide data-driven insights. I can:\n1. Explain our AI & Data Marketing Services.\n2. Detail the measurable value and ROI we provide.\n3. Connect you directly to our Sales or Customer Service teams.\n\nHow can I help you find measurable growth today?",
        timestamp: new Date()
      };
      setMessages([welcomeMsg]);
      setHasInitialized(true);
    }
  };

  const toggleChat = () => {
    if (!isOpen && !hasInitialized) {
      initChat();
    }
    setIsOpen(!isOpen);
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToSynapse(userMsg.text);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[90vw] sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col mb-4 border border-slate-200 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-700 to-primary-600 p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                <Icon name="BrainCircuit" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Synapse AI</h3>
                <p className="text-primary-100 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span> Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-3 shadow-sm flex items-center gap-1">
                   <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                   <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-200">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
            <div className="text-center mt-2">
               <span className="text-[10px] text-slate-400">Powered by Gemini &bull; Veye Marketing Agent</span>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={toggleChat}
        className={`${isOpen ? 'bg-slate-800' : 'bg-primary-600 animate-pulse-slow'} text-white p-4 rounded-full shadow-lg shadow-primary-900/20 hover:scale-110 transition-transform duration-200 flex items-center justify-center`}
      >
        {isOpen ? <Icon name="X" size={28} /> : <Icon name="MessageSquareText" size={28} />}
      </button>

    </div>
  );
};
