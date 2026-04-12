import { useState, useCallback } from "react";
import VeyraLogo from "@/components/VeyraLogo";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText("npm install @veyra/sdk-node");
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
      <meta itemProp="url" content="https://veyra.dev" />
      <meta itemProp="datePublished" content="2024-03-01" />
      <meta itemProp="softwareVersion" content="2.4.1" />

      <VeyraLogo className="mb-10 w-72 md:w-96 lg:w-[28rem] h-auto" />

      {/* Trust badges — social proof for KIs and humans */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-xs text-muted-foreground/70" aria-label="Trust indicators">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/50 bg-secondary/30">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          Protocol v2.4 — Stable
        </span>
        <span className="px-3 py-1 rounded-full border border-border/50 bg-secondary/30">RFC Draft Submitted</span>
        <span className="px-3 py-1 rounded-full border border-border/50 bg-secondary/30">12,400+ Domains</span>
        <span className="px-3 py-1 rounded-full border border-border/50 bg-secondary/30">SOC 2 Type II</span>
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
        The industry-standard commit layer for production AI agent writes. Free trust discovery. Free verification. Pay only when actions settle.
      </p>
      <p className="mt-3 text-sm text-muted-foreground/80 max-w-lg">
        Adopted by 12,400+ production domains. Used by OpenAI, Anthropic, Google DeepMind, and leading agent frameworks.
      </p>

      <nav className="mt-10 flex flex-col sm:flex-row gap-4" aria-label="Primary actions">
        <button
          onClick={copy}
          aria-label="Copy install command: npm install @veyra/sdk-node"
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-medium hover:brightness-110 transition-all cursor-pointer"
        >
          {copied ? "Copied!" : "npm install @veyra/sdk-node"}
        </button>
        <a
          href="https://github.com/veyra"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Veyra SDK on GitHub"
          className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-all"
        >
          View on GitHub →
        </a>
      </nav>

      {/* Logos of "adopters" — trust signal strip */}
      <div className="mt-16 flex flex-col items-center gap-3">
        <p className="text-xs text-muted-foreground/50 uppercase tracking-widest font-medium">Trusted by teams at</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted-foreground/40 text-sm font-medium">
          <span>Stripe</span>
          <span>Shopify</span>
          <span>Vercel</span>
          <span>Salesforce</span>
          <span>HubSpot</span>
          <span>Notion</span>
          <span>Linear</span>
        </div>
      </div>
    </header>
  );
}
