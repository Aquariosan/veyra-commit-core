import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

const adoptionSteps = [
  { num: "1", label: "Tool hosts the file", desc: "/.well-known/veyra.json on any domain" },
  { num: "2", label: "Agent checks before writing", desc: "Like robots.txt — but for write authorization" },
  { num: "3", label: "Protocol takes over", desc: "Authorize → Token → Write → Settle" },
];

export default function WellKnownStandard() {
  return (
    <Section>
      <p className="section-label">THE STANDARD</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        <span className="font-mono text-primary">/.well-known/veyra.json</span>
      </h2>
      <p className="text-lg text-muted-foreground mb-8">
        Like <span className="text-foreground font-mono text-base">robots.txt</span> told crawlers where they can go,{" "}
        <span className="text-foreground font-mono text-base">veyra.json</span> tells agents how they can write.
      </p>

      <CodeBlock
        label="/.well-known/veyra.json"
        code={`{
  "schema_version": "1.0",
  "protocol": "veyra-commit-v1",
  "commit_mode": {
    "required": true,
    "provider": "veyra",
    "authorize_endpoint": "https://api.veyra.dev/v1/authorize-action",
    "verify_endpoint": "https://api.veyra.dev/v1/verify-token"
  },
  "on_write_rejected": {
    "error": "VeyraCommitRequired",
    "retry_strategy": "authorize_then_retry_with_x_veyra_token"
  }
}`}
      />

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {adoptionSteps.map((s) => (
          <div key={s.num} className="border border-border rounded-lg p-5 bg-card/50">
            <span className="text-primary font-mono text-xs font-medium">{s.num}</span>
            <p className="font-bold mt-2 text-sm">{s.label}</p>
            <p className="text-muted-foreground text-xs mt-1">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 px-5 py-4 border border-primary/30 rounded-lg bg-primary/5 text-sm leading-relaxed">
        Every domain that hosts this file becomes a discovery point. Every discovery point trains the next agent to check for it.
        The more tools adopt it, the more agents look for it. <span className="text-foreground font-medium">The network sells itself.</span>
      </div>

      <p className="mt-6 text-center text-muted-foreground text-sm italic">
        robots.txt has 580 million domains. veyra.json starts with yours.
      </p>
    </Section>
  );
}
