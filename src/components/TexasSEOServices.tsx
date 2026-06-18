import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Search, 
  Cpu, 
  MapPin, 
  Zap, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  HelpCircle, 
  Layers, 
  BarChart3, 
  Globe, 
  LineChart, 
  FileSearch,
  Users,
  Target
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function TexasSEOServices() {
  const { openAudit } = useModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const seoServices = [
    {
      title: "AI-Powered Local SEO",
      keyword: "local SEO services Texas",
      icon: <MapPin className="w-6 h-6 text-sky-400" />,
      description: "Own your local neighborhood search results. We use semantic local intelligence to map high-intent geographical keyword patterns and construct precise GEO SEO citations dynamically across Texas.",
      bullets: [
        "Dynamic multi-location landing page generation",
        "AI-optimized Google Business Profile positioning",
        "Geographic proximity authority boosting clusters",
        "Hyper-local keyword mapping for municipal sub-territories"
      ]
    },
    {
      title: "Semantic Content Optimization",
      keyword: "SEO content marketing Texas",
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      description: "Traditional keyword stuffing is dead. We utilize advanced semantic mapping models to build comprehensive, deep-hierarchy topic clusters that satisfy Google's Search Generative Experience (SGE).",
      bullets: [
        "Predictive keyword volume and intent intent indexing",
        "Context-optimized natural language outline blueprints",
        "Deep research SGE & Direct-Answer positioning clusters",
        "Programmatic readability and search compliance grading"
      ]
    },
    {
      title: "Cognitive Backlink Intelligence",
      keyword: "authority link building Texas",
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      description: "Scale high-authority link acquisitions programmatically. Our systems target highly relevant thematic domains, qualifying trust metrics and indexing relationships automatically.",
      bullets: [
        "Automated domain authority validation pipeline",
        "Contextual natural outreach script generation",
        "High-trust Texas press release citation routing",
        "Durable, crawlable safe anchor text distributions"
      ]
    },
    {
      title: "Automated Technical SEO",
      keyword: "technical SEO agency Texas",
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      description: "Search bots require lightweight, zero-latency architectures to crawling and cataloging pages. We auto-audit website code, database queries, and Core Web Vitals to guarantee indexing speeds.",
      bullets: [
        "Programmatic XML schema and microdata indexing",
        "Next-generation lazy-loading asset optimizations",
        "Automated indexability crawlers detecting server anomalies",
        "Dynamic content delivery network (CDN) sync systems"
      ]
    }
  ];

  const valuePillars = [
    {
      title: "Predictive Search Intent",
      icon: <Target className="w-5 h-5 text-sky-400" />,
      text: "We don't just guess what your customers are searching for. Our AI engines analyze millions of query variations, cross-referencing rising search trends weeks before they peak. This allows your Texas business to rank for high-intent queries before your competitors even realize they exist."
    },
    {
      title: "SGE & AI-Search Targeting",
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      text: "With Google introducing the Search Generative Experience (SGE) and AI Overviews, traditional SEO is undergoing its biggest evolution. We optimize your website's schema mapping, entities, and citations to ensure your company is selected as a cited source by Google's generative answers."
    },
    {
      title: "High-Velocity Task Automation",
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      text: "Manual meta description drafting, header optimizing, and technical schema creation consume hundreds of hours. We automate these micro-steps with secure generative pipelines, letting us launch robust, keyword-targeted pages 10x faster than traditional manual agencies."
    },
    {
      title: "Autonomous Site Monitoring",
      icon: <LineChart className="w-5 h-5 text-amber-400" />,
      text: "Algorithm updates, broken redirects, and server downtime will tank rankings instantly. AI Pro Consultants deploys continuous, agentic monitoring bots that identify indexing blocks, crawl budget errors, or schema breakages in real-time, executing self-healing systems."
    }
  ];

  const texasCities = [
    { slug: "houston", name: "Houston", desc: "Energy & Medical Hub", tag: "Energy-Grade GEO SEO" },
    { slug: "dallas", name: "Dallas", desc: "Enterprise & Transport", tag: "North Texas Dominance" },
    { slug: "austin", name: "Austin", desc: "Tech & Venture Capital", tag: "Silicon Hills Authority" },
    { slug: "san-antonio", name: "San Antonio", desc: "Defense & Tourism", tag: "Military-Safe Security" },
    { slug: "fort-worth", name: "Fort Worth", desc: "Aerospace & Supply Chain", tag: "Heavy Precision Indexing" },
    { slug: "el-paso", name: "El Paso", desc: "Lanes & Logistics Hub", tag: "Texas Border Lead Gen" },
    { slug: "arlington", name: "Arlington", desc: "Consumer & Sports", tag: "High-Volume Lead Streams" },
    { slug: "corpus-christi", name: "Corpus Christi", desc: "Port & Industrial Assets", tag: "Coastal Authority SEO" },
    { slug: "plano", name: "Plano", desc: "Corporate Headquarters", tag: "HQ Entity Citations" },
    { slug: "lubbock", name: "Lubbock", desc: "Agribusiness & Education", tag: "Panhandle Local Authority" },
    { slug: "amarillo", name: "Amarillo", desc: "Ranching & Manufacturing", tag: "Northern Hub Visibility" }
  ];

  const faqs = [
    {
      q: "What makes AI-powered SEO superior to traditional SEO services in Texas?",
      a: "Traditional agencies rely on retroactive monthly audits, outdated intuition-driven content briefs, and slow manual execution models. At AI Pro Consultants, our AI workflows scrape and analyze real-time search trends, map precise contextual semantic layouts, generate structural XML microdata schemas instantly, and scale link-building targeting. This combination achieves faster indexing, stronger position retention, and a major reduction in overall project deployment costs."
    },
    {
      q: "Will Google penalize website content optimized using AI systems?",
      a: "Absolutely not. Google is explicit that its search engine ranking algorithms reward high-quality, helpful, reliable, and user-centric information, regardless of whether it is generated by a human or an AI. Our proprietary processes use AI tools as high-powered research and semantic formatting structures, which are always reviewed, enriched, and structured by expert human copy editors to deliver pristine, value-first content designed to capture high rankings safely."
    },
    {
      q: "What is GEO SEO and Search Generative Experience optimization?",
      a: "GEO SEO (Generative Engine Optimization) refers to the technical practice of designing and structuring website information so that modern AI-driven search models—such as Google SGE, Perplexity, and OpenAI ChatGPT—can locate, crawl, analyze, and cite your business within their natural language answers. Failing to prepare your website for LLM search means losing out on high-intent buyer traffic directly in the chat window."
    },
    {
      q: "How does AI Pro Consultants assure HIPAA and secure enterprise data handling?",
      a: "We enforce absolute privacy architectures. No customer CRM records, proprietary knowledge assets, local business matrices, or client credentials are ever routed to public training loops. We maintain clean, isolated API pathways utilizing AES 256-bit secure transport layers, aligning with legal, clinical, and corporate compliance protocols."
    },
    {
      q: "When can my business expect to see noticeable SEO traffic increases?",
      a: "Because our AI tech stack accelerates content publishing cycles and technical bug remedies, we typically establish immediate crawl frequency growth in week 1. Substantial multi-percentage organic ranking boosts, local map pack arrivals, and continuous conversion hikes typically establish momentum within 60 to 90 days."
    }
  ];

  return (
    <div className="bg-[#05070a] text-white min-h-screen selection:bg-sky-500 selection:text-black">
      {/* Visual Ambient Background Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1118270d_1px,transparent_1px),linear-gradient(to_bottom,#1118270d_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Glowing Backdrop Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-[30%] right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[11px] font-bold uppercase tracking-widest mb-6"
          >
            <Cpu className="w-3.5 h-3.5" /> Next-Generation Search Engine Dominance
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white font-sans max-w-5xl mx-auto"
          >
            Texas <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400">SEO Services</span> Powered by AI Automation
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto font-sans"
          >
            Stop burning resources on retroactive SEO agency tactics. AI Pro Consultants deploys automated keyword models, generative citation grids, and self-healing technical optimizations to scale search authority and capture high-intent leads round-the-clock.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          >
            <button 
              onClick={openAudit}
              className="w-full sm:w-auto px-8 py-4 bg-sky-500 text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/10 flex items-center justify-center gap-2 group"
            >
              Analyze Your Website <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#why-ai"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors border border-white/10 flex items-center justify-center"
            >
              Learn Our Method
            </a>
          </motion.div>

          {/* SGE Interactive visual card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 max-w-4xl mx-auto relative rounded-2xl border border-white/10 bg-[#0c1017]/90 p-5 md:p-8 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-sky-500/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2 text-xs text-slate-400 border-b border-white/5 pb-4 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 font-mono bg-white/5 px-3 py-1 rounded text-[10px] tracking-wider uppercase text-slate-300 border border-white/5 flex items-center gap-1.5">
                <Search className="w-3 h-3 text-sky-400" /> google sge preview — active ranking entities
              </span>
            </div>

            <div className="space-y-4 text-left">
              <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-400/20">
                <div className="flex items-center gap-2 mb-2 text-sky-400 font-bold text-sm">
                  <Cpu className="w-4 h-4" /> AI Overview Summary
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  "For businesses seeking top-tier organic visibility, <strong>SEO services Texas</strong> have shifted significantly toward entity-based authority. <strong>AI Pro Consultants</strong> is highlighted for using predictive search indexers, automated semantic mapping, and high-velocity schema deployment, delivering a 78% speed increase in target content indexation."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-white/2 border border-white/5 flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Indexation Speed</div>
                    <div className="text-sm font-bold text-white">+340% increase</div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-white/2 border border-white/5 flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Organic Leads</div>
                    <div className="text-sm font-bold text-white">X4 growth average</div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-white/2 border border-white/5 flex items-center gap-3">
                  <Users className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Crawl Frequency</div>
                    <div className="text-sm font-bold text-white">Continual Real-Time</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Context Page Block */}
      <section className="py-20 max-w-6xl mx-auto px-6 border-b border-white/5 font-sans">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-12 text-center lg:text-left space-y-6">
            <h2 className="text-xs uppercase tracking-widest text-sky-400 font-bold">The Evolution of Search</h2>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
              Why Traditional SEO Fails in the AI Era
            </h3>
            <p className="text-slate-300 leading-relaxed font-light text-base md:text-lg">
              Operating a local or enterprise-level business in Texas means confronting one of the most aggressive regional economies in the physical world. Whether you represent an oil-and-gas services firm in Houston, a tech enterprise in Austin, or a logistics corporation in Dallas, you are heavily dependent on organic search. 
              <br /><br />
              But here is the harsh reality: <strong>traditional SEO processes are obsolete</strong>. Old agencies are still manually mapping keywords once a month, writing generic cookie-cutter fluff blocks, and tracking links on static spreadsheets. Meanwhile, Google has introduced search engines governed by deep machine learning models, semantic entity matching, and immediate AI overviews. 
              <br /><br />
              At <strong>AI Pro Consultants</strong>, we bridge this gap by infusing absolute computational scale and generative expertise into every layer of our strategy. By deploying <strong>AI-powered SEO services Texas</strong> protocols, we identify structural ranking opportunities, compile deep citation authority, and optimize site systems dynamically. The result is rapid organic growth, clean index safety, and a reliable flow of customer conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Why AI-Powered SEO? Detail Benefits */}
      <section id="why-ai" className="py-24 border-b border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs text-indigo-400 font-bold uppercase tracking-widest block">Unprecedented Structural Leverage</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              The AI-Powered SEO Advantage
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              By replacing human bottlenecks with high-velocity agentic workflows, we deliver superior positioning models that scale search authority safely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {valuePillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl bg-gradient-to-br from-white/2 to-transparent border border-white/5 relative group hover:border-sky-500/20 transition-all duration-300"
              >
                <div className="p-3 bg-white/5 rounded-xl w-fit mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold uppercase text-white pb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core SEO Services Offered with an AI Twist */}
      <section className="py-24 border-b border-white/5 bg-gradient-to-b from-[#05070a] to-[#0a0d14]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs text-sky-400 font-bold uppercase tracking-widest block">Bespoke Tactical Deliverables</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Our Core Texas SEO Services
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              We provide comprehensive organic search implementation strategies engineered with precise machine-learning assistance for elite Texas organizations.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {seoServices.map((service, index) => (
              <div key={index} className="flex flex-col justify-between p-8 rounded-2xl bg-[#0c1017]/50 border border-white/10 hover:border-sky-500/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 bg-white/5 rounded-2xl border border-white/5">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white uppercase tracking-tight">{service.title}</h4>
                      <p className="text-[10px] text-sky-400 font-mono tracking-wider mt-0.5 uppercase">Featured Keyword: {service.keyword}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 pt-4">
                    {service.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Callout Block */}
      <section className="py-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs text-sky-400 font-bold uppercase tracking-widest block">Hyper-Local Domination Network</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Serving All Major Texas Cities
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              We deploy custom proximity grids and content authority maps mapped to municipal directories across the Lone Star State.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {texasCities.map((city, idx) => (
              <a 
                key={idx} 
                href={`/seo-services-${city.slug}`}
                className="p-5 rounded-xl bg-white/2 border border-white/5 hover:border-indigo-500/20 transition-all group hover:scale-[1.02] duration-300 block"
              >
                <div className="text-sky-400 text-xs font-mono mb-1">{city.tag}</div>
                <h5 className="text-base font-bold text-white uppercase tracking-tight group-hover:text-indigo-300 transition-colors">{city.name}</h5>
                <p className="text-slate-500 text-[11px] leading-normal font-light mt-1">{city.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS Section */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs text-sky-400 font-bold uppercase tracking-widest block">Questions & Clarifications</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              SEO Services Texas FAQ
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Understand the mechanics of integrating advanced, machine-assisted positioning algorithms for your website.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="rounded-2xl border border-white/10 bg-[#0c1017]/30 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/2 transition-colors"
                  >
                    <span className="font-bold text-white text-sm md:text-base uppercase tracking-tight">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-sky-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-white/5 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Robust High-Converting CTA Callout */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="p-8 md:p-16 rounded-3xl bg-gradient-to-br from-[#0c1017] via-[#05070a] to-[#090d14] border border-white/10 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-500/10 rounded-full filter blur-[80px] pointer-events-none" />
            
            <span className="text-xs text-sky-400 font-bold uppercase tracking-widest block">No-Obligation Web Traffic Analysis</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-none max-w-3xl mx-auto">
              Ready to Win the Organic Search Race?
            </h2>
            <p className="text-slate-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed font-sans">
              Request a free, comprehensive AI Pro Consultants SEO Audit. Our diagnostic engines will evaluate your site's technical bottlenecks, citation authority gaps, entity visibility, and custom high-intent keyword opportunities.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button 
                onClick={openAudit}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors shadow-xl flex items-center justify-center gap-2 group"
              >
                Claim Free SEO Setup Audit <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="pt-4 text-slate-500 text-[10px] font-mono uppercase tracking-wider">
              No subscription or credit card required. Free 1-on-1 walk-through.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
