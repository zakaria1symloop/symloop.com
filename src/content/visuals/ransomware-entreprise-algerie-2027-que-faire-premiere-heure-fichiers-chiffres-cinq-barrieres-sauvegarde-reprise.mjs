import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { heure, chaine, STRINGS as SC } from './custom/rancon.mjs';
export const slug = 'ransomware-entreprise-algerie-2027-que-faire-premiere-heure-fichiers-chiffres-cinq-barrieres-sauvegarde-reprise';
const I = (x) => `⁦${x}⁩`;
const T = {
  fr: {
    cover: { eyebrow: 'Ransomware en entreprise · Algérie · 2027', title: ['Ransomware en entreprise', 'en Algérie : première heure, barrières'], subtitle: 'Sept gestes dans l’ordre, la chaîne de l’attaque, cinq barrières, une copie hors d’atteinte, la reprise', left: { label: 'Tous les fichiers chiffrés', sub: 'un message demande une rançon' }, right: { label: 'Une copie hors d’atteinte', sub: 'et une reprise déjà essayée' } },
    situations: { title: 'Six phrases de ce matin-là, et la bonne réponse', columns: ['Le réflexe', 'Ce qu’il faut faire'], rows: [
      { label: '« On éteint tout ! »', cells: ['Couper le courant de toutes les machines', 'couper internet et le réseau, isoler les machines touchées, sans les éteindre'] },
      { label: '« On paie, et on n’en parle plus »', cells: ['Répondre au message dans l’heure', 'ne rien payer ni répondre dans l’urgence, décider avec un conseil'] },
      { label: '« Branche la sauvegarde, vite »', cells: ['Restaurer tout de suite sur le serveur touché', 'garder la sauvegarde débranchée, restaurer plus tard sur une machine propre'] },
      { label: '« Ce n’est qu’un poste »', cells: ['Continuer à travailler sur les autres', 'vérifier le serveur, les partages et les sauvegardes avant de reprendre'] },
      { label: '« On réinstalle et c’est fini »', cells: ['Remettre en route sans chercher l’entrée', 'trouver par où il est entré, changer tous les accès, puis réinstaller'] },
      { label: '« Ça ne nous arrivera plus »', cells: ['Reprendre comme avant', 'écrire ce qui a manqué, poser les cinq barrières, essayer la restauration'] },
    ], caption: 'Figure 1 · Six phrases qu’on entend le matin où les fichiers ne s’ouvrent plus, le réflexe qu’elles entraînent et ce qu’il faut faire à la place. Les trois premières se jouent dans la première heure : isoler sans éteindre, ne pas payer dans l’urgence, tenir la sauvegarde à l’écart. Les trois suivantes dans les jours qui suivent : mesurer l’étendue, trouver l’entrée, poser les barrières.', alt: 'Matrice de six phrases entendues le matin d’une attaque par rançongiciel : éteindre tout, payer, brancher la sauvegarde, ce n’est qu’un poste, réinstaller et c’est fini, ça ne nous arrivera plus ; le réflexe et ce qu’il faut faire.' },
    heure: { caption: 'Figure 2 · La première heure, de 08:05 à 09:05, d’après les consignes publiques officielles : couper internet, isoler les machines touchées sans les éteindre, mettre à l’abri les sauvegardes encore saines, alerter par téléphone, noter ce qui est fait, décider qui pilote. À droite, cinq gestes à ne pas faire. Les consignes officielles demandent de ne pas éteindre les machines touchées, pour garder les traces en mémoire, et de n’envisager une extinction que si le chiffrement est encore en cours et qu’on ne peut pas les isoler. Heures et postes sont un exemple construit.' },
    chaine: { caption: 'Figure 3 · La même attaque regardée trois semaines plus tôt : un mot de passe saisi sur une fausse page, une boîte ouverte, un bureau à distance joignable depuis internet, un compte administrateur, les sauvegardes atteintes, puis le chiffrement une nuit de vendredi. Sous chacun des cinq premiers maillons, la barrière qui l’aurait cassé. La cinquième, une copie hors d’atteinte dont la restauration a été essayée, est celle qui décide si l’entreprise repart en deux jours ou n’a plus rien à restaurer. Dates et étapes sont un exemple construit, d’après les descriptions publiques de ces attaques.' },
    couches: { title: 'Cinq barrières, en couches', layers: [
      { label: 'Comptes', items: [{ name: 'Double vérification sur la messagerie et les accès distants, un compte par personne, administrateur à part', sub: 'un mot de passe volé ne suffit plus ; un départ ferme un compte' }] },
      { label: 'Portes', items: [{ name: 'Aucun service ouvert sur internet, accès par tunnel, mises à jour du pare-feu, des serveurs et des postes', sub: 'ce qui n’est pas joignable ne peut pas être forcé' }] },
      { label: 'Cloisons', items: [{ name: 'Réseaux séparés, partages ouverts au strict nécessaire, postes sans droits d’administrateur', sub: 'un poste touché ne doit pas pouvoir atteindre le serveur ni les sauvegardes' }] },
      { label: 'Sauvegardes', items: [{ name: 'Trois copies, deux supports, une hors du site ; une copie hors ligne ou inaltérable ; restauration essayée', sub: 'la seule barrière qui sert encore quand toutes les autres ont cédé', accent: true }] },
      { label: 'Détection et plan', items: [{ name: 'Alertes de connexion et de chiffrement en masse, liste d’appel sur papier, exercice d’une heure par an', sub: 'on répète les gestes de la première heure avant d’en avoir besoin' }] },
    ], caption: 'Figure 4 · La couche accentuée est celle des sauvegardes : c’est la seule qui sert encore quand toutes les autres ont cédé, à condition qu’une copie soit hors d’atteinte et que la restauration ait été essayée. Les comptes, les portes et les cloisons, au-dessus, rendent l’attaque plus difficile et plus lente ; la détection et le plan, en dessous, font gagner les minutes de la première heure.', alt: 'Cinq barrières : comptes ; portes ; cloisons ; sauvegardes (accentuée) ; détection et plan.' },
    calendrier: { title: 'Les cinq barrières en 2027, en semaines', unit: 'sem.', items: [
      { label: 'État des lieux', note: 'comptes et administrateurs, services ouverts sur internet, partages, sauvegardes, essai de restauration ; sans rien changer', from: 0, to: 1 },
      { label: 'Comptes et portes', note: 'double vérification partout, administrateurs séparés, ports fermés, accès par tunnel, mises à jour', from: 1, to: 2 },
      { label: 'Cloisons et sauvegardes', note: 'réseaux séparés, droits réduits, copie hors d’atteinte, restauration complète essayée et chronométrée', from: 2, to: 3, accent: true },
      { label: 'Détection et exercice', note: 'alertes, liste d’appel imprimée, exercice de la première heure avec l’équipe, compte rendu', from: 3, to: 4 },
    ], caption: 'Figure 5 · Quatre semaines dans l’exemple, la première sans rien changer : on regarde les comptes, ce qui est ouvert sur internet et, surtout, on essaie une restauration. La semaine accentuée est celle des cloisons et des sauvegardes, parce que c’est elle qui décide de ce qui reste après une attaque. L’exercice de la dernière semaine dure une heure et se refait chaque année.', alt: 'Calendrier de quatre semaines : état des lieux, comptes et portes, cloisons et sauvegardes (accentué), détection et exercice.' },
    etapes: { title: 'La reprise, en six temps', items: [
      { label: 'Tenir l’isolement', sub: 'rien ne se reconnecte avant d’être vérifié' },
      { label: 'Trouver l’entrée', sub: 'par où il est entré, ce qu’il a touché' },
      { label: 'Changer les accès', sub: 'tous les mots de passe, depuis un poste sûr' },
      { label: 'Restaurer sur du propre', sub: 'machines réinstallées, sauvegarde vérifiée', accent: true },
      { label: 'Rouvrir par priorité', sub: 'caisse et facturation d’abord, le reste ensuite' },
      { label: 'Écrire ce qui a manqué', sub: 'les barrières absentes, avec une date' },
    ], caption: 'Figure 6 · Le temps accentué est la restauration sur du propre : on ne remet pas des données saines sur une machine où l’attaquant est peut-être encore. Avant, on tient l’isolement, on cherche par où il est entré et on change tous les accès depuis un poste sûr ; après, on rouvre par ordre de priorité, et l’on écrit ce qui a manqué avec une date pour chaque barrière.', alt: 'Six temps de la reprise : tenir l’isolement, trouver l’entrée, changer les accès, restaurer sur du propre (accentué), rouvrir par priorité, écrire ce qui a manqué.' },
  },
  en: {
    cover: { eyebrow: 'Ransomware in a company · Algeria · 2027', title: ['Ransomware in a company', 'in Algeria: first hour, barriers'], subtitle: 'Seven actions in order, the attack chain, five barriers, an out-of-reach copy, the recovery', left: { label: 'Every file encrypted', sub: 'a message demands a ransom' }, right: { label: 'An out-of-reach copy', sub: 'and a recovery already tried' } },
    situations: { title: 'Six sentences from that morning, and the right answer', columns: ['The reflex', 'What to do instead'], rows: [
      { label: '“Switch everything off!”', cells: ['Cutting the power to every machine', 'cut the internet and the network; isolate affected machines without switching them off'] },
      { label: '“Let’s pay and be done with it”', cells: ['Replying to the message within the hour', 'pay nothing and reply to nothing in a hurry; decide with an adviser'] },
      { label: '“Plug the backup in, quick”', cells: ['Restoring straight onto the affected server', 'keep the backup unplugged; restore later onto a clean machine'] },
      { label: '“It’s only one PC”', cells: ['Carrying on working on the others', 'check the server, the shares and the backups before anyone resumes'] },
      { label: '“We reinstall and it’s over”', cells: ['Restarting without looking for the way in', 'find how they got in; change every access; then reinstall'] },
      { label: '“It won’t happen to us again”', cells: ['Going back to how things were', 'write down what was missing; put up the five barriers; try the restore'] },
    ], caption: 'Figure 1 · Six sentences heard on the morning the files no longer open, the reflex each one triggers and what to do instead. The first three play out in the first hour: isolate without switching off, do not pay in a hurry, keep the backup away. The next three in the days that follow: measure the extent, find the way in, put up the barriers.', alt: 'Matrix of six sentences heard on the morning of a ransomware attack: switch everything off, pay, plug the backup in, it is only one PC, reinstall and it is over, it will not happen again; the reflex and what to do instead.' },
    heure: { caption: 'Figure 2 · The first hour, from 08:05 to 09:05, following official public guidance: cut the internet, isolate the affected machines without switching them off, put the still-healthy backups out of reach, alert by phone, note what is done, decide who leads. On the right, five things not to do. Official guidance asks not to switch off affected machines, to keep the traces in memory, and to consider a shutdown only if encryption is still running and they cannot be isolated. Times and machines are a constructed example.' },
    chaine: { caption: 'Figure 3 · The same attack seen three weeks earlier: a password typed on a fake page, an open mailbox, a remote desktop reachable from the internet, an administrator account, the backups reached, then encryption on a Friday night. Under each of the first five links, the barrier that would have broken it. The fifth, an out-of-reach copy whose restore has been tried, is the one that decides whether the company restarts in two days or has nothing left to restore. Dates and steps are a constructed example, following public descriptions of these attacks.' },
    couches: { title: 'Five barriers, in layers', layers: [
      { label: 'Accounts', items: [{ name: 'Two-step sign-in on email and remote access, one account per person, a separate administrator account', sub: 'a stolen password is no longer enough; a departure closes an account' }] },
      { label: 'Doors', items: [{ name: 'No service open on the internet, access by tunnel, updates on the firewall, servers and workstations', sub: 'what cannot be reached cannot be forced' }] },
      { label: 'Partitions', items: [{ name: 'Separated networks, shares open to the strict minimum, workstations without administrator rights', sub: 'an affected PC must not be able to reach the server or the backups' }] },
      { label: 'Backups', items: [{ name: 'Three copies, two media, one off site; one copy offline or immutable; restore tried', sub: 'the only barrier still useful when all the others have given way', accent: true }] },
      { label: 'Detection and plan', items: [{ name: 'Alerts on sign-ins and mass encryption, a call list on paper, a one-hour exercise each year', sub: 'the first-hour actions are rehearsed before they are needed' }] },
    ], caption: 'Figure 4 · The accented layer is backups: it is the only one still useful when all the others have given way, provided one copy is out of reach and the restore has been tried. Accounts, doors and partitions, above, make the attack harder and slower; detection and the plan, below, win the minutes of the first hour.', alt: 'Five barriers: accounts; doors; partitions; backups (accented); detection and plan.' },
    calendrier: { title: 'The five barriers in 2027, in weeks', unit: 'wk', items: [
      { label: 'Stock-take', note: 'accounts and administrators, services open on the internet, shares, backups, a restore trial; nothing changed', from: 0, to: 1 },
      { label: 'Accounts and doors', note: 'two-step sign-in everywhere, separate administrators, ports closed, access by tunnel, updates', from: 1, to: 2 },
      { label: 'Partitions and backups', note: 'separated networks, reduced rights, out-of-reach copy, full restore tried and timed', from: 2, to: 3, accent: true },
      { label: 'Detection and exercise', note: 'alerts, printed call list, first-hour exercise with the team, short report', from: 3, to: 4 },
    ], caption: 'Figure 5 · Four weeks in the example, the first with nothing changed: accounts are reviewed, what is open on the internet is listed and, above all, a restore is tried. The accented week is partitions and backups, because it decides what is left after an attack. The exercise in the last week takes one hour and is repeated every year.', alt: 'Four-week calendar: stock-take, accounts and doors, partitions and backups (accented), detection and exercise.' },
    etapes: { title: 'Recovery, in six steps', items: [
      { label: 'Hold the isolation', sub: 'nothing reconnects before it is checked' },
      { label: 'Find the way in', sub: 'how they got in, what they touched' },
      { label: 'Change every access', sub: 'all passwords, from a safe machine' },
      { label: 'Restore onto clean', sub: 'machines reinstalled, backup verified', accent: true },
      { label: 'Reopen by priority', sub: 'till and invoicing first, the rest afterwards' },
      { label: 'Write what was missing', sub: 'the absent barriers, each with a date' },
    ], caption: 'Figure 6 · The accented step is restoring onto clean machines: healthy data is not put back on a machine where the attacker may still be. Before that, isolation is held, the way in is found and every access is changed from a safe machine; afterwards, services reopen in order of priority, and what was missing is written down with a date for each barrier.', alt: 'Six recovery steps: hold the isolation, find the way in, change every access, restore onto clean (accented), reopen by priority, write what was missing.' },
  },
  ar: {
    cover: { eyebrow: 'فيروس الفدية في المؤسسة · الجزائر · 2027', title: ['فيروس الفدية في المؤسسة', 'في الجزائر: الساعة الأولى والحواجز'], subtitle: 'سبع حركات بالترتيب، سلسلة الهجوم، خمسة حواجز، نسخة بعيدة عن المتناول، والاستئناف', left: { label: 'كل الملفات مشفَّرة', sub: 'رسالة تطلب فدية' }, right: { label: 'نسخة بعيدة عن المتناول', sub: 'واستئناف جُرِّب من قبل' } },
    situations: { title: 'ست جمل من ذلك الصباح، والجواب الصحيح', columns: ['ردّ الفعل', 'ما يجب فعله'], rows: [
      { label: '«نطفئ كل شيء!»', cells: ['قطع الكهرباء عن كل الأجهزة', 'قطع الإنترنت والشبكة؛ عزل الأجهزة المصابة دون إطفائها'] },
      { label: '«ندفع وننتهي»', cells: ['الردّ على الرسالة في الساعة نفسها', 'لا دفع ولا ردّ على عجل؛ والقرار مع مستشار'] },
      { label: '«صِلوا النسخة الاحتياطية بسرعة»', cells: ['الاسترجاع فوراً على الخادم المصاب', 'النسخة تبقى مفصولة؛ والاسترجاع لاحقاً على جهاز نظيف'] },
      { label: '«هو حاسوب واحد فقط»', cells: ['مواصلة العمل على الحواسيب الأخرى', 'فحص الخادم والمجلدات المشتركة والنسخ قبل أي استئناف'] },
      { label: '«نعيد التثبيت وينتهي الأمر»', cells: ['إعادة التشغيل دون البحث عن المدخل', 'معرفة من أين دخل؛ تغيير كل المداخل؛ ثم إعادة التثبيت'] },
      { label: '«لن يحدث لنا مرة أخرى»', cells: ['العودة إلى ما كان', 'كتابة ما كان ناقصاً؛ وضع الحواجز الخمسة؛ تجربة الاسترجاع'] },
    ], caption: 'الشكل 1 · ست جمل تُسمع صباح اليوم الذي لا تُفتح فيه الملفات، وردّ الفعل الذي تجرّه، وما يجب فعله بدله. الثلاث الأولى تُحسم في الساعة الأولى: العزل دون إطفاء، عدم الدفع على عجل، إبقاء النسخة الاحتياطية بعيدة. والثلاث التالية في الأيام الموالية: قياس الامتداد، إيجاد المدخل، وضع الحواجز.', alt: 'مصفوفة ست جمل تُسمع صباح هجوم بفيروس الفدية: نطفئ كل شيء، ندفع، صِلوا النسخة، حاسوب واحد فقط، نعيد التثبيت وينتهي الأمر، لن يحدث مرة أخرى؛ ردّ الفعل وما يجب فعله.' },
    heure: { caption: `الشكل 2 · الساعة الأولى، من ${I('08:05')} إلى ${I('09:05')}، حسب التعليمات العمومية الرسمية: قطع الإنترنت، عزل الأجهزة المصابة دون إطفائها، إبعاد النسخ الاحتياطية السليمة، التنبيه بالهاتف، تدوين ما يُفعل، وتقرير من يقود. وعلى الجانب خمسة أشياء لا تُفعل. التعليمات الرسمية تطلب عدم إطفاء الأجهزة المصابة لحفظ الآثار في الذاكرة، ولا يُنظر في الإطفاء إلا إذا كان التشفير ما زال جارياً وتعذّر العزل. الأوقات والأجهزة مثال مركَّب.` },
    chaine: { caption: 'الشكل 3 · الهجوم نفسه منظوراً إليه قبل ثلاثة أسابيع: كلمة مرور كُتبت في صفحة مزيَّفة، علبة مفتوحة، سطح مكتب بعيد في متناول الإنترنت، حساب مدير، بلوغ النسخ الاحتياطية، ثم التشفير ليلة جمعة. تحت كل حلقة من الخمس الأولى الحاجز الذي كان سيقطعها. والخامس، نسخة بعيدة عن المتناول جُرِّب استرجاعها، هو الذي يقرر هل تنطلق المؤسسة في يومين أم لا يبقى لها ما تسترجعه. التواريخ والمراحل مثال مركَّب، حسب الأوصاف العلنية لهذه الهجمات.' },
    couches: { title: 'خمسة حواجز، في طبقات', layers: [
      { label: 'الحسابات', items: [{ name: 'تحقق بخطوتين على البريد والدخول عن بعد، حساب لكل شخص، وحساب المدير على حدة', sub: 'كلمة مرور مسروقة لم تعد تكفي؛ والمغادرة تغلق حساباً' }] },
      { label: 'الأبواب', items: [{ name: 'لا خدمة مفتوحة على الإنترنت، الدخول عبر نفق، وتحديثات جدار الحماية والخوادم والحواسيب', sub: 'ما لا يمكن بلوغه لا يمكن اقتحامه' }] },
      { label: 'الفواصل', items: [{ name: 'شبكات معزولة، مجلدات مشتركة مفتوحة للضروري فقط، وحواسيب دون صلاحيات مدير', sub: 'الحاسوب المصاب لا يجب أن يبلغ الخادم ولا النسخ الاحتياطية' }] },
      { label: 'النسخ الاحتياطية', items: [{ name: 'ثلاث نسخ، وسيطان، واحدة خارج الموقع؛ نسخة غير موصولة أو لا تُغيَّر؛ واسترجاع مجرَّب', sub: 'الحاجز الوحيد الذي ينفع حين تسقط كل الحواجز الأخرى', accent: true }] },
      { label: 'الكشف والخطة', items: [{ name: 'تنبيهات الدخول والتشفير الجماعي، قائمة اتصال على الورق، وتمرين من ساعة كل سنة', sub: 'حركات الساعة الأولى تُكرَّر قبل الحاجة إليها' }] },
    ], caption: 'الشكل 4 · الطبقة المبرزة هي النسخ الاحتياطية: هي الوحيدة التي تنفع حين تسقط كل الأخرى، بشرط أن تكون نسخة بعيدة عن المتناول وأن يكون الاسترجاع قد جُرِّب. الحسابات والأبواب والفواصل، فوقها، تجعل الهجوم أصعب وأبطأ؛ والكشف والخطة، تحتها، يربحان دقائق الساعة الأولى.', alt: 'خمسة حواجز: الحسابات؛ الأبواب؛ الفواصل؛ النسخ الاحتياطية (مبرزة)؛ الكشف والخطة.' },
    calendrier: { title: 'الحواجز الخمسة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'جرد الوضع', note: 'الحسابات والمديرون، الخدمات المفتوحة على الإنترنت، المجلدات المشتركة، النسخ، وتجربة استرجاع؛ دون تغيير شيء', from: 0, to: 1 },
      { label: 'الحسابات والأبواب', note: 'تحقق بخطوتين في كل مكان، مديرون على حدة، منافذ مغلقة، دخول عبر نفق، تحديثات', from: 1, to: 2 },
      { label: 'الفواصل والنسخ', note: 'شبكات معزولة، صلاحيات مقلَّصة، نسخة بعيدة عن المتناول، واسترجاع كامل مجرَّب ومؤقَّت', from: 2, to: 3, accent: true },
      { label: 'الكشف والتمرين', note: 'تنبيهات، قائمة اتصال مطبوعة، تمرين الساعة الأولى مع الفريق، وتقرير قصير', from: 3, to: 4 },
    ], caption: 'الشكل 5 · أربعة أسابيع في المثال، الأول دون تغيير شيء: تُراجَع الحسابات، ويُجرد ما هو مفتوح على الإنترنت، وقبل كل شيء يُجرَّب استرجاع. الأسبوع المبرز هو الفواصل والنسخ، لأنه يقرر ما يبقى بعد الهجوم. وتمرين الأسبوع الأخير يدوم ساعة ويُعاد كل سنة.', alt: 'تقويم أربعة أسابيع: جرد الوضع، الحسابات والأبواب، الفواصل والنسخ (مبرز)، الكشف والتمرين.' },
    etapes: { title: 'الاستئناف، في ست مراحل', items: [
      { label: 'الإبقاء على العزل', sub: 'لا شيء يُعاد وصله قبل فحصه' },
      { label: 'إيجاد المدخل', sub: 'من أين دخل، وماذا مسّ' },
      { label: 'تغيير المداخل', sub: 'كل كلمات المرور، من جهاز آمن' },
      { label: 'الاسترجاع على نظيف', sub: 'أجهزة أُعيد تثبيتها، ونسخة متحقَّق منها', accent: true },
      { label: 'الفتح بالأولوية', sub: 'الصندوق والفوترة أولاً، ثم الباقي' },
      { label: 'كتابة ما نقص', sub: 'الحواجز الغائبة، ولكل واحد تاريخ' },
    ], caption: 'الشكل 6 · المرحلة المبرزة هي الاسترجاع على أجهزة نظيفة: لا تُعاد بيانات سليمة إلى جهاز قد يكون المهاجم ما زال فيه. قبلها يُبقى على العزل، ويُبحث عن المدخل، وتُغيَّر كل المداخل من جهاز آمن؛ وبعدها تُفتح المصالح حسب الأولوية، ويُكتب ما كان ناقصاً مع تاريخ لكل حاجز.', alt: 'ست مراحل للاستئناف: الإبقاء على العزل، إيجاد المدخل، تغيير المداخل، الاسترجاع على نظيف (مبرز)، الفتح بالأولوية، كتابة ما نقص.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      heure: { svg: heure(e.heure, rtl), caption: t.heure.caption, alt: e.heure.alt },
      chaine: { svg: chaine(e.chaine, rtl), caption: t.chaine.caption, alt: e.chaine.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
    },
  };
}
