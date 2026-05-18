import { Brain, Linkedin, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-white/5 bg-[#0B0E14] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-16">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="flex items-center gap-3 group cursor-pointer no-underline">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 flex items-center justify-center transition-colors">
                <Brain className="w-5 h-5 text-blue-500 group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-black font-display tracking-tighter text-white">
                  AI <span className="text-blue-500">PRO</span>
                </span>
                <span className="text-[7px] font-black uppercase tracking-[0.4em] text-slate-500 mt-1">
                  Consultants
                </span>
              </div>
            </a>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              We engineer secure, bespoke LLM chatbots, voice interfaces, and automatic workflow pipelines designed to save hours, capture leads, and protect margins.
            </p>
          </div>

          {/* Column 2: Quick Links Company */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-[10px] font-black uppercase text-white tracking-widest border-b border-white/5 pb-2">Company</h5>
            <ul className="space-y-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/#resources" className="hover:text-blue-400 transition-colors">Resources</a></li>
              <li><a href="/#how-it-works" className="hover:text-blue-400 transition-colors">Process</a></li>
              <li><a href="/#results" className="hover:text-blue-400 transition-colors">Results</a></li>
              <li><a href="/blog/" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Links */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-[10px] font-black uppercase text-white tracking-widest border-b border-white/5 pb-2">Connect</h5>
            <ul className="space-y-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <li>
                <a href="mailto:aiproconsultantss@gmail.com" className="hover:text-blue-400 transition-colors font-mono tracking-wide text-xs">
                  aiproconsultantss@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4 mt-2">
                  <a href="https://www.linkedin.com/company/ai-pro-consultants/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://web.facebook.com/AIProConsultants/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Locations column */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-[10px] font-black uppercase text-white tracking-widest border-b border-white/5 pb-2">Texas Locations</h5>
            <ul className="space-y-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <li>
                <a href="/blog/ai-automation-texas/" className="hover:text-blue-400 transition-colors">AI Automation Texas</a>
              </li>
              <li>
                <a href="/blog/ai-automation-agency-austin-tx/" className="hover:text-blue-400 transition-colors">AI Automation Austin</a>
              </li>
              <li>
                <a href="/blog/ai-automation-agency-dallas-tx/" className="hover:text-blue-400 transition-colors">AI Automation Dallas</a>
              </li>
              <li>
                <a href="/blog/ai-automation-agency-houston-tx/" className="hover:text-blue-400 transition-colors">AI Automation Houston</a>
              </li>
              <li>
                <a href="/blog/ai-automation-agency-san-antonio-tx/" className="hover:text-blue-400 transition-colors">AI Automation San Antonio</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer bottom elements */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-center md:text-left">
            <span>&copy; 2026 AI PRO CONSULTANTS. All Rights Reserved.</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              SYSTEM STATUS: OPTIMIZED
            </span>
          </div>
          <div className="flex items-center gap-6 uppercase tracking-tighter font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          <div className="font-mono tracking-widest text-slate-600">
            US / CANADA REGIONAL HQ
          </div>
        </div>
      </div>
    </footer>
  );
}
