"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User, Zap, Thermometer,
  Lightbulb, Power, Sun, Moon, Gauge, TrendingDown,
  CheckCircle, Home, DollarSign, Star, Package,
  Smartphone, Wifi, BatteryCharging, BarChart3, Target,
  Settings, Timer, Leaf, Wind, Droplets, Flame,
  Users, Globe, Phone, Rocket, Award, PieChart, Eye
} from "lucide-react";

export default function EconomieEnergieMaisonIntelligentClimatisationAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Économies d'Énergie Maison Intelligente Algérie 2026 : Climatisation, Éclairage & Automatisation",
      subtitle: "Réduisez Vos Factures de 30-50% avec les Solutions Symloop - Thermostat Intelligent, LED Connectées, Gestion Automatique",
      metaTitle: "Économie Énergie Maison Algérie 2026 | Climatisation Intelligente Symloop",
      metaDesc: "Réduisez vos factures d'électricité de 30-50% avec Symloop. Thermostat intelligent, éclairage LED connecté, prises smart. Solutions algériennes pour économiser sur la climatisation et l'électricité.",
      date: "29 Décembre 2025",
      readTime: "16 min",
      author: "Symloop Team",
      category: "Économie d'Énergie",

      intro: "En Algérie, la facture d'électricité peut devenir un cauchemar, surtout en été avec la climatisation. Les tarifs augmentent, les coupures sont fréquentes, et la consommation explose. Symloop a développé une gamme complète de produits d'économie d'énergie intelligents, fabriqués en Algérie, qui vous permettent de réduire votre consommation de 30 à 50% tout en améliorant votre confort. Thermostat intelligent, éclairage LED connecté, prises avec mesure de consommation - reprenez le contrôle de vos factures.",

      energyChallenge: {
        title: "Le Défi Énergétique en Algérie",
        subtitle: "Pourquoi Vos Factures Explosent et Comment y Remédier",
        challenges: [
          {
            icon: "Thermometer",
            title: "Climatisation Énergivore",
            description: "La clim représente 50-70% de la facture d'été. Sans gestion intelligente, elle tourne inutilement, même quand vous n'êtes pas là.",
            cost: "5,000 - 15,000 DA/mois en été"
          },
          {
            icon: "Lightbulb",
            title: "Éclairage Gaspillé",
            description: "Les lumières restent allumées dans les pièces vides. Les ampoules classiques consomment 5x plus que les LED.",
            cost: "1,000 - 2,500 DA/mois"
          },
          {
            icon: "Power",
            title: "Appareils en Veille",
            description: "TV, décodeur, chargeurs, box internet... Les veilles représentent 10-15% de votre facture annuelle.",
            cost: "800 - 1,500 DA/mois"
          },
          {
            icon: "Flame",
            title: "Chauffe-eau Non Optimisé",
            description: "Le chauffe-eau électrique chauffe 24/7 alors que vous n'avez besoin d'eau chaude que quelques heures par jour.",
            cost: "1,500 - 3,000 DA/mois"
          },
          {
            icon: "TrendingDown",
            title: "Tarifs en Hausse",
            description: "Les prix de l'électricité augmentent régulièrement. Sans action, vos factures ne feront qu'augmenter.",
            cost: "+10-15%/an prévu"
          },
          {
            icon: "BatteryCharging",
            title: "Coupures Coûteuses",
            description: "Quand le courant revient après une coupure, la clim redémarre à fond. Pic de consommation = pic de facture.",
            cost: "Variable mais significatif"
          }
        ],
        totalWaste: {
          title: "Ce Que Vous Perdez Chaque Année",
          amount: "25,000 - 60,000 DA",
          description: "en énergie gaspillée que Symloop peut vous aider à économiser"
        }
      },

      tableOfContents: {
        title: "Dans cet article",
        items: [
          "Le défi énergétique en Algérie",
          "Comment Symloop réduit vos factures",
          "Thermostat intelligent TH-200",
          "Éclairage LED connecté",
          "Prises intelligentes avec mesure",
          "Automatisations pour économiser",
          "Calculateur d'économies",
          "Packs Économie d'Énergie",
          "Témoignages clients",
          "FAQ"
        ]
      },

      section1: {
        title: "Comment Symloop Réduit Vos Factures",
        intro: "Notre approche en 4 piliers pour des économies réelles et mesurables :",
        pillars: [
          {
            name: "1. Mesurer",
            description: "Vous ne pouvez pas améliorer ce que vous ne mesurez pas. Nos prises intelligentes vous montrent exactement combien consomme chaque appareil.",
            icon: "Gauge",
            result: "Identifiez les appareils énergivores"
          },
          {
            name: "2. Optimiser",
            description: "Le thermostat intelligent apprend vos habitudes et optimise automatiquement la climatisation. Plus de gaspillage quand vous êtes absent.",
            icon: "Settings",
            result: "25-35% d'économie sur la clim"
          },
          {
            name: "3. Automatiser",
            description: "Les lumières s'éteignent automatiquement dans les pièces vides. Les appareils en veille se coupent la nuit. Tout est programmable.",
            icon: "Timer",
            result: "Zéro gaspillage, zéro effort"
          },
          {
            name: "4. Visualiser",
            description: "L'application vous montre votre consommation en temps réel, par jour, semaine, mois. Comparez et suivez vos progrès.",
            icon: "BarChart3",
            result: "Conscience = économies durables"
          }
        ],
        guarantee: {
          title: "Notre Garantie",
          description: "Si vous n'économisez pas au moins 20% sur votre facture d'électricité dans les 6 mois suivant l'installation, nous vous remboursons la différence."
        }
      },

      section2: {
        title: "Thermostat Intelligent Symloop TH-200",
        subtitle: "L'Appareil Qui Économise Le Plus",
        intro: "La climatisation représente jusqu'à 70% de votre facture d'été. Le thermostat TH-200 peut réduire cette consommation de 25-35%.",
        features: [
          {
            name: "Compatibilité Universelle",
            description: "Fonctionne avec 99% des climatiseurs split vendus en Algérie. Condor, Samsung, LG, Midea, TCL... Tous compatibles.",
            icon: "CheckCircle"
          },
          {
            name: "Apprentissage Automatique",
            description: "Le TH-200 apprend vos habitudes. Il sait quand vous rentrez du travail et préchauffe ou refroidit juste avant votre arrivée.",
            icon: "Target"
          },
          {
            name: "Géolocalisation",
            description: "Activez le mode Géo : la clim s'allume quand vous approchez de la maison et s'éteint quand vous partez. Automatique.",
            icon: "Globe"
          },
          {
            name: "Programmation Hebdomadaire",
            description: "Créez des programmes différents pour chaque jour. Weekend à la maison ? Programme confort. Semaine au travail ? Programme éco.",
            icon: "Calendar"
          },
          {
            name: "Mode Économie Intelligent",
            description: "Le mode Éco maintient une température confortable tout en minimisant la consommation. L'IA ajuste en fonction de la météo.",
            icon: "Leaf"
          },
          {
            name: "Suivi Consommation",
            description: "Voyez combien votre climatiseur consomme en temps réel, par jour, par mois. Comparez avec le mois précédent.",
            icon: "BarChart3"
          }
        ],
        savings: {
          title: "Économies Concrètes avec le TH-200",
          before: {
            label: "Sans TH-200",
            summer: "Facture été moyenne : 12,000 DA/mois",
            behavior: "Clim allumée à fond toute la journée"
          },
          after: {
            label: "Avec TH-200",
            summer: "Facture été optimisée : 7,500 DA/mois",
            behavior: "Clim intelligente uniquement quand nécessaire"
          },
          result: "Économie : 4,500 DA/mois × 4 mois = 18,000 DA/an",
          roi: "Le TH-200 coûte 8,500 DA. Rentabilisé en moins de 2 mois d'été !"
        },
        price: "8,500 DA",
        originalPrice: "22,000 DA (thermostat Nest importé)"
      },

      section3: {
        title: "Éclairage LED Connecté Symloop",
        subtitle: "Lumière Intelligente, Facture Légère",
        intro: "L'éclairage représente 15-20% de votre facture. Les ampoules LED consomment 80% de moins que les ampoules classiques, et nos LED connectées ajoutent l'automatisation.",
        products: [
          {
            name: "Ampoule Symloop LED E27",
            description: "Remplacez vos ampoules classiques par nos LED intelligentes. Contrôle app + automatisation.",
            specs: ["9W = 60W classique", "16 millions de couleurs", "Durée de vie 25,000h", "Programmation horaire"],
            price: "1,800 DA",
            originalPrice: "4,500 DA (Philips Hue)"
          },
          {
            name: "Ampoule Symloop LED E14",
            description: "Pour vos lustres et luminaires à petit culot. Même intelligence, format compact.",
            specs: ["5W = 40W classique", "Blanc chaud/froid", "Durée de vie 25,000h", "Dimmable 1-100%"],
            price: "1,600 DA",
            originalPrice: "4,000 DA (importé)"
          },
          {
            name: "Spot Symloop GU10",
            description: "Pour faux plafonds et spots encastrés. LED connecté au format spot.",
            specs: ["6W = 50W halogène", "Angle 120°", "Pas de scintillement", "RGB optionnel"],
            price: "2,200 DA",
            originalPrice: "5,000 DA (importé)"
          },
          {
            name: "Ruban LED Symloop",
            description: "Éclairage d'ambiance intelligent. Parfait pour TV, cuisine, chambre.",
            specs: ["5m extensible", "Coupable tous les 5cm", "Adhésif 3M", "16M couleurs + effets"],
            price: "3,500 DA",
            originalPrice: "8,000 DA (importé)"
          }
        ],
        automations: [
          {
            title: "Extinction Automatique",
            description: "Combiné avec nos détecteurs de mouvement, les lumières s'éteignent après 10 minutes sans présence.",
            saving: "30-50% sur l'éclairage"
          },
          {
            title: "Simulation de Présence",
            description: "En vacances, les lumières s'allument/éteignent aléatoirement pour simuler une présence.",
            saving: "Sécurité + pas de gaspillage"
          },
          {
            title: "Horaires Coucher/Lever",
            description: "Les lumières baissent progressivement le soir, se rallument doucement le matin.",
            saving: "Confort + économies"
          }
        ],
        comparison: {
          title: "Comparatif Consommation",
          data: [
            { type: "Ampoule incandescente", watts: "60W", cost: "~800 DA/an", lifespan: "1,000h" },
            { type: "Ampoule halogène", watts: "42W", cost: "~560 DA/an", lifespan: "2,000h" },
            { type: "LED classique", watts: "9W", cost: "~120 DA/an", lifespan: "15,000h" },
            { type: "LED Symloop connectée", watts: "9W + auto", cost: "~60 DA/an", lifespan: "25,000h" }
          ]
        }
      },

      section4: {
        title: "Prises Intelligentes avec Mesure de Consommation",
        subtitle: "Voyez Où Part Votre Électricité",
        intro: "Nos prises intelligentes ne font pas que allumer/éteindre. Elles mesurent précisément la consommation de chaque appareil branché.",
        products: [
          {
            name: "Prise Symloop SP-100",
            description: "Prise intelligente standard avec mesure de consommation en temps réel.",
            features: ["Mesure Watts en temps réel", "Historique consommation", "Programmation horaire", "Protection surtension", "Max 16A/3500W"],
            price: "2,500 DA",
            originalPrice: "5,500 DA (importé)"
          },
          {
            name: "Multiprise Symloop MP-400",
            description: "Multiprise 4 prises, chacune contrôlable individuellement avec mesure.",
            features: ["4 prises indépendantes", "Mesure par prise", "Interrupteur physique", "Protection parafoudre", "USB-A et USB-C"],
            price: "6,500 DA",
            originalPrice: "15,000 DA (importé)"
          }
        ],
        useCases: [
          {
            title: "Découvrez les Vampires Énergétiques",
            description: "Branchez la prise Symloop sur votre TV. Surprise : elle consomme 15W même éteinte ! La box internet : 12W 24/7. Identifiez et éliminez ces gaspillages.",
            icon: "Eye"
          },
          {
            title: "Coupure Automatique Veilles",
            description: "Programmez la prise pour couper le courant à 23h sur le meuble TV. Plus de veilles la nuit. Économie automatique.",
            icon: "Timer"
          },
          {
            title: "Chauffe-eau Intelligent",
            description: "Branchez votre chauffe-eau sur la prise SP-100. Programmez-le pour chauffer uniquement de 5h à 7h et de 18h à 20h. Économie de 40%.",
            icon: "Flame"
          },
          {
            title: "Bureau à Domicile",
            description: "Votre setup PC (écran, unité, imprimante) sur la multiprise. Un tap dans l'app et tout s'éteint quand vous finissez de travailler.",
            icon: "Smartphone"
          }
        ],
        realExample: {
          title: "Exemple Réel : Ce Que J'ai Découvert",
          discoveries: [
            { device: "Décodeur TV", standby: "18W", monthly: "13 kWh = 180 DA/mois" },
            { device: "Box Internet", always: "15W", monthly: "11 kWh = 150 DA/mois" },
            { device: "Chargeur laptop (branché)", standby: "5W", monthly: "3.6 kWh = 50 DA/mois" },
            { device: "Imprimante veille", standby: "8W", monthly: "5.8 kWh = 80 DA/mois" },
            { device: "Console PS5 veille", standby: "10W", monthly: "7.2 kWh = 100 DA/mois" }
          ],
          total: "560 DA/mois = 6,720 DA/an perdus en veilles !",
          solution: "Avec les prises Symloop, programmation automatique : économie récupérée"
        }
      },

      section5: {
        title: "Automatisations pour Économiser",
        subtitle: "Programmez Une Fois, Économisez Pour Toujours",
        intro: "L'application Symloop Home vous permet de créer des automatisations intelligentes qui économisent sans que vous ayez à y penser.",
        automations: [
          {
            name: "Scénario 'Bonne Nuit'",
            trigger: "À 23h00 ou quand vous dites 'Bonne nuit'",
            actions: [
              "Éteindre toutes les lumières sauf chambre",
              "Couper les prises TV/console/bureau",
              "Mettre la clim en mode nuit (27°C)",
              "Activer le mode économie chauffe-eau"
            ],
            saving: "~50 DA/nuit = 1,500 DA/mois"
          },
          {
            name: "Scénario 'Départ Travail'",
            trigger: "Quand tout le monde quitte la maison (GPS)",
            actions: [
              "Éteindre toutes les lumières",
              "Passer la clim en mode éco (30°C)",
              "Couper les prises non essentielles",
              "Activer les caméras"
            ],
            saving: "~80 DA/jour = 2,400 DA/mois"
          },
          {
            name: "Scénario 'Retour Maison'",
            trigger: "15 minutes avant votre arrivée (GPS)",
            actions: [
              "Allumer la clim à 24°C",
              "Allumer lumière entrée",
              "Préparer la maison à votre goût"
            ],
            saving: "Confort sans gaspillage préalable"
          },
          {
            name: "Scénario 'Vacances'",
            trigger: "Mode vacances activé manuellement",
            actions: [
              "Couper tout sauf frigo et alarme",
              "Simulation de présence (lumières aléatoires)",
              "Alertes si consommation anormale"
            ],
            saving: "Maximum d'économies + sécurité"
          }
        ],
        conditionExamples: [
          "Si température extérieure > 35°C ET personne à la maison → Pré-refroidir 30 min avant arrivée",
          "Si 22h < heure < 6h ET lumière salon allumée → Éteindre après 30 min sans mouvement",
          "Si jour = Vendredi ET heure > 13h → Activer mode weekend"
        ]
      },

      section6: {
        title: "Calculateur d'Économies",
        subtitle: "Estimez Vos Économies Potentielles",
        intro: "Basé sur une famille type en Algérie avec un appartement F3-F4 :",
        scenarios: [
          {
            profile: "Famille avec climatisation été",
            current: "Facture été : 12,000 DA/mois",
            withSymloop: "Avec Symloop : 7,500 DA/mois",
            savings: "4,500 DA/mois = 18,000 DA/été",
            products: "TH-200 + Prises intelligentes"
          },
          {
            profile: "Appartement éclairage classique",
            current: "Éclairage : 2,000 DA/mois",
            withSymloop: "Avec LED Symloop : 800 DA/mois",
            savings: "1,200 DA/mois = 14,400 DA/an",
            products: "10 ampoules LED + détecteurs"
          },
          {
            profile: "Équipements électroniques",
            current: "Veilles : 600 DA/mois",
            withSymloop: "Avec prises programmées : 100 DA/mois",
            savings: "500 DA/mois = 6,000 DA/an",
            products: "4 prises SP-100"
          },
          {
            profile: "Chauffe-eau électrique",
            current: "Chauffe-eau : 2,500 DA/mois",
            withSymloop: "Optimisé : 1,500 DA/mois",
            savings: "1,000 DA/mois = 12,000 DA/an",
            products: "1 prise SP-100 programmée"
          }
        ],
        totalExample: {
          title: "Économies Totales Annuelles Possibles",
          total: "50,400 DA/an",
          investment: "Investissement Pack Économie : 35,000 DA",
          roi: "Rentabilisé en 8 mois, puis économies nettes"
        }
      },

      section7: {
        title: "Packs Économie d'Énergie Symloop 2026",
        intro: "Solutions complètes pour réduire vos factures. Jusqu'à 60% moins cher que l'import !",
        packs: [
          {
            name: "Pack Éco Starter",
            price: "15,000 DA",
            originalPrice: "38,000 DA importé",
            savings: "60%",
            includes: [
              "1 Hub Symloop Mini",
              "4 Ampoules LED E27 connectées",
              "2 Prises intelligentes SP-100",
              "Application Symloop Home"
            ],
            annualSaving: "~12,000 DA/an",
            ideal: "Studio ou chambre"
          },
          {
            name: "Pack Éco Famille",
            price: "35,000 DA",
            originalPrice: "85,000 DA importé",
            savings: "59%",
            includes: [
              "1 Hub Symloop Pro",
              "1 Thermostat TH-200",
              "8 Ampoules LED connectées",
              "4 Prises intelligentes SP-100",
              "2 Détecteurs de mouvement",
              "Application + Support prioritaire"
            ],
            annualSaving: "~35,000 DA/an",
            ideal: "Appartement F3-F4"
          },
          {
            name: "Pack Éco Villa",
            price: "65,000 DA",
            originalPrice: "160,000 DA importé",
            savings: "59%",
            includes: [
              "1 Hub Symloop Pro+",
              "2 Thermostats TH-200 (2 zones)",
              "15 Ampoules LED connectées",
              "6 Prises intelligentes SP-100",
              "1 Multiprise MP-400",
              "4 Détecteurs de mouvement",
              "2 Interrupteurs muraux smart",
              "Consultation énergétique incluse"
            ],
            annualSaving: "~60,000 DA/an",
            ideal: "Villa ou grande maison"
          },
          {
            name: "Pack Éco Commerce",
            price: "85,000 DA",
            originalPrice: "200,000 DA importé",
            savings: "57%",
            includes: [
              "1 Hub Symloop Pro + 4G",
              "2 Thermostats TH-200",
              "20 Ampoules/Spots LED",
              "8 Prises intelligentes",
              "Programmation horaire commerce",
              "Rapports consommation mensuels",
              "Installation professionnelle"
            ],
            annualSaving: "~100,000 DA/an",
            ideal: "Magasin, bureau, restaurant"
          }
        ],
        note: "Tous les packs incluent la livraison gratuite, l'installation DIY guidée, la garantie 2 ans, et le support 7j/7. ROI garanti sous 12 mois."
      },

      section8: {
        title: "Témoignages Clients Économie d'Énergie",
        testimonials: [
          {
            name: "Rachid M.",
            location: "Alger, Bab Ezzouar",
            text: "Ma facture d'été est passée de 14,000 DA à 8,500 DA. Le thermostat TH-200 a tout changé. Il apprend vraiment nos habitudes. La clim s'allume 20 min avant mon retour du travail. Magie !",
            rating: 5,
            products: "Pack Éco Famille",
            saving: "5,500 DA/mois économisés"
          },
          {
            name: "Yasmine B.",
            location: "Oran",
            text: "J'ai commencé par acheter 2 prises intelligentes pour voir. Quand j'ai découvert que ma box TV consommait 18W en veille 24h/24, j'ai commandé le pack complet. Maintenant tout se coupe automatiquement la nuit.",
            rating: 5,
            products: "Prises SP-100",
            saving: "Veilles réduites de 90%"
          },
          {
            name: "Kamel H.",
            location: "Constantine",
            text: "En tant que commerçant, ma facture d'électricité était mon deuxième plus gros poste de dépense après le loyer. Avec Symloop, j'ai réduit de 40%. Les lumières s'éteignent quand le magasin est vide, la clim s'adapte au nombre de clients.",
            rating: 5,
            products: "Pack Éco Commerce",
            saving: "40,000 DA/an économisés"
          },
          {
            name: "Leila K.",
            location: "Sétif",
            text: "Les enfants laissaient toujours les lumières allumées. Maintenant avec les détecteurs de mouvement, elles s'éteignent toutes seules. Et l'app me montre exactement combien on consomme. C'est devenu un jeu de famille de réduire !",
            rating: 5,
            products: "LED + Détecteurs",
            saving: "Éclairage divisé par 3"
          }
        ]
      },

      section9: {
        title: "FAQ Économie d'Énergie",
        questions: [
          {
            q: "Combien puis-je vraiment économiser ?",
            a: "En moyenne, nos clients économisent 25-40% sur leur facture d'électricité. Pour une famille avec climatisation, cela représente souvent 30,000 à 50,000 DA par an. Le thermostat seul peut faire économiser 18,000 DA sur un été. ROI en moins d'un an garanti."
          },
          {
            q: "Le thermostat TH-200 est-il compatible avec mon climatiseur ?",
            a: "Oui, le TH-200 est compatible avec 99% des climatiseurs split vendus en Algérie. Il fonctionne par infrarouge, comme votre télécommande. Marques testées : Condor, Samsung, LG, Midea, TCL, Hisense, Gree, Haier, Carrier, et bien d'autres."
          },
          {
            q: "Les ampoules LED sont-elles aussi lumineuses que les classiques ?",
            a: "Oui, et souvent mieux ! Notre LED 9W éclaire autant qu'une ampoule classique de 60W. La différence : elle consomme 85% de moins et dure 25x plus longtemps. En plus, vous pouvez varier l'intensité (dimmer) selon vos besoins."
          },
          {
            q: "Comment fonctionne la mesure de consommation des prises ?",
            a: "La prise SP-100 mesure en temps réel les Watts consommés par l'appareil branché. L'application vous montre : consommation instantanée, historique par heure/jour/mois, coût estimé en DA. Vous pouvez même recevoir des alertes si un appareil consomme trop."
          },
          {
            q: "Puis-je contrôler le système si je suis à l'étranger ?",
            a: "Oui, l'application fonctionne partout dans le monde. Vous pouvez voir votre consommation, contrôler vos appareils, modifier les automatisations depuis la France, le Canada, ou n'importe où. Connexion sécurisée et cryptée."
          },
          {
            q: "Que se passe-t-il en cas de coupure de courant ?",
            a: "Quand le courant revient, tous vos appareils Symloop reprennent leur état programmé. Le thermostat ne redémarre pas la clim à fond, il reprend le programme en cours. Le hub conserve vos automatisations même sans courant (mémoire interne)."
          },
          {
            q: "Est-ce compliqué à installer ?",
            a: "Non ! Les ampoules se vissent, les prises se branchent, le thermostat se pose sur une table ou se fixe au mur (adhésif fourni). L'app vous guide étape par étape. La plupart des clients installent leur pack en moins de 2 heures."
          },
          {
            q: "Y a-t-il des frais mensuels ?",
            a: "Non, zéro frais mensuel. L'application est gratuite à vie. Les fonctionnalités d'économie d'énergie sont incluses. Vous payez une fois pour le matériel, et les économies commencent immédiatement."
          },
          {
            q: "Comment être sûr que ça fonctionne vraiment ?",
            a: "Notre garantie ROI : si vous n'économisez pas au moins 20% sur votre facture en 6 mois, nous vous remboursons la différence. De plus, l'app vous montre en temps réel vos économies. Vous pouvez comparer vos factures avant/après."
          },
          {
            q: "Quel pack me recommandez-vous ?",
            a: "Pour un appartement avec clim : le Pack Éco Famille (35,000 DA) inclut le thermostat qui fera la plus grosse différence. Pour commencer petit : le Pack Starter (15,000 DA) permet de tester avec les prises et LED. Contactez-nous pour un conseil personnalisé gratuit."
          }
        ]
      },

      cta: {
        title: "Commencez à Économiser Dès Aujourd'hui",
        subtitle: "Solutions Symloop - Fabrication Algérienne, Économies Garanties",
        benefits: [
          "Économisez 30-50% sur vos factures",
          "Produits fabriqués en Algérie",
          "ROI garanti en moins de 12 mois",
          "Support local 7j/7"
        ],
        button: "Commander un Pack Économie",
        buttonSecondary: "Calculer Mes Économies",
        contact: "Questions ? WhatsApp : +213 XX XX XX XX"
      }
    },
    ar: {
      title: "توفير الطاقة المنزل الذكي الجزائر 2026: تكييف، إضاءة وأتمتة",
      subtitle: "خفّض فواتيرك 30-50% مع حلول Symloop - ثرموستات ذكي، LED متصلة، إدارة تلقائية",
      metaTitle: "توفير طاقة المنزل الجزائر 2026 | تكييف ذكي Symloop",
      metaDesc: "خفّض فواتير الكهرباء 30-50% مع Symloop. ثرموستات ذكي، إضاءة LED متصلة، مقابس ذكية. حلول جزائرية للتوفير على التكييف والكهرباء.",
      date: "29 ديسمبر 2025",
      readTime: "16 دقيقة",
      author: "فريق Symloop",
      category: "توفير الطاقة",

      intro: "في الجزائر، يمكن أن تصبح فاتورة الكهرباء كابوساً، خاصة في الصيف مع التكييف. الأسعار ترتفع، الانقطاعات متكررة، والاستهلاك يتضخم. طورت Symloop مجموعة كاملة من منتجات توفير الطاقة الذكية، مصنوعة في الجزائر، تتيح لك تقليل استهلاكك بنسبة 30 إلى 50% مع تحسين راحتك. ثرموستات ذكي، إضاءة LED متصلة، مقابس مع قياس الاستهلاك - استعد السيطرة على فواتيرك.",

      energyChallenge: {
        title: "تحدي الطاقة في الجزائر",
        subtitle: "لماذا تتضخم فواتيرك وكيف تعالجها",
        challenges: [
          {
            icon: "Thermometer",
            title: "تكييف مستهلك للطاقة",
            description: "التكييف يمثل 50-70% من فاتورة الصيف. بدون إدارة ذكية، يعمل بلا جدوى، حتى عندما لست موجوداً.",
            cost: "5,000 - 15,000 دج/شهر صيفاً"
          },
          {
            icon: "Lightbulb",
            title: "إضاءة مهدرة",
            description: "الأضواء تبقى مشتعلة في الغرف الفارغة. المصابيح التقليدية تستهلك 5x أكثر من LED.",
            cost: "1,000 - 2,500 دج/شهر"
          },
          {
            icon: "Power",
            title: "أجهزة في وضع الاستعداد",
            description: "TV، جهاز فك التشفير، الشواحن، راوتر الإنترنت... أجهزة الاستعداد تمثل 10-15% من فاتورتك السنوية.",
            cost: "800 - 1,500 دج/شهر"
          },
          {
            icon: "Flame",
            title: "سخان مياه غير محسّن",
            description: "السخان الكهربائي يسخن 24/7 بينما تحتاج ماء ساخن فقط ساعات قليلة يومياً.",
            cost: "1,500 - 3,000 دج/شهر"
          },
          {
            icon: "TrendingDown",
            title: "أسعار مرتفعة",
            description: "أسعار الكهرباء ترتفع بانتظام. بدون إجراء، فواتيرك ستزيد فقط.",
            cost: "+10-15%/سنة متوقع"
          },
          {
            icon: "BatteryCharging",
            title: "انقطاعات مكلفة",
            description: "عند عودة التيار بعد انقطاع، التكييف يُعاد تشغيله بقوة. ذروة استهلاك = ذروة فاتورة.",
            cost: "متغير لكن كبير"
          }
        ],
        totalWaste: {
          title: "ما تخسره كل سنة",
          amount: "25,000 - 60,000 دج",
          description: "في طاقة مهدرة يمكن لـ Symloop مساعدتك في توفيرها"
        }
      },

      tableOfContents: {
        title: "في هذا المقال",
        items: [
          "تحدي الطاقة في الجزائر",
          "كيف يخفض Symloop فواتيرك",
          "ثرموستات ذكي TH-200",
          "إضاءة LED متصلة",
          "مقابس ذكية مع قياس",
          "أتمتة للتوفير",
          "حاسبة التوفير",
          "باقات توفير الطاقة",
          "شهادات العملاء",
          "أسئلة شائعة"
        ]
      },

      section1: {
        title: "كيف يخفض Symloop فواتيرك",
        intro: "نهجنا في 4 ركائز لتوفير حقيقي وقابل للقياس:",
        pillars: [
          {
            name: "1. قياس",
            description: "لا يمكنك تحسين ما لا تقيسه. مقابسنا الذكية تُظهر لك بالضبط كم يستهلك كل جهاز.",
            icon: "Gauge",
            result: "حدد الأجهزة المستهلكة للطاقة"
          },
          {
            name: "2. تحسين",
            description: "الثرموستات الذكي يتعلم عاداتك ويُحسّن التكييف تلقائياً. لا مزيد من الهدر عند غيابك.",
            icon: "Settings",
            result: "25-35% توفير على التكييف"
          },
          {
            name: "3. أتمتة",
            description: "الأضواء تُطفأ تلقائياً في الغرف الفارغة. أجهزة الاستعداد تنقطع ليلاً. كل شيء قابل للبرمجة.",
            icon: "Timer",
            result: "صفر هدر، صفر جهد"
          },
          {
            name: "4. تصوّر",
            description: "التطبيق يُظهر لك استهلاكك في الوقت الفعلي، يومياً، أسبوعياً، شهرياً. قارن وتابع تقدمك.",
            icon: "BarChart3",
            result: "وعي = توفير مستدام"
          }
        ],
        guarantee: {
          title: "ضماننا",
          description: "إذا لم توفر على الأقل 20% على فاتورة كهربائك في 6 أشهر بعد التركيب، نُعيد لك الفرق."
        }
      },

      section2: {
        title: "ثرموستات Symloop TH-200 الذكي",
        subtitle: "الجهاز الذي يوفر أكثر",
        intro: "التكييف يمثل حتى 70% من فاتورة صيفك. ثرموستات TH-200 يمكنه تقليل هذا الاستهلاك بـ 25-35%.",
        features: [
          {
            name: "توافق شامل",
            description: "يعمل مع 99% من مكيفات السبليت المباعة في الجزائر. Condor، Samsung، LG، Midea، TCL... كلها متوافقة.",
            icon: "CheckCircle"
          },
          {
            name: "تعلّم تلقائي",
            description: "TH-200 يتعلم عاداتك. يعرف متى تعود من العمل ويُسخّن أو يُبرّد قبل وصولك مباشرة.",
            icon: "Target"
          },
          {
            name: "تحديد الموقع",
            description: "فعّل وضع Geo: التكييف يشتغل عند اقترابك من المنزل وينطفئ عند مغادرتك. تلقائي.",
            icon: "Globe"
          },
          {
            name: "برمجة أسبوعية",
            description: "أنشئ برامج مختلفة لكل يوم. نهاية أسبوع في المنزل؟ برنامج راحة. أسبوع عمل؟ برنامج eco.",
            icon: "Calendar"
          },
          {
            name: "وضع توفير ذكي",
            description: "وضع Eco يحافظ على درجة مريحة مع تقليل الاستهلاك. الذكاء الاصطناعي يُعدّل حسب الطقس.",
            icon: "Leaf"
          },
          {
            name: "متابعة الاستهلاك",
            description: "شاهد كم يستهلك مكيفك في الوقت الفعلي، يومياً، شهرياً. قارن مع الشهر السابق.",
            icon: "BarChart3"
          }
        ],
        savings: {
          title: "توفير ملموس مع TH-200",
          before: {
            label: "بدون TH-200",
            summer: "فاتورة صيف متوسطة: 12,000 دج/شهر",
            behavior: "التكييف مشتغل بقوة طوال اليوم"
          },
          after: {
            label: "مع TH-200",
            summer: "فاتورة صيف محسّنة: 7,500 دج/شهر",
            behavior: "تكييف ذكي فقط عند الحاجة"
          },
          result: "توفير: 4,500 دج/شهر × 4 أشهر = 18,000 دج/سنة",
          roi: "TH-200 يكلف 8,500 دج. يُسترد في أقل من شهرين صيف!"
        },
        price: "8,500 دج",
        originalPrice: "22,000 دج (ثرموستات Nest مستورد)"
      },

      section7: {
        title: "باقات توفير الطاقة Symloop 2026",
        intro: "حلول كاملة لتخفيض فواتيرك. حتى 60% أرخص من الاستيراد!",
        packs: [
          {
            name: "باقة Eco Starter",
            price: "15,000 دج",
            originalPrice: "38,000 دج مستورد",
            savings: "60%",
            includes: [
              "1 محور Symloop Mini",
              "4 مصابيح LED E27 متصلة",
              "2 مقابس ذكية SP-100",
              "تطبيق Symloop Home"
            ],
            annualSaving: "~12,000 دج/سنة",
            ideal: "استوديو أو غرفة"
          },
          {
            name: "باقة Eco العائلة",
            price: "35,000 دج",
            originalPrice: "85,000 دج مستورد",
            savings: "59%",
            includes: [
              "1 محور Symloop Pro",
              "1 ثرموستات TH-200",
              "8 مصابيح LED متصلة",
              "4 مقابس ذكية SP-100",
              "2 كاشف حركة",
              "تطبيق + دعم أولوية"
            ],
            annualSaving: "~35,000 دج/سنة",
            ideal: "شقة F3-F4"
          },
          {
            name: "باقة Eco الفيلا",
            price: "65,000 دج",
            originalPrice: "160,000 دج مستورد",
            savings: "59%",
            includes: [
              "1 محور Symloop Pro+",
              "2 ثرموستات TH-200 (منطقتين)",
              "15 مصباح LED متصل",
              "6 مقابس ذكية SP-100",
              "1 مشترك MP-400",
              "4 كاشف حركة",
              "2 مفتاح حائط ذكي",
              "استشارة طاقة مشمولة"
            ],
            annualSaving: "~60,000 دج/سنة",
            ideal: "فيلا أو منزل كبير"
          },
          {
            name: "باقة Eco التجارة",
            price: "85,000 دج",
            originalPrice: "200,000 دج مستورد",
            savings: "57%",
            includes: [
              "1 محور Symloop Pro + 4G",
              "2 ثرموستات TH-200",
              "20 مصباح/سبوت LED",
              "8 مقابس ذكية",
              "برمجة زمنية تجارية",
              "تقارير استهلاك شهرية",
              "تركيب احترافي"
            ],
            annualSaving: "~100,000 دج/سنة",
            ideal: "محل، مكتب، مطعم"
          }
        ],
        note: "جميع الباقات تشمل التوصيل المجاني، تركيب DIY موجه، ضمان سنتين، ودعم 7/7. عائد الاستثمار مضمون خلال 12 شهراً."
      },

      section8: {
        title: "شهادات عملاء توفير الطاقة",
        testimonials: [
          {
            name: "رشيد م.",
            location: "الجزائر، باب الزوار",
            text: "فاتورتي الصيفية انخفضت من 14,000 دج إلى 8,500 دج. ثرموستات TH-200 غيّر كل شيء. يتعلم فعلاً عاداتنا. التكييف يشتغل 20 دقيقة قبل عودتي من العمل. سحر!",
            rating: 5,
            products: "باقة Eco العائلة",
            saving: "5,500 دج/شهر موفر"
          },
          {
            name: "ياسمين ب.",
            location: "وهران",
            text: "بدأت بشراء 2 مقابس ذكية للتجربة. عندما اكتشفت أن جهاز فك تشفير التلفزيون يستهلك 18W في وضع الاستعداد 24/24، طلبت الباقة الكاملة. الآن كل شيء ينقطع تلقائياً ليلاً.",
            rating: 5,
            products: "مقابس SP-100",
            saving: "وضع الاستعداد انخفض 90%"
          },
          {
            name: "كمال ح.",
            location: "قسنطينة",
            text: "كتاجر، فاتورة الكهرباء كانت ثاني أكبر نفقاتي بعد الإيجار. مع Symloop، خفضت 40%. الأضواء تنطفئ عندما المحل فارغ، التكييف يتكيف مع عدد الزبائن.",
            rating: 5,
            products: "باقة Eco التجارة",
            saving: "40,000 دج/سنة موفر"
          },
          {
            name: "ليلى ك.",
            location: "سطيف",
            text: "الأطفال كانوا دائماً يتركون الأضواء مشتعلة. الآن مع كواشف الحركة، تنطفئ وحدها. والتطبيق يُظهر لي بالضبط كم نستهلك. أصبحت لعبة عائلية للتخفيض!",
            rating: 5,
            products: "LED + كواشف",
            saving: "الإضاءة انقسمت على 3"
          }
        ]
      },

      section9: {
        title: "أسئلة شائعة توفير الطاقة",
        questions: [
          {
            q: "كم يمكنني توفيره فعلاً؟",
            a: "في المتوسط، عملاؤنا يوفرون 25-40% على فاتورة الكهرباء. لعائلة مع تكييف، هذا يمثل غالباً 30,000 إلى 50,000 دج سنوياً. الثرموستات وحده يمكنه توفير 18,000 دج في صيف. عائد الاستثمار في أقل من سنة مضمون."
          },
          {
            q: "هل ثرموستات TH-200 متوافق مع مكيفي؟",
            a: "نعم، TH-200 متوافق مع 99% من مكيفات السبليت المباعة في الجزائر. يعمل بالأشعة تحت الحمراء، مثل ريموتك. العلامات المختبرة: Condor، Samsung، LG، Midea، TCL، Hisense، Gree، Haier، Carrier، وغيرها كثير."
          },
          {
            q: "هل مصابيح LED ساطعة مثل التقليدية؟",
            a: "نعم، وغالباً أفضل! LED لدينا 9W تضيء مثل مصباح تقليدي 60W. الفرق: تستهلك 85% أقل وتدوم 25x أطول. بالإضافة، يمكنك تغيير الشدة (dimmer) حسب احتياجاتك."
          },
          {
            q: "هل هناك رسوم شهرية؟",
            a: "لا، صفر رسوم شهرية. التطبيق مجاني مدى الحياة. ميزات توفير الطاقة مشمولة. تدفع مرة واحدة للمعدات، والتوفير يبدأ فوراً."
          },
          {
            q: "أي باقة تنصحني بها؟",
            a: "لشقة مع تكييف: باقة Eco العائلة (35,000 دج) تشمل الثرموستات الذي سيُحدث أكبر فرق. للبدء صغيراً: باقة Starter (15,000 دج) تتيح التجربة مع المقابس و LED. تواصل معنا لنصيحة شخصية مجانية."
          }
        ]
      },

      cta: {
        title: "ابدأ التوفير من اليوم",
        subtitle: "حلول Symloop - صناعة جزائرية، توفير مضمون",
        benefits: [
          "وفّر 30-50% على فواتيرك",
          "منتجات مصنوعة في الجزائر",
          "عائد استثمار مضمون في أقل من 12 شهراً",
          "دعم محلي 7/7"
        ],
        button: "اطلب باقة توفير",
        buttonSecondary: "احسب توفيري",
        contact: "أسئلة؟ WhatsApp: +213 XX XX XX XX"
      }
    }
  };

  const t = content[locale] || content.fr;

  const iconMap = {
    Zap, Thermometer, Lightbulb, Power, Sun, Moon, Gauge, TrendingDown,
    CheckCircle, Home, DollarSign, Star, Package, Smartphone, Wifi,
    BatteryCharging, BarChart3, Target, Settings, Timer, Leaf, Wind,
    Droplets, Flame, Users, Globe, Phone, Rocket, Award, PieChart, Calendar, Eye
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
        <meta name="keywords" content="économie énergie algérie, thermostat intelligent algérie, LED connecté algérie, réduire facture électricité, climatisation intelligente" />
        <link rel="canonical" href="https://www.symloop.com/blog/economie-energie-maison-intelligente-climatisation-algerie-2026" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t.title,
            "description": t.metaDesc,
            "author": { "@type": "Organization", "name": "Symloop" },
            "datePublished": "2025-12-29"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": (t.section9?.questions || []).map(q => ({
              "@type": "Question",
              "name": q.q,
              "acceptedAnswer": { "@type": "Answer", "text": q.a }
            }))
          })}
        </script>
      </Head>

      <main className={`min-h-screen bg-gradient-to-b from-slate-50 to-green-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>{isRTL ? 'العودة للمدونة' : 'Retour au blog'}</span>
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-yellow-500 text-black rounded-full text-sm font-bold flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  {isRTL ? 'وفّر 30-50%' : 'Économisez 30-50%'}
                </span>
                <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium">
                  {t.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{t.title}</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">{t.subtitle}</p>

              <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{t.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{t.readTime}</span>
                <span className="flex items-center gap-2"><User className="w-4 h-4" />{t.author}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Challenge Banner */}
        <section className="py-12 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">{t.energyChallenge.title}</h2>
              <p className="text-lg opacity-90">{t.energyChallenge.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              {t.energyChallenge.challenges.map((challenge, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    {getIcon(challenge.icon)}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{challenge.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{challenge.description}</p>
                  <div className="bg-red-800/50 text-yellow-300 px-3 py-1 rounded text-sm font-medium">
                    💸 {challenge.cost}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-2">{t.energyChallenge.totalWaste.title}</h3>
              <div className="text-4xl font-bold text-yellow-300 mb-2">{t.energyChallenge.totalWaste.amount}</div>
              <p className="opacity-90">{t.energyChallenge.totalWaste.description}</p>
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
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border border-green-100">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  {t.tableOfContents.title}
                </h2>
                <ol className="space-y-3">
                  {t.tableOfContents.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 hover:text-green-600 transition-colors">
                      <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">{idx + 1}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Section 1: How Symloop Reduces Bills */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center">1</span>
                  {t.section1.title}
                </h2>
                <p className="text-slate-700 mb-8">{t.section1.intro}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {t.section1.pillars.map((pillar, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mb-4">
                        {getIcon(pillar.icon)}
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">{pillar.name}</h4>
                      <p className="text-sm text-slate-600 mb-3">{pillar.description}</p>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium">
                        ✓ {pillar.result}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h4 className="font-bold text-yellow-800 mb-2">🛡️ {t.section1.guarantee.title}</h4>
                  <p className="text-yellow-700">{t.section1.guarantee.description}</p>
                </div>
              </div>

              {/* Section 2: Thermostat TH-200 */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-lg mb-12 text-white">
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                  <span className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">2</span>
                  {t.section2.title}
                </h2>
                <p className="text-xl opacity-90 mb-6">{t.section2.subtitle}</p>
                <p className="opacity-90 mb-8">{t.section2.intro}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {t.section2.features.map((feature, idx) => (
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

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-bold text-xl mb-4">{t.section2.savings.title}</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-red-500/30 rounded-lg p-4">
                      <p className="font-semibold mb-2">{t.section2.savings.before.label}</p>
                      <p className="text-lg">{t.section2.savings.before.summer}</p>
                      <p className="text-sm opacity-80">{t.section2.savings.before.behavior}</p>
                    </div>
                    <div className="bg-green-500/30 rounded-lg p-4">
                      <p className="font-semibold mb-2">{t.section2.savings.after.label}</p>
                      <p className="text-lg">{t.section2.savings.after.summer}</p>
                      <p className="text-sm opacity-80">{t.section2.savings.after.behavior}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-yellow-300">{t.section2.savings.result}</p>
                    <p className="text-sm opacity-80 mt-2">{t.section2.savings.roi}</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="text-3xl font-bold">{t.section2.price}</span>
                  <span className="ml-3 text-lg line-through opacity-60">{t.section2.originalPrice}</span>
                </div>
              </div>

              {/* Section 7: Packs */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center">7</span>
                  {t.section7.title}
                </h2>
                <p className="text-slate-700 mb-8">{t.section7.intro}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {t.section7.packs.map((pack, idx) => (
                    <div key={idx} className={`rounded-xl p-6 border-2 ${idx === 1 ? 'border-green-500 bg-green-50' : 'border-slate-200 bg-slate-50'}`}>
                      {idx === 1 && <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">{isRTL ? 'الأكثر شعبية' : 'Le plus populaire'}</div>}
                      <h4 className="font-bold text-xl text-slate-800 mb-2">{pack.name}</h4>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-bold text-green-600">{pack.price}</span>
                        <span className="text-sm text-slate-400 line-through">{pack.originalPrice}</span>
                        <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">-{pack.savings}</span>
                      </div>
                      <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg text-sm font-medium mb-4 inline-block">
                        💰 {isRTL ? 'توفير سنوي:' : 'Économie annuelle :'} {pack.annualSaving}
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

                <p className="text-sm text-slate-600 bg-green-50 rounded-lg p-4 border border-green-200">
                  ✅ {t.section7.note}
                </p>
              </div>

              {/* Section 8: Testimonials */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center">8</span>
                  {t.section8.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {t.section8.testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-slate-600 mb-4 italic">"{testimonial.text}"</p>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-bold text-slate-800">{testimonial.name}</p>
                          <p className="text-sm text-slate-500">{testimonial.location}</p>
                        </div>
                        <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">{testimonial.products}</span>
                      </div>
                      <div className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg text-sm font-medium">
                        💰 {testimonial.saving}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 9: FAQ */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-violet-600 text-white rounded-lg flex items-center justify-center">9</span>
                  {t.section9.title}
                </h2>

                <div className="space-y-4">
                  {t.section9.questions.map((faq, idx) => (
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
                <Zap className="w-16 h-16 mx-auto mb-6 opacity-80" />
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
