import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { horsligne, adresse, STRINGS as SC } from './custom/imprimante.mjs';
export const slug = 'comment-partager-une-imprimante-en-reseau-en-entreprise-algerie-2027-imprimante-hors-ligne-adresse-fixe-pilotes-file-d-attente-numerisation';
const T = {
  fr: {
    cover: { eyebrow: 'Imprimante réseau · Algérie · 2027', title: ['Partager une imprimante en réseau', 'et ne plus la voir « hors ligne »'], subtitle: 'Sur le réseau et non sur un poste, une adresse réservée, un pilote pour tous, numériser vers un dossier', left: { label: '« Hors ligne »', sub: 'un jour sur deux' }, right: { label: 'Sur le réseau', sub: 'adresse fixe, un seul pilote' } },
    couches: { title: 'L’impression au bureau, en cinq couches', layers: [
      { label: 'Branchement', items: [{ name: 'Le branchement : l’imprimante sur le réseau, par câble de préférence, et non sur un poste', sub: 'elle ne dépend plus d’un ordinateur allumé' }] },
      { label: 'Adresse', items: [{ name: 'L’adresse : toujours la même, réservée dans le routeur et notée sur la machine', sub: 'la cause la plus simple d’un « hors ligne »', accent: true }] },
      { label: 'Pilote', items: [{ name: 'Le pilote : le même sur tous les postes, installé depuis un seul endroit', sub: 'plus de réinstallation au hasard' }] },
      { label: 'File', items: [{ name: 'La file : un point de passage qui reçoit les travaux et les envoie à la bonne imprimante', sub: 'un travail en erreur se voit, et se retire' }] },
      { label: 'Entretien', items: [{ name: 'L’entretien : toner, compteur de pages, mises à jour du micrologiciel, une personne responsable', sub: 'une imprimante est aussi un ordinateur' }] },
    ], caption: 'Figure 1 · La couche accentuée est l’adresse. Une imprimante branchée sur le réseau avec une adresse qui change tombe « hors ligne » après chaque coupure de courant ; avec une adresse réservée, les quatre autres couches peuvent enfin tenir.', alt: 'Cinq couches : le branchement ; l’adresse (accentuée) ; le pilote ; la file ; l’entretien.' },
    horsligne: { caption: 'Figure 2 · Deux façons de brancher la même imprimante. Sur le poste de l’accueil, elle disparaît pour les cinq autres dès que ce poste s’éteint. Sur le commutateur du réseau, avec une adresse fixe, chaque poste l’atteint directement. Exemple construit.' },
    adresse: { caption: 'Figure 3 · Une semaine de travail. Avec une adresse automatique, une coupure de courant le mardi soir suffit : l’imprimante répond à une autre adresse, les postes écrivent encore à l’ancienne. Avec une adresse réservée, rien ne change. Adresses fictives.' },
    remettre: { title: 'Remettre l’impression d’aplomb, en six temps', items: [
      { label: 'Inventorier', sub: 'machines, branchements, adresses' },
      { label: 'Brancher', sub: 'sur le réseau, plus sur un poste', accent: true },
      { label: 'Réserver', sub: 'une adresse par imprimante' },
      { label: 'Déployer', sub: 'le même pilote, depuis un point' },
      { label: 'Numériser', sub: 'vers un dossier partagé, par service' },
      { label: 'Entretenir', sub: 'toner, compteur, mises à jour, un nom' },
    ], caption: 'Figure 4 · Le temps accentué est le deuxième : brancher l’imprimante sur le réseau. C’est le geste qui supprime le plus de pannes d’un coup. Les quatre suivants empêchent qu’elles reviennent.', alt: 'Six temps : inventorier, brancher (accentué), réserver, déployer, numériser, entretenir.' },
    pannes: { title: 'Six pannes, la cause à vérifier d’abord, le geste', columns: ['La cause à vérifier d’abord', 'Le geste'], rows: [
      { label: 'L’imprimante est « hors ligne »', cells: ['adresse changée, ou poste qui partage éteint', 'page de configuration, puis adresse réservée'] },
      { label: 'Les documents restent dans la file', cells: ['un travail en erreur retient les suivants', 'retirer le premier, pas toute la file'] },
      { label: 'Elle imprime des signes', cells: ['un pilote qui n’est pas celui du modèle', 'le pilote exact, le même partout'] },
      { label: 'La numérisation n’arrive pas', cells: ['dossier déplacé, ou mot de passe changé', 'un compte pour l’imprimante, un dossier fixe'] },
      { label: 'Un seul poste n’imprime pas', cells: ['mauvaise imprimante par défaut sur ce poste', 'vérifier ce poste avant de toucher au reste'] },
      { label: 'Tout est lent le dimanche matin', cells: ['un très gros fichier devant vingt petits', 'l’imprimer plus tard, ou une seconde file'] },
    ], caption: 'Figure 5 · Six pannes courantes. La colonne du milieu donne la cause à vérifier en premier, pas la seule possible ; celle de droite, le geste qui la règle. Réinstaller le pilote n’apparaît qu’une fois : c’est rarement la bonne réponse.', alt: 'Matrice de six pannes : l’imprimante est hors ligne, les documents restent dans la file, elle imprime des signes, la numérisation n’arrive pas, un seul poste n’imprime pas, tout est lent le dimanche matin ; pour chacune, la cause à vérifier d’abord et le geste.' },
    calendrier: { title: 'Dix jours ouvrés pour une impression qui tient', unit: 'j', items: [
      { label: 'Inventaire', note: 'machines, branchements, adresses, pilotes installés, pannes du mois', from: 0, to: 2, accent: true },
      { label: 'Réseau et adresses', note: 'imprimantes branchées sur le réseau, une adresse réservée et notée pour chacune', from: 2, to: 4 },
      { label: 'Pilotes et files', note: 'un pilote par modèle, installé depuis un seul point ; files nommées par lieu', from: 3, to: 6 },
      { label: 'Numérisation', note: 'vers un dossier partagé par service, avec un compte réservé à la machine', from: 5, to: 7 },
      { label: 'Sécurité et entretien', note: 'mot de passe d’administration changé, micrologiciel à jour, responsable nommé', from: 6, to: 9 },
      { label: 'Vérification', note: 'chaque poste imprime et numérise ; une fiche d’une page affichée près de la machine', from: 9, to: 10 },
    ], caption: 'Figure 6 · Dix jours ouvrés dans l’exemple, pour un bureau d’une quinzaine de postes. La période accentuée est la première : l’inventaire, qui dit quelles machines sont encore branchées sur un poste. Durées indicatives d’un exemple construit.', alt: 'Calendrier de dix jours ouvrés : inventaire (accentué), réseau et adresses, pilotes et files, numérisation, sécurité et entretien, vérification.' },
  },
  en: {
    cover: { eyebrow: 'Network printer · Algeria · 2027', title: ['Sharing a printer on the network', 'and no longer seeing it “offline”'], subtitle: 'On the network and not on one computer, a reserved address, one driver for all, scanning to a folder', left: { label: '“Offline”', sub: 'every other day' }, right: { label: 'On the network', sub: 'fixed address, one driver' } },
    couches: { title: 'Office printing, in five layers', layers: [
      { label: 'Connection', items: [{ name: 'The connection: the printer on the network, by cable for preference, and not on one computer', sub: 'it no longer depends on a computer being on' }] },
      { label: 'Address', items: [{ name: 'The address: always the same, reserved in the router and written on the machine', sub: 'the simplest cause of an “offline”', accent: true }] },
      { label: 'Driver', items: [{ name: 'The driver: the same on every computer, installed from a single place', sub: 'no more reinstalling at random' }] },
      { label: 'Queue', items: [{ name: 'The queue: a crossing point that receives the jobs and sends them to the right printer', sub: 'a job in error is seen, and removed' }] },
      { label: 'Upkeep', items: [{ name: 'Upkeep: toner, page counter, firmware updates, a person in charge', sub: 'a printer is also a computer' }] },
    ], caption: 'Figure 1 · The accented layer is the address. A printer plugged into the network with an address that changes goes “offline” after every power cut; with a reserved address, the four other layers can finally hold.', alt: 'Five layers: the connection; the address (accented); the driver; the queue; upkeep.' },
    horsligne: { caption: 'Figure 2 · Two ways of plugging in the same printer. On the reception computer, it disappears for the five others as soon as that computer switches off. On the network switch, with a fixed address, each computer reaches it directly. Constructed example.' },
    adresse: { caption: 'Figure 3 · One working week. With an automatic address, a power cut on Tuesday evening is enough: the printer answers at another address, the computers still write to the old one. With a reserved address, nothing changes. Fictitious addresses.' },
    remettre: { title: 'Putting printing back on its feet, in six steps', items: [
      { label: 'Inventory', sub: 'machines, connections, addresses' },
      { label: 'Plug in', sub: 'on the network, no longer on a PC', accent: true },
      { label: 'Reserve', sub: 'one address per printer' },
      { label: 'Deploy', sub: 'the same driver, from one point' },
      { label: 'Scan', sub: 'to a shared folder, per department' },
      { label: 'Maintain', sub: 'toner, counter, updates, a name' },
    ], caption: 'Figure 4 · The accented step is the second: plug the printer into the network. It is the move that removes the most faults at once. The next four stop them coming back.', alt: 'Six steps: inventory, plug in (accented), reserve, deploy, scan, maintain.' },
    pannes: { title: 'Six faults, the cause to check first, the move', columns: ['The cause to check first', 'The move'], rows: [
      { label: 'The printer is “offline”', cells: ['address changed, or sharing computer off', 'configuration page, then a reserved address'] },
      { label: 'Documents stay in the queue', cells: ['a job in error holds back the next ones', 'remove the first, not the whole queue'] },
      { label: 'It prints strange characters', cells: ['a driver that is not the model’s own', 'the exact driver, the same everywhere'] },
      { label: 'The scan does not arrive', cells: ['folder moved, or password changed', 'an account for the printer, a fixed folder'] },
      { label: 'One computer cannot print', cells: ['wrong default printer on that computer', 'check that computer before touching the rest'] },
      { label: 'Everything is slow on Sunday morning', cells: ['one very large file ahead of twenty small ones', 'print it later, or a second queue'] },
    ], caption: 'Figure 5 · Six common faults. The middle column gives the cause to check first, not the only possible one; the right-hand one, the move that settles it. Reinstalling the driver appears only once: it is rarely the right answer.', alt: 'Matrix of six faults: the printer is offline, documents stay in the queue, it prints strange characters, the scan does not arrive, one computer cannot print, everything is slow on Sunday morning; for each, the cause to check first and the move.' },
    calendrier: { title: 'Ten working days for printing that holds', unit: 'd', items: [
      { label: 'Inventory', note: 'machines, connections, addresses, drivers installed, faults of the month', from: 0, to: 2, accent: true },
      { label: 'Network and addresses', note: 'printers plugged into the network, a reserved and recorded address for each', from: 2, to: 4 },
      { label: 'Drivers and queues', note: 'one driver per model, installed from a single point; queues named by place', from: 3, to: 6 },
      { label: 'Scanning', note: 'to a shared folder per department, with an account kept for the machine', from: 5, to: 7 },
      { label: 'Security and upkeep', note: 'admin password changed, firmware up to date, person in charge named', from: 6, to: 9 },
      { label: 'Check', note: 'every computer prints and scans; a one-page sheet displayed near the machine', from: 9, to: 10 },
    ], caption: 'Figure 6 · Ten working days in the example, for an office of about fifteen computers. The accented period is the first: the inventory, which says which machines are still plugged into one computer. Indicative durations of a constructed example.', alt: 'Ten-working-day calendar: inventory (accented), network and addresses, drivers and queues, scanning, security and upkeep, check.' },
  },
  ar: {
    cover: { eyebrow: 'طابعة الشبكة · الجزائر · 2027', title: ['تقاسم طابعة على الشبكة', 'دون أن تظهر «غير متصلة»'], subtitle: 'على الشبكة لا على حاسوب، عنوان محجوز، برنامج التعريف نفسه في كل مكان، ومسح نحو مجلد', left: { label: '«غير متصلة»', sub: 'يوماً من يومين' }, right: { label: 'على الشبكة', sub: 'عنوان ثابت، وتعريف واحد' } },
    couches: { title: 'الطباعة في المكتب، في خمس طبقات', layers: [
      { label: 'الوصل', items: [{ name: 'الوصل: الطابعة على الشبكة، بكابل إن أمكن، لا على حاسوب', sub: 'لم تعد تتوقف على حاسوب مشغَّل' }] },
      { label: 'العنوان', items: [{ name: 'العنوان: هو نفسه دائماً، محجوز في الموجّه ومكتوب على الآلة', sub: 'أبسط سبب لظهور «غير متصلة»', accent: true }] },
      { label: 'التعريف', items: [{ name: 'برنامج التعريف: هو نفسه على كل الحواسيب، مثبَّت من مكان واحد', sub: 'لا إعادة تثبيت عشوائية بعد الآن' }] },
      { label: 'الطابور', items: [{ name: 'الطابور: نقطة عبور تستقبل الأعمال وترسلها إلى الطابعة الصحيحة', sub: 'العمل الخاطئ يُرى، ويُسحب' }] },
      { label: 'الصيانة', items: [{ name: 'الصيانة: الحبر، عدّاد الصفحات، تحديثات البرنامج الثابت، وشخص مسؤول', sub: 'الطابعة حاسوب كذلك' }] },
    ], caption: 'الشكل 1 · الطبقة المبرزة هي العنوان. الطابعة الموصولة بالشبكة بعنوان يتغير تصير «غير متصلة» بعد كل انقطاع كهرباء؛ وبعنوان محجوز، تستطيع الطبقات الأربع الأخرى أن تصمد أخيراً.', alt: 'خمس طبقات: الوصل؛ العنوان (مبرزة)؛ برنامج التعريف؛ الطابور؛ والصيانة.' },
    horsligne: { caption: 'الشكل 2 · طريقتان لوصل الطابعة نفسها. على حاسوب الاستقبال، تختفي للخمسة الآخرين ما إن ينطفئ هذا الحاسوب. وعلى محوّل الشبكة، بعنوان ثابت، كل حاسوب يصل إليها مباشرة. مثال مركَّب.' },
    adresse: { caption: 'الشكل 3 · أسبوع عمل. بعنوان آلي، يكفي انقطاع كهرباء مساء الثلاثاء: الطابعة تجيب على عنوان آخر، والحواسيب تكتب دائماً إلى القديم. وبعنوان محجوز، لا شيء يتغير. عناوين خيالية.' },
    remettre: { title: 'إعادة الطباعة إلى حالها، في ست مراحل', items: [
      { label: 'الجرد', sub: 'الآلات، الوصلات، والعناوين' },
      { label: 'الوصل', sub: 'على الشبكة، لا على حاسوب', accent: true },
      { label: 'الحجز', sub: 'عنوان لكل طابعة' },
      { label: 'النشر', sub: 'برنامج التعريف نفسه، من نقطة واحدة' },
      { label: 'المسح', sub: 'نحو مجلد مشترك، لكل مصلحة' },
      { label: 'الصيانة', sub: 'الحبر، العدّاد، التحديثات، واسم' },
    ], caption: 'الشكل 4 · المرحلة المبرزة هي الثانية: وصل الطابعة بالشبكة. وهي الحركة التي تحذف أكثر الأعطال دفعة واحدة. والأربع الموالية تمنع عودتها.', alt: 'ست مراحل: الجرد، الوصل (مبرزة)، الحجز، النشر، المسح، والصيانة.' },
    pannes: { title: 'ستة أعطال، السبب الذي يُراجَع أولاً، والحركة', columns: ['السبب الذي يُراجَع أولاً', 'الحركة'], rows: [
      { label: 'الطابعة «غير متصلة»', cells: ['عنوان تغيّر، أو الحاسوب الذي يتقاسمها مطفأ', 'صفحة الإعدادات، ثم عنوان محجوز'] },
      { label: 'الوثائق تبقى في الطابور', cells: ['عمل خاطئ يحبس الموالية', 'سحب الأول، لا الطابور كله'] },
      { label: 'تطبع رموزاً غريبة', cells: ['برنامج تعريف ليس لهذا الطراز', 'التعريف الدقيق، وهو نفسه في كل مكان'] },
      { label: 'المسح لا يصل', cells: ['مجلد نُقل، أو كلمة مرور تغيّرت', 'حساب للطابعة، ومجلد ثابت'] },
      { label: 'حاسوب واحد لا يطبع', cells: ['طابعة افتراضية خاطئة على هذا الحاسوب', 'مراجعة هذا الحاسوب قبل لمس الباقي'] },
      { label: 'كل شيء بطيء صباح الأحد', cells: ['ملف كبير جداً أمام عشرين صغيراً', 'طباعته لاحقاً، أو طابور ثانٍ'] },
    ], caption: 'الشكل 5 · ستة أعطال شائعة. العمود الأوسط يعطي السبب الذي يُراجَع أولاً، لا الوحيد الممكن؛ والآخر، الحركة التي تحلّه. وإعادة تثبيت برنامج التعريف لا تظهر إلا مرة: نادراً ما تكون الجواب الصحيح.', alt: 'مصفوفة من ستة أعطال: الطابعة غير متصلة، الوثائق تبقى في الطابور، تطبع رموزاً غريبة، المسح لا يصل، حاسوب واحد لا يطبع، وكل شيء بطيء صباح الأحد؛ ولكل واحد، السبب الذي يُراجَع أولاً والحركة.' },
    calendrier: { title: 'عشرة أيام عمل لطباعة تصمد', unit: 'يوم', items: [
      { label: 'الجرد', note: 'الآلات، الوصلات، العناوين، برامج التعريف المثبَّتة، وأعطال الشهر', from: 0, to: 2, accent: true },
      { label: 'الشبكة والعناوين', note: 'الطابعات موصولة بالشبكة، وعنوان محجوز ومسجَّل لكل واحدة', from: 2, to: 4 },
      { label: 'التعريفات والطوابير', note: 'تعريف لكل طراز، مثبَّت من نقطة واحدة؛ وطوابير مسمّاة حسب المكان', from: 3, to: 6 },
      { label: 'المسح الضوئي', note: 'نحو مجلد مشترك لكل مصلحة، بحساب خاص بالآلة', from: 5, to: 7 },
      { label: 'الأمن والصيانة', note: 'كلمة مرور الإدارة مغيَّرة، البرنامج الثابت محدَّث، ومسؤول معيَّن', from: 6, to: 9 },
      { label: 'المراجعة', note: 'كل حاسوب يطبع ويمسح؛ وورقة من صفحة معلَّقة قرب الآلة', from: 9, to: 10 },
    ], caption: 'الشكل 6 · عشرة أيام عمل في المثال، لمكتب من نحو خمسة عشر حاسوباً. الفترة المبرزة هي الأولى: الجرد، الذي يقول أي الآلات ما زالت موصولة بحاسوب. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من عشرة أيام عمل: الجرد (مبرزة)، الشبكة والعناوين، التعريفات والطوابير، المسح الضوئي، الأمن والصيانة، ثم المراجعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      horsligne: { svg: horsligne(e.horsligne, rtl), caption: t.horsligne.caption, alt: e.horsligne.alt },
      adresse: { svg: adresse(e.adresse, rtl), caption: t.adresse.caption, alt: e.adresse.alt },
      remettre: { svg: steps({ title: t.remettre.title, steps: t.remettre.items, arrows: true, rtl }), caption: t.remettre.caption, alt: t.remettre.alt },
      pannes: { svg: matrix({ title: t.pannes.title, columns: t.pannes.columns, rows: t.pannes.rows, rtl }), caption: t.pannes.caption, alt: t.pannes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 10, tick: 2, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
