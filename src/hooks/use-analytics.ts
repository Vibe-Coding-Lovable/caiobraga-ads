import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const push = (payload: Record<string, unknown>) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
};

const isWhatsApp = (el: HTMLAnchorElement | null) =>
  !!el?.href && /wa\.me|api\.whatsapp\.com|whatsapp:/i.test(el.href);

export function useAnalytics() {
  useEffect(() => {
    // 1. Delegated click tracking on [data-event]
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(
        "[data-event]",
      ) as HTMLElement | null;
      if (!target) return;
      const name = target.getAttribute("data-event") || "cta_click";
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      const isWA = isWhatsApp(anchor);

      push({
        event: "cta_click",
        cta_location: name,
        cta_destination: isWA ? "whatsapp" : anchor?.href || "internal",
      });

      if (isWA) {
        push({
          event: "generate_lead",
          method: "whatsapp",
          cta_location: name,
        });
      }
    };
    document.addEventListener("click", onClick);

    // 2. Video play (depoimento)
    const videos = Array.from(document.querySelectorAll("video"));
    const onPlay = (e: Event) => {
      const v = e.target as HTMLVideoElement;
      push({
        event: "video_play",
        video_src: v.currentSrc || v.src,
      });
    };
    videos.forEach((v) => v.addEventListener("play", onPlay, { once: true }));

    // 3. Scroll depth (25, 50, 75, 90)
    const milestones = [25, 50, 75, 90];
    const fired = new Set<number>();
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled =
        ((h.scrollTop + window.innerHeight) / h.scrollHeight) * 100;
      milestones.forEach((m) => {
        if (scrolled >= m && !fired.has(m)) {
          fired.add(m);
          push({ event: "scroll_depth", percent: m });
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("click", onClick);
      videos.forEach((v) => v.removeEventListener("play", onPlay));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
