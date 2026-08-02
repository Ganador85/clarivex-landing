import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, Crown, ArrowRight, Calculator, Building2, Gift, Smartphone } from 'lucide-react';

const plans = [
  {
    price: 5,
    credits: 5000,
    bonus: 0,
    bonusText: null,
    highlight: false,
    icon: Zap,
    minBadge: 'Min. kortelė'
  },
  {
    price: 10,
    credits: 10000,
    bonus: 500,
    bonusText: '+5% bonus',
    highlight: true,
    icon: Sparkles
  },
  {
    price: 20,
    credits: 20000,
    bonus: 2000,
    bonusText: '+10% bonus',
    highlight: false,
    icon: Crown
  },
];

const features = [
  'Visi AI modeliai (GPT-5.6 šeima tekstui, GPT Image 2 ir Nano Banana 2 vaizdams)',
  'Balso komandos lietuviškai',
  'Instagram + Facebook postai (iki 25/d.)*',
  'El. pašto valdymas su AI',
  'Paveikslėlių generavimas',
  'Dokumentų analizė (PDF, Word)',
  'Ilgalaikė AI atmintis',
  'Telegram botas',
  'Kalendorius ir planavimas',
  'Prioritetinis palaikymas'
];

const usageExamples = [
  { name: 'AI žinutė (1 atsakymas)', credits: '~1-15', sub: 'priklauso nuo modelio', icon: '💬' },
  { name: 'Postas (tekstas)', credits: '~5-15', sub: 'AI generavimas', icon: '📝' },
  { name: 'Posto publikavimas', credits: '15', sub: 'IG / FB / Blog', icon: '📤' },
  { name: 'DM arba komentaro atsakymas', credits: '~2-10', sub: 'AI siūlymas', icon: '💬' },
  { name: 'Paveikslėlis (AI)', credits: '~15–130', sub: 'GPT Image 2 (tipinė)', icon: '🎨' },
  { name: 'El. laiškas (atsakymas + siuntimas)', credits: '~5-12', sub: 'AI + 2.5 kr siuntimui', icon: '📧' },
  { name: 'Balso komanda', credits: '~10-25', sub: 'transkripcija + AI', icon: '🎤' },
  { name: 'PDF analizė (10 psl.)', credits: '~5-15', sub: 'AI skaitymas', icon: '📄' },
];

const Pricing = () => {
  const [customAmount, setCustomAmount] = useState('');

  const handlePurchase = (packageId) => {
    // Redirect to billing page - it will handle auth check
    window.location.href = `https://app.clarivex.ai/billing?package=${packageId}`;
  };

  const handleCustomPurchase = (amount) => {
    if (!amount || parseInt(amount) < 1) return;
    window.location.href = `https://app.clarivex.ai/billing?custom=${amount}`;
  };

  const handleBankTransfer = () => {
    window.location.href = 'https://app.clarivex.ai/billing?bank=true';
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
  };
  
  const calculateCustomCredits = () => {
    const amount = parseFloat(customAmount);
    if (!amount || amount < 1) return { base: 0, bonus: 0, total: 0 };
    const base = amount * 1000;
    const bonusPercent = amount >= 50 ? 15 : amount >= 20 ? 10 : amount >= 10 ? 5 : 0;
    const bonus = Math.floor(base * bonusPercent / 100);
    return { base, bonus, total: base + bonus, bonusPercent };
  };

  const customCredits = calculateCustomCredits();

  return (
    <section id="pricing" className="cvx-content-visibility py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6"
          >
            <Calculator className="w-4 h-4" />
            Paprasta kainodara
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Moki tik už tai,</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ką naudoji
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Jokių mėnesinių mokesčių ir kontraktų.
            Papildyk kreditus tada, kai reikia, ir naudok juos visoms funkcijoms:
            AI pokalbiams, socialiniams postams, paveikslėliams, el. paštui ir dar daugiau.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full text-gray-300">
              <span className="font-bold text-blue-400">1 € = 1 000 kreditų</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400">
              <span>✓ €0 pradžia</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400">
              <span>✓ nuo €1 pavedimas</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400">
              <span>✓ nuo €5 kortelė</span>
            </div>
          </div>
        </motion.div>

        {/* FREE STARTER Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-2 border-green-500/50 rounded-3xl p-8 overflow-hidden">
              {/* Badge */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-b-xl shadow-lg">
                🎁 PRADĖK SU NEMOKAMAIS KREDITAIS
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                {/* Left side - pricing */}
                <div className="text-center md:text-left">
                  <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                    <span className="text-6xl font-bold text-green-400">€0</span>
                    <span className="text-gray-400 text-lg">/ pradžia</span>
                  </div>
                  <p className="text-2xl font-semibold text-white mb-1">Iki 1 000 kreditų dovanų</p>
                  <p className="text-gray-400">
                    Registruokis, užbaik profilį ir gauk
                    iki <span className="text-green-400 font-semibold">1 000 kreditų</span>.
                    Nori balsu? Susiek Telegram ir gauk papildomų kreditų. Be rizikos, be kortelės.
                  </p>
                </div>
                
                {/* Middle - features */}
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">
                    <Check className="w-4 h-4" />
                    Visos funkcijos
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">
                    <Check className="w-4 h-4" />
                    Neribotas galiojimas
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">
                    <Check className="w-4 h-4" />
                    Jokių įsipareigojimų
                  </div>
                </div>
                
                {/* Right side - CTA */}
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => { window.location.href = 'https://app.clarivex.ai/auth'; }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300"
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    Pradėti nemokamai
                  </Button>
                  <p className="text-xs text-gray-500 text-center">Nereikia kortelės</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.price}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative group ${plan.highlight ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Glow for highlighted */}
              {plan.highlight && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
              )}
              
              <div className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-3xl p-6 flex flex-col h-full transition-all duration-300 hover:border-blue-400 ${
                plan.highlight ? 'border-blue-500 shadow-xl shadow-blue-500/10' : 'border-gray-700/50'
              }`}>
                {/* Badge */}
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
                    ⭐ Populiariausias
                  </div>
                )}
                {plan.minBadge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full border border-gray-600">
                    💳 {plan.minBadge}
                  </div>
                )}
                
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.highlight 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500' 
                      : 'bg-gray-700/50 border border-gray-600'
                  }`}>
                    <plan.icon className={`w-6 h-6 ${plan.highlight ? 'text-white' : 'text-gray-300'}`} />
                  </div>
                </div>
                
                {/* Price */}
                <div className="text-center mb-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-white">€{plan.price}</span>
                  </div>
                  <p className="text-lg text-gray-300 mt-1">
                    {(plan.credits + plan.bonus).toLocaleString('lt-LT')} kreditų
                  </p>
                  {plan.bonusText && (
                    <span className="inline-block mt-2 px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium rounded-full">
                      {plan.bonusText}
                    </span>
                  )}
                </div>
                
                {/* Divider */}
                <div className="border-t border-gray-700/50 my-4" />
                
                {/* Features preview */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {features.slice(0, 5).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  <li className="text-xs text-gray-500 pl-6">...ir daugiau</li>
                </ul>
                
                {/* Button */}
                <Button
                  onClick={() => handlePurchase(`credits_${plan.price}`)}
                  className={`w-full py-5 rounded-xl font-medium transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600'
                  }`}
                >
                  Pasirinkti
                </Button>
              </div>
            </motion.div>
          ))}
          
          {/* Custom Amount */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative group"
          >
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 flex flex-col h-full hover:border-blue-400 transition-all duration-300">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              
              {/* Custom Input */}
              <div className="text-center mb-4">
                <p className="text-sm text-gray-400 mb-2">Įvesk sumą</p>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-500">€</span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="50"
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-xl text-white text-3xl font-bold p-4 pl-10 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <p className="text-lg text-gray-300 mt-3">
                  {customCredits.total > 0 
                    ? `${customCredits.total.toLocaleString('lt-LT')} kreditų`
                    : '— kreditų'
                  }
                </p>
                {customCredits.bonusPercent > 0 && (
                  <span className="inline-block mt-2 px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium rounded-full">
                    +{customCredits.bonusPercent}% bonus (+{customCredits.bonus.toLocaleString('lt-LT')})
                  </span>
                )}
              </div>
              
              {/* Divider */}
              <div className="border-t border-gray-700/50 my-4" />
              
              {/* Bonus tiers */}
              <div className="space-y-2 mb-6 flex-grow">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Bonus pakopos:</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">€10+</span>
                  <span className="text-green-400">+5%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">€20+</span>
                  <span className="text-green-400">+10%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">€50+</span>
                  <span className="text-green-400">+15%</span>
                </div>
              </div>
              
              {/* Button */}
              <Button
                onClick={() => handleCustomPurchase(customAmount)}
                disabled={!customAmount || parseInt(customAmount) < 1}
                className="w-full py-5 rounded-xl font-medium bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                Pirkti
              </Button>
            </div>
          </motion.div>

          {/* Bank Transfer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative group"
          >
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 flex flex-col h-full hover:border-emerald-400 transition-all duration-300">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                nuo €1
              </div>
              
              {/* Icon */}
              <div className="flex justify-center mb-4 mt-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              
              {/* Title */}
              <div className="text-center mb-4">
                <p className="text-xl font-bold text-white mb-1">🏦 Pavedimu</p>
                <p className="text-lg font-semibold text-emerald-400 mb-2">Be komisinių!</p>
                <p className="text-sm text-gray-400">
                  Idealus mažoms sumoms
                </p>
              </div>
              
              {/* Divider */}
              <div className="border-t border-gray-700/50 my-4" />
              
              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  SEPA pervedimai
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Wise banko sąskaita
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Sąskaita el. paštu
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Tie patys bonus %
                </li>
              </ul>
              
              <div className="text-center text-xs text-gray-500 mb-4">
                ⏱️ Kreditai pridedami per 24 val.
              </div>
              
              {/* Button */}
              <Button
                onClick={handleBankTransfer}
                className="w-full py-5 rounded-xl font-medium bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 transition-all duration-300"
              >
                Gauti sąskaitą
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Usage Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            💡 Kiek kainuoja veiksmai?
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {usageExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors"
              >
                <div className="text-2xl mb-2">{example.icon}</div>
                <p className="text-xs text-gray-400 mb-1 leading-tight">{example.name}</p>
                <p className="text-lg font-bold text-blue-400">{example.credits} kr</p>
                {example.sub && (
                  <p className="text-xs text-gray-500 mt-0.5">{example.sub}</p>
                )}
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-6">
            * Tikslus skaičius priklauso nuo modelio ir turinio. Pilna kainodara —{' '}
            <Link to="/kainos" className="text-blue-400 hover:text-blue-300">/kainos</Link>
          </p>
        </motion.div>

        {/* All Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Visos funkcijos įtrauktos į kiekvieną planą
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full"
              >
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-xs text-gray-500 mt-6">
            * Meta platformos limitas, ne Clarivex apribojimas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
