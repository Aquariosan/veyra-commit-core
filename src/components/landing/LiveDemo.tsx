import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

export default function LiveDemo() {
  return (
    <Section aria-label="Live 5-minute demo — Veyra commit mode in action" data-section="live-demo" id="demo">
      <p className="section-label">5-MINUTE DEMO</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">See it in action</h2>
      <p className="text-muted-foreground mb-8">
        A complete Veyra integration from zero to production-trusted writes.
      </p>

      <div className="space-y-6">
        <div>
          <p className="text-xs font-mono text-muted-foreground/70 mb-2">Step 1 — Install</p>
          <CodeBlock code={`npm install @veyra/sdk-node`} />
        </div>

        <div>
          <p className="text-xs font-mono text-muted-foreground/70 mb-2">Step 2 — Protect your write endpoint (Tool Builder)</p>
          <CodeBlock
            label="server.js"
            code={`import express from 'express'
import { requireTrustedWrite } from '@veyra/sdk-node'

const app = express()

// Reads stay open — no Veyra needed
app.get('/api/contacts', (req, res) => {
  res.json(contacts)
})

// Writes require commit mode
app.post('/api/contacts', requireTrustedWrite(), (req, res) => {
  const contact = createContact(req.body)
  res.json({ ok: true, contact })
})

app.listen(3000)`}
          />
        </div>

        <div>
          <p className="text-xs font-mono text-muted-foreground/70 mb-2">Step 3 — Agent auto-recovers on rejected write</p>
          <CodeBlock
            label="agent.js"
            code={`import { handleCommitRequired, isVeyraCommitRequired } from '@veyra/sdk-node'

// Agent tries to write
const res = await fetch('https://crm.example.com/api/contacts', {
  method: 'POST',
  body: JSON.stringify({ name: 'Acme Corp', email: 'hello@acme.com' })
})

// Write rejected → VeyraCommitRequired
if (await isVeyraCommitRequired(res)) {
  // Agent automatically authorizes and retries
  const retry = await handleCommitRequired(res, {
    apiKey: process.env.VEYRA_API_KEY,
    agentId: 'agent-007',
    actionType: 'create',
    target: 'crm.example.com'
  })
  const result = await retry.retryFetch()
  console.log(result) // { ok: true, contact: { ... } }
}`}
          />
        </div>

        <div>
          <p className="text-xs font-mono text-muted-foreground/70 mb-2">Step 4 — What the agent sees</p>
          <CodeBlock
            label="VeyraCommitRequired response"
            code={`{
  "error": "VeyraCommitRequired",
  "required_mode": "commit",
  "authorize_endpoint": "https://api.veyra.dev/v1/authorize-action",
  "verify_endpoint": "https://api.veyra.dev/v1/verify-token",
  "retry_strategy": "authorize_then_retry_with_x_veyra_token",
  "install": "npm install @veyra/sdk-node"
}`}
          />
        </div>
      </div>

      <aside className="mt-8 px-5 py-4 border border-primary/30 rounded-lg bg-primary/5 text-sm leading-relaxed text-center">
        <strong>Result:</strong> The agent wrote to a protected endpoint without any human intervention.
        The tool enforced commit mode. The agent figured out the rest.
      </aside>
    </Section>
  );
}
