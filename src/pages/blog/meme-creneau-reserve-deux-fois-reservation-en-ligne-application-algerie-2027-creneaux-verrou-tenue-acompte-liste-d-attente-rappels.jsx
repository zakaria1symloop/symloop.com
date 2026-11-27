import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels.mjs';

const SLUG = 'meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels';
const FIGURES = ['course', 'etapes', 'couches', 'semaine', 'situations', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  planity: '/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/',
  dentaire: '/blog/cabinet-dentaire-algerie-2027-patients-diaspora-ete-plan-de-traitement-a-distance-devis-radios-suivi/',
  sport: '/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/',
  thermale: '/blog/station-thermale-algerie-2027-reservation-cure-planning-soins-hammam/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  client: '/blog/un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  bilingue: '/blog/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit/',
  billetterie: '/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/',
  location: '/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Réservation · Créneaux · Rappels · 2027', title: "« Le même créneau a été réservé deux fois » : ce qu'on construit dans un système de réservation en ligne en Algérie en 2027, créneaux calculés, verrou, tenue qui expire, acompte, liste d'attente, rappels",
    dek: "« Deux clients se présentent à 14 h 30 : l'un a réservé sur le site, l'autre a appelé, et la secrétaire avait l'agenda papier ouvert. Un rendez-vous sur quatre ne vient pas, et le client de Paris arrive une heure en retard parce qu'il a lu l'heure dans son fuseau. » La double réservation n'est pas une erreur de secrétaire, c'est une construction : deux chemins pour réserver, et aucune règle pour dire lequel gagne. Ce guide décrit ce qu'on construit pour qu'un créneau n'existe qu'une fois : des disponibilités en couches dont les créneaux sont calculés à la demande, une transaction qui verrouille le créneau, une tenue de dix minutes qui expire, un acompte, une liste d'attente, des rappels WhatsApp avec réponse, et l'heure d'Alger affichée dans le fuseau du client.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Réservation en ligne', 'Créneaux', 'Double réservation', 'Rappels', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Les créneaux ne sont **stockés nulle part** : ils sont **calculés à la demande** à partir des horaires du praticien moins les pauses, les jours bloqués, les rendez-vous pris, les tenues en cours et les tampons, puis découpés par la **durée du service**. Réserver, c'est une **transaction** qui verrouille la ligne du créneau et crée une **tenue** de dix minutes ; la seconde demande, qu'elle vienne du site, de l'application, de l'agent WhatsApp ou du comptoir, reçoit un **refus net** et des alternatives, parce que tous les canaux passent par le **même chemin**. L'**acompte** ou la confirmation transforme la tenue en réservation ; sans lui, elle **expire** et le créneau redevient libre. Des **rappels** WhatsApp la veille et deux heures avant, avec une réponse en un mot, et une **liste d'attente** prévenue quand un créneau se libère, font baisser les absences. Les heures sont stockées en **heure d'Alger**, fixe toute l'année, et affichées dans le **fuseau du client**. Six semaines, dont la première sans code.",
      "Ce guide s'adresse au gérant d'un cabinet, d'un salon, d'un centre ou d'un atelier qui prend des rendez-vous par téléphone, WhatsApp et site à la fois, au fondateur installé en France dont les clients réservent depuis deux fuseaux, et au responsable qui voit un créneau sur quatre perdu par absence. Il ne redit pas ce qu'un salon, un cabinet dentaire ou une station thermale attendent d'une application de réservation, décrit dans [le guide sur le salon de beauté](" + L.planity + "), [le guide sur le cabinet dentaire](" + L.dentaire + ") et [le guide sur la station thermale](" + L.thermale + ") ; il décrit ce qui se construit sous tous ces métiers pour qu'un créneau n'existe qu'une fois, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Deux clients, un créneau, une seule réservation', body: [
        "La figure suit deux demandes pour le même créneau de 14 h 30, à 220 millisecondes d'écart : Amel depuis l'application à Alger, Karim via l'agent WhatsApp depuis Paris. Les deux écrans affichaient « disponible ». C'est le serveur qui tranche.",
      ], visual: 'course', after: [
        "La demande d'Amel ouvre une transaction, verrouille la ligne du créneau, vérifie qu'il est libre et crée une tenue qui expire à 10:10 ; la transaction se termine en quelques millisecondes. La demande de Karim arrive 220 millisecondes plus tard sur un créneau tenu : refus net, et deux alternatives, 15 h 00 ou la liste d'attente. À 10:04, l'acompte d'Amel est confirmé par le webhook du prestataire de paiement, selon [le guide sur le paiement en ligne](" + L.paiement + "), et la tenue devient une réservation confirmée ; les messages partent. Karim choisit la liste d'attente et sera prévenu si 14 h 30 se libère.",
        "Si Amel n'avait pas payé, la tenue aurait expiré à 10:10 et le créneau serait redevenu libre, sans intervention. C'est la même mécanique que la réservation de stock décrite dans [le guide sur le stock](" + L.stock + ") : une quantité, ici un créneau, qui ne se vend pas deux fois parce que la base de données le refuse dans une transaction, pas parce que l'écran l'a affiché. Les heures de la figure sont un exemple construit.",
      ] },
      { heading: 'De la demande au rendez-vous tenu, en six étapes', body: [
        "Ce qui se passe pour un rendez-vous, dans l'ordre, et le moment où chaque décision se prend.",
      ], visual: 'etapes', after: [
        "**Afficher les créneaux**, calculés depuis les disponibilités et affichés dans le fuseau du client. **Tenir le créneau** : transaction, verrou, tenue de dix minutes, refus net si pris ; c'est l'étape accentuée, la seule qui écrit en concurrence. **Confirmer** par acompte en ligne ou en un geste ; la tenue devient une réservation. **Rappeler** par WhatsApp la veille et deux heures avant, avec une réponse en un mot, oui, déplacer ou annuler, selon les règles de modèles et de fenêtre décrites dans [le guide sur l'agent WhatsApp](" + L.whatsapp + ").",
        "**Tenir ou libérer** : l'arrivée est pointée, l'absence enregistrée sur la fiche client, et un créneau annulé est relibéré avec la liste d'attente prévenue. **Mesurer** : taux d'absence, délai moyen entre la prise et le rendez-vous, remplissage par praticien, sur le tableau de bord du gérant selon [le guide sur le tableau de bord temps réel](" + L.dashboard + ").",
      ] },
      { heading: 'Un système de réservation, en cinq couches', body: [
        "Le verrou est la couche qui empêche la double réservation ; les quatre autres font que les créneaux sont justes, que les rendez-vous se tiennent, et que le gérant le sait.",
      ], visual: 'couches', after: [
        "**Disponibilités.** Horaires par praticien ou par ressource, pauses, jours bloqués, durée par service, tampon entre deux rendez-vous, capacité quand plusieurs clients partagent un créneau ; écrits par le gérant dans l'application, en heure d'Alger. **Moteur de créneaux.** Les créneaux visibles sont calculés à la demande en retirant des horaires tout ce qui est pris, puis en découpant par la durée du service ; rien n'est stocké à l'avance, donc changer un horaire ne casse rien. **Réservation et verrou.** Une transaction par demande, une tenue de dix minutes avec expiration, un refus net si le créneau est pris, des alternatives et une liste d'attente ; c'est la couche accentuée, et elle doit être unique : l'application, le site, l'agent WhatsApp et le comptoir passent par le même chemin.",
        "**Confirmation et paiement.** Acompte en ligne ou confirmation en un geste, annulation selon des règles écrites, créneau relibéré et liste d'attente prévenue. **Rappels et mesure.** Rappels avec réponse, pointage à l'arrivée, absences enregistrées, taux d'absence et remplissage par praticien ; le choix du canal suit [le guide sur les notifications](" + L.notif + "). Le client est le même d'un canal à l'autre, selon [le guide sur le fichier client](" + L.client + ") : c'est ce qui permet de compter les absences par personne.",
      ] },
      { heading: "D'où viennent les créneaux : une semaine, couche par couche", body: [
        "La figure montre une semaine d'un praticien et la façon dont les créneaux qu'un client voit sont produits : par soustraction, puis par découpage.",
      ], visual: 'semaine', after: [
        "Le fond est l'ouverture ; on retire la pause, le jeudi après-midi bloqué pour formation, le samedi après-midi fermé, les rendez-vous déjà pris, la tenue en cours du mardi à 11 h qui expire dans six minutes, et les tampons de dix minutes après chaque rendez-vous. Ce qui reste est découpé en créneaux de trente minutes, la durée du service choisi ; un service d'une heure produirait moins de créneaux à partir des mêmes trous. Le calcul se fait à la demande, en heure d'Alger.",
        "L'affichage se fait dans le fuseau du client. L'Algérie reste à UTC+1 toute l'année et n'applique pas d'heure d'été ; la France passe à UTC+2 de fin mars à fin octobre. Un créneau de 14 h 30 à Alger s'affiche donc 15 h 30 à Paris en été et 14 h 30 en hiver, et la mention « heure d'Alger » figure sur la confirmation et le rappel. Les horaires de la figure sont un exemple construit.",
      ] },
      { heading: "Six situations réelles, et ce que l'application fait", body: [
        "Les six situations qu'on retrouve dans presque tous les systèmes de rendez-vous qu'on reprend, et la construction qui les règle.",
      ], visual: 'situations', after: [
        "Les deux premières lignes se règlent par la transaction et la tenue avec expiration ; la troisième par le stockage en heure d'Alger et l'affichage dans le fuseau du client ; la quatrième par les rappels avec réponse, l'acompte là où il est accepté, et la liste d'attente qui remplit le créneau libéré ; les deux dernières par un moteur unique qui calcule à la demande et que tous les canaux utilisent, y compris l'employé au comptoir. Aucune ne se règle par une secrétaire plus attentive.",
      ] },
      { heading: 'Vu ailleurs : les agendas en ligne grand public, et ce qui se transpose', body: [
        "Les agendas de réservation en ligne grand public, pour les salons, les médecins ou les restaurants, partagent trois mécanismes qui se transposent tels quels dans une application sur mesure. **La tenue courte** : le créneau est bloqué quelques minutes pendant que le client confirme, puis libéré ; ce qui se transpose, c'est une tenue avec expiration, jamais une réservation ferme avant confirmation. **Le rappel avec réponse** : un message la veille auquel le client répond en un mot ; ce qui se transpose, c'est une réponse qui met à jour le rendez-vous, pas un message qu'on envoie et qu'on oublie. **La liste d'attente** : quand un créneau se libère, les clients en attente sont prévenus dans l'ordre ; ce qui se transpose, c'est le remplissage automatique des annulations.",
        "Ce que ces agendas ne décident pas pour vous : la durée de vos services, vos tampons, votre durée de tenue, l'acompte ou non, et vos règles d'annulation ; la première semaine du projet y répond. Les agendas du marché restent le bon choix quand vos règles rentrent dans les leurs ; le sur mesure commence quand le rendez-vous doit parler au dossier client, au stock, à la caisse et à l'agent WhatsApp dans la même application, ou quand la réservation porte sur des ressources combinées, une cabine et un soignant, une voiture et un chauffeur, comme dans [le guide sur la location de voiture](" + L.location + ").",
      ] },
      { heading: "Les règles d'un créneau qui n'existe qu'une fois", body: [
        "Six règles, écrites la première semaine. **Les créneaux sont calculés, jamais stockés.** **Réserver est une transaction** qui verrouille le créneau. **Une tenue dure dix minutes** et expire sans confirmation. **Tous les canaux passent par le même chemin**, le comptoir compris. **Les heures sont stockées en heure d'Alger** et affichées dans le fuseau du client. **Chaque rendez-vous est rappelé avec une réponse**, et chaque absence est enregistrée sur la fiche client.",
        "Et une règle de méthode : l'agenda existant est repris comme des rendez-vous datés et signés, pas comme un calendrier recopié ; les doublons se révèlent au premier calcul des créneaux, et c'est le gérant qui les tranche.",
      ] },
      { heading: 'Six entreprises, et la règle de réservation qui manquait', body: [
        "Six situations composées à partir de projets que nous rencontrons ; les noms sont génériques et les chiffres sont des exemples.",
      ], list: [
        "**Un cabinet dentaire à Alger, trois fauteuils.** Deux patients à 14 h 30 une fois par semaine, l'un par le site, l'autre par téléphone. La construction : un seul moteur de créneaux, le comptoir réservant par la même transaction, tenue de dix minutes. Les doublons ont cessé la première semaine ; le cas métier est décrit dans [le guide sur le cabinet dentaire](" + L.dentaire + ").",
        "**Un salon de beauté à Oran, cinq coiffeuses.** Un rendez-vous sur quatre ne venait pas. La construction : rappel WhatsApp la veille et deux heures avant avec réponse en un mot, acompte sur les prestations longues, liste d'attente prévenue. Le taux d'absence est mesuré par coiffeuse depuis ; le cas est proche de [le guide sur le salon de beauté](" + L.planity + ").",
        "**Un fondateur à Lyon, centre de soins à Alger pour la diaspora.** Les clients de France arrivaient une heure en retard l'été. La construction : heures stockées en heure d'Alger, affichées dans le fuseau du client avec la mention, rappel dans le fuseau du client.",
        "**Une salle de sport à Constantine, cours collectifs.** Vingt places par cours, trente inscrits certains soirs. La construction : capacité par créneau, transaction qui compte les places, liste d'attente ; le cas est décrit dans [le guide sur la salle de sport](" + L.sport + ").",
        "**Un garage à Sétif, deux ponts.** Les rendez-vous étaient pris pour le garage, pas pour un pont, et deux voitures attendaient. La construction : réservation par ressource, durée par type d'intervention, tampon de quinze minutes entre deux voitures.",
        "**Une station thermale à Hammam Righa, soins combinés.** Une cure réserve une cabine et un soignant en même temps. La construction : réservation de ressources combinées dans une seule transaction, l'une sans l'autre étant refusée ; le cas est décrit dans [le guide sur la station thermale](" + L.thermale + ").",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Six semaines pour une entreprise qui prend déjà des rendez-vous ; la première semaine se passe sans code.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles** : durée par service, tampons, horaires par praticien, durée de la tenue, acompte ou non, règles d'annulation, textes des rappels dans les deux langues selon [le guide sur l'application bilingue](" + L.bilingue + ") ; signés par le gérant. **Semaine 2, disponibilités et moteur** : horaires, pauses et blocages saisis dans l'application, moteur de créneaux calculé à la demande, affichage dans le fuseau du client. **Semaine 3, réservation et verrou** : transaction par créneau, tenue avec expiration, refus et alternatives, liste d'attente, même chemin pour tous les canaux.",
        "**Semaine 4, confirmation et paiement** : acompte en ligne ou confirmation en un geste, annulation et relibération, agenda du praticien. **Semaine 5, rappels et comptoir** : rappels WhatsApp avec réponse, pointage à l'arrivée, réservation au comptoir et par l'agent WhatsApp. **Semaine 6, mesure** : taux d'absence, remplissage par praticien, délai moyen de prise, première revue mensuelle. Chaque semaine se termine par une démonstration, selon [le guide sur la livraison sans casse](" + L.livrer + ").",
      ] },
      { heading: 'Ce qui fait échouer un système de réservation', body: [
        "Cinq causes, vues dans des applications qu'on reprend. **Les créneaux stockés à l'avance** : changer un horaire casse la semaine. **Deux chemins pour réserver** : le site et le comptoir ne se voient pas. **La tenue sans expiration** : un panier abandonné bloque le créneau toute la journée. **Le rappel sans réponse** : on envoie, on ne sait pas, le client ne vient pas. **L'heure sans fuseau** : le client de France arrive une heure trop tôt ou trop tard.",
        "Et une cause de méthode : laisser la durée des services et les tampons « à ajuster plus tard ». Ils conditionnent chaque créneau affiché ; la première semaine est faite pour les écrire.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que posent les gérants et les fondateurs quand ils nous décrivent un agenda qui déborde.",
      ], faq: [
        { q: "Comment éviter la double réservation d'un créneau ?", a: "En faisant de la réservation une transaction dans la base de données : elle verrouille la ligne du créneau, vérifie qu'il est libre et crée une tenue de dix minutes ; la seconde demande reçoit un refus net et des alternatives. Tous les canaux, site, application, agent WhatsApp et comptoir, passent par le même chemin. L'écran peut afficher un créneau périmé de quelques secondes ; la base de données, non." },
        { q: "Pourquoi les créneaux ne sont-ils pas stockés à l'avance ?", a: "Parce qu'ils dépendent de règles qui changent : horaires, pauses, jours bloqués, durée du service, tampons. Calculés à la demande, ils sont toujours justes, et changer un horaire ne casse rien ; l'application liste seulement les rendez-vous déjà pris qui entrent en conflit, pour que le gérant les tranche." },
        { q: "À quoi sert la tenue de dix minutes ?", a: "À bloquer le créneau le temps que le client confirme ou paie l'acompte, sans qu'un panier abandonné le bloque toute la journée. Passée l'expiration sans confirmation, la tenue disparaît et le créneau redevient libre automatiquement ; la liste d'attente est prévenue." },
        { q: "Comment faire baisser les absences ?", a: "Par un rappel WhatsApp la veille et deux heures avant, avec une réponse en un mot, oui, déplacer ou annuler, qui met à jour le rendez-vous ; par un acompte là où le métier l'accepte ; et par une liste d'attente qui remplit les créneaux libérés. Les absences sont enregistrées sur la fiche client et le taux d'absence est mesuré par praticien." },
        { q: "Comment gérer les clients qui réservent depuis la France ?", a: "En stockant les heures en heure d'Alger, qui reste à UTC+1 toute l'année, et en les affichant dans le fuseau du client. La France passe à UTC+2 de fin mars à fin octobre : un créneau de 14 h 30 à Alger s'affiche 15 h 30 à Paris en été. La confirmation et le rappel portent la mention du fuseau." },
        { q: "Pourquoi pas un agenda en ligne du marché ?", a: "Parce que c'est souvent le bon choix : si vos règles rentrent dans les siennes, prenez-le. Le sur mesure commence quand le rendez-vous doit parler au dossier client, au stock, à la caisse et à l'agent WhatsApp dans la même application, ou quand la réservation porte sur des ressources combinées, une cabine et un soignant, un pont et un mécanicien." },
        { q: "Combien de temps pour construire un système de réservation ?", a: "Six semaines dans le calendrier type : une pour écrire les règles, une pour les disponibilités et le moteur, une pour la réservation et le verrou, une pour la confirmation et le paiement, une pour les rappels et le comptoir, une pour la mesure. Le délai dépend du nombre de ressources et de la complexité des services." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Deux demandes à 220 millisecondes d'écart ne passent pas toutes les deux : c'est la base de données qui tranche, dans une transaction, pas l'écran qui affichait encore « disponible »." },
      { after: 3, text: "Les créneaux ne sont stockés nulle part : ils sont calculés à la demande, en heure d'Alger, et affichés dans le fuseau du client." },
    ],
    cta: { eyebrow: 'Envoyez-nous un mois d’agenda, nous mesurons les doublons et les absences', title: "Gérant en Algérie ou fondateur en France : nous construisons un système de réservation où un créneau n'existe qu'une fois, avec tenue, acompte, liste d'attente et rappels", body: "Symloop construit et reprend des applications en production pour les entreprises en Algérie et les fondateurs installés en France : disponibilités par praticien et par ressource, moteur de créneaux calculé à la demande, réservation par transaction avec verrou et tenue qui expire, refus et alternatives, liste d'attente, acompte en ligne, annulation et relibération, rappels WhatsApp avec réponse, pointage et absences, réservation au comptoir et par l'agent WhatsApp par le même chemin, heure d'Alger affichée dans le fuseau du client, taux d'absence et remplissage par praticien. Code et règles dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.planity, kind: '2027', name: 'Créer l’équivalent de Planity : salon, acompte' },
      { href: L.whatsapp, kind: '2027', name: 'Agent WhatsApp : fenêtre 24 h, templates, passage humain' },
      { href: L.paiement, kind: '2027', name: 'Intégrer le paiement en ligne : webhook, états' },
      { href: L.stock, kind: '2027', name: 'Stock faux dans l’application : réservations, verrou' },
    ] },
  },
  en: {
    kind: 'Booking · Slots · Reminders · 2027', title: "“The same slot was booked twice”: what gets built in an online booking system in Algeria in 2027, computed slots, lock, expiring hold, deposit, waitlist, reminders",
    dek: "“Two customers show up at 14:30: one booked on the site, the other called, and the receptionist had the paper diary open. One appointment in four does not show, and the customer from Paris arrives an hour late because they read the time in their own zone.” Double booking is not a receptionist's mistake, it is a construction: two paths to book, and no rule saying which one wins. This guide describes what gets built so that a slot exists only once: layered availability whose slots are computed on request, a transaction that locks the slot, a ten-minute hold that expires, a deposit, a waitlist, WhatsApp reminders with a reply, and Algiers time shown in the customer's time zone.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Online booking', 'Slots', 'Double booking', 'Reminders', 'Algeria 2027'],
    intro: [
      "**Short answer.** Slots are **stored nowhere**: they are **computed on request** from the practitioner's hours minus breaks, blocked days, taken appointments, holds in progress and buffers, then sliced by the **service duration**. Booking is a **transaction** that locks the slot's row and creates a ten-minute **hold**; the second request, whether from the site, the app, the WhatsApp agent or the counter, gets a **clean refusal** and alternatives, because every channel goes through the **same path**. The **deposit** or confirmation turns the hold into a booking; without it, it **expires** and the slot becomes free again. WhatsApp **reminders** the day before and two hours before, with a one-word reply, and a **waitlist** notified when a slot frees up, lower no-shows. Times are stored in **Algiers time**, fixed all year, and shown in the **customer's time zone**. Six weeks, the first without code.",
      "This guide is for the manager of a practice, a salon, a centre or a workshop that takes appointments by phone, WhatsApp and website at once, the founder settled in France whose customers book from two time zones, and the person who sees one slot in four lost to no-shows. It does not repeat what a salon, a dental practice or a thermal spa expect from a booking application, described in [the beauty salon guide](" + L.planity + "), [the dental practice guide](" + L.dentaire + ") and [the thermal spa guide](" + L.thermale + "); it describes what gets built under all those trades so that a slot exists only once, and it extends [our software engineering page](" + L.service + ").",
    ],
    sections: [
      { heading: 'Two customers, one slot, one booking', body: [
        "The figure follows two requests for the same 14:30 slot, 220 milliseconds apart: Amel from the app in Algiers, Karim through the WhatsApp agent from Paris. Both screens showed “available”. The server decides.",
      ], visual: 'course', after: [
        "Amel's request opens a transaction, locks the slot's row, checks it is free and creates a hold that expires at 10:10; the transaction ends in a few milliseconds. Karim's request lands 220 milliseconds later on a held slot: clean refusal, and two alternatives, 15:00 or the waitlist. At 10:04, Amel's deposit is confirmed by the payment provider's webhook, following [the online payment guide](" + L.paiement + "), and the hold becomes a confirmed booking; messages go out. Karim chooses the waitlist and will be notified if 14:30 frees up.",
        "Had Amel not paid, the hold would have expired at 10:10 and the slot would have become free again, with no intervention. It is the same mechanics as the stock reservation described in [the stock guide](" + L.stock + "): a quantity, here a slot, that is not sold twice because the database refuses it inside a transaction, not because the screen displayed it. Times in the figure are a constructed example.",
      ] },
      { heading: 'From request to kept appointment, in six steps', body: [
        "What happens to an appointment, in order, and when each decision is taken.",
      ], visual: 'etapes', after: [
        "**Show the slots**, computed from availability and shown in the customer's time zone. **Hold the slot**: transaction, lock, ten-minute hold, clean refusal if taken; this is the accented step, the only one that writes concurrently. **Confirm** by online deposit or in one gesture; the hold becomes a booking. **Remind** by WhatsApp the day before and two hours before, with a one-word reply, yes, move or cancel, following the template and window rules described in [the WhatsApp agent guide](" + L.whatsapp + ").",
        "**Keep or release**: arrival is checked in, the no-show recorded on the customer record, and a cancelled slot is released with the waitlist notified. **Measure**: no-show rate, mean lead time between booking and appointment, fill rate per practitioner, on the manager's dashboard following [the real-time dashboard guide](" + L.dashboard + ").",
      ] },
      { heading: 'A booking system, in five layers', body: [
        "The lock is the layer that prevents double booking; the four others make sure slots are right, appointments are kept, and the manager knows.",
      ], visual: 'couches', after: [
        "**Availability.** Hours per practitioner or resource, breaks, blocked days, duration per service, buffer between appointments, capacity when several customers share a slot; written by the manager in the application, in Algiers time. **Slot engine.** Visible slots are computed on request by removing from the hours everything taken, then slicing by the service duration; nothing is stored in advance, so changing hours breaks nothing. **Booking and lock.** One transaction per request, a ten-minute hold with expiry, a clean refusal if the slot is taken, alternatives and a waitlist; this is the accented layer, and it must be unique: the app, the site, the WhatsApp agent and the counter go through the same path.",
        "**Confirmation and payment.** Online deposit or one-gesture confirmation, cancellation under written rules, slot released and waitlist notified. **Reminders and measurement.** Reminders with reply, check-in on arrival, no-shows recorded, no-show and fill rate per practitioner; channel choice follows [the notifications guide](" + L.notif + "). The customer is the same from one channel to another, following [the customer file guide](" + L.client + "): that is what makes counting no-shows per person possible.",
      ] },
      { heading: 'Where slots come from: one week, layer by layer', body: [
        "The figure shows one practitioner's week and how the slots a customer sees are produced: by subtraction, then by slicing.",
      ], visual: 'semaine', after: [
        "The background is the opening hours; you remove the break, Thursday afternoon blocked for training, Saturday afternoon closed, appointments already taken, the Tuesday 11:00 hold in progress that expires in six minutes, and the ten-minute buffers after each appointment. What remains is sliced into thirty-minute slots, the duration of the chosen service; a one-hour service would produce fewer slots from the same gaps. The computation is done on request, in Algiers time.",
        "Display is done in the customer's time zone. Algeria stays at UTC+1 all year and has no summer time; France moves to UTC+2 from late March to late October. A 14:30 slot in Algiers therefore shows as 15:30 in Paris in summer and 14:30 in winter, and the note “Algiers time” appears on the confirmation and the reminder. Times in the figure are a constructed example.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "The six situations found in almost every appointment system we take over, and the construction that settles them.",
      ], visual: 'situations', after: [
        "The first two rows are settled by the transaction and the expiring hold; the third by storage in Algiers time and display in the customer's zone; the fourth by reminders with reply, the deposit where it is accepted, and the waitlist that fills the released slot; the last two by a single engine that computes on request and that every channel uses, including the employee at the counter. None is settled by a more attentive receptionist.",
      ] },
      { heading: 'Seen elsewhere: consumer online diaries, and what carries over', body: [
        "Consumer online booking diaries, for salons, doctors or restaurants, share three mechanisms that carry over as they are into a custom application. **The short hold**: the slot is blocked for a few minutes while the customer confirms, then released; what carries over is a hold with expiry, never a firm booking before confirmation. **The reminder with reply**: a message the day before that the customer answers in one word; what carries over is a reply that updates the appointment, not a message sent and forgotten. **The waitlist**: when a slot frees up, waiting customers are notified in order; what carries over is automatic filling of cancellations.",
        "What those diaries do not decide for you: your service durations, your buffers, your hold duration, deposit or not, and your cancellation rules; the project's first week answers that. Market diaries remain the right choice when your rules fit theirs; custom starts when the appointment must talk to the customer record, stock, the till and the WhatsApp agent in the same application, or when the booking covers combined resources, a cabin and a therapist, a car and a driver, as in [the car rental guide](" + L.location + ").",
      ] },
      { heading: 'The rules of a slot that exists only once', body: [
        "Six rules, written in the first week. **Slots are computed, never stored.** **Booking is a transaction** that locks the slot. **A hold lasts ten minutes** and expires without confirmation. **Every channel goes through the same path**, the counter included. **Times are stored in Algiers time** and shown in the customer's time zone. **Every appointment is reminded with a reply**, and every no-show is recorded on the customer record.",
        "And one rule of method: the existing diary is taken over as dated, signed appointments, not as a copied calendar; duplicates show up at the first slot computation, and the manager settles them.",
      ] },
      { heading: 'Six companies, and the booking rule that was missing', body: [
        "Six situations composed from projects we meet; the names are generic and the figures are examples.",
      ], list: [
        "**A dental practice in Algiers, three chairs.** Two patients at 14:30 once a week, one via the site, the other by phone. The construction: a single slot engine, the counter booking through the same transaction, ten-minute hold. Duplicates stopped in the first week; the trade case is described in [the dental practice guide](" + L.dentaire + ").",
        "**A beauty salon in Oran, five stylists.** One appointment in four did not show. The construction: WhatsApp reminder the day before and two hours before with a one-word reply, deposit on long services, waitlist notified. The no-show rate is measured per stylist since; the case is close to [the beauty salon guide](" + L.planity + ").",
        "**A founder in Lyon, care centre in Algiers for the diaspora.** Customers from France arrived an hour late in summer. The construction: times stored in Algiers time, shown in the customer's zone with the note, reminder in the customer's zone.",
        "**A gym in Constantine, group classes.** Twenty places per class, thirty signed up some evenings. The construction: capacity per slot, transaction that counts places, waitlist; the case is described in [the gym guide](" + L.sport + ").",
        "**A garage in Sétif, two lifts.** Appointments were taken for the garage, not for a lift, and two cars waited. The construction: booking per resource, duration per intervention type, fifteen-minute buffer between two cars.",
        "**A thermal spa in Hammam Righa, combined treatments.** A cure books a cabin and a therapist at the same time. The construction: combined-resource booking in a single transaction, one without the other being refused; the case is described in [the thermal spa guide](" + L.thermale + ").",
      ] },
      { heading: 'The 2027 calendar', body: [
        "Six weeks for a company that already takes appointments; the first week passes without code.",
      ], visual: 'calendrier', after: [
        "**Week 1, rules**: duration per service, buffers, hours per practitioner, hold duration, deposit or not, cancellation rules, reminder texts in both languages following [the bilingual application guide](" + L.bilingue + "); signed by the manager. **Week 2, availability and engine**: hours, breaks and blocks entered in the application, slot engine computed on request, display in the customer's time zone. **Week 3, booking and lock**: transaction per slot, hold with expiry, refusal and alternatives, waitlist, same path for every channel.",
        "**Week 4, confirmation and payment**: online deposit or one-gesture confirmation, cancellation and release, practitioner's diary. **Week 5, reminders and counter**: WhatsApp reminders with reply, check-in on arrival, booking at the counter and through the WhatsApp agent. **Week 6, measurement**: no-show rate, fill rate per practitioner, mean booking lead time, first monthly review. Every week ends with a demo, following [the delivery without breakage guide](" + L.livrer + ").",
      ] },
      { heading: 'What makes a booking system fail', body: [
        "Five causes, seen in applications we take over. **Slots stored in advance**: changing hours breaks the week. **Two paths to book**: the site and the counter cannot see each other. **The hold without expiry**: an abandoned basket blocks the slot all day. **The reminder without reply**: you send, you do not know, the customer does not come. **Time without a zone**: the customer from France arrives an hour too early or too late.",
        "And one cause of method: leaving service durations and buffers “to adjust later”. They condition every displayed slot; the first week exists to write them.",
      ] },
      { heading: 'Frequently asked questions', body: [
        "The questions managers and founders ask when they describe a diary that overflows.",
      ], faq: [
        { q: "How do you prevent double booking of a slot?", a: "By making the booking a database transaction: it locks the slot's row, checks it is free and creates a ten-minute hold; the second request gets a clean refusal and alternatives. Every channel, site, app, WhatsApp agent and counter, goes through the same path. The screen may show a slot a few seconds stale; the database may not." },
        { q: "Why are slots not stored in advance?", a: "Because they depend on rules that change: hours, breaks, blocked days, service duration, buffers. Computed on request, they are always right, and changing hours breaks nothing; the application only lists the appointments already taken that conflict, so the manager can settle them." },
        { q: "What is the ten-minute hold for?", a: "To block the slot while the customer confirms or pays the deposit, without an abandoned basket blocking it all day. Past the expiry without confirmation, the hold disappears and the slot becomes free again automatically; the waitlist is notified." },
        { q: "How do you lower no-shows?", a: "With a WhatsApp reminder the day before and two hours before, with a one-word reply, yes, move or cancel, that updates the appointment; with a deposit where the trade accepts it; and with a waitlist that fills released slots. No-shows are recorded on the customer record and the no-show rate is measured per practitioner." },
        { q: "How do you handle customers booking from France?", a: "By storing times in Algiers time, which stays at UTC+1 all year, and showing them in the customer's time zone. France moves to UTC+2 from late March to late October: a 14:30 slot in Algiers shows as 15:30 in Paris in summer. The confirmation and the reminder carry the time zone note." },
        { q: "Why not an online diary from the market?", a: "Because it is often the right choice: if your rules fit theirs, take it. Custom starts when the appointment must talk to the customer record, stock, the till and the WhatsApp agent in the same application, or when the booking covers combined resources, a cabin and a therapist, a lift and a mechanic." },
        { q: "How long does it take to build a booking system?", a: "Six weeks in the typical calendar: one to write the rules, one for availability and the engine, one for booking and lock, one for confirmation and payment, one for reminders and the counter, one for measurement. The duration depends on the number of resources and the complexity of the services." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Two requests 220 milliseconds apart do not both go through: the database decides, inside a transaction, not the screen that still showed “available”." },
      { after: 3, text: "Slots are stored nowhere: they are computed on request, in Algiers time, and shown in the customer's time zone." },
    ],
    cta: { eyebrow: 'Send us a month of your diary, we measure duplicates and no-shows', title: 'Manager in Algeria or founder in France: we build a booking system where a slot exists only once, with hold, deposit, waitlist and reminders', body: 'Symloop builds and takes over applications in production for companies in Algeria and founders settled in France: availability per practitioner and per resource, slot engine computed on request, booking by transaction with lock and expiring hold, refusal and alternatives, waitlist, online deposit, cancellation and release, WhatsApp reminders with reply, check-in and no-shows, booking at the counter and through the WhatsApp agent by the same path, Algiers time shown in the customer’s time zone, no-show and fill rate per practitioner. Code and rules in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.planity, kind: '2027', name: 'Building a Planity equivalent: salon, deposit' },
      { href: L.whatsapp, kind: '2027', name: 'WhatsApp agent: 24-hour window, templates, human hand-off' },
      { href: L.paiement, kind: '2027', name: 'Integrating online payment: webhook, states' },
      { href: L.stock, kind: '2027', name: 'Wrong stock in the application: reservations, lock' },
    ] },
  },
  ar: {
    kind: 'حجز · مواعيد · تذكيرات · 2027', title: '«الموعد نفسه حُجز مرتين»: ما يُبنى في نظام حجز إلكتروني في الجزائر سنة 2027، مواعيد محسوبة، قفل، حجز مؤقت ينتهي، عربون، قائمة انتظار، تذكيرات',
    dek: '«يحضر زبونان عند 14:30: أحدهما حجز على الموقع والآخر اتصل، والسكرتيرة كانت تفتح المفكرة الورقية. موعد من أربعة لا يأتي، وزبون باريس يصل متأخراً ساعة لأنه قرأ الوقت بتوقيته.» الحجز المزدوج ليس خطأ سكرتيرة بل بناء: مساران للحجز ولا قاعدة تقول أيهما يفوز. يصف هذا الدليل ما يُبنى كي لا يوجد الموعد إلا مرة: توافر على طبقات تُحسب مواعيده عند الطلب، معاملة تقفل الموعد، حجز مؤقت لعشر دقائق ينتهي، عربون، قائمة انتظار، تذكيرات WhatsApp برد، وتوقيت الجزائر معروضاً بتوقيت الزبون.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['الحجز الإلكتروني', 'المواعيد', 'الحجز المزدوج', 'التذكيرات', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** المواعيد **لا تُخزَّن في أي مكان**: **تُحسب عند الطلب** من ساعات الممارس ناقص الاستراحات والأيام المحجوبة والمواعيد المأخوذة والحجوزات المؤقتة الجارية والفواصل، ثم تُقطَّع **بمدة الخدمة**. الحجز **معاملة** تقفل سطر الموعد وتنشئ **حجزاً مؤقتاً** لعشر دقائق؛ والطلب الثاني، من الموقع أو التطبيق أو وكيل WhatsApp أو الكاونتر، يتلقى **رفضاً واضحاً** وبدائل، لأن كل القنوات تمر **بالمسار نفسه**. **العربون** أو التأكيد يحوّل المؤقت إلى حجز؛ وبدونه **ينتهي** ويعود الموعد حراً. **تذكيرات** WhatsApp قبل يوم وقبل ساعتين برد بكلمة، و**قائمة انتظار** تُبلَّغ حين يتحرر موعد، تخفضان الغياب. والأوقات تُخزَّن **بتوقيت الجزائر** الثابت طوال السنة وتُعرض **بتوقيت الزبون**. ستة أسابيع، أولها بلا كود.',
      'يتوجه هذا الدليل إلى مسيّر عيادة أو صالون أو مركز أو ورشة يأخذ المواعيد بالهاتف وWhatsApp والموقع معاً، وإلى المؤسس المقيم في فرنسا الذي يحجز زبائنه من توقيتين، وإلى المسؤول الذي يرى موعداً من أربعة يضيع بالغياب. لا يعيد شرح ما ينتظره صالون أو عيادة أسنان أو محطة حموية من تطبيق حجز، الموصوف في [دليل صالون التجميل](' + L.planity + ') و[دليل عيادة الأسنان](' + L.dentaire + ') و[دليل المحطة الحموية](' + L.thermale + ')؛ بل يصف ما يُبنى تحت كل هذه المهن كي لا يوجد الموعد إلا مرة، ويمتد من [صفحتنا عن هندسة البرمجيات](' + L.service + ').',
    ],
    sections: [
      { heading: 'زبونان، موعد واحد، حجز واحد', body: [
        'يتتبع الشكل طلبين لموعد 14:30 نفسه بفارق 220 ميلي ثانية: أمل من التطبيق في الجزائر، وكريم عبر وكيل WhatsApp من باريس. الشاشتان كانتا تعرضان «متاح». والخادم هو الذي يفصل.',
      ], visual: 'course', after: [
        'طلب أمل يفتح معاملة ويقفل سطر الموعد ويتحقق من أنه حر وينشئ حجزاً مؤقتاً ينتهي عند 10:10؛ وتنتهي المعاملة في بضع ميلي ثوانٍ. ويصل طلب كريم بعد 220 ميلي ثانية على موعد محجوز مؤقتاً: رفض واضح وبديلان، 15:00 أو قائمة الانتظار. وعند 10:04 يُؤكَّد عربون أمل بـ webhook مزوّد الدفع وفق [دليل الدفع الإلكتروني](' + L.paiement + ')، فيصير المؤقت حجزاً مؤكَّداً؛ وتنطلق الرسائل. ويختار كريم قائمة الانتظار ويُبلَّغ إن تحرر 14:30.',
        'ولو لم تدفع أمل لانتهى المؤقت عند 10:10 وعاد الموعد حراً دون تدخل. وهي الآلية نفسها لحجز المخزون الموصوف في [دليل المخزون](' + L.stock + '): كمية، هنا موعد، لا تُباع مرتين لأن قاعدة البيانات ترفض ذلك داخل معاملة، لا لأن الشاشة عرضتها. وأوقات الشكل مثال مبني.',
      ] },
      { heading: 'من الطلب إلى موعد محترَم، في ست خطوات', body: [
        'ما يحدث لموعد بالترتيب، ولحظة اتخاذ كل قرار.',
      ], visual: 'etapes', after: [
        '**عرض المواعيد** المحسوبة من التوافر والمعروضة بتوقيت الزبون. **حجز الموعد مؤقتاً**: معاملة وقفل ومؤقت عشر دقائق ورفض واضح إن أُخذ؛ وهي الخطوة المميزة، الوحيدة التي تكتب بتزامن. **التأكيد** بعربون إلكتروني أو بحركة واحدة؛ يصير المؤقت حجزاً. **التذكير** عبر WhatsApp قبل يوم وقبل ساعتين برد بكلمة، نعم أو تغيير أو إلغاء، وفق قواعد القوالب والنافذة الموصوفة في [دليل وكيل WhatsApp](' + L.whatsapp + ').',
        '**الاحترام أو التحرير**: يُسجَّل الوصول، ويُسجَّل الغياب في بطاقة الزبون، ويُحرَّر الموعد الملغى مع إبلاغ قائمة الانتظار. **القياس**: نسبة الغياب، متوسط المهلة بين الحجز والموعد، الامتلاء لكل ممارس، على لوحة المسيّر وفق [دليل لوحة القيادة الآنية](' + L.dashboard + ').',
      ] },
      { heading: 'نظام حجز، في خمس طبقات', body: [
        'القفل هو الطبقة التي تمنع الحجز المزدوج؛ والطبقات الأربع الأخرى تضمن صحة المواعيد واحترامها وعلم المسيّر بذلك.',
      ], visual: 'couches', after: [
        '**التوافر.** ساعات لكل ممارس أو مورد، استراحات، أيام محجوبة، مدة لكل خدمة، فاصل بين موعدين، سعة حين يتشارك عدة زبائن موعداً؛ يكتبها المسيّر في التطبيق بتوقيت الجزائر. **محرك المواعيد.** تُحسب المواعيد الظاهرة عند الطلب بطرح كل المأخوذ من الساعات ثم التقطيع بمدة الخدمة؛ لا شيء يُخزَّن مسبقاً، فتغيير ساعة لا يكسر شيئاً. **الحجز والقفل.** معاملة واحدة لكل طلب، مؤقت عشر دقائق بانتهاء، رفض واضح إن أُخذ الموعد، بدائل وقائمة انتظار؛ وهي الطبقة المميزة ويجب أن تكون واحدة: التطبيق والموقع ووكيل WhatsApp والكاونتر يمرون بالمسار نفسه.',
        '**التأكيد والدفع.** عربون إلكتروني أو تأكيد بحركة واحدة، إلغاء بقواعد مكتوبة، تحرير الموعد وإبلاغ قائمة الانتظار. **التذكيرات والقياس.** تذكيرات برد، تسجيل الوصول، تسجيل الغياب، نسبة الغياب والامتلاء لكل ممارس؛ واختيار القناة يتبع [دليل الإشعارات](' + L.notif + '). والزبون هو نفسه من قناة إلى أخرى وفق [دليل ملف الزبائن](' + L.client + '): وهذا ما يسمح بعدّ الغيابات لكل شخص.',
      ] },
      { heading: 'من أين تأتي المواعيد: أسبوع، طبقة طبقة', body: [
        'يُظهر الشكل أسبوع ممارس وكيف تُنتج المواعيد التي يراها الزبون: بالطرح ثم بالتقطيع.',
      ], visual: 'semaine', after: [
        'الخلفية ساعات العمل؛ نطرح الاستراحة، وبعد ظهر الخميس المحجوب للتكوين، وبعد ظهر السبت المغلق، والمواعيد المأخوذة، والحجز المؤقت الجاري الثلاثاء عند 11:00 الذي ينتهي خلال ست دقائق، وفواصل عشر دقائق بعد كل موعد. وما يبقى يُقطَّع إلى مواعيد من ثلاثين دقيقة، مدة الخدمة المختارة؛ وخدمة من ساعة تنتج مواعيد أقل من الفجوات نفسها. والحساب عند الطلب بتوقيت الجزائر.',
        'والعرض بتوقيت الزبون. تبقى الجزائر على UTC+1 طوال السنة ولا تطبّق توقيتاً صيفياً؛ وتنتقل فرنسا إلى UTC+2 من أواخر مارس إلى أواخر أكتوبر. فموعد 14:30 في الجزائر يظهر 15:30 في باريس صيفاً و14:30 شتاءً، وتظهر عبارة «بتوقيت الجزائر» على التأكيد والتذكير. وأوقات الشكل مثال مبني.',
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        'الحالات الست التي نجدها في كل أنظمة المواعيد التي نستلمها تقريباً، والبناء الذي يحلها.',
      ], visual: 'situations', after: [
        'السطران الأولان يُحلان بالمعاملة والمؤقت المنتهي؛ والثالث بالتخزين بتوقيت الجزائر والعرض بتوقيت الزبون؛ والرابع بالتذكيرات برد والعربون حيث يُقبل وقائمة الانتظار التي تملأ الموعد المحرَّر؛ والأخيران بمحرك واحد يحسب عند الطلب وتستعمله كل القنوات، بما فيها الموظف عند الكاونتر. ولا واحد يُحل بسكرتيرة أكثر انتباهاً.',
      ] },
      { heading: 'ما رأيناه في مكان آخر: مفكرات الحجز العامة، وما ينتقل', body: [
        'تتشارك مفكرات الحجز الإلكتروني العامة، للصالونات والأطباء والمطاعم، ثلاث آليات تنتقل كما هي إلى تطبيق مخصص. **الحجز المؤقت القصير**: يُحجب الموعد بضع دقائق ريثما يؤكد الزبون ثم يُحرَّر؛ وما ينتقل هو مؤقت بانتهاء، لا حجز نهائي قبل التأكيد أبداً. **التذكير برد**: رسالة قبل يوم يرد عليها الزبون بكلمة؛ وما ينتقل هو رد يحدّث الموعد لا رسالة تُرسل وتُنسى. **قائمة الانتظار**: حين يتحرر موعد يُبلَّغ المنتظرون بالترتيب؛ وما ينتقل هو الملء الآلي للإلغاءات.',
        'ما لا تقرره هذه المفكرات عنكم: مدد خدماتكم وفواصلكم ومدة المؤقت والعربون أم لا وقواعد الإلغاء؛ الأسبوع الأول من المشروع يجيب. وتبقى مفكرات السوق الخيار الصحيح حين تدخل قواعدكم في قواعدها؛ ويبدأ المخصص حين يجب أن يكلّم الموعد ملف الزبون والمخزون والصندوق ووكيل WhatsApp في التطبيق نفسه، أو حين يشمل الحجز موارد مركَّبة، مقصورة ومعالجاً، سيارة وسائقاً، كما في [دليل تأجير السيارات](' + L.location + ').',
      ] },
      { heading: 'قواعد موعد لا يوجد إلا مرة', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **المواعيد تُحسب ولا تُخزَّن أبداً.** **الحجز معاملة** تقفل الموعد. **المؤقت يدوم عشر دقائق** وينتهي بلا تأكيد. **كل القنوات تمر بالمسار نفسه**، والكاونتر منها. **الأوقات تُخزَّن بتوقيت الجزائر** وتُعرض بتوقيت الزبون. **كل موعد يُذكَّر به برد**، وكل غياب يُسجَّل في بطاقة الزبون.',
        'وقاعدة منهج: تُستلَم المفكرة الموجودة مواعيدَ مؤرَّخة موقَّعة لا تقويماً منسوخاً؛ وتظهر التكرارات عند أول حساب للمواعيد، والمسيّر يفصل فيها.',
      ] },
      { heading: 'ست شركات، وقاعدة الحجز التي كانت ناقصة', body: [
        'ست حالات مركَّبة من مشاريع نصادفها؛ الأسماء عامة والأرقام أمثلة.',
      ], list: [
        '**عيادة أسنان في الجزائر العاصمة، ثلاثة كراسٍ.** مريضان عند 14:30 مرة في الأسبوع، أحدهما من الموقع والآخر بالهاتف. البناء: محرك مواعيد واحد، الكاونتر يحجز بالمعاملة نفسها، مؤقت عشر دقائق. توقفت التكرارات في الأسبوع الأول؛ وحالة المهنة موصوفة في [دليل عيادة الأسنان](' + L.dentaire + ').',
        '**صالون تجميل في وهران، خمس مصففات.** موعد من أربعة لا يأتي. البناء: تذكير WhatsApp قبل يوم وقبل ساعتين برد بكلمة، عربون على الخدمات الطويلة، قائمة انتظار تُبلَّغ. وتُقاس نسبة الغياب لكل مصففة منذ ذلك؛ والحالة قريبة من [دليل صالون التجميل](' + L.planity + ').',
        '**مؤسس في ليون، مركز رعاية في الجزائر للجالية.** كان زبائن فرنسا يصلون متأخرين ساعة صيفاً. البناء: أوقات مخزَّنة بتوقيت الجزائر، معروضة بتوقيت الزبون مع الملاحظة، تذكير بتوقيت الزبون.',
        '**قاعة رياضة في قسنطينة، حصص جماعية.** عشرون مكاناً لكل حصة، وثلاثون مسجَّلاً بعض الأمسيات. البناء: سعة لكل موعد، معاملة تعدّ الأماكن، قائمة انتظار؛ والحالة موصوفة في [دليل قاعة الرياضة](' + L.sport + ').',
        '**ورشة في سطيف، رافعتان.** كانت المواعيد تُؤخذ للورشة لا لرافعة، وتنتظر سيارتان. البناء: حجز لكل مورد، مدة لكل نوع تدخل، فاصل خمس عشرة دقيقة بين سيارتين.',
        '**محطة حموية في حمام ريغة، علاجات مركَّبة.** العلاج يحجز مقصورة ومعالجاً معاً. البناء: حجز موارد مركَّبة في معاملة واحدة، ويُرفض أحدهما دون الآخر؛ والحالة موصوفة في [دليل المحطة الحموية](' + L.thermale + ').',
      ] },
      { heading: 'تقويم 2027', body: [
        'ستة أسابيع لشركة تأخذ مواعيد أصلاً؛ والأسبوع الأول يمر بلا كود.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 1، القواعد**: مدة لكل خدمة، فواصل، ساعات لكل ممارس، مدة المؤقت، عربون أم لا، قواعد الإلغاء، نصوص التذكيرات باللغتين وفق [دليل التطبيق ثنائي اللغة](' + L.bilingue + ')؛ يوقّعها المسيّر. **الأسبوع 2، التوافر والمحرك**: ساعات واستراحات وحجب تُدخل في التطبيق، محرك مواعيد يُحسب عند الطلب، عرض بتوقيت الزبون. **الأسبوع 3، الحجز والقفل**: معاملة لكل موعد، مؤقت بانتهاء، رفض وبدائل، قائمة انتظار، المسار نفسه لكل القنوات.',
        '**الأسبوع 4، التأكيد والدفع**: عربون إلكتروني أو تأكيد بحركة واحدة، إلغاء وتحرير، مفكرة الممارس. **الأسبوع 5، التذكيرات والكاونتر**: تذكيرات WhatsApp برد، تسجيل الوصول، حجز عند الكاونتر وعبر وكيل WhatsApp. **الأسبوع 6، القياس**: نسبة الغياب، الامتلاء لكل ممارس، متوسط مهلة الحجز، أول مراجعة شهرية. وكل أسبوع ينتهي بعرض وفق [دليل التسليم دون كسر](' + L.livrer + ').',
      ] },
      { heading: 'ما يُفشل نظام حجز', body: [
        'خمسة أسباب رأيناها في تطبيقات نستلمها. **مواعيد مخزَّنة مسبقاً**: تغيير ساعة يكسر الأسبوع. **مساران للحجز**: الموقع والكاونتر لا يرى أحدهما الآخر. **مؤقت بلا انتهاء**: سلة متروكة تحجب الموعد طوال اليوم. **تذكير بلا رد**: نرسل ولا نعرف، والزبون لا يأتي. **وقت بلا توقيت**: زبون فرنسا يصل ساعة مبكراً أو متأخراً.',
        'وسبب منهجي: ترك مدد الخدمات والفواصل «للضبط لاحقاً». إنها تحكم كل موعد معروض؛ والأسبوع الأول موجود لكتابتها.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي يطرحها المسيّرون والمؤسسون حين يصفون لنا مفكرة تفيض.',
      ], faq: [
        { q: 'كيف نمنع الحجز المزدوج لموعد؟', a: 'بجعل الحجز معاملة في قاعدة البيانات: تقفل سطر الموعد وتتحقق من أنه حر وتنشئ مؤقتاً لعشر دقائق؛ والطلب الثاني يتلقى رفضاً واضحاً وبدائل. وكل القنوات، الموقع والتطبيق ووكيل WhatsApp والكاونتر، تمر بالمسار نفسه. قد تعرض الشاشة موعداً متأخراً بضع ثوانٍ؛ أما قاعدة البيانات فلا.' },
        { q: 'لماذا لا تُخزَّن المواعيد مسبقاً؟', a: 'لأنها تتوقف على قواعد تتغير: الساعات والاستراحات والأيام المحجوبة ومدة الخدمة والفواصل. ومحسوبةً عند الطلب تكون صحيحة دائماً، وتغيير ساعة لا يكسر شيئاً؛ ويكتفي التطبيق بإدراج المواعيد المأخوذة المتعارضة ليفصل فيها المسيّر.' },
        { q: 'ما فائدة المؤقت لعشر دقائق؟', a: 'حجب الموعد ريثما يؤكد الزبون أو يدفع العربون، دون أن تحجبه سلة متروكة طوال اليوم. وبعد الانتهاء بلا تأكيد يختفي المؤقت ويعود الموعد حراً آلياً؛ وتُبلَّغ قائمة الانتظار.' },
        { q: 'كيف نخفض الغياب؟', a: 'بتذكير WhatsApp قبل يوم وقبل ساعتين برد بكلمة، نعم أو تغيير أو إلغاء، يحدّث الموعد؛ وبعربون حيث تقبله المهنة؛ وبقائمة انتظار تملأ المواعيد المحرَّرة. وتُسجَّل الغيابات في بطاقة الزبون وتُقاس نسبة الغياب لكل ممارس.' },
        { q: 'كيف نتعامل مع الزبائن الذين يحجزون من فرنسا؟', a: 'بتخزين الأوقات بتوقيت الجزائر الثابت على UTC+1 طوال السنة وعرضها بتوقيت الزبون. تنتقل فرنسا إلى UTC+2 من أواخر مارس إلى أواخر أكتوبر: موعد 14:30 في الجزائر يظهر 15:30 في باريس صيفاً. ويحمل التأكيد والتذكير عبارة التوقيت.' },
        { q: 'لماذا لا مفكرة إلكترونية من السوق؟', a: 'لأنها غالباً الخيار الصحيح: إن دخلت قواعدكم في قواعدها فخذوها. ويبدأ المخصص حين يجب أن يكلّم الموعد ملف الزبون والمخزون والصندوق ووكيل WhatsApp في التطبيق نفسه، أو حين يشمل الحجز موارد مركَّبة، مقصورة ومعالجاً، رافعة وميكانيكياً.' },
        { q: 'كم من الوقت لبناء نظام حجز؟', a: 'ستة أسابيع في التقويم النموذجي: واحد لكتابة القواعد، وواحد للتوافر والمحرك، وواحد للحجز والقفل، وواحد للتأكيد والدفع، وواحد للتذكيرات والكاونتر، وواحد للقياس. وتتوقف المدة على عدد الموارد وتعقيد الخدمات.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'طلبان بفارق 220 ميلي ثانية لا يمرّان معاً: قاعدة البيانات تفصل داخل معاملة، لا الشاشة التي كانت ما زالت تعرض «متاح».' },
      { after: 3, text: 'المواعيد لا تُخزَّن في أي مكان: تُحسب عند الطلب بتوقيت الجزائر وتُعرض بتوقيت الزبون.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا شهراً من مفكرتكم، نقيس التكرارات والغيابات', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نبني نظام حجز لا يوجد فيه الموعد إلا مرة، بمؤقت وعربون وقائمة انتظار وتذكيرات', body: 'تبني Symloop وتستلم تطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: توافر لكل ممارس ومورد، محرك مواعيد يُحسب عند الطلب، حجز بمعاملة بقفل ومؤقت ينتهي، رفض وبدائل، قائمة انتظار، عربون إلكتروني، إلغاء وتحرير، تذكيرات WhatsApp برد، تسجيل وصول وغياب، حجز عند الكاونتر وعبر وكيل WhatsApp بالمسار نفسه، توقيت الجزائر معروضاً بتوقيت الزبون، نسبة الغياب والامتلاء لكل ممارس. الكود والقواعد في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.planity, kind: '2027', name: 'إنشاء مكافئ Planity: صالون، عربون' },
      { href: L.whatsapp, kind: '2027', name: 'وكيل WhatsApp: نافذة 24 ساعة، قوالب، تحويل لإنسان' },
      { href: L.paiement, kind: '2027', name: 'دمج الدفع الإلكتروني: webhook، حالات' },
      { href: L.stock, kind: '2027', name: 'مخزون خاطئ في التطبيق: حجوزات، قفل' },
    ] },
  },
};

const KEYWORDS = "double réservation créneau application, même créneau réservé deux fois, système de réservation en ligne algérie 2027, prise de rendez-vous en ligne application sur mesure, créneaux calculés disponibilités, verrou réservation base de données, tenue créneau expiration acompte, liste d'attente rendez-vous, rappel whatsapp rendez-vous réponse, taux d'absence rendez-vous, fuseau horaire alger paris rendez-vous diaspora, logiciel rendez-vous cabinet salon algérie 2027, online booking system double booking prevention algeria 2027, slot hold expiry waitlist reminders, حجز مزدوج موعد التطبيق, نظام حجز إلكتروني الجزائر 2027, تذكير مواعيد WhatsApp";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
