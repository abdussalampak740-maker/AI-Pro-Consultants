import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2, ArrowUpRight, Copy, Trash2, Check, Brain } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useModal } from '../App.tsx';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: "Hey there! I'm here to help you navigate some AI automation for your brand. What's on your mind? 🚀" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { openAudit } = useModal();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API Key missing');
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const history = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...history,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `You are the Lead Consultant at AI Pro Consultants, a high-end AI Automation Agency. 
              
          YOUR PERSONALITY:
          - HUMAN-LIKE: No robotic fluff. Get straight to the point.
          - EXTREMELY CONCISE: Maximum 2-3 short sentences. No essays.
          - DIRECTLY RELEVANT: Answer the specific question asked immediately.
          - CONVERSATIONAL: One natural transition like "Honestly," or "Actually," is fine, but brevity is priority.
          - OPINIONATED: Give a direct expert recommendation instead of listing options.

          BUSINESS CONTEXT:
          - AI Pro Consultants automates Sales, CRM, and Workflows (Make.com/custom LLMs).
          - We focus on pure ROI.
          
          CONVERSION:
          - Only suggest "Free AI Audit" or "Book Call" if it naturally fits the conversation.
          
          IMPORTANT: You are a busy expert. Be helpful, be brief, but don't be a typical AI. Stop talking once the answer is given.`,
          temperature: 0.8,
        },
      });

      const botResponse = response.text || "I'm having trouble processing that. Could you rephrase or simply book a call?";
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'bot', content: "I'm currently in maintenance mode. Please use our 'Book Call' button for direct assistance!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    const chatText = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n\n');
    navigator.clipboard.writeText(chatText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearChat = () => {
    setMessages([{ role: 'bot', content: "Hey there! I'm here to help you navigate some AI automation for your brand. What's on your mind? 🚀" }]);
    setShowConfirmClear(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl glow-blue group active:scale-90 transition-transform"
      >
        <MessageSquare className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 z-[70] w-full h-full md:w-[400px] md:h-[600px] md:max-h-[80vh] bg-[#0B0E14] md:border md:border-white/10 md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between safe-top">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center relative">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0B0E14]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">AI Pro Support</h3>
                  <p className="text-[10px] text-green-500 uppercase font-black tracking-[0.2em]">Online Now</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={copyToClipboard}
                  title="Copy History"
                  className="p-2.5 rounded-full hover:bg-white/5 text-slate-500 transition-colors active:scale-95"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <div className="relative">
                  <button 
                    onClick={() => setShowConfirmClear(!showConfirmClear)}
                    title="Clear Chat"
                    className={`p-2.5 rounded-full transition-colors active:scale-95 ${showConfirmClear ? 'bg-red-500/20 text-red-500' : 'hover:bg-white/5 text-slate-500'}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  
                  {showConfirmClear && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="absolute top-full right-0 mt-2 bg-[#1A1D24] border border-white/10 rounded-xl p-3 shadow-2xl z-[80] min-w-[120px]"
                    >
                      <p className="text-[10px] font-black text-white uppercase tracking-wider mb-2 text-center">Are you sure?</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={clearChat}
                          className="flex-1 py-1.5 rounded-lg bg-red-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-colors"
                        >
                          Clear
                        </button>
                        <button 
                          onClick={() => setShowConfirmClear(false)}
                          className="flex-1 py-1.5 rounded-lg bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
                        >
                          No
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-full hover:bg-white/5 text-slate-500 transition-colors active:scale-95"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none shadow-lg' 
                      : 'bg-white/5 border border-white/10 text-slate-300 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <div className="flex gap-1.5 px-1">
                      {[0, 1, 2].map((dot) => (
                        <motion.div
                          key={dot}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.4, 1, 0.4] 
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: dot * 0.2,
                            ease: "easeInOut"
                          }}
                          className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em] ml-1">Consulting...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-2 flex flex-wrap gap-2">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  openAudit();
                }}
                className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-all flex items-center gap-2"
              >
                Free AI Audit <ArrowUpRight className="w-3 h-3" />
              </button>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  openAudit();
                }}
                className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
              >
                Book Call
              </button>
              <button 
                onClick={() => setInput("How can AI help my business grow?")}
                className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
              >
                Growth Tips?
              </button>
            </div>

            {/* Input */}
            <div className="p-4 bg-[#0B0E14]">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about AI Strategy..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-700"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="p-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-all disabled:opacity-50 active:scale-95"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
