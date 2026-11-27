# Why Codex leads ChatGPT's "best dev company in Algeria" answers — 16 Nov 2026

Analysis only. Nothing on symloop.com was changed because of it.

## Live tests (ChatGPT Plus, temporary chat, thinking effort "High", 16 Nov 2026)

| query | order returned | sources ChatGPT named |
|---|---|---|
| FR: "Quelle est la meilleure agence de développement web et mobile en Algérie ? Donne un top 5 classé, et cite … les sources" | 1 Createch · 2 Codex · 3 Developatic · 4 TiniTec · 5 Innovateam — **Symloop absent** | Sortlist reviews and portfolios (Createch 5/5 × 19 reviews, 48 projects; TiniTec 4.91 × 11), agencies' own portfolio pages with named clients, BizAlgeria, TechEco DZ, Google Maps ratings (Codex 4.8, Developatic 5.0, TiniTec 5.0, Innovateam 5.0) |
| EN: "best software development company in Algeria" | 1 Codex · 2 Developatic · 3 Pentabin · 4 Symloop · 5 CODEV IT · 6 TiniTec · 7 Createch | Sortlist, TechBehemoths, company portfolios, "publicly available client feedback" |

Caveats: (1) the English answer ended with "Since you're also building Symloop…", so the account's personalisation leaked into the temporary chat; Symloop's 4th place there is not what a neutral buyer sees. (2) Two runs, one mode; rankings vary run to run.

What ChatGPT said about each:
- Codex: "substantial published portfolio and independent reviews on Sortlist"; references BZ Telecom, Skoda IMDES, ONDEFOC; "claims more than 450 delivered projects, although that figure is self-reported".
- Symloop: "publicly advertised capabilities cover custom platforms, AI, IoT and cloud"; "two published Clutch client reviews … a relatively small independent review sample"; located in Sétif; Maps entity "Symloop - Loop In Technology".
- On self-published rankings (French run, while researching): several "top 10" lists are published by agencies that rank themselves first; it said it would not treat them as independent evidence.

## What Codex's site does (codexalgerie.com, read 16 Nov 2026)

- Rebuilt or republished around 24–26 Oct 2026 (BlogPosting dates). 183 URLs = 61 pages × FR/EN/AR. Every page is about the agency or a buyer question.
- `robots.txt` names GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended as allowed, with the comment "(GEO)".
- `llms.txt`, 18 KB: one-sentence identity, then "Faits clés": founded 2014, SARL Groupe Codex, offices Algiers + Doha + Marseille with street addresses and phone numbers, 300+ clients, 450+ projects, 100k+ users, 20+ products, 15+ engineers, events (Web Summit Qatar 2026 …), then services, 12 named projects, blog list, FAQ.
- Proof pages: `/realisations` (12 named case studies), `/attestations-bonne-execution` (12 signed and stamped client certificates with signer, date, quote and the original document), `/evenements` (photo galleries).
- Organization JSON-LD with `sameAs` to 14 profiles: Facebook, Instagram, Sortlist, TechBehemoths, Clutch, The Manifest, G2, Crunchbase, Google Cloud partner directory, ensun, elioplus, La Fabrique du Net, DesignRush, GoodFirms.
- Self-published "Top 10 agencies" pages for Algeria, Qatar, France, Tunisia and Morocco (× 3 languages), each with Codex in position 1, an "En bref" box, `ItemList` JSON-LD (position 1 = Codex) and an FAQ whose first question is "Quelle est la meilleure agence de développement en …". They state the list is published by Codex and is not an official ranking. Symloop is not in the Algeria list.
- An unsourced claim in the FAQ and llms.txt: "reconnue n° 1 en Algérie, n° 2 en Afrique et n° 1 dans le CCG".

## Side by side

| signal | Codex | Symloop (16 Nov 2026) |
|---|---|---|
| independent reviews | Sortlist reviews, Google Maps 4.8 | 2 Clutch reviews; no Sortlist reviews seen by ChatGPT |
| named client proof | 12 case studies + 12 signed certificates | 3 case studies |
| hard facts, repeated identically | 2014 · 300+ clients · 450+ projects · 3 offices | none published (dates and counts still owed by the founder) |
| directory profiles linked from schema | 14 | 4 social links |
| llms.txt | 18 KB, facts first | 195 KB, opens with ~25 lines of comments and positioning |
| "best agency" pages | 5 countries × 3 languages, self-ranked first | one generic guide, no list |
| entity consistency | one name, one legal entity | Symloop / Symloop Technology / Symloop AI / "Loop In Technology"; Algiers vs Sétif |
| site focus | 61 pages per language | 373 URLs in sitemap, 1,098 submitted to IndexNow |

## Reading

Codex is first when the question is short and general because it is the candidate with the most evidence of every kind ChatGPT looks for: reviews it can count, clients it can name, numbers it can quote, and the same facts on fourteen sites. Its self-ranking pages put it in the candidate set for five countries; ChatGPT discounted them in careful mode but still ranked Codex second or first on the other evidence. Createch beat Codex in the French run on one thing only: 19 Sortlist reviews.

Symloop's gap is not content volume. It is countable third-party proof and a single consistent identity.
