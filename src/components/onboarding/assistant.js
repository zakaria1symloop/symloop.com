// Shared bits for the site assistant: the example questions shown in the hero and in the chat
// window, and the one way to open the chat window from anywhere on the site.

export const SUGGESTIONS = {
  fr: ['Combien de temps pour créer une application ?', 'Peut-on payer par CIB et Edahabia sur un site ?', 'Une IA peut-elle répondre à mes clients ?'],
  en: ['How long does it take to build an app?', 'Can a site take CIB and Edahabia payments?', 'Can an AI answer my customers?'],
  ar: ['كم يستغرق إنشاء تطبيق؟', 'هل يمكن الدفع ببطاقة CIB والذهبية في موقع؟', 'هل يستطيع ذكاء اصطناعي الرد على زبائني؟'],
};

const EVENT = 'symloop:assistant';

// Opens the chat window (mounted once, in the header), optionally with a first question.
export function openAssistant(question = '') {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(EVENT, { detail: { question: String(question || '').trim().slice(0, 500) } }));
}

// Used by the header: calls `handler(question)` each time something asks to open the assistant.
export function onAssistantOpen(handler) {
  if (typeof window === 'undefined') return () => {};
  const listener = (e) => handler((e.detail && e.detail.question) || '');
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
