import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/wifi-qui-coupe-au-bureau-entreprise-algerie-2027-internet-qui-se-coupe-souvent-la-ligne-ou-le-wifi-couverture-bornes-canaux-itinerance.mjs';

const SLUG = 'wifi-qui-coupe-au-bureau-entreprise-algerie-2027-internet-qui-se-coupe-souvent-la-ligne-ou-le-wifi-couverture-bornes-canaux-itinerance';
const FIGURES = ['ordre', 'arbre', 'plan', 'causes', 'couches', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  reseau: '/blog/installation-reseau-informatique-entreprise-algerie-2027-cablage-baie-de-brassage-switch-wifi-pare-feu-lien-de-secours/',
  filtrage: '/blog/comment-bloquer-des-sites-internet-au-bureau-entreprise-algerie-2027-filtrage-web-dns-pare-feu-reseau-invites-debit-l-apres-midi-charte/',
  telephonie: '/blog/standard-telephonique-ip-entreprise-algerie-2027-ipbx-lignes-postes-menu-vocal-file-d-attente-appels-manques-crm/',
  intersites: '/blog/interconnecter-deux-sites-distants-algerie-2027-vpn-siege-agences-depot-plan-d-adresses-debit-secours-logiciel-lent/',
  serveur: '/blog/serveur-lent-entreprise-algerie-2027-logiciel-qui-rame-le-matin-memoire-disques-sauvegarde-en-pleine-journee-mesurer-avant-de-remplacer/',
};

const CONTENT = {
  fr: {
    kind: 'Wi-Fi qui coupe · bureau · Algérie · 2027', title: "Wi-Fi qui coupe au bureau en Algérie (2027) : internet se coupe plusieurs fois par jour, savoir si c'est la ligne ou le Wi-Fi, couverture, bornes câblées, canaux, itinérance, lien de secours",
    dek: "« Internet se coupe plusieurs fois par jour. En salle de réunion, la visioconférence gèle ; au dépôt, les terminaux perdent la connexion ; et de temps en temps, tout le bureau tombe d'un coup. On a ajouté un répéteur, c'est pire. L'opérateur dit que la ligne est bonne, l'installateur dit que c'est la ligne. Qui croire, et que faire ? » Ni l'un ni l'autre sans mesure. Un poste branché par câble tranche en une journée ; un relevé des coupures fait le reste.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Wi-Fi qui coupe', 'Internet qui se coupe souvent', 'Couverture Wi-Fi au bureau', 'Bornes d’accès', 'Lien de secours', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** « Ça coupe » recouvre quatre pannes : la ligne ou le boîtier, la couverture, la saturation, l'itinérance. Pour savoir laquelle, branchez un poste par câble sur le boîtier pendant une journée : s'il coupe aussi, ce n'est pas le Wi-Fi. Notez chaque coupure pendant une semaine, avec l'heure, la pièce et l'appareil. Mesurez le signal pièce par pièce, au téléphone. Puis corrigez la cause, pas le symptôme : un lien de secours pour la ligne, des bornes câblées au plafond pour la couverture, des canaux et des réglages cohérents pour le reste. Un répéteur n'en règle aucune : il réduit le débit sans fil d'au moins la moitié.",
      "Ce guide s'adresse au gérant d'un bureau, d'un magasin, d'un dépôt ou d'une clinique dont la connexion décroche, et au fondateur installé en France qui entend ses équipes se plaindre à distance. Les définitions et les chiffres cités viennent de sources publiques : les canaux du Wi-Fi, la borne d'accès, le répéteur, l'amendement 802.11r, l'utilitaire ping, la perte de paquets. L'étage de six pièces et ses mesures sont un exemple construit. Ce guide ne donne aucun prix de matériel ; pour construire un réseau de zéro, voir [le guide sur l'installation du réseau](" + L.reseau + ").",
    ],
    sections: [
      { heading: "Diagnostiquer dans cet ordre", body: [
        "Le premier temps est accentué : tester avec un poste câblé.",
      ], visual: 'ordre', after: [
        "**Le poste câblé.** C'est le test qui départage l'opérateur et l'installateur. Un ordinateur relié au boîtier par un câble, Wi-Fi désactivé, laissé une journée avec une commande ping en continu : ping est un utilitaire qui teste si une machine du réseau répond. Lancez-en deux, l'une vers le boîtier, l'autre vers une adresse publique. Si la seconde s'interrompt et pas la première, c'est la ligne. Si aucune ne s'interrompt pendant que le Wi-Fi coupe, c'est le Wi-Fi.",
        "**Le relevé.** Une feuille près de chaque poste, ou un message dans un groupe : l'heure, la pièce, l'appareil. Au bout d'une semaine, le motif se lit seul : toujours la salle de réunion, toujours vers dix heures, toujours en marchant vers le dépôt. **La mesure.** Le signal se lit sur un téléphone, en dBm : plus le chiffre est proche de zéro, meilleur il est. Un repère d'usage courant pour la voix et la visio est −67 dBm ; la documentation d'un constructeur, Cisco Meraki, recommande par ailleurs pour les données un rapport signal sur bruit d'au moins 20 dB.",
      ] },
      { heading: "La ligne ou le Wi-Fi : trois questions pour le savoir", body: [
        "La figure range les quatre pannes derrière trois questions.",
      ], visual: 'arbre', after: [
        "**Si le poste câblé coupe aussi.** La perte de paquets survient quand des données qui traversent un réseau n'arrivent pas à destination : ici, elle se produit avant même le Wi-Fi. Trois suspects. La ligne de l'opérateur : envoyez-lui votre relevé daté, pas une impression. Le boîtier : il chauffe, redémarre, ou son alimentation subit les microcoupures de courant, ce qu'un onduleur règle. Enfin le câblage, ou un switch défaillant entre le boîtier et le poste.",
        "**Si seul le Wi-Fi coupe.** Deux questions restent. Dans certaines pièces seulement : c'est la couverture. Partout : aux heures chargées, c'est la saturation ; en se déplaçant, c'est l'itinérance. **Quand tout s'additionne.** Dans un bureau qui a grandi autour d'un seul boîtier, on trouve souvent plusieurs causes à la fois ; on commence alors par la ligne et la couverture, puis l'on remesure.",
      ] },
      { heading: "Le même étage, un boîtier dans l'entrée ou trois bornes au plafond", body: [
        "La figure donne le signal relevé dans six pièces, avant et après.",
      ], visual: 'plan', after: [
        "**La couverture.** Dans l'exemple, le boîtier est dans l'entrée. L'accueil est à −48 dBm, la salle de réunion à −84, le dépôt à −81 : c'est là que les appels hachent. Les bandes des 5 GHz sont davantage absorbées par les matériaux de construction que celles des 2,4 GHz, et portent en général moins loin : la bande la plus rapide est aussi celle qui traverse le moins bien les murs.",
        "**La borne, pas le répéteur.** Un répéteur prend le signal d'un routeur ou d'une borne et le rediffuse : il répète un signal déjà faible, et le débit sans fil y est réduit d'au moins 50 %. Une borne d'accès, elle, est un équipement qui permet à des appareils Wi-Fi de se connecter à un réseau câblé : on lui amène un câble, qui peut aussi lui fournir son courant, et on la place au plafond, d'après une mesure. Avec trois bornes, les six pièces passent entre −49 et −56 dBm.",
      ] },
      { heading: "Six causes, à quoi on les reconnaît, ce qu'on fait", body: [
        "La figure donne, pour six causes, leur signature et le remède.",
      ], visual: 'causes', after: [
        "**Trop d'appareils, canal encombré.** Une borne partage son temps entre tous les appareils qui lui parlent : une salle de réunion pleine la sature. La bande des 2,4 GHz compte quatorze canaux, espacés de 5 MHz, dont trois seulement ne se chevauchent pas avec la largeur habituelle : 1, 6 et 11. C'est aussi la bande des fours à micro-ondes. Deux bornes voisines sur le même canal se gênent. La norme Wi-Fi 6 a été conçue pour les déploiements denses ; elle aide, mais ne remplace ni une borne de plus ni des canaux bien répartis.",
        "**Les adresses.** Le boîtier prête une adresse à chaque appareil pour une durée donnée. Quand la réserve est vide, les nouveaux arrivants voient « connecté, pas d'internet » : cela arrive le matin, dans un lieu qui reçoit du public, quand la durée du prêt est trop longue. Et deux appareils réglés à la main sur la même adresse se coupent l'un l'autre. **L'itinérance.** Un téléphone reste accroché à la borne qu'il quitte tant qu'elle répond un peu. Un amendement de la norme, 802.11r, sert à garder la connexion des appareils en mouvement ; il suppose le même nom de réseau et les mêmes réglages sur toutes les bornes. C'est ce qui fait tenir un appel sur [la téléphonie IP](" + L.telephonie + ") quand on marche.",
      ] },
      { heading: "Un réseau qui ne coupe pas, en cinq couches", body: [
        "La couche accentuée est celle des bornes.",
      ], visual: 'couches', after: [
        "**La ligne.** Un second lien, d'un autre opérateur et si possible d'une autre technologie, avec une bascule automatique : la coupure du premier ne s'entend plus. Entre deux sites, c'est aussi la condition d'un lien stable, voir [le guide pour interconnecter deux sites](" + L.intersites + "). **Le câblage et les bornes.** Chaque borne a son câble jusqu'à la baie, et reçoit son courant par ce câble : l'alimentation par Ethernet fait passer l'électricité avec les données sur le même câble.",
        "**Les réglages et la séparation.** Canaux répartis, puissance ajustée pour que les bornes se recouvrent sans se couvrir, itinérance activée. Les invités sont sur leur propre réseau, avec un débit limité, comme dans [le guide sur le filtrage](" + L.filtrage + "). Et ce qui ne doit jamais couper, caisses, postes fixes, imprimantes, est sur câble : le Wi-Fi est fait pour ce qui bouge. Si, tout cela fait, le logiciel reste lent, cherchez du côté du serveur : voir [le guide sur le serveur lent](" + L.serveur + ").",
      ] },
      { heading: "Quatre semaines, du premier test au second relevé, en 2027", body: [
        "Quatre semaines dans l'exemple, dont la première sans rien acheter.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, le test et le relevé.** Rien n'est acheté. **Semaine 2, la ligne et le boîtier** : relevé transmis à l'opérateur, boîtier protégé ou remplacé, lien de secours étudié. **Semaines 2 et 3, les câbles et les bornes.**",
        "**Semaine 3, les réglages et la séparation.** **Semaine 4, le second relevé** : mêmes feuilles, mêmes mesures, et la comparaison. Si le bureau est déjà câblé, deux semaines suffisent ; s'il faut tirer des câbles dans des cloisons, comptez davantage.",
      ], list: [
        "**Ce que le gérant reçoit** : le résultat du test câblé, le relevé des coupures d'une semaine, le signal mesuré pièce par pièce, la cause désignée parmi les six, puis les mêmes mesures après correction.",
        "**Ce que l'entreprise ne fait plus** : acheter un répéteur de plus, renvoyer l'opérateur et l'installateur dos à dos, tenir ses visioconférences dans la seule pièce sans signal, mettre la caisse en Wi-Fi.",
        "**Ce qui est mesuré** : coupures par jour et par pièce, signal dans chaque pièce, coupures de la ligne vues depuis le poste câblé, appareils par borne aux heures chargées.",
        "**Ce que fait Symloop** : le test et le relevé, la mesure sur plan, le câblage et la pose des bornes, les réglages, le réseau invités, le lien de secours et sa bascule, puis le second relevé.",
      ], faq: [
        { q: "Pourquoi le Wi-Fi coupe-t-il au bureau ?", a: "Pour l'une de quatre raisons : la ligne ou le boîtier coupent, le signal est trop faible dans certaines pièces, trop d'appareils partagent une borne ou un canal, ou l'appareil reste accroché à une borne trop lointaine. Un poste câblé et un relevé d'une semaine disent laquelle." },
        { q: "Pourquoi internet se coupe-t-il souvent ?", a: "Si tout coupe en même temps, poste câblé compris, la cause est avant le Wi-Fi : la ligne de l'opérateur, un boîtier qui chauffe ou redémarre, ou son alimentation. Si seuls les appareils sans fil coupent, c'est le Wi-Fi. Le test prend une journée." },
        { q: "Comment savoir si le problème vient de l'opérateur ou de mon installation ?", a: "Reliez un ordinateur au boîtier par un câble et laissez-le une journée avec deux tests en continu, l'un vers le boîtier, l'autre vers internet. Si le second s'interrompt, c'est la ligne : envoyez le relevé daté à l'opérateur. Sinon, c'est votre installation." },
        { q: "Un répéteur Wi-Fi règle-t-il le problème ?", a: "Rarement. Il rediffuse un signal déjà faible, et le débit sans fil y est réduit d'au moins la moitié. La réponse à une pièce mal couverte est une borne reliée par un câble, placée d'après une mesure." },
        { q: "Combien de bornes Wi-Fi faut-il pour un bureau ?", a: "Le nombre se déduit d'une mesure, pas de la surface seule : il dépend des murs, du nombre d'appareils et de ce qu'on y fait. Dans notre exemple, trois bornes couvrent six pièces. Mesurez le signal pièce par pièce avant de décider." },
        { q: "Pourquoi le Wi-Fi marche-t-il près du boîtier et pas en salle de réunion ?", a: "Parce que chaque mur absorbe une part du signal, et que la bande la plus rapide est celle qui traverse le moins bien. Dans notre exemple, on passe de −48 dBm à l'accueil à −84 en salle de réunion, bien sous le repère courant de −67." },
        { q: "Que veut dire « connecté, pas d'internet » ?", a: "L'appareil est relié à la borne, mais n'a pas reçu d'adresse utilisable, ou la ligne est coupée. Si cela n'arrive qu'aux nouveaux arrivants, le matin, la réserve d'adresses du boîtier est épuisée : on l'élargit et l'on raccourcit la durée du prêt." },
        { q: "Faut-il changer pour une norme Wi-Fi plus récente ?", a: "Pas d'abord. Une norme récente posée sur un boîtier mal placé ne change rien à la pièce du fond. Elle aide quand beaucoup d'appareils partagent une borne, une fois la couverture et les canaux réglés." },
        { q: "Faut-il un deuxième abonnement internet ?", a: "Oui dès qu'une heure sans connexion coûte une heure de travail ou de vente. Un second lien d'un autre opérateur, avec une bascule automatique, rend la coupure du premier invisible. Il se décide après le test câblé, qui dit combien de fois la ligne tombe." },
        { q: "Combien de temps pour régler un Wi-Fi qui coupe ?", a: "Quatre semaines dans notre exemple : une de test et de relevé sans rien acheter, deux pour la ligne, les câbles et les bornes, une pour les réglages et le second relevé. Deux semaines si le bureau est déjà câblé." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Un poste branché par câble tranche en une journée ce que l'opérateur et l'installateur se renvoient depuis des mois." },
      { after: 4, text: "Ce qui ne doit jamais couper est sur câble : le Wi-Fi est fait pour ce qui bouge." },
    ],
    cta: { eyebrow: "Dites-nous combien de pièces, combien d'appareils, et où ça coupe : nous faisons le test câblé et le relevé, et vous saurez en une semaine si c'est la ligne ou le Wi-Fi", title: "Visioconférences qui gèlent, terminaux qui décrochent au dépôt, répéteurs empilés, opérateur et installateur dos à dos, ou fondateur en France qui l'entend à distance : nous mesurons, nous corrigeons la cause, et nous remesurons", body: "Test câblé, relevé, mesure sur plan, câblage, bornes, réglages, réseau invités, lien de secours. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.reseau, kind: '2027', name: 'Installation d’un réseau d’entreprise : câblage, Wi-Fi, pare-feu, lien de secours' },
      { href: L.filtrage, kind: '2027', name: 'Bloquer des sites au bureau : mesurer, protéger, séparer, limiter' },
      { href: L.telephonie, kind: '2027', name: 'Standard téléphonique IP : lignes, postes, appels manqués' },
      { href: L.intersites, kind: '2027', name: 'Interconnecter deux sites : VPN, plan d’adresses, secours' },
    ] },
  },
  en: {
    kind: 'Wi-Fi dropping · office · Algeria · 2027', title: "Wi-Fi that keeps dropping at the office in Algeria (2027): the internet cuts out several times a day, how to tell the line from the Wi-Fi, coverage, wired access points, channels, roaming, backup link",
    dek: "“The internet cuts out several times a day. In the meeting room the video call freezes; in the warehouse the handhelds lose the connection; and now and then the whole office goes down at once. We added a repeater and it got worse. The operator says the line is fine, the installer says it is the line. Who do we believe, and what do we do?” Neither of them without a measurement. A computer plugged in by cable settles it in a day; a log of the drops does the rest.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Wi-Fi dropping', 'Internet cutting out often', 'Office Wi-Fi coverage', 'Access points', 'Backup link', 'Algeria 2027'],
    intro: [
      "**Short answer.** “It drops” covers four faults: the line or the box, coverage, saturation, roaming. To know which, plug a computer into the box by cable for a day: if it drops too, it is not the Wi-Fi. Note every drop for a week, with the time, the room and the device. Measure the signal room by room, with a phone. Then fix the cause, not the symptom: a backup link for the line, wired access points on the ceiling for coverage, consistent channels and settings for the rest. A repeater fixes none of them: it cuts wireless throughput by at least half.",
      "This guide is for the manager of an office, a shop, a warehouse or a clinic whose connection keeps dropping, and for the founder based in France who hears their teams complain from a distance. The definitions and figures quoted come from public sources: Wi-Fi channels, the access point, the repeater, the 802.11r amendment, the ping utility, packet loss. The six-room floor and its measurements are a constructed example. This guide gives no hardware prices; to build a network from scratch, see [the guide to installing a network](" + L.reseau + ").",
    ],
    sections: [
      { heading: "Diagnose in this order", body: [
        "The first step is accented: test with a wired computer.",
      ], visual: 'ordre', after: [
        "**The wired computer.** It is the test that settles the argument between the operator and the installer. A computer connected to the box by a cable, Wi-Fi switched off, left for a day with a continuous ping: ping is a utility used to test the reachability of a host on a network. Run two, one to the box, the other to a public address. If the second is interrupted and not the first, it is the line. If neither is interrupted while the Wi-Fi drops, it is the Wi-Fi.",
        "**The log.** A sheet next to each desk, or a message in a group: the time, the room, the device. After a week the pattern reads by itself: always the meeting room, always around ten o'clock, always while walking to the warehouse. **The measurement.** The signal is read on a phone, in dBm: the closer the figure is to zero, the better. A common reference for voice and video calls is −67 dBm; one manufacturer's documentation, Cisco Meraki, also recommends for data a signal-to-noise ratio of 20 dB or more.",
      ] },
      { heading: "The line or the Wi-Fi: three questions to find out", body: [
        "The figure sorts the four faults behind three questions.",
      ], visual: 'arbre', after: [
        "**If the wired computer drops too.** Packet loss occurs when packets of data travelling across a network fail to reach their destination: here, it happens before the Wi-Fi is even involved. Three suspects. The operator's line: send them your dated log, not an impression. The box: it overheats, restarts, or its power supply suffers brief power cuts, which a UPS solves. Finally the cabling, or a faulty switch between the box and the computer.",
        "**If only the Wi-Fi drops.** Two questions remain. In certain rooms only: it is coverage. Everywhere: at busy hours, it is saturation; while moving around, it is roaming. **When everything adds up.** In an office that has grown around a single box, several causes are often found at once; you then start with the line and coverage, and measure again.",
      ] },
      { heading: "The same floor, one box in the entrance or three access points on the ceiling", body: [
        "The figure gives the signal read in six rooms, before and after.",
      ], visual: 'plan', after: [
        "**Coverage.** In the example, the box is in the entrance. Reception is at −48 dBm, the meeting room at −84, the storeroom at −81: that is where calls break up. The 5 GHz bands are absorbed to a greater degree by common building materials than the 2.4 GHz bands, and usually give a shorter range: the fastest band is also the one that gets through walls least well.",
        "**The access point, not the repeater.** A repeater takes an existing signal from a router or access point and rebroadcasts it: it repeats a signal that is already weak, and wireless throughput is reduced by at least 50 %. An access point is a networking device that allows Wi-Fi devices to connect to a wired network: you bring it a cable, which can also power it, and fit it on the ceiling, from a measurement. With three access points, the six rooms move to between −49 and −56 dBm.",
      ] },
      { heading: "Six causes, how to recognise them, what to do", body: [
        "The figure gives, for six causes, their signature and the remedy.",
      ], visual: 'causes', after: [
        "**Too many devices, a crowded channel.** An access point shares its time among all the devices talking to it: a full meeting room saturates it. The 2.4 GHz band has fourteen channels, spaced 5 MHz apart, of which only three do not overlap at the usual width: 1, 6 and 11. It is also the band of microwave ovens. Two neighbouring access points on the same channel get in each other's way. The Wi-Fi 6 standard was designed to support dense deployments; it helps, but replaces neither one more access point nor well-spread channels.",
        "**Addresses.** The box lends each device an address for a set time. When the pool is empty, newcomers see “connected, no internet”: it happens in the morning, in a place open to the public, when the lease is too long. And two devices set by hand to the same address cut each other off. **Roaming.** A phone stays attached to the access point it is leaving for as long as it answers at all. An amendment to the standard, 802.11r, is there to permit continuous connectivity for devices in motion; it assumes the same network name and the same settings on every access point. That is what keeps a call alive on [IP telephony](" + L.telephonie + ") while you walk.",
      ] },
      { heading: "A network that does not drop, in five layers", body: [
        "The accented layer is the access points.",
      ], visual: 'couches', after: [
        "**The line.** A second link, from another operator and if possible on another technology, with automatic failover: the outage of the first is no longer noticed. Between two sites, it is also the condition for a stable link, see [the guide to connecting two sites](" + L.intersites + "). **Cabling and access points.** Each access point has its own cable back to the rack, and gets its power over that cable: Power over Ethernet passes electric power along with data on the same cabling.",
        "**Settings and separation.** Channels spread out, power adjusted so that access points overlap without smothering each other, roaming switched on. Guests are on their own network, with limited speed, as in [the guide to filtering](" + L.filtrage + "). And what must never drop, tills, fixed computers, printers, is on cable: Wi-Fi is for what moves. If, with all that done, the software is still slow, look at the server: see [the guide to the slow server](" + L.serveur + ").",
      ] },
      { heading: "Four weeks, from the first test to the second reading, in 2027", body: [
        "Four weeks in the example, the first without buying anything.",
      ], visual: 'calendrier', after: [
        "**Week 1, the test and the log.** Nothing is bought. **Week 2, the line and the box**: log passed to the operator, box protected or replaced, backup link studied. **Weeks 2 and 3, cables and access points.**",
        "**Week 3, settings and separation.** **Week 4, the second reading**: same sheets, same measurements, and the comparison. If the office is already cabled, two weeks are enough; if cables have to be pulled through partitions, allow more.",
      ], list: [
        "**What the manager receives**: the result of the wired test, a week's log of drops, the signal measured room by room, the cause identified among the six, then the same measurements after the fix.",
        "**What the company no longer does**: buy one more repeater, leave the operator and the installer blaming each other, hold its video calls in the one room with no signal, put the till on Wi-Fi.",
        "**What is measured**: drops per day and per room, signal in each room, line outages seen from the wired computer, devices per access point at busy hours.",
        "**What Symloop does**: the test and the log, measurement on a floor plan, cabling and fitting the access points, the settings, the guest network, the backup link and its failover, then the second reading.",
      ], faq: [
        { q: "Why does the Wi-Fi keep dropping at the office?", a: "For one of four reasons: the line or the box drops, the signal is too weak in certain rooms, too many devices share an access point or a channel, or the device stays attached to an access point that is too far away. A wired computer and a week's log tell you which." },
        { q: "Why does the internet cut out so often?", a: "If everything drops at once, the wired computer included, the cause is before the Wi-Fi: the operator's line, a box that overheats or restarts, or its power supply. If only wireless devices drop, it is the Wi-Fi. The test takes a day." },
        { q: "How do I know whether the problem is the operator or my own set-up?", a: "Connect a computer to the box by cable and leave it for a day with two continuous tests, one to the box, the other to the internet. If the second is interrupted, it is the line: send the dated log to the operator. If not, it is your set-up." },
        { q: "Does a Wi-Fi repeater solve the problem?", a: "Rarely. It rebroadcasts a signal that is already weak, and wireless throughput through it is reduced by at least half. The answer to a badly covered room is an access point connected by a cable, placed from a measurement." },
        { q: "How many Wi-Fi access points does an office need?", a: "The number comes from a measurement, not from floor area alone: it depends on the walls, the number of devices and what they are used for. In our example, three access points cover six rooms. Measure the signal room by room before deciding." },
        { q: "Why does the Wi-Fi work near the box and not in the meeting room?", a: "Because every wall absorbs part of the signal, and the fastest band is the one that gets through least well. In our example, it goes from −48 dBm at reception to −84 in the meeting room, well below the common reference of −67." },
        { q: "What does “connected, no internet” mean?", a: "The device is linked to the access point, but has not received a usable address, or the line is down. If it only happens to newcomers, in the morning, the box's pool of addresses is used up: it is widened and the lease is shortened." },
        { q: "Should we move to a newer Wi-Fi standard?", a: "Not first. A recent standard fitted on a badly placed box changes nothing in the room at the back. It helps when many devices share an access point, once coverage and channels are sorted." },
        { q: "Do we need a second internet subscription?", a: "Yes, as soon as an hour without a connection costs an hour of work or sales. A second link from another operator, with automatic failover, makes the outage of the first invisible. It is decided after the wired test, which says how often the line goes down." },
        { q: "How long does it take to fix Wi-Fi that keeps dropping?", a: "Four weeks in our example: one of testing and logging without buying anything, two for the line, the cables and the access points, one for the settings and the second reading. Two weeks if the office is already cabled." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "A computer plugged in by cable settles in a day what the operator and the installer have been blaming on each other for months." },
      { after: 4, text: "What must never drop is on cable: Wi-Fi is for what moves." },
    ],
    cta: { eyebrow: "Tell us how many rooms, how many devices, and where it drops: we run the wired test and the log, and within a week you will know whether it is the line or the Wi-Fi", title: "Video calls that freeze, handhelds that drop in the warehouse, repeaters piled up, operator and installer blaming each other, or a founder in France hearing it from a distance: we measure, fix the cause, and measure again", body: "Wired test, log, measurement on a floor plan, cabling, access points, settings, guest network, backup link. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.reseau, kind: '2027', name: 'Installing a company network: cabling, Wi-Fi, firewall, backup link' },
      { href: L.filtrage, kind: '2027', name: 'Blocking websites at the office: measure, protect, separate, limit' },
      { href: L.telephonie, kind: '2027', name: 'IP telephone system: lines, extensions, missed calls' },
      { href: L.intersites, kind: '2027', name: 'Connecting two sites: VPN, address plan, backup' },
    ] },
  },
  ar: {
    kind: 'الواي فاي ينقطع · المكتب · الجزائر · 2027', title: "الواي فاي ينقطع في المكتب في الجزائر (2027): الإنترنت ينقطع عدة مرات في اليوم، كيف نعرف هل هو الخط أم الواي فاي، التغطية، نقاط وصول بكابل، القنوات، التجوال، وخط الإسعاف",
    dek: "«الإنترنت ينقطع عدة مرات في اليوم. في قاعة الاجتماعات، يتجمّد الاجتماع بالفيديو؛ وفي المستودع، تفقد الأجهزة المحمولة الاتصال؛ ومن حين لآخر، يسقط المكتب كله دفعة واحدة. أضفنا مكرِّراً فصار الأمر أسوأ. المتعامل يقول إن الخط جيد، والمركِّب يقول إنه الخط. من نصدّق، وماذا نفعل؟» لا هذا ولا ذاك دون قياس. حاسوب موصول بكابل يفصل في يوم؛ وسجل للانقطاعات يفعل الباقي.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['الواي فاي ينقطع', 'الإنترنت ينقطع كثيراً', 'تغطية الواي فاي في المكتب', 'نقاط الوصول', 'خط الإسعاف', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** «ينقطع» تغطي أربعة أعطال: الخط أو العلبة، التغطية، التشبّع، والتجوال. ولمعرفة أيّها، صِلوا حاسوباً بالعلبة بكابل مدة يوم: إذا انقطع هو كذلك، فليس الواي فاي. سجّلوا كل انقطاع مدة أسبوع، مع الساعة والغرفة والجهاز. قيسوا الإشارة غرفة غرفة، بالهاتف. ثم صحّحوا السبب، لا العَرَض: خط إسعاف للخط، نقاط وصول موصولة بكابل في السقف للتغطية، وقنوات وضبط منسجم للباقي. والمكرِّر لا يعالج أياً منها: يُنقص التدفق اللاسلكي بالنصف على الأقل.",
      "هذا الدليل موجَّه إلى مسيّر مكتب أو محل أو مستودع أو عيادة يتقطع اتصالها، وإلى المؤسس المقيم في فرنسا الذي يسمع فرقه تشتكي عن بعد. التعريفات والأرقام المذكورة آتية من مصادر علنية: قنوات الواي فاي، نقطة الوصول، المكرِّر، التعديل " + I('802.11r') + "، أداة " + I('ping') + "، وضياع الحزم. الطابق ذو الغرف الست وقياساته مثال مركَّب. هذا الدليل لا يعطي أي سعر للعتاد؛ ولبناء شبكة من الصفر، انظر [دليل تنصيب الشبكة](" + L.reseau + ").",
    ],
    sections: [
      { heading: "التشخيص بهذا الترتيب", body: [
        "المرحلة الأولى مبرزة: الاختبار بحاسوب موصول بكابل.",
      ], visual: 'ordre', after: [
        "**الحاسوب الموصول بكابل.** هو الاختبار الذي يفصل بين المتعامل والمركِّب. حاسوب موصول بالعلبة بكابل، والواي فاي معطَّل فيه، يُترك يوماً مع أمر " + I('ping') + " متواصل: " + I('ping') + " أداة تختبر هل يجيب جهاز في الشبكة. أطلقوا اثنين، واحداً نحو العلبة، والآخر نحو عنوان عمومي. إذا انقطع الثاني دون الأول، فهو الخط. وإذا لم ينقطع أي منهما والواي فاي ينقطع، فهو الواي فاي.",
        "**السجل.** ورقة قرب كل مكتب، أو رسالة في مجموعة: الساعة، الغرفة، والجهاز. وبعد أسبوع، يُقرأ النمط وحده: دائماً قاعة الاجتماعات، دائماً نحو العاشرة، دائماً أثناء المشي نحو المستودع. **القياس.** الإشارة تُقرأ على هاتف، بـ " + I('dBm') + ": كلما اقترب الرقم من الصفر، كان أفضل. ومعلَم شائع الاستعمال للصوت والفيديو هو " + I('−67 dBm') + "؛ ووثائق أحد الصانعين، " + I('Cisco Meraki') + "، توصي كذلك للبيانات بنسبة إشارة إلى ضجيج لا تقل عن " + I('20 dB') + ".",
      ] },
      { heading: "الخط أم الواي فاي: ثلاثة أسئلة لمعرفة ذلك", body: [
        "الشكل يرتّب الأعطال الأربعة وراء ثلاثة أسئلة.",
      ], visual: 'arbre', after: [
        "**إذا انقطع الحاسوب الموصول بكابل كذلك.** ضياع الحزم يقع حين لا تصل بيانات تعبر الشبكة إلى وجهتها: وهنا يقع قبل الواي فاي أصلاً. ثلاثة مشتبه بهم. خط المتعامل: أرسلوا إليه سجلكم المؤرَّخ، لا انطباعاً. العلبة: تسخن، تعيد التشغيل، أو تغذيتها تتأثر بالانقطاعات القصيرة للتيار، وهذا يعالجه مموِّج. وأخيراً الكوابل، أو موزِّع معطوب بين العلبة والحاسوب.",
        "**إذا انقطع الواي فاي وحده.** يبقى سؤالان. في بعض الغرف فقط: هي التغطية. في كل مكان: في ساعات الازدحام، هو التشبّع؛ وعند التنقل، هو التجوال. **حين يجتمع كل شيء.** في مكتب كبر حول علبة واحدة، نجد غالباً عدة أسباب معاً؛ فنبدأ بالخط والتغطية، ثم نعيد القياس.",
      ] },
      { heading: "الطابق نفسه، علبة في المدخل أم ثلاث نقاط في السقف", body: [
        "الشكل يعطي الإشارة المقروءة في ست غرف، قبل وبعد.",
      ], visual: 'plan', after: [
        "**التغطية.** في المثال، العلبة في المدخل. الاستقبال عند " + I('−48 dBm') + "، قاعة الاجتماعات عند " + I('−84') + "، والمستودع عند " + I('−81') + ": هناك تتقطع المكالمات. ونطاقات " + I('5 GHz') + " تمتصها مواد البناء أكثر من نطاقات " + I('2.4 GHz') + "، وتبلغ في العادة مدى أقصر: النطاق الأسرع هو كذلك الذي يعبر الجدران أقل.",
        "**النقطة، لا المكرِّر.** المكرِّر يأخذ إشارة موجِّه أو نقطة ويعيد بثها: يكرّر إشارة ضعيفة أصلاً، والتدفق اللاسلكي ينقص فيه بـ 50 بالمئة على الأقل. أما نقطة الوصول فجهاز يسمح لأجهزة الواي فاي بالاتصال بشبكة سلكية: نمدّ إليها كابلاً، يستطيع كذلك تغذيتها، ونضعها في السقف، حسب قياس. وبثلاث نقاط، تصير الغرف الست بين " + I('−49') + " و" + I('−56 dBm') + ".",
      ] },
      { heading: "ستة أسباب، بماذا تُعرَف، وما نفعله", body: [
        "الشكل يعطي، لستة أسباب، علامتها وعلاجها.",
      ], visual: 'causes', after: [
        "**أجهزة كثيرة، وقناة مزدحمة.** النقطة تقتسم وقتها بين كل الأجهزة التي تكلّمها: قاعة اجتماعات ممتلئة تشبعها. ونطاق " + I('2.4 GHz') + " فيه أربع عشرة قناة، متباعدة بـ " + I('5 MHz') + "، ثلاث منها فقط لا تتداخل بالعرض المعتاد: " + I('1, 6, 11') + ". وهو كذلك نطاق أفران الميكروويف. ونقطتان متجاورتان على القناة نفسها تتزاحمان. ومعيار " + I('Wi-Fi 6') + " صُمِّم للنشر الكثيف؛ يساعد، لكنه لا يعوّض نقطة إضافية ولا قنوات موزَّعة جيداً.",
        "**العناوين.** العلبة تعير كل جهاز عنواناً لمدة محدَّدة. وحين ينفد المخزون، يرى القادمون الجدد «متصل، لا إنترنت»: يحدث ذلك صباحاً، في مكان يستقبل الجمهور، حين تكون مدة الإعارة طويلة جداً. وجهازان مضبوطان باليد على العنوان نفسه يقطع أحدهما الآخر. **التجوال.** الهاتف يبقى معلَّقاً بالنقطة التي يغادرها ما دامت تجيب قليلاً. وتعديل للمعيار، " + I('802.11r') + "، غايته إبقاء اتصال الأجهزة المتحركة؛ ويفترض اسم الشبكة نفسه والضبط نفسه على كل النقاط. وهو ما يُبقي المكالمة قائمة على [الهاتف عبر الإنترنت](" + L.telephonie + ") أثناء المشي.",
      ] },
      { heading: "شبكة لا تنقطع، في خمس طبقات", body: [
        "الطبقة المبرزة هي نقاط الوصول.",
      ], visual: 'couches', after: [
        "**الخط.** خط ثانٍ، من متعامل آخر وإن أمكن بتقنية أخرى، مع تحويل آلي: انقطاع الأول لا يُشعَر به. وبين موقعين، هو كذلك شرط ربط مستقر، انظر [دليل ربط موقعين](" + L.intersites + "). **الكوابل والنقاط.** لكل نقطة كابلها إلى الخزانة، وتأخذ تيارها عبره: التغذية عبر " + I('Ethernet') + " تمرّر الكهرباء مع البيانات على الكابل نفسه.",
        "**الضبط والفصل.** قنوات موزَّعة، قدرة مضبوطة لتتراكب النقاط دون أن يغطي بعضها بعضاً، وتجوال مفعَّل. والضيوف على شبكتهم الخاصة، بتدفق محدود، كما في [دليل الترشيح](" + L.filtrage + "). وما يجب ألا ينقطع أبداً، الصناديق والحواسيب الثابتة والطابعات، على كابل: الواي فاي لما يتحرك. وإذا بقي البرنامج بطيئاً بعد كل ذلك، ابحثوا جهة الخادم: انظر [دليل الخادم البطيء](" + L.serveur + ").",
      ] },
      { heading: "أربعة أسابيع، من الاختبار الأول إلى القراءة الثانية، سنة 2027", body: [
        "أربعة أسابيع في المثال، والأول منها دون شراء شيء.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، الاختبار والسجل.** لا شيء يُشترى. **الأسبوع 2، الخط والعلبة**: سجل يُسلَّم للمتعامل، علبة تُحمى أو تُعوَّض، وخط إسعاف يُدرَس. **الأسبوعان 2 و3، الكوابل والنقاط.**",
        "**الأسبوع 3، الضبط والفصل.** **الأسبوع 4، القراءة الثانية**: الأوراق نفسها، القياسات نفسها، والمقارنة. إذا كان المكتب مكبَّلاً أصلاً، يكفي أسبوعان؛ وإذا لزم مدّ كوابل في الحواجز، احسبوا أكثر.",
      ], list: [
        "**ما يستلمه المسيّر**: نتيجة الاختبار بكابل، سجل انقطاعات أسبوع، الإشارة مقيسة غرفة غرفة، السبب المحدَّد من بين الستة، ثم القياسات نفسها بعد التصحيح.",
        "**ما لم تعد المؤسسة تفعله**: شراء مكرِّر إضافي، ترك المتعامل والمركِّب يتبادلان اللوم، عقد اجتماعات الفيديو في الغرفة الوحيدة دون إشارة، ووضع الصندوق على الواي فاي.",
        "**ما يُقاس**: الانقطاعات في اليوم وحسب الغرفة، الإشارة في كل غرفة، انقطاعات الخط كما يراها الحاسوب الموصول بكابل، والأجهزة لكل نقطة في ساعات الازدحام.",
        "**ما تفعله Symloop**: الاختبار والسجل، القياس على المخطط، مدّ الكوابل ووضع النقاط، الضبط، شبكة الضيوف، خط الإسعاف وتحويله، ثم القراءة الثانية.",
      ], faq: [
        { q: "لماذا ينقطع الواي فاي في المكتب؟", a: "لواحد من أربعة أسباب: الخط أو العلبة ينقطعان، الإشارة ضعيفة جداً في بعض الغرف، أجهزة كثيرة تقتسم نقطة أو قناة، أو الجهاز يبقى معلَّقاً بنقطة بعيدة جداً. وحاسوب موصول بكابل وسجل أسبوع يقولان أيّها." },
        { q: "لماذا ينقطع الإنترنت كثيراً؟", a: "إذا انقطع كل شيء معاً، والحاسوب الموصول بكابل كذلك، فالسبب قبل الواي فاي: خط المتعامل، علبة تسخن أو تعيد التشغيل، أو تغذيتها. وإذا انقطعت الأجهزة اللاسلكية وحدها، فهو الواي فاي. والاختبار يأخذ يوماً." },
        { q: "كيف أعرف هل المشكلة من المتعامل أم من تنصيبي؟", a: "صِلوا حاسوباً بالعلبة بكابل واتركوه يوماً مع اختبارين متواصلين، واحد نحو العلبة والآخر نحو الإنترنت. إذا انقطع الثاني، فهو الخط: أرسلوا السجل المؤرَّخ للمتعامل. وإلا فهو تنصيبكم." },
        { q: "هل يحلّ مكرِّر الواي فاي المشكلة؟", a: "نادراً. يعيد بث إشارة ضعيفة أصلاً، والتدفق اللاسلكي ينقص فيه بالنصف على الأقل. والجواب على غرفة سيئة التغطية هو نقطة وصول موصولة بكابل، توضع حسب قياس." },
        { q: "كم نقطة واي فاي تلزم لمكتب؟", a: "العدد يُستنتج من قياس، لا من المساحة وحدها: يتوقف على الجدران، عدد الأجهزة، وما يُفعل بها. في مثالنا، ثلاث نقاط تغطي ست غرف. قيسوا الإشارة غرفة غرفة قبل القرار." },
        { q: "لماذا يعمل الواي فاي قرب العلبة ولا يعمل في قاعة الاجتماعات؟", a: "لأن كل جدار يمتص جزءاً من الإشارة، والنطاق الأسرع هو الذي يعبر أقل. في مثالنا، ننتقل من " + I('−48 dBm') + " في الاستقبال إلى " + I('−84') + " في قاعة الاجتماعات، بعيداً تحت المعلَم الشائع " + I('−67') + "." },
        { q: "ماذا تعني «متصل، لا إنترنت»؟", a: "الجهاز موصول بالنقطة، لكنه لم ينل عنواناً صالحاً، أو الخط مقطوع. وإذا كان ذلك يحدث للقادمين الجدد فقط، صباحاً، فمخزون عناوين العلبة نفد: نوسّعه ونقصّر مدة الإعارة." },
        { q: "هل ننتقل إلى معيار واي فاي أحدث؟", a: "ليس أولاً. معيار حديث يوضع على علبة سيئة الموضع لا يغيّر شيئاً في الغرفة التي في الآخر. يساعد حين تقتسم أجهزة كثيرة نقطة واحدة، بعد ضبط التغطية والقنوات." },
        { q: "هل يلزم اشتراك إنترنت ثانٍ؟", a: "نعم حالما تكلّف ساعة دون اتصال ساعة عمل أو بيع. خط ثانٍ من متعامل آخر، بتحويل آلي، يجعل انقطاع الأول غير مرئي. ويُقرَّر بعد الاختبار بكابل، الذي يقول كم مرة يسقط الخط." },
        { q: "كم من الوقت لإصلاح واي فاي ينقطع؟", a: "أربعة أسابيع في مثالنا: أسبوع اختبار وسجل دون شراء شيء، أسبوعان للخط والكوابل والنقاط، وأسبوع للضبط والقراءة الثانية. وأسبوعان إذا كان المكتب مكبَّلاً أصلاً." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "حاسوب موصول بكابل يفصل في يوم ما يتبادل المتعامل والمركِّب اللوم فيه منذ أشهر." },
      { after: 4, text: "ما يجب ألا ينقطع أبداً على كابل: الواي فاي لما يتحرك." },
    ],
    cta: { eyebrow: "قولوا لنا كم غرفة، كم جهازاً، وأين ينقطع: ننجز الاختبار بكابل والسجل، وتعرفون في أسبوع هل هو الخط أم الواي فاي", title: "اجتماعات فيديو تتجمّد، أجهزة تنقطع في المستودع، مكرِّرات متراكمة، متعامل ومركِّب يتبادلان اللوم، أو مؤسس في فرنسا يسمع ذلك عن بعد: نقيس، نصحّح السبب، ونعيد القياس", body: "اختبار بكابل، سجل، قياس على المخطط، كوابل، نقاط وصول، ضبط، شبكة ضيوف، وخط إسعاف. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.reseau, kind: '2027', name: 'تنصيب شبكة المؤسسة: الكوابل، الواي فاي، الجدار الناري، وخط الإسعاف' },
      { href: L.filtrage, kind: '2027', name: 'حجب مواقع في المكتب: القياس، الحماية، الفصل، والتحديد' },
      { href: L.telephonie, kind: '2027', name: 'المقسم الهاتفي عبر الإنترنت: الخطوط، الأجهزة، والمكالمات الفائتة' },
      { href: L.intersites, kind: '2027', name: 'ربط موقعين: VPN، مخطط العناوين، والإسعاف' },
    ] },
  },
};

const KEYWORDS = "wifi qui coupe 2027, wifi qui coupe au bureau, pourquoi internet se coupe souvent, internet qui se coupe entreprise, pourquoi mon réseau est instable, réseau lent entreprise, connecté pas d'internet, répéteur wifi ou borne, combien de bornes wifi bureau, lien de secours internet entreprise, panne internet entreprise algérie, wifi keeps dropping office algeria 2027, internet keeps cutting out business, الواي فاي ينقطع في المكتب 2027, الانترنت ينقطع كثيرا, تغطية الواي فاي";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
