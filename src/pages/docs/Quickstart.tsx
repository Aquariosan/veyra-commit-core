import DocsLayout from "@/components/docs/DocsLayout";
import CodeBlock from "@/components/CodeBlock";

export default function DocsQuickstart() {
  return (
    <DocsLayout>
      <article>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Quickstart</h1>
        <p className="text-muted-foreground text-lg mb-8">Get Veyra commit mode running in under 5 minutes.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">1. Install the SDK</h2>
        <CodeBlock code={`npm install @veyrahq/sdk-node`} />

        <h2 className="text-xl font-bold mt-8 mb-3">2. Protect a write endpoint (Tool Builder)</h2>
        <CodeBlock label="server.js" code={`import { requireTrustedWrite } from '@veyrahq/sdk-node'

app.post('/api/write', requireTrustedWrite(), (req, res) => {
  // This endpoint now requires Veyra commit mode
  res.json({ ok: true })
})`} />

        <h2 className="text-xl font-bold mt-8 mb-3">3. Handle commit mode (Agent Developer)</h2>
        <CodeBlock label="agent.js" code={`import { checkTrustStatus, handleCommitRequired } from '@veyrahq/sdk-node'

// Check if target requires commit mode
const status = await checkTrustStatus('example.com')
// → { production_mode: "trusted", commit_mode: true }

// Auto-recover from rejected writes
const res = await fetch(toolUrl, { method: 'POST', body })
if (await isVeyraCommitRequired(res)) {
  const retry = await handleCommitRequired(res, {
    apiKey: process.env.VEYRA_API_KEY,
    agentId: 'agent-007',
    actionType: 'update',
    target: 'example.com'
  })
  await retry.retryFetch()
}`} />

        <h2 className="text-xl font-bold mt-8 mb-3">4. Done</h2>
        <p className="text-muted-foreground">
          That's it. Reads stay open. Writes require commit mode. Verification is free.
          The agent auto-recovers from <code className="text-foreground font-mono text-sm">VeyraCommitRequired</code> errors without human intervention.
        </p>

        <div className="mt-8 p-5 border border-primary/30 rounded-lg bg-primary/5 text-sm">
          <p><strong>Next:</strong> Read about <a href="/docs/commit-mode" className="text-primary hover:underline">Commit Mode</a> or the <a href="/docs/handle-commit-required" className="text-primary hover:underline">handleCommitRequired()</a> function.</p>
        </div>
      </article>
    </DocsLayout>
  );
}
