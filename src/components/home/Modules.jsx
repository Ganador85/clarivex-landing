import Reveal, { SectionHead } from './Reveal'

/* Kiekvienas įrašas atitinka veikiantį modulį programoje. */
const groups = [
  {
    name: 'Bendravimas',
    items: [
      ['Pokalbiai', 'tekstu ir balsu, su atmintimi'],
      ['Gautieji', 'žinutės iš socialinių tinklų vienoje vietoje'],
      ['El. paštas', 'AI atsakymai, taisyklės ir filtrai'],
      ['Gyvas pokalbis', 'konsultanto langas tavo svetainėje'],
      ['Rezervacijos', 'AI priima ir patvirtina laiką'],
    ],
  },
  {
    name: 'Turinys',
    items: [
      ['Postų kūrimas', 'tekstas, karuselės, planas'],
      ['Kalendorius', 'planavimas ir patvirtinimo eiga'],
      ['Blogai', 'straipsniai į svetainę ar WordPress'],
      ['Vizualai', 'generavimas ir redagavimas'],
      ['Turinio biblioteka', 'viskas, kas sukurta, vienoje vietoje'],
      ['Vertėjas', 'dokumentai ir tekstai'],
    ],
  },
  {
    name: 'Prekyba',
    items: [
      ['Prekių sandėlis', 'importas, aprašymas, paieška'],
      ['Produktai 360°', 'sukamas prekės vaizdas'],
      ['Virtualus matavimas', 'drabužis ant nuotraukos'],
      ['Pardavimai svetainėje', 'kuponai, skaitmeninės prekės, paslaugos'],
      ['Reklamos', 'kampanijų kūrimas ir priežiūra'],
    ],
  },
  {
    name: 'Verslo įrankiai',
    items: [
      ['Svetainių kūrėjas', 'svetainė su savu domenu'],
      ['Dokumentai', 'pasiūlymai, sąskaitos, sutarčių analizė'],
      ['Svetainės auditas', 'SEO ir greičio patikra'],
      ['Stebėjimo agentai', 'seka šaltinius ir praneša, kas nauja'],
      ['Analitika', 'kas veikia, o kas ne'],
      ['Failų siuntimas', 'dideli failai klientams'],
    ],
  },
]

export default function Modules() {
  return (
    <section id="moduliai" className="relative bg-space-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Apimtis"
          title="Kiekvienas įrankis — jau viduje"
          lead="Nieko nereikia diegti ar pirkti atskirai. Įsijungi tai, ko reikia tavo veiklai, ir moki tik už tai, ką naudoji."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, gi) => (
            <Reveal key={g.name} delay={gi * 0.06}>
              <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6">
                <h3 className="mb-5 flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-aurora-blue" />
                  {g.name}
                </h3>
                <ul className="space-y-4">
                  {g.items.map(([name, note]) => (
                    <li key={name}>
                      <p className="text-[14.5px] font-medium leading-snug text-white/90">{name}</p>
                      <p className="mt-0.5 text-[12.5px] leading-snug text-white/40">{note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
