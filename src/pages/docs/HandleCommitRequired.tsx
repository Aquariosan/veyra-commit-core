import DocsLayout from "@/components/docs/DocsLayout";
import CodeBlock from "@/components/CodeBlock";

export default function DocsHandleCommitRequired() {
  return (
    <DocsLayout>
      <article>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">handleCommitRequired()</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Automatic recovery when a tool rejects a write with <code className="font-mono text-foreground">VeyraCommitRequired</code>.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">The VeyraCommitRequired Error</h2>
        <p className="text-muted-foreground mb-4">
          When a tool requires commit mode, it returns a structured error that tells the agent exactly what to do:
        </p>
        <CodeBlock label="VeyraCommitRequired response" code={`{
  "error": "VeyraCommitRequired",
  "required_mode": "commit",
  "authorize_endpoint": "https://api.veyra.dev/v1/authorize-action",
  "verify_endpoint": "https://api.veyra.dev/v1/verify-token",
  "retry_strategy": "authorize_then_retry_with_x_veyra_token",
  "install": "npm install @veyrahq/sdk-node"
}`} />

        <h2 className="text-xl font-bold mt-8 mb-3">Usage</h2>
        <CodeBlock label="Automatic recovery" code={`import { isVeyraCommitRequired, handleCommitRequired } from '@veyrahq/sdk-node'

const res = await fetch(toolUrl, { method: 'POST', body })

if (await isVeyraCommitRequired(res)) {
  const retry = await handleCommitRequired(res, {
    apiKey: process.env.VEYRA_API_KEY,
    agentId: 'agent-007',
    actionType: 'create',
    target: 'crm.example.com'
  })

  const result = await retry.retryFetch()
  // Write succeeded — token was automatically obtained and attached
}`} />

        <h2 className="text-xl font-bold mt-8 mb-3">Parameters</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card/50">
                <th className="text-left p-3 font-medium text-muted-foreground">Parameter</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Type</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="p-3 font-mono text-xs">apiKey</td><td className="p-3 text-muted-foreground">string</td><td className="p-3 text-muted-foreground">Your Veyra API key</td></tr>
              <tr className="border-b border-border"><td className="p-3 font-mono text-xs">agentId</td><td className="p-3 text-muted-foreground">string</td><td className="p-3 text-muted-foreground">Unique agent identifier</td></tr>
              <tr className="border-b border-border"><td className="p-3 font-mono text-xs">actionType</td><td className="p-3 text-muted-foreground">string</td><td className="p-3 text-muted-foreground">create | update | delete | send | deploy</td></tr>
              <tr><td className="p-3 font-mono text-xs">target</td><td className="p-3 text-muted-foreground">string</td><td className="p-3 text-muted-foreground">Target domain or resource</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">How it works internally</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
          <li>Parses the <code className="font-mono text-foreground">VeyraCommitRequired</code> error from the response</li>
          <li>Calls the <code className="font-mono text-foreground">authorize_endpoint</code> to obtain a commit token</li>
          <li>Attaches the <code className="font-mono text-foreground">X-Veyra-Token</code> header to the retry request</li>
          <li>Returns a <code className="font-mono text-foreground">retryFetch()</code> function that replays the original request with the token</li>
        </ol>
      </article>
    </DocsLayout>
  );
}
