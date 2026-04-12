import { useEffect, useRef, useState } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true); // Start visible — no layout issues

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If element is already in viewport, keep visible
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      return; // Already visible
    }

    // Only hide elements below the fold, then reveal on scroll
    setVisible(false);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "100px 0px 100px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}
