import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/nom-de-domaine-hebergement-site-web-entreprise-algerie-2027-qui-possede-quoi-domaine-expire-ancien-prestataire-reprendre-la-main.mjs';

const SLUG = 'nom-de-domaine-hebergement-site-web-entreprise-algerie-2027-qui-possede-quoi-domaine-expire-ancien-prestataire-reprendre-la-main';
const FIGURES = ['chaine', 'echeance', 'reprise', 'comptes', 'couches', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  messagerie: '/blog/messagerie-professionnelle-entreprise-algerie-2027-nom-de-domaine-boites-spf-dkim-dmarc-depart-employe-microsoft-365/',
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  sauvegardes: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  infogerance: '/blog/infogerance-maintenance-informatique-entreprise-algerie-2027-contrat-delais-inventaire-supervision-rapport-mensuel/',
  piratage: '/blog/piratage-entreprise-algerie-2027-boite-mail-piratee-faux-rib-fournisseur-que-faire-premiere-heure-double-verification-regles-de-transfert/',
};

const CONTENT = {
  fr: {
    kind: 'Nom de domaine et hébergement · Algérie · 2027', title: "Nom de domaine et hébergement de site web en Algérie (2027) : qui possède quoi, et que faire quand le domaine expire ou que l'ancien prestataire a gardé les accès",
    dek: "« Notre site est tombé un lundi matin, et les mails avec. Le nom de domaine avait expiré : c'est l'agence qui avait fait le site, il y a six ans, qui l'avait acheté à son nom, avec sa propre adresse. Elle ne répond plus. Nous n'avons ni le compte ni les codes, nous ne savons pas où le site est hébergé, et nous ne savons pas si un .dz aurait changé quelque chose. Comment reprendre la main, et ne plus jamais dépendre de quelqu'un ? » Derrière un site et des mails, il y a quatre comptes : le nom, la zone DNS, l'hébergement, la messagerie. Le premier commande les trois autres. Il doit être au nom de l'entreprise, renouvelé automatiquement, avec une adresse de contact qui ne dépend pas de lui.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Nom de domaine', 'Hébergement de site web', 'Bureau d’enregistrement', 'Zone DNS', 'Renouvellement et transfert', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un site et des mails reposent sur quatre comptes : le **nom de domaine**, chez un bureau d'enregistrement ; la **zone DNS**, qui dit où sont le site et les mails ; l'**hébergement** du site ; la **messagerie**. Si le nom expire, tout s'arrête, même si le reste est payé. Trois règles : le nom est enregistré **au nom de l'entreprise** ; l'adresse de contact du compte **ne dépend pas du nom** ; le **renouvellement est automatique**, et son échéance est au calendrier du gérant. Si un ancien prestataire détient les accès : renouveler d'abord, récupérer ensuite le compte ou le code de transfert, puis tout regrouper et tout consigner.",
      "Ce guide s'adresse au gérant qui ne sait plus à quel nom est son domaine, à celui dont le site ou les mails se sont arrêtés à une échéance, et au fondateur installé en France qui pilote le site de sa société algérienne. Les faits cités viennent de sources publiques : la politique de l'ICANN sur les noms expirés et les transferts, la description du domaine .dz et de son registre, les définitions du bureau d'enregistrement, de la durée de cache et des certificats. L'entreprise, les dates et les fournisseurs de l'exemple sont construits. Ce guide ne donne ni prix ni avis juridique : à qui revient un nom en cas de désaccord se règle avec le bureau d'enregistrement, le registre et votre conseil.",
    ],
    sections: [
      { heading: "Quatre comptes derrière votre site et vos mails", body: [
        "La figure suit une visite et un mail : tous deux passent par le nom, puis par la zone DNS, avant d'arriver au site ou aux boîtes.",
      ], visual: 'chaine', after: [
        "**Le nom.** Un bureau d'enregistrement est une société qui gère la réservation des noms de domaine ; il permet à une personne ou à une entité, le titulaire, d'enregistrer un nom, pour le compte des registres qui tiennent chaque extension. Le nom se réserve pour une durée, et se renouvelle. **La zone DNS.** Elle dit où envoyer une visite et où déposer un mail ; elle est souvent chez le bureau d'enregistrement ou chez l'hébergeur. **Le site** est chez un hébergeur. **Les mails** sont chez un service de messagerie, décrit dans [le guide sur la messagerie professionnelle](" + L.messagerie + ").",
        "**La dépendance.** Dans l'exemple, l'hébergement et la messagerie sont au nom de l'entreprise, et payés. Mais le nom et la zone sont sous le compte de l'ancien prestataire : le 14 mars, le nom expire, et plus rien n'arrive nulle part. **Comment savoir.** L'annuaire public des noms s'interroge par un service WHOIS, un protocole de requête sur les bases qui enregistrent les titulaires des ressources d'internet ; il indique le bureau d'enregistrement, la date d'échéance et les serveurs de noms. Le titulaire y est souvent masqué, mais le bureau et la date suffisent pour savoir à qui s'adresser. **.dz ou .com.** Le .dz est le domaine national de l'Algérie, administré par le centre DZ NIC, rattaché au CERIST ; selon sa description publique, il est réservé aux entités établies en Algérie. Un .com s'enregistre auprès de n'importe quel bureau d'enregistrement. Beaucoup d'entreprises tiennent les deux ; la question de ce guide, qui détient le compte, se pose pour l'un comme pour l'autre.",
      ] },
      { heading: "Autour de l'échéance : cinq périodes, et ce qu'on peut encore faire", body: [
        "La figure découpe la vie d'un nom autour de sa date d'échéance, pour un nom générique comme un .com.",
      ], visual: 'echeance', after: [
        "**Avant.** La politique de l'ICANN sur les noms expirés impose au bureau d'enregistrement au moins deux rappels avant l'échéance, l'un environ un mois avant, l'autre environ une semaine avant, puis au moins un autre dans les cinq jours qui suivent. Ils partent à l'adresse du titulaire inscrit : si c'est celle de l'ancien prestataire, vous ne les verrez jamais. **Après.** Le nom reste renouvelable pendant une période dont la durée dépend du bureau d'enregistrement ; pendant cette période, le bureau interrompt la résolution du nom, et le site comme les mails s'arrêtent. C'est en général à ce moment qu'on s'en aperçoit.",
        "**Rédemption.** Après la suppression de l'enregistrement, la politique prévoit une période de rédemption de trente jours pendant laquelle la restauration du nom peut encore être demandée. Puis le nom est supprimé pour de bon et redevient libre : n'importe qui peut l'enregistrer, y compris pour y publier autre chose. **Pour un .dz**, les règles sont celles du registre national et se vérifient auprès de lui. **La leçon.** Tant que le nom est renouvelable, le problème se règle en dix minutes par celui qui a le compte. Tout l'enjeu est donc d'avoir le compte, et de recevoir les rappels.",
      ] },
      { heading: "Reprendre la main, en six gestes", body: [
        "Le deuxième geste est accentué : on sécurise l'échéance avant de discuter de qui détient quoi.",
      ], visual: 'reprise', after: [
        "**Relever** : le bureau d'enregistrement, la date d'échéance, les serveurs de noms, l'hébergeur du site, le service de messagerie. **Sécuriser l'échéance** : si elle est proche, on fait renouveler le nom, par l'ancien prestataire s'il le faut ; un nom renouvelé laisse un an pour régler le reste, un nom expiré ne laisse que quelques semaines. **Récupérer** : soit l'accès au compte, soit le code de transfert. Ce code est exigé pour transférer un nom d'un bureau d'enregistrement à un autre, et le bureau doit le fournir dans les cinq jours calendaires de la demande.",
        "**Mettre au nom de l'entreprise** : le titulaire devient l'entreprise, avec une adresse de contact extérieure au nom, par exemple une boîte du gérant chez un autre fournisseur. Attention à l'ordre : selon la politique de transfert publiée par l'ICANN, un enregistrement, un transfert ou un changement de titulaire récents peuvent bloquer un nouveau transfert pendant plusieurs semaines, soixante jours dans la règle lue lors de la rédaction, en cours de révision ; on décide donc d'abord où le nom doit finir. Le transfert lui-même prend environ cinq jours. **Copier** : la zone DNS, les fichiers du site et sa base, en lieu sûr. **Consigner** : les comptes, les échéances et deux responsables. **Si le prestataire ne répond plus**, le bureau d'enregistrement indique la procédure ; quand le titulaire inscrit est le prestataire lui-même, la suite se voit avec le bureau, le registre et votre conseil.",
      ] },
      { heading: "Six choses à détenir vous-même", body: [
        "La figure donne, pour six éléments, ce qu'il faut avoir en main et le signe que ce n'est pas le cas.",
      ], visual: 'comptes', after: [
        "**Le certificat.** Le cadenas du navigateur repose sur un certificat qui expire lui aussi : ceux de Let's Encrypt, délivrés sans frais, sont valables quatre-vingt-dix jours par défaut, et l'organisme prévoit de réduire encore cette durée. Leur renouvellement doit donc être automatique, et surveillé. **La sauvegarde.** La copie que fait l'hébergeur sur son propre serveur ne vous protège pas de l'hébergeur ; il faut une copie des fichiers et de la base ailleurs, restaurée au moins une fois, selon la méthode du [guide sur les sauvegardes](" + L.sauvegardes + ").",
        "**Changer d'hébergeur sans panne.** Un enregistrement DNS porte une durée de cache : un serveur qui l'a lu le garde pendant le temps indiqué. Avant un changement, on abaisse cette durée, on copie le site chez le nouvel hébergeur, on bascule, puis on la remonte. Pour le choix du lieu, serveur en Algérie ou en Europe, voir [le guide sur l'hébergement d'une application](" + L.heberger + ") ; pour un site vitrine, la question pèse moins que celle de savoir qui détient les comptes.",
      ] },
      { heading: "Un nom et un site tenus, en cinq couches", body: [
        "La couche accentuée est la première : à quel nom le domaine est enregistré.",
      ], visual: 'couches', after: [
        "**Titulaire** : l'entreprise, pas une personne ni un prestataire. **Comptes et accès** : un compte par fournisseur, la double vérification, deux personnes habilitées, les codes dans un coffre ; les règles sont celles du [guide sur le piratage](" + L.piratage + "), car un compte de bureau d'enregistrement détourné, c'est le site et les mails qui partent ailleurs. **Échéances** : quatre dates, le nom, l'hébergement, la messagerie, le certificat.",
        "**Zone DNS** : documentée et exportée. **Site et mails** : hébergés, sauvegardés, restaurables. Tenir tout cela à jour est un travail de routine, qui entre dans le contrat décrit dans [le guide sur l'infogérance](" + L.infogerance + ") ; ce qui ne se délègue pas, c'est le nom du titulaire et la possession des accès.",
      ] },
      { heading: "Reprendre la main en 2027, en semaines", body: [
        "Trois semaines dans l'exemple, dont la première ne change rien de visible.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, relevé et sécurisation** : on relève le titulaire, le bureau, l'échéance et les serveurs de noms, on fait renouveler si la date est proche, et l'on copie la zone, le site et sa base. **Semaine 2, reprise des comptes** : accès ou code de transfert, nom mis au nom de l'entreprise, adresse de contact externe, double vérification.",
        "**Semaine 3, regroupement et suivi** : les comptes sont regroupés et consignés, le renouvellement est automatique, les alertes sont en place, la sauvegarde tourne et une restauration a été essayée.",
      ], list: [
        "**Ce que le gérant voit** : une page avec les quatre comptes, à quel nom, chez qui, la date d'échéance de chacun et les deux personnes qui y ont accès.",
        "**Ce que l'entreprise ne fait plus** : découvrir une échéance le jour où le site tombe, dépendre de l'adresse d'un tiers pour un rappel, chercher un mot de passe chez un ancien salarié, changer d'hébergeur dans l'urgence.",
        "**Ce qui est mesuré** : jours restants avant chaque échéance, date de la dernière sauvegarde restaurée, comptes sans double vérification.",
        "**Ce que fait Symloop** : le relevé, la reprise des comptes avec vous, le regroupement, l'hébergement et la sauvegarde du site, le suivi des échéances, et la refonte du site quand elle est utile.",
      ], faq: [
        { q: "À qui appartient mon nom de domaine ?", a: "Le nom est enregistré au nom d'un titulaire, auprès d'un bureau d'enregistrement ; ce sont ce titulaire, et celui qui détient le compte, qui peuvent le renouveler, le transférer ou le modifier. Si le nom a été réservé par une agence ou par un employé, ce sont souvent leur nom et leur adresse qui figurent. On le vérifie auprès du bureau indiqué par l'annuaire public du nom." },
        { q: "Mon nom de domaine a expiré, que faire ?", a: "Agir tout de suite. Tant que le nom est renouvelable, celui qui a le compte le renouvelle en quelques minutes et tout repart. Si vous n'avez pas le compte, contactez la personne qui l'a, puis le bureau d'enregistrement. Pour un nom générique, il reste encore, après la suppression, une période de rédemption de trente jours ; ensuite le nom redevient libre." },
        { q: "L'ancien prestataire a gardé les accès, comment récupérer mon site ?", a: "Dans l'ordre : faire renouveler le nom si l'échéance est proche ; demander l'accès au compte ou le code de transfert ; mettre le nom au nom de l'entreprise ; copier la zone, le site et sa base. Si le prestataire ne répond pas, le bureau d'enregistrement indique la procédure ; en cas de désaccord sur le titulaire, voyez votre conseil." },
        { q: "Faut-il un nom en .dz ou en .com ?", a: "Le .dz est le domaine national, administré par le registre algérien et, selon sa description publique, réservé aux entités établies en Algérie ; le .com s'enregistre partout. Beaucoup d'entreprises prennent les deux. Dans les deux cas, ce qui compte est identique : le nom au nom de l'entreprise, le compte entre vos mains, l'échéance suivie." },
        { q: "Quelle différence entre nom de domaine et hébergement ?", a: "Le nom est l'adresse ; l'hébergement est l'endroit où se trouvent les pages. Entre les deux, la zone DNS dit où pointe le nom. Ce sont des comptes distincts, souvent chez des fournisseurs différents, avec des échéances différentes." },
        { q: "Pourquoi mes mails se sont-ils arrêtés en même temps que le site ?", a: "Parce que les mails passent aussi par le nom. Quand le nom expire, sa zone ne répond plus : les serveurs qui veulent vous écrire ne trouvent plus où déposer le courrier. La messagerie elle-même fonctionne, mais plus rien n'y arrive." },
        { q: "Comment savoir chez qui est mon nom de domaine ?", a: "En interrogeant l'annuaire public du nom, par un service WHOIS : il donne le bureau d'enregistrement, la date d'échéance et les serveurs de noms. Le titulaire est souvent masqué, mais vous savez à qui vous adresser et combien de temps il reste." },
        { q: "Comment transférer un nom de domaine vers un autre bureau d'enregistrement ?", a: "Avec le code de transfert, que le bureau actuel doit fournir dans les cinq jours de la demande. Le transfert prend environ cinq jours. Un enregistrement, un transfert ou un changement de titulaire récents peuvent le bloquer plusieurs semaines : on décide donc d'abord où le nom doit finir." },
        { q: "Où héberger le site web de mon entreprise ?", a: "Pour un site vitrine, chez un hébergeur sérieux, avec un certificat renouvelé automatiquement et une sauvegarde que vous détenez. Le pays compte moins que pour une application métier. Ce qui compte : le compte à votre nom, une copie du site chez vous, et la possibilité de partir en une journée." },
        { q: "Comment ne plus dépendre d'un prestataire pour mon site ?", a: "En détenant vous-même les quatre comptes, le nom, la zone, l'hébergement, la messagerie, avec deux personnes habilitées, et en gardant une copie du site et de sa base. Le prestataire travaille alors avec un accès que vous lui donnez, et que vous pouvez retirer." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Le site et les mails ne tiennent pas à l'hébergeur : ils tiennent au nom, et à celui qui en détient le compte." },
      { after: 1, text: "Un nom ne se perd pas d'un coup : il se perd parce que les rappels arrivent chez quelqu'un qui n'est plus là." },
    ],
    cta: { eyebrow: "Donnez-nous simplement votre nom de domaine : nous vous disons chez qui il est enregistré, quand il expire, où pointent le site et les mails, et ce qu'il faut reprendre en premier", title: "Site tombé à une échéance, accès restés chez un ancien prestataire, ou fondateur en France qui veut tenir le site de sa société : nous relevons, sécurisons l'échéance, reprenons les comptes avec vous et mettons tout au nom de l'entreprise", body: "Un relevé en une journée, une échéance sécurisée, quatre comptes à votre nom, une sauvegarde que vous détenez. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.messagerie, kind: '2027', name: 'Messagerie professionnelle : nom de domaine, boîtes, départ d’un employé' },
      { href: L.heberger, kind: '2027', name: 'Héberger une application en Algérie ou en Europe : où mettre serveurs et données' },
      { href: L.sauvegardes, kind: '2027', name: 'Si le serveur meurt demain : sauvegardes, restauration testée, délai de reprise' },
      { href: L.infogerance, kind: '2027', name: 'Infogérance et maintenance informatique : supervision, délais, rapport mensuel' },
    ] },
  },
  en: {
    kind: 'Domain name and hosting · Algeria · 2027', title: "Domain name and website hosting in Algeria (2027): who owns what, and what to do when the domain expires or the former provider kept the access",
    dek: "“Our site went down one Monday morning, and the mail with it. The domain name had expired: the agency that built the site six years ago had bought it in its own name, with its own address. It no longer answers. We have neither the account nor the codes, we do not know where the site is hosted, and we do not know whether a .dz would have changed anything. How do we take back control, and never depend on someone again?” Behind a site and its mail there are four accounts: the name, the DNS zone, the hosting, the mail service. The first commands the other three. It must be in the company's name, renewed automatically, with a contact address that does not depend on it.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Domain name', 'Website hosting', 'Registrar', 'DNS zone', 'Renewal and transfer', 'Algeria 2027'],
    intro: [
      "**Short answer.** A site and its mail rest on four accounts: the **domain name**, at a registrar; the **DNS zone**, which says where the site and the mail are; the site's **hosting**; the **mail service**. If the name expires, everything stops, even if the rest is paid for. Three rules: the name is registered **in the company's name**; the account's contact address **does not depend on the name**; **renewal is automatic**, and its due date is in the manager's calendar. If a former provider holds the access: renew first, then recover the account or the transfer code, then group everything and write everything down.",
      "This guide is for the manager who no longer knows in whose name the domain is, for the one whose site or mail stopped at a due date, and for the founder based in France who runs the site of their Algerian company. The facts quoted come from public sources: ICANN's policy on expired names and transfers, the description of the .dz domain and its registry, and the definitions of the registrar, of cache time and of certificates. The company, dates and providers in the example are constructed. This guide gives neither prices nor legal advice: who a name belongs to in a disagreement is a matter for the registrar, the registry and your legal adviser.",
    ],
    sections: [
      { heading: "Four accounts behind your site and your mail", body: [
        "The figure follows a visit and an email: both go through the name, then through the DNS zone, before reaching the site or the mailboxes.",
      ], visual: 'chaine', after: [
        "**The name.** A registrar is a company that manages the reservation of domain names; it allows a person or an entity, the registrant, to register a name, on behalf of the registries that run each extension. The name is reserved for a period, and renewed. **The DNS zone.** It says where to send a visit and where to deliver an email; it is often at the registrar or at the host. **The site** is at a web host. **The mail** is at a mail service, described in [the guide to professional mail](" + L.messagerie + ").",
        "**The dependency.** In the example, hosting and mail are in the company's name, and paid for. But the name and the zone are under the former provider's account: on 14 March the name expires, and nothing arrives anywhere. **How to find out.** The public directory of names is queried through a WHOIS service, a query protocol for the databases that record the registered holders of internet resources; it shows the registrar, the due date and the name servers. The holder is often hidden, but the registrar and the date are enough to know whom to contact. **.dz or .com.** The .dz is Algeria's national domain, administered by the DZ NIC centre, attached to CERIST; according to its public description, it is reserved for entities established in Algeria. A .com is registered with any registrar. Many companies hold both; the question in this guide, who holds the account, applies to one as to the other.",
      ] },
      { heading: "Around the due date: five periods, and what can still be done", body: [
        "The figure divides the life of a name around its due date, for a generic name such as a .com.",
      ], visual: 'echeance', after: [
        "**Before.** ICANN's policy on expired names requires the registrar to send at least two reminders before the due date, one about a month before, the other about a week before, then at least one more within the five days that follow. They go to the registered holder's address: if that is the former provider's, you will never see them. **After.** The name remains renewable for a period whose length depends on the registrar; during that period, the registrar interrupts the resolution of the name, and the site and the mail both stop. That is generally when people notice.",
        "**Redemption.** After the registration is deleted, the policy provides a redemption period of thirty days during which restoration of the name can still be requested. Then the name is deleted for good and becomes free: anyone can register it, including to publish something else on it. **For a .dz**, the rules are those of the national registry and are checked with it. **The lesson.** While the name is renewable, the problem is settled in ten minutes by whoever has the account. The whole issue is therefore to have the account, and to receive the reminders.",
      ] },
      { heading: "Taking back control, in six steps", body: [
        "The second step is accented: you secure the due date before discussing who holds what.",
      ], visual: 'reprise', after: [
        "**Find out**: the registrar, the due date, the name servers, the site's host, the mail service. **Secure the due date**: if it is close, have the name renewed, by the former provider if need be; a renewed name leaves a year to settle the rest, an expired name leaves only a few weeks. **Recover**: either access to the account, or the transfer code. That code is required to transfer a name from one registrar to another, and the registrar must provide it within five calendar days of the request.",
        "**Put it in the company's name**: the registrant becomes the company, with a contact address outside the name, for example a mailbox of the manager's at another provider. Mind the order: under the transfer policy published by ICANN, a recent registration, transfer or change of registrant can block a new transfer for several weeks, sixty days in the rule read at the time of writing, which is under revision; so you first decide where the name should end up. The transfer itself takes about five days. **Copy**: the DNS zone, the site's files and its database, somewhere safe. **Record**: the accounts, the due dates and two people in charge. **If the provider no longer answers**, the registrar gives the procedure; when the registered holder is the provider itself, the next steps are a matter for the registrar, the registry and your legal adviser.",
      ] },
      { heading: "Six things to hold yourself", body: [
        "The figure gives, for six items, what you need in hand and the sign that you do not have it.",
      ], visual: 'comptes', after: [
        "**The certificate.** The padlock in the browser rests on a certificate that also expires: those from Let's Encrypt, issued at no charge, are valid for ninety days by default, and the organisation plans to shorten that further. Their renewal therefore has to be automatic, and monitored. **The backup.** The copy the host makes on its own server does not protect you from the host; you need a copy of the files and the database elsewhere, restored at least once, following the method in [the guide to backups](" + L.sauvegardes + ").",
        "**Changing host without an outage.** A DNS record carries a cache time: a server that has read it keeps it for the time stated. Before a change, you lower that time, copy the site to the new host, switch over, then raise it again. For the choice of place, a server in Algeria or in Europe, see [the guide to hosting an application](" + L.heberger + "); for a brochure site, that question weighs less than knowing who holds the accounts.",
      ] },
      { heading: "A name and a site under control, in five layers", body: [
        "The accented layer is the first: in whose name the domain is registered.",
      ], visual: 'couches', after: [
        "**Registered holder**: the company, not a person and not a provider. **Accounts and access**: one account per provider, two-step verification, two authorised people, codes in a vault; the rules are those in [the guide to hacking](" + L.piratage + "), because a hijacked registrar account means the site and the mail going elsewhere. **Due dates**: four of them, the name, the hosting, the mail service, the certificate.",
        "**DNS zone**: documented and exported. **Site and mail**: hosted, backed up, restorable. Keeping all this up to date is routine work, which fits in the contract described in [the guide to managed IT](" + L.infogerance + "); what cannot be delegated is the name of the registrant and the possession of the access.",
      ] },
      { heading: "Taking back control in 2027, in weeks", body: [
        "Three weeks in the example, the first of which changes nothing visible.",
      ], visual: 'calendrier', after: [
        "**Week 1, findings and securing**: you find the registrant, the registrar, the due date and the name servers, have the name renewed if the date is close, and copy the zone, the site and its database. **Week 2, recovering the accounts**: access or transfer code, name put in the company's name, outside contact address, two-step verification.",
        "**Week 3, grouping and follow-up**: the accounts are grouped and recorded, renewal is automatic, alerts are in place, the backup runs and a restore has been tried.",
      ], list: [
        "**What the manager sees**: one page with the four accounts, in whose name, at which provider, the due date of each and the two people who have access.",
        "**What the company no longer does**: discover a due date the day the site goes down, depend on a third party's address for a reminder, hunt for a password with a former employee, change host in an emergency.",
        "**What is measured**: days left before each due date, date of the last backup restored, accounts without two-step verification.",
        "**What Symloop does**: the findings, recovering the accounts with you, grouping them, hosting and backing up the site, following the due dates, and redesigning the site when that is useful.",
      ], faq: [
        { q: "Who does my domain name belong to?", a: "The name is registered to a holder, at a registrar; it is that holder, and whoever holds the account, who can renew it, transfer it or change it. If the name was reserved by an agency or by an employee, it is often their name and their address that appear. You check with the registrar shown by the name's public directory." },
        { q: "My domain name has expired, what should I do?", a: "Act at once. While the name is renewable, whoever has the account renews it in a few minutes and everything restarts. If you do not have the account, contact the person who does, then the registrar. For a generic name there is still, after deletion, a redemption period of thirty days; after that the name becomes free." },
        { q: "The former provider kept the access, how do I get my site back?", a: "In order: have the name renewed if the due date is close; ask for access to the account or for the transfer code; put the name in the company's name; copy the zone, the site and its database. If the provider does not answer, the registrar gives the procedure; in a disagreement about the registrant, see your legal adviser." },
        { q: "Should we take a .dz or a .com name?", a: "The .dz is the national domain, administered by the Algerian registry and, according to its public description, reserved for entities established in Algeria; the .com is registered anywhere. Many companies take both. In both cases, what counts is the same: the name in the company's name, the account in your hands, the due date watched." },
        { q: "What is the difference between a domain name and hosting?", a: "The name is the address; hosting is the place where the pages are. Between the two, the DNS zone says where the name points. They are separate accounts, often at different providers, with different due dates." },
        { q: "Why did my mail stop at the same time as the site?", a: "Because mail also goes through the name. When the name expires, its zone no longer answers: the servers that want to write to you no longer find where to deliver. The mail service itself works, but nothing reaches it any more." },
        { q: "How do I find out where my domain name is registered?", a: "By querying the name's public directory, through a WHOIS service: it gives the registrar, the due date and the name servers. The holder is often hidden, but you know whom to contact and how much time is left." },
        { q: "How do you transfer a domain name to another registrar?", a: "With the transfer code, which the current registrar must provide within five days of the request. The transfer takes about five days. A recent registration, transfer or change of registrant can block it for several weeks: so you first decide where the name should end up." },
        { q: "Where should my company's website be hosted?", a: "For a brochure site, at a serious host, with a certificate renewed automatically and a backup that you hold. The country matters less than for a business application. What counts: the account in your name, a copy of the site in your hands, and the ability to leave within a day." },
        { q: "How do we stop depending on a provider for our site?", a: "By holding the four accounts yourself, the name, the zone, the hosting, the mail service, with two authorised people, and by keeping a copy of the site and its database. The provider then works with access that you give, and that you can withdraw." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The site and the mail do not hang on the host: they hang on the name, and on whoever holds its account." },
      { after: 1, text: "A name is not lost all at once: it is lost because the reminders reach someone who is no longer there." },
    ],
    cta: { eyebrow: "Just give us your domain name: we tell you where it is registered, when it expires, where the site and the mail point, and what to take back first", title: "A site that went down at a due date, access left with a former provider, or a founder in France who wants to keep hold of their company's site: we find out, secure the due date, recover the accounts with you and put everything in the company's name", body: "Findings in one day, a secured due date, four accounts in your name, a backup that you hold. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.messagerie, kind: '2027', name: 'Professional mail: domain name, mailboxes, an employee’s departure' },
      { href: L.heberger, kind: '2027', name: 'Hosting an application in Algeria or in Europe: where to put servers and data' },
      { href: L.sauvegardes, kind: '2027', name: 'If the server dies tomorrow: backups, tested restore, recovery time' },
      { href: L.infogerance, kind: '2027', name: 'Managed IT and maintenance: monitoring, response times, monthly report' },
    ] },
  },
  ar: {
    kind: 'اسم النطاق والاستضافة · الجزائر · 2027', title: "اسم النطاق واستضافة الموقع في الجزائر (2027): من يملك ماذا، وما العمل حين ينتهي أجل النطاق أو يحتفظ المتعهّد السابق بالوصول",
    dek: "«سقط موقعنا ذات صباح اثنين، ومعه البريد. كان اسم النطاق قد انتهى أجله: الوكالة التي أنجزت الموقع قبل ست سنوات هي التي اشترته باسمها، وبعنوانها. ولم تعد تجيب. ليس عندنا الحساب ولا الرموز، ولا نعرف أين استُضيف الموقع، ولا نعرف هل كان اسم بـ " + I('.dz') + " سيغيّر شيئاً. كيف نستعيد التحكم، ولا نبقى تابعين لأحد؟» خلف الموقع والبريد أربعة حسابات: الاسم، منطقة الأسماء، الاستضافة، وخدمة البريد. والأول يتحكم في الثلاثة الأخرى. ويجب أن يكون باسم المؤسسة، مجدَّداً آلياً، بعنوان اتصال لا يتوقف عليه.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['اسم النطاق', 'استضافة المواقع', 'مكتب التسجيل', 'منطقة الأسماء', 'التجديد والتحويل', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** الموقع والبريد يقومان على أربعة حسابات: **اسم النطاق**، عند مكتب تسجيل؛ **منطقة الأسماء**، التي تقول أين الموقع والبريد؛ **استضافة** الموقع؛ و**خدمة البريد**. وإذا انتهى أجل الاسم توقف كل شيء، حتى وإن كان الباقي مدفوعاً. ثلاث قواعد: الاسم يُسجَّل **باسم المؤسسة**؛ وعنوان الاتصال في الحساب **لا يتوقف على الاسم**؛ و**التجديد آلي**، وأجله في رزنامة المسيّر. وإذا كان متعهّد سابق يمسك الوصول: التجديد أولاً، ثم استرجاع الحساب أو رمز التحويل، ثم تجميع كل شيء وتدوينه.",
      "هذا الدليل موجَّه إلى المسيّر الذي لم يعد يعرف باسم من سُجِّل نطاقه، وإلى من توقف موقعه أو بريده عند أجل، وإلى المؤسس المقيم في فرنسا الذي يسيّر موقع شركته الجزائرية. الوقائع المذكورة آتية من مصادر علنية: سياسة " + I('ICANN') + " حول الأسماء المنتهية والتحويلات، ووصف النطاق " + I('.dz') + " وسجلّه، وتعريفات مكتب التسجيل ومدة التخزين المؤقت والشهادات. المؤسسة والتواريخ والمزوِّدون في المثال مركَّبون. هذا الدليل لا يعطي أسعاراً ولا رأياً قانونياً: لمن يعود الاسم عند الخلاف مسألة تُسوّى مع مكتب التسجيل والسجلّ ومستشاركم.",
    ],
    sections: [
      { heading: "أربعة حسابات خلف موقعكم وبريدكم", body: [
        "الشكل يتابع زيارة ورسالة: كلتاهما تمرّ بالاسم، ثم بمنطقة الأسماء، قبل بلوغ الموقع أو علب البريد.",
      ], visual: 'chaine', after: [
        "**الاسم.** مكتب التسجيل مؤسسة تسيّر حجز أسماء النطاقات؛ ويسمح لشخص أو لهيئة، وهو صاحب الاسم، بتسجيل اسم، لحساب السجلّات التي تمسك كل امتداد. والاسم يُحجز لمدة، ويُجدَّد. **منطقة الأسماء.** تقول إلى أين تُرسَل الزيارة وأين تُودَع الرسالة؛ وهي غالباً عند مكتب التسجيل أو عند المستضيف. **الموقع** عند مستضيف. و**البريد** عند خدمة بريد، موصوفة في [دليل البريد المهني](" + L.messagerie + ").",
        "**التبعية.** في المثال، الاستضافة والبريد باسم المؤسسة، ومدفوعان. لكن الاسم والمنطقة تحت حساب المتعهّد السابق: يوم 14 مارس ينتهي الاسم، ولا شيء يصل إلى أي مكان. **كيف نعرف.** الدليل العلني للأسماء يُستعلَم عبر خدمة " + I('WHOIS') + "، وهو بروتوكول استعلام عن القواعد التي تسجّل أصحاب موارد الإنترنت؛ ويبيّن مكتب التسجيل، وتاريخ الأجل، وخوادم الأسماء. وصاحب الاسم محجوب فيه غالباً، لكن المكتب والتاريخ يكفيان لمعرفة من نخاطب. **" + I('.dz') + " أم " + I('.com') + ".** " + I('.dz') + " هو النطاق الوطني للجزائر، يسيّره مركز " + I('DZ NIC') + " التابع لمركز " + I('CERIST') + "؛ وحسب وصفه العلني هو مخصَّص للهيئات المستقرة في الجزائر. و" + I('.com') + " يُسجَّل عند أي مكتب تسجيل. ومؤسسات كثيرة تمسك الاثنين؛ وسؤال هذا الدليل، من يمسك الحساب، يُطرح في الحالتين.",
      ] },
      { heading: "حول الأجل: خمس فترات، وما يمكن فعله بعد", body: [
        "الشكل يقسّم حياة الاسم حول تاريخ أجله، لاسم عام مثل " + I('.com') + ".",
      ], visual: 'echeance', after: [
        "**قبل.** سياسة " + I('ICANN') + " حول الأسماء المنتهية تفرض على مكتب التسجيل تذكيرين على الأقل قبل الأجل، أحدهما نحو شهر قبله والآخر نحو أسبوع قبله، ثم تذكيراً آخر على الأقل خلال الأيام الخمسة الموالية. وتُرسَل إلى عنوان صاحب الاسم المسجَّل: فإن كان عنوان المتعهّد السابق، لن تروها أبداً. **بعد.** يبقى الاسم قابلاً للتجديد مدة تتوقف على مكتب التسجيل؛ وخلالها يوقف المكتب حلّ الاسم، فيتوقف الموقع والبريد معاً. وفي الغالب هنا ننتبه.",
        "**الاسترداد.** بعد حذف التسجيل، تنص السياسة على فترة استرداد من ثلاثين يوماً يمكن خلالها طلب استرجاع الاسم. ثم يُحذف الاسم نهائياً ويعود حرّاً: يمكن لأي أحد أن يسجّله، حتى لينشر عليه شيئاً آخر. **وللاسم بـ " + I('.dz') + "**، القواعد هي قواعد السجلّ الوطني وتُراجَع عنده. **الدرس.** ما دام الاسم قابلاً للتجديد، تُحلّ المشكلة في عشر دقائق على يد من عنده الحساب. فالمسألة كلها أن يكون الحساب عندكم، وأن تصلكم التذكيرات.",
      ] },
      { heading: "استعادة التحكم، في ست خطوات", body: [
        "الخطوة الثانية مبرزة: نؤمّن الأجل قبل النقاش حول من يمسك ماذا.",
      ], visual: 'reprise', after: [
        "**الجرد**: مكتب التسجيل، تاريخ الأجل، خوادم الأسماء، مستضيف الموقع، وخدمة البريد. **تأمين الأجل**: إن كان قريباً نطلب تجديد الاسم، على يد المتعهّد السابق إن لزم؛ الاسم المجدَّد يترك سنة لتسوية الباقي، والاسم المنتهي لا يترك إلا بضعة أسابيع. **الاسترجاع**: إما الوصول إلى الحساب، وإما رمز التحويل. وهذا الرمز مطلوب لتحويل اسم من مكتب تسجيل إلى آخر، وعلى المكتب أن يقدّمه خلال خمسة أيام تقويمية من الطلب.",
        "**الوضع باسم المؤسسة**: صاحب الاسم يصير المؤسسة، بعنوان اتصال خارج الاسم، مثلاً علبة للمسيّر عند مزوِّد آخر. وانتبهوا للترتيب: حسب سياسة التحويل التي تنشرها " + I('ICANN') + "، تسجيل أو تحويل أو تغيير لصاحب الاسم حديث العهد قد يمنع تحويلاً جديداً عدة أسابيع، ستين يوماً في القاعدة المقروءة عند التحرير، وهي قيد المراجعة؛ فنقرّر أولاً أين يجب أن ينتهي الاسم. والتحويل نفسه يأخذ نحو خمسة أيام. **النسخ**: منطقة الأسماء، ملفات الموقع وقاعدته، في مكان آمن. **التدوين**: الحسابات، الآجال، ومسؤولان. **وإذا لم يعد المتعهّد يجيب**، يبيّن مكتب التسجيل الإجراء؛ وحين يكون صاحب الاسم المسجَّل هو المتعهّد نفسه، فالباقي يُنظر فيه مع المكتب والسجلّ ومستشاركم.",
      ] },
      { heading: "ستة أشياء تمسكونها بأنفسكم", body: [
        "الشكل يعطي، لستة عناصر، ما يجب أن يكون بأيديكم وعلامة أن ذلك غير حاصل.",
      ], visual: 'comptes', after: [
        "**الشهادة.** قفل المتصفح يقوم على شهادة تنتهي هي كذلك: شهادات " + I("Let's Encrypt") + "، التي تُسلَّم دون مقابل، صالحة تسعين يوماً افتراضياً، والهيئة تعتزم تقليص هذه المدة أكثر. فتجديدها يجب أن يكون آلياً، ومراقَباً. **النسخة الاحتياطية.** النسخة التي يصنعها المستضيف على خادمه لا تحميكم من المستضيف؛ تلزم نسخة من الملفات والقاعدة في مكان آخر، مسترجَعة مرة على الأقل، حسب طريقة [دليل النسخ الاحتياطية](" + L.sauvegardes + ").",
        "**تغيير المستضيف دون عطل.** تسجيل الأسماء يحمل مدة تخزين مؤقت: الخادم الذي قرأه يحتفظ به المدة المبيَّنة. قبل التغيير نخفّض هذه المدة، وننسخ الموقع عند المستضيف الجديد، وننتقل، ثم نرفعها من جديد. ولاختيار المكان، خادم في الجزائر أو في أوروبا، انظر [دليل استضافة تطبيق](" + L.heberger + ")؛ ولموقع تعريفي، هذا السؤال أقل وزناً من معرفة من يمسك الحسابات.",
      ] },
      { heading: "اسم وموقع تحت التحكم، في خمس طبقات", body: [
        "الطبقة المبرزة هي الأولى: باسم من سُجِّل النطاق.",
      ], visual: 'couches', after: [
        "**صاحب الاسم**: المؤسسة، لا شخص ولا متعهّد. **الحسابات والوصول**: حساب لكل مزوِّد، تحقق بخطوتين، شخصان مخوَّلان، والرموز في خزنة؛ والقواعد هي قواعد [دليل الاختراق](" + L.piratage + ")، لأن حساب مكتب تسجيل مخترَقاً يعني موقعاً وبريداً يذهبان إلى مكان آخر. **الآجال**: أربعة تواريخ، الاسم، الاستضافة، خدمة البريد، والشهادة.",
        "**منطقة الأسماء**: موثَّقة ومصدَّرة. **الموقع والبريد**: مستضافان، محفوظان، وقابلان للاسترجاع. وإبقاء كل هذا محدَّثاً عمل روتيني، يدخل في العقد الموصوف في [دليل تسيير الإعلام الآلي](" + L.infogerance + ")؛ وما لا يُفوَّض هو اسم صاحب النطاق وحيازة الوصول.",
      ] },
      { heading: "استعادة التحكم سنة 2027، بالأسابيع", body: [
        "ثلاثة أسابيع في المثال، الأول منها لا يغيّر شيئاً ظاهراً.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، الجرد والتأمين**: نجرد صاحب الاسم والمكتب والأجل وخوادم الأسماء، ونطلب التجديد إن كان التاريخ قريباً، وننسخ المنطقة والموقع وقاعدته. **الأسبوع 2، استرجاع الحسابات**: الوصول أو رمز التحويل، الاسم باسم المؤسسة، عنوان اتصال خارجي، وتحقق بخطوتين.",
        "**الأسبوع 3، التجميع والمتابعة**: الحسابات مجمَّعة ومدوَّنة، التجديد آلي، التنبيهات قائمة، النسخ الاحتياطي يعمل، واسترجاع جُرِّب.",
      ], list: [
        "**ما يراه المسيّر**: صفحة فيها الحسابات الأربعة، باسم من، عند من، تاريخ أجل كل واحد، والشخصان اللذان لهما الوصول.",
        "**ما لم تعد المؤسسة تفعله**: اكتشاف أجل يوم يسقط الموقع، التبعية لعنوان الغير من أجل تذكير، البحث عن كلمة مرور عند أجير سابق، وتغيير المستضيف على عجل.",
        "**ما يُقاس**: الأيام الباقية قبل كل أجل، تاريخ آخر نسخة احتياطية مسترجَعة، والحسابات دون تحقق بخطوتين.",
        "**ما تفعله Symloop**: الجرد، استرجاع الحسابات معكم، التجميع، استضافة الموقع ونسخه احتياطياً، متابعة الآجال، وإعادة تصميم الموقع حين يكون ذلك مفيداً.",
      ], faq: [
        { q: "لمن يعود اسم نطاقي؟", a: "الاسم مسجَّل باسم صاحبه، عند مكتب تسجيل؛ وهذا الصاحب، ومن يمسك الحساب، هما من يستطيع تجديده أو تحويله أو تعديله. وإذا حجزته وكالة أو أجير، فغالباً اسمهما وعنوانهما هما المسجَّلان. ويُتحقق من ذلك عند المكتب الذي يبيّنه الدليل العلني للاسم." },
        { q: "انتهى أجل اسم نطاقي، ما العمل؟", a: "التحرك فوراً. ما دام الاسم قابلاً للتجديد، من عنده الحساب يجدّده في دقائق ويعود كل شيء. وإذا لم يكن الحساب عندكم، اتصلوا بمن هو عنده، ثم بمكتب التسجيل. وللاسم العام، تبقى بعد الحذف فترة استرداد من ثلاثين يوماً؛ ثم يعود الاسم حرّاً." },
        { q: "المتعهّد السابق احتفظ بالوصول، كيف أسترجع موقعي؟", a: "بالترتيب: طلب تجديد الاسم إن كان الأجل قريباً؛ طلب الوصول إلى الحساب أو رمز التحويل؛ وضع الاسم باسم المؤسسة؛ ونسخ المنطقة والموقع وقاعدته. وإذا لم يجب المتعهّد، يبيّن مكتب التسجيل الإجراء؛ وعند الخلاف حول صاحب الاسم، راجعوا مستشاركم." },
        { q: "هل نأخذ اسماً بـ " + I('.dz') + " أم بـ " + I('.com') + "؟", a: I('.dz') + " هو النطاق الوطني، يسيّره السجلّ الجزائري، وحسب وصفه العلني هو مخصَّص للهيئات المستقرة في الجزائر؛ و" + I('.com') + " يُسجَّل في كل مكان. ومؤسسات كثيرة تأخذ الاثنين. وفي الحالتين، المهم واحد: الاسم باسم المؤسسة، الحساب بين أيديكم، والأجل متابَع." },
        { q: "ما الفرق بين اسم النطاق والاستضافة؟", a: "الاسم هو العنوان؛ والاستضافة هي المكان الذي توجد فيه الصفحات. وبينهما، منطقة الأسماء تقول إلى أين يشير الاسم. وهي حسابات منفصلة، غالباً عند مزوِّدين مختلفين، بآجال مختلفة." },
        { q: "لماذا توقف بريدي في الوقت نفسه مع الموقع؟", a: "لأن البريد يمرّ كذلك بالاسم. حين ينتهي الاسم، لم تعد منطقته تجيب: الخوادم التي تريد مراسلتكم لم تعد تجد أين تودع الرسالة. خدمة البريد نفسها تعمل، لكن لا شيء يصلها." },
        { q: "كيف أعرف عند من سُجِّل اسم نطاقي؟", a: "بالاستعلام في الدليل العلني للاسم، عبر خدمة " + I('WHOIS') + ": يعطي مكتب التسجيل، تاريخ الأجل، وخوادم الأسماء. وصاحب الاسم محجوب غالباً، لكنكم تعرفون من تخاطبون وكم بقي من الوقت." },
        { q: "كيف يُحوَّل اسم نطاق إلى مكتب تسجيل آخر؟", a: "برمز التحويل، الذي يجب أن يقدّمه المكتب الحالي خلال خمسة أيام من الطلب. والتحويل يأخذ نحو خمسة أيام. وتسجيل أو تحويل أو تغيير لصاحب الاسم حديث العهد قد يمنعه عدة أسابيع: فنقرّر أولاً أين يجب أن ينتهي الاسم." },
        { q: "أين أستضيف موقع مؤسستي؟", a: "لموقع تعريفي، عند مستضيف جادّ، بشهادة تُجدَّد آلياً ونسخة احتياطية تمسكونها. والبلد أقل وزناً منه في تطبيق مهني. والمهم: الحساب باسمكم، نسخة من الموقع عندكم، وإمكانية المغادرة في يوم." },
        { q: "كيف لا نبقى تابعين لمتعهّد من أجل موقعنا؟", a: "بأن تمسكوا بأنفسكم الحسابات الأربعة، الاسم والمنطقة والاستضافة وخدمة البريد، بشخصين مخوَّلين، وبأن تحتفظوا بنسخة من الموقع وقاعدته. فيعمل المتعهّد حينها بوصول تعطونه إياه، ويمكنكم سحبه." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "الموقع والبريد لا يقومان على المستضيف: يقومان على الاسم، وعلى من يمسك حسابه." },
      { after: 1, text: "الاسم لا يضيع دفعة واحدة: يضيع لأن التذكيرات تصل إلى شخص لم يعد هناك." },
    ],
    cta: { eyebrow: "أعطونا فقط اسم نطاقكم: نقول لكم عند من سُجِّل، متى ينتهي، إلى أين يشير الموقع والبريد، وما الذي يُسترجَع أولاً", title: "موقع سقط عند أجل، وصول بقي عند متعهّد سابق، أو مؤسس في فرنسا يريد أن يمسك موقع شركته: نجرد، نؤمّن الأجل، نسترجع الحسابات معكم ونضع كل شيء باسم المؤسسة", body: "جرد في يوم، أجل مؤمَّن، أربعة حسابات باسمكم، ونسخة احتياطية تمسكونها. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.messagerie, kind: '2027', name: 'البريد المهني: اسم النطاق، العلب، ومغادرة الأجير' },
      { href: L.heberger, kind: '2027', name: 'استضافة تطبيق في الجزائر أو في أوروبا: أين نضع الخوادم والبيانات' },
      { href: L.sauvegardes, kind: '2027', name: 'إذا مات الخادم غداً: النسخ الاحتياطية، الاسترجاع المجرَّب، أجل الاستئناف' },
      { href: L.infogerance, kind: '2027', name: 'صيانة الإعلام الآلي وتسييره: المتابعة، الآجال، التقرير الشهري' },
    ] },
  },
};

const KEYWORDS = "nom de domaine algérie 2027, nom de domaine .dz, acheter nom de domaine algerie, hébergement site web algérie, hebergeur site web algerie, nom de domaine expiré que faire, récupérer nom de domaine ancien prestataire, transfert nom de domaine code de transfert, à qui appartient mon nom de domaine, site web tombé domaine expiré, domain name algeria 2027, website hosting algeria company, domain expired former agency recover, اسم النطاق الجزائر 2027, استضافة المواقع في الجزائر, استرجاع اسم النطاق";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
