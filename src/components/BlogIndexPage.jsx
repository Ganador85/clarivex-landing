import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/content/seoPages';

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
import {
  getBlogIndexPath,
  getBlogPostPath,
  getBlogPosts,
} from '@/content/blogPosts';

const copy = {
  lt: {
    title: 'AI naujienų ir įžvalgų blogas',
    description:
      'Clarivex AI blogas: dirbtinio intelekto naujienos, reguliacija ir praktinės įžvalgos verslui Lietuvoje ir Europoje. Skaitykite naujausius straipsnius.',
    home: 'Pradžia',
    blog: 'Blogas',
    empty: 'Straipsnių dar nėra. Netrukus čia pasirodys naujausios AI naujienos.',
    readMore: 'Skaityti',
    locale: 'lt_LT',
    lang: 'lt',
    altPath: '/en/blog',
    altHrefLang: 'en',
  },
  en: {
    title: 'AI news and insights blog',
    description:
      'Clarivex AI blog: artificial intelligence news, regulation and practical insights for business in Europe and Lithuania. Read the latest articles.',
    home: 'Home',
    blog: 'Blog',
    empty: 'No articles yet. Latest AI news will appear here soon.',
    readMore: 'Read more',
    locale: 'en_US',
    lang: 'en',
    altPath: '/blog',
    altHrefLang: 'lt',
  },
};

function BlogIndexPage({ language = 'lt' }) {
  const t = copy[language] || copy.lt;
  const posts = getBlogPosts(language).sort((a, b) => {
    const aDate = new Date(a.publishedAt || a.createdAt).getTime();
    const bDate = new Date(b.publishedAt || b.createdAt).getTime();
    return bDate - aDate;
  });
  const canonicalUrl = `${siteConfig.url}${getBlogIndexPath(language)}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: siteConfig.logo,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        name: t.title,
        url: canonicalUrl,
        description: t.description,
        inLanguage: t.lang,
        isPartOf: { '@id': websiteId },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang={t.lang} />
        <title>{t.title} — Clarivex</title>
        <meta name="description" content={t.description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang={t.altHrefLang} href={`${siteConfig.url}${t.altPath}`} />
        <link rel="alternate" hrefLang={t.lang} href={canonicalUrl} />
        <meta property="og:title" content={`${t.title} — Clarivex`} />
        <meta property="og:description" content={t.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={t.locale} />
        <meta property="og:image" content={siteConfig.socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t.title} — Clarivex`} />
        <meta name="twitter:description" content={t.description} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="cvx-page min-h-screen text-white">
        <Header />

        <main className="pt-24 pb-20">
          <section className="px-4 py-14 border-b border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950">
            <div className="container mx-auto max-w-5xl">
              <div className="flex flex-wrap items-center gap-3 text-sm mb-6 text-gray-400">
                <Link to="/" className="hover:text-white transition-colors">
                  {t.home}
                </Link>
                <span>/</span>
                <span className="text-gray-200">{t.blog}</span>
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
                {t.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
                {t.description}
              </p>
            </div>
          </section>

          <section className="px-4 py-14">
            <div className="container mx-auto max-w-5xl">
              {posts.length === 0 ? (
                <p className="text-gray-400">{t.empty}</p>
              ) : (
                <div className="grid gap-8 md:grid-cols-2">
                  {posts.map((post) => (
                    <article
                      key={post.id}
                      className="rounded-3xl border border-gray-800 bg-gray-900/40 overflow-hidden hover:border-gray-700 transition-colors"
                    >
                      {post.imageUrl ? (
                        <img
                          src={post.imageUrl}
                          alt={post.featuredImageAlt || post.title}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                          width="1200"
                          height="630"
                        />
                      ) : null}
                      <div className="p-7">
                        {post.category ? (
                          <div className="text-sm text-blue-300 mb-3">{post.category}</div>
                        ) : null}
                        <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                        {post.summary ? (
                          <p className="mt-4 text-gray-300 leading-relaxed">{post.summary}</p>
                        ) : null}
                        <Link
                          to={getBlogPostPath(post)}
                          className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {t.readMore}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default BlogIndexPage;
