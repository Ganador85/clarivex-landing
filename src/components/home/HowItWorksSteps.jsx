import Reveal, { SectionHead } from './Reveal'

const steps = [
  {
    n: '01',
    title: 'Prijungi tai, ką jau turi',
    text: 'Facebook ir Instagram paskyras, el. paštą, parduotuvę. Kelios minutės ir vienas prisijungimas.',
  },
  {
    n: '02',
    title: 'Papasakoji apie savo veiklą',
    text: 'Ką parduodi, kaip kalbi su klientais, ko niekada nesakai. Clarivex tai įsimena ir naudoja visur — nuo postų iki atsakymų.',
  },
  {
    n: '03',
    title: 'Toliau tiesiog rašai lietuviškai',
    text: 'Be mokymų ir be instrukcijų. Sakai, ko reikia — gauni paruoštą rezultatą, kurį patvirtini vienu paspaudimu.',
  },
]

export default function HowItWorksSteps() {
  return (
    <section id="kaip-veikia" className="relative bg-space-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Kaip veikia"
          title="Trys žingsniai iki pirmo rezultato"
          lead="Nereikia nei techninių žinių, nei atskiro darbuotojo. Užtenka mokėti parašyti, ko nori."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7">
                <span className="block text-[13px] font-bold tabular-nums tracking-[0.2em] text-aurora-blue/70">
                  {s.n}
                </span>
                <h3 className="mt-4 text-[19px] font-semibold leading-snug tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/50">{s.text}</p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-aurora-blue/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
