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
  Layers, 
  BarChart3, 
  Globe, 
  LineChart, 
  Target,
  FileSearch,
  Building2,
  BookmarkCheck
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

interface CityData {
  name: string;
  industry: string;
  context: string;
  keyword: string;
  bgColor: string; // Used for icon background classes
  textColor: string; // Used for text highlight classes
  gradientFrom: string; // Color gradient stop
  landmark: string;
  companiesType: string;
  blogUrl: string;
}

const citiesConfig: Record<string, CityData> = {
  houston: {
    name: "Houston",
    industry: "Energy, Manufacturing & Medical Labs",
    context: "From Chevron in the Energy Corridor to the Texas Medical Center, Houston's top-producing firms rely on flawless digital discovery to capture global and local enterprise contracts.",
    keyword: "SEO services Houston",
    bgColor: "bg-sky-500/10 border-sky-500/20 text-sky-400",
    textColor: "text-sky-450",
    gradientFrom: "from-sky-400",
    landmark: "Space Center Houston, the Energy Corridor, or the Galleria corporate hub",
    companiesType: "energy manufacturers, clinic groups, industrial providers, and maritime operators",
    blogUrl: "/blog/ai-automation-agency-houston-tx/"
  },
  dallas: {
    name: "Dallas",
    industry: "Logistics, Corporate Headquarters & Financial Groups",
    context: "Operating in the high-growth DFW metroplex, Dallas enterprises compete across deep corporate and financial landscapes where matching buyer search intent directly converts high-value agreements.",
    keyword: "SEO services Dallas",
    bgColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    textColor: "text-indigo-400",
    gradientFrom: "from-indigo-400",
    landmark: "Reunion Tower, the Downtown Business District, and the Arts District",
    companiesType: "multinational logistics brokers, commercial asset managers, SaaS brands, and high-ticket service operations",
    blogUrl: "/blog/ai-automation-agency-dallas-tx/"
  },
  austin: {
    name: "Austin",
    industry: "Tech Startups, Venture Capital & Scale-Ups",
    context: "In the booming Silicon Hills, traditional search keywords are extremely contested. Stand out with semantic entity-optimized content cluster models that index natively for Google SGE and Perplexity.",
    keyword: "SEO services Austin",
    bgColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    textColor: "text-emerald-400",
    gradientFrom: "from-emerald-400",
    landmark: "The Congress Avenue bridge, Silicon Hills corporate campuses, and South Congress",
    companiesType: "high-growth tech startups, SaaS providers, venture-backed scaleups, and boutique design studios",
    blogUrl: "/blog/ai-automation-agency-austin-tx/"
  },
  "san-antonio": {
    name: "San Antonio",
    industry: "Defense Contractors, Tourism, Medical Hubs & Real Estate",
    context: "Supporting both heavy industrial setups and massive local tourist pipelines, San Antonio organizations require robust, secure Google map-pack dominance and multi-location localized citations.",
    keyword: "SEO services San Antonio",
    bgColor: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    textColor: "text-amber-400",
    gradientFrom: "from-amber-400",
    landmark: "The historic San Antonio River Walk, military bases, and Pearl District",
    companiesType: "federal defense suppliers, clinical health networks, heavy machinery sellers, and hospitality brands",
    blogUrl: "/blog/ai-automation-agency-san-antonio-tx/"
  },
  "fort-worth": {
    name: "Fort Worth",
    industry: "Aviation, Heavy Manufacturing & Defense Contractors",
    context: "With massive operations near Lockheed Martin and Alliance Airport anchor points, Fort Worth manufacturing and corporate suppliers require flawless, error-free commercial search discovery.",
    keyword: "SEO services Fort Worth",
    bgColor: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    textColor: "text-violet-400",
    gradientFrom: "from-violet-400",
    landmark: "Sundance Square, the Heavy Stockyards, and Lockheed Martin aviation spaces",
    companiesType: "defense aerospace suppliers, metal fabricators, industrial logistics companies, and regional contractors",
    blogUrl: "/blog/ai-automation-agency-fort-worth-tx/"
  },
  "el-paso": {
    name: "El Paso",
    industry: "Bilingual Retail, Customs Brokerages & Border Logistics",
    context: "Unlocking the massive international trades crossing the Stanton Street Bridge and BIEC logistics lanes requires bilingual keyword indexing, technical indexing structures, and geographic directory maps.",
    keyword: "SEO services El Paso",
    bgColor: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    textColor: "text-rose-400",
    gradientFrom: "from-rose-400",
    landmark: "Franklin Mountains State Park, international trade bridges, and the Downtown trade block",
    companiesType: "customs brokerages, multi-lingual legal groups, international shippers, and medical device hubs",
    blogUrl: "/blog/ai-automation-agency-el-paso-tx/"
  },
  arlington: {
    name: "Arlington",
    industry: "Consumer Entertainment, Hospitality & Local Home Services",
    context: "Surrounded by AT&T Stadium and Globe Life Field, Arlington consumer-facing businesses must capture huge seasonal search intents with rapid, mobile-first Google local maps rankings.",
    keyword: "SEO services Arlington",
    bgColor: "bg-pink-500/10 border-pink-500/20 text-pink-450",
    textColor: "text-pink-400",
    gradientFrom: "from-pink-450",
    landmark: "The Arlington Entertainment District, AT&T Stadium, and UTA campus grounds",
    companiesType: "hospitality venues, private medical clinics, home services installers, and commercial contractors",
    blogUrl: "/blog/ai-automation-agency-arlington-tx/"
  },
  "corpus-christi": {
    name: "Corpus Christi",
    industry: "Maritime Logistics, Port Operations, Engineering & Legal",
    context: "Leveraging the high-frequency cargo at the Port of Corpus Christi, coastal businesses use high-authority link maps to capture commercial contracts and build geographic trust.",
    keyword: "SEO services Corpus Christi",
    bgColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    textColor: "text-cyan-400",
    gradientFrom: "from-cyan-400",
    landmark: "The busy Port of Corpus Christi, Ocean Drive, and beaches",
    companiesType: "marine engineering consultants, commercial injury litigation firms, shipping agents, and industrial refiners",
    blogUrl: "/blog/ai-automation-agency-corpus-christi-tx/"
  },
  plano: {
    name: "Plano",
    industry: "Multinational Enterprises, Tech Hubs & Professional Services",
    context: "Home to massive global corporate parkways, Plano businesses require elite technical SEO crawls, semantic entity tagging, and enterprise-grade directory synchronization.",
    keyword: "SEO services Plano",
    bgColor: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    textColor: "text-purple-400",
    gradientFrom: "from-purple-400",
    landmark: "Legacy West corporate complex, Toyota headquarters, and corporate row",
    companiesType: "clinical health hubs, management consultancies, regional accounting firms, and B2B software companies",
    blogUrl: "/blog/ai-automation-agency-plano-tx/"
  },
  lubbock: {
    name: "Lubbock",
    industry: "Agribusiness supply, Higher Education & Medical Centers",
    context: "Serving as the undisputed hub of the South Plains, Lubbock enterprises rely on robust county-wide search targeting to pull inbound leads from hundreds of miles away.",
    keyword: "SEO services Lubbock",
    bgColor: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    textColor: "text-orange-400",
    gradientFrom: "from-orange-400",
    landmark: "Texas Tech University, local cotton exchange systems, and medical office routes",
    companiesType: "agricultural suppliers, medical centers, legal groups, and local equipment traders",
    blogUrl: "/blog/ai-automation-agency-lubbock-tx/"
  },
  amarillo: {
    name: "Amarillo",
    industry: "Industrial Distribution, Ranching assets & Regional Travel",
    context: "To capture high-intent buyers across the Texas Panhandle, Amarillo companies rely on automated localized schemas and Google Maps rank-pack systems to command regional market share.",
    keyword: "SEO services Amarillo",
    bgColor: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    textColor: "text-yellow-400",
    gradientFrom: "from-yellow-400",
    landmark: "Historic Route 66, spatial cattle exchange blocks, and Panhandle distribution stations",
    companiesType: "livestock supply brands, regional freight lines, dental groups, and commercial supply houses",
    blogUrl: "/blog/ai-automation-agency-amarillo-tx/"
  }
};

const otherCitiesList = [
  { slug: "houston", name: "Houston" },
  { slug: "dallas", name: "Dallas" },
  { slug: "austin", name: "Austin" },
  { slug: "san-antonio", name: "San Antonio" },
  { slug: "fort-worth", name: "Fort Worth" },
  { slug: "el-paso", name: "El Paso" },
  { slug: "arlington", name: "Arlington" },
  { slug: "corpus-christi", name: "Corpus Christi" },
  { slug: "plano", name: "Plano" },
  { slug: "lubbock", name: "Lubbock" },
  { slug: "amarillo", name: "Amarillo" }
];

interface LocalSEOServicesProps {
  citySlug: string;
}

export default function LocalSEOServices({ citySlug }: LocalSEOServicesProps) {
  const { openAudit } = useModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const city = citiesConfig[citySlug] || citiesConfig.houston;

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const localFaqs = [
    {
      q: `What exactly makes AI-powered SEO superior to standard SEO services in ${city.name}?`,
      a: `Traditional marketing agencies in ${city.name} rely on slow manual audits, cookie-cutter word-count outlines, and lazy, retroactive reporting modules. At AI Pro Consultants, we use state-of-the-art programmatic systems to analyze real-time search trends, reconstruct content clusters matching Google SGE parameters, write accurate local schema code, and optimize local map directories dynamically. This returns faster ranking improvements, lower cost overheads, and immediate increases in incoming organic leads.`
    },
    {
      q: `How long does it take for a ${city.name} business to see positive SEO growth?`,
      a: `Because our AI-enhanced deployment pipeline publishes structured content plans and technical crawl fixes up to 10x faster than traditional manual teams, search bots begin crawling the site with significantly higher frequency in week 1. Our clients typically register ranking leaps, organic telephone inquiries, and first-page map arrivals within 45 to 95 days.`
    },
    {
      q: `Do you build backlinks from other local organizations and directories around ${city.name}?`,
      a: "Yes. Getting your company cited in relevant regional pages is critical to local search strength. Our automated link outreach engines target authoritative regional profiles, municipal organizations, business directories, and trade-aligned networks specifically in Texas to build unbreakable domain relevance."
    },
    {
      q: "Is AI-generated or AI-assisted content safe from Google search quality updates?",
      a: "Yes. Google's official documentation states that search ranking algorithms prioritize helpful, original, informative, and expert information, regardless of whether it is drafted manually or generated code-wise. We draft optimized, deep-topic layouts using proprietary AI models under the strict supervision, editing, and fact-checking of professional SEO writers to guarantee flawless standards."
    },
    {
      q: "Can you synchronize our regional search pipeline directly with our local CRM?",
      a: `Absolutely. We don't just secure organic impressions—we build full business pipelines. When a high-value customer finds your website online and submits an inquiry, our background integrations instantly push the client dossier into platforms like HubSpot, Salesforce, Clio, or localized CRM tools, alerting your team in close to real-time.`
    }
  ];

  return (
    <div className="bg-[#05070a] text-white min-h-screen selection:bg-sky-500 selection:text-black">
      {/* Mesh grid backgrounds */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1118270d_1px,transparent_1px),linear-gradient(to_bottom,#1118270d_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Dynamic ambient color glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-[35%] right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Hero Header Block */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-32 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${city.bgColor} border text-[11px] font-bold uppercase tracking-widest mb-6`}
          >
            <MapPin className="w-3.5 h-3.5" /> Core Regional SEO Services — {city.name}, Texas
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4.5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white font-sans max-w-5xl mx-auto"
          >
            AI-Driven <span className={`text-transparent bg-clip-text bg-gradient-to-r ${city.gradientFrom} via-indigo-400 to-sky-450`}>{city.name} SEO Services</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto font-sans"
          >
            Dominate search results across the {city.name} metroplex. We command target keywords like <strong>{city.keyword}</strong> by infusing computational scale, semantic content cluster mapping, and localized maps optimization.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          >
            <button 
              onClick={openAudit}
              className="w-full sm:w-auto px-8 py-4 bg-sky-500 text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/15 flex items-center justify-center gap-2 group"
            >
              Analyze Your Website <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#local-tactics"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors border border-white/10 flex items-center justify-center"
            >
              View Local Tactics
            </a>
          </motion.div>

          {/* SGE Interactive Preview */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 max-w-4xl mx-auto relative rounded-2xl border border-white/10 bg-[#0c1017]/90 p-5 md:p-8 shadow-2xl text-left"
          >
            <div className="flex items-center gap-2 text-xs text-slate-400 border-b border-white/5 pb-4 mb-5">
              <span className="w-3 h-3 rounded-full bg-red-500/40" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <span className="w-3 h-3 rounded-full bg-green-500/40" />
              <span className="ml-2 font-mono bg-white/5 px-2.5 py-1 rounded text-[10px] tracking-wider uppercase text-slate-400 flex items-center gap-1.5">
                <Search className="w-3 h-3 text-sky-400" /> google overview for query: "{city.keyword}"
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-400/20">
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                  "Organic search algorithms priority is shifting toward localized entities. In <strong>{city.name}, Texas</strong>, successful campaigns require structuring domain schemas around geographic reference markers such as <strong>{city.landmark}</strong>. <strong>AI Pro Consultants</strong> dominates local optimization grids, deploying automated citation nodes and landing environments that load fast and capture high-intent inquiries."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Core Section Context */}
      <section id="local-tactics" className="py-20 border-b border-white/5 font-sans">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {/* Big Intro Paragraph */}
          <div className="space-y-6">
            <h2 className="text-xs uppercase tracking-widest text-sky-400 font-bold">Local Market Dynamics</h2>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight leading-tight">
              Capturing High-Intent Leads in {city.name}'s Fast-Paced Economy
            </h3>
            <p className="text-slate-300 leading-relaxed font-light text-base md:text-lg">
              {city.context} Whether you operate locally or globally, ranking first for competitive queries in the {city.name} area isn't a luxury—it's standard defense. Local buyers have dozens of options at their fingertips. If your website is missing from the top organic spots, your competitors are growing their customer base on your dime.
              <br /><br />
              As the premier <strong>Texas SEO agency</strong>, AI Pro Consultants doesn't use standard, outdated copywriting methods. We deploy highly specialized thematic clusters and semantic schema arrays that prove your location-authority to search bot algorithms instantaneously.
            </p>
          </div>

          <hr className="border-white/5" />

          {/* Hyper-Local SEO Tactics Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-6">
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-xl w-fit">
                <Target className="w-6 h-6 text-sky-400" />
              </div>
              <h4 className="text-xl font-bold uppercase text-white tracking-tight">Geographic Map Domination</h4>
              <p className="text-slate-350 text-sm leading-relaxed font-light">
                We design and maintain complete geographic grids for your Google Business Profile. We match and sync local coordinates across citations, making sure your brand is the leading recommendation inside the highly coveted local 3-pack for queries in {city.name}.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-xl w-fit">
                <Layers className="w-6 h-6 text-indigo-400" />
              </div>
              <h4 className="text-xl font-bold uppercase text-white tracking-tight">On-Page Semantic Optimization</h4>
              <p className="text-slate-350 text-sm leading-relaxed font-light">
                We audit and enrich your text structure. Our automated engines draft specific, deep-value outlines containing precise neighborhood indexes and regional reference hooks (like {city.landmark}) to prove physical proximity to Google's ranking crawlers.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-xl w-fit">
                <Cpu className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold uppercase text-white tracking-tight">Technical Crawler Optimizations</h4>
              <p className="text-slate-350 text-sm leading-relaxed font-light">
                Fast, responsive page architectures are a critical ranking metric. Our programmatic systems clean up broken redirects, compress site resources, configure secure index file sitemaps, and guarantee lightweight mobile page load velocities.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-xl w-fit">
                <Building2 className="w-6 h-6 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold uppercase text-white tracking-tight">The {city.name} Industry Target</h4>
              <p className="text-slate-350 text-sm leading-relaxed font-light">
                While standard agencies treat all cities the same, we build specifically for {city.name}'s prominent <strong>{city.industry}</strong> economic base. We write content tailored specifically for {city.companiesType} seeking premium visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking and Location Network */}
      <section className="py-24 border-b border-white/5 bg-gradient-to-b from-[#05070a] to-[#080b11] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-sky-500/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs text-sky-400 font-bold uppercase tracking-widest block font-mono">Texas Interconnected Hub</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
              Texas SEO Regional Links
            </h2>
            <p className="text-slate-400 text-sm font-light">
              We service businesses in every major urban sector across the state. Access our dedicated AI-powered SEO optimization pages for other regional centers:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <a 
              href="/seo-services-texas"
              className="p-5 rounded-xl bg-sky-500/10 border border-sky-400/20 hover:bg-sky-500/15 transition-all text-center group"
            >
              <div className="text-[10px] text-sky-400 font-mono mb-1 uppercase tracking-widest">Main Landing Page</div>
              <span className="font-bold text-white text-sm uppercase tracking-tight group-hover:text-sky-300 transition-colors">Texas SEO Services</span>
            </a>

            {otherCitiesList.filter(c => c.slug !== citySlug).map((otherCity) => (
              <a 
                key={otherCity.slug}
                href={`/seo-services-${otherCity.slug}`}
                className="p-5 rounded-xl bg-white/2 border border-white/5 hover:border-sky-500/20 transition-all text-center group hover:scale-[1.02] duration-300"
              >
                <div className="text-[10px] text-slate-500 font-mono mb-1 uppercase">Local Optimization</div>
                <span className="font-bold text-white text-sm uppercase tracking-tight group-hover:text-sky-400 transition-colors">{otherCity.name} SEO</span>
              </a>
            ))}
          </div>

          {/* Quick link to matching city blog post if available */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 p-4 px-6 rounded-2xl bg-white/2 border border-white/10 text-xs text-slate-300">
              <BookmarkCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Looking for broad automation strategies in {city.name}? Read our complete guide: <a href={city.blogUrl} className="text-sky-400 hover:text-sky-300 underline font-semibold transition-colors">AI Automation Agency {city.name} Guide</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ Section */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs text-sky-400 font-bold uppercase tracking-widest block font-mono">Answers & Mechanics</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
              {city.name} SEO FAQ
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Understand the core deliverables of integrating advanced machine-enhanced search algorithms.
            </p>
          </div>

          <div className="space-y-4">
            {localFaqs.map((faq, index) => {
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
                    <ChevronDown className={`w-5 h-5 text-sky-450 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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

      {/* Conversion Form / CTAs Block */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="p-8 md:p-16 rounded-3xl bg-gradient-to-br from-[#0c1017] via-[#05070a] to-[#090d14] border border-white/10 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-500/10 rounded-full filter blur-[80px] pointer-events-none" />
            
            <span className="text-xs text-sky-400 font-bold uppercase tracking-widest block font-mono">No-Obligation Search Position Audit</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-none max-w-3xl mx-auto">
              Ready to Win {city.name} Search Leads?
            </h2>
            <p className="text-slate-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed font-sans">
              Request a free, comprehensive SEO audit of your site's physical index, crawl budget speed limits, and high-value keyword potentials across the state.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button 
                onClick={openAudit}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors shadow-xl flex items-center justify-center gap-2 group"
              >
                Claim Free {city.name} SEO Audit <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="pt-4 text-slate-500 text-[10px] font-mono uppercase tracking-wider">
              No charge or credit card required. Clean, detailed blueprints.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
