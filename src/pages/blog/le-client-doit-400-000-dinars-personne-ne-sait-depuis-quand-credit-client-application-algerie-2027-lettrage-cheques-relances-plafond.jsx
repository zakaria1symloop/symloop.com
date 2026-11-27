import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond.mjs';

const SLUG = 'le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond';
const FIGURES = ['compte', 'retards', 'couches', 'etapes', 'situations', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  prevente: '/blog/prevente-commerciaux-terrain-distributeur-algerie-2027-application-tournee-commande-recouvrement/',
  b2b: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  caisse: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  jobs: '/blog/rapport-de-nuit-jamais-parti-taches-en-arriere-plan-application-algerie-2027-file-de-travaux-reprises-idempotence-planification-echecs/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  client: '/blog/un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion/',
  imprimer: '/blog/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation/',
  sav: '/blog/le-client-a-appele-trois-fois-reclamations-sav-application-algerie-2027-ticket-unique-priorite-delais-escalade-retours-avoirs-espace-client/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  agent: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Crédit client · Encours · Relances · 2027', title: "« Le client doit 400 000 dinars, et personne ne sait depuis quand » : ce qu'on construit dans une application en 2027 pour tenir le crédit client, compte par client, lettrage, chèques en attente, âge des retards, relances, plafond",
    dek: "« On vend à crédit, comme tout le monde. Le carnet dit que la supérette doit 400 000 dinars. Elle dit 250 000. Personne ne sait quelles factures, ni depuis quand, ni si le chèque de la semaine dernière est passé. Et le commercial vient de la livrer encore. » Le crédit client n'est pas un problème de confiance, c'est une construction : un compte par client où chaque pièce est une écriture, un lettrage qui affecte chaque encaissement à des factures précises, des chèques qui ont des états et ne valent rien avant l'encaissement, un âge qui se compte depuis l'échéance, une séquence de relance que le gérant écrit et que l'application exécute, un plafond comparé à l'exposition au moment de la commande, et une balance âgée que le comptable n'a plus à refaire.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Crédit client', 'Lettrage', 'Relances', 'Plafond de crédit', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Chaque client a un **compte** : une écriture par pièce, facture, avoir, encaissement, chèque, remise, et jamais un solde modifié à la main ; le solde est la somme. Chaque encaissement est **lettré**, c'est-à-dire affecté à des factures précises, et chaque facture connaît son **restant** ; un acompte reste non lettré jusqu'à la facture qu'il paiera. Un **chèque** a des états, reçu, remis, encaissé, rejeté ; il solde les factures sous réserve, et son rejet les rouvre. L'**âge** d'un retard se compte depuis l'**échéance** propre à chaque client, pas depuis la facture, en tranches, non échu, 1–30, 31–60, 61–90, plus de 90 jours. La **relance** est une séquence écrite par le gérant, rappel avant échéance, message à l'échéance, appel, blocage, remise au gérant, exécutée par l'application chaque nuit et arrêtée par un paiement ou un litige. Le **plafond** de crédit se compare à l'**exposition**, chèques en attente inclus, au moment où la commande est prise, et le dépassement bloque ou demande une approbation nommée. La **balance âgée** sort datée, et les écritures partent en comptabilité.",
      "Ce guide s'adresse au distributeur et au grossiste dont les détaillants paient à trente ou soixante jours, au commerçant qui tient un carnet de crédit pour ses habitués, au fondateur installé en France qui découvre l'encours de son entreprise en Algérie un mois après coup, et au gérant qui veut savoir à 8 h qui relancer et qui ne plus livrer. Il ne redit pas comment on prend une commande sur le terrain ni comment un détaillant commande seul, décrits dans [le guide sur la prévente](" + L.prevente + ") et [le guide sur la commande B2B](" + L.b2b + "), où le plafond et l'encours apparaissent comme des fonctions ; il décrit la construction qui les rend vrais, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + "). Il ne traite pas des règles fiscales ni des pénalités de retard : les délais et les conséquences sont ceux que l'entreprise décide, et le comptable dit comment les écritures doivent sortir.",
    ],
    sections: [
      { heading: 'Le compte d’un client : pièces, lettrage, solde et exposition', body: [
        "La figure suit un seul client, une quincaillerie, au 10 novembre. Tout ce que l'application sait de son crédit tient en deux colonnes et un lettrage.",
      ], visual: 'compte', after: [
        "Le **compte** est une suite d'écritures, une par pièce : trois factures avec leur échéance à trente jours, condition de ce client ; un encaissement en espèces avec reçu numéroté envoyé par SMS, selon [le guide sur l'encaissement](" + L.caisse + ") ; un avoir lié à une facture, émis par le service après-vente de [le guide sur les réclamations](" + L.sav + ") ; un chèque remis en banque. Personne ne modifie un solde : on ajoute une écriture, et le solde est la somme. **Le lettrage** affecte chaque encaissement à des factures précises : les espèces soldent une partie de la première facture ; le chèque solde le reste de la première et toute la deuxième, sous réserve d'encaissement ; l'avoir réduit la troisième. Chaque facture connaît son restant, et le relevé envoyé au client le dit par facture, pas en bloc.",
        "**Le solde comptable** est de 55 000 dinars. **L'exposition** est de 132 000 : le chèque remis n'est pas de l'argent tant que la banque ne l'a pas encaissé, et il est réintégré. **Le plafond** de 150 000, fixé par le gérant pour ce client, se compare à l'exposition : la commande du jour, 30 000, porterait l'exposition à 162 000, et la commande est bloquée ou soumise à l'approbation du chef des ventes, qui voit la raison et le montant manquant, selon les droits décrits dans [le guide sur les rôles et approbations](" + L.roles + "). Client, pièces et montants sont un exemple construit.",
      ] },
      { heading: 'Le tableau des retards : six clients, cinq tranches, un délai moyen', body: [
        "La figure montre ce que le gérant voit à 8 h : qui est en retard, de combien, depuis quand, et ce que l'application a déjà fait.",
      ], visual: 'retards', after: [
        "L'**âge** se calcule depuis l'échéance, pas depuis la facture : un client à trente jours n'est pas en retard le lendemain de la livraison, et un client au comptant l'est le lendemain. Les tranches, non échu, 1–30, 31–60, 61–90, plus de 90 jours, sont une convention courante ; le gérant peut en choisir d'autres, mais elles ne changent plus ensuite, pour que les semaines se comparent. Sous chaque nom, l'état de la relance que l'application exécute ou a exécutée : rappel avant échéance envoyé ce matin, appel prévu aujourd'hui pour le commercial, commandes bloquées, litige remis au gérant.",
        "La tuile calcule le **délai moyen de paiement**, l'encours divisé par les ventes à crédit par jour, selon la formule courante du DSO, encours divisé par ventes moyennes journalières : 9,64 millions d'encours pour 21,6 millions de ventes à crédit sur quatre-vingt-dix jours donnent environ quarante jours. Il est recalculé chaque nuit par les tâches de [le guide sur les tâches en arrière-plan](" + L.jobs + ") et affiché dans [le tableau de bord du gérant](" + L.dashboard + ") avec une seule définition, écrite, pour qu'il ne change pas de sens selon qui le lit. Clients et montants sont un exemple construit.",
      ] },
      { heading: 'Le crédit client, en cinq couches', body: [
        "Le lettrage est la couche accentuée : sans lui, on sait combien le client doit, pas depuis quand ni pour quoi.",
      ], visual: 'couches', after: [
        "**Compte client.** Une écriture par pièce, immuable ; une correction est une nouvelle écriture, avoir ou annulation, jamais une modification. Le client est celui du fichier unique de [le guide sur le client unique](" + L.client + "), parce qu'un encours réparti entre trois fiches du même client n'est pas un encours. **Lettrage.** Au comptoir, l'application propose l'affectation, les plus anciennes factures d'abord, et le caissier confirme ou choisit ; un acompte « pour le compte » reste non lettré, visible, et s'affecte à la facture suivante ; un trop-perçu devient un avoir. **Chèques et états.** Reçu, remis, encaissé, rejeté ; le lettrage est conditionnel jusqu'à l'encaissement, confirmé par le relevé de banque importé selon [le guide sur l'intégration](" + L.integrer + ") ; un rejet rouvre les factures, remet le client dans la séquence de relance et prévient le commercial.",
        "**Âge et relances.** Les tranches depuis l'échéance ; la séquence écrite par le gérant et exécutée chaque nuit, par les canaux de [le guide sur les notifications](" + L.notif + ") ; un paiement l'arrête, un litige la met en pause, et les exceptions, un gros client qu'on ne bloque pas, sont des décisions du gérant inscrites, pas des oublis. **Plafond et blocage.** Un plafond par client, parfois par groupe de clients ; comparé à l'exposition au moment de la commande, sur le terrain comme sur le portail ; le dépassement bloque ou demande une approbation nommée, et la commande garde la trace de qui a approuvé.",
      ] },
      { heading: 'La séquence de relance, en six temps', body: [
        "Les délais sont ceux d'une entreprise type ; le gérant les règle, et le code ne les connaît pas.",
      ], visual: 'etapes', after: [
        "**J-3, rappel** : WhatsApp ou SMS, avec le montant, l'échéance, les factures concernées grâce au lettrage, et un lien de paiement vers la page de [le guide sur le paiement en ligne](" + L.paiement + ") quand le client paie par carte. **J+1, échue** : la facture passe en retard, un message court part, et le commercial voit l'état sur sa tournée. **J+7, appel** : une tâche d'appel est créée pour le commercial, et le résultat est saisi comme une promesse datée ou un litige ; une promesse non datée n'existe pas, et une promesse non tenue relance la séquence.",
        "**J+15, blocage** : les nouvelles commandes sont bloquées ou soumises à approbation, et un relevé par facture est envoyé, imprimable selon [le guide sur l'impression](" + L.imprimer + "). **J+30, gérant** : le dossier est remis au gérant avec le relevé, les promesses et les échanges. **Paiement ou litige** : la séquence s'arrête d'elle-même au paiement, et un litige la met en pause jusqu'à sa résolution ; rien ne dépend de la mémoire d'un employé. Un agent de relance construit comme dans [le guide sur l'agent WhatsApp](" + L.agent + ") peut tenir les deux premiers temps, jamais le blocage ni la remise au gérant.",
      ] },
      { heading: 'Six situations réelles, et ce que l’application fait', body: [
        "Chaque ligne est une phrase entendue chez un distributeur, un grossiste ou un commerçant, et la réponse est une construction, pas une consigne.",
      ], visual: 'situations', after: [
        "**Le client doit 400 000 et conteste** : le relevé liste chaque facture avec son restant et chaque encaissement avec son affectation ; on ne négocie plus un forfait, on regarde une liste. **Le chèque est revenu impayé** : les factures qu'il soldait sous réserve se rouvrent, la relance repart, et le commercial est prévenu avant sa prochaine visite. **Le commercial livre un client bloqué** : l'exposition est comparée au plafond au moment de la commande, sur le terrain comme sur le portail, et le dépassement demande une approbation nommée, selon [le guide sur la prévente](" + L.prevente + ").",
        "**Le client paie un acompte « pour le compte »** : l'encaissement non lettré est visible comme tel et s'affecte à la facture suivante ; le solde ne ment pas. **Trois clients relancés deux fois, dix jamais** : la séquence est écrite et exécutée la nuit, et les exceptions sont des décisions du gérant, inscrites. **Le comptable redemande l'encours** : la balance âgée sort datée, exportée, et les écritures partent en comptabilité par [le guide sur l'intégration](" + L.integrer + ") ; le fondateur en France la lit dans [le guide sur la gestion à distance](" + L.commerce + ").",
      ] },
      { heading: 'Tenir le crédit client en 2027, en semaines', body: [
        "Sept semaines, la première sans code, et deux pour le compte et le lettrage, parce que tout le reste en dépend.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles** : avec le gérant et le comptable, les conditions par client, les plafonds, la séquence de relance et ses délais, qui approuve un dépassement, et comment les écritures doivent sortir. **Semaines 2 et 3, compte et lettrage** : écritures par pièce, affectation proposée et confirmée, restant par facture, relevé bilingue. **Semaine 4, chèques** : états, lettrage conditionnel, rejet qui rouvre et relance. **Semaine 5, reprise** : soldes d'ouverture par client, pièces ouvertes, encaissements non lettrés à affecter, avec le même essai à blanc que pour tout import.",
        "**Semaine 6, relances et plafond** : séquence exécutée la nuit, tâches d'appel, blocage à la commande, approbations. **Semaine 7, mesure** : délai moyen, encours par tranche, promesses tenues, export comptable, revue du lundi. Les prix et conditions par client viennent du moteur de [le guide sur le devis et la facture](" + L.devis + ") ; ce guide n'ajoute que ce qui se passe après la facture.",
      ], list: [
        "**Ce que le gérant voit** : à 8 h, qui est en retard, de combien, depuis quand, ce que l'application a déjà fait, et les dossiers remis à lui.",
        "**Ce que le commercial ne peut plus faire** : livrer au-delà du plafond sans approbation, encaisser sans reçu, promettre sans date.",
        "**Ce qui est mesuré** : délai moyen de paiement, encours par tranche, promesses tenues, chèques rejetés, commandes bloquées et approuvées.",
      ], faq: [
        { q: "Pourquoi lettrer ? Le solde ne suffit pas ?", a: "Un solde dit combien, pas depuis quand ni pour quoi. Sans lettrage, aucune relance ne peut dire quelle facture elle réclame, aucune contestation ne peut se régler sur une liste, et l'âge des retards est faux. Le lettrage affecte chaque encaissement à des factures précises, et chaque facture connaît son restant." },
        { q: "Comment traiter les chèques ?", a: "Comme des pièces à états : reçu, remis, encaissé, rejeté. Un chèque solde les factures sous réserve, compte dans l'exposition tant qu'il n'est pas encaissé, et son rejet rouvre les factures et relance la séquence. L'encaissement est confirmé par le relevé de banque importé." },
        { q: "Qui fixe les délais de relance et les plafonds ?", a: "Le gérant, la première semaine, avec le comptable, client par client ou par groupe de clients. L'application les exécute ; elle ne les connaît pas dans son code, et ils se changent sans développement. Ce guide ne traite pas des pénalités de retard ni des règles fiscales." },
        { q: "Et l'acompte « pour le compte » ?", a: "Il reste un encaissement non lettré, visible comme tel, jusqu'à la facture qu'il paiera ; il réduit l'exposition mais pas le restant d'une facture précise. Un trop-perçu devient un avoir lié au client." },
        { q: "Comment calcule-t-on le délai moyen de paiement ?", a: "Par la formule courante du DSO : l'encours divisé par les ventes à crédit moyennes par jour, sur une période écrite, quatre-vingt-dix jours dans l'exemple. Il est recalculé chaque nuit avec une seule définition pour toute l'entreprise." },
        { q: "Peut-on reprendre l'encours actuel ?", a: "Oui, par soldes d'ouverture par client, pièces ouvertes et encaissements non lettrés à affecter, avec un essai à blanc et des lignes refusées remontées au gérant. C'est la cinquième semaine du calendrier type." },
        { q: "Combien de temps pour mettre ça en place ?", a: "Sept semaines dans le calendrier type, la première sans code et deux pour le compte et le lettrage. Un commerçant avec quelques dizaines de clients à crédit prend moins ; un distributeur avec des centaines de détaillants, des chèques et des commerciaux prend les sept." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Un chèque remis n'est pas de l'argent : il solde la facture sous réserve, compte dans l'exposition, et son rejet la rouvre." },
      { after: 3, text: "La relance est une séquence écrite par le gérant et exécutée par l'application, arrêtée par un paiement ou un litige, jamais par l'oubli." },
    ],
    cta: { eyebrow: 'Envoyez-nous votre carnet de crédit, nous montrons la balance âgée qu’il devient', title: "Distributeur, grossiste, commerçant ou fondateur en France : nous construisons le compte client, le lettrage, les chèques à états, la séquence de relance et le plafond comparé à l'exposition", body: "Un relevé par facture sur vos propres pièces, la séquence de relance écrite avec vous, et un calendrier en semaines. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.prevente, kind: '2027', name: 'Prévente et commerciaux terrain : tournée, commande, recouvrement' },
      { href: L.b2b, kind: '2027', name: 'Portail de commande B2B : prix, crédit, heure limite' },
      { href: L.devis, kind: '2027', name: 'Du devis à la facture : moteur de prix, remises, versions' },
      { href: L.caisse, kind: '2027', name: 'Caisse et encaissement : QR, carte, TPE, rapprochement' },
    ] },
  },
  en: {
    kind: 'Customer credit · Receivables · Reminders · 2027', title: "“The customer owes 400,000 dinars, and nobody knows since when”: what gets built in an application in 2027 to hold customer credit, account per customer, allocation, pending cheques, age of overdues, reminders, limit",
    dek: "“We sell on credit, like everyone. The notebook says the minimarket owes 400,000 dinars. They say 250,000. Nobody knows which invoices, nor since when, nor whether last week’s cheque cleared. And the rep just delivered them again.” Customer credit is not a matter of trust, it is a construction: an account per customer where every document is an entry, an allocation that assigns every receipt to specific invoices, cheques that have states and are worth nothing before clearing, an age counted from the due date, a reminder sequence the manager writes and the application runs, a limit compared with exposure at order time, and an ageing report the accountant no longer has to rebuild.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Customer credit', 'Allocation', 'Reminders', 'Credit limit', 'Algeria 2027'],
    intro: [
      "**Short answer.** Every customer has an **account**: one entry per document, invoice, credit note, receipt, cheque, discount, and never a balance edited by hand; the balance is the sum. Every receipt is **allocated**, that is, assigned to specific invoices, and every invoice knows its **remaining** amount; a deposit stays unallocated until the invoice it will pay. A **cheque** has states, received, deposited, cleared, bounced; it settles invoices conditionally, and a bounce reopens them. The **age** of an overdue is counted from each customer’s own **due date**, not from the invoice, in buckets, not due, 1–30, 31–60, 61–90, over 90 days. The **reminder** is a sequence written by the manager, pre-due reminder, message at due date, call, block, handover to the manager, run by the application every night and stopped by a payment or a dispute. The credit **limit** is compared with **exposure**, pending cheques included, at the moment the order is taken, and an overrun blocks or requires a named approval. The **ageing report** comes out dated, and the entries go to accounting.",
      "This guide is for the distributor and the wholesaler whose retailers pay at thirty or sixty days, the shopkeeper who keeps a credit notebook for regulars, the founder based in France who discovers their Algerian company’s receivables a month after the fact, and the manager who wants to know at 8:00 whom to chase and whom to stop delivering. It does not repeat how an order is taken in the field or how a retailer orders alone, described in [the pre-sales guide](" + L.prevente + ") and [the B2B ordering guide](" + L.b2b + "), where limit and receivables appear as features; it describes the construction that makes them true, and it extends [our software engineering page](" + L.service + "). It does not cover tax rules or late-payment penalties: delays and consequences are what the company decides, and the accountant says how entries must come out.",
    ],
    sections: [
      { heading: 'One customer’s account: documents, allocation, balance and exposure', body: [
        "The figure follows a single customer, a hardware store, on 10 November. Everything the application knows about their credit fits in two columns and an allocation.",
      ], visual: 'compte', after: [
        "The **account** is a series of entries, one per document: three invoices with their thirty-day due dates, this customer’s terms; a cash receipt with a numbered receipt sent by SMS, following [the checkout guide](" + L.caisse + "); a credit note linked to an invoice, issued by the after-sales flow of [the complaints guide](" + L.sav + "); a cheque deposited at the bank. Nobody edits a balance: an entry is added, and the balance is the sum. **Allocation** assigns every receipt to specific invoices: the cash settles part of the first invoice; the cheque settles the rest of the first and all of the second, subject to clearing; the credit note reduces the third. Every invoice knows its remaining amount, and the statement sent to the customer says so per invoice, not as a lump.",
        "**The book balance** is 55,000 dinars. **Exposure** is 132,000: a deposited cheque is not money until the bank has cleared it, and it is added back. **The limit** of 150,000, set by the manager for this customer, is compared with exposure: today’s order, 30,000, would take exposure to 162,000, and the order is blocked or sent to the sales manager for approval, who sees the reason and the missing amount, under the rights described in [the roles and approvals guide](" + L.roles + "). Customer, documents and amounts are a constructed example.",
      ] },
      { heading: 'The overdue board: six customers, five buckets, one average time', body: [
        "The figure shows what the manager sees at 8:00: who is late, by how much, since when, and what the application has already done.",
      ], visual: 'retards', after: [
        "**Age** is computed from the due date, not the invoice date: a thirty-day customer is not late the day after delivery, and a cash customer is. The buckets, not due, 1–30, 31–60, 61–90, over 90 days, are a common convention; the manager may choose others, but they no longer change afterwards, so that weeks compare. Under each name, the state of the reminder the application runs or has run: pre-due reminder sent this morning, call planned today for the rep, orders blocked, dispute handed to the manager.",
        "The tile computes the **average collection time**, receivables divided by credit sales per day, following the common DSO formula, receivables divided by average daily sales: 9.64 million of receivables against 21.6 million of credit sales over ninety days give about forty days. It is recomputed every night by the jobs of [the background jobs guide](" + L.jobs + ") and shown in [the manager’s dashboard](" + L.dashboard + ") with a single written definition, so that it does not change meaning depending on who reads it. Customers and amounts are a constructed example.",
      ] },
      { heading: 'Customer credit, in five layers', body: [
        "Allocation is the accented layer: without it, you know how much the customer owes, not since when nor for what.",
      ], visual: 'couches', after: [
        "**Customer account.** One entry per document, immutable; a correction is a new entry, credit note or reversal, never an edit. The customer is the one from the single file of [the single customer guide](" + L.client + "), because receivables split across three records of the same customer are not receivables. **Allocation.** At the counter, the application proposes the assignment, oldest invoices first, and the cashier confirms or chooses; a deposit “on account” stays unallocated, visible, and is assigned to the next invoice; an overpayment becomes a credit note. **Cheques and states.** Received, deposited, cleared, bounced; allocation is conditional until clearing, confirmed by the bank statement imported following [the integration guide](" + L.integrer + "); a bounce reopens invoices, puts the customer back in the reminder sequence and warns the rep.",
        "**Age and reminders.** Buckets from the due date; the sequence written by the manager and run every night, through the channels of [the notifications guide](" + L.notif + "); a payment stops it, a dispute pauses it, and exceptions, a big customer who is not blocked, are recorded decisions of the manager, not oversights. **Limit and blocking.** A limit per customer, sometimes per customer group; compared with exposure at order time, in the field as on the portal; an overrun blocks or requires a named approval, and the order keeps the trace of who approved.",
      ] },
      { heading: 'The reminder sequence, in six beats', body: [
        "The delays are those of a typical company; the manager sets them, and the code does not know them.",
      ], visual: 'etapes', after: [
        "**D-3, reminder**: WhatsApp or SMS, with the amount, the due date, the invoices concerned thanks to allocation, and a payment link to the page of [the online payment guide](" + L.paiement + ") when the customer pays by card. **D+1, overdue**: the invoice is marked late, a short message goes out, and the rep sees the state on their round. **D+7, call**: a call task is created for the rep, and the outcome is entered as a dated promise or a dispute; an undated promise does not exist, and a broken promise restarts the sequence.",
        "**D+15, block**: new orders are blocked or sent for approval, and a per-invoice statement is sent, printable following [the printing guide](" + L.imprimer + "). **D+30, manager**: the file is handed to the manager with the statement, the promises and the exchanges. **Payment or dispute**: the sequence stops by itself on payment, and a dispute pauses it until resolved; nothing depends on an employee’s memory. A collections agent built as in [the WhatsApp agent guide](" + L.agent + ") can hold the first two beats, never the block nor the handover to the manager.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "Every row is a sentence heard at a distributor, a wholesaler or a shop, and the answer is a construction, not an instruction.",
      ], visual: 'situations', after: [
        "**The customer owes 400,000 and disputes it**: the statement lists every invoice with its remaining amount and every receipt with its assignment; no lump sum is negotiated, a list is read. **The cheque bounced**: the invoices it settled conditionally reopen, the reminder restarts, and the rep is warned before their next visit. **The rep delivers a blocked customer**: exposure is compared with the limit at order time, in the field as on the portal, and the overrun requires a named approval, following [the pre-sales guide](" + L.prevente + ").",
        "**The customer pays a deposit “on account”**: the unallocated receipt is visible as such and is assigned to the next invoice; the balance does not lie. **Three customers chased twice, ten never**: the sequence is written and run at night, and exceptions are recorded decisions of the manager. **The accountant asks for receivables again**: the ageing report comes out dated, exported, and entries go to accounting through [the integration guide](" + L.integrer + "); the founder in France reads it in [the remote management guide](" + L.commerce + ").",
      ] },
      { heading: 'Holding customer credit in 2027, in weeks', body: [
        "Seven weeks, the first without code, and two for the account and allocation, because everything else depends on them.",
      ], visual: 'calendrier', after: [
        "**Week 1, rules**: with the manager and the accountant, terms per customer, limits, the reminder sequence and its delays, who approves an overrun, and how entries must come out. **Weeks 2 and 3, account and allocation**: entries per document, proposed and confirmed assignment, remaining per invoice, bilingual statement. **Week 4, cheques**: states, conditional allocation, bounce that reopens and reminds. **Week 5, take-over**: opening balances per customer, open documents, unallocated receipts to assign, with the same dry run as any import.",
        "**Week 6, reminders and limit**: sequence run at night, call tasks, blocking at order, approvals. **Week 7, measurement**: average collection time, receivables per bucket, promises kept, accounting export, Monday review. Prices and terms per customer come from the engine of [the quote and invoice guide](" + L.devis + "); this guide only adds what happens after the invoice.",
      ], list: [
        "**What the manager sees**: at 8:00, who is late, by how much, since when, what the application has already done, and the files handed to them.",
        "**What the rep can no longer do**: deliver beyond the limit without approval, collect without a receipt, promise without a date.",
        "**What is measured**: average collection time, receivables per bucket, promises kept, bounced cheques, orders blocked and approved.",
      ], faq: [
        { q: "Why allocate? Is the balance not enough?", a: "A balance says how much, not since when nor for what. Without allocation, no reminder can say which invoice it is claiming, no dispute can be settled on a list, and the age of overdues is wrong. Allocation assigns every receipt to specific invoices, and every invoice knows its remaining amount." },
        { q: "How are cheques handled?", a: "As documents with states: received, deposited, cleared, bounced. A cheque settles invoices conditionally, counts in exposure until cleared, and a bounce reopens the invoices and restarts the sequence. Clearing is confirmed by the imported bank statement." },
        { q: "Who sets reminder delays and limits?", a: "The manager, in the first week, with the accountant, per customer or per customer group. The application runs them; it does not know them in its code, and they change without development. This guide does not cover late-payment penalties or tax rules." },
        { q: "And the deposit “on account”?", a: "It stays an unallocated receipt, visible as such, until the invoice it will pay; it reduces exposure but not the remaining amount of a specific invoice. An overpayment becomes a credit note linked to the customer." },
        { q: "How is the average collection time computed?", a: "With the common DSO formula: receivables divided by average credit sales per day, over a written period, ninety days in the example. It is recomputed every night with a single definition for the whole company." },
        { q: "Can current receivables be taken over?", a: "Yes, through opening balances per customer, open documents and unallocated receipts to assign, with a dry run and refused lines raised to the manager. It is the fifth week of the typical calendar." },
        { q: "How long to set this up?", a: "Seven weeks in the typical calendar, the first without code and two for the account and allocation. A shopkeeper with a few dozen credit customers takes less; a distributor with hundreds of retailers, cheques and reps takes all seven." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "A deposited cheque is not money: it settles the invoice conditionally, counts in exposure, and a bounce reopens it." },
      { after: 3, text: "The reminder is a sequence written by the manager and run by the application, stopped by a payment or a dispute, never by forgetting." },
    ],
    cta: { eyebrow: 'Send us your credit notebook, we show the ageing report it becomes', title: "Distributor, wholesaler, shopkeeper or founder in France: we build the customer account, allocation, cheques with states, the reminder sequence and the limit compared with exposure", body: "A per-invoice statement on your own documents, the reminder sequence written with you, and a calendar in weeks. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Read next', items: [
      { href: L.prevente, kind: '2027', name: 'Pre-sales and field reps: round, order, collections' },
      { href: L.b2b, kind: '2027', name: 'B2B ordering portal: prices, credit, cut-off time' },
      { href: L.devis, kind: '2027', name: 'From quote to invoice: pricing engine, discounts, versions' },
      { href: L.caisse, kind: '2027', name: 'Checkout and collection: QR, card, terminal, reconciliation' },
    ] },
  },
  ar: {
    kind: 'ائتمان الزبائن · ذمم · تذكيرات · 2027', title: "«الزبون مدين بـ 400,000 دينار، ولا أحد يعرف منذ متى»: ما يُبنى في تطبيق سنة 2027 لضبط ائتمان الزبائن، حساب لكل زبون، تسوية، شيكات معلّقة، عمر التأخيرات، تذكيرات، سقف",
    dek: "«نبيع بالأجل كالجميع. الدفتر يقول إن السوبيرات مدينة بـ 400,000 دينار. وهي تقول 250,000. لا أحد يعرف أي فواتير، ولا منذ متى، ولا إن كان شيك الأسبوع الماضي قد مرّ. والمندوب سلّمها للتو من جديد.» ائتمان الزبائن ليس مسألة ثقة بل بناء: حساب لكل زبون كل مستند فيه قيد، تسوية تخصص كل تحصيل لفواتير محددة، شيكات لها حالات ولا تساوي شيئاً قبل التحصيل، عمر يُحسب من الاستحقاق، تسلسل تذكير يكتبه المسيّر وينفذه التطبيق، سقف يُقارَن بالتعرّض لحظة الطلب، وميزان أعمار لم يعد المحاسب مضطراً إلى إعادة صنعه.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['ائتمان الزبائن', 'تسوية', 'تذكيرات', 'سقف الائتمان', 'الجزائر 2027'],
    intro: [
      "**الجواب القصير.** لكل زبون **حساب**: قيد لكل مستند، فاتورة وإشعار دائن وتحصيل وشيك وخصم، ولا رصيد يُعدَّل يدوياً أبداً؛ فالرصيد هو المجموع. وكل تحصيل **يُسوّى**، أي يُخصص لفواتير محددة، وكل فاتورة تعرف **متبقيها**؛ والعربون يبقى غير مسوّى حتى الفاتورة التي سيدفعها. و**للشيك** حالات، مستلَم ومودَع ومحصَّل ومرفوض؛ يسدّد الفواتير رهن التحصيل، ورفضه يعيد فتحها. و**عمر** التأخير يُحسب من **استحقاق** كل زبون لا من الفاتورة، بشرائح، غير مستحق، 1–30، 31–60، 61–90، أكثر من 90 يوماً. و**التذكير** تسلسل يكتبه المسيّر، تذكير قبل الاستحقاق، رسالة عند الاستحقاق، مكالمة، حجب، إحالة إلى المسيّر، ينفذه التطبيق كل ليلة ويوقفه دفع أو نزاع. و**سقف** الائتمان يُقارَن **بالتعرّض**، بما فيه الشيكات المعلّقة، لحظة أخذ الطلبية، والتجاوز يحجب أو يتطلب موافقة مسمّاة. و**ميزان الأعمار** يخرج مؤرَّخاً، والقيود تذهب إلى المحاسبة.",
      "هذا الدليل موجَّه إلى الموزّع وتاجر الجملة الذي يدفع تجار تجزئته بأجل ثلاثين أو ستين يوماً، وإلى التاجر الذي يمسك دفتر أجل لزبائنه المعتادين، وإلى المؤسس المقيم في فرنسا الذي يكتشف ذمم شركته في الجزائر بعد شهر، وإلى المسيّر الذي يريد أن يعرف عند 08:00 من يذكّر ومن لا يسلّمه بعد. وهو لا يعيد كيف تُؤخذ طلبية في الميدان ولا كيف يطلب تاجر التجزئة بنفسه، الموصوفين في [دليل البيع المسبق](" + L.prevente + ") و[دليل الطلب بين الشركات](" + L.b2b + ") حيث يظهر السقف والذمم وظيفتين؛ بل يصف البناء الذي يجعلهما حقيقيين، ويمدّ [صفحتنا عن هندسة البرمجيات](" + L.service + "). ولا يتناول القواعد الضريبية ولا غرامات التأخير: فالآجال والعواقب ما تقرره الشركة، والمحاسب يقول كيف يجب أن تخرج القيود.",
    ],
    sections: [
      { heading: 'حساب زبون واحد: مستندات، تسوية، رصيد وتعرّض', body: [
        "يتتبع الشكل زبوناً واحداً، محل أدوات، في 10 نوفمبر. وكل ما يعرفه التطبيق عن ائتمانه يسعه عمودان وتسوية.",
      ], visual: 'compte', after: [
        "**الحساب** سلسلة قيود، قيد لكل مستند: ثلاث فواتير بآجالها ثلاثين يوماً، شرط هذا الزبون؛ تحصيل نقدي بوصل مرقَّم يُرسل بـ SMS وفق [دليل التحصيل](" + L.caisse + ")؛ إشعار دائن مرتبط بفاتورة يصدره مسار ما بعد البيع من [دليل الشكاوى](" + L.sav + ")؛ شيك مودَع في البنك. ولا أحد يعدّل رصيداً: يُضاف قيد، والرصيد هو المجموع. و**التسوية** تخصص كل تحصيل لفواتير محددة: النقد يسدّد جزءاً من الفاتورة الأولى؛ والشيك يسدّد باقي الأولى وكل الثانية رهن التحصيل؛ والإشعار الدائن يخفض الثالثة. وكل فاتورة تعرف متبقيها، والكشف المرسَل إلى الزبون يقول ذلك لكل فاتورة لا جملةً.",
        "**الرصيد الدفتري** 55,000 دينار. و**التعرّض** 132,000: الشيك المودَع ليس مالاً ما لم يحصّله البنك، فيُعاد إدراجه. و**السقف** 150,000 الذي حدده المسيّر لهذا الزبون يُقارَن بالتعرّض: طلبية اليوم، 30,000، ترفع التعرّض إلى 162,000، فتُحجب أو تُرفع لموافقة رئيس المبيعات الذي يرى السبب والمبلغ الناقص، وفق الصلاحيات الموصوفة في [دليل الأدوار والموافقات](" + L.roles + "). والزبون والمستندات والمبالغ مثال مبني.",
      ] },
      { heading: 'لوحة التأخيرات: ستة زبائن، خمس شرائح، متوسط واحد', body: [
        "يُظهر الشكل ما يراه المسيّر عند 08:00: من متأخر، وبكم، ومنذ متى، وما فعله التطبيق أصلاً.",
      ], visual: 'retards', after: [
        "يُحسب **العمر** من تاريخ الاستحقاق لا من تاريخ الفاتورة: زبون بأجل ثلاثين يوماً ليس متأخراً غداة التسليم، وزبون نقدي متأخر. والشرائح، غير مستحق، 1–30، 31–60، 61–90، أكثر من 90 يوماً، عرف شائع؛ وللمسيّر أن يختار غيرها، لكنها لا تتغير بعد ذلك كي تُقارَن الأسابيع. وتحت كل اسم حالة التذكير الذي ينفذه التطبيق أو نفذه: تذكير قبل الاستحقاق أُرسل هذا الصباح، مكالمة مقررة اليوم للمندوب، طلبيات محجوبة، نزاع مُحال إلى المسيّر.",
        "والبطاقة تحسب **متوسط مدة التحصيل**، الذمم مقسومة على مبيعات الائتمان اليومية، وفق صيغة DSO الشائعة، الذمم على متوسط المبيعات اليومية: 9.64 مليون ذمم مقابل 21.6 مليون مبيعات بالأجل على تسعين يوماً تعطي نحو أربعين يوماً. ويُعاد حسابه كل ليلة بمهام [دليل مهام الخلفية](" + L.jobs + ") ويُعرض في [لوحة المسيّر](" + L.dashboard + ") بتعريف واحد مكتوب كي لا يتغير معناه بحسب قارئه. والزبائن والمبالغ مثال مبني.",
      ] },
      { heading: 'ائتمان الزبائن، في خمس طبقات', body: [
        "التسوية هي الطبقة المميزة: بدونها نعرف كم يدين الزبون، لا منذ متى ولا عن ماذا.",
      ], visual: 'couches', after: [
        "**حساب الزبون.** قيد لكل مستند، ثابت؛ والتصحيح قيد جديد، إشعار دائن أو إلغاء، لا تعديل أبداً. والزبون هو زبون الملف الواحد من [دليل الزبون الواحد](" + L.client + ")، لأن ذمماً موزعة على ثلاث بطاقات للزبون نفسه ليست ذمماً. **التسوية.** عند الشباك يقترح التطبيق التخصيص، الفواتير الأقدم أولاً، ويؤكد أمين الصندوق أو يختار؛ والعربون «على الحساب» يبقى غير مسوّى مرئياً ويُخصص للفاتورة التالية؛ والزيادة تصير إشعاراً دائناً. **الشيكات وحالاتها.** مستلَم، مودَع، محصَّل، مرفوض؛ والتسوية مشروطة حتى التحصيل الذي يؤكده كشف البنك المستورَد وفق [دليل التكامل](" + L.integrer + ")؛ والرفض يعيد فتح الفواتير ويعيد الزبون إلى تسلسل التذكير وينبّه المندوب.",
        "**العمر والتذكيرات.** الشرائح من الاستحقاق؛ والتسلسل يكتبه المسيّر ويُنفَّذ كل ليلة عبر قنوات [دليل الإشعارات](" + L.notif + ")؛ يوقفه الدفع ويعلّقه النزاع، والاستثناءات، زبون كبير لا يُحجب، قرارات مسجَّلة للمسيّر لا سهو. **السقف والحجب.** سقف لكل زبون، وأحياناً لكل مجموعة زبائن؛ يُقارَن بالتعرّض لحظة الطلب، في الميدان كما على البوابة؛ والتجاوز يحجب أو يتطلب موافقة مسمّاة، وتحتفظ الطلبية بأثر من وافق.",
      ] },
      { heading: 'تسلسل التذكير، في ستة أوقات', body: [
        "الآجال آجال شركة نموذجية؛ المسيّر يحددها، والكود لا يعرفها.",
      ], visual: 'etapes', after: [
        "**ي-3، تذكير**: WhatsApp أو SMS، بالمبلغ والأجل والفواتير المعنية بفضل التسوية، ورابط دفع إلى صفحة [دليل الدفع الإلكتروني](" + L.paiement + ") حين يدفع الزبون بالبطاقة. **ي+1، مستحقة**: تصير الفاتورة متأخرة، وتخرج رسالة قصيرة، ويرى المندوب الحالة في جولته. **ي+7، مكالمة**: تُنشأ مهمة اتصال للمندوب وتُدخَل النتيجة وعداً مؤرَّخاً أو نزاعاً؛ فالوعد بلا تاريخ لا وجود له، والوعد غير الموفّى يعيد التسلسل.",
        "**ي+15، حجب**: الطلبيات الجديدة محجوبة أو للموافقة، ويُرسل كشف لكل فاتورة قابل للطباعة وفق [دليل الطباعة](" + L.imprimer + "). **ي+30، المسيّر**: يُحال الملف إلى المسيّر مع الكشف والوعود والمراسلات. **دفع أو نزاع**: يتوقف التسلسل من تلقاء نفسه عند الدفع، ويعلّقه النزاع حتى حلّه؛ ولا شيء يتوقف على ذاكرة موظف. ووكيل تحصيل مبني كما في [دليل وكيل WhatsApp](" + L.agent + ") يستطيع تولّي الوقتين الأولين، لا الحجب ولا الإحالة إلى المسيّر أبداً.",
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        "كل سطر جملة سُمعت عند موزّع أو تاجر جملة أو تاجر، والجواب بناء لا تعليمة.",
      ], visual: 'situations', after: [
        "**الزبون مدين بـ 400,000 ويعترض**: الكشف يسرد كل فاتورة بمتبقيها وكل تحصيل بتخصيصه؛ لا يُتفاوض على مبلغ جزافي بل تُقرأ قائمة. **الشيك عاد مرفوضاً**: الفواتير التي سدّدها رهن التحصيل تُفتح من جديد، ويعود التذكير، ويُنبَّه المندوب قبل زيارته التالية. **المندوب يسلّم زبوناً محجوباً**: يُقارَن التعرّض بالسقف لحظة الطلب، في الميدان كما على البوابة، والتجاوز يتطلب موافقة مسمّاة وفق [دليل البيع المسبق](" + L.prevente + ").",
        "**الزبون يدفع عربوناً «على الحساب»**: التحصيل غير المسوّى مرئي بصفته تلك ويُخصص للفاتورة التالية؛ والرصيد لا يكذب. **ثلاثة زبائن ذُكّروا مرتين، عشرة أبداً**: التسلسل مكتوب ويُنفَّذ ليلاً، والاستثناءات قرارات مسجَّلة للمسيّر. **المحاسب يطلب الذمم من جديد**: ميزان الأعمار يخرج مؤرَّخاً مُصدَّراً، والقيود تذهب إلى المحاسبة عبر [دليل التكامل](" + L.integrer + ")؛ ويقرؤه المؤسس في فرنسا في [دليل التسيير عن بعد](" + L.commerce + ").",
      ] },
      { heading: 'ضبط ائتمان الزبائن سنة 2027، بالأسابيع', body: [
        "سبعة أسابيع، الأول بلا كود، واثنان للحساب والتسوية لأن كل ما عداهما يتوقف عليهما.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، القواعد**: مع المسيّر والمحاسب، شروط كل زبون، السقوف، تسلسل التذكير وآجاله، من يوافق على التجاوز، وكيف يجب أن تخرج القيود. **الأسبوعان 2 و3، الحساب والتسوية**: قيود لكل مستند، تخصيص مقترح ومؤكَّد، متبقٍّ لكل فاتورة، كشف ثنائي اللغة. **الأسبوع 4، الشيكات**: حالات، تسوية مشروطة، رفض يعيد الفتح ويذكّر. **الأسبوع 5، الاستلام**: أرصدة افتتاحية لكل زبون، مستندات مفتوحة، تحصيلات غير مسوّاة للتخصيص، بالتجربة على الفارغ نفسها لكل استيراد.",
        "**الأسبوع 6، التذكيرات والسقف**: تسلسل يُنفَّذ ليلاً، مهام اتصال، حجب عند الطلب، موافقات. **الأسبوع 7، القياس**: متوسط التحصيل، ذمم لكل شريحة، وعود موفّى بها، تصدير محاسبي، مراجعة الاثنين. والأسعار والشروط لكل زبون تأتي من محرك [دليل عرض السعر والفاتورة](" + L.devis + ")؛ وهذا الدليل لا يضيف إلا ما يحدث بعد الفاتورة.",
      ], list: [
        "**ما يراه المسيّر**: عند 08:00، من متأخر وبكم ومنذ متى، وما فعله التطبيق أصلاً، والملفات المُحالة إليه.",
        "**ما لم يعد المندوب يستطيعه**: التسليم فوق السقف بلا موافقة، التحصيل بلا وصل، الوعد بلا تاريخ.",
        "**ما يُقاس**: متوسط مدة التحصيل، ذمم لكل شريحة، وعود موفّى بها، شيكات مرفوضة، طلبيات محجوبة وموافَق عليها.",
      ], faq: [
        { q: "لماذا التسوية؟ ألا يكفي الرصيد؟", a: "الرصيد يقول كم، لا منذ متى ولا عن ماذا. بلا تسوية لا يستطيع تذكير أن يقول أي فاتورة يطالب بها، ولا يُحل اعتراض على قائمة، وعمر التأخيرات خاطئ. التسوية تخصص كل تحصيل لفواتير محددة، وكل فاتورة تعرف متبقيها." },
        { q: "كيف تُعالَج الشيكات؟", a: "كمستندات ذات حالات: مستلَم، مودَع، محصَّل، مرفوض. الشيك يسدّد الفواتير رهن التحصيل، ويُحسب في التعرّض حتى يُحصَّل، ورفضه يعيد فتح الفواتير ويعيد التسلسل. ويؤكد التحصيلَ كشفُ البنك المستورَد." },
        { q: "من يحدد آجال التذكير والسقوف؟", a: "المسيّر، في الأسبوع الأول، مع المحاسب، لكل زبون أو مجموعة زبائن. والتطبيق ينفذها؛ لا يعرفها في كوده، وتتغير بلا تطوير. ولا يتناول هذا الدليل غرامات التأخير ولا القواعد الضريبية." },
        { q: "والعربون «على الحساب»؟", a: "يبقى تحصيلاً غير مسوّى مرئياً بصفته تلك حتى الفاتورة التي سيدفعها؛ يخفض التعرّض لا متبقي فاتورة محددة. والزيادة تصير إشعاراً دائناً مرتبطاً بالزبون." },
        { q: "كيف يُحسب متوسط مدة التحصيل؟", a: "بصيغة DSO الشائعة: الذمم مقسومة على متوسط مبيعات الائتمان اليومية على فترة مكتوبة، تسعين يوماً في المثال. ويُعاد حسابه كل ليلة بتعريف واحد للشركة كلها." },
        { q: "هل يمكن استلام الذمم الحالية؟", a: "نعم، بأرصدة افتتاحية لكل زبون ومستندات مفتوحة وتحصيلات غير مسوّاة للتخصيص، بتجربة على الفارغ وأسطر مرفوضة تُرفع إلى المسيّر. وهو الأسبوع الخامس في التقويم النموذجي." },
        { q: "كم من الوقت لإقامة ذلك؟", a: "سبعة أسابيع في التقويم النموذجي، الأول بلا كود واثنان للحساب والتسوية. تاجر بعشرات الزبائن بالأجل يأخذ أقل؛ وموزّع بمئات تجار التجزئة وشيكات ومندوبين يأخذ السبعة." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "الشيك المودَع ليس مالاً: يسدّد الفاتورة رهن التحصيل، ويُحسب في التعرّض، ورفضه يعيد فتحها." },
      { after: 3, text: "التذكير تسلسل يكتبه المسيّر وينفذه التطبيق، يوقفه دفع أو نزاع، لا النسيان أبداً." },
    ],
    cta: { eyebrow: 'أرسلوا لنا دفتر الأجل، نُريكم ميزان الأعمار الذي يصير إليه', title: "موزّع أو تاجر جملة أو تاجر أو مؤسس في فرنسا: نبني حساب الزبون، والتسوية، والشيكات ذات الحالات، وتسلسل التذكير، والسقف المقارَن بالتعرّض", body: "كشف لكل فاتورة على مستنداتكم أنتم، وتسلسل تذكير يُكتب معكم، وتقويم بالأسابيع. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.prevente, kind: '2027', name: 'البيع المسبق والمندوبون الميدانيون: جولة، طلبية، تحصيل' },
      { href: L.b2b, kind: '2027', name: 'بوابة الطلب بين الشركات: أسعار، ائتمان، وقت حدّ' },
      { href: L.devis, kind: '2027', name: 'من عرض السعر إلى الفاتورة: محرك الأسعار، خصومات، نسخ' },
      { href: L.caisse, kind: '2027', name: 'الصندوق والتحصيل: QR، بطاقة، جهاز دفع، مطابقة' },
    ] },
  },
};

const KEYWORDS = "crédit client application algérie 2027, encours clients application, lettrage des encaissements factures, balance âgée application, relance impayés whatsapp automatique, plafond de crédit client blocage commande, chèque remis non encaissé application, suivi des créances clients grossiste algérie, délai moyen de paiement dso calcul, recouvrement clients détaillants application, développement application gestion crédit client algérie, accounts receivable app algeria 2027 allocation ageing reminders credit limit, ائتمان الزبائن تسوية ميزان أعمار تذكير تطبيق الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
