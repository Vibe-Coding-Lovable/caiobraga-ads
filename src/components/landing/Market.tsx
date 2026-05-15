import { useReveal } from "@/hooks/use-reveal";

const left = ["Indicação", "Networking", "Presença orgânica"];

export default function Market() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-line bg-[#070707] py-24 md:py-32">
      <div ref={ref} data-reveal-root className="mx-auto max-w-5xl px-6">
        <h2
          data-reveal
          className="font-display max-w-3xl text-3xl text-ink md:text-5xl"
        >
          O mercado jurídico está cada vez mais competitivo.
        </h2>

        <div className="relative mt-16 grid gap-12 md:grid-cols-2 md:gap-0">
          <div data-reveal className="md:pr-12">
            <div className="mb-6 text-[10px] tracking-[0.25em] text-ink-muted uppercase">
              — Modelo tradicional
            </div>
            <h3 className="font-display text-xl text-ink/90 md:text-2xl">
              Muitos escritórios ainda dependem de:
            </h3>
            <ul className="mt-6 space-y-3">
              {left.map((l) => (
                <li
                  key={l}
                  className="flex items-center gap-3 text-base text-ink-muted md:text-lg"
                >
                  <span className="h-px w-6 bg-ink-muted/40" />
                  {l}
                </li>
              ))}
            </ul>
          </div>

          {/* divider */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent md:block" />

          <div data-reveal className="md:pl-12">
            <div className="mb-6 text-[10px] tracking-[0.25em] text-gold uppercase">
              — Novo mercado
            </div>
            <h3 className="font-display text-xl text-ink md:text-2xl">
              Outros já estão aparecendo exatamente no momento da intenção.
            </h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
              É nesse instante — quando o cliente busca, compara e decide — que sua presença passa
              a fazer diferença real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
