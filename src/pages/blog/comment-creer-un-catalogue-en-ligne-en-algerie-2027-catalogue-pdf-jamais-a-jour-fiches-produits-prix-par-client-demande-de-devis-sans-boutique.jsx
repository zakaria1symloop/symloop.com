import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-creer-un-catalogue-en-ligne-en-algerie-2027-catalogue-pdf-jamais-a-jour-fiches-produits-prix-par-client-demande-de-devis-sans-boutique.mjs';

const SLUG = 'comment-creer-un-catalogue-en-ligne-en-algerie-2027-catalogue-pdf-jamais-a-jour-fiches-produits-prix-par-client-demande-de-devis-sans-boutique';
const FIGURES = ['couches', 'versions', 'fiche', 'demande', 'calendrier', 'gestes'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  ecommerce: '/blog/comment-creer-un-site-e-commerce-en-algerie-2027-paiement-a-la-livraison-livraison-par-wilaya-confirmation-retours-plateforme-ou-sur-mesure/',
  b2b: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  recherche: '/blog/recherche-dans-une-application-algerie-2027-catalogue-arabe-francais-darija-fautes-synonymes-classement-zero-resultat/',
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  lente: '/blog/application-lente-reseau-faible-algerie-2027-ce-qu-on-construit-pour-qu-elle-soit-rapide-poids-des-ecrans-cache-pagination-index-mesure/',
  importer: '/blog/importer-un-fichier-excel-chaque-semaine-sans-casser-application-algerie-2027-correspondance-validation-essai-a-blanc-retour-arriere/',
};

const CONTENT = {
  fr: {
    kind: 'Catalogue en ligne · Algérie · 2027', title: "Comment créer un catalogue en ligne en Algérie (2027) : votre PDF de 80 pages envoyé par WhatsApp est faux dès qu'un prix change, des fiches à jour, un prix par client, une demande de devis, sans ouvrir une boutique",
    dek: "« Notre catalogue est un PDF de 80 pages qu'on envoie par WhatsApp. Dès qu'un prix change ou qu'un produit est en rupture, il est faux ; les clients appellent pour demander si on a telle référence, et chaque commercial envoie sa propre version. Comment créer un catalogue en ligne, toujours à jour, sans pour autant ouvrir une boutique ? » Un catalogue en ligne n'est pas un PDF posé sur un site : c'est une base de produits, corrigée à un seul endroit, d'où sortent la page, le PDF et la demande de devis.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Catalogue en ligne', 'Catalogue de produits', 'Fiche produit', 'Prix par client', 'Demande de devis', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un catalogue en ligne, c'est **une seule base de produits**, corrigée à un seul endroit, d'où sortent la page web, le PDF généré à la demande et le lien que le commercial envoie. Chaque référence a **une fiche complète** : un code stable, un titre dans les mots du client en français et en arabe, deux ou trois photos au même cadrage, des attributs qui servent de filtres, une unité de vente, **une règle de prix** (public, par groupe de clients après connexion, ou sur demande) et **une disponibilité**. Le client cherche, filtre, compose **une liste** et envoie **une demande de devis** : pas de panier, pas de paiement. Commencez par les références qui font l'essentiel de vos ventes. Six semaines dans l'exemple.",
      "Ce guide s'adresse au grossiste, à l'importateur, au fabricant et au distributeur qui vendent à des professionnels et dont le catalogue circule en PDF ou en photos. Et au fondateur installé en France qui veut que ses clients en Algérie voient le prix du jour sans qu'il soit là pour répondre. Les définitions citées viennent de sources publiques : la gestion de l'information produit, l'unité de gestion de stock, le code article international, la recherche à facettes, le code QR, la demande de devis, le principe de Pareto, les données structurées. Le grossiste, ses quarante clients, ses six versions et ses références sont un exemple construit. Ce guide ne traite ni des prix du matériel ni des règles de droit.",
    ],
    sections: [
      { heading: "Un catalogue en ligne, en cinq couches", body: [
        "La couche accentuée est la base de produits.",
      ], visual: 'couches', after: [
        "**La base.** La gestion de l'information produit est le processus qui consiste à gérer toutes les informations nécessaires pour commercialiser et vendre des produits à travers des canaux de distribution. En clair : une fiche par référence, et un seul endroit où on la corrige. La page web, le PDF et le lien envoyé par le commercial ne sont que des sorties de cette base. **Ce que ce n'est pas.** Ni un PDF déposé sur un site, ni une boutique : il n'y a ni panier ni paiement. Si vous vendez au particulier avec livraison, c'est [le guide sur le site e-commerce](" + L.ecommerce + ") ; si vos détaillants doivent commander eux-mêmes, [le guide sur le portail de commande B2B](" + L.b2b + ").",
        "**D'où vient la base.** Le plus souvent d'un tableur ou du logiciel de gestion : références, désignations, prix. Elle s'importe, puis s'enrichit de ce que le logiciel ne contient pas, les photos, les attributs, le titre en arabe. L'import répété sans rien casser est décrit dans [le guide sur l'import d'un fichier Excel](" + L.importer + ") ; le branchement direct, dans [le guide sur l'intégration d'un logiciel existant](" + L.integrer + "). **Les sorties.** Un PDF reste utile, pour un salon ou un client qui le demande : il est fabriqué à la demande, daté, à partir de la base du jour.",
      ] },
      { heading: "Le PDF envoyé par WhatsApp : six versions en circulation", body: [
        "La figure compte qui détient quelle version, six mois après.",
      ], visual: 'versions', after: [
        "**Une photographie.** Un PDF est juste le jour de l'envoi. Dans l'exemple, six versions sont sorties en six mois, une par changement de prix, de stock ou de gamme ; sur quarante clients, neuf ont la version en cours. Les trente et un autres commandent sur un prix ou une référence qui a changé, et la correction se fait au téléphone, après coup. **Les versions des commerciaux.** Chacun garde la sienne, parfois annotée : le prix accordé à un client se retrouve chez un autre.",
        "**Ce que cela prend.** Le relevé est simple à faire chez vous : combien d'appels par jour pour « avez-vous telle référence » ou « c'est toujours ce prix » ? Combien de devis refaits parce que le prix du catalogue n'était plus le bon ? **Un seul lien.** Le catalogue en ligne ne supprime pas les changements de prix : il fait qu'un changement se voit partout au même moment, parce qu'il n'existe qu'un exemplaire.",
      ] },
      { heading: "Une fiche produit, champ par champ", body: [
        "La figure donne six champs, et ce que chacun permet.",
      ], visual: 'fiche', after: [
        "**La référence.** Un code unique et stable par article ; l'unité de gestion de stock est l'unité dans laquelle les stocks d'un article sont gérés, et c'est elle qui relie le catalogue au stock et à la facture. Si le produit porte un code-barres, on le saisit aussi : le code article international (GTIN) est un identifiant des articles commerciaux, développé par l'organisation GS1. **Le titre.** Dans les mots du client, pas dans ceux du fournisseur, en français et en arabe : c'est ce que la recherche lit, comme l'explique [le guide sur la recherche dans un catalogue](" + L.recherche + ").",
        "**Les attributs.** Trois à six par famille : calibre, dimension, matière, marque. Ils deviennent des filtres : la recherche à facettes complète la recherche par mots avec un système de navigation qui permet de restreindre les résultats en appliquant des filtres. **Les photos.** Deux ou trois, même fond, même cadrage, et légères : sur un réseau mobile, une page de catalogue lourde ne s'ouvre pas, voir [le guide sur l'application lente](" + L.lente + "). **Une fiche complète.** Définissez-la une fois, par exemple référence, titre en deux langues, une photo, trois attributs, unité, règle de prix, puis suivez le pourcentage de fiches complètes : c'est la mesure de l'avancement.",
      ] },
      { heading: "De la recherche à la demande de devis", body: [
        "La figure suit un client, de la recherche à la demande reçue par le commercial.",
      ], visual: 'demande', after: [
        "**Qui voit quel prix.** Trois modes, choisis famille par famille. Un prix public, visible de tous. Un prix par groupe de clients, visible après connexion : le revendeur voit son tarif, pas celui du voisin. Ou « prix sur demande », quand le prix dépend de la quantité ou du cours du jour. Rien n'oblige à tout afficher : on peut commencer sans prix public, avec la disponibilité seule. **La disponibilité.** Trois états suffisent : en stock, sur commande, arrêté. Un nombre exact n'est pas nécessaire, et il vieillit vite.",
        "**La liste.** Le client ajoute des références et des quantités à une liste, puis envoie une demande de devis ; une demande de devis est un processus par lequel une entreprise demande un prix à un fournisseur pour l'achat de produits ou de services précis. Le commercial reçoit des références et des quantités, pas un message vocal : il répond par un devis, selon le circuit décrit dans [le guide du devis à la facture](" + L.devis + "). **Le lien et le code QR.** Chaque fiche a son adresse, qui se partage dans une conversation ; le code QR, un code-barres à deux dimensions inventé en 1994 pour étiqueter des pièces automobiles, la met sur une étiquette, un emballage ou un stand.",
      ] },
      { heading: "Six semaines, du tri des références à l'ouverture, en 2027", body: [
        "Six semaines dans l'exemple, dont la première pour trier.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, le tri.** On ne met pas mille deux cents références en ligne d'un coup. Le principe de Pareto dit que, pour beaucoup de phénomènes, environ 80 % des effets viennent de 20 % des causes : vérifiez-le sur vos ventes de l'année, et commencez par les références qui font l'essentiel du chiffre. Dans l'exemple, 240 sur 1 200. **Semaines 2 à 4, les fiches et les photos**, en parallèle de la base, de la recherche et des filtres.",
        "**Semaines 3 à 5, les prix, la disponibilité, la liste et la demande de devis.** **Semaines 5 et 6, l'ouverture** : le lien est envoyé aux clients à la place du PDF, les codes QR sont posés, et les recherches sans résultat sont relues chaque semaine. Les références restantes entrent ensuite par familles. **Et Google.** Des fiches publiques peuvent porter des données structurées ; selon la documentation de Google, les informations d'un produit peuvent alors apparaître de façon plus riche dans les résultats de recherche. Cela ne vaut que pour ce que vous acceptez de rendre public.",
      ] },
      { heading: "Tenir le catalogue à jour : six gestes, et qui les fait", body: [
        "Le geste accentué est celui que le PDF ne permettait pas : corriger une fois.",
      ], visual: 'gestes', after: [
        "**Un responsable par geste.** Créer la fiche avant la première vente : les achats. Corriger un prix : celui qui le décide, une fois, à la source. Marquer la disponibilité : le magasin, ou le logiciel de stock s'il est branché. Photographier les nouveautés : une personne, un fond, un téléphone. **Sans responsable**, le catalogue en ligne vieillit comme le PDF, simplement moins visiblement.",
        "**Relire les recherches sans résultat.** Chaque semaine, la liste des mots tapés qui n'ont rien donné : un produit que vous avez sous un autre nom, ou un produit qu'on vous demande et que vous n'avez pas. **Retirer sans casser.** Une référence arrêtée garde sa page, marquée « arrêté », avec le produit qui la remplace : le lien envoyé il y a six mois doit encore mener quelque part. **Trois chiffres, chaque lundi** : le pourcentage de fiches complètes, les recherches sans résultat, et le nombre de demandes de devis venues du catalogue.",
      ], list: [
        "**Ce que le gérant reçoit** : une base de produits unique, des fiches complètes pour les références qui font les ventes, une recherche avec filtres en français et en arabe, des prix par groupe de clients, une demande de devis, un PDF généré à la demande, et trois chiffres chaque lundi.",
        "**Ce que l'entreprise ne fait plus** : renvoyer un PDF à chaque changement de prix, répondre dix fois par jour à « avez-vous telle référence », refaire un devis parce que le catalogue était périmé, laisser chaque commercial tenir sa version.",
        "**Ce qui est mesuré** : fiches complètes, recherches sans résultat, fiches les plus vues, demandes de devis venues du catalogue, références arrêtées encore consultées.",
        "**Ce que fait Symloop** : le tri des références, la structure des familles et des attributs, l'import depuis votre tableur ou votre logiciel, la recherche et les filtres, les règles de prix et la disponibilité, la liste et la demande de devis, le PDF généré, puis la mesure.",
      ], faq: [
        { q: "Comment créer un catalogue en ligne ?", a: "En partant d'une seule base de produits, importée de votre tableur ou de votre logiciel, puis enrichie : titre dans les mots du client, photos, attributs, unité de vente, règle de prix, disponibilité. On met d'abord en ligne les références qui font l'essentiel des ventes, avec une recherche, des filtres et une demande de devis." },
        { q: "Quelle différence entre un catalogue en ligne et une boutique en ligne ?", a: "La boutique encaisse et livre : panier, paiement, livraison, retours. Le catalogue montre, renseigne et reçoit des demandes de devis ; le commercial conclut. Pour vendre à des professionnels avec des prix négociés, le catalogue suffit souvent et s'ouvre plus vite." },
        { q: "Faut-il afficher les prix ?", a: "Pas forcément, et pas partout. Trois modes existent : prix public, prix par groupe de clients après connexion, prix sur demande. Le choix se fait famille par famille ; on peut commencer avec la disponibilité seule et ajouter les prix ensuite." },
        { q: "Peut-on garder un catalogue PDF ?", a: "Oui, mais fabriqué à la demande à partir de la base du jour, et daté. Il ne circule plus comme la référence : le lien du catalogue en ligne la remplace, et le PDF devient une sortie parmi d'autres." },
        { q: "Par quelles références commencer ?", a: "Par celles qui font l'essentiel de vos ventes : regardez le chiffre de l'année, référence par référence. Dans l'exemple de ce guide, 240 références sur 1 200. Les autres entrent ensuite, famille par famille." },
        { q: "Comment faire de bonnes photos de produits ?", a: "Un même fond clair, un même cadrage, une lumière régulière, deux ou trois vues par produit, et des fichiers légers. Un téléphone récent suffit si une seule personne applique toujours la même méthode." },
        { q: "Peut-on relier le catalogue à notre logiciel de stock ?", a: "Oui, si le logiciel expose ses données par une interface de programmation ou par des exports réguliers : les prix et la disponibilité se mettent alors à jour sans ressaisie. Cela se vérifie sur votre logiciel avant de promettre un délai." },
        { q: "Le catalogue doit-il être en arabe ?", a: "Les titres doivent exister dans les deux langues, parce que vos clients cherchent dans les deux, parfois dans la même phrase. La recherche doit aussi tolérer les fautes et les variantes d'écriture." },
        { q: "Un outil de catalogue gratuit suffit-il ?", a: "Pour quelques dizaines de références sans prix par client, un outil prêt à l'emploi peut suffire. Dès qu'il faut des prix par groupe de clients, une recherche en arabe, un lien avec le stock et une demande de devis qui arrive chez le bon commercial, c'est une construction." },
        { q: "Combien de temps faut-il ?", a: "Six semaines dans l'exemple de ce guide pour les premières références, de la base à l'ouverture. La durée dépend surtout de l'état de vos données et du nombre de photos à faire." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Un PDF est une photographie : il est juste le jour de l'envoi." },
      { after: 3, text: "Une liste, pas un panier : le catalogue apporte au commercial une demande déjà écrite." },
    ],
    cta: { eyebrow: "Dites-nous combien de références, dans quel fichier elles vivent, et à qui vous vendez : nous trions avec vous celles qui font les ventes, puis nous mettons ces fiches en ligne d'abord", title: "PDF de 80 pages faux dès qu'un prix change, clients qui appellent pour une référence, commerciaux qui envoient chacun leur version, ou fondateur en France dont les clients en Algérie veulent le prix du jour : nous construisons le catalogue en ligne, relié à votre base", body: "Tri des références, fiches et attributs, import, recherche et filtres en français et en arabe, prix par groupe de clients, disponibilité, liste et demande de devis, PDF généré, mesure. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.b2b, kind: '2027', name: 'Portail de commande B2B : les détaillants commandent eux-mêmes' },
      { href: L.recherche, kind: '2027', name: 'Recherche dans un catalogue : arabe, français, fautes, zéro résultat' },
      { href: L.devis, kind: '2027', name: 'Du devis à la facture sans ressaisie' },
      { href: L.ecommerce, kind: '2027', name: 'Créer un site e-commerce : paiement à la livraison, retours' },
    ] },
  },
  en: {
    kind: 'Online catalogue · Algeria · 2027', title: "How to build an online catalogue in Algeria (2027): your 80-page PDF sent on WhatsApp is wrong as soon as a price changes, sheets kept up to date, a price per customer, a quote request, without opening a shop",
    dek: "“Our catalogue is an 80-page PDF that we send on WhatsApp. As soon as a price changes or a product runs out, it is wrong; customers call to ask whether we have such-and-such a reference, and each sales rep sends their own version. How do we build an online catalogue, always up to date, without opening a shop?” An online catalogue is not a PDF placed on a site: it is a product base, corrected in one place, from which the page, the PDF and the quote request come out.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Online catalogue', 'Product catalogue', 'Product sheet', 'Price per customer', 'Quote request', 'Algeria 2027'],
    intro: [
      "**Short answer.** An online catalogue is **a single product base**, corrected in one place, from which the web page, the PDF generated on demand and the link the sales rep sends all come out. Each reference has **a complete sheet**: a stable code, a title in the customer's words in French and in Arabic, two or three photos with the same framing, attributes that serve as filters, a unit of sale, **a price rule** (public, per customer group after sign-in, or on request) and **an availability**. The customer searches, filters, builds **a list** and sends **a quote request**: no basket, no payment. Start with the references that make most of your sales. Six weeks in the example.",
      "This guide is for the wholesaler, the importer, the manufacturer and the distributor who sell to professionals and whose catalogue circulates as a PDF or as photos. And for the founder based in France who wants customers in Algeria to see today's price without having to be there to answer. The definitions quoted come from public sources: product information management, the stock keeping unit, the Global Trade Item Number, faceted search, the QR code, the request for quotation, the Pareto principle, structured data. The wholesaler, its forty customers, its six versions and its references are a constructed example. This guide covers neither hardware prices nor legal rules.",
    ],
    sections: [
      { heading: "An online catalogue, in five layers", body: [
        "The accented layer is the product base.",
      ], visual: 'couches', after: [
        "**The base.** Product information management is the process of managing all the information required to market and sell products through distribution channels. In plain terms: one sheet per reference, and one place only where it is corrected. The web page, the PDF and the link sent by the sales rep are just outputs of that base. **What it is not.** Neither a PDF placed on a site nor a shop: there is no basket and no payment. If you sell to individuals with delivery, see [the guide to the e-commerce site](" + L.ecommerce + "); if your retailers must place orders themselves, [the guide to the B2B ordering portal](" + L.b2b + ").",
        "**Where the base comes from.** Most often from a spreadsheet or the management software: references, descriptions, prices. It is imported, then enriched with what the software does not hold, the photos, the attributes, the title in Arabic. Importing repeatedly without breaking anything is described in [the guide to importing an Excel file](" + L.importer + "); the direct connection, in [the guide to integrating existing software](" + L.integrer + "). **The outputs.** A PDF is still useful, for a trade fair or a customer who asks for it: it is made on demand, dated, from today's base.",
      ] },
      { heading: "The PDF sent on WhatsApp: six versions in circulation", body: [
        "The figure counts who holds which version, six months later.",
      ], visual: 'versions', after: [
        "**A photograph.** A PDF is right on the day it is sent. In the example, six versions came out in six months, one per change of price, stock or range; of forty customers, nine have the current one. The other thirty-one order on a price or a reference that has changed, and the correction is made on the phone, afterwards. **The sales reps' versions.** Each keeps their own, sometimes annotated: the price granted to one customer ends up with another.",
        "**What it takes.** The count is easy to do at your place: how many calls a day for “do you have such-and-such a reference” or “is it still that price”? How many quotes redone because the catalogue price was no longer right? **A single link.** An online catalogue does not remove price changes: it makes a change visible everywhere at the same moment, because only one copy exists.",
      ] },
      { heading: "A product sheet, field by field", body: [
        "The figure gives six fields, and what each one allows.",
      ], visual: 'fiche', after: [
        "**The reference.** One unique, stable code per item; the stock keeping unit is the unit of measure in which the stocks of a material are managed, and it is what links the catalogue to stock and to the invoice. If the product carries a barcode, enter it too: the Global Trade Item Number (GTIN) is an identifier for trade items, developed by the international organization GS1. **The title.** In the customer's words, not the supplier's, in French and in Arabic: that is what the search reads, as explained in [the guide to search in a catalogue](" + L.recherche + ").",
        "**The attributes.** Three to six per family: rating, size, material, brand. They become filters: faceted search augments lexical search with a navigation system that lets users narrow results by applying filters. **The photos.** Two or three, same background, same framing, and light: on a mobile network, a heavy catalogue page does not open, see [the guide to the slow application](" + L.lente + "). **A complete sheet.** Define it once, for example reference, title in two languages, one photo, three attributes, unit, price rule, then follow the percentage of complete sheets: that is the measure of progress.",
      ] },
      { heading: "From the search to the quote request", body: [
        "The figure follows a customer, from the search to the request received by the sales rep.",
      ], visual: 'demande', after: [
        "**Who sees which price.** Three modes, chosen family by family. A public price, visible to all. A price per customer group, visible after sign-in: the reseller sees their own rate, not the neighbour's. Or “price on request”, when the price depends on the quantity or on the day's rate. Nothing obliges you to display everything: you can start with no public price, with availability alone. **Availability.** Three states are enough: in stock, on order, discontinued. An exact number is not necessary, and it ages fast.",
        "**The list.** The customer adds references and quantities to a list, then sends a quote request; a request for quotation is a business process in which a company requests a quote from a supplier for the purchase of specific products or services. The sales rep receives references and quantities, not a voice message: they reply with a quote, following the circuit described in [the guide from quote to invoice](" + L.devis + "). **The link and the QR code.** Each sheet has its own address, which can be shared in a conversation; the QR code, a two-dimensional barcode invented in 1994 for labelling automobile parts, puts it on a label, a package or a stand.",
      ] },
      { heading: "Six weeks, from sorting the references to opening, in 2027", body: [
        "Six weeks in the example, the first one to sort.",
      ], visual: 'calendrier', after: [
        "**Week 1, sorting.** You do not put twelve hundred references online in one go. The Pareto principle states that, for many outcomes, roughly 80% of consequences come from 20% of causes: check it on your sales for the year, and start with the references that make most of the turnover. In the example, 240 out of 1,200. **Weeks 2 to 4, sheets and photos**, alongside the base, the search and the filters.",
        "**Weeks 3 to 5, prices, availability, the list and the quote request.** **Weeks 5 and 6, opening**: the link is sent to customers in place of the PDF, the QR codes are put up, and searches with no result are reread every week. The remaining references then come in by family. **And Google.** Public sheets can carry structured data; according to Google's documentation, a product's information can then appear in richer ways in search results. That only applies to what you agree to make public.",
      ] },
      { heading: "Keeping the catalogue up to date: six actions, and who does them", body: [
        "The accented action is the one the PDF did not allow: correcting once.",
      ], visual: 'gestes', after: [
        "**One person in charge per action.** Creating the sheet before the first sale: purchasing. Correcting a price: whoever decides it, once, at the source. Marking availability: the warehouse, or the stock software if it is connected. Photographing new items: one person, one background, one phone. **With nobody in charge**, an online catalogue ages like the PDF, only less visibly.",
        "**Rereading searches with no result.** Every week, the list of words typed that returned nothing: a product you have under another name, or a product people ask for that you do not have. **Withdrawing without breaking.** A discontinued reference keeps its page, marked “discontinued”, with the product that replaces it: the link sent six months ago must still lead somewhere. **Three figures, every Monday**: the percentage of complete sheets, the searches with no result, and the number of quote requests that came from the catalogue.",
      ], list: [
        "**What the manager receives**: a single product base, complete sheets for the references that make the sales, a search with filters in French and in Arabic, prices per customer group, a quote request, a PDF generated on demand, and three figures every Monday.",
        "**What the company no longer does**: send a PDF again at every price change, answer “do you have such-and-such a reference” ten times a day, redo a quote because the catalogue was out of date, let each sales rep keep their own version.",
        "**What is measured**: complete sheets, searches with no result, most viewed sheets, quote requests from the catalogue, discontinued references still consulted.",
        "**What Symloop does**: sorting the references, the structure of families and attributes, the import from your spreadsheet or software, search and filters, price rules and availability, the list and the quote request, the generated PDF, then the measurement.",
      ], faq: [
        { q: "How do you build an online catalogue?", a: "By starting from a single product base, imported from your spreadsheet or software, then enriched: title in the customer's words, photos, attributes, unit of sale, price rule, availability. The references that make most of the sales go online first, with a search, filters and a quote request." },
        { q: "What is the difference between an online catalogue and an online shop?", a: "The shop takes payment and delivers: basket, payment, delivery, returns. The catalogue shows, informs and receives quote requests; the sales rep closes. To sell to professionals with negotiated prices, the catalogue is often enough and opens sooner." },
        { q: "Do prices have to be displayed?", a: "Not necessarily, and not everywhere. Three modes exist: public price, price per customer group after sign-in, price on request. The choice is made family by family; you can start with availability alone and add prices afterwards." },
        { q: "Can we keep a PDF catalogue?", a: "Yes, but made on demand from today's base, and dated. It no longer circulates as the reference: the link to the online catalogue replaces it, and the PDF becomes one output among others." },
        { q: "Which references should we start with?", a: "With those that make most of your sales: look at the year's turnover, reference by reference. In this guide's example, 240 references out of 1,200. The others come in afterwards, family by family." },
        { q: "How do you take good product photos?", a: "The same light background, the same framing, even lighting, two or three views per product, and light files. A recent phone is enough if one person always applies the same method." },
        { q: "Can the catalogue be linked to our stock software?", a: "Yes, if the software exposes its data through a programming interface or regular exports: prices and availability then update without retyping. This is checked on your software before promising a date." },
        { q: "Does the catalogue have to be in Arabic?", a: "Titles must exist in both languages, because your customers search in both, sometimes in the same sentence. The search must also tolerate spelling mistakes and variants." },
        { q: "Is a free catalogue tool enough?", a: "For a few dozen references with no price per customer, an off-the-shelf tool may be enough. As soon as you need prices per customer group, a search in Arabic, a link with stock and a quote request that reaches the right sales rep, it is something to be built." },
        { q: "How long does it take?", a: "Six weeks in this guide's example for the first references, from the base to opening. The duration depends mostly on the state of your data and on the number of photos to take." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A PDF is a photograph: it is right on the day it is sent." },
      { after: 3, text: "A list, not a basket: the catalogue brings the sales rep a request already written." },
    ],
    cta: { eyebrow: "Tell us how many references, in which file they live, and whom you sell to: we sort with you those that make the sales, then we put those sheets online first", title: "An 80-page PDF wrong as soon as a price changes, customers calling about a reference, sales reps each sending their own version, or a founder in France whose customers in Algeria want today's price: we build the online catalogue, connected to your base", body: "Sorting references, sheets and attributes, import, search and filters in French and in Arabic, prices per customer group, availability, list and quote request, generated PDF, measurement. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.b2b, kind: '2027', name: 'B2B ordering portal: retailers place their own orders' },
      { href: L.recherche, kind: '2027', name: 'Search in a catalogue: Arabic, French, typos, zero results' },
      { href: L.devis, kind: '2027', name: 'From quote to invoice without retyping' },
      { href: L.ecommerce, kind: '2027', name: 'Building an e-commerce site: cash on delivery, returns' },
    ] },
  },
  ar: {
    kind: 'الفهرس على الخط · الجزائر · 2027', title: "كيف يُنشأ فهرس على الخط في الجزائر (2027): ملفكم من 80 صفحة المرسَل عبر واتساب يصير خاطئاً حالما يتغيّر سعر، بطاقات محدَّثة، سعر لكل زبون، وطلب عرض سعر، دون فتح متجر",
    dek: "«فهرسنا ملف " + I('PDF') + " من 80 صفحة نرسله عبر " + I('WhatsApp') + ". حالما يتغيّر سعر أو ينفد منتوج، يصير خاطئاً؛ الزبائن يتصلون ليسألوا هل عندنا المرجع الفلاني، وكل مندوب يرسل نسخته. كيف ننشئ فهرساً على الخط، محدَّثاً دائماً، دون فتح متجر؟» الفهرس على الخط ليس ملفاً موضوعاً على موقع: هو قاعدة منتوجات، تُصحَّح في مكان واحد، ومنها تخرج الصفحة والملف وطلب عرض السعر.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['الفهرس على الخط', 'فهرس المنتوجات', 'بطاقة المنتوج', 'سعر لكل زبون', 'طلب عرض سعر', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** الفهرس على الخط هو **قاعدة منتوجات واحدة**، تُصحَّح في مكان واحد، ومنها تخرج صفحة الويب، الملف المولَّد عند الطلب، والرابط الذي يرسله المندوب. ولكل مرجع **بطاقة كاملة**: رمز ثابت، عنوان بكلمات الزبون بالفرنسية والعربية، صورتان أو ثلاث بالتأطير نفسه، خصائص تصلح للفرز، وحدة بيع، **قاعدة سعر** (علني، لكل مجموعة زبائن بعد الدخول، أو عند الطلب)، و**توفر**. الزبون يبحث، يفرز، يكوّن **قائمة**، ويرسل **طلب عرض سعر**: لا سلّة، ولا دفع. ابدؤوا بالمراجع التي تصنع أغلب مبيعاتكم. ستة أسابيع في المثال.",
      "هذا الدليل موجَّه إلى تاجر الجملة، المستورد، المصنّع، والموزّع الذين يبيعون لمهنيين وفهرسهم يتداول ملفاً أو صوراً. وإلى المؤسس المقيم في فرنسا الذي يريد أن يرى زبائنه في الجزائر سعر اليوم دون أن يكون حاضراً ليجيب. التعريفات المذكورة آتية من مصادر علنية: تسيير معلومات المنتوج، وحدة تسيير المخزون، الرقم العالمي للمادة التجارية، البحث بالأوجه، رمز الاستجابة السريعة، طلب عرض السعر، مبدأ باريتو، والبيانات المهيكلة. تاجر الجملة وزبائنه الأربعون ونسخه الست ومراجعه مثال مركَّب. هذا الدليل لا يتناول أسعار العتاد ولا القواعد القانونية.",
    ],
    sections: [
      { heading: "فهرس على الخط، في خمس طبقات", body: [
        "الطبقة المبرزة هي قاعدة المنتوجات.",
      ], visual: 'couches', after: [
        "**القاعدة.** تسيير معلومات المنتوج هو عملية تسيير كل المعلومات اللازمة لتسويق المنتوجات وبيعها عبر قنوات التوزيع. بعبارة واضحة: بطاقة لكل مرجع، ومكان واحد تُصحَّح فيه. وصفحة الويب والملف والرابط الذي يرسله المندوب ليست إلا مخارج لهذه القاعدة. **ما ليس هو.** لا ملف موضوع على موقع، ولا متجر: لا سلّة ولا دفع. إذا كنتم تبيعون للأفراد مع التوصيل، فهو [دليل موقع التجارة الإلكترونية](" + L.ecommerce + ")؛ وإذا كان على تجار التجزئة أن يطلبوا بأنفسهم، [دليل بوابة الطلبيات بين المؤسسات](" + L.b2b + ").",
        "**من أين تأتي القاعدة.** في الغالب من جدول أو من برنامج التسيير: المراجع، التسميات، والأسعار. تُستورَد، ثم تُثرى بما لا يحتويه البرنامج، الصور، الخصائص، والعنوان بالعربية. والاستيراد المتكرر دون كسر شيء موصوف في [دليل استيراد ملف جدول](" + L.importer + ")؛ والربط المباشر، في [دليل إدماج برنامج موجود](" + L.integrer + "). **المخارج.** الملف يبقى نافعاً، لمعرض أو لزبون يطلبه: يُصنع عند الطلب، مؤرَّخاً، من قاعدة اليوم.",
      ] },
      { heading: "الملف المرسَل عبر واتساب: ست نسخ متداولة", body: [
        "الشكل يعدّ من عنده أي نسخة، بعد ستة أشهر.",
      ], visual: 'versions', after: [
        "**صورة.** الملف صحيح يوم إرساله. في المثال، صدرت ست نسخ في ستة أشهر، واحدة عند كل تغيير في سعر أو مخزون أو تشكيلة؛ ومن أربعين زبوناً، تسعة عندهم النسخة الحالية. والواحد والثلاثون الآخرون يطلبون على سعر أو مرجع تغيّر، والتصحيح يتم في الهاتف، بعد فوات الأوان. **نسخ المندوبين.** كل واحد يحتفظ بنسخته، وأحياناً عليها ملاحظات: والسعر الممنوح لزبون يصل إلى آخر.",
        "**ما يأخذه ذلك.** العدّ سهل عندكم: كم مكالمة في اليوم من أجل «هل عندكم المرجع الفلاني» أو «هل ما زال هذا السعر»؟ وكم عرض سعر أُعيد لأن سعر الفهرس لم يعد صحيحاً؟ **رابط واحد.** الفهرس على الخط لا يلغي تغيّرات الأسعار: يجعل التغيير يُرى في كل مكان في اللحظة نفسها، لأنه لا توجد إلا نسخة واحدة.",
      ] },
      { heading: "بطاقة المنتوج، حقلاً بعد حقل", body: [
        "الشكل يعطي ستة حقول، وما يسمح به كل واحد.",
      ], visual: 'fiche', after: [
        "**المرجع.** رمز وحيد وثابت لكل مادة؛ ووحدة تسيير المخزون هي الوحدة التي يُسيَّر بها مخزون المادة، وهي التي تربط الفهرس بالمخزون والفاتورة. وإذا كان المنتوج يحمل رمزاً شريطياً، يُدخَل كذلك: الرقم العالمي للمادة التجارية " + I('GTIN') + " معرّف للمواد التجارية، طوّرته منظمة " + I('GS1') + ". **العنوان.** بكلمات الزبون، لا بكلمات المورّد، بالفرنسية والعربية: وهو ما يقرؤه البحث، كما يشرح [دليل البحث في فهرس](" + L.recherche + ").",
        "**الخصائص.** من ثلاث إلى ست لكل عائلة: العيار، المقاس، المادة، والعلامة. وتصير أدوات فرز: البحث بالأوجه يكمّل البحث بالكلمات بنظام تنقّل يسمح بتضييق النتائج بتطبيق أدوات فرز. **الصور.** اثنتان أو ثلاث، بالخلفية نفسها والتأطير نفسه، وخفيفة: على شبكة الهاتف، صفحة فهرس ثقيلة لا تُفتح، انظر [دليل التطبيق البطيء](" + L.lente + "). **بطاقة كاملة.** عرّفوها مرة واحدة، مثلاً مرجع، عنوان بلغتين، صورة، ثلاث خصائص، وحدة، وقاعدة سعر، ثم تابعوا نسبة البطاقات الكاملة: هي قياس التقدم.",
      ] },
      { heading: "من البحث إلى طلب عرض السعر", body: [
        "الشكل يتبع زبوناً، من البحث إلى الطلب الذي يستلمه المندوب.",
      ], visual: 'demande', after: [
        "**من يرى أي سعر.** ثلاثة أنماط، تُختار عائلة بعد عائلة. سعر علني، يراه الجميع. سعر لكل مجموعة زبائن، يُرى بعد الدخول: البائع يرى تعريفته، لا تعريفة جاره. أو «السعر عند الطلب»، حين يتوقف السعر على الكمية أو على سعر اليوم. ولا شيء يُلزم بعرض الكل: يمكن البدء دون سعر علني، بالتوفر وحده. **التوفر.** ثلاث حالات تكفي: متوفر، عند الطلب، أو موقوف. والعدد الدقيق ليس ضرورياً، ويشيخ بسرعة.",
        "**القائمة.** الزبون يضيف مراجع وكميات إلى قائمة، ثم يرسل طلب عرض سعر؛ وطلب عرض السعر عملية تطلب بها مؤسسة سعراً من مورّد لشراء منتوجات أو خدمات محدَّدة. المندوب يستلم مراجع وكميات، لا رسالة صوتية: ويجيب بعرض سعر، حسب المسار الموصوف في [دليل من عرض السعر إلى الفاتورة](" + L.devis + "). **الرابط ورمز الاستجابة.** لكل بطاقة عنوانها، يُتقاسم في محادثة؛ ورمز الاستجابة السريعة، وهو رمز شريطي ببعدين اختُرع سنة 1994 لوسم قطع السيارات، يضعه على ملصق، علبة، أو جناح معرض.",
      ] },
      { heading: "ستة أسابيع، من فرز المراجع إلى الفتح، سنة 2027", body: [
        "ستة أسابيع في المثال، والأول منها للفرز.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، الفرز.** لا توضع ألف ومئتا مرجع على الخط دفعة واحدة. مبدأ باريتو يقول إن، في كثير من الظواهر، نحو 80 بالمئة من النتائج تأتي من 20 بالمئة من الأسباب: تحققوا منه على مبيعات سنتكم، وابدؤوا بالمراجع التي تصنع أغلب رقم الأعمال. في المثال، 240 من 1200. **الأسابيع 2 إلى 4، البطاقات والصور**، بالتوازي مع القاعدة والبحث والفرز.",
        "**الأسابيع 3 إلى 5، الأسعار، التوفر، القائمة، وطلب عرض السعر.** **الأسبوعان 5 و6، الفتح**: الرابط يُرسَل للزبائن مكان الملف، رموز الاستجابة توضع، والبحث دون نتيجة يُراجَع كل أسبوع. والمراجع الباقية تدخل بعدها حسب العائلات. **وغوغل.** البطاقات العلنية يمكن أن تحمل بيانات مهيكلة؛ وحسب وثائق غوغل، معلومات المنتوج قد تظهر عندها بشكل أغنى في نتائج البحث. وهذا لا يخص إلا ما تقبلون جعله علنياً.",
      ] },
      { heading: "إبقاء الفهرس محدَّثاً: ستة أفعال، ومن ينجزها", body: [
        "الفعل المبرز هو الذي لم يكن الملف يسمح به: التصحيح مرة واحدة.",
      ], visual: 'gestes', after: [
        "**مسؤول لكل فعل.** إنشاء البطاقة قبل أول بيع: المشتريات. تصحيح سعر: من يقرّره، مرة واحدة، في المصدر. تأشير التوفر: المخزن، أو برنامج المخزون إن كان مربوطاً. تصوير الجديد: شخص واحد، خلفية واحدة، وهاتف. **ودون مسؤول**، الفهرس على الخط يشيخ مثل الملف، لكن بشكل أقل ظهوراً.",
        "**مراجعة البحث دون نتيجة.** كل أسبوع، قائمة الكلمات المكتوبة التي لم تعط شيئاً: منتوج عندكم باسم آخر، أو منتوج يُطلب منكم وليس عندكم. **السحب دون كسر.** المرجع الموقوف يحتفظ بصفحته، وعليها «موقوف»، مع المنتوج الذي يعوّضه: الرابط المرسَل قبل ستة أشهر يجب أن يقود إلى مكان ما. **ثلاثة أرقام، كل اثنين**: نسبة البطاقات الكاملة، البحث دون نتيجة، وعدد طلبات عرض السعر الآتية من الفهرس.",
      ], list: [
        "**ما يستلمه المسيّر**: قاعدة منتوجات واحدة، بطاقات كاملة للمراجع التي تصنع المبيعات، بحث وفرز بالفرنسية والعربية، أسعار لكل مجموعة زبائن، طلب عرض سعر، ملف يُولَّد عند الطلب، وثلاثة أرقام كل اثنين.",
        "**ما لم تعد المؤسسة تفعله**: إعادة إرسال ملف عند كل تغيير سعر، الجواب عشر مرات في اليوم عن «هل عندكم المرجع الفلاني»، إعادة عرض سعر لأن الفهرس كان منتهياً، وترك كل مندوب يمسك نسخته.",
        "**ما يُقاس**: البطاقات الكاملة، البحث دون نتيجة، البطاقات الأكثر مشاهدة، طلبات عرض السعر الآتية من الفهرس، والمراجع الموقوفة التي ما زالت تُشاهَد.",
        "**ما تفعله Symloop**: فرز المراجع، بنية العائلات والخصائص، الاستيراد من جدولكم أو برنامجكم، البحث والفرز، قواعد السعر والتوفر، القائمة وطلب عرض السعر، الملف المولَّد، ثم القياس.",
      ], faq: [
        { q: "كيف يُنشأ فهرس على الخط؟", a: "بالانطلاق من قاعدة منتوجات واحدة، مستورَدة من جدولكم أو برنامجكم، ثم مُثراة: عنوان بكلمات الزبون، صور، خصائص، وحدة بيع، قاعدة سعر، وتوفر. وتوضع على الخط أولاً المراجع التي تصنع أغلب المبيعات، مع بحث، فرز، وطلب عرض سعر." },
        { q: "ما الفرق بين فهرس على الخط ومتجر على الخط؟", a: "المتجر يقبض ويوصل: سلّة، دفع، توصيل، ومرتجعات. والفهرس يعرض، يُعلِم، ويستلم طلبات عرض السعر؛ والمندوب يُتمّ البيع. وللبيع لمهنيين بأسعار متفاوَض عليها، الفهرس يكفي غالباً ويُفتح أسرع." },
        { q: "هل يجب عرض الأسعار؟", a: "ليس بالضرورة، وليس في كل مكان. ثلاثة أنماط موجودة: سعر علني، سعر لكل مجموعة زبائن بعد الدخول، وسعر عند الطلب. والاختيار يتم عائلة بعد عائلة؛ ويمكن البدء بالتوفر وحده وإضافة الأسعار بعدها." },
        { q: "هل يمكن الاحتفاظ بفهرس في ملف؟", a: "نعم، لكن مصنوعاً عند الطلب من قاعدة اليوم، ومؤرَّخاً. ولم يعد يتداول كمرجع: رابط الفهرس على الخط يعوّضه، والملف يصير مخرجاً من بين مخارج أخرى." },
        { q: "بأي مراجع نبدأ؟", a: "بالتي تصنع أغلب مبيعاتكم: انظروا رقم أعمال السنة، مرجعاً بعد مرجع. في مثال هذا الدليل، 240 مرجعاً من 1200. والباقي يدخل بعدها، عائلة بعد عائلة." },
        { q: "كيف تؤخذ صور جيدة للمنتوجات؟", a: "خلفية فاتحة واحدة، تأطير واحد، إضاءة منتظمة، صورتان أو ثلاث لكل منتوج، وملفات خفيفة. وهاتف حديث يكفي إذا كان شخص واحد يطبّق دائماً الطريقة نفسها." },
        { q: "هل يمكن ربط الفهرس ببرنامج المخزون عندنا؟", a: "نعم، إذا كان البرنامج يعرض بياناته بواجهة برمجة أو بتصديرات منتظمة: فالأسعار والتوفر تتحدّث دون إعادة إدخال. ويُتحقَّق من ذلك على برنامجكم قبل الوعد بأجل." },
        { q: "هل يجب أن يكون الفهرس بالعربية؟", a: "العناوين يجب أن توجد باللغتين، لأن زبائنكم يبحثون بهما، وأحياناً في الجملة نفسها. والبحث يجب كذلك أن يتحمّل الأخطاء وتنوّع الكتابة." },
        { q: "هل تكفي أداة فهرس مجانية؟", a: "لبضع عشرات من المراجع دون سعر لكل زبون، أداة جاهزة قد تكفي. وحالما يلزم أسعار لكل مجموعة زبائن، بحث بالعربية، ربط بالمخزون، وطلب عرض سعر يصل إلى المندوب المناسب، فهو بناء." },
        { q: "كم يلزم من وقت؟", a: "ستة أسابيع في مثال هذا الدليل للمراجع الأولى، من القاعدة إلى الفتح. والمدة تتوقف خاصة على حالة بياناتكم وعدد الصور التي تُؤخذ." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الملف صورة: صحيح يوم إرساله." },
      { after: 3, text: "قائمة، لا سلّة: الفهرس يأتي المندوب بطلب مكتوب أصلاً." },
    ],
    cta: { eyebrow: "قولوا لنا كم مرجعاً، في أي ملف تعيش، ولمن تبيعون: نفرز معكم التي تصنع المبيعات، ثم نضع هذه البطاقات على الخط أولاً", title: "ملف من 80 صفحة يصير خاطئاً حالما يتغيّر سعر، زبائن يتصلون من أجل مرجع، مندوبون يرسل كل واحد نسخته، أو مؤسس في فرنسا يريد زبائنه في الجزائر سعر اليوم: نبني الفهرس على الخط، مربوطاً بقاعدتكم", body: "فرز المراجع، البطاقات والخصائص، الاستيراد، البحث والفرز بالفرنسية والعربية، أسعار لكل مجموعة زبائن، التوفر، القائمة وطلب عرض السعر، الملف المولَّد، والقياس. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.b2b, kind: '2027', name: 'بوابة الطلبيات بين المؤسسات: تجار التجزئة يطلبون بأنفسهم' },
      { href: L.recherche, kind: '2027', name: 'البحث في فهرس: عربية، فرنسية، أخطاء، وصفر نتيجة' },
      { href: L.devis, kind: '2027', name: 'من عرض السعر إلى الفاتورة دون إعادة إدخال' },
      { href: L.ecommerce, kind: '2027', name: 'إنشاء موقع تجارة إلكترونية: الدفع عند الاستلام، والمرتجعات' },
    ] },
  },
};

const KEYWORDS = "comment créer un catalogue en ligne 2027, catalogue en ligne algérie, comment créer un catalogue de produits, catalogue produits grossiste, catalogue pdf jamais à jour, catalogue en ligne sans boutique, demande de devis en ligne, prix par client catalogue, fiche produit, catalogue numérique importateur, how to create an online catalogue algeria 2027, online product catalogue for wholesalers, كيف أنشئ فهرساً على الخط 2027, فهرس المنتوجات على الخط, طلب عرض سعر على الخط";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
