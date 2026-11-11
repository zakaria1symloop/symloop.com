import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation.mjs';

const SLUG = 'imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation';
const FIGURES = ['couches', 'facture', 'documents', 'etapes', 'ticket', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  caisse: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/',
  bilingue: '/blog/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit/',
  offline: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  sauvegarde: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  livraison: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  pwa: '/blog/pwa-ou-application-native-algerie-2027-quand-application-web-installable-suffit-quand-il-faut-les-stores/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  migrer: '/blog/migrer-vieux-logiciel-de-gestion-algerie-2027-windev-access-excel-vers-plateforme-web-mobile-sans-arreter/',
  prevente: '/blog/prevente-commerciaux-terrain-distributeur-algerie-2027-application-tournee-commande-recouvrement/',
  promoteur: '/blog/promoteur-immobilier-vendre-sur-plan-diaspora-2027-espace-acquereur-suivi-chantier/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Documents · Impression · PDF · Tickets · 2027', title: "Imprimer factures, tickets et étiquettes depuis votre application en Algérie en 2027 : PDF bilingue, imprimante thermique, numérotation et archives, ce qu'on construit",
    dek: "« L'application est belle, mais le ticket ne sort pas sur l'imprimante de la caisse, la facture PDF a des carrés à la place de l'arabe, et le comptable dit que le numéro n'est pas le même que celui qu'on lui a envoyé. » Les documents sont la partie d'une application que le monde extérieur voit : le client, le comptable, le livreur, le contrôleur. Ce guide décrit ce qu'on construit pour qu'ils soient justes : un numéro posé une fois dans une séquence sans trou, un instantané figé des données, des gabarits versionnés avec les deux écritures, des PDF archivables avec les polices embarquées et une empreinte, des tickets qui sortent sur l'imprimante thermique qui est là, même sans réseau, et une réimpression qui ne régénère rien et se voit.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Documents', 'Impression', 'PDF', 'Tickets de caisse', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un document n'est pas une vue qu'on imprime, c'est un **objet émis** : un événement le déclenche, un **numéro** lui est posé une fois dans une séquence **sans trou** par agence et par an, ses données sont **figées** à cet instant, un **gabarit versionné** le rend, et le fichier produit est **archivé avec son empreinte** ; une réimpression ressort le même fichier, marqué duplicata. Trois moteurs de rendu pour une seule source : le **PDF/A** avec polices embarquées pour ce qui doit être lisible dans dix ans, le **flux de commandes thermique** pour les tickets de 80 ou 58 millimètres où le texte latin part en texte et **l'arabe en image**, et le langage des **étiqueteuses** pour les étiquettes à code-barres. Le ticket attend dans une **file locale** et sort même sans réseau ; la facture part par WhatsApp et e-mail et dort dans un stockage versionné. Six semaines, dont la première sans un seul document généré.",
      "Ce guide s'adresse au commerçant dont la caisse doit imprimer en deux secondes, au gérant dont le comptable réclame des numéros qui se suivent, et au fondateur installé en France qui reçoit la facture par WhatsApp et doit pouvoir la rouvrir dans cinq ans. Il ne redit pas comment la caisse encaisse, décrit dans [le guide sur la caisse](" + L.caisse + "), ni comment l'interface parle les deux langues, décrit dans [le guide sur l'application bilingue](" + L.bilingue + ") ; il décrit ce qui se construit entre la donnée et le papier, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Ce que les référentiels disent', body: [
        "Un PDF qui doit être lu dans dix ans a une norme, et elle est précise. Le PDF/A, défini par la norme ISO 19005, est la version du format « spécialisée pour l'archivage et la conservation à long terme des documents électroniques » : « toutes les polices doivent être embarquées », « le chiffrement est interdit », « les références à des contenus externes sont interdites », les scripts aussi, et des métadonnées normalisées sont requises. Il existe en plusieurs parties, PDF/A-1 à PDF/A-4, et en niveaux de conformité, dont le niveau b pour la reproduction visuelle fidèle et le niveau u qui ajoute que tout texte a une correspondance Unicode. Ce que cela impose : une facture émise en PDF/A-2b ou 2u avec ses polices à deux écritures embarquées s'ouvrira telle quelle dans dix ans, sur une machine qui n'a jamais eu ces polices ; une facture en PDF ordinaire qui pointe vers une police du serveur affichera des carrés.",
        "Les imprimantes de caisse parlent un langage de commandes textuel, pas un langage de pages. Le jeu de commandes ESC/POS d'Epson est décrit comme « une variante pour contrôler les imprimantes de tickets couramment utilisées au point de vente », et « beaucoup d'imprimantes thermiques actuelles continuent de l'utiliser » ; toutes les imprimantes de tickets Epson le supportent. Ce que cela impose, et que nous disons comme une observation sur les machines que nous rencontrons dans les magasins : la plupart comprennent ce jeu de commandes, mais presque aucune n'a de police arabe ni de façonnage des lettres arabes ; le texte latin part donc en texte, en quarante-huit caractères par ligne sur du 80 millimètres, et les lignes arabes partent en image, rendues par l'application avec sa propre police.",
        "Ce que nous n'avons pas trouvé : une statistique publique sur les imprimantes de caisse installées en Algérie, ni sur la part des factures échangées en PDF ; ce que nous voyons, ce sont des imprimantes thermiques de 80 millimètres en Bluetooth ou en USB, des étiqueteuses de 50 par 30 millimètres dans les entrepôts, et des factures PDF envoyées par WhatsApp dans la majorité des cas, et nous le disons comme une observation. Les règles de contenu et de numérotation des factures dépendent de votre comptable ; ce guide décrit la mécanique qui les tient, pas les règles elles-mêmes.",
      ] },
      { heading: "Les documents d'une application, en cinq couches", body: [
        "Avant la facture, les cinq couches, et celle qui évite les deux pannes les plus fréquentes.",
      ], visual: 'couches', after: [
        "**Les données du document** : un instantané figé au moment de l'émission, lignes, prix, adresses, taux, et le numéro posé dans une séquence sans trou ; le document est une photographie, pas une vue sur des données qui bougent, et un prix modifié demain ne change pas la facture d'hier. **Les gabarits** : un par document, bilingue ou par langue, versionné dans le dépôt avec des polices qui couvrent les deux écritures ; chaque document dit quelle version l'a produit, et c'est cette couche qui évite le PDF différent à chaque clic et la version arabe en carrés. **Le rendu** : trois moteurs pour une source, le PDF/A pour ce qui se conserve, le flux de commandes pour les tickets, le langage d'étiquettes pour les étiqueteuses.",
        "**La sortie** : impression locale par file d'attente, envoi WhatsApp et e-mail par les canaux décrits dans [le guide sur les notifications](" + L.notif + "), téléchargement, et archive versionnée avec empreinte ; le fichier envoyé est le fichier archivé, et une réimpression ne régénère rien. **La supervision** : la file d'impression et ses erreurs, les imprimantes présentes par site, les réimpressions et par qui, les lots de fin de mois, les écarts de numérotation ; le comptable lit les numéros, le gérant lit les réimpressions, selon les droits décrits dans [le guide sur les rôles](" + L.roles + ").",
      ] },
      { heading: 'Une facture, de la commande validée au PDF archivé', body: [
        "La facture ne se comprend pas sur un gabarit mais sur son parcours, en sept stations.",
      ], visual: 'facture', after: [
        "**La commande est validée** : un événement, paiement confirmé selon [le guide sur le paiement](" + L.paiement + ") ou livraison, déclenche la facture ; jamais un clic « imprimer », parce qu'un clic peut être fait deux fois. **Le numéro est attribué** : SET-2027-000418, une séquence par agence et par an, sans trou, posé une fois et jamais réutilisé ; c'est la ligne que le comptable vérifie en premier. **L'instantané est figé** : lignes, prix, adresses, taux à cet instant, copiés dans le document et plus jamais relus depuis le catalogue. **Le gabarit v3 bilingue** la rend, avec ses polices à deux écritures, et la facture porte le numéro de version du gabarit.",
        "**Le PDF/A** est produit avec les polices embarquées, et son empreinte est calculée avant tout envoi ; dix ans plus tard, le même fichier s'ouvre et la même empreinte prouve qu'il n'a pas changé. **Il est envoyé et archivé** : WhatsApp et e-mail au client, stockage versionné et verrouillé selon [le guide sur les sauvegardes](" + L.sauvegarde + ") ; la facture envoyée et la facture archivée sont le même fichier. **La réimpression** ressort ce fichier avec un filigrane « duplicata », et le journal dit qui l'a demandée et quand ; elle n'est jamais régénérée, parce qu'une facture régénérée depuis des données qui ont bougé n'est plus la même facture. Les numéros et montants sont un exemple construit.",
      ] },
      { heading: 'Six documents, et la sortie que chacun demande', body: [
        "Six documents que nous construisons sur presque tous les projets, et pour chacun ce qu'il doit être et comment il sort.",
      ], visual: 'documents', after: [
        "**La facture** : bilingue, numérotée sans trou, figée, lisible dans dix ans ; PDF/A avec empreinte, envoyée par WhatsApp et e-mail, archivée, réimprimée en duplicata. **Le ticket de caisse** : il sort en deux secondes, avec ou sans réseau, sur l'imprimante de la caisse ; flux de commandes thermique, arabe en image, file locale, QR vers la facture, tiroir si espèces. **Le bon de livraison** : signé par le client à la porte avec la photo du colis ; PDF généré sur le téléphone du livreur, signature et photo embarquées, horodaté, synchronisé au retour du réseau selon [le guide sur la synchronisation](" + L.offline + ") ; c'est la preuve de [la plateforme de livraison](" + L.livraison + ").",
        "**L'étiquette** : collée sur le colis ou le rayon, lue par un scanner, 50 par 30 millimètres ; langage de l'étiqueteuse, code-barres ou QR, texte court en deux écritures, lot d'étiquettes par préparation. **Le devis** : daté, avec une validité et des versions ; un PDF par version, v1 v2 v3 conservées, acceptation enregistrée, et le devis accepté devient la base de la facture. **Le relevé mensuel** : un document par client, généré en lot la nuit du premier du mois, PDF/A par client, envoi groupé, erreurs de lot lues à la supervision du matin ; c'est le document que [le portail B2B](" + L.portail + ") envoie à chaque détaillant.",
      ] },
      { heading: "Le ticket, de la caisse à l'imprimante", body: [
        "Le ticket est le document le plus simple et celui qui bloque le plus de caisses ; six étapes le font sortir.",
      ], visual: 'etapes', after: [
        "**La vente est validée** : le ticket est créé en base avec son numéro, même sans réseau, parce que la caisse travaille hors ligne. **Il est rendu en commandes** : texte latin en texte, lignes arabes en image, code QR, ordre de coupe. **Il entre dans la file locale** : une file sur la caisse elle-même, pas sur le serveur ; l'imprimante le prend quand elle est prête, un papier coincé ne perd pas la vente, et le ticket suivant attend derrière. **Il part vers l'imprimante** : Bluetooth, USB ou réseau, et l'état de l'imprimante est lu avant d'envoyer, papier, capot, erreur.",
        "**Coupe et tiroir** : la coupe vient après le QR, jamais avant la dernière ligne, et le tiroir ne s'ouvre que si le paiement est en espèces, parce qu'un tiroir qui s'ouvre à chaque ticket est un tiroir qu'on ne surveille plus. **Le statut est écrit** : imprimé, échoué, réimprimé et par qui ; visible à la supervision, pour que le gérant sache combien de tickets ont été réimprimés ce mois-ci et pourquoi. Le choix entre une application native et une application web pour parler à l'imprimante en Bluetooth est décrit dans [le guide dédié](" + L.pwa + ") : l'imprimante est l'un des critères qui imposent le natif.",
      ] },
      { heading: "Le ticket de 80 millimètres, tel que l'imprimante le reçoit", body: [
        "Ce que l'imprimante reçoit n'est pas une page : c'est une suite de commandes et d'images, et chacune a une raison.",
      ], visual: 'ticket', after: [
        "**Initialiser** l'imprimante à chaque ticket, pour partir d'un état connu quel que soit le ticket précédent. **Centrer, mettre en gras, doubler la taille** pour le nom du magasin et le total : le texte latin part en texte, parce que l'imprimante a la police et tient quarante-huit colonnes sur 80 millimètres, trente-deux sur 58. **Envoyer les lignes arabes en image** : la plupart des imprimantes n'ont ni police arabe ni façonnage des lettres, et une ligne arabe envoyée en texte sort en caractères inconnus ou en lettres séparées ; l'application la rend donc avec sa propre police, à la bonne largeur, et l'envoie en image monochrome.",
        "**Le code QR** renvoie vers la facture PDF et le programme de fidélité ; le client le scanne, et le ticket devient une porte vers le document complet. **La coupe partielle** vient après le QR, jamais avant la dernière ligne, parce qu'une coupe trop tôt sépare le total du reste. **L'ouverture du tiroir** n'est envoyée que si le paiement est en espèces, et elle est journalisée. Le même flux de commandes, rejoué depuis la file locale, produit le même ticket à l'identique, même sans réseau ; c'est ce qui permet la réimpression sans régénération.",
      ] },
      { heading: 'Vu ailleurs : la norme d’archivage et le jeu de commandes des imprimantes, et ce qui se transpose', body: [
        "Deux sources disent l'essentiel. La norme PDF/A dit qu'un document archivable embarque ses polices, n'a ni chiffrement ni référence externe ni script, et porte des métadonnées normalisées ; ce qui se transpose, c'est que la facture est produite en PDF/A avec les deux écritures embarquées, et que son empreinte est calculée avant l'envoi. Le jeu de commandes d'Epson dit comment on parle à une imprimante de tickets, en texte, en images et en ordres de coupe ; ce qui se transpose, c'est que le ticket est une suite de commandes rejouable depuis une file locale, et que l'arabe part en image parce que l'imprimante ne sait pas l'écrire.",
        "Ce que ces sources ne disent pas : quels documents votre entreprise émet, qui les lit, dans quelle langue, et comment votre comptable veut qu'ils soient numérotés ; la première semaine du projet y répond, et c'est le comptable qui signe la liste avec le gérant.",
      ] },
      { heading: "Les règles d'un document qu'on peut émettre sans crainte", body: [
        "Six règles, écrites la première semaine. **Un document est émis par un événement**, jamais par un clic. **Le numéro est posé une fois**, dans une séquence sans trou par agence et par an. **Les données sont figées** à l'émission ; le document ne relit jamais le catalogue. **Le gabarit est versionné** avec ses polices à deux écritures, et le document dit quelle version l'a produit. **Le fichier envoyé est le fichier archivé**, avec son empreinte ; une réimpression est un duplicata marqué. **Le ticket sort sans réseau**, depuis une file locale, sur l'imprimante qui est là.",
        "Une septième règle porte sur le devis : « génération de factures PDF et impression des tickets » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « liste des documents avec lecteur et langue ; émission par événement ; séquences de numérotation par agence et par an sans trou ; instantané figé ; gabarits versionnés bilingues avec polices embarquées ; PDF/A avec empreinte pour les documents conservés ; archive versionnée et verrouillée ; réimpression en duplicata journalisée ; tickets en flux de commandes thermique avec arabe en image, file locale, test sur chaque imprimante présente ; étiquettes dans le langage de l'étiqueteuse ; lots de fin de mois supervisés », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui écrit « export PDF » a prévu un bouton, pas un document.",
      ] },
      { heading: 'Six entreprises, et le document qui comptait', body: [
        "Six entreprises que nous équipons souvent, et pour chacune le document qui a décidé de l'architecture.",
      ], list: [
        "**Le commerce de détail**, décrit dans [le guide sur la caisse](" + L.caisse + "). Le ticket de 80 millimètres en deux secondes, avec ou sans réseau, sur les trois imprimantes différentes des trois magasins ; la file locale a réglé ce que le serveur ne pouvait pas.",
        "**Le grossiste et son portail**, décrit dans [le guide dédié](" + L.portail + "). Le relevé mensuel par détaillant, généré en lot la nuit du premier, bilingue, envoyé par WhatsApp ; trois cents PDF/A chaque mois sans une main.",
        "**La plateforme de livraison**, décrite dans [le guide dédié](" + L.livraison + "). Le bon de livraison signé sur le téléphone du livreur avec la photo du colis, généré hors ligne et synchronisé au dépôt ; la preuve que le client réclame.",
        "**Les commerciaux terrain**, décrits dans [le guide dédié](" + L.prevente + "). Le bon de commande imprimé chez le client sur une imprimante Bluetooth de 58 millimètres, trente-deux colonnes, arabe en image.",
        "**Le promoteur immobilier**, décrit dans [le guide dédié](" + L.promoteur + "). Les reçus d'acompte des acquéreurs en PDF/A bilingue, numérotés, archivés dix ans et verrouillés ; le document qu'un acquéreur en France rouvrira en 2036.",
        "**L'entreprise qui migre**, décrite dans [le guide sur la migration](" + L.migrer + "). La liste des documents imprimés chaque jour par l'ancien logiciel est le premier inventaire de la première semaine ; le nouveau les produit tous avant la bascule, et le comptable compare les numéros.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui des documents d'une application livrés en six semaines, dont la première sans un seul document généré.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** fait l'inventaire et écrit la numérotation : la liste des documents, qui les lit, dans quelle langue ; les séquences par agence et par an ; les gabarits signés par le gérant et le comptable, parce que ces décisions ne se changent plus une fois la première facture émise. **La semaine 1 à 2** construit le moteur PDF et la facture : instantané figé, gabarit bilingue versionné, polices embarquées, PDF/A, empreinte, et la première facture relue par le comptable. **La semaine 2 à 3** traite les tickets : rendu en commandes, arabe en image, file locale, et un test sur chaque imprimante réellement présente dans les magasins, pas sur celle du bureau.",
        "**La semaine 3 à 4** traite les bons, les étiquettes et les devis : signature et photo sur le téléphone, étiqueteuses, versions. **La semaine 4 à 5** installe l'archive versionnée, la réimpression marquée, l'envoi par WhatsApp et e-mail, et le lot de fin de mois. **La semaine 5 à 6** est la recette sur place : chaque imprimante, chaque document, les deux langues, et le comptable qui valide les numéros ; c'est la recette que [le guide sur la livraison](" + L.livrer + ") décrit, faite devant les machines. Quand l'application doit aussi envoyer ses documents à la comptabilité, [le guide sur l'intégration](" + L.integrer + ") prend la suite.",
      ] },
      { heading: 'Ce qui fait échouer les documents d’une application', body: [
        "Les documents que nous reprenons ont presque toujours échoué pour l'une de ces raisons.",
      ], list: [
        "**Le PDF regénéré à chaque clic.** Le prix a changé entre-temps ; la facture du client et celle du comptable ne disent plus la même chose.",
        "**Le numéro posé à l'impression.** Deux clics, deux numéros ; un clic annulé, un trou.",
        "**La police non embarquée.** Des carrés à la place de l'arabe sur la machine du client.",
        "**L'arabe envoyé en texte à l'imprimante.** Des caractères inconnus ou des lettres séparées sur le ticket.",
        "**Le ticket qui attend le serveur.** Le réseau tombe, la caisse bloque, la file au comptoir grandit.",
        "**Testé sur l'imprimante du bureau.** Les trois magasins ont trois modèles, et deux ne coupent pas au même endroit.",
        "**La réimpression invisible.** Le même ticket imprimé cinq fois, et personne ne sait pourquoi.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de commerçants, de gérants et de comptables.",
      ], faq: [
        { q: 'Pourquoi le ticket ne sort-il pas sur notre imprimante de caisse ?', a: "Le plus souvent parce que l'application parle à l'imprimante comme à une page, ou pas du tout : une imprimante de tickets attend une suite de commandes, texte, images, coupe, par Bluetooth, USB ou réseau, et elle n'a pas de police arabe. On construit le rendu en commandes, l'arabe en image, une file locale sur la caisse, et on teste sur chaque modèle réellement présent dans les magasins, pas sur celui du bureau." },
        { q: 'Pourquoi la facture PDF affiche-t-elle des carrés à la place de l’arabe ?', a: "Parce que la police arabe n'était pas embarquée dans le fichier : le PDF pointait vers une police du serveur, et la machine du client ne l'a pas. Une facture produite en PDF/A embarque toutes ses polices, les deux écritures comprises, et s'ouvre telle quelle dans dix ans sur n'importe quelle machine ; c'est la norme d'archivage, et c'est ce que nous produisons par défaut." },
        { q: 'Comment garantir une numérotation sans trou ?', a: "Le numéro est posé par le serveur au moment où l'événement émet le document, dans une séquence par agence et par an, une seule fois ; il n'est jamais attribué par un clic « imprimer », qui peut être fait deux fois ou annulé. Une annulation produit un document d'annulation numéroté, pas un trou. Le comptable voit la séquence et ses écarts dans la supervision." },
        { q: 'Que se passe-t-il quand on réimprime une facture ?', a: "Le même fichier archivé ressort, avec un filigrane « duplicata », et le journal dit qui l'a demandé et quand. Il n'est jamais régénéré depuis les données, parce que les prix ou l'adresse ont pu changer depuis : la facture est une photographie prise au moment de l'émission, et son empreinte prouve que le fichier n'a pas bougé." },
        { q: 'Le ticket sort-il si le réseau est coupé ?', a: "Oui. La vente est enregistrée sur la caisse, le ticket est rendu en commandes et entre dans une file locale sur la caisse elle-même, l'imprimante le prend quand elle est prête, par Bluetooth ou USB ; rien ne passe par le serveur. La synchronisation se fait au retour du réseau, et le numéro de ticket reste unique parce que la caisse a sa propre séquence." },
        { q: 'Combien de temps pour mettre en place les documents ?', a: "Six semaines : une pour l'inventaire et la numérotation avec le comptable, une pour le moteur PDF et la facture, une pour les tickets sur les imprimantes réelles, une pour les bons, étiquettes et devis, une pour l'archive, la réimpression et l'envoi, une pour la recette sur place. La première semaine se passe sans un document généré, parce que ses décisions ne se changent plus ensuite." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Une facture n'est pas imprimée, elle est émise : un événement la déclenche, un numéro lui est posé une fois, ses données sont figées, et le fichier envoyé est le fichier archivé." },
      { after: 5, text: "Le texte latin part en texte, l'arabe part en image, et le même ticket se réimprime à l'identique depuis la file locale, même sans réseau." },
    ],
    cta: { eyebrow: 'Envoyez-nous une photo de votre imprimante de caisse et une de vos factures', title: "Commerçant ou gérant en Algérie, fondateur en France : nous construisons les documents de votre application, factures PDF bilingues archivables, tickets qui sortent sur votre imprimante, étiquettes et relevés, numérotés sans trou", body: "Symloop construit et reprend des applications en production pour les entreprises en Algérie et les fondateurs installés en France : émission par événement, séquences de numérotation sans trou, instantané figé, gabarits bilingues versionnés avec polices embarquées, PDF/A avec empreinte et archive verrouillée, réimpression en duplicata journalisée, tickets thermiques en flux de commandes avec arabe en image et file locale, étiquettes, bons signés sur le téléphone, lots de fin de mois, recette sur chaque imprimante présente. Code et gabarits dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.caisse, kind: '2027', name: 'La caisse : QR, carte, TPE et rapprochement' },
      { href: L.bilingue, kind: '2027', name: 'Une application en arabe et en français' },
      { href: L.offline, kind: '2027', name: 'Application hors ligne et synchronisation' },
      { href: L.sauvegarde, kind: '2027', name: 'Si le serveur meurt demain : sauvegardes et reprise' },
    ] },
  },
  en: {
    kind: 'Documents · Printing · PDF · Receipts · 2027', title: 'Printing invoices, receipts and labels from your application in Algeria in 2027: bilingual PDF, thermal printer, numbering and archives, what gets built',
    dek: '“The app is beautiful, but the receipt won’t come out of the till printer, the PDF invoice shows boxes instead of Arabic, and the accountant says the number is not the one we sent them.” Documents are the part of an application the outside world sees: the customer, the accountant, the courier, the inspector. This guide describes what gets built so that they are right: a number set once in a gapless sequence, a frozen snapshot of the data, versioned templates with both scripts, archivable PDFs with embedded fonts and a fingerprint, receipts that come out of the thermal printer that is there, even without network, and a reprint that regenerates nothing and is visible.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Documents', 'Printing', 'PDF', 'Receipts', 'Algeria 2027'],
    intro: [
      '**Short answer.** A document is not a view you print, it is an **issued object**: an event triggers it, a **number** is set once in a **gapless** sequence per branch and per year, its data is **frozen** at that instant, a **versioned template** renders it, and the produced file is **archived with its fingerprint**; a reprint brings out the same file, marked duplicate. Three rendering engines for one source: **PDF/A** with embedded fonts for what must be readable in ten years, the **thermal command stream** for 80 or 58 mm receipts where Latin text goes as text and **Arabic as an image**, and the **label printer** language for barcode labels. The receipt waits in a **local queue** and comes out even without network; the invoice goes by WhatsApp and e-mail and sleeps in versioned storage. Six weeks, the first without a single document generated.',
      'This guide is for the shopkeeper whose till must print in two seconds, the manager whose accountant demands consecutive numbers, and the founder settled in France who receives the invoice by WhatsApp and must be able to reopen it in five years. It does not repeat how the till takes payment, described in [the point-of-sale guide](' + L.caisse + '), nor how the interface speaks both languages, described in [the bilingual application guide](' + L.bilingue + '); it describes what is built between the data and the paper, and extends [our page on software engineering](' + L.service + ').',
    ],
    sections: [
      { heading: 'What the references say', body: [
        'A PDF that must be read in ten years has a standard, and it is precise. PDF/A, defined by ISO 19005, is the version of the format “specialized for use in the archiving and long-term preservation of electronic documents”: “all fonts must be embedded”, “encryption is forbidden”, “external content references are forbidden”, scripts too, and standards-based metadata is required. It comes in several parts, PDF/A-1 to PDF/A-4, and conformance levels, including level b for faithful visual reproduction and level u which adds that all text has a Unicode mapping. What this imposes: an invoice issued as PDF/A-2b or 2u with its two-script fonts embedded will open as is in ten years, on a machine that never had those fonts; an ordinary PDF invoice pointing to a server font will show boxes.',
        'Till printers speak a textual command language, not a page language. Epson’s ESC/POS command set is described as “a variant for controlling receipt printers as commonly used at the point of sale”, and “many current thermal receipt printers still continue to use the ESC/POS command set”; all Epson receipt printers support it. What this imposes, and we say it as an observation on the machines we meet in shops: most understand this command set, but almost none has an Arabic font or Arabic letter shaping; Latin text therefore goes as text, forty-eight characters per line on 80 mm, and Arabic lines go as images, rendered by the application with its own font.',
        'What we did not find: a public statistic on till printers installed in Algeria, or on the share of invoices exchanged as PDF; what we see is 80 mm thermal printers over Bluetooth or USB, 50 by 30 mm label printers in warehouses, and PDF invoices sent by WhatsApp in most cases, and we say so as an observation. Invoice content and numbering rules depend on your accountant; this guide describes the mechanics that hold them, not the rules themselves.',
      ] },
      { heading: 'An application’s documents, in five layers', body: [
        'Before the invoice, the five layers, and the one that avoids the two most frequent failures.',
      ], visual: 'couches', after: [
        '**Document data**: a snapshot frozen at issue time, lines, prices, addresses, rates, and the number set in a gapless sequence; the document is a photograph, not a view on data that moves, and a price changed tomorrow does not change yesterday’s invoice. **Templates**: one per document, bilingual or per language, versioned in the repository with fonts covering both scripts; every document says which version produced it, and this layer is what avoids the different PDF on every click and the Arabic version in boxes. **Rendering**: three engines for one source, PDF/A for what is kept, the command stream for receipts, the label language for label printers.',
        '**Output**: local printing through a queue, WhatsApp and e-mail sending through the channels described in [the notifications guide](' + L.notif + '), download, and versioned archive with fingerprint; the file sent is the file archived, and a reprint regenerates nothing. **Supervision**: the print queue and its errors, printers present per site, reprints and by whom, month-end batches, numbering gaps; the accountant reads the numbers, the manager reads the reprints, per the rights described in [the roles guide](' + L.roles + ').',
      ] },
      { heading: 'One invoice, from validated order to archived PDF', body: [
        'The invoice is not understood on a template but on its path, in seven stations.',
      ], visual: 'facture', after: [
        '**The order is validated**: an event, payment confirmed per [the payment guide](' + L.paiement + ') or delivery, triggers the invoice; never a “print” click, because a click can be made twice. **The number is assigned**: SET-2027-000418, one sequence per branch and per year, gapless, set once and never reused; it is the line the accountant checks first. **The snapshot is frozen**: lines, prices, addresses, rates at that instant, copied into the document and never reread from the catalogue. **Template v3, bilingual**, renders it, with its two-script fonts, and the invoice carries the template version number.',
        '**The PDF/A** is produced with embedded fonts, and its fingerprint is computed before any sending; ten years later the same file opens and the same fingerprint proves it has not changed. **It is sent and archived**: WhatsApp and e-mail to the customer, versioned and locked storage per [the backups guide](' + L.sauvegarde + '); the invoice sent and the invoice archived are the same file. **The reprint** brings out that file with a “duplicate” watermark, and the log says who asked for it and when; it is never regenerated, because an invoice regenerated from data that moved is no longer the same invoice. Numbers and amounts are a constructed example.',
      ] },
      { heading: 'Six documents, and the output each one demands', body: [
        'Six documents we build on almost every project, and for each what it must be and how it comes out.',
      ], visual: 'documents', after: [
        '**The invoice**: bilingual, gaplessly numbered, frozen, readable in ten years; PDF/A with fingerprint, sent by WhatsApp and e-mail, archived, reprinted as duplicate. **The receipt**: it comes out in two seconds, with or without network, on the till printer; thermal command stream, Arabic as image, local queue, QR to the invoice, drawer if cash. **The delivery note**: signed by the customer at the door with the parcel photo; PDF generated on the courier’s phone, signature and photo embedded, timestamped, synced when network returns per [the synchronisation guide](' + L.offline + '); it is the proof of [the delivery platform](' + L.livraison + ').',
        '**The label**: stuck on the parcel or the shelf, read by a scanner, 50 by 30 mm; the label printer’s language, barcode or QR, short text in both scripts, batch of labels per preparation. **The quote**: dated, with a validity and versions; one PDF per version, v1 v2 v3 kept, acceptance recorded, and the accepted quote becomes the invoice’s base. **The monthly statement**: one document per customer, generated in a batch on the night of the first, PDF/A per customer, grouped sending, batch errors read in the morning supervision; it is the document [the B2B portal](' + L.portail + ') sends to every retailer.',
      ] },
      { heading: 'The receipt, from till to printer', body: [
        'The receipt is the simplest document and the one that blocks the most tills; six steps get it out.',
      ], visual: 'etapes', after: [
        '**The sale is validated**: the receipt is created in the database with its number, even without network, because the till works offline. **It is rendered as commands**: Latin text as text, Arabic lines as image, QR code, cut order. **It enters the local queue**: a queue on the till itself, not on the server; the printer takes it when ready, a paper jam does not lose the sale, and the next receipt waits behind. **It goes to the printer**: Bluetooth, USB or network, and the printer status is read before sending, paper, cover, error.',
        '**Cut and drawer**: the cut comes after the QR, never before the last line, and the drawer opens only if payment is in cash, because a drawer that opens on every receipt is a drawer nobody watches any more. **The status is written**: printed, failed, reprinted and by whom; visible in supervision, so the manager knows how many receipts were reprinted this month and why. The choice between a native and a web application to talk to the printer over Bluetooth is described in [the dedicated guide](' + L.pwa + '): the printer is one of the criteria that impose native.',
      ] },
      { heading: 'The 80 mm receipt, as the printer receives it', body: [
        'What the printer receives is not a page: it is a sequence of commands and images, and each has a reason.',
      ], visual: 'ticket', after: [
        '**Initialise** the printer on every receipt, to start from a known state whatever the previous receipt. **Centre, bold, double size** for the shop name and the total: Latin text goes as text, because the printer has the font and holds forty-eight columns on 80 mm, thirty-two on 58. **Send Arabic lines as an image**: most printers have neither an Arabic font nor letter shaping, and an Arabic line sent as text comes out as unknown characters or disconnected letters; the application therefore renders it with its own font, at the right width, and sends it as a monochrome image.',
        '**The QR code** links to the PDF invoice and the loyalty programme; the customer scans it, and the receipt becomes a door to the full document. **The partial cut** comes after the QR, never before the last line, because a cut too early separates the total from the rest. **The drawer opening** is sent only if payment is in cash, and it is logged. The same command stream, replayed from the local queue, produces the same receipt identically, even without network; that is what allows reprinting without regeneration.',
      ] },
      { heading: 'Seen elsewhere: the archiving standard and the printer command set, and what transposes', body: [
        'Two sources say the essentials. The PDF/A standard says an archivable document embeds its fonts, has no encryption, external reference or script, and carries standard metadata; what transposes is that the invoice is produced as PDF/A with both scripts embedded, and its fingerprint computed before sending. Epson’s command set says how you talk to a receipt printer, in text, images and cut orders; what transposes is that the receipt is a replayable command sequence from a local queue, and that Arabic goes as an image because the printer cannot write it.',
        'What these sources do not say: which documents your company issues, who reads them, in which language, and how your accountant wants them numbered; the project’s first week answers that, and the accountant signs the list with the manager.',
      ] },
      { heading: 'The rules of a document you can issue without fear', body: [
        'Six rules, written in week one. **A document is issued by an event**, never by a click. **The number is set once**, in a gapless sequence per branch and per year. **Data is frozen** at issue; the document never rereads the catalogue. **The template is versioned** with its two-script fonts, and the document says which version produced it. **The file sent is the file archived**, with its fingerprint; a reprint is a marked duplicate. **The receipt comes out without network**, from a local queue, on the printer that is there.',
        'A seventh rule concerns the quote: “PDF invoice generation and receipt printing” is not a requirement, it is a sentence; the requirement reads “list of documents with reader and language; issue by event; gapless numbering sequences per branch and per year; frozen snapshot; versioned bilingual templates with embedded fonts; PDF/A with fingerprint for kept documents; versioned and locked archive; logged duplicate reprint; receipts as thermal command stream with Arabic as image, local queue, test on every printer present; labels in the label printer’s language; supervised month-end batches”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote that writes “PDF export” has planned a button, not a document.',
      ] },
      { heading: 'Six companies, and the document that mattered', body: [
        'Six companies we often equip, and for each the document that decided the architecture.',
      ], list: [
        '**Retail**, described in [the point-of-sale guide](' + L.caisse + '). The 80 mm receipt in two seconds, with or without network, on the three different printers of the three shops; the local queue settled what the server could not.',
        '**The wholesaler and its portal**, described in [the dedicated guide](' + L.portail + '). The monthly statement per retailer, generated in a batch on the night of the first, bilingual, sent by WhatsApp; three hundred PDF/A every month without a hand.',
        '**The delivery platform**, described in [the dedicated guide](' + L.livraison + '). The delivery note signed on the courier’s phone with the parcel photo, generated offline and synced at the depot; the proof the customer demands.',
        '**Field sales**, described in [the dedicated guide](' + L.prevente + '). The order form printed at the customer’s on a 58 mm Bluetooth printer, thirty-two columns, Arabic as image.',
        '**The property developer**, described in [the dedicated guide](' + L.promoteur + '). Buyers’ deposit receipts as bilingual PDF/A, numbered, archived ten years and locked; the document a buyer in France will reopen in 2036.',
        '**The company migrating**, described in [the migration guide](' + L.migrer + '). The list of documents printed every day by the old software is the first inventory of week one; the new one produces them all before the switch-over, and the accountant compares the numbers.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of an application’s documents delivered in six weeks, the first without a single document generated.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** takes the inventory and writes the numbering: the list of documents, who reads them, in which language; sequences per branch and per year; templates signed by the manager and the accountant, because those decisions cannot change once the first invoice is issued. **Week 1 to 2** builds the PDF engine and the invoice: frozen snapshot, versioned bilingual template, embedded fonts, PDF/A, fingerprint, and the first invoice reviewed by the accountant. **Week 2 to 3** handles receipts: rendering as commands, Arabic as image, local queue, and a test on every printer actually present in the shops, not the office one.',
        '**Week 3 to 4** handles notes, labels and quotes: signature and photo on the phone, label printers, versions. **Week 4 to 5** installs the versioned archive, the marked reprint, WhatsApp and e-mail sending, and the month-end batch. **Week 5 to 6** is on-site acceptance: every printer, every document, both languages, and the accountant validating the numbers; it is the acceptance [the delivery guide](' + L.livrer + ') describes, done in front of the machines. When the application must also send its documents to accounting, [the integration guide](' + L.integrer + ') takes over.',
      ] },
      { heading: 'What makes an application’s documents fail', body: [
        'The documents we take over almost always failed for one of these reasons.',
      ], list: [
        '**The PDF regenerated on every click.** The price changed meanwhile; the customer’s invoice and the accountant’s no longer say the same thing.',
        '**The number set at print time.** Two clicks, two numbers; a cancelled click, a gap.',
        '**The font not embedded.** Boxes instead of Arabic on the customer’s machine.',
        '**Arabic sent as text to the printer.** Unknown characters or disconnected letters on the receipt.',
        '**The receipt waiting for the server.** The network drops, the till blocks, the queue at the counter grows.',
        '**Tested on the office printer.** The three shops have three models, and two do not cut in the same place.',
        '**The invisible reprint.** The same receipt printed five times, and nobody knows why.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from shopkeepers, managers and accountants.',
      ], faq: [
        { q: 'Why does the receipt not come out of our till printer?', a: 'Most often because the application talks to the printer as to a page, or not at all: a receipt printer expects a sequence of commands, text, images, cut, over Bluetooth, USB or network, and it has no Arabic font. We build the rendering as commands, Arabic as image, a local queue on the till, and we test on every model actually present in the shops, not the office one.' },
        { q: 'Why does the PDF invoice show boxes instead of Arabic?', a: 'Because the Arabic font was not embedded in the file: the PDF pointed to a server font, and the customer’s machine does not have it. An invoice produced as PDF/A embeds all its fonts, both scripts included, and opens as is in ten years on any machine; it is the archiving standard, and what we produce by default.' },
        { q: 'How do you guarantee gapless numbering?', a: 'The number is set by the server at the moment the event issues the document, in a sequence per branch and per year, once; it is never assigned by a “print” click, which can be made twice or cancelled. A cancellation produces a numbered cancellation document, not a gap. The accountant sees the sequence and its gaps in supervision.' },
        { q: 'What happens when an invoice is reprinted?', a: 'The same archived file comes out, with a “duplicate” watermark, and the log says who asked and when. It is never regenerated from the data, because prices or the address may have changed since: the invoice is a photograph taken at issue time, and its fingerprint proves the file has not moved.' },
        { q: 'Does the receipt come out if the network is down?', a: 'Yes. The sale is recorded on the till, the receipt is rendered as commands and enters a local queue on the till itself, the printer takes it when ready, over Bluetooth or USB; nothing goes through the server. Synchronisation happens when the network returns, and the receipt number stays unique because the till has its own sequence.' },
        { q: 'How long to set up the documents?', a: 'Six weeks: one for the inventory and numbering with the accountant, one for the PDF engine and the invoice, one for receipts on the real printers, one for notes, labels and quotes, one for the archive, reprint and sending, one for on-site acceptance. The first week passes without a document generated, because its decisions cannot change afterwards.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'An invoice is not printed, it is issued: an event triggers it, a number is set once, its data is frozen, and the file sent is the file archived.' },
      { after: 5, text: 'Latin text goes as text, Arabic goes as an image, and the same receipt reprints identically from the local queue, even without network.' },
    ],
    cta: { eyebrow: 'Send us a photo of your till printer and one of your invoices', title: 'Shopkeeper or manager in Algeria, founder in France: we build your application’s documents, archivable bilingual PDF invoices, receipts that come out of your printer, labels and statements, gaplessly numbered', body: 'Symloop builds and takes over applications in production for companies in Algeria and founders settled in France: issue by event, gapless numbering sequences, frozen snapshot, versioned bilingual templates with embedded fonts, PDF/A with fingerprint and locked archive, logged duplicate reprint, thermal receipts as command stream with Arabic as image and local queue, labels, notes signed on the phone, month-end batches, acceptance on every printer present. Code and templates in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.caisse, kind: '2027', name: 'Point of sale: QR, card, terminal and reconciliation' },
      { href: L.bilingue, kind: '2027', name: 'An application in Arabic and French' },
      { href: L.offline, kind: '2027', name: 'Offline application and synchronisation' },
      { href: L.sauvegarde, kind: '2027', name: 'If the server dies tomorrow: backups and recovery' },
    ] },
  },
  ar: {
    kind: 'وثائق · طباعة · PDF · تذاكر · 2027', title: 'طباعة الفواتير والتذاكر والبطاقات من تطبيقكم في الجزائر سنة 2027: PDF بلغتين، طابعة حرارية، ترقيم وأرشيف، ما يُبنى',
    dek: '«التطبيق جميل، لكن التذكرة لا تخرج من طابعة الصندوق، وفاتورة PDF تعرض مربعات بدل العربية، والمحاسب يقول إن الرقم ليس الذي أُرسل إليه.» الوثائق هي الجزء من التطبيق الذي يراه العالم الخارجي: الزبون والمحاسب والموصّل والمراقب. يصف هذا الدليل ما يُبنى كي تكون صحيحة: رقم يوضع مرة في تسلسل بلا فجوة، لقطة مجمَّدة للبيانات، قوالب مرقَّمة بالكتابتين، ملفات PDF قابلة للأرشفة بخطوط مضمَّنة وبصمة، تذاكر تخرج من الطابعة الحرارية الموجودة حتى بلا شبكة، وإعادة طباعة لا تولّد شيئاً وتُرى.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['وثائق', 'طباعة', 'PDF', 'تذاكر الصندوق', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** الوثيقة ليست عرضاً نطبعه بل **كائن يُصدَر**: حدث يطلقه، **رقم** يوضع له مرة في تسلسل **بلا فجوة** لكل وكالة وسنة، بياناته **تُجمَّد** في تلك اللحظة، **قالب مرقَّم** يعرضه، والملف الناتج **يُؤرشَف ببصمته**؛ وإعادة الطباعة تُخرج الملف نفسه موسوماً نسخة. ثلاثة محركات عرض لمصدر واحد: **PDF/A** بخطوط مضمَّنة لما يجب أن يُقرأ بعد عشر سنوات، و**تدفق الأوامر الحراري** لتذاكر 80 أو 58 مم حيث يذهب النص اللاتيني نصاً و**العربية صورة**، ولغة **طابعات البطاقات** لبطاقات الباركود. التذكرة تنتظر في **طابور محلي** وتخرج حتى بلا شبكة؛ والفاتورة تذهب بـ WhatsApp والبريد وتنام في تخزين مرقَّم. ستة أسابيع، الأول بلا وثيقة واحدة مولَّدة.',
      'هذا الدليل موجّه إلى التاجر الذي يجب أن يطبع صندوقه في ثانيتين، وإلى المسيّر الذي يطالب محاسبه بأرقام متتالية، وإلى المؤسس المقيم في فرنسا الذي يتلقى الفاتورة بـ WhatsApp ويجب أن يستطيع فتحها بعد خمس سنوات. لا يعيد كيف يحصّل الصندوق، الموصوف في [دليل الصندوق](' + L.caisse + ')، ولا كيف تتكلم الواجهة اللغتين، الموصوف في [دليل التطبيق ثنائي اللغة](' + L.bilingue + ')؛ بل يصف ما يُبنى بين البيانات والورق، ويمدّ [صفحتنا عن هندسة البرمجيات](' + L.service + ').',
    ],
    sections: [
      { heading: 'ما تقوله المراجع', body: [
        'لملف PDF يجب أن يُقرأ بعد عشر سنوات معيار، وهو دقيق. PDF/A، المعرَّف بمعيار ISO 19005، هو نسخة الصيغة «المتخصصة في الأرشفة والحفظ طويل الأمد للوثائق الإلكترونية»: «يجب تضمين كل الخطوط»، و«التشفير ممنوع»، و«الإحالات إلى محتوى خارجي ممنوعة»، والسكريبتات كذلك، وبيانات وصفية معيارية مطلوبة. ويوجد في أجزاء، من PDF/A-1 إلى PDF/A-4، ومستويات مطابقة، منها المستوى b لإعادة الإنتاج البصري الأمين والمستوى u الذي يضيف أن لكل نص مقابلاً في يونيكود. وما يفرضه ذلك: فاتورة مُصدَرة PDF/A-2b أو 2u بخطوطها ذات الكتابتين مضمَّنة ستُفتح كما هي بعد عشر سنوات على آلة لم تملك تلك الخطوط قط؛ وفاتورة PDF عادية تشير إلى خط على الخادم ستعرض مربعات.',
        'وطابعات الصناديق تتكلم لغة أوامر نصية لا لغة صفحات. مجموعة أوامر ESC/POS من Epson تُوصف بأنها «صيغة للتحكم في طابعات التذاكر المستعملة عادة في نقطة البيع»، و«كثير من الطابعات الحرارية الحالية ما زالت تستعملها»؛ وكل طابعات تذاكر Epson تدعمها. وما يفرضه ذلك، ونقوله ملاحظةً عن الآلات التي نصادفها في المتاجر: معظمها يفهم هذه المجموعة، لكن لا يكاد أي منها يملك خطاً عربياً أو تشكيل الحروف العربية؛ فيذهب النص اللاتيني نصاً، ثمانية وأربعين حرفاً في السطر على 80 مم، وتذهب الأسطر العربية صوراً يعرضها التطبيق بخطه الخاص.',
        'وما لم نجده: إحصاء علني لطابعات الصناديق المثبَّتة في الجزائر، ولا لحصة الفواتير المتبادلة PDF؛ وما نراه طابعات حرارية 80 مم بالبلوتوث أو USB، وطابعات بطاقات 50 في 30 مم في المستودعات، وفواتير PDF تُرسل بـ WhatsApp في معظم الحالات، ونقولها ملاحظةً. وقواعد محتوى الفواتير وترقيمها تتوقف على محاسبكم؛ وهذا الدليل يصف الآلية التي تحملها لا القواعد نفسها.',
      ] },
      { heading: 'وثائق التطبيق، في خمس طبقات', body: [
        'قبل الفاتورة، الطبقات الخمس، والطبقة التي تتجنب أكثر عطلين تكراراً.',
      ], visual: 'couches', after: [
        '**بيانات الوثيقة**: لقطة مجمَّدة لحظة الإصدار، أسطر وأسعار وعناوين ونسب، والرقم موضوع في تسلسل بلا فجوة؛ الوثيقة صورة فوتوغرافية لا نظرة على بيانات تتحرك، وسعر يتغير غداً لا يغيّر فاتورة الأمس. **القوالب**: واحد لكل وثيقة، بلغتين أو لكل لغة، مرقَّم في المستودع بخطوط تغطي الكتابتين؛ كل وثيقة تقول أي نسخة أنتجتها، وهذه الطبقة هي التي تتجنب PDF المختلف عند كل نقرة والنسخة العربية بالمربعات. **العرض**: ثلاثة محركات لمصدر واحد، PDF/A لما يُحفظ، تدفق الأوامر للتذاكر، لغة البطاقات لطابعاتها.',
        '**الإخراج**: طباعة محلية عبر طابور، إرسال WhatsApp وبريد عبر القنوات الموصوفة في [دليل الإشعارات](' + L.notif + ')، تنزيل، وأرشيف مرقَّم ببصمة؛ الملف المرسَل هو الملف المؤرشَف، وإعادة الطباعة لا تولّد شيئاً. **الإشراف**: طابور الطباعة وأخطاؤه، الطابعات الموجودة لكل موقع، إعادات الطباعة ومن قام بها، دفعات نهاية الشهر، فجوات الترقيم؛ المحاسب يقرأ الأرقام والمسيّر يقرأ إعادات الطباعة وفق الحقوق الموصوفة في [دليل الأدوار](' + L.roles + ').',
      ] },
      { heading: 'فاتورة واحدة، من الطلبية المصادَق عليها إلى PDF المؤرشَف', body: [
        'الفاتورة لا تُفهم على قالب بل على مسارها، في سبع محطات.',
      ], visual: 'facture', after: [
        '**الطلبية مصادَق عليها**: حدث، دفع مؤكَّد وفق [دليل الدفع](' + L.paiement + ') أو تسليم، يطلق الفاتورة؛ لا نقرة «طباعة» أبداً، لأن النقرة يمكن أن تُفعل مرتين. **الرقم مخصَّص**: SET-2027-000418، تسلسل لكل وكالة وسنة، بلا فجوة، يوضع مرة ولا يُعاد استعماله؛ وهو السطر الذي يتحقق منه المحاسب أولاً. **اللقطة مجمَّدة**: أسطر وأسعار وعناوين ونسب في تلك اللحظة، تُنسخ في الوثيقة ولا تُقرأ من الكتالوج بعدها أبداً. **القالب v3 بلغتين** يعرضها بخطوطه ذات الكتابتين، وتحمل الفاتورة رقم نسخة القالب.',
        '**PDF/A** يُنتَج بخطوط مضمَّنة، وتُحسب بصمته قبل أي إرسال؛ وبعد عشر سنوات يُفتح الملف نفسه وتثبت البصمة نفسها أنه لم يتغير. **تُرسل وتُؤرشَف**: WhatsApp وبريد إلى الزبون، تخزين مرقَّم ومقفل وفق [دليل النسخ الاحتياطية](' + L.sauvegarde + ')؛ الفاتورة المرسَلة والفاتورة المؤرشَفة هما الملف نفسه. **إعادة الطباعة** تُخرج ذلك الملف بعلامة مائية «نسخة»، ويقول السجل من طلبها ومتى؛ ولا تُولَّد من جديد أبداً، لأن فاتورة مولَّدة من بيانات تحركت ليست الفاتورة نفسها. والأرقام والمبالغ مثال مبني.',
      ] },
      { heading: 'ست وثائق، والإخراج الذي تطلبه كل منها', body: [
        'ست وثائق نبنيها في كل المشاريع تقريباً، ولكل منها ما يجب أن تكونه وكيف تخرج.',
      ], visual: 'documents', after: [
        '**الفاتورة**: بلغتين، مرقَّمة بلا فجوة، مجمَّدة، قابلة للقراءة بعد عشر سنوات؛ PDF/A ببصمة، تُرسل بـ WhatsApp والبريد، تُؤرشَف، تُعاد طباعتها نسخةً. **تذكرة الصندوق**: تخرج في ثانيتين، بشبكة أو بدونها، على طابعة الصندوق؛ تدفق أوامر حراري، عربية صورة، طابور محلي، QR إلى الفاتورة، درج إن نقداً. **وصل التسليم**: يوقّعه الزبون عند الباب مع صورة الطرد؛ PDF يُولَّد على هاتف الموصّل، توقيع وصورة مضمَّنان، مؤرَّخ، يُزامَن عند عودة الشبكة وفق [دليل المزامنة](' + L.offline + ')؛ وهو إثبات [منصة التوصيل](' + L.livraison + ').',
        '**البطاقة**: تُلصق على الطرد أو الرف، يقرؤها ماسح، 50 في 30 مم؛ لغة طابعة البطاقات، باركود أو QR، نص قصير بكتابتين، دفعة بطاقات لكل تحضير. **عرض السعر**: مؤرَّخ بصلاحية ونسخ؛ PDF لكل نسخة، v1 v2 v3 محفوظة، قبول مسجَّل، والعرض المقبول يصير أساس الفاتورة. **الكشف الشهري**: وثيقة لكل زبون تُولَّد دفعةً ليلة أول الشهر، PDF/A لكل زبون، إرسال مجمَّع، أخطاء الدفعة تُقرأ في إشراف الصباح؛ وهي الوثيقة التي ترسلها [بوابة B2B](' + L.portail + ') إلى كل تاجر تجزئة.',
      ] },
      { heading: 'التذكرة، من الصندوق إلى الطابعة', body: [
        'التذكرة أبسط الوثائق وأكثرها إيقافاً للصناديق؛ ست خطوات تُخرجها.',
      ], visual: 'etapes', after: [
        '**البيع مصادَق عليه**: تُنشأ التذكرة في القاعدة برقمها، حتى بلا شبكة، لأن الصندوق يعمل دون اتصال. **تُعرض في أوامر**: نص لاتيني نصاً، أسطر عربية صورة، رمز QR، أمر قص. **تدخل الطابور المحلي**: طابور على الصندوق نفسه لا على الخادم؛ تأخذها الطابعة حين تكون جاهزة، وورقة عالقة لا تُضيع البيع، والتذكرة التالية تنتظر خلفها. **تذهب إلى الطابعة**: بلوتوث أو USB أو شبكة، وحالة الطابعة تُقرأ قبل الإرسال، ورق وغطاء وخطأ.',
        '**قص ودرج**: القص بعد الـ QR لا قبل السطر الأخير أبداً، والدرج لا يُفتح إلا إن كان الدفع نقداً، لأن درجاً يُفتح عند كل تذكرة درج لم يعد أحد يراقبه. **الحالة تُكتب**: مطبوعة، فشلت، أُعيدت طباعتها ومن؛ مرئية في الإشراف كي يعرف المسيّر كم تذكرة أُعيدت طباعتها هذا الشهر ولماذا. والاختيار بين تطبيق أصلي وتطبيق ويب لمخاطبة الطابعة بالبلوتوث موصوف في [الدليل المخصص](' + L.pwa + '): الطابعة أحد المعايير التي تفرض الأصلي.',
      ] },
      { heading: 'تذكرة 80 مم، كما تستلمها الطابعة', body: [
        'ما تستلمه الطابعة ليس صفحة: بل سلسلة أوامر وصور، ولكل منها سبب.',
      ], visual: 'ticket', after: [
        '**تهيئة** الطابعة عند كل تذكرة، للانطلاق من حالة معروفة مهما كانت التذكرة السابقة. **توسيط وتعريض ومضاعفة الحجم** لاسم المتجر والمجموع: النص اللاتيني يذهب نصاً لأن الطابعة تملك الخط وتتسع لثمانية وأربعين عموداً على 80 مم واثنين وثلاثين على 58. **إرسال الأسطر العربية صورة**: معظم الطابعات لا تملك خطاً عربياً ولا تشكيل الحروف، وسطر عربي مُرسَل نصاً يخرج بحروف مجهولة أو منفصلة؛ فيعرضه التطبيق بخطه الخاص بالعرض الصحيح ويرسله صورة أحادية اللون.',
        '**رمز QR** يحيل إلى فاتورة PDF وبرنامج الولاء؛ يمسحه الزبون وتصير التذكرة باباً إلى الوثيقة الكاملة. **القص الجزئي** يأتي بعد الـ QR لا قبل السطر الأخير أبداً، لأن قصاً مبكراً يفصل المجموع عن الباقي. **فتح الدرج** لا يُرسل إلا إن كان الدفع نقداً، ويُسجَّل. وتدفق الأوامر نفسه، مُعاداً من الطابور المحلي، ينتج التذكرة نفسها بالتطابق حتى بلا شبكة؛ وهذا ما يتيح إعادة الطباعة دون إعادة توليد.',
      ] },
      { heading: 'رأيناه في مكان آخر: معيار الأرشفة ومجموعة أوامر الطابعات، وما ينتقل', body: [
        'مصدران يقولان الجوهر. يقول معيار PDF/A إن الوثيقة القابلة للأرشفة تضمّن خطوطها ولا تشفير فيها ولا إحالة خارجية ولا سكريبت وتحمل بيانات وصفية معيارية؛ وما ينتقل هو أن الفاتورة تُنتَج PDF/A بالكتابتين مضمَّنتين وتُحسب بصمتها قبل الإرسال. وتقول مجموعة أوامر Epson كيف نخاطب طابعة تذاكر نصاً وصوراً وأوامر قص؛ وما ينتقل هو أن التذكرة سلسلة أوامر قابلة للإعادة من طابور محلي، وأن العربية تذهب صورة لأن الطابعة لا تعرف كتابتها.',
        'وما لا تقوله هذه المصادر: أي الوثائق تُصدر شركتكم، ومن يقرؤها، وبأي لغة، وكيف يريد محاسبكم ترقيمها؛ الأسبوع الأول من المشروع يجيب، والمحاسب يوقّع القائمة مع المسيّر.',
      ] },
      { heading: 'قواعد وثيقة يمكن إصدارها بلا خوف', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **الوثيقة يُصدرها حدث** لا نقرة أبداً. **الرقم يوضع مرة** في تسلسل بلا فجوة لكل وكالة وسنة. **البيانات تُجمَّد** عند الإصدار؛ ولا تعيد الوثيقة قراءة الكتالوج أبداً. **القالب مرقَّم** بخطوطه ذات الكتابتين، والوثيقة تقول أي نسخة أنتجتها. **الملف المرسَل هو الملف المؤرشَف** ببصمته؛ وإعادة الطباعة نسخة موسومة. **التذكرة تخرج بلا شبكة** من طابور محلي على الطابعة الموجودة.',
        'قاعدة سابعة تخص عرض السعر: «توليد فواتير PDF وطباعة التذاكر» ليس متطلباً بل جملة؛ المتطلب يُكتب «قائمة الوثائق بقارئها ولغتها؛ إصدار بحدث؛ تسلسلات ترقيم لكل وكالة وسنة بلا فجوة؛ لقطة مجمَّدة؛ قوالب مرقَّمة بلغتين بخطوط مضمَّنة؛ PDF/A ببصمة للوثائق المحفوظة؛ أرشيف مرقَّم ومقفل؛ إعادة طباعة نسخةً مسجَّلة؛ تذاكر بتدفق أوامر حراري بعربية صورة وطابور محلي واختبار على كل طابعة موجودة؛ بطاقات بلغة طابعة البطاقات؛ دفعات نهاية الشهر مُشرَف عليها»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يكتب «تصدير PDF» خطط لزر لا لوثيقة.',
      ] },
      { heading: 'ست شركات، والوثيقة التي كانت الأهم', body: [
        'ست شركات نجهّزها كثيراً، ولكل منها الوثيقة التي قررت الهندسة.',
      ], list: [
        '**تجارة التجزئة**، الموصوفة في [دليل الصندوق](' + L.caisse + '). تذكرة 80 مم في ثانيتين، بشبكة أو بدونها، على الطابعات الثلاث المختلفة في المتاجر الثلاثة؛ الطابور المحلي حسم ما لم يستطعه الخادم.',
        '**تاجر الجملة وبوابته**، الموصوفان في [الدليل المخصص](' + L.portail + '). الكشف الشهري لكل تاجر تجزئة، يُولَّد دفعةً ليلة أول الشهر، بلغتين، يُرسل بـ WhatsApp؛ ثلاثمئة PDF/A كل شهر بلا يد.',
        '**منصة التوصيل**، الموصوفة في [الدليل المخصص](' + L.livraison + '). وصل التسليم الموقَّع على هاتف الموصّل مع صورة الطرد، يُولَّد دون اتصال ويُزامَن في المستودع؛ الإثبات الذي يطالب به الزبون.',
        '**المندوبون الميدانيون**، الموصوفون في [الدليل المخصص](' + L.prevente + '). سند الطلبية يُطبع عند الزبون على طابعة بلوتوث 58 مم، اثنان وثلاثون عموداً، عربية صورة.',
        '**المرقّي العقاري**، الموصوف في [الدليل المخصص](' + L.promoteur + '). وصولات تسبيقات المقتنين PDF/A بلغتين، مرقَّمة، مؤرشَفة عشر سنوات ومقفلة؛ الوثيقة التي سيفتحها مقتنٍ في فرنسا سنة 2036.',
        '**الشركة التي تهاجر**، الموصوفة في [دليل الهجرة](' + L.migrer + '). قائمة الوثائق التي يطبعها البرنامج القديم كل يوم هي أول جرد في الأسبوع الأول؛ ينتجها الجديد كلها قبل التحويل، ويقارن المحاسب الأرقام.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم وثائق تطبيق تُسلَّم في ستة أسابيع، الأول بلا وثيقة واحدة مولَّدة.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يجري الجرد ويكتب الترقيم: قائمة الوثائق، من يقرؤها، بأي لغة؛ التسلسلات لكل وكالة وسنة؛ القوالب يوقّعها المسيّر والمحاسب، لأن هذه القرارات لا تتغير بعد إصدار أول فاتورة. **الأسبوع 1 إلى 2** يبني محرك PDF والفاتورة: لقطة مجمَّدة، قالب بلغتين مرقَّم، خطوط مضمَّنة، PDF/A، بصمة، وأول فاتورة يراجعها المحاسب. **الأسبوع 2 إلى 3** يعالج التذاكر: عرض في أوامر، عربية صورة، طابور محلي، واختبار على كل طابعة موجودة فعلاً في المتاجر لا طابعة المكتب.',
        '**الأسبوع 3 إلى 4** يعالج الوصولات والبطاقات وعروض الأسعار: توقيع وصورة على الهاتف، طابعات بطاقات، نسخ. **الأسبوع 4 إلى 5** يثبّت الأرشيف المرقَّم وإعادة الطباعة الموسومة والإرسال بـ WhatsApp والبريد ودفعة نهاية الشهر. **الأسبوع 5 إلى 6** هو القبول في الموقع: كل طابعة، كل وثيقة، اللغتان، والمحاسب يصادق على الأرقام؛ وهو القبول الذي يصفه [دليل التسليم](' + L.livrer + ')، أمام الآلات. وحين يجب أن يرسل التطبيق وثائقه إلى المحاسبة أيضاً، يتولى [دليل الدمج](' + L.integrer + ').',
      ] },
      { heading: 'ما يُفشل وثائق تطبيق', body: [
        'الوثائق التي نستلمها فشلت دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**PDF يُعاد توليده عند كل نقرة.** تغيّر السعر في الأثناء؛ فاتورة الزبون وفاتورة المحاسب لم تعودا تقولان الشيء نفسه.',
        '**الرقم يوضع عند الطباعة.** نقرتان، رقمان؛ نقرة ملغاة، فجوة.',
        '**الخط غير مضمَّن.** مربعات بدل العربية على آلة الزبون.',
        '**العربية تُرسل نصاً إلى الطابعة.** حروف مجهولة أو منفصلة على التذكرة.',
        '**التذكرة تنتظر الخادم.** تسقط الشبكة، يتوقف الصندوق، يكبر الطابور عند الكاونتر.',
        '**مختبَر على طابعة المكتب.** للمتاجر الثلاثة ثلاثة طرازات، واثنان لا يقصان في المكان نفسه.',
        '**إعادة الطباعة الخفية.** التذكرة نفسها طُبعت خمس مرات، ولا أحد يعرف لماذا.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من تجار ومسيّرين ومحاسبين.',
      ], faq: [
        { q: 'لماذا لا تخرج التذكرة من طابعة صندوقنا؟', a: 'غالباً لأن التطبيق يخاطب الطابعة كصفحة، أو لا يخاطبها أصلاً: طابعة التذاكر تنتظر سلسلة أوامر، نصاً وصوراً وقصاً، بالبلوتوث أو USB أو الشبكة، ولا تملك خطاً عربياً. نبني العرض في أوامر، والعربية صورة، وطابوراً محلياً على الصندوق، ونختبر على كل طراز موجود فعلاً في المتاجر لا طراز المكتب.' },
        { q: 'لماذا تعرض فاتورة PDF مربعات بدل العربية؟', a: 'لأن الخط العربي لم يكن مضمَّناً في الملف: كان PDF يشير إلى خط على الخادم، وآلة الزبون لا تملكه. والفاتورة المُنتَجة PDF/A تضمّن كل خطوطها بالكتابتين، وتُفتح كما هي بعد عشر سنوات على أي آلة؛ وهو معيار الأرشفة، وما ننتجه افتراضياً.' },
        { q: 'كيف نضمن ترقيماً بلا فجوة؟', a: 'يضع الخادم الرقم لحظة يُصدر الحدث الوثيقة، في تسلسل لكل وكالة وسنة، مرة واحدة؛ ولا يُخصَّص أبداً بنقرة «طباعة» يمكن أن تُفعل مرتين أو تُلغى. والإلغاء ينتج وثيقة إلغاء مرقَّمة لا فجوة. ويرى المحاسب التسلسل وفجواته في الإشراف.' },
        { q: 'ماذا يحدث عند إعادة طباعة فاتورة؟', a: 'يخرج الملف المؤرشَف نفسه بعلامة مائية «نسخة»، ويقول السجل من طلبه ومتى. ولا يُولَّد من البيانات من جديد أبداً، لأن الأسعار أو العنوان ربما تغيّرا منذ ذلك: الفاتورة صورة فوتوغرافية أُخذت لحظة الإصدار، وبصمتها تثبت أن الملف لم يتحرك.' },
        { q: 'هل تخرج التذكرة إن انقطعت الشبكة؟', a: 'نعم. يُسجَّل البيع على الصندوق، وتُعرض التذكرة في أوامر وتدخل طابوراً محلياً على الصندوق نفسه، وتأخذها الطابعة حين تكون جاهزة بالبلوتوث أو USB؛ لا شيء يمر بالخادم. وتتم المزامنة عند عودة الشبكة، ويبقى رقم التذكرة فريداً لأن للصندوق تسلسله الخاص.' },
        { q: 'كم من الوقت لوضع الوثائق؟', a: 'ستة أسابيع: واحد للجرد والترقيم مع المحاسب، واحد لمحرك PDF والفاتورة، واحد للتذاكر على الطابعات الحقيقية، واحد للوصولات والبطاقات وعروض الأسعار، واحد للأرشيف وإعادة الطباعة والإرسال، واحد للقبول في الموقع. ويمر الأسبوع الأول بلا وثيقة مولَّدة، لأن قراراته لا تتغير بعد ذلك.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'الفاتورة لا تُطبع بل تُصدَر: حدث يطلقها، ورقم يوضع لها مرة، وبياناتها تُجمَّد، والملف المرسَل هو الملف المؤرشَف.' },
      { after: 5, text: 'النص اللاتيني يذهب نصاً، والعربية تذهب صورة، والتذكرة نفسها تُعاد طباعتها بالتطابق من الطابور المحلي، حتى بلا شبكة.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا صورة طابعة صندوقكم وإحدى فواتيركم', title: 'تاجر أو مسيّر في الجزائر، مؤسس في فرنسا: نبني وثائق تطبيقكم، فواتير PDF بلغتين قابلة للأرشفة، تذاكر تخرج من طابعتكم، بطاقات وكشوفاً، مرقَّمة بلا فجوة', body: 'تبني Symloop وتستلم تطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: إصدار بحدث، تسلسلات ترقيم بلا فجوة، لقطة مجمَّدة، قوالب بلغتين مرقَّمة بخطوط مضمَّنة، PDF/A ببصمة وأرشيف مقفل، إعادة طباعة نسخةً مسجَّلة، تذاكر حرارية بتدفق أوامر بعربية صورة وطابور محلي، بطاقات، وصولات موقَّعة على الهاتف، دفعات نهاية الشهر، قبول على كل طابعة موجودة. الكود والقوالب في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.caisse, kind: '2027', name: 'الصندوق: QR، البطاقة، الجهاز والمطابقة' },
      { href: L.bilingue, kind: '2027', name: 'تطبيق بالعربية والفرنسية' },
      { href: L.offline, kind: '2027', name: 'تطبيق دون اتصال والمزامنة' },
      { href: L.sauvegarde, kind: '2027', name: 'إن مات الخادم غداً: النسخ الاحتياطية والاستئناف' },
    ] },
  },
};

const KEYWORDS = "imprimer facture depuis application algérie 2027, générer facture pdf bilingue arabe français, ticket de caisse imprimante thermique application, imprimante bluetooth 80 mm application mobile, esc/pos arabe image ticket, numérotation factures sans trou application, pdf/a archivage factures, réimpression duplicata facture, étiquettes code-barres application entrepôt, bon de livraison signé sur téléphone, print invoices receipts labels from app algeria 2027, thermal receipt printer arabic bitmap, طباعة الفواتير من التطبيق الجزائر, تذكرة الصندوق طابعة حرارية";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
