import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Share2,
  Wand2,
  Palette,
  LayoutGrid,
  Image as ImageIcon,
  Pencil,
  LayoutTemplate,
  FileText,
  Search,
  History,
  Download,
  Server,
  Globe,
  Gauge,
  ShieldCheck,
  CreditCard,
  Rocket,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const accentFrom = 'from-blue-500';
const accentTo = 'to-purple-500';
const accentBorder = 'border-blue-500/30';
const accentText = 'text-blue-400';
const accentBg = 'bg-blue-500/10';

const APP_URL = 'https://app.clarivex.ai/landing-generator';

const valueItems = [
  {
    title: 'Jau turite auditoriją',
    body: 'Facebook ir Instagram sekėjai turi kur nueiti — svetainė suteikia patikimumo ir vietą užklausoms bei rezervacijoms.',
  },
  {
    title: 'Be techninių žinių',
    body: 'Nereikia dizainerio ar programuotojo. Prijungiate social arba aprašote — likusį darbą atlieka AI.',
  },
  {
    title: 'Per kelias minutes',
    body: 'Ne savaitės derinimų su agentūra — veikianti, graži svetainė tą pačią dieną.',
  },
  {
    title: 'Nemokamas talpinimas',
    body: 'Publikuojate ir talpinate be papildomų mokesčių. Mokate tik už AI naudojimą.',
  },
];

const steps = [
  {
    n: '1',
    title: 'Prijunkite social arba aprašykite verslą',
    body: 'Prijungę Facebook ir Instagram, leidžiate AI surinkti jūsų veiklos kontekstą — toną, paslaugas, įrašus. Arba tiesiog aprašykite ir pridėkite kainas, paketus, adresus.',
  },
  {
    n: '2',
    title: 'AI sukuria svetainę',
    body: 'Architektas suplanuoja sekcijas, copywriter parašo tekstus, parenkamos nuotraukos — per kelias minutes turite pilną svetainę.',
  },
  {
    n: '3',
    title: 'Redaguokite kaip norite',
    body: 'Keiskite pokalbiu („pakeisk antraštę“, „pridėk DUK“) arba pieštuku tiesiai puslapyje. Visada galite atšaukti pakeitimą.',
  },
  {
    n: '4',
    title: 'Publikuokite nemokamai',
    body: 'Vienu paspaudimu svetainė tampa vieša adresu jūsų-vardas.clarivex.ai. Talpinimas nemokamas.',
  },
];

const capabilities = [
  {
    icon: Share2,
    title: 'Facebook ir Instagram kontekstas',
    description:
      'Prijungę paskyras, leidžiate AI surinkti jūsų veiklą, toną ir įrašus — svetainė kuriama iš to, ką jau turite, ne nuo nulio.',
  },
  {
    icon: Wand2,
    title: 'AI tekstai ir dizainas',
    description:
      'Antraštės, aprašymai, CTA ir sekcijų struktūra sukuriami pagal jūsų veiklą ir tikslą — be tuščių šablonų.',
  },
  {
    icon: Palette,
    title: '10+ dizaino temų',
    description:
      'Minimal, Bold, Elegant, Playful, Studio Noir, Aurora, Editorial, Bento, Swiss, Soft Pastel — arba „Auto“, kai temą parenka AI.',
  },
  {
    icon: ImageIcon,
    title: 'Nuotraukos — kaip patogu',
    description:
      'AI sugeneruotos, stock paieška arba jūsų pačių įkeltos (joms teikiama pirmenybė). Viskas optimizuojama greičiui.',
  },
  {
    icon: LayoutGrid,
    title: 'Galerijos ir albumai',
    description:
      'Suskirstykite nuotraukas į kategorijas — kompaktiškos albumų plytelės, paspaudus atsidaro tos kategorijos peržiūra.',
  },
  {
    icon: Pencil,
    title: 'Chirurginis redagavimas',
    description:
      'Keiskite pokalbiu su AI arba pieštuku tiesiai puslapyje (WYSIWYG). Pridėkite, šalinkite, perstumkite sekcijas.',
  },
  {
    icon: LayoutTemplate,
    title: 'Daugiapuslapė svetainė',
    description:
      'Ne vienas puslapis — keli puslapiai, navigacija, kontaktai ir formos užklausoms rinkti.',
  },
  {
    icon: FileText,
    title: 'Teisiniai puslapiai',
    description:
      'Privatumo politika ir kiti reikalingi puslapiai sugeneruojami automatiškai.',
  },
  {
    icon: Search,
    title: 'SEO paruošta',
    description:
      'Meta žymos, sitemap ir tvarkinga struktūra — kad svetainę rastų paieškos sistemos.',
  },
  {
    icon: History,
    title: 'Versijos ir atšaukimas',
    description:
      'Kiekvienas pakeitimas išsaugomas. „Atšaukti“ grąžina į būseną prieš jūsų paskutinį veiksmą.',
  },
  {
    icon: Globe,
    title: 'Savas domenas — nemokamai',
    description:
      'Turite domeną (pvz. mano-verslas.lt)? Prijunkite jį. Pridedate vieną DNS įrašą pas savo tiekėją — kaip įprasta — ir svetainė gyvena jūsų domenu. Jokių papildomų mokesčių.',
  },
  {
    icon: Download,
    title: 'Parsisiųskite ir talpinkite kur norite',
    description:
      'Nesate pririšti prie mūsų — svetainę galite bet kada atsisiųsti (visi failai) ir talpinti savo pasirinktoje vietoje.',
  },
];

const tiers = [
  {
    name: 'Ekonominis',
    tagline: 'Greita ir taupu',
    body: 'Sonnet 5 ir Haiku modeliai. Tinka, kai svarbiausia greitis ir mažesnė kaina.',
  },
  {
    name: 'Premium',
    tagline: 'Numatytas balansas',
    highlight: true,
    body: 'Opus 5 architektūrai ir dizainui, Sonnet 5 tekstams ir redagavimui. Geriausias santykis kokybė / kaina.',
  },
  {
    name: 'Maksimalus',
    tagline: 'Aukščiausia kokybė',
    body: 'Opus 5 visuose žingsniuose — kai reikia geriausio įmanomo rezultato.',
  },
];

const faqs = [
  {
    q: 'Ar talpinimas tikrai nemokamas?',
    a: 'Taip. Publikuota svetainė talpinama nemokamai adresu jūsų-vardas.clarivex.ai — be mėnesinio mokesčio už hostingą.',
  },
  {
    q: 'Ar galiu naudoti savo domeną?',
    a: 'Taip, ir tai nieko papildomai nekainuoja. Turite domeną — prijunkite jį: pridedate vieną DNS įrašą pas savo domeno tiekėją (kaip ir jungiant bet kurią kitą paslaugą), ir svetainė atsidaro jūsų domenu su saugiu SSL. Atsineškite savo domeną — viskas.',
  },
  {
    q: 'Ar galiu išsivežti svetainę pas save?',
    a: 'Taip. Svetainę galite bet kada parsisiųsti (visi failai) ir talpinti savo pasirinktoje vietoje arba prie savo domeno — nesate pririšti prie Clarivex.',
  },
  {
    q: 'Kiek kainuoja sukurti svetainę?',
    a: 'Mokate tik už AI naudojimą — kreditais, pagal realų sunaudojimą generuojant ir redaguojant. Talpinimas nieko nekainuoja, jokio mėnesinio abonemento.',
  },
  {
    q: 'Ar reikia prijungti Facebook ir Instagram?',
    a: 'Nebūtina, bet verta: prijungę paskyras leidžiate AI surinkti jūsų veiklos kontekstą ir įrašus, tad svetainė sukuriama tiksliau ir greičiau. Galite ir tiesiog viską aprašyti ranka.',
  },
  {
    q: 'Ar galiu naudoti savo nuotraukas?',
    a: 'Taip. Įkeltos nuotraukos naudojamos pirmiausia; kur jų neužtenka, parenkamos AI arba stock nuotraukos.',
  },
  {
    q: 'Ar tikrai naudojamos mano instrukcijos, ne fantazijos?',
    a: 'Taip. Jūsų kainos, adresai, paketai ir frazės yra tiesos šaltinis — naudojami tiksliai. AI nepramano duomenų, kurių nedavėte.',
  },
  {
    q: 'Ar galiu redaguoti vėliau?',
    a: 'Bet kada. Keičiate pokalbiu su AI arba pieštuku tiesiai puslapyje; kiekvienas pakeitimas išsaugomas ir atšaukiamas.',
  },
  {
    q: 'Kam ši paslauga skirta?',
    a: 'Clarivex klientams — reikalinga Clarivex paskyra. Tinka bet kokiam verslui: paslaugoms, produktams, renginiams, rezervacijoms.',
  },
  {
    q: 'Ar yra limitai?',
    a: 'Vienam projektui — saugykla iki ~1 GB ir kreditų riba (apsauga nuo netyčinio per didelio sunaudojimo). Instrukcijų laukas — iki 16 000 simbolių.',
  },
];

const SvetainiuKurejasSection = () => {
  const handleStart = () => {
    window.location.href = APP_URL;
  };

  return (
    <section
      id="svetainiu-kurejas"
      className="cvx-content-visibility py-24 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-2 ${accentBg} border ${accentBorder} rounded-full ${accentText} text-sm font-medium mb-6`}
          >
            <Sparkles className="w-4 h-4" />
            AI svetainių kūrėjas
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Profesionali svetainė</span>
            <br />
            <span
              className={`bg-gradient-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent`}
            >
              per kelias minutes su AI
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Turite verslą ir esate Facebook bei Instagram, bet neturite svetainės?
            Prijunkite paskyras — AI iš jūsų konteksto sukurs profesionalią svetainę.
            Greita, be techninių žinių, talpinimas nemokamas.
          </p>

          <Button
            onClick={handleStart}
            className={`bg-gradient-to-r ${accentFrom} ${accentTo} text-white px-7 py-6 text-base rounded-xl hover:opacity-90`}
          >
            Pradėti kurti
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>

        {/* KAINOS KABLYS */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex justify-center"
        >
          <div className="inline-flex items-start gap-3 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-5 max-w-3xl">
            <span className="text-2xl leading-none">☕</span>
            <p className="text-left text-base md:text-lg text-gray-200 leading-relaxed">
              Pilnai funkcionuojanti svetainė jums kainuos{' '}
              <span className="font-semibold text-white">
                mažiau nei kava degalinėje
              </span>{' '}
              — o agentūros už tą patį prašo šimtų ar net tūkstančių eurų.
            </p>
          </div>
        </motion.div>

        {/* VERTĖ / NAUDA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-sm"
        >
          <p className="text-center text-lg md:text-xl font-semibold text-white mb-6">
            Social tinkluose jus jau randa — <span className={accentText}>laikas turėti ir svetainę</span>
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {valueItems.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-700/60 bg-gray-900/40 p-4 text-left"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${accentText}`} />
                  <span className="font-medium text-white text-sm">{item.title}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* KAIP VEIKIA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Kaip veikia
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-xl border border-gray-700/60 bg-gray-900/40 p-5 text-left"
              >
                <div
                  className={`w-9 h-9 rounded-lg ${accentBg} border ${accentBorder} ${accentText} flex items-center justify-center font-bold mb-3`}
                >
                  {s.n}
                </div>
                <h3 className="text-white font-medium mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GALIMYBĖS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Ką gaunate
          </h2>
          <p className="text-gray-400 text-sm text-center mb-8 max-w-2xl mx-auto">
            Viskas, ko reikia profesionaliai svetainei — vienoje vietoje.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {capabilities.map((c, index) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className="group p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:border-blue-500/40 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg ${accentBg} border ${accentBorder} flex items-center justify-center shrink-0`}
                  >
                    <c.icon className={`w-4 h-4 ${accentText}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm mb-1">{c.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* KOKYBĖS LYGIAI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Kokybės lygiai
          </h2>
          <p className="text-gray-400 text-sm text-center mb-8 max-w-2xl mx-auto">
            Pasirinkite, kiek galingi AI modeliai dirbs prie jūsų svetainės.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {tiers.map((tplan) => (
              <div
                key={tplan.name}
                className={`rounded-2xl border p-6 ${
                  tplan.highlight
                    ? `${accentBorder} bg-blue-500/[0.07]`
                    : 'border-gray-700/60 bg-gray-900/40'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Gauge className={`w-4 h-4 ${accentText}`} />
                  <span className="text-white font-semibold">{tplan.name}</span>
                  {tplan.highlight && (
                    <span
                      className={`ml-auto text-[11px] px-2 py-0.5 rounded-full ${accentBg} ${accentText} border ${accentBorder}`}
                    >
                      Rekomenduojama
                    </span>
                  )}
                </div>
                <p className={`text-sm font-medium mb-2 ${accentText}`}>
                  {tplan.tagline}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{tplan.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* NEMOKAMAS TALPINIMAS */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div
              className={`w-14 h-14 rounded-2xl ${accentBg} border ${accentBorder} flex items-center justify-center shrink-0`}
            >
              <Server className={`w-7 h-7 ${accentText}`} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-1">
                Talpinimas — nemokamas
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Publikuota svetainė gyvena adresu{' '}
                <span className={accentText}>jūsų-vardas.clarivex.ai</span> be jokio
                mėnesinio mokesčio už hostingą. Turite savo domeną? Prijunkite jį —
                pridedate vieną DNS įrašą pas tiekėją ir viskas, jokių papildomų
                mokesčių. Publikuokite ir nuimkite vienu paspaudimu.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 shrink-0">
              {[
                { icon: Globe, label: 'Savas domenas — nemokamai' },
                { icon: Rocket, label: 'Publikavimas vienu paspaudimu' },
                { icon: ShieldCheck, label: 'Saugus SSL automatiškai' },
              ].map((it) => (
                <div key={it.label} className="flex items-center gap-2">
                  <it.icon className={`w-4 h-4 ${accentText}`} />
                  <span className="text-gray-300 text-sm">{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* KAINA IR TAISYKLĖS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Kaina ir taisyklės
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: CreditCard,
                title: 'Mokate tik už naudojimą',
                body: 'Kreditais — pagal realų AI sunaudojimą. Jokio abonemento ar mokesčio už patį faktą.',
              },
              {
                icon: Server,
                title: 'Talpinimas nemokamas',
                body: 'Publikuota svetainė talpinama be papildomų mokesčių.',
              },
              {
                icon: Gauge,
                title: 'Aiškūs limitai',
                body: '~1 GB saugyklos ir kreditų riba projektui; instrukcijos iki 16 000 simbolių.',
              },
              {
                icon: ShieldCheck,
                title: 'Tik Clarivex klientams',
                body: 'Paslauga prieinama su Clarivex paskyra.',
              },
            ].map((it) => (
              <div
                key={it.title}
                className="rounded-xl border border-gray-700/60 bg-gray-900/40 p-5"
              >
                <it.icon className={`w-5 h-5 ${accentText} mb-3`} />
                <h3 className="text-white font-medium text-sm mb-1">{it.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{it.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DUK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Dažni klausimai
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-xl border border-gray-700/60 bg-gray-900/40 p-5"
              >
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${accentText}`} />
                  <h3 className="text-white font-medium">{f.q}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Sukurkite svetainę šiandien
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Aprašykite verslą — likusį darbą atliks AI. Publikavimas ir talpinimas
            nemokami.
          </p>
          <Button
            onClick={handleStart}
            className={`bg-gradient-to-r ${accentFrom} ${accentTo} text-white px-7 py-6 text-base rounded-xl hover:opacity-90`}
          >
            Pradėti kurti
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SvetainiuKurejasSection;
