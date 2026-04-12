import DocsLayout from "@/components/docs/DocsLayout";

const endpoints = [
  {
    method: "GET",
    path: "/v1/trust-status/{domain}",
    desc: "Check if a domain requires commit mode",
    cost: "Free",
    example: '{ "domain": "salesforce.com", "production_mode": "trusted", "commit_mode": true, "provider": "veyra" }',
  },
  {
    method: "POST",
    path: "/v1/authorize-action",
    desc: "Obtain a commit token for a write action",
    cost: "Free",
    example: '{ "token": "vt_abc123...", "expires_in": 300, "receipt_id": "rcp_xyz789" }',
  },
  {
    method: "POST",
    path: "/v1/verify-token",
    desc: "Verify a commit token (called by the tool)",
    cost: "Free",
    example: '{ "valid": true, "agent_id": "agent-007", "action_type": "update", "expires_at": "..." }',
  },
  {
    method: "POST",
    path: "/v1/submit-receipt",
    desc: "Finalize settlement after a successful write",
    cost: "Billed",
    example: '{ "settled": true, "class": "A", "cost": "€0.005" }',
  },
];

export default function DocsApiReference() {
  return (
    <DocsLayout>
      <article>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">API Reference</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Base URL: <code className="font-mono text-foreground">https://api.veyra.dev</code>
        </p>

        <div className="space-y-8">
          {endpoints.map((ep) => (
            <section key={ep.path} className="border border-border rounded-lg overflow-hidden">
              <div className="p-4 bg-card/50 border-b border-border flex items-center gap-3">
                <span className={`font-mono text-xs font-bold px-2 py-1 rounded ${ep.method === "GET" ? "bg-primary/15 text-primary" : "bg-amber-500/15 text-amber-300"}`}>
                  {ep.method}
                </span>
                <code className="font-mono text-sm">{ep.path}</code>
                <span className={`ml-auto text-xs font-mono ${ep.cost === "Free" ? "text-primary" : "text-amber-300"}`}>{ep.cost}</span>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground text-sm mb-3">{ep.desc}</p>
                <p className="text-xs font-mono text-muted-foreground/70 mb-1">Response example:</p>
                <pre className="code-block text-[12px] leading-5">
                  <code className="text-emerald-400">{ep.example}</code>
                </pre>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 p-5 border border-border rounded-lg text-sm text-muted-foreground">
          <p><strong className="text-foreground">Authentication:</strong> Include your API key as <code className="font-mono text-foreground text-xs">Authorization: Bearer tr_...</code></p>
          <p className="mt-2"><strong className="text-foreground">OpenAPI Spec:</strong> <a href="https://veyra.dev/openapi.json" className="text-primary hover:underline">https://veyra.dev/openapi.json</a></p>
        </div>
      </article>
    </DocsLayout>
  );
}
