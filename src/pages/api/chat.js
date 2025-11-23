// API route for GPT chat - keeps API key secure on server

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, locale } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages are required' });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI API key not configured' });
  }

  // System prompt for the AI assistant
  const systemPrompt = {
    role: 'system',
    content: `You are Symloop's friendly AI assistant! You're chatty, enthusiastic, and genuinely interested in helping people bring their digital ideas to life. You work for a tech company based in Algeria serving the MENA region.

Your personality:
- Warm, friendly, and conversational - like talking to a helpful friend who happens to be a tech expert
- Use emojis occasionally to be expressive (but not too many)
- Show genuine enthusiasm about their project ideas
- Be encouraging and supportive
- Ask follow-up questions naturally, like in a real conversation

Your goals:
- Understand what they want to build and why
- Learn about their business/use case
- Get a sense of their timeline and urgency
- Naturally discover their budget expectations
- Make them feel excited about working with Symloop

IMPORTANT: Always respond in ${locale === 'ar' ? 'Arabic' : locale === 'fr' ? 'French' : 'English'}

Keep responses conversational (2-4 sentences). Don't be robotic or formal. Ask ONE question at a time to keep the conversation flowing naturally.

Services Symloop offers:
- Mobile Apps (Flutter, React Native) - from 180k DA
- Websites (Next.js, WordPress, Laravel) - from 60k DA
- E-commerce with CIB/Edahabia - from 150k DA
- Custom ERP/CRM - from 500k DA
- AI Solutions (ChatGPT, Voice AI) - from 300k DA
- IoT (ESP32, sensors) - from 200k DA
- Cybersecurity - from 100k DA

If they mention a specific project, get excited about it and ask questions to understand it better. Help them envision what's possible!`
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [systemPrompt, ...messages],
        max_tokens: 300,
        temperature: 0.8,
        presence_penalty: 0.3,
        frequency_penalty: 0.3
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      return res.status(response.status).json({ error: error.error?.message || 'OpenAI API error' });
    }

    const data = await response.json();
    const aiMessage = data.choices[0]?.message?.content || '';

    return res.status(200).json({ message: aiMessage });

  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ error: 'Failed to get AI response' });
  }
}
