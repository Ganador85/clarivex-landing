import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  siteConfig,
  SCHEMA_IDS,
  buildCreditStarterOffer,
  getPrimaryPageMeta,
} from '@/content/seoPages';
import { 
  Calculator, 
  Zap, 
  Lightbulb, 
  MessageSquare, 
  Image, 
  Mic, 
  Volume2, 
  Search, 
  Mail, 
  Info,
  CheckCircle2,
  ArrowRight,
  Brain,
  Clock,
  Trash2,
  RefreshCw,
  Layers,
} from 'lucide-react';

// ============================================================================
// KAINŲ DUOMENYS (atitinka usage.ts)
// ============================================================================

const AI_MODELS = [
  {
    name: 'Kasdienis',
    msgMin: 1,
    msgMax: 3,
    tier: 'recommended',
    badge: '⭐ Numatytasis',
    description: 'Pokalbiai, postai, atsakymai klientams, vertimai — greitas ir pigus',
  },
  {
    name: 'Sudėtingiems darbams',
    msgMin: 11,
    msgMax: 24,
    tier: 'premium',
    badge: '📄 Dokumentams',
    description: 'Ilgi dokumentai, sutarčių analizė, el. laiškai, blogo straipsniai',
  },
  {
    name: 'Maksimalios kokybės',
    msgMin: 28,
    msgMax: 61,
    tier: 'premium',
    badge: '🚀 Stipriausias',
    description: 'Kai reikia geriausio įmanomo rezultato — pasirenkamas pokalbyje',
  },
  {
    name: 'Ekonominis',
    msgMin: 1,
    msgMax: 3,
    tier: 'economy',
    badge: '💚 Trumpiems',
    description: 'Trumpi klausimai ir vidiniai sistemos sprendimai',
  },
];

const OTHER_SERVICES = [
  {
    name: 'GPT Image 2',
    price: '~12–520 kr',
    unit: 'paveikslėlis',
    icon: Image,
    description: 'Pagrindinis – kaina priklauso nuo kokybės, dydžio ir prompto',
  },
  {
    name: 'Nano Banana 2 (Gemini)',
    price: '~250 kr',
    unit: 'paveikslėlis',
    icon: Image,
    description: 'Fallback – kai GPT Image 2 techniškai nepavyksta',
  },
  {
    name: 'Balso transkripcija (Whisper)',
    price: '~15 kr',
    unit: 'minutė',
    icon: Mic,
    description: 'Audio į tekstą',
  },
  {
    name: 'Teksto skaitymas (TTS)',
    price: '~37 kr',
    unit: '1000 simbolių',
    icon: Volume2,
    description: 'Tekstas į audio',
  },
  {
    name: 'TTS HD kokybė',
    price: '~74 kr',
    unit: '1000 simbolių',
    icon: Volume2,
    description: 'Aukštesnė audio kokybė',
  },
  {
    name: 'Web paieška',
    price: '~25 kr',
    unit: 'paieška',
    icon: Search,
    description: 'Realaus laiko informacija',
  },
  {
    name: 'El. laiško siuntimas',
    price: '~2.5 kr',
    unit: 'laiškas',
    icon: Mail,
    description: 'Siuntimas per Clarivex',
  },
];

const TRANSFER_PRICING = {
  free: {
    perTransfer: '3 GB',
    perMonth: '30 GB',
    days: '7 dienų',
  },
  paid: [
    { range: '3-30 GB', price: '€0.02/GB', credits: '20 kr/GB' },
    { range: '30+ GB', price: '€0.01/GB', credits: '10 kr/GB' },
    { range: '8-30 dienų', price: '+€0.01/GB', credits: '+10 kr/GB', note: 'priedas už ilgesnį saugojimą' },
  ],
};

const TIPS = [
  {
    icon: RefreshCw,
    title: 'Pradėk naują temą',
    description: 'Kai keiti pokalbio temą, pradėk naują susirašinėjimą. AI nereikės skaityti visos ankstesnės istorijos – sutaupysi iki 50% kreditų!',
    color: 'blue',
  },
  {
    icon: Layers,
    title: 'Viena aiški užklausa',
    description: 'Vietoj kelių trumpų žinučių, parašyk vieną aiškią ir išsamią – sutaupysi tokenų kiekviename atsakyme.',
    color: 'purple',
  },
  {
    icon: Trash2,
    title: 'Nelaik nereikalingų failų',
    description: 'Transfer saugomi failai užima vietą. Kai adresatas parsisiuntė – ištrink ir nepasieksi mokamo limito.',
    color: 'orange',
  },
  {
    icon: Clock,
    title: 'Transfer: rinkis trumpesnį laiką',
    description: 'Jei žinai, kad adresatas parsisiųs greitai – rinkis 1-7 dienas, ne 30. Ilgesnis saugojimas = papildomas mokestis.',
    color: 'cyan',
  },
];

// ============================================================================
// KOMPONENTAI
// ============================================================================

function ModelTable({ models, title, icon: Icon }) {
  return (
    <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-700/50 flex items-center gap-3">
        <Icon className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700/50">
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Modelis</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">~Viena žinutė</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/30">
            {models.map((model) => {
              const minMsg = model.msgMin;
              const maxMsg = model.msgMax;

              return (
                <tr 
                  key={model.name} 
                  className={`hover:bg-gray-700/20 transition-colors ${
                    model.tier === 'recommended' ? 'bg-blue-500/5' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{model.name}</span>
                          {model.badge && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              model.tier === 'recommended' 
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                                : model.tier === 'premium'
                                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                : 'bg-gray-700 text-gray-400'
                            }`}>
                              {model.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{model.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`font-semibold ${
                      model.tier === 'economy' ? 'text-green-400' : 
                      model.tier === 'recommended' ? 'text-blue-400' :
                      model.tier === 'premium' ? 'text-purple-400' : 'text-gray-300'
                    }`}>
                      {minMsg}-{maxMsg} kr
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-3 bg-gray-900/50 border-t border-gray-700/50">
        <p className="text-xs text-gray-500 flex items-center gap-2">
          <Info className="w-3 h-3" />
          Kaina priklauso nuo žinutės ilgio ir darbo sudėtingumo — ilgesnis tekstas kainuoja daugiau. Modelį sistema parenka automatiškai.
        </p>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-5 hover:border-gray-600 transition-colors">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white">{service.name}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{service.description}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-lg font-bold text-blue-400">{service.price}</div>
          <div className="text-xs text-gray-500">/ {service.unit}</div>
        </div>
      </div>
    </div>
  );
}

function TipCard({ tip }) {
  const Icon = tip.icon;
  const colorClasses = {
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    green: 'bg-green-500/10 border-green-500/20 text-green-400',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    pink: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-5 hover:border-gray-600 transition-all"
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${colorClasses[tip.color]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold text-white mb-1">{tip.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{tip.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function PricingPage() {
  const [showAllModels, setShowAllModels] = useState(false);
  const canonicalUrl = `${siteConfig.url}/kainos`;
  const socialImage = siteConfig.socialImage;
  const fm = getPrimaryPageMeta('/kainos');
  const pageTitle = fm?.title ?? 'Clarivex AI kainos – kreditai be abonemento';
  const pageDescription =
    fm?.description ??
    'Mokate tik už naudojimą: kreditų sistema be mėnesinio plano. Peržiūrėkite tipinių veiksmų kainas.';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: pageTitle,
        url: canonicalUrl,
        description: pageDescription,
        inLanguage: 'lt-LT',
        isPartOf: { '@id': SCHEMA_IDS.website },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': SCHEMA_IDS.softwareApplication,
        name: siteConfig.schemaBrandName,
        url: `${siteConfig.url}/`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: siteConfig.softwareApplicationDescription,
        inLanguage: siteConfig.language,
        offers: buildCreditStarterOffer(canonicalUrl),
        featureList: [
          'AI asistentas lietuvių kalba',
          'Socialinių tinklų turinio kūrimas ir publikavimas',
          'AI el. paštui ir atsakymams',
          'Telegram AI botas',
          'Balso komandos ir priminimai',
        ],
        publisher: { '@id': SCHEMA_IDS.organization },
        provider: { '@id': SCHEMA_IDS.organization },
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
        <Header />
        
        <main className="pt-24 pb-20">
          {/* Hero */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                  <Calculator className="w-4 h-4" />
                  Skaidri kainodara
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">Clarivex AI kainos</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    ir kreditų sistema
                  </span>
                </h1>
                
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                  Jokių paslėptų mokesčių ir mėnesinių planų.
                  Moki tik už tai, ką realiai naudoji — AI žinutes, postus, paveikslėlius, el. laiškus.
                  <br />
                  <span className="text-blue-400 font-semibold">1 € = 1 000 kreditų</span> — to paprastai pakanka
                  kelioms dešimtims AI žinučių ir keliems paveikslėliams.
                </p>
                <p className="text-sm text-gray-500 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Norite pirmiau suprasti, ką gaunate? Žiūrėkite{' '}
                  <Link to="/features" className="text-blue-300 hover:text-white">funkcijas</Link>
                  {' · '}
                  <Link to="/kaip-veikia" className="text-blue-300 hover:text-white">kaip veikia</Link>
                  {' · '}
                  <Link to="/nauda" className="text-blue-300 hover:text-white">naudą</Link>
                  {' · '}
                  <Link to="/telegram" className="text-blue-300 hover:text-white">Telegram</Link>
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Neribotas galiojimas
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Jokių mėnesinių mokesčių
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Iki 1000 kr dovanų pradžiai
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Kas kainuoja — greita nuoroda */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h2 className="text-2xl font-bold text-white mb-2">
                  ⚡ Kiek kainuoja tipiniai veiksmai?
                </h2>
                <p className="text-gray-400 text-sm">
                  1 € = 1 000 kreditų. Žemiau — apytikslės kreditų kainos dažniausiems veiksmams,
                  kad lengviau suplanuotum savo biudžetą.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {[
                  { name: 'AI žinutė', credits: '~1-15 kr', note: 'priklauso nuo modelio' },
                  { name: 'Posto tekstas', credits: '~5-15 kr', note: 'AI generavimas' },
                  { name: 'Publikavimas', credits: '15 kr', note: 'IG / FB / Blog' },
                  { name: 'DM atsakymas', credits: '~2-10 kr', note: 'Inbox AI' },
                  { name: 'Paveikslėlis', credits: '~15–130 kr', note: 'GPT Image 2 (tipinė)' },
                  { name: 'El. laiškas', credits: '~5-12 kr', note: 'atsakymas + siuntimas' },
                  { name: 'Balso komanda', credits: '~10-25 kr', note: 'Whisper + AI' },
                  { name: 'Web paieška', credits: '~25 kr', note: 'SerpApi' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-blue-500/30 transition-colors"
                  >
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    <p className="text-lg font-bold text-blue-400 mt-1">{item.credits}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
          
          {/* AI Modeliai */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  🤖 Kiek kainuoja viena žinutė
                </h2>
                <p className="text-gray-400">
                  Modelį parenka sistema pagal užduotį — kasdieniam darbui eina pigiausias
                </p>
              </motion.div>
              
              <ModelTable 
                models={AI_MODELS} 
                title="Pagal darbo tipą" 
                icon={MessageSquare} 
              />
              
              {/* Reasoning modeliai – greitu metu */}
              <div className="mt-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-gray-400" />
                  <div>
                    <h3 className="font-semibold text-white">Reasoning modeliai (o1, o1-mini ir kt.)</h3>
                    <p className="text-sm text-gray-500">Greitu metu – dirbame prie integracijos</p>
                  </div>
                </div>
              </div>
              
              {/* Paaiškinimas */}
              <div className="mt-6 bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-300">
                    <p className="font-semibold text-white mb-2">Kaip skaičiuojama?</p>
                    <ul className="space-y-1 text-gray-400">
                      <li>• <strong>Įvestis</strong> – tai ką tu parašai + visa pokalbio istorija</li>
                      <li>• <strong>Išvestis</strong> – AI atsakymas</li>
                      <li>• Kuo ilgesnis pokalbis, tuo daugiau tokenų siunčiama kiekvieną kartą</li>
                      <li>• <strong className="text-blue-400">Patarimas:</strong> Kai keiti temą – pradėk naują pokalbį!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Kitos paslaugos */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  🎨 Kitos paslaugos
                </h2>
                <p className="text-gray-400">
                  Paveikslėlių generavimas, balso transkripcija ir daugiau
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {OTHER_SERVICES.map((service, idx) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Socialinių tinklų limitai */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  📱 Socialinių tinklų limitai
                </h2>
                <p className="text-gray-400">
                  Meta (Instagram/Facebook) platformos apribojimai – ne Clarivex
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700/50 rounded-2xl overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-gray-700/50 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center">
                    <span className="text-lg">📸</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Meta API limitai</h3>
                    <p className="text-xs text-gray-500">Taikoma kiekvienam vartotojui per 24 valandas</p>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-700/30">
                  {[
                    { icon: '📷', name: 'Instagram publikacijos', limit: 'iki 25', period: '/ 24h', color: 'pink' },
                    { icon: '📖', name: 'Instagram Stories', limit: 'iki 25', period: '/ 24h', color: 'purple' },
                    { icon: '💬', name: 'Instagram komentarų atsakymai', limit: 'iki 60', period: '/ val.', color: 'blue' },
                    { icon: '📘', name: 'Facebook publikacijos', limit: 'iki 25', period: '/ 24h', color: 'blue' },
                    { icon: '🔄', name: 'API užklausos', limit: 'iki 200', period: '/ val.', color: 'gray' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between px-6 py-4 hover:bg-gray-700/20 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-gray-300">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <span className={`font-semibold ${
                          item.color === 'pink' ? 'text-pink-400' :
                          item.color === 'purple' ? 'text-purple-400' :
                          item.color === 'blue' ? 'text-blue-400' :
                          'text-gray-400'
                        }`}>{item.limit}</span>
                        <span className="text-gray-500 text-sm ml-1">{item.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="px-6 py-4 bg-orange-500/5 border-t border-orange-500/20">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">⚠️</span>
                    <div className="text-sm text-gray-400">
                      <p>Šie limitai nustatyti <span className="text-orange-400 font-medium">Meta platformos</span>, ne Clarivex. Pasiekus limitą, publikavimas bus laikinai sustabdytas ir atsinaujins automatiškai.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Failų siuntimas */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  📦 Failų siuntimas (Transfer)
                </h2>
                <p className="text-gray-400">
                  Siųsk didelius failus be jokių apribojimų – kaip WeTransfer, tik geriau
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nemokama */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-2 border-green-500/30 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Nemokama</h3>
                      <p className="text-sm text-green-400">Kiekvienam vartotojui</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">📁</span>
                      <div>
                        <span className="text-white font-semibold">Iki {TRANSFER_PRICING.free.perTransfer}</span>
                        <span className="text-gray-400"> per siuntimą</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">📊</span>
                      <div>
                        <span className="text-white font-semibold">Iki {TRANSFER_PRICING.free.perMonth}</span>
                        <span className="text-gray-400"> per 30 dienų</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">⏰</span>
                      <div>
                        <span className="text-white font-semibold">Iki {TRANSFER_PRICING.free.days}</span>
                        <span className="text-gray-400"> saugojimo</span>
                      </div>
                    </li>
                  </ul>
                </motion.div>
                
                {/* Mokama */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Virš nemokamo limito</h3>
                      <p className="text-sm text-gray-400">Tik jei viršiji</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {TRANSFER_PRICING.paid.map((tier, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-700/50 last:border-0">
                        <div>
                          <span className="text-white font-medium">{tier.range}</span>
                          {tier.note && (
                            <p className="text-xs text-gray-500">{tier.note}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-blue-400 font-semibold">{tier.price}</div>
                          <div className="text-xs text-gray-500">{tier.credits}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-4 flex items-start gap-2">
                    <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    Ištrinti failai nesumažina mėnesio limito – skaičiuojami įkėlimai
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Patarimai */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-4">
                  <Lightbulb className="w-4 h-4" />
                  Naudingi patarimai
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  💡 Kaip taupyti kreditus?
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                  Keli paprasti patarimai, kurie padės naudoti Clarivex efektyviau
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {TIPS.map((tip, idx) => (
                  <TipCard key={idx} tip={tip} />
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA */}
          <section className="px-4">
            <div className="container mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
                
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 rounded-3xl p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Pasiruošęs pradėti?
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    Gauk <span className="text-green-400 font-semibold">iki 1000 kreditų dovanų</span> užsiregistravęs ir užbaigęs profilį.
                    Jokių įsipareigojimų – papildysi kai norėsi.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://app.clarivex.ai"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Pradėti nemokamai
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      to="/#pricing"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-700/50 hover:bg-gray-700 text-white font-semibold rounded-xl border border-gray-600 transition-all"
                    >
                      Papildyti kreditus
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

