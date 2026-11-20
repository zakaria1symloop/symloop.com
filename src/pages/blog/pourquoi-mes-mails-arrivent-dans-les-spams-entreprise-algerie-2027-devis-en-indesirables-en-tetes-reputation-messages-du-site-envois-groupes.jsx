import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/pourquoi-mes-mails-arrivent-dans-les-spams-entreprise-algerie-2027-devis-en-indesirables-en-tetes-reputation-messages-du-site-envois-groupes.mjs';

const SLUG = 'pourquoi-mes-mails-arrivent-dans-les-spams-entreprise-algerie-2027-devis-en-indesirables-en-tetes-reputation-messages-du-site-envois-groupes';
const FIGURES = ['etapes', 'entetes', 'causes', 'couches', 'flux', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  messagerie: '/blog/messagerie-professionnelle-entreprise-algerie-2027-nom-de-domaine-boites-spf-dkim-dmarc-depart-employe-microsoft-365/',
  fauxmail: '/blog/comment-reconnaitre-un-faux-mail-en-entreprise-algerie-2027-hameconnage-adresse-de-l-expediteur-lien-piege-double-authentification-signaler/',
  formulaire: '/blog/comment-faire-un-formulaire-en-ligne-en-algerie-2027-inscriptions-demandes-de-devis-reponses-dans-un-tableur-doublons-spam-accuse-de-reception/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  domaine: '/blog/nom-de-domaine-hebergement-site-web-entreprise-algerie-2027-qui-possede-quoi-domaine-expire-ancien-prestataire-reprendre-la-main/',
  hebergeur: '/blog/comment-changer-d-hebergeur-de-site-internet-en-algerie-2027-sans-coupure-site-mails-dns-bascule-retour-arriere-transfert-du-nom-de-domaine/',
  ecommerce: '/blog/comment-creer-un-site-e-commerce-en-algerie-2027-paiement-a-la-livraison-livraison-par-wilaya-confirmation-retours-plateforme-ou-sur-mesure/',
};

const CONTENT = {
  fr: {
    kind: 'Messagerie · Algérie · 2027', title: "Pourquoi mes mails arrivent dans les spams, en entreprise en Algérie (2027) : nos devis et nos factures finissent en indésirables alors que la messagerie est réglée, lire les en-têtes, trouver qui envoie vraiment, la réputation, les messages du site, les envois groupés",
    dek: "« Nos devis et nos factures partent, mais nos clients les retrouvent dans les indésirables, ou ne les retrouvent pas. Notre informaticien assure que la messagerie est bien réglée. Les confirmations de commande du site n'arrivent pas non plus, et depuis notre dernier envoi à tous les clients, c'est pire. Pourquoi nos mails arrivent en spam, et comment en sortir ? » Un message est jugé trois fois : sur ses preuves, sur la réputation de celui qui l'envoie, et sur ce que les destinataires en font. Quand la messagerie est réglée, le coupable est presque toujours un autre expéditeur : le site, ou l'envoi groupé.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Délivrabilité des e-mails', 'Indésirables', 'Réputation d’expéditeur', 'Messages du site', 'Envois groupés', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un message est jugé trois fois : sur **ses preuves** (SPF, DKIM, DMARC), sur **la réputation** du domaine et du serveur qui l'envoient, et sur **ce que les destinataires en font**. Si la messagerie est réglée et que vos mails arrivent quand même en indésirables, cherchez un autre expéditeur : **le site**, qui envoie souvent par le serveur de l'hébergeur sans y être autorisé, ou **l'envoi groupé**, parti de la boîte ordinaire. Le diagnostic se lit dans les en-têtes d'un message arrivé en spam. Le remède : déclarer chaque expéditeur, donner un chemin à chaque usage, et rester loin de 0,3 % de plaintes. Quatre semaines dans l'exemple.",
      "Cette page s'adresse au gérant dont les devis, les factures ou les messages du site n'arrivent pas, et au fondateur installé en France dont les clients en Algérie, ou l'inverse, ne reçoivent pas ses messages. Les règles citées viennent de sources publiques : les consignes de Google aux expéditeurs, les bonnes pratiques publiées par Yahoo, et des définitions d'encyclopédie. L'entreprise, ses deux messages, ses trois flux et son calendrier sont un exemple construit. Cette page ne reprend pas le réglage de SPF, DKIM et DMARC, expliqué dans [le guide sur la messagerie professionnelle](" + L.messagerie + "), et ne traite pas des règles légales sur la prospection par courrier électronique : voyez votre conseil.",
    ],
    sections: [
      { heading: "Sortir des indésirables : diagnostiquer en six temps", body: [
        "Le premier temps est accentué : récupérer un message arrivé en spam.",
      ], visual: 'etapes', after: [
        "**Commencer par une pièce.** On ne diagnostique pas sur un récit, mais sur un message : demandez à un client de vous transférer, en pièce jointe, un message arrivé en indésirables. Ses en-têtes disent quel serveur l'a envoyé et ce que le serveur du client en a conclu. Faites de même pour trois messages : un devis écrit à la main, une confirmation du site, un envoi groupé. **Trois questions.** Qui a envoyé ? Les preuves réussissent-elles ? Et si elles réussissent, que vaut la réputation de l'expéditeur ?",
        "**Le pourriel, vu d'en face.** Le pourriel désigne les messages non sollicités envoyés en masse. Le serveur de votre client ne lit pas vos intentions : il compare votre message à ce qu'il a déjà vu, et à ce que ses utilisateurs ont signalé. **Des règles publiées.** Les grands fournisseurs de boîtes publient leurs exigences : Google en fait la liste pour tous les expéditeurs, et en ajoute pour ceux qui envoient plus de 5 000 messages par jour vers des comptes Gmail. Une petite entreprise est loin de ce volume ; les mêmes vérifications s'appliquent pourtant à chacun de ses messages.",
      ] },
      { heading: "Deux messages, le même expéditeur affiché", body: [
        "La figure compare les en-têtes de deux messages reçus par le même client.",
      ], visual: 'entetes', after: [
        "**Où c'est écrit.** Un champ d'en-tête nommé Authentication-Results permet au serveur qui reçoit d'y inscrire le résultat de ses vérifications. Dans la messagerie du destinataire, le menu « afficher l'original » ou « afficher la source » le montre. On y cherche trois mots, spf, dkim, dmarc, suivis de pass ou de fail. **Qui a envoyé.** La ligne Received nomme le serveur d'où le message est parti. Dans l'exemple, la confirmation de commande n'est pas partie de la messagerie : elle est partie du serveur qui héberge le site.",
        "**Pourquoi le site échoue.** Un site envoie des messages, confirmations, formulaires, mots de passe oubliés, le plus souvent par le serveur de son hébergeur. Si le domaine ne déclare pas ce serveur, SPF échoue ; si le site ne signe pas, DKIM manque ; et DMARC, qui exige que ces preuves portent sur le domaine affiché, échoue à son tour. Google le résume ainsi : tous les expéditeurs, SPF ou DKIM ; les expéditeurs en masse, SPF, DKIM et DMARC. **Le formulaire.** C'est aussi pourquoi l'accusé de réception d'un formulaire n'arrive pas, comme le décrit [le guide sur les formulaires en ligne](" + L.formulaire + ").",
      ] },
      { heading: "Six causes, leur signe, et ce qu'on fait", body: [
        "La figure donne, pour chaque cause, le signe qui la trahit et la correction.",
      ], visual: 'causes', after: [
        "**L'adresse partagée.** Dans un hébergement mutualisé, de nombreux sites résident sur un même serveur, et peuvent partager une seule adresse IP. Si l'un d'eux envoie du pourriel, l'adresse entière en porte la marque. Une liste de blocage DNS est un service que les serveurs de messagerie interrogent pour savoir si l'adresse d'un expéditeur y figure : la vôtre peut y être sans que vous ayez rien envoyé. **Ce qu'on fait.** On fait sortir les messages du site par un service d'envoi dont c'est le métier, et on demande le retrait ensuite. Changer d'hébergeur est une autre décision, décrite dans [le guide pour changer d'hébergeur](" + L.hebergeur + ").",
        "**Les rebonds.** Un message de non-remise est un message automatique qui informe l'expéditeur qu'un message précédent n'a pas été livré. Une liste qui en produit beaucoup dit au serveur d'en face que vous écrivez à des adresses que vous ne connaissez pas. **La copie cachée.** Trois cents clients en copie cachée depuis la boîte du gérant, c'est un envoi groupé sans désinscription, parti de l'adresse qui envoie aussi les devis. **Le contenu.** Un texte simple, un lien vers le document plutôt qu'une pièce de dix mégaoctets, pas de lien raccourci : un message qui ressemble à ceux que l'on signale est traité comme eux. Vos clients, eux, apprennent à se méfier, comme le rappelle [le guide sur les faux mails](" + L.fauxmail + ").",
      ] },
      { heading: "Ce que regarde le serveur du destinataire, en cinq couches", body: [
        "La couche accentuée est la réputation.",
      ], visual: 'couches', after: [
        "**Avant le message.** Le serveur qui envoie doit avoir un nom vérifiable dans les deux sens : l'adresse mène au nom, et le nom ramène à l'adresse. Google le demande à tous les expéditeurs : des enregistrements DNS directs et inverses valides. **La réputation.** Elle s'attache au domaine et à l'adresse d'envoi, et se construit sur ce que les destinataires font de vos messages. Le signalement comme indésirable en est le cœur : une boucle de rétroaction est le mécanisme par lequel un fournisseur de boîtes transmet à l'expéditeur les plaintes de ses utilisateurs.",
        "**Le seuil.** Google demande de garder le taux de messages signalés sous 0,10 %, et de ne jamais atteindre 0,30 % ; Yahoo fixe la même limite de 0,3 %. Trois plaintes pour mille messages suffisent donc. Pour les messages commerciaux et les abonnements, les deux exigent une désinscription en un clic, avec un lien visible dans le message. **Le consentement.** Une liste où chacun a choisi de s'inscrire, plutôt que d'y être ajouté d'office, produit peu de plaintes : c'est la seule protection durable.",
      ] },
      { heading: "Trois flux, trois chemins", body: [
        "La figure montre la même entreprise, avant et après la séparation des flux.",
      ], visual: 'flux', after: [
        "**Trois usages.** Le courrier des personnes : devis, factures, réponses. Les messages du site, dits transactionnels : ils sont déclenchés par une action du client, commande, inscription, mot de passe. Les envois groupés : lettre d'information, offres. **Pourquoi les séparer.** Google le recommande : si l'on envoie depuis plusieurs adresses IP, une adresse par type de message ; et les messages d'une même catégorie portent la même adresse d'expéditeur. Dans l'exemple, chaque usage reçoit son sous-domaine et son service d'envoi : la réputation de la lettre ne se mélange plus à celle des devis.",
        "**Monter doucement.** Un nouveau chemin n'a pas de passé. Google conseille de commencer par un faible volume, vers des destinataires qui réagissent, et d'augmenter lentement. **Le bon canal.** Tout ne doit pas partir par courrier électronique : un code de connexion ou un rappel de rendez-vous arrive mieux par SMS ou par WhatsApp, selon [le guide sur les notifications](" + L.notifications + "). **Sur une boutique.** Les confirmations de commande suivent la même règle, décrite dans [le guide pour créer un site e-commerce](" + L.ecommerce + ").",
      ] },
      { heading: "Quatre semaines pour sortir des indésirables, en 2027", body: [
        "Quatre semaines dans l'exemple, dont la première pour le diagnostic.",
      ], visual: 'calendrier', after: [
        "**L'ordre.** La première semaine, le diagnostic : trois messages, leurs en-têtes, et la liste de tout ce qui envoie au nom du domaine. On y trouve presque toujours un expéditeur oublié : le site, le logiciel de facturation, le copieur qui envoie les numérisations. Les preuves se réparent en quelques jours, à condition d'avoir la main sur le domaine, ce que rappelle [le guide sur le nom de domaine](" + L.domaine + "). **La réputation, elle, se regagne en semaines.** Une fois les flux séparés et les listes nettoyées, les envois groupés reprennent par petits lots.",
        "**Mesurer.** Chaque mois : le taux de plaintes des envois groupés, les rebonds, et trois messages d'essai relus dans deux boîtes de fournisseurs différents, en-têtes compris. **Ce qui fait tenir.** Une règle : rien n'envoie au nom du domaine sans être inscrit sur la liste des expéditeurs, et personne n'écrit à plus de vingt destinataires depuis sa boîte.",
      ], list: [
        "**Ce que le gérant reçoit** : le diagnostic sur trois messages réels, en-têtes à l'appui ; la liste de tout ce qui envoie au nom du domaine ; chaque expéditeur déclaré et signé ; le site branché sur un service d'envoi ; un chemin par usage ; des listes nettoyées avec désinscription ; une mesure mensuelle.",
        "**Ce que l'entreprise ne fait plus** : appeler le client pour lui dire de regarder dans ses indésirables, envoyer à trois cents personnes en copie cachée, laisser le site envoyer par un serveur que personne n'a déclaré, joindre dix mégaoctets à un devis.",
        "**Ce qui est mesuré** : messages d'essai où les trois preuves réussissent, taux de plaintes des envois groupés, rebonds par envoi, présence de l'adresse d'envoi sur les listes de blocage, expéditeurs non déclarés trouvés dans les rapports.",
        "**Ce que fait Symloop** : la lecture des en-têtes et le diagnostic, l'inventaire des expéditeurs, la déclaration et la signature de chacun, le branchement du site et de vos applications sur un service d'envoi, la séparation des flux par adresse et sous-domaine, le nettoyage des listes, la montée en volume, puis la mesure chaque mois.",
      ], faq: [
        { q: "Pourquoi mes mails arrivent dans les spams ?", a: "Pour l'une de trois raisons : une preuve d'envoi échoue, la réputation du domaine ou du serveur est mauvaise, ou le message ressemble à ceux que les destinataires signalent. Les en-têtes d'un message arrivé en indésirables disent laquelle : cherchez-y spf, dkim et dmarc, suivis de pass ou de fail." },
        { q: "Comment savoir pourquoi un mail est arrivé en spam ?", a: "Demandez au destinataire de vous le transférer en pièce jointe, puis ouvrez « afficher l'original ». La ligne Received dit quel serveur a envoyé ; le champ Authentication-Results dit si SPF, DKIM et DMARC ont réussi. Si tout réussit, la cause est la réputation ou le contenu." },
        { q: "SPF, DKIM et DMARC sont réglés : pourquoi cela continue ?", a: "Parce qu'ils sont réglés pour la messagerie, pas pour tout ce qui envoie. Le site, le logiciel de facturation ou un outil d'envoi groupé passent souvent par un autre serveur, jamais déclaré. Ou bien les preuves réussissent, et c'est la réputation, abîmée par des plaintes, qui fait classer le message." },
        { q: "Pourquoi les mails de mon site n'arrivent pas ?", a: "Le site envoie le plus souvent par le serveur de son hébergeur, que votre domaine n'a pas autorisé, et sans signature. Sur un hébergement mutualisé, il partage en plus son adresse avec d'autres sites. La correction : faire passer ces messages par un service d'envoi déclaré, sous une adresse dédiée." },
        { q: "Qu'est-ce qu'une liste de blocage, et comment en sortir ?", a: "C'est un service que les serveurs de messagerie interrogent pour savoir si l'adresse d'un expéditeur est signalée pour pourriel. On en sort en corrigeant la cause, puis en demandant le retrait à la liste. Si l'adresse est partagée avec d'autres sites, changez de chemin d'envoi." },
        { q: "Peut-on envoyer une lettre d'information depuis Outlook ou Gmail ?", a: "Non, pas au-delà de quelques destinataires. Un envoi groupé en copie cachée n'a ni lien de désinscription, ni mesure des plaintes, et il part de l'adresse qui envoie vos devis. Utilisez un outil d'envoi groupé, sous une adresse et un sous-domaine séparés." },
        { q: "Quel taux de plaintes ne faut-il pas dépasser ?", a: "Google demande de rester sous 0,10 % de messages signalés et de ne jamais atteindre 0,30 % ; Yahoo fixe aussi 0,3 %. Soit trois plaintes pour mille messages. Au-delà, ce sont tous les messages du même expéditeur qui risquent les indésirables." },
        { q: "Faut-il un sous-domaine pour les envois groupés ?", a: "C'est le plus sûr. Un sous-domaine et une adresse par usage donnent à chaque flux sa propre réputation : une campagne mal ciblée n'entraîne plus les devis et les factures. Google recommande de son côté une même adresse d'expéditeur par catégorie de messages." },
        { q: "Les pièces jointes font-elles arriver en spam ?", a: "Une pièce lourde, un format inhabituel ou un fichier compressé y contribuent, surtout venant d'un expéditeur peu connu. Préférez un lien vers le document, ou un PDF léger, et un texte qui dit clairement ce que contient le message." },
        { q: "Combien de temps faut-il pour sortir des spams ?", a: "Quatre semaines dans l'exemple de cette page. Les preuves se réparent en quelques jours ; la réputation se regagne plus lentement, en reprenant les envois groupés par petits lots et en gardant les plaintes très en dessous de 0,3 %." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "La panne est rarement la messagerie : c'est un expéditeur que personne n'a déclaré." },
      { after: 4, text: "Une plainte contre la lettre d'information ne doit jamais coûter un devis." },
    ],
    cta: { eyebrow: "Transférez-nous, en pièce jointe, un message arrivé en indésirables : le diagnostic commence par ses en-têtes", title: "Devis que les clients ne trouvent pas, confirmations du site qui n'arrivent jamais, envoi à tous les clients suivi d'une semaine d'indésirables, ou fondateur en France dont les messages n'atteignent pas l'Algérie : nous lisons, nous déclarons, nous séparons", body: "Lecture des en-têtes, inventaire des expéditeurs, déclaration et signature de chacun, site et applications branchés sur un service d'envoi, un chemin par usage, listes nettoyées, montée en volume, mesure mensuelle. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.messagerie, kind: '2027', name: 'Messagerie professionnelle : domaine, boîtes, SPF, DKIM, DMARC' },
      { href: L.fauxmail, kind: '2027', name: 'Reconnaître un faux mail : expéditeur, lien piégé, signalement' },
      { href: L.formulaire, kind: '2027', name: 'Formulaire en ligne : accusé de réception, doublons, spam' },
      { href: L.domaine, kind: '2027', name: 'Nom de domaine et hébergement : qui possède quoi' },
    ] },
  },
  en: {
    kind: 'Business email · Algeria · 2027', title: "Why do my emails go to spam, for a company in Algeria (2027): our quotes and invoices end up in junk although the mail service is set up, reading the headers, finding who really sends, reputation, the website's messages, bulk mail",
    dek: "“Our quotes and invoices go out, but our customers find them in junk, or do not find them at all. Our IT person assures us the mail service is set up properly. The website's order confirmations do not arrive either, and since our last mailing to all customers, it has got worse. Why do our emails go to spam, and how do we get out?” A message is judged three times: on its proofs, on the reputation of whoever sends it, and on what recipients do with it. When the mail service is set up, the culprit is almost always another sender: the website, or the bulk mailing.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Email deliverability', 'Junk mail', 'Sender reputation', 'Website messages', 'Bulk mail', 'Algeria 2027'],
    intro: [
      "**Short answer.** A message is judged three times: on **its proofs** (SPF, DKIM, DMARC), on **the reputation** of the domain and server sending it, and on **what recipients do with it**. If the mail service is set up and your emails still land in junk, look for another sender: **the website**, which often sends through the host's server without being authorised, or **the bulk mailing**, sent from the ordinary mailbox. The diagnosis is read in the headers of a message that went to spam. The remedy: declare each sender, give each use its own path, and stay far from 0.3% of complaints. Four weeks in the example.",
      "This page is for the manager whose quotes, invoices or website messages do not arrive, and for the founder based in France whose customers in Algeria, or the reverse, do not receive their messages. The rules quoted come from public sources: Google's email sender guidelines, the best practices published by Yahoo, and encyclopaedia definitions. The company, its two messages, its three streams and its calendar are a constructed example. This page does not go back over setting up SPF, DKIM and DMARC, explained in [the guide to business email](" + L.messagerie + "), and does not cover the legal rules on prospecting by email: see your adviser.",
    ],
    sections: [
      { heading: "Getting out of junk: diagnosing in six steps", body: [
        "The first step is accented: recover a message that went to spam.",
      ], visual: 'etapes', after: [
        "**Start from evidence.** You do not diagnose from a story, but from a message: ask a customer to forward you, as an attachment, a message that landed in junk. Its headers say which server sent it and what the customer's server concluded. Do the same for three messages: a quote written by hand, a confirmation from the website, a bulk mailing. **Three questions.** Who sent it? Do the proofs pass? And if they pass, what is the sender's reputation worth?",
        "**Spam, seen from the other side.** Email spam refers to unsolicited messages sent in bulk. Your customer's server does not read your intentions: it compares your message with what it has already seen, and with what its users have reported. **Published rules.** The large mailbox providers publish their requirements: Google lists them for all senders, and adds more for those who send more than 5,000 messages per day to Gmail accounts. A small company is far from that volume; the same checks nevertheless apply to each of its messages.",
      ] },
      { heading: "Two messages, the same sender shown", body: [
        "The figure compares the headers of two messages received by the same customer.",
      ], visual: 'entetes', after: [
        "**Where it is written.** A header field named Authentication-Results lets the receiving server record the results of the checks it carried out. In the recipient's mail program, the menu “show original” or “view source” displays it. Look for three words, spf, dkim, dmarc, followed by pass or fail. **Who sent it.** The Received line names the server the message left from. In the example, the order confirmation did not leave from the mail service: it left from the server that hosts the website.",
        "**Why the website fails.** A website sends messages, confirmations, forms, forgotten passwords, most often through its host's server. If the domain does not declare that server, SPF fails; if the website does not sign, DKIM is missing; and DMARC, which requires these proofs to apply to the domain shown, fails in turn. Google sums it up: all senders, SPF or DKIM; bulk senders, SPF, DKIM, and DMARC. **The form.** That is also why a form's acknowledgement does not arrive, as described in [the guide to online forms](" + L.formulaire + ").",
      ] },
      { heading: "Six causes, their sign, and what is done", body: [
        "The figure gives, for each cause, the sign that betrays it and the fix.",
      ], visual: 'causes', after: [
        "**The shared address.** In shared web hosting, many websites reside on one web server, and may share a single IP address. If one of them sends spam, the whole address carries the mark. A DNS blocklist is a service mail servers query to check whether a sending host's IP address is listed for email spam: yours can be on it without your having sent anything. **What is done.** The website's messages are sent through a sending service whose job it is, and removal is requested afterwards. Changing host is another decision, described in [the guide to changing host](" + L.hebergeur + ").",
        "**Bounces.** A bounce message is an automated message informing the sender that a previous message has not been delivered. A list that produces many of them tells the other server that you write to addresses you do not know. **Blind copy.** Three hundred customers in blind copy from the manager's mailbox is a bulk mailing with no unsubscribe, sent from the address that also sends the quotes. **Content.** Plain text, a link to the document rather than a ten-megabyte attachment, no shortened link: a message that looks like those people report is treated like them. Your customers, for their part, are learning to be wary, as [the guide to fake emails](" + L.fauxmail + ") recalls.",
      ] },
      { heading: "What the recipient's server looks at, in five layers", body: [
        "The accented layer is reputation.",
      ], visual: 'couches', after: [
        "**Before the message.** The sending server must have a name that checks out both ways: the address leads to the name, and the name leads back to the address. Google asks it of all senders: valid forward and reverse DNS records. **Reputation.** It attaches to the domain and to the sending address, and is built on what recipients do with your messages. Reports as junk are at its heart: a feedback loop is the mechanism by which a mailbox provider forwards its users' complaints to the sender's organisation.",
        "**The threshold.** Google asks to keep spam rates below 0.10% and to avoid ever reaching 0.30%; Yahoo sets the same limit of 0.3%. Three complaints per thousand messages are therefore enough. For marketing and subscribed messages, both require one-click unsubscribe, with a clearly visible link in the message. **Consent.** A list people chose to join, rather than being added to by default, produces few complaints: it is the only lasting protection.",
      ] },
      { heading: "Three streams, three paths", body: [
        "The figure shows the same company, before and after its streams are separated.",
      ], visual: 'flux', after: [
        "**Three uses.** People's mail: quotes, invoices, replies. The website's messages, called transactional: they are triggered by a customer's action, an order, a registration, a password. Bulk mail: newsletter, offers. **Why separate them.** Google recommends it: if you must send from multiple IP addresses, use a different IP address for each message type; and messages of the same category should have the same From address. In the example, each use gets its sub-domain and its sending service: the newsletter's reputation no longer mixes with the quotes'.",
        "**Raise it gently.** A new path has no past. Google advises starting with a low sending volume to engaged users, and slowly increasing the volume over time. **The right channel.** Not everything has to go by email: a sign-in code or an appointment reminder arrives better by SMS or WhatsApp, as in [the guide to notifications](" + L.notifications + "). **On a shop.** Order confirmations follow the same rule, described in [the guide to creating an e-commerce site](" + L.ecommerce + ").",
      ] },
      { heading: "Four weeks to get out of junk, in 2027", body: [
        "Four weeks in the example, the first for the diagnosis.",
      ], visual: 'calendrier', after: [
        "**The order.** In the first week, the diagnosis: three messages, their headers, and the list of everything that sends in the domain's name. A forgotten sender is almost always found: the website, the invoicing software, the copier that sends scans. Proofs are repaired in a few days, provided you control the domain, as [the guide to the domain name](" + L.domaine + ") recalls. **Reputation is won back over weeks.** Once streams are separated and lists cleaned, bulk mail resumes in small batches.",
        "**Measure.** Each month: the complaint rate of bulk mailings, the bounces, and three test messages re-read in two mailboxes from different providers, headers included. **What makes it hold.** One rule: nothing sends in the domain's name without being on the list of senders, and nobody writes to more than twenty recipients from their own mailbox.",
      ], list: [
        "**What the manager receives**: the diagnosis on three real messages, with headers as evidence; the list of everything that sends in the domain's name; each sender declared and signed; the website connected to a sending service; one path per use; lists cleaned, with unsubscribe; a monthly measure.",
        "**What the company no longer does**: call the customer to tell them to look in junk, write to three hundred people in blind copy, let the website send through a server nobody declared, attach ten megabytes to a quote.",
        "**What is measured**: test messages where all three proofs pass, the complaint rate of bulk mailings, bounces per mailing, presence of the sending address on blocklists, undeclared senders found in the reports.",
        "**What Symloop does**: reading the headers and the diagnosis, the inventory of senders, declaring and signing each one, connecting the website and your applications to a sending service, separating streams by address and sub-domain, cleaning lists, raising volume, then measuring each month.",
      ], faq: [
        { q: "Why do my emails go to spam?", a: "For one of three reasons: a sending proof fails, the reputation of the domain or server is bad, or the message looks like those recipients report. The headers of a message that landed in junk say which: look for spf, dkim and dmarc, followed by pass or fail." },
        { q: "How do I find out why an email went to spam?", a: "Ask the recipient to forward it to you as an attachment, then open “show original”. The Received line says which server sent it; the Authentication-Results field says whether SPF, DKIM and DMARC passed. If everything passes, the cause is reputation or content." },
        { q: "SPF, DKIM and DMARC are set up: why does it go on?", a: "Because they are set up for the mail service, not for everything that sends. The website, the invoicing software or a bulk mailing tool often go through another server, never declared. Or the proofs pass, and it is reputation, damaged by complaints, that gets the message filed as junk." },
        { q: "Why do the emails from my website not arrive?", a: "The website most often sends through its host's server, which your domain has not authorised, and without a signature. On shared hosting, it also shares its address with other sites. The fix: send these messages through a declared sending service, under a dedicated address." },
        { q: "What is a blocklist, and how do you get off it?", a: "It is a service mail servers query to check whether a sender's address is listed for spam. You get off it by fixing the cause, then asking the list for removal. If the address is shared with other sites, change the sending path." },
        { q: "Can a newsletter be sent from Outlook or Gmail?", a: "No, not beyond a few recipients. A bulk mailing in blind copy has no unsubscribe link, no measure of complaints, and it leaves from the address that sends your quotes. Use a bulk sending tool, under a separate address and sub-domain." },
        { q: "What complaint rate must not be exceeded?", a: "Google asks to stay below 0.10% of reported messages and never to reach 0.30%; Yahoo also sets 0.3%. That is three complaints per thousand messages. Beyond that, all messages from the same sender risk the junk folder." },
        { q: "Is a sub-domain needed for bulk mail?", a: "It is the safest. A sub-domain and an address per use give each stream its own reputation: a badly targeted campaign no longer drags the quotes and invoices with it. Google, for its part, recommends one From address per category of messages." },
        { q: "Do attachments send emails to spam?", a: "A heavy file, an unusual format or a compressed file contribute, especially from a little-known sender. Prefer a link to the document, or a light PDF, and a text that says clearly what the message contains." },
        { q: "How long does it take to get out of spam?", a: "Four weeks in this page's example. Proofs are repaired in a few days; reputation is won back more slowly, by resuming bulk mail in small batches and keeping complaints well below 0.3%." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The fault is rarely the mail service: it is a sender nobody declared." },
      { after: 4, text: "A complaint about the newsletter must never cost a quote." },
    ],
    cta: { eyebrow: "Forward us, as an attachment, a message that landed in junk: the diagnosis starts with its headers", title: "Quotes customers cannot find, website confirmations that never arrive, a mailing to all customers followed by a week in junk, or a founder in France whose messages do not reach Algeria: we read, we declare, we separate", body: "Reading the headers, inventory of senders, each one declared and signed, website and applications connected to a sending service, one path per use, lists cleaned, volume raised, a monthly measure. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.messagerie, kind: '2027', name: 'Business email: domain, mailboxes, SPF, DKIM, DMARC' },
      { href: L.fauxmail, kind: '2027', name: 'Spotting a fake email: sender, trapped link, reporting' },
      { href: L.formulaire, kind: '2027', name: 'Online form: acknowledgement, duplicates, spam' },
      { href: L.domaine, kind: '2027', name: 'Domain name and hosting: who owns what' },
    ] },
  },
  ar: {
    kind: 'بريد المؤسسة · الجزائر · 2027', title: "لماذا تصل رسائلي إلى البريد غير المرغوب فيه، في مؤسسة بالجزائر (2027): عروض أسعارنا وفواتيرنا تنتهي في السبام مع أن البريد مضبوط، قراءة رأس الرسالة، معرفة من يرسل فعلاً، السمعة، رسائل الموقع، والإرسال الجماعي",
    dek: "«عروض أسعارنا وفواتيرنا تخرج، لكن زبائننا يجدونها في البريد غير المرغوب فيه، أو لا يجدونها. تقني المعلوماتية عندنا يؤكد أن البريد مضبوط جيداً. وتأكيدات الطلبيات من الموقع لا تصل هي كذلك، ومنذ آخر إرسال لنا لكل الزبائن، صار الأمر أسوأ. لماذا تصل رسائلنا إلى السبام، وكيف نخرج منه؟» الرسالة تُحاكَم ثلاث مرات: على إثباتاتها، على سمعة من يرسلها، وعلى ما يفعله المستلِمون بها. وحين يكون البريد مضبوطاً، فالمتهَم في أغلب الأحيان مرسِل آخر: الموقع، أو الإرسال الجماعي.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['وصول الرسائل الإلكترونية', 'البريد غير المرغوب فيه', 'سمعة المرسِل', 'رسائل الموقع', 'الإرسال الجماعي', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** الرسالة تُحاكَم ثلاث مرات: على **إثباتاتها** (" + I('SPF') + " و" + I('DKIM') + " و" + I('DMARC') + ")، على **سمعة** النطاق والخادم اللذين يرسلانها، وعلى **ما يفعله المستلِمون بها**. وإذا كان البريد مضبوطاً ورسائلكم تصل مع ذلك إلى البريد غير المرغوب فيه، فابحثوا عن مرسِل آخر: **الموقع**، الذي يرسل غالباً عبر خادم المستضيف دون أن يُسمح له، أو **الإرسال الجماعي**، الخارج من الصندوق العادي. والتشخيص يُقرأ في رأس رسالة وصلت إلى السبام. والعلاج: التصريح بكل مرسِل، مسار لكل استعمال، والبقاء بعيداً عن " + I('0.3%') + " من الشكاوى. أربعة أسابيع في المثال.",
      "هذه الصفحة موجَّهة إلى المسيّر الذي لا تصل عروض أسعاره أو فواتيره أو رسائل موقعه، وإلى المؤسس المقيم في فرنسا الذي لا يستلم زبائنه في الجزائر رسائله، أو العكس. القواعد المذكورة آتية من مصادر علنية: تعليمات " + I('Google') + " للمرسِلين، الممارسات التي تنشرها " + I('Yahoo') + "، وتعريفات موسوعية. المؤسسة ورسالتاها وتدفقاتها الثلاثة ورزنامتها مثال مركَّب. هذه الصفحة لا تعيد ضبط الإثباتات الثلاثة، المشروح في [دليل البريد المهني](" + L.messagerie + ")، ولا تتناول القواعد القانونية للتسويق بالبريد الإلكتروني: راجعوا مستشاركم.",
    ],
    sections: [
      { heading: "الخروج من البريد غير المرغوب فيه: التشخيص في ست مراحل", body: [
        "المرحلة الأولى مبرزة: استرجاع رسالة وصلت إلى السبام.",
      ], visual: 'etapes', after: [
        "**البدء بوثيقة.** لا يُشخَّص على رواية، بل على رسالة: اطلبوا من زبون أن يحوّل إليكم، كمرفق، رسالة وصلت إلى البريد غير المرغوب فيه. رأسها يقول أي خادم أرسلها وما استنتجه خادم الزبون. وافعلوا ذلك لثلاث رسائل: عرض سعر مكتوب باليد، تأكيد من الموقع، وإرسال جماعي. **ثلاثة أسئلة.** من أرسل؟ هل الإثباتات تنجح؟ وإن نجحت، فما قيمة سمعة المرسِل؟",
        "**السبام، من الجهة الأخرى.** السبام يعني الرسائل غير المطلوبة المرسَلة بالجملة. وخادم زبونكم لا يقرأ نواياكم: يقارن رسالتكم بما رآه من قبل، وبما بلّغ عنه مستعملوه. **قواعد منشورة.** كبار مزوّدي الصناديق ينشرون متطلباتهم: " + I('Google') + " تسردها لكل المرسِلين، وتضيف أخرى لمن يرسلون أكثر من 5000 رسالة في اليوم نحو حسابات " + I('Gmail') + ". ومؤسسة صغيرة بعيدة عن هذا الحجم؛ ومع ذلك تُطبَّق المراجعات نفسها على كل رسالة من رسائلها.",
      ] },
      { heading: "رسالتان، والمرسِل الظاهر نفسه", body: [
        "الشكل يقارن رأسَي رسالتين استلمهما الزبون نفسه.",
      ], visual: 'entetes', after: [
        "**أين هو مكتوب.** حقل في الرأس اسمه " + I('Authentication-Results') + " يسمح للخادم المستلِم بتسجيل نتيجة مراجعاته. وفي بريد المستلِم، قائمة «عرض الأصل» أو «عرض المصدر» تُظهره. ويُبحث فيه عن ثلاث كلمات، " + I('spf') + " و" + I('dkim') + " و" + I('dmarc') + "، متبوعة بكلمة " + I('pass') + " أو " + I('fail') + ". **من أرسل.** سطر " + I('Received') + " يسمّي الخادم الذي خرجت منه الرسالة. في المثال، تأكيد الطلبية لم يخرج من خدمة البريد: خرج من الخادم الذي يستضيف الموقع.",
        "**لماذا يفشل الموقع.** الموقع يرسل رسائل، تأكيدات واستمارات وكلمات مرور منسية، غالباً عبر خادم مستضيفه. وإذا لم يصرّح النطاق بهذا الخادم، يفشل الإثبات الأول؛ وإذا لم يوقّع الموقع، ينقص الثاني؛ والثالث، الذي يشترط أن تخص هذه الإثباتات النطاق الظاهر، يفشل بدوره. و" + I('Google') + " تلخّص: لكل المرسِلين، " + I('SPF') + " أو " + I('DKIM') + "؛ ولمرسِلي الجملة، الثلاثة معاً. **الاستمارة.** ولهذا كذلك لا يصل وصل استلام الاستمارة، كما يصفه [دليل الاستمارات عبر الإنترنت](" + L.formulaire + ").",
      ] },
      { heading: "ستة أسباب، علامتها، وما يُفعل", body: [
        "الشكل يعطي، لكل سبب، العلامة التي تفضحه والتصحيح.",
      ], visual: 'causes', after: [
        "**العنوان المشترك.** في الاستضافة المشتركة، مواقع كثيرة تقيم على خادم واحد، وقد تتقاسم عنوان " + I('IP') + " واحداً. وإذا أرسل أحدها سباماً، حمل العنوان كله الوصمة. وقائمة الحظر خدمة تستعلمها خوادم البريد لمعرفة هل عنوان المرسِل مسجَّل فيها: وعنوانكم قد يكون فيها دون أن ترسلوا شيئاً. **ما يُفعل.** تُخرَج رسائل الموقع عبر خدمة إرسال هذه مهنتها، ثم يُطلب الحذف. وتغيير المستضيف قرار آخر، موصوف في [دليل تغيير المستضيف](" + L.hebergeur + ").",
        "**الارتدادات.** رسالة عدم التسليم رسالة آلية تُعلم المرسِل بأن رسالة سابقة لم تُسلَّم. والقائمة التي تنتج كثيراً منها تقول للخادم المقابل إنكم تكتبون لعناوين لا تعرفونها. **النسخة المخفية.** ثلاثمئة زبون في نسخة مخفية من صندوق المسيّر إرسال جماعي دون إلغاء اشتراك، خارج من العنوان الذي يرسل عروض الأسعار كذلك. **المحتوى.** نص بسيط، رابط نحو الوثيقة بدل مرفق من عشرة ميغا، ولا رابط مختصر: الرسالة التي تشبه ما يُبلَّغ عنه تُعامَل مثله. وزبائنكم يتعلمون الحذر، كما يذكّر [دليل الرسائل المزيَّفة](" + L.fauxmail + ").",
      ] },
      { heading: "ما ينظر فيه خادم المستلِم، في خمس طبقات", body: [
        "الطبقة المبرزة هي السمعة.",
      ], visual: 'couches', after: [
        "**قبل الرسالة.** الخادم المرسِل يجب أن يكون له اسم يُتحقَّق منه في الاتجاهين: العنوان يقود إلى الاسم، والاسم يرجع إلى العنوان. و" + I('Google') + " تطلبه من كل المرسِلين: تسجيلات " + I('DNS') + " مباشرة وعكسية صحيحة. **السمعة.** ترتبط بالنطاق وبعنوان الإرسال، وتُبنى على ما يفعله المستلِمون برسائلكم. والتبليغ عن الرسالة قلبها: حلقة التغذية الراجعة هي الآلية التي يحوّل بها مزوّد الصناديق شكاوى مستعمليه إلى المرسِل.",
        "**العتبة.** " + I('Google') + " تطلب إبقاء نسبة الرسائل المبلَّغ عنها تحت " + I('0.10%') + "، وعدم بلوغ " + I('0.30%') + " أبداً؛ و" + I('Yahoo') + " تحدّد الحد نفسه، " + I('0.3%') + ". فثلاث شكاوى لكل ألف رسالة تكفي إذن. وللرسائل التجارية والاشتراكات، الاثنتان تشترطان إلغاء الاشتراك بنقرة واحدة، مع رابط ظاهر في الرسالة. **الموافقة.** القائمة التي اختار كل واحد الانضمام إليها، بدل أن يُضاف إليها تلقائياً، تنتج شكاوى قليلة: وهي الحماية الوحيدة التي تدوم.",
      ] },
      { heading: "ثلاثة تدفقات، ثلاثة مسارات", body: [
        "الشكل يُظهر المؤسسة نفسها، قبل فصل التدفقات وبعده.",
      ], visual: 'flux', after: [
        "**ثلاثة استعمالات.** بريد الأشخاص: عروض أسعار، فواتير، وأجوبة. رسائل الموقع، وتسمّى رسائل المعاملات: يطلقها فعل من الزبون، طلبية أو تسجيل أو كلمة مرور. والإرسال الجماعي: النشرة والعروض. **لماذا تُفصَل.** " + I('Google') + " توصي بذلك: عند الإرسال من عدة عناوين " + I('IP') + "، عنوان لكل نوع من الرسائل؛ ورسائل الفئة نفسها تحمل عنوان المرسِل نفسه. وفي المثال، لكل استعمال نطاقه الفرعي وخدمة إرساله: سمعة النشرة لم تعد تختلط بسمعة عروض الأسعار.",
        "**الصعود بهدوء.** المسار الجديد لا ماضي له. و" + I('Google') + " تنصح بالبدء بحجم ضعيف، نحو مستلِمين يتفاعلون، ثم الرفع ببطء. **القناة المناسبة.** ليس كل شيء يجب أن يخرج بالبريد الإلكتروني: رمز الدخول أو التذكير بموعد يصل أحسن برسالة قصيرة أو عبر واتساب، حسب [دليل الإشعارات](" + L.notifications + "). **في متجر.** تأكيدات الطلبيات تتبع القاعدة نفسها، الموصوفة في [دليل إنشاء موقع تجارة إلكترونية](" + L.ecommerce + ").",
      ] },
      { heading: "أربعة أسابيع للخروج من البريد غير المرغوب فيه، سنة 2027", body: [
        "أربعة أسابيع في المثال، والأول منها للتشخيص.",
      ], visual: 'calendrier', after: [
        "**الترتيب.** في الأسبوع الأول، التشخيص: ثلاث رسائل، رؤوسها، وقائمة كل ما يرسل باسم النطاق. ويُوجد فيها دائماً تقريباً مرسِل منسي: الموقع، برنامج الفوترة، أو آلة النسخ التي ترسل المسوحات. والإثباتات تُصلَح في بضعة أيام، بشرط أن يكون النطاق بين أيديكم، كما يذكّر [دليل اسم النطاق](" + L.domaine + "). **والسمعة تُسترجَع في أسابيع.** وبعد فصل التدفقات وتنظيف القوائم، يُستأنف الإرسال الجماعي على دفعات صغيرة.",
        "**القياس.** كل شهر: نسبة الشكاوى في الإرسال الجماعي، الارتدادات، وثلاث رسائل تجريبية تُعاد قراءتها في صندوقين من مزوّدَين مختلفين، بالرأس كذلك. **ما يجعله يصمد.** قاعدة: لا شيء يرسل باسم النطاق دون أن يكون مسجَّلاً في قائمة المرسِلين، ولا أحد يكتب لأكثر من عشرين مستلِماً من صندوقه.",
      ], list: [
        "**ما يستلمه المسيّر**: التشخيص على ثلاث رسائل حقيقية، بالرؤوس دليلاً؛ قائمة كل ما يرسل باسم النطاق؛ كل مرسِل مصرَّح به وموقَّع؛ الموقع مربوط بخدمة إرسال؛ مسار لكل استعمال؛ قوائم منظَّفة بإلغاء اشتراك؛ وقياس شهري.",
        "**ما لم تعد المؤسسة تفعله**: الاتصال بالزبون ليبحث في بريده غير المرغوب فيه، الكتابة لثلاثمئة شخص في نسخة مخفية، ترك الموقع يرسل عبر خادم لم يصرّح به أحد، وإرفاق عشرة ميغا بعرض سعر.",
        "**ما يُقاس**: الرسائل التجريبية التي تنجح فيها الإثباتات الثلاثة، نسبة الشكاوى في الإرسال الجماعي، الارتدادات لكل إرسال، وجود عنوان الإرسال في قوائم الحظر، والمرسِلون غير المصرَّح بهم الموجودون في التقارير.",
        "**ما تفعله Symloop**: قراءة الرؤوس والتشخيص، جرد المرسِلين، التصريح بكل واحد وتوقيعه، ربط الموقع وتطبيقاتكم بخدمة إرسال، فصل التدفقات بالعنوان والنطاق الفرعي، تنظيف القوائم، رفع الحجم، ثم القياس كل شهر.",
      ], faq: [
        { q: "لماذا تصل رسائلي إلى البريد غير المرغوب فيه؟", a: "لأحد ثلاثة أسباب: إثبات إرسال يفشل، سمعة النطاق أو الخادم سيئة، أو الرسالة تشبه ما يبلّغ عنه المستلِمون. ورأس رسالة وصلت إلى السبام يقول أيها: ابحثوا فيه عن الإثباتات الثلاثة، متبوعة بكلمة النجاح أو الفشل." },
        { q: "كيف نعرف لماذا وصلت رسالة إلى السبام؟", a: "اطلبوا من المستلِم أن يحوّلها إليكم كمرفق، ثم افتحوا «عرض الأصل». سطر " + I('Received') + " يقول أي خادم أرسل؛ وحقل " + I('Authentication-Results') + " يقول هل نجحت الإثباتات الثلاثة. وإن نجح الكل، فالسبب السمعة أو المحتوى." },
        { q: "الإثباتات الثلاثة مضبوطة: لماذا يستمر المشكل؟", a: "لأنها مضبوطة لخدمة البريد، لا لكل ما يرسل. الموقع، برنامج الفوترة، أو أداة إرسال جماعي تمر غالباً بخادم آخر، لم يُصرَّح به أبداً. أو أن الإثباتات تنجح، والسمعة، التي أضرّت بها الشكاوى، هي التي تجعل الرسالة تُصنَّف في السبام." },
        { q: "لماذا لا تصل رسائل موقعي؟", a: "الموقع يرسل غالباً عبر خادم مستضيفه، الذي لم يرخّص له نطاقكم، ودون توقيع. وفي الاستضافة المشتركة، يتقاسم عنوانه مع مواقع أخرى. والتصحيح: إرسال هذه الرسائل عبر خدمة إرسال مصرَّح بها، بعنوان خاص." },
        { q: "ما هي قائمة الحظر، وكيف نخرج منها؟", a: "هي خدمة تستعلمها خوادم البريد لمعرفة هل عنوان المرسِل مبلَّغ عنه بسبب السبام. ويُخرَج منها بتصحيح السبب، ثم بطلب الحذف من القائمة. وإذا كان العنوان مشتركاً مع مواقع أخرى، فغيّروا مسار الإرسال." },
        { q: "هل يمكن إرسال نشرة من صندوق البريد العادي؟", a: "لا، ليس لأكثر من بضعة مستلِمين. الإرسال الجماعي في نسخة مخفية لا رابط فيه لإلغاء الاشتراك، ولا قياس للشكاوى، ويخرج من العنوان الذي يرسل عروض أسعاركم. استعملوا أداة إرسال جماعي، بعنوان ونطاق فرعي منفصلين." },
        { q: "أي نسبة شكاوى يجب عدم تجاوزها؟", a: I('Google') + " تطلب البقاء تحت " + I('0.10%') + " من الرسائل المبلَّغ عنها وعدم بلوغ " + I('0.30%') + " أبداً؛ و" + I('Yahoo') + " تحدّد كذلك " + I('0.3%') + ". أي ثلاث شكاوى لكل ألف رسالة. وفوق ذلك، كل رسائل المرسِل نفسه مهدَّدة بالسبام." },
        { q: "هل يلزم نطاق فرعي للإرسال الجماعي؟", a: "هو الأضمن. نطاق فرعي وعنوان لكل استعمال يعطيان كل تدفق سمعته: حملة سيئة الاستهداف لم تعد تجرّ عروض الأسعار والفواتير. و" + I('Google') + " توصي من جهتها بعنوان مرسِل واحد لكل فئة من الرسائل." },
        { q: "هل المرفقات تجعل الرسائل تصل إلى السبام؟", a: "المرفق الثقيل، الصيغة غير المعتادة، أو الملف المضغوط تساهم في ذلك، خاصة من مرسِل غير معروف كثيراً. فضّلوا رابطاً نحو الوثيقة، أو ملفاً خفيفاً، ونصاً يقول بوضوح ما تحتويه الرسالة." },
        { q: "كم يلزم من وقت للخروج من السبام؟", a: "أربعة أسابيع في مثال هذه الصفحة. الإثباتات تُصلَح في بضعة أيام؛ والسمعة تُسترجَع أبطأ، باستئناف الإرسال الجماعي على دفعات صغيرة وإبقاء الشكاوى بعيدة جداً عن " + I('0.3%') + "." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "العطل نادراً ما يكون في خدمة البريد: هو مرسِل لم يصرّح به أحد." },
      { after: 4, text: "شكوى ضد النشرة يجب ألّا تكلّف عرض سعر أبداً." },
    ],
    cta: { eyebrow: "حوّلوا إلينا، كمرفق، رسالة وصلت إلى البريد غير المرغوب فيه: التشخيص يبدأ برأسها", title: "عروض أسعار لا يجدها الزبائن، تأكيدات الموقع التي لا تصل أبداً، إرسال لكل الزبائن تبعه أسبوع في السبام، أو مؤسس في فرنسا لا تبلغ رسائله الجزائر: نقرأ، نصرّح، ونفصل", body: "قراءة الرؤوس، جرد المرسِلين، التصريح بكل واحد وتوقيعه، الموقع والتطبيقات مربوطة بخدمة إرسال، مسار لكل استعمال، قوائم منظَّفة، رفع الحجم، وقياس شهري. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.messagerie, kind: '2027', name: 'البريد المهني: النطاق، الصناديق، والإثباتات الثلاثة' },
      { href: L.fauxmail, kind: '2027', name: 'التعرّف على رسالة مزيَّفة: المرسِل، الرابط الفخ، والتبليغ' },
      { href: L.formulaire, kind: '2027', name: 'الاستمارة عبر الإنترنت: وصل الاستلام، المكرَّرات، والسبام' },
      { href: L.domaine, kind: '2027', name: 'اسم النطاق والاستضافة: من يملك ماذا' },
    ] },
  },
};

const KEYWORDS = "pourquoi mes mails arrivent dans les spams 2027, mes mails arrivent en spam, mail en indésirables entreprise, délivrabilité email algérie, mails du site n'arrivent pas, liste de blocage email, réputation expéditeur, envoi groupé newsletter spam, why do my emails go to spam, email deliverability algeria 2027, لماذا تصل رسائلي إلى البريد غير المرغوب فيه 2027, بريد المؤسسة يصل إلى السبام, سمعة المرسل";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
