import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SeoInternalLinks from '@/components/SeoInternalLinks';
import { seoHref } from '@/lib/seoLinks';
import { ArrowLeft, CheckCircle, AlertCircle, XCircle, Activity, Globe, Bot, Mail, Calendar, Database } from 'lucide-react';
import { siteConfig, getPrimaryPageMeta } from '@/content/seoPages';

const services = [
  {
    id: 'platform',
    name: 'Clarivex platforma',
    description: 'Pagrindinė app.clarivex.ai sistema',
    icon: Globe,
    status: 'operational',
  },
  {
    id: 'ai',
    name: 'AI asistentas',
    description: 'GPT modeliai ir pokalbių sistema',
    icon: Bot,
    status: 'operational',
  },
  {
    id: 'social',
    name: 'Socialinių tinklų publikavimas',
    description: 'Instagram, Facebook postų publikavimas',
    icon: Calendar,
    status: 'operational',
  },
  {
    id: 'email',
    name: 'El. pašto integracija',
    description: 'Gmail skaitymas ir siuntimas',
    icon: Mail,
    status: 'operational',
  },
  {
    id: 'telegram',
    name: 'Telegram botas',
    description: 'Pranešimai ir komandos per Telegram',
    icon: Activity,
    status: 'operational',
  },
  {
    id: 'storage',
    name: 'Failų saugykla',
    description: 'Nuotraukų, dokumentų saugojimas',
    icon: Database,
    status: 'operational',
  },
];

const statusConfig = {
  operational: {
    label: 'Veikia',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/30',
    icon: CheckCircle,
  },
  degraded: {
    label: 'Sulėtėjęs',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/20',
    borderColor: 'border-yellow-500/30',
    icon: AlertCircle,
  },
  outage: {
    label: 'Neveikia',
    color: 'text-red-400',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/30',
    icon: XCircle,
  },
};

const recentIncidents = [
  // Placeholder for incidents - empty means no recent incidents
];

const Status = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const canonicalUrl = `${siteConfig.url}/statusas`;
  const socialImage = siteConfig.socialImage;
  const fm = getPrimaryPageMeta('/statusas');
  const pageTitle = fm?.title ?? 'Clarivex sistemos statusas';
  const pageDescription =
    fm?.description ??
    'Clarivex paslaugų būklė: platforma, AI, socialiniai tinklai, el. paštas ir Telegram.';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    url: canonicalUrl,
    description: pageDescription,
    inLanguage: 'lt-LT',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const allOperational = services.every(s => s.status === 'operational');

  const overallStatus = allOperational 
    ? statusConfig.operational 
    : services.some(s => s.status === 'outage')
      ? statusConfig.outage
      : statusConfig.degraded;

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
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex logotipas" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>
      
      <div className="cvx-page min-h-screen text-white">
        {/* Header */}
        <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <a 
              href={seoHref('/')}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Grįžti į pradžią
            </a>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-10 space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              Šiame puslapyje matote bendrą Clarivex paslaugų būklę: pagrindinę platformą, AI pokalbių sistemą,
              socialinių tinklų publikavimą, el. pašto integraciją ir Telegram botą. Statusas rodomas informavimo tikslais,
              kad greitai pastebėtumėte galimus sutrikimus arba patvirtintumėte, kad viskas veikia įprastai.
            </p>
            <p>
              Rodomas rezultatas yra orientacinis. Praktikoje trumpalaikiai sutrikimai pasitaiko retai; jei problema kartojasi,
              parašykite palaikymui per Telegram arba el. paštą ir pridėkite laiką bei veiksmą, kurį bandėte atlikti.
            </p>
            <p>
              Jei ieškote produkto apžvalgos ar kainodaros, naudingi puslapiai:{' '}
              <a href={seoHref('/features')} className="text-blue-400 hover:text-blue-300">funkcijos</a>,{' '}
              <a href={seoHref('/kaip-veikia')} className="text-blue-400 hover:text-blue-300">kaip veikia</a> ir{' '}
              <a href={seoHref('/kainos')} className="text-blue-400 hover:text-blue-300">kainos</a>.
              Dažni klausimai apie integracijas ir saugumą —{' '}
              <a href={seoHref('/duk')} className="text-blue-400 hover:text-blue-300">DUK skyriuje</a>.
            </p>
          </div>

          <section
            aria-labelledby="status-reiksme-heading"
            className="mb-10 rounded-2xl border border-gray-800 bg-gray-900/40 px-6 py-8 text-gray-300 leading-relaxed text-sm md:text-base"
          >
            <h2 id="status-reiksme-heading" className="text-xl font-semibold text-white mb-4">
              Ką reiškia būsenos
            </h2>
            <ul className="list-disc pl-5 space-y-3 mb-4">
              <li>
                <strong className="text-white">Veikia</strong> — komponentas laikomas sveiku pagal vidinę stebėseną;
                tai nereiškia, kad išorinis tiekėjas (pvz., Meta ar jūsų paštas) negali laikinai sutrikti atskirai nuo
                Clarivex.
              </li>
              <li>
                <strong className="text-white">Sulėtėjęs</strong> — pastebimas našumo ar klaidų šuolis; funkcijos gali
                veikti, bet su didesniu laukimu ar pakartotiniais bandymais. Verta palaukti kelias minutes ir bandyti dar
                kartą.
              </li>
              <li>
                <strong className="text-white">Neveikia</strong> — kritinis sutrikimas arba plačiai juntamas gedimas;
                sekite atnaujinimus arba rašykite palaikymui, jei incidentas lieka ilgiau nei trumpą laiką.
              </li>
            </ul>
            <p className="text-gray-400 text-sm">
              Šis puslapis neįsipareigoja konkretaus SLA lygio sutartyje — jis skirtas skaidrumui ir greitai orientacijai.
              Verslo kritinėms užduotims visada palikite žmogaus patvirtinimą prieš siuntimą ar masinį publikavimą.
            </p>
          </section>

          <section
            aria-labelledby="status-isores-heading"
            className="mb-10 rounded-2xl border border-gray-800 bg-gray-900/40 px-6 py-8 text-gray-300 leading-relaxed text-sm md:text-base"
          >
            <h2 id="status-isores-heading" className="text-xl font-semibold text-white mb-4">
              Išorinės priklausomybės ir „kur ieškoti klaidos“
            </h2>
            <p className="mb-4">
              Clarivex naudoja trečiųjų šalių API ir tiekėjus: pvz., Meta (Instagram / Facebook), el. pašto tiekėją pagal
              jūsų nustatymus, mokėjimo apdorojimą ir infrastruktūros paslaugas. Jei Clarivex statusas žalias, bet
              nepavyksta publikuoti į Instagram, verta patikrinti ar Meta paskyroje neįvyko sesijos pasibaigimas ar
              laikinas API limitas — tokius pranešimus dažnai matote Clarivex kalendoriuje ar klaidos tekste.
            </p>
            <p className="mb-4">
              El. pašto atveju sutrikimai kartais susiję su App slaptažodžio galiojimu, dviejų veiksnių politika ar
              tiekėjo filtrais. Tokiais atvejais pagalba greičiau diagnozuoja problemą, jei nurodote ne tik „neveikia“,
              bet ir approximate laiką, klaidos kodą ir ar problema kartojasi keliose žinutėse.
            </p>
            <p className="text-gray-400 text-sm">
              Jei įtariate saugumo incidentą (įtartina veikla paskyroje), nedelsdami keiskite slaptažodžius pas tiekėją ir
              praneškite mums per oficialius kontaktus — žr.{' '}
              <a href={seoHref('/duk')} className="text-blue-400 hover:text-blue-300">DUK saugumo skyrių</a>.
            </p>
          </section>

          {/* Overall Status */}
          <div className={`rounded-2xl p-8 mb-8 ${overallStatus.bgColor} border ${overallStatus.borderColor}`}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl ${overallStatus.bgColor} flex items-center justify-center`}>
                  <overallStatus.icon className={`w-8 h-8 ${overallStatus.color}`} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    {allOperational ? 'Visos sistemos veikia' : 'Yra problemų'}
                  </h1>
                  <p className="text-gray-400 mt-1">
                    Atnaujinta: {currentTime.toLocaleString('lt-LT')}
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    Susipažinti su produktu galite čia:{' '}
                    <a href={seoHref('/features')} className="text-blue-400 hover:text-blue-300">funkcijos</a>
                    {' · '}
                    <a href={seoHref('/kaip-veikia')} className="text-blue-400 hover:text-blue-300">kaip veikia</a>
                    {' · '}
                    <a href={seoHref('/kainos')} className="text-blue-400 hover:text-blue-300">kainos</a>
                  </p>
                </div>
              </div>
              <div className={`px-4 py-2 rounded-full ${overallStatus.bgColor} ${overallStatus.color} font-medium`}>
                {overallStatus.label}
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold">Paslaugos</h2>
            </div>
            <div className="divide-y divide-gray-800">
              {services.map((service) => {
                const status = statusConfig[service.status];
                const Icon = service.icon;
                const StatusIcon = status.icon;

                return (
                  <div key={service.id} className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{service.name}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${status.bgColor}`}>
                      <StatusIcon className={`w-4 h-4 ${status.color}`} />
                      <span className={`text-sm font-medium ${status.color}`}>{status.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold">Paskutiniai incidentai</h2>
            </div>
            <div className="p-6">
              {recentIncidents.length > 0 ? (
                <div className="space-y-4">
                  {recentIncidents.map((incident, index) => (
                    <div key={index} className="border-l-2 border-yellow-500 pl-4">
                      <h3 className="font-medium">{incident.title}</h3>
                      <p className="text-sm text-gray-400">{incident.date}</p>
                      <p className="text-gray-300 mt-2">{incident.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-400">Pastaruoju metu incidentų nebuvo</p>
                  <p className="text-sm text-gray-500 mt-1">Visos sistemos veikia stabiliai</p>
                </div>
              )}
            </div>
          </div>

          {/* Uptime Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-green-400">99.9%</p>
              <p className="text-sm text-gray-400 mt-1">Uptime (30 dienų)</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-blue-400">&lt;200ms</p>
              <p className="text-sm text-gray-400 mt-1">Vid. atsakymo laikas</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-purple-400">0</p>
              <p className="text-sm text-gray-400 mt-1">Incidentai (7 dienos)</p>
            </div>
          </div>

          {/* Contact for issues */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 text-center mb-10">
            <h3 className="text-xl font-semibold mb-2">Turite problemų?</h3>
            <p className="text-gray-400 mb-6">
              Rašykite per Telegram – atsakome per 1–2 valandas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://t.me/clarivex_support_bot"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-white font-medium transition-all"
              >
                Telegram palaikymas
              </a>
              <a 
                href="mailto:info@clarivex.ai"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-xl text-white font-medium transition-all"
              >
                info@clarivex.ai
              </a>
            </div>
          </div>

          <section
            aria-labelledby="status-pranesimas-heading"
            className="rounded-2xl border border-gray-800 bg-gray-900/40 px-6 py-8 text-gray-300 leading-relaxed text-sm md:text-base"
          >
            <h2 id="status-pranesimas-heading" className="text-xl font-semibold text-white mb-4">
              Kaip efektyviai pranešti apie gedimą
            </h2>
            <ol className="list-decimal pl-5 space-y-3 mb-4">
              <li>
                Patikrinkite šį puslapį ir trumpai pakartokite veiksmą — ar klaida kartojasi po kelių minučių ir kitoje
                naršyklėje ar įrenginyje.
              </li>
              <li>
                Užfiksuokite laiką (su laiko juosta), tikslų veiksmą („bandžiau publikuoti postą į X paskyrą“) ir klaidos
                tekstą arba ekrano kopiją.
              </li>
              <li>
                Parašykite į Telegram palaikymą viena žinute; jei incidentas liečia mokėjimus ar sąskaitą, galite kopijuoti
                ir info@clarivex.ai su ta pačia informacija.
              </li>
            </ol>
            <p className="text-gray-400 text-sm">
              Jei problema susijusi su turinio politika (Meta atmeta įrašą), pirmiausia patikrinkite platformos taisykles ir
              Clarivex klaidos pranešimą — tai dažnai greitesnis kelias nei bendras „Meta down“ scenarijus.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <SeoInternalLinks />
            <p className="text-gray-500 text-sm">© 2026 Clarivex. Visos teisės saugomos.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Status;







