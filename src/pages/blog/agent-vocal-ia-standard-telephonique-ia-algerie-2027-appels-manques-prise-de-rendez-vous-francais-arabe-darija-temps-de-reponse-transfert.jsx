import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/agent-vocal-ia-standard-telephonique-ia-algerie-2027-appels-manques-prise-de-rendez-vous-francais-arabe-darija-temps-de-reponse-transfert.mjs';

const SLUG = 'agent-vocal-ia-standard-telephonique-ia-algerie-2027-appels-manques-prise-de-rendez-vous-francais-arabe-darija-temps-de-reponse-transfert';
const FIGURES = ['types', 'flux', 'appel', 'tour', 'calendrier', 'couches'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  agent: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/',
  ipbx: '/blog/standard-telephonique-ip-entreprise-algerie-2027-ipbx-lignes-postes-menu-vocal-file-d-attente-appels-manques-crm/',
  backoffice: '/blog/agent-ia-back-office-erp-algerie-2027-outils-lecture-ecriture-plafonds-approbation-idempotence-journal-ce-que-l-agent-a-le-droit-de-faire/',
  reservation: '/blog/meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels/',
  crm: '/blog/logiciel-crm-algerie-2027-portefeuille-clients-pipeline-relances-devis-prevision-commerciaux/',
  mesure: '/blog/mesurer-qu-une-ia-marche-avant-la-production-algerie-2027-jeu-d-evaluation-taux-d-erreur-hallucinations-regressions-seuil-de-livraison/',
  deployer: '/blog/deployer-un-modele-ia-sur-ses-serveurs-algerie-2027-llm-prive-quel-modele-quelle-machine-cout-par-requete-quand-rester-sur-une-api/',
};

const CONTENT = {
  fr: {
    kind: 'Agent vocal IA · Algérie · 2027', title: "Agent vocal IA en Algérie (2027) : un appel sur trois sans réponse, les mêmes questions toute la journée, et des gens qui mêlent darija et français ; standard téléphonique IA, prise de rendez-vous, temps de réponse, transfert vers une personne, et ce qu'on met en place",
    dek: "« Notre téléphone sonne toute la journée. Aux heures de pointe, un appel sur trois n'est pas pris, et le soir personne ne répond. L'accueil répète les mêmes réponses : les horaires, un rendez-vous à déplacer, où en est ma commande. On me parle d'un agent vocal IA qui décroche à notre place. Est-ce que cela marche en Algérie, avec des gens qui passent du darija au français dans la même phrase ? » Cela marche pour des appels répétitifs et vérifiables, à condition de mesurer sur vos propres appels, et de rendre la main à une personne dès que l'agent ne comprend pas.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Agent vocal IA', 'Standard téléphonique IA', 'Appels manqués et prise de rendez-vous', 'Français, arabe et darija', 'Temps de réponse et transfert', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un agent vocal IA est une chaîne de quatre maillons : la téléphonie qui lui amène l'appel, la reconnaissance de la parole, un modèle qui décide en consultant vos outils, et la synthèse qui répond. Il prend les appels répétitifs, horaires, rendez-vous, suivi, et transmet les autres à une personne avec un résumé. Il se juge sur deux chiffres : la part des appels résolus, et le temps de réponse. Dans l'exemple de cette page, sur 530 appels qui restaient sans réponse en une semaine, l'agent en résout 307 et en transmet 159.",
      "Cette page s'adresse aux cliniques, cabinets, concessionnaires, agences, services après-vente et centres d'appels dont le téléphone déborde, en Algérie, et aux fondateurs de la diaspora qui montent un service ici. Les définitions viennent de sources publiques : serveur vocal interactif, reconnaissance de la parole, taux d'erreur de mots, synthèse vocale, alternance de langues, arabe algérien, protocole de téléphonie. Les 1 400 appels, leur répartition et les délais sont un exemple construit. La page ne traite ni des règles sur l'enregistrement des appels et les données personnelles, ni des autorisations de téléphonie, et ne cite aucun prix de matériel ni d'abonnement.",
    ],
    sections: [
      { heading: "Cinq types d'appels", body: [
        "La figure classe cinq types d'appels, et ce que l'agent fait de chacun.",
      ], visual: 'types', after: [
        "**Avant l'IA.** Un serveur vocal interactif est un système téléphonique automatisé qui dialogue avec les appelants, recueille des informations et oriente l'appel ; il comprend des touches ou quelques mots. Un agent vocal va plus loin : il comprend une phrase, et agit. **Ce qu'il prend.** Les appels répétitifs dont la réponse se vérifie : les horaires, un rendez-vous, l'état d'une commande. **Ce qu'il ne prend pas.** Un prix négocié, une réclamation, une urgence : là, une personne décide.",
        "**La règle.** L'agent ne traite que ce que ses consignes autorisent, et dit qu'il est un assistant automatique dès la première phrase. **Le transfert.** Au premier signe d'incompréhension, de colère ou d'urgence, il transmet à une personne, avec ce qui a déjà été dit : l'appelant ne répète pas. **Sur d'autres canaux.** Les mêmes demandes arrivent par messagerie ; l'agent par écrit est décrit dans [l'agent IA sur WhatsApp](" + L.whatsapp + "), et la démarche générale dans [l'agent IA en entreprise](" + L.agent + ").",
      ] },
      { heading: "Les appels que personne ne prenait", body: [
        "La figure suit les 1 400 appels d'une semaine.",
      ], visual: 'flux', after: [
        "**Dans l'exemple.** 1 400 appels en une semaine sur un numéro. L'accueil en prend 870, soit 62 %. 530 restent sans réponse : 220 aux heures de pointe, quand toutes les lignes sont occupées, et 310 après la fermeture. **Ce que l'on confie à l'agent.** Ces 530 appels, et seulement ceux-là, pour commencer. Il en résout 307, en transmet 159 à une personne avec un résumé, et 64 raccrochent avant la fin.",
        "**Ce que cela dit.** L'agent ne retire aucun appel à l'accueil : il prend ceux qui se perdaient. **Les 64 abandons.** Ils se réécoutent : un mot non compris, une attente trop longue, une demande hors périmètre. C'est la liste de travail de la semaine suivante. **Le journal d'appels.** Le standard donne déjà ces chiffres, appels reçus, pris, manqués, par heure, voir [le standard téléphonique IP](" + L.ipbx + "). **Ce que l'on mesure.** Appels pris par l'agent ; part résolue sans transfert ; part transmise ; abandons ; demandes non comprises.",
      ] },
      { heading: "Un appel, en six temps", body: [
        "La figure suit un appel pris par l'agent.",
      ], visual: 'appel', after: [
        "**L'arrivée.** L'appel arrive par votre standard : le protocole de téléphonie établit la session et la passe à l'agent quand personne ne décroche, ou hors des heures d'ouverture. **L'accueil.** Une phrase courte, qui dit que c'est un assistant automatique et propose de parler à une personne. **La demande.** La reconnaissance de la parole transforme la parole en texte ; le modèle y cherche l'intention : un rendez-vous, un suivi, autre chose.",
        "**L'action.** C'est le temps accentué. L'agent ne répond pas de mémoire : il consulte l'agenda, la commande ou le dossier, par des outils aux droits limités, voir [ce que l'agent a le droit de faire](" + L.backoffice + "). Un rendez-vous pris suit les règles de [la réservation sans doublon](" + L.reservation + "). **La réponse.** La synthèse vocale, c'est-à-dire la production artificielle de la parole, lit la réponse ; un message de confirmation part par écrit. **La trace.** Un résumé, la suite à donner, et l'appel rattaché à la fiche du client, voir [le CRM](" + L.crm + ").",
      ] },
      { heading: "Le temps de réponse, et la langue", body: [
        "La figure décompose un tour de parole, de la fin de la question au début de la réponse.",
      ], visual: 'tour', after: [
        "**Quatre délais.** Dans l'exemple : 400 millisecondes pour être sûr que la personne a fini de parler, 200 de transcription, 700 pour le modèle et la consultation de l'agenda, 200 avant le premier son. Total : 1,5 seconde de silence. **Les repères de l'exemple.** Sous une seconde, l'échange reste fluide ; au-delà de deux, l'appelant dit « allô ? ». **Où gagner.** Sur le modèle et l'outil : une réponse courte, un agenda qui répond vite, un début de phrase envoyé pendant que la suite se calcule. **L'interruption.** La détection d'activité vocale repère la présence ou l'absence de parole : dès que la personne reprend, l'agent se tait.",
        "**La langue.** L'arabe algérien, le darja, est une variété d'arabe parlée en Algérie, une langue de la communication quotidienne, rarement écrite, avec des emprunts au français. Beaucoup d'appelants passent d'une langue à l'autre dans la même phrase : c'est l'alternance de langues. **Ce que cela change.** La précision de la reconnaissance varie avec l'accent, le dialecte, le débit et le bruit de fond ; elle se mesure par le taux d'erreur de mots, qui compte les substitutions, les suppressions et les insertions. Une langue surtout parlée, peu écrite et mêlée de français est un cas plus difficile pour ces systèmes ; à quel point, seuls vos appels le disent. **Ce que nous faisons.** On ne promet pas un chiffre : on mesure sur deux cents de vos appels, par langue, avant d'ouvrir. Si le darija domine, l'agent commence par les demandes les plus simples, ou propose les touches du clavier. La méthode est décrite dans [mesurer qu'une IA marche](" + L.mesure + ").",
      ] },
      { heading: "Huit semaines, en commençant par écouter", body: [
        "Huit semaines dans l'exemple, avant d'ouvrir en journée.",
      ], visual: 'calendrier', after: [
        "**L'écoute.** Deux semaines sur deux cents appels réels, avec l'accord des personnes selon vos obligations : ce que les gens demandent, dans quelle langue, avec quels mots. C'est de là que sortent les trois demandes à automatiser et le jeu d'essai. **La téléphonie.** Le renvoi vers l'agent et le transfert vers une personne se règlent sur votre standard. **Les outils.** L'agenda et les dossiers sont reliés en lecture, puis en écriture pour les rendez-vous.",
        "**L'ouverture.** D'abord les appels après la fermeture, où personne ne répondait : le risque est le plus faible. Puis le débordement en journée. **L'écoute continue.** Chaque semaine, un échantillon d'appels est réécouté, et les mots non compris sont ajoutés. **Où tourne le modèle.** Chez un fournisseur ou sur vos serveurs, selon la confidentialité de vos appels, voir [déployer un modèle sur ses serveurs](" + L.deployer + "). **Ce que l'agent ne fait pas.** Il ne remplace pas l'accueil, ne négocie pas et ne décide pas : il prend ce qui se perdait. **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "Ce qu'il y a dans un agent vocal", body: [
        "La figure empile cinq couches ; la troisième dit ce que l'agent a le droit de faire.",
      ], visual: 'couches', after: [
        "**La téléphonie et la voix.** L'appel arrive par votre standard ; la voix couvre la reconnaissance, la détection de fin de parole, l'interruption et la synthèse. **L'agent.** C'est la couche accentuée : un modèle, des consignes écrites, une liste fermée de demandes, et des garde-fous. Il ne donne pas un prix qui n'est pas dans sa base, ne promet rien, et transmet quand il doute.",
        "**Les outils et le suivi.** Agenda, commandes, dossiers, base de réponses ; résumés, taux de résolution, mots non compris. **Prêt à l'emploi ou sur mesure.** Des services d'agents vocaux prêts à l'emploi existent, et conviennent pour un essai en français. Le sur-mesure se justifie quand il faut relier votre standard, votre agenda et vos dossiers, traiter les langues de vos appelants, garder les appels chez vous, et mesurer semaine après semaine ce que l'agent a compris.",
      ], list: [
        "**Ce que vous recevez** : le renvoi des appels non pris vers l'agent ; trois demandes traitées de bout en bout ; l'agenda et les dossiers reliés ; le transfert vers une personne avec résumé ; le message de confirmation ; le tableau des appels résolus, transmis et abandonnés ; l'écoute d'échantillons.",
        "**Ce que l'entreprise évite** : l'appel sans réponse à l'heure de pointe, le téléphone qui sonne dans le vide après la fermeture, les mêmes réponses répétées toute la journée, le rendez-vous noté sur un papier, l'appelant qui répète tout à chaque transfert.",
        "**Ce qui est mesuré** : appels pris par l'agent ; part résolue sans transfert ; part transmise ; abandons ; temps de réponse par tour ; taux d'erreur de mots par langue ; demandes non comprises.",
        "**Ce que fait Symloop** : l'écoute de vos appels, le raccordement à votre standard, l'agent et ses consignes, les outils reliés à votre agenda et à vos dossiers, les essais par langue, le suivi hebdomadaire, en arabe et en français.",
      ], faq: [
        { q: "Qu'est-ce qu'un agent vocal IA ?", a: "Un programme qui répond au téléphone : il transcrit ce que dit la personne, comprend la demande, consulte vos outils et répond de vive voix. Il traite les appels répétitifs et transmet les autres à une personne." },
        { q: "Un agent vocal IA comprend-il le darija ?", a: "Cela se mesure, cela ne se promet pas. Une langue surtout parlée et mêlée de français est un cas plus difficile pour la reconnaissance de la parole. On teste sur deux cents de vos appels, par langue, avant d'ouvrir." },
        { q: "Quels appels peut-il prendre ?", a: "Ceux dont la réponse est fixe ou vérifiable : horaires, adresse, prise ou déplacement de rendez-vous, suivi de commande ou de dossier. Les prix négociés, les réclamations et les urgences vont à une personne." },
        { q: "Que se passe-t-il quand il ne comprend pas ?", a: "Il repose la question une fois, puis transmet à une personne avec un résumé de ce qui a été dit. Hors des heures d'ouverture, il prend le numéro et la demande pour un rappel." },
        { q: "Faut-il changer de standard téléphonique ?", a: "Pas forcément. L'agent se raccorde à un standard IP par le protocole de téléphonie habituel ; un standard ancien peut demander une passerelle." },
        { q: "Combien de temps met-il à répondre ?", a: "Dans l'exemple, une seconde et demie entre la fin de la question et le début de la réponse. L'objectif est de passer sous la seconde, étape par étape." },
        { q: "L'agent peut-il prendre un rendez-vous ?", a: "Oui, s'il est relié à l'agenda : il propose des créneaux libres, en bloque un, et envoie une confirmation par message." },
        { q: "Les appelants savent-ils qu'ils parlent à une machine ?", a: "Oui : l'agent le dit dès la première phrase, et propose de parler à une personne. C'est une règle que nous fixons dans ses consignes." },
        { q: "Où sont traités les appels ?", a: "Chez le fournisseur du modèle ou sur vos propres serveurs, selon la confidentialité de vos appels. Le choix se fait au cadrage." },
        { q: "Par quoi commencer ?", a: "Par le journal d'appels : combien d'appels manqués, à quelles heures, pour quelles demandes. Puis par les appels après la fermeture, où personne ne répondait." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "L'agent ne retire aucun appel à l'accueil : il prend ceux qui se perdaient." },
      { after: 3, text: "Le darija se mesure, il ne se promet pas : deux cents de vos appels, avant d'ouvrir." },
    ],
    cta: { eyebrow: "Dites-nous combien d'appels vous recevez, combien se perdent, et dans quelles langues : nous commençons par écouter", title: "Appels sans réponse à l'heure de pointe, téléphone qui sonne après la fermeture, mêmes questions toute la journée, rendez-vous à prendre par téléphone, ou service que vous montez en Algérie depuis la France", body: "Symloop construit l'agent vocal qui correspond à vos appels : raccordement au standard, trois demandes traitées de bout en bout, outils reliés, transfert avec résumé, suivi hebdomadaire. Décrivez-nous votre accueil, vos appels et vos outils." },
    related: { label: 'À lire aussi', items: [
      { href: L.ipbx, kind: '2027', name: 'Standard téléphonique IP : lignes, postes, menu vocal, appels manqués' },
      { href: L.whatsapp, kind: '2027', name: 'Agent IA sur WhatsApp : architecture, passage à une personne, coût par message' },
      { href: L.agent, kind: '2027', name: 'Agent IA en entreprise : par où commencer, ce qui marche' },
      { href: L.mesure, kind: '2027', name: 'Mesurer qu’une IA marche : jeu d’évaluation, taux d’erreur, seuil de livraison' },
    ] },
  },
  en: {
    kind: 'AI voice agent · Algeria · 2027', title: "AI voice agent in Algeria (2027): one call in three unanswered, the same questions all day, and callers who mix Darija and French; AI phone reception, appointment booking, response time, handover to a person, and what we put in place",
    dek: "“Our phone rings all day. At peak hours one call in three is not taken, and in the evening nobody answers. The reception repeats the same answers: opening hours, an appointment to move, where is my order. I am told about an AI voice agent that picks up for us. Does that work in Algeria, with people who switch from Darija to French in the same sentence?” It works for repetitive, checkable calls, provided you measure on your own calls and hand back to a person as soon as the agent does not understand.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['AI voice agent', 'AI phone reception', 'Missed calls and appointment booking', 'French, Arabic and Darija', 'Response time and handover', 'Algeria 2027'],
    intro: [
      "**Short answer.** An AI voice agent is a chain of four links: the telephony that brings it the call, speech recognition, a model that decides by consulting your tools, and the synthesis that answers. It takes the repetitive calls, hours, appointments, tracking, and hands the others to a person with a summary. It is judged on two figures: the share of calls resolved, and the response time. In this page's example, of 530 calls that were going unanswered in a week, the agent resolves 307 and hands over 159.",
      "This page is for clinics, practices, dealerships, agencies, after-sales services and call centres whose phone overflows, in Algeria, and for diaspora founders setting up a service here. The definitions come from public sources: interactive voice response, speech recognition, word error rate, speech synthesis, code-switching, Algerian Arabic, telephony signalling protocol. The 1,400 calls, their split and the delays are a constructed example. The page covers neither the rules on call recording and personal data, nor telephony authorisations, and quotes no hardware or subscription price.",
    ],
    sections: [
      { heading: "Five kinds of call", body: [
        "The figure sorts five kinds of call, and what the agent does with each.",
      ], visual: 'types', after: [
        "**Before AI.** Interactive voice response is an automated telephony system that interacts with callers, gathers information and routes the call; it understands keys or a few words. A voice agent goes further: it understands a sentence, and acts. **What it takes.** Repetitive calls whose answer can be checked: opening hours, an appointment, the status of an order. **What it does not take.** A negotiated price, a complaint, an emergency: there, a person decides.",
        "**The rule.** The agent handles only what its instructions allow, and says it is an automated assistant in its first sentence. **Handover.** At the first sign of misunderstanding, anger or urgency, it passes the call to a person, with what has already been said: the caller does not repeat. **On other channels.** The same requests arrive by messaging; the written agent is described in [the AI agent on WhatsApp](" + L.whatsapp + "), and the general approach in [the AI agent in a company](" + L.agent + ").",
      ] },
      { heading: "The calls nobody was taking", body: [
        "The figure follows the 1,400 calls of one week.",
      ], visual: 'flux', after: [
        "**In the example.** 1,400 calls in one week on one number. The reception takes 870, that is 62%. 530 get no answer: 220 at peak hours, when every line is busy, and 310 after closing. **What is given to the agent.** Those 530 calls, and only those, to begin with. It resolves 307, hands 159 to a person with a summary, and 64 hang up before the end.",
        "**What that says.** The agent takes no call away from the reception: it takes those that were being lost. **The 64 abandoned calls.** They are listened to again: a word not understood, too long a wait, a request out of scope. That is next week's work list. **The call log.** The switchboard already gives these figures, calls received, taken, missed, per hour, see [the IP switchboard](" + L.ipbx + "). **What is measured.** Calls taken by the agent; share resolved without handover; share handed over; abandoned calls; requests not understood.",
      ] },
      { heading: "A call, in six steps", body: [
        "The figure follows a call taken by the agent.",
      ], visual: 'appel', after: [
        "**Arrival.** The call arrives through your switchboard: the signalling protocol sets up the session and passes it to the agent when nobody picks up, or outside opening hours. **The greeting.** One short sentence, saying it is an automated assistant and offering to speak to a person. **The request.** Speech recognition turns speech into text; the model looks for the intent in it: an appointment, tracking, something else.",
        "**The action.** That is the accented step. The agent does not answer from memory: it consults the diary, the order or the file, through tools with limited rights, see [what the agent is allowed to do](" + L.backoffice + "). An appointment taken follows the rules of [booking without double booking](" + L.reservation + "). **The answer.** Speech synthesis, the artificial production of speech, reads the answer out; a confirmation message goes out in writing. **The record.** A summary, the next step, and the call attached to the customer's record, see [the CRM](" + L.crm + ").",
      ] },
      { heading: "Response time, and language", body: [
        "The figure breaks down one turn, from the end of the question to the start of the answer.",
      ], visual: 'tour', after: [
        "**Four delays.** In the example: 400 milliseconds to be sure the person has finished speaking, 200 of transcription, 700 for the model and the look-up in the diary, 200 before the first sound. Total: 1.5 seconds of silence. **The example's markers.** Under one second the exchange stays fluid; beyond two, the caller says “hello?”. **Where to gain.** On the model and the tool: a short answer, a diary that responds fast, the start of a sentence sent while the rest is being computed. **Barge-in.** Voice activity detection spots the presence or absence of speech: as soon as the person speaks again, the agent stops.",
        "**Language.** Algerian Arabic, Darja, is a variety of Arabic spoken in Algeria, a language of daily communication, rarely written, with loanwords from French. Many callers switch from one language to the other within a sentence: that is code-switching. **What that changes.** Recognition accuracy varies with accent, dialect, speed and background noise; it is measured by the word error rate, which counts substitutions, deletions and insertions. A language that is mostly spoken, rarely written and mixed with French is a harder case for these systems; how much harder, only your calls can say. **What we do.** We do not promise a figure: we measure on two hundred of your calls, per language, before opening. If Darija dominates, the agent starts with the simplest requests, or offers the keypad. The method is described in [measuring that an AI works](" + L.mesure + ").",
      ] },
      { heading: "Eight weeks, starting by listening", body: [
        "Eight weeks in the example, before opening in the daytime.",
      ], visual: 'calendrier', after: [
        "**Listening.** Two weeks on two hundred real calls, with people's agreement according to your obligations: what people ask, in which language, with which words. That is where the three requests to automate and the test set come from. **Telephony.** Forwarding to the agent and transfer to a person are set on your switchboard. **The tools.** The diary and the files are connected for reading, then for writing appointments.",
        "**Opening.** First the calls after closing, where nobody answered: the risk is lowest. Then daytime overflow. **Ongoing listening.** Every week a sample of calls is listened to again, and the words not understood are added. **Where the model runs.** At a provider or on your servers, depending on the confidentiality of your calls, see [deploying a model on your own servers](" + L.deployer + "). **What the agent does not do.** It does not replace the reception, does not negotiate and does not decide: it takes what was being lost. **The durations** are those of a constructed example.",
      ] },
      { heading: "What is inside a voice agent", body: [
        "The figure stacks five layers; the third says what the agent is allowed to do.",
      ], visual: 'couches', after: [
        "**Telephony and voice.** The call arrives through your switchboard; voice covers recognition, end-of-speech detection, barge-in and synthesis. **The agent.** That is the accented layer: a model, written instructions, a closed list of requests, and guardrails. It gives no price that is not in its base, promises nothing, and hands over when in doubt.",
        "**Tools and follow-up.** Diary, orders, files, answer base; summaries, resolution rate, words not understood. **Ready-made or custom.** Ready-made voice agent services exist, and suit a trial in French. Custom work is justified when your switchboard, your diary and your files have to be connected, your callers' languages handled, the calls kept on your premises, and what the agent understood measured week after week.",
      ], list: [
        "**What you receive**: forwarding of untaken calls to the agent; three requests handled end to end; the diary and files connected; handover to a person with a summary; the confirmation message; the table of calls resolved, handed over and abandoned; sampled listening.",
        "**What the company avoids**: the unanswered call at peak hour, the phone ringing into the void after closing, the same answers repeated all day, the appointment noted on a slip of paper, the caller repeating everything at each transfer.",
        "**What is measured**: calls taken by the agent; share resolved without handover; share handed over; abandoned calls; response time per turn; word error rate per language; requests not understood.",
        "**What Symloop does**: listening to your calls, connecting to your switchboard, the agent and its instructions, tools connected to your diary and your files, trials per language, weekly follow-up, in Arabic and in French.",
      ], faq: [
        { q: "What is an AI voice agent?", a: "A program that answers the phone: it transcribes what the person says, understands the request, consults your tools and answers aloud. It handles repetitive calls and hands the others to a person." },
        { q: "Does an AI voice agent understand Darija?", a: "That is measured, not promised. A language that is mostly spoken and mixed with French is a harder case for speech recognition. We test on two hundred of your calls, per language, before opening." },
        { q: "Which calls can it take?", a: "Those whose answer is fixed or checkable: hours, address, booking or moving an appointment, tracking an order or a file. Negotiated prices, complaints and emergencies go to a person." },
        { q: "What happens when it does not understand?", a: "It asks the question once more, then hands over to a person with a summary of what was said. Outside opening hours, it takes the number and the request for a call-back." },
        { q: "Does the switchboard have to be changed?", a: "Not necessarily. The agent connects to an IP switchboard through the usual signalling protocol; an older switchboard may need a gateway." },
        { q: "How long does it take to answer?", a: "In the example, a second and a half between the end of the question and the start of the answer. The aim is to get under one second, stage by stage." },
        { q: "Can the agent book an appointment?", a: "Yes, if it is connected to the diary: it offers free slots, holds one, and sends a confirmation by message." },
        { q: "Do callers know they are speaking to a machine?", a: "Yes: the agent says so in its first sentence, and offers to speak to a person. It is a rule we set in its instructions." },
        { q: "Where are the calls processed?", a: "At the model provider or on your own servers, depending on the confidentiality of your calls. The choice is made at scoping." },
        { q: "Where do you start?", a: "With the call log: how many missed calls, at what hours, for which requests. Then with calls after closing, where nobody answered." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The agent takes no call away from the reception: it takes those that were being lost." },
      { after: 3, text: "Darija is measured, not promised: two hundred of your calls, before opening." },
    ],
    cta: { eyebrow: "Tell us how many calls you receive, how many are lost, and in which languages: we start by listening", title: "Unanswered calls at peak hour, a phone ringing after closing, the same questions all day, appointments to take by phone, or a service you are setting up in Algeria from France", body: "Symloop builds the voice agent that fits your calls: connection to the switchboard, three requests handled end to end, connected tools, handover with a summary, weekly follow-up. Describe your reception to us, your calls and your tools." },
    related: { label: 'Also read', items: [
      { href: L.ipbx, kind: '2027', name: 'IP switchboard: lines, extensions, voice menu, missed calls' },
      { href: L.whatsapp, kind: '2027', name: 'AI agent on WhatsApp: architecture, handover to a person, cost per message' },
      { href: L.agent, kind: '2027', name: 'AI agent in a company: where to start, what works' },
      { href: L.mesure, kind: '2027', name: 'Measuring that an AI works: evaluation set, error rate, release threshold' },
    ] },
  },
  ar: {
    kind: 'العون الصوتي الذكي · الجزائر · 2027', title: "العون الصوتي بالذكاء الاصطناعي في الجزائر (2027): مكالمة من ثلاث دون رد، الأسئلة نفسها طوال اليوم، ومتصلون يمزجون الدارجة بالفرنسية؛ استقبال هاتفي بالذكاء الاصطناعي، حجز المواعيد، زمن الرد، التحويل إلى شخص، وما نضعه",
    dek: "«هاتفنا يرن طوال اليوم. في ساعات الذروة، مكالمة من ثلاث لا يُرَد عليها، وفي المساء لا يجيب أحد. والاستقبال يكرّر الأجوبة نفسها: التوقيت، موعد يُغيَّر، وأين وصلت طلبيتي. يحدّثونني عن عون صوتي بالذكاء الاصطناعي يرد مكاننا. هل ينجح ذلك في الجزائر، مع أناس ينتقلون من الدارجة إلى الفرنسية في الجملة نفسها؟» ينجح للمكالمات المتكررة التي يمكن التحقق منها، بشرط القياس على مكالماتكم أنتم، وإعادة المكالمة إلى شخص فور ألا يفهم العون.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['العون الصوتي بالذكاء الاصطناعي', 'استقبال هاتفي ذكي', 'المكالمات دون رد وحجز المواعيد', 'الفرنسية، العربية، والدارجة', 'زمن الرد والتحويل', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** العون الصوتي بالذكاء الاصطناعي سلسلة من أربع حلقات: الهاتف الذي يوصل إليه المكالمة، التعرف على الكلام، نموذج يقرّر بمراجعة أدواتكم، وتركيب الصوت الذي يجيب. يأخذ المكالمات المتكررة، التوقيت، المواعيد، والمتابعة، ويحوّل الباقي إلى شخص مع ملخّص. ويُحكَم عليه برقمين: حصة المكالمات المحلولة، وزمن الرد. في مثال هذه الصفحة، من 530 مكالمة كانت تبقى دون رد في أسبوع، يحل العون 307 ويحوّل 159.",
      "هذه الصفحة موجّهة إلى العيادات، المكاتب، وكلاء السيارات، الوكالات، مصالح ما بعد البيع، ومراكز الاتصال التي يفيض هاتفها، في الجزائر، وإلى مؤسسي الجالية الذين يقيمون خدمة هنا. التعريفات من مصادر عمومية: الرد الصوتي التفاعلي، التعرف على الكلام، نسبة خطأ الكلمات، تركيب الكلام، التناوب اللغوي، العربية الجزائرية، وبروتوكول الهاتف. والمكالمات الـ" + I('1 400') + "، توزيعها، والمهل مثال مركَّب. والصفحة لا تتناول قواعد تسجيل المكالمات والمعطيات الشخصية، ولا رخص الهاتف، ولا تذكر أي سعر عتاد أو اشتراك.",
    ],
    sections: [
      { heading: "خمسة أنواع من المكالمات", body: [
        "الشكل يصنّف خمسة أنواع من المكالمات، وما يفعله العون بكل واحد.",
      ], visual: 'types', after: [
        "**قبل الذكاء الاصطناعي.** الرد الصوتي التفاعلي نظام هاتفي آلي يتحاور مع المتصلين، يجمع معلومات، ويوجّه المكالمة؛ يفهم أزراراً أو بضع كلمات. والعون الصوتي يذهب أبعد: يفهم جملة، ويتصرّف. **ما يأخذه.** المكالمات المتكررة التي يمكن التحقق من جوابها: التوقيت، موعد، وحالة طلبية. **ما لا يأخذه.** سعر يُتفاوض عليه، شكوى، أو استعجال: هناك، شخص يقرّر.",
        "**القاعدة.** العون لا يعالج إلا ما تسمح به تعليماته، ويقول إنه مساعد آلي منذ الجملة الأولى. **التحويل.** عند أول علامة عدم فهم، غضب، أو استعجال، يحوّل إلى شخص، مع ما قيل من قبل: المتصل لا يكرّر. **على قنوات أخرى.** الطلبات نفسها تصل عبر المراسلة؛ والعون الكتابي موصوف في [العون الذكي على واتساب](" + L.whatsapp + ")، والمنهج العام في [العون الذكي في المؤسسة](" + L.agent + ").",
      ] },
      { heading: "المكالمات التي لم يكن يرد عليها أحد", body: [
        "الشكل يتابع مكالمات أسبوع، وعددها " + I('1 400') + ".",
      ], visual: 'flux', after: [
        "**في المثال.** " + I('1 400') + " مكالمة في أسبوع على رقم واحد. الاستقبال يرد على 870، أي 62 بالمئة. و530 تبقى دون رد: 220 في ساعات الذروة، حين تكون كل الخطوط مشغولة، و310 بعد الإغلاق. **ما يُسنَد إلى العون.** هذه الـ530 مكالمة، وهي وحدها، في البداية. يحل منها 307، يحوّل 159 إلى شخص مع ملخّص، و64 يقطعون قبل النهاية.",
        "**ما يقوله ذلك.** العون لا يأخذ أي مكالمة من الاستقبال: يأخذ التي كانت تضيع. **المكالمات الـ64 المتخلّى عنها.** يُعاد الإصغاء إليها: كلمة لم تُفهَم، انتظار طويل، أو طلب خارج النطاق. هي قائمة عمل الأسبوع التالي. **سجل المكالمات.** المقسم يعطي هذه الأرقام من قبل، المكالمات الواردة، المردود عليها، والفائتة، لكل ساعة، انظر [المقسم الهاتفي عبر الإنترنت](" + L.ipbx + "). **ما يُقاس.** المكالمات التي يأخذها العون؛ الحصة المحلولة دون تحويل؛ الحصة المحوَّلة؛ المتخلّى عنها؛ والطلبات غير المفهومة.",
      ] },
      { heading: "مكالمة، في ست مراحل", body: [
        "الشكل يتابع مكالمة يأخذها العون.",
      ], visual: 'appel', after: [
        "**الورود.** المكالمة تصل عبر مقسمكم: بروتوكول الهاتف يقيم الجلسة ويمرّرها إلى العون حين لا يرد أحد، أو خارج أوقات العمل. **الاستقبال.** جملة قصيرة، تقول إنه مساعد آلي وتقترح التحدث إلى شخص. **الطلب.** التعرف على الكلام يحوّل الكلام إلى نص؛ والنموذج يبحث فيه عن القصد: موعد، متابعة، أو شيء آخر.",
        "**الفعل.** هو المرحلة المبرزة. العون لا يجيب من الذاكرة: يراجع المفكرة، الطلبية، أو الملف، بأدوات محدودة الصلاحيات، انظر [ما يحق للعون فعله](" + L.backoffice + "). والموعد المأخوذ يتبع قواعد [الحجز دون تكرار](" + L.reservation + "). **الجواب.** تركيب الكلام، أي الإنتاج الاصطناعي للكلام، يقرأ الجواب؛ ورسالة تأكيد تُرسَل كتابة. **الأثر.** ملخّص، ما يُتابَع، والمكالمة مربوطة ببطاقة الزبون، انظر [برنامج تسيير العلاقة مع الزبائن](" + L.crm + ").",
      ] },
      { heading: "زمن الرد، واللغة", body: [
        "الشكل يفكّك دور كلام واحداً، من نهاية السؤال إلى بداية الجواب.",
      ], visual: 'tour', after: [
        "**أربع مهل.** في المثال: 400 ميلي ثانية للتأكد أن الشخص أنهى كلامه، 200 للنسخ، 700 للنموذج والاطلاع على المفكرة، و200 قبل أول صوت. المجموع: ثانية ونصف من الصمت. **مَعلَما المثال.** تحت ثانية واحدة، يبقى التبادل سلساً؛ وبعد ثانيتين، يقول المتصل «ألو؟». **أين يُربَح.** في النموذج والأداة: جواب قصير، مفكرة تجيب بسرعة، وبداية جملة تُرسَل بينما يُحسب الباقي. **المقاطعة.** كشف النشاط الصوتي يرصد وجود الكلام أو غيابه: فور عودة الشخص إلى الكلام، يسكت العون.",
        "**اللغة.** العربية الجزائرية، الدارجة، نوع من العربية يُتكلَّم في الجزائر، لغة التواصل اليومي، قلّما تُكتَب، وفيها كلمات مأخوذة من الفرنسية. وكثير من المتصلين ينتقلون من لغة إلى أخرى في الجملة نفسها: هو التناوب اللغوي. **ما يغيّره ذلك.** دقة التعرف تتغيّر مع اللكنة، اللهجة، السرعة، والضجيج؛ وتُقاس بنسبة خطأ الكلمات، التي تعدّ الاستبدالات، الحذف، والإضافات. ولغة تُتكلَّم أكثر مما تُكتَب، ومختلطة بالفرنسية، حالة أصعب لهذه الأنظمة؛ وإلى أي حد، مكالماتكم وحدها تقول. **ما نفعله.** لا نعد برقم: نقيس على مئتين من مكالماتكم، لكل لغة، قبل الفتح. وإذا غلبت الدارجة، يبدأ العون بأبسط الطلبات، أو يقترح أزرار الهاتف. والطريقة موصوفة في [قياس أن الذكاء الاصطناعي يشتغل](" + L.mesure + ").",
      ] },
      { heading: "ثمانية أسابيع، بدءاً بالإصغاء", body: [
        "ثمانية أسابيع في المثال، قبل الفتح في النهار.",
      ], visual: 'calendrier', after: [
        "**الإصغاء.** أسبوعان على مئتي مكالمة حقيقية، بموافقة الأشخاص حسب التزاماتكم: ما يطلبه الناس، بأي لغة، وبأي كلمات. من هنا تخرج الطلبات الثلاثة التي تُؤتمَت ومجموعة التجارب. **الهاتف.** التوجيه نحو العون والتحويل إلى شخص يُضبطان على مقسمكم. **الأدوات.** المفكرة والملفات تُربَط للقراءة، ثم للكتابة من أجل المواعيد.",
        "**الفتح.** أولاً المكالمات بعد الإغلاق، حيث لم يكن يرد أحد: الخطر هو الأضعف. ثم فائض النهار. **الإصغاء المتواصل.** كل أسبوع، يُعاد الإصغاء إلى عيّنة من المكالمات، وتُضاف الكلمات غير المفهومة. **أين يشتغل النموذج.** عند مزوّد أو على خوادمكم، حسب سرية مكالماتكم، انظر [تشغيل نموذج على خوادمكم](" + L.deployer + "). **ما لا يفعله العون.** لا يعوّض الاستقبال، لا يتفاوض، ولا يقرّر: يأخذ ما كان يضيع. **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "ما يوجد في عون صوتي", body: [
        "الشكل يرتّب خمس طبقات؛ والثالثة تقول ما يحق للعون فعله.",
      ], visual: 'couches', after: [
        "**الهاتف والصوت.** المكالمة تصل عبر مقسمكم؛ والصوت يشمل التعرف، كشف نهاية الكلام، المقاطعة، وتركيب الصوت. **العون.** هو الطبقة المبرزة: نموذج، تعليمات مكتوبة، قائمة مغلقة من الطلبات، وضوابط. لا يعطي سعراً ليس في قاعدته، لا يعد بشيء، ويحوّل حين يشك.",
        "**الأدوات والمتابعة.** المفكرة، الطلبيات، الملفات، وقاعدة الأجوبة؛ الملخّصات، نسبة الحل، والكلمات غير المفهومة. **جاهز أو على المقاس.** توجد خدمات أعوان صوتية جاهزة، وتناسب تجربة بالفرنسية. والعمل على المقاس يُبرَّر حين يلزم ربط مقسمكم، مفكرتكم، وملفاتكم، معالجة لغات متصليكم، إبقاء المكالمات عندكم، وقياس ما فهمه العون أسبوعاً بعد أسبوع.",
      ], list: [
        "**ما تتلقونه**: توجيه المكالمات غير المردود عليها نحو العون؛ ثلاثة طلبات تُعالَج من البداية إلى النهاية؛ المفكرة والملفات مربوطة؛ التحويل إلى شخص مع ملخّص؛ رسالة التأكيد؛ جدول المكالمات المحلولة، المحوَّلة، والمتخلّى عنها؛ والإصغاء إلى عيّنات.",
        "**ما تتفاداه المؤسسة**: المكالمة دون رد في ساعة الذروة، الهاتف الذي يرن في الفراغ بعد الإغلاق، الأجوبة نفسها تُكرَّر طوال اليوم، الموعد المسجَّل على ورقة، والمتصل الذي يكرّر كل شيء عند كل تحويل.",
        "**ما يُقاس**: المكالمات التي يأخذها العون؛ الحصة المحلولة دون تحويل؛ الحصة المحوَّلة؛ المتخلّى عنها؛ زمن الرد لكل دور؛ نسبة خطأ الكلمات لكل لغة؛ والطلبات غير المفهومة.",
        "**ما تفعله Symloop**: الإصغاء إلى مكالماتكم، الربط بمقسمكم، العون وتعليماته، الأدوات المربوطة بمفكرتكم وملفاتكم، التجارب لكل لغة، والمتابعة الأسبوعية، بالعربية والفرنسية.",
      ], faq: [
        { q: "ما هو العون الصوتي بالذكاء الاصطناعي؟", a: "برنامج يرد على الهاتف: ينسخ ما يقوله الشخص، يفهم الطلب، يراجع أدواتكم، ويجيب بصوت. يعالج المكالمات المتكررة ويحوّل الباقي إلى شخص." },
        { q: "هل يفهم العون الصوتي الدارجة؟", a: "ذلك يُقاس، ولا يُوعَد به. لغة تُتكلَّم أكثر مما تُكتَب ومختلطة بالفرنسية حالة أصعب للتعرف على الكلام. نجرّب على مئتين من مكالماتكم، لكل لغة، قبل الفتح." },
        { q: "أي المكالمات يستطيع أخذها؟", a: "التي جوابها ثابت أو يمكن التحقق منه: التوقيت، العنوان، أخذ موعد أو تغييره، ومتابعة طلبية أو ملف. والأسعار التي يُتفاوض عليها، الشكاوى، والاستعجالات تذهب إلى شخص." },
        { q: "ماذا يحدث حين لا يفهم؟", a: "يعيد السؤال مرة واحدة، ثم يحوّل إلى شخص مع ملخّص لما قيل. وخارج أوقات العمل، يأخذ الرقم والطلب لإعادة الاتصال." },
        { q: "هل يجب تغيير المقسم الهاتفي؟", a: "ليس بالضرورة. العون يُربَط بمقسم عبر الإنترنت ببروتوكول الهاتف المعتاد؛ والمقسم القديم قد يتطلب بوابة." },
        { q: "كم يأخذ من الوقت ليجيب؟", a: "في المثال، ثانية ونصف بين نهاية السؤال وبداية الجواب. والهدف النزول تحت الثانية، مرحلة بمرحلة." },
        { q: "هل يستطيع العون أخذ موعد؟", a: "نعم، إذا كان مربوطاً بالمفكرة: يقترح فترات شاغرة، يحجز واحدة، ويرسل تأكيداً برسالة." },
        { q: "هل يعرف المتصلون أنهم يتحدثون إلى آلة؟", a: "نعم: العون يقول ذلك منذ الجملة الأولى، ويقترح التحدث إلى شخص. هي قاعدة نحدّدها في تعليماته." },
        { q: "أين تُعالَج المكالمات؟", a: "عند مزوّد النموذج أو على خوادمكم الخاصة، حسب سرية مكالماتكم. والاختيار يتم عند التأطير." },
        { q: "بماذا يُبدأ؟", a: "بسجل المكالمات: كم مكالمة فائتة، في أي ساعات، ولأي طلبات. ثم بالمكالمات بعد الإغلاق، حيث لم يكن يرد أحد." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "العون لا يأخذ أي مكالمة من الاستقبال: يأخذ التي كانت تضيع." },
      { after: 3, text: "الدارجة تُقاس، ولا يُوعَد بها: مئتان من مكالماتكم، قبل الفتح." },
    ],
    cta: { eyebrow: "قولوا لنا كم مكالمة تتلقون، كم تضيع، وبأي لغات: نبدأ بالإصغاء", title: "مكالمات دون رد في ساعة الذروة، هاتف يرن بعد الإغلاق، الأسئلة نفسها طوال اليوم، مواعيد تُؤخذ بالهاتف، أو خدمة تقيمونها في الجزائر من فرنسا", body: "Symloop تبني العون الصوتي الذي يناسب مكالماتكم: الربط بالمقسم، ثلاثة طلبات تُعالَج من البداية إلى النهاية، أدوات مربوطة، تحويل مع ملخّص، ومتابعة أسبوعية. صِفوا لنا استقبالكم، مكالماتكم، وأدواتكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.ipbx, kind: '2027', name: 'المقسم الهاتفي عبر الإنترنت: الخطوط، الأجهزة، القائمة الصوتية، والمكالمات الفائتة' },
      { href: L.whatsapp, kind: '2027', name: 'العون الذكي على واتساب: البنية، التحويل إلى شخص، والكلفة لكل رسالة' },
      { href: L.agent, kind: '2027', name: 'العون الذكي في المؤسسة: من أين يُبدأ، وما ينجح' },
      { href: L.mesure, kind: '2027', name: 'قياس أن الذكاء الاصطناعي يشتغل: مجموعة التقييم، نسبة الخطأ، وعتبة التسليم' },
    ] },
  },
};

const KEYWORDS = "agent vocal ia, agent vocal ia algérie 2027, standard téléphonique ia, accueil téléphonique ia, standard téléphonique virtuel ia, centre d'appel ia, agent ia algerie, agent ia prise de rendez vous, transcription appel ia, ia darija, voix ia darija, agent vocal ia medical, agent vocal ia immobilier, ai voice agent algeria, ai phone receptionist, voice ai latency, speech recognition darija, العون الصوتي بالذكاء الاصطناعي, استقبال هاتفي بالذكاء الاصطناعي, الذكاء الاصطناعي الدارجة, حجز المواعيد بالهاتف, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
