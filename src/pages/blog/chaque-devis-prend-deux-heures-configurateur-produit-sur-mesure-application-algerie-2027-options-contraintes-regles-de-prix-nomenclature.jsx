import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/chaque-devis-prend-deux-heures-configurateur-produit-sur-mesure-application-algerie-2027-options-contraintes-regles-de-prix-nomenclature.mjs';

const SLUG = 'chaque-devis-prend-deux-heures-configurateur-produit-sur-mesure-application-algerie-2027-options-contraintes-regles-de-prix-nomenclature';
const FIGURES = ['configuration', 'documents', 'vente', 'couches', 'situations', 'calendrier'];
const DATE = '2026-11-11';

const L = {
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  production: '/blog/personne-ne-sait-ce-que-coute-un-produit-fini-fabrication-application-algerie-2027-nomenclature-ordre-de-fabrication-rendement-cout-d-atelier/',
  fieldservice: '/blog/le-technicien-est-reparti-sans-la-piece-interventions-terrain-application-algerie-2027-equipements-ordres-de-travail-repartition-preventif/',
  catalogue: '/blog/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  devises: '/blog/client-en-france-paie-en-euros-service-en-algerie-application-2027-deux-encaissements-deux-devises-taux-fige-rapprochement-remboursement/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  imprimer: '/blog/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  bilingue: '/blog/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit/',
  photos: '/blog/photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Configurateur · Sur mesure · Devis · 2027', title: "« Chaque devis prend deux heures, et le prix dépend du vendeur » : ce qu'on construit dans une application en 2027 pour vendre du sur mesure, options, contraintes, règles de prix, devis en deux minutes, nomenclature générée",
    dek: "« On fait des fenêtres en aluminium, des cuisines, des portails, des enseignes. Le client donne ses dimensions, le vendeur sort sa calculette et son croquis, et deux heures plus tard il envoie un devis Word. Un autre vendeur aurait trouvé un autre prix. L'atelier recopie les cotes, se trompe d'une fois sur dix, et on découvre la marge quand la pièce est faite. Et le cousin à Paris qui veut une cuisine envoie des photos par WhatsApp pendant dix jours. » Vendre du sur mesure n'est pas une affaire de vendeur expérimenté, c'est une construction : un modèle d'options avec ses valeurs et ses limites, des contraintes qui grisent l'impossible et l'expliquent, des règles de prix écrites une fois et appliquées en cascade, un devis généré avec son croquis en deux minutes, et une nomenclature, un ordre de fabrication et un ordre de pose lus depuis la même configuration, sans ressaisie.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Configurateur', 'Sur mesure', 'Règles de prix', 'Nomenclature générée', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un **modèle d'options** par famille de produits : des groupes d'options avec leurs valeurs, des dimensions avec leurs limites, et des quantités dérivées, surface, périmètre, nombre de vantaux, calculées par l'application. Des **contraintes** entre options et dimensions, interdit, imposé, limité, évaluées à chaque changement, qui grisent l'option interdite et disent pourquoi, au lieu de laisser promettre l'impossible. Des **règles de prix**, par mètre carré, par mètre, forfait, pourcentage, palier, dans un ordre d'application écrit, avec un arrondi et des grilles par client, versionnées ; le prix est une **cascade visible**, pas un chiffre. Un **devis généré** avec croquis coté, lignes de prix, validité et versions, envoyé en deux minutes ; une **acceptation en ligne** avec acompte. Et, depuis la même configuration, une **nomenclature générée** avec longueurs, barres et chutes qui donne le coût d'atelier prévu et la marge avant l'envoi, un **ordre de fabrication** créé à l'acceptation, et un **ordre de pose**. Selon la description courante, un configurateur limite les options autorisées, valide leur compatibilité et intègre les choix dans la spécification du produit ; c'est exactement cette construction.",
      "Ce guide s'adresse au fabricant de menuiserie aluminium ou PVC, de cuisines et placards, de portails et garde-corps, d'enseignes et d'impression grand format, de meubles et de stores, au revendeur qui vend ces produits sur mesure, et au fondateur installé en France dont les clients de la diaspora veulent configurer et payer depuis Paris. Il ne redit pas comment on construit un moteur de prix pour des produits à l'unité, décrit dans [le guide sur le devis et la facture](" + L.devis + "), ni comment on fabrique et chiffre un ordre, décrit dans [le guide sur la fabrication](" + L.production + ") ; il décrit ce qui s'ajoute quand le produit n'existe pas avant que le client ait choisi ses dimensions et ses options, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Configurer une fenêtre sur mesure', body: [
        "La figure suit une fenêtre aluminium configurée au comptoir. Les règles s'exécutent à chaque changement, et le prix se reconstruit.",
      ], visual: 'configuration', after: [
        "**Les dimensions** : 1 400 sur 1 200 millimètres, saisies ou prises sur place ; l'application calcule la surface, 1,68 mètre carré, et le périmètre, 5,2 mètres, qui servent aux règles de prix et à la nomenclature. **Les options** : type, vantaux, couleur, vitrage, accessoires, chacune avec ses valeurs. **Les contraintes** : un vantail est impossible parce que la largeur dépasse la largeur maximale de vantail du fabricant, 900 millimètres, et deux vantaux sont imposés ; le volet roulant est autorisé parce que la hauteur est sous 2 200. L'option interdite est grisée avec sa raison ; elle n'est pas cachée, pour que le vendeur puisse l'expliquer au client.",
        "**Le prix** se construit en cascade : la base au mètre carré, le supplément de couleur en pourcentage, le double vitrage au mètre carré, la moustiquaire au forfait, le volet roulant au mètre de largeur ; chaque règle est une ligne visible, le total est arrondi selon une règle écrite, et le délai vient de la charge de l'atelier. Les grilles par client du [guide sur le devis et la facture](" + L.devis + ") s'appliquent par-dessus. Produit, limites, options, prix et délai sont un exemple construit ; les limites sont celles du fabricant de l'exemple, écrites par lui la première semaine, pas une norme.",
      ] },
      { heading: 'Une configuration acceptée, quatre documents sans ressaisie', body: [
        "La figure suit la même fenêtre après acceptation. La configuration est la source unique, et personne ne la recopie.",
      ], visual: 'documents', after: [
        "**Le devis** : croquis coté généré, lignes de prix avec les règles visibles, validité, PDF bilingue selon [le guide sur l'impression](" + L.imprimer + ") et [le guide sur l'application bilingue](" + L.bilingue + "), lien de paiement de l'acompte selon [le guide sur le paiement en ligne](" + L.paiement + "), versions quand le client change d'avis, v1 blanc, v2 anthracite. **La nomenclature générée** : longueurs de profilés de dormant et de vantaux, nombre de barres de six mètres selon la règle de chutes du fabricant, vitrages aux cotes de feuillure, quincaillerie, volet ; elle donne le coût d'atelier prévu, 38 400 dinars, et donc la marge, 38 %, avant d'envoyer le devis.",
        "**L'ordre de fabrication** est créé à l'acceptation, avec les composants réservés, selon [le guide sur la fabrication](" + L.production + ") ; le lot fini est lié à la configuration. **L'ordre de pose** planifie le technicien dans la zone du client, avec photos avant et après selon [le guide sur les photos qui font foi](" + L.photos + "), signature, et une fiche équipement créée chez le client pour la garantie et la préventive, selon [le guide sur les interventions terrain](" + L.fieldservice + "). À la main : deux heures et un prix variable ; avec le configurateur : deux minutes, le même prix, zéro ressaisie. Configuration, longueurs, coûts et dates sont un exemple construit.",
      ] },
      { heading: 'Vendre une pièce sur mesure, en six temps', body: [
        "La configuration est l'étape accentuée : c'est là que les règles du gérant s'exécutent, au comptoir ou sur le téléphone du commercial.",
      ], visual: 'vente', after: [
        "**Mesurer** : les dimensions sont saisies au comptoir ou prises sur place par le commercial, sur son téléphone hors ligne selon [le guide sur le hors-ligne](" + L.horsligne + ") ; surface et périmètre sont calculés. **Configurer** : les options sous contraintes, l'impossible grisé et expliqué, l'imposé coché. **Voir le prix** : la cascade règle par règle, et la marge contre la nomenclature générée, visible du vendeur selon ses droits dans [le guide sur les rôles](" + L.roles + ").",
        "**Envoyer le devis** : croquis coté, lignes, validité, par WhatsApp et e-mail selon [le guide sur les notifications](" + L.notif + ") ; une nouvelle version à chaque changement. **Accepter et encaisser** : acceptation en ligne, acompte, ordre de fabrication créé ; le client en France paie en euros selon [le guide sur les deux devises](" + L.devises + "). **Fabriquer et poser** : la nomenclature et l'ordre lus depuis la configuration, la pose planifiée.",
      ] },
      { heading: 'Le configurateur, en cinq couches', body: [
        "Les contraintes sont la couche accentuée : sans elles, le configurateur est un formulaire qui laisse promettre l'impossible.",
      ], visual: 'couches', after: [
        "**Modèle d'options.** Familles de produits, groupes d'options avec valeurs, dimensions avec limites, quantités dérivées ; déclaré par le gérant dans l'application, pas codé. Les produits et composants viennent de [le guide sur la fiche produit](" + L.catalogue + "). **Contraintes.** Règles entre options et dimensions, interdit, imposé, limité, évaluées à chaque changement, avec un message par règle ; testées sur trois devis passés avant d'être ouvertes aux vendeurs. **Règles de prix.** Par mètre carré, par mètre, forfait, pourcentage, palier, dans un ordre écrit, avec arrondi et grilles par client ; versionnées, et un devis garde la version de ses règles.",
        "**Génération.** Devis avec croquis coté ; nomenclature avec longueurs, barres et chutes ; ordre de fabrication ; ordre de pose ; une configuration, quatre documents, zéro ressaisie. **Canaux et mesure.** Le comptoir, le téléphone du commercial hors ligne, et un configurateur en ligne pour le client, avec le même modèle et les mêmes règles ; devis par jour, délai de devis, taux d'acceptation, marge réelle contre prévue, dans [le tableau de bord du gérant](" + L.dashboard + ").",
      ] },
      { heading: 'Six situations réelles, et ce que l’application fait', body: [
        "Chaque ligne est une phrase entendue chez un menuisier, un cuisiniste ou un enseigniste, et la réponse est une construction.",
      ], visual: 'situations', after: [
        "**Trois vendeurs, trois prix** : les règles de prix sont écrites une fois, et la même configuration donne le même prix, quel que soit le vendeur ou le canal. **Le devis prend deux heures** : deux minutes de configuration, un devis généré avec croquis ; le vendeur passe son temps avec le client, pas avec la calculette. **On a vendu l'impossible** : une contrainte grise l'option et dit pourquoi ; un vantail de 1 400 millimètres ne se promet plus.",
        "**La marge est connue après** : la nomenclature générée donne le coût prévu et la marge avant l'envoi, et le gérant fixe un seuil sous lequel le devis demande son approbation. **L'atelier recopie le devis** : la nomenclature et l'ordre lisent la configuration ; une cote n'est saisie qu'une fois. **Le client en France veut un devis** : le configurateur en ligne, avec le même modèle et les mêmes règles, lui donne le devis et lui permet de payer l'acompte depuis Paris ; le commercial prend les cotes sur place avant la fabrication.",
      ] },
      { heading: 'Construire un configurateur en 2027, en semaines', body: [
        "Sept semaines, la première sans code, et deux pour le modèle et les contraintes, parce qu'une règle manquante vend l'impossible.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles** : les familles de produits, les options et leurs valeurs, les limites de dimensions, les contraintes et les règles de prix, écrites avec le gérant et l'atelier ; trois devis passés sont recalculés à la main pour servir de tests. **Semaines 2 et 3, modèle et contraintes** : options, dimensions, quantités dérivées, contraintes avec messages, et les trois devis rejoués jusqu'à ce que le prix et la nomenclature tombent juste. **Semaine 4, prix et devis** : cascade, arrondi, grilles, croquis coté, PDF bilingue, versions, acceptation et acompte.",
        "**Semaine 5, génération** : nomenclature avec barres et chutes, coût prévu, ordre de fabrication, ordre de pose. **Semaine 6, canaux** : comptoir, téléphone hors ligne, configurateur en ligne pour le client. **Semaine 7, mesure** : devis par jour, délai de devis, taux d'acceptation, marge réelle contre prévue, revue du lundi. La mise en production suit [le guide sur la livraison](" + L.livrer + ") : une famille de produits d'abord, avec le vendeur le plus exigeant, puis les autres.",
      ], list: [
        "**Ce que le gérant voit** : les règles de prix et les contraintes, écrites par lui ; les devis du jour avec leur marge prévue ; les devis sous le seuil en attente d'approbation ; le taux d'acceptation.",
        "**Ce que le vendeur ne fait plus** : calculer, dessiner, écrire le devis, promettre l'impossible, recopier les cotes pour l'atelier.",
        "**Ce qui est mesuré** : devis par jour, délai entre la demande et le devis, taux d'acceptation, marge réelle contre prévue par famille, erreurs de cote à l'atelier.",
      ], faq: [
        { q: "Pourquoi un modèle d'options et pas un tableur ?", a: "Parce qu'un tableur calcule un prix mais ne refuse rien : il laisse promettre un vantail de 1 400 millimètres. Le modèle d'options porte les valeurs, les limites et les contraintes, et c'est lui que lisent le devis, la nomenclature et l'ordre de fabrication. Il est déclaré par le gérant, pas codé." },
        { q: "Qui écrit les règles de prix ?", a: "Le gérant, la première semaine, avec l'atelier : par mètre carré, par mètre, forfait, pourcentage, palier, dans un ordre écrit, avec l'arrondi. Elles sont versionnées, et un devis garde la version de ses règles. Elles se changent sans développement." },
        { q: "Comment la nomenclature est-elle générée ?", a: "Depuis la configuration : les longueurs de profilés viennent des dimensions et du type, le nombre de barres de la règle de chutes du fabricant, les vitrages des cotes de feuillure, la quincaillerie des options. Elle donne le coût d'atelier prévu et la marge avant l'envoi du devis, et devient l'ordre de fabrication à l'acceptation." },
        { q: "Le client peut-il configurer lui-même ?", a: "Oui, par un configurateur en ligne qui utilise le même modèle et les mêmes règles que le comptoir ; il obtient le devis et paie l'acompte, y compris en euros depuis la France. Le commercial prend les cotes définitives sur place avant la fabrication, et la version finale remplace la sienne." },
        { q: "Et si le vendeur veut un prix spécial ?", a: "Il applique une remise dans la cascade, visible sur le devis, selon ses droits ; sous un seuil de marge écrit par le gérant, le devis demande une approbation. La règle vient du guide sur le devis et la facture." },
        { q: "Combien de familles de produits au départ ?", a: "Une, la plus vendue, avec trois devis passés comme tests. Quand le prix et la nomenclature tombent juste sur les trois, la famille s'ouvre aux vendeurs, et la suivante se prépare." },
        { q: "Combien de temps pour mettre ça en place ?", a: "Sept semaines dans le calendrier type, la première sans code et deux pour le modèle et les contraintes. Un fabricant qui a déjà le moteur de prix et la nomenclature du guide sur la fabrication prend moins ; un fabricant qui part de la calculette et de Word prend les sept." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Une option n'est pas une ligne de texte : elle a des valeurs, des contraintes avec les autres options et des règles de prix, écrites une fois par le gérant." },
      { after: 1, text: "La configuration acceptée est la source unique : le devis, la nomenclature, l'ordre de fabrication et la pose la lisent, personne ne la recopie." },
    ],
    cta: { eyebrow: 'Envoyez-nous trois devis passés, nous les rejouons dans un configurateur', title: "Menuisier, cuisiniste, enseigniste ou fondateur en France : nous construisons le modèle d'options, les contraintes, les règles de prix, le devis en deux minutes et la nomenclature générée", body: "Trois de vos devis recalculés à blanc, les règles écrites avec votre atelier, et un calendrier en semaines. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.devis, kind: '2027', name: 'Du devis à la facture : moteur de prix, remises, versions' },
      { href: L.production, kind: '2027', name: 'Personne ne sait ce que coûte un produit fini : nomenclature, ordre de fabrication' },
      { href: L.fieldservice, kind: '2027', name: 'Le technicien est reparti sans la pièce : interventions terrain' },
      { href: L.devises, kind: '2027', name: 'Le client en France paie en euros : deux devises, taux figé' },
    ] },
  },
  en: {
    kind: 'Configurator · Made to measure · Quotes · 2027', title: "“Every quote takes two hours, and the price depends on the seller”: what gets built in an application in 2027 to sell made-to-measure, options, constraints, price rules, a quote in two minutes, a generated bill of materials",
    dek: "“We make aluminium windows, kitchens, gates, signs. The customer gives dimensions, the seller takes out a calculator and a sketch, and two hours later sends a Word quote. Another seller would have found another price. The workshop retypes the dimensions, gets it wrong one time in ten, and we find the margin once the piece is made. And the cousin in Paris who wants a kitchen sends photos by WhatsApp for ten days.” Selling made-to-measure is not a matter of experienced sellers, it is a construction: an option model with its values and limits, constraints that grey out the impossible and explain it, price rules written once and applied as a waterfall, a quote generated with its sketch in two minutes, and a bill of materials, a production order and a fitting order read from the same configuration, without retyping.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Configurator', 'Made to measure', 'Price rules', 'Generated BOM', 'Algeria 2027'],
    intro: [
      "**Short answer.** An **option model** per product family: option groups with their values, dimensions with their limits, and derived quantities, area, perimeter, number of leaves, computed by the application. **Constraints** between options and dimensions, forbidden, forced, limited, evaluated on every change, which grey out the forbidden option and say why, instead of letting the impossible be promised. **Price rules**, per square metre, per metre, flat, percentage, tier, in a written order of application, with rounding and grids per customer, versioned; the price is a **visible waterfall**, not a number. A **generated quote** with dimensioned sketch, price lines, validity and versions, sent in two minutes; **online acceptance** with a deposit. And, from the same configuration, a **generated bill of materials** with lengths, bars and offcuts that gives the planned workshop cost and the margin before sending, a **production order** created on acceptance, and a **fitting order**. According to the common description, a configurator limits allowable options, validates their compatibility and integrates the choices into the product specification; it is exactly this construction.",
      "This guide is for the maker of aluminium or PVC joinery, kitchens and wardrobes, gates and railings, signs and large-format print, furniture and blinds, the reseller selling these products made to measure, and the founder based in France whose diaspora customers want to configure and pay from Paris. It does not repeat how a pricing engine for unit products is built, described in [the quote and invoice guide](" + L.devis + "), nor how an order is made and costed, described in [the manufacturing guide](" + L.production + "); it describes what is added when the product does not exist before the customer has chosen dimensions and options, and it extends [our software engineering page](" + L.service + ").",
    ],
    sections: [
      { heading: 'Configuring a made-to-measure window', body: [
        "The figure follows an aluminium window configured at the counter. Rules run on every change, and the price is rebuilt.",
      ], visual: 'configuration', after: [
        "**Dimensions**: 1,400 by 1,200 millimetres, entered or taken on site; the application computes the area, 1.68 square metres, and the perimeter, 5.2 metres, used by price rules and the bill of materials. **Options**: type, leaves, colour, glazing, accessories, each with its values. **Constraints**: one leaf is impossible because the width exceeds the maker’s maximum leaf width, 900 millimetres, and two leaves are forced; the roller shutter is allowed because the height is under 2,200. The forbidden option is greyed with its reason; it is not hidden, so the seller can explain it to the customer.",
        "**The price** is built as a waterfall: the base per square metre, the colour surcharge as a percentage, double glazing per square metre, the insect screen as a flat amount, the roller shutter per metre of width; every rule is a visible line, the total is rounded by a written rule, and the lead time comes from the workshop load. The per-customer grids of [the quote and invoice guide](" + L.devis + ") apply on top. Product, limits, options, prices and lead time are a constructed example; the limits are the example maker’s, written by them in the first week, not a standard.",
      ] },
      { heading: 'One accepted configuration, four documents without retyping', body: [
        "The figure follows the same window after acceptance. The configuration is the single source, and nobody retypes it.",
      ], visual: 'documents', after: [
        "**The quote**: generated dimensioned sketch, price lines with visible rules, validity, bilingual PDF following [the printing guide](" + L.imprimer + ") and [the bilingual application guide](" + L.bilingue + "), deposit payment link following [the online payment guide](" + L.paiement + "), versions when the customer changes their mind, v1 white, v2 anthracite. **The generated bill of materials**: frame and leaf profile lengths, the number of six-metre bars by the maker’s offcut rule, glazings at rebate dimensions, hardware, shutter; it gives the planned workshop cost, 38,400 dinars, and so the margin, 38 %, before the quote is sent.",
        "**The production order** is created on acceptance, with components reserved, following [the manufacturing guide](" + L.production + "); the finished lot is linked to the configuration. **The fitting order** plans the technician in the customer’s zone, with before and after photos following [the trustworthy photos guide](" + L.photos + "), signature, and an equipment record created at the customer’s for warranty and preventive visits, following [the field service guide](" + L.fieldservice + "). By hand: two hours and a variable price; with the configurator: two minutes, the same price, zero retyping. Configuration, lengths, costs and dates are a constructed example.",
      ] },
      { heading: 'Selling a made-to-measure piece, in six beats', body: [
        "Configuration is the accented beat: that is where the manager’s rules run, at the counter or on the rep’s phone.",
      ], visual: 'vente', after: [
        "**Measure**: dimensions are entered at the counter or taken on site by the rep, on their offline phone following [the offline guide](" + L.horsligne + "); area and perimeter are computed. **Configure**: options under constraints, the impossible greyed and explained, the forced ticked. **See the price**: the waterfall rule by rule, and the margin against the generated BOM, visible to the seller according to their rights in [the roles guide](" + L.roles + ").",
        "**Send the quote**: dimensioned sketch, lines, validity, by WhatsApp and e-mail following [the notifications guide](" + L.notif + "); a new version at every change. **Accept and collect**: online acceptance, deposit, production order created; the customer in France pays in euros following [the two-currency guide](" + L.devises + "). **Make and fit**: the BOM and the order read from the configuration, fitting planned.",
      ] },
      { heading: 'The configurator, in five layers', body: [
        "Constraints are the accented layer: without them, the configurator is a form that lets the impossible be promised.",
      ], visual: 'couches', after: [
        "**Option model.** Product families, option groups with values, dimensions with limits, derived quantities; declared by the manager in the application, not coded. Products and components come from [the product record guide](" + L.catalogue + "). **Constraints.** Rules between options and dimensions, forbidden, forced, limited, evaluated on every change, with a message per rule; tested on three past quotes before being opened to sellers. **Price rules.** Per square metre, per metre, flat, percentage, tier, in a written order, with rounding and grids per customer; versioned, and a quote keeps the version of its rules.",
        "**Generation.** Quote with dimensioned sketch; BOM with lengths, bars and offcuts; production order; fitting order; one configuration, four documents, zero retyping. **Channels and measurement.** The counter, the rep’s offline phone, and an online configurator for the customer, with the same model and the same rules; quotes per day, quote time, acceptance rate, real vs planned margin, in [the manager’s dashboard](" + L.dashboard + ").",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "Every row is a sentence heard at a joiner, a kitchen maker or a sign maker, and the answer is a construction.",
      ], visual: 'situations', after: [
        "**Three sellers, three prices**: price rules are written once, and the same configuration gives the same price, whatever the seller or the channel. **The quote takes two hours**: two minutes of configuration, a quote generated with a sketch; the seller spends time with the customer, not with the calculator. **The impossible was sold**: a constraint greys the option and says why; a 1,400-millimetre leaf is no longer promised.",
        "**The margin is known afterwards**: the generated BOM gives the planned cost and the margin before sending, and the manager sets a threshold below which the quote requires approval. **The workshop retypes the quote**: the BOM and the order read the configuration; a dimension is entered only once. **The customer in France wants a quote**: the online configurator, with the same model and rules, gives them the quote and lets them pay the deposit from Paris; the rep takes final dimensions on site before manufacturing.",
      ] },
      { heading: 'Building a configurator in 2027, in weeks', body: [
        "Seven weeks, the first without code, and two for the model and constraints, because a missing rule sells the impossible.",
      ], visual: 'calendrier', after: [
        "**Week 1, rules**: product families, options and their values, dimension limits, constraints and price rules, written with the manager and the workshop; three past quotes are recomputed by hand to serve as tests. **Weeks 2 and 3, model and constraints**: options, dimensions, derived quantities, constraints with messages, and the three quotes replayed until price and BOM come out right. **Week 4, price and quote**: waterfall, rounding, grids, dimensioned sketch, bilingual PDF, versions, acceptance and deposit.",
        "**Week 5, generation**: BOM with bars and offcuts, planned cost, production order, fitting order. **Week 6, channels**: counter, offline phone, online configurator for the customer. **Week 7, measurement**: quotes per day, quote time, acceptance rate, real vs planned margin, Monday review. Going live follows [the delivery guide](" + L.livrer + "): one product family first, with the most demanding seller, then the others.",
      ], list: [
        "**What the manager sees**: price rules and constraints, written by them; the day’s quotes with their planned margin; quotes below the threshold awaiting approval; the acceptance rate.",
        "**What the seller no longer does**: compute, draw, write the quote, promise the impossible, retype dimensions for the workshop.",
        "**What is measured**: quotes per day, time from request to quote, acceptance rate, real vs planned margin per family, dimension errors in the workshop.",
      ], faq: [
        { q: "Why an option model and not a spreadsheet?", a: "Because a spreadsheet computes a price but refuses nothing: it lets a 1,400-millimetre leaf be promised. The option model carries values, limits and constraints, and it is what the quote, the BOM and the production order read. It is declared by the manager, not coded." },
        { q: "Who writes the price rules?", a: "The manager, in the first week, with the workshop: per square metre, per metre, flat, percentage, tier, in a written order, with rounding. They are versioned, and a quote keeps the version of its rules. They change without development." },
        { q: "How is the bill of materials generated?", a: "From the configuration: profile lengths come from dimensions and type, the number of bars from the maker’s offcut rule, glazings from rebate dimensions, hardware from options. It gives the planned workshop cost and the margin before the quote is sent, and becomes the production order on acceptance." },
        { q: "Can the customer configure themselves?", a: "Yes, through an online configurator using the same model and rules as the counter; they get the quote and pay the deposit, including in euros from France. The rep takes final dimensions on site before manufacturing, and the final version replaces theirs." },
        { q: "What if the seller wants a special price?", a: "They apply a discount in the waterfall, visible on the quote, according to their rights; below a margin threshold written by the manager, the quote requires approval. The rule comes from the quote and invoice guide." },
        { q: "How many product families to start?", a: "One, the best seller, with three past quotes as tests. When price and BOM come out right on all three, the family opens to sellers, and the next one is prepared." },
        { q: "How long to set this up?", a: "Seven weeks in the typical calendar, the first without code and two for the model and constraints. A maker who already has the pricing engine and the BOM of the manufacturing guide takes less; one starting from a calculator and Word takes all seven." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "An option is not a line of text: it has values, constraints with other options and price rules, written once by the manager." },
      { after: 1, text: "The accepted configuration is the single source: the quote, the BOM, the production order and the fitting read it, nobody retypes it." },
    ],
    cta: { eyebrow: 'Send us three past quotes, we replay them in a configurator', title: "Joiner, kitchen maker, sign maker or founder in France: we build the option model, constraints, price rules, the two-minute quote and the generated bill of materials", body: "Three of your quotes recomputed as a dry run, the rules written with your workshop, and a calendar in weeks. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Read next', items: [
      { href: L.devis, kind: '2027', name: 'From quote to invoice: pricing engine, discounts, versions' },
      { href: L.production, kind: '2027', name: 'Nobody knows what a finished product costs: BOM, production order' },
      { href: L.fieldservice, kind: '2027', name: 'The technician left without the part: field service' },
      { href: L.devises, kind: '2027', name: 'The customer in France pays in euros: two currencies, frozen rate' },
    ] },
  },
  ar: {
    kind: 'مهيّئ · على المقاس · عروض أسعار · 2027', title: "«كل عرض سعر يأخذ ساعتين، والسعر يتبع البائع»: ما يُبنى في تطبيق سنة 2027 لبيع المصنوع على المقاس، خيارات، قيود، قواعد سعر، عرض سعر في دقيقتين، قائمة مواد مولَّدة",
    dek: "«نصنع نوافذ ألمنيوم ومطابخ وبوابات ولافتات. الزبون يعطي أبعاده، والبائع يخرج حاسبته ورسمه، وبعد ساعتين يرسل عرض سعر Word. وبائع آخر كان سيجد سعراً آخر. والورشة تعيد كتابة القياسات وتخطئ مرة من عشر، ونكتشف الهامش بعد صنع القطعة. وابن العم في باريس الذي يريد مطبخاً يرسل صوراً بـ WhatsApp عشرة أيام.» بيع المصنوع على المقاس ليس مسألة بائع خبير بل بناء: نموذج خيارات بقيمه وحدوده، قيود ترمّد المستحيل وتفسره، قواعد سعر تُكتب مرة واحدة وتُطبَّق شلالاً، عرض سعر مولَّد برسمه في دقيقتين، وقائمة مواد وأمر تصنيع وأمر تركيب تُقرأ من التهيئة نفسها بلا إعادة كتابة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['مهيّئ', 'على المقاس', 'قواعد السعر', 'قائمة مواد مولَّدة', 'الجزائر 2027'],
    intro: [
      "**الجواب القصير.** **نموذج خيارات** لكل عائلة منتجات: مجموعات خيارات بقيمها، أبعاد بحدودها، وكميات مشتقة، مساحة ومحيط وعدد درفات، يحسبها التطبيق. و**قيود** بين الخيارات والأبعاد، ممنوع ومفروض ومحدود، تُقيَّم عند كل تغيير، ترمّد الخيار الممنوع وتقول لماذا بدل أن تدع المستحيل يُوعد به. و**قواعد سعر**، لكل متر مربع أو متر، مبلغ ثابت، نسبة، شريحة، بترتيب تطبيق مكتوب، بتقريب وشبكات لكل زبون، بإصدارات؛ والسعر **شلال مرئي** لا رقم. و**عرض سعر مولَّد** برسم مقاس وأسطر سعر وصلاحية وإصدارات يُرسل في دقيقتين؛ و**قبول إلكتروني** بعربون. ومن التهيئة نفسها، **قائمة مواد مولَّدة** بأطوال وقضبان وقصاصات تعطي كلفة الورشة المخططة والهامش قبل الإرسال، و**أمر تصنيع** يُنشأ عند القبول، و**أمر تركيب**. وبالوصف الشائع، المهيّئ يحدّ الخيارات المسموحة ويتحقق من توافقها ويدمج الاختيارات في مواصفة المنتج؛ وهو بالضبط هذا البناء.",
      "هذا الدليل موجَّه إلى مصنّع النجارة الألمنيوم أو PVC، والمطابخ والخزائن، والبوابات والدرابزين، واللافتات والطباعة الكبيرة، والأثاث والستائر، وإلى البائع الذي يبيع هذه المنتجات على المقاس، وإلى المؤسس المقيم في فرنسا الذي يريد زبائنه من الجالية التهيئة والدفع من باريس. وهو لا يعيد كيف يُبنى محرك سعر لمنتجات بالوحدة، الموصوف في [دليل عرض السعر والفاتورة](" + L.devis + ")، ولا كيف يُصنع ويُكلَّف أمر، الموصوف في [دليل التصنيع](" + L.production + ")؛ بل يصف ما يُضاف حين لا يوجد المنتج قبل أن يختار الزبون أبعاده وخياراته، ويمدّ [صفحتنا عن هندسة البرمجيات](" + L.service + ").",
    ],
    sections: [
      { heading: 'تهيئة نافذة على المقاس', body: [
        "يتتبع الشكل نافذة ألمنيوم تُهيَّأ عند الشباك. القواعد تُنفَّذ عند كل تغيير، والسعر يُعاد بناؤه.",
      ], visual: 'configuration', after: [
        "**الأبعاد**: 1,400 في 1,200 مليمتر، تُدخَل أو تُؤخذ في المكان؛ ويحسب التطبيق المساحة، 1.68 متر مربع، والمحيط، 5.2 متر، اللذين تستعملهما قواعد السعر وقائمة المواد. **الخيارات**: نوع، درفات، لون، زجاج، ملحقات، لكل منها قيمها. **القيود**: درفة واحدة مستحيلة لأن العرض يتجاوز أقصى عرض درفة عند المصنّع، 900 مليمتر، ودرفتان مفروضتان؛ والمصراع الدوّار مسموح لأن الارتفاع تحت 2,200. والخيار الممنوع يُرمَّد بسببه؛ ولا يُخفى كي يستطيع البائع تفسيره للزبون.",
        "**السعر** يُبنى شلالاً: الأساس للمتر المربع، زيادة اللون نسبةً، الزجاج المزدوج للمتر المربع، شبكة الناموس مبلغاً ثابتاً، المصراع الدوّار لمتر العرض؛ وكل قاعدة سطر مرئي، والمجموع يُقرَّب بقاعدة مكتوبة، والمهلة من حمل الورشة. وشبكات الزبائن من [دليل عرض السعر والفاتورة](" + L.devis + ") تُطبَّق فوق ذلك. والمنتج والحدود والخيارات والأسعار والمهلة مثال مبني؛ والحدود حدود مصنّع المثال كتبها في الأسبوع الأول لا معياراً.",
      ] },
      { heading: 'تهيئة مقبولة واحدة، أربعة مستندات بلا إعادة كتابة', body: [
        "يتتبع الشكل النافذة نفسها بعد القبول. التهيئة هي المصدر الواحد، ولا أحد يعيد كتابتها.",
      ], visual: 'documents', after: [
        "**عرض السعر**: رسم مقاس مولَّد، أسطر سعر بقواعد مرئية، صلاحية، PDF ثنائي اللغة وفق [دليل الطباعة](" + L.imprimer + ") و[دليل التطبيق ثنائي اللغة](" + L.bilingue + ")، رابط دفع العربون وفق [دليل الدفع الإلكتروني](" + L.paiement + ")، إصدارات حين يغيّر الزبون رأيه، إ1 أبيض وإ2 أنثراسيت. **قائمة المواد المولَّدة**: أطوال مقاطع الإطار والدرفات، عدد قضبان الستة أمتار بقاعدة القصاصات عند المصنّع، الزجاج بقياسات الحز، العتاد، المصراع؛ وتعطي كلفة الورشة المخططة، 38,400 دينار، وبالتالي الهامش، 38 ٪، قبل إرسال العرض.",
        "**أمر التصنيع** يُنشأ عند القبول بمكوّنات محجوزة وفق [دليل التصنيع](" + L.production + ")؛ والدفعة النهائية مرتبطة بالتهيئة. **أمر التركيب** يخطط التقني في منطقة الزبون بصور قبل وبعد وفق [دليل الصور التي تثبت](" + L.photos + ")، وتوقيع، وبطاقة معدّة تُنشأ عند الزبون للضمان والوقائية وفق [دليل التدخلات الميدانية](" + L.fieldservice + "). يدوياً: ساعتان وسعر متغير؛ بالمهيّئ: دقيقتان والسعر نفسه وصفر إعادة كتابة. والتهيئة والأطوال والكلف والتواريخ مثال مبني.",
      ] },
      { heading: 'بيع قطعة على المقاس، في ستة أوقات', body: [
        "التهيئة هي الوقت المميز: هناك تُنفَّذ قواعد المسيّر، عند الشباك أو على هاتف المندوب.",
      ], visual: 'vente', after: [
        "**القياس**: تُدخَل الأبعاد عند الشباك أو يأخذها المندوب في المكان على هاتفه دون اتصال وفق [دليل العمل دون اتصال](" + L.horsligne + ")؛ وتُحسب المساحة والمحيط. **التهيئة**: خيارات تحت قيود، المستحيل مرمَّد ومفسَّر، المفروض مؤشَّر. **رؤية السعر**: الشلال قاعدةً قاعدة، والهامش مقابل قائمة المواد المولَّدة، يراه البائع بحسب صلاحياته في [دليل الأدوار](" + L.roles + ").",
        "**إرسال العرض**: رسم مقاس وأسطر وصلاحية، بـ WhatsApp والبريد وفق [دليل الإشعارات](" + L.notif + ")؛ وإصدار جديد عند كل تغيير. **القبول والتحصيل**: قبول إلكتروني، عربون، أمر تصنيع منشأ؛ والزبون في فرنسا يدفع باليورو وفق [دليل العملتين](" + L.devises + "). **التصنيع والتركيب**: قائمة المواد والأمر يُقرآن من التهيئة، والتركيب مخطط.",
      ] },
      { heading: 'المهيّئ، في خمس طبقات', body: [
        "القيود هي الطبقة المميزة: بدونها يكون المهيّئ استمارة تدع المستحيل يُوعد به.",
      ], visual: 'couches', after: [
        "**نموذج الخيارات.** عائلات منتجات، مجموعات خيارات بقيم، أبعاد بحدود، كميات مشتقة؛ يصرّح بها المسيّر في التطبيق ولا تُبرمج. والمنتجات والمكوّنات من [دليل بطاقة المنتج](" + L.catalogue + "). **القيود.** قواعد بين الخيارات والأبعاد، ممنوع ومفروض ومحدود، تُقيَّم عند كل تغيير برسالة لكل قاعدة؛ تُختبر على ثلاثة عروض ماضية قبل فتحها للبائعين. **قواعد السعر.** لكل متر مربع أو متر، مبلغ ثابت، نسبة، شريحة، بترتيب مكتوب، بتقريب وشبكات لكل زبون؛ بإصدارات، وعرض السعر يحتفظ بإصدار قواعده.",
        "**التوليد.** عرض سعر برسم مقاس؛ قائمة مواد بأطوال وقضبان وقصاصات؛ أمر تصنيع؛ أمر تركيب؛ تهيئة واحدة وأربعة مستندات وصفر إعادة كتابة. **القنوات والقياس.** الشباك، وهاتف المندوب دون اتصال، ومهيّئ إلكتروني للزبون بالنموذج نفسه والقواعد نفسها؛ عروض في اليوم، مدة العرض، نسبة القبول، هامش حقيقي مقابل مخطط، في [لوحة المسيّر](" + L.dashboard + ").",
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        "كل سطر جملة سُمعت عند نجار أو صانع مطابخ أو صانع لافتات، والجواب بناء.",
      ], visual: 'situations', after: [
        "**ثلاثة بائعين، ثلاثة أسعار**: قواعد السعر تُكتب مرة واحدة، والتهيئة نفسها تعطي السعر نفسه أياً كان البائع أو القناة. **عرض السعر يأخذ ساعتين**: دقيقتان من التهيئة وعرض مولَّد برسم؛ والبائع يقضي وقته مع الزبون لا مع الحاسبة. **بيع المستحيل**: القيد يرمّد الخيار ويقول لماذا؛ ودرفة 1,400 مليمتر لم تعد تُوعد.",
        "**الهامش يُعرف بعد ذلك**: قائمة المواد المولَّدة تعطي الكلفة المخططة والهامش قبل الإرسال، والمسيّر يحدد عتبة تحتها يتطلب العرض موافقته. **الورشة تعيد كتابة العرض**: قائمة المواد والأمر يقرآن التهيئة؛ والقياس يُدخَل مرة واحدة. **الزبون في فرنسا يريد عرضاً**: المهيّئ الإلكتروني بالنموذج والقواعد نفسها يعطيه العرض ويتيح له دفع العربون من باريس؛ والمندوب يأخذ القياسات النهائية في المكان قبل التصنيع.",
      ] },
      { heading: 'بناء مهيّئ سنة 2027، بالأسابيع', body: [
        "سبعة أسابيع، الأول بلا كود، واثنان للنموذج والقيود، لأن قاعدة ناقصة تبيع المستحيل.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، القواعد**: عائلات المنتجات، الخيارات وقيمها، حدود الأبعاد، القيود وقواعد السعر، تُكتب مع المسيّر والورشة؛ وثلاثة عروض ماضية تُعاد يدوياً لتكون اختبارات. **الأسبوعان 2 و3، النموذج والقيود**: خيارات، أبعاد، كميات مشتقة، قيود برسائل، والعروض الثلاثة تُعاد حتى يصح السعر وقائمة المواد. **الأسبوع 4، السعر والعرض**: شلال، تقريب، شبكات، رسم مقاس، PDF ثنائي اللغة، إصدارات، قبول وعربون.",
        "**الأسبوع 5، التوليد**: قائمة مواد بقضبان وقصاصات، كلفة مخططة، أمر تصنيع، أمر تركيب. **الأسبوع 6، القنوات**: شباك، هاتف دون اتصال، مهيّئ إلكتروني للزبون. **الأسبوع 7، القياس**: عروض في اليوم، مدة العرض، نسبة القبول، هامش حقيقي مقابل مخطط، مراجعة الاثنين. والإطلاق يتبع [دليل التسليم](" + L.livrer + "): عائلة منتجات أولاً مع البائع الأكثر تطلباً ثم الباقي.",
      ], list: [
        "**ما يراه المسيّر**: قواعد السعر والقيود التي كتبها؛ عروض اليوم بهامشها المخطط؛ العروض تحت العتبة بانتظار الموافقة؛ نسبة القبول.",
        "**ما لم يعد البائع يفعله**: الحساب، الرسم، كتابة العرض، الوعد بالمستحيل، إعادة كتابة القياسات للورشة.",
        "**ما يُقاس**: عروض في اليوم، مدة من الطلب إلى العرض، نسبة القبول، هامش حقيقي مقابل مخطط لكل عائلة، أخطاء قياس في الورشة.",
      ], faq: [
        { q: "لماذا نموذج خيارات لا جدول بيانات؟", a: "لأن جدول البيانات يحسب سعراً ولا يرفض شيئاً: يدع درفة 1,400 مليمتر تُوعد. ونموذج الخيارات يحمل القيم والحدود والقيود، وهو ما يقرؤه عرض السعر وقائمة المواد وأمر التصنيع. ويصرّح به المسيّر ولا يُبرمج." },
        { q: "من يكتب قواعد السعر؟", a: "المسيّر في الأسبوع الأول مع الورشة: لكل متر مربع أو متر، مبلغ ثابت، نسبة، شريحة، بترتيب مكتوب وتقريب. وهي بإصدارات، وعرض السعر يحتفظ بإصدار قواعده. وتتغير بلا تطوير." },
        { q: "كيف تُولَّد قائمة المواد؟", a: "من التهيئة: أطوال المقاطع من الأبعاد والنوع، وعدد القضبان من قاعدة القصاصات عند المصنّع، والزجاج من قياسات الحز، والعتاد من الخيارات. وتعطي كلفة الورشة المخططة والهامش قبل إرسال العرض، وتصير أمر التصنيع عند القبول." },
        { q: "هل يستطيع الزبون التهيئة بنفسه؟", a: "نعم، بمهيّئ إلكتروني يستعمل النموذج والقواعد نفسها التي عند الشباك؛ يحصل على العرض ويدفع العربون، حتى باليورو من فرنسا. ويأخذ المندوب القياسات النهائية في المكان قبل التصنيع، والإصدار النهائي يحل محل إصداره." },
        { q: "وإن أراد البائع سعراً خاصاً؟", a: "يطبّق خصماً في الشلال، مرئياً على العرض، بحسب صلاحياته؛ وتحت عتبة هامش يكتبها المسيّر يتطلب العرض موافقة. والقاعدة من دليل عرض السعر والفاتورة." },
        { q: "كم عائلة منتجات في البداية؟", a: "واحدة، الأكثر بيعاً، بثلاثة عروض ماضية اختبارات. وحين يصح السعر وقائمة المواد على الثلاثة تُفتح العائلة للبائعين وتُحضَّر التالية." },
        { q: "كم من الوقت لإقامة ذلك؟", a: "سبعة أسابيع في التقويم النموذجي، الأول بلا كود واثنان للنموذج والقيود. ومصنّع لديه محرك السعر وقائمة المواد من دليل التصنيع يأخذ أقل؛ ومن يبدأ من الحاسبة وWord يأخذ السبعة." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "الخيار ليس سطر نص: له قيم وقيود مع الخيارات الأخرى وقواعد سعر، يكتبها المسيّر مرة واحدة." },
      { after: 1, text: "التهيئة المقبولة هي المصدر الواحد: عرض السعر وقائمة المواد وأمر التصنيع والتركيب تقرؤها، ولا أحد يعيد كتابتها." },
    ],
    cta: { eyebrow: 'أرسلوا لنا ثلاثة عروض ماضية، نعيدها في مهيّئ', title: "نجار أو صانع مطابخ أو صانع لافتات أو مؤسس في فرنسا: نبني نموذج الخيارات، والقيود، وقواعد السعر، وعرض السعر في دقيقتين، وقائمة المواد المولَّدة", body: "ثلاثة من عروضكم تُعاد حساباً على الفارغ، والقواعد تُكتب مع ورشتكم، وتقويم بالأسابيع. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.devis, kind: '2027', name: 'من عرض السعر إلى الفاتورة: محرك الأسعار، خصومات، نسخ' },
      { href: L.production, kind: '2027', name: 'لا أحد يعرف كم يكلّف المنتج النهائي: قائمة مواد، أمر تصنيع' },
      { href: L.fieldservice, kind: '2027', name: 'التقني غادر بلا القطعة: التدخلات الميدانية' },
      { href: L.devises, kind: '2027', name: 'الزبون في فرنسا يدفع باليورو: عملتان، سعر مجمَّد' },
    ] },
  },
};

const KEYWORDS = "configurateur produit sur mesure application algérie 2027, logiciel devis menuiserie aluminium pvc algérie, configurateur fenêtre portail cuisine devis automatique, règles de prix au m² au mètre forfait configurateur, contraintes options produit sur mesure devis, devis en deux minutes croquis coté pdf, nomenclature générée depuis configuration barres chutes, devis sur mesure même prix quel que soit le vendeur, configurateur en ligne client diaspora acompte, logiciel devis enseigne impression grand format, développement configurateur produit algérie, product configurator app algeria 2027 cpq made to measure quote bom, مهيّئ منتج على المقاس عرض سعر قائمة مواد تطبيق الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
