import React, { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroLive from '@/components/home/HeroLive';
import Capabilities from '@/components/home/Capabilities';
import WarehouseScene from '@/components/home/WarehouseScene';
import HowItWorksSteps from '@/components/home/HowItWorksSteps';
import Modules from '@/components/home/Modules';
import PricingCredits from '@/components/home/PricingCredits';
import FinalCTA from '@/components/home/FinalCTA';
import PapildymoSection from '@/components/PapildymoSection';
import ReferralSection from '@/components/ReferralSection';
import SeoContent from '@/components/SeoContent';
import QuickLinks from '@/components/QuickLinks';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import MetaPixel from '@/components/MetaPixel';
import {
  contentPages,
  siteConfig,
  getPrimaryPageMeta,
  SCHEMA_IDS,
  buildCreditStarterOffer,
} from '@/content/seoPages';
import { getBlogPosts } from '@/content/blogPosts';
import { Toaster } from '@/components/ui/toaster';

const isServer = import.meta.env.SSR;

function lazyPage(loader) {
  const Component = lazy(loader);
  Component.preload = loader;
  return Component;
}

const pageModules = isServer
  ? import.meta.glob('./components/{PrivacyPolicy,TermsOfService,DataDeletion,FAQ,Status,PricingPage,FeaturesPage,HowItWorksPage,BenefitsPage,TelegramPage,AtsakiklisPage,SvetainiuKurejasPage,CatalogPage,ResourcesHubPage,SeoResourcePage,BlogIndexPage,BlogPostPage}.jsx', { eager: true })
  : import.meta.glob('./components/{PrivacyPolicy,TermsOfService,DataDeletion,FAQ,Status,PricingPage,FeaturesPage,HowItWorksPage,BenefitsPage,TelegramPage,AtsakiklisPage,SvetainiuKurejasPage,CatalogPage,ResourcesHubPage,SeoResourcePage,BlogIndexPage,BlogPostPage}.jsx');

function createPageComponent(modulePath) {
  const moduleOrLoader = pageModules[modulePath];

  if (!moduleOrLoader) {
    throw new Error(`Missing page module: ${modulePath}`);
  }

  if (isServer) {
    return moduleOrLoader.default;
  }

  return lazyPage(moduleOrLoader);
}

const PrivacyPolicy = createPageComponent('./components/PrivacyPolicy.jsx');
const TermsOfService = createPageComponent('./components/TermsOfService.jsx');
const DataDeletion = createPageComponent('./components/DataDeletion.jsx');
const FAQ = createPageComponent('./components/FAQ.jsx');
const Status = createPageComponent('./components/Status.jsx');
const PricingPage = createPageComponent('./components/PricingPage.jsx');
const FeaturesPage = createPageComponent('./components/FeaturesPage.jsx');
const HowItWorksPage = createPageComponent('./components/HowItWorksPage.jsx');
const BenefitsPage = createPageComponent('./components/BenefitsPage.jsx');
const TelegramPage = createPageComponent('./components/TelegramPage.jsx');
const AtsakiklisPage = createPageComponent('./components/AtsakiklisPage.jsx');
const SvetainiuKurejasPage = createPageComponent(
  './components/SvetainiuKurejasPage.jsx',
);
const CatalogPage = createPageComponent('./components/CatalogPage.jsx');
const ResourcesHubPage = createPageComponent('./components/ResourcesHubPage.jsx');
const SeoResourcePage = createPageComponent('./components/SeoResourcePage.jsx');
const BlogIndexPage = createPageComponent('./components/BlogIndexPage.jsx');
const BlogPostPage = createPageComponent('./components/BlogPostPage.jsx');

const blogPostsLt = getBlogPosts('lt');
const blogPostsEn = getBlogPosts('en');

// Landing page component
function LandingPage() {
  const canonicalUrl = `${siteConfig.url}/`;
  const socialImage = siteConfig.socialImage;
  const homeMeta = getPrimaryPageMeta('/');
  const landingTitle =
    homeMeta?.title ?? 'Clarivex AI – lietuvių kalba suprantanti AI platforma';
  const landingDescription =
    homeMeta?.description ??
    'Clarivex AI – lietuvių kalbą suprantanti platforma, padedanti automatizuoti el. laiškus, socialinius tinklus ir kasdienes užduotis. Sutaupykite laiko ir dirbkite efektyviau.';
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": SCHEMA_IDS.organization,
        "name": siteConfig.schemaBrandName,
        "url": `${siteConfig.url}/`,
        "logo": siteConfig.logo,
        "description": siteConfig.organizationDescription,
        "sameAs": siteConfig.sameAs,
        "email": siteConfig.supportEmail
      },
      {
        "@type": "WebSite",
        "@id": SCHEMA_IDS.website,
        "name": siteConfig.schemaBrandName,
        "url": `${siteConfig.url}/`,
        "inLanguage": siteConfig.language,
        "publisher": {
          "@id": SCHEMA_IDS.organization
        }
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        "name": landingTitle,
        "url": `${siteConfig.url}/`,
        "description": landingDescription,
        "inLanguage": siteConfig.language,
        "isPartOf": {
          "@id": SCHEMA_IDS.website
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": SCHEMA_IDS.softwareApplication,
        "name": siteConfig.schemaBrandName,
        "url": `${siteConfig.url}/`,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": siteConfig.softwareApplicationDescription,
        "inLanguage": siteConfig.language,
        "offers": buildCreditStarterOffer(`${siteConfig.url}/kainos`),
        "featureList": [
          "AI asistentas lietuvių kalba",
          "Socialinių tinklų turinio kūrimas ir publikavimas",
          "AI el. paštui ir atsakymams klientams",
          "Prekių katalogas su AI paruošimu ir semantine paieška",
          "Svetainių kūrėjas su savu domenu",
          "Balso komandos ir priminimai"
        ],
        "publisher": {
          "@id": SCHEMA_IDS.organization
        },
        "provider": {
          "@id": SCHEMA_IDS.organization
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{landingTitle}</title>
        <meta 
          name="description" 
          content={landingDescription} 
        />
        <meta name="keywords" content="AI asistentas, dirbtinis intelektas, socialiniai tinklai, automatizavimas, Lietuva, lietuviškai, Instagram, Facebook, el. paštas" />
        <meta property="og:title" content={landingTitle} />
        <meta property="og:description" content={landingDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex logotipas" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={landingTitle} />
        <meta name="twitter:description" content={landingDescription} />
        <meta name="twitter:image" content={socialImage} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className="cvx-page min-h-screen text-white antialiased">
        <Header />
        <main>
          <HeroLive />
          {/* Naujos sekcijos be bendro content-visibility: viename bloke jis
              rezervuodavo 1000 px vietoj realiu ~8000 px ir slinktis sokinedavo. */}
          <Capabilities />
          <WarehouseScene />
          <HowItWorksSteps />
          <Modules />
          <PricingCredits />
          <div className="cvx-content-visibility">
            <PapildymoSection />
            <ReferralSection />
          </div>
          <FinalCTA />
          <div className="cvx-content-visibility">
            <QuickLinks />
            <SeoContent />
          </div>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export const routeDefinitions = [
  { path: '/', component: LandingPage },
  { path: '/privatumas', component: PrivacyPolicy },
  { path: '/salygos', component: TermsOfService },
  { path: '/duomenu-istrynimas', component: DataDeletion },
  { path: '/duk', component: FAQ },
  { path: '/statusas', component: Status },
  { path: '/kainos', component: PricingPage },
  { path: '/features', component: FeaturesPage },
  { path: '/kaip-veikia', component: HowItWorksPage },
  { path: '/nauda', component: BenefitsPage },
  { path: '/telegram', component: TelegramPage },
  { path: '/atsakiklis', component: AtsakiklisPage },
  { path: '/svetainiu-kurejas', component: SvetainiuKurejasPage },
  { path: '/prekiu-katalogas', component: CatalogPage },
  { path: '/resursai', component: ResourcesHubPage },
  { path: '/blog', component: BlogIndexPage, props: { language: 'lt' } },
  { path: '/en/blog', component: BlogIndexPage, props: { language: 'en' } },
  ...blogPostsLt.map((post) => ({
    path: `/blog/${post.slug}`,
    component: BlogPostPage,
    props: { post, language: 'lt' },
  })),
  ...blogPostsEn.map((post) => ({
    path: `/en/blog/${post.slug}`,
    component: BlogPostPage,
    props: { post, language: 'en' },
  })),
  ...contentPages.map((page) => ({
    path: page.path,
    component: SeoResourcePage,
    props: { page },
  })),
];

export const routes = routeDefinitions.map(({ path, component: Component, props }) => ({
  path,
  element: isServer ? (
    <Component {...props} />
  ) : (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  ),
}));

function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <ScrollToTop />
      {routing}
      <CookieConsent />
      <MetaPixel />
    </>
  );
}

export default App;
