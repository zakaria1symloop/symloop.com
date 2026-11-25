// /privacy/ — privacy policy and data-deletion instructions (FR / EN / AR).
// Describes what the site and the "Symloop Publisher" social app actually do. Keep it in step
// with the code: contact forms (Firestore), site assistant (OpenAI), analytics, ad measurement.
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const EMAIL = 'contact@symloop.com';
const UPDATED = { fr: '25 novembre 2026', en: '25 November 2026', ar: '25 نوفمبر 2026' };

const T = {
  fr: {
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour',
    intro: 'Cette page décrit les données que Symloop collecte sur symloop.com et par son application de publication « Symloop Publisher », ce que nous en faisons, et comment demander leur suppression.',
    sections: [
      ['Qui nous sommes', ['Symloop est une société de développement logiciel algérienne, présente à Alger et à Sétif. Pour toute question sur vos données : ' + EMAIL + '.']],
      ['Ce que nous collectons', [
        'Les formulaires de contact : nom, adresse e-mail, téléphone, société, secteur, votre message, ainsi que la page et la langue depuis lesquelles vous écrivez. Nous ne collectons ces données que si vous envoyez le formulaire.',
        'L’assistant du site : les messages que vous lui écrivez sont transmis à un fournisseur de modèles de langage pour produire la réponse. N’y écrivez pas d’informations confidentielles.',
        'La mesure d’audience : des statistiques de visite sans cookie (pages vues, pays, type d’appareil) et des mesures de performance des pages.',
        'La mesure publicitaire : une balise Google, et, lorsqu’il est activé, le pixel Meta, enregistrent qu’une visite ou une demande de contact fait suite à une publicité. Ces outils peuvent déposer des cookies.',
      ]],
      ['Ce que nous en faisons', [
        'Répondre à votre demande, préparer une proposition, et suivre la relation commerciale si vous devenez client.',
        'Comprendre quelles pages sont utiles et mesurer l’effet de nos publicités.',
        'Nous ne vendons pas vos données et nous ne les cédons à personne pour un autre usage.',
      ]],
      ['Où elles sont conservées', [
        'Les demandes de contact sont enregistrées dans une base de données en nuage (Google Firebase). Le site est hébergé chez Vercel. Ces prestataires traitent les données pour notre compte.',
        'Nous conservons une demande le temps nécessaire pour y répondre et pour suivre la relation commerciale, puis nous la supprimons, ou plus tôt si vous le demandez.',
      ]],
      ['L’application « Symloop Publisher »', [
        'Cette application sert uniquement à Symloop pour publier sur ses propres pages Facebook, Instagram et LinkedIn et pour lire les statistiques de ses propres publicités. Elle n’est pas ouverte au public et ne collecte aucune donnée d’autres utilisateurs de ces plateformes.',
      ]],
      ['Vos droits et la suppression de vos données', [
        'Vous pouvez demander l’accès à vos données, leur correction ou leur suppression en écrivant à ' + EMAIL + ', depuis l’adresse utilisée dans le formulaire ou en indiquant le numéro de téléphone fourni.',
        'Nous supprimons les données demandées sous trente jours et nous vous le confirmons par e-mail.',
      ]],
    ],
  },
  en: {
    title: 'Privacy policy',
    updated: 'Last updated',
    intro: 'This page describes the data Symloop collects on symloop.com and through its publishing application “Symloop Publisher”, what we do with it, and how to ask for its deletion.',
    sections: [
      ['Who we are', ['Symloop is a software development company based in Algeria, with teams in Algiers and Sétif. For any question about your data: ' + EMAIL + '.']],
      ['What we collect', [
        'Contact forms: name, email address, phone, company, sector, your message, and the page and language you write from. We collect this only if you submit the form.',
        'The site assistant: the messages you write to it are sent to a language-model provider to produce the reply. Do not write confidential information there.',
        'Audience measurement: cookieless visit statistics (pages viewed, country, device type) and page performance measurements.',
        'Advertising measurement: a Google tag and, when enabled, the Meta Pixel record that a visit or a contact request follows an advertisement. These tools may set cookies.',
      ]],
      ['What we do with it', [
        'Answer your request, prepare a proposal, and follow the business relationship if you become a customer.',
        'Understand which pages are useful and measure the effect of our advertising.',
        'We do not sell your data and we do not pass it to anyone for another use.',
      ]],
      ['Where it is kept', [
        'Contact requests are stored in a cloud database (Google Firebase). The site is hosted by Vercel. These providers process the data on our behalf.',
        'We keep a request for as long as needed to answer it and to follow the business relationship, then delete it, or earlier if you ask.',
      ]],
      ['The “Symloop Publisher” application', [
        'This application is used only by Symloop to publish on its own Facebook, Instagram and LinkedIn pages and to read the statistics of its own advertising. It is not open to the public and collects no data from other users of those platforms.',
      ]],
      ['Your rights and deleting your data', [
        'You can ask for access to your data, its correction or its deletion by writing to ' + EMAIL + ', from the address used in the form or stating the phone number you gave.',
        'We delete the requested data within thirty days and confirm it to you by email.',
      ]],
    ],
  },
  ar: {
    title: 'سياسة الخصوصية',
    updated: 'آخر تحديث',
    intro: 'تصف هذه الصفحة البيانات التي تجمعها Symloop على موقعها وعبر تطبيق النشر الخاص بها، وما نفعله بها، وكيف يُطلَب حذفها.',
    sections: [
      ['من نحن', ['Symloop شركة جزائرية لتطوير البرمجيات، حاضرة في الجزائر العاصمة وسطيف. لأي سؤال عن بياناتكم: ' + EMAIL + '.']],
      ['ما نجمعه', [
        'استمارات الاتصال: الاسم، البريد الإلكتروني، الهاتف، المؤسسة، القطاع، رسالتكم، والصفحة واللغة التي تكتبون منها. لا نجمع هذه البيانات إلا إذا أرسلتم الاستمارة.',
        'مساعد الموقع: الرسائل التي تكتبونها له تُرسَل إلى مزوّد نماذج لغوية لإنتاج الجواب. لا تكتبوا فيه معلومات سرية.',
        'قياس الزيارات: إحصائيات دون ملفات تعريف الارتباط (الصفحات المشاهَدة، البلد، نوع الجهاز) وقياسات أداء الصفحات.',
        'قياس الإعلانات: وسم من غوغل، وعند تفعيله بكسل ميتا، يسجّلان أن زيارة أو طلب اتصال جاء بعد إعلان. وقد تضع هذه الأدوات ملفات تعريف الارتباط.',
      ]],
      ['ما نفعله بها', [
        'الرد على طلبكم، تحضير عرض، ومتابعة العلاقة التجارية إذا صرتم زبائن.',
        'معرفة الصفحات المفيدة وقياس أثر إعلاناتنا.',
        'لا نبيع بياناتكم ولا نسلّمها لأحد لاستعمال آخر.',
      ]],
      ['أين تُحفَظ', [
        'طلبات الاتصال تُسجَّل في قاعدة بيانات سحابية. والموقع مستضاف لدى مزوّد استضافة. وهؤلاء المزوّدون يعالجون البيانات لحسابنا.',
        'نحتفظ بالطلب المدة اللازمة للرد عليه ولمتابعة العلاقة التجارية، ثم نحذفه، أو قبل ذلك إذا طلبتم.',
      ]],
      ['تطبيق النشر', [
        'هذا التطبيق تستعمله Symloop وحدها للنشر على صفحاتها الخاصة في فيسبوك، إنستغرام، ولينكد إن، ولقراءة إحصائيات إعلاناتها. ليس مفتوحاً للعموم ولا يجمع أي بيانات عن مستعملين آخرين لهذه المنصات.',
      ]],
      ['حقوقكم وحذف بياناتكم', [
        'يمكنكم طلب الاطلاع على بياناتكم، تصحيحها، أو حذفها بالكتابة إلى ' + EMAIL + '، من العنوان المستعمل في الاستمارة أو بذكر رقم الهاتف الذي قدّمتموه.',
        'نحذف البيانات المطلوبة في غضون ثلاثين يوماً ونؤكد لكم ذلك بالبريد الإلكتروني.',
      ]],
    ],
  },
};

export default function Privacy({ locale }) {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return (
    <>
      <Head>
        <title>{`${t.title} | Symloop`}</title>
        <meta name="description" content={t.intro} />
      </Head>
      <main dir={rtl ? 'rtl' : 'ltr'} style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '140px 20px 96px' }}>
        <article style={{ maxWidth: 760, margin: '0 auto', lineHeight: 1.7 }}>
          <h1 style={{ fontSize: 40, fontWeight: 300, margin: '0 0 8px' }}>{t.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, margin: '0 0 32px' }}>{t.updated} : {UPDATED[locale] || UPDATED.fr}</p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17 }}>{t.intro}</p>
          {t.sections.map(([heading, paragraphs]) => (
            <section key={heading} id={heading === t.sections[5][0] ? 'suppression' : undefined} style={{ marginTop: 40 }}>
              <h2 style={{ fontSize: 22, fontWeight: 400, margin: '0 0 12px' }}>{heading}</h2>
              {paragraphs.map((p) => (<p key={p} style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, margin: '0 0 12px' }}>{p}</p>))}
            </section>
          ))}
        </article>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
