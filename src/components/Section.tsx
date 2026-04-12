import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-label"?: string;
  "data-section"?: string;
}

export default function Section({ children, className = "", id, ...rest }: Props) {
  const { ref, visible } = useScrollReveal();
  return (
    <section
      id={id}
      ref={ref}
      aria-label={rest["aria-label"]}
      data-section={rest["data-section"]}
      className={`py-24 md:py-32 px-6 md:px-8 max-w-4xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
