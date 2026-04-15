import Section from "@/components/Section";
import { ExternalLink, Copy, Server, Zap, Shield, Terminal } from "lucide-react";
import { useState } from "react";

const facts = [
  { value: "48", label: "tools", icon: Server },
  { value: "24", label: "free reads", icon: Zap },
  { value: "24", label: "protected writes", icon: Shield },
  { value: "1", label: "SSE endpoint", icon: Terminal },
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
  {
    title: "Windsurf",
    code: `Settings → MCP → Add Server → https://mcp.veyra.to/sse`,
  },
  {
    title: "Cline / VS Code",
    code: `MCP Settings → Add → https://mcp.veyra.to/sse`,
  },
  {
    title: "Any MCP Client",
    code: `https://mcp.veyra.to/sse`,
  },
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

export default function McpPack() {
  return (
    <Section aria-label="Veyra MCP Pack — 48 tools, one SSE endpoint for any MCP client" data-section="mcp-pack">
      <p className="section-label">MCP PACK</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-1">Veyra MCP Pack</h2>
      <p className="text-muted-foreground text-sm mb-8">All tools. One URL. Any client.</p>

      {/* Fact grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {facts.map((f) => (
          <div key={f.label} className="border border-border/60 rounded-xl p-4 bg-card/50 backdrop-blur-sm text-center group hover:border-primary/40 transition-colors">
            <f.icon className="w-4 h-4 text-primary/60 mx-auto mb-2 group-hover:text-primary transition-colors" />
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
      <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">Connect from any client</p>
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

      {/* Tool domains */}
      <div className="border border-border/40 rounded-xl p-4 bg-card/30 mb-8">
        <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">8 tool domains × 6 tools each</p>
        <div className="flex flex-wrap gap-2">
          {["memory", "notes", "tasks", "snippets", "bookmarks", "contacts", "forms", "webhooks"].map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-md bg-muted/50 border border-border/40 text-[11px] font-mono text-primary/80">
              veyra-{t}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground text-[11px] mt-3">Each domain: 3 free read tools + 3 protected write tools.</p>
      </div>

      {/* Integration patterns */}
      <div className="border border-border/40 rounded-xl p-4 bg-card/30 mb-8">
        <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">Integration patterns</p>
        <div className="space-y-1.5">
          <div className="flex items-start gap-2">
            <code className="text-[11px] font-mono text-primary shrink-0">requireTrustedWrite()</code>
            <span className="text-muted-foreground text-[11px]">— protect write endpoints</span>
          </div>
          <div className="flex items-start gap-2">
            <code className="text-[11px] font-mono text-primary shrink-0">commitAwareFetch()</code>
            <span className="text-muted-foreground text-[11px]">— auto commit mode for agents</span>
          </div>
          <div className="flex items-start gap-2">
            <code className="text-[11px] font-mono text-primary shrink-0">handleCommitRequired()</code>
            <span className="text-muted-foreground text-[11px]">— auto-recovery from VeyraCommitRequired</span>
          </div>
        </div>
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
