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
    title: 'AI Automation',
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    description: 'We connect your tech stack and build logic that runs your business while you sleep.',
    outcome: 'Eliminate 40% of manual repetitive tasks.',
    color: 'blue'
  },
  {
    title: 'AI Chatbots',
    icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
    description: 'Custom intelligent assistants trained on your data to handle sales and customer support 24/7.',
    outcome: 'Instant response time, 2.5x more leads.',
    color: 'purple'
  },
  {
    title: 'AI Voice Agents',
    icon: <Mic className="w-8 h-8 text-pink-400" />,
    description: 'Human-like voice systems for outbound cold calling, inbound scheduling, and support.',
    outcome: 'Scale call volume without hiring agents.',
    color: 'pink'
  },
  {
    title: 'AI Social Management',
    icon: <Share2 className="w-8 h-8 text-indigo-400" />,
    description: 'Automated content creation, scheduling, and engagement systems for LinkedIn, X, and Instagram.',
    outcome: 'Consistent multi-channel presence effortlessly.',
    color: 'indigo'
  },
  {
    title: 'AI Content Writing',
    icon: <PenTool className="w-8 h-8 text-cyan-400" />,
    description: 'High-quality, fact-checked blog posts and marketing copy that resonates with your brand voice.',
    outcome: '5x content output with zero fatigue.',
    color: 'cyan'
  },
  {
    title: 'AI SEO (GEO/LLM)',
    icon: <Search className="w-8 h-8 text-emerald-400" />,
    description: 'Optimizing your brand for traditional Google Search AND new AI Overviews / LLM responses.',
    outcome: 'Rank where your customers are searching now.',
    color: 'emerald'
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
            Scale Faster
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Our Core <span className="gradient-text">AI Powered</span> Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg"
          >
            We don't just "use" AI—we build custom systems designed to solve your specific business bottlenecks and fuel aggressive growth.
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
              className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all"
            >
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-600/10 blur-2xl group-hover:bg-blue-600/20 transition-all"></div>
              <div className="w-12 h-12 mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display tracking-tight uppercase">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="pt-6 border-t border-white/5 flex flex-col space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Target ROI</span>
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">{service.outcome}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
