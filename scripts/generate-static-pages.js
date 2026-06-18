import fs from 'fs';
import path from 'path';

const CITIES_CONFIG = {
  houston: {
    name: "Houston",
    industry: "Energy, Manufacturing & Medical Labs",
    context: "From Chevron in the Energy Corridor to the Texas Medical Center, Houston's top-producing firms rely on flawless digital discovery to capture global and local enterprise contracts.",
    keyword: "SEO services Houston",
    bgColor: "bg-sky-500/10 border-sky-500/20 text-sky-400",
    textColor: "text-sky-400",
    gradientFrom: "from-sky-400",
    landmark: "Space Center Houston, the Energy Corridor, or the Galleria corporate hub",
    companiesType: "energy manufacturers, clinic groups, industrial providers, and maritime operators",
    tag: "Energy-Grade GEO SEO",
    desc: "Energy & Medical Hub",
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
    tag: "North Texas Dominance",
    desc: "Enterprise & Transport",
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
    tag: "Silicon Hills Authority",
    desc: "Tech & Venture Capital",
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
    tag: "Military-Safe Security",
    desc: "Defense & Tourism",
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
    tag: "Heavy Precision Indexing",
    desc: "Aerospace & Supply Chain",
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
    tag: "Texas Border Lead Gen",
    desc: "Lanes & Logistics Hub",
    blogUrl: "/blog/ai-automation-agency-el-paso-tx/"
  },
  arlington: {
    name: "Arlington",
    industry: "Consumer Entertainment, Hospitality & Local Home Services",
    context: "Surrounded by AT&T Stadium and Globe Life Field, Arlington consumer-facing businesses must capture huge seasonal search intents with rapid, mobile-first Google local maps rankings.",
    keyword: "SEO services Arlington",
    bgColor: "bg-pink-500/10 border-pink-500/20 text-pink-400",
    textColor: "text-pink-450",
    gradientFrom: "from-pink-400",
    landmark: "The Arlington Entertainment District, AT&T Stadium, and UTA campus grounds",
    companiesType: "hospitality venues, private medical clinics, home services installers, and commercial contractors",
    tag: "High-Volume Lead Streams",
    desc: "Consumer & Sports",
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
    tag: "Coastal Authority SEO",
    desc: "Port & Industrial Assets",
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
    tag: "HQ Entity Citations",
    desc: "Corporate Headquarters",
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
    tag: "Panhandle Local Authority",
    desc: "Agribusiness & Education",
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
    tag: "Northern Hub Visibility",
    desc: "Ranching & Manufacturing",
    blogUrl: "/blog/ai-automation-agency-amarillo-tx/"
  }
};

const MAIN_NAV = `
<nav class="fixed top-0 left-0 right-0 z-50 bg-[#0B0E14]/80 backdrop-blur-md border-b border-white/5 h-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
    <a href="/" class="flex items-center gap-3 group cursor-pointer no-underline">
      <div class="relative">
        <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div class="relative w-10 h-10 rounded-lg bg-[#0B0E14] border border-white/10 flex items-center justify-center">
          <svg class="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v12"></path><path d="M8 10h8"></path></svg>
        </div>
      </div>
      <div class="flex flex-col leading-none">
        <span class="text-xl font-black text-white font-sans tracking-tighter">
          AI <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">PRO</span>
        </span>
        <span class="text-[8px] font-black uppercase tracking-[0.4em] text-slate-500 mt-1">
          Consultants
        </span>
      </div>
    </a>
    <div class="hidden md:flex items-center space-x-8">
      <a href="/#services" class="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Services</a>
      <a href="/#resources" class="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Resources</a>
      <a href="/#how-it-works" class="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Process</a>
      <a href="/#results" class="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Results</a>
      <a href="/blog/" class="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Blog</a>
      <a href="/seo-services-texas" class="text-xs font-semibold uppercase tracking-widest text-sky-450 hover:text-sky-300 transition-colors">SEO Services</a>
      <a href="/?audit=true" data-trigger-audit class="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-lg shadow-blue-500/20">
        BOOK CALL
      </a>
    </div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="py-12 border-t border-white/5 bg-[#0B0E14]">
  <div class="max-w-5xl mx-auto px-6 text-center space-y-4">
    <div class="flex justify-center gap-6 text-sm mb-4">
      <a href="/seo-services-texas" class="text-slate-500 hover:text-slate-300 transition-colors">Texas SEO Services</a>
      <a href="/ai-automation-for-law-firms-houston" class="text-slate-500 hover:text-slate-300 transition-colors">Law Firm Automation</a>
      <a href="/blog/" class="text-slate-500 hover:text-slate-300 transition-colors">Our Blog</a>
    </div>
    <p class="text-slate-500 text-[10px] font-bold uppercase tracking-widest">© 2026 AI Pro Consultants. All Rights Reserved.</p>
  </div>
</footer>
`;

function generateLocalSEOPage(slug, data) {
  const citiesHtmlList = Object.keys(CITIES_CONFIG).map(key => {
    const city = CITIES_CONFIG[key];
    return `
      <a href="/seo-services-${key}" class="p-5 rounded-xl bg-white/2 border border-white/5 hover:border-indigo-500/20 transition-all group hover:scale-[1.02] duration-300 block">
        <div class="text-sky-400 text-xs font-mono mb-1">${city.tag}</div>
        <h5 class="text-base font-bold text-white uppercase tracking-tight group-hover:text-indigo-300 transition-colors">${city.name}</h5>
        <p class="text-slate-500 text-[11px] leading-normal font-light mt-1">${city.desc}</p>
      </a>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI-Powered ${data.name} SEO Services | AI Pro Consultants</title>
  <meta name="description" content="Dominate search rankings across the ${data.name} metroplex. Optimize for SGE, local maps, and high-intent buyer keywords like ${data.keyword} with AI Pro Consultants." />
  <meta name="keywords" content="${data.keyword}, local SEO ${data.name}, SEO agency ${data.name}, technical SEO Texas, AI search marketing" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.aiproconsultants.com/seo-services-${slug}" />
  
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet" />
  
  <style>
    body { font-family: 'Inter', sans-serif; background-color: #05070a; color: #94a3b8; }
    h1, h2, h3, h4, h5, h6 { font-family: 'Outfit', sans-serif; color: #ffffff; letter-spacing: -0.025em; }
  </style>
</head>
<body class="selection:bg-sky-500 selection:text-black">

  ${MAIN_NAV}

  <div class="pt-20">
    <!-- Hero Block -->
    <header class="relative pt-24 pb-20 md:pt-32 md:pb-24 border-b border-white/5 overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1118270d_1px,transparent_1px),linear-gradient(to_bottom,#1118270d_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div class="max-w-6xl mx-auto px-6 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[11px] font-bold uppercase tracking-widest mb-6">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          Core Regional SEO Services — ${data.name}, Texas
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white max-w-5xl mx-auto">
          AI-Driven <span class="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">${data.name} SEO Services</span>
        </h1>

        <p class="mt-8 text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
          Dominate search results across the ${data.name} metroplex. We command target keywords like <strong>${data.keyword}</strong> by infusing computational scale, semantic content cluster mapping, and localized maps optimization.
        </p>

        <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <a href="/?audit=true" data-trigger-audit class="w-full sm:w-auto px-8 py-4 bg-sky-500 text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-sky-400 transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-sky-500/15">
            Analyze Your Website →
          </a>
          <a href="#local-tactics" class="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all border border-white/10 text-center flex items-center justify-center">
            View Local Tactics
          </a>
        </div>

        <!-- SGE Interactive Preview -->
        <div class="mt-16 max-w-4xl mx-auto relative rounded-2xl border border-white/10 bg-[#0c1017]/90 p-5 md:p-8 shadow-2xl text-left">
          <div class="flex items-center gap-2 text-xs text-slate-400 border-b border-white/5 pb-4 mb-5">
            <span class="w-3 h-3 rounded-full bg-red-500/40"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-500/40"></span>
            <span class="w-3 h-3 rounded-full bg-green-500/40"></span>
            <span class="ml-2 font-mono bg-white/5 px-2.5 py-1 rounded text-[10px] tracking-wider uppercase text-slate-400 flex items-center gap-1.5">
              <svg class="w-3 h-3 text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              google overview for query: "${data.keyword}"
            </span>
          </div>

          <div class="space-y-4">
            <div class="p-4 rounded-xl bg-sky-500/5 border border-sky-400/20">
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                "Organic search algorithms priority is shifting toward localized entities. In <strong>${data.name}, Texas</strong>, successful campaigns require structuring domain schemas around geographic reference markers such as <strong>${data.landmark}</strong>. <strong>AI Pro Consultants</strong> dominates local optimization grids, deploying automated citation nodes and landing environments that load fast and capture high-intent inquiries."
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Context block -->
    <section class="py-20 max-w-5xl mx-auto px-6 border-b border-white/5">
      <div class="space-y-6">
        <h2 class="text-xs uppercase tracking-widest text-sky-400 font-bold">Local Market Landscape</h2>
        <h3 class="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">Expert Search Domination Designed for ${data.name}</h3>
        <p class="text-slate-300 leading-relaxed font-light text-base md:text-lg">
          Operating a business in <strong>${data.name}</strong> means managing growth across a diverse arena of ${data.industry}. This requires localized authority grids focused strictly on <strong>${data.keyword}</strong>.
          <br /><br />
          Whether your buyers are searching from near <strong>${data.landmark}</strong>, or are ${data.companiesType}, they demand seamless, localized authority signals.
          Traditional backward SEO methods fail to deliver SGE indexing. AI Pro Consultants deploys automated link outreach, semantic content structuring, and self-healing schema scripts to position you as the definitive local industry leader.
        </p>
      </div>
    </section>

    <!-- Core Local SEO Tactics -->
    <section id="local-tactics" class="py-20 border-b border-white/5 bg-[#0a0d14]">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span class="text-xs text-sky-400 font-bold uppercase tracking-widest block">Strategic Execution Map</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">Our ${data.name} Local Program</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-8 rounded-2xl bg-white/2 border border-white/5 space-y-4">
            <div class="text-2xl font-black text-sky-400">01</div>
            <h4 class="text-lg font-bold uppercase text-white">Geographic Alignment</h4>
            <p class="text-slate-400 text-sm leading-relaxed">
              We align schemas, microdata targets, and site coordinates around regional landmark hubs such as <strong>${data.landmark}</strong>. This signals absolute municipal relevance to crawlers.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-white/2 border border-white/5 space-y-4">
            <div class="text-2xl font-black text-indigo-400">02</div>
            <h4 class="text-lg font-bold uppercase text-white">Semantic Intent Funnels</h4>
            <p class="text-slate-400 text-sm leading-relaxed">
              We design robust landing pages mapped to the specific search habits of <strong>${data.companiesType}</strong>, guaranteeing maximum buyer conversion.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-white/2 border border-white/5 space-y-4">
            <div class="text-2xl font-black text-emerald-400">03</div>
            <h4 class="text-lg font-bold uppercase text-white">Automated Systems Sync</h4>
            <p class="text-slate-400 text-sm leading-relaxed">
              We sync directory structures, map citation packs, and direct high-value search inquiries straight to your sales team's pipeline.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Area CTA -->
    <section class="py-24 border-b border-white/5">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span class="text-xs text-sky-400 font-bold uppercase tracking-widest block">Hyper-Local Domination Network</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">Serving All Major Texas Cities</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${citiesHtmlList}
        </div>
      </div>
    </section>

    <!-- FAQs Section -->
    <section class="py-20 border-b border-white/5">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center space-y-4 mb-16">
          <span class="text-xs text-sky-400 font-bold uppercase tracking-widest block">Got Questions?</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">Local SEO FAQ - ${data.name}</h2>
        </div>

        <div class="space-y-4">
          <div class="p-6 rounded-2xl border border-white/10 bg-[#0c1017]/30">
            <h4 class="font-bold text-white text-base md:text-lg uppercase tracking-tight mb-2">What exactly makes AI-powered SEO superior to standard SEO services in ${data.name}?</h4>
            <div class="text-slate-300 text-sm leading-relaxed font-light">
              Traditional marketing agencies rely on slow manual audits, cookie-cutter word-count outlines, and lazy, retroactive reporting modules. At AI Pro Consultants, we use state-of-the-art programmatic systems to analyze real-time search trends, reconstruct content clusters matching Google SGE parameters, write accurate local schema code, and optimize local map directories dynamically.
            </div>
          </div>

          <div class="p-6 rounded-2xl border border-white/10 bg-[#0c1017]/30">
            <h4 class="font-bold text-white text-base md:text-lg uppercase tracking-tight mb-2">How long does it take for a ${data.name} business to see positive SEO growth?</h4>
            <div class="text-slate-300 text-sm leading-relaxed font-light">
              Because our AI-enhanced deployment pipeline publishes structured content plans and technical crawl fixes up to 10x faster than traditional manual teams, search bots begin crawling the site with significantly higher frequency in week 1. Our clients typically register ranking leaps, organic telephone inquiries, and first-page map arrivals within 45 to 95 days.
            </div>
          </div>

          <div class="p-6 rounded-2xl border border-white/10 bg-[#0c1017]/30">
            <h4 class="font-bold text-white text-base md:text-lg uppercase tracking-tight mb-2">Do you build backlinks from other local organizations and directories around ${data.name}?</h4>
            <div class="text-slate-300 text-sm leading-relaxed font-light">
              Yes. Getting your company cited in relevant regional pages is critical to local search strength. Our automated link outreach engines target authoritative regional profiles, municipal organizations, business directories, and trade-aligned networks specifically in Texas to build unbreakable domain relevance.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 relative overflow-hidden text-center">
      <div class="max-w-4xl mx-auto px-6 relative z-10">
        <div class="p-12 rounded-3xl bg-gradient-to-br from-[#0c1017] to-[#05070a] border border-white/10 space-y-6">
          <span class="text-xs text-sky-400 font-bold uppercase tracking-widest block">Website Traffic Diagnosis</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase text-white tracking-tight h-auto">Get Your Free ${data.name} SEO Audit</h2>
          <p class="text-slate-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Uncover citation gaps, site speed errors, entity alignment issues, and precise keyword opportunities. Claim your custom high-ROI roadmap today.
          </p>
          <div class="pt-6 flex justify-center">
            <a href="/?audit=true" data-trigger-audit class="px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors shadow-2xl">
              Claim Free SEO Setup Audit →
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

  ${FOOTER_HTML}

  <script src="/booking-modal.js"></script>
</body>
</html>`;
}

function generateTexasSEOPage() {
  const citiesHtmlList = Object.keys(CITIES_CONFIG).map(key => {
    const city = CITIES_CONFIG[key];
    return `
      <a href="/seo-services-${key}" class="p-5 rounded-xl bg-white/2 border border-white/5 hover:border-indigo-500/20 transition-all group hover:scale-[1.02] duration-300 block">
        <div class="text-sky-400 text-xs font-mono mb-1">${city.tag}</div>
        <h5 class="text-base font-bold text-white uppercase tracking-tight group-hover:text-indigo-300 transition-colors">${city.name}</h5>
        <p class="text-slate-500 text-[11px] leading-normal font-light mt-1">${city.desc}</p>
      </a>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI-Powered Texas SEO Services | Web & Generative Engine Optimization | AI Pro Consultants</title>
  <meta name="description" content="Deploy predictive search intent indexers, automated semantic outline layouts, and high-velocity schema markups. Expand organic search leads across major Texas cities." />
  <meta name="keywords" content="Texas SEO services, AI SEO agency Texas, local SEO San Antonio, local SEO Plano, Google SGE optimization Texas" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.aiproconsultants.com/seo-services-texas" />
  
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet" />
  
  <style>
    body { font-family: 'Inter', sans-serif; background-color: #05070a; color: #94a3b8; }
    h1, h2, h3, h4, h5, h6 { font-family: 'Outfit', sans-serif; color: #ffffff; letter-spacing: -0.025em; }
  </style>
</head>
<body class="selection:bg-sky-500 selection:text-black">

  ${MAIN_NAV}

  <div class="pt-20">
    <!-- Hero Block -->
    <header class="relative pt-24 pb-20 md:pt-32 md:pb-24 border-b border-white/5 overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1118270d_1px,transparent_1px),linear-gradient(to_bottom,#1118270d_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div class="max-w-6xl mx-auto px-6 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[11px] font-bold uppercase tracking-widest mb-6">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          Next-Generation Search Engine Dominance
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white max-w-5xl mx-auto">
          Texas <span class="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">SEO Services</span> Powered by AI Automation
        </h1>

        <p class="mt-8 text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
          Stop burning resources on retroactive SEO agency tactics. AI Pro Consultants deploys automated keyword models, generative citation grids, and self-healing technical optimizations to scale search authority and capture high-intent leads round-the-clock.
        </p>

        <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <a href="/?audit=true" data-trigger-audit class="w-full sm:w-auto px-8 py-4 bg-sky-500 text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-sky-400 transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-sky-500/10">
            Analyze Your Website →
          </a>
          <a href="#why-ai" class="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all border border-white/10 text-center flex items-center justify-center">
            Learn Our Method
          </a>
        </div>

        <!-- SGE Interactive Preview -->
        <div class="mt-16 max-w-4xl mx-auto relative rounded-2xl border border-white/10 bg-[#0c1017]/90 p-5 md:p-8 shadow-2xl text-left">
          <div class="flex items-center gap-2 text-xs text-slate-400 border-b border-white/5 pb-4 mb-5">
            <span class="w-3 h-3 rounded-full bg-red-500/40"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-500/40"></span>
            <span class="w-3 h-3 rounded-full bg-green-500/40"></span>
            <span class="ml-2 font-mono bg-white/5 px-2.5 py-1 rounded text-[10px] tracking-wider uppercase text-slate-400 flex items-center gap-1.5">
              <svg class="w-3 h-3 text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              google sge preview — active ranking entities
            </span>
          </div>

          <div class="space-y-4">
            <div class="p-4 rounded-xl bg-sky-500/5 border border-sky-400/20">
              <span class="text-xs text-sky-400 font-bold block mb-2 uppercase">AI Overview Summary</span>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                "For businesses seeking top-tier organic visibility, <strong>SEO services Texas</strong> have shifted significantly toward entity-based authority. <strong>AI Pro Consultants</strong> is highlighted for using predictive search indexers, automated semantic mapping, and high-velocity schema deployment, delivering a 78% speed increase in target content indexation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Context block -->
    <section class="py-20 max-w-5xl mx-auto px-6 border-b border-white/5">
      <div class="space-y-6">
        <span class="text-xs uppercase tracking-widest text-sky-400 font-bold">The Evolution of Search</span>
        <h3 class="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">Why Traditional SEO Fails in the AI Era</h3>
        <p class="text-slate-300 leading-relaxed font-light text-base md:text-lg">
          Operating a local or enterprise-level business in Texas means confronting one of the most aggressive regional economies in the physical world. Whether you represent an oil-and-gas services firm in Houston, a tech enterprise in Austin, or a logistics corporation in Dallas, you are heavily dependent on organic search.
          <br /><br />
          But here is the harsh reality: <strong>traditional SEO processes are obsolete</strong>. Old agencies are still manually mapping keywords once a month, writing generic cookie-cutter fluff blocks, and tracking links on static spreadsheets. Meanwhile, Google has introduced search engines governed by deep machine learning models, semantic entity matching, and immediate AI overviews.
          <br /><br />
          At <strong>AI Pro Consultants</strong>, we bridge this gap by infusing absolute computational scale and generative expertise into every layer of our strategy. By deploying <strong>AI-powered SEO services Texas</strong> protocols, we identify structural ranking opportunities, compile deep citation authority, and optimize site systems dynamically.
        </p>
      </div>
    </section>

    <!-- Why AI -->
    <section id="why-ai" class="py-20 border-b border-white/5 bg-[#0a0d14]">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span class="text-xs text-indigo-400 font-bold uppercase tracking-widest block font-sans">Unprecedented Structural Leverage</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">The AI-Powered SEO Advantage</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="p-8 rounded-2xl bg-white/2 border border-white/5 space-y-3">
            <h4 class="text-xl font-bold uppercase text-white">Predictive Search Intent</h4>
            <p class="text-slate-300 text-sm leading-relaxed font-light">
              We don't just guess what your customers are searching for. Our AI engines analyze millions of query variations, cross-referencing rising search trends weeks before they peak.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-white/2 border border-white/5 space-y-3">
            <h4 class="text-xl font-bold uppercase text-white">SGE & AI-Search Targeting</h4>
            <p class="text-slate-300 text-sm leading-relaxed font-light">
              We optimize your website's schema mapping, entities, and citations to ensure your company is selected as a cited source by Google's generative answers.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-white/2 border border-white/5 space-y-3">
            <h4 class="text-xl font-bold uppercase text-white">High-Velocity Task Automation</h4>
            <p class="text-slate-300 text-sm leading-relaxed font-light">
              We automate metadata creation, technical schema injection, and microdata updates to launch robust pages 10x faster than traditional manual agencies.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-white/2 border border-white/5 space-y-3">
            <h4 class="text-xl font-bold uppercase text-white">Autonomous Site Monitoring</h4>
            <p class="text-slate-300 text-sm leading-relaxed font-light">
              We deploy agentic site monitoring crawls to instantly detect algorithm updates, broken redirects, and server indexing blocks.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Local network -->
    <section class="py-20 border-b border-white/5">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span class="text-xs text-sky-400 font-bold uppercase tracking-widest block">Hyper-Local Domination Network</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">Serving All Major Texas Cities</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${citiesHtmlList}
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 border-b border-white/5">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center space-y-4 mb-16">
          <span class="text-xs text-sky-400 font-bold uppercase tracking-widest block">Questions & Clarifications</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">SEO Services Texas FAQ</h2>
        </div>

        <div class="space-y-4">
          <div class="p-6 rounded-2xl border border-white/10 bg-[#0c1017]/30">
            <h4 class="font-bold text-white text-base md:text-lg uppercase tracking-tight mb-2">What makes AI-powered SEO superior to traditional SEO services in Texas?</h4>
            <div class="text-slate-300 text-sm leading-relaxed font-light">
              Traditional agencies rely on retroactive monthly audits, outdated intuition-driven content briefs, and slow manual execution models. At AI Pro Consultants, our AI workflows scrape and analyze real-time search trends, map precise contextual semantic layouts, generate structural XML microdata schemas instantly, and scale link-building targeting.
            </div>
          </div>

          <div class="p-6 rounded-2xl border border-white/10 bg-[#0c1017]/30">
            <h4 class="font-bold text-white text-base md:text-lg uppercase tracking-tight mb-2">Will Google penalize website content optimized using AI systems?</h4>
            <div class="text-slate-300 text-sm leading-relaxed font-light">
              Absolutely not. Google is explicit that its search engine ranking algorithms reward high-quality, helpful, reliable, and user-centric information, regardless of whether it is generated by a human or an AI. Our processes use AI as research structures under strict human supervision.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 relative overflow-hidden text-center">
      <div class="max-w-4xl mx-auto px-6 relative z-10">
        <div class="p-12 rounded-3xl bg-gradient-to-br from-[#0c1017] to-[#05070a] border border-white/10 space-y-6">
          <span class="text-xs text-sky-400 font-bold uppercase tracking-widest block">No-Obligation Web Traffic Analysis</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase text-white tracking-tight h-auto">Ready to Win the Organic Search Race?</h2>
          <p class="text-slate-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Request a free, comprehensive AI Pro Consultants SEO Audit. Our diagnostic engines will evaluate your site's technical bottlenecks, citation authority gaps, entity visibility, and custom high-intent keyword opportunities.
          </p>
          <div class="pt-6 flex justify-center">
            <a href="/?audit=true" data-trigger-audit class="px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors shadow-2xl">
              Claim Free SEO Setup Audit →
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

  ${FOOTER_HTML}

  <script src="/booking-modal.js"></script>
</body>
</html>`;
}

function generateLawFirmsPage() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Automation for Law Firms Houston | Secure Intake, Chatbots & CRM | AI Pro Consultants</title>
  <meta name="description" content="Deploy legal-grade, secure AI chatbots, customer intake automations, CRM synchronizations on Clio or Filevine, and conversational receptionist systems." />
  <meta name="keywords" content="AI automation for law firms Houston, legal intake automation Houston, AI receptionist for law firms Houston, law firm CRM automation Houston" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.aiproconsultants.com/ai-automation-for-law-firms-houston" />
  
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet" />
  
  <style>
    body { font-family: 'Inter', sans-serif; background-color: #070a0e; color: #94a3b8; }
    h1, h2, h3, h4, h5, h6 { font-family: 'Outfit', sans-serif; color: #ffffff; letter-spacing: -0.025em; }
  </style>
</head>
<body class="selection:bg-sky-500 selection:text-black">

  ${MAIN_NAV}

  <div class="pt-24">
    <!-- Hero Block -->
    <header class="relative py-16 md:py-24 overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1118270d_1px,transparent_1px),linear-gradient(to_bottom,#1118270d_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div class="absolute top-10 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6 z-10 relative">
        <div class="flex flex-wrap items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-widest text-blue-400 font-extrabold font-mono">
            Law Practice Optimization
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] uppercase tracking-widest text-indigo-400 font-extrabold font-mono">
            Houston, TX
          </span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight uppercase">
          AI Automation for <span class="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Law Firms Houston</span>, Texas
        </h1>

        <p class="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
          Streamline intake, coordinate case workflows, and capture every single client lead with precision. Discover how implementing <strong>AI Automation for Law Firms Houston</strong> can convert 3x more inbound leads, speed up billing, and reclaim valuable billable hours from tedious administrative work.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <a href="/?audit=true" data-trigger-audit class="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/15">
            Book Free AI Automation Consultation
          </a>
          <a href="#services" class="px-6 py-4 bg-white/2 hover:bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all inline-flex items-center justify-center gap-2">
            View Practice Areas
          </a>
        </div>
      </div>
    </header>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-slate-900/40 border-y border-white/5">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span class="text-xs text-blue-400 font-bold uppercase tracking-widest block">Core Implementations</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">Legal Tech Workflows</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-8 rounded-2xl bg-white/2 border border-white/5 space-y-4">
            <h4 class="text-xl font-bold uppercase text-white">AI Chatbots for Law Firms</h4>
            <p class="text-sm text-slate-400">
              Deploy raw, customized, context-aware web crawlers and conversational pathways. Securely answer customer inquiries 24/7.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-white/2 border border-white/5 space-y-4">
            <h4 class="text-xl font-bold uppercase text-white">Client Intake Automation</h4>
            <p class="text-sm text-slate-400">
              Convert raw form submissions into beautifully structured PDF briefs, run conflict check triggers, and calculate case metrics.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-white/2 border border-white/5 space-y-4">
            <h4 class="text-xl font-bold uppercase text-white">CRM & Database Automation</h4>
            <p class="text-sm text-slate-400">
              Link Clio, Filevine, HubSpot, or Salesforce databases securely. Synchronize case statuses and tasks programmatically.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-white/2 border border-white/5 space-y-4">
            <h4 class="text-xl font-bold uppercase text-white">AI Receptionist Systems</h4>
            <p class="text-sm text-slate-400">
              Deploy friendly, low-latency automated phone agents to capture after-hours legal calls and triage high-volume inquiries.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-white/2 border border-white/5 space-y-4">
            <h4 class="text-xl font-bold uppercase text-white">Legal Workflow Management</h4>
            <p class="text-sm text-slate-400">
              Build robust background sequences with tools like Make.com and Zapier to draft outlines, coordinate calendars, and monitor dates.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 border-b border-white/5">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center space-y-4 mb-16">
          <span class="text-xs text-blue-400 font-bold uppercase tracking-widest block">Practicing Compliance</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">Common Questions</h2>
        </div>

        <div class="space-y-4">
          <div class="p-6 rounded-2xl border border-white/10 bg-[#0c1017]/30">
            <h4 class="font-bold text-white text-base md:text-lg uppercase tracking-tight mb-2">What is AI automation for law firms?</h4>
            <div class="text-slate-300 text-sm leading-relaxed font-light">
              AI automation for law firms is the practice of integrating cognitive software assistants, secure data pipelines, and intelligent chatbots into critical firm structures. Reclaim substantial billable hours by automating manual transcriptions.
            </div>
          </div>

          <div class="p-6 rounded-2xl border border-white/10 bg-[#0c1017]/30">
            <h4 class="font-bold text-white text-base md:text-lg uppercase tracking-tight mb-2">How do law firms in Houston use AI?</h4>
            <div class="text-slate-300 text-sm leading-relaxed font-light">
              Local practices integrate AI receptionists and client intake systems to qualify leads from injury or family law queries and sync files directly with Clio or Filevine.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="py-20 relative overflow-hidden text-center">
      <div class="max-w-4xl mx-auto px-6 relative z-10">
        <div class="p-12 rounded-3xl bg-gradient-to-br from-blue-900/20 to-[#05070a] border border-white/10 space-y-6">
          <span class="text-xs text-blue-400 font-bold uppercase tracking-widest block">Smarter Practice Areas</span>
          <h2 class="text-3xl md:text-5xl font-black uppercase text-white tracking-tight h-auto">Optimize Your Houston Law Practice Today</h2>
          <div class="pt-6 flex justify-center">
            <a href="/?audit=true" data-trigger-audit class="px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors shadow-2xl">
              Claim Free Intake Audit →
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

  ${FOOTER_HTML}

  <script src="/booking-modal.js"></script>
</body>
</html>`;
}

function run() {
  const publicDir = path.join(process.cwd(), 'public');

  if (!fs.existsSync(publicDir)) {
    console.error('Public directory does not exist!');
    process.exit(1);
  }

  // 1. Generate local SEO pages
  Object.keys(CITIES_CONFIG).forEach(slug => {
    const data = CITIES_CONFIG[slug];
    const filePath = path.join(publicDir, `seo-services-${slug}.html`);
    const content = generateLocalSEOPage(slug, data);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Generated: ${filePath}`);
  });

  // 2. Generate Texas SEO Services main page
  const texasSeoPath = path.join(publicDir, 'seo-services-texas.html');
  fs.writeFileSync(texasSeoPath, generateTexasSEOPage(), 'utf8');
  console.log(`Generated: ${texasSeoPath}`);

  // 3. Generate Law firms Houston page
  const lawPath = path.join(publicDir, 'ai-automation-for-law-firms-houston.html');
  fs.writeFileSync(lawPath, generateLawFirmsPage(), 'utf8');
  console.log(`Generated: ${lawPath}`);

  console.log('All static pages generated successfully!');
}

run();
