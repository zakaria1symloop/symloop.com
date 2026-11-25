"use client";
// The assistant's entry in the hero: one question field, plus three example questions on larger
// screens. Sending opens the chat window (details step first, then the answer). No animation of
// its own. On phones it is the hero's only action: the fixed bottom bar already carries WhatsApp
// and the phone number (user, 25 Nov 2026: the mobile page must stay light and fluid).
import { useState } from 'react';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { SUGGESTIONS, openAssistant } from '../onboarding/assistant';

const GOLD = '#E9CD86';
const COPY = {
  fr: { label: 'Assistant IA Symloop', hint: 'Posez votre question, il répond tout de suite.', placeholder: 'Posez votre question ici', send: 'Demander' },
  en: { label: 'Symloop AI assistant', hint: 'Ask your question, it answers right away.', placeholder: 'Ask your question here', send: 'Ask' },
  ar: { label: 'المساعد الذكي لسيملوب', hint: 'اطرحوا سؤالكم، يجيب فوراً.', placeholder: 'اطرحوا سؤالكم هنا', send: 'اسأل' },
};

export default function HeroAssistant({ locale = 'fr' }) {
  const L = COPY[locale] ? locale : 'fr';
  const c = COPY[L];
  const isRTL = L === 'ar';
  const [value, setValue] = useState('');
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const submit = (e) => { e.preventDefault(); openAssistant(value); setValue(''); };

  return (
    <div className="mt-8 sm:mt-9 max-w-xl">
      <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px]">
        <Sparkles className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} style={{ color: GOLD }} aria-hidden="true" />
        <span className="text-white font-medium">{c.label}</span>
        <span className="hidden sm:inline text-white/50">{c.hint}</span>
      </p>
      <form onSubmit={submit} className="mt-3 flex items-stretch border border-white/25 focus-within:border-white/70 bg-black/40 transition-colors">
        <label className="sr-only" htmlFor="hero-assistant-q">{c.label}</label>
        <input id="hero-assistant-q" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder={c.placeholder} maxLength={500}
          className={`flex-1 min-w-0 bg-transparent px-4 py-4 text-[15px] text-white placeholder-white/40 focus:outline-none ${isRTL ? 'text-right' : ''}`} />
        <button type="submit" className="group inline-flex items-center gap-2.5 px-4 sm:px-5 text-sm font-medium text-black bg-white hover:bg-white/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
          <span>{c.send}</span>
          <Arrow className={`w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} strokeWidth={1.75} />
        </button>
      </form>
      {/* example questions: larger screens only, phones keep the hero light */}
      <div className="mt-3 hidden sm:flex flex-wrap gap-2">
        {SUGGESTIONS[L].map((q) => (
          <button key={q} type="button" onClick={() => openAssistant(q)} className="text-start text-[12.5px] text-white/65 hover:text-white border border-white/15 hover:border-white/45 px-3 py-1.5 transition-colors">{q}</button>
        ))}
      </div>
    </div>
  );
}
