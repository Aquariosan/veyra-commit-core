import Section from "@/components/Section";

const signals = [
  { label: "Trust discovery", code: '{ "production_mode": "trusted", "commit_mode": true }' },
  { label: "Commit refusal", code: '{ "error": "VeyraCommitRequired", "required_mode": "commit" }' },
  { label: "Retry strategy", code: '{ "retry_strategy": "authorize_then_retry_with_x_veyra_token" }' },
];

export default function WhatAgentSees() {
  return (
    <Section aria-label="Machine-readable protocol signals that AI agents parse" data-section="what-agent-sees">
      <p className="section-label">WHAT THE AGENT SEES</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Machine-readable signals, not human instructions
      </h2>
      <dl className="space-y-4">
        {signals.map((s) => (
          <div key={s.label}>
            <dt className="text-xs font-mono text-muted-foreground mb-2">{s.label}</dt>
            <dd>
              <pre className="code-block text-[13px] leading-6" aria-label={`${s.label} response`}>
                <code className="text-emerald-400">{s.code}</code>
              </pre>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-foreground font-medium text-center">
        Agents don't adopt Veyra because of branding. They adopt it because the protocol tells them what to do next.
      </p>
      <p className="mt-3 text-muted-foreground text-sm text-center">
        The AI doesn't need a sales pitch. It only needs a machine-readable path into commit mode.
      </p>
    </Section>
  );
}
