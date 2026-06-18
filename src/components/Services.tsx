import { motion } from 'motion/react';
import { 
  Zap, 
  MessageSquare, 
  Mic, 
  Share2, 
  PenTool, 
  Search, 
  BarChart, 
  ChevronRight 
} from 'lucide-react';

const services = [
  {
    title: 'AI Workflow Automation',
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    description: 'We connect your tech stack and build custom automated workflows that run your business operations 24/7.',
    outcome: 'Save 20+ hours/week & remove manual errors.',
    href: '/ai-workflow-automation',
    linkText: 'Read Automation Guide'
  },
  {
    title: 'Custom LLM Chatbots',
    icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
    description: 'Bespoke intelligent chatbots trained exhaustively on your data profiles to handle sales qualifying and automated customer support.',
    outcome: 'Instant reply speed, 2.5x higher leads.',
    href: '/llm-chatbot-development',
    linkText: 'Read Chatbot Guide'
  },
  {
    title: 'AI Voice Agents',
    icon: <Mic className="w-8 h-8 text-pink-400" />,
    description: 'Ultra-low latency human-like voice systems designed for automated appointment booking, inbound support, and smart calls.',
    outcome: 'Zero missed lead calls & seamless scheduling.',
    href: '/ai-voice-agents-guide',
    linkText: 'Read Voice Agent Guide'
  },
  {
    title: 'AI Lead Generation',
    icon: <Share2 className="w-8 h-8 text-indigo-400" />,
    description: 'Automated intent scraping, high-level intelligence prospecting, and hyper-targeted lead routing across B2B platforms.',
    outcome: 'Eliminate cold outreach drag entirely.',
    href: '/ai-lead-generation-automation',
    linkText: 'Read Outbound Guide'
  },
  {
    title: 'AI for E-commerce',
    icon: <PenTool className="w-8 h-8 text-cyan-400" />,
    description: 'Decrease cart abandonment, personalize search recommending, and solve support backlogs with custom retail commerce integrations.',
    outcome: 'Optimize AOV & support-ticket resolution.',
    href: '/ecommerce-ai-solutions',
    linkText: 'Read E-commerce Guide'
  },
  {
    title: 'AI SEO & GEO Citations',
    icon: <Search className="w-8 h-8 text-emerald-400" />,
    description: 'Engineered optimizations to position your business as the #1 citation in AI engines like ChatGPT, Perplexity, and Claude.',
    outcome: 'Overcome competitor digital footprint.',
    href: '/blog/',
    linkText: 'Read Blog Guides'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Scale Operations
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Core <span className="gradient-text">AI Automation</span> Agency Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg animate-fade-in"
          >
            We don't sell generic templates. We construct durable integrations and intelligent agents that solve core bottlenecks and grow your bottom line.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-600/10 blur-2xl group-hover:bg-blue-600/20 transition-all"></div>
              <div>
                <div className="w-12 h-12 mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display tracking-tight uppercase">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="flex flex-col space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Expected Outcome</span>
                  <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">{service.outcome}</span>
                </div>
                <div>
                  <a 
                    href={service.href} 
                    className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-blue-500 hover:text-blue-400 transition-colors group/link"
                  >
                    {service.linkText} <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
