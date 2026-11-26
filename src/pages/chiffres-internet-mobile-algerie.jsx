// /chiffres-internet-mobile-algerie/ — sourced figures page: mobile, internet and fixed-line
// subscribers in Algeria from the ARPCE quarterly observatories (FR / EN / AR).
// Data: src/data/sources/algeria-telecom-figures.js. Figures copied from ARPCE, nothing estimated.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { OPERATORS, FIG, QUARTER, VERIFIED_ON } from '../data/sources/algeria-telecom-figures';

const M = FIG.mobile;
const I = FIG.internet;
const F = FIG.fixed;
const fr = (v) => v.toLocaleString('fr-FR').replace(/ /g, ' ');
const en = (v) => v.toLocaleString('en-GB');
const dot = (s) => s.replace(',', '.');
const mil = (v, L) => (L === 'en' ? (v / 1e6).toFixed(2) : (v / 1e6).toFixed(2).replace('.', ','));

const KIND_LABELS = {
  fr: { mobile: 'Opérateurs mobiles', fixed: 'Opérateur fixe' },
  en: { mobile: 'Mobile operators', fixed: 'Fixed-line operator' },
  ar: { mobile: 'متعاملو الهاتف النقال', fixed: 'متعامل الهاتف الثابت' },
};
const SELECTION = {
  fr: 'Chaque chiffre de cette page est recopié des observatoires trimestriels de l’ARPCE pour le 2e trimestre 2026 ; rien n’est estimé. Le lien de chaque opérateur mène au document de l’ARPCE.',
  en: 'Every figure on this page is copied from ARPCE’s quarterly observatories for the 2nd quarter of 2026; nothing is estimated. Each operator’s link leads to the ARPCE document.',
  ar: 'كل رقم في هذه الصفحة منقول من المراصد الفصلية لسلطة الضبط ARPCE للثلاثي الثاني من 2026؛ ولا شيء مقدّر. ورابط كل متعامل يؤدي إلى وثيقة ARPCE.',
};

const CONTENT = {
  fr: {
    title: 'Chiffres d’internet et du mobile en Algérie 2027 : abonnés par opérateur selon l’ARPCE',
    seoTitle: 'Nombre d’abonnés mobile et internet en Algérie : Mobilis, Djezzy, Ooredoo (ARPCE)',
    seoDescription: `Selon l’ARPCE, l’Algérie compte ${fr(M.total)} abonnés mobiles et ${fr(I.total)} abonnés à internet à fin juin 2026 : Mobilis ${fr(M.operators.Mobilis)} (${M.share.Mobilis} %), Djezzy ${fr(M.operators.Djezzy)} (${M.share.Djezzy} %), Ooredoo ${fr(M.operators.Ooredoo)} (${M.share.Ooredoo} %). Fibre, 4G, M2M, trafic.`,
    keywords: 'nombre d’abonnés mobilis, nombre d’abonnés djezzy, nombre d’abonnés ooredoo, nombre d’abonnés internet algérie, parts de marché opérateurs algérie, statistiques internet algérie 2026, abonnés fibre ftth algérie, arpce observatoire',
    colCompany: 'Opérateur', colDoes: 'Marché', colFact: `Chiffres de l’ARPCE, ${QUARTER.fr}`, countLabel: 'opérateurs',
    lead: `Selon l’ARPCE, l’Algérie comptait ${fr(M.total)} abonnés à la téléphonie mobile et ${fr(I.total)} abonnés à internet à fin juin 2026. Mobilis en compte ${fr(M.operators.Mobilis)} (${M.share.Mobilis} % du marché mobile), Djezzy ${fr(M.operators.Djezzy)} (${M.share.Djezzy} %) et Ooredoo ${fr(M.operators.Ooredoo)} (${M.share.Ooredoo} %) ; ${I.mobilePct} % des abonnés à internet se connectent par le mobile.`,
    byService: [],
    method: [
      'Les chiffres viennent des trois observatoires trimestriels publiés par l’ARPCE, l’autorité de régulation des communications électroniques : marché de la téléphonie mobile, marché de l’internet et marché de la téléphonie fixe, pour le 2e trimestre 2026. Ils ont été lus le 26 novembre 2026.',
      'Nous recopions les chiffres tels que publiés, sans calcul ni estimation, à l’exception des arrondis en millions indiqués comme tels. Nous ne reprenons ni tarifs ni revenus par abonné.',
    ],
    limits: [
      'Un abonné n’est pas une personne : une même personne peut avoir plusieurs cartes SIM. L’ARPCE publie aussi un nombre d’utilisateurs de l’internet mobile, plus bas que le nombre d’abonnés.',
      'Les chiffres sont trimestriels ; la page sera mise à jour à la publication du trimestre suivant. Le nombre d’abonnés FTTH diffère légèrement entre l’observatoire de l’internet et celui de la téléphonie fixe, tel que publié.',
    ],
    fix: 'Un chiffre est mal recopié ? Écrivez-nous avec la page de l’observatoire concernée, nous corrigeons :',
    faq: [
      ['Combien d’abonnés compte Mobilis ?', `${fr(M.operators.Mobilis)} abonnés mobiles à fin juin 2026 selon l’ARPCE, soit ${M.share.Mobilis} % du marché. Un an plus tôt, l’ARPCE en comptait ${fr(M.yearAgoOperators.Mobilis)}.`],
      ['Combien d’abonnés compte Djezzy ?', `${fr(M.operators.Djezzy)} abonnés mobiles à fin juin 2026 selon l’ARPCE, soit ${M.share.Djezzy} % du marché, contre ${fr(M.yearAgoOperators.Djezzy)} un an plus tôt.`],
      ['Combien d’abonnés compte Ooredoo Algérie ?', `${fr(M.operators.Ooredoo)} abonnés mobiles à fin juin 2026 selon l’ARPCE, soit ${M.share.Ooredoo} % du marché, contre ${fr(M.yearAgoOperators.Ooredoo)} un an plus tôt.`],
      ['Combien y a-t-il d’abonnés au mobile en Algérie ?', `${fr(M.total)} à fin juin 2026, en hausse de ${M.growthYear} % en un an (${fr(M.yearAgo)} à fin juin 2025). ${M.prepaidPct} % sont en prépayé.`],
      ['Combien y a-t-il d’abonnés à internet en Algérie ?', `${fr(I.total)} à fin juin 2026 : ${fr(I.mobile)} par le mobile (${I.mobilePct} %) et ${fr(I.fixed)} par le fixe (${I.fixedPct} %). Le parc a augmenté de ${I.growthYear} % en un an. L’ARPCE compte aussi ${fr(I.mobileUsers)} utilisateurs actifs de l’internet mobile.`],
      ['Quelle part des abonnés est en 4G ou 5G ?', `${M.tech.g45Pct} % des abonnés mobiles (${fr(M.tech.g45)}), contre ${M.tech.g3Pct} % en 3G et ${M.tech.gsmPct} % en GSM seul. Par opérateur : Mobilis ${M.g45ByOperator.Mobilis} %, Djezzy ${M.g45ByOperator.Djezzy} %, Ooredoo ${M.g45ByOperator.Ooredoo} %.`],
      ['Combien d’abonnés à la fibre (FTTH) en Algérie ?', `${fr(I.fixedTech.ftth)} abonnés à l’internet par la fibre FTTH selon l’observatoire de l’internet, devant la 4G LTE fixe (${fr(I.fixedTech.lte)}) et l’ADSL (${fr(I.fixedTech.adsl)}). L’observatoire de la téléphonie fixe compte ${fr(F.ftth)} abonnés fibre.`],
      ['Combien d’abonnés à la téléphonie fixe ?', `${fr(F.total)} à fin juin 2026, dont ${F.residentialPct} % de particuliers et ${F.professionalPct} % de professionnels.`],
      ['Combien de cartes SIM pour objets connectés (M2M) ?', `${fr(I.m2m.total)} : Mobilis ${fr(I.m2m.Mobilis)}, Ooredoo ${fr(I.m2m.Ooredoo)} et Djezzy ${fr(I.m2m.Djezzy)}, selon les opérateurs cités par l’ARPCE.`],
      ['Quel volume de données est consommé ?', `${fr(I.dataTrafficGB)} Go de données mobiles au 2e trimestre 2026, contre ${I.dataTrafficPrevGB} millions de Go au trimestre précédent (+${I.dataGrowth} %). Le pic de bande passante consommée atteint ${fr(I.bandwidthPeakGbps)} Gbps, contre ${fr(I.bandwidthYearAgoGbps)} un an plus tôt.`],
      ['Qu’est-ce que cela change pour une application ou un site en Algérie ?', `Avec ${I.mobilePct} % des abonnés à internet sur le mobile et ${M.tech.g45Pct} % des abonnés mobiles en 4G/5G, une application ou un site pour le public algérien doit d’abord fonctionner sur un téléphone. Symloop, qui publie cette page, conçoit ses applications et ses sites d’abord pour le mobile.`],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Fournisseurs d’accès internet en Algérie', '/fournisseurs-internet-algerie/'], ['Nom de domaine .dz : les chiffres du registre', '/nom-de-domaine-dz/'], ['Data centers en Algérie', '/data-centers-algerie/']],
  },
  en: {
    title: 'Internet and mobile figures in Algeria 2027: subscribers by operator according to ARPCE',
    seoTitle: 'Mobile and internet subscribers in Algeria: Mobilis, Djezzy, Ooredoo (ARPCE)',
    seoDescription: `According to ARPCE, Algeria has ${en(M.total)} mobile subscribers and ${en(I.total)} internet subscribers at end of June 2026: Mobilis ${en(M.operators.Mobilis)} (${dot(M.share.Mobilis)}%), Djezzy ${en(M.operators.Djezzy)} (${dot(M.share.Djezzy)}%), Ooredoo ${en(M.operators.Ooredoo)} (${dot(M.share.Ooredoo)}%). Fibre, 4G, M2M, traffic.`,
    keywords: 'mobilis subscribers, djezzy subscribers, ooredoo algeria subscribers, internet subscribers algeria, algeria mobile market share, algeria internet statistics 2026, arpce',
    colCompany: 'Operator', colDoes: 'Market', colFact: `ARPCE figures, ${QUARTER.en}`, countLabel: 'operators',
    lead: `According to ARPCE, Algeria had ${en(M.total)} mobile subscribers and ${en(I.total)} internet subscribers at the end of June 2026. Mobilis has ${en(M.operators.Mobilis)} (${dot(M.share.Mobilis)}% of the mobile market), Djezzy ${en(M.operators.Djezzy)} (${dot(M.share.Djezzy)}%) and Ooredoo ${en(M.operators.Ooredoo)} (${dot(M.share.Ooredoo)}%); ${dot(I.mobilePct)}% of internet subscribers connect through mobile.`,
    byService: [],
    method: [
      'The figures come from the three quarterly observatories published by ARPCE, the electronic communications regulator: mobile telephony market, internet market and fixed telephony market, for the 2nd quarter of 2026. They were read on 26 November 2026.',
      'We copy the figures as published, with no calculation or estimate, except roundings to millions shown as such. We report no tariffs or revenue per subscriber.',
    ],
    limits: [
      'A subscriber is not a person: one person can hold several SIM cards. ARPCE also publishes a number of mobile internet users, lower than the number of subscribers.',
      'The figures are quarterly; the page will be updated when the next quarter is published. The FTTH count differs slightly between the internet and fixed telephony observatories, as published.',
    ],
    fix: 'A figure is miscopied? Write to us with the observatory page concerned, and we correct it:',
    faq: [
      ['How many subscribers does Mobilis have?', `${en(M.operators.Mobilis)} mobile subscribers at end of June 2026 according to ARPCE, a ${dot(M.share.Mobilis)}% market share. A year earlier ARPCE counted ${en(M.yearAgoOperators.Mobilis)}.`],
      ['How many subscribers does Djezzy have?', `${en(M.operators.Djezzy)} mobile subscribers at end of June 2026 according to ARPCE, a ${dot(M.share.Djezzy)}% market share, against ${en(M.yearAgoOperators.Djezzy)} a year earlier.`],
      ['How many subscribers does Ooredoo Algeria have?', `${en(M.operators.Ooredoo)} mobile subscribers at end of June 2026 according to ARPCE, a ${dot(M.share.Ooredoo)}% market share, against ${en(M.yearAgoOperators.Ooredoo)} a year earlier.`],
      ['How many mobile subscribers are there in Algeria?', `${en(M.total)} at end of June 2026, up ${dot(M.growthYear)}% in a year (${en(M.yearAgo)} at end of June 2025). ${dot(M.prepaidPct)}% are prepaid.`],
      ['How many internet subscribers are there in Algeria?', `${en(I.total)} at end of June 2026: ${en(I.mobile)} through mobile (${dot(I.mobilePct)}%) and ${en(I.fixed)} through fixed lines (${dot(I.fixedPct)}%). The base grew ${dot(I.growthYear)}% in a year. ARPCE also counts ${en(I.mobileUsers)} active mobile internet users.`],
      ['What share of subscribers is on 4G or 5G?', `${dot(M.tech.g45Pct)}% of mobile subscribers (${en(M.tech.g45)}), against ${dot(M.tech.g3Pct)}% on 3G and ${dot(M.tech.gsmPct)}% on GSM only. By operator: Mobilis ${dot(M.g45ByOperator.Mobilis)}%, Djezzy ${dot(M.g45ByOperator.Djezzy)}%, Ooredoo ${dot(M.g45ByOperator.Ooredoo)}%.`],
      ['How many fibre (FTTH) subscribers are there in Algeria?', `${en(I.fixedTech.ftth)} FTTH internet subscribers according to the internet observatory, ahead of fixed 4G LTE (${en(I.fixedTech.lte)}) and ADSL (${en(I.fixedTech.adsl)}). The fixed telephony observatory counts ${en(F.ftth)} fibre subscribers.`],
      ['How many fixed-line subscribers?', `${en(F.total)} at end of June 2026, ${dot(F.residentialPct)}% residential and ${dot(F.professionalPct)}% professional.`],
      ['How many SIM cards for connected devices (M2M)?', `${en(I.m2m.total)}: Mobilis ${en(I.m2m.Mobilis)}, Ooredoo ${en(I.m2m.Ooredoo)} and Djezzy ${en(I.m2m.Djezzy)}, per the operators as cited by ARPCE.`],
      ['How much data is consumed?', `${en(I.dataTrafficGB)} GB of mobile data in the 2nd quarter of 2026, against ${I.dataTrafficPrevGB.replace(' ', ',')} million GB the previous quarter (+${dot(I.dataGrowth)}%). Peak bandwidth consumed reached ${en(I.bandwidthPeakGbps)} Gbps, against ${en(I.bandwidthYearAgoGbps)} a year earlier.`],
      ['What does this change for an app or a site in Algeria?', `With ${dot(I.mobilePct)}% of internet subscribers on mobile and ${dot(M.tech.g45Pct)}% of mobile subscribers on 4G/5G, an app or site for the Algerian public must work on a phone first. Symloop, which publishes this page, designs its apps and sites mobile first.`],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Internet providers in Algeria', '/fournisseurs-internet-algerie/'], ['.dz domain names: the registry’s figures', '/nom-de-domaine-dz/'], ['Data centers in Algeria', '/data-centers-algerie/']],
  },
  ar: {
    title: 'أرقام الإنترنت والهاتف النقال في الجزائر 2027: المشتركون حسب المتعامل وفق ARPCE',
    seoTitle: 'عدد مشتركي الهاتف النقال والإنترنت في الجزائر: موبيليس، جازي، أوريدو (ARPCE)',
    seoDescription: `حسب سلطة الضبط ARPCE، تضم الجزائر ${fr(M.total)} مشترك في الهاتف النقال و ${fr(I.total)} مشترك في الإنترنت نهاية جوان 2026: موبيليس ${fr(M.operators.Mobilis)} (${M.share.Mobilis} %)، جازي ${fr(M.operators.Djezzy)} (${M.share.Djezzy} %)، أوريدو ${fr(M.operators.Ooredoo)} (${M.share.Ooredoo} %).`,
    keywords: 'عدد مشتركي موبيليس, عدد مشتركي جازي, عدد مشتركي أوريدو, عدد مشتركي الإنترنت في الجزائر, حصص سوق المتعاملين الجزائر, إحصائيات الإنترنت الجزائر 2026, ARPCE',
    colCompany: 'المتعامل', colDoes: 'السوق', colFact: `أرقام ARPCE، ${QUARTER.ar}`, countLabel: 'متعاملين',
    lead: `حسب سلطة الضبط ARPCE، كانت الجزائر تضم ${fr(M.total)} مشترك في الهاتف النقال و ${fr(I.total)} مشترك في الإنترنت نهاية جوان 2026. لموبيليس ${fr(M.operators.Mobilis)} مشترك (${M.share.Mobilis} % من سوق النقال)، ولجازي ${fr(M.operators.Djezzy)} (${M.share.Djezzy} %)، ولأوريدو ${fr(M.operators.Ooredoo)} (${M.share.Ooredoo} %)؛ و ${I.mobilePct} % من مشتركي الإنترنت يتصلون عبر الهاتف النقال.`,
    byService: [],
    method: [
      'الأرقام من المراصد الفصلية الثلاثة التي تنشرها سلطة ضبط البريد والاتصالات الإلكترونية ARPCE: سوق الهاتف النقال، سوق الإنترنت وسوق الهاتف الثابت، للثلاثي الثاني من 2026. وقُرئت في 26 نوفمبر 2026.',
      'ننقل الأرقام كما نُشرت، دون حساب ولا تقدير، باستثناء التقريب إلى الملايين المذكور كذلك. ولا ننقل الأسعار ولا الإيرادات لكل مشترك.',
    ],
    limits: [
      'المشترك ليس شخصاً: يمكن لشخص واحد أن يملك عدة شرائح. وتنشر ARPCE أيضاً عدد مستخدمي الإنترنت النقال، وهو أقل من عدد المشتركين.',
      'الأرقام فصلية؛ وستُحدَّث الصفحة عند نشر الثلاثي الموالي. ويختلف عدد مشتركي FTTH قليلاً بين مرصد الإنترنت ومرصد الهاتف الثابت، كما نُشر.',
    ],
    fix: 'رقم منقول خطأ؟ راسلونا مع صفحة المرصد المعني، ونصحّح:',
    faq: [
      ['كم عدد مشتركي موبيليس؟', `${fr(M.operators.Mobilis)} مشترك في الهاتف النقال نهاية جوان 2026 حسب ARPCE، أي ${M.share.Mobilis} % من السوق. وقبل سنة أحصت ARPCE ‏${fr(M.yearAgoOperators.Mobilis)}.`],
      ['كم عدد مشتركي جازي؟', `${fr(M.operators.Djezzy)} مشترك نهاية جوان 2026 حسب ARPCE، أي ${M.share.Djezzy} % من السوق، مقابل ${fr(M.yearAgoOperators.Djezzy)} قبل سنة.`],
      ['كم عدد مشتركي أوريدو الجزائر؟', `${fr(M.operators.Ooredoo)} مشترك نهاية جوان 2026 حسب ARPCE، أي ${M.share.Ooredoo} % من السوق، مقابل ${fr(M.yearAgoOperators.Ooredoo)} قبل سنة.`],
      ['كم عدد مشتركي الهاتف النقال في الجزائر؟', `${fr(M.total)} نهاية جوان 2026، بارتفاع ${M.growthYear} % في سنة (${fr(M.yearAgo)} نهاية جوان 2025). و ${M.prepaidPct} % منهم بالدفع المسبق.`],
      ['كم عدد مشتركي الإنترنت في الجزائر؟', `${fr(I.total)} نهاية جوان 2026: ${fr(I.mobile)} عبر النقال (${I.mobilePct} %) و ${fr(I.fixed)} عبر الثابت (${I.fixedPct} %). وارتفع العدد بـ ${I.growthYear} % في سنة. وتحصي ARPCE أيضاً ${fr(I.mobileUsers)} مستخدماً نشطاً للإنترنت النقال.`],
      ['ما نسبة المشتركين في 4G أو 5G؟', `${M.tech.g45Pct} % من مشتركي النقال (${fr(M.tech.g45)})، مقابل ${M.tech.g3Pct} % في 3G و ${M.tech.gsmPct} % في GSM فقط. حسب المتعامل: موبيليس ${M.g45ByOperator.Mobilis} %، جازي ${M.g45ByOperator.Djezzy} %، أوريدو ${M.g45ByOperator.Ooredoo} %.`],
      ['كم عدد مشتركي الألياف البصرية (FTTH) في الجزائر؟', `${fr(I.fixedTech.ftth)} مشترك في الإنترنت بالألياف FTTH حسب مرصد الإنترنت، قبل 4G LTE الثابت (${fr(I.fixedTech.lte)}) و ADSL ‏(${fr(I.fixedTech.adsl)}). ويحصي مرصد الهاتف الثابت ${fr(F.ftth)} مشتركاً بالألياف.`],
      ['كم عدد مشتركي الهاتف الثابت؟', `${fr(F.total)} نهاية جوان 2026، منهم ${F.residentialPct} % أفراد و ${F.professionalPct} % مهنيون.`],
      ['كم عدد شرائح الأجهزة المتصلة (M2M)؟', `${fr(I.m2m.total)}: موبيليس ${fr(I.m2m.Mobilis)}، أوريدو ${fr(I.m2m.Ooredoo)} وجازي ${fr(I.m2m.Djezzy)}، حسب المتعاملين كما ذكرتهم ARPCE.`],
      ['ما حجم البيانات المستهلكة؟', `${fr(I.dataTrafficGB)} جيغابايت من بيانات النقال في الثلاثي الثاني من 2026، مقابل ${I.dataTrafficPrevGB} مليون جيغابايت في الثلاثي السابق (+${I.dataGrowth} %). وبلغت ذروة عرض النطاق المستهلك ${fr(I.bandwidthPeakGbps)} Gbps، مقابل ${fr(I.bandwidthYearAgoGbps)} قبل سنة.`],
      ['ماذا يغيّر هذا لتطبيق أو موقع في الجزائر؟', `مع ${I.mobilePct} % من مشتركي الإنترنت على النقال و ${M.tech.g45Pct} % من مشتركي النقال في 4G/5G، يجب أن يعمل التطبيق أو الموقع الموجه للجمهور الجزائري أولاً على الهاتف. و Symloop، التي تنشر هذه الصفحة، تصمم تطبيقاتها ومواقعها للهاتف أولاً.`],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['مزوّدو الإنترنت في الجزائر', '/fournisseurs-internet-algerie/'], ['اسم النطاق ‎.dz: أرقام السجل', '/nom-de-domaine-dz/'], ['مراكز البيانات في الجزائر', '/data-centers-algerie/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="chiffres-internet-mobile-algerie" content={CONTENT} items={OPERATORS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} selectionNote={SELECTION} groups={[]} doesFrom="focus" hideFounded hideCity />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
