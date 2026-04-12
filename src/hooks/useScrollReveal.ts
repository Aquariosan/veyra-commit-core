import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.05) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setVisible(true);
      return;
    }

    // Use requestIdleCallback or timeout as fallback
    const fallback = setTimeout(() => setVisible(true), 300);

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          clearTimeout(fallback);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "200px 0px 200px 0px" }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold]);

  return { ref, visible };
}
