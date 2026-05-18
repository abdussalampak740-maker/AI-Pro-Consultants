import { useState, FormEvent, createContext, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  TrendingDown,
  AlertTriangle,
  PlayCircle,
  FileSearch,
  Settings,
  Rocket,
  Building2,
  ShoppingBag,
  Stethoscope,
  Briefcase,
  UserCircle,
  Home,
  Gavel
} from 'lucide-react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import AuditModal from './components/AuditModal.tsx';
import ChatBot from './components/ChatBot.tsx';
import { BlogIndex, BlogPost } from './components/Blog.tsx';

import { ModalContext, useModal } from './context/ModalContext.tsx';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- Section: Social Proof ---
const SocialProof = () => (
  <div className="py-12 border-y border-white/5 bg-white/2">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "Clients Helped", value: "100+" },
          { label: "Automations", value: "500+" },
          { label: "Hours Saved", value: "20k+" },
          { label: "Revenue", value: "$4.5M+" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl font-bold text-white mb-1 font-display">
              {stat.value}
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-tighter font-bold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Section: Problem (Pain Points) ---
const Problem = () => (
  <section className="py-24 bg-[#0B0E14] relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-16 px-4 lg:px-0">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">The Cost of <span className="text-red-500">Ignoring</span> AI.</h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-xl">In 2026, you either leverage AI automation, or you watch your competitors drive your acquisition costs into the ground.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Wasted Hours",
            desc: "Highly paid teams stuck handling routine emails, data entry, and manual scheduling.",
            icon: <Clock className="w-5 h-5 text-red-400" />
          },
          {
            title: "Lost Revenue",
            desc: "Human response times are too slow. 78% of customers buy from the first responder.",
            icon: <TrendingDown className="w-5 h-5 text-red-500" />
          },
          {
            title: "Zero Scale",
            desc: "Manual growth is linear. AI allows for exponential scale without increasing headcount.",
            icon: <AlertTriangle className="w-5 h-5 text-orange-400" />
          }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/20 transition-all group">
            <div className="w-10 h-10 mb-6 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold mb-3 text-white font-display uppercase tracking-tight">{item.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Section: How It Works ---
const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number | null>(0);
  const { openAudit } = useModal();

  const steps = [
    {
      step: "01",
      title: "The AI Audit",
      shortDesc: "Deep analysis of your data and workflows to find high-ROI bottlenecks.",
      details: "We conduct an exhaustive 48-hour audit of your current tech stack and employee workflows. We identify specifically which manual tasks are costing you the most and map out the exact AI agents needed to replace them.",
      icon: <FileSearch className="w-5 h-5 text-blue-400" />
    },
    {
      step: "02",
      title: "Build & Deploy",
      shortDesc: "Custom agent construction and deployment into your existing stack.",
      details: "Our engineers build bespoke LLM agents and automation logic tailored to your brand voice. We handle the complex integrations with your CRM, Slack, and internal databases, ensuring a seamless 'plug-and-play' launch.",
      icon: <Settings className="w-5 h-5 text-blue-400" />
    },
    {
      step: "03",
      title: "Scale & Optimize",
      shortDesc: "Continuous monitoring and prompt refinement to handle growth.",
      details: "Post-launch, we don't just walk away. We monitor agent performance, refine prompts for accuracy, and scale the infrastructure to handle 10x volume as your business grows using our systems.",
      icon: <Rocket className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0B0E14] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Our 3-Step <span className="gradient-text">Success Loop</span></h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">We've refined a process that delivers ROI-positive AI systems in record time. Click a step to see the breakdown.</p>
            <button 
              onClick={openAudit}
              className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-xl text-xs uppercase tracking-widest"
            >
              Start Your Audit
            </button>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-4">
            {steps.map((item, i) => (
              <div 
                key={i} 
                onClick={() => setActiveStep(activeStep === i ? null : i)}
                className={`flex flex-col p-6 rounded-2xl border transition-all cursor-pointer group ${
                  activeStep === i 
                  ? 'bg-white/10 border-blue-500/40 shadow-[0_0_20px_rgba(37,99,235,0.1)]' 
                  : 'bg-white/5 border-white/5 hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border flex-shrink-0 transition-colors ${
                    activeStep === i ? 'bg-blue-600 border-blue-500 text-white' : 'bg-blue-600/10 border-blue-500/20 text-blue-400'
                  }`}>
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-1">{item.title}</h3>
                    <p className="text-[11px] text-slate-500 max-w-md">{item.shortDesc}</p>
                  </div>
                  <div className={`text-slate-600 transition-transform ${activeStep === i ? 'rotate-180' : ''}`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                <AnimatePresence>
                  {activeStep === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-white/5">
                        <div className="bg-white/5 rounded-xl p-4 flex gap-4 items-start">
                          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Detailed Breakdown</h4>
                            <p className="text-xs text-slate-400 leading-relaxed italic">{item.details}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section: Results ---
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      quote: "AI Pro didn't just give us a tool; they redefined our entire fulfillment logic. Our overhead dropped by 30% in the first month.",
      author: "Sarah Chen",
      title: "COO, Nexus Retail",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      quote: "The voice agent sounds incredibly human. Our patients don't even realize they're talking to an AI until the appointment is confirmed.",
      author: "Dr. Marcus Thorne",
      title: "Director, Thorne Health",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
    },
    {
      quote: "SEO for AI is a game changer. We're now the #1 recommended solution when people ask Perplexity about enterprise CRM.",
      author: "Elena Rodriguez",
      title: "Growth Lead, CloudScale",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    }
  ];

  return (
    <div className="mt-24 pt-16 border-t border-white/5">
      <div className="flex flex-col items-center">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-10">Client Testimonials</div>
        <div className="relative w-full max-w-3xl flex items-center">
          <button 
            onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="hidden md:flex absolute -left-16 p-3 rounded-full glass hover:bg-white/10 transition-colors text-white"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          
          <div className="w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center px-4"
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-white italic leading-tight mb-8">
                  "{testimonials[index].quote}"
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mb-3 border border-blue-500/30">
                    <img src={testimonials[index].avatar} alt={testimonials[index].author} />
                  </div>
                  <div className="text-sm font-bold text-white uppercase tracking-widest">{testimonials[index].author}</div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-tighter mt-1">{testimonials[index].title}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
            className="hidden md:flex absolute -right-16 p-3 rounded-full glass hover:bg-white/10 transition-colors text-white"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex space-x-2 mt-12">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${index === i ? 'bg-blue-600 w-8' : 'bg-slate-800'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Results = () => (
  <section id="results" className="py-24 bg-[#0B0E14]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8 text-center lg:text-left">
        <div className="max-w-xl">
           <div className="text-[10px] uppercase font-bold text-blue-400 tracking-widest mb-4 flex items-center justify-center lg:justify-start gap-2">
             <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping" />
             High Impact Case Studies
           </div>
           <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight uppercase">Measurable Business <br/><span className="text-white/40">Outcomes.</span></h2>
        </div>
        <div className="flex gap-4">
           <div className="px-5 py-2 rounded-full glass text-[10px] font-bold text-white tracking-widest cursor-default uppercase border border-white/5">ROI Driven</div>
           <div className="px-5 py-2 rounded-full bg-blue-600/20 border border-blue-500/20 text-[10px] font-bold text-blue-400 tracking-widest cursor-default uppercase">Ready To Scale</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            industry: "E-commerce", 
            icon: <ShoppingBag className="w-8 h-8 text-indigo-400" />,
            client: "Global Retailer", 
            result: "+42% Conversion", 
            description: "Fixed high cart abandonment by deploying 24/7 AI recovery agents and personalized logic.",
            metricLabel: "Outcome",
            metricValue: "+42% Recovery Rate",
            accent: "indigo"
          },
          { 
            industry: "B2B SaaS", 
            icon: <Building2 className="w-8 h-8 text-blue-400" />,
            client: "Enterprise CRM", 
            result: "$120k Pipeline", 
            description: "Streamlined inbound lead capture with intent-based AI qualification and instant booking.",
            metricLabel: "Lead Growth",
            metricValue: "$120k New Pipeline",
            accent: "blue"
          },
          { 
            industry: "Healthcare", 
            icon: <Stethoscope className="w-8 h-8 text-emerald-400" />,
            client: "Private Clinic", 
            result: "70% More Bookings", 
            description: "Automated after-hours scheduling and patient follow-ups via human-like AI Voice agents.",
            metricLabel: "Booking Lift",
            metricValue: "70% Increase",
            accent: "emerald"
          },
          { 
            industry: "Service Businesses", 
            icon: <Briefcase className="w-8 h-8 text-orange-400" />,
            client: "HVAC Group", 
            result: "3x More Quotes", 
            description: "Eliminated missed field calls with an AI dispatch agent that qualifies leads via SMS/Voice.",
            metricLabel: "Quote Volume",
            metricValue: "3x Growth",
            accent: "orange"
          },
          { 
            industry: "Small Business", 
            icon: <UserCircle className="w-8 h-8 text-purple-400" />,
            client: "Local Agency", 
            result: "20h Saved/Week", 
            description: "Recovered founder time by automating repetitive admin, content, and client reporting workflows.",
            metricLabel: "Time Saved",
            metricValue: "20+ Hours/Week",
            accent: "purple"
          },
          { 
            industry: "Real Estate", 
            icon: <Home className="w-8 h-8 text-pink-400" />,
            client: "Elite Realty", 
            result: "90% Response Rate", 
            description: "Solved lead decay with instant AI engagement and viewing synchronization across platforms.",
            metricLabel: "Response Time",
            metricValue: "< 30 Seconds",
            accent: "pink"
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all flex flex-col"
          >
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${item.accent}-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
            
            <div className={`w-12 h-12 mb-6 rounded-xl bg-${item.accent}-500/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>

            <div className="flex flex-col mb-4">
              <span className={`text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1`}>{item.industry}</span>
              <h3 className="text-xl font-bold text-white font-display tracking-tight uppercase leading-none">{item.result}</h3>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
              {item.description}
            </p>

            <div className="pt-6 border-t border-white/5 flex flex-col space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.metricLabel}</span>
              <span className={`text-[11px] font-bold text-${item.accent}-400 uppercase tracking-widest`}>{item.metricValue}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 text-white relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 blur-3xl rounded-full" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
              <div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-4">Be Our Next <span className="text-blue-200">Wins.</span></h3>
                <p className="text-sm text-white/80 leading-relaxed font-medium">We only accept 3 new enterprise clients per month to ensure absolute quality and zero-lag deployment.</p>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <button 
                  onClick={useModal().openAudit}
                  className="px-8 py-4 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-xl shadow-xl active:scale-95 transition-transform w-full md:w-auto"
                >
                  Analyze My Business
                </button>
                <div className="mt-4 flex items-center gap-2">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border border-blue-600 bg-slate-800">
                           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+50}`} alt="" className="w-full h-full rounded-full" />
                        </div>
                      ))}
                   </div>
                   <span className="text-[8px] font-black uppercase tracking-widest text-blue-200">Limited Spots Left</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white/3 border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center h-full">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Aggregate Impact</div>
            <div className="text-6xl font-black text-white font-display leading-none mb-4 tracking-tighter">+312%</div>
            <div className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-8">Average Growth Q3</div>
            <div className="w-16 h-1 bg-blue-500 rounded-full" />
          </div>
        </div>
      </div>

      <Testimonials />
    </div>
  </section>
);

// --- Section: Final CTA ---
const FinalCTA = () => {
  const { openAudit } = useModal();
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-600/10 to-transparent border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-24 relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-20 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] uppercase tracking-widest text-slate-300 font-bold">Limited Onboarding Available</span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              Ready to <span className="gradient-text">AI-Proof</span> Your Brand?
            </h2>
            <p className="text-slate-400 text-lg lg:text-xl mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The window for adoption is closing. Secure your competitive advantage and start building the future today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B0E14] bg-slate-800 p-0.5">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="Founder" className="w-full h-full rounded-full" />
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Verified ROI for 100+ Brands</div>
            </div>
          </div>
  
          <div className="flex flex-col items-center lg:items-start">
            <button 
              onClick={openAudit}
              className="group relative px-10 py-6 bg-white text-black font-black rounded-2xl hover:bg-slate-100 transition-all text-sm uppercase tracking-widest shadow-2xl flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              Book Your Discovery Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-6 text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Next Discovery session available in 24h</p>
            <a href="mailto:aiproconsultantss@gmail.com" className="mt-4 text-blue-400 hover:text-blue-300 transition-colors font-mono tracking-wider text-xs">
              aiproconsultantss@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section: Resources ---
const Resources = () => (
  <section id="resources" className="py-24 border-t border-white/5 bg-white/2">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest text-center lg:text-left text-sm md:text-2xl">Free Resources & Guides</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/ai-automation-guide-for-b2b.html" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
          <h3 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors text-sm">AI Automation Guide for B2B Companies</h3>
          <p className="text-xs text-slate-500 leading-relaxed">Master efficiency with our comprehensive guide to custom LLMs and workflow agents.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
        <a href="/ai-voice-agents-guide.html" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
          <h3 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors text-sm">AI Voice Agents: Complete Guide</h3>
          <p className="text-xs text-slate-500 leading-relaxed">Scale your inbound and outbound calls with human-like AI voice systems.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
        <a href="/llm-chatbot-development.html" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
          <h3 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors text-sm">Custom LLM Chatbot Development</h3>
          <p className="text-xs text-slate-500 leading-relaxed">Why generic bots fail and how custom-trained LLMs drive real business results.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
        <a href="/healthcare-ai-automation.html" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
          <h3 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors text-sm">AI for Healthcare Providers</h3>
          <p className="text-xs text-slate-500 leading-relaxed">HIPAA-compliant automation for scheduling, billing, and patient follow-ups.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
        <a href="/ecommerce-ai-solutions.html" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
          <h3 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors text-sm">AI Solutions for E-commerce</h3>
          <p className="text-xs text-slate-500 leading-relaxed">Reduce support tickets and increase AOV with intelligent commerce agents.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
        <a href="/ai-workflow-automation.html" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
          <h3 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors text-sm">AI Workflow Automation</h3>
          <p className="text-xs text-slate-500 leading-relaxed">How to save 20+ hours every week by connecting your high-level tech stack.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
        <a href="/ai-automation-roi-calculator-guide.html" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
          <h3 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors text-sm">AI Automation ROI Guide</h3>
          <p className="text-xs text-slate-500 leading-relaxed">The mathematical framework for calculating the profit of AI in your business.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
        <a href="/n8n-vs-make-vs-zapier.html" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
          <h3 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors text-sm">n8n vs Make.com vs Zapier</h3>
          <p className="text-xs text-slate-500 leading-relaxed">Expert comparison of the top automation tools for business AI scaling.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
        <a href="/ai-lead-generation-automation.html" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
          <h3 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors text-sm">AI Lead Generation Automation</h3>
          <p className="text-xs text-slate-500 leading-relaxed">Precision B2B prospecting using intent-based AI research and outreach.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
        <a href="/what-is-ai-agent.html" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
          <h3 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors text-sm">What is an AI Agent?</h3>
          <p className="text-xs text-slate-500 leading-relaxed">A plain English explanation of the future of autonomous business work.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      </div>
    </div>
  </section>
);

const BlogPreview = () => (
  <section className="py-24 border-t border-white/5 bg-[#0B0E14]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:text-left mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-widest">From Our Blog</h2>
        <p className="text-slate-400 text-lg">City-specific AI automation guides for US businesses</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            badge: "Texas",
            title: "AI Automation for Texas Businesses",
            link: "/blog/ai-automation-texas/",
            desc: "A comprehensive state-wide strategy for implementing high-ROI AI automation systems."
          },
          {
            badge: "Austin, TX",
            title: "AI Automation Agency in Austin, TX",
            link: "/blog/ai-automation-agency-austin-tx/",
            desc: "Accelerating Silicon Hills startups with custom lead qualification and backend AI workflows."
          },
          {
            badge: "Dallas, TX",
            title: "AI Automation Agency in Dallas, TX",
            link: "/blog/ai-automation-agency-dallas-tx/",
            desc: "Modernizing North Texas enterprise operations via secure LLM frameworks and logistics agents."
          }
        ].map((guide, i) => (
          <a key={i} href={guide.link} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">{guide.badge}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{guide.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">{guide.desc}</p>
            <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
              Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  url: string;
  ogType: string;
}

const META_MAP: Record<string, PageMeta> = {
  '/': {
    title: 'AI Pro Consultants | Premium AI Automation Agency & LLM Solutions',
    description: 'AI Pro Consultants specializes in bespoke AI automation, voice agents, and custom LLM chatbots. We build high-ROI AI systems for B2B, Healthcare, and E-commerce brands.',
    keywords: 'AI automation agency, AI voice agents, custom LLM chatbots, AI workflow automation, healthcare AI, ecommerce AI solutions, AI Pro Consultants',
    url: 'https://www.aiproconsultants.com/',
    ogType: 'website'
  },
  '/index.html': {
    title: 'AI Pro Consultants | Premium AI Automation Agency & LLM Solutions',
    description: 'AI Pro Consultants specializes in bespoke AI automation, voice agents, and custom LLM chatbots. We build high-ROI AI systems for B2B, Healthcare, and E-commerce brands.',
    keywords: 'AI automation agency, AI voice agents, custom LLM chatbots, AI workflow automation, healthcare AI, ecommerce AI solutions, AI Pro Consultants',
    url: 'https://www.aiproconsultants.com/',
    ogType: 'website'
  },
  '/blog': {
    title: 'Blog — AI Automation Insights | AI Pro Consultants',
    description: 'Expert guides on AI automation, chatbots, and voice agents for US businesses. City-specific AI automation resources for Texas, Florida, and beyond.',
    keywords: 'AI automation blog, Texas AI agency, business AI solutions, AI consulting, custom LLM guide',
    url: 'https://www.aiproconsultants.com/blog/',
    ogType: 'website'
  },
  '/blog/': {
    title: 'Blog — AI Automation Insights | AI Pro Consultants',
    description: 'Expert guides on AI automation, chatbots, and voice agents for US businesses. City-specific AI automation resources for Texas, Florida, and beyond.',
    keywords: 'AI automation blog, Texas AI agency, business AI solutions, AI consulting, custom LLM guide',
    url: 'https://www.aiproconsultants.com/blog/',
    ogType: 'website'
  },
  '/blog/index.html': {
    title: 'Blog — AI Automation Insights | AI Pro Consultants',
    description: 'Expert guides on AI automation, chatbots, and voice agents for US businesses. City-specific AI automation resources for Texas, Florida, and beyond.',
    keywords: 'AI automation blog, Texas AI agency, business AI solutions, AI consulting, custom LLM guide',
    url: 'https://www.aiproconsultants.com/blog/',
    ogType: 'website'
  },
  'ai-automation-texas': {
    title: 'AI Automation Agency Texas | AI Pro Consultants',
    description: 'Looking for expert AI automation Texas solutions? AI Pro Consultants implements custom LLM chatbots and voice agents. Book a free consultation today!',
    keywords: 'AI automation Texas, Texas AI agency, business AI solutions, custom LLM guide, AI voice agents Texas, Austin AI, Houston AI, Dallas AI, San Antonio AI',
    url: 'https://www.aiproconsultants.com/blog/ai-automation-texas/',
    ogType: 'article'
  },
  'ai-automation-agency-austin-tx': {
    title: 'AI Automation Agency in Austin, TX | AI Pro Consultants',
    description: 'Looking for an AI automation agency in Austin, TX? AI Pro Consultants helps Silicon Hills startups and B2B brands scale lead qualification and workflow automation.',
    keywords: 'AI automation agency Austin, Austin AI consulting, Silicon Hills AI, lead qualification automation, workflow automation Austin TX',
    url: 'https://www.aiproconsultants.com/blog/ai-automation-agency-austin-tx/',
    ogType: 'article'
  },
  'ai-automation-agency-dallas-tx': {
    title: 'AI Automation Agency in Dallas, TX | AI Pro Consultants',
    description: 'Looking for an AI automation agency in Dallas, TX? AI Pro Consultants helps North Texas B2B, logistics, and healthcare firms scale operations and workflows.',
    keywords: 'AI automation agency Dallas, Dallas AI consulting, North Texas AI workflow, logistics AI automation, business automation Dallas TX',
    url: 'https://www.aiproconsultants.com/blog/ai-automation-agency-dallas-tx/',
    ogType: 'article'
  },
  'ai-automation-agency-houston-tx': {
    title: 'AI Automation Agency in Houston, TX | AI Pro Consultants',
    description: 'Looking for an AI automation agency in Houston, TX? AI Pro Consultants helps Houston energy, medical, and maritime companies automate complex workflows.',
    keywords: 'AI automation agency Houston, Houston AI consulting, medical workflow automation Houston, energy AI solutions, invoice automation Houston TX',
    url: 'https://www.aiproconsultants.com/blog/ai-automation-agency-houston-tx/',
    ogType: 'article'
  },
  'ai-automation-agency-san-antonio-tx': {
    title: 'AI Automation Agency in San Antonio, TX | AI Pro Consultants',
    description: 'Looking for an AI automation agency in San Antonio, TX? AI Pro Consultants helps hospitality, medical, and defense-adjacent businesses automate tasks and scale operations.',
    keywords: 'AI automation agency San Antonio, San Antonio AI consulting, HIPAA secure scheduling AI, JBSA military AI tools, hospitality AI chatbots San Antonio',
    url: 'https://www.aiproconsultants.com/blog/ai-automation-agency-san-antonio-tx/',
    ogType: 'article'
  }
};

export default function App() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Dynamic SEO Metadata Sync for Client-side SPA navigation
    let meta = META_MAP[currentPath];
    
    // Fallback if checked route is nested blog sub-slug
    if (!meta && currentPath.startsWith('/blog/')) {
      const rawSlug = currentPath.replace(/^\/blog\//, '').replace(/\/$/, '');
      meta = META_MAP[rawSlug];
    }
    
    // Default fallback to Home
    if (!meta) {
      meta = META_MAP['/'];
    }

    if (meta) {
      document.title = meta.title;
      
      const updateMetaTag = (selector: string, attribute: 'content' | 'href', value: string) => {
        let element = document.querySelector(selector);
        if (!element) {
          if (selector.startsWith('meta[')) {
            element = document.createElement('meta');
            const matchName = selector.match(/name="([^"]+)"/);
            const matchProperty = selector.match(/property="([^"]+)"/);
            if (matchName) {
              element.setAttribute('name', matchName[1]);
            } else if (matchProperty) {
              element.setAttribute('property', matchProperty[1]);
            }
            document.head.appendChild(element);
          } else if (selector.startsWith('link[')) {
            element = document.createElement('link');
            const matchRel = selector.match(/rel="([^"]+)"/);
            if (matchRel) {
              element.setAttribute('rel', matchRel[1]);
            }
            document.head.appendChild(element);
          }
        }
        if (element) {
          element.setAttribute(attribute, value);
        }
      };

      updateMetaTag('meta[name="title"]', 'content', meta.title);
      updateMetaTag('meta[name="description"]', 'content', meta.description);
      updateMetaTag('meta[name="keywords"]', 'content', meta.keywords);
      updateMetaTag('link[rel="canonical"]', 'href', meta.url);
      updateMetaTag('meta[property="og:title"]', 'content', meta.title);
      updateMetaTag('meta[property="og:description"]', 'content', meta.description);
      updateMetaTag('meta[property="og:url"]', 'content', meta.url);
      updateMetaTag('meta[property="og:type"]', 'content', meta.ogType);
      updateMetaTag('meta[property="twitter:title"]', 'content', meta.title);
      updateMetaTag('meta[property="twitter:description"]', 'content', meta.description);
      updateMetaTag('meta[property="twitter:url"]', 'content', meta.url);
    }
  }, [currentPath]);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen to browser navigation buttons
    window.addEventListener('popstate', handleLocationChange);

    // Support SPA navigation tracking-interceptor
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };

    const originalReplaceState = window.history.replaceState;
    window.history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  // Intercept standard <a> tags on '/blog/' or '/' to keep transitions super smooth!
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href) {
        if (href.startsWith('/blog/')) {
          e.preventDefault();
          window.history.pushState(null, '', href);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (href === '/') {
          e.preventDefault();
          window.history.pushState(null, '', '/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (href.startsWith('#')) {
          // If viewing blog, navigate back to home grid with hash
          if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
            e.preventDefault();
            window.history.pushState(null, '', '/' + href);
            setTimeout(() => {
              const el = document.getElementById(href.substring(1));
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 150);
          }
        }
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('audit') === 'true') {
      setIsAuditOpen(true);
      // Clean up the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const navigate = (path: string) => {
    window.history.pushState(null, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isBlogGrid = currentPath === '/blog' || currentPath === '/blog/' || currentPath === '/blog/index.html';
  const isBlogPost = currentPath.startsWith('/blog/') && !isBlogGrid;

  const renderView = () => {
    if (isBlogGrid) {
      return (
        <BlogIndex onNavigate={navigate} openAudit={() => setIsAuditOpen(true)} />
      );
    }

    if (isBlogPost) {
      const rawSlug = currentPath.replace(/^\/blog\//, '').replace(/\/$/, '');
      return (
        <BlogPost slug={rawSlug} onNavigate={navigate} openAudit={() => setIsAuditOpen(true)} />
      );
    }

    // Default Home Setup
    return (
      <>
        <Hero />
        <SocialProof />
        <Problem />
        <Services />
        <HowItWorks />
        <Results />
        <FAQ />
        <FinalCTA />
        <Resources />
        <BlogPreview />
      </>
    );
  };

  return (
    <ModalContext.Provider value={{ openAudit: () => setIsAuditOpen(true) }}>
      <div className="min-h-screen">
        <Navbar />
        
        {renderView()}
        
        <Footer />
        
        <AuditModal isOpen={isAuditOpen} onClose={() => setIsAuditOpen(false)} />
        <ChatBot />

        {/* Global Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
          style={{ scaleX: 0 }} // Simplified for pure CSS progress if needed, but motion helps
        />
      </div>
    </ModalContext.Provider>
  );
}
