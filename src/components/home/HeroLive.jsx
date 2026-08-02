import { useCallback, useState } from 'react'
import ChatDemo from './ChatDemo'
import { siteConfig } from '@/content/seoPages'

const facts = [
  { value: '10+', label: 'AI modelių viename lange' },
  { value: '~3 s', label: 'vidutinis atsakymo laikas' },
  { value: '€0', label: 'mėnesinis mokestis' },
]

/* Hero įeina iš karto (be scroll laukimo) – laiptuotas vėlinimas pagal eilę. */
function enter(step = 0) {
  return {
    animation: `cvxHeroIn 700ms cubic-bezier(0.22, 1, 0.36, 1) ${step * 0.08}s both`,
  }
}

export default function HeroLive() {
  const [working, setWorking] = useState(false)
  const handleState = useCallback((isWorking) => setWorking(isWorking), [])

  return (
    <section className="relative isolate overflow-hidden bg-space-950">
      {/* aurora – lėtai kvėpuojanti šviesa */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div
          className={`cvx-glow -top-[28%] left-[8%] h-[520px] w-[520px] md:h-[720px] md:w-[720px] md:animate-aurora-slow transition-opacity duration-1000 ${
            working ? 'md:opacity-70' : 'md:opacity-50'
          }`}
          style={{ background: 'radial-gradient(circle, #4f8dfd 0%, transparent 68%)' }}
        />
        <div
          className="cvx-glow -right-[15%] top-[6%] h-[460px] w-[460px] opacity-40 md:h-[640px] md:w-[640px] md:animate-aurora-slower"
          style={{ background: 'radial-gradient(circle, #8b6cff 0%, transparent 68%)' }}
        />
        <div
          className="cvx-glow bottom-[-30%] left-1/3 hidden h-[560px] w-[560px] opacity-25 md:block md:animate-aurora-slow"
          style={{ background: 'radial-gradient(circle, #3fd8c2 0%, transparent 70%)' }}
        />
      </div>

      {/* tinklelis su švelnia kauke */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,black,transparent)]"
      />

      {/* turinys – navigaciją piešia bendras Header */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16 lg:pb-20 lg:pt-32">
        <div className="text-center lg:text-left">
          <span
            style={enter(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[12.5px] text-white/70 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-aurora-teal" />
            Startui — 1 000 kreditų dovanų
          </span>

          <h1
            style={enter(1)}
            className="font-display mt-6 text-[clamp(2.1rem,3.9vw,3.1rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white"
          >
            Pasakyk lietuviškai.
            <br />
            <span className="bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-teal bg-clip-text text-transparent lg:whitespace-nowrap">
              Padaryta per 3 sekundes.
            </span>
          </h1>

          <p
            style={enter(2)}
            className="mx-auto mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/60 lg:mx-0"
          >
            Postai, el. laiškai, paveikslėliai, priminimai ir atsakymai klientams — viena komanda
            savo kalba. Clarivex supranta kontekstą, paruošia ir, jei nori, iškart paskelbia.
          </p>

          <div
            style={enter(3)}
            className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:mt-9 lg:justify-start"
          >
            <a
              href={siteConfig.appUrl}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-space-950 shadow-[0_10px_40px_-12px_rgba(79,141,253,0.8)] transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Pradėk nemokamai
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
            </a>
            <a
              href="#kaip-veikia"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-[15px] font-medium text-white/85 backdrop-blur transition-colors hover:bg-white/[0.08] sm:w-auto"
            >
              Žiūrėti, kaip veikia
            </a>
          </div>

          <dl
            style={enter(4)}
            className="order-last mt-8 grid grid-cols-3 gap-4 border-t border-white/[0.07] pt-6 lg:mt-12 lg:pt-7"
          >
            {facts.map((f) => (
              <div key={f.label} className="min-w-0">
                <dt className="text-[22px] font-bold tracking-tight text-white sm:text-[26px]">
                  {f.value}
                </dt>
                <dd className="mt-1 text-[12.5px] leading-snug text-white/45">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          style={{ animation: 'cvxHeroIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 0.25s both' }}
          className="flex justify-center lg:justify-end"
        >
          <ChatDemo onStateChange={handleState} />
        </div>
      </div>

      {/* perėjimas į kitą sekciją */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-space-950 to-transparent"
      />
    </section>
  )
}
