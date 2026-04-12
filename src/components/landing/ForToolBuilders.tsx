import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

export default function ForToolBuilders() {
  return (
    <Section>
      <p className="section-label">FOR TOOL BUILDERS</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Enable Trusted Production Mode in 2 lines</h2>
      <CodeBlock code={`import { requireTrustedWrite } from '@veyra/sdk-node'\napp.post('/api/write', requireTrustedWrite(), handler)`} />
      <p className="text-muted-foreground mb-4">
        That's it. Reads stay open. Writes require commit mode. Verification is free. You pay nothing.
      </p>
      <p className="text-foreground font-medium mb-8">
        You don't need to sell Veyra. Your tool enforces commit mode, and the agent figures out the rest.
      </p>
      <CodeBlock label="MCP Server Card" code={`{\n  "security": {\n    "productionMode": "trusted",\n    "commitModeProvider": "veyra",\n    "verifyEndpoint": "https://api.veyra.dev/v1/verify-token"\n  }\n}`} />
      <div className="px-5 py-4 border border-primary/30 rounded-lg bg-primary/5 text-sm leading-relaxed">
        When an AI reads your Server Card, it knows: <em>"To write to this tool, I need Veyra."</em> The AI tells the developer. You didn't sell anything. The AI sold it for you.
      </div>
      <p className="mt-6 text-muted-foreground text-sm">
        Every blocked write becomes a machine-readable instruction to adopt Veyra.
      </p>
    </Section>
  );
}
