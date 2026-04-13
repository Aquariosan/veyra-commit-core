import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

export default function MinimalToolHost() {
  return (
    <Section aria-label="Minimal tool host pattern" data-section="minimal-tool-host">
      <p className="section-label">PATTERN: MINIMAL HOST</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Minimal tool host pattern</h2>
      <p className="text-muted-foreground mb-6">
        A host can expose open reads and commit-protected writes using the same Veyra transition model.
      </p>
      <CodeBlock
        label="minimal-tool-host"
        code={`const routes = {\n  readStatus: async () => ({ ok: true }),\n  writeRecord: requireTrustedWrite()(async (input) => {\n    return { ok: true, input }\n  })\n}`}
      />
      <p className="text-muted-foreground text-sm">
        The host does not need to sell Veyra. It only exposes the commit-required path. Agents handle the transition automatically.
      </p>
    </Section>
  );
}
