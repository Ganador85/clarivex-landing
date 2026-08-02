import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig, getPrimaryPageMeta } from '@/content/seoPages';

const PrivacyPolicy = () => {
  const canonicalUrl = `${siteConfig.url}/privatumas`;
  const socialImage = siteConfig.socialImage;
  const fm = getPrimaryPageMeta('/privatumas');
  const pageDescription =
    fm?.description ??
    'Privatumo politika Clarivex AI: duomenų rinkimas, slapukai, BDAR teisės ir kontaktai duomenų klausimais.';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privatumo politika — Clarivex',
    url: canonicalUrl,
    description: pageDescription,
    inLanguage: 'lt-LT',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
  };

  return (
    <>
      <Helmet>
        <title>Clarivex privatumo politika - kaip tvarkomi jūsų duomenys</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Clarivex privatumo politika - kaip tvarkomi jūsų duomenys" />
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
        <meta name="twitter:title" content="Clarivex privatumo politika - kaip tvarkomi jūsų duomenys" />
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
          <h1 className="text-4xl font-bold mb-2">Privatumo politika</h1>
          <p className="text-gray-400 mb-8">Paskutinį kartą atnaujinta: 2026 m. sausio 2 d.</p>

          <div className="prose prose-invert prose-gray max-w-none space-y-8">
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Bendrosios nuostatos</h2>
              <p className="text-gray-300 leading-relaxed">
                Ši privatumo politika (toliau – Politika) nustato, kaip MB „Clarivex" (toliau – Clarivex, mes, mūsų) 
                renka, naudoja, saugo ir atskleidžia informaciją, gautą iš svetainės clarivex.ai ir susijusių 
                paslaugų (toliau – Paslaugos) naudotojų.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Naudodamiesi mūsų Paslaugomis, jūs sutinkate su šia Privatumo politika. Jei nesutinkate su 
                šios Politikos sąlygomis, prašome nesinaudoti mūsų Paslaugomis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Duomenų valdytojas</h2>
              <p className="text-gray-300 leading-relaxed">
                Jūsų asmens duomenų valdytojas yra:<br />
                <strong className="text-white">MB „Clarivex"</strong><br />
                El. paštas: <a href="mailto:info@clarivex.ai" className="text-blue-400 hover:text-blue-300">info@clarivex.ai</a><br />
                Svetainė: <a href={siteConfig.url} className="text-blue-400 hover:text-blue-300">clarivex.ai</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Kokius duomenis renkame</h2>
              
              <h3 className="text-xl font-medium text-white mt-6 mb-3">3.1. Duomenys, kuriuos pateikiate tiesiogiai:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Registracijos duomenys: vardas, el. pašto adresas, slaptažodis</li>
                <li>Profilio informacija: nuotrauka, įmonės pavadinimas, kontaktiniai duomenys</li>
                <li>Mokėjimo duomenys: mokėjimo kortelės informacija (apdorojama per Stripe)</li>
                <li>Komunikacijos duomenys: žinutės, užklausos, atsiliepimai</li>
                <li>Įkelti failai: dokumentai, nuotraukos, vaizdo įrašai</li>
              </ul>

              <h3 className="text-xl font-medium text-white mt-6 mb-3">3.2. Automatiškai renkami duomenys:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Įrenginio informacija: IP adresas, naršyklės tipas, operacinė sistema</li>
                <li>Naudojimo duomenys: puslapių peržiūros, funkcijų naudojimas, sesijos trukmė</li>
                <li>Slapukai ir panašios technologijos</li>
              </ul>

              <h3 className="text-xl font-medium text-white mt-6 mb-3">3.3. AI apdorojami duomenys:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Balso įrašai (konvertuojami į tekstą ir ištrinami)</li>
                <li>Pokalbių istorija su AI asistentu</li>
                <li>Jūsų nurodyti prisiminimai ir instrukcijos AI</li>
                <li>Socialinių tinklų paskyrų duomenys (su jūsų leidimu)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Kaip naudojame jūsų duomenis</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Jūsų duomenis naudojame šiais tikslais:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong className="text-white">Paslaugų teikimui:</strong> AI asistento funkcionalumui, postų publikavimui, priminimams</li>
                <li><strong className="text-white">Personalizavimui:</strong> AI mokymuisi iš jūsų nurodymų, kad geriau suprastų jūsų poreikius</li>
                <li><strong className="text-white">Komunikacijai:</strong> atsakymams į užklausas, pranešimams apie paslaugas</li>
                <li><strong className="text-white">Mokėjimų apdorojimui:</strong> kreditų pirkimui ir naudojimui</li>
                <li><strong className="text-white">Paslaugų gerinimui:</strong> analizei ir tobulinimui</li>
                <li><strong className="text-white">Saugumui:</strong> sukčiavimo prevencijai ir paskyros apsaugai</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Duomenų saugojimas ir apsauga</h2>
              <p className="text-gray-300 leading-relaxed">
                Jūsų duomenys saugomi saugiuose serveriuose, naudojant šiuolaikines šifravimo technologijas. 
                Taikome organizacines ir technines priemones duomenų apsaugai užtikrinti:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>SSL/TLS šifravimas duomenų perdavimui</li>
                <li>Duomenų šifravimas ramybės būsenoje (at rest)</li>
                <li>Reguliarios saugumo peržiūros ir atnaujinimai</li>
                <li>Prieigos kontrolė ir autentifikacija</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong className="text-white">Duomenų saugojimo trukmė:</strong> Jūsų duomenis saugome tol, 
                kol turite aktyvią paskyrą arba kol to reikia paslaugoms teikti. Ištrynę paskyrą, 
                jūsų duomenis ištrinsime per 30 dienų, išskyrus atvejus, kai įstatymai reikalauja ilgesnio saugojimo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Duomenų dalijimasis</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Jūsų duomenis galime dalintis su šiomis trečiosiomis šalimis:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong className="text-white">OpenAI:</strong> AI modelių veikimui (GPT, GPT Image 2, Whisper)</li>
                <li><strong className="text-white">Stripe:</strong> mokėjimų apdorojimui</li>
                <li><strong className="text-white">Cloudflare:</strong> turinio pristatymui ir apsaugai</li>
                <li><strong className="text-white">Meta (Facebook/Instagram):</strong> socialinių tinklų integracijai (su jūsų leidimu)</li>
                <li><strong className="text-white">Google:</strong> Gmail integracijai ir Gemini paveikslėlių generavimui (su jūsų leidimu)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Neparduodame ir nenuomojame jūsų asmens duomenų trečiosioms šalims rinkodaros tikslais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Google API naudojimas</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Clarivex naudoja Google API paslaugas el. pašto valdymo funkcijoms (Gmail). 
                Mūsų programėlės naudojimasis informacija, gauta iš Google API, atitinka{' '}
                <a 
                  href="https://developers.google.com/terms/api-services-user-data-policy" 
                  className="text-blue-400 hover:text-blue-300" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer"
                >
                  Google API Services User Data Policy
                </a>, 
                įskaitant Limited Use reikalavimus.
              </p>
              
              <h3 className="text-xl font-medium text-white mt-6 mb-3">Kaip naudojame Gmail duomenis:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Laiškų skaitymas ir rodymas programėlėje</li>
                <li>AI atsakymų generavimas (duomenys naudojami tik konkrečiam atsakymui sukurti)</li>
                <li>Laiškų siuntimas jūsų vardu (su jūsų leidimu)</li>
              </ul>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mt-6">
                <p className="text-blue-200 font-medium">Svarbios garantijos:</p>
                <ul className="list-disc list-inside text-blue-200/80 text-sm mt-2 space-y-1">
                  <li>Gmail duomenys NENAUDOJAMI AI modelių apmokymui</li>
                  <li>Gmail duomenys nesiunčiami trečiosioms šalims (išskyrus OpenAI, tik atsakymo generavimui)</li>
                  <li>Galite bet kada atšaukti prieigą ir ištrinti duomenis</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Jūsų teisės</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Pagal BDAR (Bendrąjį duomenų apsaugos reglamentą) turite šias teises:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong className="text-white">Teisė susipažinti:</strong> gauti informaciją apie tvarkomus duomenis</li>
                <li><strong className="text-white">Teisė ištaisyti:</strong> prašyti pataisyti netikslius duomenis</li>
                <li><strong className="text-white">Teisė ištrinti:</strong> prašyti ištrinti jūsų duomenis („teisė būti pamirštam")</li>
                <li><strong className="text-white">Teisė apriboti:</strong> prašyti apriboti duomenų tvarkymą</li>
                <li><strong className="text-white">Teisė perkelti:</strong> gauti savo duomenis struktūrizuotu formatu</li>
                <li><strong className="text-white">Teisė nesutikti:</strong> nesutikti su duomenų tvarkymu tam tikrais tikslais</li>
                <li><strong className="text-white">Teisė atšaukti sutikimą:</strong> bet kada atšaukti duotą sutikimą</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Norėdami pasinaudoti šiomis teisėmis, susisiekite su mumis el. paštu: 
                <a href="mailto:info@clarivex.ai" className="text-blue-400 hover:text-blue-300 ml-1">info@clarivex.ai</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Slapukai</h2>
              <p className="text-gray-300 leading-relaxed">
                Naudojame slapukus ir panašias technologijas, kad pagerintume jūsų patirtį. 
                Slapukai yra maži tekstiniai failai, saugomi jūsų įrenginyje.
              </p>
              <h3 className="text-xl font-medium text-white mt-6 mb-3">Naudojami slapukai:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong className="text-white">Būtinieji:</strong> reikalingi svetainės veikimui (sesijos, autentifikacija)</li>
                <li><strong className="text-white">Funkciniai:</strong> įsimena jūsų nustatymus (kalba, tema)</li>
                <li><strong className="text-white">Analitiniai:</strong> padeda suprasti, kaip naudojatės svetaine</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Galite valdyti slapukus savo naršyklės nustatymuose. Tačiau atjungus būtinuosius 
                slapukus, kai kurios funkcijos gali neveikti.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Vaikų privatumas</h2>
              <p className="text-gray-300 leading-relaxed">
                Mūsų Paslaugos nėra skirtos asmenims iki 16 metų. Sąmoningai nerenkame asmens 
                duomenų iš vaikų. Jei sužinosime, kad surinkome vaiko duomenis, nedelsdami juos ištrinsime.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Tarptautiniai duomenų perdavimai</h2>
              <p className="text-gray-300 leading-relaxed">
                Jūsų duomenys gali būti perduodami ir apdorojami serveriuose, esančiuose už Europos 
                ekonominės erdvės (EEE) ribų, ypač JAV (OpenAI, Cloudflare). Tokiais atvejais 
                užtikriname tinkamą apsaugos lygį pagal BDAR reikalavimus, naudodami standartines 
                sutarčių sąlygas ar kitas tinkamas apsaugos priemones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Politikos pakeitimai</h2>
              <p className="text-gray-300 leading-relaxed">
                Galime periodiškai atnaujinti šią Privatumo politiką. Apie reikšmingus pakeitimus 
                pranešime el. paštu arba per mūsų svetainę. Rekomenduojame reguliariai peržiūrėti 
                šią Politiką.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Kontaktai</h2>
              <p className="text-gray-300 leading-relaxed">
                Jei turite klausimų ar nusiskundimų dėl šios Privatumo politikos ar jūsų duomenų 
                tvarkymo, susisiekite su mumis:
              </p>
              <div className="bg-gray-900 rounded-lg p-6 mt-4">
                <p className="text-white font-medium">MB „Clarivex"</p>
                <p className="text-gray-300 mt-2">
                  El. paštas: <a href="mailto:info@clarivex.ai" className="text-blue-400 hover:text-blue-300">info@clarivex.ai</a>
                </p>
                <p className="text-gray-300">
                  Svetainė: <a href={siteConfig.url} className="text-blue-400 hover:text-blue-300">clarivex.ai</a>
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                Taip pat turite teisę pateikti skundą Valstybinei duomenų apsaugos inspekcijai 
                (<a href="https://vdai.lrv.lt" className="text-blue-400 hover:text-blue-300" target="_blank" rel="nofollow noopener noreferrer">vdai.lrv.lt</a>), 
                jei manote, kad jūsų duomenų apsaugos teisės buvo pažeistos.
              </p>
            </section>

          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-gray-500">
            <p>© 2026 Clarivex. Visos teisės saugomos.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;

