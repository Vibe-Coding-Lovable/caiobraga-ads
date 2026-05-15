import { useReveal } from "@/hooks/use-reveal";
import printIvan from "@/assets/print-ivan.jpeg";

function ScreenshotFrame({ label, src }: { label: string; src?: string }) {
  return (
    <div className="relative">
      <div className="absolute -top-2 -right-2 h-6 w-6 border-t border-r border-gold" />
      <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b border-l border-gold" />
      <div className="flex aspect-[4/5] items-center justify-center overflow-hidden border border-line bg-surface">
        {src ? (
          <img src={src} alt={label} className="h-full w-full object-cover object-top" />
        ) : (
          <span className="text-xs tracking-[0.3em] text-ink-muted uppercase">{label}</span>
        )}
      </div>
    </div>
  );
}

export default function SocialProof() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-line py-24 md:py-32">
      <div ref={ref} data-reveal-root className="mx-auto max-w-5xl px-6">
        <h2
          data-reveal
          className="font-display text-center text-3xl text-ink md:text-5xl"
        >
          Alguns feedbacks e resultados
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div data-reveal>
            <ScreenshotFrame label="Depoimento Dr. Ivan Gabetta" src={printIvan} />
          </div>
          <div data-reveal>
            <ScreenshotFrame label="[PRINT DA ADVOGADA]" />
          </div>
        </div>

        <div data-reveal className="mx-auto mt-10 max-w-2xl">
          <div className="relative">
            <div className="absolute -top-2 -right-2 h-6 w-6 border-t border-r border-gold" />
            <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b border-l border-gold" />
            <div className="relative flex aspect-video items-center justify-center border border-line bg-surface">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.06),transparent_60%)]" />
              <button
                type="button"
                aria-label="Reproduzir vídeo"
                className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold transition-all duration-300 hover:scale-110 hover:bg-gold/10"
              >
                <span className="ml-1 inline-block border-y-[10px] border-l-[16px] border-y-transparent border-l-gold" />
              </button>
              <span className="absolute bottom-3 text-[10px] tracking-[0.3em] text-ink-muted uppercase">
                [VÍDEO DEPOIMENTO]
              </span>
            </div>
          </div>
        </div>

        <p
          data-reveal
          className="font-display mx-auto mt-16 max-w-2xl text-center text-xl text-ink/90 italic md:text-2xl"
        >
          “Estratégia não é apenas gerar alcance. É construir confiança no momento certo.”
        </p>
      </div>
    </section>
  );
}
