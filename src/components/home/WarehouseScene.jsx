import { useCallback, useEffect, useState } from 'react'
import { useInViewRef } from './useReveal'
import Reveal from './Reveal'

const steps = [
  {
    id: 'importas',
    label: 'Prijungi',
    title: 'Prekės atkeliauja pačios',
    text: 'Shopify, WooCommerce, prekių srautas ar paprasta lentelė. Stulpelius atpažįsta pats, o vėliau katalogas atsinaujina pagal tvarkaraštį.',
  },
  {
    id: 'aprasymas',
    label: 'Aprašo',
    title: 'Kiekviena prekė aprašoma iš naujo',
    text: 'AI nustato, kas tai per prekė, kam ji skirta ir kuo ypatinga. Tada peržiūri nuotrauką ir surašo tai, ko aprašyme nebuvo — rankoves, uždarymą, jungtį, raštą. Ko nesimato, to nespėlioja.',
  },
  {
    id: 'paieska',
    label: 'Supranta',
    title: 'Prekės tampa randamos pagal prasmę',
    text: 'Ne raktažodžiai. Klientas rašo savais žodžiais, su klaidomis ir be nosinių — ir vis tiek randa tai, ko ieškojo.',
  },
  {
    id: 'atsakymas',
    label: 'Atsako',
    title: 'Klientas gauna konkretų atsakymą',
    text: 'Ne „turime įvairių variantų", o būtent tos prekės su nuotrauka, kaina ir dydžiais. Naktį, savaitgalį, per kelias sekundes.',
  },
]

function SourceVisual() {
  const sources = ['Shopify', 'WooCommerce', 'Prekių srautas', 'Lentelė']
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {sources.map((s, i) => (
        <Reveal
          key={s}
          delay={i * 0.08}
          y={12}
          className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-space-900/70 px-3.5 py-3"
        >
          <span className="h-2 w-2 rounded-full bg-aurora-teal" />
          <span className="text-[13px] text-white/70">{s}</span>
        </Reveal>
      ))}
      <div className="col-span-2 mt-1 rounded-xl border border-white/[0.07] bg-space-900/70 p-3.5">
        <p className="mb-2.5 text-[11px] uppercase tracking-[0.15em] text-white/35">
          Stulpeliai atpažinti
        </p>
        {[
          ['pavadinimas', 'Title'],
          ['kaina', 'Variant Price'],
          ['nuotrauka', 'Image Src'],
        ].map(([lt, en]) => (
          <div key={lt} className="flex items-center gap-2 py-1 text-[12.5px]">
            <span className="w-24 shrink-0 text-white/40">{en}</span>
            <span className="text-white/20">→</span>
            <span className="text-white/75">{lt}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function EnrichVisual() {
  const tags = ['striukė', 'moterims', 'su gobtuvu', 'užtrauktukas', 'iki klubų', 'vandeniui atspari']
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-space-900/70 p-4">
      <div className="flex gap-3.5">
        <div className="h-20 w-20 shrink-0 rounded-xl bg-gradient-to-br from-aurora-blue/30 via-aurora-violet/20 to-transparent" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[14px] font-medium text-white/85">Žieminė striukė su gobtuvu</p>
          <p className="mt-1 text-[12.5px] text-white/40">Aprašyme buvo tik pavadinimas ir kaina</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((t, i) => (
          <Reveal
            key={t}
            delay={0.15 + i * 0.09}
            y={6}
            className="rounded-full border border-aurora-blue/20 bg-aurora-blue/10 px-2.5 py-1 text-[12px] text-aurora-blue/90"
          >
            {t}
          </Reveal>
        ))}
      </div>
      <p className="mt-3.5 text-[11.5px] leading-relaxed text-white/35">
        Požymiai, kuriuos AI įžiūrėjo nuotraukoje ir kurių klientas galėtų paminėti ieškodamas.
      </p>
    </div>
  )
}

/* Panašumo juosta: plotis įsijungia tik pasirodžius ekrane. */
function ScoreBar({ score, delay, className }) {
  const [ref, inView] = useInViewRef()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        width: inView ? `${score * 100}%` : 0,
        transition: `width 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    />
  )
}

function SearchVisual() {
  const matches = [
    { name: 'Žieminė striukė su gobtuvu', score: 0.94 },
    { name: 'Pūkinė striukė, atspari vandeniui', score: 0.87 },
    { name: 'Demisezoninis paltas', score: 0.41 },
  ]
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-space-900/70 p-4">
      <div className="rounded-xl border border-app-border bg-app-elevated px-3.5 py-2.5 text-[13.5px] text-white/75">
        „ieskau siltos striukes su gobtuvu i lietu“
      </div>
      <div className="mt-4 space-y-2.5">
        {matches.map((m, i) => (
          <Reveal key={m.name} delay={0.1 + i * 0.12} y={8}>
            <div className="mb-1 flex items-baseline justify-between gap-3">
              <span className="truncate text-[12.5px] text-white/70">{m.name}</span>
              <span className="shrink-0 text-[11.5px] tabular-nums text-white/35">
                {m.score.toFixed(2)}
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <ScoreBar
                score={m.score}
                delay={0.2 + i * 0.12}
                className={`h-full rounded-full ${
                  m.score > 0.6
                    ? 'bg-gradient-to-r from-aurora-blue to-aurora-teal'
                    : 'bg-white/15'
                }`}
              />
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-[11.5px] text-white/35">
        Be nosinių, su rašybos klaidomis — prasmė atpažįstama vis tiek.
      </p>
    </div>
  )
}

function AnswerVisual() {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-app-surface/80 p-4">
      <div className="flex justify-end">
        <p className="max-w-[80%] rounded-[18px_18px_6px] bg-app-user px-3.5 py-2.5 text-[13.5px] text-white">
          Sveiki, ar turite šiltą striukę su gobtuvu? 40 dydis
        </p>
      </div>
      <p className="mt-3 text-[13.5px] leading-[1.65] text-app-text">
        Turime dvi tinkamas. Abi su gobtuvu ir atsparios vandeniui, 40 dydis sandėlyje yra:
      </p>
      <div className="mt-3 space-y-2">
        {[
          { n: 'Žieminė striukė su gobtuvu', p: '89,00 €', s: 'Dydžiai 38–44' },
          { n: 'Pūkinė striukė', p: '119,00 €', s: 'Dydžiai 36–42' },
        ].map((p, i) => (
          <Reveal
            key={p.n}
            delay={0.15 + i * 0.14}
            y={10}
            className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-2.5"
          >
            <span className="h-12 w-12 shrink-0 rounded-lg bg-gradient-to-br from-aurora-blue/30 to-aurora-violet/15" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-medium text-app-text">{p.n}</span>
              <span className="block text-[11.5px] text-app-muted">{p.s}</span>
            </span>
            <span className="shrink-0 text-[13px] font-semibold text-white">{p.p}</span>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

const visuals = {
  importas: SourceVisual,
  aprasymas: EnrichVisual,
  paieska: SearchVisual,
  atsakymas: AnswerVisual,
}

function StepBlock({ step, index, onVisibility }) {
  /* Langas per ekrano vidurį: aktyvus tas blokas, kuris jį kerta. */
  const [ref, inView] = useInViewRef({ once: false, margin: '-35% 0px -35% 0px' })
  const Visual = visuals[step.id]

  /* Būsena keičiama po piešimo – kitaip React bartųsi dėl update renderio metu. */
  useEffect(() => {
    onVisibility(index, inView)
  }, [inView, index, onVisibility])

  return (
    <div ref={ref} className="py-10 lg:py-20">
      <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-aurora-blue/70 lg:hidden">
        {String(index + 1).padStart(2, '0')} — {step.label}
      </p>
      <h3 className="mb-3 text-[20px] font-bold tracking-tight text-white lg:hidden">
        {step.title}
      </h3>
      <p className="mb-6 text-[14.5px] leading-relaxed text-white/50 lg:hidden">{step.text}</p>
      <Visual />
    </div>
  )
}

export default function WarehouseScene({ showIntro = true }) {
  const [visible, setVisible] = useState(() => steps.map(() => false))

  const handleVisibility = useCallback((index, isVisible) => {
    setVisible((prev) => {
      if (prev[index] === isVisible) return prev
      const next = [...prev]
      next[index] = isVisible
      return next
    })
  }, [])

  /* Kai kertamos ribos ir matomi du blokai, laimi ankstesnis – taip juosta
     nešokinėja pirmyn slenkant tiek žemyn, tiek aukštyn. */
  const firstVisible = visible.indexOf(true)
  const active = firstVisible === -1 ? 0 : firstVisible

  return (
    <section id="sandelis" className="relative bg-space-950 py-20 sm:py-28">
      {/* Aurora rėminama atskirai: overflow-hidden ant sekcijos sulaužytų lipnią juostą. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/4 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-[160px]"
          style={{ background: 'radial-gradient(circle, #4f8dfd 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {showIntro && (
          <Reveal className="max-w-3xl">
            <p className="mb-3 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-aurora-teal/80">
              Prekių sandėlis
            </p>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em] text-white">
              Tavo prekės — paruoštos atsakymams ir paieškai
            </h2>
            <p className="mt-4 max-w-2xl text-[16.5px] leading-relaxed text-white/55">
              Dauguma įrankių prekes tik importuoja. Clarivex jas perskaito, apžiūri nuotraukas ir
              paruošia taip, kad AI galėtų atsakyti klientui konkrečiai — su nuotrauka, kaina ir
              dydžiu.
            </p>
          </Reveal>
        )}

        <div
          className={`${showIntro ? 'mt-12' : ''} grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16`}
        >
          {/* lipni žingsnių juosta – tik dideliame ekrane */}
          <div className="hidden lg:block">
            <div className="sticky top-28 space-y-1">
              {steps.map((s, i) => {
                const isActive = i === active
                return (
                  <div
                    key={s.id}
                    className={`relative rounded-2xl border px-5 py-4 transition-all duration-500 ${
                      isActive
                        ? 'border-white/[0.12] bg-white/[0.04]'
                        : 'border-transparent bg-transparent'
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`text-[12px] font-semibold tabular-nums transition-colors duration-500 ${
                          isActive ? 'text-aurora-blue' : 'text-white/25'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3
                        className={`text-[17px] font-semibold tracking-tight transition-colors duration-500 ${
                          isActive ? 'text-white' : 'text-white/35'
                        }`}
                      >
                        {s.title}
                      </h3>
                    </div>
                    <div
                      className="grid overflow-hidden pl-8 text-[14px] leading-relaxed text-white/50 transition-all duration-500"
                      style={{
                        gridTemplateRows: isActive ? '1fr' : '0fr',
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <p className="min-h-0 overflow-hidden">
                        <span className="block pt-2">{s.text}</span>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            {steps.map((s, i) => (
              <StepBlock key={s.id} step={s} index={i} onVisibility={handleVisibility} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
