// Bespoke animated figures for the 2027 "logiciel lavage auto" post.
//  affluence(): arrivals per hour against the capacity of the station, for a
//               Saturday and a Tuesday. Bars grow from the baseline one hour
//               after another, a dashed capacity line is drawn across both
//               charts, the part of each bar above the line appears in accent;
//               a band gives the day totals; three tiles.
//  tickets():   three counts of the same day that never agree, then the same
//               day with one ticket per car. Six horizontal bars grow, a
//               dashed guide marks the cars really washed; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center bottom;animation:${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// arrivals per hour, 9 h to 16 h; capacity = 3 bays x 60 / 25 minutes
const SAT = [6, 9, 12, 12, 11, 8, 6, 5];
const TUE = [2, 3, 3, 4, 3, 3, 2, 2];
const CAP = 7.2;

export function affluence(t, rtl) {
  const c = ctx(rtl); const P = 'lf'; const css = []; const H = 604;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const yb = 350, u = 13, bw = 44, gap = 14; const yc = yb - CAP * u;
  [[100, SAT, 0], [650, TUE, 1]].forEach(([x0, data, n]) => {
    const at0 = 6 + n * 30;
    s += `<g style="animation:${show(css, P, `t${n}`, at0 - 2)}">` + text(c, x0 - 20, 156, t.days[n], { size: 11.5, fill: n ? C.fg : C.accent, weight: 500 }) + line(c, x0 - 20, yb, x0 + 470, yb, { stroke: C.line2 }) + '</g>';
    data.forEach((v, i) => {
      const x = x0 + i * (bw + gap); const base = Math.min(v, CAP); const over = Math.max(0, v - CAP); const at = at0 + i * 2;
      s += `<g style="${growY(css, P, `b${n}${i}`, at, 2)}">` + rect(c, x, yb - base * u, bw, base * u, { stroke: C.fg70, fill: C.fill }) + '</g>';
      if (over) s += `<g style="animation:${show(css, P, `o${n}${i}`, at + 2.5)}">` + rect(c, x, yb - v * u, bw, over * u - 2, { stroke: C.accent, fill: TINT }) + '</g>';
      s += `<g style="animation:${show(css, P, `v${n}${i}`, at + 2.5)}">` + text(c, x + bw / 2, yb - v * u - 6, String(v), { size: 9.5, font: 'mono', fill: over ? C.accent : C.fg70, anchor: 'middle' }) + text(c, x + bw / 2, yb + 16, t.hours[i], { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
    });
    s += `<g style="animation:${show(css, P, `c${n}`, at0 + 18)}">` + line(c, x0 - 20, yc, x0 + 470, yc, { stroke: C.accent, dash: '5 5' }) + text(c, x0 + 470, yc - 6, t.cap, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'end' }) + '</g>';
  });
  const by = 384;
  s += `<g style="animation:${show(css, P, 'bd', 62)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: DARK }) + text(c, 96, by + 26, t.band[0], { size: 10.5, fill: C.accent }) + text(c, 1104, by + 26, t.band[1], { size: 10.5, fill: C.fg70, anchor: 'end' }) + '</g>';
  const ky = 444;
  s += tiles(c, css, P, ky, t.tiles, 68);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// the same day counted three ways, then with one ticket per car
const COUNTS = [39, 36, 44]; const REAL = 42;

export function tickets(t, rtl) {
  const c = ctx(rtl); const P = 'lt'; const css = []; const H = 606;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const x0 = 330, u = 520 / 44; const xr = x0 + REAL * u;
  s += `<g style="animation:${show(css, P, 'ga', 4)}">` + text(c, 80, 156, t.groupA, { size: 11.5, fill: C.fg, weight: 500 }) + '</g>';
  COUNTS.forEach((v, i) => {
    const y = 170 + i * 36; const at = 6 + i * 5; const r = t.rowsA[i];
    s += `<g style="animation:${show(css, P, `la${i}`, at)}">` + text(c, 80, y + 16, r.name, { size: 10.5, fill: C.fg70 }) + '</g>';
    s += `<g style="${growX(css, P, `a${i}`, at + 1, 3, rtl)}">` + rect(c, x0, y, v * u, 24, { stroke: C.fg55, fill: C.fill }) + '</g>';
    s += `<g style="animation:${show(css, P, `va${i}`, at + 4)}">` + text(c, x0 + Math.max(v, REAL) * u + 14, y + 16, r.v, { size: 10.5, font: 'mono', fill: C.fg, weight: 500 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'gd', 24)}">` + line(c, xr, 162, xr, 412, { stroke: C.accent, dash: '5 5' }) + text(c, xr, 426, t.guide, { size: 9, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'gb', 30)}">` + text(c, 80, 296, t.groupB, { size: 11.5, fill: C.accent, weight: 500 }) + '</g>';
  t.rowsB.forEach((r, i) => {
    const y = 308 + i * 36; const at = 32 + i * 5;
    s += `<g style="animation:${show(css, P, `lb${i}`, at)}">` + text(c, 80, y + 16, r.name, { size: 10.5, fill: C.fg }) + '</g>';
    s += `<g style="${growX(css, P, `b${i}`, at + 1, 3, rtl)}">` + rect(c, x0, y, REAL * u, 24, { stroke: C.accent, fill: TINT }) + '</g>';
    s += `<g style="animation:${show(css, P, `vb${i}`, at + 4)}">` + text(c, x0 + REAL * u + 14, y + 16, r.v, { size: 10.5, font: 'mono', fill: C.accent, weight: 500 }) + '</g>';
  });
  const ky = 446;
  s += tiles(c, css, P, ky, t.tiles, 54);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    affluence: {
      title: 'Le samedi déborde, le mardi est vide : la même station, deux journées',
      alt: 'Arrivées par heure dans une station de trois baies, de 9 h à 16 h, face à une capacité de 7,2 voitures par heure. Le samedi : 6, 9, 12, 12, 11, 8, 6 et 5 arrivées, soit 69 voitures pour 57,6 places dans la journée ; de 11 h à 14 h, 35 arrivées pour 21,6 places. Le mardi : 2, 3, 3, 4, 3, 3, 2 et 2 arrivées, soit 22 voitures, et 62 % de places vides.',
      header: 'Exemple construit · station de 3 baies, 25 minutes par voiture · capacité : 3 × 60 ÷ 25 = 7,2 voitures par heure',
      days: ['Samedi · arrivées par heure', 'Mardi · arrivées par heure'],
      hours: ['9 h', '10 h', '11 h', '12 h', '13 h', '14 h', '15 h', '16 h'],
      cap: 'capacité 7,2 par heure',
      band: ['Samedi : 69 arrivées pour 57,6 places · au moins 11 voitures de trop', 'Mardi : 22 arrivées pour 57,6 places · 62 % de places vides'],
      tiles: [
        { big: '3 × 60 ÷ 25 = 7,2', l1: 'voitures par heure, quoi qu’on fasse', l2: 'baies × 60 ÷ minutes par voiture' },
        { big: '35 pour 21,6', l1: 'arrivées de 11 h à 14 h le samedi', l2: 'la file s’allonge de plus de quatre voitures par heure', hot: true },
        { big: '62 % de places vides', l1: 'le mardi, sur la même station', l2: 'les mêmes laveurs, payés à attendre' },
      ],
      line1: 'Le samedi, le problème n’est pas la vitesse des laveurs : c’est que toute la ville arrive entre onze heures et quatorze heures.',
      line2: 'Un créneau réservé et une formule de semaine déplacent des voitures du samedi vers le mardi : c’est de la capacité sans baie de plus.',
      note: 'Exemple construit · arrivées et durée de lavage inventées ; remplacez-les par vos propres comptages.',
    },
    tickets: {
      title: 'Trois chiffres pour la même journée, puis un seul : le ticket par voiture',
      alt: 'La même journée de station comptée de trois façons : le cahier du chef indique 39 voitures, la caisse correspond à 36 voitures payées, les laveurs en déclarent 44. Avec un ticket par voiture, les trois comptes donnent 42 : 42 tickets ouverts, 42 tickets réglés dont 38 au comptant, 3 sur abonnement et 1 sur compte société, et 42 tickets répartis entre trois laveurs, 15, 14 et 13.',
      header: 'Exemple construit · une journée de station · 800 DA le lavage moyen, 200 DA par voiture au laveur · pas des prix de marché',
      groupA: 'Sans ticket : trois chiffres pour la même journée',
      rowsA: [{ name: 'Le cahier du chef', v: '39 voitures' }, { name: 'La caisse, en voitures payées', v: '36 voitures' }, { name: 'Les laveurs, à la déclaration', v: '44 voitures' }],
      guide: '42 voitures réellement lavées',
      groupB: 'Avec un ticket par voiture : un seul chiffre',
      rowsB: [{ name: 'Tickets ouverts à l’entrée', v: '42' }, { name: 'Tickets réglés', v: '38 + 3 + 1 = 42' }, { name: 'Tickets par laveur', v: '15 + 14 + 13 = 42' }],
      tiles: [
        { big: '39 · 36 · 44', l1: 'le cahier, la caisse, les laveurs', l2: 'trois chiffres, et aucune preuve' },
        { big: '6 × 800 = 4 800 DA', l1: 'six voitures lavées et non encaissées', l2: 'par jour, dans l’exemple', hot: true },
        { big: '1 ticket = 1 voiture', l1: 'une plaque, une formule, un laveur, un paiement', l2: 'ouvert à l’entrée, fermé à la sortie' },
      ],
      line1: 'Tant qu’on compte les voitures à trois endroits, on obtient trois chiffres ; le ticket n’en laisse qu’un.',
      line2: 'Le ticket ne surveille personne : il met le chef, la caisse et les laveurs d’accord avant la fin de la journée.',
      note: 'Exemple construit · quantités et montants inventés pour montrer le rapprochement, pas des prix de marché.',
    },
  },
  en: {
    affluence: {
      title: 'Saturday overflows, Tuesday is empty: the same station, two days',
      alt: 'Arrivals per hour at a three-bay station, from 9 a.m. to 4 p.m., against a capacity of 7.2 cars per hour. On Saturday: 6, 9, 12, 12, 11, 8, 6 and 5 arrivals, that is 69 cars for 57.6 places in the day; from 11 a.m. to 2 p.m., 35 arrivals for 21.6 places. On Tuesday: 2, 3, 3, 4, 3, 3, 2 and 2 arrivals, that is 22 cars, and 62 % of places empty.',
      header: 'Constructed example · 3-bay station, 25 minutes per car · capacity: 3 × 60 ÷ 25 = 7.2 cars per hour',
      days: ['Saturday · arrivals per hour', 'Tuesday · arrivals per hour'],
      hours: ['9', '10', '11', '12', '13', '14', '15', '16'],
      cap: 'capacity 7.2 per hour',
      band: ['Saturday: 69 arrivals for 57.6 places · at least 11 cars too many', 'Tuesday: 22 arrivals for 57.6 places · 62 % of places empty'],
      tiles: [
        { big: '3 × 60 ÷ 25 = 7.2', l1: 'cars per hour, whatever you do', l2: 'bays × 60 ÷ minutes per car' },
        { big: '35 for 21.6', l1: 'arrivals from 11 a.m. to 2 p.m. on Saturday', l2: 'the queue grows by more than four cars an hour', hot: true },
        { big: '62 % of places empty', l1: 'on Tuesday, at the same station', l2: 'the same washers, paid to wait' },
      ],
      line1: 'On Saturday the problem is not how fast the washers are: it is that the whole town arrives between eleven and two.',
      line2: 'A booked slot and a weekday offer move cars from Saturday to Tuesday: that is capacity without one more bay.',
      note: 'Constructed example · invented arrivals and washing time; replace them with your own counts.',
    },
    tickets: {
      title: 'Three figures for the same day, then one: the ticket per car',
      alt: 'The same station day counted three ways: the supervisor’s notebook shows 39 cars, the till matches 36 paid cars, the washers declare 44. With one ticket per car, the three counts give 42: 42 tickets opened, 42 tickets settled of which 38 in cash, 3 on subscription and 1 on a company account, and 42 tickets shared between three washers, 15, 14 and 13.',
      header: 'Constructed example · one station day · 800 DZD average wash, 200 DZD per car to the washer · not market prices',
      groupA: 'Without tickets: three figures for the same day',
      rowsA: [{ name: 'The supervisor’s notebook', v: '39 cars' }, { name: 'The till, in paid cars', v: '36 cars' }, { name: 'The washers, as declared', v: '44 cars' }],
      guide: '42 cars really washed',
      groupB: 'With one ticket per car: a single figure',
      rowsB: [{ name: 'Tickets opened at entry', v: '42' }, { name: 'Tickets settled', v: '38 + 3 + 1 = 42' }, { name: 'Tickets per washer', v: '15 + 14 + 13 = 42' }],
      tiles: [
        { big: '39 · 36 · 44', l1: 'the notebook, the till, the washers', l2: 'three figures, and no proof' },
        { big: '6 × 800 = 4,800 DZD', l1: 'six cars washed and not cashed', l2: 'per day, in the example', hot: true },
        { big: '1 ticket = 1 car', l1: 'one plate, one package, one washer, one payment', l2: 'opened at entry, closed at exit' },
      ],
      line1: 'As long as cars are counted in three places, you get three figures; the ticket leaves only one.',
      line2: 'The ticket watches nobody: it gets the supervisor, the till and the washers to agree before the day ends.',
      note: 'Constructed example · quantities and amounts invented to show the reconciliation, not market prices.',
    },
  },
  ar: {
    affluence: {
      title: 'السبت يفيض والثلاثاء فارغ: المحطة نفسها، يومان',
      alt: 'الوافدون في الساعة إلى محطة من ثلاثة أروقة، من التاسعة إلى الرابعة، مقابل طاقة 7,2 سيارة في الساعة. يوم السبت: 6 و9 و12 و12 و11 و8 و6 و5، أي 69 سيارة مقابل 57,6 مكاناً في اليوم؛ ومن الحادية عشرة إلى الثانية، 35 وافداً مقابل 21,6 مكاناً. يوم الثلاثاء: 2 و3 و3 و4 و3 و3 و2 و2، أي 22 سيارة، و62 بالمئة من الأماكن فارغة.',
      header: `مثال مركَّب · محطة من 3 أروقة، 25 دقيقة للسيارة · الطاقة: ${I('3 × 60 ÷ 25 = 7,2')} سيارة في الساعة`,
      days: ['السبت · الوافدون في الساعة', 'الثلاثاء · الوافدون في الساعة'],
      hours: ['9', '10', '11', '12', '13', '14', '15', '16'],
      cap: 'الطاقة 7,2 في الساعة',
      band: ['السبت: 69 وافداً مقابل 57,6 مكاناً · 11 سيارة زائدة على الأقل', 'الثلاثاء: 22 وافداً مقابل 57,6 مكاناً · 62 % أماكن فارغة'],
      tiles: [
        { big: I('3 × 60 ÷ 25 = 7,2'), l1: 'سيارة في الساعة، مهما فعلنا', l2: 'الأروقة × 60 ÷ الدقائق لكل سيارة' },
        { big: '35 مقابل 21,6', l1: 'وافدون من 11 إلى 14 يوم السبت', l2: 'الطابور يزيد بأكثر من أربع سيارات في الساعة', hot: true },
        { big: '62 % أماكن فارغة', l1: 'يوم الثلاثاء، في المحطة نفسها', l2: 'الغسّالون أنفسهم، يُدفع لهم لينتظروا' },
      ],
      line1: 'يوم السبت، المشكلة ليست سرعة الغسّالين: بل أن المدينة كلها تأتي بين الحادية عشرة والثانية.',
      line2: 'موعد محجوز وعرض لأيام الأسبوع ينقلان سيارات من السبت إلى الثلاثاء: وهذه طاقة دون رواق إضافي.',
      note: 'مثال مركَّب · الوافدون ومدة الغسل مخترَعان؛ عوّضوهما بعدّكم أنتم.',
    },
    tickets: {
      title: 'ثلاثة أرقام لليوم نفسه، ثم رقم واحد: التذكرة لكل سيارة',
      alt: 'يوم المحطة نفسه محسوباً بثلاث طرق: كرّاس المسؤول يبيّن 39 سيارة، الصندوق يوافق 36 سيارة مدفوعة، والغسّالون يصرّحون بـ 44. وبتذكرة لكل سيارة، تعطي الحسابات الثلاثة 42: 42 تذكرة مفتوحة، 42 تذكرة مسدَّدة منها 38 نقداً و3 باشتراك و1 على حساب شركة، و42 تذكرة موزَّعة على ثلاثة غسّالين، 15 و14 و13.',
      header: `مثال مركَّب · يوم واحد في المحطة · 800 دج متوسط الغسل، و200 دج للغسّال عن كل سيارة · ليست أسعار السوق`,
      groupA: 'دون تذكرة: ثلاثة أرقام لليوم نفسه',
      rowsA: [{ name: 'كرّاس المسؤول', v: '39 سيارة' }, { name: 'الصندوق، بالسيارات المدفوعة', v: '36 سيارة' }, { name: 'الغسّالون، بالتصريح', v: '44 سيارة' }],
      guide: '42 سيارة غُسلت فعلاً',
      groupB: 'بتذكرة لكل سيارة: رقم واحد',
      rowsB: [{ name: 'التذاكر المفتوحة عند الدخول', v: '42' }, { name: 'التذاكر المسدَّدة', v: I('38 + 3 + 1 = 42') }, { name: 'التذاكر لكل غسّال', v: I('15 + 14 + 13 = 42') }],
      tiles: [
        { big: I('39 · 36 · 44'), l1: 'الكرّاس، الصندوق، الغسّالون', l2: 'ثلاثة أرقام، ولا دليل' },
        { big: `${I('6 × 800 = 4 800')} دج`, l1: 'ست سيارات غُسلت ولم تُقبَض', l2: 'في اليوم، في المثال', hot: true },
        { big: 'تذكرة = سيارة', l1: 'لوحة، صيغة، غسّال، ودفع', l2: 'تُفتح عند الدخول، وتُغلق عند الخروج' },
      ],
      line1: 'ما دامت السيارات تُعدّ في ثلاثة أماكن، نحصل على ثلاثة أرقام؛ والتذكرة لا تترك إلا واحداً.',
      line2: 'التذكرة لا تراقب أحداً: تجعل المسؤول والصندوق والغسّالين متفقين قبل نهاية اليوم.',
      note: 'مثال مركَّب · الكميات والمبالغ مخترَعة لبيان المطابقة، وليست أسعار السوق.',
    },
  },
};
