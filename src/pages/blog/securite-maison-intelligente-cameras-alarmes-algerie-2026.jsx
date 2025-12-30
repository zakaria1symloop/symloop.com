"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User, Shield, Camera,
  Lock, Bell, Eye, AlertTriangle, Smartphone, Wifi,
  CheckCircle, Home, DollarSign, Star, Package,
  Video, Mic, Volume2, Radio, Fingerprint, Key,
  Sun, Moon, MapPin, Siren, BatteryCharging, Cloud,
  UserCheck, Users, Settings, Zap, Globe, Phone, Rocket
} from "lucide-react";

export default function SecuriteMaisonIntelligenteCamerasAlarmesAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Sécurité Maison Intelligente en Algérie 2026 : Caméras, Alarmes & Contrôle d'Accès Symloop",
      subtitle: "Systèmes de Sécurité Fabriqués en Algérie - Surveillance 24/7, Données Locales, Prix Imbattables",
      metaTitle: "Sécurité Maison Algérie 2026 | Caméras Alarmes Symloop | Fabrication Locale",
      metaDesc: "Système de sécurité maison 100% algérien par Symloop. Caméras Full HD, alarmes connectées, serrures intelligentes. Données stockées en Algérie, support local 7j/7. Protégez votre maison avec des produits nationaux.",
      date: "29 Décembre 2025",
      readTime: "15 min",
      author: "Symloop Team",
      category: "Sécurité Smart Home",

      intro: "La sécurité de votre maison ne devrait pas dépendre de produits importés coûteux dont les données transitent par des serveurs étrangers. Symloop a développé une gamme complète de solutions de sécurité intelligente, fabriquées en Algérie, avec stockage des données sur nos serveurs locaux. Caméras Full HD, alarmes connectées, serrures intelligentes - protégez votre famille et vos biens avec des équipements nationaux de qualité.",

      whySymloopSecurity: {
        title: "Pourquoi la Sécurité Symloop ?",
        subtitle: "L'Avantage de la Solution de Sécurité 100% Algérienne",
        advantages: [
          {
            icon: "Shield",
            title: "Données en Algérie",
            description: "Vos enregistrements vidéo restent sur nos serveurs algériens. Pas de transfert vers la Chine ou les USA. Votre vie privée est protégée."
          },
          {
            icon: "Package",
            title: "Fabrication Locale",
            description: "Caméras et capteurs assemblés en Algérie. SAV rapide, pièces disponibles, pas d'attente pour l'importation."
          },
          {
            icon: "DollarSign",
            title: "60% Moins Cher",
            description: "Sans frais d'importation ni douane, nos produits sont 60% moins chers que Ring, Arlo ou Eufy importés."
          },
          {
            icon: "Wifi",
            title: "Fonctionne Sans Internet",
            description: "Stockage local sur carte SD + hub avec batterie. Votre sécurité continue même pendant les coupures."
          },
          {
            icon: "Phone",
            title: "Support 7j/7 Local",
            description: "Assistance en français et arabe. Nos techniciens connaissent vos besoins et peuvent intervenir rapidement."
          },
          {
            icon: "BatteryCharging",
            title: "Autonomie Coupures",
            description: "Hub avec batterie 8h, caméras avec batteries de secours. La surveillance continue 24/7."
          }
        ]
      },

      tableOfContents: {
        title: "Dans cet article",
        items: [
          "Les menaces de sécurité en Algérie",
          "Notre gamme de produits sécurité",
          "Caméras Symloop : caractéristiques",
          "Système d'alarme connecté",
          "Serrures et contrôle d'accès",
          "L'application Symloop Security",
          "Packs sécurité et tarifs",
          "Installation sans perçage",
          "Témoignages clients",
          "FAQ sécurité"
        ]
      },

      section1: {
        title: "Les Menaces de Sécurité en Algérie",
        intro: "Pourquoi investir dans un système de sécurité intelligent ?",
        threats: [
          {
            title: "Cambriolages en Hausse",
            description: "Les statistiques montrent une augmentation des cambriolages, particulièrement pendant les vacances d'été et les fêtes. Une maison sans surveillance est une cible facile.",
            solution: "Caméras avec détection IA + alertes instantanées"
          },
          {
            title: "Absences Prolongées",
            description: "Beaucoup de familles algériennes voyagent à l'étranger ou dans d'autres wilayas pour les vacances. Qui surveille la maison ?",
            solution: "Surveillance 24/7 depuis votre smartphone"
          },
          {
            title: "Personnel de Maison",
            description: "Femme de ménage, gardien, ouvriers... Comment s'assurer que tout se passe bien en votre absence ?",
            solution: "Caméras intérieures + historique des accès"
          },
          {
            title: "Enfants Seuls",
            description: "Les enfants rentrent de l'école avant les parents. Sont-ils bien arrivés ? Qui est venu à la maison ?",
            solution: "Alertes arrivée + interphone vidéo"
          },
          {
            title: "Coupures d'Électricité",
            description: "Les coupures fréquentes désactivent les systèmes de sécurité classiques. Les voleurs le savent.",
            solution: "Batteries de secours + 4G backup"
          },
          {
            title: "Voisinage",
            description: "Dans certains quartiers, la tranquillité n'est pas garantie. Intrusions, vandalisme, véhicules suspects.",
            solution: "Caméras extérieures + vision nocturne"
          }
        ],
        stats: [
          { value: "67%", label: "Des cambriolages ont lieu le jour" },
          { value: "3 min", label: "Temps moyen d'un cambriolage" },
          { value: "85%", label: "Des voleurs évitent maisons surveillées" },
          { value: "24/7", label: "Surveillance Symloop" }
        ]
      },

      section2: {
        title: "Notre Gamme de Produits Sécurité",
        intro: "Équipements de sécurité conçus et fabriqués en Algérie :",
        products: [
          {
            name: "Caméra Symloop CAM-360 Indoor",
            icon: "Camera",
            description: "Caméra intérieure rotative Full HD avec vision nocturne et audio bidirectionnel.",
            features: [
              "Résolution 1080p Full HD",
              "Rotation 360° motorisée",
              "Vision nocturne 10m",
              "Audio bidirectionnel",
              "Détection mouvement IA",
              "Stockage cloud Algérie + SD"
            ],
          },
          {
            name: "Caméra Symloop CAM-EXT Outdoor",
            icon: "Eye",
            description: "Caméra extérieure étanche IP66 avec projecteur LED et sirène intégrée.",
            features: [
              "Résolution 2K (2560x1440)",
              "Étanche IP66",
              "Projecteur 800 lumens",
              "Sirène 110dB intégrée",
              "Vision nocturne couleur",
              "Détection personne/véhicule"
            ],
          },
          {
            name: "Sonnette Vidéo Symloop DOOR-V1",
            icon: "Video",
            description: "Voyez et parlez avec vos visiteurs depuis votre smartphone, où que vous soyez.",
            features: [
              "Caméra HD grand angle 160°",
              "Audio bidirectionnel",
              "Détection de présence",
              "Vision nocturne",
              "Alimentation batterie ou filaire",
              "Pré-enregistrement 5s"
            ],
          },
          {
            name: "Capteur Porte/Fenêtre",
            icon: "Lock",
            description: "Soyez alerté instantanément quand une porte ou fenêtre s'ouvre.",
            features: [
              "Batterie 2 ans",
              "Installation adhésive",
              "Historique complet",
              "Ultra compact",
              "Intégration alarme"
            ],
          },
          {
            name: "Détecteur de Mouvement PIR",
            icon: "Eye",
            description: "Détection infrarouge avec distinction humain/animal.",
            features: [
              "Angle 120°, portée 12m",
              "Anti-fausse alarme (animaux)",
              "Batterie 18 mois",
              "Mode jour/nuit",
              "Sensibilité réglable"
            ],
          },
          {
            name: "Sirène Intérieure 110dB",
            icon: "Volume2",
            description: "Sirène puissante pour dissuader les intrus et alerter le voisinage.",
            features: [
              "110 décibels",
              "Flash stroboscopique",
              "Batterie de secours",
              "Plusieurs sons",
              "Activation à distance"
            ],
          },
          {
            name: "Serrure Connectée Symloop LOCK-S1",
            icon: "Key",
            description: "Ouvrez votre porte avec code, empreinte, badge ou smartphone.",
            features: [
              "4 modes : code/empreinte/badge/app",
              "100 empreintes, 50 codes",
              "Historique des accès",
              "Alertes intrusion",
              "Batterie 1 an",
              "Clé de secours incluse"
            ],
          },
          {
            name: "Hub Sécurité Symloop PRO",
            icon: "Radio",
            description: "Le cerveau de votre système de sécurité avec batterie et 4G backup.",
            features: [
              "Connecte jusqu'à 64 appareils",
              "Batterie 8h de secours",
              "Backup 4G (carte SIM)",
              "Sirène intégrée 85dB",
              "Protocole Symloop Mesh",
              "Stockage local crypté"
            ],
          }
        ]
      },

      section3: {
        title: "Caméras Symloop : Fonctionnalités Avancées",
        intro: "Nos caméras ne se contentent pas de filmer. Elles analysent, alertent et protègent.",
        features: [
          {
            name: "Détection IA Intelligente",
            description: "Nos caméras distinguent les personnes, les véhicules et les animaux. Plus d'alertes inutiles pour un chat qui passe ou une feuille qui tombe.",
            icon: "Eye"
          },
          {
            name: "Vision Nocturne Couleur",
            description: "Grâce au projecteur intégré (caméra extérieure), voyez en couleur même la nuit. Identifiez les visages et les vêtements.",
            icon: "Moon"
          },
          {
            name: "Audio Bidirectionnel",
            description: "Parlez à travers la caméra. Accueillez un livreur, prévenez un intrus, ou rassurez vos enfants depuis votre bureau.",
            icon: "Mic"
          },
          {
            name: "Zones de Détection Personnalisées",
            description: "Définissez exactement où détecter les mouvements. Ignorez la rue publique, concentrez-vous sur votre entrée.",
            icon: "MapPin"
          },
          {
            name: "Stockage Hybride",
            description: "Cloud sécurisé en Algérie + carte SD locale. Même si internet coupe, l'enregistrement continue sur la carte.",
            icon: "Cloud"
          },
          {
            name: "Partage Familial",
            description: "Donnez accès aux membres de la famille. Chacun peut surveiller depuis son téléphone avec ses propres identifiants.",
            icon: "Users"
          }
        ],
        comparison: {
          title: "Symloop vs Caméras Importées",
          headers: ["Caractéristique", "Symloop", "Importé (Ring/Arlo)"],
          rows: [
            ["Fabrication", "100% Algérie", "Chine / Taïwan"],
            ["Stockage cloud", "Serveurs Algérie", "USA / Chine"],
            ["Abonnement cloud", "Inclus avec pack", "Payant annuellement"],
            ["Support technique", "Local 7j/7", "Email anglais"],
            ["Délai SAV", "24-48h", "2-4 semaines (import)"],
            ["Fonctionne hors ligne", "Oui (SD + hub)", "Limité"],
            ["Application", "FR/AR locale", "Anglais uniquement"]
          ]
        }
      },

      section4: {
        title: "Système d'Alarme Connecté Symloop",
        intro: "Un système d'alarme complet qui vous protège 24h/24 :",
        components: [
          {
            name: "Armement/Désarmement",
            description: "Activez ou désactivez l'alarme via l'app, un code, un badge, ou automatiquement selon votre position GPS.",
            modes: ["Mode Absent (tout actif)", "Mode Nuit (périmètre seul)", "Mode Présent (désactivé)"]
          },
          {
            name: "Détection Multi-Niveaux",
            description: "Capteurs de porte/fenêtre en première ligne, détecteurs de mouvement à l'intérieur, caméras pour confirmation visuelle.",
            modes: ["Détection périmétrique", "Détection volumétrique", "Vérification vidéo"]
          },
          {
            name: "Alertes Instantanées",
            description: "Notification push en moins de 3 secondes. Photo ou vidéo de l'événement jointe. Appel automatique optionnel.",
            modes: ["Push notification", "SMS backup", "Appel vocal"]
          },
          {
            name: "Réponse Automatique",
            description: "L'alarme déclenche la sirène, allume les lumières, enregistre en vidéo, et vous alerte simultanément.",
            modes: ["Sirène 110dB", "Lumières stroboscopiques", "Enregistrement vidéo"]
          }
        ],
        scenarios: [
          {
            title: "Scénario : Tentative d'Intrusion",
            steps: [
              "22h15 - Quelqu'un tente d'ouvrir une fenêtre",
              "Capteur fenêtre détecte l'ouverture",
              "Hub vérifie : alarme activée (mode Absent)",
              "Sirène se déclenche immédiatement",
              "Caméra la plus proche commence à enregistrer",
              "Vous recevez notification + vidéo en 3 secondes",
              "L'intrus fuit, la vidéo est sauvegardée comme preuve"
            ]
          }
        ]
      },

      section5: {
        title: "Serrures et Contrôle d'Accès",
        intro: "Qui entre chez vous, et quand ? Gardez le contrôle total.",
        features: [
          {
            name: "Ouverture Multiple",
            description: "Code numérique, empreinte digitale, badge NFC, ou smartphone. Choisissez ce qui vous convient.",
            icon: "Fingerprint"
          },
          {
            name: "Codes Temporaires",
            description: "Donnez un code à la femme de ménage valable uniquement le mardi de 9h à 12h. Le code expire automatiquement.",
            icon: "Clock"
          },
          {
            name: "Historique Complet",
            description: "Qui a ouvert la porte, à quelle heure, avec quel moyen. Historique consultable sur 6 mois.",
            icon: "UserCheck"
          },
          {
            name: "Alertes Personnalisées",
            description: "Recevez une alerte quand les enfants rentrent de l'école, ou si quelqu'un essaie un mauvais code.",
            icon: "Bell"
          },
          {
            name: "Verrouillage Auto",
            description: "La porte se verrouille automatiquement après 30 secondes si vous oubliez. Plus jamais de 'ai-je fermé ?'",
            icon: "Lock"
          },
          {
            name: "Mode Vacances",
            description: "Désactivez tous les codes sauf le vôtre pendant vos vacances. Sécurité maximale.",
            icon: "Sun"
          }
        ],
        useCases: [
          {
            title: "Famille avec Enfants",
            scenario: "Les enfants ont chacun leur code. Vous recevez une notification quand ils rentrent. Plus besoin de clé (qu'ils perdent tout le temps)."
          },
          {
            title: "Location Airbnb",
            scenario: "Créez un code pour chaque locataire, valable uniquement pendant leur séjour. Le code expire automatiquement au check-out."
          },
          {
            title: "Personnel de Maison",
            scenario: "La femme de ménage a un code valable le mardi 9h-13h. Vous voyez exactement quand elle arrive et part."
          }
        ]
      },

      section6: {
        title: "L'Application Symloop Security",
        intro: "Tout votre système de sécurité dans votre poche :",
        features: [
          {
            name: "Tableau de Bord",
            description: "Vue d'ensemble de tous vos appareils. Statut en temps réel. Alertes récentes.",
            icon: "Home"
          },
          {
            name: "Live View",
            description: "Regardez vos caméras en direct. Zoom, rotation, capture d'écran en un tap.",
            icon: "Video"
          },
          {
            name: "Timeline Vidéo",
            description: "Remontez dans le temps. Trouvez exactement ce qui s'est passé avec la frise chronologique.",
            icon: "Clock"
          },
          {
            name: "Alertes Intelligentes",
            description: "Filtrez par type : personne, véhicule, mouvement. Ne recevez que ce qui vous intéresse.",
            icon: "Bell"
          },
          {
            name: "Contrôle Alarme",
            description: "Armez/désarmez d'un swipe. Changez de mode. Vérifiez l'historique.",
            icon: "Shield"
          },
          {
            name: "Gestion Accès",
            description: "Créez des codes, gérez les empreintes, consultez qui est entré.",
            icon: "Key"
          },
          {
            name: "Partage Famille",
            description: "Invitez les membres de la famille. Définissez leurs permissions.",
            icon: "Users"
          },
          {
            name: "Mode Widget",
            description: "Widgets pour votre écran d'accueil. Armement en un tap sans ouvrir l'app.",
            icon: "Smartphone"
          }
        ],
        platforms: ["Android 8+", "iOS 13+", "Web app"]
      },

      section7: {
        title: "Packs Sécurité Symloop 2026",
        intro: "Solutions complètes adaptées à vos besoins. Fabrication 100% locale !",
        packs: [
          {
            name: "Pack Essentiel",
            includes: [
              "1 Hub Sécurité Symloop",
              "2 Caméras CAM-360 Indoor",
              "3 Capteurs porte/fenêtre",
              "1 Détecteur de mouvement",
              "Application Symloop Security",
              "Stockage cloud 1 an"
            ],
            ideal: "Appartement F2-F3"
          },
          {
            name: "Pack Famille",
            includes: [
              "1 Hub Sécurité Symloop PRO",
              "2 Caméras CAM-360 Indoor",
              "1 Caméra CAM-EXT Outdoor",
              "1 Sonnette Vidéo DOOR-V1",
              "6 Capteurs porte/fenêtre",
              "2 Détecteurs de mouvement",
              "1 Sirène intérieure",
              "Stockage cloud 2 ans"
            ],
            ideal: "Appartement F4+ ou petite maison"
          },
          {
            name: "Pack Villa",
            includes: [
              "1 Hub Sécurité Symloop PRO",
              "2 Caméras CAM-360 Indoor",
              "3 Caméras CAM-EXT Outdoor",
              "1 Sonnette Vidéo DOOR-V1",
              "10 Capteurs porte/fenêtre",
              "4 Détecteurs de mouvement",
              "2 Sirènes (int + ext)",
              "1 Serrure connectée LOCK-S1",
              "Stockage cloud 3 ans + 4G backup"
            ],
            ideal: "Villa ou grande maison"
          },
          {
            name: "Pack Commerce",
            includes: [
              "1 Hub Sécurité PRO + 4G",
              "4 Caméras CAM-EXT Outdoor",
              "1 Caméra CAM-360 Indoor",
              "Capteurs portes (jusqu'à 5)",
              "2 Détecteurs de mouvement",
              "Sirène extérieure",
              "Stockage cloud illimité 1 an"
            ],
            ideal: "Magasin, entrepôt, bureau"
          }
        ],
        note: "Installation DIY facile ou installation professionnelle disponible. Tous les packs incluent la garantie 2 ans et le support 7j/7. Contactez-nous pour un devis."
      },

      section8: {
        title: "Installation Sans Perçage",
        intro: "La plupart de nos équipements s'installent sans aucun outil :",
        steps: [
          {
            step: "1",
            title: "Téléchargez l'App",
            description: "Installez Symloop Security, créez votre compte.",
            duration: "2 min"
          },
          {
            step: "2",
            title: "Configurez le Hub",
            description: "Branchez le hub, connectez-le au Wi-Fi via l'app.",
            duration: "5 min"
          },
          {
            step: "3",
            title: "Ajoutez les Appareils",
            description: "Scannez le QR code de chaque appareil. Il s'ajoute automatiquement.",
            duration: "1 min/appareil"
          },
          {
            step: "4",
            title: "Positionnez",
            description: "Caméras magnétiques, capteurs adhésifs. Repositionnez autant que nécessaire.",
            duration: "Variable"
          },
          {
            step: "5",
            title: "Testez",
            description: "L'app vous guide pour tester chaque capteur et caméra.",
            duration: "10 min"
          }
        ],
        noTools: [
          "Caméras avec support magnétique ou adhésif",
          "Capteurs 100% adhésifs (3M haute qualité)",
          "Sonnette compatible cadre de porte existant",
          "Hub posé ou fixé sans perçage"
        ],
        professionalNote: "Seule la serrure connectée nécessite généralement une installation professionnelle (adaptation à votre porte). Nous pouvons vous recommander un installateur agréé dans votre wilaya."
      },

      section9: {
        title: "Témoignages Clients Sécurité",
        testimonials: [
          {
            name: "Mohamed A.",
            location: "Alger, El Biar",
            text: "On a failli se faire cambrioler pendant les vacances. La sirène s'est déclenchée, j'ai reçu la vidéo sur mon téléphone en 3 secondes. Le temps que j'appelle le voisin, le voleur avait déjà fui. Les caméras Symloop ont sauvé notre maison.",
            rating: 5,
            products: "Pack Villa"
          },
          {
            name: "Fatima Z.",
            location: "Oran",
            text: "Avec 3 enfants qui rentrent à des heures différentes, la serrure connectée est une bénédiction. Je reçois une notif quand chacun rentre. Plus de clés perdues, plus d'inquiétude. Et les codes temporaires pour la femme de ménage, c'est génial.",
            rating: 5,
            products: "Serrure LOCK-S1 + Caméras"
          },
          {
            name: "Karim B.",
            location: "Constantine",
            text: "Je gère une boutique. Avant j'avais des caméras chinoises bas de gamme qui plantaient tout le temps. Avec Symloop, la qualité est top, et surtout le support est local. Quand j'ai eu un problème, un technicien m'a rappelé en 10 minutes.",
            rating: 5,
            products: "Pack Commerce"
          },
          {
            name: "Amina L.",
            location: "Blida",
            text: "Ce que j'apprécie le plus c'est que mes vidéos restent en Algérie. Avec les caméras importées, mes données allaient en Chine, ça me mettait mal à l'aise. Symloop c'est la sécurité ET la confidentialité.",
            rating: 5,
            products: "Pack Famille"
          }
        ]
      },

      section10: {
        title: "FAQ Sécurité",
        questions: [
          {
            q: "Mes vidéos sont-elles vraiment stockées en Algérie ?",
            a: "Oui, 100% de vos enregistrements sont stockés sur nos serveurs situés physiquement en Algérie. Nous ne transférons jamais vos données à l'étranger. C'est un engagement fondamental de Symloop. Vous pouvez aussi opter pour un stockage 100% local sur carte SD dans chaque caméra."
          },
          {
            q: "Que se passe-t-il en cas de coupure d'électricité ?",
            a: "Le Hub Sécurité PRO a une batterie de 8 heures. Il continue à recevoir les alertes des capteurs et peut déclencher la sirène. Les caméras s'arrêtent sans courant, mais si vous avez une batterie externe ou un onduleur, elles continuent. Le hub peut aussi utiliser une carte SIM 4G si internet coupe."
          },
          {
            q: "Les caméras fonctionnent-elles sans internet ?",
            a: "Oui, partiellement. Les caméras enregistrent sur carte SD même sans internet. Vous perdez l'accès à distance et les alertes push, mais l'enregistrement local continue. Dès que le réseau revient, tout se synchronise."
          },
          {
            q: "Comment fonctionne le stockage cloud ?",
            a: "Le stockage cloud est inclus avec les packs (1 à 3 ans selon le pack). Les vidéos sont conservées 30 jours par défaut. Vous pouvez télécharger ou sauvegarder définitivement les clips importants. Contactez-nous pour les options de renouvellement."
          },
          {
            q: "Puis-je voir mes caméras depuis l'étranger ?",
            a: "Absolument. L'application fonctionne partout dans le monde. Beaucoup de nos clients surveillent leur maison en Algérie depuis la France, le Canada ou les pays du Golfe. La connexion est sécurisée et cryptée."
          },
          {
            q: "La serrure est-elle compatible avec ma porte ?",
            a: "Notre serrure LOCK-S1 est compatible avec 90% des portes standards en Algérie. Avant l'achat, envoyez-nous une photo de votre serrure actuelle, nous confirmerons la compatibilité. Une adaptation peut être nécessaire (incluse dans l'installation pro)."
          },
          {
            q: "Combien de temps dure la batterie des capteurs ?",
            a: "Les capteurs porte/fenêtre durent environ 2 ans. Les détecteurs de mouvement 18 mois. L'app vous alerte quand la batterie est faible. Les batteries sont des CR2032 standard, faciles à trouver."
          },
          {
            q: "Y a-t-il des frais mensuels ?",
            a: "Non pour l'utilisation de base. L'application et le contrôle local sont gratuits à vie. Le stockage cloud est inclus 1-3 ans selon le pack, puis renouvellement optionnel. Pas de frais cachés."
          },
          {
            q: "Puis-je ajouter des caméras plus tard ?",
            a: "Oui, le système est totalement modulaire. Vous pouvez ajouter des caméras, capteurs ou autres appareils à tout moment. Le hub supporte jusqu'à 64 appareils."
          },
          {
            q: "Comment fonctionne le SAV ?",
            a: "Garantie 2 ans sur tous les produits. En cas de problème : 1) Support WhatsApp/téléphone immédiat 2) Diagnostic à distance via l'app 3) Si nécessaire, remplacement ou réparation à notre centre d'Alger, Oran ou Constantine. Délai moyen : 48h."
          }
        ]
      },

      cta: {
        title: "Protégez Votre Maison avec Symloop",
        subtitle: "Sécurité 100% algérienne - Données locales - Support 7j/7",
        benefits: [
          "Équipements fabriqués en Algérie",
          "Stockage vidéo sur serveurs algériens",
          "60% moins cher que l'importation",
          "Garantie 2 ans + Support local"
        ],
        button: "Commander un Pack Sécurité",
        buttonSecondary: "Demander une Consultation Gratuite",
        contact: "Besoin de conseils ? WhatsApp : +213 XX XX XX XX"
      }
    },
    ar: {
      title: "أمان المنزل الذكي في الجزائر 2026: كاميرات، أجهزة إنذار ومراقبة الدخول Symloop",
      subtitle: "أنظمة أمان مصنوعة في الجزائر - مراقبة 24/7، بيانات محلية، أسعار لا تُقارن",
      metaTitle: "أمان المنزل الجزائر 2026 | كاميرات إنذار Symloop | صناعة محلية",
      metaDesc: "نظام أمان منزل 100% جزائري من Symloop. كاميرات Full HD، أجهزة إنذار متصلة، أقفال ذكية. البيانات مخزنة في الجزائر، دعم محلي 7/7. احمِ منزلك بمنتجات وطنية.",
      date: "29 ديسمبر 2025",
      readTime: "15 دقيقة",
      author: "فريق Symloop",
      category: "أمان المنزل الذكي",

      intro: "أمان منزلك لا يجب أن يعتمد على منتجات مستوردة غالية تمر بياناتها عبر خوادم أجنبية. طورت Symloop مجموعة كاملة من حلول الأمان الذكية، مصنوعة في الجزائر، مع تخزين البيانات على خوادمنا المحلية. كاميرات Full HD، أجهزة إنذار متصلة، أقفال ذكية - احمِ عائلتك وممتلكاتك بمعدات وطنية عالية الجودة.",

      whySymloopSecurity: {
        title: "لماذا أمان Symloop؟",
        subtitle: "ميزة حل الأمان 100% الجزائري",
        advantages: [
          {
            icon: "Shield",
            title: "البيانات في الجزائر",
            description: "تسجيلاتك المرئية تبقى على خوادمنا الجزائرية. لا نقل للصين أو أمريكا. خصوصيتك محمية."
          },
          {
            icon: "Package",
            title: "صناعة محلية",
            description: "كاميرات ومستشعرات مُجمّعة في الجزائر. خدمة ما بعد البيع سريعة، قطع متوفرة، لا انتظار للاستيراد."
          },
          {
            icon: "DollarSign",
            title: "أرخص بـ 60%",
            description: "بدون رسوم استيراد أو جمارك، منتجاتنا أرخص بـ 60% من Ring، Arlo أو Eufy المستوردة."
          },
          {
            icon: "Wifi",
            title: "يعمل بدون إنترنت",
            description: "تخزين محلي على بطاقة SD + محور مع بطارية. أمانك يستمر حتى أثناء انقطاع التيار."
          },
          {
            icon: "Phone",
            title: "دعم 7/7 محلي",
            description: "مساعدة بالفرنسية والعربية. تقنيونا يعرفون احتياجاتك ويمكنهم التدخل بسرعة."
          },
          {
            icon: "BatteryCharging",
            title: "استقلالية الانقطاع",
            description: "محور مع بطارية 8 ساعات، كاميرات مع بطاريات احتياطية. المراقبة تستمر 24/7."
          }
        ]
      },

      tableOfContents: {
        title: "في هذا المقال",
        items: [
          "تهديدات الأمان في الجزائر",
          "مجموعة منتجاتنا الأمنية",
          "كاميرات Symloop: المميزات",
          "نظام الإنذار المتصل",
          "الأقفال ومراقبة الدخول",
          "تطبيق Symloop Security",
          "باقات الأمان والأسعار",
          "تركيب بدون حفر",
          "شهادات العملاء",
          "أسئلة شائعة عن الأمان"
        ]
      },

      section1: {
        title: "تهديدات الأمان في الجزائر",
        intro: "لماذا تستثمر في نظام أمان ذكي؟",
        threats: [
          {
            title: "تزايد السرقات",
            description: "الإحصائيات تُظهر زيادة في السرقات، خاصة أثناء عطل الصيف والأعياد. منزل بدون مراقبة هدف سهل.",
            solution: "كاميرات مع كشف بالذكاء الاصطناعي + تنبيهات فورية"
          },
          {
            title: "الغياب المطول",
            description: "كثير من العائلات الجزائرية تسافر للخارج أو لولايات أخرى في الإجازات. من يراقب المنزل؟",
            solution: "مراقبة 24/7 من هاتفك الذكي"
          },
          {
            title: "عاملات المنزل",
            description: "عاملة النظافة، الحارس، العمال... كيف تتأكد أن كل شيء يسير بشكل جيد في غيابك؟",
            solution: "كاميرات داخلية + سجل الدخول"
          },
          {
            title: "الأطفال وحدهم",
            description: "الأطفال يعودون من المدرسة قبل الوالدين. هل وصلوا بسلام؟ من جاء للمنزل؟",
            solution: "تنبيهات الوصول + انتركم فيديو"
          },
          {
            title: "انقطاع الكهرباء",
            description: "الانقطاعات المتكررة تُعطّل أنظمة الأمان التقليدية. اللصوص يعرفون ذلك.",
            solution: "بطاريات احتياطية + 4G احتياطي"
          },
          {
            title: "الجيران",
            description: "في بعض الأحياء، الهدوء غير مضمون. تسللات، تخريب، مركبات مشبوهة.",
            solution: "كاميرات خارجية + رؤية ليلية"
          }
        ],
        stats: [
          { value: "67%", label: "من السرقات تحدث نهاراً" },
          { value: "3 دق", label: "متوسط وقت السرقة" },
          { value: "85%", label: "من اللصوص يتجنبون المنازل المراقبة" },
          { value: "24/7", label: "مراقبة Symloop" }
        ]
      },

      section2: {
        title: "مجموعة منتجاتنا الأمنية",
        intro: "معدات أمان مصممة ومصنوعة في الجزائر:",
        products: [
          {
            name: "كاميرا Symloop CAM-360 Indoor",
            icon: "Camera",
            description: "كاميرا داخلية دوارة Full HD مع رؤية ليلية وصوت ثنائي الاتجاه.",
            features: [
              "دقة 1080p Full HD",
              "دوران 360° آلي",
              "رؤية ليلية 10م",
              "صوت ثنائي الاتجاه",
              "كشف حركة بالذكاء الاصطناعي",
              "تخزين سحابي جزائر + SD"
            ],
          },
          {
            name: "كاميرا Symloop CAM-EXT Outdoor",
            icon: "Eye",
            description: "كاميرا خارجية مقاومة للماء IP66 مع كشاف LED وصفارة إنذار مدمجة.",
            features: [
              "دقة 2K (2560x1440)",
              "مقاومة للماء IP66",
              "كشاف 800 لومن",
              "صفارة إنذار 110dB مدمجة",
              "رؤية ليلية ملونة",
              "كشف شخص/مركبة"
            ],
          },
          {
            name: "جرس فيديو Symloop DOOR-V1",
            icon: "Video",
            description: "شاهد وتحدث مع زوارك من هاتفك الذكي، أينما كنت.",
            features: [
              "كاميرا HD زاوية واسعة 160°",
              "صوت ثنائي الاتجاه",
              "كشف الوجود",
              "رؤية ليلية",
              "تغذية بطارية أو سلكية",
              "تسجيل مسبق 5 ثوانٍ"
            ],
          },
          {
            name: "مستشعر باب/نافذة",
            icon: "Lock",
            description: "تُنبَّه فوراً عند فتح باب أو نافذة.",
            features: [
              "بطارية سنتين",
              "تركيب لاصق",
              "سجل كامل",
              "مدمج للغاية",
              "تكامل مع الإنذار"
            ],
          },
          {
            name: "كاشف حركة PIR",
            icon: "Eye",
            description: "كشف بالأشعة تحت الحمراء مع تمييز البشر/الحيوانات.",
            features: [
              "زاوية 120°، مدى 12م",
              "مضاد للإنذار الكاذب (حيوانات)",
              "بطارية 18 شهراً",
              "وضع نهار/ليل",
              "حساسية قابلة للتعديل"
            ],
          },
          {
            name: "صفارة داخلية 110dB",
            icon: "Volume2",
            description: "صفارة قوية لردع المتسللين وتنبيه الجيران.",
            features: [
              "110 ديسيبل",
              "فلاش ستروبوسكوبي",
              "بطارية احتياطية",
              "عدة أصوات",
              "تفعيل عن بُعد"
            ],
          },
          {
            name: "قفل متصل Symloop LOCK-S1",
            icon: "Key",
            description: "افتح بابك برمز، بصمة، بطاقة أو هاتف ذكي.",
            features: [
              "4 أوضاع: رمز/بصمة/بطاقة/تطبيق",
              "100 بصمة، 50 رمز",
              "سجل الدخول",
              "تنبيهات اقتحام",
              "بطارية سنة",
              "مفتاح احتياطي مشمول"
            ],
          },
          {
            name: "محور أمان Symloop PRO",
            icon: "Radio",
            description: "عقل نظام الأمان مع بطارية و 4G احتياطي.",
            features: [
              "يربط حتى 64 جهازاً",
              "بطارية احتياطية 8 ساعات",
              "احتياطي 4G (بطاقة SIM)",
              "صفارة مدمجة 85dB",
              "بروتوكول Symloop Mesh",
              "تخزين محلي مشفر"
            ],
          }
        ]
      },

      section3: {
        title: "كاميرات Symloop: ميزات متقدمة",
        intro: "كاميراتنا لا تكتفي بالتصوير. تُحلل، تُنبّه وتحمي.",
        features: [
          {
            name: "كشف ذكي بالذكاء الاصطناعي",
            description: "كاميراتنا تميز الأشخاص والمركبات والحيوانات. لا مزيد من التنبيهات لقط يمر أو ورقة تسقط.",
            icon: "Eye"
          },
          {
            name: "رؤية ليلية ملونة",
            description: "بفضل الكشاف المدمج (كاميرا خارجية)، شاهد بالألوان حتى ليلاً. حدد الوجوه والملابس.",
            icon: "Moon"
          },
          {
            name: "صوت ثنائي الاتجاه",
            description: "تحدث عبر الكاميرا. استقبل مُوصّلاً، حذّر متسللاً، أو طمئن أطفالك من مكتبك.",
            icon: "Mic"
          },
          {
            name: "مناطق كشف مخصصة",
            description: "حدد بالضبط أين تكشف الحركة. تجاهل الشارع العام، ركز على مدخلك.",
            icon: "MapPin"
          },
          {
            name: "تخزين هجين",
            description: "سحابة آمنة في الجزائر + بطاقة SD محلية. حتى لو انقطع الإنترنت، التسجيل يستمر على البطاقة.",
            icon: "Cloud"
          },
          {
            name: "مشاركة عائلية",
            description: "امنح الوصول لأفراد العائلة. كل واحد يمكنه المراقبة من هاتفه بمعرفاته الخاصة.",
            icon: "Users"
          }
        ],
        comparison: {
          title: "Symloop مقابل الكاميرات المستوردة",
          headers: ["الخاصية", "Symloop", "مستورد (Ring/Arlo)"],
          rows: [
            ["التصنيع", "100% جزائر", "الصين / تايوان"],
            ["تخزين سحابي", "خوادم الجزائر", "أمريكا / الصين"],
            ["اشتراك سحابي", "مشمول مع الباقة", "مدفوع سنوياً"],
            ["دعم تقني", "محلي 7/7", "بريد إنجليزي"],
            ["مدة خدمة ما بعد البيع", "24-48 ساعة", "2-4 أسابيع (استيراد)"],
            ["يعمل بدون اتصال", "نعم (SD + محور)", "محدود"],
            ["التطبيق", "FR/AR محلي", "إنجليزي فقط"]
          ]
        }
      },

      section4: {
        title: "نظام إنذار Symloop المتصل",
        intro: "نظام إنذار كامل يحميك 24/24:",
        components: [
          {
            name: "التفعيل/الإلغاء",
            description: "فعّل أو ألغِ الإنذار عبر التطبيق، رمز، بطاقة، أو تلقائياً حسب موقعك GPS.",
            modes: ["وضع غائب (كل شيء مُفعّل)", "وضع ليلي (المحيط فقط)", "وضع حاضر (مُلغى)"]
          },
          {
            name: "كشف متعدد المستويات",
            description: "مستشعرات باب/نافذة كخط أول، كواشف حركة بالداخل، كاميرات للتأكيد المرئي.",
            modes: ["كشف محيطي", "كشف حجمي", "تحقق مرئي"]
          },
          {
            name: "تنبيهات فورية",
            description: "إشعار push في أقل من 3 ثوانٍ. صورة أو فيديو الحدث مرفق. اتصال صوتي تلقائي اختياري.",
            modes: ["إشعار Push", "SMS احتياطي", "اتصال صوتي"]
          },
          {
            name: "استجابة تلقائية",
            description: "الإنذار يُشغّل الصفارة، يُنير الأضواء، يُسجّل فيديو، وينبهك في آن واحد.",
            modes: ["صفارة 110dB", "أضواء ستروبوسكوبية", "تسجيل فيديو"]
          }
        ],
        scenarios: [
          {
            title: "سيناريو: محاولة اقتحام",
            steps: [
              "22:15 - شخص يحاول فتح نافذة",
              "مستشعر النافذة يكتشف الفتح",
              "المحور يتحقق: الإنذار مُفعّل (وضع غائب)",
              "الصفارة تنطلق فوراً",
              "أقرب كاميرا تبدأ التسجيل",
              "تستلم إشعار + فيديو في 3 ثوانٍ",
              "المتسلل يفر، الفيديو محفوظ كدليل"
            ]
          }
        ]
      },

      section5: {
        title: "الأقفال ومراقبة الدخول",
        intro: "من يدخل منزلك، ومتى؟ احتفظ بالتحكم الكامل.",
        features: [
          {
            name: "فتح متعدد",
            description: "رمز رقمي، بصمة، بطاقة NFC، أو هاتف ذكي. اختر ما يناسبك.",
            icon: "Fingerprint"
          },
          {
            name: "رموز مؤقتة",
            description: "أعطِ رمزاً لعاملة النظافة صالح فقط يوم الثلاثاء من 9 إلى 12. الرمز ينتهي تلقائياً.",
            icon: "Clock"
          },
          {
            name: "سجل كامل",
            description: "من فتح الباب، في أي وقت، بأي وسيلة. السجل متاح لـ 6 أشهر.",
            icon: "UserCheck"
          },
          {
            name: "تنبيهات مخصصة",
            description: "استلم تنبيهاً عند عودة الأطفال من المدرسة، أو إذا حاول أحد رمزاً خاطئاً.",
            icon: "Bell"
          },
          {
            name: "قفل تلقائي",
            description: "الباب يُقفل تلقائياً بعد 30 ثانية إذا نسيت. لا مزيد من 'هل أغلقت؟'",
            icon: "Lock"
          },
          {
            name: "وضع العطلة",
            description: "ألغِ جميع الرموز إلا رمزك أثناء عطلتك. أمان أقصى.",
            icon: "Sun"
          }
        ],
        useCases: [
          {
            title: "عائلة مع أطفال",
            scenario: "لكل طفل رمزه. تستلم إشعاراً عند عودتهم. لا حاجة لمفتاح (الذي يضيعونه دائماً)."
          },
          {
            title: "تأجير Airbnb",
            scenario: "أنشئ رمزاً لكل مستأجر، صالح فقط أثناء إقامتهم. الرمز ينتهي تلقائياً عند المغادرة."
          },
          {
            title: "عاملات المنزل",
            scenario: "لعاملة النظافة رمز صالح الثلاثاء 9-13. تشاهد بالضبط متى وصلت وغادرت."
          }
        ]
      },

      section6: {
        title: "تطبيق Symloop Security",
        intro: "كل نظام أمانك في جيبك:",
        features: [
          {
            name: "لوحة التحكم",
            description: "نظرة شاملة على جميع أجهزتك. الحالة في الوقت الفعلي. التنبيهات الأخيرة.",
            icon: "Home"
          },
          {
            name: "مشاهدة مباشرة",
            description: "شاهد كاميراتك مباشرة. تكبير، دوران، لقطة شاشة بضغطة.",
            icon: "Video"
          },
          {
            name: "خط زمني للفيديو",
            description: "ارجع بالزمن. اعثر بالضبط على ما حدث مع الشريط الزمني.",
            icon: "Clock"
          },
          {
            name: "تنبيهات ذكية",
            description: "فلتر حسب النوع: شخص، مركبة، حركة. استلم فقط ما يهمك.",
            icon: "Bell"
          },
          {
            name: "التحكم بالإنذار",
            description: "فعّل/ألغِ بتمريرة. غيّر الوضع. راجع السجل.",
            icon: "Shield"
          },
          {
            name: "إدارة الدخول",
            description: "أنشئ رموزاً، أدر البصمات، شاهد من دخل.",
            icon: "Key"
          },
          {
            name: "مشاركة العائلة",
            description: "ادعُ أفراد العائلة. حدد صلاحياتهم.",
            icon: "Users"
          },
          {
            name: "وضع الـ Widget",
            description: "widgets لشاشتك الرئيسية. تفعيل بضغطة بدون فتح التطبيق.",
            icon: "Smartphone"
          }
        ],
        platforms: ["Android 8+", "iOS 13+", "Web app"]
      },

      section7: {
        title: "باقات أمان Symloop 2026",
        intro: "حلول كاملة تناسب احتياجاتك. صناعة محلية 100%!",
        packs: [
          {
            name: "باقة أساسية",
            includes: [
              "1 محور أمان Symloop",
              "2 كاميرا CAM-360 Indoor",
              "3 مستشعر باب/نافذة",
              "1 كاشف حركة",
              "تطبيق Symloop Security",
              "تخزين سحابي سنة"
            ],
            ideal: "شقة F2-F3"
          },
          {
            name: "باقة العائلة",
            includes: [
              "1 محور أمان Symloop PRO",
              "2 كاميرا CAM-360 Indoor",
              "1 كاميرا CAM-EXT Outdoor",
              "1 جرس فيديو DOOR-V1",
              "6 مستشعر باب/نافذة",
              "2 كاشف حركة",
              "1 صفارة داخلية",
              "تخزين سحابي سنتين"
            ],
            ideal: "شقة F4+ أو منزل صغير"
          },
          {
            name: "باقة الفيلا",
            includes: [
              "1 محور أمان Symloop PRO",
              "2 كاميرا CAM-360 Indoor",
              "3 كاميرا CAM-EXT Outdoor",
              "1 جرس فيديو DOOR-V1",
              "10 مستشعر باب/نافذة",
              "4 كاشف حركة",
              "2 صفارة (داخلية + خارجية)",
              "1 قفل متصل LOCK-S1",
              "تخزين سحابي 3 سنوات + 4G احتياطي"
            ],
            ideal: "فيلا أو منزل كبير"
          },
          {
            name: "باقة التجارة",
            includes: [
              "1 محور أمان PRO + 4G",
              "4 كاميرا CAM-EXT Outdoor",
              "1 كاميرا CAM-360 Indoor",
              "مستشعرات أبواب (حتى 5)",
              "2 كاشف حركة",
              "صفارة خارجية",
              "تخزين سحابي غير محدود سنة"
            ],
            ideal: "محل، مستودع، مكتب"
          }
        ],
        note: "تركيب DIY سهل أو تركيب احترافي متوفر. جميع الباقات تشمل ضمان سنتين ودعم 7/7. اتصل بنا لعرض سعر."
      },

      section8: {
        title: "تركيب بدون حفر",
        intro: "معظم معداتنا تُركّب بدون أي أداة:",
        steps: [
          {
            step: "1",
            title: "حمّل التطبيق",
            description: "ثبّت Symloop Security، أنشئ حسابك.",
            duration: "2 دق"
          },
          {
            step: "2",
            title: "اضبط المحور",
            description: "وصّل المحور، اربطه بـ Wi-Fi عبر التطبيق.",
            duration: "5 دق"
          },
          {
            step: "3",
            title: "أضف الأجهزة",
            description: "امسح QR code لكل جهاز. يُضاف تلقائياً.",
            duration: "1 دق/جهاز"
          },
          {
            step: "4",
            title: "ضع",
            description: "كاميرات مغناطيسية، مستشعرات لاصقة. أعد الوضع كما تحتاج.",
            duration: "متغير"
          },
          {
            step: "5",
            title: "اختبر",
            description: "التطبيق يرشدك لاختبار كل مستشعر وكاميرا.",
            duration: "10 دق"
          }
        ],
        noTools: [
          "كاميرات بحامل مغناطيسي أو لاصق",
          "مستشعرات 100% لاصقة (3M عالي الجودة)",
          "جرس متوافق مع إطار الباب الحالي",
          "محور موضوع أو مثبت بدون حفر"
        ],
        professionalNote: "فقط القفل المتصل يحتاج عادة تركيباً احترافياً (تكييف مع بابك). يمكننا توصية مُركّب معتمد في ولايتك."
      },

      section9: {
        title: "شهادات عملاء الأمان",
        testimonials: [
          {
            name: "محمد أ.",
            location: "الجزائر، البيار",
            text: "كدنا نتعرض للسرقة أثناء العطلة. الصفارة انطلقت، استلمت الفيديو على هاتفي في 3 ثوانٍ. الوقت الذي اتصلت بالجار، اللص كان قد فر. كاميرات Symloop أنقذت منزلنا.",
            rating: 5,
            products: "باقة الفيلا"
          },
          {
            name: "فاطمة ز.",
            location: "وهران",
            text: "مع 3 أطفال يعودون في أوقات مختلفة، القفل المتصل نعمة. أستلم إشعاراً عند عودة كل واحد. لا مفاتيح ضائعة، لا قلق. والرموز المؤقتة لعاملة النظافة، رائع.",
            rating: 5,
            products: "قفل LOCK-S1 + كاميرات"
          },
          {
            name: "كريم ب.",
            location: "قسنطينة",
            text: "أدير متجراً. قبلاً كانت لدي كاميرات صينية رخيصة تتعطل طوال الوقت. مع Symloop، الجودة ممتازة، والأهم الدعم محلي. عندما واجهت مشكلة، تقني اتصل بي في 10 دقائق.",
            rating: 5,
            products: "باقة التجارة"
          },
          {
            name: "أمينة ل.",
            location: "البليدة",
            text: "ما أقدره أكثر أن فيديوهاتي تبقى في الجزائر. مع الكاميرات المستوردة، بياناتي كانت تذهب للصين، كان يُشعرني بعدم الراحة. Symloop هي الأمان والخصوصية معاً.",
            rating: 5,
            products: "باقة العائلة"
          }
        ]
      },

      section10: {
        title: "أسئلة شائعة عن الأمان",
        questions: [
          {
            q: "هل فيديوهاتي مخزنة فعلاً في الجزائر؟",
            a: "نعم، 100% من تسجيلاتك مخزنة على خوادمنا الموجودة فعلياً في الجزائر. لا ننقل أبداً بياناتك للخارج. هذا التزام أساسي من Symloop. يمكنك أيضاً اختيار تخزين 100% محلي على بطاقة SD في كل كاميرا."
          },
          {
            q: "ماذا يحدث عند انقطاع الكهرباء؟",
            a: "محور الأمان PRO له بطارية 8 ساعات. يستمر باستقبال تنبيهات المستشعرات ويمكنه تشغيل الصفارة. الكاميرات تتوقف بدون كهرباء، لكن إذا كانت لديك بطارية خارجية أو UPS، تستمر. المحور يمكنه أيضاً استخدام بطاقة SIM 4G إذا انقطع الإنترنت."
          },
          {
            q: "هل الكاميرات تعمل بدون إنترنت؟",
            a: "نعم، جزئياً. الكاميرات تُسجّل على بطاقة SD حتى بدون إنترنت. تفقد الوصول عن بُعد وتنبيهات push، لكن التسجيل المحلي يستمر. فور عودة الشبكة، كل شيء يتزامن."
          },
          {
            q: "كيف يعمل التخزين السحابي؟",
            a: "التخزين السحابي مشمول مع الباقات (1 إلى 3 سنوات حسب الباقة). الفيديوهات محفوظة 30 يوماً بشكل افتراضي. يمكنك تحميل أو حفظ المقاطع المهمة نهائياً. اتصل بنا لخيارات التجديد."
          },
          {
            q: "هل يمكنني مشاهدة كاميراتي من الخارج؟",
            a: "بالتأكيد. التطبيق يعمل في أي مكان في العالم. كثير من عملائنا يراقبون منازلهم في الجزائر من فرنسا أو كندا أو دول الخليج. الاتصال مؤمن ومشفر."
          },
          {
            q: "هل القفل متوافق مع بابي؟",
            a: "قفلنا LOCK-S1 متوافق مع 90% من الأبواب القياسية في الجزائر. قبل الشراء، أرسل لنا صورة لقفلك الحالي، سنؤكد التوافق. قد يلزم تكييف (مشمول في التركيب الاحترافي)."
          },
          {
            q: "كم تدوم بطارية المستشعرات؟",
            a: "مستشعرات الباب/النافذة تدوم حوالي سنتين. كواشف الحركة 18 شهراً. التطبيق ينبهك عندما تضعف البطارية. البطاريات CR2032 قياسية، سهلة الإيجاد."
          },
          {
            q: "هل هناك رسوم شهرية؟",
            a: "لا للاستخدام الأساسي. التطبيق والتحكم المحلي مجاني مدى الحياة. التخزين السحابي مشمول 1-3 سنوات حسب الباقة، ثم تجديد اختياري. لا رسوم خفية."
          },
          {
            q: "هل يمكنني إضافة كاميرات لاحقاً؟",
            a: "نعم، النظام معياري بالكامل. يمكنك إضافة كاميرات أو مستشعرات أو أجهزة أخرى في أي وقت. المحور يدعم حتى 64 جهازاً."
          },
          {
            q: "كيف تعمل خدمة ما بعد البيع؟",
            a: "ضمان سنتين على جميع المنتجات. في حال مشكلة: 1) دعم WhatsApp/هاتف فوري 2) تشخيص عن بُعد عبر التطبيق 3) إذا لزم، استبدال أو إصلاح في مركزنا بالجزائر، وهران أو قسنطينة. المدة المتوسطة: 48 ساعة."
          }
        ]
      },

      cta: {
        title: "احمِ منزلك مع Symloop",
        subtitle: "أمان 100% جزائري - بيانات محلية - دعم 7/7",
        benefits: [
          "معدات مصنوعة في الجزائر",
          "تخزين فيديو على خوادم جزائرية",
          "أرخص بـ 60% من الاستيراد",
          "ضمان سنتين + دعم محلي"
        ],
        button: "اطلب باقة أمان",
        buttonSecondary: "اطلب استشارة مجانية",
        contact: "تحتاج نصائح؟ WhatsApp: +213 XX XX XX XX"
      }
    }
  };

  const t = content[locale] || content.fr;

  const iconMap = {
    Shield, Camera, Lock, Bell, Eye, AlertTriangle, Smartphone, Wifi,
    CheckCircle, Home, DollarSign, Star, Package, Video, Mic, Volume2,
    Radio, Fingerprint, Key, Sun, Moon, MapPin, Siren, BatteryCharging,
    Cloud, UserCheck, Users, Settings, Zap, Globe, Phone, Rocket, Clock
  };

  const getIcon = (iconName) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="keywords" content="sécurité maison algérie, caméras surveillance algérie, alarme connectée algérie, serrure intelligente algérie, symloop security" />
        <link rel="canonical" href={`https://www.symloop.com/blog/securite-maison-intelligente-cameras-alarmes-algerie-2026`} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t.title,
            "description": t.metaDesc,
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop" },
            "datePublished": "2025-12-29"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": t.section10.questions.map(q => ({
              "@type": "Question",
              "name": q.q,
              "acceptedAnswer": { "@type": "Answer", "text": q.a }
            }))
          })}
        </script>
      </Head>

      <main className={`min-h-screen bg-gradient-to-b from-slate-50 to-red-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-slate-800"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>{isRTL ? 'العودة للمدونة' : 'Retour au blog'}</span>
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  {isRTL ? '100% صنع في الجزائر' : '100% Made in Algeria'}
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                  {t.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t.title}
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{t.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{t.readTime}</span>
                <span className="flex items-center gap-2"><User className="w-4 h-4" />{t.author}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Symloop Security Banner */}
        <section className="py-12 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">{t.whySymloopSecurity.title}</h2>
              <p className="text-lg opacity-90">{t.whySymloopSecurity.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {t.whySymloopSecurity.advantages.map((adv, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                    {getIcon(adv.icon)}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{adv.title}</h3>
                  <p className="text-sm opacity-90">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Intro */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <p className="text-lg text-slate-700 leading-relaxed">{t.intro}</p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-12 border border-red-100">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  {t.tableOfContents.title}
                </h2>
                <ol className="space-y-3">
                  {t.tableOfContents.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 hover:text-red-600 transition-colors">
                      <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-medium">{idx + 1}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Section 1: Threats */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center">1</span>
                  {t.section1.title}
                </h2>
                <p className="text-slate-700 mb-6">{t.section1.intro}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {t.section1.threats.map((threat, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        {threat.title}
                      </h4>
                      <p className="text-sm text-slate-600 mb-3">{threat.description}</p>
                      <div className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium">
                        ✓ {threat.solution}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {t.section1.stats.map((stat, idx) => (
                    <div key={idx} className="bg-red-600 text-white rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Products */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-slate-800 text-white rounded-lg flex items-center justify-center">2</span>
                  {t.section2.title}
                </h2>
                <p className="text-slate-700 mb-8">{t.section2.intro}</p>

                <div className="space-y-6">
                  {t.section2.products.map((product, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-slate-50 to-red-50 rounded-xl p-6 border border-red-200">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-red-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                            {getIcon(product.icon)}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 text-lg">{product.name}</h4>
                            <p className="text-slate-600 text-sm">{product.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, fIdx) => (
                          <span key={fIdx} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 border border-slate-200 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 7: Pricing Packs */}
              <div className="bg-gradient-to-br from-red-600 to-slate-800 rounded-2xl p-8 shadow-lg mb-12 text-white">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">7</span>
                  {t.section7.title}
                </h2>
                <p className="opacity-90 mb-8">{t.section7.intro}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {t.section7.packs.map((pack, idx) => (
                    <div key={idx} className={`rounded-xl p-6 ${idx === 1 ? 'bg-white text-slate-800' : 'bg-white/10'}`}>
                      {idx === 1 && <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">{isRTL ? 'الأكثر شعبية' : 'Le plus populaire'}</div>}
                      <h4 className="font-bold text-xl mb-2">{pack.name}</h4>
                      <div className="flex items-baseline gap-2 mb-4">
                      </div>
                      <ul className="space-y-2 mb-4">
                        {pack.includes.map((item, iIdx) => (
                          <li key={iIdx} className={`text-sm flex items-center gap-2 ${idx === 1 ? 'text-slate-600' : 'opacity-90'}`}>
                            <CheckCircle className={`w-4 h-4 ${idx === 1 ? 'text-green-500' : 'text-green-400'}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className={`pt-4 border-t ${idx === 1 ? 'border-slate-200' : 'border-white/20'}`}>
                        <span className={`text-sm ${idx === 1 ? 'text-slate-500' : 'opacity-80'}`}>{isRTL ? 'مثالي لـ:' : 'Idéal pour :'} </span>
                        <span className="text-sm font-medium">{pack.ideal}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm opacity-80 bg-white/10 rounded-lg p-4">💡 {t.section7.note}</p>
              </div>

              {/* Section 9: Testimonials */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center">9</span>
                  {t.section9.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {t.section9.testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-slate-600 mb-4 italic">"{testimonial.text}"</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-slate-800">{testimonial.name}</p>
                          <p className="text-sm text-slate-500">{testimonial.location}</p>
                        </div>
                        <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">{testimonial.products}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 10: FAQ */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-violet-600 text-white rounded-lg flex items-center justify-center">10</span>
                  {t.section10.title}
                </h2>

                <div className="space-y-4">
                  {t.section10.questions.map((faq, idx) => (
                    <details key={idx} className="group bg-slate-50 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                        <h3 className="font-semibold text-slate-800 pr-4">{faq.q}</h3>
                        <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-red-600 via-red-700 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
                <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
                <p className="text-xl opacity-90 mb-8">{t.cta.subtitle}</p>

                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                  {t.cta.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-colors">
                    <Rocket className="w-5 h-5" />
                    {t.cta.button}
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors">
                    {t.cta.buttonSecondary}
                  </Link>
                </div>
                <p className="mt-6 opacity-80">{t.cta.contact}</p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
