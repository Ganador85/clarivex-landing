import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  clusterDefinitions,
  contentPageMap,
  existingPageMetadata,
  resourceHubPath,
  siteConfig,
  SCHEMA_IDS,
  buildCreditStarterOffer,
} from '@/content/seoPages';

const linkMetadata = Object.fromEntries(
  [...existingPageMetadata, ...Object.values(contentPageMap)].map((item) => [
    item.path,
    {
      title: item.title,
      description: item.description,
    },
  ])
);

function buildStructuredData(page, cluster) {
  const canonicalUrl = `${siteConfig.url}${page.path}`;

  const graph = [
    {
      '@type': 'Organization',
      '@id': SCHEMA_IDS.organization,
      name: siteConfig.schemaBrandName,
      description: siteConfig.organizationDescription,
      url: siteConfig.url,
      logo: siteConfig.logo,
      sameAs: siteConfig.sameAs,
      email: siteConfig.supportEmail,
    },
    {
      '@type': 'WebSite',
      '@id': SCHEMA_IDS.website,
      name: siteConfig.schemaBrandName,
      url: siteConfig.url,
      inLanguage: siteConfig.language,
      publisher: { '@id': SCHEMA_IDS.organization },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Pradžia',
          item: `${siteConfig.url}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Resursai',
          item: `${siteConfig.url}${resourceHubPath}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: cluster.label,
          item: `${siteConfig.url}${resourceHubPath}#${cluster.id}`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: page.title,
          item: canonicalUrl,
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      name: page.title,
      url: canonicalUrl,
      description: page.description,
      inLanguage: siteConfig.language,
      isPartOf: { '@id': SCHEMA_IDS.website },
      about: cluster.label,
      breadcrumb: { '@type': 'BreadcrumbList' },
      primaryImageOfPage: siteConfig.socialImage,
      dateModified: page.updatedAt || '2026-03-19',
    },
  ];

  if (page.type === 'solution') {
    graph.push({
      '@type': 'SoftwareApplication',
      '@id': `${canonicalUrl}#softwareapplication`,
      name: `${siteConfig.schemaBrandName} ${page.title}`,
      url: `${siteConfig.url}/`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: siteConfig.softwareApplicationDescription,
      inLanguage: siteConfig.language,
      offers: buildCreditStarterOffer(`${siteConfig.url}/kainos`),
      featureList: page.highlights,
      publisher: { '@id': SCHEMA_IDS.organization },
    });
  } else {
    graph.push({
      '@type': 'Article',
      headline: page.title,
      description: page.description,
      datePublished: page.updatedAt || '2026-03-19',
      dateModified: page.updatedAt || '2026-03-19',
      inLanguage: siteConfig.language,
      author: {
        '@type': 'Organization',
        name: siteConfig.schemaBrandName,
      },
      publisher: {
        '@id': SCHEMA_IDS.organization,
      },
      mainEntityOfPage: {
        '@id': `${canonicalUrl}#webpage`,
      },
    });
  }

  if (page.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: page.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

const SeoResourcePage = ({ page }) => {
  const canonicalUrl = `${siteConfig.url}${page.path}`;
  const cluster = clusterDefinitions.find((item) => item.id === page.cluster);
  const structuredData = buildStructuredData(page, cluster);
  const relatedPages = (page.relatedPaths || [])
    .map((path) => ({ path, ...linkMetadata[path] }))
    .filter((item) => item.title);

  return (
    <>
      <Helmet>
        <html lang="lt" />
        <title>{page.title} — Clarivex</title>
        <meta name="description" content={page.description} />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${page.title} — Clarivex`} />
        <meta property="og:description" content={page.description} />
        <meta property="og:type" content={page.type === 'solution' ? 'website' : 'article'} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content="lt_LT" />
        <meta property="og:image" content={siteConfig.socialImage} />
        <meta property="og:image:alt" content={page.title} />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${page.title} — Clarivex`} />
        <meta name="twitter:description" content={page.description} />
        <meta name="twitter:image" content={siteConfig.socialImage} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="cvx-page min-h-screen text-white">
        <Header />

        <main className="pt-24 pb-20">
          <section className="px-4 py-14 border-b border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950">
            <div className="container mx-auto max-w-5xl">
              <div className="flex flex-wrap items-center gap-3 text-sm mb-6 text-gray-400">
                <Link to="/" className="hover:text-white transition-colors">
                  Pradžia
                </Link>
                <span>/</span>
                <Link to={resourceHubPath} className="hover:text-white transition-colors">
                  Resursai
                </Link>
                <span>/</span>
                <span className="text-gray-200">{cluster.label}</span>
              </div>

              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                {cluster.label}
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
                {page.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
                {page.intro}
              </p>

              {page.path === '/partneriams-ir-ziniasklaidai' ? (
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-400">
                  Daugiau apie{' '}
                  <Link to="/nauda" className="text-blue-400 hover:text-blue-300">
                    Clarivex AI naudą verslui
                  </Link>
                  {' ir '}
                  <Link to="/features" className="text-blue-400 hover:text-blue-300">
                    Clarivex AI funkcijas bei integracijas
                  </Link>
                  .{' '}
                  <Link to="/kainos" className="text-blue-400 hover:text-blue-300">
                    Kreditų sistema ir kainodara
                  </Link>
                  {' — skaidri ir be privalomų planų.'}
                </p>
              ) : null}

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {page.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 text-sm leading-relaxed text-gray-300"
                  >
                    <div className="mb-3 flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="font-medium text-white">Esminis signalas</span>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-14">
            <div className="container mx-auto max-w-5xl">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
                <div className="space-y-8">
                  {page.sections.map((section) => (
                    <article
                      key={section.title}
                      className="rounded-3xl border border-gray-800 bg-gray-900/40 p-7"
                    >
                      <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                      <div className="mt-4 space-y-4 text-base leading-7 text-gray-300">
                        {section.paragraphs?.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      {section.bullets?.length ? (
                        <ul className="mt-5 space-y-3 text-gray-200">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  ))}

                  <section className="rounded-3xl border border-gray-800 bg-gray-900/40 p-7">
                    <h2 className="text-2xl font-semibold text-white">Dažniausi klausimai</h2>
                    <div className="mt-6 space-y-5">
                      {page.faq.map((item) => (
                        <div key={item.question} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-5">
                          <h3 className="text-lg font-medium text-white">{item.question}</h3>
                          <p className="mt-3 leading-7 text-gray-300">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <aside className="space-y-6">
                  <div className="rounded-3xl border border-gray-800 bg-gray-900/60 p-6">
                    <p className="text-sm font-medium uppercase tracking-wide text-gray-400">Trumpa santrauka</p>
                    <p className="mt-3 text-base leading-7 text-gray-300">{page.description}</p>
                    <p className="mt-4 text-sm text-gray-500">Atnaujinta: {page.updatedAt || '2026-03-19'}</p>
                  </div>

                  <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-6">
                    <h2 className="text-xl font-semibold text-white">Išbandyti praktiškai</h2>
                    <p className="mt-3 text-sm leading-6 text-gray-300">
                      Pamatykite, kaip Clarivex veikia su realiais social media, el. pašto ir AI asistento workflow.
                    </p>
                    <div className="mt-5 space-y-3">
                      <a
                        href={siteConfig.appUrl}
                        rel="nofollow noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-500"
                      >
                        Pradėti nemokamai
                        <ArrowRight className="h-4 w-4" />
                      </a>
                      <Link
                        to="/kainos"
                        className="inline-flex w-full items-center justify-center rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 font-medium text-gray-200 transition-colors hover:border-gray-500 hover:text-white"
                      >
                        Peržiūrėti kainodarą
                      </Link>
                    </div>
                  </div>

                  {relatedPages.length ? (
                    <div className="rounded-3xl border border-gray-800 bg-gray-900/60 p-6">
                      <h2 className="text-xl font-semibold text-white">Susiję puslapiai</h2>
                      <div className="mt-4 space-y-4">
                        {relatedPages.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block rounded-2xl border border-gray-800 bg-gray-950/60 p-4 transition-colors hover:border-blue-500/40"
                          >
                            <p className="font-medium text-white">{item.title}</p>
                            <p className="mt-2 text-sm leading-6 text-gray-400">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </aside>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SeoResourcePage;
