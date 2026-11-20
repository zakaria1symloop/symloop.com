import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { chaine, echeance, STRINGS as SC } from './custom/domaine.mjs';
export const slug = 'nom-de-domaine-hebergement-site-web-entreprise-algerie-2027-qui-possede-quoi-domaine-expire-ancien-prestataire-reprendre-la-main';
const T = {
  fr: {
    cover: { eyebrow: 'Nom de domaine et hébergement · Algérie · 2027', title: ['Nom de domaine et hébergement', 'qui possède quoi'], subtitle: 'Le nom, la zone DNS, le site et les mails : quatre comptes à mettre au nom de l’entreprise avant l’échéance', left: { label: 'Au nom d’un autre', sub: 'le site tombe à l’échéance' }, right: { label: 'Au nom de l’entreprise', sub: 'renouvelé, suivi, sauvegardé' } },
    chaine: { caption: 'Figure 1 · Une visite ou un mail passe par le nom de domaine, puis par la zone DNS, avant d’atteindre le site ou les boîtes. Dans l’exemple, l’hébergement et la messagerie sont au nom de l’entreprise, mais le nom et la zone sont sous le compte de l’ancien prestataire : le jour où le nom expire, le site est injoignable et les mails sont refusés, alors que tout le reste est payé. Fournisseurs, dates et personnes sont un exemple construit.' },
    echeance: { caption: 'Figure 2 · Cinq périodes autour de l’échéance d’un nom générique. La politique de l’ICANN impose au bureau d’enregistrement des rappels environ un mois et environ une semaine avant, puis dans les cinq jours après ; elle prévoit une période de rédemption de trente jours après la suppression. Entre les deux, le nom reste renouvelable pendant une durée qui dépend du bureau, et sa résolution est interrompue. Schéma de principe, sans échelle ; un nom en .dz suit les règles de son registre.' },
    reprise: { title: 'Reprendre la main, en six gestes', items: [
      { label: 'Relever', sub: 'bureau, échéance, serveurs de noms, hébergeur' },
      { label: 'Sécuriser l’échéance', sub: 'renouveler d’abord, discuter ensuite', accent: true },
      { label: 'Récupérer', sub: 'le compte, ou le code de transfert' },
      { label: 'Mettre au nom', sub: 'de l’entreprise, adresse hors du nom' },
      { label: 'Copier', sub: 'la zone, le site et sa base, en lieu sûr' },
      { label: 'Consigner', sub: 'comptes, échéances, deux responsables' },
    ], caption: 'Figure 3 · Le geste accentué est le deuxième : un nom renouvelé laisse un an pour régler le reste, un nom expiré ne laisse que quelques semaines. On fait donc renouveler avant de discuter de qui détient quoi, puis on récupère le compte ou le code de transfert.', alt: 'Six gestes : relever, sécuriser l’échéance (accentué), récupérer, mettre au nom, copier, consigner.' },
    comptes: { title: 'Six choses à détenir vous-même', columns: ['Ce qu’il faut avoir en main', 'Le signe que ce n’est pas le cas'], rows: [
      { label: 'Le nom de domaine', cells: ['compte du bureau d’enregistrement au nom de l’entreprise', 'la facture de renouvellement arrive chez le prestataire'] },
      { label: 'La zone DNS', cells: ['accès pour la modifier, et une copie des enregistrements', 'personne ne sait où pointent le site et les mails'] },
      { label: 'L’hébergement du site', cells: ['compte au nom de l’entreprise, accès administrateur', 'il faut appeler quelqu’un pour changer une page'] },
      { label: 'La messagerie', cells: ['compte administrateur détenu par deux personnes', 'un départ, et plus personne ne crée une boîte'] },
      { label: 'Le certificat du site', cells: ['renouvellement automatique, et surveillé', 'un matin, le navigateur affiche « non sécurisé »'] },
      { label: 'La sauvegarde du site', cells: ['copie récente des fichiers et de la base, ailleurs', 'la seule copie est sur le serveur de l’hébergeur'] },
    ], caption: 'Figure 4 · Six éléments, chacun avec son compte et son échéance. Les signes de la colonne de droite sont faciles à vérifier un matin : où arrive la facture de renouvellement, qui peut modifier la zone, qui peut créer une boîte, où se trouve la dernière copie du site.', alt: 'Matrice de six éléments à détenir soi-même, avec ce qu’il faut avoir en main et le signe que ce n’est pas le cas : nom de domaine, zone DNS, hébergement du site, messagerie, certificat, sauvegarde.' },
    couches: { title: 'Un nom et un site tenus, en cinq couches', layers: [
      { label: 'Titulaire', items: [{ name: 'Le nom est enregistré au nom de l’entreprise, avec une adresse de contact qui ne dépend pas du nom', sub: 'si le nom tombe, les rappels et les codes arrivent quand même', accent: true }] },
      { label: 'Comptes et accès', items: [{ name: 'Un compte par fournisseur, double vérification, deux personnes habilitées, codes dans un coffre', sub: 'un départ ou un téléphone perdu ne bloque rien' }] },
      { label: 'Échéances', items: [{ name: 'Renouvellement automatique, carte valide, dates au calendrier, alertes à 60, 30 et 7 jours', sub: 'le nom, l’hébergement, la messagerie et le certificat ont chacun leur date' }] },
      { label: 'Zone DNS', items: [{ name: 'Enregistrements documentés et exportés, durée de cache abaissée avant tout changement', sub: 'changer d’hébergeur devient une opération préparée, pas une panne' }] },
      { label: 'Site et mails', items: [{ name: 'Hébergement adapté, certificat renouvelé, sauvegarde hors du serveur, restauration essayée', sub: 'si l’hébergeur disparaît, le site repart ailleurs dans la journée' }] },
    ], caption: 'Figure 5 · La couche accentuée est la première : à quel nom le domaine est enregistré, et où arrivent les rappels. Les quatre autres se confient à un prestataire sans risque, tant que celle-ci reste entre les mains de l’entreprise.', alt: 'Cinq couches : titulaire (accentuée) ; comptes et accès ; échéances ; zone DNS ; site et mails.' },
    calendrier: { title: 'Reprendre la main en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Relevé et sécurisation', note: 'titulaire, bureau, échéance et serveurs de noms relevés ; renouvellement si la date est proche ; copie de la zone, du site et de sa base', from: 0, to: 1, accent: true },
      { label: 'Reprise des comptes', note: 'accès ou code de transfert obtenus, nom mis au nom de l’entreprise, adresse de contact externe, double vérification', from: 1, to: 2 },
      { label: 'Regroupement et suivi', note: 'comptes regroupés et consignés, renouvellement automatique, alertes, sauvegarde régulière, restauration essayée', from: 2, to: 3 },
    ], caption: 'Figure 6 · Trois semaines dans l’exemple. La semaine accentuée est la première : on relève, on fait renouveler si l’échéance est proche et on copie ce qui peut l’être, avant toute discussion. Les deux suivantes dépendent de la réponse de celui qui détient les accès.', alt: 'Calendrier de trois semaines : relevé et sécurisation (accentué), reprise des comptes, regroupement et suivi.' },
  },
  en: {
    cover: { eyebrow: 'Domain name and hosting · Algeria · 2027', title: ['Domain name and hosting', 'who owns what'], subtitle: 'Name, DNS zone, site and mail: four accounts to put in the company’s name before the due date', left: { label: 'In someone else’s name', sub: 'the site falls at the due date' }, right: { label: 'In the company’s name', sub: 'renewed, watched, backed up' } },
    chaine: { caption: 'Figure 1 · A visit or an email goes through the domain name, then through the DNS zone, before reaching the site or the mailboxes. In the example, hosting and mail are in the company’s name, but the name and the zone are under the former provider’s account: the day the name expires, the site is unreachable and mail is refused, although everything else is paid for. Providers, dates and people are a constructed example.' },
    echeance: { caption: 'Figure 2 · Five periods around the due date of a generic name. ICANN policy requires the registrar to send reminders about one month and about one week before, then within five days after; it provides a redemption period of thirty days after deletion. In between, the name remains renewable for a time that depends on the registrar, and its resolution is interrupted. Schematic, not to scale; a .dz name follows the rules of its registry.' },
    reprise: { title: 'Taking back control, in six steps', items: [
      { label: 'Find out', sub: 'registrar, due date, name servers, host' },
      { label: 'Secure the due date', sub: 'renew first, discuss afterwards', accent: true },
      { label: 'Recover', sub: 'the account, or the transfer code' },
      { label: 'Put in the name', sub: 'of the company, contact address off the name' },
      { label: 'Copy', sub: 'the zone, the site and its database, safely' },
      { label: 'Record', sub: 'accounts, due dates, two people in charge' },
    ], caption: 'Figure 3 · The accented step is the second: a renewed name leaves a year to settle the rest, an expired name leaves only a few weeks. So you have it renewed before discussing who holds what, then recover the account or the transfer code.', alt: 'Six steps: find out, secure the due date (accented), recover, put in the name, copy, record.' },
    comptes: { title: 'Six things to hold yourself', columns: ['What you need in hand', 'The sign that you do not'], rows: [
      { label: 'The domain name', cells: ['registrar account in the company’s name', 'the renewal invoice goes to the provider'] },
      { label: 'The DNS zone', cells: ['access to change it, and a copy of the records', 'nobody knows where the site and the mail point'] },
      { label: 'The site hosting', cells: ['account in the company’s name, administrator access', 'someone has to be called to change a page'] },
      { label: 'The mail service', cells: ['administrator account held by two people', 'one departure, and nobody can create a mailbox'] },
      { label: 'The site certificate', cells: ['automatic renewal, and monitored', 'one morning the browser shows “not secure”'] },
      { label: 'The site backup', cells: ['recent copy of the files and the database, elsewhere', 'the only copy is on the host’s own server'] },
    ], caption: 'Figure 4 · Six items, each with its account and its due date. The signs in the right-hand column are easy to check one morning: where the renewal invoice arrives, who can change the zone, who can create a mailbox, where the last copy of the site is.', alt: 'Matrix of six items to hold yourself, with what you need in hand and the sign that you do not: domain name, DNS zone, site hosting, mail service, certificate, backup.' },
    couches: { title: 'A name and a site under control, in five layers', layers: [
      { label: 'Registered holder', items: [{ name: 'The name is registered to the company, with a contact address that does not depend on the name', sub: 'if the name falls, reminders and codes still arrive', accent: true }] },
      { label: 'Accounts and access', items: [{ name: 'One account per provider, two-step verification, two authorised people, codes in a vault', sub: 'a departure or a lost phone blocks nothing' }] },
      { label: 'Due dates', items: [{ name: 'Automatic renewal, valid card, dates in the calendar, alerts at 60, 30 and 7 days', sub: 'the name, the hosting, the mail and the certificate each have their date' }] },
      { label: 'DNS zone', items: [{ name: 'Records documented and exported, cache time lowered before any change', sub: 'changing host becomes a prepared operation, not an outage' }] },
      { label: 'Site and mail', items: [{ name: 'Suitable hosting, renewed certificate, backup off the server, restore tried', sub: 'if the host disappears, the site restarts elsewhere within the day' }] },
    ], caption: 'Figure 5 · The accented layer is the first: in whose name the domain is registered, and where the reminders arrive. The other four can be entrusted to a provider without risk, as long as this one stays in the company’s hands.', alt: 'Five layers: registered holder (accented); accounts and access; due dates; DNS zone; site and mail.' },
    calendrier: { title: 'Taking back control in 2027, in weeks', unit: 'wk', items: [
      { label: 'Findings and securing', note: 'holder, registrar, due date and name servers found; renewal done if the date is close; copy of the zone, the site and its database', from: 0, to: 1, accent: true },
      { label: 'Recovering the accounts', note: 'access or transfer code obtained, name put in the company’s name, outside contact address, two-step verification', from: 1, to: 2 },
      { label: 'Grouping and follow-up', note: 'accounts grouped and recorded, automatic renewal, alerts, regular backup, restore tried', from: 2, to: 3 },
    ], caption: 'Figure 6 · Three weeks in the example. The accented week is the first: you find out, have the name renewed if the due date is close, and copy what can be copied, before any discussion. The next two depend on the answer of whoever holds the access.', alt: 'Three-week calendar: findings and securing (accented), recovering the accounts, grouping and follow-up.' },
  },
  ar: {
    cover: { eyebrow: 'اسم النطاق والاستضافة · الجزائر · 2027', title: ['اسم النطاق والاستضافة', 'من يملك ماذا'], subtitle: 'الاسم، منطقة الأسماء، الموقع والبريد: أربعة حسابات توضع باسم المؤسسة قبل الأجل', left: { label: 'باسم شخص آخر', sub: 'الموقع يسقط عند الأجل' }, right: { label: 'باسم المؤسسة', sub: 'مجدَّد، متابَع، محفوظ' } },
    chaine: { caption: 'الشكل 1 · الزيارة أو الرسالة تمرّ باسم النطاق، ثم بمنطقة الأسماء، قبل أن تبلغ الموقع أو علب البريد. في المثال، الاستضافة والبريد باسم المؤسسة، لكن الاسم والمنطقة تحت حساب المتعهّد السابق: يوم ينتهي الاسم يصير الموقع غير متاح والرسائل مرفوضة، مع أن كل الباقي مدفوع. المزوِّدون والتواريخ والأشخاص مثال مركَّب.' },
    echeance: { caption: 'الشكل 2 · خمس فترات حول أجل اسم عام. سياسة ⁦ICANN⁩ تفرض على مكتب التسجيل تذكيرات نحو شهر ونحو أسبوع قبل الأجل، ثم خلال خمسة أيام بعده؛ وتنص على فترة استرداد من ثلاثين يوماً بعد الحذف. وبينهما يبقى الاسم قابلاً للتجديد مدة تتوقف على المكتب، ويُوقَف حلّه. مخطط مبدئي، دون سلّم؛ والاسم بـ ⁦.dz⁩ يتبع قواعد سجلّه.' },
    reprise: { title: 'استعادة التحكم، في ست خطوات', items: [
      { label: 'الجرد', sub: 'المكتب، الأجل، خوادم الأسماء، المستضيف' },
      { label: 'تأمين الأجل', sub: 'التجديد أولاً، والنقاش بعده', accent: true },
      { label: 'الاسترجاع', sub: 'الحساب، أو رمز التحويل' },
      { label: 'الوضع بالاسم', sub: 'باسم المؤسسة، وعنوان خارج الاسم' },
      { label: 'النسخ', sub: 'المنطقة، الموقع وقاعدته، في مكان آمن' },
      { label: 'التدوين', sub: 'الحسابات، الآجال، ومسؤولان' },
    ], caption: 'الشكل 3 · الخطوة المبرزة هي الثانية: الاسم المجدَّد يترك سنة لتسوية الباقي، والاسم المنتهي لا يترك إلا بضعة أسابيع. فنطلب التجديد قبل النقاش حول من يمسك ماذا، ثم نسترجع الحساب أو رمز التحويل.', alt: 'ست خطوات: الجرد، تأمين الأجل (مبرزة)، الاسترجاع، الوضع بالاسم، النسخ، التدوين.' },
    comptes: { title: 'ستة أشياء تمسكونها بأنفسكم', columns: ['ما يجب أن يكون بأيديكم', 'علامة أن ذلك غير حاصل'], rows: [
      { label: 'اسم النطاق', cells: ['حساب مكتب التسجيل باسم المؤسسة', 'فاتورة التجديد تصل إلى المتعهّد'] },
      { label: 'منطقة الأسماء', cells: ['وصول لتعديلها، ونسخة من التسجيلات', 'لا أحد يعرف إلى أين يشير الموقع والبريد'] },
      { label: 'استضافة الموقع', cells: ['حساب باسم المؤسسة، ووصول المسؤول', 'يجب الاتصال بأحدهم لتغيير صفحة'] },
      { label: 'خدمة البريد', cells: ['حساب المسؤول عند شخصين', 'مغادرة واحدة، ولا أحد ينشئ علبة'] },
      { label: 'شهادة الموقع', cells: ['تجديد آلي، ومراقَب', 'ذات صباح يعرض المتصفح «غير آمن»'] },
      { label: 'نسخة الموقع الاحتياطية', cells: ['نسخة حديثة من الملفات والقاعدة، في مكان آخر', 'النسخة الوحيدة على خادم المستضيف'] },
    ], caption: 'الشكل 4 · ستة عناصر، لكل واحد حسابه وأجله. وعلامات العمود الثاني سهلة التحقق ذات صباح: أين تصل فاتورة التجديد، من يستطيع تعديل المنطقة، من يستطيع إنشاء علبة، وأين توجد آخر نسخة من الموقع.', alt: 'مصفوفة ستة عناصر تمسكونها بأنفسكم، مع ما يجب أن يكون بأيديكم وعلامة أن ذلك غير حاصل: اسم النطاق، منطقة الأسماء، استضافة الموقع، خدمة البريد، الشهادة، النسخة الاحتياطية.' },
    couches: { title: 'اسم وموقع تحت التحكم، في خمس طبقات', layers: [
      { label: 'صاحب الاسم', items: [{ name: 'الاسم مسجَّل باسم المؤسسة، بعنوان اتصال لا يتوقف على الاسم نفسه', sub: 'إذا سقط الاسم، التذكيرات والرموز تصل مع ذلك', accent: true }] },
      { label: 'الحسابات والوصول', items: [{ name: 'حساب لكل مزوِّد، تحقق بخطوتين، شخصان مخوَّلان، والرموز في خزنة', sub: 'مغادرة أو هاتف ضائع لا يوقف شيئاً' }] },
      { label: 'الآجال', items: [{ name: 'تجديد آلي، بطاقة صالحة، تواريخ في الرزنامة، وتنبيهات عند 60 و30 و7 أيام', sub: 'للاسم والاستضافة والبريد والشهادة، لكلٍّ تاريخه' }] },
      { label: 'منطقة الأسماء', items: [{ name: 'تسجيلات موثَّقة ومصدَّرة، ومدة التخزين المؤقت تُخفَّض قبل أي تغيير', sub: 'تغيير المستضيف يصير عملية محضَّرة، لا عطلاً' }] },
      { label: 'الموقع والبريد', items: [{ name: 'استضافة مناسبة، شهادة مجدَّدة، نسخة احتياطية خارج الخادم، واسترجاع مجرَّب', sub: 'إذا اختفى المستضيف، ينطلق الموقع في مكان آخر في اليوم نفسه' }] },
    ], caption: 'الشكل 5 · الطبقة المبرزة هي الأولى: باسم من سُجِّل النطاق، وأين تصل التذكيرات. والأربع الأخرى يمكن أن تُعهَد إلى متعهّد دون خطر، ما دامت هذه بين يدي المؤسسة.', alt: 'خمس طبقات: صاحب الاسم (مبرزة)؛ الحسابات والوصول؛ الآجال؛ منطقة الأسماء؛ الموقع والبريد.' },
    calendrier: { title: 'استعادة التحكم سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الجرد والتأمين', note: 'صاحب الاسم، المكتب، الأجل وخوادم الأسماء؛ التجديد إذا كان التاريخ قريباً؛ ونسخة من المنطقة والموقع وقاعدته', from: 0, to: 1, accent: true },
      { label: 'استرجاع الحسابات', note: 'الحصول على الوصول أو رمز التحويل، الاسم باسم المؤسسة، عنوان اتصال خارجي، وتحقق بخطوتين', from: 1, to: 2 },
      { label: 'التجميع والمتابعة', note: 'حسابات مجمَّعة ومدوَّنة، تجديد آلي، تنبيهات، نسخ احتياطي منتظم، واسترجاع مجرَّب', from: 2, to: 3 },
    ], caption: 'الشكل 6 · ثلاثة أسابيع في المثال. الأسبوع المبرز هو الأول: نجرد، ونطلب التجديد إذا كان الأجل قريباً، وننسخ ما يمكن نسخه، قبل أي نقاش. والأسبوعان المواليان يتوقفان على جواب من يمسك الوصول.', alt: 'تقويم ثلاثة أسابيع: الجرد والتأمين (مبرز)، استرجاع الحسابات، التجميع والمتابعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      chaine: { svg: chaine(e.chaine, rtl), caption: t.chaine.caption, alt: e.chaine.alt },
      echeance: { svg: echeance(e.echeance, rtl), caption: t.echeance.caption, alt: e.echeance.alt },
      reprise: { svg: steps({ title: t.reprise.title, steps: t.reprise.items, arrows: true, rtl }), caption: t.reprise.caption, alt: t.reprise.alt },
      comptes: { svg: matrix({ title: t.comptes.title, columns: t.comptes.columns, rows: t.comptes.rows, rtl }), caption: t.comptes.caption, alt: t.comptes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 3, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
