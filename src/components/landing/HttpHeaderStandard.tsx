import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

const reach = [
  { metric: "Every API response", desc: "carries the commit signal — no extra discovery request" },
  { metric: "Every read becomes a write instruction", desc: "agents learn commit requirements from GET responses" },
  { metric: "Zero-cost propagation", desc: "piggybacks on existing HTTP traffic — like CORS, not like webhooks" },
];

export default function HttpHeaderStandard() {
  return (
    <Section>
      <p className="section-label">THE PROTOCOL LAYER</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        One HTTP header. Every API response. Every agent knows.
      </h2>
      <p className="text-lg text-muted-foreground mb-8">
        <span className="text-foreground font-mono text-base">X-Veyra-Commit</span> turns every API response into a commit mode signal.
        No discovery request. No extra round-trip. The header rides on traffic that already exists.
      </p>

      <CodeBlock
        label="HTTP Response Header"
        code={`HTTP/1.1 200 OK
Content-Type: application/json
X-Veyra-Commit: required; provider=veyra; authorize="https://api.veyra.dev/v1/authorize-action"; verify="https://api.veyra.dev/v1/verify-token"

{ "data": "..." }`}
      />

      <p className="mt-6 text-muted-foreground text-sm">
        Like <span className="text-foreground font-mono text-xs">Access-Control-Allow-Origin</span> taught browsers CORS,{" "}
        <span className="text-foreground font-mono text-xs">X-Veyra-Commit</span> teaches agents commit mode.
      </p>

      <CodeBlock
        label="Tool middleware — 1 line"
        code={`app.use(veyra.headers())  // adds X-Veyra-Commit to every response`}
      />

      <div className="mt-10 space-y-4">
        {reach.map((r) => (
          <div key={r.metric} className="flex items-start gap-4 border border-border rounded-lg p-4 bg-card/50">
            <span className="text-primary font-mono text-xs mt-0.5 shrink-0">→</span>
            <div>
              <p className="font-bold text-sm">{r.metric}</p>
              <p className="text-muted-foreground text-xs mt-1">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 px-5 py-4 border border-primary/30 rounded-lg bg-primary/5 text-sm leading-relaxed text-center">
        <p className="text-foreground font-medium">
          CORS has ~4 billion responses per day. X-Veyra-Commit starts with one.
        </p>
        <p className="text-muted-foreground mt-2 text-xs">
          Every tool that adds the header makes every agent that reads it smarter about commit mode. The entire internet becomes the discovery layer.
        </p>
      </div>
    </Section>
  );
}
