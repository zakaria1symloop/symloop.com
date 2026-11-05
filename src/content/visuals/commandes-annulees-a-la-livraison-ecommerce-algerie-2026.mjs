import { cover, steps, layers, matrix } from '../../lib/visuals/index.mjs';

export const slug = 'commandes-annulees-a-la-livraison-ecommerce-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · E-commerce', title: ['La moitié de mes', 'commandes est refusée', 'à la livraison.'], subtitle: 'Pourquoi le paiement à la livraison coûte si cher en Algérie, les six causes de refus, le processus qui les divise par deux, et ce qu’un système fait à votre place.', left: { label: 'Aujourd’hui', sub: 'expédier, espérer, payer le retour' }, right: { label: 'Dans 4 semaines', sub: 'confirmer, livrer, encaisser' }, note: 'Algérie · 2026' },
    causes: { title: 'Pourquoi un client refuse un colis qu’il a commandé', columns: ['Ce qui se passe', 'Le remède'], rows: [
      { label: 'Il a commandé sur un coup de tête, à minuit', cells: ['Le lendemain il n’en veut plus', 'Appel ou message de confirmation avant expédition'] },
      { label: 'Il a commandé le même produit chez trois vendeurs', cells: ['Le premier arrivé gagne, les deux autres reviennent', 'Confirmation, délai annoncé et tenu'] },
      { label: 'Le prix de livraison l’a surpris', cells: ['Il refuse le total, pas le produit', 'Frais par wilaya affichés avant la commande'] },
      { label: 'Le livreur a appelé au mauvais moment, ou pas du tout', cells: ['Absent, injoignable, puis plus intéressé', 'Créneau convenu, SMS la veille, point relais en option'] },
      { label: 'Le produit ne ressemble pas à la photo', cells: ['Refus légitime, et un avis négatif', 'Photos réelles, description honnête, taille et couleur confirmées'] },
      { label: 'Il refuse par habitude, chez tout le monde', cells: ['Deux pour cent des clients font la moitié des refus', 'Score par numéro de téléphone, acompte demandé aux récidivistes'] },
    ], caption: 'Figure 1 · Quatre causes sur six se règlent avant l’expédition. C’est là que se gagne la marge.', alt: 'Les six causes de refus d’un colis en paiement à la livraison en Algérie et leur remède : commande impulsive, commandes multiples, frais de livraison surprise, livreur injoignable, produit différent de la photo, refus par habitude.' },
    flow: { title: 'Le processus de confirmation qui divise les refus par deux', items: [
      { label: 'Commande reçue', sub: 'Nom, téléphone, wilaya, commune, article. Frais de livraison déjà affichés et acceptés.' },
      { label: 'Confirmation sous deux heures', sub: 'Message WhatsApp automatique, puis appel si pas de réponse. Créneau de livraison convenu.' },
      { label: 'Score du client', sub: 'Numéro connu, historique de refus ? Acompte CIB ou Edahabia demandé au-delà d’un seuil.' },
      { label: 'Expédition avec bordereau', sub: 'Yalidine ou ZR Express, domicile ou point relais au choix du client, suivi partagé.' },
      { label: 'Veille de livraison', sub: 'SMS ou WhatsApp : « votre colis arrive demain entre 10 h et 14 h ». Le livreur appelle à l’approche.', accent: true },
    ], caption: 'Figure 2 · Chaque étape coûte quelques secondes de système et évite un retour payé de votre poche.', alt: 'Le processus de confirmation en cinq étapes : commande reçue avec frais affichés, confirmation sous deux heures, score du client, expédition avec bordereau et point relais, message la veille de la livraison.' },
    system: { title: 'Ce que le système fait à votre place', layers: [
      { label: 'Commande', items: [{ name: 'Formulaire ou site de commande', sub: 'frais par wilaya calculés avant validation' }, { name: 'Détection des doublons', sub: 'même téléphone, même article, même jour' }] },
      { label: 'Confirmation', items: [{ name: 'WhatsApp automatique', sub: 'confirmation en un mot, créneau proposé', accent: true }, { name: 'File d’appels', sub: 'pour les non-réponses, avec script et résultat' }] },
      { label: 'Risque', items: [{ name: 'Score par téléphone', sub: 'refus passés, retours, annulations' }, { name: 'Acompte conditionnel', sub: 'CIB, Edahabia ou BaridiMob au-delà d’un seuil' }] },
      { label: 'Livraison', items: [{ name: 'Bordereaux et suivi', sub: 'Yalidine, ZR Express, Maystro, par API' }, { name: 'Messages de la veille', sub: 'créneau, nom du livreur, bouton reporter' }] },
      { label: 'Pilotage', items: [{ name: 'Taux de refus par wilaya, par produit, par transporteur', sub: 'chaque semaine, pour décider' }] },
    ], caption: 'Figure 3 · Le tableau de bord du taux de refus par wilaya et par transporteur est ce qui vous fait arrêter de livrer là où vous perdez.', alt: 'Architecture d’un système de réduction des refus à la livraison : formulaire avec frais par wilaya, détection des doublons, confirmation WhatsApp automatique et file d’appels, score par téléphone et acompte conditionnel, bordereaux et suivi transporteurs, messages de la veille, tableau de bord des refus.' },
  },
  en: {
    cover: { eyebrow: 'Problem · E-commerce', title: ['Half my orders', 'are refused', 'at delivery.'], subtitle: 'Why cash on delivery costs so much in Algeria, the six causes of refusal, the process that halves them, and what a system does for you.', left: { label: 'Today', sub: 'ship, hope, pay the return' }, right: { label: 'In 4 weeks', sub: 'confirm, deliver, collect' }, note: 'Algeria · 2026' },
    causes: { title: 'Why a customer refuses a parcel they ordered', columns: ['What happens', 'The remedy'], rows: [
      { label: 'They ordered on impulse, at midnight', cells: ['The next day they no longer want it', 'Confirmation call or message before shipping'] },
      { label: 'They ordered the same product from three sellers', cells: ['First to arrive wins, the other two come back', 'Confirmation, lead time announced and kept'] },
      { label: 'The delivery fee surprised them', cells: ['They refuse the total, not the product', 'Fees by wilaya shown before ordering'] },
      { label: 'The courier called at the wrong time, or not at all', cells: ['Absent, unreachable, then no longer interested', 'Agreed slot, SMS the day before, pickup point as an option'] },
      { label: 'The product does not look like the photo', cells: ['Legitimate refusal, and a bad review', 'Real photos, honest description, size and colour confirmed'] },
      { label: 'They refuse out of habit, with everyone', cells: ['Two percent of customers cause half the refusals', 'Score per phone number, deposit required from repeat offenders'] },
    ], caption: 'Figure 1 · Four causes out of six are fixed before shipping. That is where the margin is won.', alt: 'The six causes of parcel refusal on cash on delivery in Algeria and their remedy: impulse order, multiple orders, surprise delivery fee, unreachable courier, product different from photo, habitual refusal.' },
    flow: { title: 'The confirmation process that halves refusals', items: [
      { label: 'Order received', sub: 'Name, phone, wilaya, commune, item. Delivery fee already shown and accepted.' },
      { label: 'Confirmation within two hours', sub: 'Automatic WhatsApp message, then a call if no answer. Delivery slot agreed.' },
      { label: 'Customer score', sub: 'Known number, refusal history? CIB or Edahabia deposit required above a threshold.' },
      { label: 'Shipping with label', sub: 'Yalidine or ZR Express, home or pickup point at the customer’s choice, shared tracking.' },
      { label: 'Day before delivery', sub: 'SMS or WhatsApp: "your parcel arrives tomorrow between 10 and 14". The courier calls when close.', accent: true },
    ], caption: 'Figure 2 · Each step costs a few seconds of system and avoids a return paid out of your pocket.', alt: 'The five-step confirmation process: order received with fees shown, confirmation within two hours, customer score, shipping with label and pickup point, message the day before delivery.' },
    system: { title: 'What the system does for you', layers: [
      { label: 'Order', items: [{ name: 'Form or ordering site', sub: 'fees by wilaya computed before validation' }, { name: 'Duplicate detection', sub: 'same phone, same item, same day' }] },
      { label: 'Confirmation', items: [{ name: 'Automatic WhatsApp', sub: 'one-word confirmation, slot proposed', accent: true }, { name: 'Call queue', sub: 'for no-answers, with script and outcome' }] },
      { label: 'Risk', items: [{ name: 'Score per phone', sub: 'past refusals, returns, cancellations' }, { name: 'Conditional deposit', sub: 'CIB, Edahabia or BaridiMob above a threshold' }] },
      { label: 'Delivery', items: [{ name: 'Labels and tracking', sub: 'Yalidine, ZR Express, Maystro, by API' }, { name: 'Day-before messages', sub: 'slot, courier name, reschedule button' }] },
      { label: 'Steering', items: [{ name: 'Refusal rate by wilaya, product, carrier', sub: 'every week, to decide' }] },
    ], caption: 'Figure 3 · The refusal-rate dashboard by wilaya and carrier is what makes you stop delivering where you lose.', alt: 'Architecture of a system reducing delivery refusals: form with fees by wilaya, duplicate detection, automatic WhatsApp confirmation and call queue, score per phone and conditional deposit, carrier labels and tracking, day-before messages, refusal dashboard.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · التجارة الإلكترونية', title: ['نصف طلباتي', 'تُرفض', 'عند التسليم.'], subtitle: 'لماذا يكلّف الدفع عند التسليم كل هذا في الجزائر، أسباب الرفض الستة، العملية التي تقلّصها إلى النصف، وما يفعله النظام نيابة عنك.', left: { label: 'اليوم', sub: 'شحن، أمل، دفع ثمن الإرجاع' }, right: { label: 'بعد 4 أسابيع', sub: 'تأكيد، تسليم، تحصيل' }, note: 'الجزائر · 2026' },
    causes: { title: 'لماذا يرفض العميل طرداً طلبه بنفسه', columns: ['ما يحدث', 'العلاج'], rows: [
      { label: 'طلب باندفاع، في منتصف الليل', cells: ['في الغد لم يعد يريده', 'مكالمة أو رسالة تأكيد قبل الشحن'] },
      { label: 'طلب المنتج نفسه من ثلاثة بائعين', cells: ['أول الواصلين يفوز والآخران يعودان', 'تأكيد، أجل معلن ومحترم'] },
      { label: 'فاجأه سعر التوصيل', cells: ['يرفض الإجمالي لا المنتج', 'رسوم حسب الولاية معروضة قبل الطلب'] },
      { label: 'اتصل الموصّل في وقت خاطئ، أو لم يتصل', cells: ['غائب، لا يُرد، ثم لم يعد مهتماً', 'فترة متفق عليها، SMS في اليوم السابق، نقطة استلام اختيارية'] },
      { label: 'المنتج لا يشبه الصورة', cells: ['رفض مشروع، وتقييم سلبي', 'صور حقيقية، وصف صادق، مقاس ولون مؤكدان'] },
      { label: 'يرفض بالعادة، عند الجميع', cells: ['اثنان في المئة من العملاء يسببون نصف الرفض', 'نقاط لكل رقم هاتف، عربون مطلوب من المعتادين'] },
    ], caption: 'الشكل 1 · أربعة أسباب من ستة تُحل قبل الشحن. هناك يُربح الهامش.', alt: 'أسباب رفض الطرد عند الدفع عند التسليم في الجزائر وعلاجها.' },
    flow: { title: 'عملية التأكيد التي تقلّص الرفض إلى النصف', items: [
      { label: 'استلام الطلب', sub: 'اسم، هاتف، ولاية، بلدية، منتج. رسوم التوصيل معروضة ومقبولة مسبقاً.' },
      { label: 'تأكيد خلال ساعتين', sub: 'رسالة واتساب تلقائية ثم مكالمة إن لم يُرد. فترة تسليم متفق عليها.' },
      { label: 'نقاط العميل', sub: 'رقم معروف، سجل رفض؟ عربون CIB أو الذهبية مطلوب فوق حد معين.' },
      { label: 'شحن بوصل', sub: 'Yalidine أو ZR Express، منزل أو نقطة استلام باختيار العميل، تتبع مشترك.' },
      { label: 'عشية التسليم', sub: 'SMS أو واتساب: «يصل طردك غداً بين 10 و14». يتصل الموصّل عند الاقتراب.', accent: true },
    ], caption: 'الشكل 2 · كل خطوة تكلّف ثواني من النظام وتجنّب إرجاعاً تدفعه من جيبك.', alt: 'عملية التأكيد في خمس خطوات.' },
    system: { title: 'ما يفعله النظام نيابة عنك', layers: [
      { label: 'الطلب', items: [{ name: 'نموذج أو موقع طلب', sub: 'رسوم حسب الولاية تُحسب قبل التأكيد' }, { name: 'كشف التكرارات', sub: 'نفس الهاتف، نفس المنتج، نفس اليوم' }] },
      { label: 'التأكيد', items: [{ name: 'واتساب تلقائي', sub: 'تأكيد بكلمة، فترة مقترحة', accent: true }, { name: 'طابور مكالمات', sub: 'لمن لم يردّوا، بنص ونتيجة' }] },
      { label: 'المخاطر', items: [{ name: 'نقاط لكل هاتف', sub: 'رفض سابق، مرتجعات، إلغاءات' }, { name: 'عربون مشروط', sub: 'CIB أو الذهبية أو BaridiMob فوق حد' }] },
      { label: 'التوصيل', items: [{ name: 'وصولات وتتبع', sub: 'Yalidine وZR Express وMaystro عبر API' }, { name: 'رسائل العشية', sub: 'الفترة، اسم الموصّل، زر التأجيل' }] },
      { label: 'القيادة', items: [{ name: 'نسبة الرفض حسب الولاية والمنتج والناقل', sub: 'كل أسبوع، لاتخاذ القرار' }] },
    ], caption: 'الشكل 3 · لوحة نسبة الرفض حسب الولاية والناقل هي ما يجعلك تتوقف عن التوصيل حيث تخسر.', alt: 'بنية نظام لتقليص الرفض عند التسليم.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      causes: { svg: matrix({ title: t.causes.title, columns: t.causes.columns, rows: t.causes.rows, rtl }), caption: t.causes.caption, alt: t.causes.alt },
      flow: { svg: steps({ title: t.flow.title, steps: t.flow.items, arrows: true, rtl }), caption: t.flow.caption, alt: t.flow.alt },
      system: { svg: layers({ title: t.system.title, layers: t.system.layers, rtl }), caption: t.system.caption, alt: t.system.alt },
    },
  };
}
