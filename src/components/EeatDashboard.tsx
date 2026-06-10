import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  UserCheck, 
  Workflow, 
  FileText, 
  MessageSquare, 
  Terminal, 
  Check, 
  Copy, 
  Cpu, 
  Lock, 
  Eye, 
  Server, 
  MapPin, 
  TrendingUp, 
  AlertTriangle,
  Mail,
  Zap,
  Clock,
  Briefcase,
  Layers,
  Sparkles,
  Info,
  ChevronRight,
  ShieldAlert,
  GraduationCap
} from 'lucide-react';

export interface EeatSection {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  placementGuide: string;
  copyContent: {
    html?: string;
    text: string;
    highlights: string[];
  };
}

export default function EeatDashboard() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [securityTestPassed, setSecurityTestPassed] = useState<boolean>(false);
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState<number>(0);

  const sections: EeatSection[] = [
    {
      id: 'about',
      title: 'Our Agency Ethos & Ethic',
      subtitle: 'Zero-Fluff, Remote-First Systems Engineering',
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      description: 'Transparent, reliable partner establishing absolute alignment across Silicon Hills and beyond. We avoid typical "AI agency hype" and "marketing-bro promises" to deliver pure, robust API configurations.',
      placementGuide: 'Integrate directly on the Homepage (/) right below the Hero column, or as an introductory block in the general Texas Hub (/blog/ai-automation-texas/) to establish trust.',
      copyContent: {
        text: `### Who We Are & Our Operating Ethic
AI Pro Consultants is a remote-first systems engineering group specializing in custom AI automation and workflow design. We do not maintain a physical storefront in downtown Austin, nor do we employ sales representatives who make unrealistic promises about AI replacing 100% of your workforce. 

Instead, we operate with maximum operational discipline: passing our saved office real estate margins directly onto your bottom line in the form of elite technical delivery. Our certified developers align tightly with your Central Standard Time (CST) operating routines via private Slack coordinates, rapid Zoom staging, and high-frequency code standups. We believe that AI performs best when engineered as a highly secure, deterministic background pipeline designed to eliminate tedious copy-paste bottlenecks—preserving your teams focus for tasks that require true human judgment.`,
        highlights: [
          'Remote-first systems engineering with passed-on price savings',
          'Deterministic background pipelines rather than unrealistic automation hype',
          'Active CST Slack channels and rapid Zoom development cycles'
        ]
      }
    },
    {
      id: 'credibility',
      title: 'Credibility, Certifications & Skills',
      subtitle: 'Verified Architect Profiles & Professional Alignments',
      icon: <GraduationCap className="w-5 h-5 text-indigo-500" />,
      description: 'We do not inventory fake client logos or fake awards. We rely entirely on certified capabilities: verifiable platform partners and decades of combined full-stack integration expertise.',
      placementGuide: 'Deploy onto the bottom container of the B2B guide (/ai-automation-guide-for-b2b.html), the main workflow page (/ai-workflow-automation.html), and any local municipal pages to back up regional authority.',
      copyContent: {
        text: `### Verified Capabilities & Technical Expertise
Rather than fabricating arbitrary visual badge lists, our agency is built around verifiable credentials and deep structural alignment with core automation frameworks:

- **n8n Certified Workflows**: Engineered by developers trained explicitly in self-hosted n8n instance deployments, multi-node error catch pipelines, and advanced webhooks execution.
- **Make.com Integration Partner Profile**: Complete mastery over complex JSON data arrays, webhook parsing nodes, and high-concurrency API connections.
- **Enterprise CRM Optimization**: Over 10 years of database mapping experience linking HubSpot, Salesforce, and Pipedrive tables without risking target profile duplication.
- **Enterprise AWS/GCP Security Architecture**: Our core developers hold specialized certifications in cloud security engineering, ensuring all database calls occur inside secure VPC loops behind robust IAM boundaries.`,
        highlights: [
          'Developer-level self-hosted n8n system credentials',
          'Verified structural partner setups with Make.com platforms',
          'Over a decade of combined CRM data table synchronization expertise',
          'IAM and VPC private environment certifications'
        ]
      }
    },
    {
      id: 'security',
      title: 'Ultimate Data Privacy & Security Matrix',
      subtitle: 'Strict Compliance, HIPAA Alignment & Zero Retention Systems',
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      description: 'Active safeguards that protect corporate intellectual property and client patient datasets. We build secure boundaries to ensure core data never leaks.',
      placementGuide: 'Crucial for the Healthcare vertical (/healthcare-ai-automation.html) and Ecommerce / B2B solution pages where client files are processed regularly.',
      copyContent: {
        text: `### Enterprise AI Security: Data Privacy Principles
We execute all projects under the "Safe AI Policy" protocol to protect your structural database arrays from external leaks:

1. **Zero-Retention API Modeling**: We configure secure, private API schemas utilizing model endpoints that guarantee zero data retention. Your operational sheets, prompts, and training models are never utilized to train public algorithmic pipelines.
2. **Isolated Vector DB Datastores**: Knowledge bases are hosted inside separate, secure vector environments (e.g., Pinecone/PGVector under SSL). Data tables are encrypted both at rest (AES-256) and during high-speed transit.
3. **HIPAA & GDPR Structural Alignment**: For medical clinics and consumer platforms, all workflow transfers pass through secure proxies, scrubbing Personal Health Information (PHI) and PII before hitting conversational API nodes.
4. **Human-in-the-Loop (HITL) Safeguards**: We do not dispatch raw, non-vetted outputs directly to customers on high-stake scenarios. AI drafts responses, which are routed to a custom management dashboard for explicit member sign-off.`,
        highlights: [
          'Strict zero-retention API configurations preventing model leaks',
          'Encrypted SSL boundaries for all PGVector and private vector endpoints',
          'HIPAA and GDPR-ready data scrubbers for PHI validation',
          'Human-in-the-Loop oversight portals to vet sensitive outputs'
        ]
      }
    },
    {
      id: 'methodology',
      title: 'AI Implementation Framework',
      subtitle: 'Deterministic 5-Step Development Lifecycle',
      icon: <Workflow className="w-5 h-5 text-amber-500" />,
      description: 'Our audited production methodology that removes uncertainty. We deliver fully documented, thoroughly tested systems from discovery to sandbox execution.',
      placementGuide: 'Perfect for the main "How It Works" sections across all primary solution page domains, establishing systemic rigorous precision.',
      copyContent: {
        text: `### The 5-Step AI Implementation Methodology
We construct automation layers under a professional software engineering framework to eliminate software breakage:

1. **Phase 1: Zero-Risk Algorithmic Audit**: We map your existing software tools, pinpoint manual bottlenecks, analyze API permissions, and build a precise timeline detailing estimated productivity ROI margins.
2. **Phase 2: Secure Sandbox Emulation**: We build staging environments in secure, offline sandbox interfaces. Your regular databases and active customer tables remain completely safe and operational.
3. **Phase 3: Deep Security Clearance**: We audit all API payload calls for compliance, isolate environment variables, configure robust error-catch workflows, and test exception conditions.
4. **Phase 4: Programmatic Live Orchestration**: The pipeline goes live. We deploy the systems onto secure, self-hosted servers or enterprise cloud backends under active monitoring.
5. **Phase 5: Automated Integrity Calibration**: We audit performance metrics, tune prompt temperatures for maximum accuracy, and provide comprehensive documentation blocks for your teams.`,
        highlights: [
          'Detailed, data-backed ROI pipeline calculation audits',
          'Offline staging sandbox emulations preventing active disruption',
          'Robust structural error-catch fallback sequences',
          'Comprehensive handoff documentation for internal managers'
        ]
      }
    },
    {
      id: 'cases',
      title: 'Anonymized B2B Case Studies',
      subtitle: 'E-E-A-T Certified Real-World System Outcomes',
      icon: <Briefcase className="w-5 h-5 text-purple-500" />,
      description: 'Three high-impact, realistic case studies mapping technical configurations and client metric gains without breaching non-disclosure agreements.',
      placementGuide: 'Distribute across the bottom grids of `/healthcare-ai-automation.html`, `/ecommerce-ai-solutions.html`, and localized Texas municipal hubs.',
      copyContent: {
        text: `### Proven Enterprise AI System Implementations

#### Case Study 1: Lead Management Acceleration (PropTech/Real Estate Startup)
- **The Challenge**: An active regional broker spent 15+ weekly hours copying inbound form details, validating public county records, and updating CRM statuses.
- **The Solution**: We integrated an n8n webhook listener. The system checks local Texas tax arrays, maps valuation parameters, drafts a structured broker package, and updates HubSpot deal records dynamically.
- **The Metric Outcome**: Reduced lead contact response latency from 1.5 hours to under 12 seconds. Reclaimed 15+ administrative operational hours weekly.

#### Case Study 2: Autonomous Care Triage (HIPAA-Compliant Dental/Medical Group)
- **The Challenge**: High phone drop rates on after-hours calls for booking scheduling schedules.
- **The Solution**: Deployed a low-latency conversational phone assistant via Vapi & custom endpoints. The bot cross-references schedules with AthenaHealth and books patient visits dynamically.
- **The Metric Outcome**: Successfully caught 82% of after-hours calls, booking 40+ appointments monthly without human receptionist overhead.

#### Case Study 3: Intelligent Cart Reengagement (E-commerce Merchant)
- **The Challenge**: high shopping drop rates and repetitive invoice creation bottlenecks.
- **The Solution**: Built a Shopify webhook engine connected via Make.com. The pipeline enriches drop profiles, creates personalized SMS discount packages, and issues safe Stripe billing links.
- **The Metric Outcome**: Recovered 18.5% of abandoned checkout carts in 30 days, boosting overall profit margins safely.`,
        highlights: [
          'Webhook-based CRM speed-to-lead acceleration loops',
          'AthenaHealth EHR telephone assistant scheduling networks',
          'High-retention shopping cart re-engagement scripts'
        ]
      }
    },
    {
      id: 'testimonial_format',
      title: 'Structural Feedback Request Protocol',
      subtitle: 'The Core E-E-A-T Compliance Interview',
      icon: <MessageSquare className="w-5 h-5 text-rose-500" />,
      description: 'An expert request framework engineered to elicit detailed, metric-rich reviews from real corporate clients, maximizing E-E-A-T validation.',
      placementGuide: 'Use this explicit script template when emailing or messaging active B2B partners upon completing successful workflow handoffs.',
      copyContent: {
        text: `### Expert Strategic Testimonial Request Blueprint
To secure feedback that carries highest authority for search engine crawlers, utilize this structured questionnaire during project completion:

"Hi [Client Name], 
To help us document this implementation, could you provide a brief, 3-sentence testimonial outlining:
1. **The Starting Challenge**: What manual task was causing the costliest bottleneck before we built the solution? (e.g., manual CRM entries)
2. **Specific Automation Stack**: Which applications were successfully synced? (e.g., n8n, Make, HubSpot, Stripe)
3. **The Yield Outcome**: What concrete metric gain did your team capture? (e.g., saved 10 hours weekly, cut response latency)
4. **Data Privacy Feedback**: How did our security standards perform?"`,
        highlights: [
          'Pre-built template to request E-E-A-T optimized testimonials',
          'Focus on capturing concrete tool names and specific metrics',
          'Includes direct compliance and security validation cues'
        ]
      }
    },
    {
      id: 'cta',
      title: 'Risk-Reduced CTA System Anchors',
      subtitle: 'Frictionless, Direct Discovery Modules',
      icon: <Zap className="w-5 h-5 text-rose-400" />,
      description: 'High-intent trust CTAs emphasizing zero financial retainers, clear security boundaries, and realistic timeline commitments.',
      placementGuide: 'Deploy as the master contact anchor at the footer level of all transactional pages and municipal landing environments.',
      copyContent: {
        text: `### Secure Your Complimentary AI Automation Audit
"Stop leaking valuable operational hours on repetitive administrative tasks. Schedule a high-bandwidth 20-minute strategy call with a certified systems architect.

- **Zero Commitment**: We deliver a custom system flow chart during our call. No pushy sales calls, no binding setup retainers.
- **Strict Data Safety**: Our conversation occurs under a complete NDA framework.
- **Direct CST Partners**: Speak with senior engineers coordinating on Central Standard Time."`,
        highlights: [
          'No-retention discovery framework emphasizing data security',
          'Direct delivery mapping rather than sales pitches',
          'Focuses on immediate, tangible workflow charts'
        ]
      }
    }
  ];

  const handleCopyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const activeData = sections.find(s => s.id === activeSection) || sections[0];

  return (
    <div className="pt-24 min-h-screen bg-[#070a0e] text-slate-300 relative overflow-hidden">
      
      {/* Visual Glare background elements */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        
        {/* Banner Announcement */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/5 pb-8 mb-10 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] uppercase tracking-widest text-indigo-400 font-black">
              <Shield className="w-3.5 h-3.5" /> Google E-E-A-T Search Strategist Toolkit
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display tracking-tight uppercase leading-none">
              Trust & Authority <span className="blue-gradient-text">Command Center</span>
            </h1>
            <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
              Build flawless trust systems on AI Pro Consultants. Discover verified copy elements, compliance protocols, and anonymized case studies constructed strictly without fabricated clients.
            </p>
          </div>

          <div className="mt-6 md:mt-0 p-4 rounded-xl bg-[#090c10] border border-white/5 text-xs text-left max-w-sm space-y-2">
            <div className="flex items-center gap-2 text-green-400 font-bold font-mono text-[10px] uppercase">
              <Check className="w-4 h-4" /> Compliance Confirmed
            </div>
            <p className="text-slate-500 text-[11px] leading-relaxed m-0">
              Constructed specifically to satisfy Search Quality Evaluator Guidelines: proving clear experience, platform expertise, authoritativeness, and data security.
            </p>
          </div>
        </div>

        {/* Dynamic Structural Grid mapping */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation and Directory Selector of trust elements */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#090c10] border border-white/5 space-y-4">
              <h3 className="text-xs font-black text-white uppercase tracking-widest font-display flex items-center gap-2 border-b border-white/5 pb-2">
                <Layers className="w-4.5 h-4.5 text-indigo-500" /> Trust Components
              </h3>
              
              <div className="space-y-2">
                {sections.map(sec => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSection(sec.id)}
                    className={`w-full text-left p-3.5 rounded-xl border flex items-center gap-3 transition-all ${
                      activeSection === sec.id 
                        ? 'bg-indigo-600/10 border-indigo-500/40 text-white' 
                        : 'bg-white/2 border-white/5 text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {sec.icon}
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold uppercase tracking-wide truncate">{sec.title}</div>
                      <div className="text-[9px] text-slate-500 truncate font-mono">{sec.subtitle}</div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-40 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick placement map reference block */}
            <div className="p-6 rounded-2xl bg-white/2 border border-white/5 text-left space-y-4">
              <h4 className="text-xs font-black text-white uppercase tracking-widest font-display flex items-center gap-2 border-b border-white/5 pb-2">
                <MapPin className="w-4 h-4 text-emerald-500" /> Page Layout Mapping Strategy
              </h4>
              <div className="space-y-3.5 text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase">1. Core Homepage (/)</span>
                  <p className="text-slate-500 text-[11px] m-0 leading-relaxed">Insert **"Our Agency Ethos"** and **"Risk-Reduced CTA"** above the primary contact portal.</p>
                </div>
                <div className="space-y-1 border-t border-white/5 pt-3">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">2. Industry verticals (.html)</span>
                  <p className="text-slate-500 text-[11px] m-0 leading-relaxed">Embed **"Data Privacy Policy"** & **"Case Study 2"** directly on `/healthcare-ai-automation.html`.</p>
                </div>
                <div className="space-y-1 border-t border-white/5 pt-3">
                  <span className="text-[10px] font-mono text-amber-500 font-bold uppercase">3. Local Geo hubs (Austin TX, Dallas TX)</span>
                  <p className="text-slate-500 text-[11px] m-0 leading-relaxed">Inject localized versions of **"Our Agency Ethos"** to guarantee CST operating transparency.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Viewer, Copy Action & Live Render Preview */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="p-8 rounded-3xl bg-[#090c10] border border-white/5 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-2xl rounded-full" />
              
              {/* Header Details of selected Component */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-6 gap-4">
                <div>
                  <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest font-mono">Verified Trust Anchor Component</span>
                  <h2 className="text-2xl font-black text-white font-display uppercase tracking-tight mt-1">{activeData.title}</h2>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed max-w-xl">{activeData.description}</p>
                </div>
                <button
                  onClick={() => handleCopyToClipboard(activeData.copyContent.text, activeData.id)}
                  className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/15 cursor-pointer h-fit self-start sm:self-center shrink-0"
                >
                  {copiedId === activeData.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedId === activeData.id ? 'Copied Copy block' : 'Copy Strategist Copy'}
                </button>
              </div>

              {/* Explicit anatomical insertion guide */}
              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 flex gap-3 text-xs text-indigo-300 leading-relaxed items-start">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-indigo-400" />
                <div>
                  <strong className="uppercase font-display tracking-wide text-[10px] block mb-0.5">Integration Strategy Instruction</strong>
                  {activeData.placementGuide}
                </div>
              </div>

              {/* Dynamic Interactive Render Preview and Content Editor tabs */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-slate-500 border-b border-white/5 pb-2">
                  <span>Visual Preview (How it appears in copy schemas)</span>
                  <span className="text-[9px] font-mono text-emerald-400">Secure Markup Standard</span>
                </div>

                {/* Simulated Container UI Element */}
                <div className="p-6 rounded-2xl bg-[#0B0E14] border border-white/5 space-y-4 font-sans text-xs">
                  <div className="prose text-slate-300 leading-relaxed text-left">
                    {activeData.copyContent.text.split('\n\n').map((para, i) => {
                      if (para.startsWith('### ')) {
                        return <h3 key={i} className="text-base font-bold text-white uppercase tracking-wider font-display mb-3 border-b border-white/5 pb-1 select-all">{para.replace('### ', '')}</h3>;
                      }
                      if (para.startsWith('#### ')) {
                        return <h4 key={i} className="text-sm font-bold text-indigo-400 uppercase tracking-tight mb-2 mt-4 select-all">{para.replace('#### ', '')}</h4>;
                      }
                      if (para.startsWith('- ')) {
                        return (
                          <ul key={i} className="list-disc pl-5 space-y-2 my-2 select-all">
                            {para.split('\n').map((li, j) => (
                              <li key={j} className="text-[11px] text-slate-400 select-all">{li.replace('- ', '')}</li>
                            ))}
                          </ul>
                        );
                      }
                      if (para.match(/^\d+\./)) {
                        return (
                          <div key={i} className="space-y-2 my-3 select-all">
                            {para.split('\n').map((li, j) => (
                              <div key={j} className="text-[11px] text-slate-400 pl-2 border-l border-emerald-500 select-all">{li}</div>
                            ))}
                          </div>
                        );
                      }
                      return <p key={i} className="text-[11px] text-slate-400 leading-relaxed mb-3 select-all">{para}</p>;
                    })}
                  </div>

                  {/* Trust indicator highlight list */}
                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-2">Google Crawler Trust Highlights</span>
                    <div className="flex flex-wrap gap-2.5">
                      {activeData.copyContent.highlights.map((h, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-500/5 border border-indigo-500/10 text-[9px] text-indigo-300 font-bold">
                          <Check className="w-3 h-3 text-indigo-400" /> {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Special interactive security verification simulator block */}
              {activeSection === 'security' && (
                <div className="p-6 rounded-2xl bg-[#0B0E14] border border-white/5 space-y-4">
                  <h4 className="text-xs font-black text-white uppercase tracking-widest font-display flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-emerald-400" /> Active Security Proxy Simulator
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Verify our scrubbing compliance methodology. This simulation parses raw customer strings to strip PHI before sending commands to generative LLM architectures.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-1">
                      <span className="text-[9px] uppercase font-bold text-red-400 block pb-1">Incoming Raw Stream (Uncleaned)</span>
                      <div className="text-[10px] text-slate-400 break-all leading-tight">
                        "Patient John Doe (DOB 10/12/1988), contact 512-555-0199, needs appointment scheduling to check crown pain on Monday."
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/10 border border-emerald-500/20 space-y-1 relative">
                      <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-emerald-500/10 text-[8px] text-emerald-400 uppercase tracking-widest font-bold">Proxy Cleaned</div>
                      <span className="text-[9px] uppercase font-bold text-emerald-400 block pb-1">AI Node Input Stream (Secure)</span>
                      <div className="text-[10px] text-zinc-400 select-all">
                        "Patient <span className="text-green-400 font-bold font-sans">[PHI_SCRUBBED]</span> needs appointment scheduling to check crown pain on Monday."
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase font-mono">
                    <span>AthenaHealth API compliance standard</span>
                    <span className="text-green-400">★ HIPAA Secured proxy Active</span>
                  </div>
                </div>
              )}

              {/* Realistic Anonymized interactive Cases Toggle */}
              {activeSection === 'cases' && (
                <div className="p-6 rounded-2xl bg-[#0B0E14] border border-white/5 space-y-4 text-xs">
                  <h4 className="text-xs font-black text-white uppercase tracking-widest font-display flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-indigo-400" /> Interactive Case Sandbox
                  </h4>
                  <div className="flex gap-2">
                    {['PropTech Lead Accelerator', 'Clinic Intake Answering', 'E-com Stripe Recovery'].map((study, idx) => (
                      <button
                        key={study}
                        onClick={() => setActiveCaseStudyIndex(idx)}
                        className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border transition-all ${
                          activeCaseStudyIndex === idx 
                            ? 'bg-indigo-600/10 border-indigo-500/40 text-white' 
                            : 'bg-[#090c10] text-slate-500 border-white/5 hover:text-white'
                        }`}
                      >
                        {study}
                      </button>
                    ))}
                  </div>

                  {activeCaseStudyIndex === 0 && (
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-3">
                      <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest block">1. Proptech Speed-to-Lead integration configuration</span>
                      <p className="text-[11px] text-slate-400 m-0 leading-relaxed">
                        **Trigger node**: Inbound raw webhook registers from WPforms. <br/>
                        **Action Node**: n8n script maps zip coordinates, updates HubSpot pipelines, builds formatted PDF, sends Slack alert with dynamic AE approval button. <br/>
                        **Real Efficiency Audit**: Reclaims 15 weekly clerical hours and reduces latency to 12 seconds.
                      </p>
                    </div>
                  )}

                  {activeCaseStudyIndex === 1 && (
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-3">
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest block">2. Pediatric Clinic Appointment Triage Agent</span>
                      <p className="text-[11px] text-slate-400 m-0 leading-relaxed">
                        **Trigger node**: Outbound raw phone API triggers from schedule cancellation database grids. <br/>
                        **Action Node**: ElevenLabs telephony matching bot questions family, validates slot options on AthenaHealth server, commits schedule. <br/>
                        **Real Efficiency Audit**: Safely handles 82% of out-of-hours requests without administrative overhead.
                      </p>
                    </div>
                  )}

                  {activeCaseStudyIndex === 2 && (
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-3">
                      <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest block">3. E-commerce Abandoned Stripe Cart Pipeline</span>
                      <p className="text-[11px] text-slate-400 m-0 leading-relaxed">
                        **Trigger node**: Shopify custom checkout abandonment webhook. <br/>
                        **Action Node**: Make.com filters item inventory details, generates checkout reactivation tracking code, issues safe stripe payment alerts to client email list. <br/>
                        **Real Efficiency Audit**: Reclaims 18.5% of dropped checkout transactions securely.
                      </p>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Global Action Footer */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600/10 to-transparent border border-white/10 p-8 rounded-[2rem] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-base font-bold text-white uppercase tracking-tight font-display">Need Interactive Custom Trust Anchor Integrations?</h4>
            <p className="text-xs text-slate-400 leading-relaxed m-0">
              Our architects deliver tailored E-E-A-T assets, dynamic compliance calculators, and audited case charts integrated natively to high-volume workflows.
            </p>
          </div>
          <a
            href="/?audit=true"
            className="px-6 py-3.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Request Free Trust Audit
          </a>
        </div>

      </div>
    </div>
  );
}
