import React from 'react';
import { Link } from 'react-router-dom';

const SeoContent = () => {
  return (
    <section id="apie-clarivex" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-12 text-gray-300 leading-relaxed">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kam skirtas Clarivex AI?
            </h2>
            <p className="text-lg text-gray-400 mb-3">
              Smulkiam verslui ir komandoms, kurioms nuolat kaupiasi el. paštas, socialinių tinklų įrašai ir klientų žinutės.
            </p>
            <p className="text-base text-gray-500 mb-6">
              Clarivex sutrumpina kelią nuo idėjos iki paruošto juodraščio — lietuvių kalba, viename įrankyje.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Kaip Clarivex AI padeda verslui
            </h2>
            <p className="text-base text-gray-500 max-w-3xl mx-auto mb-3">
              AI paruošia planą, tekstą ir atsakymų gaires. Jūs pasirenkate toną ir patvirtinate veiksmą.
            </p>
            <p className="text-base text-gray-500 max-w-3xl mx-auto mb-2 font-medium text-gray-400">
              Pagrindinė nauda:
            </p>
            <ul className="text-base text-gray-500 max-w-3xl mx-auto mb-4 list-disc pl-5 space-y-1 text-left">
              <li>mažiau rankinio rašymo ir peržiūrų,</li>
              <li>mažiau šokinėjimo tarp įrankių,</li>
              <li>aiškesnė komunikacija komandoje ir su klientais.</li>
            </ul>
            <p className="text-base text-gray-500 max-w-3xl mx-auto">
              Plačiau —{' '}
              <Link to="/nauda" className="text-blue-400 hover:text-blue-300">
                Clarivex AI nauda verslui
              </Link>
              {' (scenarijai ir pavyzdžiai).'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Pagrindinės funkcijos</h2>
            <p className="mb-3">
              Viena vieta kasdieniam turiniui, komunikacijai ir AI užduotims — be atskirų prenumeratų už kiekvieną kanalą.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>El. laiškų juodraščiai, atsakymai ir darbo taisyklės</li>
              <li>Socialinių tinklų įrašų kūrimas, planavimas ir publikavimas</li>
              <li>Priminimai, užrašai, idėjos ir balso komandos</li>
              <li>Paveikslėlių generavimas ir dokumentų analizė</li>
            </ul>
            <p className="mt-4">
              Peržiūrėkite visas{' '}
              <Link to="/features" className="text-blue-400 hover:text-blue-300">
                Clarivex AI funkcijas verslui
              </Link>
              {' — automatizuokite el. paštą, social media ir pasikartojančius darbus.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Kreditų sistema ir kainodara</h2>
            <p className="mb-3">
              Nėra privalomo mėnesinio plano. Papildote kreditus, kai reikia — galite pradėti nuo nedidelio testo.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>1 € = 1 000 kreditų</li>
              <li>Nauji vartotojai gauna kreditų startui</li>
              <li>Nepanaudoti kreditai nesibaigia</li>
              <li>Mokate tik už realiai atliktus AI veiksmus</li>
            </ul>
            <p className="mt-4">
              Peržiūrėkite{' '}
              <Link to="/kainos" className="text-blue-400 hover:text-blue-300">
                Clarivex AI kainas
              </Link>
              {' ir '}
              <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">
                kaip veikia kreditų sistema
              </Link>
              {' platformoje — mokate tik už realų naudojimą.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Integracijos ir diegimas</h2>
            <p className="mb-3">
              Clarivex supranta lietuvių kalbą ir padeda pereiti nuo komandos iki rezultato per kelias sekundes.
              Dirbkite naršyklėje arba telefone.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Instagram ir Facebook: postai, žinutės ir komentarai</li>
              <li>El. pašto darbo eiga vienoje vietoje</li>
              <li>Prekių katalogas iš Shopify, WooCommerce ar lentelės</li>
              <li>Svetainė su savu domenu ir gyvu pokalbiu</li>
              <li>Balso komandos ir priminimai telefone</li>
            </ul>
            <p className="mt-4">
              Parduodantiems — {' '}
              <Link to="/prekiu-katalogas" className="text-blue-400 hover:text-blue-300">
                prekių katalogas su AI paieška
              </Link>
              {'. DM ir komentarams — '}
              <Link to="/atsakiklis" className="text-blue-400 hover:text-blue-300">
                AI atsakiklis Messenger ir Instagram
              </Link>
              .{' '}
              <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">
                Kaip veikia Clarivex AI integracija
              </Link>
              {' — nuo registracijos iki pirmo rezultato.'}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Ką automatizuoja Clarivex?</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Socialinių tinklų turinio planavimą ir publikavimą</li>
              <li>El. laiškų rašymą, atsakymus ir taisykles</li>
              <li>Priminimus, užrašus ir idėjų kaupimą</li>
              <li>Paveikslėlių generavimą ir dokumentų analizę</li>
            </ul>
          </div>
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Kam naudingas AI asistentas?</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Mažoms įmonėms ir e‑parduotuvėms</li>
              <li>Freelancer’iams ir rinkodaros specialistams</li>
              <li>Agentūroms, dirbančioms su keliais klientais</li>
              <li>Komandoms, kurios nori aiškios komunikacijos</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-3">Kaip pradėti naudotis Clarivex</h2>
          <p className="text-gray-300">
            Pirmam bandymui nereikia ilgo pasiruošimo. Dažniausiai užtenka pasirinkti vieną procesą ir
            jį išsibandyti su nemokamais kreditais.
          </p>
          <ol className="mt-4 space-y-3 list-decimal pl-5 text-gray-300">
            <li>Užsiregistruokite ir gaukite startinius kreditus.</li>
            <li>Išbandykite vieną aiškią užduotį: el. laišką, postą, priminimą arba Telegram komandą.</li>
            <li>Įvertinkite rezultatą ir tik tada plėskite naudojimą į kitus procesus.</li>
          </ol>
          <p className="mt-3">
            Pradžiai naudingi puslapiai:{' '}
            <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">
              Kaip veikia
            </Link>
            {' · '}
            <Link to="/features" className="text-blue-400 hover:text-blue-300">
              Funkcijos
            </Link>
            {' · '}
            <Link to="/kainos" className="text-blue-400 hover:text-blue-300">
              Kainos
            </Link>.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-3">Dažniausiai užduodami klausimai</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Ar Clarivex veikia lietuviškai?</h3>
              <p className="text-sm md:text-base">
                Taip — tekstui ir balso komandoms. Tinka kasdienėms užduotims ir komunikacijai su klientais.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Kaip veikia kreditų sistema?</h3>
              <p className="text-sm md:text-base">
                1 € ≈ 1 000 kreditų. Kreditai sunaudojami AI veiksmams; nepanaudoti nesibaigia pagal dabartinę politiką.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Ar reikia kortelės registracijai?</h3>
              <p className="text-sm md:text-base">
                Ne. Galite pradėti nemokamai; nauji vartotojai gauna startinių kreditų paketą.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Ar mano duomenys saugūs?</h3>
              <p className="text-sm md:text-base">
                Duomenys šifruojami; socialiniai tinklai jungiami per OAuth. El. paštui naudojamas saugus prisijungimas (pvz. IMAP / programų slaptažodžiai).
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Paruošti pradėti?</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://app.clarivex.ai/auth"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all"
            >
              Išbandyti Clarivex
            </a>
            <Link
              to="/kainos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-semibold rounded-xl transition-all"
            >
              Peržiūrėti kainas
            </Link>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">Naudingos nuorodos</h3>
          <ul className="space-y-2 text-gray-300 max-w-md mx-auto text-left">
            <li><Link to="/features" className="text-blue-400 hover:text-blue-300">Clarivex AI funkcijos verslui</Link></li>
            <li><Link to="/telegram" className="text-blue-400 hover:text-blue-300">Telegram AI botas lietuvių kalba</Link></li>
            <li><Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">Kaip veikia</Link></li>
            <li><Link to="/nauda" className="text-blue-400 hover:text-blue-300">Privalumai verslui</Link></li>
            <li><Link to="/atsakiklis" className="text-blue-400 hover:text-blue-300">AI atsakiklis (DM)</Link></li>
            <li><Link to="/kainos" className="text-blue-400 hover:text-blue-300">Kainodara</Link></li>
            <li><Link to="/resursai" className="text-blue-400 hover:text-blue-300">AI resursų centras</Link></li>
            <li><Link to="/duk" className="text-blue-400 hover:text-blue-300">DUK</Link></li>
            <li><Link to="/statusas" className="text-blue-400 hover:text-blue-300">Sistemos statusas</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SeoContent;
