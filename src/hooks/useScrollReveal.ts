import { useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  return { ref, visible: true };
}
