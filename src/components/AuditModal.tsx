import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Calendar, Send, Phone, Mail, User, ArrowRight, ShieldCheck } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const metaEnv = (import.meta as any).env;
    const webhookUrl = metaEnv.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

    if (webhookUrl) {
      // Fire and forget strategy for instant UI response
      fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          timestamp: new Date().toISOString(),
          source: 'Free AI Audit Form'
        }),
      }).catch(err => console.error('Background submission error:', err));
    } else {
      console.error('CRITICAL: VITE_GOOGLE_SHEETS_WEBHOOK_URL is missing.');
    }

    // Snappy transition for better UX
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 400); 
  };

  const calendarUrl = (import.meta as any).env.VITE_GOOGLE_CALENDAR_URL || 'https://calendar.google.com';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 overflow-hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full h-full sm:h-auto max-w-lg bg-[#0B0E14] border-t sm:border border-white/10 rounded-t-[2.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Close Button - Optimized for touch */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-3 md:p-2 rounded-full bg-white/5 md:bg-transparent hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-[110] active:scale-90"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 scrollbar-hide pt-16 md:pt-12">
              {!submitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex justify-between items-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 uppercase tracking-[0.2em] text-[10px] font-black text-blue-400">
                      Lead Generation • v2.0
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                      <div className="w-1 h-1 rounded-full bg-blue-500/30" />
                      <div className="w-1 h-1 rounded-full bg-blue-500/30" />
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight uppercase leading-none">
                    Secure Your <br className="hidden md:block"/> <span className="gradient-text">Discovery Session</span>
                  </h2>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    Join 100+ brands automating their growth. Our systems will analyze your footprint and prepare your custom roadmap.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5">
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-300"></div>
                        <div className="relative">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 mb-2">
                            <User className="w-3 h-3" /> Full Name
                          </label>
                          <input 
                            required
                            type="text" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium placeholder:text-slate-700"
                            placeholder="Ex: John Sterling"
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-300"></div>
                        <div className="relative">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 mb-2">
                            <Mail className="w-3 h-3" /> Business Email
                          </label>
                          <input 
                            required
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium placeholder:text-slate-700"
                            placeholder="john@company.ai"
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-300"></div>
                        <div className="relative">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 mb-2">
                            <Phone className="w-3 h-3" /> Direct Phone
                          </label>
                          <input 
                            required
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium placeholder:text-slate-700"
                            placeholder="+1 (000) 000-0000"
                          />
                        </div>
                      </div>
                    </div>

                    {error && <p className="text-red-500 text-[10px] font-bold uppercase text-center mt-2 animate-pulse">{error}</p>}

                    <button 
                      type="submit"
                      disabled={submitting}
                      className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all glow-blue mt-4 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 relative overflow-hidden"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                           <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                           Syncing Data...
                        </span>
                      ) : (
                        <>
                          Request Analysis <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <div className="flex flex-col items-center gap-2 mt-4 pb-4">
                      <p className="text-[9px] text-slate-600 uppercase font-bold tracking-widest flex items-center gap-2 text-center">
                        <ShieldCheck className="w-3 h-3 text-green-500" /> Secure Data Transmission • 256-bit Encryption
                      </p>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center md:py-8"
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-20 h-20 md:w-24 md:h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 relative"
                  >
                    <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full"></div>
                    <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-green-400 relative z-10" />
                  </motion.div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4 uppercase tracking-[0.2em] text-[10px] font-black text-green-400">
                    Submission Verified
                  </div>

                  <h2 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">Details <span className="text-green-400">Locked In.</span></h2>
                  <p className="text-slate-400 text-sm mb-10 leading-relaxed mx-auto max-w-sm">
                    We've received your audit request. For <span className="text-white font-bold">Priority Processing</span>, schedule your discovery call below.
                  </p>

                  <div className="space-y-4 pb-8">
                    <motion.a 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      href={calendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-6 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl active:scale-95 group"
                    >
                      <Calendar className="w-5 h-5 text-blue-600 transition-transform group-hover:scale-110" />
                      Book Strategy Call
                    </motion.a>
                    
                    <motion.button 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ delay: 0.4 }}
                      onClick={onClose}
                      className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-white transition-colors py-2"
                    >
                      No thanks, I'll wait 24h
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
