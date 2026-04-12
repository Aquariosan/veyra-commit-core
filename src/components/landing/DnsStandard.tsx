import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

const layers = [
  {
    num: "1",
    layer: "DNS",
    mechanism: "_veyra.domain.com TXT",
    when: "Before any HTTP connection",
    detail: "Globally cached. Zero cost. Like SPF for email.",
  },
  {
    num: "2",
    layer: "HTTP",
    mechanism: "X-Veyra-Commit header",
    when: "On every API response",
    detail: "Piggybacks on existing traffic. Zero extra requests.",
  },
  {
    num: "3",
    layer: "Application",
    mechanism: "/.well-known/veyra.json",
    when: "Explicit discovery",
    detail: "Domain-level policy file. Single GET request.",
  },
  {
    num: "4",
    layer: "Error",
    mechanism: "VeyraCommitRequired",
    when: "On write rejection",
    detail: "Reactive recovery. Agent retries automatically.",
  },
];

export default function DnsStandard() {
  return (
    <Section>
      <p className="section-label">THE DEEPEST LAYER</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Commit mode at the DNS layer. Before any HTTP request is made.
      </h2>
      <p className="text-lg text-muted-foreground mb-8">
        Like <span className="text-foreground font-mono text-base">SPF</span> and{" "}
        <span className="text-foreground font-mono text-base">DMARC</span> made email authentication universal with DNS TXT records,{" "}
        <span className="text-foreground font-mono text-base">_veyra</span> makes commit mode discoverable at the most fundamental layer of the internet.
      </p>

      <CodeBlock
        label="DNS TXT Record"
        code={`_veyra.salesforce.com  TXT  "v=veyra1; commit=required; authorize=https://api.veyra.dev/v1/authorize-action; verify=https://api.veyra.dev/v1/verify-token; class=B"`}
      />

      <p className="mt-4 text-muted-foreground text-sm">
        30 seconds to add. Propagates to every DNS resolver on Earth within hours. Cached globally. Costs nothing.
      </p>

      <CodeBlock
        label="Agent SDK — 1 line"
        code={`const policy = await veyra.checkDNS('salesforce.com')
// → { commit: "required", class: "B", authorize: "..." }`}
      />

      <div className="mt-10">
        <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-wider">
          Four layers. One protocol. Inescapable.
        </p>
        <div className="space-y-3">
          {layers.map((l) => (
            <div
              key={l.num}
              className="border border-border rounded-lg p-4 bg-card/50 flex flex-col md:flex-row md:items-center gap-3"
            >
              <div className="flex items-center gap-3 md:w-1/3">
                <span className="text-primary font-mono text-xs font-bold">{l.num}</span>
                <span className="font-bold text-sm">{l.layer}</span>
                <span className="font-mono text-xs text-muted-foreground">{l.mechanism}</span>
              </div>
              <div className="md:w-1/3 text-xs text-muted-foreground">{l.when}</div>
              <div className="md:w-1/3 text-xs text-foreground/80">{l.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 px-5 py-5 border border-primary/30 rounded-lg bg-primary/5 text-sm leading-relaxed">
        <p className="text-foreground font-medium text-center">
          SPF has over 5 billion DNS lookups per day. It started with one TXT record.
        </p>
        <p className="text-muted-foreground mt-3 text-xs text-center">
          An agent resolves DNS before it opens a connection. By the time it reaches the API, it already knows the commit path. It doesn't discover Veyra — it assumes Veyra.
        </p>
      </div>

      <p className="mt-6 text-center text-muted-foreground text-sm italic">
        You can ignore a header. You can skip a file. You can't skip DNS. It's the first thing every connection checks.
      </p>
    </Section>
  );
}
