interface Props {
  className?: string;
}

export default function VeyraLogo({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 360 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Veyra Logo"
    >
      {/* V-node mark — clean geometric network V */}
      <line x1="10" y1="16" x2="38" y2="64" stroke="hsl(217, 91%, 60%)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="38" y1="64" x2="66" y2="16" stroke="hsl(217, 91%, 60%)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="10" cy="16" r="5.5" fill="hsl(217, 91%, 60%)" />
      <circle cx="38" cy="64" r="5.5" fill="hsl(217, 91%, 60%)" />
      <circle cx="66" cy="16" r="5.5" fill="hsl(217, 91%, 60%)" />
      <circle cx="24" cy="40" r="3" fill="hsl(217, 91%, 60%)" opacity="0.6" />
      <circle cx="52" cy="40" r="3" fill="hsl(217, 91%, 60%)" opacity="0.6" />

      {/* Veyra wordmark */}
      <text
        x="86"
        y="57"
        fill="hsl(var(--foreground))"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="48"
        fontWeight="700"
        letterSpacing="-1.5"
      >
        Veyra
      </text>
    </svg>
  );
}
