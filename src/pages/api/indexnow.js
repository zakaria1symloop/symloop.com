/**
 * IndexNow API endpoint for instant URL indexing
 * Supports Bing, Yandex, and other IndexNow-compatible search engines
 *
 * Usage: POST /api/indexnow
 * Body: { urls: ["https://symloop.com/new-page"] }
 */

const INDEXNOW_KEY = 'e9f4a1b2c3d5e6f7a8b9c0d1e2f3a4b5';
const HOST = 'symloop.com';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { urls } = req.body;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return res.status(400).json({ error: 'URLs array is required' });
    }

    // Validate URLs
    const validUrls = urls.filter(url => {
      try {
        const parsed = new URL(url);
        return parsed.hostname === HOST || parsed.hostname === `www.${HOST}`;
      } catch {
        return false;
      }
    });

    if (validUrls.length === 0) {
      return res.status(400).json({ error: 'No valid URLs provided' });
    }

    // Submit to IndexNow endpoints
    const indexNowEndpoints = [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
      'https://yandex.com/indexnow',
    ];

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: validUrls,
    };

    const results = await Promise.allSettled(
      indexNowEndpoints.map(async (endpoint) => {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        return {
          endpoint,
          status: response.status,
          ok: response.ok,
        };
      })
    );

    const successCount = results.filter(r => r.status === 'fulfilled' && r.value.ok).length;

    return res.status(200).json({
      success: true,
      message: `Submitted ${validUrls.length} URLs to ${successCount}/${indexNowEndpoints.length} endpoints`,
      urls: validUrls,
      results: results.map(r => r.status === 'fulfilled' ? r.value : { error: r.reason }),
    });
  } catch (error) {
    console.error('IndexNow API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
