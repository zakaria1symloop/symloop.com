import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/trois-societes-un-gerant-trois-fichiers-application-multi-societes-algerie-2027-referentiels-partages-transferts-inter-societes-vue-groupe.mjs';

const SLUG = 'trois-societes-un-gerant-trois-fichiers-application-multi-societes-algerie-2027-referentiels-partages-transferts-inter-societes-vue-groupe';
const FIGURES = ['modele', 'couches', 'transfert', 'situations', 'ajout', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  saas: '/blog/construire-saas-multi-tenant-algerie-2027-isolation-clients-base-partagee-rls-plans-abonnement-mises-a-jour/',
  client: '/blog/un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion/',
  catalogue: '/blog/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  imprimer: '/blog/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  lots: '/blog/le-lot-qui-expire-en-premier-est-au-fond-tracabilite-par-lot-application-algerie-2027-reception-fefo-quarantaine-rappel-ce-qu-on-construit/',
  devises: '/blog/client-en-france-paie-en-euros-service-en-algerie-application-2027-deux-encaissements-deux-devises-taux-fige-rapprochement-remboursement/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  excel: '/blog/importer-un-fichier-excel-chaque-semaine-sans-casser-application-algerie-2027-correspondance-validation-essai-a-blanc-retour-arriere/',
  migrer: '/blog/migrer-vieux-logiciel-de-gestion-algerie-2027-windev-access-excel-vers-plateforme-web-mobile-sans-arreter/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Multi-sociétés · Groupe · Diaspora · 2027', title: "« Trois sociétés, un gérant, trois fichiers » : ce qu'on construit dans une application en 2027 pour un groupe de sociétés, référentiels partagés, données propres, transferts inter-sociétés en miroir, vue groupe",
    dek: "« On a la société d'Alger, celle de Sétif, et la structure à Paris qui facture les clients en France. Trois logiciels, trois comptables, et le même client qui existe trois fois. Alger livre Sétif sans facture, le gérant additionne des dinars et des euros dans un fichier, et chaque fin de mois on refait trois exports à la main. » Un groupe dans une application n'est pas trois copies du logiciel, c'est une construction : la société comme dimension de chaque document ; des référentiels partagés, clients, produits, personnes, qui existent une fois pour le groupe avec une visibilité et un prix par société ; des données propres qui ne se mélangent jamais, numérotation, comptes, dépôts, en-tête ; des transferts entre sociétés écrits en miroir ; et une vue groupe qui exclut l'intra-groupe et n'additionne jamais deux devises.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Multi-sociétés', 'Groupe', 'Référentiels partagés', 'Inter-sociétés', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** La **société** est une dimension obligatoire sur chaque document, facture, mouvement de stock, encaissement, ordre ; un document appartient à une société et une seule, avec sa devise, ses dépôts, ses comptes bancaires et ses **séries de numéros**. Les **référentiels** sont partagés : un client, un produit, un fournisseur, une personne existent une fois pour le groupe, et une règle par société dit qui les voit, à quel prix, avec quel encours et quel rôle. Les **droits** sont un compte par personne et un rôle par société ; changer de société est un sélecteur, pas une autre connexion. Un **transfert ou une vente entre sociétés** écrit deux jeux de documents en miroir, vente chez l'une, achat chez l'autre, en un seul geste, avec les soldes intra-groupe repérés. La **vue groupe** lit par société et pour le groupe, exclut l'intra-groupe, n'additionne jamais deux devises, et sort un export par comptable depuis la même source. Ce que chaque société doit faire figurer sur ses documents et déclarer se règle avec son comptable : l'application l'imprime, elle ne le décide pas.",
      "Ce guide s'adresse au fondateur installé en France qui a une structure là-bas et une ou deux sociétés en Algérie, au groupe familial avec une société par wilaya, au distributeur qui a séparé le gros et le détail, et au gérant qui veut lire le groupe à 8 h sans fichier de consolidation. Il ne redit pas comment on isole les clients d'un SaaS les uns des autres, décrit dans [le guide sur le SaaS multi-tenant](" + L.saas + ") : ici les sociétés veulent partager, pas s'ignorer ; ni comment on fusionne un fichier client ou un catalogue, décrits dans [le guide sur le client unique](" + L.client + ") et [le guide sur la fiche produit](" + L.catalogue + "). Il décrit ce qui s'ajoute quand plusieurs sociétés vivent dans la même application, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + "). Il ne traite pas des règles fiscales ni comptables propres à chaque pays : prix de transfert, mentions, déclarations sont des décisions prises avec les comptables.",
    ],
    sections: [
      { heading: 'Un groupe, trois sociétés, une application', body: [
        "La figure montre ce qui est partagé et ce qui appartient à chaque société. La frontière est la décision la plus importante de la première semaine.",
      ], visual: 'modele', after: [
        "**Partagé par le groupe.** Les **clients** : une fiche par client, le téléphone comme clé selon [le guide sur le client unique](" + L.client + "), visible par Alger, par Sétif ou par les deux, avec un encours et un plafond par société, parce que la dette envers Alger n'est pas la dette envers Sétif, selon [le guide sur le crédit client](" + L.credit + "). Les **produits** : un catalogue, modèle, variantes, lots, avec un prix et une disponibilité par société, et des photos écrites une fois. Les **personnes** : un compte par personne et un rôle par société ; le gérant voit les trois, un vendeur de Sétif ne voit que Sétif.",
        "**Propre à chaque société.** Les séries de numérotation, une par type de document et par société, imposées par la fiche de la société et impossibles à mélanger, selon [le guide sur l'impression](" + L.imprimer + ") ; les comptes bancaires ; les dépôts et leur stock, selon [le guide sur le stock](" + L.stock + ") ; les grilles de prix ; l'en-tête et les mentions des documents, réglés avec le comptable de chaque société, celui d'Alger, celui de Sétif et celui de Paris ; les exports comptables, un par cabinet, chaque mois. La société parisienne encaisse en euros et suit [le guide sur les deux devises](" + L.devises + "). Sociétés, effectifs et numéros sont un exemple construit.",
      ] },
      { heading: 'Le multi-sociétés, en cinq couches', body: [
        "Les référentiels partagés sont la couche accentuée : c'est elle qui fait gagner le plus, et c'est elle qui ne se rattrape pas après coup.",
      ], visual: 'couches', after: [
        "**Société.** Une colonne obligatoire sur chaque table de documents, et une contrainte en base qui refuse un document sans société ou qui mélange deux sociétés dans le même document ; la devise, les dépôts, les comptes et les séries de numéros sont portés par la société. **Référentiels partagés.** Clients, produits, fournisseurs, personnes : une fiche pour le groupe, et des tables de règles par société, visibilité, prix, encours, rôle ; une fiche client n'est pas copiée, elle est vue. **Droits.** Un compte par personne, un rôle par société, selon [le guide sur les rôles](" + L.roles + ") ; le sélecteur de société est verrouillé pour qui n'en a qu'une ; le journal d'audit dit dans quelle société chaque action a eu lieu.",
        "**Inter-sociétés.** Un transfert, une vente ou une prestation entre deux sociétés du groupe écrit deux jeux de documents en miroir, une fois ; les comptes client et fournisseur intra-groupe sont marqués comme tels. **Vue groupe.** Un tableau de bord par société et pour le groupe, selon [le guide sur le tableau de bord](" + L.dashboard + ") ; l'intra-groupe exclu ; les devises jamais additionnées, avec un équivalent au taux figé pour la lecture seulement ; un export par comptable, daté et rejouable, selon [le guide sur l'intégration](" + L.integrer + "). Les serveurs et les données du groupe suivent [le guide sur l'hébergement](" + L.heberger + ") ; une société en France peut imposer où vivent ses données, et la dimension société permet de le respecter.",
      ] },
      { heading: 'Un transfert inter-sociétés : deux jeux de documents, un seul geste', body: [
        "La figure suit 200 unités qui passent d'Alger à Sétif. Personne ne retape la facture d'achat de l'autre côté.",
      ], visual: 'transfert', after: [
        "Sétif manque de 200 unités, Alger en a 640. Le responsable crée un **transfert inter-sociétés** au prix de transfert écrit par le gérant avec le comptable. L'application écrit, chez Alger, un bon de livraison, une facture de vente à Sétif et une sortie de stock du lot concerné ; chez Sétif, une réception, une facture d'achat qui est le miroir exact de la facture de vente, jamais retapée, et une entrée de stock du même lot, selon [le guide sur la traçabilité par lot](" + L.lots + "). Le camion part avec le bon de livraison, Sétif réceptionne par scan, et l'écart éventuel est noté sur la réception, pas corrigé en silence.",
        "Le même soir, la **vue groupe** marque la paire intra-groupe : la créance d'Alger sur Sétif et la dette de Sétif envers Alger s'annulent, et la vente ne compte pas dans le chiffre d'affaires du groupe, parce que, selon la définition courante des comptes consolidés, un solde entre sociétés du groupe est compensé par le solde inverse, et une vente interne n'est pas une vente du groupe. Les deux exports mensuels, celui d'Alger et celui de Sétif, portent chacun leurs documents. Quel prix de transfert choisir et ce que chaque société déclare sont des questions pour le comptable et le conseil ; numéros, quantités et montants sont un exemple construit.",
      ] },
      { heading: 'Six situations réelles, et ce que l’application fait', body: [
        "Chaque ligne est une phrase entendue dans un groupe de deux ou trois sociétés, et la réponse est une construction, pas un quatrième fichier.",
      ], visual: 'situations', after: [
        "**Le client existe dans trois logiciels** : une fiche groupe avec le téléphone comme clé, et une visibilité et un encours par société. **Sétif facture avec les numéros d'Alger** : la série est imposée par la société du document ; se tromper est impossible, pas interdit. **Alger livre Sétif, personne ne facture** : le transfert inter-sociétés écrit les documents en miroir, et le stock et le lot sont suivis des deux côtés.",
        "**Le gérant additionne dinars et euros** : la vue groupe lit par devise, et l'équivalent au taux figé ne sert qu'à la lecture, comme dans [le guide sur les deux devises](" + L.devises + "). **Le vendeur de Sétif voit les prix d'Alger** : rôle et grille par société, sélecteur verrouillé. **Trois comptables, trois fichiers refaits** : un export par société, depuis la même source, daté et rejouable ; le fondateur en France lit le groupe dans [le guide sur la gestion à distance](" + L.commerce + ").",
      ] },
      { heading: 'Ajouter une société à l’application, en six temps', body: [
        "Une fois la construction en place, une nouvelle société s'ajoute en six temps, dont un avec son comptable.",
      ], visual: 'ajout', after: [
        "**Créer la société** : nom, devise, dépôts, comptes bancaires, logo. **Numérotation et documents** : les séries par type de document, l'en-tête et les mentions, réglés avec le comptable de cette société ; c'est l'étape accentuée, parce qu'elle ne se fait pas seul et qu'elle ne se change plus après la première facture. **Droits** : qui la voit, qui y vend, qui y encaisse, un rôle par personne.",
        "**Référentiels** : quels clients et quels produits elle voit, ses grilles de prix. **Reprise** : soldes d'ouverture par client, stock par dépôt, pièces ouvertes, avec le même essai à blanc que [le guide sur l'import](" + L.excel + "). **Premier export** : un mois de documents vers son comptable, et son retour, avant d'ouvrir la société aux vendeurs. Une société qui vient d'un vieux logiciel suit en plus [le guide sur la migration](" + L.migrer + ").",
      ] },
      { heading: 'Passer au multi-sociétés en 2027, en semaines', body: [
        "Sept semaines, la première sans code, et deux pour la dimension société et la fusion des référentiels, parce qu'un client en triple ne se fusionne pas après coup.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles** : la liste des sociétés et leurs devises, ce qui est partagé et ce qui est propre, le prix de transfert, qui voit quoi ; avec le gérant et les comptables de chaque société. **Semaines 2 et 3, société et référentiels** : la dimension société sur chaque document, les séries, les dépôts, les comptes ; la fusion des clients et des produits des anciens logiciels en un référentiel groupe, avec rapprochement proposé, essai à blanc et lignes refusées. **Semaine 4, droits** : rôle par société, sélecteur, gérant et comptable groupe, journal d'audit par société.",
        "**Semaine 5, inter-sociétés** : transfert et vente entre sociétés en miroir, soldes intra-groupe, lots suivis. **Semaine 6, vue groupe et exports** : tableau par société et pour le groupe, intra-groupe exclu, devises séparées, export par comptable. **Semaine 7, bascule** : une société d'abord, avec ses vendeurs et son comptable, puis les suivantes ; les anciens logiciels passent en lecture seule, pas à la corbeille.",
      ], list: [
        "**Ce que le gérant voit** : le groupe et chaque société, par devise, intra-groupe exclu ; les transferts en cours ; les exports partis à chaque comptable.",
        "**Ce qu'un employé ne peut plus faire** : facturer dans la mauvaise société, voir une grille qui n'est pas la sienne, livrer une société sœur sans document.",
        "**Ce qui est mesuré** : par société, chiffre d'affaires, encours, stock ; pour le groupe, les mêmes hors intra-groupe ; exports faits et retours des comptables.",
      ], faq: [
        { q: "Multi-sociétés ou multi-tenant, quelle différence ?", a: "Un SaaS multi-tenant isole des clients qui ne doivent rien partager. Un groupe multi-sociétés veut partager, clients, produits, personnes, et ne séparer que ce qui doit l'être, numéros, comptes, dépôts, documents. La construction est différente : une dimension société sur les documents, pas une base par client." },
        { q: "Pourquoi fusionner les clients et les produits ?", a: "Parce qu'un client qui existe trois fois a trois encours, trois téléphones et trois historiques, et qu'un produit en triple a trois stocks et trois prix. La fusion se fait une fois, la deuxième et la troisième semaine, avec un essai à blanc ; après coup, elle ne se fait plus." },
        { q: "Comment éviter de mélanger les numéros de facture ?", a: "La série est portée par la société du document, imposée par sa fiche ; un utilisateur ne la choisit pas. Les séries et les mentions de chaque société sont réglées avec son comptable la première semaine, avant la première facture." },
        { q: "Que se passe-t-il quand une société vend à une autre ?", a: "L'application écrit deux jeux de documents en miroir, vente chez l'une, achat chez l'autre, avec le stock et le lot suivis des deux côtés, et marque les soldes intra-groupe. Le prix de transfert est une règle écrite avec le comptable ; ce guide ne dit pas lequel choisir." },
        { q: "Peut-on additionner dinars et euros dans la vue groupe ?", a: "Non. La vue groupe lit par devise ; un équivalent au taux figé peut être affiché pour la lecture, jamais additionné aux montants réels, selon la règle déjà posée dans le guide sur les deux devises." },
        { q: "Et les règles fiscales de chaque pays ?", a: "Hors de ce guide. Ce que chaque société doit faire figurer sur ses documents, déclarer et consolider se règle avec son comptable et son conseil ; l'application imprime et exporte ce qui a été décidé." },
        { q: "Combien de temps pour mettre ça en place ?", a: "Sept semaines dans le calendrier type, la première sans code et deux pour la dimension société et la fusion des référentiels. Deux sociétés dans le même pays prennent moins ; trois sociétés dans deux pays avec deux devises prennent les sept." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "La société est une dimension de chaque document, pas une autre application : une facture appartient à une société et une seule." },
      { after: 2, text: "Un transfert entre deux sociétés du groupe est une vente chez l'une et un achat chez l'autre ; l'application écrit les deux jeux en miroir, et personne ne retape le second." },
    ],
    cta: { eyebrow: 'Envoyez-nous vos trois fichiers clients, nous montrons le référentiel qu’ils deviennent', title: "Fondateur en France, groupe familial ou distributeur : nous construisons la dimension société, les référentiels partagés, les transferts en miroir et la vue groupe qui n'additionne jamais deux devises", body: "Une fusion à blanc de vos clients et produits, les règles de partage écrites avec vos comptables, et un calendrier en semaines. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.saas, kind: '2027', name: 'Construire un SaaS multi-tenant : isolation, base partagée, plans' },
      { href: L.client, kind: '2027', name: 'Un seul client, pas trois : fichier client unique, téléphone comme clé' },
      { href: L.devises, kind: '2027', name: 'Le client en France paie en euros : deux devises, taux figé' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit : qui voit quoi, qui modifie quoi' },
    ] },
  },
  en: {
    kind: 'Multi-company · Group · Diaspora · 2027', title: "“Three companies, one manager, three files”: what gets built in an application in 2027 for a group of companies, shared reference data, own data, mirrored inter-company transfers, group view",
    dek: "“We have the Algiers company, the Sétif one, and the structure in Paris that invoices customers in France. Three programs, three accountants, and the same customer who exists three times. Algiers delivers Sétif without an invoice, the manager adds dinars and euros in a file, and every month end we redo three exports by hand.” A group in one application is not three copies of the software, it is a construction: the company as a dimension of every document; shared reference data, customers, products, people, existing once for the group with visibility and a price per company; own data that is never mixed, numbering, accounts, depots, header; inter-company transfers written as mirrors; and a group view that excludes intra-group and never adds two currencies.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Multi-company', 'Group', 'Shared reference data', 'Inter-company', 'Algeria 2027'],
    intro: [
      "**Short answer.** The **company** is a mandatory dimension on every document, invoice, stock movement, receipt, order; a document belongs to one company and one only, with its currency, its depots, its bank accounts and its **number series**. **Reference data** is shared: a customer, a product, a supplier, a person exist once for the group, and a rule per company says who sees them, at what price, with what receivables and what role. **Rights** are one account per person and one role per company; switching company is a selector, not another login. A **transfer or sale between companies** writes two mirrored sets of documents, sale at one, purchase at the other, in one action, with intra-group balances flagged. The **group view** reads per company and for the group, excludes intra-group, never adds two currencies, and produces one export per accountant from the same source. What each company must show on its documents and declare is settled with its accountant: the application prints it, it does not decide it.",
      "This guide is for the founder based in France with a structure there and one or two companies in Algeria, the family group with one company per wilaya, the distributor who separated wholesale and retail, and the manager who wants to read the group at 8:00 without a consolidation file. It does not repeat how a SaaS isolates its customers from one another, described in [the multi-tenant SaaS guide](" + L.saas + "): here the companies want to share, not ignore each other; nor how a customer file or a catalogue is merged, described in [the single customer guide](" + L.client + ") and [the product record guide](" + L.catalogue + "). It describes what is added when several companies live in the same application, and it extends [our software engineering page](" + L.service + "). It does not cover each country’s tax or accounting rules: transfer price, mentions, declarations are decisions taken with the accountants.",
    ],
    sections: [
      { heading: 'One group, three companies, one application', body: [
        "The figure shows what is shared and what belongs to each company. The boundary is the most important decision of the first week.",
      ], visual: 'modele', after: [
        "**Shared by the group.** **Customers**: one record per customer, phone as key following [the single customer guide](" + L.client + "), visible to Algiers, to Sétif or to both, with receivables and a limit per company, because the debt to Algiers is not the debt to Sétif, following [the customer credit guide](" + L.credit + "). **Products**: one catalogue, model, variants, lots, with a price and availability per company, and photos written once. **People**: one account per person and one role per company; the manager sees all three, a Sétif seller sees only Sétif.",
        "**Own to each company.** Numbering series, one per document type and per company, imposed by the company record and impossible to mix, following [the printing guide](" + L.imprimer + "); bank accounts; depots and their stock, following [the stock guide](" + L.stock + "); price lists; document header and mentions, set with each company’s accountant, the Algiers one, the Sétif one and the Paris one; accounting exports, one per firm, every month. The Paris company collects in euros and follows [the two-currency guide](" + L.devises + "). Companies, headcounts and numbers are a constructed example.",
      ] },
      { heading: 'Multi-company, in five layers', body: [
        "Shared reference data is the accented layer: it is the one that saves the most, and the one that cannot be fixed afterwards.",
      ], visual: 'couches', after: [
        "**Company.** A mandatory column on every document table, and a database constraint that refuses a document without a company or mixing two companies in the same document; currency, depots, accounts and number series are carried by the company. **Shared reference data.** Customers, products, suppliers, people: one record for the group, and rule tables per company, visibility, price, receivables, role; a customer record is not copied, it is seen. **Rights.** One account per person, one role per company, following [the roles guide](" + L.roles + "); the company selector is locked for whoever has only one; the audit log says in which company every action took place.",
        "**Inter-company.** A transfer, a sale or a service between two group companies writes two mirrored sets of documents, once; intra-group customer and supplier accounts are flagged as such. **Group view.** A dashboard per company and for the group, following [the dashboard guide](" + L.dashboard + "); intra-group excluded; currencies never added, with an equivalent at a frozen rate for reading only; one export per accountant, dated and replayable, following [the integration guide](" + L.integrer + "). The group’s servers and data follow [the hosting guide](" + L.heberger + "); a company in France may require where its data lives, and the company dimension makes that possible.",
      ] },
      { heading: 'One inter-company transfer: two sets of documents, one action', body: [
        "The figure follows 200 units moving from Algiers to Sétif. Nobody retypes the purchase invoice on the other side.",
      ], visual: 'transfert', after: [
        "Sétif is short of 200 units, Algiers has 640. The manager creates an **inter-company transfer** at the transfer price written by the manager with the accountant. The application writes, at Algiers, a delivery note, a sales invoice to Sétif and a stock issue of the lot concerned; at Sétif, a reception, a purchase invoice that is the exact mirror of the sales invoice, never retyped, and a stock receipt of the same lot, following [the lot traceability guide](" + L.lots + "). The truck leaves with the delivery note, Sétif receives by scan, and any gap is recorded on the reception, not silently corrected.",
        "The same evening, the **group view** tags the pair intra-group: Algiers’ receivable from Sétif and Sétif’s payable to Algiers cancel out, and the sale does not count in group revenue, because, following the common definition of consolidated accounts, a balance between group companies is offset by the reverse balance, and an internal sale is not a sale of the group. The two monthly exports, Algiers’ and Sétif’s, each carry their own documents. Which transfer price to choose and what each company declares are questions for the accountant and counsel; numbers, quantities and amounts are a constructed example.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "Every row is a sentence heard in a group of two or three companies, and the answer is a construction, not a fourth file.",
      ], visual: 'situations', after: [
        "**The customer exists in three programs**: one group record with phone as key, and visibility and receivables per company. **Sétif invoices with Algiers’ numbers**: the series is imposed by the document’s company; getting it wrong is impossible, not forbidden. **Algiers delivers Sétif, nobody invoices**: the inter-company transfer writes mirrored documents, and stock and lot are tracked on both sides.",
        "**The manager adds dinars and euros**: the group view reads per currency, and the equivalent at a frozen rate serves reading only, as in [the two-currency guide](" + L.devises + "). **The Sétif seller sees Algiers’ prices**: role and grid per company, selector locked. **Three accountants, three files redone**: one export per company, from the same source, dated and replayable; the founder in France reads the group in [the remote management guide](" + L.commerce + ").",
      ] },
      { heading: 'Adding a company to the application, in six beats', body: [
        "Once the construction is in place, a new company is added in six beats, one of them with its accountant.",
      ], visual: 'ajout', after: [
        "**Create the company**: name, currency, depots, bank accounts, logo. **Numbering and documents**: series per document type, header and mentions, set with that company’s accountant; it is the accented beat, because it is not done alone and it no longer changes after the first invoice. **Rights**: who sees it, who sells in it, who collects in it, one role per person.",
        "**Reference data**: which customers and products it sees, its price lists. **Take-over**: opening balances per customer, stock per depot, open documents, with the same dry run as [the import guide](" + L.excel + "). **First export**: one month of documents to its accountant, and its feedback, before opening the company to sellers. A company coming from an old program also follows [the migration guide](" + L.migrer + ").",
      ] },
      { heading: 'Going multi-company in 2027, in weeks', body: [
        "Seven weeks, the first without code, and two for the company dimension and the merge of reference data, because a customer in triplicate cannot be merged afterwards.",
      ], visual: 'calendrier', after: [
        "**Week 1, rules**: the list of companies and their currencies, what is shared and what is own, the transfer price, who sees what; with the manager and each company’s accountant. **Weeks 2 and 3, company and reference data**: the company dimension on every document, series, depots, accounts; the merge of customers and products from the old programs into one group reference, with proposed matching, dry run and refused lines. **Week 4, rights**: role per company, selector, group manager and accountant, audit log per company.",
        "**Week 5, inter-company**: mirrored transfer and sale between companies, intra-group balances, tracked lots. **Week 6, group view and exports**: board per company and for the group, intra-group excluded, currencies kept apart, export per accountant. **Week 7, switch-over**: one company first, with its sellers and its accountant, then the next ones; the old programs go read-only, not to the bin.",
      ], list: [
        "**What the manager sees**: the group and each company, per currency, intra-group excluded; transfers in progress; exports sent to each accountant.",
        "**What an employee can no longer do**: invoice in the wrong company, see a grid that is not theirs, deliver a sister company without a document.",
        "**What is measured**: per company, revenue, receivables, stock; for the group, the same excluding intra-group; exports done and accountants’ feedback.",
      ], faq: [
        { q: "Multi-company or multi-tenant, what is the difference?", a: "A multi-tenant SaaS isolates customers who must share nothing. A multi-company group wants to share, customers, products, people, and separate only what must be, numbers, accounts, depots, documents. The construction is different: a company dimension on documents, not a database per customer." },
        { q: "Why merge customers and products?", a: "Because a customer who exists three times has three balances, three phones and three histories, and a product in triplicate has three stocks and three prices. The merge is done once, in the second and third weeks, with a dry run; afterwards, it is no longer possible." },
        { q: "How do you avoid mixing invoice numbers?", a: "The series is carried by the document’s company, imposed by its record; a user does not choose it. Each company’s series and mentions are set with its accountant in the first week, before the first invoice." },
        { q: "What happens when one company sells to another?", a: "The application writes two mirrored sets of documents, sale at one, purchase at the other, with stock and lot tracked on both sides, and flags the intra-group balances. The transfer price is a rule written with the accountant; this guide does not say which to choose." },
        { q: "Can dinars and euros be added in the group view?", a: "No. The group view reads per currency; an equivalent at a frozen rate may be shown for reading, never added to real amounts, following the rule already set in the two-currency guide." },
        { q: "And each country’s tax rules?", a: "Outside this guide. What each company must show on its documents, declare and consolidate is settled with its accountant and counsel; the application prints and exports what was decided." },
        { q: "How long to set this up?", a: "Seven weeks in the typical calendar, the first without code and two for the company dimension and the merge of reference data. Two companies in the same country take less; three companies in two countries with two currencies take all seven." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The company is a dimension of every document, not another application: an invoice belongs to one company and one only." },
      { after: 2, text: "A transfer between two group companies is a sale at one and a purchase at the other; the application writes both sets as mirrors, and nobody retypes the second." },
    ],
    cta: { eyebrow: 'Send us your three customer files, we show the reference data they become', title: "Founder in France, family group or distributor: we build the company dimension, shared reference data, mirrored transfers and the group view that never adds two currencies", body: "A dry-run merge of your customers and products, the sharing rules written with your accountants, and a calendar in weeks. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Read next', items: [
      { href: L.saas, kind: '2027', name: 'Building a multi-tenant SaaS: isolation, shared database, plans' },
      { href: L.client, kind: '2027', name: 'One customer, not three: single customer file, phone as key' },
      { href: L.devises, kind: '2027', name: 'The customer in France pays in euros: two currencies, frozen rate' },
      { href: L.roles, kind: '2027', name: 'Roles, rights and audit log: who sees what, who changes what' },
    ] },
  },
  ar: {
    kind: 'متعدد الشركات · مجموعة · جالية · 2027', title: "«ثلاث شركات، مسيّر واحد، ثلاثة ملفات»: ما يُبنى في تطبيق سنة 2027 لمجموعة شركات، مراجع مشتركة، بيانات خاصة، تحويلات بين الشركات مرآةً، رؤية المجموعة",
    dek: "«لدينا شركة الجزائر، وشركة سطيف، والهيكل في باريس الذي يفوتر الزبائن في فرنسا. ثلاثة برامج، ثلاثة محاسبين، والزبون نفسه موجود ثلاث مرات. الجزائر تسلّم سطيف بلا فاتورة، والمسيّر يجمع الدينار واليورو في ملف، وفي كل نهاية شهر نعيد ثلاثة تصديرات يدوياً.» المجموعة في تطبيق واحد ليست ثلاث نسخ من البرنامج بل بناء: الشركة بُعداً في كل مستند؛ مراجع مشتركة، زبائن ومنتجات وأشخاص، توجد مرة واحدة للمجموعة برؤية وسعر لكل شركة؛ بيانات خاصة لا تختلط أبداً، ترقيم وحسابات ومستودعات وترويسة؛ تحويلات بين الشركات تُكتب مرآةً؛ ورؤية مجموعة تستبعد ما هو داخل المجموعة ولا تجمع عملتين أبداً.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['متعدد الشركات', 'مجموعة', 'مراجع مشتركة', 'بين الشركات', 'الجزائر 2027'],
    intro: [
      "**الجواب القصير.** **الشركة** بُعد إلزامي في كل مستند، فاتورة وحركة مخزون وتحصيل وأمر؛ والمستند يخص شركة واحدة لا غير، بعملتها ومستودعاتها وحساباتها البنكية و**سلاسل أرقامها**. و**المراجع** مشتركة: الزبون والمنتج والمورد والشخص يوجدون مرة واحدة للمجموعة، وقاعدة لكل شركة تقول من يراهم وبأي سعر وبأي ذمم وأي دور. و**الصلاحيات** حساب واحد لكل شخص ودور لكل شركة؛ وتغيير الشركة منتقٍ لا تسجيل دخول آخر. و**التحويل أو البيع بين شركتين** يكتب مجموعتي مستندات مرآة، بيع عند إحداهما وشراء عند الأخرى، بإجراء واحد، مع وسم الأرصدة داخل المجموعة. و**رؤية المجموعة** تقرأ لكل شركة وللمجموعة، وتستبعد ما هو داخل المجموعة، ولا تجمع عملتين أبداً، وتخرج تصديراً لكل محاسب من المصدر نفسه. وما يجب أن تُظهره كل شركة على مستنداتها وتصرّح به يُضبط مع محاسبها: التطبيق يطبعه ولا يقرره.",
      "هذا الدليل موجَّه إلى المؤسس المقيم في فرنسا الذي له هيكل هناك وشركة أو شركتان في الجزائر، وإلى المجموعة العائلية بشركة لكل ولاية، وإلى الموزّع الذي فصل الجملة عن التجزئة، وإلى المسيّر الذي يريد قراءة المجموعة عند 08:00 بلا ملف توحيد. وهو لا يعيد كيف يعزل SaaS زبائنه بعضهم عن بعض، الموصوف في [دليل SaaS متعدد المستأجرين](" + L.saas + "): هنا تريد الشركات أن تتشارك لا أن تتجاهل بعضها؛ ولا كيف يُدمج ملف زبائن أو كتالوج، الموصوفَين في [دليل الزبون الواحد](" + L.client + ") و[دليل بطاقة المنتج](" + L.catalogue + "). بل يصف ما يُضاف حين تعيش عدة شركات في التطبيق نفسه، ويمدّ [صفحتنا عن هندسة البرمجيات](" + L.service + "). ولا يتناول القواعد الضريبية ولا المحاسبية الخاصة بكل بلد: سعر التحويل والبيانات والتصريحات قرارات تُتخذ مع المحاسبين.",
    ],
    sections: [
      { heading: 'مجموعة واحدة، ثلاث شركات، تطبيق واحد', body: [
        "يُظهر الشكل ما هو مشترك وما يخص كل شركة. والحد الفاصل أهم قرار في الأسبوع الأول.",
      ], visual: 'modele', after: [
        "**مشترك في المجموعة.** **الزبائن**: بطاقة لكل زبون، الهاتف مفتاحاً وفق [دليل الزبون الواحد](" + L.client + ")، مرئية للجزائر أو لسطيف أو لكلتيهما، بذمم وسقف لكل شركة، لأن الدين للجزائر ليس الدين لسطيف، وفق [دليل ائتمان الزبائن](" + L.credit + "). **المنتجات**: كتالوج واحد، طراز ومتغيرات ودفعات، بسعر وتوفر لكل شركة، وصور تُكتب مرة واحدة. **الأشخاص**: حساب واحد لكل شخص ودور لكل شركة؛ المسيّر يرى الثلاث، وبائع سطيف لا يرى إلا سطيف.",
        "**خاص بكل شركة.** سلاسل الترقيم، واحدة لكل نوع مستند ولكل شركة، تفرضها بطاقة الشركة ويستحيل خلطها، وفق [دليل الطباعة](" + L.imprimer + ")؛ الحسابات البنكية؛ المستودعات ومخزونها وفق [دليل المخزون](" + L.stock + ")؛ شبكات الأسعار؛ ترويسة المستندات وبياناتها المضبوطة مع محاسب كل شركة، محاسب الجزائر ومحاسب سطيف ومحاسب باريس؛ التصديرات المحاسبية، واحد لكل مكتب كل شهر. والشركة الباريسية تحصّل باليورو وتتبع [دليل العملتين](" + L.devises + "). والشركات والأعداد والأرقام مثال مبني.",
      ] },
      { heading: 'تعدد الشركات، في خمس طبقات', body: [
        "المراجع المشتركة هي الطبقة المميزة: هي الأكثر توفيراً، وهي ما لا يُستدرك بعد فوات الأوان.",
      ], visual: 'couches', after: [
        "**الشركة.** عمود إلزامي في كل جدول مستندات، وقيد في قاعدة البيانات يرفض مستنداً بلا شركة أو يخلط شركتين في المستند نفسه؛ والعملة والمستودعات والحسابات وسلاسل الأرقام تحملها الشركة. **المراجع المشتركة.** زبائن ومنتجات وموردون وأشخاص: بطاقة واحدة للمجموعة، وجداول قواعد لكل شركة، رؤية وسعر وذمم ودور؛ وبطاقة الزبون لا تُنسخ بل تُرى. **الصلاحيات.** حساب واحد لكل شخص ودور لكل شركة وفق [دليل الأدوار](" + L.roles + ")؛ ومنتقي الشركة مقفَل لمن ليست له إلا واحدة؛ وسجل التدقيق يقول في أي شركة وقع كل إجراء.",
        "**بين الشركات.** التحويل أو البيع أو الخدمة بين شركتين في المجموعة يكتب مجموعتي مستندات مرآة مرة واحدة؛ وحسابات الزبون والمورد داخل المجموعة موسومة بذلك. **رؤية المجموعة.** لوحة لكل شركة وللمجموعة وفق [دليل لوحة القيادة](" + L.dashboard + ")؛ ما هو داخل المجموعة مستبعَد؛ والعملات لا تُجمع أبداً، بمكافئ بسعر مجمَّد للقراءة فقط؛ وتصدير لكل محاسب مؤرَّخ وقابل للإعادة وفق [دليل التكامل](" + L.integrer + "). وخوادم المجموعة وبياناتها تتبع [دليل الاستضافة](" + L.heberger + ")؛ وقد تفرض شركة في فرنسا أين تعيش بياناتها، وبُعد الشركة يتيح احترام ذلك.",
      ] },
      { heading: 'تحويل بين شركتين: مجموعتا مستندات، إجراء واحد', body: [
        "يتتبع الشكل 200 وحدة تنتقل من الجزائر إلى سطيف. ولا أحد يعيد كتابة فاتورة الشراء في الجانب الآخر.",
      ], visual: 'transfert', after: [
        "سطيف تنقصها 200 وحدة والجزائر لديها 640. ينشئ المسؤول **تحويلاً بين الشركتين** بسعر التحويل الذي كتبه المسيّر مع المحاسب. ويكتب التطبيق عند الجزائر وصل تسليم وفاتورة بيع إلى سطيف وخروج مخزون من الدفعة المعنية؛ وعند سطيف استلاماً وفاتورة شراء هي المرآة الدقيقة لفاتورة البيع، لا تُعاد كتابتها أبداً، ودخول مخزون من الدفعة نفسها وفق [دليل التتبع بالدفعة](" + L.lots + "). وتنطلق الشاحنة بوصل التسليم، وتستلم سطيف بالمسح، ويُسجَّل الفارق إن وُجد على الاستلام لا يُصحَّح بصمت.",
        "وفي المساء نفسه تسم **رؤية المجموعة** الزوج داخل المجموعة: ذمة الجزائر على سطيف ودين سطيف للجزائر يتعادلان، والبيع لا يُحسب في رقم أعمال المجموعة، لأن الرصيد بين شركتين في المجموعة، وفق التعريف الشائع للحسابات الموحَّدة، يُعوَّض بالرصيد المعاكس، والبيع الداخلي ليس بيعاً للمجموعة. والتصديران الشهريان، تصدير الجزائر وتصدير سطيف، يحمل كل منهما مستنداته. وأي سعر تحويل يُختار وما تصرّح به كل شركة سؤالان للمحاسب والمستشار؛ والأرقام والكميات والمبالغ مثال مبني.",
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        "كل سطر جملة سُمعت في مجموعة من شركتين أو ثلاث، والجواب بناء لا ملف رابع.",
      ], visual: 'situations', after: [
        "**الزبون موجود في ثلاثة برامج**: بطاقة مجموعة واحدة بالهاتف مفتاحاً، ورؤية وذمم لكل شركة. **سطيف تفوتر بأرقام الجزائر**: السلسلة تفرضها شركة المستند؛ والخطأ مستحيل لا ممنوع. **الجزائر تسلّم سطيف ولا أحد يفوتر**: التحويل بين الشركتين يكتب المستندات مرآةً، والمخزون والدفعة متتبَّعان في الجانبين.",
        "**المسيّر يجمع الدينار واليورو**: رؤية المجموعة تقرأ لكل عملة، والمكافئ بالسعر المجمَّد للقراءة فقط كما في [دليل العملتين](" + L.devises + "). **بائع سطيف يرى أسعار الجزائر**: دور وشبكة لكل شركة، منتقٍ مقفَل. **ثلاثة محاسبين، ثلاثة ملفات تُعاد**: تصدير لكل شركة من المصدر نفسه، مؤرَّخ وقابل للإعادة؛ ويقرأ المؤسس في فرنسا المجموعة في [دليل التسيير عن بعد](" + L.commerce + ").",
      ] },
      { heading: 'إضافة شركة إلى التطبيق، في ستة أوقات', body: [
        "بعد قيام البناء، تُضاف شركة جديدة في ستة أوقات، أحدها مع محاسبها.",
      ], visual: 'ajout', after: [
        "**إنشاء الشركة**: اسم، عملة، مستودعات، حسابات بنكية، شعار. **الترقيم والمستندات**: السلاسل لكل نوع مستند والترويسة والبيانات، تُضبط مع محاسب هذه الشركة؛ وهو الوقت المميز لأنه لا يُفعل وحيداً ولا يتغير بعد أول فاتورة. **الصلاحيات**: من يراها، من يبيع فيها، من يحصّل فيها، دور لكل شخص.",
        "**المراجع**: أي زبائن وأي منتجات تراها، وشبكات أسعارها. **الاستلام**: أرصدة افتتاحية لكل زبون، مخزون لكل مستودع، مستندات مفتوحة، بالتجربة على الفارغ نفسها التي في [دليل الاستيراد](" + L.excel + "). **أول تصدير**: شهر من المستندات إلى محاسبها ورده قبل فتح الشركة للبائعين. والشركة القادمة من برنامج قديم تتبع أيضاً [دليل الترحيل](" + L.migrer + ").",
      ] },
      { heading: 'الانتقال إلى تعدد الشركات سنة 2027، بالأسابيع', body: [
        "سبعة أسابيع، الأول بلا كود، واثنان لبُعد الشركة ودمج المراجع، لأن الزبون المثلَّث لا يُدمج بعد فوات الأوان.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، القواعد**: قائمة الشركات وعملاتها، ما هو مشترك وما هو خاص، سعر التحويل، من يرى ماذا؛ مع المسيّر ومحاسبي كل شركة. **الأسبوعان 2 و3، الشركة والمراجع**: بُعد الشركة في كل مستند، السلاسل، المستودعات، الحسابات؛ دمج زبائن ومنتجات البرامج القديمة في مرجع مجموعة واحد بمطابقة مقترحة وتجربة على الفارغ وأسطر مرفوضة. **الأسبوع 4، الصلاحيات**: دور لكل شركة، منتقٍ، مسيّر ومحاسب المجموعة، سجل تدقيق لكل شركة.",
        "**الأسبوع 5، بين الشركات**: تحويل وبيع بين الشركات مرآةً، أرصدة داخل المجموعة، دفعات متتبَّعة. **الأسبوع 6، رؤية المجموعة والتصديرات**: لوحة لكل شركة وللمجموعة، داخل المجموعة مستبعَد، عملات منفصلة، تصدير لكل محاسب. **الأسبوع 7، الانتقال**: شركة أولاً ببائعيها ومحاسبها، ثم التاليات؛ والبرامج القديمة تصير للقراءة فقط لا إلى سلة المهملات.",
      ], list: [
        "**ما يراه المسيّر**: المجموعة وكل شركة، لكل عملة، داخل المجموعة مستبعَد؛ التحويلات الجارية؛ التصديرات المرسَلة إلى كل محاسب.",
        "**ما لم يعد الموظف يستطيعه**: الفوترة في الشركة الخطأ، رؤية شبكة ليست شبكته، تسليم شركة شقيقة بلا مستند.",
        "**ما يُقاس**: لكل شركة، رقم الأعمال والذمم والمخزون؛ وللمجموعة الشيء نفسه عدا داخل المجموعة؛ التصديرات المنجزة وردود المحاسبين.",
      ], faq: [
        { q: "متعدد الشركات أم متعدد المستأجرين، ما الفرق؟", a: "SaaS متعدد المستأجرين يعزل زبائن لا يجب أن يتشاركوا شيئاً. والمجموعة متعددة الشركات تريد أن تتشارك، زبائن ومنتجات وأشخاصاً، ولا تفصل إلا ما يجب فصله، أرقاماً وحسابات ومستودعات ومستندات. والبناء مختلف: بُعد شركة في المستندات لا قاعدة بيانات لكل زبون." },
        { q: "لماذا دمج الزبائن والمنتجات؟", a: "لأن الزبون الموجود ثلاث مرات له ثلاث ذمم وثلاثة هواتف وثلاثة تواريخ، والمنتج المثلَّث له ثلاثة مخزونات وثلاثة أسعار. ويتم الدمج مرة واحدة في الأسبوعين الثاني والثالث بتجربة على الفارغ؛ وبعد ذلك لا يعود ممكناً." },
        { q: "كيف نتجنب خلط أرقام الفواتير؟", a: "السلسلة تحملها شركة المستند وتفرضها بطاقتها؛ والمستخدم لا يختارها. وسلاسل كل شركة وبياناتها تُضبط مع محاسبها في الأسبوع الأول قبل أول فاتورة." },
        { q: "ماذا يحدث حين تبيع شركة لأخرى؟", a: "يكتب التطبيق مجموعتي مستندات مرآة، بيع عند إحداهما وشراء عند الأخرى، بمخزون ودفعة متتبَّعين في الجانبين، ويسم الأرصدة داخل المجموعة. وسعر التحويل قاعدة تُكتب مع المحاسب؛ وهذا الدليل لا يقول أيها يُختار." },
        { q: "هل يمكن جمع الدينار واليورو في رؤية المجموعة؟", a: "لا. رؤية المجموعة تقرأ لكل عملة؛ ويمكن عرض مكافئ بسعر مجمَّد للقراءة، ولا يُجمع أبداً إلى المبالغ الحقيقية، وفق القاعدة الموضوعة أصلاً في دليل العملتين." },
        { q: "والقواعد الضريبية لكل بلد؟", a: "خارج هذا الدليل. ما يجب أن تُظهره كل شركة على مستنداتها وتصرّح به وتوحّده يُضبط مع محاسبها ومستشارها؛ والتطبيق يطبع ويصدّر ما تقرر." },
        { q: "كم من الوقت لإقامة ذلك؟", a: "سبعة أسابيع في التقويم النموذجي، الأول بلا كود واثنان لبُعد الشركة ودمج المراجع. وشركتان في البلد نفسه تأخذان أقل؛ وثلاث شركات في بلدين بعملتين تأخذ السبعة." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "الشركة بُعد في كل مستند لا تطبيق آخر: الفاتورة تخص شركة واحدة لا غير." },
      { after: 2, text: "التحويل بين شركتين في المجموعة بيع عند إحداهما وشراء عند الأخرى؛ ويكتب التطبيق المجموعتين مرآةً، ولا أحد يعيد كتابة الثانية." },
    ],
    cta: { eyebrow: 'أرسلوا لنا ملفات زبائنكم الثلاثة، نُريكم المرجع الذي تصير إليه', title: "مؤسس في فرنسا أو مجموعة عائلية أو موزّع: نبني بُعد الشركة، والمراجع المشتركة، والتحويلات المرآة، ورؤية المجموعة التي لا تجمع عملتين أبداً", body: "دمج على الفارغ لزبائنكم ومنتجاتكم، وقواعد المشاركة تُكتب مع محاسبيكم، وتقويم بالأسابيع. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.saas, kind: '2027', name: 'بناء SaaS متعدد المستأجرين: عزل، قاعدة مشتركة، خطط' },
      { href: L.client, kind: '2027', name: 'زبون واحد لا ثلاثة: ملف زبائن واحد، الهاتف مفتاحاً' },
      { href: L.devises, kind: '2027', name: 'الزبون في فرنسا يدفع باليورو: عملتان، سعر مجمَّد' },
      { href: L.roles, kind: '2027', name: 'الأدوار والصلاحيات وسجل التدقيق: من يرى ماذا، من يعدّل ماذا' },
    ] },
  },
};

const KEYWORDS = "application multi-sociétés algérie 2027, logiciel gestion groupe plusieurs sociétés une application, référentiels partagés clients produits par société, numérotation factures par société, transfert inter-sociétés documents en miroir, vente inter-sociétés facture achat automatique, vue groupe tableau de bord consolidé intra-groupe exclu, deux devises dinars euros groupe, société en france et en algérie une application, droits par société rôle sélecteur, export comptable par société, multi-société vs multi-tenant, développement application groupe de sociétés algérie, multi-company application algeria 2027 shared master data intercompany transfers group dashboard, تطبيق متعدد الشركات مجموعة مراجع مشتركة تحويلات بين الشركات الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
