import { motion } from 'motion/react';
import { Menu, X, Brain } from 'lucide-react';
import { useState } from 'react';
import { useModal } from '../context/ModalContext.tsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openAudit } = useModal();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-3 group cursor-pointer no-underline">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-10 h-10 rounded-lg bg-[#0B0E14] border border-white/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black font-display tracking-tighter text-white">
                AI <span className="blue-gradient-text">PRO</span>
              </span>
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-500 mt-1">
                Consultants
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Services</a>
            <a href="#resources" className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Resources</a>
            <a href="/blog/" className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Blog</a>
            <a href="#how-it-works" className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">How It Works</a>
            <a href="#results" className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Results</a>
            <a href="#contact" className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Contact Us</a>
            <button 
              onClick={openAudit}
              className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-lg shadow-blue-500/20"
            >
              BOOK CALL
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-b border-white/10 px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#services" className="block text-base font-medium text-slate-300 hover:text-blue-400">Services</a>
          <a href="#resources" className="block text-base font-medium text-slate-300 hover:text-blue-400">Resources</a>
          <a href="/blog/" className="block text-base font-medium text-slate-300 hover:text-blue-400">Blog</a>
          <a href="#how-it-works" className="block text-base font-medium text-slate-300 hover:text-blue-400">How It Works</a>
          <a href="#results" className="block text-base font-medium text-slate-300 hover:text-blue-400">Results</a>
          <a href="#faq" className="block text-base font-medium text-slate-300 hover:text-blue-400">FAQ</a>
          <a href="#contact" className="block text-base font-medium text-slate-300 hover:text-blue-400">Contact Us</a>
          <button 
            onClick={() => {
              setIsOpen(false);
              openAudit();
            }}
            className="block w-full px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold glow-blue text-center"
          >
            Book a Call
          </button>
        </motion.div>
      )}
    </nav>
  );
}
