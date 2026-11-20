// Bespoke animated figures for the 2027 "agent vocal IA" page.
//  flux(): one week of calls on a company number, drawn as a flow. Of 1 400 calls, 870 are taken
//          by the reception and 530 get no answer (220 overflow at peak hours, 310 after
//          closing). Given to a voice agent, those 530 become 307 resolved by the agent, 159
//          handed to a person with a summary and 64 abandoned.
//  tour(): one turn of the conversation on a time axis in milliseconds. After the caller stops
//          speaking: 400 ms to be sure they have finished, 200 ms of transcription, 700 ms for
//          the model and a look-up in the diary, 200 ms before the first synthesised sound:
//          1.5 s of silence. Two markers of the example: 1 s (fluid) and 2 s (the caller says
//          "hello?").
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center top;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const SOFT = 'rgba(242,181,68,0.30)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
function ltrSpans(x, y, parts, size, anchor) {
  const L = ctx(false);
  const monoCss = /style="([^"]*)"/.exec(text(L, 0, 0, 'x', { size, font: 'mono' }))[1];
  return `<text x="${x}" y="${y}" style="${monoCss}" direction="ltr" text-anchor="${anchor}">` + parts.map(([str, fill, bold]) => (str ? `<tspan fill="${fill}" style="font-weight:${bold ? 500 : 300}">${esc(str)}</tspan>` : '')).join('') + '</text>';
}
const num = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10.5, 'middle');
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const band = (c, pts, fill) => `<polygon points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="${fill}" stroke="none"/>`;
const grp = (n, sep) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);

// one week of calls
const TOTAL = 1400; const HUMAN = 870; const OVERFLOW = 220; const AFTER = 310;
const OUT = [307, 159, 64];
const K = 0.135; const BW = 26;
const X1 = 170; const X2 = 450; const X3 = 740;

export function flux(t, rtl) {
  const c = ctx(rtl); const P = 'fx'; const css = []; const H = 686;
  const iso = (str) => (rtl ? `⁦${str}⁩` : str);
  const missed = OVERFLOW + AFTER;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  const y0 = 204;
  const hH = HUMAN * K; const mY = y0 + hH + 16; const mH = missed * K;
  // all the calls
  s += `<g style="${growY(css, P, 'c1', 5, 2)}">` + rect(c, X1, y0, BW, TOTAL * K, { stroke: C.fg55, fill: C.fg35 }) + '</g>';
  s += `<g style="animation:${show(css, P, 't1', 7)}">` + text(c, X1 - 10, y0 + 14, t.total.replace('{v}', iso(grp(TOTAL, t.sep))), { size: 10.5, fill: C.fg, weight: 500, anchor: 'end' }) + text(c, X1 - 10, y0 + 30, t.totalSub, { size: 9, fill: C.fg55, anchor: 'end' }) + '</g>';
  // taken by the reception, and not answered
  s += `<g style="animation:${show(css, P, 'f1', 9)}">` + band(c, [[X1 + BW, y0], [X2, y0], [X2, y0 + hH], [X1 + BW, y0 + hH]], 'rgba(255,255,255,0.07)') + band(c, [[X1 + BW, y0 + hH], [X2, mY], [X2, mY + mH], [X1 + BW, y0 + TOTAL * K]], 'rgba(242,181,68,0.13)') + '</g>';
  s += `<g style="${growY(css, P, 'c2a', 11, 1.6)}">` + rect(c, X2, y0, BW, hH, { stroke: C.fg55, fill: C.fg35 }) + '</g>';
  s += `<g style="${growY(css, P, 'c2b', 13, 1.6)}">` + rect(c, X2, mY, BW, mH, { stroke: C.accent, fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 't2', 15)}">` + text(c, X2 + BW + 10, y0 + 16, t.human.replace('{v}', String(HUMAN)), { size: 10.5, fill: C.fg, weight: 500 }) + text(c, X2 + BW + 10, y0 + 32, t.humanSub, { size: 9, fill: C.fg55 }) + text(c, X2 + BW / 2, mY + mH + 16, t.missed.replace('{v}', String(missed)), { size: 10.5, fill: C.accent, weight: 500, anchor: 'middle' }) + text(c, X2 + BW / 2, mY + mH + 30, t.missedSub.replace('{o}', String(OVERFLOW)).replace('{a}', String(AFTER)), { size: 9, fill: C.fg70, anchor: 'middle' }) + '</g>';
  // what the voice agent does with them
  let src = mY; let dst = 262;
  OUT.forEach((n, i) => {
    const h = n * K; const col = i === 0 ? C.accent : i === 1 ? C.fg : C.fg55;
    s += `<g style="animation:${show(css, P, `f${i + 2}`, 19 + i * 2.5)}">` + band(c, [[X2 + BW, src], [X3, dst], [X3, dst + h], [X2 + BW, src + h]], i === 0 ? 'rgba(242,181,68,0.16)' : 'rgba(255,255,255,0.07)') + '</g>';
    s += `<g style="${growY(css, P, `c3${i}`, 20 + i * 2.5, 1.4)}">` + rect(c, X3, dst, BW, h, { stroke: i === 0 ? C.accent : C.fg55, fill: i === 0 ? SOFT : i === 1 ? C.fg35 : C.fill }) + '</g>';
    s += `<g style="animation:${show(css, P, `t3${i}`, 21.5 + i * 2.5)}">` + text(c, X3 + BW + 10, dst + Math.max(h / 2, 6) + 4, t.out[i].replace('{v}', String(n)), { size: 10.5, fill: col, weight: 500 }) + '</g>';
    src += h; dst += h + 22;
  });
  s += `<g style="animation:${show(css, P, 'ag', 18)}">` + text(c, (X2 + BW + X3) / 2, 250, t.agent, { size: 9.5, fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one turn: [duration in ms] of the four hidden stages, then the answer
const STAGES = [400, 200, 700, 200];
const TX = (ms) => 260 + (ms + 500) * 0.32;

export function tour(t, rtl) {
  const c = ctx(rtl); const P = 'vx'; const css = []; const H = 686;
  const silence = STAGES.reduce((a, b) => a + b, 0);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[TX(-500), 404], [TX(2000), 404]], C.line2);
  [0, 500, 1000, 1500, 2000].forEach((ms) => { frame += num(c, TX(ms), 420, ms === 0 ? '0' : `${String(ms / 1000).replace('.', t.dec)} s`, { size: 9, fill: C.fg55 }); });
  [[220, 0], [288, 1], [358, 2]].forEach(([y, i]) => { frame += text(c, 96, y + 4, t.lanes[i], { size: 10, fill: C.fg, weight: 500 }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // the caller speaks, then stops at 0
  s += `<g style="animation:${show(css, P, 'ca', 5)}">` + rect(c, TX(-500), 208, TX(0) - TX(-500), 24, { stroke: C.fg55, fill: C.fg35 }) + text(c, TX(-250), 224, t.caller, { size: 9, fill: C.fg, anchor: 'middle' }) + '</g>';
  // the four stages nobody hears
  let at = 0; let anim = 8;
  STAGES.forEach((ms, i) => {
    const x = TX(at); const w = ms * 0.32; const hot = i === 2;
    s += `<g style="${growX(css, P, `s${i}`, anim, ms / 200, rtl)}">` + rect(c, x, 276, w, 24, { stroke: hot ? C.accent : C.fg55, fill: hot ? SOFT : C.fill }) + '</g>';
    s += `<g style="animation:${show(css, P, `n${i}`, anim + ms / 200)}">` + num(c, x + w / 2, 292, String(ms), { size: 10, bold: true, fill: hot ? C.accent : C.fg }) + text(c, x + w / 2, i % 2 ? 316 : 268, t.stages[i], { size: 9, fill: hot ? C.accent : C.fg70, anchor: 'middle' }) + '</g>';
    at += ms; anim += ms / 200 + 0.6;
  });
  // the answer starts
  s += `<g style="${growX(css, P, 'an', anim, 2, rtl)}">` + rect(c, TX(silence), 346, TX(2000) - TX(silence), 24, { stroke: C.accent, fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'at', anim + 2)}">` + text(c, TX(silence + 250), 362, t.answer, { size: 9, fill: DARK, weight: 500, anchor: 'middle' }) + '</g>';
  // the silence, and the two markers of the example
  s += `<g style="animation:${show(css, P, 'si', anim + 3)}">` + poly(c, [[TX(0), 388], [TX(silence), 388]], C.fg, 1.5) + poly(c, [[TX(0), 383], [TX(0), 393]], C.fg, 1.5) + poly(c, [[TX(silence), 383], [TX(silence), 393]], C.fg, 1.5) + text(c, TX(silence / 2), 382, t.silence, { size: 10, fill: C.fg, weight: 500, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'mk', anim + 5)}">` + poly(c, [[TX(1000), 196], [TX(1000), 404]], C.fg55, 1, '3 4') + poly(c, [[TX(2000), 196], [TX(2000), 404]], C.accent, 1, '3 4') + text(c, TX(1000) - 6, 200, t.marks[0], { size: 9, fill: C.fg70, anchor: 'end' }) + text(c, TX(2000) - 6, 200, t.marks[1], { size: 9, fill: C.accent, anchor: 'end' }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    flux: {
      title: 'Une semaine d’appels : qui répond, et à qui',
      alt: 'Les 1 400 appels reçus en une semaine sur le numéro d’une entreprise. 870 sont pris par l’accueil, soit 62 %. 530 restent sans réponse : 220 aux heures de pointe, 310 après la fermeture. Confiés à un agent vocal, ces 530 appels deviennent 307 appels résolus par l’agent, 159 transmis à une personne avec un résumé, et 64 abandonnés.',
      header: 'Exemple construit · un numéro d’entreprise, une semaine, 1 400 appels',
      chartTitle: 'Où vont les appels d’une semaine, et ce que l’agent vocal fait de ceux que personne ne prenait', sep: ' ',
      total: '{v} appels', totalSub: 'en une semaine',
      human: '{v} pris par l’accueil', humanSub: '62 % des appels',
      missed: '{v} sans réponse', missedSub: '{o} aux heures de pointe, {a} après la fermeture',
      agent: 'pris par l’agent vocal',
      out: ['{v} résolus par l’agent', '{v} transmis à une personne', '{v} abandonnés'],
      band: 'L’agent vocal ne remplace pas l’accueil : il prend les appels que personne ne prenait, et rend les autres à une personne avec un résumé.',
      tiles: [
        { big: '1 400 appels', l1: 'une semaine, un seul numéro', l2: '870 pris par l’accueil, soit 62 %' },
        { big: '530 sans réponse', l1: '220 aux heures de pointe, 310 après la fermeture', l2: '38 % des appels de la semaine', hot: true },
        { big: '307 résolus', l1: 'par l’agent vocal, sans intervention', l2: '159 transmis avec un résumé, 64 abandonnés' },
      ],
      line1: 'On commence par ce qui se perd : le débordement aux heures de pointe et les appels après la fermeture.',
      line2: 'Chaque appel transmis arrive avec ce qui a déjà été dit ; chaque appel abandonné est rappelé le lendemain.',
      note: 'Exemple construit · appels, répartition et taux fictifs ; à mesurer sur votre propre journal d’appels.',
    },
    tour: {
      title: 'Un tour de parole : une seconde et demie de silence',
      alt: 'Un tour de parole au téléphone, sur un axe en millisecondes. Après la fin de la question de l’appelant, quatre étapes que personne n’entend : 400 millisecondes pour détecter la fin de parole, 200 de transcription, 700 pour le modèle et la consultation de l’agenda, 200 avant le premier son de la synthèse. Total : 1,5 seconde de silence avant la réponse. Deux repères de l’exemple : sous 1 seconde l’échange reste fluide, au-delà de 2 secondes l’appelant dit « allô ? ».',
      header: 'Exemple construit · un tour de parole, de la fin de la question au début de la réponse',
      chartTitle: 'Ce qui se passe entre la question et la réponse, en millisecondes', dec: ',',
      lanes: ['L’appelant', 'En coulisses', 'L’agent'],
      caller: 'question', answer: 'réponse',
      stages: ['fin de parole détectée', 'transcription', 'modèle et agenda', 'synthèse'],
      silence: '1,5 s de silence',
      marks: ['sous 1 s : fluide', 'au-delà de 2 s : « allô ? »'],
      band: 'Au téléphone, une seconde de silence s’entend. Le temps de réponse se construit étape par étape, et se mesure sur chaque appel.',
      tiles: [
        { big: '1,5 s', l1: 'entre la fin de la question et le début de la réponse', l2: '400 + 200 + 700 + 200 millisecondes' },
        { big: '700 ms', l1: 'le modèle et la consultation de l’agenda', l2: 'le délai à réduire en premier', hot: true },
        { big: '400 ms', l1: 'pour être sûr que la personne a fini de parler', l2: 'trop court, l’agent coupe la parole' },
      ],
      line1: 'Détection de fin de parole, transcription, modèle, synthèse : quatre délais qui s’additionnent avant le premier mot.',
      line2: 'L’agent doit aussi se taire dès que la personne reprend la parole : c’est l’interruption, et elle se teste.',
      note: 'Exemple construit · délais fictifs ; les repères d’une et de deux secondes sont ceux de l’exemple.',
    },
  },
  en: {
    flux: {
      title: 'A week of calls: who answers, and whom',
      alt: 'The 1,400 calls received in one week on a company’s number. 870 are taken by the reception, that is 62%. 530 get no answer: 220 at peak hours, 310 after closing. Given to a voice agent, those 530 calls become 307 calls resolved by the agent, 159 handed to a person with a summary, and 64 abandoned.',
      header: 'Constructed example · one company number, one week, 1,400 calls',
      chartTitle: 'Where a week’s calls go, and what the voice agent does with those nobody was taking', sep: ',',
      total: '{v} calls', totalSub: 'in one week',
      human: '{v} taken by the reception', humanSub: '62% of calls',
      missed: '{v} unanswered', missedSub: '{o} at peak hours, {a} after closing',
      agent: 'taken by the voice agent',
      out: ['{v} resolved by the agent', '{v} handed to a person', '{v} abandoned'],
      band: 'The voice agent does not replace the reception: it takes the calls nobody was taking, and hands the others to a person with a summary.',
      tiles: [
        { big: '1,400 calls', l1: 'one week, a single number', l2: '870 taken by the reception, that is 62%' },
        { big: '530 unanswered', l1: '220 at peak hours, 310 after closing', l2: '38% of the week’s calls', hot: true },
        { big: '307 resolved', l1: 'by the voice agent, with nobody involved', l2: '159 handed over with a summary, 64 abandoned' },
      ],
      line1: 'You start with what is being lost: overflow at peak hours and calls after closing.',
      line2: 'Each call handed over arrives with what has already been said; each abandoned call is rung back the next day.',
      note: 'Constructed example · fictitious calls, split and rates; to be measured on your own call log.',
    },
    tour: {
      title: 'One turn of the conversation: a second and a half of silence',
      alt: 'One turn of a phone conversation, on an axis in milliseconds. After the caller finishes the question, four stages nobody hears: 400 milliseconds to detect the end of speech, 200 of transcription, 700 for the model and a look-up in the diary, 200 before the first synthesised sound. Total: 1.5 seconds of silence before the answer. Two markers of the example: under 1 second the exchange stays fluid, beyond 2 seconds the caller says “hello?”.',
      header: 'Constructed example · one turn, from the end of the question to the start of the answer',
      chartTitle: 'What happens between the question and the answer, in milliseconds', dec: '.',
      lanes: ['The caller', 'Behind the scenes', 'The agent'],
      caller: 'question', answer: 'answer',
      stages: ['end of speech detected', 'transcription', 'model and diary', 'synthesis'],
      silence: '1.5 s of silence',
      marks: ['under 1 s: fluid', 'beyond 2 s: “hello?”'],
      band: 'On the phone, a second of silence is heard. Response time is built stage by stage, and measured on every call.',
      tiles: [
        { big: '1.5 s', l1: 'between the end of the question and the start of the answer', l2: '400 + 200 + 700 + 200 milliseconds' },
        { big: '700 ms', l1: 'the model and the look-up in the diary', l2: 'the delay to cut first', hot: true },
        { big: '400 ms', l1: 'to be sure the person has finished speaking', l2: 'too short, and the agent cuts in' },
      ],
      line1: 'End-of-speech detection, transcription, model, synthesis: four delays that add up before the first word.',
      line2: 'The agent must also stop as soon as the person speaks again: that is barge-in, and it gets tested.',
      note: 'Constructed example · fictitious delays; the one-second and two-second markers are those of the example.',
    },
  },
  ar: {
    flux: {
      title: 'أسبوع من المكالمات: من يرد، وعلى من',
      alt: 'المكالمات الـ1400 التي وردت في أسبوع على رقم مؤسسة. 870 يرد عليها الاستقبال، أي 62 بالمئة. و530 تبقى دون رد: 220 في ساعات الذروة، و310 بعد الإغلاق. وحين تُسنَد إلى عون صوتي، تصير هذه الـ530 مكالمة: 307 يحلّها العون، 159 تُحوَّل إلى شخص مع ملخّص، و64 يتخلى عنها أصحابها.',
      header: 'مثال مركَّب · رقم مؤسسة، أسبوع واحد، و1400 مكالمة',
      chartTitle: 'أين تذهب مكالمات أسبوع، وما يفعله العون الصوتي بالتي لم يكن يرد عليها أحد', sep: ' ',
      total: '{v} مكالمة', totalSub: 'في أسبوع واحد',
      human: '{v} يرد عليها الاستقبال', humanSub: '⁦62 %⁩ من المكالمات',
      missed: '{v} دون رد', missedSub: '{o} في ساعات الذروة، و{a} بعد الإغلاق',
      agent: 'يأخذها العون الصوتي',
      out: ['{v} يحلّها العون', '{v} تُحوَّل إلى شخص', '{v} متخلّى عنها'],
      band: 'العون الصوتي لا يعوّض الاستقبال: يأخذ المكالمات التي لم يكن يأخذها أحد، ويعيد الباقي إلى شخص مع ملخّص.',
      tiles: [
        { big: '⁦1 400⁩ مكالمة', l1: 'أسبوع واحد، ورقم واحد', l2: '870 يرد عليها الاستقبال، أي ⁦62 %⁩' },
        { big: '530 دون رد', l1: '220 في ساعات الذروة، و310 بعد الإغلاق', l2: '⁦38 %⁩ من مكالمات الأسبوع', hot: true },
        { big: '307 محلولة', l1: 'بالعون الصوتي، دون تدخل', l2: '159 محوَّلة مع ملخّص، و64 متخلّى عنها' },
      ],
      line1: 'يُبدأ بما يضيع: فائض ساعات الذروة والمكالمات بعد الإغلاق.',
      line2: 'كل مكالمة محوَّلة تصل مع ما قيل من قبل؛ وكل مكالمة متخلّى عنها يُعاد الاتصال بصاحبها في الغد.',
      note: 'مثال مركَّب · مكالمات وتوزيع ونسب خيالية؛ وتُقاس على سجل مكالماتكم.',
    },
    tour: {
      title: 'دور كلام واحد: ثانية ونصف من الصمت',
      alt: 'دور كلام في مكالمة هاتفية، على محور بالميلي ثانية. بعد نهاية سؤال المتصل، أربع مراحل لا يسمعها أحد: 400 ميلي ثانية لكشف نهاية الكلام، 200 للنسخ، 700 للنموذج والاطلاع على المفكرة، و200 قبل أول صوت مركَّب. المجموع: ثانية ونصف من الصمت قبل الجواب. ومَعلَمان من المثال: تحت ثانية واحدة يبقى التبادل سلساً، وبعد ثانيتين يقول المتصل «ألو؟».',
      header: 'مثال مركَّب · دور كلام واحد، من نهاية السؤال إلى بداية الجواب',
      chartTitle: 'ما يجري بين السؤال والجواب، بالميلي ثانية', dec: ',',
      lanes: ['المتصل', 'في الكواليس', 'العون'],
      caller: 'السؤال', answer: 'الجواب',
      stages: ['كشف نهاية الكلام', 'النسخ', 'النموذج والمفكرة', 'تركيب الصوت'],
      silence: '⁦1,5 s⁩ من الصمت',
      marks: ['تحت ⁦1 s⁩: سلس', 'بعد ⁦2 s⁩: «ألو؟»'],
      band: 'في الهاتف، ثانية من الصمت تُسمَع. وزمن الرد يُبنى مرحلة بمرحلة، ويُقاس على كل مكالمة.',
      tiles: [
        { big: '⁦1,5 s⁩', l1: 'بين نهاية السؤال وبداية الجواب', l2: '⁦400 + 200 + 700 + 200⁩ ميلي ثانية' },
        { big: '⁦700 ms⁩', l1: 'النموذج والاطلاع على المفكرة', l2: 'المهلة التي تُقلَّص أولاً', hot: true },
        { big: '⁦400 ms⁩', l1: 'للتأكد أن الشخص أنهى كلامه', l2: 'أقصر من ذلك، يقاطع العون المتصل' },
      ],
      line1: 'كشف نهاية الكلام، النسخ، النموذج، وتركيب الصوت: أربع مهل تتراكم قبل أول كلمة.',
      line2: 'ويجب أن يسكت العون فور عودة الشخص إلى الكلام: هي المقاطعة، وتُجرَّب.',
      note: 'مثال مركَّب · مهل خيالية؛ ومَعلَما الثانية والثانيتين من المثال.',
    },
  },
};
