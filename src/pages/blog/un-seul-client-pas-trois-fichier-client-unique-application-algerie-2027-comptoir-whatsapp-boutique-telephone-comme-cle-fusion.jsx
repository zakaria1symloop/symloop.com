import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion.mjs';

const SLUG = 'un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion';
const FIGURES = ['portes', 'situations', 'fusion', 'couches', 'etapes', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  fidelite: '/blog/programme-de-fidelite-algerie-2027-cafe-fast-food-chaine-application-points-caisse-relance/',
  reprendre: '/blog/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte/',
  otp: '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  bilingue: '/blog/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit/',
  recherche: '/blog/recherche-dans-une-application-algerie-2027-catalogue-arabe-francais-darija-fautes-synonymes-classement-zero-resultat/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  caisse: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/',
  prevente: '/blog/prevente-commerciaux-terrain-distributeur-algerie-2027-application-tournee-commande-recouvrement/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  sport: '/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Clients · Doublons · Multicanal · 2027', title: "Un seul client, pas trois : construire un fichier client unique dans votre application en Algérie en 2027, du comptoir à WhatsApp, le téléphone comme clé, la fusion et l'historique",
    dek: "« Le même client existe trois fois : créé au comptoir en arabe, sur WhatsApp avec son numéro, et sur la boutique avec son e-mail. Ses points de fidélité sont éparpillés, le vendeur ne voit pas ce qu'il a commandé en ligne, et il a reçu la promo trois fois. » Le doublon n'est pas une faute de saisie, c'est une architecture : cinq portes d'entrée et aucune règle pour dire qu'il s'agit de la même personne. Ce guide décrit ce qu'on construit pour qu'un client n'existe qu'une fois : le téléphone normalisé comme clé, des règles de rapprochement avec un score et deux seuils, une fiche unique calculée à partir de sources conservées, une fusion champ par champ réversible et journalisée, et des consentements par canal.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Fichier client', 'Doublons', 'Multicanal', 'Données', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un client entre par **cinq portes**, caisse, WhatsApp, boutique en ligne, application, commercial terrain, et chaque porte garde sa **fiche brute datée**. Le **téléphone**, normalisé au format international dès la saisie, est la **clé** qu'on cherche en premier, parce qu'il se compare, quand un nom en arabe et en français ne se compare pas. Le **rapprochement** cherche d'abord l'exact, puis l'approché, nom et wilaya, et donne un **score** ; au-dessus d'un seuil écrit la fusion est **automatique**, entre deux seuils c'est une **suggestion** qu'un humain revoit le matin, en dessous ce sont deux fiches. La **fiche unique** est **calculée** à partir des sources, jamais tapée, avec une **règle de survie par champ** : le téléphone vérifié l'emporte, le nom le plus complet garde l'autre écriture, les points s'additionnent, les consentements prennent le plus restrictif. Chaque fusion est **journalisée** et se **défait en un geste**, parce que les sources ne sont jamais modifiées. Six semaines, dont la première sans code.",
      "Ce guide s'adresse au gérant d'une chaîne de magasins qui ne sait plus combien de clients il a, au fondateur installé en France dont la boutique en ligne et la caisse d'Alger se parlent mal, et au responsable qui doit réconcilier un programme de fidélité avec des fiches en double. Il ne redit pas comment on dédoublonne un ancien fichier au moment d'une migration, décrit dans [le guide sur la reprise de données](" + L.reprendre + "), ni comment les points se calculent, décrit dans [le guide sur la fidélité](" + L.fidelite + ") ; il décrit ce qui se construit pour qu'un client reste unique au quotidien, porte après porte, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Ce que les référentiels disent', body: [
        "Le téléphone est la seule clé qui se normalise, et sa forme est publique. Le plan de numérotation algérien donne au pays l'indicatif +213 et le préfixe de sortie 0 ; un numéro mobile compte « neuf chiffres » après ce 0, sous la forme « 0yxx xx xx xx » où « y est le code de l'opérateur, 5 pour Ooredoo, 6 pour Mobilis, 7 pour Djezzy » ; un numéro fixe en compte huit, avec un indicatif de zone, 021 ou 023 pour Alger, 036 pour Sétif. La norme internationale des numéros limite un numéro complet à quinze chiffres. Ce que cela impose : « 0661 23 45 67 », « +213661234567 » et « 00213 661 23 45 67 » sont le même numéro, et une fonction de normalisation qui connaît ces règles les ramène tous à +213661234567 avant toute recherche ; un numéro qui ne se normalise pas est refusé à la saisie, pas stocké tel quel.",
        "Le nom, lui, ne se normalise pas, et c'est pour cela qu'il n'est pas la clé. Un client algérien est « Benali Karim » à la caisse quand l'employé tape en latin, « بن علي كريم » quand il tape en arabe, « Karim B. » sur WhatsApp, et la translittération d'un même nom arabe en lettres latines admet plusieurs formes ; aucun moteur ne les voit égales sans règles, et les règles se trompent. Ce que cela impose : le nom est stocké dans les deux écritures, selon [le guide sur l'application bilingue](" + L.bilingue + "), il sert à confirmer un rapprochement proposé par le téléphone ou l'e-mail, et il ne sert jamais seul à fusionner automatiquement.",
        "Ce que nous n'avons pas trouvé : une mesure publique du taux de doublons dans les fichiers clients des entreprises en Algérie. Ce que nous voyons sur les fichiers que nous reprenons, c'est entre une fiche sur dix et une fiche sur six en double quand plusieurs portes existent depuis plus d'un an sans règle commune, et nous le disons comme une observation, pas comme une statistique. Un fichier sans doublon n'existe pas ; un fichier dont le taux de doublons est mesuré chaque mois et revu chaque matin, oui.",
      ] },
      { heading: 'Un client, cinq portes d’entrée, une seule fiche', body: [
        "Le fichier client unique ne se comprend pas sur un schéma de base de données mais sur un client réel qui entre par cinq portes en huit mois.",
      ], visual: 'portes', after: [
        "**En mars**, Karim achète au comptoir ; Amel tape son nom en arabe et son numéro, 0661 23 45 67. **En mai**, il écrit sur WhatsApp depuis +213661234567 et accepte les promotions ; son prénom et une initiale. **En septembre**, il commande sur la boutique en ligne avec son e-mail et un numéro écrit 00213 661 23 45 67. **En octobre**, il installe l'application et vérifie son numéro par un code, selon [le guide sur la connexion par téléphone](" + L.otp + "). **En novembre**, le commercial terrain passe à sa supérette et l'enregistre comme « Supérette El Hidhab, Karim », avec le même numéro écrit encore autrement. Cinq fiches brutes, cinq dates, cinq façons d'écrire la même personne.",
        "**La résolution** fait quatre choses, dans l'ordre : elle normalise le téléphone, le nom et l'e-mail ; elle rapproche, d'abord sur le téléphone exact, puis sur le nom et la wilaya ; elle note la confiance ; et elle décide, fusion automatique quand le téléphone normalisé est identique, suggestion quand seuls le nom et la wilaya concordent, rien en dessous. **La fiche unique** qui en sort porte le téléphone vérifié par le code de l'application, le nom dans les deux écritures, l'e-mail de la boutique, la wilaya et le point de vente du commercial, et les consentements donnés sur WhatsApp ; et chaque champ dit d'où il vient. Les données sont un exemple ; la règle ne l'est pas : la fiche unique est calculée, jamais tapée.",
      ] },
      { heading: "Six situations réelles, et ce que l'application fait", body: [
        "Six situations qui reviennent sur presque tous les fichiers clients, et ce que l'application fait pour chacune.",
      ], visual: 'situations', after: [
        "**Le même numéro, trois écritures** : la normalisation au format international dès la saisie les fait se retrouver ; c'est la situation la plus fréquente et la plus simple. **Deux numéros, une personne** : le client a changé d'opérateur ; le rapprochement par nom et wilaya est proposé à l'employé et confirmé par un code sur le nouveau numéro ; l'ancien reste en historique. **Un numéro, plusieurs personnes** : le téléphone du magasin ou de la famille est donné par trois acheteurs ; un numéro peut porter plusieurs personnes, la fusion automatique est refusée si les noms diffèrent, et c'est la raison pour laquelle le téléphone seul ne fusionne pas sans vérifier le nom.",
        "**Le nom en arabe et en français** : les deux écritures sont stockées et cherchées, selon [le guide sur la recherche](" + L.recherche + "), mais le rapprochement passe par le téléphone, et le nom ne sert qu'à confirmer. **Le client B2B à plusieurs acheteurs** : une fiche entreprise et des fiches personnes rattachées, la fidélité et le crédit sur l'entreprise, les consentements sur les personnes ; c'est la structure du [portail B2B](" + L.portail + "). **Le client qui demande la suppression** : la fiche et ses sources sont anonymisées, les factures gardées avec le seul numéro de client, l'opération journalisée et irréversible ; c'est le cas où conserver les sources ne veut pas dire les garder nominatives.",
      ] },
      { heading: 'Une fusion, champ par champ, et son retour arrière', body: [
        "La fusion est l'opération qu'on craint le plus, et c'est pour cela qu'elle est la plus encadrée.",
      ], visual: 'fusion', after: [
        "**Deux fiches** : A, créée à la caisse en mars avec quatorze achats ; B, créée sur la boutique en septembre avec trois commandes ; le téléphone normalisé est identique, le score est de 0,96, la fusion est proposée et Amel la confirme depuis la caisse. **Une règle par champ** : le téléphone vérifié par code l'emporte ; le nom le plus complet l'emporte et l'autre écriture est gardée ; l'e-mail présent l'emporte ; l'adresse la plus récente l'emporte et l'autre est gardée ; les points de fidélité s'additionnent ; les consentements prennent le plus restrictif par canal, parce qu'un client qui a refusé les SMS sur une fiche les a refusés tout court.",
        "**Rien n'est écrasé** : la fiche fusionnée pointe vers ses deux sources, conservées telles quelles avec leur historique, et la ligne de journal dit qui a fusionné, quand, avec quel score et par quelle règle, selon [le guide sur le journal d'audit](" + L.roles + "). **La défusion** se fait en un geste, parce que les sources n'ont jamais été modifiées : on retire le lien, et les deux fiches reprennent leur vie. C'est cette réversibilité qui autorise la fusion automatique au-dessus du seuil ; sans elle, chaque fusion serait une décision irréversible qu'aucun gérant ne déléguerait à une règle.",
      ] },
      { heading: 'Un fichier client unique, en cinq couches', body: [
        "Derrière ces fusions, cinq couches, et celle qui décide combien de clients vous avez.",
      ], visual: 'couches', after: [
        "**Les portes d'entrée** : caisse, WhatsApp, boutique, application, commerciaux, import d'un ancien fichier ; chacune produit une fiche brute datée et signée, et rien n'est écrit directement dans la fiche unique. **La normalisation** : téléphone au format international, nom en deux écritures, e-mail en minuscules, wilaya depuis une liste, adresse structurée ; faite à la saisie et refaite à chaque import, et la règle vit dans le code, pas dans la tête d'un employé. **Le rapprochement** : clé exacte d'abord, approché ensuite, un score et trois décisions ; avec un seul seuil et une fusion toujours automatique, on fusionne des gens différents qui partagent un téléphone ; sans seuil, on garde trois fiches par client ; deux seuils écrits et une file de suggestions revue le matin tiennent entre les deux.",
        "**La fiche unique** : calculée à partir des sources conservées avec une règle de survie par champ ; fusion et défusion journalisées ; une fiche entreprise pour le B2B ; on corrige une source, et la fiche se recalcule. **Les usages** : fidélité et crédit sur la bonne fiche, messages envoyés une fois avec le consentement du bon canal selon [le guide sur les notifications](" + L.notif + "), historique complet au comptoir et dans [l'agent WhatsApp](" + L.whatsapp + "), segments pour les campagnes ; c'est la raison de tout le reste, un client qui reçoit la promo une fois et dont le vendeur voit tout.",
      ] },
      { heading: 'Quand un client se présente à une porte', body: [
        "Le fichier reste unique parce que chaque porte fait les mêmes six gestes, dans le même ordre.",
      ], visual: 'etapes', after: [
        "**Demander le téléphone d'abord**, parce que c'est le seul champ qui identifie ; le nom vient après, et il ne sert qu'à confirmer. **Normaliser** au format international avant toute recherche. **Chercher**, exact sur le téléphone, puis approché sur le nom et la wilaya ; c'est l'étape que les applications à trois fiches par client sautent, parce qu'elles créent d'abord et cherchent jamais. **Proposer la fiche trouvée**, confirmée par l'employé qui voit le nom et le dernier achat, ou par un code envoyé sur le téléphone quand c'est le client lui-même qui se présente, sur la boutique ou l'application.",
        "**Créer seulement si rien** : une fiche brute datée, signée par la porte et l'employé, qui entrera dans la résolution comme les autres. **Journaliser la source** : qui, quand, par quelle porte ; la fiche unique se recalcule. La caisse fait ces six gestes en trois secondes et sans réseau, selon [le guide sur la caisse](" + L.caisse + ") ; la boutique les fait à la création du compte ; le commercial terrain les fait sur sa tablette dans [l'application de tournée](" + L.prevente + "), et la résolution rattrape au retour du réseau ce qui n'a pas pu être rapproché sur place.",
      ] },
      { heading: 'Vu ailleurs : le plan de numérotation et la pratique des grands fichiers, et ce qui se transpose', body: [
        "Deux sources disent l'essentiel. Le plan de numérotation algérien dit la forme exacte d'un numéro, neuf chiffres mobiles après le 0, huit fixes avec un indicatif de zone, et la norme internationale dit sa longueur maximale ; ce qui se transpose, c'est une normalisation écrite dans le code qui ramène toutes les écritures à une seule et refuse ce qui ne s'y plie pas. La pratique des grands fichiers clients, chez les opérateurs et les banques, sépare toujours les enregistrements sources d'une fiche de référence calculée, avec des règles de survie par champ et un journal ; ce qui se transpose, c'est que la fiche n'est jamais tapée, et que la fusion se défait.",
        "Ce que ces sources ne disent pas : vos seuils, vos règles de survie, et qui revoit les suggestions le matin ; la première semaine du projet y répond, et c'est le gérant qui signe la liste des portes et des règles.",
      ] },
      { heading: "Les règles d'un fichier client qui reste unique", body: [
        "Six règles, écrites la première semaine. **Le téléphone normalisé est la clé**, cherchée avant de créer. **Chaque porte garde sa fiche brute datée** ; rien n'est écrit directement dans la fiche unique. **Deux seuils** : fusion automatique au-dessus, suggestion entre, rien en dessous. **Une règle de survie par champ**, écrite, et les consentements prennent le plus restrictif. **Toute fusion est journalisée et réversible**, parce que les sources ne sont jamais modifiées. **La file de suggestions est revue chaque matin**, et le taux de doublons est mesuré chaque mois.",
        "Une septième règle porte sur le devis : « gestion des clients et dédoublonnage » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « liste des portes d'entrée avec fiche brute datée et signée ; normalisation du téléphone au format international, du nom en deux écritures et de l'e-mail à la saisie et à l'import ; rapprochement exact puis approché avec score et deux seuils écrits ; fiche unique calculée avec règles de survie par champ ; fusion et défusion journalisées, sources conservées ; fiche entreprise pour le B2B ; consentements par canal ; anonymisation sur demande avec factures conservées ; file de suggestions et taux de doublons mensuel dans la supervision », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui écrit « détection des doublons » sans dire ce qui se passe quand on en trouve un a prévu une alerte, pas une fiche unique.",
      ] },
      { heading: 'Six entreprises, et la porte qui créait les doublons', body: [
        "Six entreprises que nous équipons souvent, et pour chacune la porte qui créait le plus de doublons et ce qui l'a réglé.",
      ], list: [
        "**La chaîne de magasins**, décrite dans [le guide sur la caisse](" + L.caisse + "). Chaque caisse créait sa fiche ; le téléphone demandé d'abord et normalisé a réuni trois fiches par client fidèle en une.",
        "**Le programme de fidélité**, décrit dans [le guide dédié](" + L.fidelite + "). Les points étaient éparpillés sur des fiches en double ; l'addition à la fusion les a rendus au client, et la réclamation au comptoir a cessé.",
        "**Le grossiste et son portail**, décrit dans [le guide dédié](" + L.portail + "). Le gérant, son fils et l'employé de la supérette commandaient chacun avec leur téléphone ; la fiche entreprise a rattaché les trois.",
        "**Le commerce piloté depuis la France**, décrit dans [le guide dédié](" + L.commerce + "). La boutique en ligne et la caisse d'Alger avaient chacune leur fichier ; le fondateur voit désormais un client, son historique en ligne et au comptoir, sur [son tableau de bord](" + L.dashboard + ").",
        "**Les commerciaux terrain**, décrits dans [le guide dédié](" + L.prevente + "). Chaque tournée créait des fiches « Supérette X, Karim » ; la recherche avant création sur la tablette, et la résolution au retour du réseau, ont arrêté la fuite.",
        "**La salle de sport**, décrite dans [le guide dédié](" + L.sport + "). Un abonné réinscrit chaque année sous une nouvelle fiche ; le téléphone vérifié par code à l'inscription a rendu l'historique des abonnements.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'un fichier client rendu unique en six semaines, dont la première sans code.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** écrit les portes et les règles : la liste des portes d'entrée, le téléphone comme clé, les règles de normalisation, les deux seuils, les règles de survie par champ ; signées par le gérant, parce qu'une fusion faite avec les mauvaises règles se défait difficilement à grande échelle. **La semaine 1 à 2** met la normalisation à la saisie sur toutes les portes et normalise l'ancien fichier, dont le taux de doublons est mesuré pour la première fois. **La semaine 2 à 3** construit le rapprochement : exact puis approché, score, fusion automatique au-dessus du seuil, file de suggestions pour le reste.",
        "**La semaine 3 à 4** construit la fiche unique : règles de survie, sources conservées, fusion et défusion journalisées, fiche entreprise pour le B2B. **La semaine 4 à 5** branche les usages : fidélité, consentements par canal, historique au comptoir et sur WhatsApp, segments, et les premières campagnes envoyées une fois. **La semaine 5 à 6** installe la revue du matin, la file de suggestions revue par une personne, et le taux de doublons mesuré chaque mois ; elle ne s'arrête plus. Chaque lot est démontré comme [le guide sur la livraison](" + L.livrer + ") le décrit, et la reprise de l'ancien fichier suit [le guide dédié](" + L.reprendre + ").",
      ] },
      { heading: 'Ce qui fait échouer un fichier client unique', body: [
        "Les fichiers que nous reprenons ont presque toujours échoué pour l'une de ces raisons.",
      ], list: [
        "**Le nom comme clé.** Deux écritures, trois translittérations, et aucun rapprochement ne tient.",
        "**Créer avant de chercher.** Chaque porte crée sa fiche ; personne ne cherche d'abord.",
        "**Le téléphone stocké tel quel.** 0661, +213 et 00213 sont trois clients.",
        "**Une seule règle : fusionner.** Le téléphone du magasin fusionne trois acheteurs en un.",
        "**La fusion qui écrase.** Les sources sont perdues ; une erreur de fusion est irréversible.",
        "**Des consentements qui s'additionnent.** Le client qui a refusé les SMS sur une fiche les reçoit par l'autre.",
        "**Personne ne revoit les suggestions.** La file grossit, puis on l'ignore, puis les doublons reviennent.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de gérants, de fondateurs et de responsables informatiques.",
      ], faq: [
        { q: 'Pourquoi le même client existe-t-il plusieurs fois dans notre application ?', a: "Parce qu'il entre par plusieurs portes, caisse, WhatsApp, boutique en ligne, application, commerciaux, et qu'aucune règle ne dit qu'il s'agit de la même personne : le nom est écrit différemment, le téléphone aussi, et chaque porte crée sa fiche sans chercher d'abord. La solution est une architecture, pas une discipline de saisie : le téléphone normalisé comme clé, une recherche avant toute création, et une résolution qui rapproche les fiches brutes." },
        { q: 'Pourquoi le téléphone et pas le nom ?', a: "Parce que le téléphone se normalise et se compare : le plan de numérotation dit sa forme exacte, et 0661…, +213661… et 00213 661… deviennent le même numéro. Le nom ne se compare pas d'une écriture à l'autre, « بن علي كريم » et « Karim Benali » ne sont égaux pour aucun moteur sans règles qui se trompent. Le nom sert à confirmer un rapprochement, jamais à fusionner seul." },
        { q: 'Que se passe-t-il si deux personnes partagent le même numéro ?', a: "Un numéro peut porter plusieurs personnes, le téléphone du magasin ou de la famille par exemple. La fusion automatique est refusée si les noms diffèrent, et chaque personne garde sa fiche, rattachées au même numéro. C'est pour cela que le téléphone identique ne suffit pas seul à fusionner : la règle vérifie aussi le nom, et en cas de doute, propose au lieu de décider." },
        { q: 'Une fusion peut-elle être annulée ?', a: "Oui, en un geste, parce que les deux fiches sources ne sont jamais modifiées : la fiche fusionnée pointe vers elles, et la défusion retire le lien. Chaque fusion est journalisée avec qui, quand, le score et la règle. C'est cette réversibilité qui permet d'autoriser la fusion automatique au-dessus d'un seuil ; sans elle, aucune fusion ne pourrait être déléguée à une règle." },
        { q: 'Que deviennent les consentements et les points lors d’une fusion ?', a: "Chaque champ a sa règle de survie, écrite la première semaine : les points de fidélité s'additionnent ; les consentements prennent le plus restrictif par canal, un client qui a refusé les SMS sur une fiche les a refusés tout court ; le téléphone vérifié par code l'emporte ; le nom le plus complet l'emporte et l'autre écriture est gardée ; l'adresse la plus récente l'emporte et l'autre est conservée." },
        { q: 'Combien de temps pour rendre un fichier client unique ?', a: "Six semaines : une pour écrire les portes, la clé, les seuils et les règles de survie, une pour la normalisation et la mesure de l'ancien fichier, une pour le rapprochement et le score, une pour la fiche unique et la fusion, une pour les usages, une pour installer la revue du matin. La première semaine est sans code, et c'est elle qui évite les fusions qu'on regrette." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "La fiche unique est calculée à partir des sources, jamais tapée ; on corrige une source, et la fiche se recalcule." },
      { after: 3, text: "Une fusion n'écrase rien : les sources sont conservées, le journal dit qui et pourquoi, et la défusion se fait en un geste." },
    ],
    cta: { eyebrow: 'Envoyez-nous un export de votre fichier clients, nous mesurons les doublons', title: "Gérant en Algérie ou fondateur en France : nous rendons votre fichier client unique, du comptoir à WhatsApp, avec le téléphone comme clé, une fusion réversible et des consentements par canal", body: "Symloop construit et reprend des applications en production pour les entreprises en Algérie et les fondateurs installés en France : portes d'entrée avec fiches brutes datées, normalisation du téléphone et du nom en deux écritures, rapprochement exact puis approché avec score et deux seuils, fiche unique calculée avec règles de survie par champ, fusion et défusion journalisées, fiche entreprise pour le B2B, consentements par canal, anonymisation sur demande, file de suggestions et taux de doublons mensuel. Code et règles dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.reprendre, kind: '2027', name: 'Reprendre ses données Excel et son ancien logiciel' },
      { href: L.fidelite, kind: '2027', name: 'Programme de fidélité : points, caisse, relance' },
      { href: L.otp, kind: '2027', name: 'Connexion par téléphone : OTP, SMS, WhatsApp' },
      { href: L.bilingue, kind: '2027', name: 'Une application en arabe et en français' },
    ] },
  },
  en: {
    kind: 'Customers · Duplicates · Multichannel · 2027', title: 'One customer, not three: building a single customer file in your application in Algeria in 2027, from the till to WhatsApp, the phone as key, merging and history',
    dek: '“The same customer exists three times: created at the till in Arabic, on WhatsApp with their number, and on the shop with their e-mail. Their loyalty points are scattered, the seller cannot see what they ordered online, and they received the promo three times.” A duplicate is not a typing mistake, it is an architecture: five entry doors and no rule to say it is the same person. This guide describes what gets built so that a customer exists only once: the normalised phone as key, matching rules with a score and two thresholds, a single record computed from kept sources, a reversible and logged field-by-field merge, and consents per channel.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Customer file', 'Duplicates', 'Multichannel', 'Data', 'Algeria 2027'],
    intro: [
      '**Short answer.** A customer comes in through **five doors**, till, WhatsApp, online shop, app, field sales, and every door keeps its **dated raw record**. The **phone**, normalised to international format at entry, is the **key** looked up first, because it compares, where a name in Arabic and French does not. **Matching** looks for the exact first, then the approximate, name and wilaya, and gives a **score**; above a written threshold the merge is **automatic**, between two thresholds it is a **suggestion** a human reviews in the morning, below it is two records. The **single record** is **computed** from the sources, never typed, with a **survivorship rule per field**: the verified phone wins, the most complete name keeps the other script, points add up, consents take the most restrictive. Every merge is **logged** and **undone in one gesture**, because the sources are never modified. Six weeks, the first without code.',
      'This guide is for the manager of a shop chain who no longer knows how many customers they have, the founder settled in France whose online shop and Algiers till talk poorly to each other, and the person who must reconcile a loyalty programme with duplicate records. It does not repeat how an old file is deduplicated at migration time, described in [the data migration guide](' + L.reprendre + '), nor how points are computed, described in [the loyalty guide](' + L.fidelite + '); it describes what is built so that a customer stays unique day to day, door after door, and extends [our page on software engineering](' + L.service + ').',
    ],
    sections: [
      { heading: 'What the references say', body: [
        'The phone is the only key that normalises, and its form is public. The Algerian numbering plan gives the country the code +213 and the trunk prefix 0; a mobile number has “nine digits” after that 0, in the form “0yxx xx xx xx” where “y is the operator code, 5 for Ooredoo, 6 for Mobilis, 7 for Djezzy”; a landline has eight, with an area code, 021 or 023 for Algiers, 036 for Sétif. The international numbering standard limits a full number to fifteen digits. What this imposes: “0661 23 45 67”, “+213661234567” and “00213 661 23 45 67” are the same number, and a normalisation function that knows these rules brings them all to +213661234567 before any search; a number that does not normalise is refused at entry, not stored as is.',
        'The name, for its part, does not normalise, which is why it is not the key. An Algerian customer is “Benali Karim” at the till when the employee types in Latin, “بن علي كريم” when they type in Arabic, “Karim B.” on WhatsApp, and the transliteration of one Arabic name into Latin letters admits several forms; no engine sees them as equal without rules, and rules get it wrong. What this imposes: the name is stored in both scripts, per [the bilingual application guide](' + L.bilingue + '), it serves to confirm a match proposed by the phone or e-mail, and it never merges automatically on its own.',
        'What we did not find: a public measure of the duplicate rate in Algerian companies’ customer files. What we see on the files we take over is between one record in ten and one in six duplicated when several doors have existed for over a year without a common rule, and we say so as an observation, not a statistic. A file without duplicates does not exist; a file whose duplicate rate is measured every month and reviewed every morning does.',
      ] },
      { heading: 'One customer, five doors, one single record', body: [
        'The single customer file is not understood on a database schema but on a real customer who comes in through five doors over eight months.',
      ], visual: 'portes', after: [
        '**In March**, Karim buys at the counter; Amel types his name in Arabic and his number, 0661 23 45 67. **In May**, he writes on WhatsApp from +213661234567 and accepts promotions; first name and an initial. **In September**, he orders on the online shop with his e-mail and a number written 00213 661 23 45 67. **In October**, he installs the app and verifies his number with a code, per [the phone login guide](' + L.otp + '). **In November**, the field rep visits his mini-market and records him as “Supérette El Hidhab, Karim”, with the same number written yet another way. Five raw records, five dates, five ways of writing the same person.',
        '**Resolution** does four things, in order: it normalises the phone, the name and the e-mail; it matches, first on the exact phone, then on name and wilaya; it scores the confidence; and it decides, automatic merge when the normalised phone is identical, suggestion when only name and wilaya agree, nothing below. **The single record** that comes out carries the phone verified by the app’s code, the name in both scripts, the shop’s e-mail, the rep’s wilaya and outlet, and the consents given on WhatsApp; and every field says where it comes from. The data is an example; the rule is not: the single record is computed, never typed.',
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        'Six situations that recur on almost every customer file, and what the application does for each.',
      ], visual: 'situations', after: [
        '**The same number, three spellings**: normalisation to international format at entry makes them find each other; it is the most frequent and simplest situation. **Two numbers, one person**: the customer changed operator; the match by name and wilaya is suggested to the employee and confirmed by a code on the new number; the old one stays in history. **One number, several people**: the shop’s or the family’s phone is given by three buyers; a number may carry several people, automatic merge is refused if names differ, and that is why the phone alone does not merge without checking the name.',
        '**The name in Arabic and French**: both scripts are stored and searched, per [the search guide](' + L.recherche + '), but matching goes through the phone, and the name only confirms. **The B2B customer with several buyers**: a company record and attached person records, loyalty and credit on the company, consents on the people; it is the structure of [the B2B portal](' + L.portail + '). **The customer asking for deletion**: the record and its sources are anonymised, invoices kept with the customer number only, the operation logged and irreversible; it is the case where keeping sources does not mean keeping them nominative.',
      ] },
      { heading: 'One merge, field by field, and its undo', body: [
        'The merge is the operation people fear most, which is why it is the most constrained.',
      ], visual: 'fusion', after: [
        '**Two records**: A, created at the till in March with fourteen purchases; B, created on the shop in September with three orders; the normalised phone is identical, the score is 0.96, the merge is suggested and Amel confirms it from the till. **One rule per field**: the phone verified by code wins; the most complete name wins and the other script is kept; the present e-mail wins; the most recent address wins and the other is kept; loyalty points add up; consents take the most restrictive per channel, because a customer who refused SMS on one record refused them, full stop.',
        '**Nothing is overwritten**: the merged record points to its two sources, kept as they were with their history, and the log line says who merged, when, with which score and by which rule, per [the audit log guide](' + L.roles + '). **Unmerging** happens in one gesture, because the sources were never modified: you remove the link, and both records resume their lives. That reversibility is what allows automatic merge above the threshold; without it, every merge would be an irreversible decision no manager would delegate to a rule.',
      ] },
      { heading: 'A single customer file, in five layers', body: [
        'Behind those merges, five layers, and the one that decides how many customers you have.',
      ], visual: 'couches', after: [
        '**Entry doors**: till, WhatsApp, shop, app, field sales, import of an old file; each produces a dated and signed raw record, and nothing is written directly into the single record. **Normalisation**: phone in international format, name in both scripts, lowercase e-mail, wilaya from a list, structured address; done at entry and redone at every import, and the rule lives in the code, not in an employee’s head. **Matching**: exact key first, approximate next, a score and three decisions; with a single threshold and always-automatic merge, you merge different people who share a phone; with no threshold, you keep three records per customer; two written thresholds and a suggestion queue reviewed in the morning hold between the two.',
        '**The single record**: computed from kept sources with a survivorship rule per field; merge and unmerge logged; a company record for B2B; you correct a source, and the record recomputes. **Uses**: loyalty and credit on the right record, messages sent once with the right channel’s consent per [the notifications guide](' + L.notif + '), full history at the till and in [the WhatsApp agent](' + L.whatsapp + '), segments for campaigns; the reason for everything else, a customer who receives the promo once and whose seller sees everything.',
      ] },
      { heading: 'When a customer shows up at a door', body: [
        'The file stays single because every door makes the same six gestures, in the same order.',
      ], visual: 'etapes', after: [
        '**Ask for the phone first**, because it is the only field that identifies; the name comes after, and only confirms. **Normalise** to international format before any search. **Search**, exact on the phone, then approximate on name and wilaya; it is the step applications with three records per customer skip, because they create first and never search. **Propose the record found**, confirmed by the employee who sees the name and the last purchase, or by a code sent to the phone when the customer shows up themselves, on the shop or the app.',
        '**Create only if nothing**: a dated raw record, signed by the door and the employee, which will enter resolution like the others. **Log the source**: who, when, through which door; the single record recomputes. The till makes these six gestures in three seconds and without network, per [the point-of-sale guide](' + L.caisse + '); the shop makes them at account creation; the field rep makes them on their tablet in [the round application](' + L.prevente + '), and resolution catches up when network returns with what could not be matched on site.',
      ] },
      { heading: 'Seen elsewhere: the numbering plan and the practice of large files, and what transposes', body: [
        'Two sources say the essentials. The Algerian numbering plan says the exact form of a number, nine mobile digits after the 0, eight landline digits with an area code, and the international standard says its maximum length; what transposes is a normalisation written in the code that brings every spelling to one and refuses what does not fit. The practice of large customer files, at operators and banks, always separates source records from a computed reference record, with survivorship rules per field and a log; what transposes is that the record is never typed, and the merge can be undone.',
        'What these sources do not say: your thresholds, your survivorship rules, and who reviews suggestions in the morning; the project’s first week answers that, and the manager signs the list of doors and rules.',
      ] },
      { heading: 'The rules of a customer file that stays single', body: [
        'Six rules, written in week one. **The normalised phone is the key**, looked up before creating. **Every door keeps its dated raw record**; nothing is written directly into the single record. **Two thresholds**: automatic merge above, suggestion between, nothing below. **One survivorship rule per field**, written, and consents take the most restrictive. **Every merge is logged and reversible**, because sources are never modified. **The suggestion queue is reviewed every morning**, and the duplicate rate measured every month.',
        'A seventh rule concerns the quote: “customer management and deduplication” is not a requirement, it is a sentence; the requirement reads “list of entry doors with dated and signed raw record; normalisation of phone to international format, name in both scripts and e-mail at entry and import; exact then approximate matching with score and two written thresholds; computed single record with survivorship rules per field; logged merge and unmerge, kept sources; company record for B2B; consents per channel; anonymisation on request with kept invoices; suggestion queue and monthly duplicate rate in supervision”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote that writes “duplicate detection” without saying what happens when one is found has planned an alert, not a single record.',
      ] },
      { heading: 'Six companies, and the door that created duplicates', body: [
        'Six companies we often equip, and for each the door that created the most duplicates and what fixed it.',
      ], list: [
        '**The shop chain**, described in [the point-of-sale guide](' + L.caisse + '). Every till created its record; the phone asked first and normalised brought three records per loyal customer down to one.',
        '**The loyalty programme**, described in [the dedicated guide](' + L.fidelite + '). Points were scattered across duplicate records; adding them at merge gave them back to the customer, and the complaint at the counter stopped.',
        '**The wholesaler and its portal**, described in [the dedicated guide](' + L.portail + '). The manager, his son and the mini-market’s employee each ordered with their phone; the company record attached all three.',
        '**The shop run from France**, described in [the dedicated guide](' + L.commerce + '). The online shop and the Algiers till each had their file; the founder now sees one customer, their online and counter history, on [their dashboard](' + L.dashboard + ').',
        '**Field sales**, described in [the dedicated guide](' + L.prevente + '). Every round created “Supérette X, Karim” records; search before creation on the tablet, and resolution when network returned, stopped the leak.',
        '**The gym**, described in [the dedicated guide](' + L.sport + '). A member re-registered every year under a new record; the phone verified by code at registration gave back the subscription history.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of a customer file made single in six weeks, the first without code.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** writes doors and rules: the list of entry doors, the phone as key, normalisation rules, the two thresholds, survivorship rules per field; signed by the manager, because a merge done with the wrong rules is hard to undo at scale. **Week 1 to 2** puts normalisation at entry on every door and normalises the old file, whose duplicate rate is measured for the first time. **Week 2 to 3** builds matching: exact then approximate, score, automatic merge above the threshold, suggestion queue for the rest.',
        '**Week 3 to 4** builds the single record: survivorship rules, kept sources, logged merge and unmerge, company record for B2B. **Week 4 to 5** connects the uses: loyalty, consents per channel, history at the till and on WhatsApp, segments, and the first campaigns sent once. **Week 5 to 6** installs the morning review, the suggestion queue reviewed by one person, and the duplicate rate measured every month; it never stops. Every batch is demoed as [the delivery guide](' + L.livrer + ') describes, and the takeover of the old file follows [the dedicated guide](' + L.reprendre + ').',
      ] },
      { heading: 'What makes a single customer file fail', body: [
        'The files we take over almost always failed for one of these reasons.',
      ], list: [
        '**The name as key.** Two scripts, three transliterations, and no match holds.',
        '**Creating before searching.** Every door creates its record; nobody searches first.',
        '**The phone stored as typed.** 0661, +213 and 00213 are three customers.',
        '**A single rule: merge.** The shop’s phone merges three buyers into one.',
        '**The merge that overwrites.** Sources are lost; a merge error is irreversible.',
        '**Consents that add up.** The customer who refused SMS on one record receives them through the other.',
        '**Nobody reviews suggestions.** The queue grows, then is ignored, then duplicates come back.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from managers, founders and IT managers.',
      ], faq: [
        { q: 'Why does the same customer exist several times in our application?', a: 'Because they come in through several doors, till, WhatsApp, online shop, app, field sales, and no rule says it is the same person: the name is written differently, the phone too, and every door creates its record without searching first. The fix is an architecture, not typing discipline: the normalised phone as key, a search before any creation, and a resolution that matches the raw records.' },
        { q: 'Why the phone and not the name?', a: 'Because the phone normalises and compares: the numbering plan says its exact form, and 0661…, +213661… and 00213 661… become the same number. The name does not compare from one script to the other, “بن علي كريم” and “Karim Benali” are equal for no engine without rules that get it wrong. The name confirms a match, never merges on its own.' },
        { q: 'What happens if two people share the same number?', a: 'A number may carry several people, the shop’s or the family’s phone for instance. Automatic merge is refused if names differ, and each person keeps their record, attached to the same number. That is why an identical phone alone is not enough to merge: the rule also checks the name, and when in doubt, suggests instead of deciding.' },
        { q: 'Can a merge be cancelled?', a: 'Yes, in one gesture, because the two source records are never modified: the merged record points to them, and unmerging removes the link. Every merge is logged with who, when, the score and the rule. That reversibility is what allows automatic merge above a threshold; without it, no merge could be delegated to a rule.' },
        { q: 'What happens to consents and points in a merge?', a: 'Every field has its survivorship rule, written in week one: loyalty points add up; consents take the most restrictive per channel, a customer who refused SMS on one record refused them full stop; the phone verified by code wins; the most complete name wins and the other script is kept; the most recent address wins and the other is kept.' },
        { q: 'How long to make a customer file single?', a: 'Six weeks: one to write the doors, the key, the thresholds and the survivorship rules, one for normalisation and measuring the old file, one for matching and the score, one for the single record and the merge, one for the uses, one to install the morning review. The first week has no code, and it is what avoids the merges you regret.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'The single record is computed from the sources, never typed; you correct a source, and the record recomputes.' },
      { after: 3, text: 'A merge overwrites nothing: the sources are kept, the log says who and why, and unmerging happens in one gesture.' },
    ],
    cta: { eyebrow: 'Send us an export of your customer file, we measure the duplicates', title: 'Manager in Algeria or founder in France: we make your customer file single, from the till to WhatsApp, with the phone as key, a reversible merge and consents per channel', body: 'Symloop builds and takes over applications in production for companies in Algeria and founders settled in France: entry doors with dated raw records, normalisation of phone and name in both scripts, exact then approximate matching with score and two thresholds, computed single record with survivorship rules per field, logged merge and unmerge, company record for B2B, consents per channel, anonymisation on request, suggestion queue and monthly duplicate rate. Code and rules in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.reprendre, kind: '2027', name: 'Bringing Excel data and old software into a new app' },
      { href: L.fidelite, kind: '2027', name: 'Loyalty programme: points, till, reminders' },
      { href: L.otp, kind: '2027', name: 'Phone login: OTP, SMS, WhatsApp' },
      { href: L.bilingue, kind: '2027', name: 'An application in Arabic and French' },
    ] },
  },
  ar: {
    kind: 'زبائن · تكرارات · متعدد القنوات · 2027', title: 'زبون واحد لا ثلاثة: بناء ملف زبائن واحد في تطبيقكم في الجزائر سنة 2027، من الصندوق إلى WhatsApp، الهاتف مفتاحاً، الدمج والتاريخ',
    dek: '«الزبون نفسه موجود ثلاث مرات: أُنشئ عند الصندوق بالعربية، وعلى WhatsApp برقمه، وعلى المتجر ببريده. نقاط ولائه مبعثرة، والبائع لا يرى ما طلبه عبر الإنترنت، وتلقى العرض ثلاث مرات.» التكرار ليس خطأ إدخال بل هندسة: خمسة أبواب دخول ولا قاعدة تقول إنه الشخص نفسه. يصف هذا الدليل ما يُبنى كي لا يوجد الزبون إلا مرة: الهاتف المنمَّط مفتاحاً، قواعد مطابقة بنقطة وعتبتين، بطاقة واحدة تُحسب من مصادر محفوظة، دمج حقلاً حقلاً قابل للتراجع ومسجَّل، وموافقات لكل قناة.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['ملف الزبائن', 'تكرارات', 'متعدد القنوات', 'بيانات', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** يدخل الزبون من **خمسة أبواب**، الصندوق وWhatsApp والمتجر الإلكتروني والتطبيق والمندوب الميداني، وكل باب يحتفظ بـ **بطاقته الخام المؤرَّخة**. **الهاتف**، المنمَّط بالصيغة الدولية عند الإدخال، هو **المفتاح** الذي يُبحث عنه أولاً، لأنه يُقارَن، بينما اسم بالعربية والفرنسية لا يُقارَن. **المطابقة** تبحث عن التام أولاً ثم التقريبي، الاسم والولاية، وتعطي **نقطة**؛ فوق عتبة مكتوبة يكون الدمج **آلياً**، وبين عتبتين **اقتراحاً** يراجعه إنسان صباحاً، وتحتهما بطاقتان. **البطاقة الواحدة** **تُحسب** من المصادر ولا تُكتب أبداً، بـ **قاعدة بقاء لكل حقل**: الهاتف المتحقَّق منه يفوز، الاسم الأكمل يحتفظ بالكتابة الأخرى، النقاط تُجمع، الموافقات تأخذ الأكثر تقييداً. وكل دمج **مسجَّل** و**يُفسخ بحركة واحدة**، لأن المصادر لا تُعدَّل أبداً. ستة أسابيع، الأول بلا كود.',
      'هذا الدليل موجّه إلى مسيّر سلسلة متاجر لم يعد يعرف كم زبوناً لديه، وإلى المؤسس المقيم في فرنسا الذي لا يتخاطب متجره الإلكتروني وصندوقه في الجزائر جيداً، وإلى المسؤول الذي يجب أن يوفّق برنامج ولاء مع بطاقات مكررة. لا يعيد كيف يُنقّى ملف قديم من التكرارات عند الهجرة، الموصوف في [دليل استعادة البيانات](' + L.reprendre + ')، ولا كيف تُحسب النقاط، الموصوف في [دليل الولاء](' + L.fidelite + ')؛ بل يصف ما يُبنى كي يبقى الزبون واحداً يومياً، باباً بعد باب، ويمدّ [صفحتنا عن هندسة البرمجيات](' + L.service + ').',
    ],
    sections: [
      { heading: 'ما تقوله المراجع', body: [
        'الهاتف المفتاح الوحيد الذي يُنمَّط، وشكله علني. يعطي مخطط الترقيم الجزائري البلد الرمز +213 وبادئة الخروج 0؛ ورقم الهاتف المحمول «تسعة أرقام» بعد ذلك الصفر، بالشكل «0yxx xx xx xx» حيث «y رمز المشغّل، 5 لـ Ooredoo و6 لـ Mobilis و7 لـ Djezzy»؛ ورقم الهاتف الثابت ثمانية، برمز منطقة، 021 أو 023 للجزائر العاصمة و036 لسطيف. ويحدّ المعيار الدولي للأرقام الرقم الكامل بخمسة عشر رقماً. وما يفرضه ذلك: «0661 23 45 67» و«+213661234567» و«00213 661 23 45 67» رقم واحد، ودالة تنميط تعرف هذه القواعد تعيدها كلها إلى +213661234567 قبل أي بحث؛ ورقم لا يُنمَّط يُرفض عند الإدخال لا يُخزَّن كما هو.',
        'أما الاسم فلا يُنمَّط، ولهذا ليس المفتاح. الزبون الجزائري «Benali Karim» عند الصندوق حين يكتب الموظف باللاتينية، و«بن علي كريم» حين يكتب بالعربية، و«Karim B.» على WhatsApp، وكتابة الاسم العربي الواحد بحروف لاتينية تقبل أشكالاً عدة؛ ولا محرك يراها متساوية بلا قواعد، والقواعد تخطئ. وما يفرضه ذلك: يُخزَّن الاسم بالكتابتين وفق [دليل التطبيق ثنائي اللغة](' + L.bilingue + ')، ويُستعمل لتأكيد مطابقة يقترحها الهاتف أو البريد، ولا يُستعمل وحده أبداً للدمج الآلي.',
        'وما لم نجده: قياس علني لنسبة التكرارات في ملفات زبائن الشركات في الجزائر. وما نراه في الملفات التي نستلمها بين بطاقة من عشر وبطاقة من ست مكررة حين توجد عدة أبواب منذ أكثر من سنة بلا قاعدة مشتركة، ونقولها ملاحظةً لا إحصاءً. ملف بلا تكرارات لا يوجد؛ أما ملف تُقاس نسبة تكراراته كل شهر وتُراجَع كل صباح فيوجد.',
      ] },
      { heading: 'زبون واحد، خمسة أبواب، بطاقة واحدة', body: [
        'ملف الزبائن الواحد لا يُفهم على مخطط قاعدة بيانات بل على زبون حقيقي يدخل من خمسة أبواب في ثمانية أشهر.',
      ], visual: 'portes', after: [
        '**في مارس**، يشتري كريم عند الكاونتر؛ تكتب أمل اسمه بالعربية ورقمه 0661 23 45 67. **في ماي**، يكتب على WhatsApp من +213661234567 ويقبل العروض؛ اسمه الأول وحرف. **في سبتمبر**، يطلب على المتجر الإلكتروني ببريده ورقم مكتوب 00213 661 23 45 67. **في أكتوبر**، يثبّت التطبيق ويتحقق من رقمه برمز وفق [دليل تسجيل الدخول بالهاتف](' + L.otp + '). **في نوفمبر**، يمر المندوب الميداني بسوبيريته ويسجّله «سوبيريت الهضاب، كريم» بالرقم نفسه مكتوباً بطريقة أخرى. خمس بطاقات خام، خمسة تواريخ، خمس طرق لكتابة الشخص نفسه.',
        '**الحل** يفعل أربعة أشياء بالترتيب: ينمّط الهاتف والاسم والبريد؛ يطابق أولاً على الهاتف التام ثم على الاسم والولاية؛ ينقّط الثقة؛ ويقرر، دمج آلي حين يتطابق الهاتف المنمَّط، اقتراح حين يتفق الاسم والولاية فقط، لا شيء تحت ذلك. و**البطاقة الواحدة** الناتجة تحمل الهاتف المتحقَّق منه برمز التطبيق، والاسم بالكتابتين، وبريد المتجر، وولاية المندوب ونقطة بيعه، والموافقات المعطاة على WhatsApp؛ وكل حقل يقول من أين جاء. البيانات مثال؛ والقاعدة ليست مثالاً: البطاقة الواحدة تُحسب ولا تُكتب أبداً.',
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        'ست حالات تتكرر في كل ملفات الزبائن تقريباً، وما يفعله التطبيق لكل منها.',
      ], visual: 'situations', after: [
        '**الرقم نفسه، ثلاث كتابات**: التنميط إلى الصيغة الدولية عند الإدخال يجعلها تلتقي؛ وهي الحالة الأكثر تكراراً والأبسط. **رقمان، شخص واحد**: غيّر الزبون المشغّل؛ تُقترح المطابقة بالاسم والولاية على الموظف وتُؤكَّد برمز على الرقم الجديد؛ ويبقى القديم في التاريخ. **رقم واحد، عدة أشخاص**: هاتف المحل أو العائلة يعطيه ثلاثة مشترين؛ قد يحمل الرقم عدة أشخاص، ويُرفض الدمج الآلي إن اختلفت الأسماء، ولهذا لا يدمج الهاتف وحده دون التحقق من الاسم.',
        '**الاسم بالعربية والفرنسية**: الكتابتان تُخزَّنان وتُبحثان وفق [دليل البحث](' + L.recherche + ')، لكن المطابقة تمر بالهاتف، والاسم لا يفعل إلا التأكيد. **زبون B2B بعدة مشترين**: بطاقة شركة وبطاقات أشخاص مرتبطة بها، الولاء والائتمان على الشركة، والموافقات على الأشخاص؛ وهي بنية [بوابة B2B](' + L.portail + '). **الزبون الذي يطلب الحذف**: تُخفى هوية البطاقة ومصادرها، وتُحفظ الفواتير برقم الزبون وحده، والعملية مسجَّلة ولا رجعة فيها؛ وهي الحالة التي لا يعني فيها حفظ المصادر إبقاءها اسمية.',
      ] },
      { heading: 'دمج واحد، حقلاً حقلاً، والتراجع عنه', body: [
        'الدمج العملية الأكثر إثارة للخوف، ولهذا هي الأكثر تأطيراً.',
      ], visual: 'fusion', after: [
        '**بطاقتان**: أ، أُنشئت عند الصندوق في مارس بأربع عشرة عملية شراء؛ ب، أُنشئت على المتجر في سبتمبر بثلاث طلبيات؛ الهاتف المنمَّط متطابق، والنقطة 0,96، والدمج مقترَح وتؤكده أمل من الصندوق. **قاعدة لكل حقل**: الهاتف المتحقَّق منه برمز يفوز؛ الاسم الأكمل يفوز وتُحفظ الكتابة الأخرى؛ البريد الموجود يفوز؛ العنوان الأحدث يفوز ويُحفظ الآخر؛ نقاط الولاء تُجمع؛ الموافقات تأخذ الأكثر تقييداً لكل قناة، لأن زبوناً رفض الرسائل القصيرة على بطاقة رفضها بالمطلق.',
        '**لا شيء يُمحى**: تشير البطاقة المدموجة إلى مصدريها المحفوظين كما هما بتاريخهما، ويقول سطر السجل من دمج ومتى وبأي نقطة وبأي قاعدة وفق [دليل سجل التدقيق](' + L.roles + '). و**فسخ الدمج** يتم بحركة واحدة لأن المصادر لم تُعدَّل قط: نزيل الرابط فتستأنف البطاقتان حياتهما. وهذه القابلية للتراجع هي التي تسمح بالدمج الآلي فوق العتبة؛ وبدونها كان كل دمج قراراً لا رجعة فيه لا يفوّضه أي مسيّر إلى قاعدة.',
      ] },
      { heading: 'ملف زبائن واحد، في خمس طبقات', body: [
        'خلف هذه الدمجات خمس طبقات، والطبقة التي تقرر كم زبوناً لديكم.',
      ], visual: 'couches', after: [
        '**أبواب الدخول**: الصندوق وWhatsApp والمتجر والتطبيق والمندوبون واستيراد ملف قديم؛ كل منها ينتج بطاقة خام مؤرَّخة وموقَّعة، ولا شيء يُكتب مباشرة في البطاقة الواحدة. **التنميط**: هاتف بالصيغة الدولية، اسم بكتابتين، بريد بأحرف صغيرة، ولاية من قائمة، عنوان منظَّم؛ يتم عند الإدخال ويُعاد عند كل استيراد، والقاعدة في الكود لا في رأس موظف. **المطابقة**: مفتاح تام أولاً، تقريبي ثانياً، نقطة وثلاثة قرارات؛ بعتبة واحدة ودمج آلي دائماً ندمج أشخاصاً مختلفين يتشاركون هاتفاً؛ وبلا عتبة نحتفظ بثلاث بطاقات لكل زبون؛ وعتبتان مكتوبتان وطابور اقتراحات يُراجَع صباحاً يصمدان بين الاثنين.',
        '**البطاقة الواحدة**: تُحسب من المصادر المحفوظة بقاعدة بقاء لكل حقل؛ الدمج والفسخ مسجَّلان؛ بطاقة شركة لـ B2B؛ نصحح مصدراً فتُعاد البطاقة حسابها. **الاستعمالات**: ولاء وائتمان على البطاقة الصحيحة، رسائل تُرسل مرة بموافقة القناة الصحيحة وفق [دليل الإشعارات](' + L.notif + ')، تاريخ كامل عند الصندوق وفي [وكيل WhatsApp](' + L.whatsapp + ')، شرائح للحملات؛ وهذا سبب كل الباقي، زبون يتلقى العرض مرة ويرى بائعه كل شيء.',
      ] },
      { heading: 'حين يأتي زبون إلى باب', body: [
        'يبقى الملف واحداً لأن كل باب يقوم بالحركات الست نفسها بالترتيب نفسه.',
      ], visual: 'etapes', after: [
        '**طلب الهاتف أولاً**، لأنه الحقل الوحيد الذي يعرّف؛ والاسم يأتي بعده ولا يفعل إلا التأكيد. **التنميط** إلى الصيغة الدولية قبل أي بحث. **البحث**، تاماً على الهاتف ثم تقريبياً على الاسم والولاية؛ وهي الخطوة التي تتخطاها التطبيقات ذات ثلاث بطاقات لكل زبون، لأنها تنشئ أولاً ولا تبحث أبداً. **اقتراح البطاقة الموجودة**، يؤكدها الموظف الذي يرى الاسم وآخر شراء، أو رمز يُرسل إلى الهاتف حين يأتي الزبون بنفسه على المتجر أو التطبيق.',
        '**الإنشاء فقط إن لم يوجد شيء**: بطاقة خام مؤرَّخة موقَّعة بالباب والموظف، ستدخل الحل كالأخريات. **تسجيل المصدر**: من، متى، من أي باب؛ وتُعاد البطاقة الواحدة حسابها. يقوم الصندوق بهذه الحركات الست في ثلاث ثوانٍ وبلا شبكة وفق [دليل الصندوق](' + L.caisse + ')؛ ويقوم بها المتجر عند إنشاء الحساب؛ ويقوم بها المندوب الميداني على لوحته في [تطبيق الجولة](' + L.prevente + ')، ويلحق الحل عند عودة الشبكة ما لم يمكن مطابقته في الموقع.',
      ] },
      { heading: 'رأيناه في مكان آخر: مخطط الترقيم وممارسة الملفات الكبيرة، وما ينتقل', body: [
        'مصدران يقولان الجوهر. يقول مخطط الترقيم الجزائري الشكل الدقيق للرقم، تسعة أرقام للمحمول بعد الصفر وثمانية للثابت برمز منطقة، ويقول المعيار الدولي طوله الأقصى؛ وما ينتقل هو تنميط مكتوب في الكود يعيد كل الكتابات إلى واحدة ويرفض ما لا ينضبط. وممارسة ملفات الزبائن الكبيرة عند المشغّلين والبنوك تفصل دائماً السجلات المصدر عن بطاقة مرجعية محسوبة بقواعد بقاء لكل حقل وسجل؛ وما ينتقل هو أن البطاقة لا تُكتب أبداً وأن الدمج يُفسخ.',
        'وما لا تقوله هذه المصادر: عتباتكم وقواعد بقائكم ومن يراجع الاقتراحات صباحاً؛ الأسبوع الأول من المشروع يجيب، والمسيّر يوقّع قائمة الأبواب والقواعد.',
      ] },
      { heading: 'قواعد ملف زبائن يبقى واحداً', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **الهاتف المنمَّط هو المفتاح**، يُبحث عنه قبل الإنشاء. **كل باب يحتفظ ببطاقته الخام المؤرَّخة**؛ ولا شيء يُكتب مباشرة في البطاقة الواحدة. **عتبتان**: دمج آلي فوقهما، اقتراح بينهما، لا شيء تحتهما. **قاعدة بقاء لكل حقل** مكتوبة، والموافقات تأخذ الأكثر تقييداً. **كل دمج مسجَّل وقابل للتراجع** لأن المصادر لا تُعدَّل أبداً. **طابور الاقتراحات يُراجَع كل صباح**، ونسبة التكرارات تُقاس كل شهر.',
        'قاعدة سابعة تخص عرض السعر: «إدارة الزبائن وإزالة التكرارات» ليس متطلباً بل جملة؛ المتطلب يُكتب «قائمة أبواب الدخول ببطاقة خام مؤرَّخة وموقَّعة؛ تنميط الهاتف إلى الصيغة الدولية والاسم بكتابتين والبريد عند الإدخال والاستيراد؛ مطابقة تامة ثم تقريبية بنقطة وعتبتين مكتوبتين؛ بطاقة واحدة محسوبة بقواعد بقاء لكل حقل؛ دمج وفسخ مسجَّلان ومصادر محفوظة؛ بطاقة شركة لـ B2B؛ موافقات لكل قناة؛ إخفاء هوية عند الطلب مع حفظ الفواتير؛ طابور اقتراحات ونسبة تكرارات شهرية في الإشراف»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يكتب «كشف التكرارات» دون أن يقول ما يحدث حين نجد واحداً خطط لتنبيه لا لبطاقة واحدة.',
      ] },
      { heading: 'ست شركات، والباب الذي كان ينشئ التكرارات', body: [
        'ست شركات نجهّزها كثيراً، ولكل منها الباب الذي كان ينشئ أكثر التكرارات وما حله.',
      ], list: [
        '**سلسلة المتاجر**، الموصوفة في [دليل الصندوق](' + L.caisse + '). كان كل صندوق ينشئ بطاقته؛ الهاتف المطلوب أولاً والمنمَّط جمع ثلاث بطاقات لكل زبون وفيّ في واحدة.',
        '**برنامج الولاء**، الموصوف في [الدليل المخصص](' + L.fidelite + '). كانت النقاط مبعثرة على بطاقات مكررة؛ جمعها عند الدمج أعادها إلى الزبون، وتوقفت الشكوى عند الكاونتر.',
        '**تاجر الجملة وبوابته**، الموصوفان في [الدليل المخصص](' + L.portail + '). المسيّر وابنه وموظف السوبيريت كانوا يطلبون كل بهاتفه؛ بطاقة الشركة ربطت الثلاثة.',
        '**المتجر المُدار من فرنسا**، الموصوف في [الدليل المخصص](' + L.commerce + '). كان للمتجر الإلكتروني وصندوق الجزائر ملف لكل منهما؛ يرى المؤسس الآن زبوناً واحداً وتاريخه عبر الإنترنت وعند الكاونتر على [لوحة قيادته](' + L.dashboard + ').',
        '**المندوبون الميدانيون**، الموصوفون في [الدليل المخصص](' + L.prevente + '). كانت كل جولة تنشئ بطاقات «سوبيريت س، كريم»؛ البحث قبل الإنشاء على اللوحة، والحل عند عودة الشبكة، أوقفا التسرب.',
        '**قاعة الرياضة**، الموصوفة في [الدليل المخصص](' + L.sport + '). مشترك يُعاد تسجيله كل سنة ببطاقة جديدة؛ الهاتف المتحقَّق منه برمز عند التسجيل أعاد تاريخ الاشتراكات.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم ملف زبائن يُجعل واحداً في ستة أسابيع، الأول بلا كود.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يكتب الأبواب والقواعد: قائمة أبواب الدخول، الهاتف مفتاحاً، قواعد التنميط، العتبتان، قواعد البقاء لكل حقل؛ موقَّعة من المسيّر، لأن دمجاً تم بقواعد خاطئة يصعب فسخه على نطاق واسع. **الأسبوع 1 إلى 2** يضع التنميط عند الإدخال في كل الأبواب وينمّط الملف القديم الذي تُقاس نسبة تكراراته للمرة الأولى. **الأسبوع 2 إلى 3** يبني المطابقة: تامة ثم تقريبية، نقطة، دمج آلي فوق العتبة، طابور اقتراحات للباقي.',
        '**الأسبوع 3 إلى 4** يبني البطاقة الواحدة: قواعد البقاء، مصادر محفوظة، دمج وفسخ مسجَّلان، بطاقة شركة لـ B2B. **الأسبوع 4 إلى 5** يوصل الاستعمالات: ولاء، موافقات لكل قناة، تاريخ عند الصندوق وعلى WhatsApp، شرائح، وأولى الحملات تُرسل مرة. **الأسبوع 5 إلى 6** يثبّت مراجعة الصباح، طابور الاقتراحات يراجعه شخص، ونسبة التكرارات تُقاس كل شهر؛ ولا تتوقف. وكل دفعة تُعرض كما يصف [دليل التسليم](' + L.livrer + ')، واستلام الملف القديم يتبع [الدليل المخصص](' + L.reprendre + ').',
      ] },
      { heading: 'ما يُفشل ملف زبائن واحداً', body: [
        'الملفات التي نستلمها فشلت دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**الاسم مفتاحاً.** كتابتان، ثلاث نقحرات، ولا مطابقة تصمد.',
        '**الإنشاء قبل البحث.** كل باب ينشئ بطاقته؛ ولا أحد يبحث أولاً.',
        '**الهاتف مخزَّن كما كُتب.** 0661 و+213 و00213 ثلاثة زبائن.',
        '**قاعدة واحدة: الدمج.** هاتف المحل يدمج ثلاثة مشترين في واحد.',
        '**الدمج الذي يمحو.** المصادر ضائعة؛ وخطأ الدمج لا رجعة فيه.',
        '**موافقات تُجمع.** الزبون الذي رفض الرسائل القصيرة على بطاقة يتلقاها عبر الأخرى.',
        '**لا أحد يراجع الاقتراحات.** يكبر الطابور، ثم يُهمَل، ثم تعود التكرارات.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مسيّرين ومؤسسين ومسؤولي إعلام آلي.',
      ], faq: [
        { q: 'لماذا يوجد الزبون نفسه عدة مرات في تطبيقنا؟', a: 'لأنه يدخل من عدة أبواب، الصندوق وWhatsApp والمتجر الإلكتروني والتطبيق والمندوبين، ولا قاعدة تقول إنه الشخص نفسه: الاسم مكتوب بشكل مختلف، والهاتف كذلك، وكل باب ينشئ بطاقته دون أن يبحث أولاً. والحل هندسة لا انضباط إدخال: الهاتف المنمَّط مفتاحاً، بحث قبل أي إنشاء، وحل يطابق البطاقات الخام.' },
        { q: 'لماذا الهاتف لا الاسم؟', a: 'لأن الهاتف يُنمَّط ويُقارَن: يقول مخطط الترقيم شكله الدقيق، و0661… و+213661… و00213 661… تصير الرقم نفسه. والاسم لا يُقارَن من كتابة إلى أخرى، فـ «بن علي كريم» و«Karim Benali» ليسا متساويين عند أي محرك بلا قواعد تخطئ. الاسم يؤكد مطابقة ولا يدمج وحده أبداً.' },
        { q: 'ماذا يحدث إن تشارك شخصان الرقم نفسه؟', a: 'قد يحمل الرقم عدة أشخاص، هاتف المحل أو العائلة مثلاً. يُرفض الدمج الآلي إن اختلفت الأسماء، ويحتفظ كل شخص ببطاقته مرتبطة بالرقم نفسه. ولهذا لا يكفي الهاتف المتطابق وحده للدمج: القاعدة تتحقق من الاسم أيضاً، وعند الشك تقترح بدل أن تقرر.' },
        { q: 'هل يمكن إلغاء دمج؟', a: 'نعم، بحركة واحدة، لأن البطاقتين المصدر لا تُعدَّلان أبداً: تشير البطاقة المدموجة إليهما، وفسخ الدمج يزيل الرابط. وكل دمج مسجَّل بمن ومتى والنقطة والقاعدة. وهذه القابلية للتراجع هي التي تسمح بالدمج الآلي فوق عتبة؛ وبدونها لا يمكن تفويض أي دمج إلى قاعدة.' },
        { q: 'ماذا يحدث للموافقات والنقاط عند الدمج؟', a: 'لكل حقل قاعدة بقاء مكتوبة في الأسبوع الأول: نقاط الولاء تُجمع؛ الموافقات تأخذ الأكثر تقييداً لكل قناة، فزبون رفض الرسائل القصيرة على بطاقة رفضها بالمطلق؛ الهاتف المتحقَّق منه برمز يفوز؛ الاسم الأكمل يفوز وتُحفظ الكتابة الأخرى؛ العنوان الأحدث يفوز ويُحفظ الآخر.' },
        { q: 'كم من الوقت لجعل ملف الزبائن واحداً؟', a: 'ستة أسابيع: واحد لكتابة الأبواب والمفتاح والعتبتين وقواعد البقاء، واحد للتنميط وقياس الملف القديم، واحد للمطابقة والنقطة، واحد للبطاقة الواحدة والدمج، واحد للاستعمالات، واحد لتثبيت مراجعة الصباح. والأسبوع الأول بلا كود، وهو الذي يتجنب الدمجات التي نندم عليها.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'البطاقة الواحدة تُحسب من المصادر ولا تُكتب أبداً؛ نصحح مصدراً فتُعاد البطاقة حسابها.' },
      { after: 3, text: 'الدمج لا يمحو شيئاً: المصادر محفوظة، والسجل يقول من ولماذا، والفسخ يتم بحركة واحدة.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا تصديراً لملف زبائنكم، نقيس التكرارات', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نجعل ملف زبائنكم واحداً، من الصندوق إلى WhatsApp، بالهاتف مفتاحاً ودمج قابل للتراجع وموافقات لكل قناة', body: 'تبني Symloop وتستلم تطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: أبواب دخول ببطاقات خام مؤرَّخة، تنميط الهاتف والاسم بكتابتين، مطابقة تامة ثم تقريبية بنقطة وعتبتين، بطاقة واحدة محسوبة بقواعد بقاء لكل حقل، دمج وفسخ مسجَّلان، بطاقة شركة لـ B2B، موافقات لكل قناة، إخفاء هوية عند الطلب، طابور اقتراحات ونسبة تكرارات شهرية. الكود والقواعد في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.reprendre, kind: '2027', name: 'استعادة بيانات Excel والبرنامج القديم' },
      { href: L.fidelite, kind: '2027', name: 'برنامج الولاء: نقاط، صندوق، تذكير' },
      { href: L.otp, kind: '2027', name: 'تسجيل الدخول بالهاتف: OTP، SMS، WhatsApp' },
      { href: L.bilingue, kind: '2027', name: 'تطبيق بالعربية والفرنسية' },
    ] },
  },
};

const KEYWORDS = "fichier client unique application algérie 2027, doublons clients application, même client plusieurs fois, fusion fiches clients, téléphone comme identifiant client, normalisation numéro de téléphone +213, dédoublonnage crm multicanal, fiche client caisse whatsapp boutique, consentements par canal client, règles de survie fusion données, single customer view deduplication algeria 2027, phone number as customer key merge records, ملف زبائن واحد الجزائر, تكرار الزبائن في التطبيق";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
