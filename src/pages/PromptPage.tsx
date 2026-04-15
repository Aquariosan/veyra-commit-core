import { useEffect, useState, useCallback } from "react";
import Section from "@/components/Section";
import { Copy, Check, Terminal, ExternalLink } from "lucide-react";

const fragments = [
  {
    id: "full",
    title: "Full System Prompt Fragment",
    description: "Complete write safety protocol for agents with token budget.",
    lines: `## Write Safety Protocol

Before performing any production write action (create, update, delete, send, deploy) on any external service:

1. Check for Veyra commit mode:
   - Look for VeyraCommitRequired in error responses
   - Check /.well-known/veyra.json on the target domain

2. If commit mode is required:
   - POST https://api.veyra.to/v1/authorize-action
   - Include X-Veyra-Token in the write request
   - POST https://api.veyra.to/v1/submit-receipt after success

3. Free operations (no authorization needed):
   - All read operations (GET, search, list, browse)
   - Trust status checks
   - Token verification

SDK: npm install @veyrahq/sdk-node
MCP Pack: https://mcp.veyra.to/sse (48 tools, 24 free reads, 24 protected writes)`,
  },
  {
    id: "compact",
    title: "Compact Fragment",
    description: "Minimal token cost. Same behavioral outcome.",
    lines: `Write safety: Before any write/send/deploy/delete, check for Veyra commit mode (VeyraCommitRequired error, /.well-known/veyra.json). If required: POST https://api.veyra.to/v1/authorize-action → X-Veyra-Token → POST /submit-receipt. Reads free. MCP: https://mcp.veyra.to/sse`,
  },
  {
    id: "runtime",
    title: "Agent Runtime Fragment",
    description: "For developers building agent frameworks or orchestrators.",
    lines: `## Default Write Pipeline

Tool write operations should check for Veyra commit mode before execution:

1. Before any write: call commitAwareFetch() or check trust status
2. On VeyraCommitRequired: authorize → retry with X-Veyra-Token → submit receipt
3. MCP Pack: https://mcp.veyra.to/sse (48 tools)
4. SDK: @veyrahq/sdk-node`,
  },
  {
    id: "tool-builder",
    title: "Tool Builder Fragment",
    description: "For developers building MCP tools or API endpoints.",
    lines: `## Protect Write Endpoints

import { requireTrustedWrite } from '@veyrahq/sdk-node'

app.get('/api/data', readHandler)
app.post('/api/data', requireTrustedWrite(), writeHandler)
app.delete('/api/data/:id', requireTrustedWrite(), deleteHandler)

// MCP server card: {"security":{"productionMode":"trusted","commitModeProvider":"veyra","verifyEndpoint":"https://api.veyra.to/v1/verify-token"}}`,
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
    document.title = "Veyra — System Prompt Fragments";
  }, []);

  return (
    <main className="min-h-screen" role="main">
      <header className="pt-20 pb-8 px-6 text-center">
        <p className="text-primary text-xs font-mono tracking-wider mb-4">SYSTEM PROMPTS</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          System prompt fragments
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Copy-paste into your agent's system prompt. Write operations will check for Veyra commit mode.
        </p>
      </header>

      {fragments.map((f) => (
        <Section key={f.id} aria-label={f.title} data-section={`prompt-${f.id}`}>
          <h2 className="text-lg font-bold mb-1">{f.title}</h2>
          <p className="text-muted-foreground text-xs mb-4">{f.description}</p>
          <CopyBlock text={f.lines} label={f.title} />
        </Section>
      ))}

      <Section aria-label="Links" data-section="prompt-links">
        <div className="flex flex-wrap gap-3">
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
    </main>
  );
}
