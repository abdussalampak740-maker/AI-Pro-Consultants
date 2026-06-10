import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  Layers, 
  Link as LinkIcon, 
  AlertOctagon, 
  Check, 
  Copy, 
  ExternalLink,
  Sliders,
  Sparkles,
  Info,
  ChevronDown,
  Navigation,
  BookOpen,
  Monitor,
  HeartPulse,
  ShoppingBag,
  GitCompare,
  Home,
  MapPin,
  TrendingUp,
  Award
} from 'lucide-react';

export interface KeywordMapItem {
  path: string;
  name: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'Commercial' | 'Transactional' | 'Informational' | 'Navigational';
  pageType: 'Homepage' | 'Ultimate Pillar Guide' | 'Service Solution Landing Page' | 'Industry Vertical Page' | 'Geo-Local SEO Hub' | 'Statewide Geo-SEO Hub' | 'Comparative Review / Platform Comparison';
  recommendedTitle: string;
  recommendedH1: string;
  cannibalizationRisk: {
    score: number; // 0-100
    riskDescription: string;
    preventionStrategy: string;
  };
  internalLinks: {
    target: string;
    anchorText: string;
    contextDescription: string;
  }[];
}

const KEYWORD_MAP_ITEMS: KeywordMapItem[] = [
  {
    path: '/',
    name: 'Home Page',
    primaryKeyword: 'AI automation agency',
    secondaryKeywords: [
      'AI consulting services', 
      'custom LLM chatbots', 
      'AI voice agents agency', 
      'cognitive workflow integrations', 
      'business process automation with AI'
    ],
    searchIntent: 'Commercial',
    pageType: 'Homepage',
    recommendedTitle: 'AI Automation Agency | Custom Workflows, Chatbots & Voice Systems',
    recommendedH1: 'TOP-RATED AI AUTOMATION AGENCY FOR HIGH-GROWTH ENTERPRISES',
    cannibalizationRisk: {
      score: 15,
      riskDescription: 'As the root page, there is a risk of dilution because it mentions several core services (workflows, voice, chatbots) which have their own dedicated landing pages.',
      preventionStrategy: 'Keep the copy on the home page oriented entirely around high-level service architecture, agency values, aggregated client outcomes, and trust factors. Rely on distinct sub-pages to target high-intent technical long-tails.'
    },
    internalLinks: [
      { target: '/ai-workflow-automation.html', anchorText: 'AI workflow automation services', contextDescription: 'Directing visitors to the specialized process engineering solution.' },
      { target: '/llm-chatbot-development.html', anchorText: 'custom LLM chatbots', contextDescription: 'Directing visitors to our advanced conversational logic solutions.' },
      { target: '/ai-voice-agents-guide.html', anchorText: 'AI voice agents', contextDescription: 'Directing visitors to our telephone/outbound automation guide.' },
      { target: '/blog/ai-automation-texas/', anchorText: 'AI automation Texas', contextDescription: 'Guiding regional Texas businesses looking for geographic deployment.' }
    ]
  },
  {
    path: '/ai-automation-guide-for-b2b.html',
    name: 'B2B AI Automation Ultimate Guide',
    primaryKeyword: 'B2B AI automation',
    secondaryKeywords: [
      'AI automation for B2B sales', 
      'B2B sales lead acceleration with AI', 
      'CRM lead qualification automations', 
      'SaaS sales pipeline optimization'
    ],
    searchIntent: 'Informational',
    pageType: 'Ultimate Pillar Guide',
    recommendedTitle: 'B2B AI Automation: Step-by-Step Sales & Workflow Guide (2026)',
    recommendedH1: 'B2B AI AUTOMATION: SCALE SALES AND BACKEND PIPELINES WITHOUT HEADCOUNT',
    cannibalizationRisk: {
      score: 35,
      riskDescription: 'Overlaps slightly with general workflow automation. Some searchers querying "business process automation with AI" might hit both pages.',
      preventionStrategy: 'Force a strict thematic divider: keep this article focused strictly on B2B business concepts—SDR/AE scaling, marketing lead triage, sales pipelines, metrics, and CRM deals. Leave the physical server config/APIs to the main Workflow page.'
    },
    internalLinks: [
      { target: '/ai-workflow-automation.html', anchorText: 'AI workflow automation services', contextDescription: 'Link embedded in the CRM process description to link business value to construction.' },
      { target: '/llm-chatbot-development.html', anchorText: 'LLM chatbot development', contextDescription: 'Connecting sales reps conversation scaling to custom GPT interfaces.' },
      { target: '/n8n-vs-make-vs-zapier.html', anchorText: 'n8n vs Make vs Zapier', contextDescription: 'Directing buyers comparing platforms for SaaS integration.' }
    ]
  },
  {
    path: '/ai-workflow-automation.html',
    name: 'AI Workflow Automation Service Page',
    primaryKeyword: 'AI workflow automation services',
    secondaryKeywords: [
      'business process automation with AI', 
      'CRM workflow automation', 
      'n8n automation agency', 
      'Make.com integrations for business',
      'enterprise SaaS integrations'
    ],
    searchIntent: 'Transactional',
    pageType: 'Service Solution Landing Page',
    recommendedTitle: 'Enterprise AI Workflow Automation Services | Custom n8n & Make Agency',
    recommendedH1: 'SCALE OPERATIONS WITH ENTERPRISE AI WORKFLOW AUTOMATION SERVICES',
    cannibalizationRisk: {
      score: 25,
      riskDescription: 'Competes directly with platform-specific custom searches (like n8n automation vs Make automation) if not properly structured as the umbrella node.',
      preventionStrategy: 'Structure this page around actual service deliverables: the engineering methodology, system audit steps, and security clearances. Link out to the n8n comparison guide for deeper product comparisons.'
    },
    internalLinks: [
      { target: '/', anchorText: 'expert AI automation agency', contextDescription: 'Trust signals pointing back to the core brand.' },
      { target: '/n8n-vs-make-vs-zapier.html', anchorText: 'n8n vs Make.com vs Zapier comparison', contextDescription: 'Directing users from general workflow to detailed platform selection.' },
      { target: '/healthcare-ai-automation.html', anchorText: 'HIPAA-compliant healthcare automations', contextDescription: 'Highlighting deep security capabilities in vertical clinics.' }
    ]
  },
  {
    path: '/llm-chatbot-development.html',
    name: 'Custom LLM Chatbot Development Service Page',
    primaryKeyword: 'custom LLM chatbots',
    secondaryKeywords: [
      'corporate LLM chatbot architecture', 
      'AI chatbot development services', 
      'custom-trained business chatbots', 
      'safe enterprise conversational bots'
    ],
    searchIntent: 'Transactional',
    pageType: 'Service Solution Landing Page',
    recommendedTitle: 'Custom LLM Chatbots & AI Chatbot Development Services | AI Pro',
    recommendedH1: 'SECURE CUSTOM LLM CHATBOTS FOR ENTERPRISE WORKFLOWS',
    cannibalizationRisk: {
      score: 20,
      riskDescription: 'Risk of conflicting with informational blog posts comparing human support with chatbots.',
      preventionStrategy: 'Focus on technical mechanics, system integration specs (vector stores, context window tokens, RAG framework, data security) and service delivery packages, while blog content concentrates on pros/cons and costs.'
    },
    internalLinks: [
      { target: '/ai-workflow-automation.html', anchorText: 'automated backend workflows', contextDescription: 'Connecting the front-end conversational interface with deep backend process routing.' },
      { target: '/ai-voice-agents-guide.html', anchorText: 'conversational voice agents', contextDescription: 'Linking chat models to telephone speech interfaces.' }
    ]
  },
  {
    path: '/ai-voice-agents-guide.html',
    name: 'AI Voice Agents Guide',
    primaryKeyword: 'AI voice agents',
    secondaryKeywords: [
      'conversational voice AI guide', 
      'low-latency phone AI agents', 
      'custom voice AI callers', 
      'automated intake voice systems'
    ],
    searchIntent: 'Informational',
    pageType: 'Ultimate Pillar Guide',
    recommendedTitle: 'AI Voice Agents: Complete Guide to Local Voice Assistants (2026)',
    recommendedH1: 'AI VOICE AGENTS: THE COMPLETE IMPLEMENTATION & CALL PIPELINE GUIDE',
    cannibalizationRisk: {
      score: 10,
      riskDescription: 'Minimal risk, as speech-to-text voice telephony is highly distinct from visual screen chat bots.',
      preventionStrategy: 'Keep the technical explanations strictly centered on telephone-specific concerns (SIP trunking, WebRTC, low-latency API turnarounds under 500ms, speech VAD nodes, and ElevenLabs/Vapi integrations).'
    },
    internalLinks: [
      { target: '/healthcare-ai-automation.html', anchorText: 'EHR-integrated medical voice callers', contextDescription: 'Directing healthcare providers to HIPAA voice booking use cases.' },
      { target: '/llm-chatbot-development.html', anchorText: 'custom LLM chatbots', contextDescription: 'Linking auditory voice models to text-only web chats.' }
    ]
  },
  {
    path: '/healthcare-ai-automation.html',
    name: 'Healthcare AI Automation Page',
    primaryKeyword: 'healthcare AI automation',
    secondaryKeywords: [
      'HIPAA compliant AI developers', 
      'automated medical scheduling systems', 
      'AI in healthcare clinics', 
      'EHR AI integrations'
    ],
    searchIntent: 'Transactional',
    pageType: 'Industry Vertical Page',
    recommendedTitle: 'HIPAA-Compliant Healthcare AI Automation Services',
    recommendedH1: 'HIPAA-COMPLIANT HEALTHCARE AI AUTOMATION & CLINIC WORKFLOWS',
    cannibalizationRisk: {
      score: 15,
      riskDescription: 'Possible overlap with specialized health articles if they focus on General AI trends rather than clinics.',
      preventionStrategy: 'Anchor this page entirely and strictly with HIPAA security constraints, Patient Health Information (PHI) logs, and specific integrations with EHRs (Epic, Cerner, AthenaHealth).'
    },
    internalLinks: [
      { target: '/ai-voice-agents-guide.html', anchorText: 'automated voice answering assistants', contextDescription: 'Guiding clinical administrators to telehealth and appointment triaging call-bots.' },
      { target: '/ai-workflow-automation.html', anchorText: 'secure workflow integrations', contextDescription: 'Linking operational clinic systems to back-end billing.' }
    ]
  },
  {
    path: '/ecommerce-ai-solutions.html',
    name: 'Ecommerce AI Solutions Page',
    primaryKeyword: 'ecommerce AI solutions',
    secondaryKeywords: [
      'AI automation for online stores', 
      'automated cart recovery systems', 
      'Shopify database AI chatbot integrations', 
      'AI inventory optimization'
    ],
    searchIntent: 'Transactional',
    pageType: 'Industry Vertical Page',
    recommendedTitle: 'Ecommerce AI Solutions: Scale Conversions & Cart Retention',
    recommendedH1: 'E-COMMERCE AI SOLUTIONS: AUTOMATE TICKETS AND CART RECOVERY',
    cannibalizationRisk: {
      score: 10,
      riskDescription: 'Very low, as ecommerce applications are distinct in keyword usage (add-to-cart, Shopify, fulfillment, order queries).',
      preventionStrategy: 'Center all text around merchant variables: reducing average support response time to zero, recapturing checkout drops, and synchronizing Shopify/WooCommerce data with Klaviyo and ERP tracking.'
    },
    internalLinks: [
      { target: '/llm-chatbot-development.html', anchorText: 'Shopify-aware custom chatbots', contextDescription: 'Linking e-com context to active client development solutions.' },
      { target: '/ai-workflow-automation.html', anchorText: 'automated logistics pipelines', contextDescription: 'Helping brands automate fulfillment status transfers.' }
    ]
  },
  {
    path: '/blog/ai-automation-agency-austin-tx/',
    name: 'Austin TX Regional Hub',
    primaryKeyword: 'AI automation agency Austin TX',
    secondaryKeywords: [
      'Austin AI consulting', 
      'AI chatbot development Austin', 
      'AI workflow automation Austin', 
      'Silicon Hills AI consulting agency'
    ],
    searchIntent: 'Transactional',
    pageType: 'Geo-Local SEO Hub',
    recommendedTitle: 'AI Automation Agency Austin TX | Austin AI Consulting Services',
    recommendedH1: 'TOP AI AUTOMATION AGENCY IN AUSTIN, TX | SILICON HILLS BLUEPRINTS',
    cannibalizationRisk: {
      score: 40,
      riskDescription: 'High potential of competing with the statewide Texas guide and sibling cities (Dallas, Houston) if they dynamically share local contextual elements.',
      preventionStrategy: 'Enforce hyper-localized context. Reference Austin events (South by Southwest, Silicon Hills VC networks), geographical regions (Westlake Hills, Downtown Austin, Mopac), and feature client quotes explicitly tied to Austin startups.'
    },
    internalLinks: [
      { target: '/blog/ai-automation-texas/', anchorText: 'Texas AI Automation Network', contextDescription: 'Linking the city sub-node back to the master state architecture.' },
      { target: '/llm-chatbot-development.html', anchorText: 'custom LLM chatbot development', contextDescription: 'Giving local firms access to actual text-bot builds.' },
      { target: '/ai-workflow-automation.html', anchorText: 'AI workflow automation features', contextDescription: 'Sending tech startups to the system optimization services.' }
    ]
  },
  {
    path: '/blog/ai-automation-texas/',
    name: 'Texas Geo Pillar Hub',
    primaryKeyword: 'AI automation Texas',
    secondaryKeywords: [
      'Texas AI agency', 
      'custom LLM chatbots Texas', 
      'AI consulting services Texas', 
      'statewide CRM automation Texas'
    ],
    searchIntent: 'Commercial',
    pageType: 'Statewide Geo-SEO Hub',
    recommendedTitle: 'AI Automation Agency Texas | Custom LLMs & Workflow Systems',
    recommendedH1: 'AI AUTOMATION AGENCY TEXAS: SCALING ENTIRE REGIONAL OPERATIONS',
    cannibalizationRisk: {
      score: 45,
      riskDescription: 'Risk of matching local queries meant for specific city hubs if they mention those cities too heavily.',
      preventionStrategy: 'Structure this page as an Indexing Directory. Focus the text on Texas corporate scaling parameters (energy sector in Houston, defense/hospitality in SA, startups in Austin, logistics in Dallas). Route searchers to clear city landing sub-pages immediately.'
    },
    internalLinks: [
      { target: '/blog/ai-automation-agency-austin-tx/', anchorText: 'Austin, TX Agency Hub', contextDescription: 'Directing central Texas searchers to localized CST partner groups.' },
      { target: '/ai-workflow-automation.html', anchorText: 'statewide automation services', contextDescription: 'Connecting the geo-pillar back to core capability nodes.' }
    ]
  },
  {
    path: '/n8n-vs-make-vs-zapier.html',
    name: 'n8n vs Make vs Zapier Comparison Page',
    primaryKeyword: 'n8n vs make vs zapier',
    secondaryKeywords: [
      'best business automation platforms', 
      'workflow integrations comparison', 
      'self-hosted n8n pricing', 
      'Zapier enterprise fees vs n8n'
    ],
    searchIntent: 'Commercial',
    pageType: 'Comparative Review / Platform Comparison',
    recommendedTitle: 'n8n vs Make.com vs Zapier: 2026 Comparison | AI Pro Consultants',
    recommendedH1: 'N8N VS MAKE.COM VS ZAPIER: THE 2026 TECHNICAL INTEGRATION GUIDE',
    cannibalizationRisk: {
      score: 20,
      riskDescription: 'Could compete with the primary "AI Workflow Services" page for technical term matches.',
      preventionStrategy: 'Keep this page strictly focused on neutral engineering comparisons, transactional task price-calculations, and database limits, funneling active searchers looking to build these into the core Service page.'
    },
    internalLinks: [
      { target: '/ai-workflow-automation.html', anchorText: 'custom AI workflow automation solutions', contextDescription: 'Leading buyers from comparing tools to booking an agency layout.' },
      { target: '/llm-chatbot-development.html', anchorText: 'RAG-integrated chatbot triggers', contextDescription: 'Linking system triggers to active user chat engines.' }
    ]
  }
];

export default function SeoMapDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIntent, setSelectedIntent] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<KeywordMapItem | null>(KEYWORD_MAP_ITEMS[0]);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'matrix' | 'linking' | 'risks'>('matrix');

  const filteredItems = KEYWORD_MAP_ITEMS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.primaryKeyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.secondaryKeywords.some(kw => kw.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          item.path.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIntent = selectedIntent === 'all' || item.searchIntent === selectedIntent;
    const matchesType = selectedType === 'all' || item.pageType === selectedType;

    return matchesSearch && matchesIntent && matchesType;
  });

  const handleCopy = (text: string, type: 'title' | 'h1') => {
    navigator.clipboard.writeText(text);
    setCopiedText(`${activeItem?.name} - ${type}`);
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  const getRiskColor = (score: number) => {
    if (score >= 40) return 'text-red-500 bg-red-500/10 border-red-500/20';
    if (score >= 25) return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
    return 'text-green-500 bg-green-500/10 border-green-500/20';
  };

  const getSchemaIcon = (type: string) => {
    switch (type) {
      case 'Homepage': return <Home className="w-4 h-4" />;
      case 'Ultimate Pillar Guide': return <BookOpen className="w-4 h-4" />;
      case 'Service Solution Landing Page': return <GitCompare className="w-4 h-4" />;
      case 'Industry Vertical Page': return <Layers className="w-4 h-4" />;
      case 'Geo-Local SEO Hub': return <MapPin className="w-4 h-4" />;
      case 'Statewide Geo-SEO Hub': return <Navigation className="w-4 h-4" />;
      default: return <Sliders className="w-4 h-4" />;
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#070a0e] text-slate-300">
      
      {/* Background Glimmers */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/5 pb-8 mb-10 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-widest text-blue-400 font-black">
              <Sparkles className="w-3.5 h-3.5" /> Enterprise SEO Blueprint
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display tracking-tight uppercase leading-none">
              Keyword Mapping <span className="blue-gradient-text">Strategist Toolkit</span>
            </h1>
            <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
              An analytical command center outlining primary keywords, search intents, internal crawl paths, and duplicate search cannibalization safeguards across our entire core domain.
            </p>
          </div>
          
          {/* Statistics Bar */}
          <div className="mt-6 md:mt-0 grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/2 border border-white/5 font-sans">
            <div className="px-4 text-center border-r border-white/5">
              <span className="text-xl font-bold text-white block">10</span>
              <span className="text-[9px] text-slate-500 uppercase font-black tracking-wider">Pages Mapped</span>
            </div>
            <div className="px-4 text-center border-r border-white/5">
              <span className="text-xl font-bold text-blue-400 block">24</span>
              <span className="text-[9px] text-slate-500 uppercase font-black tracking-wider">Internal Nodes</span>
            </div>
            <div className="px-4 text-center">
              <span className="text-xl font-bold text-green-500 block">100%</span>
              <span className="text-[9px] text-slate-500 uppercase font-black tracking-wider">SEO Cleaned</span>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs bar */}
        <div className="flex border-b border-white/5 gap-2 mb-8 justify-start">
          {[
            { id: 'matrix', label: 'Keyword Map Directory', icon: <Layers className="w-4 h-4" /> },
            { id: 'linking', label: 'Internal Linking Flow', icon: <LinkIcon className="w-4 h-4" /> },
            { id: 'risks', label: 'Cannibalization Audit Center', icon: <AlertOctagon className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 text-[10px] font-bold uppercase tracking-widest border-b-2 transition-all ${
                activeTab === tab.id 
                  ? 'border-blue-500 text-white bg-blue-500/5' 
                  : 'border-transparent text-slate-500 hover:text-white hover:border-white/10'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Tabs Conditionals */}
        <AnimatePresence mode="wait">
          {activeTab === 'matrix' && (
            <motion.div
              key="matrix"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid lg:grid-cols-12 gap-8 items-start text-left"
            >
              
              {/* LEFT COLUMN: Explorer & Search Page Selector */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Visual Filter Card */}
                <div className="p-6 rounded-2xl bg-white/2 border border-white/5 space-y-4">
                  <h3 className="text-xs font-black text-white uppercase tracking-widest font-display flex items-center gap-2 border-b border-white/5 pb-2">
                    <Search className="w-4 h-4 text-blue-500" /> Filters & Query
                  </h3>
                  
                  {/* Text search */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search path, keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-[#0b0e14] border border-white/5 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-500 transition-colors pl-10"
                    />
                    <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-600" />
                  </div>

                  {/* Intent filter */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Search Intent</label>
                    <div className="flex gap-2 flex-wrap">
                      {['all', 'Commercial', 'Transactional', 'Informational'].map(intent => (
                        <button
                          key={intent}
                          onClick={() => setSelectedIntent(intent)}
                          className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all border ${
                            selectedIntent === intent 
                              ? 'bg-blue-600 text-white border-blue-500' 
                              : 'bg-[#0B0E14] text-slate-400 border-white/5 hover:text-white'
                          }`}
                        >
                          {intent}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Page Type Filter */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Page Type</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full bg-[#0b0e14] border border-white/5 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors text-slate-300"
                    >
                      <option value="all">⚡ All Structural Formats</option>
                      <option value="Homepage">Homepage</option>
                      <option value="Ultimate Pillar Guide">Ultimate Pillar Guide</option>
                      <option value="Service Solution Landing Page">Service Service Landing</option>
                      <option value="Industry Vertical Page">Industry Vertical</option>
                      <option value="Geo-Local SEO Hub">Local SEO Hub</option>
                      <option value="Statewide Geo-SEO Hub">Statewide Hub</option>
                      <option value="Comparative Review / Platform Comparison">Platform Comparison</option>
                    </select>
                  </div>
                </div>

                {/* List of matching pages */}
                <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-2">
                    Crawl Nodes ({filteredItems.length})
                  </div>
                  {filteredItems.map(item => (
                    <div
                      key={item.path}
                      onClick={() => setActiveItem(item)}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        activeItem?.path === item.path
                          ? 'bg-blue-600/10 border-blue-500/40'
                          : 'bg-white/2 border-white/5 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white uppercase tracking-tight font-display">{item.name}</span>
                        <span className="text-[8px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 font-bold uppercase text-slate-500">
                          {item.searchIntent}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500">{item.path}</span>
                        <div className="flex items-center gap-1.5 text-[9px] text-blue-400 font-bold font-mono">
                          {getSchemaIcon(item.pageType)}
                          <span className="uppercase tracking-[0.05em]">{item.primaryKeyword}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filteredItems.length === 0 && (
                    <div className="p-6 text-center text-slate-600 text-xs">
                      No crawl nodes match filters. Check search query.
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN: Selected Page Deep Dive Explorer */}
              <div className="lg:col-span-8">
                {activeItem ? (
                  <div className="p-8 rounded-3xl bg-white/2 border border-white/5 space-y-8 relative overflow-hidden">
                    
                    {/* Corner gradient glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full" />
                    
                    {/* Deep-dive Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-6 gap-4">
                      <div>
                        <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest font-mono">Crawl Target Page Details</span>
                        <h2 className="text-2xl font-black text-white font-display uppercase tracking-tight mt-1">{activeItem.name}</h2>
                        <a 
                          href={activeItem.path} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[11px] text-slate-500 hover:text-blue-400 font-mono transition-colors flex items-center gap-1.5 w-fit mt-1 decoration-blue-500"
                        >
                          {activeItem.path} <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <div className="flex gap-2">
                        <div className="px-3.5 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[9px] font-bold text-blue-400 uppercase tracking-widest h-fit">
                          {activeItem.pageType}
                        </div>
                        <div className="px-3.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-bold text-indigo-400 uppercase tracking-widest h-fit">
                          {activeItem.searchIntent}
                        </div>
                      </div>
                    </div>

                    {/* KEYWORDS MATRIX GRID */}
                    <div className="grid md:grid-cols-2 gap-6 pb-6 border-b border-white/5">
                      {/* Primary keyword */}
                      <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/10 space-y-2 relative">
                        <div className="absolute top-2 right-2 p-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-blue-500 font-mono text-[8px] font-bold">1st</div>
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-display block">Primary Focus Keyphrase</span>
                        <div className="text-lg font-black text-white uppercase tracking-tight">{activeItem.primaryKeyword}</div>
                        <p className="text-[11px] text-slate-500 leading-relaxed italic mt-1">High-intent search query targeting our best organic customer profile.</p>
                      </div>

                      {/* Secondary keywords */}
                      <div className="p-5 rounded-xl bg-[#0b0e14] border border-white/5 space-y-2">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-display block">Supporting LSI & Long-Tails</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {activeItem.secondaryKeywords.map(kw => (
                            <span 
                              key={kw} 
                              className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-wide"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Recommended Content Metatags */}
                    <div className="space-y-4 pb-6 border-b border-white/5">
                      <h3 className="text-xs font-black text-white uppercase tracking-widest font-display flex items-center gap-2">
                        <Info className="w-4 h-4 text-blue-500" /> Header & Metadata Recommendation
                      </h3>
                      
                      {/* Title recommendations */}
                      <div className="space-y-3 font-mono text-left bg-[#0B0E14] border border-white/5 rounded-2xl p-4">
                        <div className="flex justify-between items-center pb-2 border-b border-white/5">
                          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Recommended Title Tag</span>
                          <button
                            onClick={() => handleCopy(activeItem.recommendedTitle, 'title')}
                            className="p-1 px-2 hover:bg-white/5 rounded text-[10px] font-bold uppercase text-blue-400 flex items-center gap-1 transition-colors"
                          >
                            {copiedText === `${activeItem.name} - title` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            {copiedText === `${activeItem.name} - title` ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                        <div className="text-xs text-slate-200 break-words leading-relaxed select-all">
                          {activeItem.recommendedTitle}
                        </div>
                      </div>

                      {/* H1 recommendations */}
                      <div className="space-y-3 font-mono text-left bg-[#0B0E14] border border-white/5 rounded-2xl p-4">
                        <div className="flex justify-between items-center pb-2 border-b border-white/5">
                          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Recommended H1 Header</span>
                          <button
                            onClick={() => handleCopy(activeItem.recommendedH1, 'h1')}
                            className="p-1 px-2 hover:bg-white/5 rounded text-[10px] font-bold uppercase text-blue-400 flex items-center gap-1 transition-colors"
                          >
                            {copiedText === `${activeItem.name} - h1` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            {copiedText === `${activeItem.name} - h1` ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                        <div className="text-xs text-slate-200 uppercase break-words leading-relaxed select-all">
                          {activeItem.recommendedH1}
                        </div>
                      </div>
                    </div>

                    {/* PAGE-SPECIFIC CANNIBALIZATION ANALYSIS panel */}
                    <div className={`p-6 rounded-2xl border ${getRiskColor(activeItem.cannibalizationRisk.score)} space-y-4`}>
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <div className="flex items-center gap-2">
                          <AlertOctagon className="w-4 h-4" />
                          <span className="text-xs font-black uppercase tracking-widest font-display">Cannibalization Risk Audit</span>
                        </div>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 roundedbg-black/20">
                          Risk Score: {activeItem.cannibalizationRisk.score}%
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6 text-slate-300">
                        <div className="space-y-1.5">
                          <span className="text-[10px] uppercase font-black tracking-widest block text-slate-500">Risk Assessment</span>
                          <p className="text-[11px] leading-relaxed m-0 text-slate-400">{activeItem.cannibalizationRisk.riskDescription}</p>
                        </div>
                        <div className="space-y-1.5 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
                          <span className="text-[10px] uppercase font-black tracking-widest block text-blue-400">Strategic Mitigation</span>
                          <p className="text-[11px] leading-relaxed m-0 text-slate-400">{activeItem.cannibalizationRisk.preventionStrategy}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="p-12 text-center rounded-3xl border border-dashed border-white/10 text-slate-600 bg-white/2">
                    Click a crawl target on the left to inspect its detailed keyword mapping schema.
                  </div>
                )}
              </div>

            </motion.div>
          )}

          {activeTab === 'linking' && (
            <motion.div
              key="linking"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8 text-left"
            >
              
              {/* Internal Linking Topological Intro */}
              <div className="p-6 rounded-2xl bg-[#0b0e14] border border-white/5">
                <h3 className="text-sm font-black text-white uppercase tracking-widest font-display flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
                  <LinkIcon className="w-4.5 h-4.5 text-blue-500" /> Topic Clustering & Crawl-Path Silo Structure
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed m-0">
                  By building precise internal anchor links between relevant crawl pages, we build isolated "SEO Silos." This structures a powerful organic index flow where supporting ultimate guides dynamically push link equity (PR) back to core transaction page nodes, accelerating rankings for our high-value target keywords.
                </p>
              </div>

              {/* Complete Linking Matrix Table */}
              <div className="overflow-hidden border border-white/5 rounded-2xl bg-white/2 max-w-full">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#0b0e14] border-b border-white/10 text-[10px] uppercase font-black tracking-widest text-slate-500">
                      <th className="p-4">Source Page</th>
                      <th className="p-4">Destination Target Node</th>
                      <th className="p-4">Target Anchor Text</th>
                      <th className="p-4">Link Context / SEO Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {KEYWORD_MAP_ITEMS.flatMap(item => 
                      item.internalLinks.map(link => (
                        <tr key={`${item.path}-${link.target}`} className="hover:bg-white/5 transition-colors font-sans">
                          <td className="p-4 max-w-sm">
                            <div className="font-bold text-white text-[11px]">{item.name}</div>
                            <span className="font-mono text-[9px] text-slate-500">{item.path}</span>
                          </td>
                          <td className="p-4 max-w-sm">
                            <div className="font-bold text-blue-400 text-[11px]">
                              {KEYWORD_MAP_ITEMS.find(p => p.path === link.target)?.name || 'Local Site Target'}
                            </div>
                            <span className="font-mono text-[9px] text-slate-500">{link.target}</span>
                          </td>
                          <td className="p-4">
                            <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 font-mono italic">
                              "{link.anchorText}"
                            </span>
                          </td>
                          <td className="p-4 text-slate-400 text-xs leading-relaxed italic max-w-md">
                            {link.contextDescription}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

            </motion.div>
          )}

          {activeTab === 'risks' && (
            <motion.div
              key="risks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8 text-left"
            >
              
              {/* Strategic Overview Card */}
              <div className="grid md:grid-cols-2 gap-8 items-start">
                
                {/* Visual meter */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0F131C] to-transparent border border-white/10 text-left space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[9px] font-bold tracking-widest uppercase">
                    Risk Warning Level: Moderate
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight font-display font-semibold">Crawl Safety Index</h3>
                  <p className="text-xs text-slate-400 leading-relaxed m-0">
                    If multiple site pages target matching keywords (e.g. "AI automation"), Google's index is forced to compete against itself. This splits our page authority (PR), dilutes focus keyword rankings, and shifts organic traffic unpredictably.
                  </p>
                  <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 bg-amber-500 h-full rounded-full w-[35%]" />
                  </div>
                  <span className="text-[10px] text-slate-500 block uppercase font-mono font-bold">Overall Cannibalization Risk Level: 35%</span>
                </div>

                {/* Audit Checklist */}
                <div className="p-8 rounded-3xl bg-[#0b0e14] border border-white/5 text-left space-y-4">
                  <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest font-mono">3 Rules of Cannibalization Defense</h4>
                  <ul className="space-y-3 pl-0 list-none m-0 text-slate-300">
                    <li className="flex gap-2.5 items-start text-xs">
                      <span className="text-blue-500">✔</span>
                      <div>
                        <strong>Vary Intent Nodes:</strong> Service landing pages are kept transactional. Comparative guides are informational. Keep keywords mapped strictly.
                      </div>
                    </li>
                    <li className="flex gap-2.5 items-start text-xs">
                      <span className="text-blue-500">✔</span>
                      <div>
                        <strong>Geo-Isolate Pages:</strong> State-level and city hubs share local entities but strictly link back upward to preserve hierarchical structure.
                      </div>
                    </li>
                    <li className="flex gap-2.5 items-start text-xs">
                      <span className="text-blue-500">✔</span>
                      <div>
                        <strong>Internal Anchor Targeting:</strong> Never link between pages using ambiguous generic terms like "click here". Anchor text must exactly reflect targets.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Specific Cannibalization Mappings */}
              <div className="space-y-4 pr-1">
                {[
                  {
                    keyword: 'healthcare AI automation',
                    conflict: 'Competing: general "AI workflow automation" vs "autonomous healthcare voice systems"',
                    threat: 'If our general workflow solution page matches specifically for health queries, the clinic and patient intake landing page gets lower index traffic.',
                    resolution: 'Remove clinical/medical vocabulary entirely from `/ai-workflow-automation.html`. Reserve EHR, patient scheduling, clinic checklists, and PHI/HIPAA regulations strictly for `/healthcare-ai-automation.html`.'
                  },
                  {
                    keyword: 'AI automation agency Austin TX',
                    conflict: 'Competing: "AI automation Texas" (city index) vs "Austin agency guide"',
                    threat: 'Google indexes the statewide parent page instead of the high-intent localized center of Silicon Hills.',
                    resolution: 'Embed deep Austin-specific geographical indicators (Silicon Hills tech, Westlake Hills broker references, CST availability, Mopac office) to maximize municipal search uniqueness. Route state index directly.'
                  },
                  {
                    keyword: 'business process automation with AI',
                    conflict: 'Competing: B2B pillar guide vs Core workflow solution page',
                    threat: 'Both pages target system scaling, causing searchers to bounce unpredictably.',
                    resolution: 'Focus B2B guide page copy purely on operational business value formats (reclaiming manual desk hours, scaling SDR sales targets). Limit workflow page to technological and SDK/middleware stack configurations.'
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-[#0F131C] border border-white/5 space-y-4">
                    <div className="flex border-b border-white/5 pb-2 justify-between items-center text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <strong className="text-white uppercase font-display">Keyword: "{item.keyword}"</strong>
                      </div>
                      <span className="text-slate-500 font-mono text-[9px] uppercase font-bold">{item.conflict}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 leading-relaxed">
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest block font-mono">Cannibalization Threat</span>
                        <p className="text-[11px] text-slate-400 m-0 leading-relaxed">{item.threat}</p>
                      </div>
                      <div className="space-y-1 font-sans border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6 text-slate-300">
                        <span className="text-[10px] text-blue-400 uppercase font-black tracking-widest block font-mono">Algorithmic Resolution</span>
                        <p className="text-[11px] text-slate-400 m-0 leading-relaxed italic">{item.resolution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Action Footer */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/10 to-transparent border border-white/10 p-8 rounded-[2rem] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-base font-bold text-white uppercase tracking-tight font-display">Need Custom Enterprise-Grade Onsite Audit Mapping?</h4>
            <p className="text-xs text-slate-400 leading-relaxed m-0">
              Our architects deliver tailored SEO graphs, GEO citation clusters, and programmatic schema-ready integrations mapped natively to high-volume n8n & custom workflows.
            </p>
          </div>
          <a
            href="/?audit=true"
            className="px-6 py-3.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Schedule Free Audit
          </a>
        </div>

      </div>
    </div>
  );
}
