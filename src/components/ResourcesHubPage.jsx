import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Layers3, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  clusterDefinitions,
  contentPages,
  resourceHubPath,
  siteConfig,
  SCHEMA_IDS,
  getPrimaryPageMeta,
} from '@/content/seoPages';

const clusterCounts = Object.fromEntries(
  clusterDefinitions.map((cluster) => [
    cluster.id,
    contentPages.filter((page) => page.cluster === cluster.id).length,
  ])
);

const offsiteSignals = [
  'Nuosekliai naudokite tą patį Clarivex aprašymą kataloguose, guest postuose ir profiliuose.',
  'Kai minite konkretų use-case, linkinkite į atitinkamą teminį puslapį, ne vien į homepage.',
  'Rinkite paminėjimus LT marketingo, verslo ir AI kontekstuose, ne bendrose naujienų svetainėse.',
  'Publikuokite praktiškus workflow ir case study, kuriuos gali cituoti tiek žmonės, tiek AI sistemos.',
];

const ResourcesHubPage = () => {
  const canonicalUrl = `${siteConfig.url}${resourceHubPath}`;
  const fm = getPrimaryPageMeta(resourceHubPath);
  const pageTitle = fm?.title ?? 'AI resursai verslui — Clarivex';
  const pageDescription =
    fm?.description ??
    'Clarivex AI resursų centras: straipsniai apie AI asistentą lietuviškai, socialinių tinklų ir pašto automatizavimą bei workflow smulkiems verslams.';
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': SCHEMA_IDS.organization,
        name: siteConfig.schemaBrandName,
        description: siteConfig.organizationDescription,
        url: siteConfig.url,
        logo: siteConfig.logo,
        sameAs: siteConfig.sameAs,
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        name: 'AI resursai verslui — Clarivex',
        url: canonicalUrl,
        description: pageDescription,
        inLanguage: siteConfig.language,
      },
      {
        '@type': 'ItemList',
        name: 'Clarivex resursų klasteriai',
        itemListElement: clusterDefinitions.map((cluster, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: cluster.label,
          url: `${canonicalUrl}#${cluster.id}`,
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="lt" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content="lt_LT" />
        <meta property="og:image" content={siteConfig.socialImage} />
        <meta property="og:image:alt" content="Clarivex AI resursai" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={siteConfig.socialImage} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="cvx-page min-h-screen text-white">
        <Header />

        <main className="pt-24 pb-20">
          <section className="px-4 py-16 border-b border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950">
            <div className="container mx-auto max-w-6xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                <Sparkles className="h-4 w-4" />
                Resursų centras
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
                AI matomumo ir naudingo turinio hubas apie Clarivex
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
                Čia surinkti komerciniai landing puslapiai, evergreen klausimai, workflow ir
                palyginimai, kurie padeda žmonėms ir AI sistemoms tiksliai suprasti, kuo Clarivex
                naudingas verslui Lietuvoje.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-4">
                {clusterDefinitions.map((cluster) => (
                  <a
                    key={cluster.id}
                    href={`#${cluster.id}`}
                    className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 transition-colors hover:border-blue-500/40"
                  >
                    <div className="text-sm font-medium text-blue-300">{cluster.shortLabel}</div>
                    <div className="mt-2 text-3xl font-bold text-white">{clusterCounts[cluster.id]}</div>
                    <p className="mt-2 text-sm leading-6 text-gray-400">{cluster.label}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-16">
            <div className="container mx-auto max-w-6xl space-y-14">
              {clusterDefinitions.map((cluster) => {
                const pages = contentPages.filter((page) => page.cluster === cluster.id);

                return (
                  <section key={cluster.id} id={cluster.id} className="scroll-mt-32">
                    <div className="mb-8 flex items-center gap-3">
                      <div className="rounded-xl border border-gray-800 bg-gray-900 p-3">
                        <Layers3 className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-semibold text-white">{cluster.label}</h2>
                        <p className="mt-2 max-w-3xl text-gray-400">{cluster.description}</p>
                      </div>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                      {pages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className="rounded-3xl border border-gray-800 bg-gray-900/40 p-6 transition-colors hover:border-blue-500/40"
                        >
                          <div className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                            {page.type}
                          </div>
                          <h3 className="mt-4 text-2xl font-semibold text-white">{page.title}</h3>
                          <p className="mt-3 text-base leading-7 text-gray-300">{page.description}</p>
                          <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-300">
                            Skaityti puslapį
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </section>

          <section className="px-4 py-16 border-y border-gray-800 bg-gray-900/30">
            <div className="container mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div>
                  <h2 className="text-3xl font-semibold text-white">Kaip stiprinti off-site autoritetą</h2>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300">
                    Matomumas AI sistemose ateina ne vien iš jūsų svetainės. Todėl šiame hub'e
                    įdėtas ir nuoseklus brand sluoksnis, kurį verta kartoti kituose kataloguose,
                    guest postuose, interviu ir partnerių puslapiuose.
                  </p>

                  <ul className="mt-6 space-y-4">
                    {offsiteSignals.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-gray-800 bg-gray-950/70 p-5 text-gray-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-6">
                  <h2 className="text-xl font-semibold text-white">Brand signalų puslapis</h2>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    Partneriams, katalogams ir žiniasklaidai paruošėme atskirą Clarivex aprašymo
                    puslapį, kad brand paminėjimai internete būtų nuoseklesni.
                  </p>

                  <Link
                    to="/partneriams-ir-ziniasklaidai"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-500"
                  >
                    Atidaryti puslapį
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ResourcesHubPage;
