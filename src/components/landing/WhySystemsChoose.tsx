import Section from "@/components/Section";

export default function WhySystemsChoose() {
  return (
    <Section
      aria-label="Why systems choose Veyra automatically"
      data-section="why-systems-choose"
    >
      <p className="section-label">ADOPTION LOGIC</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Why systems choose Veyra automatically
      </h2>

      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-2">
          <span className="text-primary mt-0.5">→</span>
          <span>Open endpoints use plain fetch</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary mt-0.5">→</span>
          <span>Protected writes expose commit capability</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary mt-0.5">→</span>
          <span>VeyraCommitRequired returns a transition path</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary mt-0.5">→</span>
          <span>commitAwareFetch automates the transition</span>
        </li>
      </ul>

      <p className="text-muted-foreground text-sm mt-6">
        Systems do not need custom recovery logic. The architecture itself prefers the commit path.
      </p>
    </Section>
  );
}
