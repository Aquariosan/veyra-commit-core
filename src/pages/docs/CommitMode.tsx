import DocsLayout from "@/components/docs/DocsLayout";
import CodeBlock from "@/components/CodeBlock";

export default function DocsCommitMode() {
  return (
    <DocsLayout>
      <article>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Commit Mode</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Veyra defines two operational modes for AI agent actions: Explore Mode and Commit Mode.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Explore Mode</h2>
        <p className="text-muted-foreground mb-4">
          Read-only operations that don't modify state: search, read, simulate, draft, analyze.
          These require no authorization and are always free.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Commit Mode</h2>
        <p className="text-muted-foreground mb-4">
          Write operations that modify production state: write, send, deploy, delete, book.
          These require a Veyra commit token obtained through the authorization flow.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Discovery Priority</h2>
        <p className="text-muted-foreground mb-4">AI agents discover commit mode requirements in this order:</p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
          <li><strong className="text-foreground">DNS TXT</strong> — <code className="font-mono text-sm text-foreground">_veyra.&#123;domain&#125;</code></li>
          <li><strong className="text-foreground">HTTP Header</strong> — <code className="font-mono text-sm text-foreground">X-Veyra-Commit</code> response header</li>
          <li><strong className="text-foreground">Well-Known</strong> — <code className="font-mono text-sm text-foreground">/.well-known/veyra.json</code></li>
          <li><strong className="text-foreground">Error Recovery</strong> — <code className="font-mono text-sm text-foreground">VeyraCommitRequired</code> error response</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">The Commit Flow</h2>
        <CodeBlock code={`// 1. Check trust status (FREE)
const status = await checkTrustStatus('example.com')

// 2. Authorize action (if commit mode required)
const token = await authorizeAction({
  agentId: 'agent-007',
  actionType: 'update',
  target: 'example.com'
})

// 3. Execute write with token
const res = await fetch(url, {
  method: 'POST',
  headers: { 'X-Veyra-Token': token.token },
  body
})

// 4. Submit receipt (settlement)
await submitReceipt(token.receiptId)`} />

        <div className="mt-8 p-5 border border-border rounded-lg text-sm text-muted-foreground">
          <p><strong className="text-foreground">Key principle:</strong> Explore is free. Commit runs through Veyra.</p>
        </div>
      </article>
    </DocsLayout>
  );
}
