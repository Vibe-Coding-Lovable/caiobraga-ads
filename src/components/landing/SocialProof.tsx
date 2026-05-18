import { useReveal } from "@/hooks/use-reveal";
import printIvan from "@/assets/print-ivan.jpeg";

function ScreenshotFrame({ label, src }: { label: string; src?: string }) {
  return (
    <div className="relative">
      <div className="absolute -top-2 -right-2 h-6 w-6 border-t border-r border-gold" />
      <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b border-l border-gold" />
      <div className={`flex ${src ? "" : "aspect-[4/5]"} items-center justify-center overflow-hidden border border-line bg-surface`}>
        {src ? (
          <img src={src} alt={label} className="h-auto w-full object-contain" />
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

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div data-reveal className="mx-auto w-full max-w-sm">
            <ScreenshotFrame label="Depoimento Dr. Ivan Gabetta" src={printIvan} />
          </div>

          <div data-reveal className="mx-auto w-full max-w-sm">
            <div className="relative">
              <div className="absolute -top-2 -right-2 h-6 w-6 border-t border-r border-gold" />
              <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b border-l border-gold" />
              <video
                src="/depoimento.mp4"
                controls
                playsInline
                preload="metadata"
                className="relative aspect-[9/16] w-full border border-line bg-surface object-cover"
              />
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
