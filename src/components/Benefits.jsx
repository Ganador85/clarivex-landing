import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Zap, Shield, TrendingUp, Sparkles, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Rutina nusiimama nuo tavo pečių',
    description: 'Postai, atsakymai klientams ir laiškai paruošiami tau nedalyvaujant — lieka tik peržiūrėti ir patvirtinti.',
    stat: '1 vieta',
    statLabel: 'vietoj kelių įrankių'
  },
  {
    icon: Zap,
    title: 'Pasakei — gavai. Per sekundes.',
    description: 'Postas, juodraštis, priminimas — nereikia laukti grafikų, freelancerių ar susitikimų. AI veikia kai tau reikia.',
    stat: '~3s',
    statLabel: 'vidutinis atsakymas'
  },
  {
    icon: Shield,
    title: 'Tavo balsas visur — automatiškai',
    description: 'Clarivex išmoksta tavo toną, terminus ir prekės ženklą. Kiekvienas atsakymas skamba kaip tau parašytas.',
    stat: 'Tavo',
    statLabel: 'tonas ir terminai'
  },
  {
    icon: TrendingUp,
    title: 'Dirbi be papildomų etatų',
    description: 'Darbus, kuriems reikėtų atskiro žmogaus ar agentūros, atlieka asistentas — o tu moki tik už tai, ką realiai panaudoji.',
    stat: '€0',
    statLabel: 'mėnesinis mokestis'
  }
];

const dayScenario = [
  { time: '08:00', action: 'Pasakai balsu: „Postas apie akciją“', result: '2 platformoms paruošta per 10 s' },
  { time: '12:00', action: 'Atsakai į DM ir el. laiškus', result: 'AI siūlo atsakymus — 1 paspaudimas' },
  { time: '16:00', action: '„Primink rytoj 10:00 paskambinti“', result: 'Priminimas nustatytas — pranešimas į telefoną' },
];

const useCases = [
  {
    title: 'E-parduotuvės',
    description: 'Blogo turinys Shopify parduotuvei, postai apie produktus.',
    outcome: 'Tu gauni: profesionalų turinį be papildomo etato.',
    features: ['Shopify blog integracija', 'SEO optimizuoti blogai', 'AI sugeneruotas turinys', 'Social media postai']
  },
  {
    title: 'Influenceriai',
    description: 'Turinio planavimas, bendradarbiavimai, matomumo sekimas.',
    outcome: 'Tu gauni: daugiau laiko kurti turinį, ne valdyti planavimą.',
    features: ['Postų ir Stories kalendorius', 'Ideos ir hashtagai', 'Įsitraukimo statistika']
  },
  {
    title: 'Smulkus verslas',
    description: 'Profesionalus marketingas be marketingo etato.',
    outcome: 'Tu gauni: konkurencingą vaizdą be papildomų atlyginimų.',
    features: ['Social media + el. paštas', 'Balso užrašai ir priminimai', 'Viskas vienoje vietoje']
  },
  {
    title: 'Agentūros',
    description: 'Kelių klientų valdymas vienoje platformoje.',
    outcome: 'Tu gauni: didesnį klientų skaičių be papildomų žmonių.',
    features: ['Multi-brand profiliai', 'Approval workflow', 'Vienas dashboard']
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="cvx-content-visibility py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Kodėl Clarivex?
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Clarivex AI nauda verslui</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              mažiau rutinos, daugiau laiko
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl mx-auto mb-4">
            Trumpai: ką gaunate
          </h2>
          <ul className="text-gray-400 max-w-xl mx-auto text-base space-y-2 list-disc pl-5 text-left mb-6">
            <li>Daugiau laiko strategijai ir klientams — mažiau rutinos postams ir paštui.</li>
            <li>Viename įrankyje: juodraščiai, priminimai, vizualai — mažiau šokinėjimo tarp paslaugų.</li>
            <li>Mokate už realų naudojimą (kreditai); galite pradėti nuo nemokamo paketo.</li>
          </ul>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Išbandykite savaitę ir pamatuokite, kiek užduočių Clarivex gali perimti jūsų vietoje.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Pagrindinės Clarivex AI naudos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-purple-400" />
                  </div>
                </div>
                
                {/* Stat */}
                <div className="mb-4">
                  <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {benefit.stat}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{benefit.statLabel}</p>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nauda pagal auditoriją
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Tas pats įrankis — skirtingas laimėjimas priklausomai nuo jūsų rolės.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Verslui</h3>
              <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
                <li>Mažiau laiko el. paštui ir socialiniams tinklams.</li>
                <li>Greitesnis atsakymas klientams ir aiškesnė komunikacija.</li>
                <li>Vienas įrankis vietoj kelių atskirų paslaugų.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Individualiems profesionalams</h3>
              <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
                <li>Juodraščiai ir priminimai be „copy-paste“ maratono.</li>
                <li>Telefone — balsu per Telegram, kai nėra prie kompiuterio.</li>
                <li>Mokate tik už tai, ką tikrai paleidote.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Agentūroms ir kūrėjams</h3>
              <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
                <li>Greitesnis turinio paruošimas keliems kanalams.</li>
                <li>Lengviau išlaikyti vienodą toną ir terminologiją.</li>
                <li>Mažiau rankinio darbo klientų projektuose.</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            <Link to="/features" className="text-blue-400 hover:text-blue-300 font-medium">
              Funkcijos
            </Link>
            {' · '}
            <Link to="/kainos" className="text-blue-400 hover:text-blue-300 font-medium">
              Kainos
            </Link>
            {' · '}
            <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300 font-medium">
              Kaip veikia
            </Link>
            {' · '}
            <Link to="/telegram" className="text-blue-400 hover:text-blue-300 font-medium">
              Telegram
            </Link>
            .
          </p>
        </motion.div>

        {/* Tavo tipinė diena */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tavo tipinė diena su Clarivex
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Nuo balso komandos iki paruošto turinio — per kelias sekundes.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {dayScenario.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-purple-500/30 transition-colors"
              >
                <span className="text-purple-400 font-mono text-sm shrink-0">{step.time}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium">{step.action}</p>
                  <p className="text-gray-400 text-sm">→ {step.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-6 text-gray-500 text-sm">
            Viską gali daryti balsu per Telegram arba naršyklėje — be jokių sudėtingų nustatymų.
          </p>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sukurta įvairiems poreikiams
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Kiekvienam segmentui — konkretus rezultatas tau.
            </p>
          </div>

          <ul className="text-gray-400 text-sm mb-8 max-w-2xl mx-auto space-y-2 list-disc pl-5 leading-relaxed">
            <li>
              Funkcijos:{' '}
              <Link to="/features" className="text-blue-400 hover:text-blue-300 font-medium">
                el. paštas, socialinių tinklų kalendorius, Telegram
              </Link>
              {' ir kt.'}
            </li>
            <li>
              Kainodara:{' '}
              <Link to="/kainos" className="text-blue-400 hover:text-blue-300 font-medium">
                mokėjimas už naudojimą (kreditai)
              </Link>
              .
            </li>
            <li>
              Daugiau pavyzdžių:{' '}
              <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300 font-medium">
                kaip veikia
              </Link>
              ,{' '}
              <Link to="/telegram" className="text-blue-400 hover:text-blue-300 font-medium">
                Telegram botas
              </Link>
              ,{' '}
              <Link to="/atsakiklis" className="text-blue-400 hover:text-blue-300 font-medium">
                DM atsakiklis
              </Link>
              .
            </li>
          </ul>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{useCase.description}</p>
                <p className="text-purple-300 text-sm font-medium mb-4">→ {useCase.outcome}</p>
                
                <ul className="space-y-2">
                  {useCase.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-4">
              Nori pamatyti, kaip tai veikia praktiškai? Pradėk su
              {' '}<span className="text-green-400 font-semibold">iki 1 000 kreditų</span>{' '}
              — be įsipareigojimų, be kortelės.
            </p>
            <a
              href="https://app.clarivex.ai/auth"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-xl transition-all"
            >
              Išbandyti nemokamai
              <Sparkles className="w-4 h-4" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Toliau skaitykite:{' '}
              <Link to="/features" className="text-blue-400 hover:text-blue-300 font-medium">funkcijos</Link>
              {' · '}
              <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300 font-medium">kaip veikia</Link>
              {' · '}
              <Link to="/kainos" className="text-blue-400 hover:text-blue-300 font-medium">kainos</Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
