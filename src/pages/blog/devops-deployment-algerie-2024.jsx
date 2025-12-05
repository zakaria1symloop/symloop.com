"use client";
import { useState } from 'react';
import { ArrowLeft, Cloud, CheckCircle, MessageCircle, Server, GitBranch, Shield, Zap, ChevronDown, AlertCircle, Settings, Code, Clock, ArrowRight, DollarSign, Activity, Box, Lock, RefreshCw, BarChart3, Terminal } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function DevOpsAlgerie() {
  const blog = getBlogBySlug('devops-deployment-algerie-2024');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Qu'est-ce que le DevOps et pourquoi en ai-je besoin ?",
      answer: "Le DevOps combine développement et opérations pour automatiser les déploiements, améliorer la fiabilité et accélérer les mises en production. Au lieu de déployer manuellement (risque d'erreurs), tout est automatisé : tests, build, déploiement. Résultat : moins de bugs en production, déploiements plus fréquents et équipe plus productive."
    },
    {
      question: "Qu'est-ce qu'un pipeline CI/CD ?",
      answer: "CI/CD signifie Continuous Integration/Continuous Deployment. C'est un pipeline automatisé qui : 1) récupère votre code, 2) lance les tests automatiques, 3) build l'application, 4) déploie en staging puis en production. Chaque commit déclenche ce processus automatiquement, garantissant qualité et rapidité."
    },
    {
      question: "Docker et Kubernetes, c'est quoi ?",
      answer: "Docker conteneurise votre application (la rend portable et isolée). Kubernetes orchestre ces conteneurs à grande échelle (scaling automatique, haute disponibilité). Ensemble, ils permettent de déployer n'importe où (AWS, GCP, on-premise) avec les mêmes résultats garantis."
    },
    {
      question: "Combien coûte la mise en place d'une infrastructure DevOps ?",
      answer: "Un pipeline CI/CD basique démarre à 40 000 DA. Une infrastructure Docker complète à partir de 80 000 DA. Les architectures Kubernetes enterprise avec monitoring avancé sont sur devis selon la complexité et le nombre de services."
    },
    {
      question: "Pouvez-vous gérer l'infrastructure existante ?",
      answer: "Absolument. Nous auditons votre infrastructure actuelle, identifions les points d'amélioration, et mettons en place progressivement les pratiques DevOps. Migration sans interruption de service, documentation complète et formation de votre équipe."
    },
    {
      question: "Quel cloud recommandez-vous pour l'Algérie ?",
      answer: "Cela dépend de vos besoins. AWS offre le plus de services, GCP excelle en IA/ML, Azure pour l'écosystème Microsoft. DigitalOcean et Hetzner sont économiques pour les startups. Pour la latence, nous pouvons aussi configurer des serveurs en Europe du Sud (proche géographiquement)."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "DevOps et Déploiement Cloud en Algérie - CI/CD, Docker, Kubernetes",
        "description": "Services DevOps en Algérie : CI/CD, Docker, Kubernetes, déploiement cloud automatisé. Infrastructure moderne pour applications performantes et fiables.",
        "image": "https://symloop.com/images/blog/devops-algerie.jpg",
        "datePublished": "2024-02-15",
        "dateModified": "2024-12-01",
        "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
        "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
        "mainEntityOfPage": "https://symloop.com/blog/devops-deployment-algerie-2024"
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
        "serviceType": "Services DevOps",
        "provider": { "@type": "Organization", "name": "Symloop", "telephone": "+213549575512" },
        "areaServed": ["DZ", "TN", "MA", "MENA"]
      }
    ]
  };

  const services = [
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      desc: "Automatisation complète des tests et déploiements pour livrer plus vite et sans erreurs",
      features: ["GitHub Actions / GitLab CI", "Tests automatiques", "Build optimisé", "Déploiement multi-environnement", "Rollback automatique"]
    },
    {
      icon: Box,
      title: "Containerisation Docker",
      desc: "Conteneurisez vos applications pour une portabilité et une isolation garanties",
      features: ["Dockerfiles optimisés", "Multi-stage builds", "Docker Compose", "Registry privé", "Images sécurisées"]
    },
    {
      icon: Server,
      title: "Kubernetes & Orchestration",
      desc: "Orchestration de conteneurs à grande échelle avec haute disponibilité",
      features: ["Cluster K8s managé", "Auto-scaling", "Load balancing", "Service mesh (Istio)", "Helm charts"]
    },
    {
      icon: Cloud,
      title: "Infrastructure Cloud",
      desc: "Déploiement sur les meilleurs cloud providers avec Infrastructure as Code",
      features: ["AWS / GCP / Azure", "Terraform / Pulumi", "Serverless (Lambda)", "CDN global", "Multi-région"]
    },
    {
      icon: Activity,
      title: "Monitoring & Observabilité",
      desc: "Surveillez vos applications en temps réel avec alertes proactives",
      features: ["Prometheus / Grafana", "ELK Stack (logs)", "APM (traces)", "Alerting 24/7", "Dashboards custom"]
    },
    {
      icon: Lock,
      title: "Sécurité DevSecOps",
      desc: "Intégrez la sécurité dès le développement avec des scans automatiques",
      features: ["Scan vulnérabilités", "Secrets management", "SAST / DAST", "Conformité", "Audit trail"]
    }
  ];

  const techStack = [
    { category: "CI/CD", tools: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI", "ArgoCD"] },
    { category: "Containers", tools: ["Docker", "Kubernetes", "Helm", "Podman", "Rancher"] },
    { category: "Cloud", tools: ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Hetzner"] },
    { category: "IaC", tools: ["Terraform", "Pulumi", "Ansible", "CloudFormation"] },
    { category: "Monitoring", tools: ["Prometheus", "Grafana", "Datadog", "ELK", "Sentry"] },
    { category: "Security", tools: ["Vault", "Trivy", "SonarQube", "Snyk", "OWASP ZAP"] }
  ];

  const pricingPlans = [
    {
      name: "CI/CD Starter",
      price: "40 000",
      unit: "DA",
      description: "Pipeline automatisé basique",
      features: [
        "Pipeline CI/CD complet",
        "Tests automatiques",
        "Déploiement staging + prod",
        "Dockerisation app",
        "Documentation setup",
        "Support 1 mois"
      ],
      cta: "Commencer",
      popular: false
    },
    {
      name: "DevOps Pro",
      price: "80 000",
      unit: "DA",
      description: "Infrastructure complète",
      features: [
        "Tout CI/CD Starter +",
        "Kubernetes cluster",
        "Monitoring (Prometheus/Grafana)",
        "Infrastructure as Code",
        "Alerting configuré",
        "Formation équipe",
        "Support 3 mois"
      ],
      cta: "Choisir Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      unit: "",
      description: "Architecture haute dispo",
      features: [
        "Tout DevOps Pro +",
        "Multi-cluster / Multi-région",
        "Service mesh (Istio)",
        "DevSecOps complet",
        "SLA 99.9%",
        "Support 24/7",
        "Consulting continu"
      ],
      cta: "Nous contacter",
      popular: false
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime garanti" },
    { value: "10x", label: "Déploiements plus rapides" },
    { value: "50+", label: "Infra déployées" },
    { value: "24/7", label: "Monitoring inclus" }
  ];

  const benefits = [
    { title: "Déploiements fiables", desc: "Fini les 'ça marchait sur ma machine'. Même environnement partout." },
    { title: "Livraisons rapides", desc: "Passez de semaines à heures entre le code et la production." },
    { title: "Moins de bugs", desc: "Les tests automatiques attrapent les problèmes avant la prod." },
    { title: "Scaling automatique", desc: "L'infrastructure s'adapte automatiquement au trafic." },
    { title: "Rollback instantané", desc: "Un problème ? Revenez à la version précédente en 1 clic." },
    { title: "Équipe productive", desc: "Les développeurs codent, l'infra se gère toute seule." }
  ];

  return (
    <>
      <Head>
        <title>DevOps Algérie 2024 | CI/CD, Docker, Kubernetes | Symloop</title>
        <meta name="description" content="Services DevOps en Algérie : CI/CD automatisé, Docker, Kubernetes, déploiement cloud. Infrastructure moderne pour applications performantes. À partir de 40 000 DA." />
        <meta name="keywords" content="devops algérie, ci cd algérie, docker kubernetes, déploiement cloud algérie, infrastructure cloud, automatisation déploiement" />
        <link rel="canonical" href="https://symloop.com/blog/devops-deployment-algerie-2024" />
        <meta property="og:title" content="DevOps Algérie 2024 | CI/CD, Docker, Kubernetes" />
        <meta property="og:description" content="Infrastructure DevOps moderne pour entreprises algériennes. CI/CD, containers, cloud, monitoring." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/devops-deployment-algerie-2024" />
        <meta name="twitter:card" content="summary_large_image" />
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
                <span className="bg-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Cloud className="w-4 h-4" />DevOps
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Guide 2024</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-cyan-400">DevOps</span> et Déploiement Cloud en Algérie
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                CI/CD automatisé, Docker, Kubernetes, infrastructure cloud. Modernisez vos déploiements,
                améliorez la fiabilité et accélérez vos mises en production.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-gray-900/50 rounded-xl">
                    <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Le <strong className="text-cyan-600">DevOps</strong> transforme la façon dont les équipes
                développent, testent et déploient les applications. En automatisant les processus répétitifs
                et en adoptant des pratiques modernes (CI/CD, containers, Infrastructure as Code),
                vous réduisez les erreurs, accélérez les livraisons et améliorez la fiabilité.
                <strong> Symloop</strong> accompagne les entreprises algériennes dans cette transformation.
              </p>
            </div>

            {/* Benefits */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Zap className="w-6 h-6 text-cyan-600" />
                Pourquoi Adopter le DevOps ?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-cyan-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Settings className="w-6 h-6 text-cyan-600" />
                Nos Services DevOps
              </h2>
              <div className="space-y-6">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-cyan-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-7 h-7 text-cyan-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, j) => (
                            <span key={j} className="bg-cyan-50 text-cyan-700 text-xs px-3 py-1 rounded-full">{feature}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Terminal className="w-6 h-6 text-cyan-600" />
                Stack Technologique DevOps
              </h2>
              <div className="space-y-4">
                {techStack.map((category, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-3">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, j) => (
                        <span key={j} className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm">{tool}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Mid */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white text-center mb-16">
              <h3 className="text-2xl font-bold mb-3">Modernisez Votre Infrastructure</h3>
              <p className="text-cyan-100 mb-6">Discutons de votre projet DevOps</p>
              <a
                href="https://wa.me/213549575512?text=Bonjour, j'ai besoin de services DevOps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
              </a>
            </div>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-cyan-600" />
                Tarifs Services DevOps
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend de la complexité de l'infrastructure,
                  du nombre de services à déployer, et du niveau de monitoring requis.
                  <strong> Contactez-nous pour un audit gratuit.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl p-6 border-2 ${plan.popular ? 'border-cyan-500 shadow-xl' : 'border-gray-100'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</span>
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
                      href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le pack ${plan.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-cyan-600 text-white hover:bg-cyan-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-cyan-600" />
                Questions Fréquentes - DevOps
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

            {/* Related */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Cloud Computing en Algérie", href: "/blog/cloud-computing-algerie-2024" },
                  { title: "Développement API et Intégrations", href: "/blog/developpement-api-integration-algerie" },
                  { title: "Cybersécurité en Algérie", href: "/blog/cybersecurite-algerie-2024" },
                  { title: "Développement Backend Node.js", href: "/blog/developpement-nodejs-backend-algerie" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors group">
                    <span className="font-medium text-gray-900 group-hover:text-cyan-600">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-600" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["devops algérie", "ci cd", "docker", "kubernetes", "cloud algérie", "infrastructure", "déploiement automatisé"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Automatisez Vos Déploiements</h2>
            <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
              CI/CD, Docker, Kubernetes, monitoring. Infrastructure moderne et fiable
              pour vos applications critiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet DevOps à discuter" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href="tel:+213549575512" className="inline-flex items-center justify-center gap-2 bg-cyan-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-800 transition-colors">
                <span>📞</span> +213 549 57 55 12
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
