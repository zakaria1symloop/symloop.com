// ============================================================================
// SYMLOOP — One-shot Veo 3 video generator
//
// Generates a single short video via Google's Veo 3 API and saves it to
// public/insights/. Async-aware: polls the long-running operation until
// the video is ready, then downloads it.
//
// USAGE
//   GEMINI_API_KEY=xxx node scripts/generate-veo-video.mjs <output-name> "<prompt>"
//
// EXAMPLE
//   GEMINI_API_KEY=xxx node scripts/generate-veo-video.mjs healthcare-hero \
//     "Slow editorial dolly across a dimly lit clinical desk piled with paper forms..."
//
// NOTES
//   - Requires a billing-enabled Gemini API key (Veo is paid).
//   - Model: veo-3.0-generate-001 (full Veo 3, not fast).
//   - Output written to public/insights/<output-name>.mp4
//   - Fixed config: 8 seconds, 16:9, no people generation by default.
// ============================================================================

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const API_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
if (!API_KEY) {
  console.error('❌ Missing GEMINI_API_KEY environment variable.');
  process.exit(1);
}

const [outputName, ...promptParts] = process.argv.slice(2);
const PROMPT = promptParts.join(' ');
if (!outputName || !PROMPT) {
  console.error('❌ Usage: node scripts/generate-veo-video.mjs <output-name> "<prompt>"');
  process.exit(1);
}

const MODEL    = 'veo-3.0-generate-001';
const BASE     = 'https://generativelanguage.googleapis.com/v1beta';
const OUT_DIR  = resolve(ROOT, 'public', 'insights');
const OUT_PATH = resolve(OUT_DIR, `${outputName}.mp4`);

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  console.log(`\n🎬  Veo 3 generation`);
  console.log(`    model:  ${MODEL}`);
  console.log(`    output: ${OUT_PATH}`);
  console.log(`    prompt: ${PROMPT.slice(0, 120)}${PROMPT.length > 120 ? '…' : ''}\n`);

  // ── 1. Kick off the long-running prediction ─────────────────────────
  const startUrl = `${BASE}/models/${MODEL}:predictLongRunning?key=${API_KEY}`;
  const startBody = {
    instances: [{ prompt: PROMPT }],
    parameters: {
      aspectRatio:      '16:9',
      personGeneration: 'allow_all',
    },
  };

  const startRes = await fetch(startUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(startBody),
  });

  const startJson = await startRes.json();
  if (!startRes.ok) {
    console.error('❌ Start failed:', JSON.stringify(startJson, null, 2));
    process.exit(1);
  }

  const opName = startJson.name;
  if (!opName) {
    console.error('❌ No operation name in response:', JSON.stringify(startJson, null, 2));
    process.exit(1);
  }
  console.log(`✓ Operation started: ${opName}\n`);

  // ── 2. Poll until done ──────────────────────────────────────────────
  const pollUrl = `${BASE}/${opName}?key=${API_KEY}`;
  const startTime = Date.now();
  let opJson;
  let attempts = 0;

  while (true) {
    attempts++;
    await new Promise(r => setTimeout(r, 10_000)); // 10s between polls
    const res = await fetch(pollUrl);
    opJson = await res.json();

    const elapsed = Math.round((Date.now() - startTime) / 1000);
    process.stdout.write(`\r⏳  poll ${attempts.toString().padStart(2, '0')} — ${elapsed}s elapsed${opJson.done ? ' — DONE' : ''}    `);

    if (opJson.done) {
      console.log('');
      break;
    }
    if (attempts > 60) { // ~10 min cap
      console.error('\n❌ Timed out after 10 minutes');
      process.exit(1);
    }
  }

  if (opJson.error) {
    console.error('\n❌ Operation error:', JSON.stringify(opJson.error, null, 2));
    process.exit(1);
  }

  // ── 3. Extract the video URI ────────────────────────────────────────
  const samples =
    opJson.response?.generateVideoResponse?.generatedSamples ||
    opJson.response?.videos ||
    opJson.response?.generatedVideos;

  if (!samples || samples.length === 0) {
    console.error('\n❌ No video samples in response. Full payload:');
    console.error(JSON.stringify(opJson, null, 2));
    process.exit(1);
  }

  const sample      = samples[0];
  const videoUri    = sample?.video?.uri || sample?.uri || sample?.video;
  const videoBytes  = sample?.video?.bytesBase64Encoded || sample?.bytesBase64Encoded;

  if (videoBytes) {
    // Inline base64
    const buf = Buffer.from(videoBytes, 'base64');
    await writeFile(OUT_PATH, buf);
    console.log(`\n✅ Saved ${(buf.length / 1024 / 1024).toFixed(2)} MB → ${OUT_PATH}\n`);
    return;
  }

  if (videoUri) {
    // Download from URI (the URI requires the API key appended)
    const dlUrl = videoUri.includes('?') ? `${videoUri}&key=${API_KEY}` : `${videoUri}?key=${API_KEY}`;
    const dlRes = await fetch(dlUrl);
    if (!dlRes.ok) {
      console.error(`\n❌ Download failed (HTTP ${dlRes.status})`);
      console.error(await dlRes.text());
      process.exit(1);
    }
    const ab = await dlRes.arrayBuffer();
    const buf = Buffer.from(ab);
    await writeFile(OUT_PATH, buf);
    console.log(`\n✅ Saved ${(buf.length / 1024 / 1024).toFixed(2)} MB → ${OUT_PATH}\n`);
    return;
  }

  console.error('\n❌ Could not find video data or URI in sample. Sample:');
  console.error(JSON.stringify(sample, null, 2));
  process.exit(1);
}

main().catch(err => {
  console.error('\n❌ Fatal:', err);
  process.exit(1);
});
