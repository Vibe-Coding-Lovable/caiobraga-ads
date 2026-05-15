import { useReveal } from "@/hooks/use-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Isso funciona para qualquer área?",
    a: "Sim, desde que exista demanda de pesquisa no Google.",
  },
  {
    q: "Preciso investir alto?",
    a: "Não. O mais importante é estrutura e estratégia.",
  },
  {
    q: "Você atende apenas advocacia?",
    a: "Hoje existe um foco estratégico em escritórios de advocacia.",
  },
  {
    q: "Quanto tempo demora?",
    a: "Depende da região, concorrência e estrutura atual do escritório.",
  },
];

export default function Faq() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-line py-24 md:py-32">
      <div ref={ref} data-reveal-root className="mx-auto max-w-3xl px-6">
        <h2
          data-reveal
          className="font-display text-center text-3xl text-ink md:text-5xl"
        >
          Perguntas frequentes
        </h2>

        <div data-reveal className="mt-14">
          <Accordion type="single" collapsible className="divide-y divide-line border-y border-line">
            {items.map((it, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-0">
                <AccordionTrigger className="font-display py-6 text-left text-lg text-ink hover:no-underline md:text-xl [&>svg]:text-gold">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-ink-muted md:text-lg">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
