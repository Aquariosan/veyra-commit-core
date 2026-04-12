import { useEffect, useRef, useState } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return { ref, visible };
}
