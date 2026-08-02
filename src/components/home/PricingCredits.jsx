import Reveal, { SectionHead } from './Reveal'
import { siteConfig } from '@/content/seoPages'

const points = [
  {
    title: 'Be mėnesinio mokesčio',
    text: 'Nenaudoji — nemoki. Jokių planų, kuriuos reikia atsiminti atšaukti.',
  },
  {
    title: 'Papildai kada nori',
    text: 'Nuo vieno euro. Kreditai negalioja tik tada, kai jų nebelieka — jokio deginimo mėnesio gale.',
  },
  {
    title: 'Modelį parenka sistema',
    text: 'Kasdieniam darbui — greitas modelis, sudėtingam — stipriausias. Nereikia rinktis pačiam.',
  },
  {
    title: 'Matai, kur išeina',
    text: 'Naudojimo suvestinė rodo, kuris darbas kiek kainavo. Jokių netikėtumų mėnesio gale.',
  },
]

export default function PricingCredits() {
  return (
    <section id="kainos" className="relative overflow-hidden bg-space-950 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[150px]"
        style={{ background: 'radial-gradient(circle, #8b6cff 0%, transparent 70%)' }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Kaina"
          title="Moki už tai, ką realiai padarai"
          lead="Vietoj abonemento — kreditai. Parašei postą, atsakei klientui, sugeneravai vaizdą: kiekvienas veiksmas turi savo kainą, ir tu ją matai."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-aurora-teal/80">
                Startui
              </p>
              <p className="mt-4 text-[52px] font-extrabold leading-none tracking-tight text-white">
                1 000
              </p>
              <p className="mt-2 text-[15px] text-white/55">kreditų dovanų, kai užsiregistruoji</p>
              <div className="my-7 h-px bg-white/[0.08]" />
              <ul className="space-y-3">
                {[
                  'Visi moduliai atrakinti iš karto',
                  'Be kortelės ir be įsipareigojimų',
                  'Papildymas nuo 1 €',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[14.5px] text-white/75">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 shrink-0 text-aurora-teal"
                      aria-hidden
                    >
                      <path d="m4 12.5 5 5L20 6.5" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={siteConfig.appUrl}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-space-950 transition-transform hover:scale-[1.02]"
              >
                Pradėk nemokamai
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <h3 className="text-[15px] font-semibold tracking-tight text-white">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/50">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
