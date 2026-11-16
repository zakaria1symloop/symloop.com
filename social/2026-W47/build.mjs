#!/usr/bin/env node
// Week 1 social batch for approval — Outsourcing Map 2027 (Symloop Research).
// Builds, from the data in this file: one 1080×1350 card per day and language
// (English, Arabic), captions.md, posts.json and a self-contained review.html.
// Nothing is posted or scheduled by this script.
//
//   node social/2026-W47/build.mjs
//
// Cards are rendered from HTML with headless Chrome (a separate temporary
// profile, so an open Chrome window is not touched) and saved as JPG.

import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath, pathToFileURL } from 'url';
import sharp from 'sharp';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const CHROME = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const SLUG = 'outsourcing-map-2027-what-search-engines-show-software-buyers-saudi-uae-qatar-france-spain';
const URL_EN = `https://symloop.com/blog/${SLUG}/`;
const URL_AR = `https://symloop.com/ar/blog/${SLUG}/`;
const SRC = { en: 'Symloop Research · Outsourcing Map 2027 · 16 Nov 2026 · autocomplete suggestions, not search volumes', ar: 'Symloop Research · خريطة التعهيد 2027 · 16 نوفمبر 2026 · اقتراحات الإكمال التلقائي، لا أحجام بحث' };

// Every number below is in research/outsourcing-map/2026-11-16/summary.json.
const POSTS = [
  { day: 1, date: 'Tue 17 Nov 2026', key: 'same-list',
    en: { big: '100 %', head: 'Riyadh, Dubai, Doha, London, New York: Google finishes “software development company in…” with the same list.', sub: '1,309 letter-by-letter suggestions, identical in all five markets.', chips: ['Riyadh', 'Dubai', 'Doha', 'London', 'New York'] },
    ar: { big: '100 %', head: 'الرياض، دبي، الدوحة، لندن، نيويورك: غوغل يُكمل عبارة البحث عن شركة برمجيات بالقائمة نفسها.', sub: '1,309 اقتراحات حرفاً حرفاً، مطابقة في الأسواق الخمسة.', chips: ['الرياض', 'دبي', 'الدوحة', 'لندن', 'نيويورك'] },
    linkedin: `We asked search engines one question 3,816 times: “software development company in…”, and let them finish the sentence.\n\nFirst result of our first study: a buyer in Riyadh, Dubai or Doha is handed the same list as a buyer in London or New York. On Google, the 1,309 letter-by-letter suggestions are identical in all five markets.\n\nSearch engines do not hand out one map per country. They hand out one per language.\n\nA suggestion is a phrase an engine proposes. It is not a search volume and not a ranking of quality. But it is the first thing a buyer sees.\n\nMethod, limits and the full dataset are open:\n${URL_EN}`,
    facebook: `طرحنا على محركات البحث سؤالاً واحداً 3,816 مرة: «software development company in…»، وتركناها تُكمل الجملة.\n\nأول نتيجة في أول دراسة لنا: المشتري في الرياض أو دبي أو الدوحة يتلقى القائمة نفسها التي يتلقاها المشتري في لندن أو نيويورك. عند غوغل، الاقتراحات الـ1,309 مطابقة في الأسواق الخمسة.\n\nالمحركات لا تقدّم خريطة لكل بلد، بل خريطة لكل لغة.\n\nالاقتراح عبارة يقترحها المحرك، لا حجم بحث ولا ترتيب للجودة. لكنه أول ما يراه المشتري.\n\nالمنهج والحدود والبيانات مفتوحة:\n${URL_AR}`,
    instagram_en: `Same list in five capitals.\n\nWe asked search engines “software development company in…” 3,816 times. In Riyadh, Dubai, Doha, London and New York, Google completes it with the same 1,309 suggestions.\n\nOne map per language, not per country.\n\nStudy, method and open data:\n${URL_EN}`,
    instagram_ar: `القائمة نفسها في خمس عواصم.\n\nسألنا محركات البحث «software development company in…» 3,816 مرة. في الرياض ودبي والدوحة ولندن ونيويورك، يُكملها غوغل بالاقتراحات الـ1,309 نفسها.\n\nخريطة لكل لغة، لا لكل بلد.\n\nالدراسة والمنهج والبيانات المفتوحة:\n${URL_AR}` },
  { day: 2, date: 'Wed 18 Nov 2026', key: 'india-37',
    en: { big: '37 %', head: 'of the places search suggestions propose to an English-speaking software buyer are in India.', sub: '284 of 762 place mentions. The United States follows at 17 %.', bars: [['India', 37], ['United States', 17], ['UAE', 5], ['Pakistan', 5], ['United Kingdom', 4], ['Qatar', 4]] },
    ar: { big: '37 %', head: 'من الأماكن التي تقترحها محركات البحث على مشتري البرمجيات بالإنجليزية توجد في الهند.', sub: '284 من 762 ذكراً لمكان. تليها الولايات المتحدة بـ17 %.', bars: [['الهند', 37], ['الولايات المتحدة', 17], ['الإمارات', 5], ['باكستان', 5], ['المملكة المتحدة', 4], ['قطر', 4]] },
    linkedin: `Type “software development company in” in English and let the engine finish. 37 % of the places it proposes are in India: Bangalore, Chennai, Hyderabad, Pune, Noida, Ahmedabad.\n\nThe United States follows at 17 %. Then the UAE and Pakistan at 5 %, the UK and Qatar at 4 %.\n\nThis is the same whether you type from Riyadh, Dubai, Doha, London or New York. We checked with control markets: the largest gap on any country’s share is 0.2 point.\n\nWe do not know why. The simplest hypothesis is that the list reflects what is typed in English around the world. We did not measure that, so we call it a hypothesis.\n\nWhat the map does not tell a buyer is who delivers.\n${URL_EN}`,
    facebook: `اكتب «software development company in» بالإنجليزية ودع المحرك يُكمل. 37 % من الأماكن التي يقترحها في الهند: بنغالور، تشيناي، حيدر آباد، بوني، نويدا، أحمد آباد.\n\nتليها الولايات المتحدة بـ17 %، ثم الإمارات وباكستان بـ5 %، والمملكة المتحدة وقطر بـ4 %.\n\nوالأمر نفسه سواء كتبت من الرياض أو دبي أو الدوحة أو لندن أو نيويورك.\n\nلا نعرف السبب. أبسط فرضية أن القائمة تعكس ما يُكتب بالإنجليزية في العالم. لم نقس ذلك، فنسمّيه فرضية.\n\nوما لا تقوله الخريطة للمشتري هو: من يسلّم؟\n${URL_AR}`,
    instagram_en: `37 % of the English map is India.\n\nWhen a buyer types “software development company in…”, 284 of the 762 places search suggestions propose are Indian. The United States: 17 %.\n\nThe map shows where people look. It does not show who delivers.\n\n${URL_EN}`,
    instagram_ar: `37 % من الخريطة الإنجليزية هي الهند.\n\nحين يكتب المشتري «software development company in…»، 284 من 762 مكاناً تقترحها المحركات هندية. الولايات المتحدة: 17 %.\n\nالخريطة تُظهر أين يبحث الناس، لا من يسلّم.\n\n${URL_AR}` },
  { day: 3, date: 'Thu 19 Nov 2026', key: 'own-country',
    en: { big: '2 %', head: 'A buyer in Saudi Arabia searching in English finds Saudi Arabia in 2 % of the places proposed.', sub: 'UAE 5 %, Qatar 4 %. For an American buyer, the United States is 17 %.', bars: [['Saudi Arabia', 2], ['UAE', 5], ['Qatar', 4], ['United Kingdom', 4], ['United States', 17]] },
    ar: { big: '2 %', head: 'المشتري في السعودية الذي يبحث بالإنجليزية يجد السعودية في 2 % من الأماكن المقترحة.', sub: 'الإمارات 5 %، قطر 4 %. وللمشتري الأمريكي، الولايات المتحدة 17 %.', bars: [['السعودية', 2], ['الإمارات', 5], ['قطر', 4], ['المملكة المتحدة', 4], ['الولايات المتحدة', 17]] },
    linkedin: `How local is search for a Gulf buyer?\n\nIn English, a buyer in Saudi Arabia finds Saudi Arabia in 2 % of the places search suggestions propose for a software partner. In the UAE it is 5 %. In Qatar, 4 %. For comparison, an American buyer finds the United States in 17 %.\n\nThe engine does localise, but only the first line, and not everywhere. Everything after it is the same global list.\n\nFor a Gulf company this has a practical meaning: the default suggestions will not surface the local market, and they will not surface most of the region either. The shortlist has to be built on something else.\n\nFull study with method and data:\n${URL_EN}`,
    facebook: `كم هو محلي البحث عند المشتري الخليجي؟\n\nبالإنجليزية، يجد المشتري في السعودية بلده في 2 % من الأماكن التي تقترحها المحركات لشريك برمجيات. في الإمارات 5 %. في قطر 4 %. وللمقارنة، يجد المشتري الأمريكي الولايات المتحدة في 17 %.\n\nالمحرك يوطّن فعلاً، لكن السطر الأول فقط، وليس في كل مكان. وما بعده قائمة عالمية واحدة.\n\nوالمعنى العملي: الاقتراحات لن تُظهر السوق المحلي، ولن تُظهر أغلب المنطقة. القائمة القصيرة يجب أن تُبنى على شيء آخر.\n\n${URL_AR}`,
    instagram_en: `2 %.\n\nThat is how often a buyer in Saudi Arabia, searching in English for a software partner, is shown Saudi Arabia. UAE: 5 %. Qatar: 4 %. United States for an American buyer: 17 %.\n\nThe first line is local. The rest is the world’s list.\n\n${URL_EN}`,
    instagram_ar: `2 %.\n\nهذه نسبة ظهور السعودية لمشترٍ في السعودية يبحث بالإنجليزية عن شريك برمجيات. الإمارات: 5 %. قطر: 4 %. والولايات المتحدة للمشتري الأمريكي: 17 %.\n\nالسطر الأول محلي، والباقي قائمة العالم.\n\n${URL_AR}` },
  { day: 4, date: 'Sun 22 Nov 2026', key: 'arabic-map',
    en: { big: '28 % · 27 %', head: 'Search in Arabic for a software company and the map is Egypt and Saudi Arabia.', sub: 'Then Syria 11 %, UAE 10 %, Jordan 5 %, Iraq 5 %. 82 place mentions.', bars: [['Egypt', 28], ['Saudi Arabia', 27], ['Syria', 11], ['UAE', 10], ['Jordan', 5], ['Iraq', 5]] },
    ar: { big: '28 % · 27 %', head: 'ابحث بالعربية عن «شركة برمجة في…» فتكون الخريطة مصر والسعودية.', sub: 'ثم سوريا 11 %، الإمارات 10 %، الأردن 5 %، العراق 5 %. من 82 ذكراً لمكان.', bars: [['مصر', 28], ['السعودية', 27], ['سوريا', 11], ['الإمارات', 10], ['الأردن', 5], ['العراق', 5]] },
    linkedin: `Change the language and the map changes.\n\nIn Arabic, the places search suggestions propose for “شركة برمجة في…” are Egypt, 28 %, and Saudi Arabia, 27 %. Then Syria, the UAE, Jordan and Iraq. No Maghreb country appears.\n\nAnd again the list is shared: the suggestions returned in Saudi Arabia, the UAE and Qatar are identical to those returned in Egypt. In Arabic, a buyer in Riyadh gets a Saudi first line on three seeds of four. A buyer in Dubai or Doha gets none, and is offered Egypt, Saudi Arabia or Jordan first.\n\nThis sample is small, 82 place mentions, so we read it as an order, not as fine percentages. The dataset is open.\n${URL_EN}`,
    facebook: `غيّر اللغة تتغيّر الخريطة.\n\nبالعربية، الأماكن التي تقترحها المحركات لعبارة «شركة برمجة في…» هي مصر، 28 %، والسعودية، 27 %. ثم سوريا والإمارات والأردن والعراق. ولا يظهر أي بلد مغاربي.\n\nوالقائمة مشتركة هنا أيضاً: الاقتراحات في السعودية والإمارات وقطر مطابقة لاقتراحات مصر. المشتري في الرياض ينال سطراً أول سعودياً في ثلاث بذور من أربع. والمشتري في دبي أو الدوحة لا ينال أي واحد، ويُقترح عليه مصر أو السعودية أو الأردن أولاً.\n\nالعينة صغيرة، 82 ذكراً لمكان، فنقرؤها كترتيب لا كنسب دقيقة. والبيانات مفتوحة.\n${URL_AR}`,
    instagram_en: `The Arabic map: Egypt 28 %, Saudi Arabia 27 %.\n\nSearch “شركة برمجة في…” and that is where suggestions point. Then Syria, UAE, Jordan, Iraq. The same list in Riyadh, Dubai, Doha and Cairo.\n\nSmall sample, read as an order. Open data:\n${URL_EN}`,
    instagram_ar: `الخريطة العربية: مصر 28 %، السعودية 27 %.\n\nابحث عن «شركة برمجة في…» وهناك تشير الاقتراحات. ثم سوريا والإمارات والأردن والعراق. القائمة نفسها في الرياض ودبي والدوحة والقاهرة.\n\nعينة صغيرة تُقرأ كترتيب. البيانات مفتوحة:\n${URL_AR}` },
  { day: 5, date: 'Mon 23 Nov 2026', key: 'first-line',
    en: { big: '1 line', head: 'Localisation exists, and it fits in one line.', sub: 'Seeds where Google’s first suggestion is local, in English and in Arabic.', table: [['Dubai · English', '4 of 6'], ['Doha · English', '3 of 6'], ['Riyadh · English', '1 of 6'], ['Riyadh · Arabic', '3 of 4'], ['Dubai · Arabic', '0 of 4'], ['Doha · Arabic', '0 of 4']] },
    ar: { big: 'سطر واحد', head: 'التوطين موجود، ويسع سطراً واحداً.', sub: 'البذور التي يكون أول اقتراح فيها من غوغل محلياً، بالإنجليزية وبالعربية.', table: [['دبي · بالإنجليزية', '4 من 6'], ['الدوحة · بالإنجليزية', '3 من 6'], ['الرياض · بالإنجليزية', '1 من 6'], ['الرياض · بالعربية', '3 من 4'], ['دبي · بالعربية', '0 من 4'], ['الدوحة · بالعربية', '0 من 4']] },
    linkedin: `“But search is local.” It is, for exactly one line.\n\nWe looked at what Google proposes first when a buyer has typed the seed and a space. In Dubai the first suggestion is local on four English seeds of six. In Doha, three. In Riyadh, one: the other five start with India, Hyderabad, Kolkata or Malaysia.\n\nIn Arabic it flips: Riyadh gets a Saudi first line on three seeds of four, Dubai and Doha on none.\n\nType one more letter and the list is everyone’s list again.\n\nFor a vendor, that means one local place per query, and a page that otherwise belongs to those the whole world already types. Visibility by default is not a strategy.\n${URL_EN}`,
    facebook: `«لكن البحث محلي». نعم، لسطر واحد بالضبط.\n\nنظرنا في ما يقترحه غوغل أولاً حين يكتب المشتري البذرة ثم مسافة. في دبي، الاقتراح الأول محلي في أربع بذور إنجليزية من ست. في الدوحة ثلاث. في الرياض واحدة: والخمس الأخرى تبدأ بالهند أو حيدر آباد أو كولكاتا أو ماليزيا.\n\nوبالعربية ينقلب الأمر: الرياض تنال سطراً أول سعودياً في ثلاث بذور من أربع، ودبي والدوحة في ولا واحدة.\n\nاكتب حرفاً إضافياً فتعود القائمة قائمة الجميع.\n\nللمزوّد: مكان محلي واحد لكل استعلام، وبقية الصفحة لمن يكتبهم العالم كله.\n${URL_AR}`,
    instagram_en: `Search is local for one line.\n\nGoogle’s first suggestion is local on 4 of 6 English seeds in Dubai, 3 in Doha, 1 in Riyadh. In Arabic: Riyadh 3 of 4, Dubai and Doha 0.\n\nOne more letter, and it is the world’s list again.\n\n${URL_EN}`,
    instagram_ar: `البحث محلي لسطر واحد.\n\nأول اقتراح من غوغل محلي في 4 بذور إنجليزية من 6 في دبي، 3 في الدوحة، 1 في الرياض. وبالعربية: الرياض 3 من 4، ودبي والدوحة 0.\n\nحرف إضافي، وتعود قائمة العالم.\n\n${URL_AR}` },
  { day: 6, date: 'Tue 24 Nov 2026', key: 'algeria',
    en: { big: '1 of 968', head: 'We are an Algerian software company. On the map search engines hand to buyers, Algeria appears once.', sub: 'Place mentions across four languages. That is why we measure instead of claiming.', table: [['English', '0 of 762'], ['Arabic', '0 of 82'], ['French', '1 of 96'], ['Spanish', '0 of 28']] },
    ar: { big: '1 من 968', head: 'نحن شركة برمجيات جزائرية. وعلى الخريطة التي تقدّمها المحركات للمشترين، تظهر الجزائر مرة واحدة.', sub: 'ذكر الأماكن في أربع لغات. ولهذا نقيس بدل أن ندّعي.', table: [['الإنجليزية', '0 من 762'], ['العربية', '0 من 82'], ['الفرنسية', '1 من 96'], ['الإسبانية', '0 من 28']] },
    linkedin: `A disclosure, since we published the study.\n\nSymloop is an Algerian software company. On the map search engines hand to software buyers, Algeria appears once in 968 place mentions: never in English, never in Arabic, never in Spanish, once in French. Morocco and Tunisia hold a quarter of the French map between them.\n\nThat does not mean there are no good engineers in Algeria. It means nobody will find them by letting a search box finish the sentence.\n\nSo we decided to stop saying what we are good at and start publishing things that can be checked: a method, a dataset, a result anyone can re-run. This study is the first.\n\nIf you disagree with a number, the data is open. Tell us.\n${URL_EN}`,
    facebook: `تصريح، ما دمنا نشرنا الدراسة.\n\nSymloop شركة برمجيات جزائرية. وعلى الخريطة التي تقدّمها محركات البحث لمشتري البرمجيات، تظهر الجزائر مرة واحدة من 968 ذكراً لمكان: ولا مرة بالإنجليزية، ولا بالعربية، ولا بالإسبانية، ومرة بالفرنسية. والمغرب وتونس يمسكان معاً ربع الخريطة الفرنسية.\n\nهذا لا يعني أن لا مهندسين جيدين في الجزائر. يعني أن أحداً لن يجدهم بترك خانة البحث تُكمل الجملة.\n\nفقررنا أن نكفّ عن قول ما نُحسنه، وأن ننشر ما يمكن التحقق منه: منهج، وبيانات، ونتيجة يستطيع أي أحد إعادتها. وهذه الدراسة هي الأولى.\n\nإن خالفتم رقماً فالبيانات مفتوحة. أخبرونا.\n${URL_AR}`,
    instagram_en: `1 of 968.\n\nThat is how often Algeria appears on the map search engines hand to software buyers, across English, Arabic, French and Spanish.\n\nWe are an Algerian software company. So we measure instead of claiming.\n\n${URL_EN}`,
    instagram_ar: `1 من 968.\n\nهذه مرات ظهور الجزائر على الخريطة التي تقدّمها المحركات لمشتري البرمجيات، بالإنجليزية والعربية والفرنسية والإسبانية.\n\nنحن شركة برمجيات جزائرية. فنقيس بدل أن ندّعي.\n\n${URL_AR}` },
  { day: 7, date: 'Wed 25 Nov 2026', key: 'five-proofs',
    en: { big: '5 proofs', head: 'A suggestion says what many people typed, not who delivers. Ask for what travels.', sub: 'Five things a buyer can check alone, whatever the vendor’s country.', list: ['Reviews counted by a third party', 'Named work, with a client you can call', 'A published measurement anyone can re-run', 'A live product you can open', 'A named team, and code ownership in the contract'] },
    ar: { big: '5 أدلة', head: 'الاقتراح يقول ما كتبه كثير من الناس، لا من يسلّم. اطلب ما يسافر.', sub: 'خمسة أشياء يتحقق منها المشتري وحده، أياً كان بلد المزوّد.', list: ['تقييمات يعدّها طرف ثالث', 'عمل مسمّى، بزبون يمكن الاتصال به', 'قياس منشور يستطيع أي أحد إعادته', 'منتج على الخط تستطيع فتحه', 'فريق مسمّى، وملكية الكود في العقد'] },
    linkedin: `After a week of numbers, the practical part.\n\nA search suggestion tells you what many people typed. It does not tell you who delivers. Before you shortlist a country or a company because it appeared by itself, ask for five things you can check without believing anyone:\n\n1. Reviews counted by a third party.\n2. Named work, with a client you can call.\n3. A published measurement, with its method, that anyone can re-run.\n4. A live product you can open before signing.\n5. A named team, and code ownership written in the contract.\n\nAsk three vendors from three countries the same five questions. Including us.\n\nThe study, its limits and the open dataset:\n${URL_EN}`,
    facebook: `بعد أسبوع من الأرقام، الجانب العملي.\n\nاقتراح البحث يقول ما كتبه كثير من الناس، ولا يقول من يسلّم. قبل أن تضع بلداً أو شركة في قائمتك القصيرة لأنهما ظهرا من تلقاء نفسيهما، اطلب خمسة أشياء تتحقق منها دون أن تصدّق أحداً:\n\n1. تقييمات يعدّها طرف ثالث.\n2. عمل مسمّى، بزبون يمكن الاتصال به.\n3. قياس منشور بمنهجه، يستطيع أي أحد إعادته.\n4. منتج على الخط تفتحه قبل التوقيع.\n5. فريق مسمّى، وملكية الكود مكتوبة في العقد.\n\nاطرح الأسئلة الخمسة نفسها على ثلاثة مزوّدين من ثلاثة بلدان. ونحن منهم.\n\n${URL_AR}`,
    instagram_en: `Five proofs that travel.\n\n1. Reviews counted by a third party\n2. Named work, with a client you can call\n3. A published measurement anyone can re-run\n4. A live product you can open\n5. A named team, and code ownership in the contract\n\nAsk three vendors from three countries. Including us.\n\n${URL_EN}`,
    instagram_ar: `خمسة أدلة تسافر.\n\n1. تقييمات يعدّها طرف ثالث\n2. عمل مسمّى، بزبون يمكن الاتصال به\n3. قياس منشور يستطيع أي أحد إعادته\n4. منتج على الخط تستطيع فتحه\n5. فريق مسمّى، وملكية الكود في العقد\n\nاسأل ثلاثة مزوّدين من ثلاثة بلدان. ونحن منهم.\n\n${URL_AR}` },
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const ltr = (s) => `<span dir="ltr" style="unicode-bidi:isolate">${esc(s)}</span>`;
// isolate numbers and Latin fragments inside Arabic text, in one pass (odd parts of the split are matches)
const arNum = (s) => String(s).split(/(\d[\d.,]*(?:\s?%)?(?:\s·\s\d[\d.,]*\s?%)*|[A-Za-z][A-Za-z0-9 .…\-]*[A-Za-z0-9…]|[A-Za-z])/g).map((part, k) => (k % 2 ? `<span dir="ltr" style="unicode-bidi:isolate">${esc(part)}</span>` : esc(part))).join('');

function card(p, lang) {
  const c = p[lang]; const rtl = lang === 'ar'; const T = rtl ? arNum : esc;
  const max = c.bars ? Math.max(...c.bars.map((b) => b[1])) : 1;
  let visual = '';
  if (c.bars) visual = `<div class="bars">${c.bars.map(([l, v], i) => `<div class="row"><div class="lab${i === 0 ? ' hot' : ''}">${esc(l)}</div><div class="track"><div class="bar${i === 0 ? ' hot' : ''}" style="width:${Math.max(3, Math.round((v / max) * 100))}%"></div></div><div class="val${i === 0 ? ' hot' : ''}">${ltr(`${v} %`)}</div></div>`).join('')}</div>`;
  if (c.chips) visual = `<div class="chips">${c.chips.map((x) => `<span class="chip">${esc(x)}</span>`).join('')}</div>`;
  if (c.table) visual = `<div class="table">${c.table.map(([l, v]) => `<div class="trow"><div class="tl">${esc(l)}</div><div class="tv">${rtl ? arNum(v) : esc(v)}</div></div>`).join('')}</div>`;
  if (c.list) visual = `<ol class="list">${c.list.map((x, i) => `<li><span class="n">${ltr(String(i + 1).padStart(2, '0'))}</span><span>${esc(x)}</span></li>`).join('')}</ol>`;
  const bigLong = c.big.length > 7;
  return `<!doctype html><html lang="${lang}" dir="${rtl ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{width:1080px;height:1350px;overflow:hidden}
  body{background:#0a0a0b;color:#fff;font-family:${rtl ? "'Segoe UI','Tahoma','Arial',sans-serif" : "'Georgia','Times New Roman',serif"};padding:78px 84px 70px;display:flex;flex-direction:column;background-image:radial-gradient(rgba(255,255,255,.07) 1.4px,transparent 1.4px);background-size:44px 44px}
  .top{display:flex;justify-content:space-between;align-items:center;font-family:'Consolas','Courier New',monospace;font-size:21px;letter-spacing:.2em;color:#9a9a9a;text-transform:uppercase;direction:ltr}
  .top b{color:#F2B544;font-weight:400}
  .big{margin-top:${bigLong ? 92 : 78}px;font-size:${bigLong ? 132 : 196}px;line-height:1;color:#F2B544;font-weight:400;${rtl ? "font-family:'Segoe UI','Tahoma',sans-serif;font-weight:600;" : ''}}
  .head{margin-top:38px;font-size:${rtl ? 50 : 52}px;line-height:${rtl ? 1.42 : 1.2};font-weight:${rtl ? 600 : 400};color:#fff}
  .sub{margin-top:26px;font-size:${rtl ? 29 : 28}px;line-height:1.5;color:#b9b9b9;font-family:${rtl ? "'Segoe UI','Tahoma',sans-serif" : "'Segoe UI','Arial',sans-serif"}}
  .visual{margin-top:auto;padding-top:34px}
  .bars .row{display:flex;align-items:center;gap:22px;margin:15px 0;font-family:${rtl ? "'Segoe UI','Tahoma',sans-serif" : "'Segoe UI','Arial',sans-serif"};font-size:27px}
  .lab{width:280px;color:#cfcfcf}.lab.hot,.val.hot{color:#F2B544}
  .track{flex:1;height:20px;background:rgba(255,255,255,.06)}.bar{height:100%;background:#8f8f8f}.bar.hot{background:#F2B544}
  .val{width:92px;text-align:end;font-family:'Consolas','Courier New',monospace;font-size:27px;color:#fff}
  .chips{display:flex;flex-wrap:wrap;gap:16px}.chip{border:1.5px solid rgba(255,255,255,.28);padding:16px 26px;font-size:30px;font-family:${rtl ? "'Segoe UI','Tahoma',sans-serif" : "'Segoe UI','Arial',sans-serif"};color:#e6e6e6}
  .table .trow{display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid rgba(255,255,255,.14);padding:17px 0;font-size:30px;font-family:${rtl ? "'Segoe UI','Tahoma',sans-serif" : "'Segoe UI','Arial',sans-serif"}}
  .tl{color:#d6d6d6}.tv{font-family:${rtl ? "'Segoe UI','Tahoma',sans-serif" : "'Consolas','Courier New',monospace"};color:#F2B544}
  .list{list-style:none}.list li{display:flex;gap:24px;align-items:baseline;border-top:1px solid rgba(255,255,255,.14);padding:17px 0;font-size:30px;line-height:1.35;font-family:${rtl ? "'Segoe UI','Tahoma',sans-serif" : "'Segoe UI','Arial',sans-serif"};color:#ececec}
  .list .n{font-family:'Consolas','Courier New',monospace;font-size:22px;color:#F2B544}
  .foot{margin-top:38px;border-top:1px solid rgba(255,255,255,.2);padding-top:22px;display:flex;justify-content:space-between;gap:30px;align-items:flex-end;font-family:${rtl ? "'Segoe UI','Tahoma',sans-serif" : "'Consolas','Courier New',monospace"};font-size:${rtl ? 19 : 17.5}px;line-height:1.5;color:#8d8d8d}
  .foot .site{font-family:'Consolas','Courier New',monospace;color:#fff;letter-spacing:.14em;white-space:nowrap;direction:ltr}
  </style></head><body>
  <div class="top"><span>Symloop <b>Research</b></span><span>Outsourcing Map 2027 · ${p.day}/7</span></div>
  <div class="big">${rtl ? arNum(c.big) : esc(c.big)}</div>
  <div class="head">${T(c.head)}</div>
  <div class="sub">${T(c.sub)}</div>
  <div class="visual">${visual}</div>
  <div class="foot"><span>${rtl ? arNum(SRC.ar) : esc(SRC.en)}</span><span class="site">symloop.com</span></div>
  </body></html>`;
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'symloop-social-'));
const profile = path.join(tmp, 'chrome-profile');
const images = {};
for (const p of POSTS) for (const lang of ['en', 'ar']) {
  const html = path.join(tmp, `day${p.day}-${lang}.html`); const png = path.join(tmp, `day${p.day}-${lang}.png`); const jpg = path.join(HERE, `day${p.day}-${p.key}-${lang}.jpg`);
  fs.writeFileSync(html, card(p, lang));
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check', `--user-data-dir=${profile}`, '--force-device-scale-factor=1', '--window-size=1080,1350', `--screenshot=${png}`, pathToFileURL(html).href], { stdio: 'ignore', timeout: 90000 });
  const meta = await sharp(png).metadata();
  let img = sharp(png);
  if (meta.width !== 1080 || meta.height !== 1350) img = img.resize(1080, 1350, { fit: 'cover', position: 'top' });
  await img.jpeg({ quality: 90, mozjpeg: true }).toFile(jpg);
  images[`${p.day}-${lang}`] = { file: path.basename(jpg), b64: fs.readFileSync(jpg).toString('base64'), rendered: `${meta.width}x${meta.height}` };
  console.log(path.basename(jpg), meta.width, meta.height, Math.round(fs.statSync(jpg).size / 1024) + ' KB');
}

// posts.json
fs.writeFileSync(path.join(HERE, 'posts.json'), JSON.stringify({ week: '2026-W47', status: 'draft — awaiting approval, nothing posted', study: { en: URL_EN, ar: URL_AR }, posts: POSTS.map((p) => ({ day: p.day, suggested_date: p.date, key: p.key, approved: false, images: { en: images[`${p.day}-en`].file, ar: images[`${p.day}-ar`].file }, linkedin_en: p.linkedin, facebook_ar: p.facebook, instagram_en: p.instagram_en, instagram_ar: p.instagram_ar })) }, null, 1));

// captions.md
const md = ['# Week 1 social batch — Outsourcing Map 2027 (Symloop Research)', '', 'Status: **draft, awaiting approval. Nothing has been posted or scheduled.**', '', `Study: ${URL_EN} (English) · ${URL_AR} (Arabic)`, '', 'One finding per day. LinkedIn in English, Facebook in Arabic, Instagram in English and Arabic. Every number is in `research/outsourcing-map/2026-11-16/summary.json`. Suggested dates skip Friday and Saturday (weekend in Saudi Arabia and Qatar); shift them as you like.', '',
  ...POSTS.flatMap((p) => [`## Day ${p.day} — ${p.date} — ${p.key}`, '', `Images: \`${images[`${p.day}-en`].file}\` (English) · \`${images[`${p.day}-ar`].file}\` (Arabic)`, '', '### LinkedIn (English)', '', p.linkedin, '', '### Facebook (Arabic)', '', p.facebook, '', '### Instagram (English)', '', p.instagram_en, '', '### Instagram (Arabic)', '', p.instagram_ar, '']),
].join('\n');
fs.writeFileSync(path.join(HERE, 'captions.md'), md);

// review.html (self-contained)
const cap = (title, text, rtl) => `<div class="cap"><div class="ct">${title}</div><pre dir="${rtl ? 'rtl' : 'ltr'}">${esc(text)}</pre></div>`;
const review = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Week 1 social batch — review</title><style>
:root{--bg:#f6f5f2;--fg:#17171a;--mut:#62626a;--line:#d9d7d0;--card:#fff;--acc:#9a6a00}
@media (prefers-color-scheme:dark){:root{--bg:#0e0e10;--fg:#f1f1f1;--mut:#a0a0a8;--line:#2b2b30;--card:#17171a;--acc:#F2B544}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.55 'Segoe UI',system-ui,Arial,sans-serif;padding:28px 16px 80px}
main{max-width:1180px;margin:0 auto}h1{font:400 34px/1.15 Georgia,serif;margin:0 0 10px}.lead{color:var(--mut);max-width:74ch;margin:0 0 8px}
.status{display:inline-block;border:1px solid var(--acc);color:var(--acc);padding:4px 10px;font-size:13px;letter-spacing:.06em;text-transform:uppercase;margin:10px 0 26px}
section{background:var(--card);border:1px solid var(--line);padding:22px;margin:0 0 26px}h2{font:400 24px/1.2 Georgia,serif;margin:0 0 4px}.date{color:var(--mut);font-size:14px;margin:0 0 16px}
.imgs{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-bottom:18px}.imgs figure{margin:0}.imgs img{width:100%;height:auto;display:block;border:1px solid var(--line)}.imgs figcaption{font-size:13px;color:var(--mut);margin-top:6px}
.caps{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:14px}.cap{border:1px solid var(--line);padding:12px 14px}.ct{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--acc);margin-bottom:8px}
pre{white-space:pre-wrap;word-break:break-word;margin:0;font:15px/1.6 'Segoe UI',Tahoma,Arial,sans-serif}
</style></head><body><main>
<h1>Week 1 social batch: Outsourcing Map 2027</h1>
<p class="lead">Seven days, one finding from the study per day. LinkedIn in English, Facebook in Arabic, Instagram in English and Arabic. Read each post, then tell Claude which days are approved, which to edit, and which dates to use.</p>
<p class="lead">Study: <a href="${URL_EN}">${URL_EN}</a></p>
<div class="status">Draft · nothing posted or scheduled</div>
${POSTS.map((p) => `<section><h2>Day ${p.day} · ${esc(p.en.big)} · ${esc(p.key)}</h2><p class="date">Suggested date: ${p.date}</p>
<div class="imgs"><figure><img alt="Day ${p.day} card, English" src="data:image/jpeg;base64,${images[`${p.day}-en`].b64}"><figcaption>${images[`${p.day}-en`].file} · LinkedIn and Instagram (English)</figcaption></figure><figure><img alt="Day ${p.day} card, Arabic" src="data:image/jpeg;base64,${images[`${p.day}-ar`].b64}"><figcaption>${images[`${p.day}-ar`].file} · Facebook and Instagram (Arabic)</figcaption></figure></div>
<div class="caps">${cap('LinkedIn · English', p.linkedin, false)}${cap('Facebook · Arabic', p.facebook, true)}${cap('Instagram · English', p.instagram_en, false)}${cap('Instagram · Arabic', p.instagram_ar, true)}</div></section>`).join('\n')}
</main></body></html>`;
fs.writeFileSync(path.join(HERE, 'review.html'), review);
fs.rmSync(tmp, { recursive: true, force: true });
console.log('wrote captions.md, posts.json, review.html —', POSTS.length, 'days,', Object.keys(images).length, 'images');
