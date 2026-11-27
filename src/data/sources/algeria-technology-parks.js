// Sourced list: technology parks and incubators run by the ANPT (Agence Nationale de Promotion et
// de Développement des Parcs Technologiques) in Algeria.
//
// Method: anpt.dz did not respond on the date in VERIFIED_ON (its domain did not resolve). Every
// fact below was therefore read on the ANPT's own pages in dated copies kept by the Internet
// Archive (web.archive.org), captured between July and October 2026; `url` links that copy. News
// articles were leads only. Rents, surface areas, investment amounts, numbers or names of hosted
// companies and names of people are never reported, and no rule or eligibility condition is
// explained. No ranking. Symloop does not run a park and is not listed.
// To correct or add an entry: contact@symloop.com.
//
// focus:    technoparc (operating technology park) | incubator (ANPT incubator) | project (park
//           listed by the ANPT among its infrastructure projects)
// city:     commune and wilaya as the ANPT page states them (shown as written)
// services: offices, incubator, training, events, domiciliation

export const VERIFIED_ON = '2026-11-27';
export const ARCHIVE_DATES = { fr: 'juillet à octobre 2026', en: 'July to October 2026', ar: 'جويلية إلى أكتوبر 2026' };
export const AGENCY_URL = 'https://web.archive.org/web/20260813191241/https://anpt.dz/about';
export const STEPS_URL = 'https://anpt.dz/demarches-creation-entreprise';

export const PARKS = [
  { name: 'Technoparc de Sidi Abdellah', by: 'ANPT', url: 'https://web.archive.org/web/20261004033951/https://anpt.dz/technoparc-de-sidi-abdellah', city: 'Rahmania (Alger)', focus: 'technoparc', services: ['offices', 'incubator', 'training', 'events', 'domiciliation'],
    note: { fr: 'Appelé aussi cyberparc de Sidi Abdellah. La page de l’ANPT le décrit comme accueillant des entreprises du numérique, avec un incubateur, un immeuble de bureaux à plusieurs locataires, des salles de formation et des salles de conférence.', en: 'Also called the Sidi Abdellah cyberparc. The ANPT page describes it as hosting digital companies, with an incubator, a multi-tenant office building, training rooms and conference halls.', ar: 'يُسمّى أيضاً الحظيرة السيبرانية لسيدي عبد الله. تصفه صفحة ANPT بأنه يستقبل مؤسسات الرقمنة، بحاضنة، عمارة مكاتب لعدة مستأجرين، قاعات تكوين وقاعات مؤتمرات.' } },
  { name: 'Incubateur de Bordj Bou Arreridj', by: 'ANPT', url: 'https://web.archive.org/web/20260711083907/https://anpt.dz/incubateur-de-bordj-bou-arreridj', city: 'Zone industrielle, Bordj Bou Arreridj', focus: 'incubator', services: ['incubator', 'offices', 'training', 'events'],
    note: { fr: 'L’ANPT situe cet incubateur dans la zone industrielle de Bordj Bou Arreridj et énumère des salles de formation, une salle de réunion, un espace d’exposition et des bureaux aménagés.', en: 'The ANPT places this incubator in the Bordj Bou Arreridj industrial zone and lists training rooms, a meeting room, an exhibition space and fitted offices.', ar: 'تضع ANPT هذه الحاضنة في المنطقة الصناعية ببرج بوعريريج وتعدّد قاعات تكوين، قاعة اجتماعات، فضاء عرض ومكاتب مهيأة.' } },
  { name: 'Incubateur de Bordj Bou Arreridj – Université', by: 'ANPT', url: 'https://web.archive.org/web/20260710132805/https://anpt.dz/incubateur-de-bordj-bou-arreridj-universite', city: 'Bordj Bou Arreridj', focus: 'incubator', services: ['incubator'],
    note: { fr: 'La page de l’ANPT indique seulement que cet incubateur se trouve à l’université Mohamed El Bachir El Ibrahimi de Bordj Bou Arreridj.', en: 'The ANPT page only states that this incubator is located at Mohamed El Bachir El Ibrahimi University in Bordj Bou Arreridj.', ar: 'تذكر صفحة ANPT فقط أن هذه الحاضنة توجد في جامعة محمد البشير الإبراهيمي ببرج بوعريريج.' } },
  { name: 'Incubateur d’Oran', by: 'ANPT', url: 'https://web.archive.org/web/20260710140754/https://anpt.dz/incubateur-doran', city: 'Oran', focus: 'incubator', services: ['incubator'],
    note: { fr: 'L’ANPT indique que cet incubateur est installé à l’INTTIC d’Oran, ouvert en 2018, et qu’il accompagne les porteurs de projets de l’ouest du pays.', en: 'The ANPT states this incubator is housed at INTTIC Oran, opened in 2018, and supports project holders from the west of the country.', ar: 'تذكر ANPT أن هذه الحاضنة موجودة في INTTIC بوهران، فُتحت سنة 2018، وترافق حاملي المشاريع من غرب البلاد.' } },
  { name: 'Technoparc régional d’Annaba', by: 'ANPT', url: 'https://web.archive.org/web/20260711085927/https://anpt.dz/projet-detail/technoparc-regional-annaba', city: 'Sidi Amar (Annaba)', focus: 'project', services: ['in_project'],
    note: { fr: 'L’ANPT le range parmi ses projets d’infrastructure et décrit un site près d’El Hadjar et de l’aéroport d’Annaba ; sa page ne dit pas que des entreprises y sont installées.', en: 'The ANPT lists it among its infrastructure projects and describes a site near El Hadjar and Annaba airport; its page does not say companies are hosted there.', ar: 'تصنّفه ANPT ضمن مشاريع البنية التحتية وتصف موقعاً قرب الحجار ومطار عنابة؛ ولا تذكر صفحته أن مؤسسات تقيم فيه.' } },
  { name: 'Technoparc régional d’Oran', by: 'ANPT', url: 'https://web.archive.org/web/20260710172528/https://anpt.dz/projet-detail/technoparc-regional-oran', city: 'Bir El Djir (Oran)', focus: 'project', services: ['in_project'],
    note: { fr: 'L’ANPT le range parmi ses projets d’infrastructure et décrit un site près de l’université de Belgaïd ; sa page ne dit pas que des entreprises y sont installées.', en: 'The ANPT lists it among its infrastructure projects and describes a site near Belgaid university; its page does not say companies are hosted there.', ar: 'تصنّفه ANPT ضمن مشاريع البنية التحتية وتصف موقعاً قرب جامعة بلقايد؛ ولا تذكر صفحته أن مؤسسات تقيم فيه.' } },
  { name: 'Technoparc régional d’Ouargla', by: 'ANPT', url: 'https://web.archive.org/web/20260710135152/https://anpt.dz/projet-detail/technoparc-regional-ouargla', city: 'Ouargla', focus: 'project', services: ['in_project'],
    note: { fr: 'L’ANPT décrit un futur parc d’activités et de recherche dans le numérique, aux bâtiments adaptés au climat ; sa dernière annonce datée sur ce projet remonte à janvier 2020.', en: 'The ANPT describes a future digital activity and research park with climate-adapted buildings; its latest dated notice on this project is from January 2020.', ar: 'تصف ANPT حظيرة مستقبلية للنشاط والبحث في الرقمنة بمبانٍ ملائمة للمناخ؛ وآخر إعلان مؤرخ عن هذا المشروع يعود إلى جانفي 2020.' } },
];
