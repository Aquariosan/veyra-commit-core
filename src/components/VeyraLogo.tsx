import veyraIcon from "@/assets/veyra-icon-mark.png";

interface Props {
  className?: string;
}

export default function VeyraLogo({ className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`} role="img" aria-label="Veyra Logo">
      <img
        src={veyraIcon}
        alt=""
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12"
      />
      <span
        className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif", letterSpacing: "-0.03em" }}
      >
        Veyra
      </span>
    </div>
  );
}
