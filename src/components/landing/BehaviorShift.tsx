import { useReveal } from "@/hooks/use-reveal";

function MockSerp() {
  return (
    <div className="space-y-2 p-3">
      <div className="text-[8px] tracking-wider text-ink-muted uppercase">Google</div>
      <div className="h-1.5 w-3/4 rounded-sm bg-ink/15" />
      <div className="h-1 w-2/3 rounded-sm bg-gold/60" />
      <div className="h-1 w-1/2 rounded-sm bg-ink/10" />
      <div className="mt-2 h-1 w-2/3 rounded-sm bg-ink/10" />
      <div className="h-1 w-1/2 rounded-sm bg-ink/10" />
    </div>
  );
}
function MockMaps() {
  return (
    <div className="relative h-full p-3">
      <div className="absolute inset-2 rounded-sm bg-[linear-gradient(135deg,rgba(201,169,110,0.08),transparent_60%)]" />
      <div className="relative space-y-1.5">
        <div className="h-1 w-1/2 rounded-sm bg-ink/10" />
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-gold" />
          <div className="h-1 w-2/3 bg-ink/15" />
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-ink/30" />
          <div className="h-1 w-1/2 bg-ink/10" />
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-ink/30" />
          <div className="h-1 w-3/5 bg-ink/10" />
        </div>
      </div>
    </div>
  );
}
function MockReviews() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-3">
      <div className="font-display text-2xl text-gold">4.9</div>
      <div className="flex gap-0.5 text-xs text-gold">★★★★★</div>
      <div className="h-1 w-2/3 rounded-sm bg-ink/15" />
    </div>
  );
}
function MockLanding() {
  return (
    <div className="space-y-1.5 p-3">
      <div className="h-1.5 w-3/4 rounded-sm bg-ink/20" />
      <div className="h-1 w-1/2 rounded-sm bg-ink/10" />
      <div className="mt-2 h-3 w-2/3 rounded-sm bg-gold" />
      <div className="mt-2 grid grid-cols-3 gap-1">
        <div className="h-3 rounded-sm bg-ink/10" />
        <div className="h-3 rounded-sm bg-ink/10" />
        <div className="h-3 rounded-sm bg-ink/10" />
      </div>
    </div>
  );
}
function MockWhatsApp() {
  return (
    <div className="space-y-1.5 p-3">
      <div className="ml-auto h-2.5 w-2/3 rounded-md rounded-tr-none bg-gold/80" />
      <div className="h-2.5 w-1/2 rounded-md rounded-tl-none bg-ink/15" />
      <div className="ml-auto h-2.5 w-1/2 rounded-md rounded-tr-none bg-gold/80" />
      <div className="h-2.5 w-2/3 rounded-md rounded-tl-none bg-ink/15" />
    </div>
  );
}

const mocks = [
  { label: "Busca no Google", el: <MockSerp /> },
  { label: "Google Maps", el: <MockMaps /> },
  { label: "Avaliações", el: <MockReviews /> },
  { label: "Landing page", el: <MockLanding /> },
  { label: "WhatsApp", el: <MockWhatsApp /> },
];

export default function BehaviorShift() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative border-y border-line bg-surface-2/50 py-24 md:py-32">
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <div ref={ref} data-reveal-root className="mx-auto max-w-5xl px-6">
        <h2 data-reveal className="font-display text-3xl text-ink md:text-5xl">
          O comportamento do cliente mudou.
        </h2>
        <p
          data-reveal
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg"
        >
          Hoje, quando alguém realmente precisa de um advogado, ela pesquisa no Google, compara
          opções, analisa avaliações, entra em sites — e toma decisões rápido.
        </p>

        <div data-reveal className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {mocks.map((m) => (
            <div key={m.label} className="space-y-2">
              <div className="aspect-[4/5] overflow-hidden border border-line bg-bg shadow-[0_0_0_1px_rgba(201,169,110,0.06)_inset]">
                {m.el}
              </div>
              <div className="text-center text-[9px] tracking-[0.2em] text-ink-muted uppercase">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
