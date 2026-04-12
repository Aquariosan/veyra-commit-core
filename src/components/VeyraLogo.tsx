interface Props {
  className?: string;
}

export default function VeyraLogo({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 320 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Veyra Logo"
    >
      {/* V node mark */}
      <line x1="12" y1="18" x2="40" y2="62" stroke="hsl(217, 91%, 60%)" strokeWidth="4" strokeLinecap="round" />
      <line x1="40" y1="62" x2="68" y2="18" stroke="hsl(217, 91%, 60%)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="12" cy="18" r="5" fill="hsl(217, 91%, 60%)" />
      <circle cx="40" cy="62" r="5" fill="hsl(217, 91%, 60%)" />
      <circle cx="68" cy="18" r="5" fill="hsl(217, 91%, 60%)" />
      <circle cx="26" cy="40" r="3" fill="hsl(217, 91%, 60%)" />
      <circle cx="54" cy="40" r="3" fill="hsl(217, 91%, 60%)" />

      {/* Veyra text */}
      <text
        x="88"
        y="56"
        fill="hsl(var(--foreground))"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="46"
        fontWeight="700"
        letterSpacing="-1"
      >
        Veyra
      </text>
    </svg>
  );
}
