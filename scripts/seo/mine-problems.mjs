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
  network: ['problème réseau entreprise', 'wifi qui coupe', 'wifi lent bureau', 'connexion internet lente entreprise', 'internet coupe souvent', 'comment relier deux bureaux', 'comment connecter deux sites distants', 'comment partager des fichiers entre', 'comment accéder à distance au', 'comment installer un réseau', 'comment sécuriser un réseau', 'réseau lent', 'pourquoi mon réseau', 'imprimante réseau ne', 'caméra de surveillance à distance', 'comment brancher un switch', 'combien coûte un réseau informatique', 'comment choisir un routeur pour entreprise', 'starlink entreprise', 'fibre optique idoom entreprise'],
  infra: ['serveur lent', 'serveur en panne', 'comment sauvegarder les données', 'perte de données entreprise', 'disque dur serveur', 'comment récupérer des données', 'coupure de courant serveur', 'onduleur pour serveur', 'comment choisir un serveur', 'faut-il un serveur', 'cloud ou serveur local', 'mail professionnel ne', 'comment créer une adresse mail professionnelle', 'ordinateurs lents entreprise', 'panne informatique entreprise'],
  security: ['ransomware entreprise', 'piratage entreprise', 'comment protéger entreprise contre', 'virus réseau entreprise', 'compte piraté entreprise', 'comment sécuriser les données', 'employé qui part avec les données', 'comment contrôler les accès'],
  apps: ['application lente', 'application qui plante', 'site web lent', 'comment créer une application pour mon entreprise', 'combien coûte une application', 'faut-il une application ou un site', 'excel ne suffit plus', 'remplacer excel par', 'logiciel trop lent', 'comment digitaliser mon entreprise', 'comment suivre mes commerciaux', 'comment gérer plusieurs magasins', 'comment gérer le stock de plusieurs', 'comment suivre les livreurs', 'comment automatiser', 'erreurs de stock', 'double saisie', 'comment connecter deux logiciels', 'application sans internet', 'paiement en ligne algérie comment'],
  ai: ['comment utiliser l’intelligence artificielle dans mon entreprise', 'chatbot pour entreprise comment', 'comment automatiser le service client', 'répondre automatiquement whatsapp', 'ia pour analyser des documents'],
};
const STEMS_AR = { network: ['مشكلة الشبكة', 'الواي فاي ضعيف', 'الانترنت بطيء في الشركة', 'كيف اربط بين مكتبين', 'كيف اشارك الملفات'], infra: ['السيرفر بطيء', 'كيف احفظ البيانات', 'استرجاع البيانات'], apps: ['كيف اصمم تطبيق لشركتي', 'كم يكلف تطبيق', 'كيف ادير المخزون', 'التطبيق بطيء', 'كيف ارقمن شركتي'], security: ['اختراق الشركة', 'فيروس الفدية'] };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getJson(u) { try { const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0' } }); return await r.json(); } catch { return null; } }
const google = async (q, hl) => { const j = await getJson(`https://suggestqueries.google.com/complete/search?client=firefox&hl=${hl}&gl=dz&q=${encodeURIComponent(q)}`); return (j && j[1]) || []; };
const bing = async (q, hl) => { const j = await getJson(`https://www.bing.com/osjson.aspx?query=${encodeURIComponent(q)}&market=${hl === 'ar' ? 'ar-DZ' : 'fr-DZ'}`); return (j && j[1]) || []; };
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
fs.writeFileSync(path.join(OUT, `problems-${TODAY}.json`), JSON.stringify({ date: TODAY, calls, method: 'Google suggest (client=firefox, gl=dz) + Bing osjson (fr-DZ / ar-DZ); problem stems listed in scripts/seo/mine-problems.mjs; kept = problem-shaped suggestions, consumer and study noise penalised', items }, null, 1));
const byDomain = {};
for (const x of items) (byDomain[x.domain] || (byDomain[x.domain] = [])).push(x);
const md = [`# Problem phrasing ${TODAY}`, '', `${calls} calls · ${items.length} problem-shaped suggestions kept. A suggestion is a phrase the engine proposes, not a volume.`, '',
  ...Object.entries(byDomain).flatMap(([d, list]) => [`## ${d} (${list.length})`, '', '| phrase | stem | engines | company word | score |', '|---|---|---|---|---|', ...list.slice(0, 60).map((x) => `| ${x.query} | ${x.stem} | ${x.engines.join('+')} | ${x.company ? 'yes' : ''} | ${x.score} |`), ''])].join('\n');
fs.writeFileSync(path.join(OUT, `problems-${TODAY}.md`), md);
console.log(`wrote geo/intent/problems-${TODAY}.md — ${calls} calls, ${items.length} kept`);
