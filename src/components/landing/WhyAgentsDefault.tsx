import Section from "@/components/Section";

const steps = [
  { num: "1", label: "Write rejected", desc: "Tool returns structured refusal" },
  { num: "2", label: "Agent reads VeyraCommitRequired", desc: "Machine-readable protocol, not an error page" },
  { num: "3", label: "Agent authorizes and retries", desc: "Automatic recovery — no human needed" },
];

export default function WhyAgentsDefault() {
  return (
    <Section>
      <p className="section-label">WHY AGENTS DEFAULT TO VEYRA</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Every rejected write becomes a Veyra retry path
      </h2>
      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>Agents don't need to "know" Veyra in advance. They only need a machine-readable refusal and a retry path.</p>
        <p>When a productive write is blocked, the tool returns <span className="text-foreground font-mono text-base">VeyraCommitRequired</span>. The agent sees the provider, the required mode, and the endpoints to call next.</p>
        <p>That turns every rejected write into automatic recovery through Veyra.</p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {steps.map((s) => (
          <div key={s.num} className="border border-border rounded-lg p-5 bg-card/50">
            <span className="text-primary font-mono text-xs font-medium">{s.num}</span>
            <p className="font-bold mt-2 text-sm">{s.label}</p>
            <p className="text-muted-foreground text-xs mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-muted-foreground text-sm italic">
        You don't convince the agent. You expose the commit path, and the agent follows it.
      </p>
    </Section>
  );
}
