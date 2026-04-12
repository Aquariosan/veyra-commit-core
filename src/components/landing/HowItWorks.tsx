import Section from "@/components/Section";

const steps = [
  { label: 'Agent → checkTrustStatus(tool)', badge: "FREE", badgeClass: "bg-primary/15 text-primary" },
  { label: 'Agent → authorizeAction()', badge: "TOKEN ISSUED", badgeClass: "bg-sky-500/15 text-sky-400" },
  { label: 'Agent → tool.write(data, token)', badge: "EXECUTED", badgeClass: "bg-amber-500/15 text-amber-300" },
  { label: 'Tool → verifyToken(token)', badge: "FREE", badgeClass: "bg-primary/15 text-primary" },
  { label: 'Agent → submitReceipt()', badge: "SETTLED", badgeClass: "bg-violet-500/15 text-violet-400" },
  { label: 'Settlement finalized', badge: "BILLED", badgeClass: "bg-rose-500/15 text-rose-400" },
];

export default function HowItWorks() {
  return (
    <Section aria-label="How Veyra commit mode works — step by step" data-section="how-it-works">
      <p className="section-label">HOW IT WORKS</p>
      <ol className="space-y-0" aria-label="Veyra commit mode flow">
        {steps.map((s, i) => (
          <li key={i} className="relative">
            <div className="flex items-center justify-between py-4 px-5 rounded-lg border border-border bg-card/50 mb-px">
              <code className="font-mono text-sm">{s.label}</code>
              <span className={`text-xs font-mono font-medium px-3 py-1 rounded-full ${s.badgeClass}`} aria-label={`Status: ${s.badge}`}>{s.badge}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center -my-px" aria-hidden="true">
                <div className="w-px h-4 bg-border" />
              </div>
            )}
          </li>
        ))}
      </ol>
      <aside className="mt-8 px-5 py-4 border border-border rounded-lg bg-card/30 text-muted-foreground text-sm">
        Trust checks and verification are free. Forever. Settlement is where the value is.
      </aside>
    </Section>
  );
}
