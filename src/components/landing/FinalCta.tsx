import { useReveal } from "@/hooks/use-reveal";

const WA =
  "https://wa.me/5521979513208?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site porque quero entender como atrair clientes com mais previsibilidade para o meu escritório.",
  );
const checks = ["Conversa estratégica", "Sem compromisso", "Atendimento personalizado"];

export default function FinalCta() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden bg-surface-2/40 py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.10),transparent_60%)]" />
      <div ref={ref} data-reveal-root className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 data-reveal className="font-display text-4xl leading-[1.1] text-ink sm:text-5xl md:text-6xl">
          Seu escritório não precisa depender apenas do <em className="text-gold not-italic italic">acaso</em> para
          crescer.
        </h2>

        <div data-reveal className="mt-12">
          <a
            href={WA}
            data-event="cta_final"
            className="group inline-flex items-center gap-3 rounded-md bg-gold px-9 py-4 text-base font-medium tracking-wide text-bg transition-all duration-300 hover:bg-gold-soft"
          >
            Falar no WhatsApp
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <ul
          data-reveal
          className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-[11px] tracking-[0.18em] text-ink-muted uppercase"
        >
          {checks.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
