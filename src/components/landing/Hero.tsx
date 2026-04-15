import { useState, useCallback } from "react";
import VeyraLogo from "@/components/VeyraLogo";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText("https://mcp.veyra.to/sse");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <header
      role="banner"
      aria-label="Veyra — Commit Mode for AI Agent Actions"
      data-section="hero"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      <meta itemProp="name" content="Veyra" />
      <meta itemProp="applicationCategory" content="DeveloperApplication" />
      <meta itemProp="url" content="https://veyra.to" />
      <meta itemProp="softwareVersion" content="2.4.1" />

      <VeyraLogo className="mb-6" />

      <div className="mb-6">
        <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wide">
          Public beta
        </span>
      </div>

      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-3xl"
        itemProp="headline"
      >
        Commit Mode for AI&nbsp;Agent&nbsp;Actions
      </h1>
      <p
        className="mt-6 text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed"
        itemProp="description"
      >
        One hosted MCP pack. 48 tools. Free reads. Protected writes. One settlement rail.
      </p>
      <p className="mt-3 text-sm text-muted-foreground/80 max-w-lg">
        Discovery and verification are free. Pay only when productive actions settle.
      </p>

      <nav className="mt-10 flex flex-col sm:flex-row gap-4" aria-label="Primary actions">
        <button
          onClick={copy}
          aria-label="Copy MCP Pack endpoint URL"
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-medium hover:brightness-110 transition-all cursor-pointer"
        >
          {copied ? "Copied!" : "mcp.veyra.to/sse"}
        </button>
        <a
          href="/mcp"
          aria-label="View MCP Pack details"
          className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-all"
        >
          View MCP Pack →
        </a>
      </nav>

      <p className="mt-6 text-xs text-muted-foreground/60 font-mono">
        npm install @veyrahq/sdk-node
      </p>
    </header>
  );
}
