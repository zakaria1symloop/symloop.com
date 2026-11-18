#!/usr/bin/env node
// Problem miner — how people in Algeria phrase a tech PROBLEM, not a product.
// Companies now describe their issue to ChatGPT in plain words; the pages that
// get cited are the ones written in those words. This script collects the
// phrasing from live autocomplete (Google gl=DZ + Bing fr-DZ / ar-DZ) for
// problem stems: "problème …", "pourquoi …", "comment …", "… ne marche pas".
// No key, publishes nothing.
//
//   node scripts/seo/mine-problems.mjs        # ≈ 700 calls, 2 min
//
// Output: geo/intent/problems-<date>.{json,md}
// A suggestion is a phrase the engine proposes, not a search volume.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = path.join(ROOT, 'geo', 'intent');
const TODAY = new Date().toISOString().slice(0, 10);

// stem → domain. Stems are what a manager starts typing; the engine finishes.
const STEMS = {
  network: ['problème réseau entreprise', 'wifi qui coupe', 'wifi lent bureau', 'connexion internet lente entreprise', 'internet coupe souvent', 'comment relier deux bureaux', 'comment connecter deux sites distants', 'comment partager des fichiers entre', 'comment accéder à distance au', 'comment installer un réseau', 'comment sécuriser un réseau', 'réseau lent', 'pourquoi mon réseau', 'imprimante réseau ne', 'caméra de surveillance à distance', 'comment brancher un switch', 'combien coûte un réseau informatique', 'comment choisir un routeur pour entreprise', 'starlink entreprise', 'fibre optique idoom entreprise', 'comment accéder à mon pc du bureau', 'comment travailler à distance', 'télétravail entreprise comment', 'comment partager une imprimante', 'bureau à distance ne', 'téléphone ip ne', 'standard téléphonique ne', 'comment bloquer des sites au bureau', 'wifi invités entreprise', 'comment étendre le wifi', 'internet de secours entreprise', 'câble réseau ne', 'comment tester un câble réseau', 'conflit adresse ip'],
  infra: ['serveur lent', 'serveur en panne', 'comment sauvegarder les données', 'perte de données entreprise', 'disque dur serveur', 'comment récupérer des données', 'coupure de courant serveur', 'onduleur pour serveur', 'comment choisir un serveur', 'faut-il un serveur', 'cloud ou serveur local', 'mail professionnel ne', 'comment créer une adresse mail professionnelle', 'ordinateurs lents entreprise', 'panne informatique entreprise', 'où héberger', 'nom de domaine entreprise', 'office 365 ou google workspace', 'comment migrer vers le cloud', 'serveur de fichiers ou', 'mes mails arrivent en spam', 'boîte mail pleine', 'mail professionnel bloqué', 'comment transférer mes mails', 'imprimante ne fonctionne plus', 'ordinateur lent que faire', 'comment gérer un parc informatique', 'windows 10 fin de support entreprise', 'licence microsoft entreprise', 'mot de passe administrateur perdu', 'serveur plein', 'comment archiver des documents'],
  security: ['ransomware entreprise', 'piratage entreprise', 'comment protéger entreprise contre', 'virus réseau entreprise', 'compte piraté entreprise', 'comment sécuriser les données', 'employé qui part avec les données', 'comment contrôler les accès', 'phishing entreprise', 'comment savoir si mon pc est piraté', 'mot de passe entreprise comment', 'authentification à deux facteurs comment', 'clé usb virus'],
  apps: ['application lente', 'application qui plante', 'site web lent', 'comment créer une application pour mon entreprise', 'combien coûte une application', 'faut-il une application ou un site', 'excel ne suffit plus', 'remplacer excel par', 'logiciel trop lent', 'comment digitaliser mon entreprise', 'comment suivre mes commerciaux', 'comment gérer plusieurs magasins', 'comment gérer le stock de plusieurs', 'comment suivre les livreurs', 'comment automatiser', 'erreurs de stock', 'double saisie', 'comment connecter deux logiciels', 'application sans internet', 'paiement en ligne algérie comment', 'logiciel de facturation', 'logiciel de caisse', 'comment vendre en ligne', 'comment créer un site e-commerce', 'application de livraison comment', 'comment prendre des rendez-vous en ligne', 'comment fidéliser les clients', 'comment suivre mes véhicules', 'comment gérer les rendez-vous', 'comment gérer le planning', 'comment suivre les interventions', 'comment réduire les impayés', 'comment gérer plusieurs points de vente', 'comment publier une application', 'combien de temps pour développer une application', 'comment choisir une agence de développement', 'mon site web ne', 'site web piraté', 'application ne s’ouvre plus', 'comment mettre à jour une application', 'développeur parti que faire', 'prestataire informatique ne répond plus', 'comment récupérer le code source', 'reprendre une application existante', 'cahier des charges application', 'application rejetée par', 'comment tester une application', 'logiciel sur mesure ou', 'comment gérer les réclamations clients', 'comment gérer le sav', 'comment suivre la production', 'comment gérer la maintenance des machines', 'comment suivre un chantier', 'comment faire l’inventaire rapidement', 'comment centraliser les données', 'tableau de bord entreprise comment', 'comment former les employés en ligne', 'comment gérer les tickets', 'comment envoyer des sms aux clients', 'comment gérer les abonnements', 'site web ne reçoit pas de visiteurs', 'formulaire de contact ne'],
  ai: ['comment utiliser l’intelligence artificielle dans mon entreprise', 'chatbot pour entreprise comment', 'comment automatiser le service client', 'répondre automatiquement whatsapp', 'ia pour analyser des documents', 'ia pour répondre aux mails', 'ia pour faire des devis', 'comment former une ia sur mes documents', 'transcrire des appels automatiquement', 'ia pour le service après-vente', 'agent ia qui prend les rendez-vous', 'chatgpt pour mon entreprise comment'],
};
const STEMS_AR = { network: ['مشكلة الشبكة', 'الواي فاي ضعيف', 'الانترنت بطيء في الشركة', 'كيف اربط بين مكتبين', 'كيف اشارك الملفات', 'كيف اصل الى حاسوبي عن بعد', 'مشاركة الملفات بين'], infra: ['السيرفر بطيء', 'كيف احفظ البيانات', 'استرجاع البيانات', 'مشكلة السيرفر', 'كيف انشئ بريد الكتروني للشركة'], apps: ['كيف اصمم تطبيق لشركتي', 'كم يكلف تطبيق', 'كيف ادير المخزون', 'التطبيق بطيء', 'كيف ارقمن شركتي', 'برنامج فواتير', 'كيف ابيع على الانترنت', 'برنامج تسيير المحل'], security: ['اختراق الشركة', 'فيروس الفدية'] };

// api.bing.com answers only to a full browser user agent (checked 17 Nov 2026).
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getJson(u) { try { const r = await fetch(u, { headers: { 'user-agent': UA } }); return await r.json(); } catch { return null; } }
const google = async (q, hl) => { const j = await getJson(`https://suggestqueries.google.com/complete/search?client=firefox&hl=${hl}&gl=dz&q=${encodeURIComponent(q)}`); return (j && j[1]) || []; };
const bing = async (q, hl) => { const j = await getJson(`https://api.bing.com/osjson.aspx?query=${encodeURIComponent(q)}&mkt=${hl === 'ar' ? 'ar-DZ' : 'fr-DZ'}`); return (j && j[1]) || []; };
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/’/g, "'");

const found = new Map(); let calls = 0;
async function harvest(stem, domain, hl) {
  for (const q of [stem, `${stem} `, `${stem} algérie`.replace('algérie', hl === 'ar' ? 'الجزائر' : 'algérie')]) {
    const [g, b] = await Promise.all([google(q, hl), bing(q, hl)]); calls += 2;
    for (const [engine, list] of [['google', g], ['bing', b]]) {
      list.slice(0, 10).forEach((s, rank) => {
        const key = norm(s);
        const it = found.get(key) || { text: s, stem, domain, hl, engines: new Set(), best: 99 };
        it.engines.add(engine); it.best = Math.min(it.best, rank); found.set(key, it);
      });
    }
    await sleep(200);
  }
}
for (const [domain, list] of Object.entries(STEMS)) for (const s of list) { await harvest(s, domain, 'fr'); process.stdout.write(`\r${calls} calls · ${found.size} suggestions · ${s}              `); }
for (const [domain, list] of Object.entries(STEMS_AR)) for (const s of list) { await harvest(s, domain, 'ar'); process.stdout.write(`\r${calls} calls · ${found.size} suggestions · ${s}              `); }
console.log();

const items = [...found.values()].map((it) => {
  const t = norm(it.text);
  const company = /(entreprise|societe|bureau|bureaux|magasin|pme|professionnel|pro\b|sites?|agence|usine|شركة|مكتب|مؤسسة)/.test(t);
  const problem = /(probleme|panne|lent|lente|coupe|plante|ne marche|ne fonctionne|perte|pirat|virus|ransomware|erreur|pourquoi|comment|combien|faut-il|مشكلة|بطيء|ضعيف|كيف|كم|اختراق)/.test(t);
  const consumer = /(iphone|samsung|ps4|ps5|xbox|tv|fortnite|free fire|pubg|facebook|instagram|tiktok|snapchat|windows 10|windows 11|pc gamer|livebox|freebox|sfr|bouygues|orange|bbox|djezzy|ooredoo|mobilis|4g|modem|maison|chambre)/.test(t);
  const noise = /(pdf|cours|formation|emploi|exercice|qcm|memoire|definition|telecharger|gratuit|تحميل|دروس)/.test(t);
  const score = it.engines.size * 3 + (10 - Math.min(it.best, 9)) * 0.5 + (company ? 3 : 0) + (problem ? 2 : 0) - (consumer ? 5 : 0) - (noise ? 8 : 0);
  return { query: it.text, stem: it.stem, domain: it.domain, hl: it.hl, engines: [...it.engines], best: it.best, company, problem, consumer, score: Math.round(score * 10) / 10 };
}).filter((x) => x.score > 0 && x.problem).sort((a, b) => b.score - a.score);

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, `problems-${TODAY}.json`), JSON.stringify({ date: TODAY, calls, method: 'Google suggest (client=firefox, gl=dz) + Bing api.bing.com/osjson (mkt fr-DZ / ar-DZ; the www.bing.com endpoint answered empty on 17 Nov 2026); problem stems listed in scripts/seo/mine-problems.mjs; kept = problem-shaped suggestions, consumer and study noise penalised', items }, null, 1));
const byDomain = {};
for (const x of items) (byDomain[x.domain] || (byDomain[x.domain] = [])).push(x);
const md = [`# Problem phrasing ${TODAY}`, '', `${calls} calls · ${items.length} problem-shaped suggestions kept. A suggestion is a phrase the engine proposes, not a volume.`, '',
  ...Object.entries(byDomain).flatMap(([d, list]) => [`## ${d} (${list.length})`, '', '| phrase | stem | engines | company word | score |', '|---|---|---|---|---|', ...list.slice(0, 60).map((x) => `| ${x.query} | ${x.stem} | ${x.engines.join('+')} | ${x.company ? 'yes' : ''} | ${x.score} |`), ''])].join('\n');
fs.writeFileSync(path.join(OUT, `problems-${TODAY}.md`), md);
console.log(`wrote geo/intent/problems-${TODAY}.md — ${calls} calls, ${items.length} kept`);
