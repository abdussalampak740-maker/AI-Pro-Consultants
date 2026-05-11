import { motion } from 'motion/react';
import { ArrowRight, Bot, Sparkles, ChevronRight, Play } from 'lucide-react';
import { useModal } from '../App.tsx';

export default function Hero() {
  const { openAudit } = useModal();

  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Next-Gen AI Systems</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              We Build AI That <span className="gradient-text">Grows Revenue.</span>
            </h1>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-sm">
              Automate operations, engage leads, and scale faster with custom LLM agents and intelligent automation.
            </p>
            
            <div className="flex gap-4 pt-4">
              <button 
                onClick={openAudit}
                className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-xl text-sm"
              >
                Free AI Audit
              </button>
              <button 
                onClick={openAudit}
                className="px-6 py-3 bg-slate-800 text-white font-bold rounded-xl border border-white/10 hover:bg-slate-700 transition-colors text-sm"
              >
                Book a Call
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="glass rounded-3xl p-6 border border-white/10 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-600/10 blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
              
              <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                <div className="ml-4 flex-1 h-5 rounded px-2 text-[10px] text-slate-500 flex items-center bg-white/5 border border-white/5 font-mono tracking-widest">
                  AI-PRO-SYSTEM-LOGS.SH
                </div>
              </div>
              
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-4 space-y-4">
                   <div className="p-4 glass rounded-xl">
                      <div className="text-[10px] text-slate-500 uppercase tracking-tighter mb-1">Leads</div>
                      <div className="text-2xl font-bold font-display text-blue-400">+124%</div>
                   </div>
                   <div className="p-4 glass rounded-xl">
                      <div className="text-[10px] text-slate-500 uppercase tracking-tighter mb-1">Savings</div>
                      <div className="text-2xl font-bold font-display text-green-400">$2.4k</div>
                   </div>
                   <div className="p-4 glass rounded-xl">
                      <div className="text-[10px] text-slate-500 uppercase tracking-tighter mb-1">UPTIME</div>
                      <div className="text-2xl font-bold font-display text-purple-400">99.9%</div>
                   </div>
                </div>

                <div className="col-span-8 flex flex-col pt-2">
                   <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                      <div className="flex justify-between items-end h-full px-4">
                        {[30, 50, 40, 65, 80, 60, 90, 100].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                            className="w-4 bg-gradient-to-t from-blue-600 to-purple-500 rounded-t-sm"
                          />
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-20" />
                   </div>
                   <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-slate-500">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      SYSTEM STATUS: OPTIMIZING REVENUE
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
