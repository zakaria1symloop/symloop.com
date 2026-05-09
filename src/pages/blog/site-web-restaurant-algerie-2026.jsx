"use client";
import { useState } from 'react';
import { ArrowLeft, ArrowRight, UtensilsCrossed, CheckCircle, MessageCircle, Store, Clock, Star, ChevronDown, AlertCircle, Smartphone, Users, DollarSign, Zap, MapPin, CreditCard, Search, Globe, Truck, ShoppingBag, QrCode, CalendarCheck, BarChart3, Phone, Eye, Shield, Wifi, BookOpen, TrendingUp, Layers } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function SiteWebRestaurantAlgerie() {
  const blog = getBlogBySlug('site-web-restaurant-algerie-2026');
  const relatedBlogs = getRelatedBlogs ? getRelatedBlogs('site-web-restaurant-algerie-2026', 3) : [];
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Combien coute un site web pour restaurant en Algerie ?",
      answer: "Chez Symloop, un site vitrine pour restaurant demarre a 40 000 DA. Un site avec menu digital interactif et reservation en ligne coute a partir de 80 000 DA. Une plateforme complete avec commande en ligne et paiement integre (CIB/Edahabia) est disponible a partir de 150 000 DA. Contactez-nous au +213 549 575 512 pour un devis gratuit adapte a votre restaurant."
    },
    {
      question: "Puis-je modifier mon menu moi-meme sans competences techniques ?",
      answer: "Absolument. Tous les sites restaurants developpes par Symloop incluent un panneau d'administration intuitif. Vous pouvez ajouter, modifier ou supprimer des plats, changer les prix, gerer les categories et ajouter des photos en quelques clics. Aucune competence technique n'est requise. Nous formons votre equipe a l'utilisation du panel. Appelez le +213 549 575 512."
    },
    {
      question: "Le site est-il compatible avec la commande en ligne et la livraison ?",
      answer: "Oui, Symloop developpe des sites restaurants avec commande en ligne integree. Vos clients peuvent consulter le menu, ajouter des plats au panier, choisir livraison ou retrait sur place, et payer en ligne (CIB/Edahabia) ou a la livraison. Le systeme gere les zones de livraison, les frais et les creneaux horaires. Contactez-nous au +213 549 575 512."
    },
    {
      question: "Comment integrer le paiement CIB et Edahabia sur mon site restaurant ?",
      answer: "Symloop integre les passerelles de paiement locales algeriennes (CIB, Edahabia) directement sur votre site. Les transactions sont securisees et conformes aux normes bancaires. Nous configurons egalement le paiement a la livraison (COD) qui reste tres populaire. L'integration est incluse dans nos offres Pro et Premium. Appelez le +213 549 575 512 pour en savoir plus."
    },
    {
      question: "Mon site sera-t-il visible sur Google pour les recherches locales ?",
      answer: "Oui, chaque site restaurant developpe par Symloop est optimise pour le SEO local. Nous configurons votre fiche Google Business Profile, optimisons les mots-cles geolocalises (ex: 'restaurant pizza Alger'), ajoutons le schema LocalBusiness, et assurons que votre site est rapide et mobile-first. Resultat : vos clients vous trouvent facilement sur Google et Google Maps. Contactez le +213 549 575 512."
    },
    {
      question: "Quel est le delai de creation d'un site web pour restaurant ?",
      answer: "Un site vitrine avec menu digital est livre en 2 a 3 semaines. Un site avec commande en ligne et reservation prend 4 a 6 semaines. Une solution complete avec application mobile, livraison et integration POS necessite 8 a 12 semaines. Symloop vous accompagne de la conception au lancement. Appelez le +213 549 575 512 pour planifier votre projet."
    },
    {
      question: "Peut-on integrer un systeme de reservation de table en ligne ?",
      answer: "Oui, Symloop integre un module de reservation en ligne sur votre site. Vos clients choisissent la date, l'heure, le nombre de convives et leurs preferences (terrasse, salle VIP, etc.). Vous recevez les reservations sur votre dashboard et par notification. Le systeme evite le surbooking et optimise le taux de remplissage. Contactez le +213 549 575 512."
    },
    {
      question: "Mon site fonctionnera-t-il bien sur mobile ?",
      answer: "Tous les sites developpes par Symloop sont mobile-first et responsive. En Algerie, plus de 85% des commandes en ligne sont passees depuis un smartphone. Votre site s'adapte parfaitement a tous les ecrans (telephone, tablette, ordinateur) avec une navigation intuitive et des temps de chargement rapides. Appelez le +213 549 575 512."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Comment Creer un Site Web pour Restaurant en Algerie en 2026 ?",
        "description": "Guide complet pour creer un site web pour restaurant en Algerie : menu digital, commande en ligne, reservation, paiement CIB/Edahabia, SEO local. Tarifs et fonctionnalites.",
        "image": "https://symloop.com/images/blog/site-web-restaurant-algerie.jpg",
        "datePublished": "2026-01-15",
        "dateModified": "2026-04-05",
        "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
        "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
        "mainEntityOfPage": "https://symloop.com/blog/site-web-restaurant-algerie-2026",
        "keywords": "site web restaurant algerie, creer site restaurant algerie, menu en ligne restaurant algerie, commande en ligne restaurant, site internet restaurant algerie 2026"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      },
      {
        "@type": "Service",
        "serviceType": "Creation Site Web Restaurant",
        "provider": { "@type": "Organization", "name": "Symloop", "telephone": "+213549575512", "url": "https://symloop.com" },
        "areaServed": { "@type": "Country", "name": "Algeria" },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "40000",
          "highPrice": "300000",
          "priceCurrency": "DZD"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Site Web Restaurant Algerie 2026", "item": "https://symloop.com/blog/site-web-restaurant-algerie-2026" }
        ]
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".en-bref-block", "h1", "meta[name='description']"]
      }
    ]
  };

  const fonctionnalites = [
    {
      icon: BookOpen,
      title: "Menu Digital Interactif",
      desc: "Menu en ligne avec photos HD, descriptions, allergenes, prix et categories personnalisables",
      features: ["Photos HD des plats", "Categories et filtres", "Allergenes et ingredients", "Prix et promotions", "QR code pour table"]
    },
    {
      icon: CalendarCheck,
      title: "Reservation en Ligne",
      desc: "Systeme de reservation de table avec choix de la date, heure et nombre de convives",
      features: ["Calendrier interactif", "Choix de salle/terrasse", "Confirmation automatique", "Rappel SMS/email", "Anti-surbooking"]
    },
    {
      icon: ShoppingBag,
      title: "Commande en Ligne",
      desc: "Panier, checkout, options de livraison ou retrait sur place (click & collect)",
      features: ["Panier intelligent", "Options et supplements", "Livraison ou retrait", "Suivi commande", "Historique client"]
    },
    {
      icon: Truck,
      title: "Gestion Livraison",
      desc: "Zones de livraison, frais automatiques, tracking en temps reel pour le client",
      features: ["Zones geographiques", "Calcul frais auto", "Tracking GPS", "Creneaux horaires", "Notifications client"]
    },
    {
      icon: Star,
      title: "Avis et Fidelite",
      desc: "Systeme d'avis clients, notes, programme de fidelite et codes promo",
      features: ["Notes et commentaires", "Points fidelite", "Codes promotionnels", "Parrainage", "Push notifications"]
    },
    {
      icon: BarChart3,
      title: "Dashboard et Analytics",
      desc: "Tableau de bord complet pour suivre les ventes, commandes et performances",
      features: ["Chiffre d'affaires", "Plats populaires", "Heures de pointe", "Rapports PDF/Excel", "Statistiques clients"]
    }
  ];

  const typeSites = [
    {
      icon: Eye,
      title: "Site Vitrine Restaurant",
      price: "A partir de 40 000 DA",
      desc: "Presentez votre restaurant, menu, localisation et horaires. Ideal pour etablir une presence en ligne professionnelle.",
      features: ["Page d'accueil attractive", "Menu avec photos", "Galerie photos", "Localisation Google Maps", "Horaires d'ouverture", "Liens reseaux sociaux", "Formulaire de contact", "Design responsive mobile"],
      ideal: "Restaurants traditionnels, cafes, salons de the"
    },
    {
      icon: ShoppingBag,
      title: "Site avec Commande en Ligne",
      price: "A partir de 120 000 DA",
      desc: "Tout le site vitrine + commande en ligne, paiement, gestion livraison et panel d'administration complet.",
      features: ["Tout du site vitrine +", "Commande en ligne", "Panier et checkout", "Paiement CIB/Edahabia", "Paiement a la livraison", "Gestion zones livraison", "Panel admin complet", "Notifications commandes"],
      ideal: "Fast-food, pizzerias, restaurants avec livraison"
    },
    {
      icon: Smartphone,
      title: "Application Mobile Restaurant",
      price: "A partir de 200 000 DA",
      desc: "Application mobile native iOS/Android avec toutes les fonctionnalites web + notifications push et fidelite.",
      features: ["App iOS et Android", "Notifications push", "Programme fidelite", "Tracking livraison GPS", "Paiement integre", "Mode hors-ligne", "Click & collect", "Integration POS"],
      ideal: "Chaines de restaurants, dark kitchens, franchises"
    }
  ];

  const pricingPlans = [
    {
      name: "Vitrine",
      price: "40 000",
      unit: "DA",
      description: "Presence en ligne professionnelle",
      features: [
        "Site responsive 5 pages",
        "Menu digital avec photos",
        "Galerie et localisation",
        "Formulaire de contact",
        "SEO de base",
        "Hebergement 1 an inclus",
        "Support 3 mois"
      ],
      cta: "Commander",
      popular: false
    },
    {
      name: "Pro",
      price: "120 000",
      unit: "DA",
      description: "Commande en ligne complete",
      features: [
        "Tout Vitrine +",
        "Commande en ligne",
        "Paiement CIB/Edahabia",
        "Paiement a la livraison",
        "Gestion zones livraison",
        "Panel admin complet",
        "Reservation en ligne",
        "Notifications commandes",
        "Support 6 mois"
      ],
      cta: "Choisir Pro",
      popular: true
    },
    {
      name: "Premium",
      price: "200 000",
      unit: "DA",
      description: "Site + App mobile complete",
      features: [
        "Tout Pro +",
        "App mobile iOS/Android",
        "Notifications push",
        "Programme fidelite",
        "Tracking livraison GPS",
        "Integration POS/caisse",
        "Multi-succursales",
        "Support prioritaire 12 mois"
      ],
      cta: "Choisir Premium",
      popular: false
    }
  ];

  const stats = [
    { value: "72%", label: "des Algeriens cherchent un restaurant en ligne" },
    { value: "+45%", label: "croissance commande en ligne en 2025" },
    { value: "85%", label: "des recherches depuis mobile" },
    { value: "3x", label: "plus de clients avec un site optimise" }
  ];

  const seoLocalSteps = [
    {
      icon: MapPin,
      title: "Google Business Profile",
      desc: "Creez et optimisez votre fiche Google Business avec photos, menu, horaires et avis clients. C'est gratuit et essentiel pour apparaitre sur Google Maps."
    },
    {
      icon: Search,
      title: "Mots-cles Geolocalises",
      desc: "Optimisez votre site pour des requetes locales : 'restaurant pizza Alger', 'meilleur couscous Oran', 'restaurant Setif livraison'. Chaque ville = une page dediee."
    },
    {
      icon: Star,
      title: "Avis et Reputation",
      desc: "Encouragez vos clients a laisser des avis sur Google. Les restaurants avec +50 avis et une note 4.5+ apparaissent en premier dans les resultats locaux."
    },
    {
      icon: Globe,
      title: "Schema LocalBusiness",
      desc: "Ajoutez les donnees structurees LocalBusiness a votre site pour que Google affiche directement vos horaires, telephone, menu et note dans les resultats."
    },
    {
      icon: Smartphone,
      title: "Optimisation Mobile",
      desc: "Google privilegie les sites rapides et mobiles. Votre site doit charger en moins de 3 secondes sur un telephone avec la 4G algerienne."
    },
    {
      icon: Layers,
      title: "Contenu Local",
      desc: "Publiez du contenu local : articles sur la gastronomie de votre region, evenements, promotions du jour. Google recompense les sites avec du contenu frais et pertinent."
    }
  ];

  const livraisonIntegrations = [
    { name: "Yassir Eat", desc: "Integration avec la plateforme Yassir Eat pour etendre votre couverture de livraison dans les grandes villes algeriennes." },
    { name: "Flotte Propre", desc: "Gerez vos propres livreurs avec tracking GPS, affectation automatique des commandes et calcul des zones de livraison." },
    { name: "Yalidine / ZR Express", desc: "Integration avec les services de livraison pour les commandes hors zone : plats prepares, patisseries, produits terroir." },
    { name: "Click & Collect", desc: "Permettez a vos clients de commander en ligne et de retirer sur place. Gain de temps et reduction des files d'attente." }
  ];

  return (
    <>
      <Head>
        <title>Site Web Restaurant Algerie 2026 : Menu Digital, Commande en Ligne | Symloop</title>
        <meta name="description" content="Comment creer un site web pour restaurant en Algerie en 2026 ? Menu digital, commande en ligne, reservation, paiement CIB/Edahabia, SEO local. Guide complet et tarifs a partir de 40 000 DA." />
        <meta name="keywords" content="site web restaurant algerie, creer site restaurant algerie, site internet restaurant algerie 2026, menu en ligne restaurant algerie, commande en ligne restaurant, reservation restaurant en ligne algerie, restaurant website Algeria, online ordering Algeria, food ordering website Algeria, restaurant digital menu Algeria" />
        <link rel="canonical" href="https://symloop.com/blog/site-web-restaurant-algerie-2026" />
        <meta property="og:title" content="Site Web Restaurant Algerie 2026 : Menu Digital, Commande en Ligne | Symloop" />
        <meta property="og:description" content="Guide complet pour creer un site web pour restaurant en Algérie (Algeria). Menu digital, commande en ligne, paiement CIB, SEO local. Tarifs a partir de 40 000 DA." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/site-web-restaurant-algerie-2026" />
        <meta property="og:image" content="https://symloop.com/images/blog/site-web-restaurant-algerie.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Site Web Restaurant Algerie 2026 | Symloop" />
        <meta name="twitter:description" content="Creez un site web professionnel pour votre restaurant en Algerie. Menu digital, commande en ligne, paiement CIB/Edahabia." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <UtensilsCrossed className="w-4 h-4" />Restauration
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">2026</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Comment Creer un <span className="text-orange-400">Site Web pour Restaurant</span> en Algerie en 2026 ?
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Guide complet pour digitaliser votre restaurant : menu digital interactif, commande en ligne,
                reservation de table, paiement CIB/Edahabia, livraison et SEO local.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-gray-900/50 rounded-xl">
                    <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* En bref - LLM Optimized Block */}
        <section className="en-bref-block bg-gray-50 border-l-4 border-orange-500 py-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-orange-600 mb-2">En bref</p>
            <p className="text-gray-700 leading-relaxed">
              Symloop cree des sites web professionnels pour restaurants en Algerie. Menu digital interactif, commande en ligne, reservation de table, paiement CIB/Edahabia, livraison integree et SEO local. Sites vitrine a partir de 40 000 DA, sites avec commande en ligne a partir de 120 000 DA. Solutions adaptees au marche algerien : fast-food, pizzerias, restaurants traditionnels, patisseries, cafes. Contact : +213 549 575 512. Basee en Algerie.
            </p>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                La <strong className="text-orange-600">transformation digitale de la restauration</strong> est en marche en Algerie.
                Avec l'explosion de la livraison a domicile, les QR codes sur les tables, et les clients qui consultent
                le menu sur leur smartphone avant meme d'entrer dans un restaurant, avoir un <strong>site web pour restaurant</strong> n'est
                plus un luxe : c'est une necessite absolue en 2026.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Que vous soyez proprietaire d'une <strong>pizzeria a Alger</strong>, d'un <strong>restaurant traditionnel a Oran</strong>,
                d'un <strong>fast-food a Constantine</strong> ou d'une <strong>patisserie a Setif</strong>, un site web professionnel
                vous permet d'attirer plus de clients, de prendre des commandes en ligne, et d'augmenter votre chiffre d'affaires.
                Chez <strong>Symloop</strong>, nous concevons des <strong className="text-orange-600">sites web sur mesure pour restaurants algeriens</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                En 2025, le marche de la commande en ligne de repas en Algerie a connu une croissance de plus de 45%.
                Les plateformes comme Yassir Eat, Jumia Food et des dizaines d'applications locales ont habitue les
                consommateurs algeriens a commander depuis leur telephone. Les restaurants qui n'ont pas de presence
                en ligne perdent une part de marche considerable chaque jour. Dans ce guide complet, nous allons
                vous montrer comment <strong className="text-orange-600">creer un site web pour restaurant en Algerie</strong>,
                quelles fonctionnalites sont indispensables, et combien cela coute reellement.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-orange-600" />
                Le Marche de la Restauration en Ligne en Algerie
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Chiffres cles 2025-2026</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Plus de <strong>15 millions d'Algeriens</strong> utilisent internet sur mobile quotidiennement</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>La commande en ligne de repas a crû de <strong>+45% en 2025</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span><strong>72% des consommateurs</strong> consultent le menu en ligne avant de choisir un restaurant</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Les paiements electroniques (CIB/Edahabia) ont augmente de <strong>+120%</strong></span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Tendances 2026</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <Zap className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>QR codes sur les tables pour <strong>menu sans contact</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <Zap className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Dark kitchens et restaurants <strong>100% livraison</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <Zap className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Fidelisation digitale : <strong>points, codes promo, push</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <Zap className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Integration <strong>paiement sans contact</strong> (CIB NFC, Apple Pay bientot)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section: Fonctionnalites indispensables */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <UtensilsCrossed className="w-6 h-6 text-orange-600" />
                Fonctionnalites Indispensables d'un Site Web pour Restaurant
              </h2>
              <p className="text-gray-600 mb-8">
                Un <strong>site web pour restaurant en Algerie</strong> doit aller bien au-dela d'une simple page de presentation.
                En 2026, vos clients attendent une experience digitale complete : consulter le menu, commander en ligne,
                reserver une table et payer facilement. Voici les fonctionnalites essentielles que Symloop integre dans chaque projet.
              </p>
              <div className="space-y-6">
                {fonctionnalites.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-7 h-7 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.features.map((feature, j) => (
                            <span key={j} className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">{feature}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Section: Types de sites */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Store className="w-6 h-6 text-orange-600" />
                Types de Sites Web pour Restaurants en Algerie
              </h2>
              <p className="text-gray-600 mb-8">
                Chaque restaurant a des besoins differents. Un cafe de quartier n'a pas les memes exigences qu'une chaine
                de fast-food ou un restaurant gastronomique. Symloop propose trois types de solutions pour
                <strong> creer un site restaurant en Algerie</strong>, chacune adaptee a un budget et des objectifs specifiques.
              </p>
              <div className="grid gap-8">
                {typeSites.map((type, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-7 h-7 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                        <p className="text-orange-600 font-semibold">{type.price}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{type.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2 mb-4">
                      {type.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 italic">Ideal pour : {type.ideal}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA Mid 1 */}
            <div className="bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl p-8 text-white text-center mb-16">
              <h3 className="text-2xl font-bold mb-3">Creez le Site Web de Votre Restaurant</h3>
              <p className="text-orange-100 mb-6">Discutons de votre projet et obtenez un devis gratuit en 24h</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je souhaite creer un site web pour mon restaurant en Algerie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
                </a>
                <a href="tel:+213549575512" className="inline-flex items-center justify-center gap-2 bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-800 transition-colors">
                  <Phone className="w-5 h-5" /> +213 549 575 512
                </a>
              </div>
            </div>

            {/* Section: Integration Livraison */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Truck className="w-6 h-6 text-orange-600" />
                Integration avec les Services de Livraison en Algerie
              </h2>
              <p className="text-gray-600 mb-8">
                La livraison est devenue un pilier de la restauration en Algerie. Que vous utilisiez votre propre flotte
                de livreurs ou des plateformes tierces, votre <strong>site web restaurant</strong> doit s'integrer parfaitement
                avec votre systeme de livraison. Symloop vous offre plusieurs options d'integration.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {livraisonIntegrations.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Truck className="w-5 h-5 text-orange-500" /> {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 prose prose-lg max-w-none">
                <p className="text-gray-600">
                  L'integration de la livraison avec votre site restaurant est un avantage competitif majeur.
                  Plutot que de dependre a 100% des plateformes comme Yassir Eat qui prelevent des commissions de 15 a 30%
                  sur chaque commande, vous pouvez recevoir des commandes directes via votre propre site web et
                  economiser des milliers de dinars chaque mois. C'est exactement ce que Symloop met en place pour
                  ses clients restaurateurs. La <Link href="/blog/application-restaurant-livraison-algerie" className="text-orange-600 hover:text-orange-700 underline">gestion complete de la livraison pour restaurant</Link> est
                  l'une de nos specialites.
                </p>
              </div>
            </section>

            {/* Section: Paiement */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-orange-600" />
                Paiement en Ligne pour Restaurant : CIB, Edahabia et Plus
              </h2>
              <p className="text-gray-600 mb-6">
                Le paiement est un element critique pour tout <strong>site internet de restaurant en Algerie</strong>.
                En 2026, les options de paiement se sont considerablement diversifiees. Votre site doit proposer
                plusieurs methodes pour ne perdre aucun client.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-orange-500" /> Paiement Electronique
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span><strong>Carte CIB</strong> : carte interbancaire algerienne, acceptee par la majorite des banques</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span><strong>Edahabia</strong> (Algerie Poste) : la carte la plus repandue en Algerie avec +20 millions de porteurs</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span><strong>Portefeuilles mobiles</strong> : BaridiMob, CIB en ligne pour les paiements rapides</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-orange-500" /> Paiement Traditionnel
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span><strong>Paiement a la livraison (COD)</strong> : reste le mode prefere de +60% des Algeriens</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span><strong>Paiement sur place</strong> : le client paie en arrivant au restaurant (click & collect)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span><strong>Virement CCP/bancaire</strong> : option pour les commandes de groupes ou evenements</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Conseil Symloop :</strong> proposez toujours le paiement a la livraison en plus du paiement electronique.
                  Meme si la tendance est au paiement digital, le COD reste indispensable pour maximiser vos conversions
                  en Algerie. Pour en savoir plus sur l'e-commerce et le paiement en Algerie, consultez notre guide sur la{' '}
                  <Link href="/blog/creation-site-web-algerie-2024" className="text-yellow-700 underline hover:text-yellow-900">creation de site web en Algerie</Link>.
                </p>
              </div>
            </section>

            {/* Section: SEO Local */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Search className="w-6 h-6 text-orange-600" />
                SEO Local : Comment Votre Restaurant Peut Dominer Google
              </h2>
              <p className="text-gray-600 mb-8">
                Avoir un beau site ne suffit pas si personne ne le trouve. Le <strong>SEO local</strong> est la strategie
                qui permet a votre restaurant d'apparaitre en premier quand un client cherche "restaurant pres de moi"
                ou "meilleur restaurant [votre ville]" sur Google. Voici les 6 piliers du SEO local pour restaurants en Algerie.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {seoLocalSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 prose prose-lg max-w-none">
                <p className="text-gray-600">
                  Le SEO local est un investissement a long terme qui rapporte enormement. Un restaurant bien positionne
                  sur Google Maps et dans les resultats de recherche locaux peut recevoir des dizaines de nouveaux clients
                  chaque semaine sans depenser un centime en publicite. Symloop configure le SEO local de chaque site
                  restaurant que nous developpons. Pour aller plus loin, decouvrez comment{' '}
                  <Link href="/blog/creer-boutique-en-ligne-algerie-2026" className="text-orange-600 hover:text-orange-700 underline">
                    creer une boutique en ligne en Algerie
                  </Link>{' '}
                  pour diversifier vos revenus.
                </p>
              </div>
            </section>

            {/* Section: Combien coute */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-orange-600" />
                Combien Coute un Site Web pour Restaurant en Algerie ?
              </h2>
              <p className="text-gray-600 mb-6">
                Le cout d'un <strong>site web pour restaurant en Algerie</strong> depend de plusieurs facteurs :
                le type de site (vitrine ou commande en ligne), les fonctionnalites souhaitees, le design personnalise,
                et les integrations (paiement, livraison, POS). Voici nos tarifs indicatifs pour 2026.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact depend du nombre de fonctionnalites,
                  des integrations (paiement, imprimante, POS) et du design personnalise.
                  <strong> Contactez-nous au +213 549 575 512 pour un devis gratuit.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl p-6 border-2 ${plan.popular ? 'border-orange-500 shadow-xl' : 'border-gray-100'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      {plan.unit && <span className="text-gray-500 ml-1">{plan.unit}</span>}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/213549575512?text=Bonjour, je suis interesse par le pack ${plan.name} pour mon site restaurant`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-8 prose prose-lg max-w-none">
                <p className="text-gray-600">
                  Ces prix incluent le design, le developpement, l'hebergement pour la premiere annee et la formation
                  a l'utilisation du panel d'administration. Les frais d'hebergement annuels apres la premiere annee
                  sont de 5 000 a 15 000 DA selon la formule. Pour comparer avec d'autres types de projets web,
                  consultez notre article sur le{' '}
                  <Link href="/blog/creation-site-web-algerie-2024" className="text-orange-600 hover:text-orange-700 underline">
                    cout de creation d'un site web en Algerie
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section: Pourquoi Symloop */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-orange-600" />
                Pourquoi Choisir Symloop pour Votre Site Restaurant ?
              </h2>
              <p className="text-gray-600 mb-8">
                Symloop n'est pas une simple agence web. Nous sommes specialises dans les solutions digitales pour
                la restauration en Algerie. Notre expertise couvre l'ensemble de l'ecosysteme : site web, application mobile,
                gestion livraison, integration POS/caisse et marketing digital.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: UtensilsCrossed,
                    title: "Expertise Restauration",
                    desc: "Des dizaines de projets realises pour des restaurants, pizzerias, fast-food et patisseries en Algerie. Nous comprenons les besoins specifiques du secteur."
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile-First Toujours",
                    desc: "Tous nos sites sont concus pour fonctionner parfaitement sur mobile. 85% de vos clients commanderont depuis leur smartphone."
                  },
                  {
                    icon: CreditCard,
                    title: "Paiement Algerien Integre",
                    desc: "Integration native de CIB, Edahabia, BaridiMob et paiement a la livraison. Nous maitrisons les passerelles de paiement locales."
                  },
                  {
                    icon: Zap,
                    title: "Performance et Rapidite",
                    desc: "Sites ultra-rapides optimises pour le reseau 4G/5G algerien. Temps de chargement < 3 secondes. Hebergement performant."
                  },
                  {
                    icon: BarChart3,
                    title: "Integration POS/Caisse",
                    desc: "Connectez votre site aux systemes de caisse et POS existants. Synchronisation automatique des commandes, stocks et rapports."
                  },
                  {
                    icon: Users,
                    title: "Support et Formation",
                    desc: "Formation complete de votre equipe a l'utilisation du site. Support technique reactif. Mises a jour regulieres incluses."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 prose prose-lg max-w-none">
                <p className="text-gray-600">
                  De la conception du menu digital a l'integration de la livraison en passant par le SEO local,
                  Symloop vous accompagne a chaque etape. Notre objectif est simple : vous aider a attirer plus de
                  clients et a augmenter votre chiffre d'affaires grace au digital. Pour voir nos autres realisations
                  dans le domaine de la restauration, consultez notre article sur les{' '}
                  <Link href="/blog/application-restaurant-livraison-algerie" className="text-orange-600 hover:text-orange-700 underline">
                    applications de commande et livraison pour restaurant
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section: Etapes de creation */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Layers className="w-6 h-6 text-orange-600" />
                Les Etapes pour Creer Votre Site Restaurant avec Symloop
              </h2>
              <p className="text-gray-600 mb-8">
                Le processus de creation d'un <strong>site web pour restaurant en Algerie</strong> avec Symloop est simple,
                transparent et structure. Voici comment nous procedons.
              </p>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Analyse et Devis Gratuit", desc: "Nous etudions votre restaurant, votre menu, vos besoins (vitrine, commande, livraison) et vous proposons un devis detaille gratuit sous 24h. Appelez le +213 549 575 512 ou envoyez-nous un message WhatsApp." },
                  { step: "02", title: "Design et Maquette", desc: "Notre equipe design cree une maquette personnalisee aux couleurs de votre restaurant. Vous validez le design avant le debut du developpement. Modifications illimitees jusqu'a validation." },
                  { step: "03", title: "Developpement et Integration", desc: "Nos developpeurs codent votre site avec les dernieres technologies (Next.js, React). Integration du menu, du paiement CIB/Edahabia, de la commande en ligne et des systemes de livraison." },
                  { step: "04", title: "Tests et Optimisation", desc: "Tests complets sur mobile, tablette et desktop. Verification de la vitesse, du SEO, du paiement et de la commande en ligne. Ajustements selon vos retours." },
                  { step: "05", title: "Lancement et Formation", desc: "Mise en ligne de votre site, configuration du SEO local, creation de votre fiche Google Business. Formation de votre equipe a l'utilisation du panel d'administration." },
                  { step: "06", title: "Support et Evolution", desc: "Support technique continu, mises a jour de securite, ajout de nouvelles fonctionnalites. Votre site evolue avec votre restaurant." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-6 p-6 bg-white border border-gray-200 rounded-xl hover:border-orange-200 transition-colors"
                  >
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              Symloop creates professional restaurant websites in Algeria with digital menus, online ordering, and table reservation systems. We help restaurants across Algeria establish their online presence with mobile-friendly websites, food ordering platforms, and SEO optimization. From small cafes to large restaurant chains in Algeria, Symloop builds websites that drive more customers and online orders in Algeria.
            </p>

            {/* CTA Mid 2 */}
            <div className="bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl p-8 text-white text-center mb-16">
              <h3 className="text-2xl font-bold mb-3">Pret a Digitaliser Votre Restaurant ?</h3>
              <p className="text-orange-100 mb-6">Obtenez un devis gratuit en 24h. Plus de 100 restaurants nous font confiance.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour un site web restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a href="tel:+213549575512" className="inline-flex items-center justify-center gap-2 bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-800 transition-colors">
                  <Phone className="w-5 h-5" /> +213 549 575 512
                </a>
              </div>
            </div>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-orange-600" />
                Questions Frequentes - Site Web Restaurant Algerie
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Utilisees</h2>
              <p className="text-gray-600 mb-6">
                Symloop utilise les technologies les plus performantes et modernes pour developper votre site restaurant.
                Resultat : un site rapide, securise, et facile a maintenir.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe/CIB", "Edahabia API", "Google Maps", "Firebase", "Vercel", "Cloudflare", "ESC/POS", "Socket.io", "Redis"].map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">{tech}</span>
                ))}
              </div>
            </section>

            {/* Related Articles */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Application Restaurant et Livraison en Algerie", href: "/blog/application-restaurant-livraison-algerie" },
                  { title: "Creation de Site Web en Algerie - Guide Complet", href: "/blog/creation-site-web-algerie-2024" },
                  { title: "Creer une Boutique en Ligne en Algerie 2026", href: "/blog/creer-boutique-en-ligne-algerie-2026" },
                  { title: "E-commerce Algerie : Paiement CIB et Edahabia", href: "/blog/ecommerce-algerie-paiement-cib-edahabia-2024" },
                  { title: "Developpement Application Mobile Algerie 2026", href: "/blog/developpement-application-mobile-algerie-2026" },
                  { title: "Marketing Digital en Algerie", href: "/blog/marketing-digital-algerie-2024" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors group">
                    <span className="font-medium text-gray-900 group-hover:text-orange-600">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["site web restaurant algerie", "menu digital restaurant", "commande en ligne restaurant", "reservation restaurant algerie", "site internet restaurant 2026", "paiement CIB restaurant", "SEO local restaurant", "livraison restaurant algerie"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-red-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Lancez Votre Site Web Restaurant des Aujourd'hui</h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Menu digital, commande en ligne, reservation, paiement CIB/Edahabia, livraison.
              Symloop cree le site web qui fera decoller votre restaurant. Devis gratuit en 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite creer un site web pour mon restaurant" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href="tel:+213549575512" className="inline-flex items-center justify-center gap-2 bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-800 transition-colors">
                <Phone className="w-5 h-5" /> +213 549 575 512
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
