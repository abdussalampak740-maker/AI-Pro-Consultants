import { useState, FormEvent, createContext, useContext } from 'react';
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
  Rocket
} from 'lucide-react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import AuditModal from './components/AuditModal.tsx';
import ChatBot from './components/ChatBot.tsx';

// --- Context for Modal ---
const ModalContext = createContext<{ openAudit: () => void }>({ openAudit: () => {} });
export const useModal = () => useContext(ModalContext);

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
           <div className="text-[10px] uppercase font-bold text-blue-400 tracking-widest mb-4">Case Studies</div>
           <h2 className="text-4xl font-extrabold tracking-tight">Measurable Business <span className="text-white/40">Outcomes.</span></h2>
        </div>
        <div className="flex gap-4">
           <div className="px-5 py-2 rounded-full glass text-[10px] font-bold text-white tracking-widest cursor-default">ROI FOCUSED</div>
           <div className="px-5 py-2 rounded-full glass border-green-500/20 text-[10px] font-bold text-green-400 tracking-widest cursor-default">READY TO SCALE</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          {[
            { 
              industry: "E-commerce", 
              client: "Global Retailer", 
              result: "+42% Conversion", 
              challenges: "High cart abandonment rates and generic product recommendations leading to low average order value.",
              solution: "Integrated AI-powered personalized product recommendations and autonomous abandoned cart recovery agents.",
              keyMetrics: [
                "15k+ enquiries handled monthly",
                "94% resolution rate without human intervention",
                "32% increase in average order value"
              ],
              metric: "Efficiency"
            },
            { 
              industry: "B2B SaaS", 
              client: "Enterprise CRM", 
              result: "$120k Pipeline", 
              challenges: "Inbound sales team overwhelmed by low-quality leads while missing high-value enterprise signals.",
              solution: "Deployed reactive AI agents that proactively identified and engaged high-value leads based on intent signals.",
              keyMetrics: [
                "800+ high-intent leads qualified",
                "45 enterprise demos booked in 30 days",
                "Reduction in lead response time to < 2 mins"
              ],
              metric: "Growth"
            },
            { 
              industry: "Healthcare", 
              client: "Private Clinic", 
              result: "70% More Bookings", 
              challenges: "Receptionists missing 30% of after-hours calls and high patient no-show rates due to manual follow-up logs.",
              solution: "AI Voice Agent handling 100% of inbound scheduling and automated patient follow-ups via natural language voice.",
              keyMetrics: [
                "100% inbound call coverage 24/7",
                "40% reduction in patient no-shows",
                "Zero missed appointments since deployment"
              ],
              metric: "Scale"
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 flex flex-col group hover:bg-white/10 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">{item.industry}</span>
                    <span className="text-[10px] text-slate-700">•</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{item.client}</span>
                  </div>
                  <div className="text-2xl font-black text-white font-display tracking-tight uppercase leading-none">{item.result}</div>
                </div>
                <div className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20">
                  {item.metric}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">The Challenge</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{item.challenges}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Our Solution</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{item.solution}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4">Key Metrics Achieved</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {item.keyMetrics.map((k, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="text-white text-[10px] font-bold leading-tight">{k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-[2rem] p-8 lg:p-12 flex flex-col items-center justify-center text-center overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent opacity-50" />
           <div className="relative z-10 w-full">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-6">Aggregate Success</div>
              <div className="text-8xl font-black text-white font-display leading-none mb-4 tracking-tighter">+312%</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10 pb-10 border-b border-indigo-500/20">Average Lead Increase Q3</div>
              
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-6">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: '85%' }}
                   viewport={{ once: true }}
                   className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]" 
                 />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-widest">
                 <div className="text-left">
                    <div className="text-slate-600 mb-1">Baseline</div>
                    <div className="text-slate-400">Manual Operations</div>
                 </div>
                 <div className="text-right">
                    <div className="text-indigo-400 mb-1">Target Optimized</div>
                    <div className="text-white">AI Pro Systems Integration</div>
                 </div>
              </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openAudit: () => setIsAuditOpen(true) }}>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <SocialProof />
        <Problem />
        <Services />
        <HowItWorks />
        <Results />
        <FAQ />
        <FinalCTA />
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
