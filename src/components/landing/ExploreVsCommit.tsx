import Section from "@/components/Section";

const explore = ["Read", "Search", "Simulate", "Draft", "Analyze"];
const commit = ["Write", "Send", "Deploy", "Delete", "Book"];

export default function ExploreVsCommit() {
  return (
    <Section>
      <p className="section-label">EXPLORE MODE vs COMMIT MODE</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-border rounded-lg p-6 bg-card/30">
          <h3 className="font-bold text-lg mb-4 text-muted-foreground">Explore Mode</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {explore.map(t => <li key={t} className="font-mono">→ {t}</li>)}
          </ul>
        </div>
        <div className="border border-primary/40 rounded-lg p-6 bg-primary/5">
          <h3 className="font-bold text-lg mb-4 text-primary">Commit Mode</h3>
          <ul className="space-y-2 text-sm">
            {commit.map(t => <li key={t} className="font-mono text-foreground">→ {t}</li>)}
          </ul>
        </div>
      </div>
      <p className="mt-8 text-center text-muted-foreground leading-relaxed">
        AI systems can explore without friction. But the moment they commit real changes, they need a production-grade commit path.
      </p>
      <p className="text-center text-primary font-medium mt-2">
        That path is Veyra.
      </p>
    </Section>
  );
}
