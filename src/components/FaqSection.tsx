import React, { useState, ReactNode } from 'react';
import { HelpCircle, ChevronRight, ChevronDown, CheckCircle, Lightbulb, Zap, HelpCircle as HelpIcon } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string | ReactNode;
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('survival');

  const faqs: FaqItem[] = [
    {
      id: 'origins',
      question: "What is the origin of the term 'Dumsor'?",
      answer: "The term is coined from two words in the local Akan language: 'dum' which means to quench, extinguish, or turn off, and 'sɔ' which means to light up, ignite, or turn on. It has become the iconic national slang for frequent, unscheduled electricity blackouts in Ghana.",
    },
    {
      id: 'survival',
      question: 'Ghana Outage Checklist: How should I prepare?',
      answer: (
        <div className="space-y-2 mt-1.5 text-xs text-slate-300">
          <p>Surviving scheduled outages is much easier when you follow this vital high-efficiency checklist:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              <strong>Stage 1 Charge:</strong> Ensure your laptops, power banks, and phone batteries are topped up prior to the 6-hour window.
            </li>
            <li>
              <strong>Food Safety:</strong> Minimize opening your refrigerator during 'OFF' hours. A sealed fridge can maintain safe cooling for up to 4 hours.
            </li>
            <li>
              <strong>Emergency Lights:</strong> Keep high-capacity rechargeable LED lanterns or solar-powered lamps readily available on nightstands.
            </li>
            <li>
              <strong>Surge Protection:</strong> Unplug sensitive appliances (refrigerators, TVs, gaming consoles) when power goes out, to guard them against voltage surges when power returns.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'rotations',
      question: 'How accurate is this rotational schedule?',
      answer: "This is a prototype based on standard weekly schedules released historic grids. In actual operations, emergency shutdowns or mechanical faults at generation plants (like the Akosombo Dam, thermal plants at Aboadze, or gas infrastructures) can cause deviation from schedules by roughly ±30 minutes. Always keep a backup power source ready.",
    },
    {
      id: 'equipment',
      question: 'What is the best household backup option?',
      answer: 'For small apartments and offices, a 1.5 - 2.5kVA Portable Power Station (LiFePO4 battery solar generator) or a small pure sine-wave inverter is the cleanest, quietest setup. In heavy residential setups, automatic transfer switches connected to gasoline generators are common.',
    },
  ];

  return (
    <div id="faq-sec" className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mt-12 shadow-lg backdrop-blur-md">
      <div className="flex items-center gap-2.5 mb-6">
        <div className="p-2 bg-amber-500/10 rounded-xl">
          <HelpIcon className="w-5 h-5 text-amber-400" />
        </div>
        <div>
          <h2 className="text-base font-bold text-white font-display">
            Local Grid FAQ & Emergency Tips
          </h2>
          <p className="text-xs text-slate-400">
            Survival strategies, dictionary origins, and advice for managing appliances around Accra & Kumasi.
          </p>
        </div>
      </div>

      <div className="divide-y divide-white/5">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="py-4 first:pt-0 last:pb-0">
              <button
                id={`faq-btn-${faq.id}`}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full flex items-center justify-between text-left font-semibold text-xs md:text-sm text-slate-200 hover:text-amber-400 transition-colors py-1 cursor-pointer"
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-xs text-slate-300 leading-relaxed font-light pl-1 bg-white/5 p-3 rounded-lg border border-white/5">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
