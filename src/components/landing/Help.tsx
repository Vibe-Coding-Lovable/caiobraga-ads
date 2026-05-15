import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    title: "Google Ads Estratégico",
    body: "Seu escritório aparecendo exatamente quando alguém pesquisa pela sua área de atuação.",
  },
  {
    title: "Landing Page para Conversão",
    body: "Estrutura criada para transformar visitas em contatos reais no WhatsApp.",
  },
  {
    title: "Posicionamento Digital",
    body: "Mais clareza, percepção profissional e autoridade para o escritório.",
  },
];

export default function Help() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-line py-24 md:py-32">
      <div ref={ref} data-reveal-root className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <div data-reveal className="mb-5 text-[10px] tracking-[0.25em] text-gold uppercase">
            — Serviços
          </div>
          <h2 data-reveal className="font-display text-3xl text-ink md:text-5xl">
            Como posso ajudar seu escritório
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              data-reveal
              className="group relative bg-surface p-8 transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 left-0 h-px bg-gold" />
              <div className="font-display mb-6 text-xs tracking-[0.2em] text-gold uppercase">
                0{i + 1}
              </div>
              <h3 className="font-display text-2xl leading-tight text-ink md:text-[1.6rem]">
                {it.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
