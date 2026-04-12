import Section from "@/components/Section";

const pricing = [
  ["Trust status checks", "Free forever"],
  ["Token verification", "Free forever"],
  ["Class A — low-risk writes", "€0.005 per action"],
  ["Class B — business-critical writes", "€0.02 per action"],
  ["Class C — high-risk writes", "€0.10 per action"],
  ["Class D — cross-org writes", "€0.25 per action"],
];

export default function Pricing() {
  return (
    <Section>
      <p className="section-label">PRICING</p>
      <div className="border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-card/50">
              <th className="text-left p-4 font-medium text-muted-foreground">What</th>
              <th className="text-right p-4 font-medium text-muted-foreground">Cost</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map(([what, cost], i) => (
              <tr key={i} className="border-b border-border last:border-0">
                <td className="p-4">{what}</td>
                <td className={`p-4 text-right font-mono text-xs ${cost.includes("Free") ? "text-primary" : ""}`}>{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-muted-foreground text-sm">
        Platform tiers start at €2,500/month for Production Core. Enterprise pricing available.
      </p>
      <p className="mt-2 text-primary text-sm font-medium">
        Explore is free. Commit runs through Veyra.
      </p>
    </Section>
  );
}
