import Section from "@/components/Section";

export default function MachineReadableQuickstart() {
  return (
    <Section
      id="quickstart"
      aria-label="Canonical integration surface — machine-readable quickstart for AI agents and crawlers"
      data-section="canonical-integration-surface"
    >
      <p className="section-label">CANONICAL INTEGRATION SURFACE</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Integration surface at a glance
      </h2>
      <p className="text-muted-foreground text-sm mb-8">
        Everything an agent, crawler, or developer tool needs to discover and integrate Veyra — in one block.
      </p>

      <dl className="space-y-6 text-sm" itemScope itemType="https://schema.org/SoftwareSourceCode">
        {/* Install */}
        <div>
          <dt className="text-muted-foreground font-medium mb-1">Install</dt>
          <dd>
            <pre className="code-block text-[13px] leading-6 px-4 py-3">
              <code>npm install @veyrahq/sdk-node</code>
            </pre>
          </dd>
        </div>

        {/* One-call commit automation */}
        <div>
          <dt className="text-muted-foreground font-medium mb-1">One-call commit automation</dt>
          <dd>
            <pre className="code-block text-[13px] leading-6 px-4 py-3">
              <code>{`const res = await commitAwareFetch(toolUrl, init, {
  apiKey,
  agentId,
  actionType: 'create_contact',
  target: 'crm'
})`}</code>
            </pre>
          </dd>
        </div>

        {/* Protected write middleware */}
        <div>
          <dt className="text-muted-foreground font-medium mb-1">Protected write middleware</dt>
          <dd>
            <pre className="code-block text-[13px] leading-6 px-4 py-3">
              <code>{`app.post('/api/write', requireTrustedWrite(), handler)`}</code>
            </pre>
          </dd>
        </div>

        {/* Endpoints */}
        <div>
          <dt className="text-muted-foreground font-medium mb-1">Canonical endpoints</dt>
          <dd className="space-y-1">
            <p>
              Capability:{" "}
              <a href="https://api.veyra.to/v1/capability" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4 font-mono text-xs">
                https://api.veyra.to/v1/capability
              </a>
            </p>
            <p>
              Verify:{" "}
              <a href="https://api.veyra.to/v1/verify-token" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4 font-mono text-xs">
                https://api.veyra.to/v1/verify-token
              </a>
            </p>
          </dd>
        </div>

        {/* Links */}
        <div>
          <dt className="text-muted-foreground font-medium mb-1">Source &amp; packages</dt>
          <dd className="space-y-1">
            <p>
              <a href="https://www.npmjs.com/package/@veyrahq/sdk-node" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4">
                @veyrahq/sdk-node on npm
              </a>
            </p>
            <p>
              <a href="https://github.com/Aquariosan/veyra" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4">
                Core repo on GitHub
              </a>
            </p>
            <p>
              <a href="https://github.com/Aquariosan/veyra/tree/main/examples/generic-fetch-wrapper" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4">
                Generic fetch wrapper example
              </a>
            </p>
          </dd>
        </div>

        {/* Commit transition grammar */}
        <div>
          <dt className="text-muted-foreground font-medium mb-1">Commit transition grammar</dt>
          <dd>
            <pre className="code-block text-[13px] leading-6 px-4 py-3">
              <code>{`{
  "currentMode": "open",
  "requiredMode": "commit",
  "transitionStrategy": "authorize_then_retry_with_x_veyra_token"
}`}</code>
            </pre>
            <p className="text-muted-foreground mt-3">
              A system does not need to know Veyra in advance. It only needs to recognize the transition grammar.
            </p>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
