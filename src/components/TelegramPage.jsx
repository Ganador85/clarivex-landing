import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TelegramSection from '@/components/TelegramSection';
import { siteConfig, getPrimaryPageMeta } from '@/content/seoPages';

const TelegramPage = () => {
  const canonicalUrl = `${siteConfig.url}/telegram`;
  const socialImage = siteConfig.socialImage;
  const fm = getPrimaryPageMeta('/telegram');
  const pageTitle = fm?.title ?? 'Clarivex Telegram AI botas';
  const pageDescription =
    fm?.description ??
    'Clarivex Telegram AI botas: balso komandos lietuvių kalba, tekstai, priminimai ir užduotys programėlėje. Valdykite AI telefone — susiekite ir pradėkite.';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    url: canonicalUrl,
    description: pageDescription,
    inLanguage: 'lt-LT',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex Telegram" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>
      <div className="cvx-page min-h-screen text-white">
        <Header />
        <main className="pt-20">
          <TelegramSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TelegramPage;
