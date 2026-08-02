import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import { siteConfig, getPrimaryPageMeta } from '@/content/seoPages';

const HowItWorksPage = () => {
  const canonicalUrl = `${siteConfig.url}/kaip-veikia`;
  const socialImage = siteConfig.socialImage;
  const fm = getPrimaryPageMeta('/kaip-veikia');
  const pageTitle = fm?.title ?? 'Kaip veikia Clarivex AI';
  const pageDescription =
    fm?.description ??
    'Kaip veikia Clarivex AI: kreditai, el. paštas, socialiniai tinklai ir Telegram vienoje vietoje. Žingsniai lietuvių kalba. Peržiūrėkite eigą ir išbandykite.';
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
        <meta property="og:image:alt" content="Clarivex — AI asistentas" />
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
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HowItWorksPage;
