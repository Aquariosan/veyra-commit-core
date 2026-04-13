import veyraIcon from "@/assets/veyra-v-mark.png";

interface Props {
  className?: string;
}

export default function VeyraLogo({ className = "" }: Props) {
  return (
    <div className={`flex items-baseline gap-0 ${className}`} role="img" aria-label="Veyra Logo">
      <img
        src={veyraIcon}
        alt=""
        className="h-12 md:h-16 lg:h-20 w-auto self-center -mr-1"
      />
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
        eyra
      </span>
    </div>
  );
}
