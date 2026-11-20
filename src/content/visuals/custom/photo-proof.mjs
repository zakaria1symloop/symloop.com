// Bespoke animated figures for the 2027 "photos that hold up" post.
//  pipeline(): one photo from the camera to the file: capture, on-device
//              resize and WebP, fingerprint and metadata, offline queue,
//              resumable chunked upload with one retried chunk, server
//              receipt with its own timestamp and hash check, versioned
//              object storage, thumbnails, link to the record; a byte bar
//              under each stage shows the size shrinking.
//  proof():    what makes a stored photo hold up: the record with its
//              fields and sources, a recomputed fingerprint that matches,
//              and a retouched copy whose fingerprint does not; access by
//              short-lived signed link, logged.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function mover(css, P, id, path, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{offset-distance:0%;opacity:0}${(at + 0.4).toFixed(1)}%{opacity:1}${(at + dur - 0.4).toFixed(1)}%{opacity:1}${(at + dur).toFixed(1)}%,100%{offset-distance:100%;opacity:0}}`); return `<circle r="4" fill="${C.accent}" opacity="0" style="offset-path:path('${path}');animation:${P}-${id} ${LOOP}s linear infinite"/>`; }
const I = (x) => `⁦${x}⁩`;

export function pipeline(t, rtl) {
  const c = ctx(rtl); const P = 'pp'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const n = t.stages.length; const x0 = 80, total = 1040, gap = 14; const w = (total - gap * (n - 1)) / n; const y = 110, h = 196;
  const maxBytes = Math.max(...t.stages.map((st) => st.bytes));
  t.stages.forEach((st, i) => {
    const x = x0 + i * (w + gap); const at = 3 + i * 7; const hot = st.hot;
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">`
      + rect(c, x, y, w, h, { stroke: hot ? C.accent : C.line2, fill: hot ? 'rgba(242,181,68,0.06)' : C.fill })
      + text(c, x + 10, y + 20, String(i + 1).padStart(2, '0'), { size: 10, font: 'mono', fill: C.fg35 })
      + text(c, x + 10, y + 42, st.title, { size: 12.5, fill: hot ? C.accent : C.fg })
      + text(c, x + 10, y + 62, st.l1, { size: 10, font: 'mono', fill: C.fg70 })
      + text(c, x + 10, y + 78, st.l2, { size: 10, font: 'mono', fill: C.fg70 })
      + text(c, x + 10, y + 94, st.l3, { size: 10, font: 'mono', fill: C.fg55 })
      + text(c, x + 10, y + 110, st.l4, { size: 10, font: 'mono', fill: C.fg55 })
      + '</g>';
    // byte bar
    const bw = Math.max(4, (w - 20) * st.bytes / maxBytes); const by = y + h - 50;
    s += `<g style="animation:${show(css, P, `b${i}`, at + 2)}">` + rect(c, x + 10, by, w - 20, 10, { stroke: C.line, fill: 'none' }) + `<rect x="${c.RX(x + 10, bw)}" y="${by}" width="${bw.toFixed(1)}" height="10" fill="${hot ? C.accent : C.fg55}" style="transform-box:fill-box;transform-origin:${c.rtl ? 'right' : 'left'} center;animation:${grow(css, P, `g${i}`, at + 2, 4)}"/>` + text(c, x + 10, by + 28, st.size, { size: 11, font: 'mono', fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, x + w - 10, by + 28, st.time, { size: 9.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
    // connector + mover
    if (i < n - 1) { const cx1 = x + w, cx2 = x + w + gap, cy = y + h / 2; s += line(c, cx1, cy, cx2, cy, { stroke: C.line2 }); s += mover(css, P, `m${i}`, `M${c.X(cx1)} ${cy} L${c.X(cx2)} ${cy}`, at + 5, 2); }
  });
  // chunk detail under transport stage
  const ti = t.chunkStage; const tx = x0 + ti * (w + gap); const cy0 = y + h + 36;
  s += text(c, 80, cy0, t.chunkLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.chunks.forEach((ch, k) => {
    const cx = 80 + k * 250; const yy = cy0 + 14; const at = 30 + k * 4;
    s += `<g style="animation:${show(css, P, `c${k}`, at)}">` + rect(c, cx, yy, 230, 30, { stroke: ch.retry ? C.accent : C.line2, fill: ch.retry ? 'rgba(242,181,68,0.06)' : C.fill, dash: ch.retry ? '4 3' : '' }) + text(c, cx + 10, yy + 19, ch.label, { size: 10.5, font: 'mono', fill: ch.retry ? C.accent : C.fg70 }) + '</g>';
  });
  s += line(c, tx + w / 2, y + h, tx + w / 2, cy0 - 14, { stroke: C.line2, dash: '2 3' });
  // two timestamps note
  s += `<g style="animation:${show(css, P, 'ts', 50)}">` + rect(c, 80, 436, 1040, 54, { stroke: C.accent, fill: 'rgba(242,181,68,0.05)' }) + text(c, 96, 457, t.tsTitle, { size: 12, fill: C.fg }) + text(c, 96, 477, t.tsBody, { size: 10.5, font: 'mono', fill: C.accent }) + '</g>';
  s += text(c, 80, 526, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 546, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 570, t.note, { size: 10.5, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"],svg circle[style*="${P}-"]{animation:none !important;transform:none}}</style>`;
  return s + '</svg>';
}

export function proof(t, rtl) {
  const c = ctx(rtl); const P = 'pf'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // left: record card
  const lx = 80, lw = 560, ly = 100;
  s += rect(c, lx, ly, lw, 346, { stroke: C.line2, fill: C.fill });
  s += text(c, lx + 16, ly + 24, t.recordTitle, { size: 13, fill: C.fg }) + text(c, lx + lw - 16, ly + 24, t.recordId, { size: 10.5, font: 'mono', fill: C.fg55, anchor: 'end' });
  s += line(c, lx + 16, ly + 34, lx + lw - 16, ly + 34, { stroke: C.line });
  t.fields.forEach((f, i) => {
    const yy = ly + 58 + i * 34; const at = 4 + i * 4;
    s += `<g style="animation:${show(css, P, `f${i}`, at)}">` + text(c, lx + 16, yy, f.k, { size: 10, font: 'mono', fill: C.fg35, letter: 1, upper: true }) + text(c, lx + 16, yy + 15, f.v, { size: 11.5, fill: f.hot ? C.accent : C.fg }) + text(c, lx + lw - 16, yy + 15, f.src, { size: 9.5, font: 'mono', fill: f.hot ? C.accent : C.fg55, anchor: 'end' }) + '</g>';
  });
  // right: verification panel
  const rx = 680, rw = 440;
  s += text(c, rx, ly + 4, t.verifyLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += line(c, rx, ly + 14, rx + rw, ly + 14, { stroke: C.line2 });
  t.checks.forEach((ck, i) => {
    const yy = ly + 42 + i * 92; const ok = ck.ok;
    s += `<g style="animation:${show(css, P, `k${i}`, 46 + i * 10)}">`
      + rect(c, rx, yy - 20, rw, 76, { stroke: ok ? C.accent : C.fg55, fill: ok ? 'rgba(242,181,68,0.06)' : 'rgba(255,255,255,0.03)', dash: ok ? '' : '4 3' })
      + circle(c, rx + 22, yy + 12, 11, { fill: ok ? C.accent : 'none', stroke: ok ? C.accent : C.fg55, sw: 1.5 })
      + text(c, rx + 22, yy + 16, ok ? '✓' : '✕', { size: 12, fill: ok ? '#000' : C.fg70, anchor: 'middle', weight: 600 })
      + text(c, rx + 44, yy, ck.title, { size: 12.5, fill: ok ? C.accent : C.fg })
      + text(c, rx + 44, yy + 18, ck.l1, { size: 10, font: 'mono', fill: C.fg70 })
      + text(c, rx + 44, yy + 34, ck.l2, { size: 10, font: 'mono', fill: C.fg55 })
      + '</g>';
  });
  // access log
  const ay = ly + 42 + t.checks.length * 92 - 4;
  s += `<g style="animation:${show(css, P, 'acc', 80)}">` + text(c, rx, ay, t.accessLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + t.access.map((a, i) => text(c, rx, ay + 18 + i * 16, a, { size: 10, font: 'mono', fill: C.fg70 })).join('') + '</g>';
  s += text(c, 80, 536, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 556, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 580, t.note, { size: 10.5, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    pipeline: {
      title: 'Une photo, de l’appareil au dossier : ce qui lui arrive, et ce qu’elle pèse à chaque étape',
      alt: 'Sept étapes. Capture : 12 mégapixels, 4,2 Mo, heure de l’appareil 14:02:11. Réduction sur l’appareil : 1 600 pixels de large, WebP, 240 Ko. Empreinte et métadonnées : SHA-256 calculée sur l’appareil, dossier, auteur, position à 8 mètres près. File hors ligne : la photo attend le réseau, 3 en attente. Envoi reprenable : trois morceaux de 80 Ko, le deuxième repris après une coupure. Réception : le serveur note sa propre heure, 14:09:48, recalcule l’empreinte et compare. Stockage et liens : objet versionné, miniatures de 320 et 800 pixels, enregistrement lié au dossier. Une barre sous chaque étape montre la taille qui passe de 4,2 Mo à 240 Ko. Encadré : deux heures sont conservées, celle de l’appareil et celle du serveur, et l’écart entre les deux est lui-même une information. Les tailles sont un exemple construit.',
      stages: [
        { title: 'Capture', l1: '12 Mpx · JPEG', l2: 'heure appareil 14:02:11', l3: 'guidée : cadre, flash,', l4: 'recadrage interdit', bytes: 4200, size: '4,2 Mo', time: '0 s' },
        { title: 'Réduction', l1: '1 600 px de large', l2: 'WebP · qualité 80', l3: 'sur l’appareil, avant', l4: 'tout envoi', bytes: 240, size: '240 Ko', time: '< 1 s', hot: true },
        { title: 'Empreinte', l1: 'SHA-256 sur l’appareil', l2: 'dossier · auteur · appareil', l3: 'position ±8 m', l4: 'heure appareil gardée', bytes: 241, size: '241 Ko', time: '< 1 s' },
        { title: 'File hors ligne', l1: 'base locale', l2: '3 photos en attente', l3: 'réseau coupé', l4: 'rien n’est perdu', bytes: 241, size: '241 Ko', time: 'attente' },
        { title: 'Envoi reprenable', l1: '3 morceaux de 80 Ko', l2: 'protocole ouvert (tus)', l3: 'reprise au morceau,', l4: 'pas au début', bytes: 241, size: '241 Ko', time: '7 min plus tard', hot: true },
        { title: 'Réception', l1: 'heure serveur 14:09:48', l2: 'empreinte recalculée', l3: 'égale → acceptée', l4: 'différente → refusée', bytes: 241, size: '241 Ko', time: '< 1 s' },
        { title: 'Stockage et liens', l1: 'objet versionné · clé', l2: 'miniatures 320 · 800 px', l3: 'liée au dossier', l4: 'et à l’auteur', bytes: 241, size: '241 Ko + 30 Ko', time: '< 2 s' },
      ],
      chunkStage: 4, chunkLabel: 'Détail de l’envoi reprenable',
      chunks: [{ label: 'morceau 1 · 80 Ko · envoyé · accusé' }, { label: 'morceau 2 · coupure à 45 Ko · repris à 45 Ko', retry: true }, { label: 'morceau 3 · 81 Ko · envoyé · accusé' }, { label: 'assemblage · empreinte vérifiée' }],
      tsTitle: 'Deux heures conservées, jamais une seule', tsBody: 'heure de l’appareil 14:02:11 (déclarée, modifiable) · heure du serveur 14:09:48 (reçue, non modifiable) · écart 7 min 37 s : réseau coupé, normal ; écart de 3 jours : à expliquer',
      rule: 'La photo est réduite avant d’être envoyée, jamais après : 240 Ko sur un réseau faible passent, 4,2 Mo ne passent pas. L’empreinte est calculée sur l’appareil et vérifiée par le serveur ;',
      rule2: 'ce qui arrive est exactement ce qui a été pris. L’original pleine taille n’est conservé que si le métier l’exige, et on l’écrit la première semaine.',
      note: 'tailles, durées et heures : exemple construit · le gain de WebP sur JPEG et la taille d’une photo de téléphone varient selon l’appareil et la scène',
    },
    proof: {
      title: 'Ce qui fait tenir une photo : la fiche, l’empreinte recalculée, et la copie retouchée refusée',
      alt: 'À gauche, la fiche d’une photo stockée : dossier, livraison 2027-0890 ; auteur, Nadir, livreur, connecté par code ; appareil, identifiant et modèle ; heure de l’appareil 14:02:11 ; heure du serveur 14:09:48 ; position 36,1914 N 5,4142 E à 8 mètres ; empreinte SHA-256 calculée sur l’appareil ; objet, clé et version dans le stockage ; original pleine taille, non conservé par règle. À droite, trois vérifications : l’empreinte recalculée aujourd’hui sur l’objet stocké est égale à celle de la fiche, coche ; une copie retouchée, luminosité changée, donne une empreinte différente, croix ; la version de l’objet est la première et aucune réécriture n’a eu lieu, coche. En bas, le journal d’accès : qui a ouvert la photo, quand, par un lien signé valable quinze minutes. Les valeurs sont un exemple construit.',
      recordTitle: 'Fiche photo · preuve de livraison', recordId: 'ph_7f3a…c21 · v1',
      fields: [
        { k: 'Dossier', v: 'Livraison BL-2027-0890 · client El Hidhab', src: 'lié à la création' },
        { k: 'Auteur · appareil', v: 'Nadir · livreur · Android · id d’appareil 9c…e4', src: 'connecté par code · appareil enrôlé' },
        { k: 'Heure de l’appareil · heure du serveur', v: '14:02:11 · 14:09:48 · écart 7 min 37 s', src: 'déclarée · reçue', hot: true },
        { k: 'Position', v: '36,1914 N · 5,4142 E · ±8 m', src: 'GPS de l’appareil · précision stockée' },
        { k: 'Empreinte', v: 'SHA-256 · 3b9f…7a1e', src: 'calculée sur l’appareil · vérifiée à la réception', hot: true },
        { k: 'Objet', v: 'clé photos/2027/11/ph_7f3a…c21.webp · version 1', src: 'stockage objet versionné' },
        { k: 'Original pleine taille', v: 'non conservé · règle du dossier « livraison »', src: 'décidé la première semaine' },
        { k: 'Rétention', v: '5 ans · puis suppression journalisée', src: 'règle écrite par le gérant' },
      ],
      verifyLabel: 'Vérifications · aujourd’hui',
      checks: [
        { ok: true, title: 'Empreinte recalculée = empreinte de la fiche', l1: 'SHA-256 de l’objet stocké : 3b9f…7a1e', l2: 'l’image est celle qui a été prise' },
        { ok: false, title: 'Copie retouchée : luminosité +10 %', l1: 'SHA-256 : e02c…94d0 ≠ 3b9f…7a1e', l2: 'une image modifiée ne passe pas la vérification' },
        { ok: true, title: 'Version 1, aucune réécriture', l1: 'stockage objet versionné · historique vide', l2: 'personne n’a remplacé l’objet' },
      ],
      accessLabel: 'Journal d’accès', access: ['10/11 09:12 · gérante · lien signé · 15 min', '10/11 09:40 · client · lien signé · 15 min', '12/11 16:05 · export litige · PDF avec empreinte'],
      rule: 'Une photo seule ne prouve rien : ce qui tient, c’est la fiche autour d’elle, l’empreinte calculée à la prise et recalculée à la demande, la version de l’objet,',
      rule2: 'et le journal de qui l’a vue. L’accès se fait par un lien signé qui expire ; la photo n’est jamais publique.',
      note: 'identifiants, heures et empreintes : exemple construit · la valeur juridique d’une photo dépend du contexte et n’est pas traitée ici',
    },
  },
  en: {
    pipeline: {
      title: 'One photo, from the camera to the file: what happens to it, and what it weighs at each step',
      alt: 'Seven steps. Capture: 12 megapixels, 4.2 MB, device time 14:02:11. On-device reduction: 1,600 pixels wide, WebP, 240 KB. Fingerprint and metadata: SHA-256 computed on the device, record, author, position within 8 metres. Offline queue: the photo waits for network, 3 pending. Resumable upload: three 80 KB chunks, the second resumed after a cut. Receipt: the server notes its own time, 14:09:48, recomputes the fingerprint and compares. Storage and links: versioned object, 320 and 800 pixel thumbnails, record linked to the file. A bar under each step shows the size going from 4.2 MB to 240 KB. Box: two times are kept, the device’s and the server’s, and the gap between them is itself information. Sizes are a constructed example.',
      stages: [
        { title: 'Capture', l1: '12 Mpx · JPEG', l2: 'device time 14:02:11', l3: 'guided: frame, flash,', l4: 'no cropping', bytes: 4200, size: '4.2 MB', time: '0 s' },
        { title: 'Reduction', l1: '1,600 px wide', l2: 'WebP · quality 80', l3: 'on the device, before', l4: 'any upload', bytes: 240, size: '240 KB', time: '< 1 s', hot: true },
        { title: 'Fingerprint', l1: 'SHA-256 on the device', l2: 'record · author · device', l3: 'position ±8 m', l4: 'device time kept', bytes: 241, size: '241 KB', time: '< 1 s' },
        { title: 'Offline queue', l1: 'local database', l2: '3 photos pending', l3: 'network down', l4: 'nothing is lost', bytes: 241, size: '241 KB', time: 'waiting' },
        { title: 'Resumable upload', l1: '3 chunks of 80 KB', l2: 'open protocol (tus)', l3: 'resumes at the chunk,', l4: 'not at the start', bytes: 241, size: '241 KB', time: '7 min later', hot: true },
        { title: 'Receipt', l1: 'server time 14:09:48', l2: 'fingerprint recomputed', l3: 'equal → accepted', l4: 'different → refused', bytes: 241, size: '241 KB', time: '< 1 s' },
        { title: 'Storage and links', l1: 'versioned object · key', l2: 'thumbnails 320 · 800 px', l3: 'linked to the record', l4: 'and to the author', bytes: 241, size: '241 KB + 30 KB', time: '< 2 s' },
      ],
      chunkStage: 4, chunkLabel: 'Resumable upload detail',
      chunks: [{ label: 'chunk 1 · 80 KB · sent · acknowledged' }, { label: 'chunk 2 · cut at 45 KB · resumed at 45 KB', retry: true }, { label: 'chunk 3 · 81 KB · sent · acknowledged' }, { label: 'assembly · fingerprint checked' }],
      tsTitle: 'Two times kept, never one', tsBody: 'device time 14:02:11 (declared, editable) · server time 14:09:48 (received, not editable) · gap 7 min 37 s: network down, normal; a 3-day gap: to be explained',
      rule: 'The photo is reduced before being sent, never after: 240 KB gets through a weak network, 4.2 MB does not. The fingerprint is computed on the device and checked by the server;',
      rule2: 'what arrives is exactly what was taken. The full-size original is kept only if the trade requires it, and that is written in the first week.',
      note: 'sizes, durations and times: constructed example · WebP’s gain over JPEG and the size of a phone photo vary with the device and the scene',
    },
    proof: {
      title: 'What makes a photo hold up: the record, the recomputed fingerprint, the retouched copy refused',
      alt: 'On the left, the record of a stored photo: file, delivery 2027-0890; author, Nadir, courier, logged in by code; device, identifier and model; device time 14:02:11; server time 14:09:48; position 36.1914 N 5.4142 E within 8 metres; SHA-256 fingerprint computed on the device; object, key and version in storage; full-size original, not kept by rule. On the right, three checks: the fingerprint recomputed today on the stored object equals the record’s, tick; a retouched copy, brightness changed, gives a different fingerprint, cross; the object’s version is the first and no rewrite happened, tick. Below, the access log: who opened the photo, when, through a signed link valid fifteen minutes. Values are a constructed example.',
      recordTitle: 'Photo record · proof of delivery', recordId: 'ph_7f3a…c21 · v1',
      fields: [
        { k: 'File', v: 'Delivery DN-2027-0890 · customer El Hidhab', src: 'linked at creation' },
        { k: 'Author · device', v: 'Nadir · courier · Android · device id 9c…e4', src: 'logged in by code · enrolled device' },
        { k: 'Device time · server time', v: '14:02:11 · 14:09:48 · gap 7 min 37 s', src: 'declared · received', hot: true },
        { k: 'Position', v: '36.1914 N · 5.4142 E · ±8 m', src: 'device GPS · accuracy stored' },
        { k: 'Fingerprint', v: 'SHA-256 · 3b9f…7a1e', src: 'computed on the device · checked at receipt', hot: true },
        { k: 'Object', v: 'key photos/2027/11/ph_7f3a…c21.webp · version 1', src: 'versioned object storage' },
        { k: 'Full-size original', v: 'not kept · rule of the “delivery” file', src: 'decided in the first week' },
        { k: 'Retention', v: '5 years · then logged deletion', src: 'rule written by the manager' },
      ],
      verifyLabel: 'Checks · today',
      checks: [
        { ok: true, title: 'Recomputed fingerprint = record fingerprint', l1: 'SHA-256 of the stored object: 3b9f…7a1e', l2: 'the image is the one that was taken' },
        { ok: false, title: 'Retouched copy: brightness +10 %', l1: 'SHA-256: e02c…94d0 ≠ 3b9f…7a1e', l2: 'a modified image fails the check' },
        { ok: true, title: 'Version 1, no rewrite', l1: 'versioned object storage · empty history', l2: 'nobody replaced the object' },
      ],
      accessLabel: 'Access log', access: ['10/11 09:12 · manager · signed link · 15 min', '10/11 09:40 · customer · signed link · 15 min', '12/11 16:05 · dispute export · PDF with fingerprint'],
      rule: 'A photo alone proves nothing: what holds is the record around it, the fingerprint computed at capture and recomputed on request, the object’s version,',
      rule2: 'and the log of who saw it. Access is through a signed link that expires; the photo is never public.',
      note: 'identifiers, times and fingerprints: constructed example · the legal weight of a photo depends on context and is not covered here',
    },
  },
  ar: {
    pipeline: {
      title: 'صورة واحدة، من الكاميرا إلى الملف: ما يحدث لها، وكم تزن في كل خطوة',
      alt: 'سبع خطوات. الالتقاط: 12 ميغابكسل، 4.2 ميغابايت، وقت الجهاز 14:02:11. التصغير على الجهاز: عرض 1600 بكسل، WebP، 240 كيلوبايت. البصمة والبيانات: SHA-256 محسوبة على الجهاز، الملف، المؤلف، الموقع بدقة 8 أمتار. طابور دون اتصال: تنتظر الصورة الشبكة، 3 معلّقة. رفع قابل للاستئناف: ثلاث قطع من 80 كيلوبايت، الثانية استُؤنفت بعد انقطاع. الاستلام: يسجّل الخادم وقته 14:09:48 ويعيد حساب البصمة ويقارن. التخزين والروابط: كائن بنسخ، مصغّرات 320 و800 بكسل، سجل مرتبط بالملف. شريط تحت كل خطوة يُظهر الحجم ينتقل من 4.2 ميغابايت إلى 240 كيلوبايت. إطار: يُحتفظ بوقتين، وقت الجهاز ووقت الخادم، والفارق بينهما معلومة بذاته. والأحجام مثال مبني.',
      stages: [
        { title: 'الالتقاط', l1: `${I('12 Mpx')} · JPEG`, l2: `وقت الجهاز ${I('14:02:11')}`, l3: 'موجَّه: إطار، فلاش،', l4: 'لا قصّ', bytes: 4200, size: I('4.2 MB'), time: I('0 s') },
        { title: 'التصغير', l1: `عرض ${I('1600 px')}`, l2: 'WebP · جودة 80', l3: 'على الجهاز، قبل', l4: 'أي رفع', bytes: 240, size: I('240 KB'), time: I('< 1 s'), hot: true },
        { title: 'البصمة', l1: `${I('SHA-256')} على الجهاز`, l2: 'ملف · مؤلف · جهاز', l3: `موقع ${I('±8 m')}`, l4: 'وقت الجهاز محفوظ', bytes: 241, size: I('241 KB'), time: I('< 1 s') },
        { title: 'طابور دون اتصال', l1: 'قاعدة محلية', l2: '3 صور معلّقة', l3: 'الشبكة مقطوعة', l4: 'لا شيء يضيع', bytes: 241, size: I('241 KB'), time: 'انتظار' },
        { title: 'رفع قابل للاستئناف', l1: `3 قطع من ${I('80 KB')}`, l2: 'بروتوكول مفتوح (tus)', l3: 'يُستأنف عند القطعة', l4: 'لا من البداية', bytes: 241, size: I('241 KB'), time: 'بعد 7 دقائق', hot: true },
        { title: 'الاستلام', l1: `وقت الخادم ${I('14:09:48')}`, l2: 'بصمة معاد حسابها', l3: 'متساوية ← مقبولة', l4: 'مختلفة ← مرفوضة', bytes: 241, size: I('241 KB'), time: I('< 1 s') },
        { title: 'التخزين والروابط', l1: 'كائن بنسخ · مفتاح', l2: `مصغّرات ${I('320 · 800 px')}`, l3: 'مرتبطة بالملف', l4: 'وبالمؤلف', bytes: 241, size: I('241 KB + 30 KB'), time: I('< 2 s') },
      ],
      chunkStage: 4, chunkLabel: 'تفصيل الرفع القابل للاستئناف',
      chunks: [{ label: `قطعة 1 · ${I('80 KB')} · أُرسلت · أُقرّت` }, { label: `قطعة 2 · انقطاع عند ${I('45 KB')} · استئناف عند ${I('45 KB')}`, retry: true }, { label: `قطعة 3 · ${I('81 KB')} · أُرسلت · أُقرّت` }, { label: 'تجميع · بصمة متحقَّق منها' }],
      tsTitle: 'وقتان محفوظان، لا وقت واحد أبداً', tsBody: `وقت الجهاز ${I('14:02:11')} (مصرَّح، قابل للتعديل) · وقت الخادم ${I('14:09:48')} (مستلَم، غير قابل للتعديل) · فارق 7 د 37 ث: شبكة مقطوعة، عادي؛ فارق 3 أيام: يحتاج تفسيراً`,
      rule: 'تُصغَّر الصورة قبل إرسالها لا بعده: 240 كيلوبايت تمر على شبكة ضعيفة، و4.2 ميغابايت لا تمر. والبصمة تُحسب على الجهاز ويتحقق منها الخادم؛',
      rule2: 'فما يصل هو بالضبط ما التُقط. والأصل بالحجم الكامل لا يُحفظ إلا إن اقتضته المهنة، ويُكتب ذلك في الأسبوع الأول.',
      note: 'الأحجام والمدد والأوقات: مثال مبني · ربح WebP على JPEG وحجم صورة الهاتف يختلفان حسب الجهاز والمشهد',
    },
    proof: {
      title: 'ما يجعل الصورة تصمد: البطاقة، والبصمة المعاد حسابها، والنسخة المعدَّلة التي لا تمر',
      alt: 'على اليمين بطاقة صورة مخزَّنة: الملف، التسليم 2027-0890؛ المؤلف، نذير، موصّل، دخل برمز؛ الجهاز، معرّف وطراز؛ وقت الجهاز 14:02:11؛ وقت الخادم 14:09:48؛ الموقع 36.1914 N 5.4142 E بدقة 8 أمتار؛ بصمة SHA-256 محسوبة على الجهاز؛ الكائن، مفتاح ونسخة في التخزين؛ الأصل بالحجم الكامل غير محفوظ بالقاعدة. على اليسار ثلاثة تحققات: البصمة المعاد حسابها اليوم على الكائن المخزَّن تساوي بصمة البطاقة، علامة صح؛ نسخة معدَّلة بتغيير السطوع تعطي بصمة مختلفة، علامة خطأ؛ نسخة الكائن هي الأولى ولم تحدث إعادة كتابة، علامة صح. وفي الأسفل سجل الوصول: من فتح الصورة ومتى، برابط موقَّع صالح خمس عشرة دقيقة. والقيم مثال مبني.',
      recordTitle: 'بطاقة صورة · إثبات تسليم', recordId: I('ph_7f3a…c21 · v1'),
      fields: [
        { k: 'الملف', v: `تسليم ${I('BL-2027-0890')} · الزبون الهضاب`, src: 'مرتبط عند الإنشاء' },
        { k: 'المؤلف · الجهاز', v: `نذير · موصّل · Android · معرّف الجهاز ${I('9c…e4')}`, src: 'دخل برمز · جهاز مسجَّل' },
        { k: 'وقت الجهاز · وقت الخادم', v: `${I('14:02:11')} · ${I('14:09:48')} · فارق 7 د 37 ث`, src: 'مصرَّح · مستلَم', hot: true },
        { k: 'الموقع', v: `${I('36.1914 N · 5.4142 E · ±8 m')}`, src: 'GPS الجهاز · الدقة مخزَّنة' },
        { k: 'البصمة', v: `${I('SHA-256 · 3b9f…7a1e')}`, src: 'محسوبة على الجهاز · متحقَّق منها عند الاستلام', hot: true },
        { k: 'الكائن', v: `مفتاح ${I('photos/2027/11/ph_7f3a…c21.webp')} · نسخة 1`, src: 'تخزين كائنات بنسخ' },
        { k: 'الأصل بالحجم الكامل', v: 'غير محفوظ · قاعدة ملف «التسليم»', src: 'قُرر في الأسبوع الأول' },
        { k: 'الاحتفاظ', v: '5 سنوات · ثم حذف مسجَّل', src: 'قاعدة كتبها المسيّر' },
      ],
      verifyLabel: 'التحققات · اليوم',
      checks: [
        { ok: true, title: 'البصمة المعاد حسابها = بصمة البطاقة', l1: `${I('SHA-256')} للكائن المخزَّن: ${I('3b9f…7a1e')}`, l2: 'الصورة هي التي التُقطت' },
        { ok: false, title: 'نسخة معدَّلة: سطوع +10 %', l1: `${I('SHA-256: e02c…94d0 ≠ 3b9f…7a1e')}`, l2: 'صورة معدَّلة لا تجتاز التحقق' },
        { ok: true, title: 'النسخة 1، لا إعادة كتابة', l1: 'تخزين كائنات بنسخ · تاريخ فارغ', l2: 'لا أحد استبدل الكائن' },
      ],
      accessLabel: 'سجل الوصول', access: [`${I('10/11 09:12')} · المسيّرة · رابط موقَّع · 15 د`, `${I('10/11 09:40')} · الزبون · رابط موقَّع · 15 د`, `${I('12/11 16:05')} · تصدير نزاع · PDF بالبصمة`],
      rule: 'الصورة وحدها لا تثبت شيئاً: ما يصمد هو البطاقة حولها، والبصمة المحسوبة عند الالتقاط والمعاد حسابها عند الطلب، ونسخة الكائن،',
      rule2: 'وسجل من رآها. والوصول برابط موقَّع ينتهي؛ والصورة ليست عامة أبداً.',
      note: 'المعرّفات والأوقات والبصمات: مثال مبني · القيمة القانونية للصورة تتوقف على السياق ولا تُعالَج هنا',
    },
  },
};
