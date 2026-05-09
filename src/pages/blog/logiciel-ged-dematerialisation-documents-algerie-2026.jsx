"use client";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

const ARTICLE = {
  title: 'Logiciel GED en Algérie 2026 — Dématérialisation et Archivage Électronique',
  desc: "Guide complet GED pour entreprises et administrations algériennes. Dématérialisation, workflow, signature électronique, archivage à valeur probante. Alternatives SharePoint et OpenText. Symloop construit du sur-mesure.",
  url: 'https://symloop.com/blog/logiciel-ged-dematerialisation-documents-algerie-2026/',
  image: 'https://symloop.com/blog/cover-ged-dms.jpg',
  published: '2026-05-04',
  modified: '2026-05-04',
  readTime: '18 min',
};

const FAQ = [
  {
    q: "Qu'est-ce qu'une GED et que signifie dématérialisation ?",
    a: "Une GED (Gestion Électronique de Documents) est un système qui capte, indexe, stocke, fait circuler et archive les documents d'une organisation sous forme électronique. La dématérialisation est le processus qui consiste à transformer un document papier ou un flux papier en un équivalent numérique avec la même valeur juridique. Ensemble, GED + dématérialisation remplacent les armoires à dossiers, les parapheurs en cuir, et les recommandés pour les processus internes — tout en préservant la traçabilité et la valeur probante.",
  },
  {
    q: "Quelle valeur juridique a un document électronique en Algérie en 2026 ?",
    a: "La loi algérienne 15-04 du 1er février 2015 fixe les règles générales relatives à la signature et à la certification électroniques, et reconnaît la valeur juridique des documents électroniques signés conformément. L'autorité d'horodatage et la chaîne de certification sont assurées par l'autorité de certification désignée. Pour qu'un document électronique ait pleine valeur probante, il doit être signé électroniquement avec un certificat qualifié, horodaté, et archivé dans un système qui garantit son intégrité dans le temps (typiquement, hash SHA-256 et coffre-fort numérique avec rotation cryptographique).",
  },
  {
    q: "Quels sont les usages typiques d'une GED en entreprise ou administration algérienne ?",
    a: "Les usages les plus rentables sont : 1) Comptabilité — factures fournisseurs, justificatifs, archivage fiscal sur 10 ans; 2) Ressources humaines — contrats, fiches de paie, dossiers du personnel, conformité CNAS; 3) Juridique — contrats commerciaux, NDA, conventions, gestion des échéances; 4) Achats — cycle commande/livraison/facture/paiement avec workflow d'approbation; 5) Service public — dossiers citoyens, actes d'état civil, documents administratifs sectoriels (justice, santé, éducation). Chaque usage gagne typiquement 30 à 60 % du temps de traitement et élimine les pertes de documents.",
  },
  {
    q: 'Combien coûte une solution GED en Algérie en 2026 ?',
    a: "SharePoint Online (Microsoft 365) : 5 à 22 € par utilisateur par mois — soit 600 000 à 2,5 millions DA par an pour 100 utilisateurs. OpenText / Documentum / M-Files (solutions enterprise) : 1 à 5 millions DA par an en licences + 3 à 10 millions DA d'intégration. Alfresco (open source community + entreprise) : 0 à 2 millions DA en licences + 2 à 6 millions DA d'intégration. Une GED sur-mesure avec coffre-fort et signature électronique algérienne démarre à 6 millions DA et se rentabilise généralement en 12 à 24 mois grâce à la suppression du stockage papier et des erreurs de classement.",
  },
  {
    q: "Quelle différence entre SharePoint, OpenText et une GED sur-mesure ?",
    a: "SharePoint excelle pour les usages collaboratifs internes mais reste limité pour le workflow métier complexe et l'intégration ERP profonde. OpenText / Documentum sont les références enterprise mais coûteuses, complexes à déployer, et conçues pour des marchés américains et européens — elles ne répondent pas bien aux spécificités du droit algérien. Une GED sur-mesure (typiquement basée sur un noyau open source comme Alfresco ou Nuxeo + extensions Symloop) combine la robustesse enterprise, la conformité algérienne (signature électronique 15-04, archivage à valeur probante, intégrations CNAS/CASNOS/DGI), et la maîtrise totale des données — qui restent en Algérie.",
  },
  {
    q: "Comment dématérialiser un processus métier complexe (achats, RH, justice) ?",
    a: "La dématérialisation d'un processus passe par 4 étapes : 1) Cartographier le flux papier actuel (qui produit, qui valide, qui archive); 2) Concevoir le workflow numérique équivalent (BPM avec règles d'approbation, escalades, délais); 3) Migrer les documents existants (numérisation OCR multilingue arabe/français, indexation, contrôle qualité); 4) Déployer progressivement avec accompagnement utilisateur. Chez Symloop, un processus de complexité moyenne (50 utilisateurs, 5 étapes de validation, intégration ERP) se dématérialise en 12 à 16 semaines pour un budget de 6 à 12 millions DA.",
  },
];

const SECTIONS = [
  {
    h: "Le moment de la dématérialisation algérienne — pourquoi 2026 est différent",
    body: [
      "Les administrations et les entreprises algériennes vivent depuis 2020 une accélération réglementaire qui rend la dématérialisation **non plus optionnelle mais inévitable** : facturation électronique progressivement obligatoire, déclarations sociales CNAS et fiscales DGI en ligne, dématérialisation des marchés publics par voie électronique, programme national de digitalisation de la justice, e-services citoyens dans plusieurs ministères.",
      "**Le constat opérationnel est partagé par tous les directeurs administratifs** : un employé moyen passe encore 30 à 50 % de son temps à chercher des documents, classer des dossiers papier, faire signer des parapheurs, et reproduire des copies. Une GED bien implémentée fait passer ce ratio à 5 à 15 % et libère l'équivalent d'une demi-journée par employé par semaine pour des tâches à plus forte valeur ajoutée.",
      "Cette page est un guide d'achat et d'architecture pour les directions administratives, juridiques, ressources humaines et SI qui doivent passer à l'acte en 2026 — sans tomber dans les pièges classiques du déploiement GED.",
    ],
  },
  {
    h: "Les 6 capacités d'une GED moderne",
    body: [
      "**Capture multi-source.** Numérisation OCR arabe et français en lot, capture email automatique, ingestion de PDF, intégration scanners de bureau, capture mobile via téléphone. Sans capture facile, personne n'utilise le système.",
      "**Indexation et recherche full-text.** Le moteur indexe le contenu OCR en arabe et en français, plus les métadonnées (type de document, date, émetteur, montant, projet). La recherche fonctionne en quelques secondes sur des millions de documents.",
      "**Workflow et BPM.** Les documents circulent selon des règles : un bon de commande au-dessus de 500 000 DA passe par le directeur financier; un contrat de travail passe par le DRH puis le directeur général; une facture est validée puis transmise à la comptabilité. Chaque étape est tracée.",
      "**Signature électronique et horodatage.** Conforme à la loi 15-04, avec certificats qualifiés, horodatage RFC 3161, et chaîne de certification archivée. Pour les documents critiques, signature avancée avec carte à puce ou eIDAS.",
      "**Archivage à valeur probante.** Hash SHA-256, signatures multiples, scellement WORM (Write Once Read Many), rotation cryptographique, format conservé en PDF/A-3 ou XML. Capable de prouver qu'un document n'a pas été modifié depuis sa signature, même 10 ans plus tard.",
      "**Intégration ERP / CRM / RH.** Connecteurs vers Sage, Odoo, SAP, Salesforce, et systèmes RH algériens. Une facture validée dans la GED se comptabilise automatiquement dans l'ERP. Un contrat signé alimente le dossier salarié dans le SIRH.",
    ],
  },
  {
    h: "SharePoint, OpenText, Alfresco, ou sur-mesure",
    body: [
      "**SharePoint Online** convient pour la collaboration documentaire interne, les bibliothèques de documents partagées, les intranets corporate. Faible courbe d'apprentissage si les équipes utilisent déjà Microsoft 365. Limitations : workflow métier complexe, intégrations ERP profondes, et surtout données hébergées dans des datacenters Microsoft hors Algérie — bloquant pour banques, ministères, opérateurs publics.",
      "**OpenText / Documentum / M-Files** sont les références enterprise mondiales — robustes, riches fonctionnellement, conformes à la majorité des frameworks réglementaires internationaux. Mais : coût élevé (2 à 8 millions DA par an en licences + plusieurs dizaines de millions d'intégration), complexité de déploiement, et culture produit qui ne s'adapte pas naturellement aux spécificités algériennes (CNAS, DGI, signature électronique algérienne, archives à valeur probante locale).",
      "**Alfresco / Nuxeo / OpenKM (open source enterprise)** offrent une base solide avec licences gratuites ou modérées et permettent de construire des GED sur-mesure tout en bénéficiant d'un noyau éprouvé. C'est l'approche que Symloop privilégie pour les déploiements algériens — open source au cœur, sur-mesure pour les workflows métier, conformité algérienne native, données en Algérie.",
      "**Sur-mesure pur** se justifie quand les workflows métier sont si spécifiques qu'aucun produit ne les couvre — par exemple, un système de gestion de dossiers judiciaires intégré aux casiers de greffe, ou un système d'archives administratives intégré aux registres d'état civil avec interopérabilité X-Road.",
    ],
  },
  {
    h: "Conformité légale algérienne — ce qu'il faut absolument",
    body: [
      "**Loi 15-04 du 1er février 2015** sur la signature et la certification électroniques. Une GED qui prétend produire des documents à valeur juridique doit s'appuyer sur des certificats qualifiés émis par une autorité de certification reconnue. Sans cela, le document signé électroniquement n'a pas de valeur supérieure à un email scanné.",
      "**Loi 18-07 du 10 juin 2018** sur la protection des données personnelles. Toute GED qui contient des données nominatives (RH, justice, santé, citoyens) doit respecter les obligations de proportionnalité, finalité, conservation limitée, droit d'accès et de rectification. L'hébergement étranger des données nominatives est soumis à autorisation de l'ANPDP — autorisation rarement accordée pour les données sensibles.",
      "**Pour les administrations** : conformité aux textes spécifiques sectoriels — code de commerce pour la facturation électronique, code du travail pour les documents RH, code de procédure pour les dossiers judiciaires, code de la santé pour les dossiers patients.",
      "**Pour l'archivage à valeur probante** : la GED doit s'inscrire dans un système d'archivage électronique qui garantit l'intégrité, la lisibilité, la traçabilité et la pérennité des documents — typiquement avec scellement, rotation des algorithmes cryptographiques, et migration de format. Les solutions étrangères ne fournissent pas cette conformité par défaut pour le contexte algérien.",
    ],
  },
  {
    h: "Le cas spécifique du secteur public — justice, état civil, santé",
    body: [
      "Le **programme رقمنة قطاع العدالة** (digitalisation du secteur de la justice) demande une GED qui gère le cycle complet d'un dossier judiciaire : enregistrement de la requête, attribution au juge, audiences, jugements, voies de recours, exécution. Avec horodatage à chaque étape, signatures électroniques des magistrats, et archivage à valeur probante sur 30+ ans.",
      "**L'état civil** — naissances, mariages, divorces, décès — exige une GED interconnectée avec les communes, le Ministère de l'Intérieur, et les services consulaires algériens à l'étranger. Le défi technique est la cohérence référentielle nationale et la disponibilité 24/7 pour les délivrances de documents.",
      "**Le secteur de la santé** demande une GED hospitalière qui couvre dossier patient, prescriptions, comptes rendus d'hospitalisation, imagerie, et facturation CNAS. Conformité aux exigences du Ministère de la Santé et interopérabilité avec les autres établissements via standards HL7 et FHIR.",
      "Symloop a livré des GED dans chacun de ces trois domaines en Algérie. **Notre approche commence par une semaine au tribunal, à la wilaya ou à l'hôpital — pas dans une salle de réunion** — pour comprendre les flux papier réels avant de proposer leur équivalent numérique.",
    ],
  },
  {
    h: "Notre approche — GED algérienne, données algériennes, pérennité",
    body: [
      "Nous concevons des GED qui survivent dix ans, pas trois. Cela commence par **un noyau open source enterprise (Alfresco, Nuxeo) sur infrastructure souveraine — sur site dans la salle informatique du client, ou dans un cloud algérien régulé** — puis des extensions sur-mesure pour les workflows métier, la signature électronique algérienne, et les intégrations spécifiques.",
      "Pour les administrations, nous prévoyons systématiquement **un module d'audit complet** : qui a accédé à quel document, quand, sur quelle base légale, avec quelle finalité. C'est la condition de conformité avec la loi 18-07 et le standard que les administrations modernes doivent appliquer pour conserver la confiance des citoyens.",
      "Pour les entreprises privées, nous prévoyons **un module d'archivage fiscal et social** qui produit automatiquement les liasses pour DGI et CNAS, avec traçabilité de bout en bout et capacité d'export en cas de contrôle. Plus aucun audit avec des cartons de classeurs sortis de la cave.",
    ],
  },
];

export default function BlogGedDmsPage() {
  const router = useRouter();
  const isRTL = router.locale === 'ar';

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: ARTICLE.title, description: ARTICLE.desc, image: [ARTICLE.image],
    author: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://symloop.com' },
    publisher: { '@type': 'Organization', name: 'Symloop Technology', logo: { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png' } },
    datePublished: ARTICLE.published, dateModified: ARTICLE.modified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': ARTICLE.url },
    inLanguage: 'fr',
    about: [
      { '@type': 'Thing', name: 'Document management system' },
      { '@type': 'Thing', name: 'Dématérialisation entreprise' },
      { '@type': 'Thing', name: 'Signature électronique algerie' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://symloop.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://symloop.com/blog/' },
      { '@type': 'ListItem', position: 3, name: 'GED Algérie 2026', item: ARTICLE.url },
    ],
  };

  return (
    <>
      <Head>
        <title>{ARTICLE.title} | Symloop</title>
        <meta name="description" content={ARTICLE.desc} />
        <meta name="keywords" content="ged algerie, logiciel ged, dematerialisation entreprise, dematerialisation administration algerie, logiciel gestion documents, electronic document management algeria, dms algeria, archivage electronique, signature electronique algerie 15-04, valeur probante document electronique, workflow document, gestion electronique documents banque, ged ministere algerie, ged justice rقمنة, ged sante hopital, alfresco nuxeo algerie, sharepoint alternative algerie, opentext alternative algerie, dgi facturation electronique, cnas dematerialisation rh, archivage fiscal algerie 10 ans" />
        <link rel="canonical" href={ARTICLE.url} />
        <meta property="og:title" content={ARTICLE.title} />
        <meta property="og:description" content={ARTICLE.desc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={ARTICLE.url} />
        <meta property="og:image" content={ARTICLE.image} />
        <meta property="og:locale" content="fr_DZ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ARTICLE.title} />
        <meta name="twitter:description" content={ARTICLE.desc} />
        <meta name="twitter:image" content={ARTICLE.image} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <main dir={isRTL ? 'rtl' : 'ltr'} className="bg-black text-white">
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-12">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link href="/blog/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">Blog</Link>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">Enterprise · {ARTICLE.readTime}</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">
                Logiciel GED en Algérie 2026 — Dématérialisation et Archivage Électronique
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">
                Du parapheur cuir au workflow numérique. Loi 15-04 sur la signature électronique, archivage à valeur probante, alternatives SharePoint et OpenText. Comment construire une GED conforme et pérenne.
              </motion.p>
            </motion.div>
          </div>
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image src="/blog/cover-ged-dms.jpg" alt="Logiciel GED en Algérie — archives papier dématérialisées en flux numérique" fill priority sizes="100vw" className="object-cover" />
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          {SECTIONS.map((s, idx) => (
            <motion.section key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">{String(idx + 1).padStart(2, '0')}</span>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">{s.h}</h2>
              </motion.div>
              <div className="space-y-5 ps-0 lg:ps-10">
                {s.body.map((p, i) => (
                  <motion.p key={i} variants={fadeUp} className="text-base lg:text-lg text-white/70 leading-relaxed">
                    {p.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
                      part.startsWith('**') && part.endsWith('**')
                        ? <span key={j} className="font-normal text-white border-b border-white/30">{part.slice(2, -2)}</span>
                        : <span key={j}>{part}</span>
                    )}
                  </motion.p>
                ))}
              </div>
            </motion.section>
          ))}

          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-20 mb-16">
            <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-10">
              <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">FAQ</span>
              <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">Questions fréquentes sur la GED en Algérie</h2>
            </motion.div>
            <div className="space-y-8 ps-0 lg:ps-10 border-t border-white/[0.06] pt-8">
              {FAQ.map((f, i) => (
                <motion.div key={i} variants={fadeUp} className="border-b border-white/[0.06] pb-8 last:border-0">
                  <h3 className="text-lg lg:text-xl font-normal text-white mb-3 leading-snug">{f.q}</h3>
                  <p className="text-base lg:text-lg text-white/65 leading-relaxed">{f.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-20 mb-12">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">À lire ensuite</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <ul className="space-y-px bg-white/[0.06]">
              {[
                { name: "Digitalisation de l'administration — services publics souverains pour l'Algérie", href: '/insights/government/' },
                { name: 'Modernisation des logiciels bancaires — ce que les banques construisent', href: '/insights/banking/' },
                { name: 'Services Cybersécurité — SOC 2, ISO 27001, audit-grade', href: '/services/cybersecurity/' },
                { name: 'Conseil technologique — architecture, choix de stack, due diligence', href: '/services/consulting/' },
              ].map((item) => (
                <motion.li key={item.href} variants={fadeUp}>
                  <Link href={item.href} className="group flex items-start justify-between gap-6 bg-black p-6 hover:bg-white/[0.02] transition-colors">
                    <span className="text-base lg:text-lg text-white/75 group-hover:text-white transition-colors leading-snug font-light">{item.name}</span>
                    <ArrowRight className="w-4 h-4 mt-1.5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all shrink-0" strokeWidth={1.5} />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </article>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">Parlez à un ingénieur</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">
                Vous dirigez la digitalisation documentaire d'une entreprise ou d'une administration ? Décrivez votre situation.
              </motion.h2>
              <motion.div variants={fadeUp} className="mt-10">
                <Link href="/contact/" className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors">
                  <span>Réserver un appel de 30 minutes</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) }, revalidate: 86400 };
}
