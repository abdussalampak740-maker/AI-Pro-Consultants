import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Scale, 
  Hourglass, 
  Users, 
  FileText, 
  Bot, 
  Phone, 
  Zap, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  HelpCircle, 
  TrendingUp, 
  MapPin, 
  Lock, 
  Calendar,
  Briefcase,
  AlertCircle
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function HoustonLegalAutomation() {
  const { openAudit } = useModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    {
      title: "AI Chatbots for Law Firms",
      keyword: "AI chatbot for lawyers Houston",
      icon: <Bot className="w-6 h-6 text-blue-400" />,
      description: "Deploy raw, customized, context-aware web crawlers and conversational pathways. Securely answer customer inquiries 24/7 without risking user data leakages or training public intelligence algorithms.",
      bulletPoints: ["Trained on your practice area parameters", "Instant pre-qualification of case types", "HIPAA & secure compliance guardrails"]
    },
    {
      title: "Client Intake Automation",
      keyword: "legal intake automation Houston",
      icon: <FileText className="w-6 h-6 text-indigo-400" />,
      description: "Convert raw form submissions into beautifully structured PDF briefs, run conflict check triggers, and calculate case metrics. This eliminates old manual transcriptions.",
      bulletPoints: ["Seamless SMS and web form links", "Automated background conflict query triggers", "Frictionless digital signature delivery"]
    },
    {
      title: "CRM & Database Automation",
      keyword: "law firm CRM automation Houston",
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      description: "Link Clio, Filevine, HubSpot, or Salesforce databases securely. Synchronize case statuses, manage client profiles, and create tasks programmatically.",
      bulletPoints: ["Zero redundant data inputs", "Synchronous system-wide record updates", "Instant team notification sequences"]
    },
    {
      title: "AI Receptionist Systems",
      keyword: "AI receptionist for law firms Houston",
      icon: <Phone className="w-6 h-6 text-rose-400" />,
      description: "Deploy friendly, low-latency automated phone agents to capture after-hours legal calls and triage high-volume inquiries before human schedulers set meetings.",
      bulletPoints: ["AthenaHealth or Clio Scheduler integration", "Secure patient/client detail safety scrubbing", "Instant Slack soundbite notifications"]
    },
    {
      title: "Legal Workflow Management",
      keyword: "legal workflow automation Houston",
      icon: <Scale className="w-6 h-6 text-amber-400" />,
      description: "Build robust background sequences with tools like Make.com and Zapier. Instantly draft standard intake outlines, coordinate calendars, and monitor court dates.",
      bulletPoints: ["Custom automated drafting triggers", "Intelligent calendar conflicts solver", "Systematic administrative time-saver"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Zero-Risk Algorithmic Audit",
      description: "We map your current administrative tasks, evaluate software permissions, and detail automated workflow ROI prospects specifically for the Texas legal market."
    },
    {
      step: "02",
      title: "Secure Sandbox Setup",
      description: "Next, we engineer custom staging solutions inside isolated testing environments. Your active Clio, Clio Grow, or Filevine records remain completely safe and offline."
    },
    {
      step: "03",
      title: "Programmatic Automation",
      description: "We connect APIs utilizing reliable triggers on Make.com or Zapier, deploying secure legal tech middleware models that preserve case detail privacy."
    },
    {
      step: "04",
      title: "Continuous Optimization",
      description: "We refine prompt accuracy parameters, provide clear user training documentation, and optimize API configurations for sustained peak speed."
    }
  ];

  const FAQs = [
    {
      q: "What is AI automation for law firms?",
      a: "AI automation for law firms is the practice of integrating cognitive software assistants, secure data pipelines, and intelligent chatbots into critical firm structures. Instead of lawyers spending administrative time copy-pasting client notes, scheduling coordinates, or sorting case files, our legal tech automation systems handle these steps programmatically, reclaiming substantial billable hours."
    },
    {
      q: "How do law firms in Houston use AI?",
      a: "Law firms in Houston Texas utilize specialized AI systems to stay competitive in the high-growth Texas legal market. Local practices integrate an AI receptionist for law firms Houston and client intake automation Houston systems to rapidly secure inbound leads from injury or family law queries. They also leverage background tool integrations to automatically update custom CRM pipelines, synchronize calendar logs, and draft legal outlines without expensive manual delays."
    },
    {
      q: "Is AI automation expensive?",
      a: "No, especially when analyzed against traditional staff overhead or missed lead opportunities. Most custom AI Automation for Law Firms Houston solutions vary between $2,500 and $8,500 for professional corporate implementations. Since we avoid high recurring user-seat software licenses in favor of agile, pay-as-you-go API coordinates, typical monthly operating fees average under $100."
    },
    {
      q: "Can AI replace lawyers?",
      a: "Absolutely not. AI automation does not substitute legal expertise, ethical advocacy, or professional judgment. Instead, it serves as an ultra-reliable background assistant that handles tedious, non-billable administrative friction. This frees attorneys to focus directly on strategic trial prep, robust client relations, and growing overall legal revenue."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#070a0e] text-slate-300 relative overflow-hidden">
      
      {/* Background radial glares */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-left">
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-widest text-blue-400 font-extrabold font-mono">
              <Scale className="w-3.5 h-3.5 text-blue-400" /> Law Practice Optimization
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] uppercase tracking-widest text-indigo-400 font-extrabold font-mono">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Houston, TX
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-tight">
            AI Automation for <span className="blue-gradient-text">Law Firms Houston</span>, Texas
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            Streamline intake, coordinate case workflows, and capture every single client lead with precision. Discover how implementing <strong>AI Automation for Law Firms Houston</strong> can convert 3x more inbound leads, speed up billing, and reclaim valuable billable hours from tedious administrative work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={openAudit}
              className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/15 cursor-pointer"
            >
              Book Free AI Automation Consultation in Houston
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#services"
              className="px-6 py-4 bg-white/2 hover:bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Explore Legal Automations
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative z-10 border-t border-white/5 bg-[#090c10]/40 py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest font-mono">The Operational Leak</span>
              <h2 className="text-3xl font-black text-white font-display uppercase tracking-tight">
                Are Billable Hours Leaking Into Manual Desk Tasks?
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Houston law practices face massive pressure. Running a competitive firm requires quick responsiveness, but attorneys are constantly distracted by routine document transfers and manual calendar booking. Without professional <strong>AI Automation for Law Firms Houston</strong> partners rely on old manual entry, which wastes valuable billable hours.
              </p>
              <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10 text-xs text-rose-300 flex gap-3.5">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <p className="m-0 leading-relaxed">
                  <strong>The Speed-to-Lead Problem:</strong> If an online inquiry isn't addressed within 5 minutes, client conversion rates drop by 391%. Let automation handle the intake before competitors win the case.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-[#090c10] border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center font-bold text-rose-400">
                  <Hourglass className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">Staff Overload</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Paralegals and legal assistants spend too many weekly hours dealing with billing systems, typing client sheets, and answering standard questions instead of supporting active trials.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#090c10] border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center font-bold text-rose-400">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">Slow Client Intake</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Inbound legal inquiries go cold when intake forms are handled manually, leading to missed client opportunities in a hyper-competitive local landscape.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#090c10] border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center font-bold text-rose-400">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">Manual Paperwork</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Generating custom intake briefs, retainer outlines, and routine contracts by hand leads to bottlenecks, delaying quick trial support or client agreements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#090c10] border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center font-bold text-rose-400">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">Missed Leads</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Missing late night telephone calls or evening form submissions results in lost cases to firms with continuous automated response pipelines.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative z-10 border-t border-white/5 py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 order-2 lg:order-1 relative">
              <div className="p-8 rounded-3xl bg-[#090c10] border border-white/5 relative overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
                <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest font-mono">Dynamic System Integration</h3>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex gap-4 items-start">
                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                    <div>
                      <strong className="text-xs text-white uppercase block mb-1">Make.com & Zapier Architecture</strong>
                      <p className="text-xs text-slate-400 m-0 leading-relaxed">We sync your existing platforms (Clio, Clio Grow, DocuSign, Outlook) so client data flows automatically without manual copy-pasting.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex gap-4 items-start">
                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0" />
                    <div>
                      <strong className="text-xs text-white uppercase block mb-1">Encrypted Zero-Retention Data Storage</strong>
                      <p className="text-xs text-slate-400 m-0 leading-relaxed">System pathways prioritize privacy. Sensitive data and client phone records are kept behind secure firewalls and are never saved on public cloud databases.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex gap-4 items-start">
                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <div>
                      <strong className="text-xs text-white uppercase block mb-1">Immediate Lead Outreach Triggers</strong>
                      <p className="text-xs text-slate-400 m-0 leading-relaxed">Interactive web intake systems send automated personalized SMS and scheduler links within seconds of a submission.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-mono">The Clear Solution</span>
              <h2 className="text-3xl font-black text-white font-display uppercase tracking-tight">
                Turn Manual Overhead Into High-Speed Legal Workflows
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                By integrating unified, secure background structures, we convert manual bottlenecks into highly reliable automated channels. Our tailor-made systems bring the power of <strong>AI Automation for Law Firms Houston</strong> practices need to secure operations, speed up intake, and increase case capacity.
              </p>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400" /> Complete client intake files generated in under 10 seconds.
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400" /> Automated conflict testing workflows and CRM syncing.
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400" /> 24/7 lead responding using secure context chatbots.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 border-t border-white/5 py-20 text-left bg-[#090c10]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block text-[10px] font-black text-indigo-400 uppercase tracking-widest font-mono">Tailored Law Firm Automation Services Houston</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">
              Our Core Legal Tech Solutions
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We construct custom system integrations designed for the specific needs of small, mid-size, and expanding Texas law firms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div 
                key={i} 
                className="p-8 rounded-2xl bg-[#090c10] border border-white/5 hover:border-slate-800 transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-white/2 border border-white/5 rounded-xl w-fit">
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white uppercase tracking-tight font-display">{svc.title}</h3>
                    <span className="text-[9px] font-mono text-slate-500 block">SEO context: {svc.keyword}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <ul className="space-y-1.5">
                    {svc.bulletPoints.map((bp, j) => (
                      <li key={j} className="text-[11px] text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" /> {bp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#090c10] border border-white/5 max-w-3xl mx-auto text-xs text-slate-400 leading-relaxed">
            <p className="m-0 text-center">
              With our <strong>law firm automation services Houston</strong> attorneys utilize client intake pipelines alongside core <strong>AI Automation for Law Firms Houston</strong> setups. This provides a complete case management flow tailored to the Texas legal market.
            </p>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 border-t border-white/5 py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-mono">Measurable ROI</span>
              <h2 className="text-3xl font-black text-white font-display uppercase tracking-tight">
                How AI Automation for Law Firms Houston Delivers Measurable ROI
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                By optimizing operational systems, we help local practices increase lead conversions and decrease admin time. This allows you to support more cases without hiring extra staff.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-[#090c10]/40 border border-white/5 flex gap-4 items-start">
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <strong className="text-xs text-white uppercase block">Faster Response times</strong>
                  <p className="text-xs text-slate-500 leading-relaxed m-0">Send welcome SMS outreach and intake calendars the exact moment a prospect requests a case evaluation.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#090c10]/40 border border-white/5 flex gap-4 items-start">
                <div className="p-2.5 bg-indigo-500/10 border border-[#4f46e5]/20 rounded-xl text-indigo-400 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <strong className="text-xs text-white uppercase block">More Converted Leads</strong>
                  <p className="text-xs text-slate-500 leading-relaxed m-0">Interactive 24/7 client intake automation Houston structures ensure no contact falls through the cracks.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#090c10]/40 border border-white/5 flex gap-4 items-start">
                <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 shrink-0">
                  <Hourglass className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <strong className="text-xs text-white uppercase block">Reduced Manual Workload</strong>
                  <p className="text-xs text-slate-500 leading-relaxed m-0">Let automated legal workflow automation Houston pipelines handle background entries and routine file syncs.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#090c10]/40 border border-white/5 flex gap-4 items-start">
                <div className="p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <strong className="text-xs text-white uppercase block">24/7 Lead Capture</strong>
                  <p className="text-xs text-slate-500 leading-relaxed m-0">Ensure after-hours mobile inquiries are caught, triaged, and booked automatically on the Clio scheduler.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Use Cases in Houston */}
      <section className="relative z-10 border-t border-white/5 py-20 text-left bg-[#090c10]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest font-mono">Local Operations</span>
            <h2 className="text-3xl font-black text-white font-display uppercase tracking-tight">
              Anonymized Houston Law Practice Use Cases
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              These examples demonstrate how implementing <strong>AI Automation for Law Firms Houston</strong> elevates client acquisition, case management, and daily workflows for local practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Use Case 1 */}
            <div className="p-8 rounded-3xl bg-[#090c10] border border-white/5 space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-blue-400 uppercase font-mono tracking-wider">River Oaks - Family Law</span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">Trigger Integration</span>
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-tight">Case Intake Acceleration</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Before automation, a busy family law practice spent over 8 hours weekly transcribing inbound divorce inquiries.
              </p>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 space-y-2">
                <span className="text-[9px] uppercase text-slate-500 font-mono font-bold block">The Solution</span>
                <p className="text-xs text-slate-500 m-0">We built a webhook listener connected to their <strong>AI chatbot for lawyers Houston</strong> system. Client requests trigger intake briefs on Clio and issue contract links via mobile message.</p>
              </div>
              <div className="text-[10px] font-bold text-emerald-400 font-mono flex items-center gap-1.5 uppercase">
                <Check className="w-3.5 h-3.5" /> Over 10 hours saved weekly
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="p-8 rounded-3xl bg-[#090c10] border border-white/5 space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-indigo-400 uppercase font-mono tracking-wider">Downtown Houston - Injury Firm</span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">System Middleware</span>
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-tight">Personal Injury Intake</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                High call volume during nights and weekends was leading to missed accident leads and inconsistent intake records.
              </p>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 space-y-2">
                <span className="text-[9px] uppercase text-slate-500 font-mono font-bold block">The Solution</span>
                <p className="text-xs text-slate-500 m-0">Implemented a secure <strong>AI receptionist for law firms Houston</strong>. The phone assistant captures accident details, updates HubSpot pipelines, and schedules consults immediately.</p>
              </div>
              <div className="text-[10px] font-bold text-emerald-400 font-mono flex items-center gap-1.5 uppercase">
                <Check className="w-3.5 h-3.5" /> 88% of off-hours leads saved
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="p-8 rounded-3xl bg-[#090c10] border border-white/5 space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-emerald-400 uppercase font-mono tracking-wider">Galleria - Business Law Group</span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">Workflow Sync</span>
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-tight">Corporate Document Sync</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Attorney response times were slowed down by manual conflict checks, Clio data syncing, and PDF document drafts.
              </p>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 space-y-2">
                <span className="text-[9px] uppercase text-slate-500 font-mono font-bold block">The Solution</span>
                <p className="text-xs text-slate-500 m-0">Configured custom <strong>legal workflow automation Houston</strong> sequences. Background scripts route data sheets and generate client intake outlines automatically.</p>
              </div>
              <div className="text-[10px] font-bold text-emerald-400 font-mono flex items-center gap-1.5 uppercase">
                <Check className="w-3.5 h-3.5" /> Reduced intake time by 75%
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why Houston Law Firms Need AI Automation */}
      <section className="relative z-10 border-t border-white/5 py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-mono">Texas Market Advantage</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">
                Why Law Houston Firms Need AI Automation to Stay Competitive
              </h2>
              <p className="text-sm text-slate-450 leading-relaxed">
                The Texas legal market is changing fast, making <strong>AI Automation for Law Firms Houston</strong> a decisive competitive advantage.
              </p>
              <div className="space-y-4 text-xs text-slate-400 leading-relaxed">
                <p>
                  Within Harris County, small to mid-size law firms compete alongside deep-pocketed regional trial practices. To succeed, you need to be exceptionally responsive. Leads expect immediate engagement; they will not wait for manual follow-ups when another firm responds instantly.
                </p>
                <p>
                  Deploying modern automation systems allows you to match the speed and scale of larger competitors. It ensures your client intake and case triaging remain active 24/7, converting lookups into clients even when your physical offices are closed for the day.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#090c10] border border-white/5 relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
              <h3 className="text-xs font-black text-white uppercase tracking-widest font-mono border-b border-white/5 pb-2">Texas Legal Market Profile</h3>
              
              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2">
                  <span className="text-slate-500">Local Area Focus</span>
                  <span className="text-white">Houston, TX (Harris County)</span>
                </div>
                <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2">
                  <span className="text-slate-500">Service Categories</span>
                  <span className="text-white">Injury, Family, Criminal, Corp</span>
                </div>
                <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2">
                  <span className="text-slate-500">Main Automation Triggers</span>
                  <span className="text-white">Clio Grow, HubSpot, n8n</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-500">Security Clearance</span>
                  <span className="text-green-400">SSL Encrypted / HIPAA Stack</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed m-0">
                Ensure your firm is prepared to handle high volumes. Let automated systems secure customer profiles, synchronize calendars, and update pipelines safely behind secure portals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="relative z-10 border-t border-white/5 py-20 text-left bg-[#090c10]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest font-mono font-display">How We Work</span>
            <h2 className="text-3xl font-black text-white font-display uppercase tracking-tight">
              Our Structured Legal Tech Alignment Process
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We leverage an audited framework that ensures safety and stability across all system integrations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-[#090c10] border border-white/5 relative overflow-hidden space-y-4"
              >
                <div className="text-4xl font-extrabold text-blue-500/10 font-mono absolute top-2 right-4">
                  {step.step}
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-tight mt-1">{step.title}</h4>
                <p className="text-xs text-slate-450 leading-relaxed m-0">{step.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 border-t border-white/5 py-20 text-left bg-[#070a0e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="inline-block text-[10px] font-black text-emerald-400 uppercase tracking-widest font-mono">Common Questions</span>
            <h2 className="text-3xl font-black text-white font-display uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Discover answers to frequently asked questions about <strong>AI Automation for Law Firms Houston</strong>, detailing performance, implementation timelines, and security metrics.
            </p>
          </div>

          <div className="space-y-4">
            {FAQs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-xl border border-white/5 bg-[#090c10] overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-white hover:bg-white/2 transition-colors focus:outline-none"
                >
                  <span className="text-sm font-bold uppercase tracking-tight font-display">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-white/5"
                    >
                      <div className="p-5 text-xs text-slate-400 leading-relaxed whitespace-pre-line">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* FAQ Structured Schema markup reference for search engines */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 text-[10px] text-slate-500 font-mono space-y-1">
            <span className="uppercase text-slate-400 font-bold block mb-1">Crawl Ready FAQ JSON-LD Schema Enabled</span>
            <p className="m-0 leading-relaxed">
              We dynamically implement Google FAQ Schema into this page, allowing local users to discover authoritative, automated support answers directly in AI Overviews.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 border-t border-white/5 py-16 text-center bg-gradient-to-r from-blue-600/10 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-widest text-blue-400 font-extrabold font-mono">
            Elevate Your Houston Practice
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display uppercase tracking-tight">
            Get a Free AI Automation Audit in Houston Today
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Experience the growth that <strong>AI Automation for Law Firms Houston</strong> brings to leading practices. Stop wasting valuable billable hours on repetitive administrative work. Book your strategic 20-minute workflow audit today.
          </p>

          <div className="pt-4">
            <button
              onClick={openAudit}
              className="px-8 py-4.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all inline-flex items-center gap-2.5 shadow-lg shadow-blue-500/20 cursor-pointer"
            >
              Request Free Trust Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-center gap-6 pt-5 text-[10px] text-slate-550 font-mono uppercase">
            <span>✓ Complete NDA Protection</span>
            <span>✓ No pushy sales calls</span>
            <span>✓ 100% CST Timezone alignment</span>
          </div>
        </div>
      </section>

    </div>
  );
}
