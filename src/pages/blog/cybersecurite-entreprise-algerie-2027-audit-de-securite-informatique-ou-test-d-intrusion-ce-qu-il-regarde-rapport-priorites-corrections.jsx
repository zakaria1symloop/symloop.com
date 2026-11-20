import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/cybersecurite-entreprise-algerie-2027-audit-de-securite-informatique-ou-test-d-intrusion-ce-qu-il-regarde-rapport-priorites-corrections.mjs';

const SLUG = 'cybersecurite-entreprise-algerie-2027-audit-de-securite-informatique-ou-test-d-intrusion-ce-qu-il-regarde-rapport-priorites-corrections';
const FIGURES = ['comparatif', 'surface', 'etapes', 'priorites', 'couches', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  acces: '/blog/acces-a-distance-au-bureau-entreprise-algerie-2027-bureau-a-distance-qui-ne-fonctionne-pas-teletravail-tunnel-chiffre-sans-port-ouvert/',
  ransomware: '/blog/ransomware-entreprise-algerie-2027-que-faire-premiere-heure-fichiers-chiffres-cinq-barrieres-sauvegarde-reprise/',
  piratage: '/blog/piratage-entreprise-algerie-2027-boite-mail-piratee-faux-rib-fournisseur-que-faire-premiere-heure-double-verification-regles-de-transfert/',
  sauvegardes: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  infogerance: '/blog/infogerance-maintenance-informatique-entreprise-algerie-2027-contrat-delais-inventaire-supervision-rapport-mensuel/',
  messagerie: '/blog/messagerie-professionnelle-entreprise-algerie-2027-nom-de-domaine-boites-spf-dkim-dmarc-depart-employe-microsoft-365/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
};

const CONTENT = {
  fr: {
    kind: 'Cybersécurité · Algérie · 2027', title: "Cybersécurité d'entreprise en Algérie (2027) : audit de sécurité informatique ou test d'intrusion, ce qu'il regarde, dans quel ordre, et ce que vous devez recevoir à la fin",
    dek: "« Un client étranger nous demande si nous avons fait un audit de sécurité. Trois sociétés nous ont répondu : l'une propose un “test d'intrusion”, l'autre un “audit”, la troisième un “scan”, à des prix qui vont du simple au décuple, et aucune ne dit ce que nous recevrons. Nous sommes quarante, avec un serveur, une messagerie en ligne, un site et une application de gestion. Qu'est-ce qu'un audit regarde vraiment, dans quel ordre, combien de temps cela prend, et que doit-on avoir en main à la fin ? » Un audit utile tient en une page : des constats classés par gravité, l'effort de chaque correction, et les cinq premières à faire cette semaine.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Cybersécurité d’entreprise', 'Audit de sécurité informatique', 'Test d’intrusion', 'Échelle de gravité', 'Plan de correction', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Trois prestations portent des noms voisins. Le **scan** est un programme qui cherche des faiblesses connues. Le **test d'intrusion** est une attaque simulée et autorisée contre une cible précise. L'**audit de sécurité** évalue le niveau de sécurité de toute l'organisation : ce qui est exposé sur internet, les comptes, les postes et les serveurs, les données, l'organisation. Pour une entreprise qui n'en a jamais fait, on commence par l'audit. Ce que vous devez recevoir : chaque constat avec sa gravité sur une échelle de 0 à 10, la correction proposée, l'effort estimé, et un ordre. Dans l'exemple, quatorze constats, dont cinq graves et rapides, corrigés en une semaine.",
      "Ce guide s'adresse au gérant d'une entreprise de dix à deux cents postes à qui un client, une banque ou un donneur d'ordre demande un audit, à celui qui veut savoir où il en est avant de dépenser, et au fondateur installé en France qui pilote une société en Algérie. Les notions citées viennent de sources publiques : les définitions du test d'intrusion, du scanner de vulnérabilités et de l'audit de sécurité, l'échelle de gravité CVSS, les référentiels CIS, NIST et ISO/IEC 27001. L'entreprise, les constats et leurs notes sont un exemple construit. Ce guide ne donne pas de prix et ne traite pas des obligations légales ou sectorielles : elles se voient avec votre conseil.",
    ],
    sections: [
      { heading: "Audit, test d'intrusion, scan : trois prestations, trois questions", body: [
        "La figure compare l'audit et le test d'intrusion sur six points ; le scan, lui, est un outil que les deux utilisent.",
      ], visual: 'comparatif', after: [
        "**Le scan.** Un scanner de vulnérabilités est un programme conçu pour évaluer des ordinateurs, des réseaux ou des applications à la recherche de faiblesses connues. Il sort une liste, longue, sans dire ce qui compte chez vous. C'est un outil, pas une prestation. **Le test d'intrusion.** C'est une cyberattaque simulée et autorisée contre un système, menée pour en évaluer la sécurité : on vise une cible, un site, une application, un réseau, et l'on cherche jusqu'où l'on arrive. Il prouve ; il ne fait pas l'inventaire. **L'audit.** C'est l'évaluation du niveau de sécurité de l'information dans une organisation : il regarde tout, des réglages à la façon de travailler, et il classe.",
        "**Dans quel ordre.** Faire tester par intrusion un système qui n'a jamais été rangé revient à payer quelqu'un pour trouver la porte restée ouverte que l'audit aurait signalée en une heure. On audite, on corrige, puis on teste ce qui doit résister : le site marchand, l'application ouverte aux clients. **Comparer trois devis.** Demandez à chacun le périmètre, les jours passés chez vous, un exemple de rapport, et si le recontrôle est compris. Deux offres au même intitulé peuvent décrire un scan d'une heure ou dix jours de travail.",
      ] },
      { heading: "Ce qu'un inconnu voit de vous depuis internet", body: [
        "La figure montre le premier regard d'un audit : six portes visibles de l'extérieur, et la gravité de ce qu'on y trouve.",
      ], visual: 'surface', after: [
        "**Sans mot de passe.** L'auditeur commence dehors, avec ce que n'importe qui peut voir : les services qui répondent à votre adresse, votre site, votre messagerie, votre nom de domaine. Dans l'exemple, six portes : un port de bureau à distance ouvert sur la box, douze boîtes sans double vérification, un site dont une extension n'a pas été mise à jour depuis quatorze mois, une page d'administration accessible à tous, un nom de domaine sans protection contre l'usurpation, un Wi-Fi invité sur le même réseau que les postes.",
        "**La gravité.** Chaque constat reçoit une note. L'échelle la plus répandue, le CVSS, va de 0 à 10 : faible de 0,1 à 3,9, moyen de 4,0 à 6,9, élevé de 7,0 à 8,9, critique de 9,0 à 10. Elle a été conçue pour les failles des logiciels ; pour un réglage ou une habitude, l'auditeur donne une note du même type, et doit dire comment il l'a établie. Le port ouvert est décrit dans [le guide sur l'accès à distance](" + L.acces + "), l'usurpation d'adresse dans [le guide sur la messagerie professionnelle](" + L.messagerie + "). **L'accord écrit.** Rien de tout cela ne se fait sans un document signé qui fixe le périmètre, les dates et les personnes à prévenir : c'est ce qui distingue un audit d'une intrusion.",
      ] },
      { heading: "Un audit de sécurité, en six temps", body: [
        "Le premier temps est accentué : sans périmètre ni accord écrit, il n'y a pas d'audit.",
      ], visual: 'etapes', after: [
        "**Cadrer** : ce qui est dans le périmètre, ce qui n'y est pas, les dates, qui est prévenu. **Inventorier** : les postes, les serveurs, les comptes, les services en ligne ; on ne protège pas ce qu'on ne connaît pas, et les surprises viennent souvent d'un service que personne n'avait listé. **Voir de l'extérieur**, puis **vérifier à l'intérieur** : qui est administrateur, quels comptes restent ouverts après un départ, depuis quand les serveurs n'ont pas été mis à jour, et si une sauvegarde a déjà été restaurée, selon le [guide sur les sauvegardes](" + L.sauvegardes + ").",
        "**Classer** : par gravité, puis par effort. **Corriger et recontrôler** : les urgences dans la semaine, le reste selon un plan, et un recontrôle à trois mois. Un audit sans recontrôle est une photographie ; ce que vous achetez, c'est la correction.",
      ] },
      { heading: "Quatorze constats, cinq à corriger cette semaine", body: [
        "La figure place les quatorze constats de l'exemple selon leur gravité et l'effort pour les corriger.",
      ], visual: 'priorites', after: [
        "**La lecture.** En haut à gauche, ce qui est grave et rapide : cinq constats, tout le critique et tout l'élevé. Fermer le port de bureau à distance prend une heure. Activer la double vérification sur la messagerie, une journée. Mettre le site à jour, une demi-journée. Fermer les comptes d'anciens salariés, une heure. Essayer de restaurer la sauvegarde, une journée. En une semaine, le risque le plus lourd a disparu, sans rien acheter.",
        "**Le reste.** Huit constats moyens, un faible : retirer les droits d'administrateur des postes, mettre à jour un serveur, séparer le Wi-Fi invité, tenir un inventaire, former les équipes. Ils demandent des jours ou des semaines et se planifient, avec un responsable et une date. **Ce que le rapport doit contenir.** Pour chaque constat : ce qui a été vu, la preuve, la gravité, la correction, l'effort, le responsable. Et une première page que le gérant lit en cinq minutes. Si un attaquant a déjà profité d'une de ces portes, la marche à suivre est dans [le guide sur le ransomware](" + L.ransomware + ") et dans [le guide sur le piratage](" + L.piratage + ").",
      ] },
      { heading: "Ce qu'un audit examine, en cinq couches", body: [
        "La couche accentuée est l'exposition : c'est par elle que l'on commence.",
      ], visual: 'couches', after: [
        "**Exposition, identités, postes et serveurs, données, organisation.** Ces cinq couches recoupent les référentiels publics. Les contrôles du CIS sont un recueil de bonnes pratiques de sécurité informatique, organisé en dix-huit actions clés. Le cadre de cybersécurité du NIST est un ensemble de lignes directrices pour évaluer et améliorer sa préparation, autour de six fonctions : gouverner, identifier, protéger, détecter, répondre, rétablir. La norme ISO/IEC 27001 fixe les exigences d'un système de management de la sécurité de l'information. Pour une application ouverte sur internet, le Top Ten de l'OWASP liste les risques de sécurité applicative les plus critiques.",
        "**Ce qu'on en fait.** Une entreprise de quarante postes n'a pas à choisir un référentiel avant de commencer : l'auditeur s'en sert comme d'une liste pour ne rien oublier, et vous dit lequel il a suivi. Pour l'application de gestion, la question de qui voit quoi et de qui a modifié quoi relève du [guide sur les rôles et le journal d'audit](" + L.roles + "). **Après l'audit**, tenir les corrections dans la durée est un travail d'entretien, décrit dans [le guide sur l'infogérance](" + L.infogerance + ").",
      ] },
      { heading: "Un audit en 2027, en semaines", body: [
        "Quatre semaines dans l'exemple, dont une pour corriger les urgences.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, cadrage et inventaire.** **Semaine 2, mesures et vérifications** : le regard de l'extérieur, les comptes et les droits, les mises à jour, l'essai de restauration. Ordre de grandeur de l'exemple, pour quarante postes : cinq journées d'auditeur réparties sur ces deux semaines, et quelques heures de votre informaticien.",
        "**Semaine 3, rapport et urgences** : restitution au gérant, correction des cinq premiers constats. **Semaine 4, suite et recontrôle** : plan des corrections restantes, vérification que les urgences sont bien fermées, rendez-vous à trois mois.",
      ], list: [
        "**Ce que le gérant reçoit** : une page avec les constats classés, les cinq premiers à corriger, l'effort de chacun, et la date du recontrôle.",
        "**Ce que l'entreprise ne fait plus** : acheter un test d'intrusion avant d'avoir rangé, recevoir un rapport que personne ne lit, corriger ce qui est facile plutôt que ce qui est grave, répondre « je crois que oui » au client qui demande.",
        "**Ce qui est mesuré** : constats ouverts par gravité, jours depuis la dernière mise à jour des serveurs, comptes sans double vérification, date de la dernière restauration réussie.",
        "**Ce que fait Symloop** : l'audit avec un accord écrit, le rapport classé, la correction des urgences avec votre équipe, le recontrôle, puis l'entretien ; et, pour les applications que nous construisons, la sécurité prise en compte dès la conception.",
      ], faq: [
        { q: "Qu'est-ce qu'un audit de sécurité informatique ?", a: "C'est l'évaluation du niveau de sécurité de l'information d'une organisation : ce qui est visible d'internet, les comptes et les droits, les postes et les serveurs, les données et les sauvegardes, l'organisation. Il se termine par des constats classés et un plan de correction." },
        { q: "Quelle différence entre un audit et un test d'intrusion ?", a: "L'audit cherche toutes les faiblesses et les classe. Le test d'intrusion est une attaque simulée et autorisée contre une cible précise, pour voir jusqu'où l'on arrive. On audite et on corrige d'abord ; on teste ensuite ce qui doit résister." },
        { q: "Un scan de vulnérabilités suffit-il ?", a: "Non. Un scanner est un programme qui cherche des faiblesses connues ; il ne voit ni les comptes d'anciens salariés, ni la sauvegarde jamais restaurée, ni l'absence de double vérification. C'est un outil utile à l'auditeur, pas un audit." },
        { q: "Combien de temps dure un audit pour une PME ?", a: "Dans notre exemple, pour quarante postes : environ cinq journées d'auditeur sur deux semaines, puis une semaine pour le rapport et les urgences, et un recontrôle. La durée dépend du nombre de sites, de serveurs et d'applications dans le périmètre." },
        { q: "Que doit contenir le rapport d'audit ?", a: "Pour chaque constat : ce qui a été observé, la preuve, la gravité sur une échelle expliquée, la correction, l'effort estimé et un responsable. Et une première page lisible par le gérant, avec les corrections dans l'ordre. Demandez un exemple de rapport avant de signer." },
        { q: "Par quoi commencer pour sécuriser une entreprise ?", a: "Par ce qui est grave et rapide. Le plus souvent : fermer ce qui est exposé sur internet sans raison, activer la double vérification sur la messagerie, fermer les comptes des anciens salariés, mettre à jour, et essayer une restauration de sauvegarde." },
        { q: "Faut-il viser une certification comme ISO 27001 ?", a: "Seulement si un client ou un marché l'exige. La norme fixe les exigences d'un système de management de la sécurité ; c'est un projet d'organisation de plusieurs mois. Un audit et ses corrections sont le premier pas, utile avec ou sans certification." },
        { q: "Un audit peut-il perturber notre activité ?", a: "Bien cadré, non. L'essentiel se fait en lecture, et les vérifications qui pourraient gêner sont planifiées en dehors des heures de travail, avec les personnes prévenues. C'est le rôle de l'accord écrit du début." },
        { q: "À quelle fréquence refaire un audit ?", a: "Un recontrôle trois mois après, pour vérifier les corrections ; puis un audit à chaque changement important, nouveau site, nouvelle application, changement de prestataire, et à intervalle régulier, que vous fixez selon vos enjeux." },
        { q: "Comment choisir un prestataire de cybersécurité ?", a: "Demandez le périmètre proposé, le nombre de jours, un exemple de rapport, la méthode de notation, et si la correction des urgences et le recontrôle sont compris. Un prestataire qui commence par un accord écrit et finit par un ordre de correction fait son métier." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "On audite, on corrige, puis on teste ce qui doit résister." },
      { after: 3, text: "Un rapport d'audit ne vaut pas par son nombre de pages : il vaut par l'ordre dans lequel il vous dit de corriger." },
    ],
    cta: { eyebrow: "Dites-nous combien de postes, de serveurs et d'applications vous avez, et qui vous demande un audit : nous revenons avec un périmètre, un nombre de jours et un exemple de rapport", title: "Client qui exige un audit, devis impossibles à comparer, ou fondateur en France qui veut savoir où en est sa société : nous auditons avec un accord écrit, classons les constats, corrigeons les urgences avec vous et recontrôlons", body: "Un périmètre écrit, des constats classés par gravité et par effort, cinq corrections dans la semaine, un recontrôle à trois mois. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.ransomware, kind: '2027', name: 'Ransomware en entreprise : la première heure, les cinq barrières' },
      { href: L.piratage, kind: '2027', name: 'Piratage en entreprise : boîte mail piratée, faux RIB, double vérification' },
      { href: L.acces, kind: '2027', name: 'Accès à distance au bureau : sans port ouvert, tunnel chiffré' },
      { href: L.infogerance, kind: '2027', name: 'Infogérance et maintenance informatique : supervision, délais, rapport mensuel' },
    ] },
  },
  en: {
    kind: 'Cybersecurity · Algeria · 2027', title: "Company cybersecurity in Algeria (2027): IT security audit or penetration test, what it looks at, in what order, and what you should receive at the end",
    dek: "“A foreign customer is asking whether we have had a security audit. Three firms answered us: one offers a ‘penetration test’, another an ‘audit’, the third a ‘scan’, at prices ranging from one to ten, and none says what we will receive. We are forty people, with a server, online mail, a website and a management application. What does an audit really look at, in what order, how long does it take, and what should we have in hand at the end?” A useful audit fits on one page: findings ranked by severity, the effort of each fix, and the first five to do this week.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Company cybersecurity', 'IT security audit', 'Penetration test', 'Severity scale', 'Remediation plan', 'Algeria 2027'],
    intro: [
      "**Short answer.** Three services have similar names. A **scan** is a program that looks for known weaknesses. A **penetration test** is an authorised simulated attack on a precise target. A **security audit** assesses the security level of the whole organisation: what is exposed to the internet, the accounts, the PCs and servers, the data, the organisation. For a company that has never done one, you start with the audit. What you should receive: every finding with its severity on a 0 to 10 scale, the proposed fix, the estimated effort, and an order. In the example, fourteen findings, five of them serious and quick, fixed in one week.",
      "This guide is for the manager of a company with ten to two hundred workstations whom a customer, a bank or a principal asks for an audit, for the one who wants to know where they stand before spending, and for the founder based in France who runs a company in Algeria. The notions quoted come from public sources: the definitions of the penetration test, the vulnerability scanner and the security audit, the CVSS severity scale, and the CIS, NIST and ISO/IEC 27001 frameworks. The company, the findings and their scores are a constructed example. This guide gives no prices and does not cover legal or sector obligations: those are matters for your adviser.",
    ],
    sections: [
      { heading: "Audit, penetration test, scan: three services, three questions", body: [
        "The figure compares the audit and the penetration test on six points; the scan is a tool both of them use.",
      ], visual: 'comparatif', after: [
        "**The scan.** A vulnerability scanner is a computer program designed to assess computers, networks or applications for known weaknesses. It produces a list, a long one, without saying what matters in your case. It is a tool, not a service. **The penetration test.** It is an authorised simulated cyberattack on a system, carried out to evaluate its security: a target is chosen, a website, an application, a network, and the tester sees how far they get. It proves; it does not take stock. **The audit.** It is the assessment of the level of information security in an organisation: it looks at everything, from settings to ways of working, and it ranks.",
        "**In what order.** Having a system that has never been tidied tested by intrusion amounts to paying someone to find the door left open that the audit would have flagged in an hour. You audit, you fix, then you test what has to resist: the online shop, the application open to customers. **Comparing three quotations.** Ask each one for the scope, the days spent on your premises, a sample report, and whether the second check is included. Two offers with the same title can describe a one-hour scan or ten days of work.",
      ] },
      { heading: "What a stranger sees of you from the internet", body: [
        "The figure shows an audit's first look: six doors visible from outside, and the severity of what is found there.",
      ], visual: 'surface', after: [
        "**Without a password.** The auditor starts outside, with what anyone can see: the services that answer at your address, your website, your mail, your domain name. In the example, six doors: a remote desktop port opened on the router, twelve mailboxes without two-step verification, a website with a plugin not updated for fourteen months, an administration page open to everyone, a domain name with no protection against spoofing, a guest Wi-Fi on the same network as the workstations.",
        "**Severity.** Each finding gets a score. The most widely used scale, CVSS, runs from 0 to 10: low from 0.1 to 3.9, medium from 4.0 to 6.9, high from 7.0 to 8.9, critical from 9.0 to 10. It was designed for software flaws; for a setting or a habit, the auditor gives a score of the same kind, and must say how it was arrived at. The open port is described in [the guide to remote access](" + L.acces + "), address spoofing in [the guide to professional mail](" + L.messagerie + "). **The written agreement.** None of this is done without a signed document setting the scope, the dates and the people to warn: that is what separates an audit from an intrusion.",
      ] },
      { heading: "A security audit, in six steps", body: [
        "The first step is accented: without a scope and a written agreement, there is no audit.",
      ], visual: 'etapes', after: [
        "**Scope it**: what is in scope, what is not, the dates, who is warned. **Take stock**: workstations, servers, accounts, online services; you cannot protect what you do not know, and surprises often come from a service nobody had listed. **Look from outside**, then **check inside**: who is an administrator, which accounts stay open after someone leaves, how long the servers have gone without updates, and whether a backup has ever been restored, following [the guide to backups](" + L.sauvegardes + ").",
        "**Rank**: by severity, then by effort. **Fix and check again**: emergencies within the week, the rest according to a plan, and a second check at three months. An audit with no second check is a photograph; what you are buying is the fix.",
      ] },
      { heading: "Fourteen findings, five to fix this week", body: [
        "The figure places the fourteen findings of the example by severity and by the effort needed to fix them.",
      ], visual: 'priorites', after: [
        "**How to read it.** Top left, what is serious and quick: five findings, everything critical and everything high. Closing the remote desktop port takes an hour. Turning on two-step verification for mail, a day. Updating the website, half a day. Closing former employees' accounts, an hour. Trying to restore the backup, a day. In one week the heaviest risk is gone, without buying anything.",
        "**The rest.** Eight medium findings, one low: removing administrator rights from the PCs, updating a server, separating the guest Wi-Fi, keeping an inventory, training the teams. They take days or weeks and are planned, with an owner and a date. **What the report must contain.** For each finding: what was seen, the proof, the severity, the fix, the effort, the owner. And a first page the manager reads in five minutes. If an attacker has already used one of these doors, what to do is in [the guide to ransomware](" + L.ransomware + ") and in [the guide to hacking](" + L.piratage + ").",
      ] },
      { heading: "What an audit examines, in five layers", body: [
        "The accented layer is exposure: that is where it starts.",
      ], visual: 'couches', after: [
        "**Exposure, identities, PCs and servers, data, organisation.** These five layers match the public frameworks. The CIS Controls are a publication of best practice guidelines for computer security, organised in eighteen key actions. The NIST Cybersecurity Framework is a set of guidelines for assessing and improving preparedness, around six functions: govern, identify, protect, detect, respond, recover. The ISO/IEC 27001 standard sets the requirements for an information security management system. For an application open to the internet, the OWASP Top Ten lists the most critical application security risks.",
        "**What is done with them.** A company with forty workstations does not have to choose a framework before starting: the auditor uses it as a checklist so that nothing is forgotten, and tells you which one was followed. For the management application, the question of who sees what and who changed what belongs to [the guide to roles and the audit log](" + L.roles + "). **After the audit**, keeping the fixes in place over time is upkeep work, described in [the guide to managed IT](" + L.infogerance + ").",
      ] },
      { heading: "An audit in 2027, in weeks", body: [
        "Four weeks in the example, one of them to fix the emergencies.",
      ], visual: 'calendrier', after: [
        "**Week 1, scoping and stock-take.** **Week 2, measurements and checks**: the look from outside, accounts and rights, updates, the trial restore. Order of magnitude in the example, for forty workstations: five auditor days spread over those two weeks, and a few hours of your IT person's time.",
        "**Week 3, report and emergencies**: debrief with the manager, the first five findings fixed. **Week 4, follow-up and second check**: plan for the remaining fixes, verification that the emergencies are really closed, meeting at three months.",
      ], list: [
        "**What the manager receives**: one page with the ranked findings, the first five to fix, the effort for each, and the date of the second check.",
        "**What the company no longer does**: buy a penetration test before tidying up, receive a report nobody reads, fix what is easy rather than what is serious, answer “I think so” to the customer who asks.",
        "**What is measured**: open findings by severity, days since the servers were last updated, accounts without two-step verification, date of the last successful restore.",
        "**What Symloop does**: the audit with a written agreement, the ranked report, fixing the emergencies with your team, the second check, then upkeep; and, for the applications we build, security taken into account from the design stage.",
      ], faq: [
        { q: "What is an IT security audit?", a: "It is the assessment of an organisation's level of information security: what is visible from the internet, accounts and rights, PCs and servers, data and backups, the organisation. It ends with ranked findings and a remediation plan." },
        { q: "What is the difference between an audit and a penetration test?", a: "The audit looks for all the weaknesses and ranks them. The penetration test is an authorised simulated attack on a precise target, to see how far it gets. You audit and fix first; then you test what has to resist." },
        { q: "Is a vulnerability scan enough?", a: "No. A scanner is a program that looks for known weaknesses; it sees neither former employees' accounts, nor the backup never restored, nor the lack of two-step verification. It is a useful tool for the auditor, not an audit." },
        { q: "How long does an audit take for a small company?", a: "In our example, for forty workstations: about five auditor days over two weeks, then a week for the report and the emergencies, and a second check. The duration depends on the number of sites, servers and applications in scope." },
        { q: "What must the audit report contain?", a: "For each finding: what was observed, the proof, the severity on an explained scale, the fix, the estimated effort and an owner. And a first page the manager can read, with the fixes in order. Ask for a sample report before signing." },
        { q: "Where do you start to secure a company?", a: "With what is serious and quick. Most often: close what is exposed to the internet for no reason, turn on two-step verification for mail, close former employees' accounts, update, and try restoring a backup." },
        { q: "Should we aim for a certification such as ISO 27001?", a: "Only if a customer or a market requires it. The standard sets the requirements for a security management system; it is an organisational project of several months. An audit and its fixes are the first step, useful with or without certification." },
        { q: "Can an audit disrupt our business?", a: "Properly scoped, no. Most of it is done in read-only mode, and the checks that might get in the way are planned outside working hours, with the people concerned warned. That is the role of the written agreement at the start." },
        { q: "How often should an audit be repeated?", a: "A second check three months later, to verify the fixes; then an audit at every significant change, new site, new application, change of provider, and at a regular interval that you set according to what is at stake." },
        { q: "How do you choose a cybersecurity provider?", a: "Ask for the proposed scope, the number of days, a sample report, the scoring method, and whether fixing the emergencies and the second check are included. A provider who starts with a written agreement and ends with an order of fixes is doing the job properly." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "You audit, you fix, then you test what has to resist." },
      { after: 3, text: "An audit report is not worth its number of pages: it is worth the order in which it tells you to fix things." },
    ],
    cta: { eyebrow: "Tell us how many workstations, servers and applications you have, and who is asking you for an audit: we come back with a scope, a number of days and a sample report", title: "A customer who requires an audit, quotations impossible to compare, or a founder in France who wants to know where their company stands: we audit with a written agreement, rank the findings, fix the emergencies with you and check again", body: "A written scope, findings ranked by severity and effort, five fixes within the week, a second check at three months. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.ransomware, kind: '2027', name: 'Ransomware in a company: the first hour, the five barriers' },
      { href: L.piratage, kind: '2027', name: 'Hacking in a company: hacked mailbox, forged bank details, two-step verification' },
      { href: L.acces, kind: '2027', name: 'Remote access to the office: no open port, encrypted tunnel' },
      { href: L.infogerance, kind: '2027', name: 'Managed IT and maintenance: monitoring, response times, monthly report' },
    ] },
  },
  ar: {
    kind: 'الأمن السيبراني · الجزائر · 2027', title: "الأمن السيبراني للمؤسسة في الجزائر (2027): تدقيق أمن الإعلام الآلي أم اختبار اختراق، ماذا يفحص، بأي ترتيب، وماذا يجب أن تستلموا في النهاية",
    dek: "«زبون أجنبي يسألنا هل أجرينا تدقيقاً أمنياً. أجابتنا ثلاث شركات: واحدة تقترح “اختبار اختراق”، والأخرى “تدقيقاً”، والثالثة “مسحاً”، بأسعار تتراوح من واحد إلى عشرة، ولا واحدة تقول ماذا سنستلم. نحن أربعون، بخادم وبريد على الإنترنت وموقع وتطبيق تسيير. ماذا يفحص التدقيق فعلاً، بأي ترتيب، كم يأخذ من الوقت، وماذا يجب أن يكون بأيدينا في النهاية؟» التدقيق المفيد يسع في صفحة: ملاحظات مرتَّبة حسب الخطورة، جهد كل تصحيح، والخمس الأولى التي تُنجَز هذا الأسبوع.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['الأمن السيبراني للمؤسسة', 'تدقيق أمن الإعلام الآلي', 'اختبار الاختراق', 'سلّم الخطورة', 'خطة التصحيح', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** ثلاث خدمات تحمل أسماء متقاربة. **المسح** برنامج يبحث عن نقاط ضعف معروفة. **اختبار الاختراق** هجوم محاكى ومرخَّص به على هدف محدَّد. و**التدقيق الأمني** يقيّم مستوى أمن المؤسسة كلها: ما هو معروض على الإنترنت، الحسابات، الحواسيب والخوادم، البيانات، والتنظيم. ولمؤسسة لم تُجرِ واحداً قط، نبدأ بالتدقيق. وما يجب أن تستلموه: كل ملاحظة بخطورتها على سلّم من 0 إلى 10، التصحيح المقترَح، الجهد المقدَّر، وترتيب. في المثال، أربع عشرة ملاحظة، خمس منها خطيرة وسريعة، تُصحَّح في أسبوع.",
      "هذا الدليل موجَّه إلى مسيّر مؤسسة فيها من عشرة إلى مئتي حاسوب يطلب منه زبون أو بنك أو صاحب مشروع تدقيقاً، وإلى من يريد أن يعرف أين هو قبل أن ينفق، وإلى المؤسس المقيم في فرنسا الذي يسيّر شركة في الجزائر. المفاهيم المذكورة آتية من مصادر علنية: تعريفات اختبار الاختراق وماسح الثغرات والتدقيق الأمني، سلّم الخطورة " + I('CVSS') + "، والمراجع " + I('CIS') + " و" + I('NIST') + " و" + I('ISO/IEC 27001') + ". المؤسسة والملاحظات وعلاماتها مثال مركَّب. هذا الدليل لا يعطي أسعاراً ولا يتناول الالتزامات القانونية أو القطاعية: تُراجَع مع مستشاركم.",
    ],
    sections: [
      { heading: "تدقيق، اختبار اختراق، مسح: ثلاث خدمات، ثلاثة أسئلة", body: [
        "الشكل يقارن التدقيق واختبار الاختراق في ست نقاط؛ أما المسح فأداة يستعملها الاثنان.",
      ], visual: 'comparatif', after: [
        "**المسح.** ماسح الثغرات برنامج مصمَّم لتقييم الحواسيب أو الشبكات أو التطبيقات بحثاً عن نقاط ضعف معروفة. يُخرج قائمة، طويلة، دون أن يقول ما يهمّ عندكم. هو أداة، لا خدمة. **اختبار الاختراق.** هو هجوم سيبراني محاكى ومرخَّص به على نظام، يُنجَز لتقييم أمنه: يُستهدف هدف، موقع أو تطبيق أو شبكة، ونبحث إلى أين نصل. يثبت؛ ولا يجرد. **التدقيق.** هو تقييم مستوى أمن المعلومات في مؤسسة: ينظر في كل شيء، من الإعدادات إلى طريقة العمل، ويرتّب.",
        "**بأي ترتيب.** إخضاع نظام لم يُرتَّب قط لاختبار اختراق يعني أن ندفع لأحدهم ليجد الباب المتروك مفتوحاً الذي كان التدقيق سينبّه إليه في ساعة. ندقّق، نصحّح، ثم نختبر ما يجب أن يصمد: المتجر على الإنترنت، والتطبيق المفتوح للزبائن. **مقارنة ثلاثة عروض.** اطلبوا من كل واحد المحيط، الأيام التي يقضيها عندكم، نموذجاً من التقرير، وهل المراقبة الثانية مشمولة. عرضان بالعنوان نفسه قد يصفان مسحاً من ساعة أو عشرة أيام من العمل.",
      ] },
      { heading: "ما يراه مجهول منكم من الإنترنت", body: [
        "الشكل يبيّن النظرة الأولى في التدقيق: ستة أبواب تُرى من الخارج، وخطورة ما يوجد فيها.",
      ], visual: 'surface', after: [
        "**دون كلمة مرور.** المدقِّق يبدأ من الخارج، بما يستطيع أي أحد أن يراه: الخدمات التي تجيب في عنوانكم، موقعكم، بريدكم، واسم نطاقكم. في المثال، ستة أبواب: منفذ سطح المكتب البعيد مفتوح على الموجِّه، اثنتا عشرة علبة دون تحقق بخطوتين، موقع فيه إضافة لم تُحدَّث منذ أربعة عشر شهراً، صفحة إدارة مفتوحة للجميع، اسم نطاق دون حماية من الانتحال، وواي فاي ضيوف في الشبكة نفسها مع الحواسيب.",
        "**الخطورة.** كل ملاحظة تأخذ علامة. والسلّم الأكثر انتشاراً، " + I('CVSS') + "، يمتد من 0 إلى 10: ضعيف من 0,1 إلى 3,9، متوسط من 4,0 إلى 6,9، مرتفع من 7,0 إلى 8,9، وحرج من 9,0 إلى 10. وقد صُمِّم لثغرات البرمجيات؛ ولإعداد أو لعادة، يعطي المدقِّق علامة من النوع نفسه، وعليه أن يقول كيف حدّدها. والمنفذ المفتوح موصوف في [دليل الوصول عن بعد](" + L.acces + ")، وانتحال العنوان في [دليل البريد المهني](" + L.messagerie + "). **الموافقة المكتوبة.** لا شيء من هذا يُنجَز دون وثيقة موقَّعة تحدّد المحيط والتواريخ ومن يجب إعلامه: وهذا ما يميّز التدقيق عن الاختراق.",
      ] },
      { heading: "تدقيق أمني، في ست مراحل", body: [
        "المرحلة الأولى مبرزة: دون محيط ولا موافقة مكتوبة، لا يوجد تدقيق.",
      ], visual: 'etapes', after: [
        "**التأطير**: ما هو داخل المحيط، وما ليس فيه، التواريخ، ومن يُعلَم. **الجرد**: الحواسيب، الخوادم، الحسابات، والخدمات على الإنترنت؛ لا نحمي ما لا نعرفه، والمفاجآت تأتي غالباً من خدمة لم يدرجها أحد. **النظر من الخارج**، ثم **التحقق من الداخل**: من هو مسؤول، أي حسابات بقيت مفتوحة بعد مغادرة، منذ متى لم تُحدَّث الخوادم، وهل استُرجعت نسخة احتياطية من قبل، حسب [دليل النسخ الاحتياطية](" + L.sauvegardes + ").",
        "**الترتيب**: حسب الخطورة، ثم حسب الجهد. **التصحيح والمراجعة**: العاجل خلال الأسبوع، والباقي حسب خطة، ومراقبة ثانية بعد ثلاثة أشهر. التدقيق دون مراقبة ثانية صورة؛ وما تشترونه هو التصحيح.",
      ] },
      { heading: "أربع عشرة ملاحظة، خمس تُصحَّح هذا الأسبوع", body: [
        "الشكل يضع الملاحظات الأربع عشرة للمثال حسب خطورتها وجهد تصحيحها.",
      ], visual: 'priorites', after: [
        "**القراءة.** في الأعلى، ما هو خطير وسريع: خمس ملاحظات، كل الحرج وكل المرتفع. إغلاق منفذ سطح المكتب البعيد يأخذ ساعة. تفعيل التحقق بخطوتين على البريد، يوماً. تحديث الموقع، نصف يوم. إغلاق حسابات الأجراء السابقين، ساعة. وتجربة استرجاع النسخة الاحتياطية، يوماً. وفي أسبوع يزول الخطر الأثقل، دون شراء شيء.",
        "**الباقي.** ثماني ملاحظات متوسطة، وواحدة ضعيفة: سحب صلاحيات المسؤول من الحواسيب، تحديث خادم، فصل واي فاي الضيوف، مسك جرد، وتكوين الفرق. تتطلب أياماً أو أسابيع وتُبرمَج، بمسؤول وتاريخ. **ما يجب أن يحتويه التقرير.** لكل ملاحظة: ما رُئي، الدليل، الخطورة، التصحيح، الجهد، والمسؤول. وصفحة أولى يقرؤها المسيّر في خمس دقائق. وإذا كان مهاجم قد استغل أحد هذه الأبواب، فما يجب فعله في [دليل فيروس الفدية](" + L.ransomware + ") وفي [دليل الاختراق](" + L.piratage + ").",
      ] },
      { heading: "ما يفحصه التدقيق، في خمس طبقات", body: [
        "الطبقة المبرزة هي الانكشاف: منها نبدأ.",
      ], visual: 'couches', after: [
        "**الانكشاف، الهويات، الحواسيب والخوادم، البيانات، والتنظيم.** هذه الطبقات الخمس توافق المراجع العلنية. ضوابط " + I('CIS') + " مجموعة من أحسن الممارسات لأمن الحاسوب، منظَّمة في ثمانية عشر إجراء أساسياً. وإطار الأمن السيبراني لـ " + I('NIST') + " مجموعة من الخطوط التوجيهية لتقييم الجاهزية وتحسينها، حول ست وظائف: الحوكمة، التحديد، الحماية، الكشف، الاستجابة، والاستعادة. ومعيار " + I('ISO/IEC 27001') + " يحدّد متطلبات نظام تسيير أمن المعلومات. ولتطبيق مفتوح على الإنترنت، قائمة " + I('OWASP Top Ten') + " تعدّد أخطر مخاطر أمن التطبيقات.",
        "**ما نفعله بها.** مؤسسة من أربعين حاسوباً لا تحتاج إلى اختيار مرجع قبل البدء: المدقِّق يستعمله كقائمة حتى لا يُنسى شيء، ويقول لكم أيّها اتّبع. ولتطبيق التسيير، مسألة من يرى ماذا ومن عدّل ماذا تعود إلى [دليل الأدوار وسجل التدقيق](" + L.roles + "). **بعد التدقيق**، الإبقاء على التصحيحات في المدى الطويل عمل صيانة، موصوف في [دليل تسيير الإعلام الآلي](" + L.infogerance + ").",
      ] },
      { heading: "تدقيق سنة 2027، بالأسابيع", body: [
        "أربعة أسابيع في المثال، منها واحد لتصحيح العاجل.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، التأطير والجرد.** **الأسبوع 2، القياسات والتحقق**: النظر من الخارج، الحسابات والصلاحيات، التحديثات، وتجربة الاسترجاع. تقدير المثال، لأربعين حاسوباً: خمسة أيام عمل للمدقِّق موزَّعة على هذين الأسبوعين، وبضع ساعات من تقنيّكم.",
        "**الأسبوع 3، التقرير والعاجل**: عرض على المسيّر، وتصحيح الملاحظات الخمس الأولى. **الأسبوع 4، المتابعة والمراقبة**: خطة للتصحيحات الباقية، التحقق من أن العاجل أُغلق فعلاً، وموعد بعد ثلاثة أشهر.",
      ], list: [
        "**ما يستلمه المسيّر**: صفحة فيها الملاحظات مرتَّبة، الخمس الأولى التي تُصحَّح، جهد كل واحدة، وتاريخ المراقبة الثانية.",
        "**ما لم تعد المؤسسة تفعله**: شراء اختبار اختراق قبل الترتيب، استلام تقرير لا يقرؤه أحد، تصحيح السهل بدل الخطير، والجواب بـ «أظن نعم» على الزبون الذي يسأل.",
        "**ما يُقاس**: الملاحظات المفتوحة حسب الخطورة، الأيام منذ آخر تحديث للخوادم، الحسابات دون تحقق بخطوتين، وتاريخ آخر استرجاع ناجح.",
        "**ما تفعله Symloop**: التدقيق بموافقة مكتوبة، التقرير المرتَّب، تصحيح العاجل مع فريقكم، المراقبة الثانية، ثم الصيانة؛ وللتطبيقات التي نبنيها، أمن يُؤخذ في الحسبان منذ التصميم.",
      ], faq: [
        { q: "ما هو تدقيق أمن الإعلام الآلي؟", a: "هو تقييم مستوى أمن المعلومات في مؤسسة: ما يُرى من الإنترنت، الحسابات والصلاحيات، الحواسيب والخوادم، البيانات والنسخ الاحتياطية، والتنظيم. وينتهي بملاحظات مرتَّبة وخطة تصحيح." },
        { q: "ما الفرق بين التدقيق واختبار الاختراق؟", a: "التدقيق يبحث عن كل نقاط الضعف ويرتّبها. واختبار الاختراق هجوم محاكى ومرخَّص به على هدف محدَّد، لنرى إلى أين نصل. ندقّق ونصحّح أولاً؛ ثم نختبر ما يجب أن يصمد." },
        { q: "هل يكفي مسح الثغرات؟", a: "لا. الماسح برنامج يبحث عن نقاط ضعف معروفة؛ ولا يرى حسابات الأجراء السابقين، ولا النسخة الاحتياطية التي لم تُسترجَع قط، ولا غياب التحقق بخطوتين. هو أداة مفيدة للمدقِّق، لا تدقيقاً." },
        { q: "كم يدوم التدقيق لمؤسسة صغيرة؟", a: "في مثالنا، لأربعين حاسوباً: نحو خمسة أيام عمل للمدقِّق على أسبوعين، ثم أسبوع للتقرير والعاجل، ومراقبة ثانية. والمدة تتوقف على عدد المواقع والخوادم والتطبيقات في المحيط." },
        { q: "ماذا يجب أن يحتوي تقرير التدقيق؟", a: "لكل ملاحظة: ما لوحظ، الدليل، الخطورة على سلّم مشروح، التصحيح، الجهد المقدَّر، ومسؤول. وصفحة أولى يقرؤها المسيّر، بالتصحيحات مرتَّبة. اطلبوا نموذج تقرير قبل الإمضاء." },
        { q: "بماذا نبدأ لتأمين مؤسسة؟", a: "بما هو خطير وسريع. في الغالب: إغلاق ما هو معروض على الإنترنت دون سبب، تفعيل التحقق بخطوتين على البريد، إغلاق حسابات الأجراء السابقين، التحديث، وتجربة استرجاع نسخة احتياطية." },
        { q: "هل يجب السعي إلى شهادة مثل " + I('ISO 27001') + "؟", a: "فقط إذا اشترطها زبون أو سوق. المعيار يحدّد متطلبات نظام تسيير الأمن؛ وهو مشروع تنظيمي من عدة أشهر. والتدقيق وتصحيحاته هما الخطوة الأولى، مفيدة بشهادة أو دونها." },
        { q: "هل يمكن أن يعطّل التدقيق نشاطنا؟", a: "إذا أُطِّر جيداً، لا. أغلبه يُنجَز بالقراءة فقط، والمراجعات التي قد تزعج تُبرمَج خارج ساعات العمل، مع إعلام المعنيين. وهذا دور الموافقة المكتوبة في البداية." },
        { q: "كل كم نعيد التدقيق؟", a: "مراقبة ثانية بعد ثلاثة أشهر، للتحقق من التصحيحات؛ ثم تدقيق عند كل تغيير مهم، موقع جديد، تطبيق جديد، تغيير متعهّد، وعلى فترة منتظمة تحدّدونها حسب رهاناتكم." },
        { q: "كيف نختار متعهّداً في الأمن السيبراني؟", a: "اطلبوا المحيط المقترَح، عدد الأيام، نموذج تقرير، طريقة التنقيط، وهل تصحيح العاجل والمراقبة الثانية مشمولان. المتعهّد الذي يبدأ بموافقة مكتوبة وينتهي بترتيب للتصحيح يؤدي عمله كما يجب." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "ندقّق، نصحّح، ثم نختبر ما يجب أن يصمد." },
      { after: 3, text: "تقرير التدقيق لا يُقدَّر بعدد صفحاته: يُقدَّر بالترتيب الذي يقول لكم أن تصحّحوا به." },
    ],
    cta: { eyebrow: "قولوا لنا كم حاسوباً وخادماً وتطبيقاً عندكم، ومن يطلب منكم تدقيقاً: نعود إليكم بمحيط، وعدد أيام، ونموذج تقرير", title: "زبون يشترط تدقيقاً، عروض لا تُقارَن، أو مؤسس في فرنسا يريد أن يعرف أين وصلت شركته: ندقّق بموافقة مكتوبة، نرتّب الملاحظات، نصحّح العاجل معكم ونراقب من جديد", body: "محيط مكتوب، ملاحظات مرتَّبة حسب الخطورة والجهد، خمسة تصحيحات خلال الأسبوع، ومراقبة ثانية بعد ثلاثة أشهر. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.ransomware, kind: '2027', name: 'فيروس الفدية في المؤسسة: الساعة الأولى، والحواجز الخمسة' },
      { href: L.piratage, kind: '2027', name: 'الاختراق في المؤسسة: بريد مخترَق، بيانات بنكية مزوَّرة، وتحقق بخطوتين' },
      { href: L.acces, kind: '2027', name: 'الوصول إلى المكتب عن بعد: دون منفذ مفتوح، ونفق مشفَّر' },
      { href: L.infogerance, kind: '2027', name: 'صيانة الإعلام الآلي وتسييره: المتابعة، الآجال، التقرير الشهري' },
    ] },
  },
};

const KEYWORDS = "cybersécurité entreprise algérie 2027, entreprise cybersécurité algérie, audit de sécurité informatique algérie, test d'intrusion algérie, sécurité informatique algérie, comment sécuriser un réseau d'entreprise, comment sécuriser les données d'une entreprise, audit informatique pme, rapport d'audit de sécurité, cybersecurity algeria 2027, it security audit small business, penetration test or audit, الأمن السيبراني للمؤسسات الجزائر 2027, تدقيق أمن المعلومات الجزائر, اختبار الاختراق للشركات";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
