// Sourced figures: mobile, internet and fixed-line subscribers in Algeria, from the telecom
// regulator ARPCE (Autorité de Régulation de la Poste et des Communications Electroniques).
//
// Source: ARPCE quarterly observatories for the 2nd quarter of 2026 (end of June 2026), read on
// https://www.arpce.dz/fr/indic/mobile, /fr/indic/internet and /fr/indic/fixe (PDF files
// /fr/file/j9p5v9, /fr/file/s2t1t9, /fr/file/w9m4l5) on the date in VERIFIED_ON. Every figure
// below is copied from those documents; nothing is estimated. Operator names as ARPCE writes them.
// Revenue per user and tariffs are not reported here.

export const VERIFIED_ON = '2026-11-26';
export const QUARTER = { fr: '2e trimestre 2026 (fin juin 2026)', en: '2nd quarter of 2026 (end of June 2026)', ar: 'الثلاثي الثاني من 2026 (نهاية جوان 2026)' };
export const SOURCES = {
  mobile: 'https://www.arpce.dz/fr/indic/mobile',
  internet: 'https://www.arpce.dz/fr/indic/internet',
  fixed: 'https://www.arpce.dz/fr/indic/fixe',
};

export const FIG = {
  mobile: {
    total: 56758292, prevQuarter: 56599303, yearAgo: 54874360, growthYear: '3,43',
    operators: { Mobilis: 23157898, Djezzy: 18027639, Ooredoo: 15572755 },
    yearAgoOperators: { Mobilis: 23280698, Djezzy: 17361131, Ooredoo: 14232531 },
    share: { Mobilis: '40,80', Djezzy: '31,76', Ooredoo: '27,44' },
    tech: { gsm: 2013463, g3: 3110522, g45: 51634307, gsmPct: '3,55', g3Pct: '5,48', g45Pct: '90,97' },
    g45ByOperator: { Mobilis: '86,28', Djezzy: '94,38', Ooredoo: '93,99' },
    prepaidPct: '95,70', postpaidPct: '4,30',
  },
  internet: {
    total: 61714396, fixed: 6969567, mobile: 54744829, mobilePct: '88,71', fixedPct: '11,29',
    yearAgo: '59,10', growthYear: '4,42',
    fixedTech: { ftth: 3582568, lte: 2138576, adsl: 1243933, ls: 4490 },
    mobileUsers: 44143640,
    dataTrafficGB: 2100391421, dataTrafficPrevGB: '1 714', dataGrowth: '22,51',
    bandwidthPeakGbps: 7030, bandwidthYearAgoGbps: 5390,
    m2m: { total: 351552, Mobilis: 156486, Djezzy: 56508, Ooredoo: 138558 },
  },
  fixed: { total: 7755797, residentialPct: '92,81', professionalPct: '7,19', copper: 2007885, lte: 2138576, ftth: 3595580, ls: 13756 },
};

const n = (v) => v.toLocaleString('fr-FR').replace(/ /g, ' ');
const M = FIG.mobile;
const I = FIG.internet;

export const OPERATORS = [
  { name: 'Mobilis', by: 'Algérie Télécom Mobile (ATM)', url: SOURCES.mobile, focus: 'mobile', services: [],
    note: { fr: `${n(M.operators.Mobilis)} abonnés mobiles, soit ${M.share.Mobilis} % du marché ; ${M.g45ByOperator.Mobilis} % de ses abonnés sur les réseaux 4G/5G ; ${n(I.m2m.Mobilis)} cartes SIM M2M (objets connectés). Un an plus tôt : ${n(M.yearAgoOperators.Mobilis)} abonnés.`, en: `${n(M.operators.Mobilis)} mobile subscribers, a ${M.share.Mobilis.replace(',', '.')}% market share; ${M.g45ByOperator.Mobilis.replace(',', '.')}% of its subscribers on 4G/5G; ${n(I.m2m.Mobilis)} M2M SIM cards (connected devices). A year earlier: ${n(M.yearAgoOperators.Mobilis)} subscribers.`, ar: `${n(M.operators.Mobilis)} مشترك في الهاتف النقال، أي ${M.share.Mobilis} % من السوق؛ ${M.g45ByOperator.Mobilis} % من مشتركيه على شبكات 4G/5G؛ ${n(I.m2m.Mobilis)} شريحة M2M (أجهزة متصلة). قبل سنة: ${n(M.yearAgoOperators.Mobilis)} مشترك.` } },
  { name: 'Djezzy', by: 'Optimum Télécom Algérie (OTA)', url: SOURCES.mobile, focus: 'mobile', services: [],
    note: { fr: `${n(M.operators.Djezzy)} abonnés mobiles, soit ${M.share.Djezzy} % du marché ; ${M.g45ByOperator.Djezzy} % de ses abonnés sur les réseaux 4G/5G ; ${n(I.m2m.Djezzy)} cartes SIM M2M. Un an plus tôt : ${n(M.yearAgoOperators.Djezzy)} abonnés.`, en: `${n(M.operators.Djezzy)} mobile subscribers, a ${M.share.Djezzy.replace(',', '.')}% market share; ${M.g45ByOperator.Djezzy.replace(',', '.')}% of its subscribers on 4G/5G; ${n(I.m2m.Djezzy)} M2M SIM cards. A year earlier: ${n(M.yearAgoOperators.Djezzy)} subscribers.`, ar: `${n(M.operators.Djezzy)} مشترك في الهاتف النقال، أي ${M.share.Djezzy} % من السوق؛ ${M.g45ByOperator.Djezzy} % من مشتركيه على شبكات 4G/5G؛ ${n(I.m2m.Djezzy)} شريحة M2M. قبل سنة: ${n(M.yearAgoOperators.Djezzy)} مشترك.` } },
  { name: 'Ooredoo', by: 'Wataniya Télécom Algérie (WTA)', url: SOURCES.mobile, focus: 'mobile', services: [],
    note: { fr: `${n(M.operators.Ooredoo)} abonnés mobiles, soit ${M.share.Ooredoo} % du marché ; ${M.g45ByOperator.Ooredoo} % de ses abonnés sur les réseaux 4G/5G ; ${n(I.m2m.Ooredoo)} cartes SIM M2M. Un an plus tôt : ${n(M.yearAgoOperators.Ooredoo)} abonnés.`, en: `${n(M.operators.Ooredoo)} mobile subscribers, a ${M.share.Ooredoo.replace(',', '.')}% market share; ${M.g45ByOperator.Ooredoo.replace(',', '.')}% of its subscribers on 4G/5G; ${n(I.m2m.Ooredoo)} M2M SIM cards. A year earlier: ${n(M.yearAgoOperators.Ooredoo)} subscribers.`, ar: `${n(M.operators.Ooredoo)} مشترك في الهاتف النقال، أي ${M.share.Ooredoo} % من السوق؛ ${M.g45ByOperator.Ooredoo} % من مشتركيه على شبكات 4G/5G؛ ${n(I.m2m.Ooredoo)} شريحة M2M. قبل سنة: ${n(M.yearAgoOperators.Ooredoo)} مشترك.` } },
  { name: 'Algérie Télécom', url: SOURCES.fixed, focus: 'fixed', services: [],
    note: { fr: `${n(FIG.fixed.total)} abonnés à la téléphonie fixe, dont ${n(FIG.fixed.ftth)} en fibre (FTTH), ${n(FIG.fixed.lte)} en 4G LTE fixe et ${n(FIG.fixed.copper)} en filaire ; ${n(I.fixed)} abonnés à l’internet fixe.`, en: `${n(FIG.fixed.total)} fixed-line subscribers, including ${n(FIG.fixed.ftth)} on fibre (FTTH), ${n(FIG.fixed.lte)} on fixed 4G LTE and ${n(FIG.fixed.copper)} on copper; ${n(I.fixed)} fixed internet subscribers.`, ar: `${n(FIG.fixed.total)} مشترك في الهاتف الثابت، منهم ${n(FIG.fixed.ftth)} بالألياف البصرية (FTTH)، ${n(FIG.fixed.lte)} بـ 4G LTE الثابت و ${n(FIG.fixed.copper)} بالسلكي؛ و ${n(I.fixed)} مشترك في الإنترنت الثابت.` } },
];
