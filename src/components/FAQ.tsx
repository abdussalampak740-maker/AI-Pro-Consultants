import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is an AI automation agency?",
    answer: "An AI automation agency (like AI Pro Consultants) designs, builds, and deploys custom artificial intelligence systems, database integrations, conversational LLM chatbots, voice agents, and workflow automations to eliminate repetitive manual work and drive company-wide revenue automatically."
  },
  {
    question: "How does AI automation help businesses save costs and grow revenue?",
    answer: "By automating high-impact tasks (like instant lead follow-ups, CRM synchronization, customer support, and appointment scheduling), we help brands reply to prospective clients in under 30 seconds. This leads to an average 2.5x lift in conversions and saves your staff 20+ hours every single week."
  },
  {
    question: "What orchestration and integration systems do you utilize?",
    answer: "We leverage frontier AI models (ChatGPT, Claude, Gemini) and bind them with industry-certified orchestration backends like n8n, Make.com, and Zapier. This ensures highly resilient pipelines that securely connect your internal tools without downtime."
  },
  {
    question: "Is AI automation secure and compliant for sectors like healthcare?",
    answer: "Absolutely. We implement custom sandboxed proxy endpoints, secure API tokenization, and rigid safety loops. We guarantee fully security-vetted and HIPAA-compliant implementations tailored to B2B, Service, and Healthcare enterprise requirements."
  },
  {
    question: "How much do custom AI solutions cost and what is the timeline?",
    answer: "Bespoke projects range from simple workflow integrations to full-scale conversational agents. Most standard engagements are deployed and operational in 3-6 weeks, returning fully quantified ROI. We begin every project with a comprehensive, free 48-hour AI Audit to inspect high-revenue loopholes before pricing matches your requirements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Common Questions</h2>
        <p className="text-slate-400 text-lg">Everything you need to know about scaling with AI.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors bg-white/2">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left group"
            >
              <span className="text-lg font-bold text-white font-display tracking-tight uppercase text-sm">{faq.question}</span>
              {openIndex === index ? <Minus className="w-4 h-4 text-blue-400" /> : <Plus className="w-4 h-4 text-slate-500 group-hover:text-white" />}
            </button>
            <AnimatePresence mode="wait">
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
