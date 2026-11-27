// Bespoke animated figures for the study "Outsourcing Map 2027".
//  cartes():  four language maps (English, Arabic, French, Spanish) as panels of
//             growing bars: share of place mentions per destination country in
//             the suggestions Google proposes, with Algeria's count on a last
//             accented line of each panel; three tiles.
//  memes():   "the same map in every market": one row per market (five English,
//             four Arabic) with the share of the list it has in common with the
//             control market, the leader's share as a growing bar, the market's
//             own share as a small accented bar and how often the first line is
//             local; three tiles.
// Every number comes from research/outsourcing-map/2026-11-16/summary.json.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}

export function cartes(t, rtl) {
  const c = ctx(rtl); const P = 'om'; const css = []; const H = 720;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const pw = 500, ph = 232; const barW = 250; const SCALE = 80;
  t.maps.forEach((m, pi) => {
    const px = 80 + (pi % 2) * 540; const py = 96 + Math.floor(pi / 2) * (ph + 14); const at = 2 + pi * 2.2;
    s += `<g style="animation:${show(css, P, `p${pi}`, at)}">` + rect(c, px, py, pw, ph, { stroke: C.line2, fill: C.fill }) + text(c, px + 14, py + 22, m.title, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, px + 14, py + 37, m.sub, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
    m.rows.forEach((r, i) => {
      const y = py + 62 + i * 22; const a2 = at + 0.5 + i * 0.35; const hot = i === 0;
      s += `<g style="animation:${show(css, P, `r${pi}${i}`, a2)}">` + text(c, px + 14, y + 4, r.l, { size: 9.5, fill: hot ? C.accent : C.fg70 }) + text(c, px + 180 + barW + 10, y + 4, r.t, { size: 9.5, font: 'mono', fill: hot ? C.accent : C.fg }) + '</g>';
      s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `b${pi}${i}`, a2 + 0.2, 1.1)}">` + rect(c, px + 180, y - 5, Math.max(Math.round((r.v / SCALE) * barW), 2), 10, { stroke: 'none', fill: hot ? C.accent : C.fg55 }) + '</g>';
    });
    const dy = py + ph - 20;
    s += `<g style="animation:${show(css, P, `d${pi}`, at + 3)}">` + line(c, px + 14, dy - 14, px + pw - 14, dy - 14, { stroke: C.line }) + text(c, px + 14, dy + 2, m.dz.l, { size: 9.5, fill: C.accent, weight: 500 }) + text(c, px + pw - 14, dy + 2, m.dz.t, { size: 9.5, font: 'mono', fill: C.accent, anchor: 'end' }) + '</g>';
  });
  const ky = 96 + 2 * (ph + 14) + 4;
  s += tiles(c, css, P, ky, t.tiles, 12);
  s += text(c, 80, ky + 84, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 104, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 126, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function memes(t, rtl) {
  const c = ctx(rtl); const P = 'os'; const css = []; const H = 650;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const cols = [80, 300, 430, 720, 960]; const hy = 104; const barL = 200, barO = 150;
  s += t.cols.map((h, i) => text(c, cols[i], hy, h, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + line(c, 80, hy + 8, 1120, hy + 8, { stroke: C.line2 });
  let y = hy + 12; let idx = 0;
  t.groups.forEach((g, gi) => {
    y += 22;
    s += `<g style="animation:${show(css, P, `g${gi}`, 2 + gi * 6)}">` + text(c, 80, y, g.label, { size: 9, font: 'mono', fill: C.accent, letter: 1.2, upper: true }) + '</g>';
    g.rows.forEach((r) => {
      y += 34; const at = 2.6 + idx * 1.1; const yy = y; const id = idx; idx++;
      s += `<g style="animation:${show(css, P, `r${id}`, at)}">` + text(c, cols[0], yy - 2, r.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, cols[0], yy + 11, r.sub, { size: 8, font: 'mono', fill: C.fg55 })
        + text(c, cols[1], yy + 3, r.same, { size: 10.5, font: 'mono', fill: r.control ? C.fg55 : C.fg, weight: 500 })
        + text(c, cols[2] + barL + 10, yy + 3, r.leadT, { size: 9.5, font: 'mono', fill: C.fg })
        + text(c, cols[3] + barO + 10, yy + 3, r.ownT, { size: 9.5, font: 'mono', fill: C.accent })
        + text(c, cols[4], yy + 3, r.first, { size: 10, font: 'mono', fill: C.fg70 })
        + line(c, 80, yy + 18, 1120, yy + 18, { stroke: C.line }) + '</g>';
      s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `l${id}`, at + 0.3, 1)}">` + rect(c, cols[2], yy - 5, Math.max(Math.round((r.lead / 60) * barL), 2), 9, { stroke: 'none', fill: C.fg55 }) + '</g>';
      s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `o${id}`, at + 0.6, 1)}">` + rect(c, cols[3], yy - 5, Math.max(Math.round((r.own / 60) * barO), 2), 9, { stroke: 'none', fill: C.accent }) + '</g>';
    });
    y += 16;
  });
  const ky = y + 22;
  s += tiles(c, css, P, ky, t.tiles, 15);
  s += text(c, 80, ky + 84, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 104, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 126, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const NB = ' ';
export const STRINGS = {
  fr: {
    cartes: {
      title: 'Quatre langues, quatre cartes : où les suggestions de Google situent un partenaire logiciel',
      alt: 'Quatre panneaux de barres. Carte anglaise, 762 mentions de lieu : Inde 37 pour cent, États-Unis 17, Émirats arabes unis 5, Pakistan 5, Royaume-Uni 4, Qatar 4 ; Algérie 0 sur 762. Carte arabe, 82 mentions : Égypte 28 pour cent, Arabie saoudite 27, Syrie 11, Émirats 10, Jordanie 5, Irak 5 ; Algérie 0 sur 82. Carte française, 96 mentions : France 56 pour cent, Maroc 15, Tunisie 9, Inde 7, Canada 2, États-Unis 2 ; Algérie 1 sur 96. Carte espagnole, 28 mentions : Amérique latine 75 pour cent, Espagne 25 ; Algérie 0 sur 28. Trois tuiles : l’Inde tient 37 pour cent de la carte anglaise ; France 56, Maroc 15, Tunisie 9 pour cent de la carte française ; l’Algérie est citée 0, 0, 1 et 0 fois. Suggestions Google relevées le 16 novembre 2026 ; une suggestion est une phrase proposée par le moteur, pas un volume de recherche.',
      maps: [
        { title: 'Carte anglaise', sub: `762 mentions de lieu · « software development company in … »`, rows: [{ l: 'Inde', v: 37, t: '37 %' }, { l: 'États-Unis', v: 17, t: '17 %' }, { l: 'Émirats arabes unis', v: 5, t: '5 %' }, { l: 'Pakistan', v: 5, t: '5 %' }, { l: 'Royaume-Uni', v: 4, t: '4 %' }, { l: 'Qatar', v: 4, t: '4 %' }], dz: { l: 'Algérie', t: '0 sur 762' } },
        { title: 'Carte arabe', sub: '82 mentions de lieu · « شركة برمجة في … »', rows: [{ l: 'Égypte', v: 28, t: '28 %' }, { l: 'Arabie saoudite', v: 27, t: '27 %' }, { l: 'Syrie', v: 11, t: '11 %' }, { l: 'Émirats arabes unis', v: 10, t: '10 %' }, { l: 'Jordanie', v: 5, t: '5 %' }, { l: 'Irak', v: 5, t: '5 %' }], dz: { l: 'Algérie', t: '0 sur 82' } },
        { title: 'Carte française', sub: '96 mentions de lieu · « agence développement … »', rows: [{ l: 'France', v: 56, t: '56 %' }, { l: 'Maroc', v: 15, t: '15 %' }, { l: 'Tunisie', v: 9, t: '9 %' }, { l: 'Inde', v: 7, t: '7 %' }, { l: 'Canada', v: 2, t: '2 %' }, { l: 'États-Unis', v: 2, t: '2 %' }], dz: { l: 'Algérie', t: '1 sur 96' } },
        { title: 'Carte espagnole', sub: '28 mentions de lieu · « empresa desarrollo software … »', rows: [{ l: 'Amérique latine', v: 75, t: '75 %' }, { l: 'Espagne', v: 25, t: '25 %' }], dz: { l: 'Algérie', t: '0 sur 28' } },
      ],
      tiles: [
        { big: '37 %', l1: 'de la carte anglaise est en Inde', l2: '284 mentions sur 762 · États-Unis 17 %', hot: true },
        { big: '56 % · 15 % · 9 %', l1: 'France, Maroc, Tunisie', l2: 'les trois premiers de la carte française' },
        { big: '0 · 0 · 1 · 0', l1: 'mentions de l’Algérie', l2: 'anglais · arabe · français · espagnol' },
      ],
      rule: 'Le moteur ne tend pas une carte par pays : il en tend une par langue.',
      rule2: 'Celui qui cherche en anglais reçoit l’Inde ; en arabe, l’Égypte et l’Arabie saoudite ; en français, la France puis le Maghreb sans l’Algérie.',
      note: `Suggestions Google · 16 nov. 2026 · part des mentions de lieu · une suggestion n’est pas un volume de recherche`,
    },
    memes: {
      title: 'La même carte dans chaque marché : cinq pays en anglais, quatre en arabe',
      alt: 'Un tableau. En anglais : Arabie saoudite, liste Google identique à 100 pour cent à celle des États-Unis, Inde 37 pour cent, son propre pays 2 pour cent, première ligne locale sur 1 amorce sur 6 ; Émirats arabes unis, 100 pour cent, Inde 37, propre pays 5, 4 sur 6 ; Qatar, 100 pour cent, Inde 37, propre pays 4, 3 sur 6 ; Royaume-Uni, 100 pour cent, Inde 37, propre pays 4, 0 sur 6 ; États-Unis, marché témoin, Inde 37, propre pays 17, 3 sur 6. En arabe : Arabie saoudite, liste identique à 100 pour cent à celle de l’Égypte, Égypte 28 pour cent, propre pays 27, première ligne locale 3 sur 4 ; Émirats, 100 pour cent, Égypte 28, propre pays 10, 0 sur 4 ; Qatar, 100 pour cent, Égypte 28, propre pays 2, 0 sur 4 ; Égypte, marché témoin, 28, 28, 2 sur 4. Trois tuiles : 100 pour cent de liste commune sur 1 309 suggestions anglaises ; écart maximal de 0,2 point sur la part d’un pays ; 2, 5 et 4 pour cent pour son propre pays vu de Riyad, Dubaï et Doha en anglais.',
      cols: ['Marché', 'Liste commune', 'Part du premier pays', 'Part de son propre pays', '1re ligne locale'],
      groups: [
        { label: 'En anglais · premier pays : Inde · témoin : États-Unis', rows: [
          { name: 'Arabie saoudite', sub: 'Riyad', same: '100 %', lead: 37, leadT: '37 %', own: 2, ownT: '2 %', first: '1 sur 6' },
          { name: 'Émirats arabes unis', sub: 'Dubaï', same: '100 %', lead: 37, leadT: '37 %', own: 5, ownT: '5 %', first: '4 sur 6' },
          { name: 'Qatar', sub: 'Doha', same: '100 %', lead: 37, leadT: '37 %', own: 4, ownT: '4 %', first: '3 sur 6' },
          { name: 'Royaume-Uni', sub: 'témoin', same: '100 %', lead: 37, leadT: '37 %', own: 4, ownT: '4 %', first: '0 sur 6' },
          { name: 'États-Unis', sub: 'témoin de référence', same: 'référence', control: true, lead: 37, leadT: '37 %', own: 17, ownT: '17 %', first: '3 sur 6' },
        ] },
        { label: 'En arabe · premier pays : Égypte · témoin : Égypte', rows: [
          { name: 'Arabie saoudite', sub: 'Riyad', same: '100 %', lead: 28, leadT: '28 %', own: 27, ownT: '27 %', first: '3 sur 4' },
          { name: 'Émirats arabes unis', sub: 'Dubaï', same: '100 %', lead: 28, leadT: '28 %', own: 10, ownT: '10 %', first: '0 sur 4' },
          { name: 'Qatar', sub: 'Doha', same: '100 %', lead: 28, leadT: '28 %', own: 2, ownT: '2 %', first: '0 sur 4' },
          { name: 'Égypte', sub: 'témoin de référence', same: 'référence', control: true, lead: 28, leadT: '28 %', own: 28, ownT: '28 %', first: '2 sur 4' },
        ] },
      ],
      tiles: [
        { big: '100 %', l1: 'de liste commune avec le témoin', l2: `1${NB}309 suggestions anglaises · 136 arabes`, hot: true },
        { big: '0,2 point', l1: 'écart maximal sur la part d’un pays', l2: 'entre un marché et sa référence, Google' },
        { big: '2 % · 5 % · 4 %', l1: 'part de son propre pays, en anglais', l2: 'vu de Riyad, de Dubaï et de Doha' },
      ],
      rule: 'À Riyad, à Dubaï, à Doha, à Londres et à New York, Google propose la même liste, lettre par lettre ;',
      rule2: 'seule la première ligne change, et pas partout.',
      note: 'Liste commune : indice de Jaccard des suggestions étendues par lettre · Google · 16 nov. 2026',
    },
  },
  en: {
    cartes: {
      title: 'Four languages, four maps: where Google’s suggestions place a software partner',
      alt: 'Four panels of bars. English map, 762 place mentions: India 37 percent, United States 17, United Arab Emirates 5, Pakistan 5, United Kingdom 4, Qatar 4; Algeria 0 of 762. Arabic map, 82 mentions: Egypt 28 percent, Saudi Arabia 27, Syria 11, United Arab Emirates 10, Jordan 5, Iraq 5; Algeria 0 of 82. French map, 96 mentions: France 56 percent, Morocco 15, Tunisia 9, India 7, Canada 2, United States 2; Algeria 1 of 96. Spanish map, 28 mentions: Latin America 75 percent, Spain 25; Algeria 0 of 28. Three tiles: India holds 37 percent of the English map; France 56, Morocco 15, Tunisia 9 percent of the French map; Algeria is named 0, 0, 1 and 0 times. Google suggestions collected on 16 November 2026; a suggestion is a phrase the engine proposes, not a search volume.',
      maps: [
        { title: 'English map', sub: '762 place mentions · “software development company in …”', rows: [{ l: 'India', v: 37, t: '37 %' }, { l: 'United States', v: 17, t: '17 %' }, { l: 'United Arab Emirates', v: 5, t: '5 %' }, { l: 'Pakistan', v: 5, t: '5 %' }, { l: 'United Kingdom', v: 4, t: '4 %' }, { l: 'Qatar', v: 4, t: '4 %' }], dz: { l: 'Algeria', t: '0 of 762' } },
        { title: 'Arabic map', sub: '82 place mentions · “شركة برمجة في …”', rows: [{ l: 'Egypt', v: 28, t: '28 %' }, { l: 'Saudi Arabia', v: 27, t: '27 %' }, { l: 'Syria', v: 11, t: '11 %' }, { l: 'United Arab Emirates', v: 10, t: '10 %' }, { l: 'Jordan', v: 5, t: '5 %' }, { l: 'Iraq', v: 5, t: '5 %' }], dz: { l: 'Algeria', t: '0 of 82' } },
        { title: 'French map', sub: '96 place mentions · “agence développement …”', rows: [{ l: 'France', v: 56, t: '56 %' }, { l: 'Morocco', v: 15, t: '15 %' }, { l: 'Tunisia', v: 9, t: '9 %' }, { l: 'India', v: 7, t: '7 %' }, { l: 'Canada', v: 2, t: '2 %' }, { l: 'United States', v: 2, t: '2 %' }], dz: { l: 'Algeria', t: '1 of 96' } },
        { title: 'Spanish map', sub: '28 place mentions · “empresa desarrollo software …”', rows: [{ l: 'Latin America', v: 75, t: '75 %' }, { l: 'Spain', v: 25, t: '25 %' }], dz: { l: 'Algeria', t: '0 of 28' } },
      ],
      tiles: [
        { big: '37 %', l1: 'of the English map is in India', l2: '284 mentions of 762 · United States 17 %', hot: true },
        { big: '56 % · 15 % · 9 %', l1: 'France, Morocco, Tunisia', l2: 'the first three of the French map' },
        { big: '0 · 0 · 1 · 0', l1: 'mentions of Algeria', l2: 'English · Arabic · French · Spanish' },
      ],
      rule: 'The engine does not hand out one map per country: it hands out one per language.',
      rule2: 'Search in English and you get India; in Arabic, Egypt and Saudi Arabia; in French, France then the Maghreb without Algeria.',
      note: 'Google suggestions · 16 Nov 2026 · share of place mentions · a suggestion is not a search volume',
    },
    memes: {
      title: 'The same map in every market: five countries in English, four in Arabic',
      alt: 'A table. In English: Saudi Arabia, Google list 100 percent identical to the United States list, India 37 percent, its own country 2 percent, first line local on 1 seed of 6; United Arab Emirates, 100 percent, India 37, own country 5, 4 of 6; Qatar, 100 percent, India 37, own country 4, 3 of 6; United Kingdom, 100 percent, India 37, own country 4, 0 of 6; United States, control market, India 37, own country 17, 3 of 6. In Arabic: Saudi Arabia, list 100 percent identical to Egypt’s, Egypt 28 percent, own country 27, first line local 3 of 4; UAE, 100 percent, Egypt 28, own country 10, 0 of 4; Qatar, 100 percent, Egypt 28, own country 2, 0 of 4; Egypt, control market, 28, 28, 2 of 4. Three tiles: 100 percent shared list over 1,309 English suggestions; largest gap of 0.2 point on any country’s share; 2, 5 and 4 percent for one’s own country seen from Riyadh, Dubai and Doha in English.',
      cols: ['Market', 'Shared list', 'Leader’s share', 'Own country’s share', 'Local first line'],
      groups: [
        { label: 'In English · leader: India · control: United States', rows: [
          { name: 'Saudi Arabia', sub: 'Riyadh', same: '100 %', lead: 37, leadT: '37 %', own: 2, ownT: '2 %', first: '1 of 6' },
          { name: 'United Arab Emirates', sub: 'Dubai', same: '100 %', lead: 37, leadT: '37 %', own: 5, ownT: '5 %', first: '4 of 6' },
          { name: 'Qatar', sub: 'Doha', same: '100 %', lead: 37, leadT: '37 %', own: 4, ownT: '4 %', first: '3 of 6' },
          { name: 'United Kingdom', sub: 'control', same: '100 %', lead: 37, leadT: '37 %', own: 4, ownT: '4 %', first: '0 of 6' },
          { name: 'United States', sub: 'reference control', same: 'reference', control: true, lead: 37, leadT: '37 %', own: 17, ownT: '17 %', first: '3 of 6' },
        ] },
        { label: 'In Arabic · leader: Egypt · control: Egypt', rows: [
          { name: 'Saudi Arabia', sub: 'Riyadh', same: '100 %', lead: 28, leadT: '28 %', own: 27, ownT: '27 %', first: '3 of 4' },
          { name: 'United Arab Emirates', sub: 'Dubai', same: '100 %', lead: 28, leadT: '28 %', own: 10, ownT: '10 %', first: '0 of 4' },
          { name: 'Qatar', sub: 'Doha', same: '100 %', lead: 28, leadT: '28 %', own: 2, ownT: '2 %', first: '0 of 4' },
          { name: 'Egypt', sub: 'reference control', same: 'reference', control: true, lead: 28, leadT: '28 %', own: 28, ownT: '28 %', first: '2 of 4' },
        ] },
      ],
      tiles: [
        { big: '100 %', l1: 'of the list shared with the control', l2: '1,309 English suggestions · 136 Arabic', hot: true },
        { big: '0.2 point', l1: 'largest gap on any country’s share', l2: 'between a market and its reference, Google' },
        { big: '2 % · 5 % · 4 %', l1: 'share of one’s own country, in English', l2: 'seen from Riyadh, Dubai and Doha' },
      ],
      rule: 'In Riyadh, Dubai, Doha, London and New York, Google proposes the same list, letter by letter;',
      rule2: 'only the first line changes, and not everywhere.',
      note: 'Shared list: Jaccard index of letter-expanded suggestions · Google · 16 Nov 2026',
    },
  },
  ar: {
    cartes: {
      title: 'أربع لغات، أربع خرائط: أين تضع اقتراحات غوغل شريك البرمجيات',
      alt: 'أربع لوحات من الأشرطة. الخريطة الإنجليزية، 762 ذكراً لمكان: الهند 37 بالمئة، الولايات المتحدة 17، الإمارات 5، باكستان 5، المملكة المتحدة 4، قطر 4؛ الجزائر 0 من 762. الخريطة العربية، 82 ذكراً: مصر 28 بالمئة، السعودية 27، سوريا 11، الإمارات 10، الأردن 5، العراق 5؛ الجزائر 0 من 82. الخريطة الفرنسية، 96 ذكراً: فرنسا 56 بالمئة، المغرب 15، تونس 9، الهند 7، كندا 2، الولايات المتحدة 2؛ الجزائر 1 من 96. الخريطة الإسبانية، 28 ذكراً: أمريكا اللاتينية 75 بالمئة، إسبانيا 25؛ الجزائر 0 من 28. ثلاث بطاقات: الهند تمسك 37 بالمئة من الخريطة الإنجليزية؛ فرنسا 56 والمغرب 15 وتونس 9 بالمئة من الخريطة الفرنسية؛ الجزائر مذكورة 0 و0 و1 و0 مرة. اقتراحات غوغل جُمعت في 16 نوفمبر 2026؛ الاقتراح عبارة يقترحها المحرك، لا حجم بحث.',
      maps: [
        { title: 'الخريطة الإنجليزية', sub: `${I('762')} ذكراً لمكان · ${I('“software development company in …”')}`, rows: [{ l: 'الهند', v: 37, t: I('37 %') }, { l: 'الولايات المتحدة', v: 17, t: I('17 %') }, { l: 'الإمارات', v: 5, t: I('5 %') }, { l: 'باكستان', v: 5, t: I('5 %') }, { l: 'المملكة المتحدة', v: 4, t: I('4 %') }, { l: 'قطر', v: 4, t: I('4 %') }], dz: { l: 'الجزائر', t: '0 من 762' } },
        { title: 'الخريطة العربية', sub: `${I('82')} ذكراً لمكان · «شركة برمجة في …»`, rows: [{ l: 'مصر', v: 28, t: I('28 %') }, { l: 'السعودية', v: 27, t: I('27 %') }, { l: 'سوريا', v: 11, t: I('11 %') }, { l: 'الإمارات', v: 10, t: I('10 %') }, { l: 'الأردن', v: 5, t: I('5 %') }, { l: 'العراق', v: 5, t: I('5 %') }], dz: { l: 'الجزائر', t: '0 من 82' } },
        { title: 'الخريطة الفرنسية', sub: `${I('96')} ذكراً لمكان · ${I('“agence développement …”')}`, rows: [{ l: 'فرنسا', v: 56, t: I('56 %') }, { l: 'المغرب', v: 15, t: I('15 %') }, { l: 'تونس', v: 9, t: I('9 %') }, { l: 'الهند', v: 7, t: I('7 %') }, { l: 'كندا', v: 2, t: I('2 %') }, { l: 'الولايات المتحدة', v: 2, t: I('2 %') }], dz: { l: 'الجزائر', t: '1 من 96' } },
        { title: 'الخريطة الإسبانية', sub: `${I('28')} ذكراً لمكان · ${I('“empresa desarrollo software …”')}`, rows: [{ l: 'أمريكا اللاتينية', v: 75, t: I('75 %') }, { l: 'إسبانيا', v: 25, t: I('25 %') }], dz: { l: 'الجزائر', t: '0 من 28' } },
      ],
      tiles: [
        { big: I('37 %'), l1: 'من الخريطة الإنجليزية في الهند', l2: `284 ذكراً من 762 · الولايات المتحدة ${I('17 %')}`, hot: true },
        { big: I('56 % · 15 % · 9 %'), l1: 'فرنسا، المغرب، تونس', l2: 'الثلاثة الأوائل في الخريطة الفرنسية' },
        { big: I('0 · 0 · 1 · 0'), l1: 'مرات ذكر الجزائر', l2: 'الإنجليزية · العربية · الفرنسية · الإسبانية' },
      ],
      rule: 'المحرك لا يقدّم خريطة لكل بلد: يقدّم خريطة لكل لغة.',
      rule2: 'من يبحث بالإنجليزية يتلقى الهند؛ وبالعربية مصر والسعودية؛ وبالفرنسية فرنسا ثم المغرب العربي دون الجزائر.',
      note: 'اقتراحات غوغل · 16 نوفمبر 2026 · حصة ذكر الأماكن · الاقتراح ليس حجم بحث',
    },
    memes: {
      title: 'الخريطة نفسها في كل سوق: خمسة بلدان بالإنجليزية، أربعة بالعربية',
      alt: 'جدول. بالإنجليزية: السعودية، قائمة غوغل مطابقة 100 بالمئة لقائمة الولايات المتحدة، الهند 37 بالمئة، بلدها 2 بالمئة، السطر الأول محلي في بذرة واحدة من 6؛ الإمارات، 100 بالمئة، الهند 37، بلدها 5، 4 من 6؛ قطر، 100 بالمئة، الهند 37، بلدها 4، 3 من 6؛ المملكة المتحدة، 100 بالمئة، الهند 37، بلدها 4، 0 من 6؛ الولايات المتحدة، سوق شاهد، الهند 37، بلدها 17، 3 من 6. بالعربية: السعودية، قائمة مطابقة 100 بالمئة لقائمة مصر، مصر 28 بالمئة، بلدها 27، السطر الأول محلي 3 من 4؛ الإمارات، 100 بالمئة، مصر 28، بلدها 10، 0 من 4؛ قطر، 100 بالمئة، مصر 28، بلدها 2، 0 من 4؛ مصر، سوق شاهد، 28، 28، 2 من 4. ثلاث بطاقات: 100 بالمئة قائمة مشتركة على 1 309 اقتراحات إنجليزية؛ أكبر فارق 0,2 نقطة في حصة أي بلد؛ 2 و5 و4 بالمئة لبلد المشتري نفسه من الرياض ودبي والدوحة بالإنجليزية.',
      cols: ['السوق', 'قائمة مشتركة', 'حصة البلد الأول', 'حصة بلده', 'السطر الأول محلي'],
      groups: [
        { label: 'بالإنجليزية · البلد الأول: الهند · الشاهد: الولايات المتحدة', rows: [
          { name: 'السعودية', sub: 'الرياض', same: I('100 %'), lead: 37, leadT: I('37 %'), own: 2, ownT: I('2 %'), first: '1 من 6' },
          { name: 'الإمارات', sub: 'دبي', same: I('100 %'), lead: 37, leadT: I('37 %'), own: 5, ownT: I('5 %'), first: '4 من 6' },
          { name: 'قطر', sub: 'الدوحة', same: I('100 %'), lead: 37, leadT: I('37 %'), own: 4, ownT: I('4 %'), first: '3 من 6' },
          { name: 'المملكة المتحدة', sub: 'شاهد', same: I('100 %'), lead: 37, leadT: I('37 %'), own: 4, ownT: I('4 %'), first: '0 من 6' },
          { name: 'الولايات المتحدة', sub: 'الشاهد المرجعي', same: 'مرجع', control: true, lead: 37, leadT: I('37 %'), own: 17, ownT: I('17 %'), first: '3 من 6' },
        ] },
        { label: 'بالعربية · البلد الأول: مصر · الشاهد: مصر', rows: [
          { name: 'السعودية', sub: 'الرياض', same: I('100 %'), lead: 28, leadT: I('28 %'), own: 27, ownT: I('27 %'), first: '3 من 4' },
          { name: 'الإمارات', sub: 'دبي', same: I('100 %'), lead: 28, leadT: I('28 %'), own: 10, ownT: I('10 %'), first: '0 من 4' },
          { name: 'قطر', sub: 'الدوحة', same: I('100 %'), lead: 28, leadT: I('28 %'), own: 2, ownT: I('2 %'), first: '0 من 4' },
          { name: 'مصر', sub: 'الشاهد المرجعي', same: 'مرجع', control: true, lead: 28, leadT: I('28 %'), own: 28, ownT: I('28 %'), first: '2 من 4' },
        ] },
      ],
      tiles: [
        { big: I('100 %'), l1: 'من القائمة مشتركة مع الشاهد', l2: `${I(`1${NB}309`)} اقتراحات إنجليزية · 136 عربية`, hot: true },
        { big: `${I('0,2')} نقطة`, l1: 'أكبر فارق في حصة أي بلد', l2: 'بين سوق ومرجعه، غوغل' },
        { big: I('2 % · 5 % · 4 %'), l1: 'حصة بلد المشتري نفسه، بالإنجليزية', l2: 'من الرياض ودبي والدوحة' },
      ],
      rule: 'في الرياض ودبي والدوحة ولندن ونيويورك، يقترح غوغل القائمة نفسها، حرفاً حرفاً؛',
      rule2: 'السطر الأول وحده يتغير، وليس في كل مكان.',
      note: 'القائمة المشتركة: مؤشر جاكار للاقتراحات الموسَّعة بالحروف · غوغل · 16 نوفمبر 2026',
    },
  },
};
