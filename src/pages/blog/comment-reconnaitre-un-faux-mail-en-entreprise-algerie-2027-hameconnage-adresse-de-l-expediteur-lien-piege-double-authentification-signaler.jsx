import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-reconnaitre-un-faux-mail-en-entreprise-algerie-2027-hameconnage-adresse-de-l-expediteur-lien-piege-double-authentification-signaler.mjs';

const SLUG = 'comment-reconnaitre-un-faux-mail-en-entreprise-algerie-2027-hameconnage-adresse-de-l-expediteur-lien-piege-double-authentification-signaler';
const FIGURES = ['types', 'filets', 'anatomie', 'adresse', 'calendrier', 'former'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  piratage: '/blog/piratage-entreprise-algerie-2027-boite-mail-piratee-faux-rib-fournisseur-que-faire-premiere-heure-double-verification-regles-de-transfert/',
  messagerie: '/blog/messagerie-professionnelle-entreprise-algerie-2027-nom-de-domaine-boites-spf-dkim-dmarc-depart-employe-microsoft-365/',
  otp: '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/',
  ransomware: '/blog/ransomware-entreprise-algerie-2027-que-faire-premiere-heure-fichiers-chiffres-cinq-barrieres-sauvegarde-reprise/',
  reseau: '/blog/comment-securiser-un-reseau-informatique-d-entreprise-en-algerie-2027-mots-de-passe-d-origine-wifi-mises-a-jour-ports-ouverts-reseau-invites/',
  audit: '/blog/cybersecurite-entreprise-algerie-2027-audit-de-securite-informatique-ou-test-d-intrusion-ce-qu-il-regarde-rapport-priorites-corrections/',
};

const CONTENT = {
  fr: {
    kind: 'Faux mails · Algérie · 2027', title: "Comment reconnaître un faux mail en entreprise en Algérie (2027) : une comptable a failli donner ses identifiants à une fausse banque, une autre a failli payer un faux directeur, trois questions en dix secondes et ce qui protège quand quelqu'un clique",
    dek: "« Une comptable a reçu un mail “de la banque” qui lui demandait de confirmer ses identifiants ; une autre, un mail “du directeur” qui exigeait un virement urgent. Elles ont failli le faire. Comment apprendre à l'équipe à reconnaître un faux mail, et que mettre en place pour qu'une erreur ne coûte rien ? » Trois questions avant tout clic : qui envoie vraiment, où mène le lien, que veut-on que je fasse vite. Et, parce que quelqu'un cliquera un jour, des comptes qu'un mot de passe volé n'ouvre pas.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Faux mail', 'Hameçonnage', 'Mail frauduleux', 'Double authentification', 'Sensibilisation des équipes', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Trois questions, dix secondes, avant tout clic. **Qui envoie vraiment** : l'adresse après le @, pas le nom affiché. **Où mène le lien** : le nom qui se trouve juste avant la première barre oblique, pas le texte du bouton. **Que veut-on que je fasse vite** : donner un identifiant, payer, ouvrir un fichier. Toute demande d'argent ou d'identifiants se confirme par un autre canal. Et parce que quelqu'un cliquera un jour : **la double authentification** sur la messagerie et la banque, **un gestionnaire de mots de passe**, **votre domaine protégé** contre l'usurpation, **une adresse pour signaler** sans être jugé, et **une règle des paiements** qui ne dépend d'aucun mail. Quatre semaines dans l'exemple.",
      "Ce guide s'adresse au gérant dont l'équipe reçoit ces messages chaque semaine, et au fondateur installé en France dont la comptabilité est en Algérie. Les définitions et les faits cités viennent de sources publiques : l'hameçonnage, l'ingénierie sociale, l'usurpation d'adresse, le typosquattage, l'authentification multifacteur, DMARC, WebAuthn, les noms de domaine en .dz ; le chiffre sur la double authentification est celui que Microsoft a publié en 2019. La banque, les adresses et les messages sont un exemple construit, avec des noms de domaine fictifs. Ce guide ne traite pas des règles de droit ni des recours après une fraude : voyez votre conseil et votre banque.",
    ],
    sections: [
      { heading: "Six faux mails, ce qu'ils demandent", body: [
        "La figure donne, pour six faux mails courants, ce qu'ils demandent et la parade.",
      ], visual: 'types', after: [
        "**Ce que c'est.** L'hameçonnage est une forme d'ingénierie sociale et une escroquerie dans laquelle des attaquants trompent des personnes pour leur faire révéler des informations sensibles ou installer un logiciel malveillant. L'ingénierie sociale, c'est l'usage de la pression psychologique pour amener quelqu'un à agir ou à divulguer une information confidentielle : l'urgence, l'autorité, la peur de mal faire. **Trois buts seulement.** Derrière les six déguisements, il n'y a que trois demandes : vos identifiants, votre argent, ou l'ouverture d'un fichier. Reconnaître la demande est plus sûr que reconnaître le déguisement.",
        "**Le faux directeur.** Il ne contient ni lien ni pièce jointe : un message court, pressé, qui demande un virement ou un changement de RIB. L'usurpation d'adresse est la création de messages portant une adresse d'expéditeur falsifiée ; le nom affiché, lui, se choisit librement. La seule parade est hors de la messagerie : rappeler la personne sur un numéro déjà connu. **Si c'est déjà arrivé**, la marche à suivre de la première heure est dans [le guide sur la boîte mail piratée et le faux RIB](" + L.piratage + ").",
      ] },
      { heading: "Si quelqu'un clique quand même : cinq filets", body: [
        "La couche accentuée est la personne ; les quatre autres servent le jour où elle se trompe.",
      ], visual: 'filets', after: [
        "**Quelqu'un cliquera.** Aucune formation ne ramène le risque à zéro : un vendredi soir, un message bien fait, une personne fatiguée. Le dispositif se juge donc à ce qui se passe après le clic. **Le compte.** L'authentification multifacteur, ou double authentification, est une méthode d'authentification électronique qui exige une preuve en plus du mot de passe : un code, une application, une clé. D'après Microsoft, dans un billet d'août 2019, elle peut bloquer plus de 99,9 % des attaques par compromission de compte. On l'active d'abord sur la messagerie et sur la banque.",
        "**Le domaine.** DMARC est un protocole d'authentification du courrier électronique, conçu pour donner aux propriétaires d'un nom de domaine la capacité de le protéger d'un usage non autorisé : avec SPF et DKIM, il empêche qu'un inconnu écrive à vos clients en votre nom. Leur mise en place est décrite dans [le guide sur la messagerie professionnelle](" + L.messagerie + "). **L'argent.** Une règle écrite, qui vaut aussi pour le gérant : aucun virement ni changement de RIB sans confirmation par un autre canal. **Le reste du réseau.** Un poste compromis ne doit pas tout atteindre : voir [le guide pour sécuriser un réseau d'entreprise](" + L.reseau + ").",
      ] },
      { heading: "Un faux mail, lu en dix secondes", body: [
        "La figure pose six repères sur un message qui imite une banque.",
      ], visual: 'anatomie', after: [
        "**Trois questions.** Qui envoie vraiment : l'adresse, après le @, pas le nom affiché. Où mène le lien : l'adresse réelle, pas le texte du bouton. Que veut-on que je fasse vite : donner un identifiant, payer, ouvrir un fichier. Dix secondes suffisent, à condition de les prendre avant le clic. **L'orthographe ne prouve plus rien.** Un faux mail soigné est sans faute, et un assistant d'IA rédige correctement dans n'importe quelle langue. Ce qui ne s'imite pas, c'est l'adresse d'envoi et la destination du lien.",
        "**La pièce jointe.** Beaucoup de logiciels malveillants sont diffusés par des pièces jointes. Une pièce inattendue ne s'ouvre pas, même venant d'un contact connu, dont la boîte peut être compromise : on lui demande confirmation par un autre canal. Ce qui suit un fichier ouvert trop vite est décrit dans [le guide sur le rançongiciel](" + L.ransomware + "). **Sur le téléphone.** L'écran montre le nom, rarement l'adresse : un appui sur le nom de l'expéditeur l'affiche. Prenez-en l'habitude : c'est là que les messages se lisent entre deux tâches.",
      ] },
      { heading: "Où mène vraiment un lien", body: [
        "La figure décompose une adresse, puis en compare cinq.",
      ], visual: 'adresse', after: [
        "**La règle.** Le site, c'est le nom qui se trouve juste avant la première barre oblique, avec son extension ; tout ce qui précède peut imiter n'importe qui. Dans l'exemple, l'adresse commence par le nom de la banque, mais le site est compte-verif.net. **En Algérie.** Les noms en .dz s'enregistrent directement, comme exemple.dz, ou sous un nom intermédiaire, comme exemple.com.dz : dans ce second cas, le vrai nom compte trois mots et non deux. Notez une fois l'adresse exacte de votre banque et de vos fournisseurs.",
        "**Une lettre.** Le typosquattage est une forme de cybersquattage qui mise sur les fautes de frappe et les ressemblances : une lettre changée, un tiret à la place d'un point, une autre extension. **Ce qui ne se trompe pas.** Un gestionnaire de mots de passe ne propose l'identifiant que sur l'adresse où il a été enregistré : sur un site imité, il se tait, et ce silence est une alerte. Les clés d'accès vont plus loin : la norme WebAuthn résiste à une partie de l'hameçonnage, parce que l'authentificateur ne présente que les identifiants enregistrés pour le même site. Elles sont décrites dans [le guide sur la connexion par code](" + L.otp + ").",
      ] },
      { heading: "Quatre semaines, de l'état des lieux au premier exercice, en 2027", body: [
        "Quatre semaines dans l'exemple, dont la première pour regarder ce qui arrive déjà.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, l'état des lieux** : les faux mails reçus ce mois-ci, ceux sur lesquels quelqu'un a cliqué, et ce qui protège déjà les comptes. **Semaines 1 et 2, les comptes** : double authentification sur la messagerie et la banque, gestionnaire de mots de passe. **Semaines 2 et 3, le domaine et la boîte** : SPF, DKIM et DMARC vérifiés, bandeau sur les messages externes, adresse de signalement.",
        "**Semaine 3, la formation**, une heure par équipe. **Semaines 3 et 4, la règle des paiements**, écrite et signée par la direction. **Semaine 4, le premier exercice** : un faux mail d'exercice, annoncé, et deux chiffres relevés, la part de ceux qui ont cliqué et la part de ceux qui ont signalé. Le second compte davantage : une entreprise où l'on signale vite limite les dégâts d'un clic. Un regard extérieur sur l'ensemble est le rôle de [l'audit de sécurité](" + L.audit + ").",
      ] },
      { heading: "Former sans humilier, en six temps", body: [
        "Le temps accentué est le troisième : donner trois questions.",
      ], visual: 'former', after: [
        "**Pourquoi sans humilier.** Celui qui a cliqué et qui a honte se tait, et c'est le silence qui coûte : un mot de passe volé à neuf heures et signalé à neuf heures cinq se change avant d'avoir servi. La règle est donc dite d'avance : personne n'est sanctionné pour avoir cliqué, tout le monde est remercié d'avoir signalé. **Des exemples d'ici.** Dix faux mails réellement reçus dans l'entreprise valent mieux qu'un diaporama : la fausse banque, le faux transporteur, le faux fournisseur que chacun reconnaît.",
        "**Signaler.** Une adresse interne, ou un bouton dans la messagerie, et une réponse dans l'heure : « c'est un faux, merci », ou « c'est un vrai ». Sans réponse, on cesse de signaler. **Chaque trimestre.** Un exercice annoncé, jamais un piège, et les deux mêmes chiffres. **Les nouveaux.** La première semaine d'un employé est le moment où il connaît le moins les usages de la maison : les trois questions font partie de son accueil.",
      ], list: [
        "**Ce que le gérant reçoit** : l'état des lieux, la double authentification activée sur la messagerie et la banque, un gestionnaire de mots de passe, le domaine protégé, une adresse de signalement, une règle des paiements écrite, une heure de formation par équipe, et deux chiffres par trimestre.",
        "**Ce que l'entreprise ne fait plus** : payer sur la foi d'un mail, saisir un mot de passe depuis un lien, ouvrir une pièce jointe inattendue, découvrir un clic trois jours après.",
        "**Ce qui est mesuré** : comptes protégés par la double authentification, part des clics et part des signalements à chaque exercice, délai entre un signalement et la réponse.",
        "**Ce que fait Symloop** : l'état des lieux, la double authentification et le gestionnaire de mots de passe, la configuration du domaine et de la messagerie, l'adresse de signalement, la formation sur vos propres exemples, puis l'exercice trimestriel.",
      ], faq: [
        { q: "Comment reconnaître un faux mail ?", a: "Par trois questions avant tout clic : qui envoie vraiment, en lisant l'adresse après le @ et non le nom affiché ; où mène le lien, en lisant le nom juste avant la première barre oblique ; que veut-on que je fasse vite, un identifiant, un paiement ou un fichier à ouvrir. Deux signes suspects suffisent pour ne pas cliquer et pour signaler." },
        { q: "Comment reconnaître un mail frauduleux de sa banque ?", a: "Une banque ne demande pas vos identifiants par mail. N'utilisez jamais le lien du message : ouvrez le site vous-même, depuis vos favoris ou l'application, ou appelez votre agence sur un numéro que vous connaissez déjà. Le nom affiché ne prouve rien ; seule l'adresse d'envoi compte." },
        { q: "Comment savoir où mène un lien sans cliquer ?", a: "Sur un ordinateur, survolez-le : l'adresse apparaît en bas de la fenêtre. Sur un téléphone, un appui long l'affiche sans l'ouvrir. Lisez alors le nom qui se trouve juste avant la première barre oblique : c'est lui, le site." },
        { q: "Que faire si j'ai cliqué sur un faux mail ?", a: "Signalez-le tout de suite, sans attendre d'être sûr. Changez le mot de passe concerné depuis un autre appareil, fermez les sessions ouvertes, vérifiez qu'aucune règle de transfert n'a été ajoutée à la boîte, et prévenez la banque si des données de paiement ont été saisies." },
        { q: "La double authentification, comment ça marche ?", a: "Après le mot de passe, le service demande une seconde preuve que vous seul détenez : un code affiché par une application, une notification à valider, une clé physique. Un mot de passe volé par un faux mail ne suffit alors plus pour entrer." },
        { q: "Un mail sans faute d'orthographe est-il sûr ?", a: "Non. Les faux mails soignés sont sans faute, et les assistants d'IA écrivent correctement dans toutes les langues. L'orthographe n'est plus un critère : l'adresse d'envoi, la destination du lien et la nature de la demande le sont." },
        { q: "Le directeur demande un virement urgent par mail : que faire ?", a: "Confirmer par un autre canal avant tout paiement : un appel sur son numéro habituel, jamais sur celui du message. La règle doit être écrite et valoir pour tous, gérant compris : personne ne peut exiger qu'on la contourne « parce que c'est urgent »." },
        { q: "Faut-il faire des exercices de faux mails ?", a: "Oui, à condition qu'ils soient annoncés et sans sanction. On relève deux chiffres, la part des clics et la part des signalements, et on remercie ceux qui signalent. Un exercice vécu comme un piège apprend surtout à se taire." },
        { q: "Un filtre anti-spam ou un antivirus suffit-il ?", a: "Non. Le filtre arrête une partie des messages, mais le faux directeur n'a ni lien ni pièce jointe à analyser. Il faut plusieurs filets : le domaine protégé, la boîte qui étiquette, la personne formée, le compte à double authentification, et une règle des paiements." },
        { q: "Combien de temps faut-il, et par quoi commencer ?", a: "Quatre semaines dans l'exemple de ce guide. Commencez dès aujourd'hui par la double authentification sur la messagerie et sur la banque : c'est le filet qui protège même ceux qui n'ont pas encore été formés." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Le dispositif se juge à ce qui se passe après le clic." },
      { after: 3, text: "Tout ce qui précède le vrai nom peut imiter n'importe qui." },
    ],
    cta: { eyebrow: "Dites-nous combien de boîtes mail, quelle messagerie, et ce que vous avez déjà reçu : nous faisons l'état des lieux, puis nous protégeons les comptes avant de former", title: "Faux mail de la banque, faux directeur qui demande un virement, pièce jointe ouverte trop vite, ou fondateur en France dont l'équipe en Algérie reçoit ces messages chaque semaine : nous posons les cinq filets, puis nous formons sur vos propres exemples", body: "État des lieux, double authentification, gestionnaire de mots de passe, SPF, DKIM et DMARC, adresse de signalement, règle des paiements, formation, exercice trimestriel. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.piratage, kind: '2027', name: 'Boîte mail piratée, faux RIB fournisseur : la première heure' },
      { href: L.messagerie, kind: '2027', name: 'Messagerie professionnelle : domaine, SPF, DKIM, DMARC' },
      { href: L.reseau, kind: '2027', name: 'Sécuriser un réseau d’entreprise : mots de passe, Wi-Fi, ports' },
      { href: L.ransomware, kind: '2027', name: 'Rançongiciel : la première heure, cinq barrières' },
    ] },
  },
  en: {
    kind: 'Fake emails · Algeria · 2027', title: "How to recognise a fake email in a company in Algeria (2027): an accountant nearly gave her credentials to a fake bank, another nearly paid a fake manager, three questions in ten seconds and what protects you when someone clicks",
    dek: "“An accountant received an email ‘from the bank’ asking her to confirm her credentials; another, an email ‘from the manager’ demanding an urgent transfer. They nearly did it. How do we teach the team to recognise a fake email, and what do we put in place so that a mistake costs nothing?” Three questions before any click: who really sends it, where the link leads, what am I being rushed to do. And, because someone will click one day, accounts that a stolen password does not open.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Fake email', 'Phishing', 'Fraudulent email', 'Two-factor sign-in', 'Team awareness', 'Algeria 2027'],
    intro: [
      "**Short answer.** Three questions, ten seconds, before any click. **Who really sends it**: the address after the @, not the displayed name. **Where the link leads**: the name just before the first slash, not the text of the button. **What am I being rushed to do**: give a credential, pay, open a file. Any request for money or credentials is confirmed by another channel. And because someone will click one day: **two-factor sign-in** on the mailbox and the bank, **a password manager**, **your domain protected** against spoofing, **an address for reporting** without being judged, and **a payment rule** that depends on no email. Four weeks in the example.",
      "This guide is for the manager whose team receives these messages every week, and for the founder based in France whose accounting is in Algeria. The definitions and facts quoted come from public sources: phishing, social engineering, email spoofing, typosquatting, multi-factor authentication, DMARC, WebAuthn, .dz domain names; the figure on two-factor sign-in is the one Microsoft published in 2019. The bank, the addresses and the messages are a constructed example, with fictitious domain names. This guide does not cover legal rules or remedies after a fraud: see your legal adviser and your bank.",
    ],
    sections: [
      { heading: "Six fake emails, what they ask for", body: [
        "The figure gives, for six common fake emails, what they ask for and the defence.",
      ], visual: 'types', after: [
        "**What it is.** Phishing is a form of social engineering and a scam in which attackers deceive people into revealing sensitive information or installing malware. Social engineering is the use of psychological pressure to influence people to perform actions or divulge confidential information: urgency, authority, the fear of doing wrong. **Only three aims.** Behind the six disguises there are only three requests: your credentials, your money, or the opening of a file. Recognising the request is safer than recognising the disguise.",
        "**The fake manager.** It contains neither link nor attachment: a short, hurried message asking for a transfer or a change of bank details. Email spoofing is the creation of email messages with a forged sender address; the displayed name, for its part, can be chosen freely. The only defence is outside the mailbox: call the person back on a number you already know. **If it has already happened**, the steps for the first hour are in [the guide to the hacked mailbox and the fake bank details](" + L.piratage + ").",
      ] },
      { heading: "If someone clicks anyway: five nets", body: [
        "The accented layer is the person; the other four serve on the day they get it wrong.",
      ], visual: 'filets', after: [
        "**Someone will click.** No training brings the risk down to zero: a Friday evening, a well-made message, a tired person. So the set-up is judged by what happens after the click. **The account.** Multi-factor authentication, also known as two-factor authentication, is an electronic authentication method that requires a proof in addition to the password: a code, an app, a key. According to Microsoft, in a post from August 2019, it can block over 99.9 percent of account compromise attacks. Turn it on first on the mailbox and on the bank.",
        "**The domain.** DMARC is an email authentication protocol, designed to give email domain owners the ability to protect their domain from unauthorized use: with SPF and DKIM, it prevents a stranger from writing to your customers in your name. Setting them up is described in [the guide to professional email](" + L.messagerie + "). **The money.** A written rule, which applies to the manager too: no transfer or change of bank details without confirmation by another channel. **The rest of the network.** A compromised computer must not reach everything: see [the guide to securing a company network](" + L.reseau + ").",
      ] },
      { heading: "A fake email, read in ten seconds", body: [
        "The figure places six markers on a message imitating a bank.",
      ], visual: 'anatomie', after: [
        "**Three questions.** Who really sends it: the address, after the @, not the displayed name. Where the link leads: the real address, not the text of the button. What am I being rushed to do: give a credential, pay, open a file. Ten seconds are enough, provided you take them before the click. **Spelling proves nothing any more.** A careful fake email has no mistakes, and an AI assistant writes correctly in any language. What cannot be imitated is the sending address and the destination of the link.",
        "**The attachment.** A lot of malware is distributed via email attachments. An unexpected attachment is not opened, even from a known contact, whose mailbox may be compromised: ask them to confirm by another channel. What follows a file opened too quickly is described in [the guide to ransomware](" + L.ransomware + "). **On the phone.** The screen shows the name, rarely the address: a tap on the sender's name displays it. Make it a habit: that is where messages are read between two tasks.",
      ] },
      { heading: "Where a link really leads", body: [
        "The figure takes one address apart, then compares five.",
      ], visual: 'adresse', after: [
        "**The rule.** The site is the name just before the first slash, with its extension; everything before it can imitate anyone. In the example, the address begins with the bank's name, but the site is compte-verif.net. **In Algeria.** Names in .dz are registered directly, like exemple.dz, or beneath an intermediate name, like exemple.com.dz: in that second case, the real name has three words and not two. Write down once the exact address of your bank and of your suppliers.",
        "**One letter.** Typosquatting is a form of cybersquatting that relies on typing mistakes and look-alikes: one letter changed, a hyphen in place of a dot, another extension. **What does not get it wrong.** A password manager offers the credential only on the address where it was saved: on an imitated site it stays silent, and that silence is a warning. Passkeys go further: the WebAuthn standard is resistant to some phishing attacks, because the authenticator only offers credentials that were registered on the same website. They are described in [the guide to sign-in by code](" + L.otp + ").",
      ] },
      { heading: "Four weeks, from taking stock to the first exercise, in 2027", body: [
        "Four weeks in the example, the first one to look at what already arrives.",
      ], visual: 'calendrier', after: [
        "**Week 1, taking stock**: the fake emails received this month, those someone clicked on, and what already protects the accounts. **Weeks 1 and 2, accounts**: two-factor sign-in on the mailbox and the bank, password manager. **Weeks 2 and 3, the domain and the mailbox**: SPF, DKIM and DMARC checked, a banner on external messages, a reporting address.",
        "**Week 3, training**, one hour per team. **Weeks 3 and 4, the payment rule**, written and signed by management. **Week 4, the first exercise**: an announced practice email, and two figures recorded, the share of those who clicked and the share of those who reported. The second matters more: a company where people report quickly limits the damage of a click. An outside look at the whole is the role of [the security audit](" + L.audit + ").",
      ] },
      { heading: "Training without humiliating, in six steps", body: [
        "The accented step is the third: give three questions.",
      ], visual: 'former', after: [
        "**Why without humiliating.** Someone who clicked and is ashamed stays silent, and it is the silence that costs: a password stolen at nine o'clock and reported at five past nine is changed before it has been used. So the rule is stated in advance: nobody is punished for clicking, everybody is thanked for reporting. **Examples from here.** Ten fake emails really received in the company are worth more than a slide deck: the fake bank, the fake carrier, the fake supplier that everyone recognises.",
        "**Reporting.** An internal address, or a button in the mail client, and an answer within the hour: “it is a fake, thank you”, or “it is genuine”. Without an answer, people stop reporting. **Every quarter.** An announced exercise, never a trap, and the same two figures. **Newcomers.** An employee's first week is when they know the least about how the company works: the three questions are part of their induction.",
      ], list: [
        "**What the manager receives**: the stock-take, two-factor sign-in turned on for the mailbox and the bank, a password manager, the domain protected, a reporting address, a written payment rule, one hour of training per team, and two figures per quarter.",
        "**What the company no longer does**: pay on the strength of an email, type a password from a link, open an unexpected attachment, find out about a click three days later.",
        "**What is measured**: accounts protected by two-factor sign-in, share of clicks and share of reports at each exercise, time between a report and the answer.",
        "**What Symloop does**: the stock-take, two-factor sign-in and the password manager, the configuration of the domain and the mail service, the reporting address, training on your own examples, then the quarterly exercise.",
      ], faq: [
        { q: "How do you recognise a fake email?", a: "With three questions before any click: who really sends it, by reading the address after the @ and not the displayed name; where the link leads, by reading the name just before the first slash; what am I being rushed to do, a credential, a payment or a file to open. Two suspicious signs are enough not to click and to report." },
        { q: "How do you recognise a fraudulent email from your bank?", a: "A bank does not ask for your credentials by email. Never use the link in the message: open the site yourself, from your bookmarks or the app, or call your branch on a number you already know. The displayed name proves nothing; only the sending address counts." },
        { q: "How can you tell where a link leads without clicking?", a: "On a computer, hover over it: the address appears at the bottom of the window. On a phone, a long press shows it without opening it. Then read the name just before the first slash: that is the site." },
        { q: "What should I do if I clicked on a fake email?", a: "Report it straight away, without waiting to be sure. Change the password concerned from another device, close open sessions, check that no forwarding rule has been added to the mailbox, and warn the bank if payment details were entered." },
        { q: "How does two-factor sign-in work?", a: "After the password, the service asks for a second proof that only you hold: a code shown by an app, a notification to approve, a physical key. A password stolen by a fake email is then no longer enough to get in." },
        { q: "Is an email with no spelling mistakes safe?", a: "No. Careful fake emails have no mistakes, and AI assistants write correctly in every language. Spelling is no longer a criterion: the sending address, the destination of the link and the nature of the request are." },
        { q: "The manager asks for an urgent transfer by email: what should we do?", a: "Confirm by another channel before any payment: a call to their usual number, never the one in the message. The rule must be written and apply to everyone, the manager included: nobody can demand that it be bypassed “because it is urgent”." },
        { q: "Should we run fake-email exercises?", a: "Yes, provided they are announced and carry no punishment. Record two figures, the share of clicks and the share of reports, and thank those who report. An exercise felt as a trap mostly teaches people to stay silent." },
        { q: "Is a spam filter or an antivirus enough?", a: "No. The filter stops part of the messages, but the fake manager has neither link nor attachment to analyse. Several nets are needed: the protected domain, the mailbox that labels, the trained person, the account with two-factor sign-in, and a payment rule." },
        { q: "How long does it take, and where do we start?", a: "Four weeks in this guide's example. Start today with two-factor sign-in on the mailbox and on the bank: it is the net that protects even those who have not been trained yet." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The set-up is judged by what happens after the click." },
      { after: 3, text: "Everything before the real name can imitate anyone." },
    ],
    cta: { eyebrow: "Tell us how many mailboxes, which mail service, and what you have already received: we take stock, then we protect the accounts before training", title: "A fake email from the bank, a fake manager asking for a transfer, an attachment opened too quickly, or a founder in France whose team in Algeria receives these messages every week: we set the five nets, then we train on your own examples", body: "Stock-take, two-factor sign-in, password manager, SPF, DKIM and DMARC, reporting address, payment rule, training, quarterly exercise. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.piratage, kind: '2027', name: 'Hacked mailbox, fake supplier bank details: the first hour' },
      { href: L.messagerie, kind: '2027', name: 'Professional email: domain, SPF, DKIM, DMARC' },
      { href: L.reseau, kind: '2027', name: 'Securing a company network: passwords, Wi-Fi, ports' },
      { href: L.ransomware, kind: '2027', name: 'Ransomware: the first hour, five barriers' },
    ] },
  },
  ar: {
    kind: 'الرسائل المزيَّفة · الجزائر · 2027', title: "كيف نتعرّف على رسالة مزيَّفة في المؤسسة في الجزائر (2027): محاسِبة كادت تعطي معرّفاتها لبنك مزيَّف، وأخرى كادت تدفع لمدير مزيَّف، ثلاثة أسئلة في عشر ثوانٍ وما يحمي حين ينقر أحدهم",
    dek: "«محاسِبة استلمت رسالة “من البنك” تطلب منها تأكيد معرّفاتها؛ وأخرى، رسالة “من المدير” تفرض تحويلاً عاجلاً. وكادتا تفعلان. كيف نعلّم الفريق التعرّف على رسالة مزيَّفة، وماذا نضع حتى لا يكلّف الخطأ شيئاً؟» ثلاثة أسئلة قبل أي نقرة: من يرسل فعلاً، إلى أين يقود الرابط، وماذا يُراد مني بسرعة. ولأن أحدهم سينقر يوماً، حسابات لا تفتحها كلمة مرور مسروقة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['رسالة مزيَّفة', 'التصيّد', 'رسالة احتيالية', 'المصادقة الثنائية', 'توعية الفرق', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** ثلاثة أسئلة، عشر ثوانٍ، قبل أي نقرة. **من يرسل فعلاً**: العنوان بعد علامة " + I('@') + "، لا الاسم المعروض. **إلى أين يقود الرابط**: الاسم الموجود مباشرة قبل أول شرطة مائلة، لا نص الزر. **ماذا يُراد مني بسرعة**: إعطاء معرّف، الدفع، أو فتح ملف. وكل طلب مال أو معرّفات يُؤكَّد من قناة أخرى. ولأن أحدهم سينقر يوماً: **المصادقة الثنائية** على البريد والبنك، **مسيّر لكلمات المرور**، **نطاقكم محميّ** من الانتحال، **عنوان للتبليغ** دون حكم على أحد، و**قاعدة دفع** لا تتوقف على أي رسالة. أربعة أسابيع في المثال.",
      "هذا الدليل موجَّه إلى المسيّر الذي يستلم فريقه هذه الرسائل كل أسبوع، وإلى المؤسس المقيم في فرنسا ومحاسبته في الجزائر. التعريفات والوقائع المذكورة آتية من مصادر علنية: التصيّد، الهندسة الاجتماعية، انتحال العنوان، السطو على الأخطاء المطبعية، المصادقة متعددة العوامل، " + I('DMARC') + "، " + I('WebAuthn') + "، وأسماء النطاقات " + I('.dz') + "؛ والرقم الخاص بالمصادقة الثنائية هو الذي نشرته " + I('Microsoft') + " سنة 2019. البنك والعناوين والرسائل مثال مركَّب، بأسماء نطاقات خيالية. هذا الدليل لا يتناول القواعد القانونية ولا سبل الاسترجاع بعد احتيال: راجعوا مستشاركم وبنككم.",
    ],
    sections: [
      { heading: "ست رسائل مزيَّفة، وما تطلبه", body: [
        "الشكل يعطي، لست رسائل مزيَّفة شائعة، ما تطلبه والوقاية.",
      ], visual: 'types', after: [
        "**ما هو.** التصيّد شكل من الهندسة الاجتماعية واحتيال يخدع فيه المهاجمون الأشخاص ليكشفوا معلومات حساسة أو يثبّتوا برنامجاً خبيثاً. والهندسة الاجتماعية هي استعمال الضغط النفسي لدفع شخص إلى التصرف أو إلى كشف معلومة سرية: الاستعجال، السلطة، والخوف من الخطأ. **ثلاثة أهداف فقط.** وراء الأقنعة الستة، لا يوجد إلا ثلاثة طلبات: معرّفاتكم، مالكم، أو فتح ملف. والتعرّف على الطلب آمن من التعرّف على القناع.",
        "**المدير المزيَّف.** لا يحتوي رابطاً ولا مرفقاً: رسالة قصيرة، مستعجلة، تطلب تحويلاً أو تغيير الحساب البنكي. وانتحال العنوان هو إنشاء رسائل تحمل عنوان مرسِل مزوَّراً؛ أما الاسم المعروض، فيُختار بحرية. والوقاية الوحيدة خارج البريد: الاتصال بالشخص على رقم معروف من قبل. **وإذا وقع ذلك من قبل**، فخطوات الساعة الأولى في [دليل علبة البريد المخترَقة والحساب البنكي المزيَّف](" + L.piratage + ").",
      ] },
      { heading: "إذا نقر أحدهم رغم ذلك: خمس شبكات أمان", body: [
        "الطبقة المبرزة هي الشخص؛ والأربع الأخرى تنفع يوم يخطئ.",
      ], visual: 'filets', after: [
        "**أحدهم سينقر.** لا تكوين يُنزل الخطر إلى الصفر: مساء جمعة، رسالة متقنة، وشخص متعب. فالترتيب يُحكم عليه بما يجري بعد النقرة. **الحساب.** المصادقة متعددة العوامل، أو المصادقة الثنائية، طريقة مصادقة إلكترونية تتطلب دليلاً زيادة على كلمة المرور: رمز، تطبيق، أو مفتاح. وحسب " + I('Microsoft') + "، في مقال من أوت 2019، تستطيع صدّ أكثر من 99,9 بالمئة من هجمات اختراق الحسابات. وتُفعَّل أولاً على البريد وعلى البنك.",
        "**النطاق.** " + I('DMARC') + " بروتوكول لمصادقة البريد الإلكتروني، مصمَّم ليعطي أصحاب اسم النطاق القدرة على حمايته من استعمال غير مأذون: ومع " + I('SPF') + " و" + I('DKIM') + "، يمنع أن يكتب مجهول إلى زبائنكم باسمكم. وإعدادها موصوف في [دليل البريد المهني](" + L.messagerie + "). **المال.** قاعدة مكتوبة، تسري على المسيّر كذلك: لا تحويل ولا تغيير حساب بنكي دون تأكيد من قناة أخرى. **باقي الشبكة.** الحاسوب المخترَق يجب ألا يصل إلى كل شيء: انظر [دليل تأمين شبكة المؤسسة](" + L.reseau + ").",
      ] },
      { heading: "رسالة مزيَّفة، تُقرأ في عشر ثوانٍ", body: [
        "الشكل يضع ست علامات على رسالة تقلّد بنكاً.",
      ], visual: 'anatomie', after: [
        "**ثلاثة أسئلة.** من يرسل فعلاً: العنوان، بعد علامة " + I('@') + "، لا الاسم المعروض. إلى أين يقود الرابط: العنوان الحقيقي، لا نص الزر. ماذا يُراد مني بسرعة: إعطاء معرّف، الدفع، أو فتح ملف. عشر ثوانٍ تكفي، بشرط أخذها قبل النقرة. **الإملاء لم يعد دليلاً.** الرسالة المزيَّفة المتقنة دون أخطاء، والمساعد الذكي يكتب صحيحاً بأي لغة. وما لا يُقلَّد هو عنوان الإرسال ووجهة الرابط.",
        "**المرفق.** كثير من البرامج الخبيثة يُوزَّع عبر المرفقات. والمرفق غير المنتظَر لا يُفتح، حتى من شخص معروف، فعلبته قد تكون مخترَقة: يُطلب منه التأكيد من قناة أخرى. وما يتبع ملفاً فُتح بسرعة موصوف في [دليل فيروس الفدية](" + L.ransomware + "). **على الهاتف.** الشاشة تُظهر الاسم، ونادراً العنوان: ضغطة على اسم المرسِل تعرضه. تعوّدوا عليها: فهناك تُقرأ الرسائل بين مهمتين.",
      ] },
      { heading: "إلى أين يقود الرابط فعلاً", body: [
        "الشكل يفكّك عنواناً، ثم يقارن خمسة.",
      ], visual: 'adresse', after: [
        "**القاعدة.** الموقع هو الاسم الموجود مباشرة قبل أول شرطة مائلة، مع امتداده؛ وكل ما يسبقه يستطيع تقليد أي أحد. في المثال، العنوان يبدأ باسم البنك، لكن الموقع هو " + I('compte-verif.net') + ". **في الجزائر.** الأسماء في " + I('.dz') + " تُسجَّل مباشرة، مثل " + I('exemple.dz') + "، أو تحت اسم وسيط، مثل " + I('exemple.com.dz') + ": وفي هذه الحالة الثانية، الاسم الحقيقي من ثلاث كلمات لا من اثنتين. دوّنوا مرة واحدة العنوان الدقيق لبنككم ولمورّديكم.",
        "**حرف واحد.** السطو على الأخطاء المطبعية شكل من السطو على أسماء النطاقات يراهن على أخطاء الكتابة والتشابه: حرف مغيَّر، مطّة مكان نقطة، أو امتداد آخر. **ما لا يخطئ.** مسيّر كلمات المرور لا يقترح المعرّف إلا على العنوان الذي سُجِّل فيه: وعلى موقع مقلَّد، يسكت، وسكوته تنبيه. ومفاتيح المرور تذهب أبعد: معيار " + I('WebAuthn') + " يقاوم جزءاً من التصيّد، لأن أداة المصادقة لا تقدّم إلا المعرّفات المسجَّلة للموقع نفسه. وهي موصوفة في [دليل الدخول برمز](" + L.otp + ").",
      ] },
      { heading: "أربعة أسابيع، من المعاينة إلى أول تمرين، سنة 2027", body: [
        "أربعة أسابيع في المثال، والأول منها للنظر في ما يصل أصلاً.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، المعاينة**: الرسائل المزيَّفة المستلَمة هذا الشهر، التي نقر عليها أحدهم، وما يحمي الحسابات أصلاً. **الأسبوعان 1 و2، الحسابات**: المصادقة الثنائية على البريد والبنك، ومسيّر كلمات المرور. **الأسبوعان 2 و3، النطاق والعلبة**: مراجعة " + I('SPF') + " و" + I('DKIM') + " و" + I('DMARC') + "، شريط على الرسائل الخارجية، وعنوان للتبليغ.",
        "**الأسبوع 3، التكوين**، ساعة لكل فريق. **الأسبوعان 3 و4، قاعدة الدفع**، مكتوبة وموقَّعة من الإدارة. **الأسبوع 4، أول تمرين**: رسالة تمرين، معلَن عنها، ورقمان يُسجَّلان، حصة من نقروا وحصة من بلّغوا. والثاني أهم: المؤسسة التي يُبلَّغ فيها بسرعة تحدّ من أضرار نقرة. ونظرة خارجية على المجموع هي دور [التدقيق الأمني](" + L.audit + ").",
      ] },
      { heading: "التكوين دون إحراج، في ست مراحل", body: [
        "المرحلة المبرزة هي الثالثة: إعطاء ثلاثة أسئلة.",
      ], visual: 'former', after: [
        "**لماذا دون إحراج.** من نقر وخجل يسكت، والسكوت هو الذي يكلّف: كلمة مرور سُرقت في التاسعة وبُلِّغ عنها في التاسعة وخمس دقائق تُغيَّر قبل أن تُستعمل. فالقاعدة تُقال مسبقاً: لا أحد يُعاقَب لأنه نقر، والكل يُشكَر لأنه بلّغ. **أمثلة من هنا.** عشر رسائل مزيَّفة وصلت فعلاً إلى المؤسسة أنفع من عرض شرائح: البنك المزيَّف، الناقل المزيَّف، والمورّد المزيَّف الذي يعرفه كل واحد.",
        "**التبليغ.** عنوان داخلي، أو زر في البريد، وجواب في الساعة: «هي مزيَّفة، شكراً»، أو «هي حقيقية». ودون جواب، يتوقف الناس عن التبليغ. **كل ثلاثة أشهر.** تمرين معلَن عنه، لا فخ أبداً، والرقمان نفسهما. **الجدد.** الأسبوع الأول للعامل هو الوقت الذي يعرف فيه أقل عن عادات المؤسسة: والأسئلة الثلاثة جزء من استقباله.",
      ], list: [
        "**ما يستلمه المسيّر**: المعاينة، المصادقة الثنائية مفعَّلة على البريد والبنك، مسيّر كلمات المرور، النطاق محميّ، عنوان للتبليغ، قاعدة دفع مكتوبة، ساعة تكوين لكل فريق، ورقمان كل ثلاثة أشهر.",
        "**ما لم تعد المؤسسة تفعله**: الدفع اعتماداً على رسالة، إدخال كلمة مرور من رابط، فتح مرفق غير منتظَر، واكتشاف نقرة بعد ثلاثة أيام.",
        "**ما يُقاس**: الحسابات المحمية بالمصادقة الثنائية، حصة النقرات وحصة التبليغات في كل تمرين، والمدة بين التبليغ والجواب.",
        "**ما تفعله Symloop**: المعاينة، المصادقة الثنائية ومسيّر كلمات المرور، إعداد النطاق والبريد، عنوان التبليغ، التكوين على أمثلتكم، ثم التمرين كل ثلاثة أشهر.",
      ], faq: [
        { q: "كيف نتعرّف على رسالة مزيَّفة؟", a: "بثلاثة أسئلة قبل أي نقرة: من يرسل فعلاً، بقراءة العنوان بعد العلامة لا الاسم المعروض؛ إلى أين يقود الرابط، بقراءة الاسم الموجود مباشرة قبل أول شرطة مائلة؛ وماذا يُراد مني بسرعة، معرّف، دفع، أو ملف يُفتح. وعلامتان مشبوهتان تكفيان لعدم النقر وللتبليغ." },
        { q: "كيف نتعرّف على رسالة احتيالية من البنك؟", a: "البنك لا يطلب معرّفاتكم بالبريد. لا تستعملوا رابط الرسالة أبداً: افتحوا الموقع مباشرة، من المفضَّلة أو التطبيق، أو اتصلوا بوكالتكم على رقم تعرفونه من قبل. والاسم المعروض لا يثبت شيئاً؛ عنوان الإرسال وحده يُحسب." },
        { q: "كيف نعرف إلى أين يقود رابط دون نقر؟", a: "على الحاسوب، مرّوا فوقه: العنوان يظهر أسفل النافذة. وعلى الهاتف، ضغطة طويلة تعرضه دون فتحه. ثم اقرؤوا الاسم الموجود مباشرة قبل أول شرطة مائلة: هو الموقع." },
        { q: "ماذا أفعل إذا نقرت على رسالة مزيَّفة؟", a: "بلّغوا حالاً، دون انتظار التأكد. غيّروا كلمة المرور المعنية من جهاز آخر، أغلقوا الجلسات المفتوحة، تحققوا أن لا قاعدة تحويل أُضيفت إلى العلبة، وأعلموا البنك إذا أُدخلت بيانات دفع." },
        { q: "كيف تعمل المصادقة الثنائية؟", a: "بعد كلمة المرور، تطلب الخدمة دليلاً ثانياً لا يملكه غيركم: رمز يعرضه تطبيق، إشعار يُصادَق عليه، أو مفتاح مادي. فكلمة مرور سُرقت برسالة مزيَّفة لم تعد تكفي للدخول." },
        { q: "هل رسالة دون أخطاء إملائية آمنة؟", a: "لا. الرسائل المزيَّفة المتقنة دون أخطاء، والمساعدات الذكية تكتب صحيحاً بكل اللغات. الإملاء لم يعد معياراً: عنوان الإرسال، وجهة الرابط، وطبيعة الطلب هي المعايير." },
        { q: "المدير يطلب تحويلاً عاجلاً بالبريد: ماذا نفعل؟", a: "التأكيد من قناة أخرى قبل أي دفع: مكالمة على رقمه المعتاد، لا على رقم الرسالة أبداً. والقاعدة تُكتب وتسري على الجميع، المسيّر كذلك: لا أحد يفرض تجاوزها «لأن الأمر عاجل»." },
        { q: "هل نُجري تمارين برسائل مزيَّفة؟", a: "نعم، بشرط أن يُعلَن عنها ودون عقوبة. يُسجَّل رقمان، حصة النقرات وحصة التبليغات، ويُشكَر من يبلّغ. والتمرين الذي يُعاش كفخ يعلّم خاصة السكوت." },
        { q: "هل تكفي مصفاة للبريد المزعج أو مضاد فيروسات؟", a: "لا. المصفاة توقف جزءاً من الرسائل، لكن المدير المزيَّف لا رابط فيه ولا مرفق يُحلَّل. يلزم عدة شبكات أمان: النطاق المحميّ، العلبة التي تضع ملصقاً، الشخص المكوَّن، الحساب بالمصادقة الثنائية، وقاعدة للدفع." },
        { q: "كم يلزم من وقت، ومن أين نبدأ؟", a: "أربعة أسابيع في مثال هذا الدليل. وابدؤوا من اليوم بالمصادقة الثنائية على البريد وعلى البنك: هي الشبكة التي تحمي حتى من لم يُكوَّنوا بعد." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الترتيب يُحكم عليه بما يجري بعد النقرة." },
      { after: 3, text: "كل ما يسبق الاسم الحقيقي يستطيع تقليد أي أحد." },
    ],
    cta: { eyebrow: "قولوا لنا كم علبة بريد، أي خدمة بريد، وما استلمتموه إلى الآن: ننجز المعاينة، ثم نحمي الحسابات قبل التكوين", title: "رسالة مزيَّفة من البنك، مدير مزيَّف يطلب تحويلاً، مرفق فُتح بسرعة، أو مؤسس في فرنسا يستلم فريقه في الجزائر هذه الرسائل كل أسبوع: نضع شبكات الأمان الخمس، ثم نكوّن على أمثلتكم", body: "معاينة، مصادقة ثنائية، مسيّر كلمات المرور، إعداد النطاق والبريد، عنوان للتبليغ، قاعدة للدفع، تكوين، وتمرين كل ثلاثة أشهر. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.piratage, kind: '2027', name: 'علبة بريد مخترَقة، حساب بنكي مزيَّف: الساعة الأولى' },
      { href: L.messagerie, kind: '2027', name: 'البريد المهني: النطاق، وإعدادات المصادقة' },
      { href: L.reseau, kind: '2027', name: 'تأمين شبكة المؤسسة: كلمات المرور، الواي فاي، والمنافذ' },
      { href: L.ransomware, kind: '2027', name: 'فيروس الفدية: الساعة الأولى، وخمسة حواجز' },
    ] },
  },
};

const KEYWORDS = "comment reconnaître un faux mail 2027, comment reconnaître un mail frauduleux, faux mail banque, hameçonnage entreprise algérie, phishing entreprise, faux mail du directeur virement, double authentification comment ça marche, savoir où mène un lien, que faire si j'ai cliqué sur un faux mail, sensibilisation phishing équipe, how to recognise a fake email algeria 2027, phishing awareness for companies, كيف نتعرّف على رسالة مزيَّفة 2027, التصيّد في المؤسسة, المصادقة الثنائية";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
