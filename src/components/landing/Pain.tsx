import { useReveal } from "@/hooks/use-reveal";

const pains = [
  "O escritório depende demais de indicação?",
  "Existem meses com resultados imprevisíveis?",
  "O Instagram gera visualização, mas poucos contatos reais?",
  "Seu escritório é tecnicamente excelente, mas pouco encontrado?",
  "Outros escritórios parecem crescer mais rápido mesmo sem serem melhores?",
];

export default function Pain() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-line py-24 md:py-32">
      <div ref={ref} data-reveal-root className="mx-auto max-w-5xl px-6">
        <h2
          data-reveal
          className="font-display text-center text-3xl text-ink md:text-5xl"
        >
          Você se identifica com isso?
        </h2>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {pains.map((p) => (
            <div
              key={p}
              data-reveal
              className="group relative overflow-hidden border border-line bg-surface p-7 transition-colors duration-300 hover:border-gold/40"
            >
              <span className="absolute top-0 bottom-0 left-0 w-px bg-gold transition-all duration-300 group-hover:w-[3px]" />
              <p className="font-display pl-2 text-lg leading-snug text-ink md:text-xl">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
