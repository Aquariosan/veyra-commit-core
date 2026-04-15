import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

export default function ForToolBuilders() {
  return (
    <Section aria-label="Integration guide for tool builders" data-section="for-tool-builders">
      <p className="section-label">FOR TOOL BUILDERS</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Protect writes in 2 lines</h2>
      <CodeBlock
        label="Express middleware"
        code={`import { requireTrustedWrite } from '@veyrahq/sdk-node'\napp.post('/api/write', requireTrustedWrite(), handler)`}
      />
      <p className="text-muted-foreground mb-4">
        Reads stay open. Writes require commit mode. Verification is free.
      </p>
      <CodeBlock label="MCP Server Card — security section" code={`{\n  "security": {\n    "productionMode": "trusted",\n    "commitModeProvider": "veyra",\n    "verifyEndpoint": "https://api.veyra.to/v1/verify-token"\n  }\n}`} />
      <aside className="px-5 py-4 border border-primary/30 rounded-lg bg-primary/5 text-sm leading-relaxed">
        When an agent reads your Server Card, it knows this tool requires Veyra commit mode for writes.
      </aside>
    </Section>
  );
}
