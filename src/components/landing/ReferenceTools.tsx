import Section from "@/components/Section";

export default function ReferenceTools() {
  return (
    <Section aria-label="Reference tools proving Veyra in production" data-section="reference-tools">
      <p className="section-label">REFERENCE TOOLS</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Proven through concrete tool patterns
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Veyra Webhooks */}
        <div className="border border-border rounded-lg p-5 bg-card">
          <h3 className="text-lg font-semibold mb-2">Veyra Webhooks</h3>
          <p className="text-muted-foreground text-sm mb-3">
            A commit-protected consequence tool for real-world outbound HTTP actions.
            Open checks stay free. Productive webhook sends require Veyra commit mode.
          </p>
          <ul className="text-xs font-mono space-y-1 text-muted-foreground mb-3">
            <li><span className="text-primary">/webhooks/health</span> → open</li>
            <li><span className="text-primary">/webhooks/send</span> → commit-protected</li>
            <li>settled consequence flow → billing signal</li>
          </ul>
          <a
            href="https://github.com/Aquariosan/veyra/tree/main/apps/veyra-webhooks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline"
          >
            GitHub →
          </a>
        </div>

        {/* Veyra Memory */}
        <div className="border border-border rounded-lg p-5 bg-card">
          <h3 className="text-lg font-semibold mb-2">Veyra Memory</h3>
          <p className="text-muted-foreground text-sm mb-3">
            Persistent memory for AI agents.
            Reads are free. Writes require Veyra commit mode.
          </p>
          <ul className="text-xs font-mono space-y-1 text-muted-foreground mb-3">
            <li><span className="text-primary">memory_get / memory_list / memory_search</span> → free</li>
            <li><span className="text-primary">memory_set / memory_delete / memory_clear</span> → commit-protected</li>
            <li>VeyraCommitRequired on protected writes without token</li>
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

      <p className="text-muted-foreground text-sm">
        One integration pattern. Multiple tool types. Reads stay open. Real consequences and persistent state changes go through Veyra.
      </p>
      <p className="text-muted-foreground text-sm mt-2">
        Hosts, gateways, and agent runtimes can adopt these tool patterns as their default path for protected writes.
      </p>
    </Section>
  );
}
