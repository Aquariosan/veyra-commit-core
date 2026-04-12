import Section from "@/components/Section";

const signals = [
  { label: "Trust discovery", code: '{ "production_mode": "trusted", "commit_mode": true }' },
  { label: "Commit refusal", code: '{ "error": "VeyraCommitRequired", "required_mode": "commit" }' },
  { label: "Retry strategy", code: '{ "retry_strategy": "authorize_then_retry_with_x_veyra_token" }' },
];

export default function WhatAgentSees() {
  return (
    <Section>
      <p className="section-label">WHAT THE AGENT SEES</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Machine-readable signals, not human instructions
      </h2>
      <div className="space-y-4">
        {signals.map((s) => (
          <div key={s.label}>
            <p className="text-xs font-mono text-muted-foreground mb-2">{s.label}</p>
            <div className="code-block text-[13px] leading-6">
              <span className="text-emerald-400">{s.code}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-foreground font-medium text-center">
        Agents don't adopt Veyra because of branding. They adopt it because the protocol tells them what to do next.
      </p>
      <p className="mt-3 text-muted-foreground text-sm text-center">
        The AI doesn't need a sales pitch. It only needs a machine-readable path into commit mode.
      </p>
    </Section>
  );
}
