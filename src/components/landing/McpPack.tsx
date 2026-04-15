import Section from "@/components/Section";
import { ExternalLink, Copy } from "lucide-react";
import { useState } from "react";

const facts = [
  { value: "48", label: "tools" },
  { value: "24", label: "free reads" },
  { value: "24", label: "protected writes" },
  { value: "1", label: "SSE endpoint" },
];

const links = [
  { label: "SSE", url: "https://mcp.veyra.to/sse" },
  { label: "Manifest", url: "https://mcp.veyra.to/.well-known/veyra-pack.json" },
  { label: "Health", url: "https://mcp.veyra.to/health" },
  { label: "Tools", url: "https://mcp.veyra.to/tools" },
];

const connections = [
  {
    title: "Claude Desktop",
    code: `{
  "mcpServers": {
    "veyra": {
      "url": "https://mcp.veyra.to/sse"
    }
  }
}`,
  },
  {
    title: "OpenAI / Codex",
    code: `MCP Server URL: https://mcp.veyra.to/sse`,
  },
  {
    title: "Cursor",
    code: `Settings → MCP → Add Server → https://mcp.veyra.to/sse`,
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="text-muted-foreground/40 hover:text-primary transition-colors"
      aria-label="Copy"
    >
      {copied ? <span className="text-[10px] text-primary">✓</span> : <Copy className="w-3 h-3" />}
    </button>
  );
}

export default function McpPack() {
  return (
    <Section aria-label="Veyra MCP Pack — all tools, one URL" data-section="mcp-pack">
      <p className="section-label">MCP PACK</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-1">Veyra MCP Pack</h2>
      <p className="text-muted-foreground text-sm mb-8">All tools. One URL.</p>

      {/* Fact grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {facts.map((f) => (
          <div key={f.label} className="border border-border/60 rounded-xl p-4 bg-card/50 backdrop-blur-sm text-center">
            <p className="text-2xl font-bold font-mono text-primary">{f.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{f.label}</p>
          </div>
        ))}
      </div>

      <p className="text-foreground/90 text-sm mb-1">
        Free reads stay open. State-changing and consequential writes run through{" "}
        <span className="text-primary">Veyra commit mode</span>.
      </p>
      <p className="text-muted-foreground text-xs mb-8">
        Designed for agents, hosts, gateways, runtimes, and builders who want one MCP endpoint instead of many separate tool installs.
      </p>

      {/* Connection examples */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {connections.map((c) => (
          <div key={c.title} className="border border-border/60 rounded-xl p-4 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-foreground">{c.title}</h3>
              <CopyButton text={c.code} />
            </div>
            <pre className="text-[11px] font-mono text-primary/90 leading-relaxed whitespace-pre-wrap break-all bg-muted/30 rounded-lg p-3 border border-border/30">
              {c.code}
            </pre>
          </div>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            {l.label}
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        ))}
      </div>
    </Section>
  );
}
