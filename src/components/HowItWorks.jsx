import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mic, Zap, CheckCircle, Rocket, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Mic,
    title: 'Pasakyk arba parašyk',
    description: 'Balsu ar tekstu — lietuviškai, angliškai, ar bet kuria kalba. Veikia naršyklėje ir Telegram. Clarivex supranta natūralią kalbą.',
    example: '"Sukurk postą apie akcijas"',
    moreExamples: ['"Primink rytoj 9:00"', '"Atsimink mano vardas Jonas"', '"Pridėk pieno į pirkinių sąrašą"'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'AI apdoroja akimirksniu',
    description: 'Naujausi GPT-5.6 ir GPT Image 2 modeliai analizuoja užklausą ir sukuria rezultatą per sekundes.',
    example: 'Tekstas + nuotraukos + hashtags',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: CheckCircle,
    title: 'Peržiūrėk ir patvirtink',
    description: 'Vienu paspaudimu publikuok iškart arba suplanuok į kalendorių. Pilna kontrolė tavo rankose.',
    example: 'Publikuoti dabar / Planuoti',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Rocket,
    title: 'Padaryta!',
    description: 'Postas keliauja į Instagram, Facebook. El. laiškas išsiunčiamas. Priminimas nustatytas. Viskas automatiškai.',
    example: '✓ Instagram ✓ Facebook',
    color: 'from-orange-500 to-red-500'
  }
];

const demoMessages = [
  { type: 'user', text: '🎤 "Sukurk postą apie mūsų žiemos kolekciją"' },
  { type: 'ai', text: '✨ Postas sukurtas!\n\n❄️ Žiemos kolekcija jau čia! Šilti megztiniai, jaukūs šalikėliai ir stilingi paltai laukia tavęs.\n\n#žiema #kolekcija #mada' },
  { type: 'system', text: '📸 4 nuotraukos pridėtos • Carousel paruoštas' }
];

const HowItWorks = () => {
  const handleTry = () => {
    window.location.href = "https://app.clarivex.ai/";
  };

  return (
    <section id="how-it-works" className="cvx-content-visibility py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6"
          >
            <Play className="w-4 h-4" />
            4 paprasti žingsniai
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Kaip veikia Clarivex AI</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              nuo užklausos iki rezultato
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            Jokių sudėtingų nustatymų. Jokio mokymosi. Pasakyk ką nori — Clarivex tai padarys.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed mb-3">
            Clarivex yra AI asistentas lietuvių verslui: Instagram ir Facebook turinys, el. laiškai, priminimai.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Užklausa dažnai virsta veiksmu per kelias sekundes. Jūs — strategija ir klientai; rutiną paliekate AI.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16 px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Nuo paskyros iki pirmo rezultato
          </h2>
          <ol className="list-decimal pl-5 md:pl-6 space-y-4 text-gray-300 text-sm md:text-base">
            <li>
              <span className="font-semibold text-white">Registracija.</span>{' '}
              Sukurkite paskyrą app.clarivex.ai — startinių kreditų paketas leidžia išbandyti be įsipareigojimų.
            </li>
            <li>
              <span className="font-semibold text-white">Kreditai ir integracijos.</span>{' '}
              Pasipildykite kreditus, kai reikia; prijunkite kanalus (pvz. paštą ar socialinius tinklus), jei norite publikuoti ar dirbti su inbox.
            </li>
            <li>
              <span className="font-semibold text-white">Užduoties vykdymas.</span>{' '}
              Parašykite ar pasakykite užduotį — AI paruoš juodraštį ar planą, jūs peržiūrite ir patvirtinate.
            </li>
          </ol>
          <p className="text-center text-xs text-gray-500 mt-6">
            Techninė eiga žemiau — keturi bendri žingsniai nuo užklausos iki rezultato.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps — išcentruota */}
          <div className="space-y-10 max-w-xl mx-auto w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center lg:text-left">
              AI automatizavimas keturiais žingsniais
            </h2>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number & icon */}
                <div className="relative mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center text-xs font-bold text-white">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 mb-3 text-sm leading-relaxed max-w-md">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-lg text-xs text-gray-300">
                  <span className="text-blue-400">→</span>
                  {step.example}
                </div>
                {step.moreExamples && (
                  <div className="flex flex-wrap gap-2 mt-2 justify-center max-w-md">
                    {step.moreExamples.map((ex, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-800/30 rounded text-xs text-gray-400 border border-gray-700/50">
                        {ex}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Demo Preview */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center lg:text-left">
              Pavyzdys: nuo balso komandos iki rezultato
            </h2>
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
            
            {/* Demo card */}
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-700/50 bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-sm text-gray-400 font-medium">Clarivex Demo</span>
                </div>
                <div className="text-xs text-gray-500">Realus pavyzdys</div>
              </div>

              {/* Messages */}
              <div className="p-6 space-y-4 min-h-[320px]">
                {demoMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-4 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-md' 
                        : msg.type === 'ai'
                        ? 'bg-gray-800 text-white rounded-bl-md border border-gray-700/50'
                        : 'bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-sm'
                    }`}>
                      <p className="whitespace-pre-line text-sm">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Time indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="flex justify-center"
                >
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">Atlikta per <span className="font-bold text-white">4.2s</span></span>
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <div className="p-5 border-t border-gray-700/50 bg-gray-800/30 space-y-3">
                <Button
                  onClick={handleTry}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-5 rounded-xl font-medium group"
                >
                  Išbandyk pats
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-center text-xs text-gray-500">
                  <Link to="/kainos" className="text-blue-400 hover:text-blue-300">Peržiūrėti kainas</Link>
                  {' · '}
                  <Link to="/features" className="text-blue-400 hover:text-blue-300">Visos funkcijos</Link>
                  {' · '}
                  <Link to="/nauda" className="text-blue-400 hover:text-blue-300">Nauda verslui</Link>
                </p>
              </div>
            </div>
          </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto space-y-14 border-t border-gray-800/80 pt-16 px-2"
        >
          <article>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Kaip veikia Clarivex AI kreditų sistema?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Kreditai yra vidinė valiuta AI veiksmams. Papildote sąskaitą eurais ir naudojate tik tada, kai platforma realiai atlieka darbą.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>
                <span className="font-semibold text-white">1 € = 1 000 kreditų</span>
                {' '}
                — aiškus santykis be paslėptų mokesčių.
              </li>
              <li>Kiekvienas veiksmas (pokalbis, juodraštis, vaizdas, integracija) sunaudoja skirtingą kiekį.</li>
              <li>Nepanaudoti kreditai nesibaigia — galite kaupti ramiai.</li>
              <li>Mėnesinio plano nėra: mokate už tai, ką iš tikrųjų paleidote.</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Daugiau skaičių ir pavyzdžių —{' '}
              <Link to="/kainos" className="text-blue-400 hover:text-blue-300">
                Clarivex kainos
              </Link>
              .
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Pilną įrankių sąrašą rasite puslapyje{' '}
              <Link to="/features" className="text-blue-400 hover:text-blue-300">
                Clarivex AI funkcijos verslui
              </Link>
              . Kaip tai veikia rezultatuose —{' '}
              <Link to="/nauda" className="text-blue-400 hover:text-blue-300">
                Clarivex AI nauda verslui
              </Link>
              .
            </p>
          </article>

          <article>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Integracijos: el. paštas, Telegram, socialiniai tinklai
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Clarivex sujungia kanalus, kuriais ir taip dirbate kasdien. Viena užklausa gali virsti keliais konkretiais veiksmais.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>
                <span className="font-semibold text-white">El. paštas:</span>
                {' '}
                juodraščiai ir taisyklės — išsiuntimą paprastai patvirtinate patys.
              </li>
              <li>
                <span className="font-semibold text-white">Instagram ir Facebook:</span>
                {' '}
                postų planavimas ir publikavimas iš vienos vietos.
              </li>
              <li>
                <span className="font-semibold text-white">Telegram:</span>
                {' '}
                priminimai, balsas ir greitos užduotys telefone.
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Telegram scenarijai —{' '}
              <Link to="/telegram" className="text-blue-400 hover:text-blue-300">
                Telegram integracija
              </Link>
              . DM automatiką —{' '}
              <Link to="/atsakiklis" className="text-blue-400 hover:text-blue-300">
                Atsakiklis
              </Link>
              .
            </p>
          </article>

          <article>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Veikimo greitis ir patikimumas
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Tipinė užklausa apdorojama per kelias sekundes. Stabilumas priklauso nuo AI tiekėjų ir integracijų.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Jei vienas modelis nepasiekiamas, sistema gali pereiti prie atsarginio varianto.</li>
              <li>Sunkesni vaizdai užtrunka ilgiau nei trumpas teksto juodraštis.</li>
              <li>
                Esant incidentams, sekite{' '}
                <Link to="/statusas" className="text-blue-400 hover:text-blue-300">
                  sistemos statusą
                </Link>
                .
              </li>
            </ul>
          </article>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
