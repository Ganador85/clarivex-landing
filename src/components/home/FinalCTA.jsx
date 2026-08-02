import Reveal from './Reveal'
import { siteConfig } from '@/content/seoPages'

export default function FinalCTA() {
  return (
    <section id="pradeti" className="relative overflow-hidden bg-space-950 pb-24 pt-10 sm:pb-32">
      <div
        aria-hidden
        className="cvx-glow left-1/2 top-0 -z-10 h-[300px] w-[420px] -translate-x-1/2 opacity-30 md:h-[520px] md:w-[900px] md:animate-aurora-slow"
        style={{
          background:
            'radial-gradient(circle, rgba(79,141,253,0.55) 0%, rgba(139,108,255,0.28) 45%, transparent 72%)',
        }}
      />

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white">
            Parašyk vieną sakinį lietuviškai.
            <br />
            <span className="bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-teal bg-clip-text text-transparent">
              Pamatyk, kas nutiks.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16.5px] leading-relaxed text-white/55">
            Registracija trunka minutę, kortelės nereikia, o 1 000 kreditų užtenka viską išbandyti.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.appUrl}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15.5px] font-semibold text-space-950 shadow-[0_14px_50px_-14px_rgba(79,141,253,0.9)] transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Sukurti paskyrą
              <span aria-hidden>→</span>
            </a>
            <a
              href="/kainos"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-[15.5px] font-medium text-white/85 transition-colors hover:bg-white/[0.08] sm:w-auto"
            >
              Pažiūrėti kainas
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
