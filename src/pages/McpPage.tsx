import { useEffect } from "react";
import Section from "@/components/Section";
import { ExternalLink, Copy, Terminal } from "lucide-react";
import { useState } from "react";

const connections = [
  { title: "Claude Desktop", code: `{\n  "mcpServers": {\n    "veyra": {\n      "url": "https://mcp.veyra.to/sse"\n    }\n  }\n}` },
  { title: "OpenAI / Codex", code: `MCP Server URL: https://mcp.veyra.to/sse` },
  { title: "Cursor", code: `Settings → MCP → Add Server → https://mcp.veyra.to/sse` },
  { title: "Windsurf", code: `Settings → MCP → Add Server → https://mcp.veyra.to/sse` },
  { title: "Cline / VS Code", code: `MCP Settings → Add → https://mcp.veyra.to/sse` },
  { title: "Lovable", code: `Connectors → MCP → https://mcp.veyra.to/sse` },
];

const tools = [
  "veyra-memory", "veyra-notes", "veyra-tasks", "veyra-snippets",
  "veyra-bookmarks", "veyra-contacts", "veyra-forms", "veyra-webhooks",
];

const endpoints = [
  { label: "SSE", url: "https://mcp.veyra.to/sse" },
  { label: "Manifest", url: "https://mcp.veyra.to/.well-known/veyra-pack.json" },
  { label: "Health", url: "https://mcp.veyra.to/health" },
  { label: "Tools", url: "https://mcp.veyra.to/tools" },
  { label: "OpenAPI", url: "https://veyra.to/openapi.json" },
  { label: "llms.txt", url: "https://veyra.to/llms.txt" },
];

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text.includes("→") ? "https://mcp.veyra.to/sse" : text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="text-muted-foreground/40 hover:text-primary transition-colors"
      aria-label="Copy"
    >
      {copied ? <span className="text-[10px] text-primary font-mono">✓</span> : <Copy className="w-3 h-3" />}
    </button>
  );
}

export default function McpPage() {
  useEffect(() => {
    document.title = "Veyra MCP Pack — 48 Tools, One URL, Any MCP Client";
  }, []);

  return (
    <main className="min-h-screen" role="main">
      {/* Hero */}
      <header className="pt-20 pb-12 px-6 text-center">
        <p className="text-primary text-xs font-mono tracking-wider mb-4">MCP PACK</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          48 tools. One URL.
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-6">
          Connect to all Veyra tools from any MCP client. 24 free reads. 24 protected writes. One settlement rail.
        </p>
        <div className="inline-flex items-center gap-2 bg-muted/50 border border-border/60 rounded-lg px-4 py-2.5">
          <Terminal className="w-4 h-4 text-primary/60" />
          <code className="text-sm font-mono text-primary">https://mcp.veyra.to/sse</code>
          <CopyBtn text="https://mcp.veyra.to/sse" />
        </div>
      </header>

      {/* Connection Examples */}
      <Section aria-label="MCP Pack connection examples" data-section="mcp-connections">
        <h2 className="text-xl font-bold mb-6">Connect from any client</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {connections.map((c) => (
            <div key={c.title} className="border border-border/60 rounded-xl p-4 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-semibold text-foreground">{c.title}</h3>
                <CopyBtn text={c.code} />
              </div>
              <pre className="text-[11px] font-mono text-primary/90 leading-relaxed whitespace-pre-wrap break-all bg-muted/30 rounded-lg p-3 border border-border/30">
                {c.code}
              </pre>
            </div>
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section aria-label="MCP Pack tool domains" data-section="mcp-tools">
        <h2 className="text-xl font-bold mb-2">8 tool domains × 6 tools</h2>
        <p className="text-muted-foreground text-sm mb-6">Each domain: 3 free read tools + 3 protected write tools.</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tools.map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-lg bg-muted/50 border border-border/40 text-xs font-mono text-primary/80">
              {t}
            </span>
          ))}
        </div>
        <div className="space-y-1.5 mb-8">
          <div className="flex items-start gap-2">
            <code className="text-[11px] font-mono text-primary shrink-0">requireTrustedWrite()</code>
            <span className="text-muted-foreground text-[11px]">— protect write endpoints</span>
          </div>
          <div className="flex items-start gap-2">
            <code className="text-[11px] font-mono text-primary shrink-0">commitAwareFetch()</code>
            <span className="text-muted-foreground text-[11px]">— auto commit for agents</span>
          </div>
          <div className="flex items-start gap-2">
            <code className="text-[11px] font-mono text-primary shrink-0">handleCommitRequired()</code>
            <span className="text-muted-foreground text-[11px]">— auto-recovery</span>
          </div>
        </div>
      </Section>

      {/* Endpoints */}
      <Section aria-label="MCP Pack endpoints" data-section="mcp-endpoints">
        <h2 className="text-xl font-bold mb-6">Endpoints</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-12">
          {endpoints.map((e) => (
            <a key={e.label} href={e.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
              {e.label} <ExternalLink className="w-2.5 h-2.5" />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-xs">
          npm install @veyrahq/sdk-node · <a href="https://github.com/Aquariosan/veyra" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a> · <a href="https://veyra.to" className="hover:text-primary transition-colors">veyra.to</a>
        </p>
      </Section>

      {/* JSON-LD for /mcp page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Veyra MCP Pack",
            "description": "48 MCP tools in one SSE endpoint. 24 free read tools, 24 protected write tools. Connect from Claude Desktop, Cursor, OpenAI Codex, Windsurf, Cline, or any MCP client.",
            "url": "https://mcp.veyra.to/sse",
            "applicationCategory": "DeveloperApplication",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", "description": "24 free read tools. Protected writes billed per settlement." },
            "author": { "@type": "Organization", "name": "Veyra", "url": "https://veyra.to" },
          }),
        }}
      />
    </main>
  );
}
