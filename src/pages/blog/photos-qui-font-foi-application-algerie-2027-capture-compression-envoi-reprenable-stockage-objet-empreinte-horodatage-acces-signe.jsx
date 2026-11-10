import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe.mjs';

const SLUG = 'photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe';
const FIGURES = ['couches', 'parcours', 'etapes', 'preuve', 'situations', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  lente: '/blog/application-lente-reseau-faible-algerie-2027-ce-qu-on-construit-pour-qu-elle-soit-rapide-poids-des-ecrans-cache-pagination-index-mesure/',
  sauvegarde: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  adresse: '/blog/livrer-sans-adresse-algerie-2027-point-gps-repere-zones-de-livraison-geocodage-confirmation-whatsapp-ce-qu-on-construit/',
  ia: '/blog/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp/',
  appartement: '/blog/gerer-appartement-loue-algerie-depuis-la-france-2027-espace-proprietaire-quittances-etat-des-lieux-travaux/',
  promoteur: '/blog/promoteur-immobilier-vendre-sur-plan-diaspora-2027-espace-acquereur-suivi-chantier/',
  solaire: '/blog/installateur-solaire-algerie-2027-devis-chantier-monitoring-installations-maintenance/',
  location: '/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/',
  froid: '/blog/chaine-du-froid-algerie-2027-grossiste-pharma-agroalimentaire-sondes-alertes-preuve-de-livraison/',
  pwa: '/blog/pwa-ou-application-native-algerie-2027-quand-application-web-installable-suffit-quand-il-faut-les-stores/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Photos · Preuve · Stockage · 2027', title: "« La photo n'est jamais arrivée » : ce qu'on construit pour que les photos de chantier, de livraison et d'état des lieux tiennent dans votre application en Algérie en 2027, capture, compression, envoi reprenable, stockage objet, empreinte, accès signé",
    dek: "« Le livreur a pris la photo, mais elle n'est jamais arrivée. Celles qui arrivent pèsent 4 Mo chacune, le serveur est plein, et quand un client conteste une livraison, personne ne peut dire quand la photo a été prise ni si elle a été retouchée. » Les photos qui ne prouvent rien ne sont pas un problème de livreur, c'est une construction : une photo envoyée sur WhatsApp ou téléversée en pleine taille depuis la galerie n'a ni file d'attente, ni empreinte, ni heure fiable, ni place où vivre cinq ans. Ce guide décrit ce qu'on construit pour que les photos arrivent, pèsent peu, prouvent quelque chose et restent lisibles : capture guidée dans l'application, réduction sur l'appareil, envoi reprenable par morceaux, stockage objet versionné, empreinte calculée à la prise, deux heures conservées, accès par lien signé, rétention écrite.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Photos', 'Preuve de livraison', 'Stockage objet', 'Hors ligne', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une photo de preuve se **prend dans l'application**, pas dans la galerie, sur un appareil enrôlé par un auteur connecté. Elle est **réduite sur l'appareil**, à 1 600 pixels et en WebP, avant tout envoi : de quelques mégaoctets à quelques centaines de kilooctets. Elle reçoit sur l'appareil son **empreinte** SHA-256, l'heure de l'appareil, la position et sa précision, le dossier et l'auteur. Elle attend le réseau dans la **file hors ligne**, part par **morceaux** avec un protocole d'envoi reprenable, et reprend au morceau après une coupure. Le serveur note **sa propre heure**, recalcule l'empreinte, refuse si elle diffère, écrit l'objet dans un **stockage objet versionné**, produit les miniatures et lie la fiche au dossier. On y accède par un **lien signé qui expire**, et on sait qui l'a vue. L'original pleine taille n'est conservé que si le métier l'exige, et la **rétention** est écrite. Six semaines, dont la première sans code.",
      "Ce guide s'adresse au gérant d'une entreprise de livraison, de travaux, d'installation ou de location dont les photos servent de preuve, au fondateur installé en France qui doit pouvoir regarder un chantier ou un état des lieux à distance et s'y fier, et au responsable qui a vu une photo contestée faute d'heure fiable. Il ne redit pas comment une application fonctionne sans réseau, décrit dans [le guide sur le hors ligne](" + L.horsligne + "), ni comment on sauvegarde un stockage objet, décrit dans [le guide sur les sauvegardes](" + L.sauvegarde + ") ; il décrit ce qui se construit autour de la photo elle-même, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Des photos qui tiennent, en cinq couches', body: [
        "Une photo qui prouve quelque chose traverse cinq couches, et la deuxième, sur l'appareil, est celle que les applications maison oublient.",
      ], visual: 'couches', after: [
        "**Capture.** La prise se fait dans l'application, avec un cadre attendu, un nombre de photos par dossier, le flash géré, et pas de recadrage ; l'appareil est enrôlé et l'auteur connecté par code, selon [le guide sur les rôles et le journal d'audit](" + L.roles + "). La photo naît dans le dossier, jamais dans la galerie. **Traitement sur l'appareil.** Réduction à 1 600 pixels de large et conversion en WebP avant tout envoi ; empreinte SHA-256 ; heure de l'appareil, position et précision, dossier et auteur attachés. C'est la couche accentuée : ce qui part pèse vingt fois moins et porte déjà sa preuve. **Transport.** File hors ligne dans la base locale, envoi reprenable par morceaux avec un protocole ouvert, reprise au morceau après coupure, accusé par morceau ; une photo n'est jamais renvoyée depuis le début.",
        "**Stockage.** Le serveur note sa propre heure à la réception, recalcule l'empreinte et refuse si elle diffère ; l'objet est écrit dans un stockage objet versionné, les miniatures sont produites, et la fiche est liée au dossier et à l'auteur ; la base de données garde la fiche, le stockage objet garde les octets. **Accès et rétention.** Lien signé qui expire en quinze minutes, journal d'accès, export avec empreintes pour un litige, rétention écrite puis suppression journalisée ; la photo n'est jamais publique. Où vivent ces octets, en Algérie ou en Europe, est une décision à part, décrite dans [le guide sur l'hébergement](" + L.heberger + ").",
      ] },
      { heading: "Une photo, de l'appareil au dossier", body: [
        "La figure suit une seule photo et ce qu'elle pèse à chaque étape. Tout ce qui compte se passe avant qu'elle quitte le téléphone.",
      ], visual: 'parcours', after: [
        "Capturée à 12 mégapixels, la photo pèse 4,2 Mo ; réduite à 1 600 pixels de large et convertie en WebP sur l'appareil, elle pèse 240 Ko, assez pour lire une plaque, un compteur ou un défaut de carrelage, et vingt fois moins à envoyer sur un réseau qui coupe. Elle reçoit son empreinte et ses métadonnées, attend dans la file hors ligne pendant que le réseau est coupé, puis part en trois morceaux ; le deuxième est coupé à 45 Ko et reprend à 45 Ko, pas au début. Le serveur note 14:09:48, sept minutes après la prise, recalcule l'empreinte, la trouve égale, écrit l'objet et les miniatures, et lie la fiche au dossier.",
        "Deux heures sont conservées, et c'est une règle : l'heure de l'appareil, déclarée et modifiable par qui règle son téléphone, et l'heure du serveur, reçue et non modifiable. Un écart de sept minutes est un réseau coupé ; un écart de trois jours demande une explication, et la fiche la rend visible. Le gain de WebP sur JPEG et le poids d'une photo de téléphone varient selon l'appareil et la scène ; les tailles de la figure sont un exemple construit, et la réduction des écrans qui affichent ces photos est traitée dans [le guide sur l'application lente](" + L.lente + ").",
      ] },
      { heading: 'Sur le terrain, en six gestes', body: [
        "Ce que fait l'agent, le livreur ou le technicien, dans l'ordre, et pourquoi le deuxième geste est une règle.",
      ], visual: 'etapes', after: [
        "**Ouvrir le dossier** : livraison, chantier, état des lieux ; les photos attendues sont listées, façade, compteur, colis à la porte. **Prendre dans l'application**, avec le cadre guidé ; sur les dossiers de preuve, l'import depuis la galerie est désactivé, parce qu'une photo importée peut venir de n'importe où et de n'importe quand. **Vérifier la liste** : les photos manquantes sont signalées avant de fermer. **Signer ou faire signer** sur l'écran ; la signature est liée aux photos du dossier et au point de remise, selon [le guide sur la livraison sans adresse](" + L.adresse + ").",
        "**Fermer le dossier**, même sans réseau ; tout est en file. **Laisser partir** : l'envoi reprenable se fait en arrière-plan, et l'état est visible, trois en attente, deux envoyées, pour que l'agent ne reste pas à attendre une barre de progression. Le GPS continu, la caméra et le travail en arrière-plan font partie des raisons pour lesquelles l'application de l'agent est souvent native, selon [le guide PWA ou native](" + L.pwa + ").",
      ] },
      { heading: 'Ce qui fait tenir une photo', body: [
        "La figure montre la fiche d'une photo stockée, trois vérifications faites aujourd'hui, et le journal de qui l'a vue. C'est tout cela, pas l'image, qui tient.",
      ], visual: 'preuve', after: [
        "La fiche porte le dossier, l'auteur et l'appareil, les deux heures, la position et sa précision, l'empreinte calculée à la prise, la clé et la version de l'objet, la règle sur l'original pleine taille, et la rétention. Les vérifications recalculent aujourd'hui l'empreinte de l'objet stocké et la comparent à celle de la fiche : égale, l'image est celle qui a été prise ; une copie dont la luminosité a été changée donne une empreinte différente et ne passe pas. La version de l'objet montre qu'il n'a jamais été réécrit ; les stockages objet savent verrouiller une version pour une durée, comme décrit dans [le guide sur les sauvegardes](" + L.sauvegarde + ").",
        "L'accès se fait par un lien signé qui expire en quinze minutes, et le journal dit qui l'a ouvert et quand ; les grands stockages objet limitent eux-mêmes la durée de ces liens à quelques jours au plus. Un export pour litige produit un PDF avec les empreintes. La valeur juridique d'une photo dépend du contexte et n'est pas traitée ici ; ce qui est construit, c'est la possibilité de montrer ce qui a été pris, quand, par qui, et que rien n'a changé depuis. Les valeurs de la figure sont un exemple construit.",
      ] },
      { heading: "Six situations réelles, et ce que l'application fait", body: [
        "Les six situations qu'on retrouve dans presque toutes les applications de terrain qu'on reprend, et la construction qui les règle.",
      ], visual: 'situations', after: [
        "Les deux premières lignes se règlent sur l'appareil, par la réduction avant envoi et la file hors ligne ; les deux suivantes par l'empreinte, les deux heures et la règle de prise dans l'application ; les deux dernières par l'accès signé et la rétention écrite. La lecture automatique du contenu d'une photo, une facture ou un bon, est un autre sujet, décrit dans [le guide sur la lecture de pièces par IA](" + L.ia + ") ; ici, la photo est une preuve, pas une source de données. Aucune des six lignes ne se règle par un agent plus soigneux.",
      ] },
      { heading: 'Vu ailleurs : stockage objet, liens signés et envoi reprenable, et ce qui se transpose', body: [
        "Trois mécanismes des grandes plateformes se transposent tels quels. **Le stockage objet versionné**, où chaque écriture crée une version et où une version peut être verrouillée pour une durée ; ce qui se transpose, c'est de ne jamais réécrire un objet de preuve et de garder sa version sur la fiche. **Les liens signés**, limités dans le temps par le fournisseur lui-même, sept jours au plus avec les outils d'Amazon S3 et douze heures depuis sa console ; ce qui se transpose, c'est quinze minutes pour une photo de dossier, et un journal. **L'envoi reprenable**, avec tus, un protocole ouvert pour reprendre un téléversement interrompu ; ce qui se transpose, c'est la reprise au morceau, sur un réseau qui coupe.",
        "Ce que ces mécanismes ne décident pas pour vous : la taille à laquelle vous réduisez, l'original ou non, combien de temps vous gardez, et qui peut voir ; la première semaine du projet y répond, et c'est le gérant qui signe.",
      ] },
      { heading: "Les règles d'une photo qui tient", body: [
        "Six règles, écrites la première semaine. **La photo de preuve se prend dans l'application**, pas dans la galerie. **Elle est réduite et empreinte sur l'appareil** avant tout envoi. **Elle attend et part par morceaux**, et ne repart jamais du début. **Deux heures sont conservées**, celle de l'appareil et celle du serveur. **L'objet n'est jamais réécrit**, et sa version est sur la fiche. **L'accès est signé, limité et journalisé**, et la rétention est écrite.",
        "Et une règle de méthode : les photos existantes, sur les téléphones et dans WhatsApp, sont reprises comme des photos importées, marquées comme telles, avec la date du fichier et sans empreinte à la prise ; on ne fait pas semblant qu'elles ont été prises dans l'application.",
      ] },
      { heading: 'Six entreprises, et la photo qui manquait', body: [
        "Six situations composées à partir de projets que nous rencontrons ; les noms sont génériques et les chiffres sont des exemples.",
      ], list: [
        "**Une entreprise de livraison à Alger, quarante livreurs.** Les photos de remise partaient sur WhatsApp et un colis contesté sur dix n'avait plus de photo. La construction : prise dans l'application, file hors ligne, envoi reprenable, deux heures, lien signé pour le client. Les litiges sans photo ont cessé ; le cas est proche de [le guide sur la chaîne du froid](" + L.froid + ").",
        "**Un promoteur à Oran, acquéreurs en France.** Les photos de chantier arrivaient par e-mail, lourdes et sans ordre. La construction : photos liées à l'étape du chantier, réduites sur l'appareil, miniatures dans l'espace acquéreur ; le cas est décrit dans [le guide sur le promoteur immobilier](" + L.promoteur + ").",
        "**Un propriétaire à Lyon, appartement loué à Alger.** L'état des lieux était un fichier de photos sans date fiable. La construction : photos par pièce prises dans l'application par le gestionnaire, empreinte, signature du locataire liée, rétention sur la durée du bail ; le cas est décrit dans [le guide sur l'appartement loué](" + L.appartement + ").",
        "**Un installateur solaire à Sétif.** Les photos de fin de chantier étaient contestées par un client six mois plus tard. La construction : liste de photos attendues par chantier, deux heures, position, export litige avec empreintes ; le métier est décrit dans [le guide sur l'installateur solaire](" + L.solaire + ").",
        "**Un loueur de voitures à Constantine.** L'état des lieux au départ et au retour se faisait sur papier. La construction : photos guidées par face du véhicule, comparaison départ et retour côte à côte, empreinte et signature ; le cas est décrit dans [le guide sur la location de voiture](" + L.location + ").",
        "**Un distributeur à Annaba, douze camions.** Les photos de déchargement saturaient le serveur et les écrans. La construction : réduction sur l'appareil, miniatures pour les listes, rétention de douze mois sur les photos de routine et de cinq ans sur les litiges.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Six semaines pour une entreprise qui prend déjà des photos sur le terrain ; la première semaine se passe sans code.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles** : quels dossiers exigent des photos et combien, quelle taille de réduction, l'original conservé ou non, la durée de rétention, qui peut voir ; signées par le gérant. **Semaine 2, capture et réduction** : prise guidée dans l'application, réduction et WebP sur l'appareil, empreinte et métadonnées attachées. **Semaine 3, file et envoi** : file hors ligne, envoi reprenable par morceaux, état visible pour l'agent, reprise après coupure testée en coupant réellement le réseau.",
        "**Semaine 4, stockage et fiche** : réception avec heure du serveur et vérification, stockage objet versionné, miniatures, fiche liée au dossier. **Semaine 5, accès et export** : liens signés, journal d'accès, export litige avec empreintes, affichage dans les dossiers et sur le portail client. **Semaine 6, rétention et mesure** : suppression journalisée à l'échéance, photos manquantes par dossier, taux d'envoi réussi au premier essai. Chaque semaine se termine par une démonstration, selon [le guide sur la livraison sans casse](" + L.livrer + ").",
      ] },
      { heading: 'Ce qui fait échouer les photos', body: [
        "Cinq causes, vues dans des applications qu'on reprend. **L'original envoyé puis réduit sur le serveur** : la photo ne passe pas sur un réseau faible, et le serveur se remplit. **L'import depuis la galerie** sur un dossier de preuve : la photo vient de n'importe où. **Une seule heure** : celle du téléphone, que n'importe qui règle. **L'URL publique** : la photo circule. **Les photos dans la base de données** : la base grossit, les sauvegardes s'allongent, les écrans ralentissent.",
        "Et une cause de méthode : laisser la rétention « à décider plus tard ». Sans règle, on garde tout pour toujours, puis on supprime en catastrophe ; la première semaine est faite pour l'écrire.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que posent les gérants et les fondateurs quand ils nous décrivent des photos qui n'arrivent pas ou ne prouvent rien.",
      ], faq: [
        { q: "Pourquoi les photos n'arrivent-elles pas depuis le terrain ?", a: "Parce qu'elles partent en pleine taille, plusieurs mégaoctets, sur un réseau qui coupe, et qu'un envoi interrompu repart du début ou est perdu. La construction qui règle cela : réduction sur l'appareil avant tout envoi, file hors ligne, envoi reprenable par morceaux qui reprend au morceau après coupure, et un état visible pour l'agent." },
        { q: "Faut-il garder l'original pleine taille ?", a: "Seulement si le métier l'exige, une expertise ou un zoom sur un détail par exemple, et on l'écrit la première semaine. Pour la plupart des dossiers de preuve, une photo de 1 600 pixels de large suffit pour lire une plaque, un compteur ou un défaut, et pèse vingt fois moins. Si l'original est gardé, il part après la version réduite, quand le réseau le permet." },
        { q: "Comment prouver qu'une photo n'a pas été retouchée ?", a: "Par une empreinte SHA-256 calculée sur l'appareil au moment de la prise, vérifiée par le serveur à la réception, et recalculable à tout moment sur l'objet stocké ; une image modifiée donne une empreinte différente. L'objet est versionné et jamais réécrit. Cela montre que l'image stockée est celle qui a été prise ; la valeur juridique dépend du contexte." },
        { q: "Pourquoi deux heures sur chaque photo ?", a: "Parce que l'heure du téléphone est déclarée et modifiable par qui le règle, et que l'heure du serveur est reçue et non modifiable. Les deux sont conservées ; un écart de quelques minutes est un réseau coupé, un écart de plusieurs jours demande une explication, et la fiche le rend visible au lieu de le cacher." },
        { q: "Où stocker des milliers de photos ?", a: "Dans un stockage objet versionné, pas dans la base de données : la base garde la fiche, le stockage garde les octets, et chaque écriture crée une version. Les photos sont servies par des liens signés qui expirent, jamais par une URL publique. Le choix du lieu d'hébergement, Algérie ou Europe, suit le guide dédié." },
        { q: "Peut-on reprendre les photos déjà prises sur WhatsApp ?", a: "Oui, comme des photos importées, marquées comme telles, avec la date du fichier et sans empreinte à la prise ; elles sont liées au dossier mais la fiche dit qu'elles n'ont pas été prises dans l'application. On ne fait pas semblant." },
        { q: "Combien de temps pour mettre cela en place ?", a: "Six semaines dans le calendrier type : une pour écrire les règles, une pour la capture et la réduction, une pour la file et l'envoi, une pour le stockage et la fiche, une pour l'accès et l'export, une pour la rétention et la mesure. Le délai dépend du nombre de types de dossiers et de l'existence d'une application de terrain." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "La photo est réduite avant d'être envoyée, jamais après : 240 Ko sur un réseau faible passent, 4,2 Mo ne passent pas." },
      { after: 3, text: "Une photo seule ne prouve rien : ce qui tient, c'est la fiche autour d'elle, l'empreinte recalculée, la version de l'objet et le journal de qui l'a vue." },
    ],
    cta: { eyebrow: 'Envoyez-nous dix dossiers avec leurs photos, nous mesurons ce qui manque', title: "Gérant en Algérie ou fondateur en France : nous construisons des photos qui arrivent, pèsent peu et tiennent, de la capture guidée au lien signé", body: "Symloop construit et reprend des applications en production pour les entreprises en Algérie et les fondateurs installés en France : capture guidée dans l'application avec appareil enrôlé, réduction et WebP sur l'appareil, empreinte et métadonnées à la prise, file hors ligne et envoi reprenable par morceaux, réception avec heure du serveur et vérification, stockage objet versionné, miniatures, fiche liée au dossier, liens signés et journal d'accès, export litige avec empreintes, rétention écrite et suppression journalisée, portail client. Code et règles dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.horsligne, kind: '2027', name: 'Application hors ligne : base locale, file, idempotence' },
      { href: L.sauvegarde, kind: '2027', name: 'Si le serveur meurt demain : sauvegardes, copie inaltérable' },
      { href: L.adresse, kind: '2027', name: 'Livrer sans adresse : point GPS, remise géolocalisée' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit' },
    ] },
  },
  en: {
    kind: 'Photos · Proof · Storage · 2027', title: "“The photo never arrived”: what gets built so that site, delivery and inspection photos hold up in your application in Algeria in 2027, capture, compression, resumable upload, object storage, fingerprint, signed access",
    dek: "“The courier took the photo, but it never arrived. The ones that arrive weigh 4 MB each, the server is full, and when a customer disputes a delivery, nobody can say when the photo was taken or whether it was retouched.” Photos that prove nothing are not a courier problem, they are a construction: a photo sent on WhatsApp or uploaded full size from the gallery has no queue, no fingerprint, no reliable time and no place to live for five years. This guide describes what gets built so that photos arrive, weigh little, prove something and stay readable: guided capture in the application, on-device reduction, resumable chunked upload, versioned object storage, fingerprint computed at capture, two times kept, access by signed link, written retention.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Photos', 'Proof of delivery', 'Object storage', 'Offline', 'Algeria 2027'],
    intro: [
      "**Short answer.** A proof photo is **taken in the application**, not in the gallery, on an enrolled device by a logged-in author. It is **reduced on the device**, to 1,600 pixels and WebP, before any upload: from a few megabytes to a few hundred kilobytes. On the device it receives its SHA-256 **fingerprint**, the device time, the position and its accuracy, the file and the author. It waits for network in the **offline queue**, leaves in **chunks** with a resumable upload protocol, and resumes at the chunk after a cut. The server notes **its own time**, recomputes the fingerprint, refuses if it differs, writes the object into **versioned object storage**, produces thumbnails and links the record to the file. Access is through a **signed link that expires**, and you know who saw it. The full-size original is kept only if the trade requires it, and **retention** is written. Six weeks, the first without code.",
      "This guide is for the manager of a delivery, works, installation or rental company whose photos serve as proof, the founder settled in France who must be able to look at a site or an inspection remotely and trust it, and the person who has seen a photo disputed for lack of a reliable time. It does not repeat how an application works without network, described in [the offline guide](" + L.horsligne + "), nor how object storage is backed up, described in [the backups guide](" + L.sauvegarde + "); it describes what gets built around the photo itself, and it extends [our software engineering page](" + L.service + ").",
    ],
    sections: [
      { heading: 'Photos that hold up, in five layers', body: [
        "A photo that proves something crosses five layers, and the second, on the device, is the one home-made applications forget.",
      ], visual: 'couches', after: [
        "**Capture.** Shooting happens in the application, with an expected frame, a number of photos per file, managed flash, and no cropping; the device is enrolled and the author logged in by code, following [the roles and audit log guide](" + L.roles + "). The photo is born in the file, never in the gallery. **On-device processing.** Reduction to 1,600 pixels wide and conversion to WebP before any upload; SHA-256 fingerprint; device time, position and accuracy, file and author attached. This is the accented layer: what leaves weighs twenty times less and already carries its proof. **Transport.** Offline queue in the local database, resumable chunked upload with an open protocol, resume at the chunk after a cut, acknowledgement per chunk; a photo is never resent from the start.",
        "**Storage.** The server notes its own time at receipt, recomputes the fingerprint and refuses if it differs; the object is written into versioned object storage, thumbnails are produced, and the record is linked to the file and the author; the database keeps the record, object storage keeps the bytes. **Access and retention.** Signed link expiring in fifteen minutes, access log, export with fingerprints for a dispute, written retention then logged deletion; the photo is never public. Where those bytes live, in Algeria or in Europe, is a separate decision, described in [the hosting guide](" + L.heberger + ").",
      ] },
      { heading: 'One photo, from the camera to the file', body: [
        "The figure follows a single photo and what it weighs at each step. Everything that matters happens before it leaves the phone.",
      ], visual: 'parcours', after: [
        "Captured at 12 megapixels, the photo weighs 4.2 MB; reduced to 1,600 pixels wide and converted to WebP on the device, it weighs 240 KB, enough to read a plate, a meter or a tiling defect, and twenty times less to send over a network that cuts out. It receives its fingerprint and metadata, waits in the offline queue while the network is down, then leaves in three chunks; the second is cut at 45 KB and resumes at 45 KB, not at the start. The server notes 14:09:48, seven minutes after capture, recomputes the fingerprint, finds it equal, writes the object and the thumbnails, and links the record to the file.",
        "Two times are kept, and it is a rule: the device time, declared and editable by whoever sets their phone, and the server time, received and not editable. A seven-minute gap is a network cut; a three-day gap calls for an explanation, and the record makes it visible. WebP's gain over JPEG and the weight of a phone photo vary with the device and the scene; the sizes in the figure are a constructed example, and the weight of the screens that display these photos is covered in [the slow application guide](" + L.lente + ").",
      ] },
      { heading: 'In the field, in six gestures', body: [
        "What the agent, courier or technician does, in order, and why the second gesture is a rule.",
      ], visual: 'etapes', after: [
        "**Open the file**: delivery, site, inspection; the expected photos are listed, façade, meter, parcel at the door. **Shoot in the application**, with the guided frame; on proof files, gallery import is disabled, because an imported photo can come from anywhere and any time. **Check the list**: missing photos are flagged before closing. **Sign or get signed** on the screen; the signature is linked to the file's photos and to the hand-over point, following [the delivery without address guide](" + L.adresse + ").",
        "**Close the file**, even without network; everything is queued. **Let it go**: the resumable upload runs in the background, and the state is visible, three pending, two sent, so the agent does not stand waiting for a progress bar. Continuous GPS, the camera and background work are among the reasons the agent's app is often native, following [the PWA or native guide](" + L.pwa + ").",
      ] },
      { heading: 'What makes a photo hold up', body: [
        "The figure shows the record of a stored photo, three checks made today, and the log of who saw it. All of that, not the image, is what holds.",
      ], visual: 'preuve', after: [
        "The record carries the file, the author and the device, the two times, the position and its accuracy, the fingerprint computed at capture, the object's key and version, the rule on the full-size original, and the retention. The checks recompute today the fingerprint of the stored object and compare it with the record's: equal, the image is the one that was taken; a copy whose brightness was changed gives a different fingerprint and fails. The object's version shows it was never rewritten; object storage can lock a version for a period, as described in [the backups guide](" + L.sauvegarde + ").",
        "Access is through a signed link that expires in fifteen minutes, and the log says who opened it and when; the large object stores themselves limit the life of such links to a few days at most. A dispute export produces a PDF with the fingerprints. The legal weight of a photo depends on context and is not covered here; what is built is the ability to show what was taken, when, by whom, and that nothing has changed since. Values in the figure are a constructed example.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "The six situations found in almost every field application we take over, and the construction that settles them.",
      ], visual: 'situations', after: [
        "The first two rows are settled on the device, by reduction before upload and the offline queue; the next two by the fingerprint, the two times and the shoot-in-app rule; the last two by signed access and written retention. Reading the content of a photo automatically, an invoice or a note, is another subject, described in [the AI document reading guide](" + L.ia + "); here, the photo is proof, not a data source. None of the six rows is settled by a more careful agent.",
      ] },
      { heading: 'Seen elsewhere: object storage, signed links and resumable upload, and what carries over', body: [
        "Three mechanisms of the large platforms carry over as they are. **Versioned object storage**, where every write creates a version and a version can be locked for a period; what carries over is never rewriting a proof object and keeping its version on the record. **Signed links**, limited in time by the provider itself, seven days at most with Amazon S3's tools and twelve hours from its console; what carries over is fifteen minutes for a file photo, and a log. **Resumable upload**, with tus, an open protocol for resuming an interrupted upload; what carries over is resuming at the chunk, on a network that cuts out.",
        "What those mechanisms do not decide for you: the size you reduce to, original or not, how long you keep, and who may see; the project's first week answers that, and the manager signs.",
      ] },
      { heading: 'The rules of a photo that holds up', body: [
        "Six rules, written in the first week. **The proof photo is taken in the application**, not in the gallery. **It is reduced and fingerprinted on the device** before any upload. **It waits and leaves in chunks**, and never restarts from the beginning. **Two times are kept**, the device's and the server's. **The object is never rewritten**, and its version is on the record. **Access is signed, limited and logged**, and retention is written.",
        "And one rule of method: existing photos, on phones and in WhatsApp, are taken over as imported photos, marked as such, with the file date and no fingerprint at capture; you do not pretend they were taken in the application.",
      ] },
      { heading: 'Six companies, and the photo that was missing', body: [
        "Six situations composed from projects we meet; the names are generic and the figures are examples.",
      ], list: [
        "**A delivery company in Algiers, forty couriers.** Hand-over photos left on WhatsApp and one disputed parcel in ten had no photo left. The construction: shooting in the application, offline queue, resumable upload, two times, signed link for the customer. Disputes without a photo stopped; the case is close to [the cold chain guide](" + L.froid + ").",
        "**A developer in Oran, buyers in France.** Site photos arrived by e-mail, heavy and out of order. The construction: photos linked to the site stage, reduced on the device, thumbnails in the buyer's space; the case is described in [the property developer guide](" + L.promoteur + ").",
        "**An owner in Lyon, flat rented in Algiers.** The inspection was a folder of photos with no reliable date. The construction: photos per room taken in the application by the manager, fingerprint, tenant's signature linked, retention for the lease duration; the case is described in [the rented flat guide](" + L.appartement + ").",
        "**A solar installer in Sétif.** End-of-site photos were disputed by a customer six months later. The construction: list of expected photos per site, two times, position, dispute export with fingerprints; the trade is described in [the solar installer guide](" + L.solaire + ").",
        "**A car rental company in Constantine.** Check-out and check-in inspections were done on paper. The construction: guided photos per side of the vehicle, departure and return compared side by side, fingerprint and signature; the case is described in [the car rental guide](" + L.location + ").",
        "**A distributor in Annaba, twelve trucks.** Unloading photos saturated the server and the screens. The construction: on-device reduction, thumbnails for lists, twelve-month retention on routine photos and five years on disputes.",
      ] },
      { heading: 'The 2027 calendar', body: [
        "Six weeks for a company that already takes photos in the field; the first week passes without code.",
      ], visual: 'calendrier', after: [
        "**Week 1, rules**: which files require photos and how many, what reduction size, original kept or not, retention period, who may see; signed by the manager. **Week 2, capture and reduction**: guided capture in the application, reduction and WebP on the device, fingerprint and metadata attached. **Week 3, queue and upload**: offline queue, resumable chunked upload, visible state for the agent, resume after cut tested by actually cutting the network.",
        "**Week 4, storage and record**: receipt with server time and check, versioned object storage, thumbnails, record linked to the file. **Week 5, access and export**: signed links, access log, dispute export with fingerprints, display in files and on the customer portal. **Week 6, retention and measurement**: logged deletion at term, missing photos per file, first-attempt upload success rate. Every week ends with a demo, following [the delivery without breakage guide](" + L.livrer + ").",
      ] },
      { heading: 'What makes photos fail', body: [
        "Five causes, seen in applications we take over. **The original sent then reduced on the server**: the photo does not get through a weak network, and the server fills up. **Gallery import** on a proof file: the photo comes from anywhere. **A single time**: the phone's, which anyone sets. **The public URL**: the photo circulates. **Photos in the database**: the database grows, backups get longer, screens slow down.",
        "And one cause of method: leaving retention “to decide later”. Without a rule, you keep everything forever, then delete in a panic; the first week exists to write it.",
      ] },
      { heading: 'Frequently asked questions', body: [
        "The questions managers and founders ask when they describe photos that do not arrive or prove nothing.",
      ], faq: [
        { q: "Why do photos not arrive from the field?", a: "Because they leave full size, several megabytes, over a network that cuts out, and an interrupted upload restarts from the beginning or is lost. The construction that settles this: reduction on the device before any upload, offline queue, resumable chunked upload that resumes at the chunk after a cut, and a visible state for the agent." },
        { q: "Should the full-size original be kept?", a: "Only if the trade requires it, an expert assessment or a zoom on a detail for example, and that is written in the first week. For most proof files, a 1,600-pixel-wide photo is enough to read a plate, a meter or a defect, and weighs twenty times less. If the original is kept, it leaves after the reduced version, when the network allows." },
        { q: "How do you prove a photo was not retouched?", a: "With a SHA-256 fingerprint computed on the device at capture, checked by the server at receipt, and recomputable at any time on the stored object; a modified image gives a different fingerprint. The object is versioned and never rewritten. That shows the stored image is the one that was taken; the legal weight depends on context." },
        { q: "Why two times on every photo?", a: "Because the phone's time is declared and editable by whoever sets it, and the server's time is received and not editable. Both are kept; a gap of a few minutes is a network cut, a gap of several days calls for an explanation, and the record makes it visible instead of hiding it." },
        { q: "Where do you store thousands of photos?", a: "In versioned object storage, not in the database: the database keeps the record, storage keeps the bytes, and every write creates a version. Photos are served through signed links that expire, never through a public URL. The choice of hosting location, Algeria or Europe, follows the dedicated guide." },
        { q: "Can photos already taken on WhatsApp be taken over?", a: "Yes, as imported photos, marked as such, with the file date and no fingerprint at capture; they are linked to the file but the record says they were not taken in the application. You do not pretend." },
        { q: "How long does it take to set this up?", a: "Six weeks in the typical calendar: one to write the rules, one for capture and reduction, one for queue and upload, one for storage and record, one for access and export, one for retention and measurement. The duration depends on the number of file types and whether a field application already exists." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The photo is reduced before being sent, never after: 240 KB gets through a weak network, 4.2 MB does not." },
      { after: 3, text: "A photo alone proves nothing: what holds is the record around it, the recomputed fingerprint, the object's version and the log of who saw it." },
    ],
    cta: { eyebrow: 'Send us ten files with their photos, we measure what is missing', title: 'Manager in Algeria or founder in France: we build photos that arrive, weigh little and hold up, from guided capture to signed link', body: 'Symloop builds and takes over applications in production for companies in Algeria and founders settled in France: guided capture in the application with enrolled device, reduction and WebP on the device, fingerprint and metadata at capture, offline queue and resumable chunked upload, receipt with server time and check, versioned object storage, thumbnails, record linked to the file, signed links and access log, dispute export with fingerprints, written retention and logged deletion, customer portal. Code and rules in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.horsligne, kind: '2027', name: 'Offline application: local database, queue, idempotency' },
      { href: L.sauvegarde, kind: '2027', name: 'If the server dies tomorrow: backups, immutable copy' },
      { href: L.adresse, kind: '2027', name: 'Delivering without an address: GPS point, geolocated hand-over' },
      { href: L.roles, kind: '2027', name: 'Roles, rights and audit log' },
    ] },
  },
  ar: {
    kind: 'صور · إثبات · تخزين · 2027', title: '«الصورة لم تصل أبداً»: ما يُبنى كي تصمد صور الورشة والتسليم والمعاينة في تطبيقكم في الجزائر سنة 2027، التقاط، ضغط، رفع قابل للاستئناف، تخزين كائنات، بصمة، وصول موقَّع',
    dek: '«التقط الموصّل الصورة لكنها لم تصل أبداً. والتي تصل تزن 4 ميغابايت كل واحدة، والخادم ممتلئ، وحين يعترض زبون على تسليم لا أحد يستطيع القول متى التُقطت الصورة ولا إن كانت معدَّلة.» الصور التي لا تثبت شيئاً ليست مشكلة موصّل بل بناء: صورة مرسلة على WhatsApp أو مرفوعة بحجمها الكامل من المعرض لا طابور لها ولا بصمة ولا وقت موثوق ولا مكان تعيش فيه خمس سنوات. يصف هذا الدليل ما يُبنى كي تصل الصور وتزن قليلاً وتثبت شيئاً وتبقى مقروءة: التقاط موجَّه في التطبيق، تصغير على الجهاز، رفع قابل للاستئناف بقطع، تخزين كائنات بنسخ، بصمة محسوبة عند الالتقاط، وقتان محفوظان، وصول برابط موقَّع، احتفاظ مكتوب.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['صور', 'إثبات التسليم', 'تخزين الكائنات', 'دون اتصال', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** صورة الإثبات **تُلتقط في التطبيق** لا في المعرض، على جهاز مسجَّل بمؤلف متصل. **تُصغَّر على الجهاز** إلى 1600 بكسل وWebP قبل أي رفع: من بضعة ميغابايتات إلى بضع مئات من الكيلوبايتات. وتتلقى على الجهاز **بصمتها** SHA-256 ووقت الجهاز والموقع ودقته والملف والمؤلف. وتنتظر الشبكة في **طابور دون اتصال**، وتنطلق **بقطع** ببروتوكول رفع قابل للاستئناف، وتُستأنف عند القطعة بعد الانقطاع. ويسجّل الخادم **وقته هو**، ويعيد حساب البصمة، ويرفض إن اختلفت، ويكتب الكائن في **تخزين كائنات بنسخ**، وينتج المصغّرات ويربط البطاقة بالملف. والوصول إليها **برابط موقَّع ينتهي**، ونعرف من رآها. والأصل بالحجم الكامل لا يُحفظ إلا إن اقتضته المهنة، و**الاحتفاظ** مكتوب. ستة أسابيع، أولها بلا كود.',
      'يتوجه هذا الدليل إلى مسيّر شركة توصيل أو أشغال أو تركيب أو تأجير تُستعمل صورها إثباتاً، وإلى المؤسس المقيم في فرنسا الذي يجب أن ينظر إلى ورشة أو معاينة عن بعد ويثق بها، وإلى المسؤول الذي رأى صورة محل نزاع لغياب وقت موثوق. لا يعيد شرح كيف يعمل تطبيق بلا شبكة، الموصوف في [دليل العمل دون اتصال](' + L.horsligne + ')، ولا كيف يُنسخ تخزين الكائنات احتياطياً، الموصوف في [دليل النسخ الاحتياطي](' + L.sauvegarde + ')؛ بل يصف ما يُبنى حول الصورة نفسها، ويمتد من [صفحتنا عن هندسة البرمجيات](' + L.service + ').',
    ],
    sections: [
      { heading: 'صور تصمد، في خمس طبقات', body: [
        'الصورة التي تثبت شيئاً تعبر خمس طبقات، والثانية، على الجهاز، هي التي تنساها التطبيقات المنزلية.',
      ], visual: 'couches', after: [
        '**الالتقاط.** يتم التصوير في التطبيق بإطار متوقَّع وعدد صور لكل ملف وفلاش مُدار ولا قصّ؛ والجهاز مسجَّل والمؤلف متصل برمز وفق [دليل الأدوار وسجل التدقيق](' + L.roles + '). تولد الصورة في الملف لا في المعرض أبداً. **المعالجة على الجهاز.** تصغير إلى عرض 1600 بكسل وتحويل إلى WebP قبل أي رفع؛ بصمة SHA-256؛ وقت الجهاز والموقع ودقته والملف والمؤلف مرفقة. وهي الطبقة المميزة: ما يخرج يزن عشرين مرة أقل ويحمل إثباته سلفاً. **النقل.** طابور دون اتصال في القاعدة المحلية، رفع قابل للاستئناف بقطع ببروتوكول مفتوح، استئناف عند القطعة بعد الانقطاع، إقرار لكل قطعة؛ ولا تُعاد الصورة من البداية أبداً.',
        '**التخزين.** يسجّل الخادم وقته عند الاستلام ويعيد حساب البصمة ويرفض إن اختلفت؛ يُكتب الكائن في تخزين كائنات بنسخ، وتُنتج المصغّرات، وتُربط البطاقة بالملف والمؤلف؛ قاعدة البيانات تحفظ البطاقة وتخزين الكائنات يحفظ البايتات. **الوصول والاحتفاظ.** رابط موقَّع ينتهي في خمس عشرة دقيقة، سجل وصول، تصدير بالبصمات للنزاع، احتفاظ مكتوب ثم حذف مسجَّل؛ والصورة ليست عامة أبداً. وأين تعيش هذه البايتات، في الجزائر أم أوروبا، قرار منفصل موصوف في [دليل الاستضافة](' + L.heberger + ').',
      ] },
      { heading: 'صورة واحدة، من الكاميرا إلى الملف', body: [
        'يتتبع الشكل صورة واحدة وكم تزن في كل خطوة. وكل ما يهم يحدث قبل أن تغادر الهاتف.',
      ], visual: 'parcours', after: [
        'ملتقطة بـ 12 ميغابكسل تزن الصورة 4.2 ميغابايت؛ ومصغَّرة إلى عرض 1600 بكسل ومحوَّلة إلى WebP على الجهاز تزن 240 كيلوبايت، ما يكفي لقراءة لوحة أو عداد أو عيب في البلاط، وأخف عشرين مرة للإرسال على شبكة تنقطع. وتتلقى بصمتها وبياناتها، وتنتظر في طابور دون اتصال ما دامت الشبكة مقطوعة، ثم تنطلق في ثلاث قطع؛ تنقطع الثانية عند 45 كيلوبايت وتُستأنف عند 45 لا من البداية. ويسجّل الخادم 14:09:48 بعد سبع دقائق من الالتقاط، ويعيد حساب البصمة فيجدها متساوية، ويكتب الكائن والمصغّرات، ويربط البطاقة بالملف.',
        'ويُحتفظ بوقتين، وهي قاعدة: وقت الجهاز، المصرَّح والقابل للتعديل من يضبط هاتفه، ووقت الخادم، المستلَم وغير القابل للتعديل. فارق سبع دقائق شبكة مقطوعة؛ وفارق ثلاثة أيام يحتاج تفسيراً، والبطاقة تُظهره. وربح WebP على JPEG ووزن صورة الهاتف يختلفان حسب الجهاز والمشهد؛ وأحجام الشكل مثال مبني، ووزن الشاشات التي تعرض هذه الصور يُعالَج في [دليل التطبيق البطيء](' + L.lente + ').',
      ] },
      { heading: 'في الميدان، في ست حركات', body: [
        'ما يفعله العون أو الموصّل أو التقني بالترتيب، ولماذا الحركة الثانية قاعدة.',
      ], visual: 'etapes', after: [
        '**فتح الملف**: تسليم أو ورشة أو معاينة؛ الصور المتوقَّعة مدرجة، واجهة، عداد، طرد عند الباب. **التصوير في التطبيق** بالإطار الموجَّه؛ وفي ملفات الإثبات يُعطَّل الاستيراد من المعرض لأن صورة مستوردة قد تأتي من أي مكان وأي وقت. **مراجعة القائمة**: تُشار الصور الناقصة قبل الإغلاق. **التوقيع أو طلبه** على الشاشة؛ والتوقيع مرتبط بصور الملف وبنقطة التسليم وفق [دليل التوصيل بلا عنوان](' + L.adresse + ').',
        '**إغلاق الملف** حتى بلا شبكة؛ كل شيء في الطابور. **تركه ينطلق**: يجري الرفع القابل للاستئناف في الخلفية والحالة ظاهرة، ثلاث معلّقة واثنتان مرسلتان، كي لا يبقى العون منتظراً شريط تقدم. وGPS المستمر والكاميرا والعمل في الخلفية من أسباب كون تطبيق العون أصلياً غالباً وفق [دليل PWA أم أصلي](' + L.pwa + ').',
      ] },
      { heading: 'ما يجعل الصورة تصمد', body: [
        'يُظهر الشكل بطاقة صورة مخزَّنة وثلاثة تحققات أُجريت اليوم وسجل من رآها. كل ذلك، لا الصورة، هو ما يصمد.',
      ], visual: 'preuve', after: [
        'تحمل البطاقة الملف والمؤلف والجهاز والوقتين والموقع ودقته والبصمة المحسوبة عند الالتقاط ومفتاح الكائن ونسخته والقاعدة حول الأصل بالحجم الكامل والاحتفاظ. وتعيد التحققات اليوم حساب بصمة الكائن المخزَّن وتقارنها ببصمة البطاقة: متساوية، فالصورة هي التي التُقطت؛ ونسخة غُيِّر سطوعها تعطي بصمة مختلفة ولا تمر. ونسخة الكائن تُظهر أنه لم يُعَد كتابته أبداً؛ وتخزين الكائنات يعرف قفل نسخة لمدة كما في [دليل النسخ الاحتياطي](' + L.sauvegarde + ').',
        'والوصول برابط موقَّع ينتهي في خمس عشرة دقيقة، والسجل يقول من فتحه ومتى؛ ومخازن الكائنات الكبرى نفسها تحدّ عمر هذه الروابط ببضعة أيام على الأكثر. وتصدير النزاع ينتج PDF بالبصمات. والقيمة القانونية للصورة تتوقف على السياق ولا تُعالَج هنا؛ وما يُبنى هو إمكانية إظهار ما التُقط ومتى ومن ومن أن شيئاً لم يتغير منذ ذلك. وقيم الشكل مثال مبني.',
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        'الحالات الست التي نجدها في كل تطبيقات الميدان التي نستلمها تقريباً، والبناء الذي يحلها.',
      ], visual: 'situations', after: [
        'السطران الأولان يُحلان على الجهاز بالتصغير قبل الرفع والطابور دون اتصال؛ والتاليان بالبصمة والوقتين وقاعدة الالتقاط في التطبيق؛ والأخيران بالوصول الموقَّع والاحتفاظ المكتوب. وقراءة محتوى صورة آلياً، فاتورة أو وصل، موضوع آخر موصوف في [دليل قراءة الوثائق بالذكاء الاصطناعي](' + L.ia + ')؛ هنا الصورة إثبات لا مصدر بيانات. ولا سطر من الستة يُحل بعون أكثر عناية.',
      ] },
      { heading: 'ما رأيناه في مكان آخر: تخزين الكائنات والروابط الموقَّعة والرفع القابل للاستئناف، وما ينتقل', body: [
        'ثلاث آليات من المنصات الكبرى تنتقل كما هي. **تخزين الكائنات بنسخ**، حيث تنشئ كل كتابة نسخة ويمكن قفل نسخة لمدة؛ وما ينتقل هو عدم إعادة كتابة كائن إثبات أبداً وحفظ نسخته على البطاقة. **الروابط الموقَّعة**، المحدودة زمنياً من المزوّد نفسه، سبعة أيام على الأكثر بأدوات Amazon S3 واثنتا عشرة ساعة من لوحته؛ وما ينتقل هو خمس عشرة دقيقة لصورة ملف، وسجل. **الرفع القابل للاستئناف** بـ tus، بروتوكول مفتوح لاستئناف رفع منقطع؛ وما ينتقل هو الاستئناف عند القطعة على شبكة تنقطع.',
        'ما لا تقرره هذه الآليات عنكم: الحجم الذي تصغّرون إليه، والأصل أم لا، وكم تحتفظون، ومن يرى؛ الأسبوع الأول من المشروع يجيب، والمسيّر يوقّع.',
      ] },
      { heading: 'قواعد صورة تصمد', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **صورة الإثبات تُلتقط في التطبيق** لا في المعرض. **تُصغَّر وتُبصَم على الجهاز** قبل أي رفع. **تنتظر وتنطلق بقطع** ولا تعود من البداية أبداً. **يُحتفظ بوقتين**، وقت الجهاز ووقت الخادم. **الكائن لا يُعاد كتابته أبداً**، ونسخته على البطاقة. **الوصول موقَّع ومحدود ومسجَّل**، والاحتفاظ مكتوب.',
        'وقاعدة منهج: الصور الموجودة على الهواتف وفي WhatsApp تُستلَم كصور مستوردة، موسومة كذلك، بتاريخ الملف ودون بصمة عند الالتقاط؛ ولا نتظاهر بأنها التُقطت في التطبيق.',
      ] },
      { heading: 'ست شركات، والصورة التي كانت ناقصة', body: [
        'ست حالات مركَّبة من مشاريع نصادفها؛ الأسماء عامة والأرقام أمثلة.',
      ], list: [
        '**شركة توصيل في الجزائر العاصمة، أربعون موصّلاً.** كانت صور التسليم تذهب على WhatsApp وطرد متنازَع عليه من عشرة لم تبق له صورة. البناء: تصوير في التطبيق، طابور دون اتصال، رفع قابل للاستئناف، وقتان، رابط موقَّع للزبون. توقفت النزاعات بلا صورة؛ والحالة قريبة من [دليل سلسلة التبريد](' + L.froid + ').',
        '**مرقٍّ عقاري في وهران، مشترون في فرنسا.** كانت صور الورشة تصل بالبريد ثقيلة وبلا ترتيب. البناء: صور مرتبطة بمرحلة الورشة، مصغَّرة على الجهاز، مصغّرات في فضاء المشتري؛ والحالة موصوفة في [دليل المرقّي العقاري](' + L.promoteur + ').',
        '**مالك في ليون، شقة مؤجَّرة في الجزائر.** كانت المعاينة مجلد صور بلا تاريخ موثوق. البناء: صور لكل غرفة يلتقطها المسيّر في التطبيق، بصمة، توقيع المستأجر مرتبط، احتفاظ طوال مدة العقد؛ والحالة موصوفة في [دليل الشقة المؤجَّرة](' + L.appartement + ').',
        '**مركّب طاقة شمسية في سطيف.** اعترض زبون على صور نهاية الورشة بعد ستة أشهر. البناء: قائمة صور متوقَّعة لكل ورشة، وقتان، موقع، تصدير نزاع بالبصمات؛ والمهنة موصوفة في [دليل مركّب الطاقة الشمسية](' + L.solaire + ').',
        '**مؤجّر سيارات في قسنطينة.** كانت معاينة الانطلاق والعودة على الورق. البناء: صور موجَّهة لكل جانب من السيارة، مقارنة الانطلاق والعودة جنباً إلى جنب، بصمة وتوقيع؛ والحالة موصوفة في [دليل تأجير السيارات](' + L.location + ').',
        '**موزع في عنابة، اثنتا عشرة شاحنة.** كانت صور التفريغ تُشبع الخادم والشاشات. البناء: تصغير على الجهاز، مصغّرات للقوائم، احتفاظ اثني عشر شهراً بصور الروتين وخمس سنوات بالنزاعات.',
      ] },
      { heading: 'تقويم 2027', body: [
        'ستة أسابيع لشركة تلتقط صوراً في الميدان أصلاً؛ والأسبوع الأول يمر بلا كود.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 1، القواعد**: أي ملفات تتطلب صوراً وكم، أي حجم تصغير، الأصل محفوظ أم لا، مدة الاحتفاظ، من يرى؛ يوقّعها المسيّر. **الأسبوع 2، الالتقاط والتصغير**: التقاط موجَّه في التطبيق، تصغير وWebP على الجهاز، بصمة وبيانات مرفقة. **الأسبوع 3، الطابور والرفع**: طابور دون اتصال، رفع قابل للاستئناف بقطع، حالة ظاهرة للعون، استئناف بعد الانقطاع مختبَر بقطع الشبكة فعلاً.',
        '**الأسبوع 4، التخزين والبطاقة**: استلام بوقت الخادم وتحقق، تخزين كائنات بنسخ، مصغّرات، بطاقة مرتبطة بالملف. **الأسبوع 5، الوصول والتصدير**: روابط موقَّعة، سجل وصول، تصدير نزاع بالبصمات، عرض في الملفات وعلى بوابة الزبون. **الأسبوع 6، الاحتفاظ والقياس**: حذف مسجَّل عند الأجل، صور ناقصة لكل ملف، نسبة نجاح الرفع من أول محاولة. وكل أسبوع ينتهي بعرض وفق [دليل التسليم دون كسر](' + L.livrer + ').',
      ] },
      { heading: 'ما يُفشل الصور', body: [
        'خمسة أسباب رأيناها في تطبيقات نستلمها. **الأصل يُرسل ثم يُصغَّر على الخادم**: لا تمر الصورة على شبكة ضعيفة ويمتلئ الخادم. **الاستيراد من المعرض** في ملف إثبات: الصورة من أي مكان. **وقت واحد**: وقت الهاتف الذي يضبطه أي كان. **الرابط العام**: الصورة تتداول. **الصور في قاعدة البيانات**: تكبر القاعدة وتطول النسخ الاحتياطية وتبطئ الشاشات.',
        'وسبب منهجي: ترك الاحتفاظ «ليُقرَّر لاحقاً». بلا قاعدة نحتفظ بكل شيء للأبد ثم نحذف على عجل؛ والأسبوع الأول موجود لكتابتها.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي يطرحها المسيّرون والمؤسسون حين يصفون لنا صوراً لا تصل أو لا تثبت شيئاً.',
      ], faq: [
        { q: 'لماذا لا تصل الصور من الميدان؟', a: 'لأنها تخرج بحجمها الكامل، بضعة ميغابايتات، على شبكة تنقطع، ورفع منقطع يعود من البداية أو يضيع. والبناء الذي يحل ذلك: تصغير على الجهاز قبل أي رفع، طابور دون اتصال، رفع قابل للاستئناف بقطع يُستأنف عند القطعة بعد الانقطاع، وحالة ظاهرة للعون.' },
        { q: 'هل يجب حفظ الأصل بالحجم الكامل؟', a: 'فقط إن اقتضته المهنة، خبرة أو تكبير على تفصيل مثلاً، ويُكتب ذلك في الأسبوع الأول. ولمعظم ملفات الإثبات تكفي صورة بعرض 1600 بكسل لقراءة لوحة أو عداد أو عيب، وتزن عشرين مرة أقل. وإن حُفظ الأصل فينطلق بعد النسخة المصغَّرة حين تسمح الشبكة.' },
        { q: 'كيف نثبت أن صورة لم تُعدَّل؟', a: 'ببصمة SHA-256 تُحسب على الجهاز لحظة الالتقاط، ويتحقق منها الخادم عند الاستلام، ويمكن إعادة حسابها في أي وقت على الكائن المخزَّن؛ والصورة المعدَّلة تعطي بصمة مختلفة. والكائن بنسخ ولا يُعاد كتابته أبداً. وهذا يُظهر أن الصورة المخزَّنة هي التي التُقطت؛ والقيمة القانونية تتوقف على السياق.' },
        { q: 'لماذا وقتان على كل صورة؟', a: 'لأن وقت الهاتف مصرَّح وقابل للتعديل من يضبطه، ووقت الخادم مستلَم وغير قابل للتعديل. ويُحتفظ بالاثنين؛ فارق بضع دقائق شبكة مقطوعة، وفارق عدة أيام يحتاج تفسيراً، والبطاقة تُظهره بدل إخفائه.' },
        { q: 'أين نخزّن آلاف الصور؟', a: 'في تخزين كائنات بنسخ لا في قاعدة البيانات: القاعدة تحفظ البطاقة والتخزين يحفظ البايتات، وكل كتابة تنشئ نسخة. وتُقدَّم الصور بروابط موقَّعة تنتهي لا برابط عام أبداً. واختيار مكان الاستضافة، الجزائر أم أوروبا، يتبع الدليل المخصص.' },
        { q: 'هل يمكن استعادة الصور الملتقطة أصلاً على WhatsApp؟', a: 'نعم، كصور مستوردة موسومة كذلك، بتاريخ الملف ودون بصمة عند الالتقاط؛ تُربط بالملف لكن البطاقة تقول إنها لم تُلتقط في التطبيق. لا نتظاهر.' },
        { q: 'كم من الوقت لإقامة ذلك؟', a: 'ستة أسابيع في التقويم النموذجي: واحد لكتابة القواعد، وواحد للالتقاط والتصغير، وواحد للطابور والرفع، وواحد للتخزين والبطاقة، وواحد للوصول والتصدير، وواحد للاحتفاظ والقياس. وتتوقف المدة على عدد أنواع الملفات ووجود تطبيق ميداني.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'تُصغَّر الصورة قبل إرسالها لا بعده: 240 كيلوبايت تمر على شبكة ضعيفة، و4.2 ميغابايت لا تمر.' },
      { after: 3, text: 'الصورة وحدها لا تثبت شيئاً: ما يصمد هو البطاقة حولها، والبصمة المعاد حسابها، ونسخة الكائن، وسجل من رآها.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا عشرة ملفات بصورها، نقيس ما ينقص', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نبني صوراً تصل وتزن قليلاً وتصمد، من الالتقاط الموجَّه إلى الرابط الموقَّع', body: 'تبني Symloop وتستلم تطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: التقاط موجَّه في التطبيق بجهاز مسجَّل، تصغير وWebP على الجهاز، بصمة وبيانات عند الالتقاط، طابور دون اتصال ورفع قابل للاستئناف بقطع، استلام بوقت الخادم وتحقق، تخزين كائنات بنسخ، مصغّرات، بطاقة مرتبطة بالملف، روابط موقَّعة وسجل وصول، تصدير نزاع بالبصمات، احتفاظ مكتوب وحذف مسجَّل، بوابة زبون. الكود والقواعد في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.horsligne, kind: '2027', name: 'تطبيق دون اتصال: قاعدة محلية، طابور، عدم التكرار' },
      { href: L.sauvegarde, kind: '2027', name: 'إن مات الخادم غداً: نسخ احتياطي، نسخة غير قابلة للتغيير' },
      { href: L.adresse, kind: '2027', name: 'التوصيل بلا عنوان: نقطة GPS، تسليم بموقع' },
      { href: L.roles, kind: '2027', name: 'الأدوار والحقوق وسجل التدقيق' },
    ] },
  },
};

const KEYWORDS = "photos preuve de livraison application algérie 2027, photo chantier application compression envoi, photos état des lieux application, stockage photos application stockage objet, envoi reprenable photos réseau faible, empreinte sha-256 photo preuve, horodatage photo serveur appareil, lien signé photo accès, rétention photos application, photos hors ligne file d'attente, application terrain photos algérie 2027, proof of delivery photos app algeria 2027, resumable upload object storage photo fingerprint, صور إثبات التسليم التطبيق الجزائر 2027, تخزين صور التطبيق, رفع صور قابل للاستئناف";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
