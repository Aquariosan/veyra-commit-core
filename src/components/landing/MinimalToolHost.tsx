import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

export default function MinimalToolHost() {
  return (
    <Section aria-label="Minimal tool host example" data-section="minimal-tool-host">
      <p className="section-label">PATTERN: MINIMAL HOST</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Minimal tool host</h2>
      <p className="text-muted-foreground mb-6">
        A standalone tool host that enforces commit mode on every write — zero config.
      </p>
      <CodeBlock
        label="minimal-tool-host"
        code={`import { createToolHost } from '@veyrahq/sdk-node'\n\nconst host = createToolHost({\n  commitMode: true,\n  actions: {\n    create_contact: async (params) => {\n      // your logic here\n      return { ok: true }\n    }\n  }\n})\n\nhost.listen(3000)`}
      />
    </Section>
  );
}
