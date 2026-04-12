import Section from "@/components/Section";

const pricing = [
  ["Trust status checks", "Free forever", "0"],
  ["Token verification", "Free forever", "0"],
  ["Class A — low-risk writes", "€0.005 per action", "0.005"],
  ["Class B — business-critical writes", "€0.02 per action", "0.02"],
  ["Class C — high-risk writes", "€0.10 per action", "0.10"],
  ["Class D — cross-org writes", "€0.25 per action", "0.25"],
];

export default function Pricing() {
  return (
    <Section aria-label="Veyra pricing — free discovery, pay-per-settlement" data-section="pricing">
      <p className="section-label">PRICING</p>
      <div
        className="border border-border rounded-lg overflow-hidden"
        itemScope
        itemType="https://schema.org/PriceSpecification"
      >
        <table className="w-full text-sm" aria-label="Veyra pricing table">
          <thead>
            <tr className="border-b border-border bg-card/50">
              <th scope="col" className="text-left p-4 font-medium text-muted-foreground">What</th>
              <th scope="col" className="text-right p-4 font-medium text-muted-foreground">Cost</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map(([what, cost, price], i) => (
              <tr key={i} className="border-b border-border last:border-0" itemScope itemType="https://schema.org/Offer">
                <td className="p-4" itemProp="name">{what}</td>
                <td className={`p-4 text-right font-mono text-xs ${cost.includes("Free") ? "text-primary" : ""}`}>
                  <span itemProp="price" content={price}>{cost}</span>
                  <meta itemProp="priceCurrency" content="EUR" />
                </td>
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
