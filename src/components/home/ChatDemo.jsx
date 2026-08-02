import { useEffect, useMemo, useRef, useState } from 'react'
import { isNarrowScreen, useInViewRef } from './useReveal'

/* Scenarijai – tik pavyzdžiai. Turinys keičiamas nekeičiant logikos. */
const scenarios = [
  {
    id: 'postas',
    user: 'Sukurk postą apie mūsų naują kolekciją',
    ai: 'Paruošiau. Karuselė iš 4 nuotraukų su tekstu lietuviškai — gali skelbti dabar arba suplanuoti vakarui.',
    card: {
      icon: 'post',
      title: 'Postas paruoštas',
      meta: 'Instagram + Facebook · karuselė',
      time: '3,2 s',
    },
  },
  {
    id: 'laiskas',
    user: 'Atsakyk į paskutinį kliento laišką',
    ai: 'Parašiau mandagų atsakymą su pasiūlymu ir terminais. Juodraštis laukia — spausk „siųsti“, jei tinka.',
    card: {
      icon: 'mail',
      title: 'Juodraštis paruoštas',
      meta: 'El. paštas · vienas paspaudimas siųsti',
      time: '2,1 s',
    },
  },
  {
    id: 'vaizdas',
    user: 'Sugeneruok paveikslėlį žiemos išpardavimui',
    ai: 'Sukūriau HD vaizdą su tavo prekės ženklo spalvomis. Išsaugojau į galeriją — gali iškart dėti į postą.',
    card: {
      icon: 'image',
      title: 'Vaizdas sukurtas',
      meta: '1792 × 1024 HD · galerijoje',
      time: '8,4 s',
    },
  },
  {
    id: 'priminimas',
    user: 'Primink rytoj 9:00 paskambinti klientui',
    ai: 'Įsidėmėjau. Rytoj 9:00 gausi priminimą į telefoną — net jei būsi ne prie kompiuterio.',
    card: {
      icon: 'clock',
      title: 'Priminimas nustatytas',
      meta: 'Rytoj 09:00 · pranešimas į telefoną',
      time: '1,8 s',
    },
  },
]

function CardIcon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (name === 'mail') {
    return (
      <svg {...common} aria-hidden>
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    )
  }
  if (name === 'image') {
    return (
      <svg {...common} aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="9" cy="9" r="1.6" />
        <path d="m4 17 5-5 4 4 2.5-2.5L20 17" />
      </svg>
    )
  }
  if (name === 'clock') {
    return (
      <svg {...common} aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5.2l3.2 2" />
      </svg>
    )
  }
  return (
    <svg {...common} aria-hidden>
      <rect x="3" y="4" width="18" height="17" rx="3" />
      <path d="M8 2.5V6M16 2.5V6M3 10h18" />
    </svg>
  )
}

function ResultCard({ card }) {
  return (
    <div
      style={{ animation: 'cvxHeroIn 450ms cubic-bezier(0.22, 1, 0.36, 1) both' }}
      className="mt-2.5 flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-3"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aurora-blue/12 text-aurora-blue ring-1 ring-aurora-blue/25">
        <CardIcon name={card.icon} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 text-[13.5px] font-semibold text-app-text">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-aurora-teal"
            aria-hidden
          >
            <path d="m4 12.5 5 5L20 6.5" />
          </svg>
          {card.title}
        </span>
        <span className="mt-0.5 block truncate text-[12.5px] text-app-muted">{card.meta}</span>
      </span>
      <span className="shrink-0 rounded-full bg-white/[0.05] px-2.5 py-1 text-[11.5px] font-medium tabular-nums text-app-muted">
        {card.time}
      </span>
    </div>
  )
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 py-1.5" aria-label="Rašo">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-app-muted animate-dot-bounce"
          style={{ animationDelay: `${i * 0.16}s` }}
        />
      ))}
    </span>
  )
}

const PHASE = {
  TYPING: 'typing',
  THINKING: 'thinking',
  ANSWER: 'answer',
  REST: 'rest',
}

/**
 * onStateChange – praneša hero'ui, kada „dirbama“, kad švytėjimas kvėpuotų kartu.
 */
export default function ChatDemo({ onStateChange }) {
  const reduceMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    [],
  )

  /* Telefone raides nerasomos po viena: WebKit'e tai desimtys perpiesimu per
     sekunde greta viso kito. Komanda parodoma iskart, o scenarijai keiciasi. */
  const narrow = useMemo(() => isNarrowScreen(), [])

  /* Demo sukasi tik tada, kai ji matoma. Telefone nuolatinis perpiesimas
     fone atimdavo pagrindine gija ir puslapis nespedavo reaguoti i palietimus. */
  const [rootRef, visible] = useInViewRef({ once: false, margin: '0px' })

  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState(reduceMotion ? PHASE.ANSWER : PHASE.TYPING)
  const [typed, setTyped] = useState(reduceMotion ? scenarios[0].user : '')
  const [history, setHistory] = useState([])
  const timers = useRef([])

  const scenario = scenarios[index]

  const later = (fn, ms) => {
    const id = setTimeout(fn, ms)
    timers.current.push(id)
    return id
  }

  useEffect(() => {
    onStateChange?.(phase === PHASE.THINKING)
  }, [phase, onStateChange])

  useEffect(() => {
    if (reduceMotion) return undefined
    timers.current.forEach(clearTimeout)
    timers.current = []

    if (!visible) return undefined

    if (phase === PHASE.TYPING) {
      if (narrow) {
        setTyped(scenario.user)
        later(() => setPhase(PHASE.THINKING), 900)
        return undefined
      }

      setTyped('')
      let i = 0
      const id = setInterval(() => {
        i += 1
        setTyped(scenario.user.slice(0, i))
        if (i >= scenario.user.length) {
          clearInterval(id)
          later(() => setPhase(PHASE.THINKING), 520)
        }
      }, 45)
      timers.current.push(id)
      return () => clearInterval(id)
    }

    if (phase === PHASE.THINKING) {
      later(() => setPhase(PHASE.ANSWER), 1250)
    }

    if (phase === PHASE.ANSWER) {
      later(() => setPhase(PHASE.REST), 3600)
    }

    if (phase === PHASE.REST) {
      later(() => {
        setHistory((prev) => [...prev, scenario].slice(-1))
        setIndex((prev) => (prev + 1) % scenarios.length)
        setPhase(PHASE.TYPING)
      }, 900)
    }

    return () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, index, reduceMotion, visible, narrow])

  const showUserBubble = phase !== PHASE.TYPING
  const inputText = phase === PHASE.TYPING ? typed : ''

  return (
    <div ref={rootRef} className="relative w-full max-w-[560px]">
      {/* švytėjimas po langu – šviesa sklinda iš produkto */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-x-10 -bottom-10 -top-6 -z-10 hidden rounded-[48px] blur-3xl transition-opacity duration-1000 md:block ${
          phase === PHASE.THINKING ? 'opacity-100' : 'opacity-60'
        }`}
        style={{
          background:
            'radial-gradient(60% 55% at 50% 45%, rgba(79,141,253,0.34), rgba(139,108,255,0.20) 45%, transparent 72%)',
        }}
      />

      <div className="overflow-hidden rounded-[22px] border border-white/[0.09] bg-app-surface/95 shadow-[0_30px_90px_-24px_rgba(0,0,0,0.9)] cvx-blur-panel backdrop-blur-xl">
        {/* lango antraštė */}
        <div className="flex items-center gap-2.5 border-b border-white/[0.06] px-4 py-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-aurora-blue to-aurora-violet text-[11px] font-bold text-white">
            C
          </span>
          <span className="text-[13px] font-semibold text-app-text">Clarivex</span>
          <span className="flex items-center gap-1.5 text-[11.5px] text-app-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-aurora-teal animate-pulse-soft" />
            asistentas veikia
          </span>
        </div>

        {/* pokalbis */}
        <div className="flex h-[280px] flex-col justify-end gap-1 overflow-hidden px-4 pb-2 pt-4 sm:h-[350px]">
          {history.map((h, i) => (
            <div key={`${h.id}-${i}`} className="opacity-45">
              <div className="flex justify-end pb-2">
                <p className="max-w-[75%] rounded-[18px_18px_6px] bg-app-user px-4 py-2.5 text-[14.5px] leading-relaxed text-white">
                  {h.user}
                </p>
              </div>
              <p className="pb-3 text-[14.5px] leading-[1.7] text-app-text">{h.ai}</p>
            </div>
          ))}

          {showUserBubble && (
            <div
              key={`${scenario.id}-user`}
              style={{ animation: 'cvxHeroIn 350ms cubic-bezier(0.22, 1, 0.36, 1) both' }}
              className="flex justify-end pb-2"
            >
              <p className="max-w-[75%] rounded-[18px_18px_6px] bg-app-user px-4 py-2.5 text-[14.5px] leading-relaxed text-white shadow-lg shadow-black/30">
                {scenario.user}
              </p>
            </div>
          )}

          <div className="min-h-[92px]">
            {phase === PHASE.THINKING && <TypingDots />}
            {(phase === PHASE.ANSWER || phase === PHASE.REST) && (
              <div
                key={`${scenario.id}-ai`}
                style={{ animation: 'cvxHeroIn 400ms cubic-bezier(0.22, 1, 0.36, 1) both' }}
              >
                <p className="text-[14.5px] leading-[1.7] text-app-text">{scenario.ai}</p>
                <ResultCard card={scenario.card} />
              </div>
            )}
          </div>
        </div>

        {/* įvesties pilulė – kaip app'e */}
        <div className="px-3 pb-3.5 pt-1">
          <div className="flex items-center gap-2 rounded-[22px] border border-app-border bg-app-elevated py-2 pl-3.5 pr-2">
            <span className="min-w-0 flex-1 truncate text-[14.5px] text-app-text">
              {inputText || <span className="text-app-muted">Rašyk arba kalbėk lietuviškai…</span>}
              {phase === PHASE.TYPING && (
                <span className="ml-0.5 inline-block h-[15px] w-[2px] translate-y-[2px] bg-app-primary animate-pulse-soft" />
              )}
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-app-muted">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                aria-hidden
              >
                <rect x="9" y="3" width="6" height="11" rx="3" />
                <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
              </svg>
            </span>
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                inputText ? 'bg-app-primary text-space-950' : 'bg-white/[0.06] text-app-muted'
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
