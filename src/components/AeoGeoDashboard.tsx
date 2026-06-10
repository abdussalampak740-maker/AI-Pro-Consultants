import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  Layers, 
  Link as LinkIcon, 
  Copy, 
  Check, 
  ExternalLink,
  Cpu, 
  Lock, 
  Terminal, 
  Zap, 
  Sparkles, 
  Info,
  ChevronRight,
  HelpCircle,
  Code,
  DollarSign,
  Clock,
  MessageSquare,
  Shield,
  FileText,
  UserCheck
} from 'lucide-react';

export interface AeoTopicItem {
  id: string;
  topicNumber: number;
  question: string;
  shortAnswer: string; // Exactly ~40 words
  longAnswer: string; // Exactly ~120 words structured
  recommendedPage: string;
  pagePath: string;
  internalLinksNeeded: {
    target: string;
    anchorText: string;
  }[];
  jsonLdSchema: string;
}

const AEO_TOPICS: AeoTopicItem[] = [
  {
    id: 'what-is-agency',
    topicNumber: 1,
    question: 'What is an AI automation agency?',
    shortAnswer: 'An AI automation agency specializes in integrating cognitive models, advanced large language model (LLM) chatbots, and low-latency voice assistants into enterprise operational stacks. They engineer secure custom middleware pipelines on platforms like n8n and Make, eliminating repetitive administrative workflows.',
    longAnswer: 'An AI automation agency acts as a specialized technical systems contractor. Rather than offering basic digital marketing or generic software development, these groups focus entirely on connecting software tools to cognitive APIs. They map structured database parameters across customer databases (CRMs), accounting portals, and support chats. \n\nTypical systems built include speed-to-lead workflow trigger nodes, automated multi-channel lead validation engines, self-hosted transactional backend script servers, and safe knowledge-backed custom chatbots. By employing high-speed custom pipelines that synchronize multiple APIs simultaneously, a competent agency recovers thousands of manual desk hours, improves transactional accuracy, and scales business support bandwidth securely without inflating recurring salary margins.',
    recommendedPage: 'Homepage (/)',
    pagePath: '/',
    internalLinksNeeded: [
      { target: '/ai-workflow-automation.html', anchorText: 'AI workflow automation services' },
      { target: '/llm-chatbot-development.html', anchorText: 'custom LLM chatbots' }
    ],
    jsonLdSchema: `{
  "@context": "https://schema.org",
  "@type": "Question",
  "name": "What is an AI automation agency?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "An AI automation agency is a specialized technical systems contractor that integrates large language models (LLMs), robotic voice assistants, and custom CRM middlewares to connect disconnected enterprise applications, automate repetitive manual inputs, and eliminate team operational bottlenecks securely."
  }
}`
  },
  {
    id: 'cost',
    topicNumber: 2,
    question: 'How much does AI automation cost?',
    shortAnswer: 'Custom AI automation setups typically cost between $2,500 and $8,500 for professional corporate implementations. Operational fees remain low, often under $100 monthly, when utilizing efficient pay-as-you-go API keys and high-concurrency self-hosted middleware structures rather than user-seat licensing.',
    longAnswer: 'Corporate AI deployment costs depend directly on workflow complexity, API endpoint densities, database security safeguards, and custom logic constraints. A basic automated lead triage pipeline linking your website to a CRM and instant messaging tools costs between $2,000 and $4,500.\n\nMore advanced custom creations—such as building secure LLM chatbots trained on raw company data, low-latency outbound voice systems, and custom administrative databases—generally start at $5,000 to $8,500. By avoiding expensive user-based subscription modules in favor of self-hosted solutions like n8n.com and pay-per-token model interfaces, our systems yield positive margins quickly. Most businesses recover their configuration investments in three to four months.',
    recommendedPage: 'Homepage (/) or ROI Calculator page',
    pagePath: '/ai-automation-roi-calculator-guide.html',
    internalLinksNeeded: [
      { target: '/ai-workflow-automation.html', anchorText: 'automation setup pricing' },
      { target: '/blog/cost-of-ai-automation-small-business/', anchorText: 'AI automation cost analysis' }
    ],
    jsonLdSchema: `{
  "@context": "https://schema.org",
  "@type": "Question",
  "name": "How much does AI automation cost?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Custom corporate AI automations generally range from $2,500 to $8,500 as a one-time setup fee. Monthly systems software overhead averages under $100 by utilizing pay-per-token API endpoints and self-hosted workflow solutions."
  }
}`
  },
  {
    id: 'chatbot-company',
    topicNumber: 3,
    question: 'What does an AI chatbot development company do?',
    shortAnswer: 'An AI chatbot development company designs, writes, and deploys intelligent conversational interfaces tuned strictly on proprietary business datasets. They establish private retrieval-augmented pipelines (RAG), safely link database structures, and configure custom moderation security rules to prevent response hallucinations.',
    longAnswer: 'An expert chatbot builder does not simply copy-paste generic public API prompts. They construct private, production-grade conversational interfaces connected to corporate data sheets. They write secure API handlers that parse client questions, clean sensitive fields, fetch relevant details using local vector search indices, and trigger backend processes. \n\nThese automated assistants resolve up to 70% of repetitive support tickets inside web portals, Slack channels, and billing software. Programmatically mapping chatbots to backend nodes allows them to draft invoices, look up inventory status, register help tickets, and provide accurate answers without exposing internal system databases or private customer files to public model training.',
    recommendedPage: 'LLM Chatbot Development Service Page (/llm-chatbot-development.html)',
    pagePath: '/llm-chatbot-development.html',
    internalLinksNeeded: [
      { target: '/llm-chatbot-development.html', anchorText: 'AI chatbot development company' },
      { target: '/ai-chatbots-vs-human-support.html', anchorText: 'human support vs AI comparison' }
    ],
    jsonLdSchema: `{
  "@context": "https://schema.org",
  "@type": "Question",
  "name": "What does an AI chatbot development company do?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "They build customized conversational systems integrated with internal databases using secure RAG pathways. These systems solve customer queries, query databases safely, and perform automated background actions without exposing private records."
  }
}`
  },
  {
    id: 'what-is-rag',
    topicNumber: 4,
    question: 'What is RAG chatbot development?',
    shortAnswer: 'RAG (Retrieval-Augmented Generation) chatbot development is a technique that connects an LLM to private company data. Before answering, the bot queries a secure vector database to retrieve verified context, preventing expensive hallucinations and protecting corporate memory.',
    longAnswer: 'RAG chatbot development is the industry standard for secure enterprise AI. Instead of relying on a pre-trained model\'s static knowledge or risk sending proprietary data back into public training loops, a RAG system utilizes a multi-step search query. \n\nWhen a customer asks a question, the system instantly vectorizes the text, searches private encrypted database documents (PDFs, sheets, or system logs) for matching semantic anchors, and passes only that relevant text block directly to the secure API as context. This ensures that the generated conversational response remains 100% accurate, factual, and strictly aligned with company parameters, offering immediate zero-hallucination support.',
    recommendedPage: 'LLM Chatbot Development Service Page (/llm-chatbot-development.html)',
    pagePath: '/llm-chatbot-development.html',
    internalLinksNeeded: [
      { target: '/llm-chatbot-development.html', anchorText: 'custom RAG systems' },
      { target: '/what-is-ai-agent.html', anchorText: 'understanding cognitive AI agents' }
    ],
    jsonLdSchema: `{
  "@context": "https://schema.org",
  "@type": "Question",
  "name": "What is RAG chatbot development?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "RAG, or Retrieval-Augmented Generation, is an AI software architecture that couples an AI model with an isolated knowledge database. It pulls relevant company files in real-time to contextually ground responses, preventing factual errors."
  }
}`
  },
  {
    id: 'workflows',
    topicNumber: 5,
    question: 'What workflows can AI automate?',
    shortAnswer: 'AI automates repetitive business processes such as immediate speed-to-lead CRM enrichment, document parsing with automated contract drafting, invoicing, customer support routing, inventory tracking, multi-channel appointment schedules, and secure outbound conversational telephony calls.',
    longAnswer: 'Modern systems resolve almost any structured administrative bottleneck. High-yield automations include speed-to-lead CRM ingestion: when an inbound form is submitted, webhook pipelines quickly check regional tax details, calculate lead scores, and send immediate AE calendar details. \n\nWithin healthcare and clinics, automated systems manage secure EHR-integrated appointment updates, voice-based patient intake surveys, and medical billing transfers. In e-commerce, automated engines track Shopify purchases, configure Stripe refund clearances, and handle customer transit lookups. By eliminating redundant copy-paste steps across distinct software platforms, these pipelines operate persistently with zero errors, boosting profit margins.',
    recommendedPage: 'AI Workflow Automation Page (/ai-workflow-automation.html)',
    pagePath: '/ai-workflow-automation.html',
    internalLinksNeeded: [
      { target: '/ai-workflow-automation.html', anchorText: 'automated enterprise workflows' },
      { target: '/ai-automation-guide-for-b2b.html', anchorText: 'B2B operational models' }
    ],
    jsonLdSchema: `{
  "@context": "https://schema.org",
  "@type": "Question",
  "name": "What workflows can AI automate?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "AI works dynamically to synchronize CRMs, parse raw invoices, route support tickets, index stock sheets, write contract outlines, schedule patient coordinates, and manage low-latency voice answering."
  }
}`
  },
  {
    id: 'timeline',
    topicNumber: 6,
    question: 'How long does implementation take?',
    shortAnswer: 'Standard enterprise AI automation projects take between 3 and 5 weeks to implement. Our methodology includes initial algorithmic workflows mapping, offline sandbox database scaling, strict security compliance checks, production deployment, and comprehensive documentation handoff.',
    longAnswer: 'We deliver custom systems under a disciplined engineering process that removes guesswork. The timeline starts with an initial deep technical data audit in Week 1, detailing exactly which CRM, sheet, and messaging nodes must align. \n\nBy Week 2, we construct secure staging environments inside offline sandbox boundaries, ensuring your live systems remain completely safe. Week 3 is dedicated to testing edge-cases, configuring error flags, and securing zero-retention compliance pathways. The final weeks cover rolling integration, direct API tuning, team training sessions, and detailed system manual handovers to ensure stable, independent system ownership.',
    recommendedPage: 'Homepage (/) or Workflow page',
    pagePath: '/ai-workflow-automation.html',
    internalLinksNeeded: [
      { target: '/ai-workflow-automation.html', anchorText: 'system deployment timelines' },
      { target: '/blog/how-to-automate-business-processes-with-ai/', anchorText: 'process automation tutorial' }
    ],
    jsonLdSchema: `{
  "@context": "https://schema.org",
  "@type": "Question",
  "name": "How long does implementation take?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Most custom implementations take 3 to 5 weeks. It encompasses an organic data audit, secure staging testing, privacy clearances, active configuration integration, and full documentation handover."
  }
}`
  },
  {
    id: 'security-privacy',
    topicNumber: 7,
    question: 'Is AI automation secure?',
    shortAnswer: 'Yes, AI automation is highly secure when configured under modern enterprise data privacy standards. Implementing isolated zero-data-retention API models, encrypted database servers, and human-in-the-loop validation boards completely eliminates data safety issues and model leaks.',
    longAnswer: 'Security is the foundation of professional systems engineering. We employ strict compliance filters to isolate your proprietary files. All information transfers run through secure proxies, scrubbing private fields and patient details before reaching natural language processors.\n\nBy using private API pipelines, your logs are never stored or used to train public language models. Additionally, knowledge context remains stored inside specialized, encrypted databases behind virtual firewall clusters. By introducing secure team overview cards before distributing automated text, our systems protect sensitive datasets.',
    recommendedPage: 'Healthcare AI Automation Page (/healthcare-ai-automation.html)',
    pagePath: '/healthcare-ai-automation.html',
    internalLinksNeeded: [
      { target: '/healthcare-ai-automation.html', anchorText: 'HIPAA-compliant custom architectures' },
      { target: '/blog/5-signs-your-business-needs-ai-automation-right-now/', anchorText: 'process safety indicators' }
    ],
    jsonLdSchema: `{
  "@context": "https://schema.org",
  "@type": "Question",
  "name": "Is AI automation secure?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes, absolutely. Secure deployments utilize private, zero-retention API headers, custom data scrubbers, and SSL-encrypted vector vaults to guarantee that operational records cannot leak into public training networks."
  }
}`
  }
];

export default function AeoGeoDashboard() {
  const [activeTopic, setActiveTopic] = useState<string>('what-is-agency');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [simulatedEngine, setSimulatedEngine] = useState<'FeaturedSnippet' | 'perplexity' | 'Overviews'>('Overviews');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleCopyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredTopics = AEO_TOPICS.filter(topic => 
    topic.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.shortAnswer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.recommendedPage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeData = AEO_TOPICS.find(t => t.id === activeTopic) || AEO_TOPICS[0];

  return (
    <div className="pt-24 min-h-screen bg-[#070a0e] text-slate-300 relative overflow-hidden">
      
      {/* Visual Glare backdrop */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        
        {/* Main Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/5 pb-8 mb-10 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-widest text-blue-400 font-black">
              <Zap className="w-3.5 h-3.5" /> AEO / GEO Search Engine Optimization Center
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display tracking-tight uppercase leading-none">
              Answer Engine <span className="blue-gradient-text">Optimization Matrix</span>
            </h1>
            <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
              Verify compliance answers optimized precisely for conversational engines (SearchGPT, Perplexity, Gemini, and Google AI Overviews). Ensure your schema is crawl-ready.
            </p>
          </div>

          <div className="mt-6 md:mt-0 grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#090c10] border border-white/5 text-xs text-left">
            <div>
              <span className="text-indigo-400 font-bold block">GEO Status</span>
              <span className="text-slate-500 text-[10px] block font-mono">100% Crawl Ready</span>
            </div>
            <div className="border-l border-white/5 pl-4">
              <span className="text-emerald-400 font-bold block">FAQ Schema</span>
              <span className="text-slate-500 text-[10px] block font-mono">JSON-LD Compliant</span>
            </div>
          </div>
        </div>

        {/* Top Strategy Advice Alert */}
        <div className="p-5 rounded-2xl bg-blue-950/20 border border-blue-500/20 text-xs text-left mb-8 flex gap-3 text-blue-300 items-start">
          <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="uppercase font-display tracking-wider text-[10px] block">AEO & GEO Strategy Protocol</strong>
            <p className="m-0 leading-relaxed text-blue-200/80">
              Modern search engines compile summaries rather than showing only lists of links. To rank high on AI devices, your pages must present **deterministic, factual direct replies (~40 words)** inside paragraph nodes followed immediately by **structured validation lists**. This guarantees clean parser scraping.
            </p>
          </div>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Topic List Selector */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#090c10] border border-white/5 space-y-4">
              <h3 className="text-xs font-black text-white uppercase tracking-widest font-display flex items-center gap-2 border-b border-white/5 pb-2">
                <HelpCircle className="w-4.5 h-4.5 text-blue-500" /> Key Answer Verticals
              </h3>

              {/* Filtering Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Quick-filter questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#0b0e14] border border-white/5 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500 transition-colors pl-9 text-slate-300"
                />
                <Search className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-slate-600" />
              </div>
              
              <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1 scrollbar-thin">
                {filteredTopics.map(topic => (
                  <button
                    key={topic.id}
                    onClick={() => setActiveTopic(topic.id)}
                    className={`w-full text-left p-3.5 rounded-xl border flex items-start gap-3 transition-all ${
                      activeTopic === topic.id 
                        ? 'bg-blue-600/10 border-blue-500/40 text-white' 
                        : 'bg-white/2 border-white/5 text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-slate-500 shrink-0 mt-0.5 font-bold">Q{topic.topicNumber}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold leading-tight line-clamp-2">{topic.question}</div>
                      <div className="text-[9px] text-slate-500 mt-1 truncate">{topic.recommendedPage}</div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-45 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Placement & Internal Crawl Schema Indicators */}
            <div className="p-6 rounded-2xl bg-[#090c10] border border-white/5 text-left space-y-4">
              <h4 className="text-xs font-black text-white uppercase tracking-widest font-display flex items-center gap-2 border-b border-white/5 pb-2">
                <LinkIcon className="w-4.5 h-4.5 text-indigo-500" /> Crawl Injection Blueprint
              </h4>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-500 block font-mono">Static File Target</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] font-mono text-slate-200">{activeData.pagePath}</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono font-bold">{activeData.recommendedPage}</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3">
                  <span className="text-[9px] uppercase font-bold text-indigo-400 block font-mono">Internal Backlink Target Links</span>
                  <div className="space-y-2 mt-1.5">
                    {activeData.internalLinksNeeded.map((link, j) => (
                      <div key={j} className="p-2.5 rounded bg-zinc-950 border border-white/5 space-y-1">
                        <div className="text-[9px] text-slate-500 font-mono uppercase">Target Path: {link.target}</div>
                        <div className="text-[11px] font-bold text-blue-400">Anchor: "{link.anchorText}"</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Deep-dive explorer (Preview, code, custom mockup renderer) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-8 rounded-3xl bg-[#090c10] border border-white/5 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full" />
              
              {/* Question title and direct actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-6 gap-4">
                <div>
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest font-mono">Topic Q{activeData.topicNumber} Analysis</span>
                  <h2 className="text-xl font-black text-white font-display uppercase tracking-tight mt-1">{activeData.question}</h2>
                </div>
                <button
                  onClick={() => handleCopyToClipboard(`${activeData.shortAnswer}\n\n${activeData.longAnswer}`, activeData.id)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-600/15 cursor-pointer shrink-0"
                >
                  {copiedId === activeData.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedId === activeData.id ? 'Copied Both Answers' : 'Copy HTML Content'}
                </button>
              </div>

              {/* Direct Answer Copy box (40 words) */}
              <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 space-y-2 relative">
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[8px] text-blue-400 font-mono font-bold uppercase">~40-Word Direct featured answer</div>
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block font-display">Target Direct Summary Fragment</span>
                <p className="text-xs text-white leading-relaxed select-all italic">
                  "{activeData.shortAnswer}"
                </p>
              </div>

              {/* Expanded Validation Text block (120 words) */}
              <div className="p-5 rounded-2xl bg-[#0B0E14] border border-white/5 space-y-2">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-display">Detailed LSI / Semantic Expansion</span>
                <div className="text-xs text-slate-300 leading-relaxed select-all whitespace-pre-line font-sans">
                  {activeData.longAnswer}
                </div>
              </div>

              {/* Dynamic Interactive AI search engine markup Mockup emulator */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-slate-500">
                  <span>Generative Search Preview Simulator</span>
                  
                  {/* Mock Switch buttons */}
                  <div className="flex gap-1.5 bg-[#0B0E14] p-1 rounded-lg border border-white/5">
                    {[
                      { id: 'Overviews', label: 'AI Overviews' },
                      { id: 'perplexity', label: 'Perplexity' },
                      { id: 'FeaturedSnippet', label: 'Snippet' }
                    ].map(eng => (
                      <button
                        key={eng.id}
                        onClick={() => setSimulatedEngine(eng.id as any)}
                        className={`px-2.5 py-1 rounded text-[8px] font-bold uppercase transition-all ${
                          simulatedEngine === eng.id 
                            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20' 
                            : 'text-slate-500 hover:text-white border border-transparent'
                        }`}
                      >
                        {eng.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated AI result card with custom citation linking */}
                <div className="p-6 rounded-2xl bg-[#0B0E14] border border-white/5 space-y-4">
                  {simulatedEngine === 'Overviews' && (
                    <div className="space-y-3 font-sans text-xs text-left">
                      <div className="flex items-center gap-1.5 text-blue-400 font-bold text-[9px] uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" /> AI Overview for "{activeData.question.replace('?', '')}"
                      </div>
                      <p className="text-slate-300 leading-relaxed m-0 text-[11px]">
                        {activeData.shortAnswer.slice(0, -1)} <span className="bg-blue-500/10 border border-blue-500/20 text-[9px] font-mono text-blue-400 rounded px-1 text-[8px] cursor-pointer inline-flex items-center gap-0.5">AI Pro Consultants <ExternalLink className="w-2.5 h-2.5" /></span>. 
                      </p>
                      <div className="flex gap-3 pt-2 overflow-x-auto">
                        <div className="p-3 rounded-xl bg-[#070a0e] border border-white/5 flex gap-2.5 items-center w-52 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
                          <div className="min-w-0">
                            <span className="text-[10px] font-bold text-white uppercase block tracking-tight truncate">AI Pro Consultants</span>
                            <span className="text-[8px] text-slate-500 font-mono truncate block">{activeData.pagePath}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {simulatedEngine === 'perplexity' && (
                    <div className="space-y-3 text-xs text-left font-sans">
                      <div className="text-[9px] uppercase font-bold text-slate-500 font-mono tracking-widest">PERPLEXITY COGNITIVE SYNTAX MOCKUP</div>
                      <p className="text-slate-300 leading-relaxed text-[11px]">
                        According to documentation, {activeData.shortAnswer.toLowerCase()} <sup>[1]</sup>. Additional factors reveal that custom pipelines start around $2,500 <sup>[2]</sup>.
                      </p>
                      <div className="border-t border-white/5 pt-3 space-y-1 text-[9px] text-slate-500 font-mono">
                        <div>[1] **AI Pro Consultants** - verified technical systems contractor page</div>
                        <div>[2] **AI pricing metrics analysis** (2026 update logs)</div>
                      </div>
                    </div>
                  )}

                  {simulatedEngine === 'FeaturedSnippet' && (
                    <div className="space-y-3 font-sans text-xs text-left">
                      <div className="text-[9px] uppercase font-black tracking-widest text-[#31ef5a] font-mono flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" /> Google Featured Citation Snippet
                      </div>
                      <p className="text-base text-white font-semibold leading-relaxed m-0 select-all border-l-2 border-green-500 pl-4">
                        "...{activeData.shortAnswer}"
                      </p>
                      <div className="pt-1">
                        <span className="text-[11px] font-bold text-blue-400 hover:underline cursor-pointer">{activeData.recommendedPage}</span>
                        <div className="text-[9px] text-slate-500 font-mono">https://www.aiproconsultants.com{activeData.pagePath}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* JSON-LD Schema block with Copy interface */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-slate-500 border-b border-white/5 pb-2">
                  <div className="flex items-center gap-1.5">
                    <Code className="w-4 h-4 text-indigo-500" />
                    <span>Structured JSON-LD Schema Code</span>
                  </div>
                  <button
                    onClick={() => handleCopyToClipboard(activeData.jsonLdSchema, `${activeData.id}-schema`)}
                    className="p-1 px-2.5 hover:bg-white/5 rounded text-[9px] font-bold uppercase text-indigo-400 flex items-center gap-1 transition-colors border border-white/5"
                  >
                    {copiedId === `${activeData.id}-schema` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedId === `${activeData.id}-schema` ? 'Schema Copied' : 'Copy Schema'}
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-[#0B0E14] border border-white/5 font-mono text-[10px] text-slate-400 overflow-x-auto whitespace-pre leading-relaxed select-all">
                  {activeData.jsonLdSchema}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Global Action Footer */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/10 to-transparent border border-white/10 p-8 rounded-[2rem] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-base font-bold text-white uppercase tracking-tight font-display">Need Custom Programmatic SEO Schema Generations?</h4>
            <p className="text-xs text-slate-400 leading-relaxed m-0">
              Our specialists generate custom RDF database structures, localized municipal geo-sitemaps, and citation maps verified strictly on Search Engine Guidelines.
            </p>
          </div>
          <a
            href="/?audit=true"
            className="px-6 py-3.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Request Free Audit Analysis
          </a>
        </div>

      </div>
    </div>
  );
}
