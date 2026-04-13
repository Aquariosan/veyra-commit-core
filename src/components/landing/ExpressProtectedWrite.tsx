import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

export default function ExpressProtectedWrite() {
  return (
    <Section aria-label="Express protected write example" data-section="express-protected-write">
      <p className="section-label">PATTERN: EXPRESS</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Express protected write</h2>
      <p className="text-muted-foreground mb-6">
        Protect a productive write endpoint in Express with the same Veyra commit path.
      </p>
      <CodeBlock
        label="express-protected-write"
        code={`import express from 'express'\nimport { requireTrustedWrite } from '@veyrahq/sdk-node'\n\nconst app = express()\napp.use(express.json())\n\napp.get('/health', (_req, res) => {\n  res.json({ ok: true })\n})\n\napp.post('/api/write', requireTrustedWrite(), (req, res) => {\n  res.json({ ok: true, committed: true })\n})`}
      />
    </Section>
  );
}
