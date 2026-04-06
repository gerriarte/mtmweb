
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { GeminiService } from '../services/gemini';

export const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: '¡Hola! Soy el asistente de MTM. ¿En qué podemos ayudarte a marcar la diferencia hoy?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    
    setIsTyping(true);
    const aiResponse = await GeminiService.askAssistant(userMsg);
    setIsTyping(false);
    
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-3xl border border-zinc-200/90 bg-white shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black md:w-[400px]"
          >
            <div className="flex items-center justify-between border-b border-zinc-200/80 bg-zinc-50/90 p-6 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1FCDD2] flex items-center justify-center text-black">
                  <Sparkles size={16} />
                </div>
                <div>
                  <p className="font-headline text-sm font-bold text-zinc-900 dark:text-white">MTM Assistant</p>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-neutral-500">AI powered</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-neutral-500 dark:hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#1FCDD2] text-black rounded-tr-none' 
                      : 'rounded-tl-none border border-zinc-200/80 bg-zinc-100 text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-tl-none bg-zinc-100 p-4 dark:bg-white/5">
                    <span className="w-1.5 h-1.5 bg-[#1FCDD2]/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <span className="w-1.5 h-1.5 bg-[#1FCDD2]/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1.5 h-1.5 bg-[#1FCDD2]/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-zinc-200/80 bg-zinc-50/90 p-4 dark:border-white/10 dark:bg-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe tu duda creativa..."
                  className="w-full rounded-full border border-zinc-200/90 bg-white py-3 pl-6 pr-12 text-sm text-zinc-900 transition-colors focus:border-[#1FCDD2]/40 focus:outline-none dark:border-white/10 dark:bg-black dark:text-white"
                />
                <button 
                  onClick={handleSend}
                  disabled={isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#1FCDD2] text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-50"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#1FCDD2] text-black rounded-full flex items-center justify-center shadow-2xl group"
      >
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.div key="x" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-white border-2 border-black rounded-full flex items-center justify-center text-[10px] text-black font-bold animate-pulse">
          1
        </div>
      </motion.button>
    </div>
  );
};
