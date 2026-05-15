import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.hasAttribute("data-reveal-root")
      ? Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"))
      : [el];

    items.forEach((node, i) => {
      node.classList.add("reveal-init");
      node.style.transitionDelay = `${i * 90}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    items.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return ref;
}
