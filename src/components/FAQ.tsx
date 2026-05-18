import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What exactly is AI automation?",
    answer: "AI automation uses artificial intelligence to handle repetitive business tasks — like lead qualification, customer follow-ups, scheduling, and data entry — without human involvement. We build custom systems that run these workflows 24/7, cutting costs and response times simultaneously."
  },
  {
    question: "How much does a custom AI chatbot cost?",
    answer: "Most custom LLM chatbot projects range from $2,500 to $8,000 depending on complexity, integrations, and training data requirements. We start with a free AI Audit to scope your exact needs before any pricing discussion."
  },
  {
    question: "What is an AI voice agent?",
    answer: "An AI voice agent is a system that can have human-like conversations over the phone. It can handle inbound support, outbound sales calls, and appointment setting with near-zero latency."
  },
  {
    question: "How long does implementation take?",
    answer: "Minor automations can be live in 1-2 weeks. Full-scale AI systems usually take 4-8 weeks from audit to full deployment and monitoring."
  },
  {
    question: "What is AI SEO?",
    answer: "Traditional SEO focuses on Google keywords. AI SEO (or GEO/AEO) optimizes your content to be cited by LLMs like ChatGPT, Claude, and Perplexity, ensuring your brand is the answer when people ask AI for recommendations."
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
