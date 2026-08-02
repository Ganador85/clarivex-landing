import Reveal, { SectionHead } from './Reveal'

/* Kortelė su stikliniu paviršiumi ir švytinčiu kraštu ties pele. */
function Card({ children, className = '', delay = 0 }) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-500 hover:border-white/[0.16]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {children}
      </div>
    </Reveal>
  )
}

function CardTitle({ children }) {
  return <h3 className="text-[17px] font-semibold tracking-tight text-white">{children}</h3>
}

function CardText({ children }) {
  return <p className="mt-2 text-[14px] leading-relaxed text-white/50">{children}</p>
}

/* --- mini vizualai: viskas CSS, jokių paveikslėlių --- */

function MiniPosts() {
  return (
    <div className="mt-5 grid grid-cols-3 gap-2">
      {['IG', 'FB', 'LI'].map((tag, i) => (
        <div
          key={tag}
          className="rounded-xl border border-white/[0.07] bg-space-900/70 p-2.5 transition-transform duration-500 group-hover:-translate-y-0.5"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <div className="mb-2 h-10 rounded-lg bg-gradient-to-br from-aurora-blue/25 to-aurora-violet/15" />
          <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
          <div className="mt-1 h-1.5 w-1/2 rounded-full bg-white/10" />
          <p className="mt-2 text-[10px] font-medium tracking-wide text-white/35">{tag}</p>
        </div>
      ))}
    </div>
  )
}

function MiniInbox() {
  const rows = [
    { from: 'Klientas', text: 'Ar turite 42 dydžio?', tag: 'atsakyta' },
    { from: 'Užklausa', text: 'Kiek kainuotų 20 vnt.?', tag: 'juodraštis' },
  ]
  return (
    <div className="mt-5 space-y-2">
      {rows.map((r) => (
        <div
          key={r.text}
          className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-space-900/70 px-3 py-2.5"
        >
          <span className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-aurora-violet/40 to-aurora-blue/25" />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[12.5px] font-medium text-white/80">{r.from}</span>
            <span className="block truncate text-[11.5px] text-white/40">{r.text}</span>
          </span>
          <span className="shrink-0 rounded-full bg-aurora-teal/12 px-2 py-0.5 text-[10.5px] font-medium text-aurora-teal">
            {r.tag}
          </span>
        </div>
      ))}
    </div>
  )
}

function MiniSite() {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.07] bg-space-900/70">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="ml-2 h-2 w-24 rounded-full bg-white/10" />
      </div>
      <div className="p-3">
        <div className="h-2 w-1/2 rounded-full bg-white/20" />
        <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-white/10" />
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          <span className="h-8 rounded-md bg-gradient-to-br from-aurora-blue/25 to-transparent" />
          <span className="h-8 rounded-md bg-gradient-to-br from-aurora-violet/25 to-transparent" />
          <span className="h-8 rounded-md bg-gradient-to-br from-aurora-teal/20 to-transparent" />
        </div>
      </div>
    </div>
  )
}

function MiniVisuals() {
  return (
    <div className="mt-5 grid grid-cols-4 gap-1.5">
      {[
        'from-aurora-blue/35',
        'from-aurora-violet/35',
        'from-aurora-teal/30',
        'from-white/20',
        'from-aurora-violet/25',
        'from-aurora-blue/25',
        'from-white/15',
        'from-aurora-teal/25',
      ].map((g, i) => (
        <span
          key={i}
          className={`aspect-square rounded-lg bg-gradient-to-br ${g} to-transparent transition-transform duration-500 group-hover:scale-[1.04]`}
          style={{ transitionDelay: `${i * 30}ms` }}
        />
      ))}
    </div>
  )
}

function MiniCommands() {
  const rows = ['Sukurk postą apie…', 'Parašyk laišką klientui', 'Primink rytoj 9:00']
  return (
    <div className="mt-5 space-y-2">
      {rows.map((r, i) => (
        <div
          key={r}
          className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-space-900/70 px-3 py-2.5 transition-transform duration-500 group-hover:translate-x-0.5"
          style={{ transitionDelay: `${i * 70}ms` }}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-aurora-blue" />
          <span className="truncate text-[12.5px] text-white/60">{r}</span>
        </div>
      ))}
    </div>
  )
}

export default function Capabilities() {
  return (
    <section id="galimybes" className="relative bg-space-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Ką Clarivex daro"
          title="Viena vieta vietoj septynių įrankių"
          lead="Pokalbis, socialiniai tinklai, el. paštas, prekės, svetainė ir vizualai — viskas viename lange ir viena kalba."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          <Card className="md:col-span-3" delay={0.02}>
            <CardTitle>Socialiniai tinklai</CardTitle>
            <CardText>
              Postai, karuselės ir turinio planas, kalendorius su patvirtinimo eiga, analitika. Kuri
              vienoje vietoje, skelbi ten, kur reikia.
            </CardText>
            <MiniPosts />
          </Card>

          <Card className="md:col-span-3" delay={0.06}>
            <CardTitle>Atsakymai klientams</CardTitle>
            <CardText>
              Žinutės iš socialinių tinklų ir el. pašto vienuose gautuosiuose. AI paruošia atsakymą
              arba atsako pats pagal tavo taisykles — ir visada pasisako esąs AI.
            </CardText>
            <MiniInbox />
          </Card>

          <Card className="md:col-span-2" delay={0.02}>
            <CardTitle>Pokalbis, kuris atlieka darbus</CardTitle>
            <CardText>
              Ne tik atsako — sukuria postą, parašo laišką, nustato priminimą, suranda prekę. Balsu
              arba tekstu.
            </CardText>
            <MiniCommands />
          </Card>

          <Card className="md:col-span-2" delay={0.06}>
            <CardTitle>Svetainė su savu domenu</CardTitle>
            <CardText>
              Sukuriama pokalbiu: puslapiai, blogas, užklausų forma, atsiliepimai, registracija į
              renginius ir pardavimai.
            </CardText>
            <MiniSite />
          </Card>

          <Card className="md:col-span-2" delay={0.1}>
            <CardTitle>Vizualai ir nuotraukos</CardTitle>
            <CardText>
              Paveikslėlių generavimas su tekstu ant jų, esamų nuotraukų redagavimas, 360° prekių
              vaizdai.
            </CardText>
            <MiniVisuals />
          </Card>
        </div>
      </div>
    </section>
  )
}
