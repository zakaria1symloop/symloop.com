import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-gerer-une-societe-de-gardiennage-algerie-2027-logiciel-planning-des-postes-pointage-sur-site-rondes-main-courante-heures-facturees.mjs';

const SLUG = 'comment-gerer-une-societe-de-gardiennage-algerie-2027-logiciel-planning-des-postes-pointage-sur-site-rondes-main-courante-heures-facturees';
const FIGURES = ['constats', 'vacation', 'couverture', 'ronde', 'calendrier', 'couches'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  planning: '/blog/personne-ne-sait-qui-travaille-demain-planning-des-equipes-application-algerie-2027-besoins-par-creneau-contraintes-echanges-pointage/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  pointeuse: '/blog/pointeuse-biometrique-logiciel-presence-algerie-2027-controle-d-acces-pointage-mobile-releve-d-heures-sans-ressaisie/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  photos: '/blog/photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe/',
  espace: '/blog/comment-creer-un-espace-client-en-algerie-2027-suivi-de-dossier-documents-factures-demandes-connexion-par-code-chacun-ne-voit-que-le-sien/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
};

const CONTENT = {
  fr: {
    kind: 'Gardiennage · Algérie · 2027', title: "Comment gérer une société de gardiennage en Algérie (2027) : un poste resté vide que le client découvre avant vous, des rondes signées mais non faites, des heures contestées ; logiciel de gardiennage, planning des postes, pointage sur site, main courante, et ce qu'on met en place",
    dek: "« Je dirige une société de gardiennage : cent quarante agents, une vingtaine de sites. Le mois dernier, un client m'a appelé un matin pour me dire que son poste de nuit était resté vide, et je l'ignorais. Les rondes sont signées sur un cahier, je ne peux pas prouver qu'elles sont faites. Et chaque fin de mois, les heures facturées sont discutées, feuille d'émargement contre feuille d'émargement. Comment gérer une société de gardiennage autrement ? » Une société de gardiennage vend une présence : il faut pouvoir la prouver, poste par poste, nuit par nuit.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de gardiennage', 'Planning des postes', 'Pointage sur site', 'Contrôle de ronde', 'Main courante et heures facturées', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de gardiennage tient quatre choses. **Le planning des postes** : une personne par vacation et par poste, avec les remplacements. **La prise de poste** : un pointage sur place, au téléphone, et une alerte si personne n'a pointé dix minutes après l'heure. **Les rondes et la main courante** : chaque point de contrôle lu avec l'heure, chaque événement écrit avec ses photos. **Les heures** : prestées par site, rapprochées du contrat, envoyées au client. Dans l'exemple de cette page, un site couvert à 98,3 % laisse pourtant trois nuits sans personne au poste.",
      "Cette page s'adresse à celles et ceux qui dirigent une société de gardiennage ou de surveillance, de quelques sites à plusieurs wilayas, et aux entreprises qui gèrent leurs propres équipes de sécurité. Les définitions viennent de sources publiques : agent de sécurité, système de contrôle de ronde, travail posté, géorepérage, communication en champ proche, accord de niveau de service. Le site, ses vacations, ses rondes et ses absences sont un exemple construit. La page ne traite ni de l'agrément et des règles de la profession, ni du droit du travail et de la paie, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Cinq situations que le client voit avant vous", body: [
        "La figure met cinq situations côte à côte, sans outil et avec.",
      ], visual: 'constats', after: [
        "**Le métier.** Un agent de sécurité est une personne employée pour protéger les biens d'une organisation contre des risques variés. Il tient un poste, contrôle les accès à l'entrée des bâtiments et des véhicules, patrouille, note et rend compte. **Ce que vous vendez.** Des heures de présence à un poste, et des rondes : rien que le client puisse vérifier lui-même la nuit. **Le poste vide.** C'est la première situation, et la plus coûteuse : le client l'apprend avant vous.",
        "**La ronde non faite.** Un cahier signé ne prouve rien, ni pour vous ni contre vous. **L'incident sans trace.** Un appel à minuit, puis plus rien d'écrit : le lendemain, personne ne sait ce qui a été fait. **Les heures contestées.** Des feuilles d'émargement recopiées en fin de mois, contre le souvenir du client. **Le remplacement introuvable.** Le carnet de téléphone d'une seule personne. Dans les cinq cas, l'information existait ; elle n'est arrivée ni au bon endroit, ni à temps.",
      ] },
      { heading: "Une vacation, en six temps", body: [
        "La figure suit une vacation, du planning au rapport.",
      ], visual: 'vacation', after: [
        "**Le planning.** Le travail posté est une organisation qui maintient un service en fonctionnement à toute heure ; son plan de roulement en est la pièce centrale. Ici, chaque vacation a un poste, un horaire et une personne ; la logique est celle du [planning des équipes](" + L.planning + "), appliquée à des postes à tenir sans interruption. **La prise de poste.** C'est le temps accentué. L'agent pointe sur place, au téléphone ; l'application vérifie la position par géorepérage, un périmètre virtuel autour du site, ou par l'étiquette du poste.",
        "**L'étiquette.** La communication en champ proche relie deux appareils à quatre centimètres ou moins : il faut être devant le poste pour la lire. **Sans réseau.** Un site isolé ou un sous-sol : le pointage s'enregistre hors connexion et remonte ensuite, voir [l'application hors ligne](" + L.horsligne + "). **La relève.** Consignes transmises, matériel compté, validation des deux personnes. **Le rapport.** Heures, rondes et événements de la vacation, sans ressaisie. **Et la pointeuse ?** Elle convient à un siège ; sur vingt sites, le téléphone la remplace, voir [la pointeuse et le pointage mobile](" + L.pointeuse + ").",
      ] },
      { heading: "Un poste à couvrir, 180 fois par mois", body: [
        "La figure montre un mois de vacations sur un site de trois postes.",
      ], visual: 'couverture', after: [
        "**Le compte.** Trois postes, jour et nuit, trente jours, des vacations de douze heures : 180 vacations, 2 160 heures à couvrir. **Dans l'exemple.** 171 vacations sont tenues comme prévu ; 6 le sont par un remplacement trouvé à temps ; 3 restent vides, trois nuits, soit 36 heures. Taux de couverture : 98,3 %. **Ce que dit le chiffre.** Presque rien : 98,3 % paraît excellent, et le client ne se souvient que des trois nuits.",
        "**L'alerte.** Dix minutes après l'heure de prise de poste, sans pointage, le poste de contrôle est prévenu, par le canal qui arrive, voir [les notifications](" + L.notifications + "). Le délai se règle. **Le remplacement.** L'outil propose les agents disponibles, qui respectent les règles de repos que vous avez fixées, et qui connaissent déjà le site. **Le niveau de service.** Un accord de niveau de service est un accord, le plus souvent contractuel, entre un prestataire et son client : si le vôtre prévoit un taux de couverture ou des pénalités, le calcul se fait sur les mêmes pointages. **Ce que l'on mesure.** Vacations couvertes, retards de prise de poste, postes vides et leur durée, par site et par mois.",
      ] },
      { heading: "La ronde, prouvée point par point", body: [
        "La figure montre un site, ses huit points de contrôle et les quatre rondes d'une nuit.",
      ], visual: 'ronde', after: [
        "**Le contrôle de ronde.** C'est un système qui enregistre les rondes du personnel en patrouille. À chaque point, l'agent lit une étiquette avec son téléphone, qui enregistre l'heure ; le système garde l'identifiant du point, la date et l'heure, et produit des synthèses qui font ressortir les points et les rondes manqués. **Dans l'exemple.** Huit points, une ronde toutes les deux heures : 32 passages attendus dans la nuit. Les rondes de 22:00 et de 00:00 sont complètes. Celle de 02:00 lit six points sur huit : les points 5 et 6, à l'arrière du site, sont sautés. Celle de 04:00 n'est pas faite.",
        "**Le bilan.** 22 passages lus sur 32, soit 69 % ; sur le cahier, quatre rondes étaient signées. **Pendant la nuit.** Une ronde en retard se voit au poste de contrôle, qui appelle l'agent : celle de 04:00 aurait pu être rattrapée. **La main courante.** Chaque événement s'écrit sur le moment : l'heure, le lieu, ce qui a été vu, les personnes prévenues, avec des photos, voir [les photos qui font foi](" + L.photos + "). **Les visites de contrôle.** Elles sont elles aussi des passages lus. **Ce que voit le client.** Le rapport du matin, ou un accès à ses propres sites, voir [l'espace client](" + L.espace + ").",
      ] },
      { heading: "Huit semaines, site par site", body: [
        "Huit semaines dans l'exemple, en commençant par un site pilote.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : vos sites, vos postes, les heures vendues, vos consignes et vos feuilles d'heures actuelles. **Les sites.** Chaque site reçoit ses postes, ses points de contrôle et ses consignes ; les étiquettes se posent en une visite. **Le planning.** Il reprend vos roulements actuels avant de les améliorer.",
        "**Les téléphones.** L'application fonctionne sur des téléphones courants, en arabe et en français, avec de gros boutons : prendre son poste, lire un point, écrire un événement. **Le site pilote.** Un site, deux semaines, puis les autres. **Ce que le logiciel ne fait pas.** Il ne surveille pas à la place des agents et ne remplace ni la formation ni l'encadrement : il prouve ce qui a été fait, et signale ce qui ne l'a pas été. **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "Ce qu'il y a dans un logiciel de gardiennage", body: [
        "La figure empile cinq couches ; la deuxième sert de référence à toutes les autres.",
      ], visual: 'couches', after: [
        "**Les sites et les postes.** Ce que le client a acheté : des postes, des heures, des rondes, des consignes. **Le planning.** C'est la couche accentuée : la présence, les rondes et les heures se comparent à ce qu'il avait prévu. **La présence et le terrain.** Pointages, rondes, main courante, visites de contrôle.",
        "**Les heures.** Prestées par site et par personne, elles se rapprochent du contrat et s'exportent vers votre facturation et votre paie, sans ressaisie. **Les droits.** La personne responsable d'un site voit son site, un client voit les siens, la direction voit tout, voir [les rôles et les droits](" + L.roles + "). **Le pilotage.** Sites en alerte, postes vides, rondes manquées, sur [un tableau de bord](" + L.dashboard + "). **Prêt à l'emploi ou sur mesure.** Des applications de contrôle de ronde et de main courante existent et conviennent à quelques sites. Le sur-mesure se justifie quand il faut relier le planning, les pointages, les rondes et les heures facturées, donner un accès à vos clients, ou couvrir plusieurs wilayas.",
      ], list: [
        "**Ce que vous recevez** : le planning par poste avec remplacements ; le pointage sur site, hors connexion ; l'alerte de poste vide ; les rondes lues point par point ; la main courante avec photos ; les heures prestées par site ; le rapport au client ; un accès client.",
        "**Ce que la société évite** : le poste vide appris par le client, la ronde signée et non faite, l'incident sans trace, les heures discutées chaque fin de mois, le remplacement cherché au téléphone à 22 heures.",
        "**Ce qui est mesuré** : vacations couvertes ; retards de prise de poste ; postes vides et leur durée ; points de ronde lus et manqués ; événements par site ; heures prestées contre heures vendues.",
        "**Ce que fait Symloop** : le cadrage de vos sites et de vos postes, le planning, l'application des agents, les rondes, la main courante, le calcul des heures, le rapport et l'accès client, les droits par rôle, en arabe et en français.",
      ], faq: [
        { q: "Comment gérer une société de gardiennage ?", a: "En prouvant la présence que vous vendez : un planning par poste, un pointage sur place à chaque prise de poste, des rondes lues point par point, une main courante écrite sur le moment, et des heures calculées sur ces pointages." },
        { q: "Quel logiciel pour une société de gardiennage ?", a: "Un logiciel qui tient les sites et les postes, le planning des vacations, le pointage sur site, les rondes, la main courante et les heures prestées par site, avec une application sur le téléphone des agents." },
        { q: "Comment savoir qu'un poste n'est pas couvert ?", a: "Par l'absence de pointage : dix minutes après l'heure de prise de poste, sans pointage sur place, une alerte part au poste de contrôle, qui organise le remplacement." },
        { q: "Comment prouver qu'une ronde a été faite ?", a: "Par la lecture d'une étiquette à chaque point de contrôle : le système enregistre le point, la date et l'heure. Dans l'exemple, 22 passages lus sur 32 attendus." },
        { q: "Qu'est-ce qu'une main courante électronique ?", a: "Le journal des événements d'un poste, tenu sur téléphone : l'heure, le lieu, ce qui a été vu, les personnes prévenues et les photos, écrits sur le moment et consultables par site." },
        { q: "Faut-il un téléphone par agent ?", a: "Un téléphone par poste suffit souvent : chaque personne s'y identifie à la prise de poste. Sur certains sites, le téléphone personnel convient aussi." },
        { q: "L'application fonctionne-t-elle sans réseau ?", a: "Oui. Pointages, points de ronde et événements s'enregistrent hors connexion et remontent dès que le téléphone retrouve du réseau, avec leur heure réelle." },
        { q: "Le client peut-il voir ce qui se passe sur son site ?", a: "Si vous le décidez : un accès limité à ses sites, avec la couverture des postes, les rondes et les événements, ou un rapport envoyé chaque matin." },
        { q: "Comment calculer les heures à facturer ?", a: "À partir des pointages de prise de poste et de relève, par site et par vacation, rapprochés des heures prévues au contrat. Le détail accompagne la facture." },
        { q: "Le logiciel remplace-t-il les visites de contrôle ?", a: "Non. Il indique où aller : les sites en alerte, les rondes manquées, les postes pris en retard. Ces visites sont elles aussi enregistrées." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "98,3 % paraît excellent, et le client ne se souvient que des trois nuits." },
      { after: 3, text: "Sur le cahier, quatre rondes signées. Sur les étiquettes, vingt-deux passages sur trente-deux." },
    ],
    cta: { eyebrow: "Dites-nous combien de sites, combien d'agents, et comment vous comptez les heures aujourd'hui : nous commençons par une semaine de cadrage", title: "Poste vide appris par le client, rondes qu'on ne peut pas prouver, heures contestées, remplacements cherchés au téléphone, ou société de gardiennage que vous lancez en Algérie depuis la France", body: "Symloop construit l'outil qui correspond à vos sites : planning des postes, pointage sur place, rondes, main courante, heures et rapport client. Décrivez-nous vos sites, vos roulements et vos feuilles d'heures actuelles." },
    related: { label: 'À lire aussi', items: [
      { href: L.planning, kind: '2027', name: 'Le planning des équipes : besoins par créneau, contraintes, échanges' },
      { href: L.pointeuse, kind: '2027', name: 'Pointeuse et pointage mobile : relevé d’heures sans ressaisie' },
      { href: L.photos, kind: '2027', name: 'Les photos qui font foi : horodatage, empreinte, accès signé' },
      { href: L.espace, kind: '2027', name: 'Créer un espace client : chacun ne voit que le sien' },
    ] },
  },
  en: {
    kind: 'Security guarding · Algeria · 2027', title: "How to run a security guard company in Algeria (2027): a post left empty that the customer discovers before you, rounds signed but not done, hours disputed; guarding software, post schedule, on-site check-in, incident log, and what we put in place",
    dek: "“I run a security guard company: a hundred and forty guards, about twenty sites. Last month a customer called me one morning to tell me his night post had been left empty, and I did not know. Rounds are signed in a notebook, and I cannot prove they are done. And at every month end the hours billed are argued over, attendance sheet against attendance sheet. How do you run a guarding company differently?” A guarding company sells presence: you have to be able to prove it, post by post, night by night.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Guarding software', 'Post schedule', 'On-site check-in', 'Guard tour control', 'Incident log and hours billed', 'Algeria 2027'],
    intro: [
      "**Short answer.** Guarding software holds four things. **The post schedule**: one person per shift and per post, with replacements. **Taking the post**: a check-in on site, on the phone, and an alert if nobody has checked in ten minutes after the hour. **Rounds and the incident log**: each checkpoint read with the time, each event written with its photos. **Hours**: delivered per site, matched against the contract, sent to the customer. In this page's example, a site covered at 98.3% still leaves three nights with nobody at the post.",
      "This page is for those who run a guarding or surveillance company, from a few sites to several wilayas, and for companies that manage their own security teams. The definitions come from public sources: security guard, guard tour patrol system, shift work, geofence, near-field communication, service-level agreement. The site, its shifts, its rounds and its absences are a constructed example. The page covers neither approval and the rules of the profession, nor labour law and payroll, and quotes no hardware price.",
    ],
    sections: [
      { heading: "Five situations the customer sees before you do", body: [
        "The figure sets five situations side by side, without a tool and with one.",
      ], visual: 'constats', after: [
        "**The trade.** A security guard is a person employed to protect an organisation's assets from a variety of hazards. They hold a post, control access at building entrances and vehicle gates, patrol, take notes and report. **What you sell.** Hours of presence at a post, and rounds: nothing the customer can check for themselves at night. **The empty post.** It is the first situation, and the most costly: the customer learns of it before you do.",
        "**The round not done.** A signed notebook proves nothing, neither for you nor against you. **The incident with no trace.** A call at midnight, then nothing written: the next day, nobody knows what was done. **Disputed hours.** Attendance sheets copied out at month end, against the customer's memory. **The replacement nobody can find.** One person's phone book. In all five cases the information existed; it did not reach the right place, nor in time.",
      ] },
      { heading: "A shift, in six steps", body: [
        "The figure follows a shift, from the schedule to the report.",
      ], visual: 'vacation', after: [
        "**The schedule.** Shift work is a practice designed to keep a service operational at all times; its shift plan, or rota, is the central component. Here each shift has a post, hours and a person; the logic is that of [team scheduling](" + L.planning + "), applied to posts that must be held without a break. **Taking the post.** That is the accented step. The guard checks in on site, on the phone; the application verifies the position by geofence, a virtual perimeter around the site, or by the post's tag.",
        "**The tag.** Near-field communication links two devices at four centimetres or less: you have to be standing at the post to read it. **Without a network.** An isolated site or a basement: the check-in is recorded offline and sent up afterwards, see [the offline application](" + L.horsligne + "). **Handover.** Instructions passed on, equipment counted, confirmation by both people. **The report.** Hours, rounds and events of the shift, with no retyping. **And the time clock?** It suits a head office; across twenty sites the phone replaces it, see [the time clock and mobile check-in](" + L.pointeuse + ").",
      ] },
      { heading: "A post to cover, 180 times a month", body: [
        "The figure shows a month of shifts on a site with three posts.",
      ], visual: 'couverture', after: [
        "**The count.** Three posts, day and night, thirty days, twelve-hour shifts: 180 shifts, 2,160 hours to cover. **In the example.** 171 shifts are held as planned; 6 are held by a replacement found in time; 3 are left empty, three nights, that is 36 hours. Coverage rate: 98.3%. **What the figure says.** Almost nothing: 98.3% looks excellent, and the customer only remembers the three nights.",
        "**The alert.** Ten minutes after the shift is due to start, with no check-in, the control desk is warned, through the channel that arrives, see [notifications](" + L.notifications + "). The delay can be set. **The replacement.** The tool proposes guards who are available, who respect the rest rules you have set, and who already know the site. **The service level.** A service-level agreement is an agreement, typically a binding contract, between a service provider and a customer: if yours provides for a coverage rate or penalties, the calculation is made on the same check-ins. **What is measured.** Shifts covered, late starts, empty posts and their duration, per site and per month.",
      ] },
      { heading: "The round, proven point by point", body: [
        "The figure shows a site, its eight checkpoints and the four rounds of one night.",
      ], visual: 'ronde', after: [
        "**Guard tour control.** It is a system for logging the rounds of personnel on patrol. At each point, the guard reads a tag with the phone, which records the time; the system keeps the checkpoint's identifier, the date and the time, and produces summaries that highlight missed points and rounds. **In the example.** Eight points, a round every two hours: 32 readings expected in the night. The 22:00 and 00:00 rounds are complete. The 02:00 round reads six points of eight: points 5 and 6, at the back of the site, are skipped. The 04:00 round is not done.",
        "**The result.** 22 readings of 32, that is 69%; in the notebook, four rounds were signed. **During the night.** A late round shows at the control desk, which calls the guard: the 04:00 round could have been caught up. **The incident log.** Each event is written at the time: the hour, the place, what was seen, the people informed, with photos, see [photos that stand as proof](" + L.photos + "). **Supervisory visits.** They too are readings. **What the customer sees.** The morning report, or access to their own sites, see [the customer area](" + L.espace + ").",
      ] },
      { heading: "Eight weeks, site by site", body: [
        "Eight weeks in the example, starting with a pilot site.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: your sites, your posts, the hours sold, your instructions and your current timesheets. **The sites.** Each site receives its posts, its checkpoints and its instructions; the tags are fitted in one visit. **The schedule.** It takes over your current rotas before improving them.",
        "**The phones.** The application runs on ordinary phones, in Arabic and in French, with large buttons: take the post, read a point, write an event. **The pilot site.** One site, two weeks, then the others. **What the software does not do.** It does not keep watch in place of the guards and replaces neither training nor supervision: it proves what was done, and flags what was not. **The durations** are those of a constructed example.",
      ] },
      { heading: "What is inside guarding software", body: [
        "The figure stacks five layers; the second is the reference for all the others.",
      ], visual: 'couches', after: [
        "**Sites and posts.** What the customer bought: posts, hours, rounds, instructions. **The schedule.** That is the accented layer: presence, rounds and hours are compared with what it had planned. **Presence and the field.** Check-ins, rounds, incident log, supervisory visits.",
        "**Hours.** Delivered per site and per person, they are matched against the contract and exported to your invoicing and your payroll, with no retyping. **Rights.** The person in charge of a site sees that site, a customer sees their own, management sees everything, see [roles and rights](" + L.roles + "). **Steering.** Sites in alert, empty posts, missed rounds, on [a dashboard](" + L.dashboard + "). **Ready-made or custom.** Guard tour and incident log applications exist and suit a few sites. Custom work is justified when the schedule, the check-ins, the rounds and the hours billed have to be linked, when your customers need access, or when several wilayas have to be covered.",
      ], list: [
        "**What you receive**: the schedule per post with replacements; on-site check-in, offline; the empty-post alert; rounds read point by point; the incident log with photos; hours delivered per site; the customer report; customer access.",
        "**What the company avoids**: the empty post learned from the customer, the round signed and not done, the incident with no trace, hours argued over at every month end, the replacement looked for by phone at 10 pm.",
        "**What is measured**: shifts covered; late starts; empty posts and their duration; round points read and missed; events per site; hours delivered against hours sold.",
        "**What Symloop does**: scoping your sites and posts, the schedule, the guards' application, rounds, the incident log, the calculation of hours, the report and customer access, rights per role, in Arabic and in French.",
      ], faq: [
        { q: "How do you run a security guard company?", a: "By proving the presence you sell: a schedule per post, an on-site check-in each time a post is taken, rounds read point by point, an incident log written at the time, and hours calculated on those check-ins." },
        { q: "What software for a guarding company?", a: "Software that holds sites and posts, the shift schedule, on-site check-in, rounds, the incident log and hours delivered per site, with an application on the guards' phones." },
        { q: "How do you know a post is not covered?", a: "By the absence of a check-in: ten minutes after the shift is due to start, with no check-in on site, an alert goes to the control desk, which arranges the replacement." },
        { q: "How do you prove a round was done?", a: "By reading a tag at each checkpoint: the system records the point, the date and the time. In the example, 22 readings of the 32 expected." },
        { q: "What is an electronic incident log?", a: "The journal of a post's events, kept on a phone: the hour, the place, what was seen, the people informed and the photos, written at the time and searchable per site." },
        { q: "Is one phone per guard needed?", a: "One phone per post is often enough: each person signs in on it when taking the post. On some sites, a personal phone also works." },
        { q: "Does the application work without a network?", a: "Yes. Check-ins, round points and events are recorded offline and sent up as soon as the phone finds a network again, with their real time." },
        { q: "Can the customer see what is happening on their site?", a: "If you decide so: access limited to their sites, with post coverage, rounds and events, or a report sent every morning." },
        { q: "How do you calculate the hours to bill?", a: "From the check-ins at the start of the shift and at handover, per site and per shift, matched against the hours in the contract. The detail goes with the invoice." },
        { q: "Does the software replace supervisory visits?", a: "No. It shows where to go: sites in alert, missed rounds, posts taken late. Those visits are recorded too." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "98.3% looks excellent, and the customer only remembers the three nights." },
      { after: 3, text: "In the notebook, four rounds signed. On the tags, twenty-two readings of thirty-two." },
    ],
    cta: { eyebrow: "Tell us how many sites, how many guards, and how you count hours today: we start with a week of scoping", title: "An empty post learned from the customer, rounds you cannot prove, disputed hours, replacements looked for by phone, or a guarding company you are launching in Algeria from France", body: "Symloop builds the tool that fits your sites: post schedule, on-site check-in, rounds, incident log, hours and customer report. Describe your sites to us, your rotas and your current timesheets." },
    related: { label: 'Also read', items: [
      { href: L.planning, kind: '2027', name: 'Team scheduling: needs per slot, constraints, swaps' },
      { href: L.pointeuse, kind: '2027', name: 'Time clock and mobile check-in: hours with no retyping' },
      { href: L.photos, kind: '2027', name: 'Photos that stand as proof: timestamp, fingerprint, signed access' },
      { href: L.espace, kind: '2027', name: 'Creating a customer area: each customer sees only their own' },
    ] },
  },
  ar: {
    kind: 'الحراسة · الجزائر · 2027', title: "كيف تُسيَّر شركة حراسة في الجزائر (2027): مركز بقي فارغاً يكتشفه الزبون قبلكم، دوريات موقَّعة لم تُنجَز، وساعات محل نزاع؛ برنامج الحراسة، برنامج المراكز، تسجيل الحضور في الموقع، سجل الأحداث، وما نضعه",
    dek: "«أسيّر شركة حراسة: مئة وأربعون عوناً، ونحو عشرين موقعاً. الشهر الماضي، اتصل بي زبون ذات صباح ليقول إن مركزه الليلي بقي فارغاً، ولم أكن أعلم. الدوريات تُوقَّع في دفتر، ولا أستطيع أن أثبت أنها تُنجَز. وفي آخر كل شهر، تُناقَش الساعات المفوتَرة، ورقة حضور مقابل ورقة حضور. كيف تُسيَّر شركة حراسة بطريقة أخرى؟» شركة الحراسة تبيع حضوراً: يجب أن تستطيع إثباته، مركزاً بمركز، وليلة بليلة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج الحراسة', 'برنامج المراكز', 'تسجيل الحضور في الموقع', 'مراقبة الدوريات', 'سجل الأحداث والساعات المفوتَرة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج الحراسة يمسك أربعة أشياء. **برنامج المراكز**: شخص لكل نوبة ولكل مركز، مع البدلاء. **استلام المركز**: تسجيل حضور في المكان، بالهاتف، وتنبيه إذا لم يسجّل أحد عشر دقائق بعد الساعة. **الدوريات وسجل الأحداث**: كل نقطة مراقبة تُقرأ بساعتها، وكل حدث يُكتب بصوره. و**الساعات**: منجزة لكل موقع، تُقارَن بالعقد، وتُرسَل إلى الزبون. في مثال هذه الصفحة، موقع مغطّى بنسبة " + I('98,3') + " بالمئة يترك مع ذلك ثلاث ليالٍ دون أحد في المركز.",
      "هذه الصفحة موجّهة إلى من يسيّر شركة حراسة أو مراقبة، من بضعة مواقع إلى عدة ولايات، وإلى المؤسسات التي تسيّر فرق أمنها الخاصة. التعريفات من مصادر عمومية: عون الأمن، نظام مراقبة الدوريات، العمل بالمناوبة، السياج الجغرافي، الاتصال قريب المدى، واتفاق مستوى الخدمة. والموقع ونوباته ودورياته وغياباته مثال مركَّب. والصفحة لا تتناول الاعتماد وقواعد المهنة، ولا قانون العمل والأجور، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "خمس حالات يراها الزبون قبلكم", body: [
        "الشكل يضع خمس حالات جنباً إلى جنب، دون أداة ومعها.",
      ], visual: 'constats', after: [
        "**المهنة.** عون الأمن شخص يُوظَّف لحماية ممتلكات هيئة من أخطار متنوعة. يشغل مركزاً، يراقب الدخول عند مداخل المباني وبوابات المركبات، يقوم بدوريات، يدوّن، ويبلّغ. **ما تبيعونه.** ساعات حضور في مركز، ودوريات: لا شيء يستطيع الزبون التحقق منه بنفسه في الليل. **المركز الفارغ.** هو الحالة الأولى، والأكثر كلفة: الزبون يعرفها قبلكم.",
        "**الدورية التي لم تُنجَز.** دفتر موقَّع لا يثبت شيئاً، لا لكم ولا عليكم. **الحادث دون أثر.** اتصال في منتصف الليل، ثم لا شيء مكتوب: في الغد، لا أحد يعرف ما تم. **الساعات محل النزاع.** أوراق حضور تُنقَل في آخر الشهر، مقابل ذاكرة الزبون. **البديل الذي لا يُعثر عليه.** دفتر هاتف شخص واحد. وفي الحالات الخمس، المعلومة كانت موجودة؛ لكنها لم تصل لا إلى المكان الصحيح، ولا في الوقت.",
      ] },
      { heading: "نوبة، في ست مراحل", body: [
        "الشكل يتابع نوبة، من البرنامج إلى التقرير.",
      ], visual: 'vacation', after: [
        "**البرنامج.** العمل بالمناوبة تنظيم يُبقي خدمة شغّالة في كل ساعة؛ وجدول التناوب قطعته المركزية. هنا، لكل نوبة مركز، توقيت، وشخص؛ والمنطق هو منطق [برنامج الفرق](" + L.planning + ")، مطبَّقاً على مراكز تُشغَل دون انقطاع. **استلام المركز.** هو المرحلة المبرزة. العون يسجّل حضوره في المكان، بالهاتف؛ والتطبيق يتحقق من الموقع بالسياج الجغرافي، وهو محيط افتراضي حول الموقع، أو بملصق المركز.",
        "**الملصق.** الاتصال قريب المدى يربط جهازين على مسافة أربعة سنتيمترات أو أقل: يجب الوقوف أمام المركز لقراءته. **دون شبكة.** موقع معزول أو طابق تحت الأرض: التسجيل يُحفظ دون اتصال ويُرفَع بعد ذلك، انظر [التطبيق دون اتصال](" + L.horsligne + "). **التسليم.** تعليمات منقولة، عتاد معدود، وتأكيد الشخصين. **التقرير.** ساعات النوبة، دورياتها، وأحداثها، دون إعادة إدخال. **وآلة تسجيل الحضور؟** تناسب مقراً؛ وعلى عشرين موقعاً، يعوّضها الهاتف، انظر [آلة الحضور والتسجيل المتنقل](" + L.pointeuse + ").",
      ] },
      { heading: "مركز يُغطّى 180 مرة في الشهر", body: [
        "الشكل يعرض شهراً من النوبات على موقع بثلاثة مراكز.",
      ], visual: 'couverture', after: [
        "**الحساب.** ثلاثة مراكز، ليلاً ونهاراً، ثلاثين يوماً، بنوبات من اثنتي عشرة ساعة: 180 نوبة، و" + I('2 160') + " ساعة للتغطية. **في المثال.** 171 نوبة مشغولة كما كان مبرمجاً؛ 6 ببديل وُجد في الوقت؛ و3 بقيت فارغة، ثلاث ليالٍ، أي 36 ساعة. نسبة التغطية: " + I('98,3') + " بالمئة. **ما يقوله الرقم.** لا شيء تقريباً: " + I('98,3') + " بالمئة تبدو ممتازة، والزبون لا يتذكّر إلا الليالي الثلاث.",
        "**التنبيه.** عشر دقائق بعد ساعة استلام المركز، دون تسجيل، يُبلَّغ مركز المراقبة، بالقناة التي تصل، انظر [الإشعارات](" + L.notifications + "). والمهلة تُضبط. **البديل.** الأداة تقترح الأعوان المتاحين، الذين يحترمون قواعد الراحة التي حدّدتموها، والذين يعرفون الموقع من قبل. **مستوى الخدمة.** اتفاق مستوى الخدمة اتفاق، تعاقدي في الغالب، بين مقدّم خدمة وزبونه: فإذا نصّ اتفاقكم على نسبة تغطية أو غرامات، يُحسب ذلك على التسجيلات نفسها. **ما يُقاس.** النوبات المغطّاة، التأخر في استلام المركز، والمراكز الفارغة ومدتها، لكل موقع ولكل شهر.",
      ] },
      { heading: "الدورية، مثبَتة نقطة بنقطة", body: [
        "الشكل يعرض موقعاً، نقاط مراقبته الثماني، والدوريات الأربع في ليلة واحدة.",
      ], visual: 'ronde', after: [
        "**مراقبة الدوريات.** نظام يسجّل دوريات الأعوان. عند كل نقطة، يقرأ العون ملصقاً بهاتفه، الذي يسجّل الساعة؛ والنظام يحفظ معرّف النقطة، التاريخ، والساعة، وينتج ملخّصات تُبرز النقاط والدوريات التي لم تُنجَز. **في المثال.** ثماني نقاط، ودورية كل ساعتين: 32 قراءة منتظَرة في الليل. دوريتا " + I('22:00') + " و" + I('00:00') + " كاملتان. ودورية " + I('02:00') + " تقرأ ست نقاط من ثمانٍ: النقطتان 5 و6، في خلف الموقع، لم تُقرآ. ودورية " + I('04:00') + " لم تُنجَز.",
        "**الحصيلة.** 22 قراءة من 32، أي 69 بالمئة؛ وفي الدفتر، كانت أربع دوريات موقَّعة. **أثناء الليل.** دورية متأخرة تُرى في مركز المراقبة، الذي يتصل بالعون: دورية " + I('04:00') + " كان يمكن تداركها. **سجل الأحداث.** كل حدث يُكتب في حينه: الساعة، المكان، ما شوهد، ومن تم إبلاغه، مع صور، انظر [الصور التي تُعتمد دليلاً](" + L.photos + "). **زيارات المراقبة.** هي أيضاً قراءات مسجَّلة. **ما يراه الزبون.** تقرير الصباح، أو دخول إلى مواقعه الخاصة، انظر [فضاء الزبون](" + L.espace + ").",
      ] },
      { heading: "ثمانية أسابيع، موقعاً بموقع", body: [
        "ثمانية أسابيع في المثال، بدءاً بموقع تجريبي.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: مواقعكم، مراكزكم، الساعات المباعة، تعليماتكم، وأوراق الساعات الحالية. **المواقع.** كل موقع يتلقى مراكزه، نقاط مراقبته، وتعليماته؛ والملصقات تُثبَّت في زيارة واحدة. **البرنامج.** يأخذ جداول التناوب الحالية عندكم قبل تحسينها.",
        "**الهواتف.** التطبيق يشتغل على هواتف عادية، بالعربية والفرنسية، بأزرار كبيرة: استلام المركز، قراءة نقطة، وكتابة حدث. **الموقع التجريبي.** موقع واحد، أسبوعان، ثم البقية. **ما لا يفعله البرنامج.** لا يحرس مكان الأعوان ولا يعوّض التكوين ولا التأطير: يثبت ما أُنجز، وينبّه إلى ما لم يُنجَز. **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "ما يوجد في برنامج الحراسة", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية مرجع لكل الأخرى.",
      ], visual: 'couches', after: [
        "**المواقع والمراكز.** ما اشتراه الزبون: مراكز، ساعات، دوريات، وتعليمات. **البرنامج.** هو الطبقة المبرزة: الحضور، الدوريات، والساعات تُقارَن بما كان قد برمجه. **الحضور والميدان.** التسجيلات، الدوريات، سجل الأحداث، وزيارات المراقبة.",
        "**الساعات.** منجزة لكل موقع ولكل شخص، تُقارَن بالعقد وتُصدَّر نحو فوترتكم وأجوركم، دون إعادة إدخال. **الصلاحيات.** المسؤول عن موقع يرى موقعه، الزبون يرى مواقعه، والإدارة ترى كل شيء، انظر [الأدوار والصلاحيات](" + L.roles + "). **القيادة.** المواقع في حالة تنبيه، المراكز الفارغة، والدوريات الناقصة، على [لوحة قيادة](" + L.dashboard + "). **جاهز أو على المقاس.** توجد تطبيقات لمراقبة الدوريات ولسجل الأحداث، وتناسب بضعة مواقع. والعمل على المقاس يُبرَّر حين يلزم ربط البرنامج، التسجيلات، الدوريات، والساعات المفوتَرة، منح دخول لزبائنكم، أو تغطية عدة ولايات.",
      ], list: [
        "**ما تتلقونه**: البرنامج لكل مركز مع البدلاء؛ تسجيل الحضور في الموقع، دون اتصال؛ تنبيه المركز الفارغ؛ دوريات تُقرأ نقطة بنقطة؛ سجل الأحداث بالصور؛ الساعات المنجزة لكل موقع؛ تقرير الزبون؛ ودخول للزبون.",
        "**ما تتفاداه الشركة**: المركز الفارغ الذي يُعرف من الزبون، الدورية الموقَّعة التي لم تُنجَز، الحادث دون أثر، الساعات محل نقاش في آخر كل شهر، والبديل الذي يُبحث عنه بالهاتف في العاشرة ليلاً.",
        "**ما يُقاس**: النوبات المغطّاة؛ التأخر في استلام المركز؛ المراكز الفارغة ومدتها؛ نقاط الدورية المقروءة والناقصة؛ الأحداث لكل موقع؛ والساعات المنجزة مقابل الساعات المباعة.",
        "**ما تفعله Symloop**: تأطير مواقعكم ومراكزكم، البرنامج، تطبيق الأعوان، الدوريات، سجل الأحداث، حساب الساعات، التقرير ودخول الزبون، والصلاحيات حسب الدور، بالعربية والفرنسية.",
      ], faq: [
        { q: "كيف تُسيَّر شركة حراسة؟", a: "بإثبات الحضور الذي تبيعونه: برنامج لكل مركز، تسجيل حضور في المكان عند كل استلام، دوريات تُقرأ نقطة بنقطة، سجل أحداث يُكتب في حينه، وساعات تُحسب على هذه التسجيلات." },
        { q: "أي برنامج لشركة حراسة؟", a: "برنامج يمسك المواقع والمراكز، برنامج النوبات، تسجيل الحضور في الموقع، الدوريات، سجل الأحداث، والساعات المنجزة لكل موقع، مع تطبيق على هاتف الأعوان." },
        { q: "كيف يُعرف أن مركزاً غير مغطّى؟", a: "بغياب التسجيل: عشر دقائق بعد ساعة استلام المركز، دون تسجيل في المكان، ينطلق تنبيه إلى مركز المراقبة، الذي ينظّم التعويض." },
        { q: "كيف يُثبَت أن دورية أُنجزت؟", a: "بقراءة ملصق عند كل نقطة مراقبة: النظام يسجّل النقطة، التاريخ، والساعة. في المثال، 22 قراءة من 32 منتظَرة." },
        { q: "ما هو سجل الأحداث الإلكتروني؟", a: "يومية أحداث المركز، تُمسك على الهاتف: الساعة، المكان، ما شوهد، من تم إبلاغه، والصور، تُكتب في حينها وتُراجَع حسب الموقع." },
        { q: "هل يلزم هاتف لكل عون؟", a: "هاتف لكل مركز يكفي في الغالب: كل شخص يعرّف بنفسه عليه عند استلام المركز. وفي بعض المواقع، يصلح الهاتف الشخصي أيضاً." },
        { q: "هل يشتغل التطبيق دون شبكة؟", a: "نعم. التسجيلات، نقاط الدورية، والأحداث تُحفظ دون اتصال وتُرفَع فور عودة الشبكة إلى الهاتف، بساعتها الحقيقية." },
        { q: "هل يستطيع الزبون رؤية ما يجري في موقعه؟", a: "إذا قرّرتم ذلك: دخول محدود إلى مواقعه، مع تغطية المراكز، الدوريات، والأحداث، أو تقرير يُرسَل كل صباح." },
        { q: "كيف تُحسب الساعات التي تُفوتَر؟", a: "انطلاقاً من تسجيلات استلام المركز وتسليمه، لكل موقع ولكل نوبة، مقارَنة بالساعات المنصوص عليها في العقد. والتفصيل يرافق الفاتورة." },
        { q: "هل يعوّض البرنامج زيارات المراقبة؟", a: "لا. يبيّن إلى أين يُذهَب: المواقع في حالة تنبيه، الدوريات الناقصة، والمراكز المستلَمة بتأخر. وهذه الزيارات تُسجَّل هي أيضاً." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "النسبة تبدو ممتازة، والزبون لا يتذكّر إلا الليالي الثلاث." },
      { after: 3, text: "في الدفتر، أربع دوريات موقَّعة. وعلى الملصقات، اثنتان وعشرون قراءة من اثنتين وثلاثين." },
    ],
    cta: { eyebrow: "قولوا لنا كم موقعاً، كم عوناً، وكيف تحسبون الساعات اليوم: نبدأ بأسبوع تأطير", title: "مركز فارغ يُعرف من الزبون، دوريات لا يمكن إثباتها، ساعات محل نزاع، بدلاء يُبحث عنهم بالهاتف، أو شركة حراسة تطلقونها في الجزائر من فرنسا", body: "Symloop تبني الأداة التي تناسب مواقعكم: برنامج المراكز، تسجيل الحضور في المكان، الدوريات، سجل الأحداث، الساعات، وتقرير الزبون. صِفوا لنا مواقعكم، جداول التناوب عندكم، وأوراق الساعات الحالية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.planning, kind: '2027', name: 'برنامج الفرق: الحاجات لكل فترة، القيود، والتبادل' },
      { href: L.pointeuse, kind: '2027', name: 'آلة الحضور والتسجيل المتنقل: كشف الساعات دون إعادة إدخال' },
      { href: L.photos, kind: '2027', name: 'الصور التي تُعتمد دليلاً: التوقيت، البصمة، والدخول الموقَّع' },
      { href: L.espace, kind: '2027', name: 'إنشاء فضاء للزبون: كل واحد لا يرى إلا ما يخصه' },
    ] },
  },
};

const KEYWORDS = "comment gérer une société de gardiennage, comment gérer une société de gardiennage en algérie 2027, comment gérer une entreprise de sécurité, logiciel de gardiennage, logiciel planning agent de sécurité, contrôle de ronde, contrôleur de ronde, pointeuse de ronde, main courante électronique, logiciel main courante électronique, main courante électronique agent de sécurité, société de gardiennage algérie, security guard management software algeria, guard tour patrol system, electronic incident log, guard scheduling software, برنامج تسيير شركة حراسة, شركة حراسة في الجزائر, مراقبة الدوريات, سجل الأحداث الإلكتروني, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
