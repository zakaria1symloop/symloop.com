import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit.mjs';

const SLUG = 'du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit';
const FIGURES = ['etapes', 'prix', 'couches', 'cycle', 'situations', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  imprimer: '/blog/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  otp: '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  prevente: '/blog/prevente-commerciaux-terrain-distributeur-algerie-2027-application-tournee-commande-recouvrement/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  reprendre: '/blog/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte/',
  client: '/blog/un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion/',
  garage: '/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/',
  solaire: '/blog/installateur-solaire-algerie-2027-devis-chantier-monitoring-installations-maintenance/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Devis · Commande · Facture · 2027', title: "Du devis à la facture sans ressaisie : ce qu'on construit dans une application en Algérie en 2027, moteur de prix, remises plafonnées et approbation, versions du devis, acceptation, acompte, facture du livré",
    dek: "« Le devis est fait dans Excel, chaque vendeur a son fichier et son prix, la remise dépend de l'humeur, et quand le client accepte, la facture est retapée à la main et ne ressemble pas au devis. » Ce n'est pas un problème de vendeurs indisciplinés, c'est un problème de construction : un prix qu'on peut taper est un prix qu'on ne peut pas défendre, et un document retapé est un document qui diverge. Ce guide décrit ce qu'on construit pour qu'un prix soit calculé par des règles écrites, qu'une remise soit un droit par rôle avec un plafond et une approbation en un geste, qu'un devis ait des versions, une validité et une acceptation datée, et que la commande, la livraison et la facture naissent du devis sans qu'on retape une ligne.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Devis', 'Moteur de prix', 'Remises', 'Facturation', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un prix n'est jamais **tapé** : il est **calculé** côté serveur par une suite de règles écrites, prix catalogue, **grille** du type de client, **palier** de quantité, puis **remise**. La remise est un **droit par rôle** : le vendeur jusqu'à son plafond seul, au-delà une **approbation en un geste** avec un motif, et un **plancher de marge** que le serveur refuse de franchir quel que soit l'écran. Le devis a des **versions** conservées avec leur PDF, une **validité**, et une **acceptation** datée par signature sur le téléphone ou par code SMS. Chaque document suivant, commande, bon de livraison, facture, est **créé depuis le précédent** par un événement, et ce qui est **gelé** à l'émission ne bouge plus ; une erreur se corrige par un **avoir**. Les restes à livrer et à facturer sont des **différences calculées**. Six semaines, dont la première sans code.",
      "Ce guide s'adresse au gérant d'une PME qui vend sur devis, négoce, installation, services, dont trois vendeurs font trois prix, au fondateur installé en France qui lit des devis qu'il n'a pas vus partir, et au responsable commercial qui découvre la marge réelle au bilan. Il ne redit pas comment un PDF bilingue est produit et numéroté sans trou, décrit dans [le guide sur l'impression des documents](" + L.imprimer + "), ni comment les rôles et les approbations se construisent en général, décrit dans [le guide sur les rôles et le journal d'audit](" + L.roles + ") ; il décrit ce qui se construit autour du prix et de la chaîne devis-commande-facture, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Du devis à la facture, en six étapes', body: [
        "Le parcours d'une vente, dans l'ordre, et le moment où chaque décision se prend. La deuxième étape est celle qui sépare un logiciel d'un fichier Excel.",
      ], visual: 'etapes', after: [
        "**Composer le devis** depuis le catalogue : les lignes viennent de produits et de prestations qui ont un coût et un prix daté, et la marge est visible pendant la composition. **Remiser dans son droit** : jusqu'à son plafond, le vendeur remise seul et c'est journalisé ; au-delà, l'application demande une approbation en un geste au chef des ventes, avec un motif obligatoire ; sous le plancher de marge, personne. **Envoyer une version** : un PDF daté, valable trente jours par défaut, et chaque renégociation crée une version, v1, v2, v3, toutes conservées.",
        "**Faire accepter** : signature sur l'écran du téléphone ou code reçu par SMS, dans la validité, selon la mécanique décrite dans [le guide sur la connexion par code](" + L.otp + ") ; l'acceptation est datée et gèle le devis. **Convertir sans retaper** : l'acceptation crée la commande, l'acompte éventuel est demandé et rapproché, selon [le guide sur le paiement en ligne](" + L.paiement + "), la préparation commence. **Facturer le livré** : chaque bon de livraison signé produit une facture des quantités livrées, l'acompte est déduit de la première, et une erreur se corrige par un avoir, jamais en modifiant une facture émise.",
      ] },
      { heading: 'Comment le prix d’une ligne se calcule, et où la remise s’arrête', body: [
        "La figure suit une seule ligne de devis, et la suite de règles qui produit son prix. Tout ce qui s'y passe est calculé côté serveur ; l'écran ne fait qu'afficher.",
      ], visual: 'prix', after: [
        "Le prix catalogue est celui de la liste en vigueur à la date du devis ; la grille « grossiste » du client applique sa réduction ; le palier de quantité applique la sienne. Vient la remise commerciale : le vendeur demande 10 %, ce qui ferait passer la ligne sous le plancher de marge, et le serveur refuse ; le chef des ventes approuve 4 %, au-dessus du plancher, avec un motif, et la ligne est gelée à ce prix. Le plancher est fixé par la direction à partir du coût et d'une marge brute minimale, et il n'apparaît pas au vendeur comme un prix mais comme une remise restante autorisée.",
        "Trois règles tiennent l'ensemble. **Le moteur calcule**, dans un ordre écrit, grille puis palier puis remise, et jamais l'inverse, parce que l'ordre change le résultat. **L'écran affiche** le prix, la marge et la remise restante autorisée, pour que le vendeur négocie en connaissance de cause. **Le serveur refuse** tout prix sous le plancher, même si l'écran a été contourné, parce que la règle vit dans le code et pas dans l'interface. Coût, grille, paliers et seuils de la figure sont un exemple construit ; les prix par client du portail B2B, décrits dans [le guide sur le portail de commande](" + L.portail + "), viennent du même moteur.",
      ] },
      { heading: 'Du devis à la facture, en cinq couches', body: [
        "Le moteur de prix est la couche qui décide de la marge ; les quatre autres font que rien n'est retapé et que tout est mesuré.",
      ], visual: 'couches', after: [
        "**Catalogue et prix.** Produits et prestations avec un coût, un prix catalogue, des grilles par type de client, des paliers de quantité ; un prix a une date de début et de fin, et un devis garde le prix de sa date. **Moteur de prix.** Côté serveur, dans l'ordre écrit, avec les plafonds par rôle, le plancher de marge, l'approbation en un geste et le journal ; c'est la couche accentuée. **Documents et versions.** Devis, commande, bon de livraison, facture, avoir : chacun créé depuis le précédent, numéroté, versionné pour le devis, gelé à l'émission, avec un PDF conservé et jamais régénéré, selon [le guide sur l'impression des documents](" + L.imprimer + ").",
        "**Acceptation et conversion.** Signature ou code dans la validité, acceptation qui crée la commande, acompte qui déclenche la préparation, bon signé qui produit la facture du livré ; les restes à livrer et à facturer sont des différences calculées. **Suivi.** Devis en attente, à relancer, expirés ; taux d'acceptation par vendeur et par version ; marge réalisée contre marge devisée ; relances WhatsApp selon [le guide sur l'agent WhatsApp](" + L.whatsapp + "). C'est la couche qui dit si le moteur de prix est bien réglé : un taux d'acceptation de cent pour cent signale des prix trop bas autant qu'un taux de dix pour cent signale des prix trop hauts.",
      ] },
      { heading: 'Sept documents, zéro ressaisie, et ce qui est gelé à chaque étape', body: [
        "La figure suit une vente, du premier devis à la dernière facture. Chaque flèche porte l'événement qui crée le document suivant, et chaque carte dit ce qui est gelé.",
      ], visual: 'cycle', after: [
        "Le devis v1 part daté, valable trente jours ; la négociation crée une v2, et v1 est conservée avec son PDF, parce que le client peut revenir dessus et parce que le taux d'acceptation par version est une information. L'acceptation, signée ou par code, est datée et gèle le devis ; après acceptation, toute modification est un nouveau devis. La commande est créée depuis le devis accepté, avec l'acompte demandé ; les quantités restant à livrer sont calculées à chaque bon de livraison, jamais tapées.",
        "La livraison partielle écrit les quantités livrées, la date et la signature, et c'est elle qui fait bouger le stock, selon [le guide sur le stock](" + L.stock + "), pas la commande. La première facture porte le livré moins l'acompte, la seconde le solde à la dernière livraison. Une erreur après émission se corrige par un avoir, jamais en modifiant une facture, et la numérotation sans trou est décrite dans [le guide sur l'impression des documents](" + L.imprimer + "). Numéros, dates et pourcentages de la figure sont un exemple construit.",
      ] },
      { heading: "Six situations réelles, et ce que l'application fait", body: [
        "Les six situations qu'on retrouve dans presque toutes les PME qui vendent sur devis, et la construction qui les règle.",
      ], visual: 'situations', after: [
        "Les deux premières se règlent par le moteur de prix : un prix calculé ne dépend pas de qui a ouvert le fichier, et une remise plafonnée par rôle avec un plancher tenu par le serveur ne devient pas exceptionnelle tous les jours. Les deux suivantes se règlent par les versions et la validité : on conserve tout ce qui a été envoyé, et un devis expiré se régénère aux prix du jour au lieu d'engager l'entreprise sur des prix d'il y a six mois. Les deux dernières se règlent par la conversion sans ressaisie : la facture naît du bon de livraison, qui naît de la commande, qui naît du devis, et la livraison en deux fois produit deux factures du livré avec l'acompte déduit de la première. Aucune ne se règle par un vendeur plus discipliné.",
      ] },
      { heading: 'Vu ailleurs : les logiciels de devis du marché, et ce qui se transpose', body: [
        "Les logiciels de devis et de facturation du marché partagent trois idées qui se transposent telles quelles dans une application sur mesure. **La conversion en un clic** du devis en commande puis en facture, qui est leur argument principal depuis des années ; ce qui se transpose, c'est que le document suivant est créé depuis le précédent, et que la seule saisie est l'événement qui le déclenche. **Les règles de prix** par liste et par client, présentes dans tout ERP ; ce qui se transpose, c'est l'ordre d'application écrit et le calcul côté serveur. **L'acceptation en ligne** par signature ou par lien, devenue courante ; ce qui se transpose, c'est une acceptation datée, rattachée à une version, dans une validité.",
        "Ce que ces logiciels ne décident pas pour vous : vos plafonds de remise par rôle, votre plancher de marge, votre validité, et qui approuve ; la première semaine du projet y répond, et c'est la direction qui signe. Les logiciels du marché restent le bon choix quand vos règles rentrent dans les leurs ; le sur mesure commence quand votre grille, vos paliers ou votre circuit d'approbation ne rentrent pas, ou quand le devis doit parler au stock, au portail et au terrain, selon [le guide sur l'intégration d'un logiciel existant](" + L.integrer + ").",
      ] },
      { heading: "Les règles d'une chaîne devis-facture qui tient", body: [
        "Six règles, écrites la première semaine. **Un prix est calculé, jamais tapé**, dans un ordre écrit. **La remise est un droit par rôle**, avec un plafond, une approbation en un geste et un motif. **Le plancher de marge est tenu par le serveur**, pas par l'écran. **Un devis a des versions et une validité**, et une seule version acceptée. **Chaque document est créé depuis le précédent** par un événement daté et signé, et ce qui est gelé ne bouge plus. **Une erreur après émission se corrige par un avoir**, et les restes sont des différences calculées.",
        "Et une règle de méthode : le catalogue existant est repris avec ses coûts et ses prix datés avant qu'un seul devis soit fait dans l'application, selon [le guide sur la reprise de données](" + L.reprendre + ") ; un moteur de prix sans coûts ne peut pas calculer de marge, et un plancher sans coût n'existe pas.",
      ] },
      { heading: 'Six entreprises, et la règle de prix qui manquait', body: [
        "Six situations composées à partir de projets que nous rencontrons ; les noms sont génériques et les chiffres sont des exemples.",
      ], list: [
        "**Un négociant en matériaux à Sétif, quatre vendeurs.** Quatre fichiers Excel, quatre prix pour le même sac de ciment. La construction : catalogue avec coûts, grille par type de client, plafond de remise à 5 % pour les vendeurs, approbation au-delà. Au deuxième mois, la marge devisée est devenue lisible par produit et par vendeur.",
        "**Un installateur solaire à Oran.** Les devis changeaient trois fois et personne ne savait quelle version le client avait signée. La construction : versions conservées, acceptation par signature sur le téléphone du technicien, commande créée depuis la version acceptée ; le métier est décrit dans [le guide sur l'installateur solaire](" + L.solaire + ").",
        "**Un garage à Alger.** Le devis de réparation était accepté oralement et la facture finale ne lui ressemblait pas. La construction : devis par ligne de pièce et de main-d'œuvre, acceptation par code SMS, ajout de lignes uniquement par nouvelle version acceptée ; le cas est proche de [le guide sur l'application de garage](" + L.garage + ").",
        "**Un fondateur à Paris, société de services à Alger.** Il découvrait la marge au bilan. La construction : marge visible sur chaque devis, plancher fixé par lui, approbation à distance en un geste depuis son téléphone ; la gestion à distance suit [le guide sur le commerce depuis la France](" + L.commerce + ").",
        "**Un distributeur à Constantine, commerciaux terrain.** Les commerciaux promettaient des remises que le bureau refusait ensuite. La construction : plafond par rôle appliqué sur la tablette, hors ligne, et approbation demandée depuis le terrain ; la prévente est décrite dans [le guide sur la prévente terrain](" + L.prevente + ").",
        "**Une PME d'équipements à Annaba, livraisons partielles.** Facturer quoi et quand, et comment déduire l'acompte, était un débat par commande. La construction : facture du livré à chaque bon signé, acompte déduit de la première, solde à la dernière, avoir pour les erreurs.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Six semaines pour une PME qui a déjà un catalogue ; la première semaine se passe sans code.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles de prix** : coûts, grilles par type de client, paliers, plafonds de remise par rôle, plancher de marge, validité des devis, qui approuve ; signés par la direction. **Semaine 2, catalogue et moteur** : catalogue repris avec coûts et prix datés, moteur de prix côté serveur, refus sous le plancher, journal. **Semaine 3, devis et versions** : composition depuis le catalogue, marge visible, PDF par version, validité, approbation de remise en un geste.",
        "**Semaine 4, acceptation et commande** : signature sur le téléphone ou code SMS, commande créée depuis le devis accepté, acompte demandé et rapproché. **Semaine 5, livraison et facture** : bon de livraison signé, quantités livrées, facture du livré, acompte déduit, avoir ; numérotation sans trou. **Semaine 6, suivi et relances** : devis à relancer et expirés, taux d'acceptation, marge réalisée contre devisée sur le tableau de bord, selon [le guide sur le tableau de bord temps réel](" + L.dashboard + "), relances WhatsApp ; première revue. Chaque semaine se termine par une démonstration, selon [le guide sur la livraison sans casse](" + L.livrer + ").",
      ] },
      { heading: 'Ce qui fait échouer une chaîne devis-facture', body: [
        "Cinq causes, vues dans des applications qu'on reprend. **Le prix modifiable** « pour les cas particuliers » : au bout d'un mois, tous les cas sont particuliers. **La remise sans plafond** : la remise exceptionnelle devient le prix. **Le PDF écrasé** : personne ne sait ce que le client a accepté. **La facture retapée** : une ligne oubliée, un prix différent, un litige. **Le catalogue sans coûts** : une marge qu'on ne peut pas calculer, un plancher qui n'existe pas.",
        "Et une cause de méthode : laisser le plancher et les plafonds « à régler plus tard ». Ils conditionnent le moteur, les écrans et la mesure ; la première semaine est faite pour les écrire.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que posent les gérants et les fondateurs quand ils nous décrivent des devis dans Excel.",
      ], faq: [
        { q: "Pourquoi un moteur de prix plutôt qu'un prix saisi par le vendeur ?", a: "Parce qu'un prix tapé dépend de qui l'a tapé, ne porte pas la trace de ses règles et ne peut pas être défendu. Un moteur de prix applique une suite de règles écrites, grille du client, palier de quantité, remise, dans un ordre fixe et côté serveur ; le vendeur voit le prix, la marge et la remise qu'il lui reste le droit d'accorder." },
        { q: "Comment limiter les remises sans bloquer les vendeurs ?", a: "Par un plafond par rôle : jusqu'à son plafond, le vendeur remise seul et c'est journalisé ; au-delà, une approbation en un geste, avec motif, par le chef des ventes ou la direction, y compris depuis un téléphone. Un plancher de marge, fixé par la direction à partir du coût, est refusé par le serveur quel que soit l'écran." },
        { q: "Que se passe-t-il quand le client renégocie ?", a: "Une nouvelle version du devis est créée, v2, v3, et les précédentes sont conservées avec leur PDF. Une seule version peut être acceptée, et après acceptation toute modification est un nouveau devis. Le taux d'acceptation par version dit combien de renégociations il faut en moyenne, par vendeur et par type de client." },
        { q: "Comment le client accepte-t-il le devis ?", a: "Par signature sur l'écran d'un téléphone ou par un code reçu par SMS, dans la validité du devis. L'acceptation est datée, rattachée à la version, avec qui a accepté et comment, et elle gèle le devis. Elle crée la commande sans ressaisie." },
        { q: "Comment facturer une livraison en plusieurs fois ?", a: "Chaque bon de livraison signé produit une facture des quantités livrées ; l'acompte est déduit de la première, et le solde est facturé à la dernière livraison. Les restes à livrer et à facturer sont des différences calculées depuis la commande, jamais tapées. Une erreur se corrige par un avoir." },
        { q: "Pourquoi pas un logiciel de devis du marché ?", a: "Parce que c'est souvent le bon choix : si vos règles de prix, votre circuit d'approbation et vos documents rentrent dans les siens, prenez-le. Le sur mesure commence quand votre grille, vos paliers ou vos approbations ne rentrent pas, ou quand le devis doit parler au stock, au portail B2B et aux commerciaux terrain dans la même application." },
        { q: "Combien de temps pour construire cette chaîne ?", a: "Six semaines dans le calendrier type : une pour écrire les règles de prix, une pour le catalogue et le moteur, une pour les devis et versions, une pour l'acceptation et la commande, une pour la livraison et la facture, une pour le suivi et les relances. Le délai dépend de l'état du catalogue et du nombre de grilles." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Un prix n'est jamais tapé : il est calculé par une suite de règles écrites, et la remise est un droit par rôle, pas une case libre." },
      { after: 3, text: "Un document n'est jamais retapé à partir du précédent : il est créé depuis lui, par un événement, et ce qui est gelé ne bouge plus." },
    ],
    cta: { eyebrow: 'Envoyez-nous dix devis et les factures correspondantes, nous mesurons les écarts', title: "Gérant en Algérie ou fondateur en France : nous construisons la chaîne devis-commande-facture, moteur de prix, remises plafonnées, versions, acceptation et facture du livré", body: "Symloop construit et reprend des applications en production pour les entreprises en Algérie et les fondateurs installés en France : catalogue avec coûts et prix datés, moteur de prix côté serveur avec grilles, paliers, plafonds de remise par rôle et plancher de marge, approbation en un geste, devis versionnés avec validité et PDF conservés, acceptation par signature ou code SMS, commande et acompte créés depuis le devis, facture du livré et avoir, numérotation sans trou, suivi du taux d'acceptation et de la marge réalisée, relances WhatsApp. Code et règles dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.imprimer, kind: '2027', name: 'Imprimer factures, tickets et étiquettes : PDF, numérotation' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit : qui a changé ce prix' },
      { href: L.stock, kind: '2027', name: 'Stock faux dans l’application : journal de mouvements' },
      { href: L.portail, kind: '2027', name: 'Portail de commande B2B : prix par client, crédit' },
    ] },
  },
  en: {
    kind: 'Quote · Order · Invoice · 2027', title: "From quote to invoice without retyping: what gets built in an application in Algeria in 2027, pricing engine, capped discounts and approval, quote versions, acceptance, deposit, invoice of what was delivered",
    dek: "“The quote is made in Excel, every sales rep has their own file and price, the discount depends on the mood, and when the customer accepts, the invoice is retyped by hand and does not match the quote.” This is not a problem of undisciplined reps, it is a construction problem: a price you can type is a price you cannot defend, and a retyped document is a document that diverges. This guide describes what gets built so that a price is computed by written rules, a discount is a right per role with a ceiling and a one-gesture approval, a quote has versions, a validity and a dated acceptance, and the order, the delivery and the invoice are born from the quote without retyping a line.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Quotes', 'Pricing engine', 'Discounts', 'Invoicing', 'Algeria 2027'],
    intro: [
      "**Short answer.** A price is never **typed**: it is **computed** server side by a sequence of written rules, catalogue price, customer-type **grid**, quantity **break**, then **discount**. The discount is a **right per role**: the rep up to their ceiling alone, beyond that a **one-gesture approval** with a reason, and a **margin floor** the server refuses to cross whatever the screen shows. The quote has **versions** kept with their PDF, a **validity**, and a dated **acceptance** by signature on the phone or SMS code. Every following document, order, delivery note, invoice, is **created from the previous one** by an event, and what is **frozen** at issue no longer moves; an error is corrected by a **credit note**. Remainders to deliver and to invoice are **computed differences**. Six weeks, the first without code.",
      "This guide is for the manager of an SME that sells on quotes, trading, installation, services, where three reps make three prices, the founder settled in France who reads quotes they never saw leave, and the sales lead who discovers the real margin at year end. It does not repeat how a bilingual PDF is produced and numbered without gaps, described in [the document printing guide](" + L.imprimer + "), nor how roles and approvals are built in general, described in [the roles and audit log guide](" + L.roles + "); it describes what gets built around the price and the quote-order-invoice chain, and it extends [our software engineering page](" + L.service + ").",
    ],
    sections: [
      { heading: 'From quote to invoice, in six steps', body: [
        "The path of a sale, in order, and when each decision is taken. The second step is what separates software from an Excel file.",
      ], visual: 'etapes', after: [
        "**Compose the quote** from the catalogue: lines come from products and services that have a cost and a dated price, and the margin is visible while composing. **Discount within rights**: up to their ceiling, the rep discounts alone and it is logged; beyond, the application asks the sales manager for a one-gesture approval, with a mandatory reason; under the margin floor, nobody. **Send a version**: a dated PDF, valid thirty days by default, and every renegotiation creates a version, v1, v2, v3, all kept.",
        "**Get acceptance**: signature on the phone screen or a code received by SMS, within validity, following the mechanics described in [the code login guide](" + L.otp + "); the acceptance is dated and freezes the quote. **Convert without retyping**: acceptance creates the order, the optional deposit is requested and reconciled, following [the online payment guide](" + L.paiement + "), preparation starts. **Invoice what was delivered**: every signed delivery note produces an invoice of the delivered quantities, the deposit is deducted from the first, and an error is corrected by a credit note, never by editing an issued invoice.",
      ] },
      { heading: 'How a line price is computed, and where the discount stops', body: [
        "The figure follows a single quote line, and the sequence of rules that produces its price. Everything there is computed server side; the screen only displays.",
      ], visual: 'prix', after: [
        "The catalogue price is the one on the list in force at the quote's date; the customer's “wholesaler” grid applies its reduction; the quantity break applies its own. Then the commercial discount: the rep asks for 10 %, which would take the line under the margin floor, and the server refuses; the sales manager approves 4 %, above the floor, with a reason, and the line is frozen at that price. The floor is set by management from the cost and a minimum gross margin, and it does not appear to the rep as a price but as a remaining allowed discount.",
        "Three rules hold the whole. **The engine computes**, in a written order, grid then break then discount, and never the reverse, because the order changes the result. **The screen displays** the price, the margin and the remaining allowed discount, so the rep negotiates knowingly. **The server refuses** any price under the floor, even if the screen was bypassed, because the rule lives in the code and not in the interface. Cost, grid, breaks and thresholds in the figure are a constructed example; per-customer prices on the B2B portal, described in [the ordering portal guide](" + L.portail + "), come from the same engine.",
      ] },
      { heading: 'From quote to invoice, in five layers', body: [
        "The pricing engine is the layer that decides the margin; the four others make sure nothing is retyped and everything is measured.",
      ], visual: 'couches', after: [
        "**Catalogue and prices.** Products and services with a cost, a catalogue price, grids per customer type, quantity breaks; a price has a start and an end date, and a quote keeps the price of its date. **Pricing engine.** Server side, in the written order, with ceilings per role, the margin floor, one-gesture approval and the log; this is the accented layer. **Documents and versions.** Quote, order, delivery note, invoice, credit note: each created from the previous one, numbered, versioned for the quote, frozen at issue, with a PDF kept and never regenerated, following [the document printing guide](" + L.imprimer + ").",
        "**Acceptance and conversion.** Signature or code within validity, acceptance that creates the order, deposit that triggers preparation, signed note that produces the invoice of what was delivered; remainders to deliver and to invoice are computed differences. **Follow-up.** Quotes pending, to chase, expired; acceptance rate per rep and per version; realised margin against quoted margin; WhatsApp reminders following [the WhatsApp agent guide](" + L.whatsapp + "). This is the layer that says whether the pricing engine is well tuned: a one hundred percent acceptance rate signals prices too low as much as a ten percent rate signals prices too high.",
      ] },
      { heading: 'Seven documents, zero retyping, and what is frozen at each step', body: [
        "The figure follows one sale, from the first quote to the last invoice. Every arrow carries the event that creates the next document, and every card says what is frozen.",
      ], visual: 'cycle', after: [
        "Quote v1 leaves dated, valid thirty days; negotiation creates a v2, and v1 is kept with its PDF, because the customer may come back to it and because the acceptance rate per version is information. The acceptance, signed or by code, is dated and freezes the quote; after acceptance, any change is a new quote. The order is created from the accepted quote, with the deposit requested; quantities remaining to deliver are computed at every delivery note, never typed.",
        "The partial delivery writes the delivered quantities, the date and the signature, and it is what moves stock, following [the stock guide](" + L.stock + "), not the order. The first invoice carries what was delivered minus the deposit, the second the balance at the last delivery. An error after issue is corrected by a credit note, never by editing an invoice, and gapless numbering is described in [the document printing guide](" + L.imprimer + "). Numbers, dates and percentages in the figure are a constructed example.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "The six situations found in almost every SME that sells on quotes, and the construction that settles them.",
      ], visual: 'situations', after: [
        "The first two are settled by the pricing engine: a computed price does not depend on who opened the file, and a discount capped per role with a floor held by the server does not become exceptional every day. The next two are settled by versions and validity: everything sent is kept, and an expired quote regenerates at today's prices instead of binding the company to six-month-old prices. The last two are settled by conversion without retyping: the invoice is born from the delivery note, born from the order, born from the quote, and a two-part delivery produces two invoices of what was delivered with the deposit deducted from the first. None is settled by a more disciplined rep.",
      ] },
      { heading: 'Seen elsewhere: quoting software on the market, and what carries over', body: [
        "Quoting and invoicing software on the market shares three ideas that carry over as they are into a custom application. **One-click conversion** of quote into order then invoice, their main argument for years; what carries over is that the next document is created from the previous one, and the only input is the event that triggers it. **Price rules** per list and per customer, present in every ERP; what carries over is the written order of application and server-side computation. **Online acceptance** by signature or link, now common; what carries over is a dated acceptance, attached to a version, within validity.",
        "What that software does not decide for you: your discount ceilings per role, your margin floor, your validity, and who approves; the project's first week answers that, and management signs. Off-the-shelf software remains the right choice when your rules fit theirs; custom starts when your grid, your breaks or your approval circuit do not fit, or when the quote must talk to stock, the portal and the field, following [the existing software integration guide](" + L.integrer + ").",
      ] },
      { heading: 'The rules of a quote-to-invoice chain that holds', body: [
        "Six rules, written in the first week. **A price is computed, never typed**, in a written order. **The discount is a right per role**, with a ceiling, a one-gesture approval and a reason. **The margin floor is held by the server**, not by the screen. **A quote has versions and a validity**, and a single accepted version. **Every document is created from the previous one** by a dated, signed event, and what is frozen no longer moves. **An error after issue is corrected by a credit note**, and remainders are computed differences.",
        "And one rule of method: the existing catalogue is taken over with its costs and dated prices before a single quote is made in the application, following [the data take-over guide](" + L.reprendre + "); a pricing engine without costs cannot compute a margin, and a floor without cost does not exist.",
      ] },
      { heading: 'Six companies, and the pricing rule that was missing', body: [
        "Six situations composed from projects we meet; the names are generic and the figures are examples.",
      ], list: [
        "**A building materials trader in Sétif, four reps.** Four Excel files, four prices for the same bag of cement. The construction: catalogue with costs, grid per customer type, 5 % discount ceiling for reps, approval beyond. By the second month, quoted margin became readable per product and per rep.",
        "**A solar installer in Oran.** Quotes changed three times and nobody knew which version the customer had signed. The construction: versions kept, acceptance by signature on the technician's phone, order created from the accepted version; the trade is described in [the solar installer guide](" + L.solaire + ").",
        "**A garage in Algiers.** The repair quote was accepted orally and the final invoice did not match it. The construction: quote per parts and labour line, acceptance by SMS code, lines added only through a new accepted version; the case is close to [the garage application guide](" + L.garage + ").",
        "**A founder in Paris, services company in Algiers.** They discovered the margin at year end. The construction: margin visible on every quote, floor set by them, remote one-gesture approval from their phone; remote management follows [the shop from France guide](" + L.commerce + ").",
        "**A distributor in Constantine, field reps.** Reps promised discounts the office later refused. The construction: ceiling per role enforced on the tablet, offline, and approval requested from the field; pre-sales is described in [the field pre-sales guide](" + L.prevente + ").",
        "**An equipment SME in Annaba, partial deliveries.** What to invoice and when, and how to deduct the deposit, was a debate per order. The construction: invoice of what was delivered at each signed note, deposit deducted from the first, balance at the last, credit note for errors.",
      ] },
      { heading: 'The 2027 calendar', body: [
        "Six weeks for an SME that already has a catalogue; the first week passes without code.",
      ], visual: 'calendrier', after: [
        "**Week 1, pricing rules**: costs, grids per customer type, breaks, discount ceilings per role, margin floor, quote validity, who approves; signed by management. **Week 2, catalogue and engine**: catalogue taken over with costs and dated prices, server-side pricing engine, refusal under the floor, log. **Week 3, quotes and versions**: composition from the catalogue, visible margin, PDF per version, validity, one-gesture discount approval.",
        "**Week 4, acceptance and order**: signature on the phone or SMS code, order created from the accepted quote, deposit requested and reconciled. **Week 5, delivery and invoice**: signed delivery note, delivered quantities, invoice of what was delivered, deposit deducted, credit note; gapless numbering. **Week 6, follow-up and reminders**: quotes to chase and expired, acceptance rate, realised against quoted margin on the dashboard, following [the real-time dashboard guide](" + L.dashboard + "), WhatsApp reminders; first review. Every week ends with a demo, following [the delivery without breakage guide](" + L.livrer + ").",
      ] },
      { heading: 'What makes a quote-to-invoice chain fail', body: [
        "Five causes, seen in applications we take over. **The editable price** “for special cases”: after a month, every case is special. **The uncapped discount**: the exceptional discount becomes the price. **The overwritten PDF**: nobody knows what the customer accepted. **The retyped invoice**: a line forgotten, a different price, a dispute. **The catalogue without costs**: a margin you cannot compute, a floor that does not exist.",
        "And one cause of method: leaving the floor and ceilings “to set later”. They condition the engine, the screens and the measurement; the first week exists to write them.",
      ] },
      { heading: 'Frequently asked questions', body: [
        "The questions managers and founders ask when they describe quotes in Excel.",
      ], faq: [
        { q: "Why a pricing engine rather than a price entered by the rep?", a: "Because a typed price depends on who typed it, carries no trace of its rules and cannot be defended. A pricing engine applies a sequence of written rules, customer grid, quantity break, discount, in a fixed order and server side; the rep sees the price, the margin and the discount they still have the right to grant." },
        { q: "How do you limit discounts without blocking reps?", a: "With a ceiling per role: up to their ceiling, the rep discounts alone and it is logged; beyond, a one-gesture approval, with reason, by the sales manager or management, including from a phone. A margin floor, set by management from the cost, is refused by the server whatever the screen shows." },
        { q: "What happens when the customer renegotiates?", a: "A new version of the quote is created, v2, v3, and the previous ones are kept with their PDF. Only one version can be accepted, and after acceptance any change is a new quote. The acceptance rate per version says how many renegotiations it takes on average, per rep and per customer type." },
        { q: "How does the customer accept the quote?", a: "By signature on a phone screen or by a code received by SMS, within the quote's validity. The acceptance is dated, attached to the version, with who accepted and how, and it freezes the quote. It creates the order without retyping." },
        { q: "How do you invoice a delivery in several parts?", a: "Every signed delivery note produces an invoice of the delivered quantities; the deposit is deducted from the first, and the balance is invoiced at the last delivery. Remainders to deliver and to invoice are differences computed from the order, never typed. An error is corrected by a credit note." },
        { q: "Why not off-the-shelf quoting software?", a: "Because it is often the right choice: if your pricing rules, your approval circuit and your documents fit theirs, take it. Custom starts when your grid, your breaks or your approvals do not fit, or when the quote must talk to stock, the B2B portal and field reps in the same application." },
        { q: "How long does it take to build this chain?", a: "Six weeks in the typical calendar: one to write the pricing rules, one for the catalogue and the engine, one for quotes and versions, one for acceptance and order, one for delivery and invoice, one for follow-up and reminders. The duration depends on the state of the catalogue and the number of grids." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A price is never typed: it is computed by a sequence of written rules, and the discount is a right per role, not a free field." },
      { after: 3, text: "A document is never retyped from the previous one: it is created from it, by an event, and what is frozen no longer moves." },
    ],
    cta: { eyebrow: 'Send us ten quotes and the matching invoices, we measure the gaps', title: 'Manager in Algeria or founder in France: we build the quote-order-invoice chain, pricing engine, capped discounts, versions, acceptance and invoice of what was delivered', body: 'Symloop builds and takes over applications in production for companies in Algeria and founders settled in France: catalogue with costs and dated prices, server-side pricing engine with grids, breaks, discount ceilings per role and margin floor, one-gesture approval, versioned quotes with validity and kept PDFs, acceptance by signature or SMS code, order and deposit created from the quote, invoice of what was delivered and credit note, gapless numbering, tracking of acceptance rate and realised margin, WhatsApp reminders. Code and rules in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.imprimer, kind: '2027', name: 'Printing invoices, receipts and labels: PDF, numbering' },
      { href: L.roles, kind: '2027', name: 'Roles, rights and audit log: who changed this price' },
      { href: L.stock, kind: '2027', name: 'Wrong stock in the application: movement ledger' },
      { href: L.portail, kind: '2027', name: 'B2B ordering portal: per-customer prices, credit' },
    ] },
  },
  ar: {
    kind: 'عرض سعر · طلبية · فاتورة · 2027', title: 'من عرض السعر إلى الفاتورة دون إعادة إدخال: ما يُبنى في تطبيق في الجزائر سنة 2027، محرك أسعار، خصومات بسقف وموافقة، نسخ عرض السعر، قبول، عربون، فاتورة المسلَّم',
    dek: '«عرض السعر يُعدّ في Excel، ولكل بائع ملفه وسعره، والخصم حسب المزاج، وحين يقبل الزبون تُعاد كتابة الفاتورة يدوياً ولا تشبه العرض.» هذه ليست مشكلة بائعين غير منضبطين بل مشكلة بناء: السعر الذي يمكن كتابته سعر لا يمكن الدفاع عنه، والوثيقة المعاد إدخالها وثيقة تنحرف. يصف هذا الدليل ما يُبنى كي يُحسب السعر بقواعد مكتوبة، ويكون الخصم حقاً حسب الدور بسقف وموافقة بحركة واحدة، ويكون لعرض السعر نسخ وصلاحية وقبول مؤرَّخ، وتولد الطلبية والتسليم والفاتورة من العرض دون إعادة كتابة سطر.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['عروض الأسعار', 'محرك الأسعار', 'الخصومات', 'الفوترة', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** السعر لا **يُكتب** أبداً: **يُحسب** من جهة الخادم بسلسلة قواعد مكتوبة، سعر الكتالوج، **شبكة** نوع الزبون، **عتبة** الكمية، ثم **الخصم**. والخصم **حق حسب الدور**: البائع حتى سقفه وحده، وفوقه **موافقة بحركة واحدة** بسبب، و**أرضية هامش** يرفض الخادم تجاوزها مهما عرضت الشاشة. ولعرض السعر **نسخ** محفوظة بـ PDF و**صلاحية** و**قبول** مؤرَّخ بتوقيع على الهاتف أو رمز SMS. وكل وثيقة تالية، طلبية ووصل تسليم وفاتورة، **تُنشأ من السابقة** بحدث، وما **جُمِّد** عند الإصدار لا يتحرك؛ والخطأ يُصحَّح **بإشعار دائن**. والبواقي للتسليم والفوترة **فروق محسوبة**. ستة أسابيع، أولها بلا كود.',
      'يتوجه هذا الدليل إلى مسيّر مؤسسة صغيرة تبيع بعروض أسعار، تجارة أو تركيب أو خدمات، حيث يصنع ثلاثة بائعين ثلاثة أسعار، وإلى المؤسس المقيم في فرنسا الذي يقرأ عروضاً لم يرها تخرج، وإلى المسؤول التجاري الذي يكتشف الهامش الحقيقي في الميزانية. لا يعيد شرح كيف يُنتج PDF ثنائي اللغة ويُرقَّم بلا فجوات، الموصوف في [دليل طباعة الوثائق](' + L.imprimer + ')، ولا كيف تُبنى الأدوار والموافقات عموماً، الموصوف في [دليل الأدوار وسجل التدقيق](' + L.roles + ')؛ بل يصف ما يُبنى حول السعر وسلسلة عرض-طلبية-فاتورة، ويمتد من [صفحتنا عن هندسة البرمجيات](' + L.service + ').',
    ],
    sections: [
      { heading: 'من عرض السعر إلى الفاتورة، في ست خطوات', body: [
        'مسار البيع بالترتيب، ولحظة اتخاذ كل قرار. والخطوة الثانية هي ما يفصل البرنامج عن ملف Excel.',
      ], visual: 'etapes', after: [
        '**تركيب عرض السعر** من الكتالوج: الأسطر من منتجات وخدمات لها تكلفة وسعر مؤرَّخ، والهامش ظاهر أثناء التركيب. **الخصم ضمن الحق**: حتى سقفه يخصم البائع وحده ويُسجَّل؛ وفوقه يطلب التطبيق موافقة بحركة واحدة من مدير المبيعات بسبب إلزامي؛ وتحت أرضية الهامش لا أحد. **إرسال نسخة**: PDF مؤرَّخ صالح ثلاثين يوماً افتراضياً، وكل تفاوض ينشئ نسخة، ن1 ون2 ون3، كلها محفوظة.',
        '**الحصول على القبول**: توقيع على شاشة الهاتف أو رمز عبر SMS ضمن الصلاحية، وفق الآلية الموصوفة في [دليل الدخول بالرمز](' + L.otp + ')؛ القبول مؤرَّخ ويجمّد العرض. **التحويل دون إعادة إدخال**: القبول ينشئ الطلبية، والعربون إن وُجد يُطلب ويُطابَق وفق [دليل الدفع الإلكتروني](' + L.paiement + ')، ويبدأ التحضير. **فوترة المسلَّم**: كل وصل تسليم موقَّع ينتج فاتورة بالكميات المسلَّمة، والعربون يُخصم من الأولى، والخطأ يُصحَّح بإشعار دائن لا بتعديل فاتورة صادرة أبداً.',
      ] },
      { heading: 'كيف يُحسب سعر السطر، وأين تتوقف الخصومات', body: [
        'يتتبع الشكل سطر عرض سعر واحداً وسلسلة القواعد التي تنتج سعره. كل ما يجري فيه يُحسب من جهة الخادم؛ والشاشة لا تفعل إلا العرض.',
      ], visual: 'prix', after: [
        'سعر الكتالوج هو سعر القائمة السارية في تاريخ العرض؛ وشبكة «تاجر جملة» للزبون تطبّق تخفيضها؛ وعتبة الكمية تطبّق تخفيضها. ثم الخصم التجاري: يطلب البائع 10 %، وهذا يُنزل السطر تحت أرضية الهامش فيرفض الخادم؛ ويوافق مدير المبيعات على 4 % فوق الأرضية بسبب، ويُجمَّد السطر عند هذا السعر. والأرضية تحددها الإدارة من التكلفة وهامش إجمالي أدنى، ولا تظهر للبائع سعراً بل خصماً متبقياً مسموحاً.',
        'ثلاث قواعد تمسك الكل. **المحرك يحسب** بترتيب مكتوب، شبكة ثم عتبة ثم خصم، ولا العكس أبداً، لأن الترتيب يغيّر النتيجة. **الشاشة تعرض** السعر والهامش والخصم المتبقي المسموح كي يتفاوض البائع عن علم. **الخادم يرفض** أي سعر تحت الأرضية حتى لو تُجوِّزت الشاشة، لأن القاعدة تعيش في الكود لا في الواجهة. والتكلفة والشبكة والعتبات والحدود في الشكل مثال مبني؛ وأسعار كل زبون في بوابة B2B، الموصوفة في [دليل بوابة الطلب](' + L.portail + ')، تأتي من المحرك نفسه.',
      ] },
      { heading: 'من عرض السعر إلى الفاتورة، في خمس طبقات', body: [
        'محرك الأسعار هو الطبقة التي تقرر الهامش؛ والطبقات الأربع الأخرى تضمن ألا يُعاد إدخال شيء وأن يُقاس كل شيء.',
      ], visual: 'couches', after: [
        '**الكتالوج والأسعار.** منتجات وخدمات بتكلفة وسعر كتالوج وشبكات حسب نوع الزبون وعتبات كمية؛ للسعر تاريخ بداية ونهاية، وعرض السعر يحتفظ بسعر تاريخه. **محرك الأسعار.** من جهة الخادم، بالترتيب المكتوب، بسقوف حسب الدور وأرضية الهامش والموافقة بحركة واحدة والسجل؛ وهي الطبقة المميزة. **الوثائق والنسخ.** عرض سعر وطلبية ووصل تسليم وفاتورة وإشعار دائن: كل منها يُنشأ من السابقة، مرقَّم، بنسخ لعرض السعر، مجمَّد عند الإصدار، بـ PDF محفوظ لا يُعاد توليده، وفق [دليل طباعة الوثائق](' + L.imprimer + ').',
        '**القبول والتحويل.** توقيع أو رمز ضمن الصلاحية، قبول ينشئ الطلبية، عربون يطلق التحضير، وصل موقَّع ينتج فاتورة المسلَّم؛ والبواقي للتسليم والفوترة فروق محسوبة. **المتابعة.** عروض معلّقة وللمتابعة ومنتهية؛ نسبة القبول لكل بائع ولكل نسخة؛ الهامش المحقَّق مقابل المعروض؛ تذكيرات WhatsApp وفق [دليل وكيل WhatsApp](' + L.whatsapp + '). وهي الطبقة التي تقول إن كان محرك الأسعار مضبوطاً: نسبة قبول مئة بالمئة تشير إلى أسعار منخفضة جداً بقدر ما تشير نسبة عشرة بالمئة إلى أسعار مرتفعة جداً.',
      ] },
      { heading: 'سبع وثائق، صفر إعادة إدخال، وما يُجمَّد في كل خطوة', body: [
        'يتتبع الشكل بيعاً واحداً من أول عرض إلى آخر فاتورة. كل سهم يحمل الحدث الذي ينشئ الوثيقة التالية، وكل بطاقة تقول ما جُمِّد.',
      ], visual: 'cycle', after: [
        'يخرج العرض ن1 مؤرَّخاً صالحاً ثلاثين يوماً؛ وينشئ التفاوض ن2 وتُحفظ ن1 بـ PDF، لأن الزبون قد يعود إليها ولأن نسبة القبول لكل نسخة معلومة. والقبول، بتوقيع أو رمز، مؤرَّخ ويجمّد العرض؛ وبعد القبول كل تعديل عرض جديد. والطلبية تُنشأ من العرض المقبول مع العربون المطلوب؛ والكميات المتبقية للتسليم تُحسب عند كل وصل تسليم ولا تُكتب أبداً.',
        'والتسليم الجزئي يكتب الكميات المسلَّمة والتاريخ والتوقيع، وهو ما يحرّك المخزون وفق [دليل المخزون](' + L.stock + ')، لا الطلبية. والفاتورة الأولى تحمل المسلَّم ناقص العربون، والثانية الباقي عند آخر تسليم. والخطأ بعد الإصدار يُصحَّح بإشعار دائن لا بتعديل فاتورة، والترقيم بلا فجوات موصوف في [دليل طباعة الوثائق](' + L.imprimer + '). والأرقام والتواريخ والنسب في الشكل مثال مبني.',
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        'الحالات الست التي نجدها في كل المؤسسات الصغيرة التي تبيع بعروض أسعار تقريباً، والبناء الذي يحلها.',
      ], visual: 'situations', after: [
        'الأوليان تُحلان بمحرك الأسعار: السعر المحسوب لا يتوقف على من فتح الملف، والخصم بسقف حسب الدور وأرضية يمسكها الخادم لا يصير استثنائياً كل يوم. والتاليتان تُحلان بالنسخ والصلاحية: نحتفظ بكل ما أُرسل، والعرض المنتهي يُولَّد من جديد بأسعار اليوم بدل إلزام الشركة بأسعار قبل ستة أشهر. والأخيرتان تُحلان بالتحويل دون إعادة إدخال: الفاتورة تولد من وصل التسليم المولود من الطلبية المولودة من العرض، والتسليم على مرتين ينتج فاتورتين للمسلَّم مع خصم العربون من الأولى. ولا واحدة تُحل ببائع أكثر انضباطاً.',
      ] },
      { heading: 'ما رأيناه في مكان آخر: برامج عروض الأسعار في السوق، وما ينتقل', body: [
        'تتشارك برامج عروض الأسعار والفوترة في السوق ثلاث أفكار تنتقل كما هي إلى تطبيق مخصص. **التحويل بنقرة** من عرض إلى طلبية ثم فاتورة، حجتها الرئيسية منذ سنوات؛ وما ينتقل هو أن الوثيقة التالية تُنشأ من السابقة، والإدخال الوحيد هو الحدث الذي يطلقها. **قواعد الأسعار** حسب القائمة والزبون، الموجودة في كل ERP؛ وما ينتقل هو ترتيب التطبيق المكتوب والحساب من جهة الخادم. **القبول الإلكتروني** بتوقيع أو رابط، الذي صار شائعاً؛ وما ينتقل هو قبول مؤرَّخ مرتبط بنسخة ضمن صلاحية.',
        'ما لا تقرره هذه البرامج عنكم: سقوف خصمكم حسب الدور، وأرضية هامشكم، وصلاحيتكم، ومن يوافق؛ الأسبوع الأول من المشروع يجيب، والإدارة توقّع. وتبقى برامج السوق الخيار الصحيح حين تدخل قواعدكم في قواعدها؛ ويبدأ المخصص حين لا تدخل شبكتكم أو عتباتكم أو دائرة موافقتكم، أو حين يجب أن يكلّم العرض المخزون والبوابة والميدان، وفق [دليل دمج برنامج موجود](' + L.integrer + ').',
      ] },
      { heading: 'قواعد سلسلة عرض-فاتورة تصمد', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **السعر يُحسب ولا يُكتب أبداً**، بترتيب مكتوب. **الخصم حق حسب الدور**، بسقف وموافقة بحركة واحدة وسبب. **أرضية الهامش يمسكها الخادم** لا الشاشة. **لعرض السعر نسخ وصلاحية**، ونسخة واحدة مقبولة. **كل وثيقة تُنشأ من السابقة** بحدث مؤرَّخ موقَّع، وما جُمِّد لا يتحرك. **الخطأ بعد الإصدار يُصحَّح بإشعار دائن**، والبواقي فروق محسوبة.',
        'وقاعدة منهج: يُستلَم الكتالوج الموجود بتكاليفه وأسعاره المؤرَّخة قبل أن يُعدّ عرض واحد في التطبيق، وفق [دليل استعادة البيانات](' + L.reprendre + ')؛ فمحرك أسعار بلا تكاليف لا يحسب هامشاً، وأرضية بلا تكلفة لا وجود لها.',
      ] },
      { heading: 'ست شركات، وقاعدة السعر التي كانت ناقصة', body: [
        'ست حالات مركَّبة من مشاريع نصادفها؛ الأسماء عامة والأرقام أمثلة.',
      ], list: [
        '**تاجر مواد بناء في سطيف، أربعة بائعين.** أربعة ملفات Excel وأربعة أسعار لكيس الإسمنت نفسه. البناء: كتالوج بتكاليف، شبكة حسب نوع الزبون، سقف خصم 5 % للبائعين، موافقة فوقه. في الشهر الثاني صار الهامش المعروض مقروءاً لكل منتج ولكل بائع.',
        '**مركّب طاقة شمسية في وهران.** كانت العروض تتغير ثلاث مرات ولا أحد يعرف أي نسخة وقّع الزبون. البناء: نسخ محفوظة، قبول بتوقيع على هاتف التقني، طلبية منشأة من النسخة المقبولة؛ والمهنة موصوفة في [دليل مركّب الطاقة الشمسية](' + L.solaire + ').',
        '**ورشة في الجزائر العاصمة.** كان عرض الإصلاح يُقبل شفهياً والفاتورة النهائية لا تشبهه. البناء: عرض بسطر لكل قطعة ويد عاملة، قبول برمز SMS، إضافة أسطر بنسخة جديدة مقبولة فقط؛ والحالة قريبة من [دليل تطبيق الورشة](' + L.garage + ').',
        '**مؤسس في باريس، شركة خدمات في الجزائر.** كان يكتشف الهامش في الميزانية. البناء: هامش ظاهر على كل عرض، أرضية يحددها هو، موافقة عن بعد بحركة واحدة من هاتفه؛ والتسيير عن بعد يتبع [دليل التجارة من فرنسا](' + L.commerce + ').',
        '**موزع في قسنطينة، مندوبون ميدانيون.** كان المندوبون يعدون بخصومات يرفضها المكتب لاحقاً. البناء: سقف حسب الدور مطبَّق على اللوحة دون اتصال، وموافقة تُطلب من الميدان؛ والبيع المسبق موصوف في [دليل البيع المسبق الميداني](' + L.prevente + ').',
        '**مؤسسة تجهيزات في عنابة، تسليمات جزئية.** ماذا نفوتر ومتى وكيف نخصم العربون كان نقاشاً لكل طلبية. البناء: فاتورة المسلَّم عند كل وصل موقَّع، العربون من الأولى، الباقي في الأخيرة، إشعار دائن للأخطاء.',
      ] },
      { heading: 'تقويم 2027', body: [
        'ستة أسابيع لمؤسسة لديها كتالوج؛ والأسبوع الأول يمر بلا كود.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 1، قواعد الأسعار**: تكاليف، شبكات حسب نوع الزبون، عتبات، سقوف خصم لكل دور، أرضية هامش، صلاحية العروض، من يوافق؛ توقّعها الإدارة. **الأسبوع 2، الكتالوج والمحرك**: كتالوج مستلَم بتكاليف وأسعار مؤرَّخة، محرك أسعار من جهة الخادم، رفض تحت الأرضية، سجل. **الأسبوع 3، العروض والنسخ**: تركيب من الكتالوج، هامش ظاهر، PDF لكل نسخة، صلاحية، موافقة خصم بحركة واحدة.',
        '**الأسبوع 4، القبول والطلبية**: توقيع على الهاتف أو رمز SMS، طلبية منشأة من العرض المقبول، عربون مطلوب ومطابَق. **الأسبوع 5، التسليم والفاتورة**: وصل تسليم موقَّع، كميات مسلَّمة، فاتورة المسلَّم، خصم العربون، إشعار دائن؛ ترقيم بلا فجوات. **الأسبوع 6، المتابعة والتذكيرات**: عروض للمتابعة ومنتهية، نسبة القبول، الهامش المحقَّق مقابل المعروض على لوحة القيادة وفق [دليل لوحة القيادة الآنية](' + L.dashboard + ')، تذكيرات WhatsApp؛ أول مراجعة. وكل أسبوع ينتهي بعرض وفق [دليل التسليم دون كسر](' + L.livrer + ').',
      ] },
      { heading: 'ما يُفشل سلسلة عرض-فاتورة', body: [
        'خمسة أسباب رأيناها في تطبيقات نستلمها. **السعر القابل للتعديل** «للحالات الخاصة»: بعد شهر تصير كل الحالات خاصة. **الخصم بلا سقف**: يصير الخصم الاستثنائي هو السعر. **PDF الممحو**: لا أحد يعرف ما قبل الزبون. **الفاتورة المعاد إدخالها**: سطر منسي، سعر مختلف، نزاع. **الكتالوج بلا تكاليف**: هامش لا يمكن حسابه، وأرضية لا وجود لها.',
        'وسبب منهجي: ترك الأرضية والسقوف «لتُضبط لاحقاً». إنها تحكم المحرك والشاشات والقياس؛ والأسبوع الأول موجود لكتابتها.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي يطرحها المسيّرون والمؤسسون حين يصفون لنا عروض أسعار في Excel.',
      ], faq: [
        { q: 'لماذا محرك أسعار بدل سعر يدخله البائع؟', a: 'لأن السعر المكتوب يتوقف على من كتبه، ولا يحمل أثر قواعده، ولا يمكن الدفاع عنه. محرك الأسعار يطبّق سلسلة قواعد مكتوبة، شبكة الزبون وعتبة الكمية والخصم، بترتيب ثابت ومن جهة الخادم؛ ويرى البائع السعر والهامش والخصم الذي ما زال له حق منحه.' },
        { q: 'كيف نحدّ الخصومات دون عرقلة البائعين؟', a: 'بسقف لكل دور: حتى سقفه يخصم البائع وحده ويُسجَّل؛ وفوقه موافقة بحركة واحدة بسبب من مدير المبيعات أو الإدارة، حتى من الهاتف. وأرضية هامش تحددها الإدارة من التكلفة يرفضها الخادم مهما عرضت الشاشة.' },
        { q: 'ماذا يحدث حين يعيد الزبون التفاوض؟', a: 'تُنشأ نسخة جديدة من العرض، ن2 ون3، وتُحفظ السابقة بـ PDF. نسخة واحدة فقط يمكن قبولها، وبعد القبول كل تعديل عرض جديد. ونسبة القبول لكل نسخة تقول كم من التفاوض يلزم في المتوسط لكل بائع ولكل نوع زبون.' },
        { q: 'كيف يقبل الزبون عرض السعر؟', a: 'بتوقيع على شاشة هاتف أو برمز عبر SMS ضمن صلاحية العرض. والقبول مؤرَّخ مرتبط بالنسخة، بمن قبل وكيف، ويجمّد العرض. وينشئ الطلبية دون إعادة إدخال.' },
        { q: 'كيف نفوتر تسليماً على مرات؟', a: 'كل وصل تسليم موقَّع ينتج فاتورة بالكميات المسلَّمة؛ العربون يُخصم من الأولى، والباقي يُفوتر عند آخر تسليم. والبواقي للتسليم والفوترة فروق تُحسب من الطلبية ولا تُكتب أبداً. والخطأ يُصحَّح بإشعار دائن.' },
        { q: 'لماذا لا نأخذ برنامج عروض أسعار من السوق؟', a: 'لأنه غالباً الخيار الصحيح: إن دخلت قواعد أسعاركم ودائرة موافقتكم ووثائقكم في قواعده فخذوه. ويبدأ المخصص حين لا تدخل شبكتكم أو عتباتكم أو موافقاتكم، أو حين يجب أن يكلّم العرض المخزون وبوابة B2B والمندوبين الميدانيين في التطبيق نفسه.' },
        { q: 'كم من الوقت لبناء هذه السلسلة؟', a: 'ستة أسابيع في التقويم النموذجي: واحد لكتابة قواعد الأسعار، وواحد للكتالوج والمحرك، وواحد للعروض والنسخ، وواحد للقبول والطلبية، وواحد للتسليم والفاتورة، وواحد للمتابعة والتذكيرات. وتتوقف المدة على حالة الكتالوج وعدد الشبكات.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'السعر لا يُكتب أبداً: يُحسب بسلسلة قواعد مكتوبة، والخصم حق حسب الدور لا خانة حرة.' },
      { after: 3, text: 'الوثيقة لا يُعاد إدخالها من السابقة أبداً: تُنشأ منها بحدث، وما جُمِّد لا يتحرك بعد.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا عشرة عروض أسعار وفواتيرها، نقيس الفوارق', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نبني سلسلة عرض-طلبية-فاتورة، محرك أسعار وخصومات بسقف ونسخ وقبول وفاتورة المسلَّم', body: 'تبني Symloop وتستلم تطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: كتالوج بتكاليف وأسعار مؤرَّخة، محرك أسعار من جهة الخادم بشبكات وعتبات وسقوف خصم لكل دور وأرضية هامش، موافقة بحركة واحدة، عروض أسعار بنسخ وصلاحية وPDF محفوظ، قبول بتوقيع أو رمز SMS، طلبية وعربون من العرض، فاتورة المسلَّم وإشعار دائن، ترقيم بلا فجوات، متابعة نسبة القبول والهامش المحقَّق، تذكيرات WhatsApp. الكود والقواعد في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.imprimer, kind: '2027', name: 'طباعة الفواتير والتذاكر والملصقات: PDF، ترقيم' },
      { href: L.roles, kind: '2027', name: 'الأدوار والحقوق وسجل التدقيق: من غيّر هذا السعر' },
      { href: L.stock, kind: '2027', name: 'مخزون خاطئ في التطبيق: سجل الحركات' },
      { href: L.portail, kind: '2027', name: 'بوابة طلب B2B: أسعار لكل زبون، ائتمان' },
    ] },
  },
};

const KEYWORDS = "logiciel devis facture algérie 2027, devis vers facture sans ressaisie, moteur de prix application, remise plafonnée approbation vendeur, plancher de marge devis, versions de devis acceptation signature, devis accepté en ligne code sms, convertir devis en commande facture, facture d'acompte facture partielle livraison, application devis commande facture sur mesure algérie, grille tarifaire par client palier quantité, quote to invoice software algeria 2027, pricing engine discount approval margin floor, برنامج عروض أسعار وفواتير الجزائر 2027, محرك أسعار خصم موافقة, من عرض السعر إلى الفاتورة";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
