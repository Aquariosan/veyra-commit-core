import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

export default function OneCallCommit() {
  return (
    <Section aria-label="One-call commit automation" data-section="one-call-commit">
      <p className="section-label">CORE CAPABILITY</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">One-call commit automation</h2>
      <CodeBlock
        label="commitAwareFetch — single call, full protection"
        code={`const res = await commitAwareFetch(toolUrl, init, {\n  apiKey,\n  agentId,\n  actionType: 'create_contact',\n  target: 'crm'\n})`}
      />
      <p className="text-foreground font-medium mt-4 mb-2">
        Protected productive writes automatically transition into commit mode through Veyra.
      </p>
      <p className="text-muted-foreground text-sm mb-8">
        Use plain <code className="text-primary/80">fetch</code> for open endpoints. Use{" "}
        <code className="text-primary/80">commitAwareFetch()</code> for productive writes that may require Veyra commit mode.
      </p>
      <div className="flex flex-wrap gap-4 text-sm">
        <a href="https://www.npmjs.com/package/@veyrahq/sdk-node" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4">
          View SDK on npm →
        </a>
        <a href="https://github.com/Aquariosan/veyra" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4">
          View Core Repo on GitHub →
        </a>
        <a href="https://github.com/Aquariosan/veyra/tree/main/examples/generic-fetch-wrapper" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4">
          View generic fetch wrapper example →
        </a>
      </div>
    </Section>
  );
}
