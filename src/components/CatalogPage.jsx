import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WarehouseScene from '@/components/home/WarehouseScene';
import Reveal, { SectionHead } from '@/components/home/Reveal';
import { siteConfig, getPrimaryPageMeta } from '@/content/seoPages';

/* Kam tai skirta – bendriniai pavyzdžiai, tinkantys bet kokiai prekybai. */
const audiences = [
  {
    title: 'Drabužių ir avalynės parduotuvėms',
    text: 'Klientai klausia apie dydžius, medžiagas ir spalvas. AI atsako pagal tai, kas realiai yra sandėlyje, ir parodo konkrečias prekes.',
  },
  {
    title: 'Specializuotoms parduotuvėms',
    text: 'Gyvūnų prekės, papildai, technika, baldai — katalogo paruošimas nepriklauso nuo kategorijos, nes AI aprašo tai, ką mato.',
  },
  {
    title: 'Tiems, kas parduoda socialiniuose tinkluose',
    text: 'Žinutės Messenger ir Instagram gaunamos naktį ir savaitgaliais. Atsakymas su preke ir kaina paruošiamas per kelias sekundes.',
  },
];

const faq = [
  {
    q: 'Iš kur galima įkelti prekes?',
    a: 'Iš Shopify, WooCommerce, prekių srauto (feed) arba paprastos lentelės. Stulpelius sistema atpažįsta pati ir pasiūlo atitikmenis, o vėliau katalogas gali atsinaujinti pagal tvarkaraštį.',
  },
  {
    q: 'Ką reiškia „prekės aprašomos AI“?',
    a: 'Kiekvienai prekei nustatomas bendrinis tipas, kam ji skirta ir esminės savybės. Papildomai AI peržiūri pagrindinę nuotrauką ir surašo požymius, kurių aprašyme nebuvo — pavyzdžiui, uždarymo tipą, ilgį ar raštą. Ko nuotraukoje nesimato, to nespėlioja.',
  },
  {
    q: 'Kuo skiriasi nuo įprastos paieškos?',
    a: 'Įprasta paieška ieško raktažodžių sutapimo. Clarivex prekes lygina pagal prasmę, todėl klientas gali rašyti savais žodžiais, su rašybos klaidomis ir be nosinių — ir vis tiek rasti tai, ko ieškojo.',
  },
  {
    q: 'Ar AI gali pasiūlyti prekę, kurios neturiu?',
    a: 'Ne. Atsakymai remiasi tik jūsų katalogu. Jei tinkamos prekės nėra, asistentas tai ir pasako, o ne sugalvoja variantą.',
  },
  {
    q: 'Kur veikia atsakymai su prekėmis?',
    a: 'Socialinių tinklų žinutėse, el. pašte ir gyvame pokalbyje jūsų svetainėje. Pokalbio pradžioje asistentas visada pasisako esantis AI.',
  },
];

const CatalogPage = () => {
  const canonicalUrl = `${siteConfig.url}/prekiu-katalogas`;
  const socialImage = siteConfig.socialImage;
  const fm = getPrimaryPageMeta('/prekiu-katalogas');
  const pageTitle = fm?.title ?? 'Prekių katalogas su AI – Clarivex';
  const pageDescription =
    fm?.description ??
    'Prekės importuojamos, aprašomos AI ir tampa randamos pagal prasmę. Klientas gauna konkretų atsakymą su nuotrauka, kaina ir dydžiu.';

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: pageTitle,
        url: canonicalUrl,
        description: pageDescription,
        inLanguage: 'lt-LT',
        isPartOf: { '@id': `${siteConfig.url}/#website` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
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
        <meta property="og:image:alt" content="Clarivex prekių katalogas" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>

      <div className="cvx-page min-h-screen text-white antialiased">
        <Header />
        <main>
          {/* puslapio antraštė */}
          <section className="relative px-5 pb-6 pt-32 sm:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <p className="mb-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-aurora-teal/80">
                  Prekių sandėlis
                </p>
                <h1 className="font-display text-[clamp(2rem,4vw,3.1rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white">
                  Prekių katalogas, paruoštas{' '}
                  <span className="cvx-accent-text">atsakymams ir paieškai</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed text-white/55">
                  Dauguma įrankių prekes tik importuoja. Clarivex jas perskaito, apžiūri nuotraukas
                  ir paruošia taip, kad AI galėtų atsakyti klientui konkrečiai — su nuotrauka, kaina
                  ir dydžiu.
                </p>
              </Reveal>
            </div>
          </section>

          <WarehouseScene showIntro={false} />

          {/* kam tinka */}
          <section className="cvx-content-visibility relative bg-transparent px-5 py-20 sm:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHead
                eyebrow="Kam tinka"
                title="Veikia bet kokiam asortimentui"
                lead="Katalogo paruošimas nesiremia iš anksto surašytomis kategorijomis — AI aprašo tai, ką realiai mato prekėje."
              />
              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {audiences.map((a, i) => (
                  <Reveal key={a.title} delay={i * 0.07}>
                    <div className="cvx-surface cvx-surface-hover h-full p-6">
                      <h3 className="text-[17px] font-semibold tracking-tight text-white">
                        {a.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-white/50">{a.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* DUK */}
          <section className="cvx-content-visibility relative px-5 py-20 sm:px-8">
            <div className="mx-auto max-w-3xl">
              <SectionHead eyebrow="Dažni klausimai" title="Kaip tai veikia praktiškai" />
              <div className="mt-12 space-y-4">
                {faq.map((item, i) => (
                  <Reveal key={item.q} delay={i * 0.05}>
                    <div className="cvx-surface p-6">
                      <h3 className="text-[16px] font-semibold leading-snug text-white">{item.q}</h3>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-white/55">{item.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* CTA + vidinės nuorodos */}
          <section className="cvx-content-visibility relative px-5 pb-24 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold tracking-[-0.025em] text-white">
                  Įkelk katalogą ir pažiūrėk, ką AI apie jį pasakys
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/55">
                  Startui gauni 1 000 kreditų — užtenka paruošimui išbandyti su savo prekėmis.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={siteConfig.appUrl}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-space-950 transition-transform hover:scale-[1.03] sm:w-auto"
                  >
                    Pradėk nemokamai
                    <span aria-hidden>→</span>
                  </a>
                  <Link
                    to="/kainos"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/[0.08] sm:w-auto"
                  >
                    Pažiūrėti kainas
                  </Link>
                </div>
                <p className="mt-10 text-[13.5px] text-white/40">
                  Susiję:{' '}
                  <Link to="/features" className="text-aurora-blue/90 underline underline-offset-4">
                    visos funkcijos
                  </Link>
                  {' · '}
                  <Link to="/atsakiklis" className="text-aurora-blue/90 underline underline-offset-4">
                    atsakymai klientams
                  </Link>
                  {' · '}
                  <Link
                    to="/svetainiu-kurejas"
                    className="text-aurora-blue/90 underline underline-offset-4"
                  >
                    svetainių kūrėjas
                  </Link>
                </p>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CatalogPage;
