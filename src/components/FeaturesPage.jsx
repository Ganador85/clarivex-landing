import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig, getPrimaryPageMeta } from '@/content/seoPages';
import { 
  MessageSquare, 
  Bot, 
  Target,
  Database,
  Palette,
  LifeBuoy,
  BookOpen,
  Share2,
  Pencil,
  Calendar,
  Inbox,
  Zap,
  BarChart3,
  CheckCircle,
  FileText,
  Globe,
  Mail,
  Sparkles,
  Send,
  Mic,
  ShoppingCart,
  Lightbulb,
  Image,
  Eye,
  Languages,
  Package,
  CreditCard,
  Wallet,
  PieChart,
  MessageCircle,
  TrendingUp,
  ChevronRight,
  ExternalLink,
  Instagram,
  Facebook
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Feature categories data
const FEATURE_CATEGORIES = [
  {
    id: 'ai',
    title: 'AI Branduolys',
    icon: Bot,
    color: 'from-violet-500 to-purple-600',
    description: 'Pažangiausi AI modeliai jūsų paslaugoms',
    features: [
      {
        name: 'AI Pokalbiai',
        icon: MessageSquare,
        description: 'Pokalbiai su naujausiais GPT-5.6 šeimos modeliais',
        capabilities: [
          'Kelių AI modelių pasirinkimas',
          'Failų įkėlimas ir analizė',
          'Kodo rašymas ir aiškinimas',
          'Pokalbių istorija ir paieška',
          'Automatinės santraukos',
        ],
      },
      {
        name: 'AI Asistentai',
        icon: Bot,
        description: 'Sukurkite savo AI asistentus su individualiomis instrukcijomis',
        capabilities: [
          'Custom system prompts',
          'Modelio ir funkcijų konfigūracija',
          'Web search įjungimas/išjungimas',
          'Atminties personalizacija',
          'Viešieji ir privatūs asistentai',
        ],
      },
      {
        name: 'Hub Orchestratorius',
        icon: Target,
        description: 'Išmanusis AI maršrutizatorius, kuris supranta jūsų intenciją',
        capabilities: [
          'Automatinis intencijos atpažinimas',
          'Konteksto perdavimas tarp modulių',
          'Brand tono išlaikymas',
          'Greitas navigavimas',
        ],
        isNew: true,
      },
    ],
  },
  {
    id: 'smegenys',
    title: 'Smegenys (RAG)',
    icon: Database,
    color: 'from-pink-500 to-rose-600',
    description: 'Ilgalaikė atmintis ir žinių bazė jūsų AI',
    features: [
      {
        name: 'Ilgalaikė atmintis',
        icon: Database,
        description: 'AI prisimena viską, ką jam pasakote',
        capabilities: [
          'Automatinis žinių išsaugojimas',
          'Failų vektorizavimas',
          'Semantinė paieška',
          'Šaltinių citavimas',
        ],
      },
      {
        name: 'Brand profiliai',
        icon: Palette,
        description: 'Sukurkite AI asmenybę pagal savo brendą',
        capabilities: [
          'Tono ir stiliaus nustatymai',
          'Vertybių apibrėžimas',
          'Versijų istorija',
          'Kelių brendų palaikymas',
        ],
      },
      {
        name: 'Support profiliai',
        icon: LifeBuoy,
        description: 'Klientų aptarnavimo AI su žiniomis',
        capabilities: [
          'DUK bazė',
          'Makro atsakymai',
          'SLA nustatymai',
          'Eskalacijos gairės',
        ],
        isNew: true,
      },
      {
        name: 'Žinių bazė',
        icon: BookOpen,
        description: 'Struktūrizuota informacija AI naudojimui',
        capabilities: [
          'Produktų aprašymai',
          'Kainų informacija',
          'Politikos dokumentai',
          'FAQ klausimai',
        ],
      },
    ],
  },
  {
    id: 'social',
    title: 'Socialinių tinklų valdymas',
    icon: Share2,
    color: 'from-blue-500 to-cyan-600',
    description: 'Viskas socialiniams tinklams vienoje vietoje',
    features: [
      {
        name: 'Composer',
        icon: Pencil,
        description: 'Kurkite ir planuokite postus su AI pagalba',
        capabilities: [
          'AI turinio generavimas',
          'Kelių platformų palaikymas',
          'Medijos įkėlimas (iki 150MB)',
          'Hashtagų siūlymai',
          'AI paveikslėlių generavimas',
        ],
        platforms: ['Facebook', 'Instagram'],
      },
      {
        name: 'Kalendorius',
        icon: Calendar,
        description: 'Vizualus turinio planavimas',
        capabilities: [
          'Mėnesio ir savaitės vaizdas',
          'Drag & drop perkėlimas',
          'Švenčių žymėjimas',
          'Queue slots',
          'Best time siūlymai',
        ],
      },
      {
        name: 'Inbox',
        icon: Inbox,
        description: 'Visi komentarai ir DM vienoje vietoje',
        capabilities: [
          'Facebook + Instagram inbox',
          'AI atsakymų generavimas',
          'Sentimento analizė',
          'Reply templates',
        ],
      },
      {
        name: 'Automatizacija',
        icon: Zap,
        description: 'Automatiniai atsakymai ir taisyklės',
        capabilities: [
          'Auto-reply pagal raktažodžius',
          'Intent-based atsakymai',
          'Out of hours žinutės',
          'SLA priminimai',
        ],
      },
      {
        name: 'Analitika',
        icon: BarChart3,
        description: 'Sekėjų ir įsitraukimo statistika',
        capabilities: [
          'Sekėjų augimo grafikai',
          'Postų performance',
          'Per-account breakdown',
          'CSV eksportas',
        ],
      },
      {
        name: 'Approval Workflow',
        icon: CheckCircle,
        description: 'Komandinis postų patvirtinimas',
        capabilities: [
          'Draft → Pending → Approved',
          'Komandos rolės (admin, member)',
          'Komentarai prie postų',
        ],
        isNew: true,
      },
    ],
  },
  {
    id: 'blog',
    title: 'Blogai ir turinys',
    icon: FileText,
    color: 'from-emerald-500 to-green-600',
    description: 'AI straipsniai ir blog integracija',
    features: [
      {
        name: 'Shopify integracija',
        icon: ShoppingCart,
        description: 'Shopify blog straipsniai',
        capabilities: [
          'Blog postų publikavimas',
          'Blogų sąrašas',
        ],
      },
      {
        name: 'AI Blog generavimas',
        icon: Sparkles,
        description: 'AI sukuria straipsnius už jus',
        capabilities: [
          'Turinio plano generavimas',
          'Straipsnio rašymas pagal temą',
          'Featured image generavimas',
          'SEO optimizacija',
        ],
      },
    ],
  },
  {
    id: 'mail',
    title: 'El. paštas su AI',
    icon: Mail,
    color: 'from-amber-500 to-orange-600',
    description: 'Išmanus el. pašto klientas su AI',
    features: [
      {
        name: 'El. pašto valdymas',
        icon: Inbox,
        description: 'Pilnas el. pašto klientas',
        capabilities: [
          'IMAP/SMTP prijungimas (Gmail, Outlook ir kt.)',
          'App Password palaikymas',
          'Labels sistema',
          'Thread vaizdas',
          'Attachments',
        ],
      },
      {
        name: 'AI funkcijos',
        icon: Sparkles,
        description: 'AI padeda rašyti ir atsakyti',
        capabilities: [
          'AI laiško rašymas',
          'AI atsakymo generavimas',
          'Tono keitimas',
          'Style Profile (mokosi stiliaus)',
        ],
      },
    ],
  },
  {
    id: 'telegram',
    title: 'Telegram integracija',
    icon: Send,
    color: 'from-sky-500 to-blue-600',
    description: 'Clarivex visur, kur esate',
    features: [
      {
        name: 'AI Chat per Telegram',
        icon: MessageSquare,
        description: 'Kalbėkitės su AI tiesiog Telegram',
        capabilities: [
          'Pilni pokalbiai su AI',
          'Web search palaikymas',
          'RAG kontekstas',
          'Brand profiliai',
        ],
      },
      {
        name: 'Balso žinutės',
        icon: Mic,
        description: 'Kalbėkite - AI supras',
        capabilities: [
          'Whisper transkribcija (LT)',
          'Automatinė klasifikacija',
          'Note/Idea/Shopping/Reminder',
        ],
      },
      {
        name: 'Postų kūrimas',
        icon: Share2,
        description: 'Kurkite postus per Telegram',
        capabilities: [
          'Step-by-step wizard',
          'AI teksto generavimas',
          'Nuotraukų įkėlimas',
          'Planavimas',
        ],
        isNew: true,
      },
    ],
  },
  {
    id: 'voice',
    title: 'Balsas ir užrašai',
    icon: Mic,
    color: 'from-violet-500 to-purple-600',
    description: 'Diktuokite - AI supras ir susistemins',
    features: [
      {
        name: 'Balso užrašai',
        icon: Mic,
        description: 'Užsirašykite balsu',
        capabilities: [
          'Push-to-talk įrašymas',
          'Whisper transkribcija (LT)',
          'Automatinis tipų atpažinimas',
        ],
      },
      {
        name: 'Pirkinių sąrašai',
        icon: ShoppingCart,
        description: 'Sukurkite sąrašą balsu',
        capabilities: [
          'Elementų sąrašas su kiekiais',
          'Checkbox pažymėjimas',
          'Bendrinimas',
        ],
      },
      {
        name: 'Idėjos',
        icon: Lightbulb,
        description: 'Nepraleiskite nė vienos idėjos',
        capabilities: [
          'Kategorijos (marketing, content)',
          'Tags',
          'Transformacija į postą',
        ],
      },
    ],
  },
  {
    id: 'visual',
    title: 'Vizualai',
    icon: Image,
    color: 'from-pink-500 to-rose-600',
    description: 'AI paveikslėlių generavimas ir analizė',
    features: [
      {
        name: 'Paveikslėlių generavimas',
        icon: Sparkles,
        description: 'AI sukuria unikalius paveikslėlius',
        capabilities: [
          'GPT Image 2 generavimas + Gemini fallback',
          'Dydžio pasirinkimas',
          'Social media formatai',
        ],
      },
      {
        name: 'Paveikslėlių analizė',
        icon: Eye,
        description: 'AI "mato" ir aprašo paveikslėlius',
        capabilities: [
          'Paveikslėlio aprašymas',
          'OCR teksto ištraukimas',
          'Analizės istorija',
        ],
      },
    ],
  },
  {
    id: 'tools',
    title: 'Kiti įrankiai',
    icon: Zap,
    color: 'from-indigo-500 to-violet-600',
    description: 'Papildomi produktyvumo įrankiai',
    features: [
      {
        name: 'Vertėjas',
        icon: Languages,
        description: 'AI tekstų ir dokumentų vertimas',
        capabilities: [
          'Daugelis kalbų (LT palaikymas)',
          'Live ir HQ režimai',
          'Žodynas (glossary)',
          'Dokumentų vertimas',
        ],
      },
      {
        name: 'Failų siuntimas',
        icon: Package,
        description: 'WeTransfer stiliaus failų siuntimas',
        capabilities: [
          'Iki 3GB nemokamai per transfer',
          'Iki 30GB/mėn nemokamai',
          'Slaptažodžio apsauga',
        ],
      },
    ],
  },
  {
    id: 'commerce',
    title: 'Prekės ir pardavimai',
    icon: ShoppingCart,
    color: 'from-emerald-500 to-teal-600',
    description: 'Katalogas, paruoštas atsakymams klientui ir paieškai',
    features: [
      {
        name: 'Prekių sandėlis',
        icon: Package,
        description: 'Prekės importuojamos, aprašomos AI ir tampa randamos pagal prasmę',
        capabilities: [
          'Importas iš Shopify, WooCommerce, prekių srauto ar lentelės',
          'Stulpelių atpažinimas ir šablonai',
          'AI nustato prekės tipą, auditoriją ir savybes',
          'Nuotraukų analizė: požymiai, kurių nėra aprašyme',
          'Semantinė paieška — klientas rašo savais žodžiais',
          'Variantai, dydžiai ir kainų apsauga',
          'Atsinaujinimas pagal tvarkaraštį',
        ],
      },
      {
        name: 'Atsakymai su prekėmis',
        icon: MessageCircle,
        description: 'AI atsako klientui konkrečiomis prekėmis — su nuotrauka, kaina ir dydžiais',
        capabilities: [
          'Veikia socialinių tinklų žinutėse ir svetainės pokalbyje',
          'Rodo tik tai, kas realiai yra sandėlyje',
          'Supranta klausimus su rašybos klaidomis ir be nosinių',
        ],
      },
      {
        name: 'Produktai 360°',
        icon: Eye,
        description: 'Sukamas prekės vaizdas iš kadrų, įdedamas į svetainę',
        capabilities: ['Kadrų įkėlimas', 'Kolekcijos', 'Įterpimas į puslapį'],
      },
      {
        name: 'Virtualus matavimas',
        icon: Sparkles,
        description: 'Drabužio primatavimas ant nuotraukos',
        capabilities: ['Viršus, apačia ir suknelės', 'Rezultatas per kelias sekundes'],
      },
    ],
  },
  {
    id: 'business',
    title: 'Svetainė ir verslo įrankiai',
    icon: Globe,
    color: 'from-sky-500 to-blue-600',
    description: 'Nuo svetainės su savu domenu iki dokumentų ir stebėjimo',
    features: [
      {
        name: 'Svetainių kūrėjas',
        icon: Globe,
        description: 'Svetainė sukuriama pokalbiu ir gyvena savame domene',
        capabilities: [
          'Puslapiai, blogas ir SEO',
          'Užklausų forma su pranešimais',
          'Atsiliepimai ir svečių knyga',
          'Registracija į renginius',
          'Pardavimai: dovanų kuponai, skaitmeninės prekės, paslaugos',
          'Gyvas pokalbis su konsultantu',
        ],
      },
      {
        name: 'Rezervacijos',
        icon: Calendar,
        description: 'AI priima rezervaciją pokalbyje ir tikrina laisvus laikus',
        capabilities: ['Paslaugos ir trukmės', 'Taisyklės ir apribojimai', 'Patvirtinimai klientui'],
      },
      {
        name: 'Dokumentai',
        icon: FileText,
        description: 'Pasiūlymai, sąskaitos ir sutarčių analizė',
        capabilities: ['Šablonai', 'Generavimas iš pokalbio', 'Sutarties peržiūra su AI'],
      },
      {
        name: 'Svetainės auditas',
        icon: BarChart3,
        description: 'SEO ir greičio patikra su prioritetais',
        capabilities: ['Meta, H1, nuorodos', 'Schema ir OpenGraph', 'Core Web Vitals'],
      },
      {
        name: 'Stebėjimo agentai',
        icon: TrendingUp,
        description: 'Nuolat seka šaltinius ir praneša, kas nauja',
        capabilities: ['RSS ir paieškos šaltiniai', 'Savas tvarkaraštis', 'Pranešimai apie naujienas'],
      },
    ],
  },
  {
    id: 'billing',
    title: 'Atsiskaitymai',
    icon: CreditCard,
    color: 'from-emerald-500 to-teal-600',
    description: 'Lanksti kreditų sistema',
    features: [
      {
        name: 'Kreditų sistema',
        icon: Wallet,
        description: 'Mokėkite tik už tai, ką naudojate',
        capabilities: [
          '1€ = 1000 kreditų',
          'Paketai su bonusais (iki +10%)',
          'Per-service kainodara',
          'Detalus naudojimo sekimas',
        ],
      },
      {
        name: 'Naudojimo valdymas',
        icon: PieChart,
        description: 'Kontroliuokite savo išlaidas',
        capabilities: [
          'Realaus laiko statistika',
          'Usage caps ir alerts',
          'CSV eksportas',
        ],
      },
    ],
  },
  {
    id: 'support',
    title: 'Live Support',
    icon: MessageCircle,
    color: 'from-amber-500 to-yellow-600',
    description: 'AI klientų aptarnavimas',
    features: [
      {
        name: 'Live Chat',
        icon: MessageCircle,
        description: 'AI atsakymai su žinių baze',
        capabilities: [
          'Realaus laiko chat',
          'AI atsakymai pagal žinių bazę',
          'CSAT įvertinimai',
          'Žmogaus eskalacija',
        ],
        isNew: true,
      },
      {
        name: 'Support Analytics',
        icon: TrendingUp,
        description: 'Klientų aptarnavimo metrika',
        capabilities: [
          'Tickets handled',
          'Resolution rate',
          'SLA tracking',
          'CSAT scores',
        ],
        isNew: true,
      },
    ],
  },
];

const PLATFORMS = [
  { name: 'Facebook', icon: Facebook, color: 'text-blue-400' },
  { name: 'Instagram', icon: Instagram, color: 'text-pink-400' },
  { name: 'Shopify', icon: ShoppingCart, color: 'text-green-400' },
  { name: 'El. paštas', icon: Mail, color: 'text-red-400' },
  { name: 'Telegram', icon: Send, color: 'text-cyan-400' },
];

const STATS = [
  { value: '10+', label: 'AI modelių' },
  { value: '4', label: 'Social platformos' },
  { value: '50+', label: 'Kalbų vertimui' },
  { value: '24/7', label: 'AI pagalba' },
];

/** Skaitomumui: teminės H2 sritys, po jomis kategorijos (H3) ir funkcijos (H4). */
const FEATURE_SECTION_GROUPS = [
  {
    slug: 'ai-ir-zinios',
    heading: 'AI modeliai, asistentai ir žinių bazė',
    intro:
      'Pokalbiai su keliais modeliais, individualūs asistentai, orchestratorius bei ilgalaikė atmintis ir RAG turiniui.',
    categoryIds: ['ai', 'smegenys'],
  },
  {
    slug: 'turinys-komunikacija',
    heading: 'Socialiniai tinklai, tinklaraštis ir el. paštas',
    intro:
      'Postų kūrimas ir planavimas, inbox su DM, tinklaraščio straipsniai ir išmanus paštas vienoje sistemoje.',
    categoryIds: ['social', 'blog', 'mail'],
  },
  {
    slug: 'telefonas-media',
    heading: 'Telegram, balsas, vizualai ir įrankiai',
    intro:
      'Valdymas telefone per Telegram, diktuotos užduotys, paveikslėliai, vertimai ir papildomi įrankiai.',
    categoryIds: ['telegram', 'voice', 'visual', 'tools'],
  },
  {
    slug: 'prekyba-verslas',
    heading: 'Prekės, svetainė ir verslo įrankiai',
    intro:
      'Katalogas, paruoštas atsakymams ir paieškai, svetainė su savu domenu, rezervacijos, dokumentai ir stebėjimas.',
    categoryIds: ['commerce', 'business'],
  },
  {
    slug: 'kainos-pagalba',
    heading: 'Kreditai, mokėjimai ir klientų aptarnavimas',
    intro: 'Lanksti kreditų sistema bei įrankiai klientų aptarnavimui su AI.',
    categoryIds: ['billing', 'support'],
  },
];

const FeaturesPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const canonicalUrl = `${siteConfig.url}/features`;
  const socialImage = siteConfig.socialImage;
  const fm = getPrimaryPageMeta('/features');
  const pageTitle = fm?.title ?? 'Clarivex AI funkcijos';
  const pageDescription =
    fm?.description ??
    'Sužinokite, ką gali Clarivex AI: socialinių tinklų turinys, el. pašto automatizavimas, balso komandos ir integracijos.';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    url: canonicalUrl,
    description: pageDescription,
    inLanguage: 'lt-LT',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
  };

  const handleLogin = () => {
    window.location.href = "https://app.clarivex.ai/";
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

      <div className="cvx-page min-h-screen text-white antialiased">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 px-4 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 via-gray-950 to-gray-950" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-violet-500/10 to-purple-500/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto max-w-6xl relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Viskas vienoje platformoje
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">Clarivex AI funkcijos</span>{' '}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    jūsų kasdienei komunikacijai
                  </span>
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
                  Vienoje vietoje – AI įrankiai el. paštui, socialiniams tinklams, Telegram ir dokumentams.
                </p>
                <p className="text-base text-gray-500 max-w-xl mx-auto mb-4">
                  Apmoka{' '}
                  <Link to="/kainos" className="text-violet-300 hover:text-white underline-offset-2 hover:underline">
                    Clarivex kreditų sistema
                  </Link>
                  . Kur eiti toliau:
                </p>
                <ul className="text-left max-w-md mx-auto mb-10 space-y-2 text-gray-400 text-base list-disc pl-5 marker:text-violet-500">
                  <li>
                    <Link to="/kainos" className="text-violet-300 hover:text-white underline-offset-2 hover:underline">
                      Kainos ir kreditai
                    </Link>
                  </li>
                  <li>
                    <Link to="/kaip-veikia" className="text-violet-300 hover:text-white underline-offset-2 hover:underline">
                      Kaip veikia Clarivex AI
                    </Link>
                  </li>
                  <li>
                    <Link to="/nauda" className="text-violet-300 hover:text-white underline-offset-2 hover:underline">
                      Nauda verslui
                    </Link>
                  </li>
                  <li>
                    <Link to="/telegram" className="text-violet-300 hover:text-white underline-offset-2 hover:underline">
                      Telegram AI botas
                    </Link>
                  </li>
                  <li>
                    <Link to="/atsakiklis" className="text-violet-300 hover:text-white underline-offset-2 hover:underline">
                      AI atsakiklis Messenger ir Instagram DM
                    </Link>
                  </li>
                </ul>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <Button
                    onClick={handleLogin}
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl hover:shadow-violet-500/20 transition-all"
                  >
                    Pradėti naudoti
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                  <Link to="/kainos">
                    <Button
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg rounded-xl"
                    >
                      Peržiūrėti kainas
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                  {STATS.map((stat) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Platforms */}
          <section className="py-8 px-4 border-y border-gray-800/50 bg-gray-900/30">
            <div className="container mx-auto max-w-6xl">
              <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-6">
                Integruojama su
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {PLATFORMS.map((platform) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg"
                  >
                    <platform.icon className={`w-5 h-5 ${platform.color}`} />
                    <span className="text-gray-300 text-sm font-medium">{platform.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Category Navigation */}
          <nav className="sticky top-16 z-40 py-4 px-4 bg-gray-950/95 backdrop-blur-xl border-b border-gray-800/50">
            <div className="container mx-auto max-w-6xl overflow-x-auto">
              <div className="flex gap-2 min-w-max justify-center">
                {FEATURE_CATEGORIES.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                      activeCategory === cat.id
                        ? 'bg-violet-500/20 text-violet-400'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.title}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Features Content */}
          <div className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <p className="text-center text-gray-400 text-sm mb-12 max-w-2xl mx-auto leading-relaxed">
                Funkcijos sugrupuotos pagal sritis. Viršuje — greitas šuolis į konkretų bloką.
              </p>
              {FEATURE_SECTION_GROUPS.map((group) => (
                <section
                  key={group.slug}
                  aria-labelledby={`feat-group-${group.slug}`}
                  className="mb-24 last:mb-6"
                >
                  <h2
                    id={`feat-group-${group.slug}`}
                    className="text-2xl md:text-3xl font-bold text-white mb-3 scroll-mt-36"
                  >
                    {group.heading}
                  </h2>
                  <p className="text-gray-400 mb-12 max-w-3xl leading-relaxed">{group.intro}</p>

                  {group.categoryIds.map((catId) => {
                    const category = FEATURE_CATEGORIES.find((c) => c.id === catId);
                    if (!category) return null;
                    return (
                      <motion.section
                        key={category.id}
                        id={category.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5 }}
                        className="mb-20 scroll-mt-32 last:mb-0"
                      >
                        <div className="flex items-start gap-4 mb-8">
                          <div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                          >
                            <category.icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                              {category.title}
                            </h3>
                            <p className="text-gray-400">{category.description}</p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                          {category.features.map((feature, index) => (
                            <motion.div
                              key={feature.name}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1, duration: 0.4 }}
                              whileHover={{ y: -4 }}
                              className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-gray-600 transition-all"
                            >
                              {feature.isNew && (
                                <div className="absolute -top-2 right-4 px-2 py-0.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold rounded-full">
                                  Nauja
                                </div>
                              )}
                              {feature.isBeta && (
                                <div className="absolute -top-2 right-4 px-2 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full">
                                  Beta
                                </div>
                              )}

                              <div className="flex items-start gap-3 mb-3">
                                <div
                                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                                >
                                  <feature.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                                    {feature.name}
                                  </h4>
                                </div>
                              </div>

                              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                {feature.description}
                              </p>

                              {feature.platforms && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {feature.platforms.map((p) => (
                                    <span
                                      key={p}
                                      className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded"
                                    >
                                      {p}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {feature.capabilities.length > 5 ? (
                                <details className="mt-1 rounded-lg border border-gray-700/40 bg-gray-900/20 p-3 open:bg-gray-900/30">
                                  <summary className="cursor-pointer text-sm font-medium text-violet-300 hover:text-violet-200 list-none [&::-webkit-details-marker]:hidden flex items-center gap-2">
                                    Visos galimybės ({feature.capabilities.length})
                                  </summary>
                                  <ul className="space-y-1.5 mt-3 pt-3 border-t border-gray-700/40">
                                    {feature.capabilities.map((cap) => (
                                      <li
                                        key={cap}
                                        className="flex items-start gap-2 text-sm text-gray-300"
                                      >
                                        <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                        {cap}
                                      </li>
                                    ))}
                                  </ul>
                                </details>
                              ) : (
                                <ul className="space-y-1.5">
                                  {feature.capabilities.map((cap) => (
                                    <li
                                      key={cap}
                                      className="flex items-start gap-2 text-sm text-gray-300"
                                    >
                                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                      {cap}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </motion.section>
                    );
                  })}
                </section>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-gray-950 to-violet-950/30">
            <div className="container mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Pasiruošę pradėti?
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Prisijunkite ir išbandykite visas Clarivex galimybes jau šiandien.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={handleLogin}
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium rounded-xl shadow-lg"
                  >
                    Pradėti nemokamai
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                  <Link to="/kainos">
                    <Button
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg rounded-xl"
                    >
                      Peržiūrėti kainas
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FeaturesPage;
