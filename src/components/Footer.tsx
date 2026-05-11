import { Cpu, Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="min-h-20 py-6 md:py-0 border-t border-white/5 bg-[#0B0E14] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 relative z-10 gap-4">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-center md:text-left">
        <span>&copy; 2026 AI PRO CONSULTANTS</span>
        <span className="flex items-center gap-2">
          <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div> 
          SYSTEM STATUS: OPTIMIZED
        </span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 uppercase tracking-tighter font-bold">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
        
        <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-4">
          <a 
            href="https://www.linkedin.com/company/ai-pro-consultants/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="https://web.facebook.com/AIProConsultants/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-500 transition-colors"
            title="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="font-mono tracking-widest text-slate-600 hidden lg:block">
        US / CANADA REGIONAL HQ
      </div>
    </footer>
  );
}
