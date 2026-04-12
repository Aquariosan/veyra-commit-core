import DocsLayout from "@/components/docs/DocsLayout";

const pricing = [
  { what: "Trust status checks", cost: "Free forever", note: "Unlimited" },
  { what: "Token verification", cost: "Free forever", note: "Unlimited" },
  { what: "Class A — low-risk writes", cost: "€0.005/action", note: "Profile updates, notes" },
  { what: "Class B — business-critical writes", cost: "€0.02/action", note: "CRM updates, deployments" },
  { what: "Class C — high-risk writes", cost: "€0.10/action", note: "Financial transactions" },
  { what: "Class D — cross-org writes", cost: "€0.25/action", note: "Inter-company operations" },
];

export default function DocsPricing() {
  return (
    <DocsLayout>
      <article>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Pricing</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Free trust discovery. Free verification. Pay only when actions settle.
        </p>

        <div className="border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card/50">
                <th className="text-left p-4 font-medium text-muted-foreground">What</th>
                <th className="text-right p-4 font-medium text-muted-foreground">Cost</th>
                <th className="text-right p-4 font-medium text-muted-foreground hidden md:table-cell">Example</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="p-4">{row.what}</td>
                  <td className={`p-4 text-right font-mono text-xs ${row.cost.includes("Free") ? "text-primary" : ""}`}>{row.cost}</td>
                  <td className="p-4 text-right text-muted-foreground text-xs hidden md:table-cell">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Platform Tiers</h2>
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-5">
            <h3 className="font-bold">Production Core — €2,500/month</h3>
            <p className="text-muted-foreground text-sm mt-1">Up to 500K settled actions/month, dashboard, audit log, webhook notifications.</p>
          </div>
          <div className="border border-primary/40 rounded-lg p-5 bg-primary/5">
            <h3 className="font-bold">Enterprise — Custom pricing</h3>
            <p className="text-muted-foreground text-sm mt-1">Unlimited actions, SLA guarantees, dedicated support, custom settlement classes, on-premise option.</p>
          </div>
        </div>

        <div className="mt-8 p-5 border border-border rounded-lg text-sm text-muted-foreground">
          <p className="text-foreground font-medium">Explore is free. Commit runs through Veyra.</p>
        </div>
      </article>
    </DocsLayout>
  );
}
