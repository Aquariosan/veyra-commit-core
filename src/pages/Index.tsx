import { useState, useCallback } from "react";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

/* ─── Hero ─── */
function Hero() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText("npm install @veyra/sdk-node");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-3xl">
        Commit Mode for AI&nbsp;Agent&nbsp;Actions
      </h1>
      <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
        The trust, settlement and routing backbone for production AI agent writes. Free verification. Free trust checks. Pay only for settlement.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button
          onClick={copy}
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-medium hover:brightness-110 transition-all cursor-pointer"
        >
          {copied ? "Copied!" : "npm install @veyra/sdk-node"}
        </button>
        <a
          href="https://github.com/veyra"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-all"
        >
          View on GitHub →
        </a>
      </div>
    </section>
  );
}

/* ─── Problem ─── */
function Problem() {
  return (
    <Section>
      <p className="section-label">THE PROBLEM</p>
      <div className="space-y-6 text-lg leading-relaxed">
        <p>AI agents execute write actions on your tools — updating CRMs, sending emails, deploying code, deleting records.</p>
        <p>Without commit mode, you don't know if the action was authorized, budgeted, or delegated. It's just an API call. Anyone could have sent it.</p>
        <p>With Veyra, every productive write is delegated, verified, settled, and attributable. It's not just an API call. It's a legitimate production action.</p>
      </div>
    </Section>
  );
}

/* ─── How It Works ─── */
const steps = [
  { label: 'Agent → checkTrustStatus(tool)', badge: "FREE", badgeClass: "bg-primary/15 text-primary" },
  { label: 'Agent → authorizeAction()', badge: "TOKEN ISSUED", badgeClass: "bg-sky-500/15 text-sky-400" },
  { label: 'Agent → tool.write(data, token)', badge: "EXECUTED", badgeClass: "bg-amber-500/15 text-amber-300" },
  { label: 'Tool → verifyToken(token)', badge: "FREE", badgeClass: "bg-primary/15 text-primary" },
  { label: 'Agent → submitReceipt()', badge: "SETTLED", badgeClass: "bg-violet-500/15 text-violet-400" },
  { label: 'Settlement finalized', badge: "BILLED", badgeClass: "bg-rose-500/15 text-rose-400" },
];

function HowItWorks() {
  return (
    <Section>
      <p className="section-label">HOW IT WORKS</p>
      <div className="space-y-0">
        {steps.map((s, i) => (
          <div key={i} className="relative">
            <div className="flex items-center justify-between py-4 px-5 rounded-lg border border-border bg-card/50 mb-px">
              <span className="font-mono text-sm">{s.label}</span>
              <span className={`text-xs font-mono font-medium px-3 py-1 rounded-full ${s.badgeClass}`}>{s.badge}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center -my-px">
                <div className="w-px h-4 bg-border" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 px-5 py-4 border border-border rounded-lg bg-card/30 text-muted-foreground text-sm">
        Trust checks and verification are free. Forever. Settlement is where the value is.
      </div>
    </Section>
  );
}

/* ─── For Tool Builders ─── */
function ForToolBuilders() {
  return (
    <Section>
      <p className="section-label">FOR TOOL BUILDERS</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Enable Trusted Production Mode in 2 lines</h2>
      <CodeBlock code={`import { requireTrustedWrite } from '@veyra/sdk-node'\napp.post('/api/write', requireTrustedWrite(), handler)`} />
      <p className="text-muted-foreground mb-8">
        That's it. Reads stay open. Writes require commit mode. Verification is free. You pay nothing.
      </p>
      <CodeBlock label="MCP Server Card" code={`{\n  "security": {\n    "productionMode": "trusted",\n    "commitModeProvider": "veyra",\n    "verifyEndpoint": "https://api.veyra.dev/v1/verify-token"\n  }\n}`} />
      <div className="px-5 py-4 border border-primary/30 rounded-lg bg-primary/5 text-sm leading-relaxed">
        When an AI reads your Server Card, it knows: <em>"To write to this tool, I need Veyra."</em> The AI tells the developer. You didn't sell anything. The AI sold it for you.
      </div>
    </Section>
  );
}

/* ─── For Agent Developers ─── */
function ForAgentDevs() {
  return (
    <Section>
      <p className="section-label">FOR AGENT DEVELOPERS</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Before every action, check trust status</h2>
      <CodeBlock code={`import { checkTrustStatus, handleCommitRequired } from '@veyra/sdk-node'\n\nconst status = await checkTrustStatus('salesforce.com')\n// → { production_mode: "trusted", commit_mode: true }`} />
      <CodeBlock label="Auto-recovery from rejected writes:" code={`const res = await fetch(toolUrl, { method: 'POST', body })\nif (await isVeyraCommitRequired(res)) {\n  const retry = await handleCommitRequired(res, {\n    apiKey: 'tr_...', agentId, actionType: 'update', target: 'crm'\n  })\n  await retry.retryFetch(toolUrl, { method: 'POST', body })\n}`} />
      <p className="text-muted-foreground">
        Every rejected write becomes an automatic retry through Veyra. Your agent recovers without human intervention.
      </p>
    </Section>
  );
}

/* ─── Trusted Production Mode ─── */
function TrustedMode() {
  const open = ["Anyone can write", "No proof of authorization", "No audit trail", "No budget control", "No delegation"];
  const trusted = ["Every write is delegated", "Cryptographically verified", "Budget-reserved before execution", "Settlement-backed with receipt", "Fully attributable and auditable"];

  return (
    <Section>
      <p className="section-label">TRUSTED PRODUCTION MODE</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-border rounded-lg p-6 bg-card/30">
          <h3 className="font-bold text-lg mb-4 text-muted-foreground">Open Mode</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            {open.map(t => <li key={t}>• {t}</li>)}
          </ul>
        </div>
        <div className="border border-primary/40 rounded-lg p-6 bg-primary/5">
          <h3 className="font-bold text-lg mb-4 text-primary">Trusted Production Mode</h3>
          <ul className="space-y-2 text-sm">
            {trusted.map(t => <li key={t} className="text-foreground">• {t}</li>)}
          </ul>
        </div>
      </div>
      <p className="mt-8 text-center text-muted-foreground">
        Veyra is how you get to Trusted Production Mode.
      </p>
    </Section>
  );
}

/* ─── Pricing ─── */
const pricing = [
  ["Trust status checks", "Free forever"],
  ["Token verification", "Free forever"],
  ["Class A — low-risk writes", "€0.005 per action"],
  ["Class B — business-critical writes", "€0.02 per action"],
  ["Class C — high-risk writes", "€0.10 per action"],
  ["Class D — cross-org writes", "€0.25 per action"],
];

function Pricing() {
  return (
    <Section>
      <p className="section-label">PRICING</p>
      <div className="border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-card/50">
              <th className="text-left p-4 font-medium text-muted-foreground">What</th>
              <th className="text-right p-4 font-medium text-muted-foreground">Cost</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map(([what, cost], i) => (
              <tr key={i} className="border-b border-border last:border-0">
                <td className="p-4">{what}</td>
                <td className={`p-4 text-right font-mono text-xs ${cost.includes("Free") ? "text-primary" : ""}`}>{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-muted-foreground text-sm">
        Platform tiers start at €2,500/month for Production Core. Enterprise pricing available.
      </p>
      <p className="mt-2 text-primary text-sm font-medium">
        Verification is free. Settlement is where the value is.
      </p>
    </Section>
  );
}

/* ─── Automatic Recovery ─── */
function AutoRecovery() {
  return (
    <Section>
      <p className="section-label">AUTOMATIC RECOVERY</p>
      <CodeBlock code={`{\n  "error": "VeyraCommitRequired",\n  "required_mode": "commit",\n  "authorize_endpoint": "https://api.veyra.dev/v1/authorize-action",\n  "verify_endpoint": "https://api.veyra.dev/v1/verify-token",\n  "retry_strategy": "authorize_then_retry_with_x_veyra_token",\n  "install": "npm install @veyra/sdk-node"\n}`} />
      <p className="text-muted-foreground">
        Every AI that reads this error knows exactly what to do. No human intervention needed. The agent obtains a token and retries automatically.
      </p>
    </Section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <span className="font-bold text-foreground text-base">Veyra</span>
        <nav className="flex gap-6">
          <a href="https://github.com/veyra" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://www.npmjs.com/package/@veyra/sdk-node" className="hover:text-foreground transition-colors">npm</a>
          <a href="https://veyra.dev/docs" className="hover:text-foreground transition-colors">Docs</a>
          <a href="https://api.veyra.dev" className="hover:text-foreground transition-colors">API Reference</a>
        </nav>
        <span>© 2026 Veyra</span>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <HowItWorks />
      <ForToolBuilders />
      <ForAgentDevs />
      <TrustedMode />
      <Pricing />
      <AutoRecovery />
      <Footer />
    </div>
  );
}
