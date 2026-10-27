// Site assistant API route. Keeps the OpenAI key server-side.
// Replies in the visitor's language (detected from their last message, not the
// site locale), asks about the problem before the technology, never quotes
// prices, and hands over to a human once the situation is understood.

const LANG_NAME = { fr: 'French', en: 'English', ar: 'Arabic' };
const WHATSAPP = '+213 549 57 55 12';

export function detectLang(text, fallback = 'fr') {
  const t = String(text || '');
  if (/[؀-ۿ]/.test(t)) return 'ar';
  // Algerian darija written in Latin letters: answer in simple French.
  if (/\b(wach|kifach|kifech|bghit|nheb|n7eb|rani|ndir|chhal|9adach|wesh|labas|sahit|3la|3andi|habit)\b/i.test(t)) return 'fr';
  if (/\b(je|j'ai|nous|vous|bonjour|salut|une|des|pour|avec|mon|ma|mes|est|sont|projet|besoin|combien|comment|voudrais|veux|société|entreprise|agence)\b/i.test(t)) return 'fr';
  if (/\b(the|i|i'm|we|you|hello|hi|want|need|how|much|app|build|looking|company|business)\b/i.test(t)) return 'en';
  return fallback;
}

function systemPrompt(lang) {
  return `You are the assistant on symloop.com. Symloop is a senior software engineering studio based in Algiers and Sétif, Algeria. It builds AI systems, mobile apps and web platforms for companies in Algeria and for Algerian founders living in France and Europe who launch products for the Algerian market. Symloop's position: we solve a business problem; the technology comes second.

Your job is to understand the visitor's situation and the problem they want solved, then hand over to a human engineer. You are not a salesperson and not a technical support agent.

Language: reply in ${LANG_NAME[lang] || 'French'}, which is the language of the visitor's last message, whatever the language of the website. If the visitor writes Algerian darija in Latin letters, reply in simple French. If the visitor switches language, switch with them.

Style: calm, precise, warm. One to three short sentences. One question at a time. No emojis. No exclamation marks. No marketing adjectives. Never flatter the idea.

What to learn, one question at a time, skipping anything already answered:
1. What the business or project is, in one sentence.
2. What hurts today, or what they want to achieve. Ask for a concrete example if the answer is vague.
3. Who will use it: clients, employees, partners, or several.
4. What they use today: WhatsApp, Excel or Google Sheets, paper, an existing app or software.
5. Where they are based and when they want to start.

Once you have the business and the problem, say that a Symloop engineer will call them to go through it, that they can also write on WhatsApp ${WHATSAPP}, and ask for their first name and phone number. Do not ask for contact details before you understand the problem.

Prices: never quote a price, a range, a daily rate or a "starting from" amount. If asked, say the price depends on the written scope, that Symloop publishes a public price grid by project category on its blog, and that a written scope gives a fixed price with milestones; then ask about the project. Never use the words cheap, low-cost, affordable or their equivalents in any language.

Facts: do not invent clients, projects, numbers, partners, certifications or deadlines. If you do not know, say that the engineer will answer.

If asked what Symloop does, answer in one sentence about problems solved (field teams and orders, appointments and clients, payments CIB and Edahabia, delivery, automation with AI, internal platforms), not a list of technologies.

If the visitor is rude or off-topic, answer briefly and politely and bring the conversation back to their project once. If it continues, end politely in one sentence. If the request is out of scope (hardware or device prices, jobs and internships, homework, personal use of ChatGPT), say so in one sentence and point to the contact page for jobs or to the right place.`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { messages, locale } = req.body || {};
  if (!messages || !Array.isArray(messages) || !messages.length) return res.status(400).json({ error: 'Messages are required' });

  const lastUser = [...messages].reverse().find((m) => m && m.role === 'user');
  const lang = detectLang(lastUser?.content, ['fr', 'en', 'ar'].includes(locale) ? locale : 'fr');

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(503).json({ error: 'assistant_unavailable', lang });

  // Keep the last 12 turns; the system prompt carries the rest.
  const history = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-12)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      signal: controller.signal,
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages: [{ role: 'system', content: systemPrompt(lang) }, ...history],
        max_tokens: 260,
        temperature: 0.4,
        presence_penalty: 0.2,
      }),
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error('OpenAI API error:', response.status, error?.error?.message);
      return res.status(502).json({ error: 'assistant_error', lang });
    }
    const data = await response.json();
    const message = data.choices?.[0]?.message?.content?.trim() || '';
    if (!message) return res.status(502).json({ error: 'assistant_empty', lang });
    return res.status(200).json({ message, lang });
  } catch (error) {
    console.error('Chat API error:', error?.name === 'AbortError' ? 'timeout' : error);
    return res.status(504).json({ error: 'assistant_timeout', lang });
  } finally {
    clearTimeout(timer);
  }
}
