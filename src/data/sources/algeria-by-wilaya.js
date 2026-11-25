// Verified IT companies and web agencies, regrouped by wilaya, for the pages
// /entreprises-informatiques/<wilaya>/. Nothing new is stated here: the entries are the ones
// already verified for the national lists, plus those found wilaya by wilaya
// (algeria-wilaya-companies.js). In every case their own site loads and states the city.
//
// A wilaya gets a page only when at least one company based there has been verified. To add a
// wilaya, verify companies there and add them to algeria-tech-companies.js or
// algeria-web-agencies.js with the wilaya's key as `city`; the page and the sitemap entry follow.
import { COMPANIES, TOP_COMPANIES } from './algeria-tech-companies';
import { AGENCIES, TOP_AGENCIES } from './algeria-web-agencies';
import { WILAYA_COMPANIES } from './algeria-wilaya-companies';

export const VERIFIED_ON = '2026-11-25';

const alpha = (a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
const seen = new Map();
for (const x of [...COMPANIES, ...AGENCIES, ...WILAYA_COMPANIES]) if (!x.self && x.city && !seen.has(x.name)) seen.set(x.name, x);
const LOCAL = [...seen.values()].sort(alpha);
const SYMLOOP = COMPANIES.find((x) => x.self);
// wilayas where Symloop itself has a team
export const SYMLOOP_WILAYAS = ['alger', 'setif'];

export const WILAYA_KEYS = [...new Set([...LOCAL.map((x) => x.city), ...SYMLOOP_WILAYAS])].sort();

// Ten per page at most: the publisher first (it is flagged `self`), then up to nine companies
// based in the wilaya, those of the national selections before the others.
const FEATURED = new Set([...TOP_COMPANIES, ...TOP_AGENCIES]);
function localShown(key) {
  const here = LOCAL.filter((x) => x.city === key);
  return [...here.filter((x) => FEATURED.has(x.name)), ...here.filter((x) => !FEATURED.has(x.name))].slice(0, 9).sort(alpha);
}
export function wilayaItems(key) {
  return [SYMLOOP, ...localShown(key)];
}
// companies shown that are based in the wilaya (the publisher counts where it has a team)
export function localCount(key) {
  return localShown(key).length + (SYMLOOP_WILAYAS.includes(key) ? 1 : 0);
}
