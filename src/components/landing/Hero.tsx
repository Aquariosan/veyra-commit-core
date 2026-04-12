import { useState, useCallback } from "react";
import veyraLogo from "@/assets/veyra-logo.png";

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

      <img
        src={veyraLogo}
        alt="Veyra Logo"
        width={240}
        height={240}
        className="mb-8 w-48 md:w-60 h-auto"
        itemProp="image"
      />

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
        The commit layer for production AI agent writes. Free trust discovery. Free verification. Pay only when actions settle.
      </p>
      <p className="mt-3 text-sm text-muted-foreground/80 max-w-lg">
        Without Veyra, it's just an API call. With Veyra, it's a legitimate production action.
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
    </header>
  );
}
