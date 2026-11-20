import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { couverture, ronde, STRINGS as SC } from './custom/gardiennage.mjs';
export const slug = 'comment-gerer-une-societe-de-gardiennage-algerie-2027-logiciel-planning-des-postes-pointage-sur-site-rondes-main-courante-heures-facturees';
const T = {
  fr: {
    cover: { eyebrow: 'Gardiennage · Algérie · 2027', title: ['Gérer une société de gardiennage :', 'chaque poste, chaque nuit, prouvé'], subtitle: 'Planning des postes, pointage sur site, remplacements, rondes, main courante, heures facturées', left: { label: 'Sur le cahier', sub: '4 rondes signées' }, right: { label: 'Sur les étiquettes', sub: '22 passages sur 32' } },
    constats: { title: 'Cinq situations que le client voit avant vous', columns: ['Sans outil', 'Avec l’outil'], rows: [
      { label: 'Un poste resté vide une nuit', cells: ['on l’apprend par le client, le lendemain', 'alerte dix minutes après l’heure, remplacement proposé'] },
      { label: 'Une ronde signée mais non faite', cells: ['le cahier dit oui, personne ne peut vérifier', 'chaque point lu avec l’heure, rapport le matin'] },
      { label: 'Un incident sans trace', cells: ['un appel, puis plus rien d’écrit', 'main courante datée, photos, suites données'] },
      { label: 'Des heures facturées contestées', cells: ['feuilles d’émargement recopiées en fin de mois', 'heures pointées au poste, détail par vacation'] },
      { label: 'Un remplacement introuvable à 22 heures', cells: ['le carnet de téléphone d’une seule personne', 'agents disponibles qui connaissent le site'] },
    ], caption: 'Figure 1 · Cinq situations. Dans chacune, l’information existe quelque part : sur un cahier, dans un téléphone, dans une mémoire. L’outil la fait arriver au bon endroit, à temps.', alt: 'Matrice de cinq situations : un poste resté vide, une ronde signée mais non faite, un incident sans trace, des heures contestées, un remplacement introuvable ; pour chacune, ce qui se passe sans outil et avec l’outil.' },
    vacation: { title: 'Une vacation, en six temps', items: [
      { label: 'Planning publié', sub: 'poste, horaire, personne, consignes du site' },
      { label: 'Prise de poste', sub: 'pointage sur place, dans les dix minutes', accent: true },
      { label: 'Rondes', sub: 'points lus au téléphone, avec l’heure' },
      { label: 'Main courante', sub: 'événements, photos, personnes prévenues' },
      { label: 'Relève', sub: 'consignes transmises, matériel compté' },
      { label: 'Rapport', sub: 'heures, rondes et incidents, pour le client' },
    ], caption: 'Figure 2 · Six temps. Le temps accentué est la prise de poste : c’est le pointage sur place qui prouve que le poste est tenu, et c’est son absence qui déclenche l’alerte.', alt: 'Six temps : planning publié, prise de poste (accentuée), rondes, main courante, relève, rapport.' },
    couverture: { caption: 'Figure 3 · Un mois sur un site : 180 vacations, 177 couvertes, 3 postes restés vides, soit 36 heures. Site et absences fictifs.' },
    ronde: { caption: 'Figure 4 · Une nuit de rondes : 22 passages lus sur 32 attendus, et une ronde non faite que le cahier disait signée. Site et horaires fictifs.' },
    calendrier: { title: 'Huit semaines, site par site', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'vos sites, vos postes, les heures vendues, vos consignes, vos feuilles d’heures', from: 0, to: 1, accent: true },
      { label: 'Sites, postes et consignes', note: 'heures à couvrir par poste, contacts du client, consignes par site', from: 1, to: 3 },
      { label: 'Planning et remplacements', note: 'vacations, disponibilités, alerte de poste non couvert', from: 2, to: 5 },
      { label: 'Pointage au poste', note: 'téléphone, position, étiquette du poste, fonctionnement sans réseau', from: 4, to: 6 },
      { label: 'Rondes et main courante', note: 'points de contrôle, étiquettes posées, modèles d’événements', from: 5, to: 7 },
      { label: 'Heures, rapport, mise en service', note: 'heures prestées par site, rapport au client, un site pilote puis les autres', from: 6, to: 8 },
    ], caption: 'Figure 5 · Huit semaines dans l’exemple. La période accentuée est la première ; la mise en service commence par un site pilote, puis s’étend site par site. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : cadrage (accentué), sites, postes et consignes, planning et remplacements, pointage au poste, rondes et main courante, heures, rapport et mise en service.' },
    couches: { title: 'Ce qu’il y a dans un logiciel de gardiennage, en cinq couches', layers: [
      { label: 'Sites', items: [{ name: 'Les sites et les postes : heures à couvrir, consignes, contacts du client, points de contrôle', sub: 'ce qui a été vendu au client' }] },
      { label: 'Planning', items: [{ name: 'Le planning : une personne par vacation et par poste, disponibilités, remplacements, alerte de poste vide', sub: 'qui est où, et quand', accent: true }] },
      { label: 'Présence', items: [{ name: 'La présence : pointage au poste par téléphone, position et étiquette, prise de poste et relève', sub: 'la preuve que le poste est tenu' }] },
      { label: 'Terrain', items: [{ name: 'Le terrain : rondes lues point par point, main courante avec photos, visites de contrôle', sub: 'ce qui s’est passé pendant la vacation' }] },
      { label: 'Heures', items: [{ name: 'Les heures : prestées par site et par personne, rapprochées du contrat, rapport au client', sub: 'ce qui se facture, sans discussion' }] },
    ], caption: 'Figure 6 · Cinq couches. La couche accentuée est le planning : tout le reste, la présence comme les heures, se compare à ce qu’il avait prévu.', alt: 'Cinq couches : les sites et les postes ; le planning (accentué) ; la présence ; le terrain ; les heures.' },
  },
  en: {
    cover: { eyebrow: 'Security guarding · Algeria · 2027', title: ['Running a security guard company:', 'every post, every night, proven'], subtitle: 'Post schedule, on-site check-in, replacements, patrol rounds, incident log, hours billed', left: { label: 'In the notebook', sub: '4 rounds signed' }, right: { label: 'On the tags', sub: '22 readings of 32' } },
    constats: { title: 'Five situations the customer sees before you do', columns: ['Without a tool', 'With the tool'], rows: [
      { label: 'A post left empty for a night', cells: ['you learn it from the customer, the next day', 'alert ten minutes after the hour, replacement proposed'] },
      { label: 'A round signed but not done', cells: ['the notebook says yes, nobody can check', 'each point read with the time, report in the morning'] },
      { label: 'An incident with no trace', cells: ['a call, then nothing written', 'dated incident log, photos, action taken'] },
      { label: 'Billed hours disputed', cells: ['attendance sheets copied out at month end', 'hours clocked at the post, detail per shift'] },
      { label: 'No replacement to be found at 10 pm', cells: ['one person’s phone book', 'available guards who know the site'] },
    ], caption: 'Figure 1 · Five situations. In each one the information exists somewhere: in a notebook, in a phone, in someone’s memory. The tool gets it to the right place, in time.', alt: 'Matrix of five situations: a post left empty, a round signed but not done, an incident with no trace, disputed hours, no replacement to be found; for each, what happens without a tool and with the tool.' },
    vacation: { title: 'A shift, in six steps', items: [
      { label: 'Schedule out', sub: 'post, hours, person, site instructions' },
      { label: 'Taking the post', sub: 'check-in on site, within ten minutes', accent: true },
      { label: 'Rounds', sub: 'points read on the phone, with the time' },
      { label: 'Incident log', sub: 'events, photos, people informed' },
      { label: 'Handover', sub: 'instructions passed on, equipment counted' },
      { label: 'Report', sub: 'hours, rounds and incidents, for the customer' },
    ], caption: 'Figure 2 · Six steps. The accented step is taking the post: the on-site check-in is what proves the post is held, and its absence is what triggers the alert.', alt: 'Six steps: schedule out, taking the post (accented), rounds, incident log, handover, report.' },
    couverture: { caption: 'Figure 3 · A month on one site: 180 shifts, 177 covered, 3 posts left empty, that is 36 hours. Fictitious site and absences.' },
    ronde: { caption: 'Figure 4 · A night of patrols: 22 readings of the 32 expected, and one round not done that the notebook showed as signed. Fictitious site and times.' },
    calendrier: { title: 'Eight weeks, site by site', unit: 'wk', items: [
      { label: 'Scoping', note: 'your sites, your posts, the hours sold, your instructions, your timesheets', from: 0, to: 1, accent: true },
      { label: 'Sites, posts and instructions', note: 'hours to cover per post, customer contacts, instructions per site', from: 1, to: 3 },
      { label: 'Schedule and replacements', note: 'shifts, availability, alert for an uncovered post', from: 2, to: 5 },
      { label: 'Check-in at the post', note: 'phone, position, the post’s tag, working without a network', from: 4, to: 6 },
      { label: 'Rounds and incident log', note: 'checkpoints, tags fitted, event templates', from: 5, to: 7 },
      { label: 'Hours, report, go-live', note: 'hours delivered per site, customer report, a pilot site then the others', from: 6, to: 8 },
    ], caption: 'Figure 5 · Eight weeks in the example. The accented period is the first; go-live starts with a pilot site, then extends site by site. Indicative durations of a constructed example.', alt: 'Eight-week calendar: scoping (accented), sites, posts and instructions, schedule and replacements, check-in at the post, rounds and incident log, hours, report and go-live.' },
    couches: { title: 'What is inside guarding software, in five layers', layers: [
      { label: 'Sites', items: [{ name: 'Sites and posts: hours to cover, instructions, customer contacts, checkpoints', sub: 'what was sold to the customer' }] },
      { label: 'Schedule', items: [{ name: 'The schedule: one person per shift and per post, availability, replacements, empty-post alert', sub: 'who is where, and when', accent: true }] },
      { label: 'Presence', items: [{ name: 'Presence: check-in at the post by phone, position and tag, taking the post and handover', sub: 'the proof that the post is held' }] },
      { label: 'Field', items: [{ name: 'The field: rounds read point by point, incident log with photos, supervisory visits', sub: 'what happened during the shift' }] },
      { label: 'Hours', items: [{ name: 'Hours: delivered per site and per person, matched against the contract, customer report', sub: 'what is billed, without argument' }] },
    ], caption: 'Figure 6 · Five layers. The accented layer is the schedule: everything else, presence as much as hours, is compared with what it had planned.', alt: 'Five layers: sites and posts; the schedule (accented); presence; the field; hours.' },
  },
  ar: {
    cover: { eyebrow: 'الحراسة · الجزائر · 2027', title: ['تسيير شركة حراسة:', 'كل مركز، كل ليلة، بالدليل'], subtitle: 'برنامج المراكز، تسجيل الحضور في الموقع، البدلاء، الدوريات، سجل الأحداث، والساعات المفوتَرة', left: { label: 'في الدفتر', sub: '4 دوريات موقَّعة' }, right: { label: 'على الملصقات', sub: '22 قراءة من 32' } },
    constats: { title: 'خمس حالات يراها الزبون قبلكم', columns: ['دون أداة', 'مع الأداة'], rows: [
      { label: 'مركز بقي فارغاً ليلة كاملة', cells: ['يُعرف ذلك من الزبون، في الغد', 'تنبيه عشر دقائق بعد الساعة، واقتراح بديل'] },
      { label: 'دورية موقَّعة لكنها لم تُنجَز', cells: ['الدفتر يقول نعم، ولا أحد يستطيع التحقق', 'كل نقطة مقروءة بساعتها، وتقرير في الصباح'] },
      { label: 'حادث دون أثر', cells: ['اتصال، ثم لا شيء مكتوب', 'سجل أحداث مؤرَّخ، صور، وما تم بعده'] },
      { label: 'ساعات مفوتَرة محل نزاع', cells: ['أوراق حضور تُنقَل في آخر الشهر', 'ساعات مسجَّلة في المركز، بالتفصيل لكل نوبة'] },
      { label: 'بديل لا يُعثر عليه في العاشرة ليلاً', cells: ['دفتر هاتف شخص واحد', 'أعوان متاحون يعرفون الموقع'] },
    ], caption: 'الشكل 1 · خمس حالات. في كل واحدة، المعلومة موجودة في مكان ما: في دفتر، في هاتف، أو في ذاكرة. والأداة توصلها إلى المكان الصحيح، في الوقت.', alt: 'مصفوفة من خمس حالات: مركز بقي فارغاً، دورية موقَّعة لم تُنجَز، حادث دون أثر، ساعات محل نزاع، وبديل لا يُعثر عليه؛ ولكل واحدة، ما يحدث دون أداة ومع الأداة.' },
    vacation: { title: 'نوبة، في ست مراحل', items: [
      { label: 'نشر البرنامج', sub: 'المركز، التوقيت، الشخص، وتعليمات الموقع' },
      { label: 'استلام المركز', sub: 'تسجيل الحضور في المكان، خلال عشر دقائق', accent: true },
      { label: 'الدوريات', sub: 'نقاط تُقرأ بالهاتف، مع الساعة' },
      { label: 'سجل الأحداث', sub: 'أحداث، صور، ومن تم إبلاغه' },
      { label: 'التسليم', sub: 'تعليمات منقولة، وعتاد معدود' },
      { label: 'التقرير', sub: 'الساعات، الدوريات، والحوادث، للزبون' },
    ], caption: 'الشكل 2 · ست مراحل. المرحلة المبرزة هي استلام المركز: تسجيل الحضور في المكان هو الذي يثبت أن المركز مشغول، وغيابه هو الذي يطلق التنبيه.', alt: 'ست مراحل: نشر البرنامج، استلام المركز (مبرز)، الدوريات، سجل الأحداث، التسليم، والتقرير.' },
    couverture: { caption: 'الشكل 3 · شهر على موقع واحد: 180 نوبة، 177 مغطّاة، و3 مراكز بقيت فارغة، أي 36 ساعة. موقع وغيابات خيالية.' },
    ronde: { caption: 'الشكل 4 · ليلة من الدوريات: 22 قراءة من 32 منتظَرة، ودورية لم تُنجَز كان الدفتر يقول إنها موقَّعة. موقع وتوقيتات خيالية.' },
    calendrier: { title: 'ثمانية أسابيع، موقعاً بموقع', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'مواقعكم، مراكزكم، الساعات المباعة، تعليماتكم، وأوراق الساعات', from: 0, to: 1, accent: true },
      { label: 'المواقع، المراكز، والتعليمات', note: 'الساعات المطلوب تغطيتها لكل مركز، جهات اتصال الزبون، وتعليمات كل موقع', from: 1, to: 3 },
      { label: 'البرنامج والبدلاء', note: 'النوبات، التوفر، وتنبيه المركز غير المغطّى', from: 2, to: 5 },
      { label: 'تسجيل الحضور في المركز', note: 'الهاتف، الموقع الجغرافي، ملصق المركز، والعمل دون شبكة', from: 4, to: 6 },
      { label: 'الدوريات وسجل الأحداث', note: 'نقاط المراقبة، تثبيت الملصقات، ونماذج الأحداث', from: 5, to: 7 },
      { label: 'الساعات، التقرير، والتشغيل', note: 'الساعات المنجزة لكل موقع، تقرير الزبون، موقع تجريبي ثم البقية', from: 6, to: 8 },
    ], caption: 'الشكل 5 · ثمانية أسابيع في المثال. الفترة المبرزة هي الأولى؛ والتشغيل يبدأ بموقع تجريبي، ثم يمتد موقعاً بموقع. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: التأطير (مبرز)، المواقع والمراكز والتعليمات، البرنامج والبدلاء، تسجيل الحضور في المركز، الدوريات وسجل الأحداث، ثم الساعات والتقرير والتشغيل.' },
    couches: { title: 'ما يوجد في برنامج الحراسة، في خمس طبقات', layers: [
      { label: 'المواقع', items: [{ name: 'المواقع والمراكز: الساعات المطلوب تغطيتها، التعليمات، جهات اتصال الزبون، ونقاط المراقبة', sub: 'ما بيع للزبون' }] },
      { label: 'البرنامج', items: [{ name: 'البرنامج: شخص لكل نوبة ولكل مركز، التوفر، البدلاء، وتنبيه المركز الفارغ', sub: 'من أين، ومتى', accent: true }] },
      { label: 'الحضور', items: [{ name: 'الحضور: تسجيل في المركز بالهاتف، الموقع الجغرافي والملصق، استلام المركز وتسليمه', sub: 'الدليل على أن المركز مشغول' }] },
      { label: 'الميدان', items: [{ name: 'الميدان: دوريات تُقرأ نقطة بنقطة، سجل أحداث بالصور، وزيارات المراقبة', sub: 'ما جرى خلال النوبة' }] },
      { label: 'الساعات', items: [{ name: 'الساعات: منجزة لكل موقع ولكل شخص، تُقارَن بالعقد، مع تقرير الزبون', sub: 'ما يُفوتَر، دون نقاش' }] },
    ], caption: 'الشكل 6 · خمس طبقات. الطبقة المبرزة هي البرنامج: كل الباقي، الحضور كالساعات، يُقارَن بما كان قد برمجه.', alt: 'خمس طبقات: المواقع والمراكز؛ البرنامج (مبرز)؛ الحضور؛ الميدان؛ والساعات.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      constats: { svg: matrix({ title: t.constats.title, columns: t.constats.columns, rows: t.constats.rows, rtl }), caption: t.constats.caption, alt: t.constats.alt },
      vacation: { svg: steps({ title: t.vacation.title, steps: t.vacation.items, arrows: true, rtl }), caption: t.vacation.caption, alt: t.vacation.alt },
      couverture: { svg: couverture(e.couverture, rtl), caption: t.couverture.caption, alt: e.couverture.alt },
      ronde: { svg: ronde(e.ronde, rtl), caption: t.ronde.caption, alt: e.ronde.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
    },
  };
}
