"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User, Tag, Share2,
  Home, Wifi, Smartphone, Shield, Zap, Thermometer,
  Lightbulb, Lock, Camera, Speaker, Sun, Moon,
  CheckCircle, Users, DollarSign, TrendingUp, Star,
  Building, Target, Award, Globe, Phone, Mail,
  Settings, Cpu, Radio, BatteryCharging, Gauge,
  Eye, Volume2, Wind, Droplets, Power, Monitor,
  Package, Wrench, HeartHandshake, Rocket, BadgeCheck
} from "lucide-react";

export default function MaisonIntelligentSmartHomeAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Maison Intelligente en Algérie 2026 : Solutions Smart Home Symloop",
      subtitle: "Équipements Domotiques Fabriqués en Algérie - Prix Compétitifs, Contrôle Total via App",
      metaTitle: "Maison Intelligente Algérie 2026 | Smart Home Symloop | Produits Locaux",
      metaDesc: "Solutions maison intelligente 100% algériennes par Symloop. Équipements domotiques fabriqués localement, application de contrôle, prix compétitifs. Transformez votre maison en smart home avec des produits nationaux.",
      date: "29 Décembre 2025",
      readTime: "18 min",
      author: "Symloop Team",
      category: "Smart Home",

      intro: "Fini les produits importés coûteux et les applications étrangères ! Symloop révolutionne le marché de la maison intelligente en Algérie avec des équipements domotiques conçus et fabriqués localement. Notre écosystème complet - appareils, application mobile et plateforme web - vous offre un contrôle total sur votre habitat à des prix imbattables. Découvrez comment transformer votre maison en smart home 100% algérien.",

      symloopAdvantage: {
        title: "Pourquoi Choisir Symloop Smart Home ?",
        subtitle: "L'Avantage de la Solution 100% Algérienne",
        advantages: [
          {
            icon: "Package",
            title: "Fabrication Locale",
            description: "Tous nos équipements sont conçus et assemblés en Algérie. Pas d'importation, pas de frais de douane, pas de délais d'attente."
          },
          {
            icon: "DollarSign",
            title: "Prix Imbattables",
            description: "Sans les coûts d'importation, nos produits sont 40-60% moins chers que les alternatives importées. La qualité premium au prix local."
          },
          {
            icon: "Smartphone",
            title: "Application Symloop Home",
            description: "Une seule application pour contrôler tous vos appareils. Interface en français et arabe, support local, mises à jour régulières."
          },
          {
            icon: "Wrench",
            title: "Support & SAV Local",
            description: "Assistance technique en Algérie, pièces de rechange disponibles, intervention rapide. Pas d'envoi à l'étranger pour les réparations."
          },
          {
            icon: "Wifi",
            title: "Fonctionne Hors Ligne",
            description: "Notre système fonctionne même sans internet grâce au hub local. Parfait pour les zones à connexion instable."
          },
          {
            icon: "Shield",
            title: "Données en Algérie",
            description: "Vos données restent sur nos serveurs algériens. Respect de votre vie privée, pas de transfert vers l'étranger."
          }
        ]
      },

      tableOfContents: {
        title: "Dans cet article",
        items: [
          "Qu'est-ce qu'une maison intelligente ?",
          "L'avantage Symloop : fabrication locale",
          "Notre gamme de produits Smart Home",
          "L'Application Symloop Home",
          "Guide des prix Symloop",
          "Installation facile par vous-même",
          "Cas d'usage pour maisons algériennes",
          "Économies d'énergie garanties",
          "Témoignages clients",
          "FAQ complète"
        ]
      },

      section1: {
        title: "Qu'est-ce qu'une Maison Intelligente ?",
        paragraphs: [
          "Une maison intelligente, ou smart home, est un habitat équipé de dispositifs connectés qui communiquent entre eux et peuvent être contrôlés à distance via smartphone ou commande vocale. Ces systèmes automatisent les tâches quotidiennes et s'adaptent aux habitudes des occupants.",
          "Jusqu'à récemment, équiper sa maison en domotique signifiait acheter des produits importés coûteux, dépendre d'applications étrangères, et attendre des semaines pour la livraison. Symloop change la donne avec une solution 100% algérienne.",
          "Notre écosystème Smart Home comprend tout ce dont vous avez besoin : des capteurs et actionneurs fabriqués en Algérie, une application mobile intuitive développée par nos ingénieurs, et un support client local disponible 7j/7."
        ],
        features: [
          { icon: "Lightbulb", title: "Éclairage Symloop", desc: "Ampoules et interrupteurs intelligents made in Algeria" },
          { icon: "Thermometer", title: "Climatisation Smart", desc: "Contrôleurs de clim compatibles toutes marques" },
          { icon: "Shield", title: "Sécurité Symloop", desc: "Caméras, capteurs et alarmes de fabrication locale" },
          { icon: "Smartphone", title: "App Symloop Home", desc: "Contrôle centralisé en français et arabe" }
        ]
      },

      section2: {
        title: "Pourquoi la Domotique est Essentielle en Algérie ?",
        intro: "Le contexte algérien rend la maison intelligente particulièrement pertinente :",
        reasons: [
          {
            title: "Climat Extrême",
            description: "Avec des étés dépassant 45°C et des hivers froids, notre thermostat intelligent Symloop optimise automatiquement votre climatisation. Économisez 25-35% sur vos factures d'électricité.",
            icon: "Thermometer",
            solution: "Thermostat Symloop TH-200"
          },
          {
            title: "Coût de l'Énergie",
            description: "Les tarifs augmentent chaque année. Nos prises intelligentes coupent automatiquement les appareils en veille. Notre app vous montre exactement où part votre électricité.",
            icon: "Zap",
            solution: "Prises Symloop SP-100"
          },
          {
            title: "Sécurité du Foyer",
            description: "Nos caméras Symloop avec stockage local et cloud algérien vous permettent de surveiller votre maison depuis n'importe où. Alertes instantanées sur votre téléphone.",
            icon: "Shield",
            solution: "Kit Sécurité Symloop"
          },
          {
            title: "Coupures d'Électricité",
            description: "Notre hub Symloop fonctionne sur batterie pendant les coupures. Il maintient la sécurité et vous alerte. Vos automatisations locales continuent de fonctionner.",
            icon: "BatteryCharging",
            solution: "Hub Symloop avec batterie"
          },
          {
            title: "Connexion Instable",
            description: "Contrairement aux produits importés qui nécessitent internet, nos appareils communiquent localement. Votre maison reste intelligente même sans connexion.",
            icon: "Wifi",
            solution: "Protocole Symloop Mesh"
          },
          {
            title: "Support en Arabe/Français",
            description: "Notre application et notre support sont entièrement en français et arabe. Pas de documentation anglaise incompréhensible, pas de chatbot étranger.",
            icon: "HeartHandshake",
            solution: "Support Symloop 7j/7"
          }
        ],
        stats: [
          { value: "100%", label: "Fabrication Algérienne" },
          { value: "-50%", label: "vs Prix Importation" },
          { value: "24/7", label: "Support Local" },
          { value: "Offline", label: "Fonctionne sans internet" }
        ]
      },

      section3: {
        title: "Notre Gamme de Produits Smart Home",
        intro: "Tous nos produits sont conçus, développés et assemblés en Algérie :",
        categories: [
          {
            name: "Hub Central Symloop",
            icon: "Cpu",
            description: "Le cerveau de votre maison intelligente. Connecte tous vos appareils Symloop et fonctionne même sans internet.",
            features: [
              "Batterie de secours 8 heures",
              "Protocole Symloop Mesh (portée 50m)",
              "Compatible Wi-Fi et Ethernet",
              "Stockage local sécurisé",
              "Mises à jour automatiques"
            ],
            price: "12,000 DA",
            originalPrice: "25,000 DA (importé)"
          },
          {
            name: "Ampoules Symloop LED",
            icon: "Lightbulb",
            description: "Ampoules connectées E27 et E14. Blanc chaud/froid ou RGB multicolore.",
            features: [
              "16 millions de couleurs (RGB)",
              "Durée de vie 25,000 heures",
              "Consommation 9W = 60W classique",
              "Programmation horaire",
              "Contrôle vocal compatible"
            ],
            price: "1,800 DA",
            originalPrice: "4,500 DA (importé)"
          },
          {
            name: "Prises Intelligentes Symloop",
            icon: "Power",
            description: "Transformez n'importe quel appareil en appareil connecté. Mesure la consommation.",
            features: [
              "Mesure consommation en temps réel",
              "Programmation hebdomadaire",
              "Protection surtension intégrée",
              "Max 16A / 3500W",
              "Design compact"
            ],
            price: "2,500 DA",
            originalPrice: "5,500 DA (importé)"
          },
          {
            name: "Thermostat Symloop TH-200",
            icon: "Thermometer",
            description: "Contrôlez votre climatiseur depuis l'application. Compatible toutes marques de split.",
            features: [
              "Compatible 99% des climatiseurs",
              "Apprentissage de vos habitudes",
              "Géolocalisation (allume avant arrivée)",
              "Historique consommation",
              "Mode économie automatique"
            ],
            price: "8,500 DA",
            originalPrice: "22,000 DA (importé)"
          },
          {
            name: "Caméra Symloop CAM-360",
            icon: "Camera",
            description: "Caméra de surveillance intérieure avec rotation 360° et vision nocturne.",
            features: [
              "Résolution Full HD 1080p",
              "Vision nocturne 10m",
              "Rotation motorisée 360°",
              "Détection de mouvement IA",
              "Stockage cloud Algérie + carte SD"
            ],
            price: "7,500 DA",
            originalPrice: "18,000 DA (importé)"
          },
          {
            name: "Capteur Porte/Fenêtre",
            icon: "Lock",
            description: "Soyez alerté instantanément quand une porte ou fenêtre s'ouvre.",
            features: [
              "Batterie 2 ans",
              "Installation sans fil",
              "Historique des ouvertures",
              "Intégration alarme",
              "Ultra compact"
            ],
            price: "1,200 DA",
            originalPrice: "3,000 DA (importé)"
          },
          {
            name: "Détecteur de Mouvement",
            icon: "Eye",
            description: "Détectez les présences et automatisez l'éclairage.",
            features: [
              "Angle 120°, portée 8m",
              "Distingue humains/animaux",
              "Batterie 18 mois",
              "Sensibilité réglable",
              "Mode jour/nuit"
            ],
            price: "1,500 DA",
            originalPrice: "3,500 DA (importé)"
          },
          {
            name: "Interrupteur Mural Smart",
            icon: "Settings",
            description: "Remplacez vos interrupteurs existants. Installation en 5 minutes.",
            features: [
              "1, 2 ou 3 touches",
              "Pas de fil neutre requis",
              "Rétroéclairage LED",
              "Commande tactile",
              "Design moderne"
            ],
            price: "3,200 DA",
            originalPrice: "7,500 DA (importé)"
          }
        ]
      },

      section4: {
        title: "L'Application Symloop Home",
        intro: "Une seule app pour contrôler toute votre maison. Développée en Algérie, pour les Algériens.",
        features: [
          {
            name: "Interface Intuitive",
            description: "Design moderne et simple. Vos parents et grands-parents peuvent l'utiliser facilement.",
            icon: "Smartphone"
          },
          {
            name: "Français & Arabe",
            description: "Application entièrement traduite. Support client dans votre langue.",
            icon: "Globe"
          },
          {
            name: "Contrôle à Distance",
            description: "Allumez, éteignez et programmez vos appareils de n'importe où dans le monde.",
            icon: "Wifi"
          },
          {
            name: "Automatisations",
            description: "Créez des scénarios : 'Si je quitte la maison, éteindre tout'. 'Au coucher du soleil, allumer le jardin'.",
            icon: "Zap"
          },
          {
            name: "Suivi Énergie",
            description: "Visualisez votre consommation en temps réel. Identifiez les appareils énergivores.",
            icon: "Gauge"
          },
          {
            name: "Alertes Intelligentes",
            description: "Notifications en cas de mouvement, ouverture de porte, surconsommation.",
            icon: "Eye"
          },
          {
            name: "Multi-Utilisateurs",
            description: "Partagez l'accès avec votre famille. Définissez des permissions par utilisateur.",
            icon: "Users"
          },
          {
            name: "Mode Hors Ligne",
            description: "L'app fonctionne en local même sans internet grâce au hub Symloop.",
            icon: "Shield"
          }
        ],
        platforms: ["Android (Play Store)", "iOS (App Store)", "Web (app.symloop.com)"]
      },

      section5: {
        title: "Guide des Prix Symloop 2026",
        intro: "Des packs adaptés à tous les budgets. Jusqu'à 60% moins cher que l'importation !",
        packs: [
          {
            name: "Pack Découverte",
            price: "18,000 DA",
            originalPrice: "45,000 DA importé",
            savings: "60%",
            includes: [
              "1 Hub Symloop Mini",
              "3 Ampoules LED connectées",
              "2 Prises intelligentes",
              "Application Symloop Home"
            ],
            ideal: "Studio ou chambre"
          },
          {
            name: "Pack Famille",
            price: "45,000 DA",
            originalPrice: "110,000 DA importé",
            savings: "59%",
            includes: [
              "1 Hub Symloop Pro",
              "8 Ampoules LED connectées",
              "4 Prises intelligentes",
              "1 Thermostat TH-200",
              "2 Capteurs porte/fenêtre",
              "Application + Support prioritaire"
            ],
            ideal: "Appartement F3-F4"
          },
          {
            name: "Pack Villa",
            price: "95,000 DA",
            originalPrice: "250,000 DA importé",
            savings: "62%",
            includes: [
              "1 Hub Symloop Pro+",
              "15 Ampoules LED connectées",
              "6 Interrupteurs muraux smart",
              "2 Thermostats TH-200",
              "2 Caméras CAM-360",
              "4 Capteurs porte/fenêtre",
              "2 Détecteurs de mouvement",
              "Installation guidée + Support VIP"
            ],
            ideal: "Villa ou grande maison"
          },
          {
            name: "Pack Sécurité",
            price: "55,000 DA",
            originalPrice: "140,000 DA importé",
            savings: "61%",
            includes: [
              "1 Hub Symloop Pro",
              "3 Caméras CAM-360",
              "1 Sonnette vidéo",
              "6 Capteurs porte/fenêtre",
              "2 Détecteurs de mouvement",
              "1 Sirène intérieure",
              "Stockage cloud 1 an inclus"
            ],
            ideal: "Sécurité complète"
          }
        ],
        note: "Tous les prix incluent la TVA. Livraison gratuite dans 48 wilayas. Installation DIY facile ou installation professionnelle disponible (+5,000 DA)."
      },

      section6: {
        title: "Installation Facile en 3 Étapes",
        intro: "Nos produits sont conçus pour être installés par vous-même, sans électricien.",
        steps: [
          {
            step: "1",
            title: "Téléchargez l'App",
            description: "Installez Symloop Home depuis Play Store ou App Store. Créez votre compte en 30 secondes.",
            duration: "2 minutes"
          },
          {
            step: "2",
            title: "Branchez le Hub",
            description: "Connectez le hub Symloop à votre routeur Wi-Fi. L'app le détecte automatiquement.",
            duration: "3 minutes"
          },
          {
            step: "3",
            title: "Ajoutez vos Appareils",
            description: "Scannez le QR code de chaque appareil. Il s'ajoute instantanément à votre maison.",
            duration: "1 minute par appareil"
          }
        ],
        noNeed: [
          "Pas d'électricien nécessaire",
          "Pas de perçage pour la plupart des appareils",
          "Pas de configuration réseau complexe",
          "Pas de compte sur serveurs étrangers"
        ],
        support: "Besoin d'aide ? Notre support WhatsApp répond en moins de 5 minutes, 7j/7."
      },

      section7: {
        title: "Cas d'Usage pour Maisons Algériennes",
        intro: "Scénarios concrets optimisés pour le contexte local :",
        scenarios: [
          {
            title: "Scénario Été à Alger (45°C)",
            description: "Vous quittez le bureau à 17h. L'app détecte votre départ (GPS). À 17h15, le thermostat Symloop allume la clim à 24°C. À 17h30, les stores connectés se ferment côté soleil. Quand vous arrivez à 17h45, votre maison est fraîche.",
            savings: "35% d'économie sur la climatisation",
            products: ["Thermostat TH-200", "App Symloop Home"]
          },
          {
            title: "Scénario Sécurité Vacances",
            description: "Vous partez 2 semaines à Zeralda. Le mode 'Vacances' simule une présence : lumières aléatoires le soir, TV qui s'allume parfois. Les caméras vous envoient les alertes mouvement. Le capteur détecte toute ouverture de porte.",
            savings: "Tranquillité d'esprit totale",
            products: ["Kit Sécurité Symloop", "Ampoules LED", "Capteurs"]
          },
          {
            title: "Scénario Coupure d'Électricité",
            description: "Il est 22h, coupure de courant. Le hub Symloop bascule sur batterie et vous envoie une notification. Les caméras continuent d'enregistrer pendant 4h. Quand le courant revient, tout reprend automatiquement.",
            savings: "Sécurité maintenue 24/7",
            products: ["Hub Pro avec batterie", "Caméras CAM-360"]
          },
          {
            title: "Scénario Économies Famille",
            description: "Les enfants oublient d'éteindre les lumières. Pas de problème : les détecteurs de mouvement éteignent automatiquement après 10 min sans présence. Les prises intelligentes coupent la TV et console en veille la nuit.",
            savings: "20-25% sur la facture électrique",
            products: ["Détecteurs mouvement", "Prises intelligentes"]
          },
          {
            title: "Scénario Retour du Travail",
            description: "Tous les soirs à 18h, le scénario 'Bienvenue' s'active : lumières du salon à 70%, climatisation ajustée, cafetière prête. Votre maison vous accueille comme vous l'aimez.",
            savings: "Confort quotidien automatisé",
            products: ["Ampoules LED", "Thermostat", "Prises smart"]
          }
        ]
      },

      section8: {
        title: "Économies Garanties avec Symloop",
        intro: "Retour sur investissement concret et mesurable :",
        savings: [
          {
            category: "Climatisation Intelligente",
            potential: "25-35%",
            how: "Le thermostat apprend vos habitudes et optimise",
            example: "Facture été : 8,000 DA → 5,500 DA"
          },
          {
            category: "Éclairage LED + Automatisation",
            potential: "50-70%",
            how: "LED basse conso + extinction automatique",
            example: "Économie : 1,500 DA/mois"
          },
          {
            category: "Appareils en Veille",
            potential: "8-12%",
            how: "Les prises coupent automatiquement les veilles",
            example: "Économie : 500-800 DA/mois"
          },
          {
            category: "Chauffe-eau Optimisé",
            potential: "20-30%",
            how: "Programmation heures creuses uniquement",
            example: "Économie : 600 DA/mois"
          }
        ],
        totalExample: {
          title: "Exemple Famille à Alger",
          investment: "Pack Famille : 45,000 DA",
          monthlySavings: "Économie mensuelle : ~3,000 DA",
          roi: "Rentabilisé en 15 mois",
          after: "Puis économies à vie + confort"
        }
      },

      section9: {
        title: "Témoignages Clients Symloop",
        testimonials: [
          {
            name: "Karim B.",
            location: "Alger, Hydra",
            text: "J'ai équipé tout mon appartement F4 avec le Pack Famille. L'installation m'a pris 2 heures, seul. L'app est vraiment intuitive et le support en arabe est un énorme plus. Ma facture d'électricité a baissé de 2,500 DA/mois.",
            rating: 5,
            products: "Pack Famille"
          },
          {
            name: "Samira M.",
            location: "Oran",
            text: "Enfin des produits domotiques à prix abordable ! J'ai commencé avec le Pack Découverte pour tester. Maintenant je commande le Pack Villa pour ma nouvelle maison. Le fait que ce soit algérien me rassure pour le SAV.",
            rating: 5,
            products: "Pack Découverte → Pack Villa"
          },
          {
            name: "Youcef H.",
            location: "Constantine",
            text: "Les caméras Symloop sont incroyables pour le prix. Full HD, vision nocturne impeccable, et surtout les données restent en Algérie. J'ai reçu une alerte quand mon fils est rentré de l'école, génial !",
            rating: 5,
            products: "Pack Sécurité"
          },
          {
            name: "Nadia K.",
            location: "Annaba",
            text: "Le thermostat TH-200 a changé ma vie cet été. Je programme la clim pour qu'elle s'allume 30 min avant mon retour. Plus jamais de maison étouffante. Et la conso a vraiment baissé.",
            rating: 5,
            products: "Thermostat TH-200"
          }
        ]
      },

      section10: {
        title: "FAQ - Questions Fréquentes",
        questions: [
          {
            q: "Les produits Symloop sont-ils vraiment fabriqués en Algérie ?",
            a: "Oui, 100% de nos produits sont conçus et assemblés en Algérie, dans notre usine à Blida. Nous utilisons des composants de qualité et employons des ingénieurs et techniciens algériens. C'est ce qui nous permet d'offrir des prix imbattables tout en assurant un support local."
          },
          {
            q: "Comment fonctionne le système sans internet ?",
            a: "Notre hub Symloop utilise un protocole de communication local (Symloop Mesh). Vos appareils communiquent directement avec le hub, pas avec un serveur cloud. Les automatisations locales (lumières, thermostat) fonctionnent même sans internet. Seul le contrôle à distance nécessite une connexion."
          },
          {
            q: "Quelle est la garantie sur les produits ?",
            a: "Tous nos produits sont garantis 2 ans. En cas de problème, notre SAV en Algérie prend en charge la réparation ou le remplacement. Pas besoin d'envoyer quoi que ce soit à l'étranger. Nous avons des centres de service à Alger, Oran et Constantine."
          },
          {
            q: "L'installation nécessite-t-elle un électricien ?",
            a: "Non pour 90% de nos produits. Les ampoules se vissent, les prises se branchent, les capteurs se collent. Seuls les interrupteurs muraux peuvent nécessiter un électricien si vous n'êtes pas à l'aise avec le câblage. Notre support vidéo vous guide étape par étape."
          },
          {
            q: "Mes données sont-elles sécurisées ?",
            a: "Oui, et c'est un de nos points forts. Toutes vos données restent sur nos serveurs en Algérie. Nous ne vendons jamais vos informations. Le chiffrement est de bout en bout. Vous pouvez même opter pour un stockage 100% local sur le hub, sans cloud du tout."
          },
          {
            q: "Puis-je ajouter des produits progressivement ?",
            a: "Absolument ! Notre système est modulaire. Commencez avec le Pack Découverte, puis ajoutez des appareils au fil du temps. Tous les produits Symloop sont compatibles entre eux et s'ajoutent en quelques secondes via l'app."
          },
          {
            q: "Livrez-vous dans toutes les wilayas ?",
            a: "Oui, nous livrons dans les 58 wilayas. Livraison gratuite pour les commandes de plus de 10,000 DA. Délai moyen : 2-5 jours ouvrés. Paiement à la livraison disponible."
          },
          {
            q: "Quelle est l'autonomie de la batterie du hub ?",
            a: "Le Hub Symloop Pro a une batterie de secours de 8 heures. En cas de coupure de courant, il continue de fonctionner, maintient vos automatisations locales et vous envoie des alertes. Parfait pour les coupures fréquentes en été."
          },
          {
            q: "Les produits Symloop sont-ils compatibles avec Google Home/Alexa ?",
            a: "Oui ! Nos produits sont compatibles avec Google Assistant et Amazon Alexa pour le contrôle vocal. Mais vous n'en avez pas besoin : notre app Symloop Home offre toutes les fonctionnalités, y compris les commandes vocales en arabe."
          },
          {
            q: "Comment contacter le support ?",
            a: "Plusieurs options : WhatsApp (réponse < 5 min), téléphone, email, ou chat dans l'app. Notre support est disponible 7j/7 de 8h à 22h. Nous parlons français et arabe. C'est un vrai avantage d'avoir un support local qui comprend vos besoins."
          }
        ]
      },

      cta: {
        title: "Passez au Smart Home 100% Algérien",
        subtitle: "Équipez votre maison avec Symloop - Qualité, Prix et Support Local",
        benefits: [
          "Fabrication 100% algérienne",
          "Prix 50-60% moins cher que l'import",
          "Support client 7j/7 en français et arabe",
          "Garantie 2 ans avec SAV local"
        ],
        button: "Commander Maintenant",
        buttonSecondary: "Demander une Démo",
        contact: "Questions ? WhatsApp : +213 XX XX XX XX"
      }
    },
    ar: {
      title: "المنزل الذكي في الجزائر 2026: حلول Symloop Smart Home",
      subtitle: "أجهزة منزلية ذكية مصنوعة في الجزائر - أسعار تنافسية، تحكم كامل عبر التطبيق",
      metaTitle: "المنزل الذكي الجزائر 2026 | Symloop Smart Home | منتجات محلية",
      metaDesc: "حلول المنزل الذكي 100% جزائرية من Symloop. أجهزة منزلية ذكية مصنوعة محلياً، تطبيق تحكم، أسعار تنافسية. حوّل منزلك إلى منزل ذكي بمنتجات وطنية.",
      date: "29 ديسمبر 2025",
      readTime: "18 دقيقة",
      author: "فريق Symloop",
      category: "المنزل الذكي",

      intro: "انتهى عصر المنتجات المستوردة الغالية والتطبيقات الأجنبية! تُحدث Symloop ثورة في سوق المنزل الذكي في الجزائر بأجهزة منزلية ذكية مصممة ومصنوعة محلياً. نظامنا المتكامل - أجهزة، تطبيق موبايل ومنصة ويب - يمنحك تحكماً كاملاً في منزلك بأسعار لا تُقارن. اكتشف كيف تحوّل منزلك إلى منزل ذكي 100% جزائري.",

      symloopAdvantage: {
        title: "لماذا تختار Symloop Smart Home؟",
        subtitle: "ميزة الحل 100% الجزائري",
        advantages: [
          {
            icon: "Package",
            title: "صناعة محلية",
            description: "جميع أجهزتنا مصممة ومُجمّعة في الجزائر. لا استيراد، لا رسوم جمركية، لا انتظار."
          },
          {
            icon: "DollarSign",
            title: "أسعار لا تُقارن",
            description: "بدون تكاليف الاستيراد، منتجاتنا أرخص بـ 40-60% من البدائل المستوردة. جودة ممتازة بسعر محلي."
          },
          {
            icon: "Smartphone",
            title: "تطبيق Symloop Home",
            description: "تطبيق واحد للتحكم في جميع أجهزتك. واجهة بالفرنسية والعربية، دعم محلي، تحديثات منتظمة."
          },
          {
            icon: "Wrench",
            title: "دعم وخدمة ما بعد البيع محلية",
            description: "مساعدة تقنية في الجزائر، قطع غيار متوفرة، تدخل سريع. لا إرسال للخارج للإصلاح."
          },
          {
            icon: "Wifi",
            title: "يعمل بدون إنترنت",
            description: "نظامنا يعمل حتى بدون إنترنت بفضل المحور المحلي. مثالي للمناطق ذات الاتصال غير المستقر."
          },
          {
            icon: "Shield",
            title: "البيانات في الجزائر",
            description: "بياناتك تبقى على خوادمنا الجزائرية. احترام خصوصيتك، لا نقل للخارج."
          }
        ]
      },

      tableOfContents: {
        title: "في هذا المقال",
        items: [
          "ما هو المنزل الذكي؟",
          "ميزة Symloop: التصنيع المحلي",
          "مجموعة منتجاتنا للمنزل الذكي",
          "تطبيق Symloop Home",
          "دليل أسعار Symloop",
          "تركيب سهل بنفسك",
          "حالات استخدام للمنازل الجزائرية",
          "توفير الطاقة المضمون",
          "شهادات العملاء",
          "الأسئلة الشائعة"
        ]
      },

      section1: {
        title: "ما هو المنزل الذكي؟",
        paragraphs: [
          "المنزل الذكي أو smart home هو مسكن مجهز بأجهزة متصلة تتواصل مع بعضها البعض ويمكن التحكم فيها عن بُعد عبر الهاتف الذكي أو الأوامر الصوتية. تعمل هذه الأنظمة على أتمتة المهام اليومية والتكيف مع عادات السكان.",
          "حتى وقت قريب، كان تجهيز منزلك بالأتمتة يعني شراء منتجات مستوردة غالية، الاعتماد على تطبيقات أجنبية، وانتظار أسابيع للتوصيل. Symloop تغير قواعد اللعبة بحل 100% جزائري.",
          "نظامنا Smart Home يشمل كل ما تحتاجه: مستشعرات ومشغلات مصنوعة في الجزائر، تطبيق موبايل بديهي مطور من قبل مهندسينا، ودعم عملاء محلي متوفر 7/7."
        ],
        features: [
          { icon: "Lightbulb", title: "إضاءة Symloop", desc: "مصابيح ومفاتيح ذكية صنع الجزائر" },
          { icon: "Thermometer", title: "تكييف ذكي", desc: "متحكمات تكييف متوافقة مع جميع العلامات" },
          { icon: "Shield", title: "أمان Symloop", desc: "كاميرات ومستشعرات وأجهزة إنذار محلية الصنع" },
          { icon: "Smartphone", title: "تطبيق Symloop Home", desc: "تحكم مركزي بالفرنسية والعربية" }
        ]
      },

      section2: {
        title: "لماذا الأتمتة المنزلية ضرورية في الجزائر؟",
        intro: "السياق الجزائري يجعل المنزل الذكي مناسباً بشكل خاص:",
        reasons: [
          {
            title: "المناخ القاسي",
            description: "مع صيف يتجاوز 45 درجة مئوية وشتاء بارد، يُحسّن ثرموستات Symloop الذكي تكييفك تلقائياً. وفّر 25-35% على فواتير الكهرباء.",
            icon: "Thermometer",
            solution: "Symloop TH-200 ثرموستات"
          },
          {
            title: "تكلفة الطاقة",
            description: "الأسعار ترتفع كل سنة. مقابسنا الذكية تقطع الأجهزة في وضع الاستعداد تلقائياً. تطبيقنا يُظهر لك بالضبط أين تذهب كهرباؤك.",
            icon: "Zap",
            solution: "Symloop SP-100 مقابس"
          },
          {
            title: "أمان المنزل",
            description: "كاميراتنا Symloop مع التخزين المحلي والسحابي الجزائري تتيح لك مراقبة منزلك من أي مكان. تنبيهات فورية على هاتفك.",
            icon: "Shield",
            solution: "مجموعة أمان Symloop"
          },
          {
            title: "انقطاع الكهرباء",
            description: "محورنا Symloop يعمل على البطارية أثناء انقطاع التيار. يحافظ على الأمان وينبهك. أتمتتك المحلية تستمر في العمل.",
            icon: "BatteryCharging",
            solution: "محور Symloop مع بطارية"
          },
          {
            title: "اتصال غير مستقر",
            description: "على عكس المنتجات المستوردة التي تحتاج إنترنت، أجهزتنا تتواصل محلياً. منزلك يبقى ذكياً حتى بدون اتصال.",
            icon: "Wifi",
            solution: "بروتوكول Symloop Mesh"
          },
          {
            title: "دعم بالعربية/الفرنسية",
            description: "تطبيقنا ودعمنا بالكامل بالفرنسية والعربية. لا وثائق إنجليزية غير مفهومة، لا روبوت دردشة أجنبي.",
            icon: "HeartHandshake",
            solution: "دعم Symloop 7/7"
          }
        ],
        stats: [
          { value: "100%", label: "صناعة جزائرية" },
          { value: "-50%", label: "مقابل سعر الاستيراد" },
          { value: "24/7", label: "دعم محلي" },
          { value: "Offline", label: "يعمل بدون إنترنت" }
        ]
      },

      section3: {
        title: "مجموعة منتجاتنا للمنزل الذكي",
        intro: "جميع منتجاتنا مصممة ومطورة ومُجمّعة في الجزائر:",
        categories: [
          {
            name: "محور Symloop المركزي",
            icon: "Cpu",
            description: "عقل منزلك الذكي. يربط جميع أجهزتك Symloop ويعمل حتى بدون إنترنت.",
            features: [
              "بطارية احتياطية 8 ساعات",
              "بروتوكول Symloop Mesh (مدى 50م)",
              "متوافق Wi-Fi و Ethernet",
              "تخزين محلي آمن",
              "تحديثات تلقائية"
            ],
            price: "12,000 دج",
            originalPrice: "25,000 دج (مستورد)"
          },
          {
            name: "مصابيح Symloop LED",
            icon: "Lightbulb",
            description: "مصابيح متصلة E27 و E14. أبيض دافئ/بارد أو RGB متعدد الألوان.",
            features: [
              "16 مليون لون (RGB)",
              "عمر 25,000 ساعة",
              "استهلاك 9W = 60W عادي",
              "برمجة زمنية",
              "تحكم صوتي متوافق"
            ],
            price: "1,800 دج",
            originalPrice: "4,500 دج (مستورد)"
          },
          {
            name: "مقابس Symloop الذكية",
            icon: "Power",
            description: "حوّل أي جهاز إلى جهاز متصل. تقيس الاستهلاك.",
            features: [
              "قياس الاستهلاك في الوقت الفعلي",
              "برمجة أسبوعية",
              "حماية من زيادة التيار مدمجة",
              "حتى 16A / 3500W",
              "تصميم مدمج"
            ],
            price: "2,500 دج",
            originalPrice: "5,500 دج (مستورد)"
          },
          {
            name: "ثرموستات Symloop TH-200",
            icon: "Thermometer",
            description: "تحكم في مكيفك من التطبيق. متوافق مع جميع ماركات السبليت.",
            features: [
              "متوافق مع 99% من المكيفات",
              "يتعلم عاداتك",
              "تحديد موقع (يشغل قبل الوصول)",
              "سجل الاستهلاك",
              "وضع توفير تلقائي"
            ],
            price: "8,500 دج",
            originalPrice: "22,000 دج (مستورد)"
          },
          {
            name: "كاميرا Symloop CAM-360",
            icon: "Camera",
            description: "كاميرا مراقبة داخلية مع دوران 360° ورؤية ليلية.",
            features: [
              "دقة Full HD 1080p",
              "رؤية ليلية 10م",
              "دوران آلي 360°",
              "كشف حركة بالذكاء الاصطناعي",
              "تخزين سحابي جزائر + بطاقة SD"
            ],
            price: "7,500 دج",
            originalPrice: "18,000 دج (مستورد)"
          },
          {
            name: "مستشعر باب/نافذة",
            icon: "Lock",
            description: "تُنبَّه فوراً عند فتح باب أو نافذة.",
            features: [
              "بطارية سنتين",
              "تركيب لاسلكي",
              "سجل الفتحات",
              "تكامل مع الإنذار",
              "مدمج للغاية"
            ],
            price: "1,200 دج",
            originalPrice: "3,000 دج (مستورد)"
          },
          {
            name: "كاشف حركة",
            icon: "Eye",
            description: "اكتشف الوجود وأتمت الإضاءة.",
            features: [
              "زاوية 120°، مدى 8م",
              "يميز البشر/الحيوانات",
              "بطارية 18 شهراً",
              "حساسية قابلة للتعديل",
              "وضع نهار/ليل"
            ],
            price: "1,500 دج",
            originalPrice: "3,500 دج (مستورد)"
          },
          {
            name: "مفتاح حائط ذكي",
            icon: "Settings",
            description: "استبدل مفاتيحك الحالية. تركيب في 5 دقائق.",
            features: [
              "1، 2 أو 3 أزرار",
              "لا يحتاج سلك محايد",
              "إضاءة LED خلفية",
              "تحكم لمسي",
              "تصميم عصري"
            ],
            price: "3,200 دج",
            originalPrice: "7,500 دج (مستورد)"
          }
        ]
      },

      section4: {
        title: "تطبيق Symloop Home",
        intro: "تطبيق واحد للتحكم في كل منزلك. مطور في الجزائر، للجزائريين.",
        features: [
          {
            name: "واجهة بديهية",
            description: "تصميم عصري وبسيط. والديك وأجدادك يمكنهم استخدامه بسهولة.",
            icon: "Smartphone"
          },
          {
            name: "فرنسية وعربية",
            description: "تطبيق مترجم بالكامل. دعم عملاء بلغتك.",
            icon: "Globe"
          },
          {
            name: "تحكم عن بُعد",
            description: "شغّل، أطفئ وبرمج أجهزتك من أي مكان في العالم.",
            icon: "Wifi"
          },
          {
            name: "أتمتة",
            description: "أنشئ سيناريوهات: 'إذا غادرت المنزل، أطفئ كل شيء'. 'عند غروب الشمس، أنر الحديقة'.",
            icon: "Zap"
          },
          {
            name: "متابعة الطاقة",
            description: "تصور استهلاكك في الوقت الفعلي. حدد الأجهزة المستهلكة للطاقة.",
            icon: "Gauge"
          },
          {
            name: "تنبيهات ذكية",
            description: "إشعارات عند الحركة، فتح باب، استهلاك زائد.",
            icon: "Eye"
          },
          {
            name: "متعدد المستخدمين",
            description: "شارك الوصول مع عائلتك. حدد صلاحيات لكل مستخدم.",
            icon: "Users"
          },
          {
            name: "وضع بدون اتصال",
            description: "التطبيق يعمل محلياً حتى بدون إنترنت بفضل محور Symloop.",
            icon: "Shield"
          }
        ],
        platforms: ["Android (Play Store)", "iOS (App Store)", "Web (app.symloop.com)"]
      },

      section5: {
        title: "دليل أسعار Symloop 2026",
        intro: "باقات تناسب جميع الميزانيات. حتى 60% أرخص من الاستيراد!",
        packs: [
          {
            name: "باقة الاكتشاف",
            price: "18,000 دج",
            originalPrice: "45,000 دج مستورد",
            savings: "60%",
            includes: [
              "1 محور Symloop Mini",
              "3 مصابيح LED متصلة",
              "2 مقابس ذكية",
              "تطبيق Symloop Home"
            ],
            ideal: "استوديو أو غرفة"
          },
          {
            name: "باقة العائلة",
            price: "45,000 دج",
            originalPrice: "110,000 دج مستورد",
            savings: "59%",
            includes: [
              "1 محور Symloop Pro",
              "8 مصابيح LED متصلة",
              "4 مقابس ذكية",
              "1 ثرموستات TH-200",
              "2 مستشعر باب/نافذة",
              "تطبيق + دعم أولوية"
            ],
            ideal: "شقة F3-F4"
          },
          {
            name: "باقة الفيلا",
            price: "95,000 دج",
            originalPrice: "250,000 دج مستورد",
            savings: "62%",
            includes: [
              "1 محور Symloop Pro+",
              "15 مصباح LED متصل",
              "6 مفاتيح حائط ذكية",
              "2 ثرموستات TH-200",
              "2 كاميرا CAM-360",
              "4 مستشعر باب/نافذة",
              "2 كاشف حركة",
              "تركيب موجه + دعم VIP"
            ],
            ideal: "فيلا أو منزل كبير"
          },
          {
            name: "باقة الأمان",
            price: "55,000 دج",
            originalPrice: "140,000 دج مستورد",
            savings: "61%",
            includes: [
              "1 محور Symloop Pro",
              "3 كاميرا CAM-360",
              "1 جرس فيديو",
              "6 مستشعر باب/نافذة",
              "2 كاشف حركة",
              "1 صفارة إنذار داخلية",
              "تخزين سحابي سنة مشمول"
            ],
            ideal: "أمان كامل"
          }
        ],
        note: "جميع الأسعار تشمل TVA. توصيل مجاني في 48 ولاية. تركيب DIY سهل أو تركيب احترافي متوفر (+5,000 دج)."
      },

      section6: {
        title: "تركيب سهل في 3 خطوات",
        intro: "منتجاتنا مصممة لتُركّبها بنفسك، بدون كهربائي.",
        steps: [
          {
            step: "1",
            title: "حمّل التطبيق",
            description: "ثبّت Symloop Home من Play Store أو App Store. أنشئ حسابك في 30 ثانية.",
            duration: "دقيقتان"
          },
          {
            step: "2",
            title: "وصّل المحور",
            description: "اربط محور Symloop بموجه Wi-Fi. التطبيق يكتشفه تلقائياً.",
            duration: "3 دقائق"
          },
          {
            step: "3",
            title: "أضف أجهزتك",
            description: "امسح QR code لكل جهاز. يُضاف فوراً إلى منزلك.",
            duration: "دقيقة لكل جهاز"
          }
        ],
        noNeed: [
          "لا حاجة لكهربائي",
          "لا حفر لمعظم الأجهزة",
          "لا تكوين شبكة معقد",
          "لا حساب على خوادم أجنبية"
        ],
        support: "تحتاج مساعدة؟ دعمنا عبر WhatsApp يرد في أقل من 5 دقائق، 7/7."
      },

      section7: {
        title: "حالات استخدام للمنازل الجزائرية",
        intro: "سيناريوهات عملية محسنة للسياق المحلي:",
        scenarios: [
          {
            title: "سيناريو صيف الجزائر (45 درجة)",
            description: "تغادر المكتب الساعة 17:00. التطبيق يكتشف مغادرتك (GPS). الساعة 17:15، ثرموستات Symloop يشغل التكييف على 24 درجة. الساعة 17:30، الستائر المتصلة تُغلق جهة الشمس. عند وصولك 17:45، منزلك بارد.",
            savings: "35% توفير على التكييف",
            products: ["ثرموستات TH-200", "تطبيق Symloop Home"]
          },
          {
            title: "سيناريو أمان العطلة",
            description: "تسافر أسبوعين إلى زرالدة. وضع 'العطلة' يحاكي وجوداً: أضواء عشوائية مساءً، TV يعمل أحياناً. الكاميرات ترسل تنبيهات الحركة. المستشعر يكتشف أي فتح باب.",
            savings: "راحة بال تامة",
            products: ["مجموعة أمان Symloop", "مصابيح LED", "مستشعرات"]
          },
          {
            title: "سيناريو انقطاع الكهرباء",
            description: "الساعة 22:00، انقطاع تيار. محور Symloop يتحول للبطارية ويرسل لك إشعاراً. الكاميرات تستمر بالتسجيل 4 ساعات. عند عودة التيار، كل شيء يستأنف تلقائياً.",
            savings: "أمان محفوظ 24/7",
            products: ["محور Pro مع بطارية", "كاميرات CAM-360"]
          },
          {
            title: "سيناريو توفير العائلة",
            description: "الأطفال ينسون إطفاء الأضواء. لا مشكلة: كواشف الحركة تُطفئ تلقائياً بعد 10 دقائق بدون وجود. المقابس الذكية تقطع TV والكونسول في وضع الاستعداد ليلاً.",
            savings: "20-25% على فاتورة الكهرباء",
            products: ["كواشف حركة", "مقابس ذكية"]
          },
          {
            title: "سيناريو العودة من العمل",
            description: "كل مساء الساعة 18:00، سيناريو 'مرحباً' يُفعّل: أضواء الصالون على 70%، التكييف مُعدّل، ماكينة القهوة جاهزة. منزلك يستقبلك كما تحب.",
            savings: "راحة يومية مؤتمتة",
            products: ["مصابيح LED", "ثرموستات", "مقابس ذكية"]
          }
        ]
      },

      section8: {
        title: "توفير مضمون مع Symloop",
        intro: "عائد استثمار ملموس وقابل للقياس:",
        savings: [
          {
            category: "تكييف ذكي",
            potential: "25-35%",
            how: "الثرموستات يتعلم عاداتك ويُحسّن",
            example: "فاتورة الصيف: 8,000 دج → 5,500 دج"
          },
          {
            category: "إضاءة LED + أتمتة",
            potential: "50-70%",
            how: "LED منخفض الاستهلاك + إطفاء تلقائي",
            example: "توفير: 1,500 دج/شهر"
          },
          {
            category: "أجهزة في وضع الاستعداد",
            potential: "8-12%",
            how: "المقابس تقطع أجهزة الاستعداد تلقائياً",
            example: "توفير: 500-800 دج/شهر"
          },
          {
            category: "سخان مياه محسّن",
            potential: "20-30%",
            how: "برمجة ساعات الذروة المنخفضة فقط",
            example: "توفير: 600 دج/شهر"
          }
        ],
        totalExample: {
          title: "مثال عائلة في الجزائر",
          investment: "باقة العائلة: 45,000 دج",
          monthlySavings: "توفير شهري: ~3,000 دج",
          roi: "يُسترد في 15 شهراً",
          after: "ثم توفير مدى الحياة + راحة"
        }
      },

      section9: {
        title: "شهادات عملاء Symloop",
        testimonials: [
          {
            name: "كريم ب.",
            location: "الجزائر، حيدرة",
            text: "جهّزت كل شقتي F4 بباقة العائلة. التركيب أخذ مني ساعتين، وحدي. التطبيق بديهي فعلاً والدعم بالعربية ميزة ضخمة. فاتورتي الكهربائية نزلت 2,500 دج/شهر.",
            rating: 5,
            products: "باقة العائلة"
          },
          {
            name: "سميرة م.",
            location: "وهران",
            text: "أخيراً منتجات أتمتة بأسعار معقولة! بدأت بباقة الاكتشاف للتجربة. الآن أطلب باقة الفيلا لمنزلي الجديد. كونها جزائرية يطمئنني لخدمة ما بعد البيع.",
            rating: 5,
            products: "باقة الاكتشاف → باقة الفيلا"
          },
          {
            name: "يوسف ح.",
            location: "قسنطينة",
            text: "كاميرات Symloop مذهلة للسعر. Full HD، رؤية ليلية ممتازة، والأهم البيانات تبقى في الجزائر. استلمت تنبيهاً عند عودة ابني من المدرسة، رائع!",
            rating: 5,
            products: "باقة الأمان"
          },
          {
            name: "نادية ك.",
            location: "عنابة",
            text: "ثرموستات TH-200 غيّر حياتي هذا الصيف. أبرمج التكييف ليشتغل 30 دقيقة قبل عودتي. لن أعود أبداً لمنزل خانق. والاستهلاك انخفض فعلاً.",
            rating: 5,
            products: "ثرموستات TH-200"
          }
        ]
      },

      section10: {
        title: "الأسئلة الشائعة",
        questions: [
          {
            q: "هل منتجات Symloop مصنوعة فعلاً في الجزائر؟",
            a: "نعم، 100% من منتجاتنا مصممة ومُجمّعة في الجزائر، في مصنعنا بالبليدة. نستخدم مكونات عالية الجودة ونوظف مهندسين وتقنيين جزائريين. هذا ما يتيح لنا تقديم أسعار لا تُقارن مع ضمان دعم محلي."
          },
          {
            q: "كيف يعمل النظام بدون إنترنت؟",
            a: "محورنا Symloop يستخدم بروتوكول اتصال محلي (Symloop Mesh). أجهزتك تتواصل مباشرة مع المحور، ليس مع خادم سحابي. الأتمتة المحلية (أضواء، ثرموستات) تعمل حتى بدون إنترنت. فقط التحكم عن بُعد يحتاج اتصالاً."
          },
          {
            q: "ما هو الضمان على المنتجات؟",
            a: "جميع منتجاتنا مضمونة سنتين. في حال وجود مشكلة، خدمة ما بعد البيع في الجزائر تتولى الإصلاح أو الاستبدال. لا حاجة لإرسال أي شيء للخارج. لدينا مراكز خدمة في الجزائر، وهران وقسنطينة."
          },
          {
            q: "هل التركيب يحتاج كهربائياً؟",
            a: "لا لـ 90% من منتجاتنا. المصابيح تُثبت بالبرغي، المقابس تُوصل، المستشعرات تُلصق. فقط مفاتيح الحائط قد تحتاج كهربائياً إذا لم تكن مرتاحاً مع الأسلاك. دعمنا بالفيديو يرشدك خطوة بخطوة."
          },
          {
            q: "هل بياناتي آمنة؟",
            a: "نعم، وهذا من نقاط قوتنا. جميع بياناتك تبقى على خوادمنا في الجزائر. لا نبيع معلوماتك أبداً. التشفير من طرف لطرف. يمكنك حتى اختيار تخزين 100% محلي على المحور، بدون سحابة على الإطلاق."
          },
          {
            q: "هل يمكنني إضافة منتجات تدريجياً؟",
            a: "بالتأكيد! نظامنا معياري. ابدأ بباقة الاكتشاف، ثم أضف أجهزة مع الوقت. جميع منتجات Symloop متوافقة مع بعضها وتُضاف في ثوانٍ عبر التطبيق."
          },
          {
            q: "هل تُوصّلون لجميع الولايات؟",
            a: "نعم، نوصّل لـ 58 ولاية. توصيل مجاني للطلبات فوق 10,000 دج. المدة المتوسطة: 2-5 أيام عمل. الدفع عند التوصيل متوفر."
          },
          {
            q: "ما هو عمر بطارية المحور؟",
            a: "محور Symloop Pro له بطارية احتياطية 8 ساعات. في حال انقطاع الكهرباء، يستمر بالعمل، يحافظ على أتمتتك المحلية ويرسل لك تنبيهات. مثالي للانقطاعات المتكررة في الصيف."
          },
          {
            q: "هل منتجات Symloop متوافقة مع Google Home/Alexa؟",
            a: "نعم! منتجاتنا متوافقة مع Google Assistant و Amazon Alexa للتحكم الصوتي. لكنك لست بحاجة إليها: تطبيقنا Symloop Home يوفر كل الميزات، بما فيها الأوامر الصوتية بالعربية."
          },
          {
            q: "كيف أتواصل مع الدعم؟",
            a: "عدة خيارات: WhatsApp (رد < 5 دقائق)، هاتف، بريد إلكتروني، أو دردشة في التطبيق. دعمنا متوفر 7/7 من 8 صباحاً حتى 10 مساءً. نتحدث الفرنسية والعربية. هذه ميزة حقيقية لدعم محلي يفهم احتياجاتك."
          }
        ]
      },

      cta: {
        title: "انتقل للمنزل الذكي 100% جزائري",
        subtitle: "جهّز منزلك مع Symloop - جودة، سعر ودعم محلي",
        benefits: [
          "صناعة 100% جزائرية",
          "سعر أرخص 50-60% من الاستيراد",
          "دعم عملاء 7/7 بالفرنسية والعربية",
          "ضمان سنتين مع خدمة ما بعد البيع محلية"
        ],
        button: "اطلب الآن",
        buttonSecondary: "اطلب عرضاً",
        contact: "أسئلة؟ WhatsApp: +213 XX XX XX XX"
      }
    }
  };

  const t = content[locale] || content.fr;

  const iconMap = {
    Lightbulb, Thermometer, Shield, Speaker, Home, TrendingUp, BatteryCharging,
    Cpu, Power, Camera, Lock, Zap, Wifi, Settings, Eye, Volume2, Package,
    DollarSign, Smartphone, Wrench, HeartHandshake, Globe, Users, Gauge,
    CheckCircle, Star, Rocket, BadgeCheck
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
        <meta name="keywords" content="maison intelligente algérie, smart home symloop, domotique algérienne, produits locaux, éclairage connecté algérie, sécurité maison algérie" />
        <link rel="canonical" href={`https://www.symloop.com/blog/maison-intelligente-smart-home-algerie-2026`} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.symloop.com/blog/maison-intelligente-smart-home-algerie-2026" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t.title,
            "description": t.metaDesc,
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://www.symloop.com/logo.png" } },
            "datePublished": "2025-12-29",
            "dateModified": "2025-12-29"
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

      <main className={`min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600"></div>
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
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {t.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {t.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {t.author}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Symloop Advantage Banner */}
        <section className="py-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">{t.symloopAdvantage.title}</h2>
              <p className="text-lg opacity-90">{t.symloopAdvantage.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {t.symloopAdvantage.advantages.map((adv, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
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

              {/* Introduction */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {t.intro}
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12 border border-blue-100">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  {t.tableOfContents.title}
                </h2>
                <ol className="space-y-3">
                  {t.tableOfContents.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {idx + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Section 1: What is Smart Home */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">1</span>
                  {t.section1.title}
                </h2>
                {t.section1.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed mb-4">{p}</p>
                ))}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {t.section1.features.map((feature, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-start gap-4 border border-green-200">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                        {getIcon(feature.icon)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{feature.title}</h4>
                        <p className="text-sm text-slate-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Why Smart Home in Algeria */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-cyan-600 text-white rounded-lg flex items-center justify-center">2</span>
                  {t.section2.title}
                </h2>
                <p className="text-slate-700 mb-6">{t.section2.intro}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {t.section2.reasons.map((reason, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-100">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                        {getIcon(reason.icon)}
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">{reason.title}</h4>
                      <p className="text-sm text-slate-600 mb-3">{reason.description}</p>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium inline-block">
                        ✓ {reason.solution}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {t.section2.stats.map((stat, idx) => (
                    <div key={idx} className="bg-green-600 text-white rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Products */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center">3</span>
                  {t.section3.title}
                </h2>
                <p className="text-slate-700 mb-8">{t.section3.intro}</p>

                <div className="space-y-6">
                  {t.section3.categories.map((cat, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-slate-50 to-green-50 rounded-xl p-6 border border-green-200">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-green-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                            {getIcon(cat.icon)}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 text-lg">{cat.name}</h4>
                            <p className="text-slate-600 text-sm">{cat.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{cat.price}</div>
                          <div className="text-sm text-slate-400 line-through">{cat.originalPrice}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.features.map((feature, fIdx) => (
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

              {/* Section 4: App Features */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-lg mb-12 text-white">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">4</span>
                  {t.section4.title}
                </h2>
                <p className="opacity-90 mb-8">{t.section4.intro}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {t.section4.features.map((feature, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        {getIcon(feature.icon)}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.name}</h4>
                        <p className="text-sm opacity-80">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <p className="font-medium mb-2">{isRTL ? 'متوفر على:' : 'Disponible sur :'}</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {t.section4.platforms.map((platform, idx) => (
                      <span key={idx} className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 5: Pricing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center">5</span>
                  {t.section5.title}
                </h2>
                <p className="text-slate-700 mb-8">{t.section5.intro}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {t.section5.packs.map((pack, idx) => (
                    <div key={idx} className={`rounded-xl p-6 border-2 ${idx === 1 ? 'border-green-500 bg-green-50' : 'border-slate-200 bg-slate-50'}`}>
                      {idx === 1 && (
                        <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                          {isRTL ? 'الأكثر شعبية' : 'Le plus populaire'}
                        </div>
                      )}
                      <h4 className="font-bold text-xl text-slate-800 mb-2">{pack.name}</h4>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-green-600">{pack.price}</span>
                        <span className="text-sm text-slate-400 line-through">{pack.originalPrice}</span>
                        <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">-{pack.savings}</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {pack.includes.map((item, iIdx) => (
                          <li key={iIdx} className="text-sm text-slate-600 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-slate-200">
                        <span className="text-sm text-slate-500">{isRTL ? 'مثالي لـ:' : 'Idéal pour :'} </span>
                        <span className="text-sm font-medium text-slate-700">{pack.ideal}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-slate-600 bg-amber-50 rounded-lg p-4 border border-amber-200">
                  💡 {t.section5.note}
                </p>
              </div>

              {/* Section 6: Installation */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg mb-12 text-white">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">6</span>
                  {t.section6.title}
                </h2>
                <p className="opacity-90 mb-8">{t.section6.intro}</p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {t.section6.steps.map((step, idx) => (
                    <div key={idx} className="bg-white/10 rounded-xl p-6 text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                        {step.step}
                      </div>
                      <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                      <p className="text-sm opacity-80 mb-3">{step.description}</p>
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{step.duration}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-500/20 rounded-xl p-6">
                  <h4 className="font-bold mb-4">{isRTL ? 'لا حاجة لـ:' : 'Pas besoin de :'}</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {t.section6.noNeed.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm opacity-80">📱 {t.section6.support}</p>
                </div>
              </div>

              {/* Section 7: Use Cases */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center">7</span>
                  {t.section7.title}
                </h2>
                <p className="text-slate-700 mb-8">{t.section7.intro}</p>

                <div className="space-y-6">
                  {t.section7.scenarios.map((scenario, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-slate-50 to-orange-50 rounded-xl p-6 border border-orange-200">
                      <h4 className="font-bold text-slate-800 text-lg mb-3">{scenario.title}</h4>
                      <p className="text-slate-600 mb-4">{scenario.description}</p>
                      <div className="flex flex-wrap gap-4">
                        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                          <span className="text-sm font-medium">💰 {scenario.savings}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {scenario.products.map((product, pIdx) => (
                            <span key={pIdx} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border border-slate-200">
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 8: Savings */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 shadow-lg mb-12 text-white">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">8</span>
                  {t.section8.title}
                </h2>
                <p className="opacity-90 mb-8">{t.section8.intro}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {t.section8.savings.map((saving, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-bold mb-2">{saving.category}</h4>
                      <div className="text-3xl font-bold text-yellow-300 mb-2">{saving.potential}</div>
                      <p className="text-sm opacity-80 mb-1">{saving.how}</p>
                      <p className="text-sm opacity-60">{saving.example}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h4 className="font-bold text-xl mb-4">📊 {t.section8.totalExample.title}</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm opacity-80">{isRTL ? 'الاستثمار' : 'Investissement'}</p>
                      <p className="font-bold">{t.section8.totalExample.investment}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-80">{isRTL ? 'توفير شهري' : 'Économie/mois'}</p>
                      <p className="font-bold text-yellow-300">{t.section8.totalExample.monthlySavings}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-80">{isRTL ? 'العائد' : 'ROI'}</p>
                      <p className="font-bold">{t.section8.totalExample.roi}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-80">{isRTL ? 'بعد ذلك' : 'Ensuite'}</p>
                      <p className="font-bold">{t.section8.totalExample.after}</p>
                    </div>
                  </div>
                </div>
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
                        <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                          {testimonial.products}
                        </span>
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
              <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
                <p className="text-xl opacity-90 mb-8">{t.cta.subtitle}</p>

                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                  {t.cta.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-colors">
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
