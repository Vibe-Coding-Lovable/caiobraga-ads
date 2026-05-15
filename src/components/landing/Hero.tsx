import heroPhoto from "@/assets/ivan-hero.png";

const WA = "https://wa.me/SEUNUMERO";

const checks = [
  "Conversa sem compromisso",
  "Estratégia personalizada",
  "Atendimento focado em advocacia",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* gold radial accent */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.18),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.10),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid items-center gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mb-8 inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.25em] text-gold uppercase">
              <span className="h-px w-8 bg-gold" />
              Marketing para Advocacia
            </div>
            <h1 className="font-display text-4xl leading-[1.08] text-ink sm:text-5xl md:text-[3.5rem] lg:text-6xl">
              Seu próximo cliente provavelmente está pesquisando por{" "}
              <em className="text-gold not-italic italic">advogado</em> no Google agora.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
              Estruture presença no Google com campanhas estratégicas e uma Landing Page pensada
              para transformar visitas em contatos reais.
            </p>

            <div className="mt-10">
              <a
                href={WA}
                data-event="cta_hero"
                className="group inline-flex items-center gap-3 rounded-md bg-gold px-7 py-4 text-sm font-medium tracking-wide text-bg transition-all duration-300 hover:bg-gold-soft md:text-base"
              >
                Quero entender como isso funcionaria no meu escritório
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[11px] tracking-[0.18em] text-ink-muted uppercase">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="text-gold">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo placeholder */}
          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <div className="absolute -top-3 -left-3 h-full w-full border border-gold/40" />
              <img
                src={heroPhoto}
                alt="Consultor de marketing para advocacia"
                className="relative h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
