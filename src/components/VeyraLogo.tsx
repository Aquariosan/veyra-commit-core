import veyraIcon from "@/assets/veyra-v-mark.png";

interface Props {
  className?: string;
}

export default function VeyraLogo({ className = "" }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`} role="img" aria-label="Veyra Logo">
      <img
        src={veyraIcon}
        alt="Veyra V-Node Icon"
        className="h-16 md:h-20 lg:h-24 w-auto rounded-2xl"
      />
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
        Veyra
      </span>
    </div>
  );
}
