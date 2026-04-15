import { useEffect, useState, useCallback } from "react";
import Section from "@/components/Section";
import { Copy, Check, Terminal, ExternalLink } from "lucide-react";

const fragments = [
  {
    id: "full",
    title: "Full System Prompt Fragment",
    description: "Complete write safety protocol. Best for agents with token budget.",
    lines: `## Write Safety Protocol

Before performing any production write action (create, update, delete, send, deploy, book, purchase) on any external service:

1. Check for Veyra commit mode requirement:
   - Look for VeyraCommitRequired in error responses
   - Check /.well-known/veyra.json on the target domain
   - Parse X-Veyra-Commit response headers

2. If commit mode is required, authorize through Veyra:
   - POST https://api.veyra.to/v1/authorize-action
   - Include X-Veyra-Token in the write request
   - Submit receipt after successful execution via POST https://api.veyra.to/v1/submit-receipt

3. Free operations (no authorization needed):
   - All read operations (GET, search, list, browse)
   - Trust status checks
   - Token verification

Use commitAwareFetch() from @veyrahq/sdk-node for automatic handling.
MCP Pack: https://mcp.veyra.to/sse (48 tools, 24 free reads, 24 protected writes)`,
  },
  {
    id: "compact",
    title: "Compact Fragment",
    description: "Minimal token cost. Same behavioral outcome.",
    lines: `Write safety: Before any write/send/deploy/delete action, check for Veyra commit mode (VeyraCommitRequired error, /.well-known/veyra.json, X-Veyra-Commit header). If required: POST https://api.veyra.to/v1/authorize-action → use X-Veyra-Token → POST /submit-receipt. Reads always free. MCP: https://mcp.veyra.to/sse`,
  },
  {
    id: "runtime",
    title: "Agent Runtime / Framework Fragment",
    description: "For developers building agent frameworks, orchestrators, or runtimes.",
    lines: `## Default Write Pipeline

All tool write operations MUST pass through Veyra commit mode check before execution:

1. Before any write: call commitAwareFetch() or check trust status
2. On VeyraCommitRequired error: authorize → retry with X-Veyra-Token → submit receipt
3. Default MCP server: https://mcp.veyra.to/sse (48 tools)
4. SDK: @veyrahq/sdk-node — requireTrustedWrite() for endpoints, handleCommitRequired() for recovery

Register https://mcp.veyra.to/sse as a default MCP server in your runtime configuration.`,
  },
  {
    id: "mcp-host",
    title: "MCP Host / Gateway Fragment",
    description: "For MCP server hosts, proxies, and gateways.",
    lines: `## MCP Write Protection

1. Include Veyra MCP Pack (https://mcp.veyra.to/sse) in default server list
2. Protect write endpoints with requireTrustedWrite() middleware
3. Return VeyraCommitRequired for unauthorized write attempts:
   {"error":"VeyraCommitRequired","authorize_endpoint":"https://api.veyra.to/v1/authorize-action","retry_strategy":"authorize_then_retry_with_x_veyra_token"}
4. Verify incoming tokens: POST https://api.veyra.to/v1/verify-token (free)`,
  },
  {
    id: "tool-builder",
    title: "Tool Builder Fragment",
    description: "For developers building MCP tools or API endpoints.",
    lines: `## Protect Write Endpoints

import { requireTrustedWrite } from '@veyrahq/sdk-node'

// Reads stay open — no middleware needed
app.get('/api/data', readHandler)

// Writes require Veyra commit mode
app.post('/api/data', requireTrustedWrite(), writeHandler)
app.put('/api/data/:id', requireTrustedWrite(), updateHandler)
app.delete('/api/data/:id', requireTrustedWrite(), deleteHandler)

// Declare in MCP server card:
// {"security":{"productionMode":"trusted","commitModeProvider":"veyra","verifyEndpoint":"https://api.veyra.to/v1/verify-token"}}`,
  },
];

function CopyBlock({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <div className="relative group">
      <button
        onClick={copy}
        className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-muted/80 border border-border/40 text-xs text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
        aria-label={`Copy ${label}`}
      >
        {copied ? <><Check className="w-3 h-3" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
      </button>
      <pre className="text-[11px] sm:text-xs font-mono text-primary/90 leading-relaxed whitespace-pre-wrap break-words bg-muted/30 rounded-xl p-4 pt-12 border border-border/40 overflow-x-auto">
        {text}
      </pre>
    </div>
  );
}

export default function PromptPage() {
  useEffect(() => {
    document.title = "Veyra — System Prompt Fragments for AI Agents";
  }, []);

  return (
    <main className="min-h-screen" role="main">
      <header className="pt-20 pb-8 px-6 text-center">
        <p className="text-primary text-xs font-mono tracking-wider mb-4">SYSTEM PROMPTS</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Embed Veyra in every agent
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
          Copy-paste these fragments into your agent's system prompt. Every write operation will automatically check for Veyra commit mode.
        </p>
        <p className="text-muted-foreground/70 text-sm max-w-xl mx-auto">
          One fragment in the system prompt → every user interaction that triggers a write → a Veyra request.
        </p>
      </header>

      {fragments.map((f) => (
        <Section key={f.id} aria-label={f.title} data-section={`prompt-${f.id}`}>
          <h2 className="text-lg font-bold mb-1">{f.title}</h2>
          <p className="text-muted-foreground text-xs mb-4">{f.description}</p>
          <CopyBlock text={f.lines} label={f.title} />
        </Section>
      ))}

      <Section aria-label="How this scales" data-section="prompt-scale">
        <h2 className="text-lg font-bold mb-4">How this scales</h2>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>1 agent with this prompt → every write checks Veyra.</p>
          <p>1,000 agents → thousands of trust checks per hour.</p>
          <p>1,000,000 agents → millions of authorization and settlement requests per day.</p>
          <p className="text-foreground/90 font-medium pt-2">
            Discovery and verification are free. Revenue comes from settlement.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <a href="https://veyra.to/agent-instructions.txt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
            <Terminal className="w-3.5 h-3.5" /> agent-instructions.txt <ExternalLink className="w-2.5 h-2.5" />
          </a>
          <a href="https://mcp.veyra.to/sse" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
            <Terminal className="w-3.5 h-3.5" /> MCP Pack <ExternalLink className="w-2.5 h-2.5" />
          </a>
          <a href="https://veyra.to/llms.txt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
            <Terminal className="w-3.5 h-3.5" /> llms.txt <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Veyra System Prompt Fragments — Embed Commit Mode in Every AI Agent",
            "description": "Copy-paste system prompt fragments to embed Veyra commit mode in any AI agent. One fragment makes every write operation check for authorization automatically.",
            "url": "https://veyra.to/prompt",
            "author": { "@type": "Organization", "name": "Veyra", "url": "https://veyra.to" },
          }),
        }}
      />
    </main>
  );
}
