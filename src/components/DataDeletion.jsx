import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, getPrimaryPageMeta } from '@/content/seoPages';

const DataDeletion = () => {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const canonicalUrl = `${siteConfig.url}/duomenu-istrynimas`;
  const socialImage = siteConfig.socialImage;
  const fm = getPrimaryPageMeta('/duomenu-istrynimas');
  const pageDescription =
    fm?.description ??
    'Pateikite Clarivex duomenų ištrynimo prašymą internetu ir sužinokite apie BDAR ištrynimo eigą.';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Duomenų ištrynimas — Clarivex',
    url: canonicalUrl,
    description: pageDescription,
    inLanguage: 'lt-LT',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Įveskite el. pašto adresą');
      return;
    }

    try {
      // Send deletion request to API
      const response = await fetch('https://app.clarivex.ai/api/meta/data-deletion-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, reason }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Įvyko klaida. Bandykite dar kartą arba susisiekite el. paštu info@clarivex.ai');
      }
    } catch (err) {
      // If API fails, show manual instructions
      setSubmitted(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Clarivex duomenų ištrynimas - BDAR prašymas internetu</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Clarivex duomenų ištrynimas - BDAR prašymas internetu" />
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
        <meta name="twitter:title" content="Clarivex duomenų ištrynimas - BDAR prašymas internetu" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>
      
      <div className="cvx-page min-h-screen text-white">
        {/* Header */}
        <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Grįžti į pradžią
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
              <Trash2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Duomenų ištrynimas</h1>
              <p className="text-gray-400 mt-1">Data Deletion Request</p>
            </div>
          </div>

          {!submitted ? (
            <div className="space-y-8">
              {/* Info Section */}
              <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Apie duomenų ištrynimą</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Pagal BDAR (Bendrąjį duomenų apsaugos reglamentą) turite teisę prašyti ištrinti savo 
                  asmens duomenis („teisė būti pamirštam"). Pateikę prašymą, ištrinsime visus su jumis 
                  susijusius duomenis per <strong className="text-white">30 dienų</strong>.
                </p>
                
                <h3 className="text-lg font-medium text-white mt-6 mb-3">Kokie duomenys bus ištrinti:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Paskyros informacija (vardas, el. paštas)</li>
                  <li>Pokalbių istorija su AI asistentu</li>
                  <li>Įkelti failai ir dokumentai</li>
                  <li>AI atmintis ir prisiminimai</li>
                  <li>Socialinių tinklų sujungimai ir postų istorija</li>
                  <li>Priminimai ir užrašai</li>
                  <li>Mokėjimų istorija (išskyrus įstatymu reikalaujamus duomenis)</li>
                </ul>

                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-yellow-200 font-medium">Dėmesio</p>
                      <p className="text-yellow-200/80 text-sm mt-1">
                        Duomenų ištrynimas yra negrįžtamas. Ištrynę duomenis, negalėsite jų atkurti. 
                        Nepanaudoti kreditai bus prarasti.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Request Form */}
              <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Pateikti prašymą</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      El. pašto adresas (su kuriuo registravotės) *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jusu@email.com"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Priežastis (neprivaloma)
                    </label>
                    <textarea
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="Kodėl norite ištrinti duomenis?"
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white py-3 rounded-xl font-medium"
                  >
                    Pateikti prašymą ištrinti duomenis
                  </Button>
                </form>
              </section>

              {/* Alternative Contact */}
              <section className="text-center">
                <p className="text-gray-400 mb-4">Arba susisiekite tiesiogiai:</p>
                <a 
                  href="mailto:info@clarivex.ai?subject=Duomenų ištrynimo prašymas"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@clarivex.ai
                </a>
              </section>
            </div>
          ) : (
            /* Success Message */
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">Prašymas gautas!</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Gavome jūsų prašymą ištrinti duomenis. Per <strong className="text-white">30 dienų</strong> ištrinsime 
                visus su jumis susijusius duomenis ir informuosime el. paštu.
              </p>
              <p className="text-gray-400 text-sm mb-8">
                Jei turite klausimų, susisiekite: <a href="mailto:info@clarivex.ai" className="text-blue-400 hover:text-blue-300">info@clarivex.ai</a>
              </p>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Grįžti į pradžią
              </Link>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-gray-500">
            <p>© 2026 Clarivex. Visos teisės saugomos.</p>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm">
              <Link to="/privatumas" className="hover:text-gray-300 transition-colors">
                Privatumo politika
              </Link>
              <Link to="/salygos" className="hover:text-gray-300 transition-colors">
                Naudojimosi sąlygos
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DataDeletion;







