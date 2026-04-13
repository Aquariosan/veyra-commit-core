import veyraIcon from "@/assets/veyra-v-mark.png";

interface Props {
  className?: string;
}

export default function VeyraLogo({ className = "" }: Props) {
  return (
    <div className={`flex items-center gap-0 ${className}`} role="img" aria-label="Veyra Logo">
      <img
        src={veyraIcon}
        alt=""
        className="h-16 md:h-20 lg:h-24 w-auto shrink-0 self-center -mr-4 md:-mr-5 lg:-mr-6"
      />
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none text-foreground">
        eyra
      </span>
    </div>
  );
}
