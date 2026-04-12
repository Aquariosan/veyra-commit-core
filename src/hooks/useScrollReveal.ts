import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: make visible after 500ms if observer doesn't trigger
    const fallback = setTimeout(() => setVisible(true), 800);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          clearTimeout(fallback);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px 50px 0px" }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold]);

  return { ref, visible };
}
