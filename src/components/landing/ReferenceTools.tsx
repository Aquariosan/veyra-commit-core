import Section from "@/components/Section";

export default function ReferenceTools() {
  return (
    <Section aria-label="Reference tools proving Veyra in production" data-section="reference-tools">
      <p className="section-label">REFERENCE TOOLS</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Reference tools
      </h2>
      <p className="text-muted-foreground text-sm mb-8">
        Live, public tool patterns that prove how Veyra works in real agent systems.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Veyra Webhooks */}
        <div className="border border-border rounded-lg p-5 bg-card">
          <h3 className="text-lg font-semibold mb-2">Veyra Webhooks</h3>
          <p className="text-muted-foreground text-sm mb-3">
            A commit-protected consequence tool for real-world outbound HTTP actions.
            Open checks stay free. Productive webhook sends require Veyra commit mode.
          </p>
          <ul className="text-xs font-mono space-y-1 text-muted-foreground mb-4">
            <li><span className="text-primary">/webhooks/health</span> → open</li>
            <li><span className="text-primary">/webhooks/send</span> → commit-protected</li>
            <li>blocked write → authorize → execute → receipt → settle</li>
            <li>settled consequence flow → billing signal</li>
          </ul>
          <div className="flex gap-3">
            <a
              href="https://github.com/Aquariosan/veyra/tree/main/apps/veyra-webhooks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline"
            >
              Core repo →
            </a>
            <a
              href="https://github.com/Aquariosan/veyra/tree/main/examples/veyra-webhooks-flow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline"
            >
              Example flow →
            </a>
          </div>
        </div>

        {/* Veyra Memory */}
        <div className="border border-border rounded-lg p-5 bg-card">
          <h3 className="text-lg font-semibold mb-2">Veyra Memory</h3>
          <p className="text-muted-foreground text-sm mb-3">
            Persistent memory for AI agents.
            Reads are free. Writes require Veyra commit mode.
          </p>
          <ul className="text-xs font-mono space-y-1 text-muted-foreground mb-4">
            <li><span className="text-primary">memory_get / memory_list / memory_search</span> → free</li>
            <li><span className="text-primary">memory_set / memory_delete / memory_clear</span> → commit-protected</li>
            <li>protected writes return <span className="text-primary">VeyraCommitRequired</span> without token</li>
            <li>MCP-ready persistent state pattern</li>
          </ul>
          <div className="flex gap-3">
            <a
              href="https://github.com/Aquariosan/veyra-memory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline"
            >
              GitHub →
            </a>
            <a
              href="https://www.npmjs.com/package/veyra-memory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline"
            >
              npm →
            </a>
          </div>
        </div>
      </div>

      {/* Supporting band */}
      <p className="text-muted-foreground text-sm mb-2">
        One integration pattern. Multiple tool types. Reads stay open. Real consequences and persistent state changes go through Veyra.
      </p>
      <p className="text-muted-foreground text-sm mb-6">
        Hosts, gateways, MCP routers, and agent runtimes do not need a separate proxy layer. Any tool that adopts the Veyra pattern becomes its own commit gateway for protected writes.
      </p>

      {/* Inline code pattern */}
      <div className="flex flex-wrap gap-2 mb-6">
        <code className="text-xs font-mono bg-muted px-2 py-1 rounded text-primary">requireTrustedWrite()</code>
        <code className="text-xs font-mono bg-muted px-2 py-1 rounded text-primary">commitAwareFetch()</code>
        <code className="text-xs font-mono bg-muted px-2 py-1 rounded text-primary">handleCommitRequired()</code>
      </div>

      {/* Why this matters micro-block */}
      <div className="border-l-2 border-primary/30 pl-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Why this matters</p>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>Proves live tool-level adoption</li>
          <li>Shows free reads / protected writes separation</li>
          <li>Makes commit mode directly consumable by agent systems</li>
          <li>Turns productive agent actions into attributable, verifiable, settleable flows</li>
        </ul>
      </div>
    </Section>
  );
}
