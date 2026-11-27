import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { retour, parc, STRINGS as SC } from './custom/locationmateriel.mjs';
export const slug = 'logiciel-location-de-materiel-engins-algerie-2027-planning-de-disponibilite-etat-des-lieux-photo-compteur-d-heures-facturation-taux-utilisation';
const T = {
  fr: {
    cover: { eyebrow: 'Location de matériel · Algérie · 2027', title: ['Logiciel de location de matériel :', 'savoir où est chaque machine'], subtitle: 'Planning de disponibilité, état des lieux photo, compteur d’heures, facturation, taux d’utilisation', left: { label: 'Parc', sub: '40 machines' }, right: { label: 'Taux d’utilisation', sub: '53 % du parc' } },
    location: { title: 'Une location, en six temps', items: [
      { label: 'Demande', sub: 'machine, dates, chantier, par téléphone ou en ligne' },
      { label: 'Réservation', sub: 'la machine est bloquée, pas promise deux fois' },
      { label: 'Départ', sub: 'photos, compteur, niveau, signature du client' },
      { label: 'Sur chantier', sub: 'prolongation, panne, échange, tout est noté' },
      { label: 'Retour', sub: 'mêmes photos, mêmes relevés, écarts constatés', accent: true },
      { label: 'Facture et entretien', sub: 'le jour du retour, puis révision aux heures' },
    ], caption: 'Figure 1 · Six temps. Le temps accentué est le retour : c’est là que les heures, le carburant et les dommages se constatent, ou se perdent.', alt: 'Six temps : demande, réservation, départ, sur chantier, retour (accentué), facture et entretien.' },
    retour: { caption: 'Figure 2 · Une nacelle louée 14 jours : 252 000 dinars de location, et 76 000 de plus constatés au retour, heures, carburant, garde-corps, accessoire. Montants fictifs.' },
    parc: { caption: 'Figure 3 · 40 machines sur un mois : le parc est loué 53 % du temps, mais 9 machines sont sous 25 % et 6 au-dessus de 85 %. Chiffres fictifs.' },
    couches: { title: 'Ce qu’il y a dans le logiciel, en cinq couches', layers: [
      { label: 'Parc', items: [{ name: 'Le parc : une fiche par machine, numéro de série, compteur, état, dépôt, documents, historique', sub: 'savoir ce que l’on possède, et où' }] },
      { label: 'Planning', items: [{ name: 'Le planning : disponibilité par machine et par famille, réservations, prolongations, demandes refusées', sub: 'ne pas louer deux fois la même machine', accent: true }] },
      { label: 'Contrat', items: [{ name: 'Le contrat : client, chantier, durée, tarif, forfait d’heures, état des lieux au départ et au retour', sub: 'chaque écart devient une ligne' }] },
      { label: 'Entretien', items: [{ name: 'L’entretien : révisions aux heures, pannes, immobilisations, coût par machine', sub: 'une machine en atelier ne se loue pas' }] },
      { label: 'Chiffres', items: [{ name: 'Les chiffres : taux d’utilisation, revenu par machine, impayés, demandes refusées, par dépôt', sub: 'savoir quoi acheter, déplacer ou vendre' }] },
    ], caption: 'Figure 4 · Cinq couches. La couche accentuée est le planning : une machine réservée est bloquée, et une demande refusée est enregistrée.', alt: 'Cinq couches : le parc ; le planning (accentué) ; le contrat ; l’entretien ; les chiffres.' },
    calendrier: { title: 'Onze semaines, en commençant par l’inventaire du parc', unit: 'sem.', items: [
      { label: 'Inventaire du parc', note: 'une fiche par machine : série, compteur, état, dépôt, photos', from: 0, to: 2, accent: true },
      { label: 'Planning et réservations', note: 'disponibilité par machine et par famille, demandes refusées notées', from: 1, to: 5 },
      { label: 'Contrat et état des lieux', note: 'sur téléphone, hors connexion : photos, compteur, niveau, signature', from: 3, to: 7 },
      { label: 'Tarifs et facturation', note: 'jour, semaine, mois, forfait d’heures, écarts au retour', from: 5, to: 8 },
      { label: 'Entretien aux heures', note: 'révisions déclenchées par le compteur, immobilisations au planning', from: 6, to: 9 },
      { label: 'Chiffres par machine', note: 'taux d’utilisation, revenu, demandes refusées, puis le deuxième dépôt', from: 8, to: 11 },
    ], caption: 'Figure 5 · Onze semaines dans l’exemple. La période accentuée est la première : tout part d’une fiche par machine. Durées indicatives d’un exemple construit.', alt: 'Calendrier de onze semaines : inventaire du parc (accentué), planning et réservations, contrat et état des lieux, tarifs et facturation, entretien aux heures, chiffres par machine.' },
    situations: { title: 'Cinq situations, et ce que le logiciel en fait', columns: ['Aujourd’hui', 'Avec le logiciel'], rows: [
      { label: 'Deux clients, la même machine', cells: ['promise deux fois, un client repart sans', 'réservation bloquante, autre machine proposée'] },
      { label: 'La machine rentre abîmée', cells: ['« elle était déjà comme ça »', 'photos datées du départ et du retour, signées'] },
      { label: 'Le chantier garde la machine', cells: ['dix jours de plus, personne ne facture', 'prolongation au planning, facture à la période'] },
      { label: 'Une machine dort au dépôt', cells: ['découverte à l’inventaire de fin d’année', 'taux d’utilisation par machine, chaque mois'] },
      { label: 'La révision est oubliée', cells: ['panne chez le client, machine immobilisée', 'révision déclenchée par les heures du compteur'] },
    ], caption: 'Figure 6 · Cinq situations. Dans chacune, ce qui change est le moment où l’information existe : au départ, au retour, chaque mois.', alt: 'Matrice de cinq situations : machine promise deux fois, machine rendue abîmée, chantier qui garde la machine, machine qui dort, révision oubliée ; pour chacune, aujourd’hui et avec le logiciel.' },
  },
  en: {
    cover: { eyebrow: 'Equipment rental · Algeria · 2027', title: ['Equipment rental software:', 'knowing where each machine is'], subtitle: 'Availability planning, photo condition report, hour meter, invoicing, utilisation rate', left: { label: 'Fleet', sub: '40 machines' }, right: { label: 'Utilisation rate', sub: '53% of the fleet' } },
    location: { title: 'A rental, in six steps', items: [
      { label: 'Request', sub: 'machine, dates, site, by phone or online' },
      { label: 'Booking', sub: 'the machine is held, not promised twice' },
      { label: 'Check-out', sub: 'photos, meter, level, customer signature' },
      { label: 'On site', sub: 'extension, breakdown, swap, all recorded' },
      { label: 'Check-in', sub: 'same photos, same readings, differences noted', accent: true },
      { label: 'Invoice and service', sub: 'on the day of return, then service by hours' },
    ], caption: 'Figure 1 · Six steps. The accented step is the check-in: that is where hours, fuel and damage are recorded, or lost.', alt: 'Six steps: request, booking, check-out, on site, check-in (accented), invoice and service.' },
    retour: { caption: 'Figure 2 · An aerial platform rented for 14 days: 252,000 dinars of rental, and 76,000 more recorded at check-in, hours, fuel, guardrail, accessory. Fictitious amounts.' },
    parc: { caption: 'Figure 3 · 40 machines over one month: the fleet is rented 53% of the time, but 9 machines are under 25% and 6 above 85%. Fictitious figures.' },
    couches: { title: 'What is inside the software, in five layers', layers: [
      { label: 'Fleet', items: [{ name: 'The fleet: one record per machine, serial number, meter, condition, depot, documents, history', sub: 'knowing what you own, and where' }] },
      { label: 'Planning', items: [{ name: 'Planning: availability per machine and per family, bookings, extensions, refused requests', sub: 'not renting the same machine twice', accent: true }] },
      { label: 'Contract', items: [{ name: 'The contract: customer, site, duration, rate, hour allowance, condition report out and back', sub: 'each difference becomes a line' }] },
      { label: 'Service', items: [{ name: 'Servicing: services by hours, breakdowns, downtime, cost per machine', sub: 'a machine in the workshop is not rented' }] },
      { label: 'Figures', items: [{ name: 'The figures: utilisation rate, revenue per machine, unpaid invoices, refused requests, per depot', sub: 'knowing what to buy, move or sell' }] },
    ], caption: 'Figure 4 · Five layers. The accented layer is the planning: a booked machine is held, and a refused request is recorded.', alt: 'Five layers: the fleet; planning (accented); the contract; servicing; the figures.' },
    calendrier: { title: 'Eleven weeks, starting with the fleet inventory', unit: 'wk', items: [
      { label: 'Fleet inventory', note: 'one record per machine: serial, meter, condition, depot, photos', from: 0, to: 2, accent: true },
      { label: 'Planning and bookings', note: 'availability per machine and per family, refused requests recorded', from: 1, to: 5 },
      { label: 'Contract and condition report', note: 'on the phone, offline: photos, meter, level, signature', from: 3, to: 7 },
      { label: 'Rates and invoicing', note: 'day, week, month, hour allowance, differences at return', from: 5, to: 8 },
      { label: 'Service by hours', note: 'services triggered by the meter, downtime in the planning', from: 6, to: 9 },
      { label: 'Figures per machine', note: 'utilisation rate, revenue, refused requests, then the second depot', from: 8, to: 11 },
    ], caption: 'Figure 5 · Eleven weeks in the example. The accented period is the first: everything starts from one record per machine. Indicative durations of a constructed example.', alt: 'Eleven-week calendar: fleet inventory (accented), planning and bookings, contract and condition report, rates and invoicing, service by hours, figures per machine.' },
    situations: { title: 'Five situations, and what the software does with them', columns: ['Today', 'With the software'], rows: [
      { label: 'Two customers, the same machine', cells: ['promised twice, one customer leaves without', 'blocking reservation, another machine offered'] },
      { label: 'The machine comes back damaged', cells: ['“it was already like that”', 'dated photos out and back, signed'] },
      { label: 'The site keeps the machine', cells: ['ten more days, nobody invoices', 'extension in the planning, invoice per period'] },
      { label: 'A machine sleeps at the depot', cells: ['discovered at the year-end inventory', 'utilisation rate per machine, every month'] },
      { label: 'The service is forgotten', cells: ['breakdown at the customer’s, machine down', 'service triggered by the meter hours'] },
    ], caption: 'Figure 6 · Five situations. In each one, what changes is the moment the information exists: at check-out, at check-in, every month.', alt: 'Matrix of five situations: machine promised twice, machine returned damaged, site keeping the machine, machine asleep, forgotten service; for each, today and with the software.' },
  },
  ar: {
    cover: { eyebrow: 'كراء العتاد · الجزائر · 2027', title: ['برنامج كراء العتاد:', 'أن نعرف أين توجد كل آلة'], subtitle: 'جدول التوفر، محضر معاينة بالصور، عدّاد الساعات، الفوترة، ونسبة الاستعمال', left: { label: 'الحظيرة', sub: '40 آلة' }, right: { label: 'نسبة الاستعمال', sub: '53 بالمئة من الحظيرة' } },
    location: { title: 'عملية كراء، في ست مراحل', items: [
      { label: 'الطلب', sub: 'الآلة، التواريخ، الورشة، بالهاتف أو على الإنترنت' },
      { label: 'الحجز', sub: 'الآلة محجوزة، ولا تُوعَد مرتين' },
      { label: 'الخروج', sub: 'صور، عدّاد، مستوى، وتوقيع الزبون' },
      { label: 'في الورشة', sub: 'تمديد، عطب، تبديل، وكل شيء مسجَّل' },
      { label: 'الرجوع', sub: 'الصور نفسها، القراءات نفسها، والفوارق مسجَّلة', accent: true },
      { label: 'الفاتورة والصيانة', sub: 'يوم الرجوع، ثم صيانة حسب الساعات' },
    ], caption: 'الشكل 1 · ست مراحل. المرحلة المبرزة هي الرجوع: هناك تُسجَّل الساعات، الوقود، والأضرار، أو تضيع.', alt: 'ست مراحل: الطلب، الحجز، الخروج، في الورشة، الرجوع (مبرز)، والفاتورة والصيانة.' },
    retour: { caption: 'الشكل 2 · رافعة أشخاص مكراة 14 يوماً: 252 ألف دينار كراءً، و76 ألفاً إضافية تُسجَّل عند الرجوع، ساعات، وقود، حاجز حماية، وملحق. مبالغ خيالية.' },
    parc: { caption: 'الشكل 3 · 40 آلة في شهر: الحظيرة مكراة 53 بالمئة من الوقت، لكن 9 آلات تحت 25 بالمئة و6 فوق 85 بالمئة. أرقام خيالية.' },
    couches: { title: 'ما يوجد في البرنامج، في خمس طبقات', layers: [
      { label: 'الحظيرة', items: [{ name: 'الحظيرة: بطاقة لكل آلة، الرقم التسلسلي، العدّاد، الحالة، المستودع، الوثائق، والتاريخ', sub: 'معرفة ما نملك، وأين هو' }] },
      { label: 'التوفر', items: [{ name: 'جدول التوفر: التوفر لكل آلة ولكل صنف، الحجوزات، التمديدات، والطلبات المرفوضة', sub: 'ألا تُكرى الآلة نفسها مرتين', accent: true }] },
      { label: 'العقد', items: [{ name: 'العقد: الزبون، الورشة، المدة، التسعيرة، حصة الساعات، ومحضر المعاينة عند الخروج والرجوع', sub: 'كل فارق يصير سطراً' }] },
      { label: 'الصيانة', items: [{ name: 'الصيانة: مراجعات حسب الساعات، الأعطاب، التوقفات، والكلفة لكل آلة', sub: 'آلة في ورشة الصيانة لا تُكرى' }] },
      { label: 'الأرقام', items: [{ name: 'الأرقام: نسبة الاستعمال، المدخول لكل آلة، غير المسدَّد، والطلبات المرفوضة، لكل مستودع', sub: 'معرفة ما يُشترى، يُنقَل، أو يُباع' }] },
    ], caption: 'الشكل 4 · خمس طبقات. الطبقة المبرزة هي جدول التوفر: الآلة المحجوزة ممنوعة عن غيرها، والطلب المرفوض يُسجَّل.', alt: 'خمس طبقات: الحظيرة؛ جدول التوفر (مبرز)؛ العقد؛ الصيانة؛ والأرقام.' },
    calendrier: { title: 'أحد عشر أسبوعاً، بدءاً بجرد الحظيرة', unit: 'أسبوع', items: [
      { label: 'جرد الحظيرة', note: 'بطاقة لكل آلة: الرقم التسلسلي، العدّاد، الحالة، المستودع، والصور', from: 0, to: 2, accent: true },
      { label: 'جدول التوفر والحجوزات', note: 'التوفر لكل آلة ولكل صنف، والطلبات المرفوضة مسجَّلة', from: 1, to: 5 },
      { label: 'العقد ومحضر المعاينة', note: 'على الهاتف، دون شبكة: صور، عدّاد، مستوى، وتوقيع', from: 3, to: 7 },
      { label: 'التسعيرات والفوترة', note: 'باليوم، بالأسبوع، بالشهر، حصة الساعات، والفوارق عند الرجوع', from: 5, to: 8 },
      { label: 'الصيانة حسب الساعات', note: 'مراجعات يطلقها العدّاد، وتوقفات تظهر في جدول التوفر', from: 6, to: 9 },
      { label: 'الأرقام لكل آلة', note: 'نسبة الاستعمال، المدخول، الطلبات المرفوضة، ثم المستودع الثاني', from: 8, to: 11 },
    ], caption: 'الشكل 5 · أحد عشر أسبوعاً في المثال. الفترة المبرزة هي الأولى: كل شيء ينطلق من بطاقة لكل آلة. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من أحد عشر أسبوعاً: جرد الحظيرة (مبرز)، جدول التوفر والحجوزات، العقد ومحضر المعاينة، التسعيرات والفوترة، الصيانة حسب الساعات، والأرقام لكل آلة.' },
    situations: { title: 'خمس حالات، وما يفعله البرنامج بها', columns: ['اليوم', 'مع البرنامج'], rows: [
      { label: 'زبونان، والآلة نفسها', cells: ['وُعد بها مرتين، وزبون يعود دونها', 'حجز مانع، وآلة أخرى تُقترَح'] },
      { label: 'الآلة ترجع متضررة', cells: ['«كانت هكذا من قبل»', 'صور مؤرَّخة عند الخروج والرجوع، وموقَّعة'] },
      { label: 'الورشة تحتفظ بالآلة', cells: ['عشرة أيام زائدة، ولا أحد يفوتر', 'تمديد في الجدول، وفاتورة لكل فترة'] },
      { label: 'آلة تنام في المستودع', cells: ['تُكتشَف في جرد نهاية السنة', 'نسبة الاستعمال لكل آلة، كل شهر'] },
      { label: 'الصيانة منسية', cells: ['عطب عند الزبون، والآلة متوقفة', 'صيانة تطلقها ساعات العدّاد'] },
    ], caption: 'الشكل 6 · خمس حالات. في كل واحدة، ما يتغيّر هو اللحظة التي توجد فيها المعلومة: عند الخروج، عند الرجوع، وكل شهر.', alt: 'مصفوفة من خمس حالات: آلة وُعد بها مرتين، آلة ترجع متضررة، ورشة تحتفظ بالآلة، آلة تنام، وصيانة منسية؛ ولكل واحدة اليوم ومع البرنامج.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      location: { svg: steps({ title: t.location.title, steps: t.location.items, arrows: true, rtl }), caption: t.location.caption, alt: t.location.alt },
      retour: { svg: retour(e.retour, rtl), caption: t.retour.caption, alt: e.retour.alt },
      parc: { svg: parc(e.parc, rtl), caption: t.parc.caption, alt: e.parc.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 11, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
    },
  };
}
