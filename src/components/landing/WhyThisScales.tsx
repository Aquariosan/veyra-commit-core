import Section from "@/components/Section";

export default function WhyThisScales() {
  return (
    <Section>
      <p className="section-label">WHY THIS SCALES</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Free discovery at internet scale. Paid settlement at production scale.
      </h2>
      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>Trust checks and verification are public, cacheable and effectively free to run at massive scale.</p>
        <p>Veyra monetizes where the value actually is: delegated writes, receipts, settlement and production controls.</p>
        <p>That lets the discovery layer spread everywhere, while revenue concentrates around real execution.</p>
      </div>
    </Section>
  );
}
