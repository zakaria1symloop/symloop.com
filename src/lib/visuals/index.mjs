// Data-driven SVG visuals for blog posts.
// Pure functions returning SVG strings so the same module serves the React pages
// (inline, crawlable text) and scripts/render-blog-visuals.mjs (JPG previews for
// og:image and the image sitemap). No JSX, no DOM, no dependencies.

export const W = 1200;

const C = {
  bg: '#000000',
  fg: '#FFFFFF',
  fg70: 'rgba(255,255,255,0.72)',
  fg55: 'rgba(255,255,255,0.55)',
  fg35: 'rgba(255,255,255,0.35)',
  line: 'rgba(255,255,255,0.12)',
  line2: 'rgba(255,255,255,0.28)',
  fill: 'rgba(255,255,255,0.045)',
  accent: '#F2B544',
};

const F = {
  serif: "var(--font-instrument-serif), Georgia, 'Times New Roman', serif",
  mono: "var(--font-jetbrains-mono), Consolas, 'Courier New', monospace",
  sans: "var(--font-ibm-plex-arabic), 'Segoe UI', Arial, sans-serif",
};

export function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function ctx(rtl) {
  return {
    rtl: !!rtl,
    X: (x) => (rtl ? W - x : x),
    RX: (x, w) => (rtl ? W - x - w : x),
    // direction="rtl" already flips start/end, so anchors stay as written.
    A: (a) => a,
    dir: rtl ? 'rtl' : 'ltr',
  };
}

function text(c, x, y, str, o = {}) {
  const { size = 14, font = 'sans', fill = C.fg, anchor = 'start', weight = 300, letter = 0, upper = false, opacity = 1 } = o;
  const s = upper ? String(str).toUpperCase() : String(str);
  return `<text x="${c.X(x)}" y="${y}" style="font-family:${F[font]};font-size:${size}px;font-weight:${weight};${letter ? `letter-spacing:${letter}px;` : ''}" fill="${fill}" text-anchor="${c.A(anchor)}" direction="${c.dir}"${opacity !== 1 ? ` opacity="${opacity}"` : ''}>${esc(s)}</text>`;
}

function rect(c, x, y, w, h, o = {}) {
  const { fill = 'none', stroke = C.line, sw = 1, r = 0, dash = '' } = o;
  return `<rect x="${c.RX(x, w)}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

function line(c, x1, y1, x2, y2, o = {}) {
  const { stroke = C.line, sw = 1, dash = '' } = o;
  return `<line x1="${c.X(x1)}" y1="${y1}" x2="${c.X(x2)}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

function circle(c, x, y, r, o = {}) {
  const { fill = 'none', stroke = 'none', sw = 1 } = o;
  return `<circle cx="${c.X(x)}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
}

export function wrap(str, max) {
  const words = String(str ?? '').split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; }
    else cur = (cur + ' ' + w).trim();
  }
  if (cur) lines.push(cur);
  return lines;
}

function open(h, title, desc) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${h}" width="${W}" height="${h}" role="img" aria-labelledby="t d" style="display:block;width:100%;height:auto;background:${C.bg}"><title id="t">${esc(title)}</title><desc id="d">${esc(desc || title)}</desc><rect width="${W}" height="${h}" fill="${C.bg}"/>`;
}

function heading(c, title, y = 64) {
  return text(c, 80, y, title, { size: 30, font: 'serif', fill: C.fg });
}

function dots(h) {
  return `<defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.14)"/></pattern></defs><rect width="${W}" height="${h}" fill="url(#g)"/>`;
}

// ───────────────────────────────────────────────────────────────────────────
// Cover: eyebrow, 1–3 title lines, subtitle, two linked nodes, footer note.
export function cover({ eyebrow, title, subtitle, left, right, note, rtl }) {
  const H = 670;
  const c = ctx(rtl);
  const lines = Array.isArray(title) ? title : wrap(title, 30);
  let s = open(H, lines.join(' '), subtitle) + dots(H);
  s += text(c, 80, 96, eyebrow, { size: 12, font: 'mono', fill: C.fg55, letter: 2.4, upper: true });
  s += line(c, 80 + (rtl ? 0 : 0), 0, 80, 0);
  lines.slice(0, 3).forEach((l, i) => { s += text(c, 80, 190 + i * 74, l, { size: 66, font: 'serif', fill: C.fg }); });
  const subY = 190 + Math.min(lines.length, 3) * 74 + 6;
  wrap(subtitle, 62).slice(0, 2).forEach((l, i) => { s += text(c, 80, subY + i * 30, l, { size: 21, fill: C.fg55 }); });
  // Link between two places
  const y = 560; const x1 = 160; const x2 = 1040;
  const path = rtl ? `M ${W - x1} ${y} Q ${W - 600} 420 ${W - x2} ${y}` : `M ${x1} ${y} Q 600 420 ${x2} ${y}`;
  s += `<path d="${path}" fill="none" stroke="${C.line2}" stroke-width="1" stroke-dasharray="3 6"/>`;
  s += circle(c, 600, 490, 4, { fill: C.accent });
  s += circle(c, x1, y, 6, { fill: C.fg }) + circle(c, x1, y, 16, { stroke: C.line2 });
  s += circle(c, x2, y, 6, { fill: C.fg }) + circle(c, x2, y, 16, { stroke: C.line2 });
  s += text(c, x1, y + 44, left.label, { size: 12, font: 'mono', fill: C.fg, letter: 2, upper: true, anchor: 'middle' });
  if (left.sub) s += text(c, x1, y + 64, left.sub, { size: 11, font: 'mono', fill: C.fg35, anchor: 'middle' });
  s += text(c, x2, y + 44, right.label, { size: 12, font: 'mono', fill: C.fg, letter: 2, upper: true, anchor: 'middle' });
  if (right.sub) s += text(c, x2, y + 64, right.sub, { size: 11, font: 'mono', fill: C.fg35, anchor: 'middle' });
  if (note) s += text(c, 1120, 96, note, { size: 11, font: 'mono', fill: C.fg35, anchor: 'end', letter: 1.5, upper: true });
  s += text(c, 600, 640, 'symloop.com', { size: 11, font: 'mono', fill: C.fg35, anchor: 'middle', letter: 2 });
  return s + '</svg>';
}

// ───────────────────────────────────────────────────────────────────────────
// Timeline: horizontal bars on a shared axis (units = weeks by default).
export function timeline({ title, items, total, tick = 4, unit = 'sem.', rtl }) {
  const c = ctx(rtl);
  const rowH = 64; const top = 120; const x0 = 400; const x1 = 1120;
  const H = top + items.length * rowH + 60;
  const sx = (v) => x0 + (v / total) * (x1 - x0);
  let s = open(H, title) + heading(c, title);
  for (let t = 0; t <= total; t += tick) {
    s += line(c, sx(t), top - 20, sx(t), top + items.length * rowH, { stroke: C.line, dash: '2 6' });
    s += text(c, sx(t), top - 30, `${t}`, { size: 11, font: 'mono', fill: C.fg35, anchor: 'middle' });
  }
  s += text(c, x1, top - 50, unit, { size: 11, font: 'mono', fill: C.fg35, anchor: 'end', upper: true, letter: 1.5 });
  items.forEach((it, i) => {
    const y = top + i * rowH;
    s += text(c, 80, y + 20, it.label, { size: 17, fill: C.fg });
    if (it.note) s += text(c, 80, y + 42, it.note, { size: 12, font: 'mono', fill: C.fg35 });
    const bx = sx(it.from); const bw = Math.max(6, sx(it.to) - sx(it.from));
    s += rect(c, bx, y + 6, bw, 22, { fill: it.accent ? C.accent : C.fg, stroke: 'none' });
    s += text(c, bx + bw + 10, y + 22, `${it.from}–${it.to}`, { size: 11, font: 'mono', fill: C.fg55 });
    if (i < items.length - 1) s += line(c, 80, y + rowH - 6, x1, y + rowH - 6, { stroke: C.line });
  });
  return s + '</svg>';
}

// ───────────────────────────────────────────────────────────────────────────
// Matrix: rows × columns; cells are 0 / 1 / 2 markers or short strings.
export function matrix({ title, columns, rows, highlight = -1, legend, rtl }) {
  const c = ctx(rtl);
  const labelW = 360; const x0 = 80; const gx = x0 + labelW; const colW = (1120 - gx) / columns.length;
  const top = 110; const rowH = 58;
  const H = top + 44 + rows.length * rowH + (legend ? 56 : 30);
  let s = open(H, title) + heading(c, title);
  if (highlight >= 0) {
    s += rect(c, gx + highlight * colW, top - 10, colW, 44 + rows.length * rowH + 10, { fill: C.fill, stroke: 'none' });
    s += line(c, gx + highlight * colW, top - 10, gx + (highlight + 1) * colW, top - 10, { stroke: C.accent, sw: 2 });
  }
  columns.forEach((col, j) => {
    wrap(col, Math.floor(colW / 8.5)).slice(0, 2).forEach((l, k) => {
      s += text(c, gx + j * colW + colW / 2, top + 10 + k * 15, l, { size: 11, font: 'mono', fill: j === highlight ? C.fg : C.fg55, anchor: 'middle', letter: 1.2, upper: true });
    });
  });
  s += line(c, x0, top + 40, 1120, top + 40, { stroke: C.line2 });
  rows.forEach((r, i) => {
    const y = top + 44 + i * rowH;
    wrap(r.label, 40).slice(0, 2).forEach((l, k) => { s += text(c, x0, y + 26 + k * 18 - (wrap(r.label, 40).length > 1 ? 8 : 0), l, { size: 15, fill: C.fg }); });
    r.cells.forEach((cell, j) => {
      const cx = gx + j * colW + colW / 2; const cy = y + rowH / 2;
      if (typeof cell === 'number') {
        if (cell >= 2) s += circle(c, cx, cy, 7, { fill: j === highlight ? C.accent : C.fg });
        else if (cell === 1) s += circle(c, cx, cy, 7, { stroke: C.fg, sw: 1.5 }) + `<path d="M ${c.X(cx)} ${cy - 7} A 7 7 0 0 ${rtl ? 0 : 1} ${c.X(cx)} ${cy + 7} Z" fill="${C.fg}"/>`;
        else s += circle(c, cx, cy, 7, { stroke: C.fg35, sw: 1.5 });
      } else {
        const ls = wrap(cell, Math.floor(colW / 7.6)).slice(0, 2);
        ls.forEach((l, k) => { s += text(c, cx, cy + 5 + (k - (ls.length - 1) / 2) * 17, l, { size: 13, fill: j === highlight ? C.fg : C.fg70, anchor: 'middle' }); });
      }
    });
    s += line(c, x0, y + rowH, 1120, y + rowH, { stroke: C.line });
  });
  if (legend) s += text(c, x0, H - 22, legend, { size: 11, font: 'mono', fill: C.fg35 });
  return s + '</svg>';
}

// ───────────────────────────────────────────────────────────────────────────
// Layers: stacked rows of boxes (architecture). Each layer: label + items.
export function layers({ title, layers: ls, rtl }) {
  const c = ctx(rtl);
  const top = 100; const boxH = 74; const gap = 30; const lx = 80; const bx0 = 300; const bx1 = 1120;
  const H = top + ls.length * (boxH + gap) + 20;
  let s = open(H, title) + heading(c, title);
  ls.forEach((layer, i) => {
    const y = top + i * (boxH + gap);
    wrap(layer.label, 22).slice(0, 2).forEach((l, k) => { s += text(c, lx, y + 30 + k * 16, l, { size: 11, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }); });
    const n = layer.items.length; const g = 12; const w = (bx1 - bx0 - g * (n - 1)) / n;
    layer.items.forEach((it, j) => {
      const x = bx0 + j * (w + g);
      s += rect(c, x, y, w, boxH, { fill: it.accent ? C.fill : 'none', stroke: it.accent ? C.accent : C.line2 });
      s += text(c, x + 16, y + 30, it.name, { size: 15, fill: C.fg });
      if (it.sub) wrap(it.sub, Math.floor(w / 7)).slice(0, 2).forEach((l, k) => { s += text(c, x + 16, y + 50 + k * 14, l, { size: 11, font: 'mono', fill: C.fg35 }); });
    });
    if (i < ls.length - 1) {
      const mx = (bx0 + bx1) / 2;
      s += line(c, mx, y + boxH, mx, y + boxH + gap, { stroke: C.line2 });
      s += `<path d="M ${c.X(mx) - 4} ${y + boxH + gap - 6} L ${c.X(mx)} ${y + boxH + gap} L ${c.X(mx) + 4} ${y + boxH + gap - 6}" fill="none" stroke="${C.line2}"/>`;
    }
  });
  return s + '</svg>';
}

// ───────────────────────────────────────────────────────────────────────────
// Steps: a left-to-right (or right-to-left) sequence of up to 6 boxes.
export function steps({ title, steps: st, arrows = true, rtl }) {
  const c = ctx(rtl);
  const top = 100; const x0 = 80; const x1 = 1120; const g = 28; const n = st.length;
  const w = (x1 - x0 - g * (n - 1)) / n; const boxH = 200;
  const H = top + boxH + 40;
  let s = open(H, title) + heading(c, title);
  st.forEach((p, i) => {
    const x = x0 + i * (w + g);
    s += rect(c, x, top, w, boxH, { stroke: p.accent ? C.accent : C.line2, fill: p.accent ? C.fill : 'none' });
    s += text(c, x + 16, top + 28, p.n ?? String(i + 1).padStart(2, '0'), { size: 11, font: 'mono', fill: C.fg35, letter: 2 });
    wrap(p.label, Math.floor(w / 9)).slice(0, 2).forEach((l, k) => { s += text(c, x + 16, top + 62 + k * 22, l, { size: 17, fill: C.fg }); });
    wrap(p.sub || '', Math.floor(w / 7)).slice(0, 4).forEach((l, k) => { s += text(c, x + 16, top + 116 + k * 18, l, { size: 12.5, fill: C.fg55 }); });
    if (arrows && i < n - 1) {
      const ax = x + w; const ay = top + boxH / 2;
      s += line(c, ax + 6, ay, ax + g - 6, ay, { stroke: C.line2 });
      const tip = c.X(ax + g - 6); const dirn = rtl ? 1 : -1;
      s += `<path d="M ${tip + dirn * 6} ${ay - 4} L ${tip} ${ay} L ${tip + dirn * 6} ${ay + 4}" fill="none" stroke="${C.line2}"/>`;
    }
  });
  return s + '</svg>';
}

// ───────────────────────────────────────────────────────────────────────────
// Stats: a row of large figures with labels.
export function stats({ title, items, rtl }) {
  const c = ctx(rtl);
  const top = 100; const n = items.length; const x0 = 80; const w = (1120 - x0) / n;
  const H = top + 150;
  let s = open(H, title) + heading(c, title);
  items.forEach((it, i) => {
    const x = x0 + i * w;
    if (i > 0) s += line(c, x - 20, top, x - 20, top + 110, { stroke: C.line });
    s += text(c, x, top + 56, it.value, { size: 52, font: 'serif', fill: it.accent ? C.accent : C.fg });
    wrap(it.label, Math.floor(w / 8)).slice(0, 2).forEach((l, k) => { s += text(c, x, top + 88 + k * 18, l, { size: 13, fill: C.fg55 }); });
  });
  return s + '</svg>';
}
